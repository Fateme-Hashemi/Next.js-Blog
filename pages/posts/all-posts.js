import PostGrid from "./posts-grid"
import classes from './all-posts.module.css'

function AllPostsPage (props) {
    return <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostGrid posts={props.posts} />
    </section>
}

export default AllPostsPage