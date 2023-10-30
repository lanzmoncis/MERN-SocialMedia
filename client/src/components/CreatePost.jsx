import { useState } from "react";
import { useCreatePostMutation } from "../redux/post/postApiSlice";
import { useSelector } from "react-redux";

function CreatePost({ setPosts, posts }) {
  const [text, setText] = useState("");
  const [createPost] = useCreatePostMutation();

  const { userInfo } = useSelector((state) => state.auth);
  const { _id: postedBy } = userInfo;

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await createPost({ postedBy, text }).unwrap();
    setPosts([...posts, res.currPost]);
    setText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
