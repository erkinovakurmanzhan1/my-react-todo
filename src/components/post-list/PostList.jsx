import React from 'react';
import PostItem from '../post-item/PostItem';

const PostList = ({posts}) => {
    return (
        <div>
            <h1>List of posts</h1>
            {posts.map(post => (
                <PostItem post={post}/>
            ))}
        </div>
    );
};

export default PostList;