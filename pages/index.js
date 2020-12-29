import { initializeApollo } from "../apolloClient";
import { gql } from "@apollo/client";
import HomePage from "../components/pages/Home";

export default function Home({ posts, doodle }) {
  return <HomePage posts={posts} doodle={doodle} />;
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

  const doodlesQuery = gql`
    query {
      allDoodle(sort: { publishedAt: DESC }, limit: 1) {
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
  const { data: doodlesData } = await apolloClient.query({
    query: doodlesQuery,
  });

  return {
    props: {
      posts: postsData.allPost,
      doodle: doodlesData.allDoodle[0],
    },
  };
}
