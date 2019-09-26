// module
const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
  contextId: String,
  body: String,
  writerId: String,
  wisId: Schema.Types.ObjectId
}, { timestamps: true });

CommentSchema.index({ wisId: 1, contextId: 1, date: -1 })

exports.Comment = mongoose.model("Comment", CommentSchema);
