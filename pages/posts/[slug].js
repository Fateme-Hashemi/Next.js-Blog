import Head from "next/head";
import PostContent from "./post-content";
import { getFileNames, getPostData } from '../../lib/utils';

function SinglePost(props) {

return(
    <>
    <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
    </Head>
    <PostContent post={props.post} />
    </>
)

}


export function getStaticProps (context) {
    const {params} = context;

    const {slug}= params;
    const postData = getPostData(slug);
    return {
        props: {
            post : postData
        }
    }

}

export function getStaticPaths () {
    const postFilenames = getFileNames();
    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
    return {
        paths: slugs.map((slug) => ({params: {slug: slug}})),
        fallback: false
    } 
}

export default SinglePost;