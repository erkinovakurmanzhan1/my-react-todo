import { useState } from "react";
import PostList from "./components/post-list/PostList";
import './App.css'

const DUMMY_POST = [
  { id: 1, title: "JS", body: "Description 1" },
  { id: 2, title: "Next.js", body: "Description 2" },
  { id: 3, title: "React", body: "Description 3" },
]

function App() {
  const [posts, setPosts] = useState(DUMMY_POST);

  return (
    <div className="App">
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
