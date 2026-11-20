
import PropTypes from 'prop-types';
import { Post } from './Post.jsx';

export function PostList({ posts = [] }) {
    let renderedPosts = [];

    for (let post of posts) {
        renderedPosts.push(
            <Post {...post} key={post._id} />
        );
    }

    return (
        <div>
            {renderedPosts}
        </div>
    );
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape(Post.propTypes)
    ).isRequired,
};
