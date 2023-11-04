import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUserPostMutation } from "../redux/post/postApiSlice";
import { useGetUserProfileMutation } from "../redux/user/userApiSlice";
import { useFollowUnfollow } from "../hooks/useFollowUnfollow";
import Post from "../components/Post";

function UserPage() {
  const [posts, setPosts] = useState([]);

  let { username } = useParams();
  const [getUserPost] = useGetUserPostMutation();
  const [getUserProfile] = useGetUserProfileMutation();
  const { handleFollowUnfollow } = useFollowUnfollow();

  useEffect(() => {
    async function userPosts() {
      const postsData = await getUserPost({ username }).unwrap();
      setPosts([...postsData]);
    }

    userPosts();
  }, [getUserPost, username, getUserProfile]);

  async function handleGetUser() {
    const profileData = await getUserProfile({ username }).unwrap();
    console.log(profileData);
  }

  return (
    <div>
      <button onClick={handleFollowUnfollow}>Follow</button>
      <button onClick={handleGetUser} className="block display">
        GET USER
      </button>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}

export default UserPage;
