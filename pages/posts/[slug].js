import { initializeApollo } from "../../apolloClient";
import { gql } from "@apollo/client";

export default function Post({ post }) {
  console.log(post);
  return <div>Post</div>;
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const postsQuery = gql`
    query {
      allPost(sort: { publishedAt: DESC }) {
        slug {
          current
        }
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: postsQuery,
  });

  const paths = data.allPost.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();
  const postsQuery = gql`
    query($slug: String) {
      allPost(where: { slug: { current: { eq: $slug } } }) {
        title
        publishedAt
      }
    }
  `;

  const { data } = await apolloClient.query({
    query: postsQuery,
    variables: { slug: params.slug },
  });

  return { props: { post: data.allPost[0] } };
}
