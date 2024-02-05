import Head from "next/head";
import AllPostsPage from "./all-posts";
import { getAllPosts } from "../../lib/utils";


function AllPosts(props) {
    return (
      <>
      <Head>
        <title>All posts</title>
        <meta name='description'
        content='A list of programming posts' />
      </Head>
          <AllPostsPage posts={props.posts} />
      </>
    )}

export function getStaticProps () {
   const allPosts = getAllPosts();

   return {
      props: {
         posts: allPosts
      }
   }
}


export default AllPosts;