import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = ({post}) => {
    return (
        <div className='post'>
            <div className='post_content'>
                <strong>{post.id} {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className='post_btns'>
                <MyButton>delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;