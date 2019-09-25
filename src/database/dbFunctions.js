const { Comment } = require("./dbModel");

exports.createComment = ({ contextId, body, date, writerId, wisId }) =>
  Comment.create({
    contextId,
    body,
    date,
    writerId,
    wisId
  });

exports.getCommentsByContextId = contextId =>
  Comment.find({ contextId }).lean();
