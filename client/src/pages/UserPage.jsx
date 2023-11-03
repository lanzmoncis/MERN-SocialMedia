import { useEffect, useState } from "react";
import { useGetUserPostMutation } from "../redux/post/postApiSlice";
import { useParams } from "react-router-dom";
import { useFollowUnfollow } from "../hooks/useFollowUnfollow";
import Post from "../components/Post";

function UserPage() {
  const [posts, setPosts] = useState([]);
  const [getUserPost] = useGetUserPostMutation();

  let { username } = useParams();
  const { handleFollowUnfollow } = useFollowUnfollow();

  useEffect(() => {
    async function userPosts() {
      const res = await getUserPost({ username }).unwrap();
      console.log(res);
      setPosts([...res]);
    }

    userPosts();
  }, [getUserPost, username]);

  return (
    <div>
      <button onClick={handleFollowUnfollow}>Follow</button>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}

export default UserPage;
