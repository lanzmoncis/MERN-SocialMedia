import { useLikeUnlikePostMutation } from "../redux/post/postApiSlice";
import Comments from "./Comments";

function Post({ post }) {
  const [likeUnlikePost] = useLikeUnlikePostMutation();

  async function handleLikeAndUnlike(postId) {
    await likeUnlikePost({ postId });
  }

  return (
    <div>
      <h1>{post.postedBy.name}</h1>
      <p>{post.text}</p>
      <button onClick={() => handleLikeAndUnlike(post._id)}>Like</button>
      <Comments postId={post._id} />
    </div>
  );
}

export default Post;
