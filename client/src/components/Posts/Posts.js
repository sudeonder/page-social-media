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
    <Grid container alignItems="stretch" spacing="4">
      {data.map((post) => (
        <Grid item key={post._id} xs={12} sm={6} md={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
