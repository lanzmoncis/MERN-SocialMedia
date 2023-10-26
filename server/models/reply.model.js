import mongoose from "mongoose";

const replySchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  userProfilePic: {
    type: String,
  },
  username: {
    type: String,
  },
  name: {
    type: String,
  },
});

const Reply = mongoose.model("Reply", replySchema);

export default Reply;
