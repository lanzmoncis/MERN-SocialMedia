import { useState, useEffect } from "react";
import { useGetFeedPostMutation } from "../redux/post/postApiSlice";
import CreatePost from "../components/CreatePost";

import Post from "../components/Post";

function Home() {
  const [posts, setPosts] = useState([]);
  const [getFeedPost] = useGetFeedPostMutation();

  useEffect(() => {
    async function feedPosts() {
      const res = await getFeedPost().unwrap();
      setPosts([...res]);
    }
    feedPosts();
  }, [getFeedPost]);

  return (
    <div>
      <CreatePost setPosts={setPosts} posts={posts} />
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}

export default Home;
