// module
const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
  contextId: String,
  body: String,
  date: { type: Date, default: Date.now },
  writerId: String,
  wisId: String
});

exports.Comment = mongoose.model("Comment", CommentSchema);
