import AllPostsPage from "./all-posts";
import { getAllPosts } from "../../lib/utils";


function AllPosts(props) {
    return <AllPostsPage posts={props.posts} />

}

export function getStaticProps () {
   const allPosts = getAllPosts();

   return {
      props: {
         posts: allPosts
      }
   }
}


export default AllPosts;