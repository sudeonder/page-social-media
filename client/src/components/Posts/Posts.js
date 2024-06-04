import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, AppBar, Typography, Box, Grid } from "@mui/material/";

import { fetchPosts } from "../../state/posts/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  return (
    <Box>
      {data ? (
        <Box>
          <Typography>User Data:</Typography>
          <Typography>{JSON.stringify(data, null, 2)}</Typography>
        </Box>
      ) : (
        <Box>No user data found.</Box>
      )}
    </Box>
  );
};

export default Posts;
