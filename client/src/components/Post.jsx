import { useEffect, useState } from "react";
import { useGetUserProfileMutation } from "../redux/user/userApiSlice";

function Post({ postedBy, post }) {
  const [postUser, setPostUser] = useState("");
  const [getUserProfile] = useGetUserProfileMutation();

  useEffect(() => {
    async function userProfile() {
      try {
        const res = await getUserProfile({ postedBy }).unwrap();
        setPostUser(res.name);
      } catch (err) {
        console.log(err.message);
      }
    }
    userProfile();
  }, [getUserProfile, postedBy]);

  return (
    <div>
      <h1>{postUser}</h1>
      <p>{post.text}</p>
    </div>
  );
}

export default Post;
