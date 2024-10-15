const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    groupTitle: {
      type: String,
    },
    members: {
      type: Array,
    },
    lastMessage: {
      type: String,
    },
    lastMessageId: {
      type: String,
    },
    pro_data: {
      type: String,
    },
    pro_img: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", conversationSchema);
