import { useEffect, useState } from "react";
import { useGetUserPostMutation } from "../redux/post/postApiSlice";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

function UserPage() {
  const [posts, setPosts] = useState([]);
  const [getUserPost] = useGetUserPostMutation();

  let { username } = useParams();

  useEffect(() => {
    async function userPosts() {
      const res = await getUserPost({ username }).unwrap();
      setPosts([...res]);
    }

    userPosts();
  }, [getUserPost, username]);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}

export default UserPage;
