import { initializeApollo } from "../apolloClient";
import { gql } from "@apollo/client";
import HomePage from "../components/pages/Home";

export default function Home({ posts, drawing }) {
  return <HomePage posts={posts} drawing={drawing} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const postsQuery = gql`
    query {
      allPost(sort: { publishedAt: DESC }, limit: 3) {
        publishedAt
        title
        slug {
          current
        }
      }
    }
  `;

  const drawingsQuery = gql`
    query {
      allDrawing(sort: { publishedAt: DESC }, limit: 1) {
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

  const { data: postsData } = await apolloClient.query({ query: postsQuery });
  const { data: drawingsData } = await apolloClient.query({
    query: drawingsQuery,
  });

  return {
    props: {
      posts: postsData.allPost,
      drawing: drawingsData.allDrawing[0],
    },
  };
}
