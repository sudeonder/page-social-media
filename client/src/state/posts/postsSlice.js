import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { POST_URL } from "../../api/index";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

// reducers are functions that take the current state and an action,
// and return a new state

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  // fetch data from api
  // return data as payload
  const response = await axios.get(POST_URL);
  return response.data;
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;
