import { useFollowUnfollowMutation } from "../redux/user/userApiSlice";

function useFollowUnfollow() {
  const [followUnfollow] = useFollowUnfollowMutation();

  async function handleFollowUnfollow(id) {
    await followUnfollow({ id });
  }
  return { handleFollowUnfollow };
}

export default useFollowUnfollow;
