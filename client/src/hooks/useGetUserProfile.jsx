import { useEffect, useState } from "react";
import { useGetUserProfileMutation } from "../redux/user/userApiSlice";
import { useParams } from "react-router-dom";

export function useGetUserProfile() {
  const [user, setUser] = useState(null);
  const [getUserProfile] = useGetUserProfileMutation();
  let username = useParams();

  useEffect(() => {
    async function getUser() {
      const res = await getUserProfile({ username }).unwrap();

      setUser(res);
    }

    getUser();
  }, [getUserProfile, username]);

  return { user };
}
