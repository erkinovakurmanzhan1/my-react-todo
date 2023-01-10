import React from 'react';
import PostItem from '../post-item/PostItem';

const PostList = ({posts}) => {
    return (
        <div>
            <h1>List of posts</h1>
            {posts.map((post,index) => (
                <PostItem post={post} key={post.id} number={index}/>

            
            ))}
        </div>
    );
};

export default PostList;