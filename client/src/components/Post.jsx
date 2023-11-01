import {
  useLikeUnlikePostMutation,
  useDeletePostMutation,
} from "../redux/post/postApiSlice";
import { Link } from "react-router-dom";
import Comments from "./Comments";

function Post({ post, setPosts, posts }) {
  const [likeUnlikePost] = useLikeUnlikePostMutation();
  const [deletePost] = useDeletePostMutation();

  async function handleLikeAndUnlike(postId) {
    await likeUnlikePost({ postId });
  }

  async function handleDeletePost(postId) {
    console.log(postId);
    await deletePost({ postId });
    const updatedPosts = posts.filter((postsId) => postsId._id !== postId);
    setPosts(updatedPosts);
  }
  return (
    <div>
      <button onClick={() => handleDeletePost(post._id)}>Delete post</button>
      <Link to={`/profile/${post.postedBy.username}`}>
        <h1>{post.postedBy.name}</h1>
      </Link>
      <p>{post.text}</p>
      <button onClick={() => handleLikeAndUnlike(post._id)}>Like</button>
      <Comments postId={post._id} />
    </div>
  );
}

export default Post;
