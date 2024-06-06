import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  AppBar,
  Typography,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material/";
import Masonry from "@mui/lab/Masonry";

import { fetchPosts } from "../../state/posts/postsSlice";
import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  // fetch posts on component mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return loading ? (
    <CircularProgress />
  ) : (
    <Masonry columns={2} spacing={2}>
      {data.map((post) => (
        <Post post={post} />
      ))}
    </Masonry>
  );
};

export default Posts;
