import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import Input from "../UI/input/Input";

const PostFrom = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const addNewPost = (e) => {
    e.preventDefault();


    const newPost={
        id:new Date(),
        title,
        body,
    }

    props.onPost(newPost)
    setBody('')
    setTitle('')
  };

  return (
    <div>
      <Input
        onChange={titleChangeHandler}
        value={title}
        type="text"
        placeholder="Name of posts"
      />
      <Input
        onChange={bodyChangeHandler}
        value={body}
        type="text"
        placeholder="Description of posts"
      />
      <MyButton onClick={addNewPost}>ADD POST</MyButton>
    </div>
  );
};

export default PostFrom;
