import { initializeApollo } from "../../apolloClient";
import { gql } from "@apollo/client";

export default function Drawing({ drawing }) {
  console.log(drawing);
  return <div>{drawing.title}</div>;
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const drawingsQuery = gql`
    query {
      allDrawing(sort: { publishedAt: DESC }) {
        title
        medium
        publishedAt
        slug {
          current
        }
        image {
          asset {
            url
          }
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: drawingsQuery,
  });

  const paths = data.allDrawing.map((drawing) => ({
    params: { slug: drawing.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();
  const drawingsQuery = gql`
    query($slug: String) {
      allDrawing(where: { slug: { current: { eq: $slug } } }) {
        title
        medium
        publishedAt
        image {
          asset {
            url
          }
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: drawingsQuery,
    variables: { slug: params.slug },
  });

  return { props: { drawing: data.allDrawing[0] } };
}
