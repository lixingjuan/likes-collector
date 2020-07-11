const Koa = require('koa')
const router = require('koa-router')()
var cors = require('koa2-cors')

const app = new Koa()

const { jianshuArr } = require('./likes')

app.use(cors())

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

console.log(jianshuArr)

router.get('/jianshu', async ctx => {
  ctx.body = jianshuArr
})

app.use(router.routes())

app.listen(10000)
console.log('app started at port 3000...')
