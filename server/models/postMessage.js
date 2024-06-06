import mongoose from "mongoose";

// Create a schema for the post
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Create a model for the post
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
