import { apiSlice } from "../apiSlice";
const POSTS_URL = "/api/posts";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        url: `${POSTS_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    likeUnlikePost: builder.mutation({
      query: ({ postId }) => ({
        url: `${POSTS_URL}/like/${postId}`,
        method: "PUT",
      }),
    }),
    replyToPost: builder.mutation({
      query: ({ postId, ...rest }) => {
        return {
          url: `${POSTS_URL}/reply/${postId}`,
          method: "PUT",
          body: rest,
        };
      },
    }),
    deletePost: builder.mutation({
      query: () => ({
        url: `${POSTS_URL}/:id`,
        method: "DELETE",
      }),
    }),
    getUserPost: builder.mutation({
      query: () => ({
        url: `${POSTS_URL}/user/:username`,
        method: "GET",
      }),
    }),
    getFeedPost: builder.mutation({
      query: () => ({
        url: `${POSTS_URL}/feed`,
        method: "GET",
      }),
    }),
    getPost: builder.mutation({
      query: () => ({
        url: `${POSTS_URL}/:id`,
        method: "GET",
      }),
    }),
    getPostReply: builder.mutation({
      query: ({ postId }) => ({
        url: `${POSTS_URL}/reply/${postId}`,
        method: "GET",
      }),
    }),
    deletePostReply: builder.mutation({
      query: ({ replyId }) => ({
        url: `${POSTS_URL}/reply/${replyId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreatePostMutation,
  useLikeUnlikePostMutation,
  useReplyToPostMutation,
  useDeletePostMutation,
  useGetUserPostMutation,
  useGetFeedPostMutation,
  useGetPostMutation,
  useGetPostReplyMutation,
  useDeletePostReplyMutation,
} = postApiSlice;
