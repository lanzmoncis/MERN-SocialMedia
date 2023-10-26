import { useState } from "react";
import {
  useLikeUnlikePostMutation,
  useReplyToPostMutation,
} from "../redux/post/postApiSlice";

function Actions({ postId, comments }) {
  const [reply, setReply] = useState("");
  const [commentList, setCommentList] = useState(comments);
  const [likeUnlikePost] = useLikeUnlikePostMutation();
  const [replyToPost] = useReplyToPostMutation();

  console.log(commentList);

  async function handleLikeAndUnlike() {
    await likeUnlikePost({ postId });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newComment = await replyToPost({ postId, text: reply }).unwrap();
    setCommentList([...comments, newComment.reply]);
    setReply("");
  }

  return (
    <div>
      <button onClick={handleLikeAndUnlike}>Like</button>
      {commentList.map((comment, index) => (
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
