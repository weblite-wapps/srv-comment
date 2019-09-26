// app
const koa = require('koa')
const app = new koa()
// const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const Router = require('@koa/router')

const routerHandler = require('./router')
const database = require('./database/dbConnector')

database.connect('comments_db')

// app.use(
//   cors({
//     origin: 'https://www.weblite.me:3000',
//   }),
// )
app.use(bodyParser())

const router = new Router()
routerHandler(router)

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(5110, () => console.log('> server successfully started!'))
