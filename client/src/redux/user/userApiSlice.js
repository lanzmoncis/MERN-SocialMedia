import { apiSlice } from "../apiSlice";
const USERS_URL = "api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/update/:id`,
        method: "PUT",
        body: data,
      }),
    }),
    getUserProfile: builder.mutation({
      query: ({ username }) => ({
        url: `${USERS_URL}/profile/${username}`,
        method: "GET",
      }),
    }),
    followUnfollow: builder.mutation({
      query: ({ userId }) => ({
        url: `${USERS_URL}/follow/${userId}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useGetUserProfileMutation,
  useFollowUnfollowMutation,
} = userApiSlice;
