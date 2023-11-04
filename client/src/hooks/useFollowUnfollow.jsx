import { useFollowUnfollowMutation } from "../redux/user/userApiSlice";

export function useFollowUnfollow() {
  const [followUnfollow] = useFollowUnfollowMutation();

  async function handleFollowUnfollow(userId) {
    await followUnfollow({ userId });
  }

  return { handleFollowUnfollow };
}
