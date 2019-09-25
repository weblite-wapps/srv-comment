// db functions
const {
  createComment,
  getCommentsByContextId
} = require("./database/dbFunctions");

module.exports = router => {
  router.post("/createComment", async ctx => {
    const requestBody = ctx.request.body;
    requestBody.date = requestBody.date || Date.now();

    const doc = await createComment(requestBody);
    ctx.body = doc;
  });

  router.get("/contextComments", async ctx => {
    const { contextId } = ctx.request.query;
    const docs = await getCommentsByContextId(contextId);

    console.log("docs:", docs);
    ctx.body = docs;
  });
};
