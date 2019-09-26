// db functions
const {
  createComment,
  getCommentsByContextId,
  getCountByContextId,
} = require('./database/dbFunctions')

module.exports = router => {
  router.post('/createComment', async ctx => {
    const comment = ctx.request.body
    if (!comment.wisId || comment.contextId == null)
      return ctx.status = 400

    comment.date = comment.date || Date.now()

    ctx.body = await createComment(comment)
  })

  router.get('/contextComments', async ctx => {
    const { wisId, contextId } = ctx.request.query
    ctx.body = await getCommentsByContextId(wisId, contextId)
  })

  router.get('/countComments', async ctx => {
    const { wisId, contextId } = ctx.request.query
    ctx.body = await getCountByContextId(wisId, contextId)
  })
}
