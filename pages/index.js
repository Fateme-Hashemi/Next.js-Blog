import Head from "next/head.js";
import FeaturedPosts from "./components/home-page/featured-posts.js";
import Hero from "./components/home-page/hero";
import {getFeaturedPosts} from '../lib/utils.js';


function HomePage(props) {
return(
   <>
   <Head>
      <title>Elahe's Next Blog</title>
      <meta name="description" content="next.js blog about programming" />
   </Head>
   <Hero />
   <FeaturedPosts posts={props.posts} />
   </>
)
}

export function getStaticProps() {
   const featuredPosts = getFeaturedPosts();
   return {
      props: {
         posts: featuredPosts
      },
   }
}

export default HomePage;