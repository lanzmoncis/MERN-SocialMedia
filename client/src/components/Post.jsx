import { useEffect, useState } from "react";
import { useGetUserProfileMutation } from "../redux/user/userApiSlice";

import Actions from "./Actions";

function Post({ postedBy, post }) {
  const [postUser, setPostUser] = useState("");
  const [getUserProfile] = useGetUserProfileMutation();

  useEffect(() => {
    async function userProfile() {
      try {
        const user = await getUserProfile({ postedBy }).unwrap();
        setPostUser(user);
      } catch (err) {
        console.log(err.message);
      }
    }
    userProfile();
  }, [getUserProfile, postedBy]);

  return (
    <div>
      <h1>{postUser.name}</h1>
      <p>{post.text}</p>
      <Actions postId={post._id} comments={post.replies} />
    </div>
  );
}

export default Post;
