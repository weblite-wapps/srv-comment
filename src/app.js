// app
const koa = require("koa");
const app = new koa();

// cors
const cors = require("@koa/cors");
app.use(
  cors({
    // origin: 'https://www.weblite.me:3000'
  })
);

// bodyParser
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

// db
const database = require("./database/dbConnector");
database.connect("comments_db");

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = error.message;
  }
});

// router
const Router = require("@koa/router");
const routerHandler = require("./router");

const router = new Router();
routerHandler(router);

const port = 3003;
const server = app.listen(port);

module.exports = server;