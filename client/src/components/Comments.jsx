import { useEffect, useState } from "react";
import {
  useReplyToPostMutation,
  useGetPostReplyMutation,
  useDeletePostMutation,
} from "../redux/post/postApiSlice";

function Comments({ postId }) {
  const [replyList, setReplyList] = useState([]);
  const [reply, setReply] = useState("");
  const [replyToPost] = useReplyToPostMutation();
  const [getPostReply] = useGetPostReplyMutation();
  const [deletePostReply] = useDeletePostMutation();

  useEffect(() => {
    async function getReply() {
      const res = await getPostReply({ postId }).unwrap();
      setReplyList(res);
    }
    getReply();
  }, [getPostReply, postId]);

  async function handleSubmit(e) {
    e.preventDefault();
    const newReply = await replyToPost({ postId, text: reply }).unwrap();
    console.log(newReply);
    setReplyList([...replyList, newReply.reply]);
    setReply("");
  }

  async function handleDelete(replyId) {
    await deletePostReply({ id: replyId });
  }

  return (
    <div>
      <ul>
        {replyList.map((reply) => {
          return (
            <li key={reply._id}>
              <p>{reply.text}</p>
              <button onClick={() => handleDelete(reply._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button>Submit</button>
      </form>
      ;
    </div>
  );
}

export default Comments;
