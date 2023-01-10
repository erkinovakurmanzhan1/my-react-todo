import { useState } from "react";
import PostList from "./components/post-list/PostList";
import "./App.css";
import PostFrom from "./components/post-form/PostFrom";

const DUMMY_POST = [];

function App() {
  const [posts, setPosts] = useState(DUMMY_POST);

  const addPostHandler = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostFrom onPost={addPostHandler} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
