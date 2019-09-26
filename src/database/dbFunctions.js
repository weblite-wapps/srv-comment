const { Comment } = require('./dbModel')

exports.createComment = ({ contextId, body, writerId, wisId }) =>
  Comment.create({
    contextId,
    body,
    writerId,
    wisId,
  })

exports.getCommentsByContextId = (wisId, contextId) =>
  Comment.find({ wisId, contextId }).sort({ date: -1 }).lean()

exports.getCountByContextId = (wisId, contextId) =>
  Comment.countDocuments({ wisId, contextId })
