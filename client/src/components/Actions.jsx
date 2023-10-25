import { useState } from "react";
import {
  useLikeUnlikePostMutation,
  useReplyToPostMutation,
} from "../redux/post/postApiSlice";

function Actions({ postId, comments }) {
  const [reply, setReply] = useState("");
  const [likeUnlikePost] = useLikeUnlikePostMutation();
  const [replyToPost] = useReplyToPostMutation();

  async function handleLikeAndUnlike() {
    await likeUnlikePost({ postId });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await replyToPost({ postId });
  }

  console.log(postId);
  return (
    <div>
      <button onClick={handleLikeAndUnlike}>Like</button>
      {comments.map((comment, index) => (
        <p key={index}>{comment.text}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Actions;
