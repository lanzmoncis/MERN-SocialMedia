import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUserPostMutation } from "../redux/post/postApiSlice";
import { useGetUserProfileMutation } from "../redux/user/userApiSlice";
import { useFollowUnfollow } from "../hooks/useFollowUnfollow";
// import { useGetUserProfile } from "../hooks/useGetUserProfile";
import Post from "../components/Post";

function UserPage() {
  const [posts, setPosts] = useState([]);

  let { username } = useParams();
  const [getUserPost] = useGetUserPostMutation();
  const [getUserProfile] = useGetUserProfileMutation();
  // const { user } = useGetUserProfile();
  const { handleFollowUnfollow } = useFollowUnfollow();

  useEffect(() => {
    async function userPosts() {
      const postsData = await getUserPost({ username }).unwrap();
      setPosts([...postsData]);
    }

    userPosts();
  }, [getUserPost, username]);

  async function handleGetUserProfile() {
    const res = await getUserProfile({ username }).unwrap();
    console.log(res);
  }

  return (
    <div>
      <button onClick={handleFollowUnfollow}>Follow</button>
      <button onClick={handleGetUserProfile} className="block display">
        GET USER PROFILE
      </button>
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}

export default UserPage;
