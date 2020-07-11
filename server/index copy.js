// const Koa = require('koa')
// const app = new Koa()

const cheerio = require('cheerio')
const https = require('https')
const fs = require('fs')

// app.listen(10000)

// const { jianshuBaseURL } = require('./urls/index')

https
  .get('https://www.jianshu.com/users/609d9926b39c/liked_notes', res => {
    console.log(res)
    const $ = cheerio.load(res)

    const liArr = $('ul.note-list')
      .children('li')
      .toArray()

    const infoArr = liArr.map(item => {
      const $item = cheerio.load(item)
      // 这种写法就对
      const href = $item('.avatar').attr('href') || ''
      const title = $item('.title').text() || ''
      const infoItem = {
        href,
        title
      }
      return infoItem
      // TODO: 这种写法打印对写入就不对？？为什么？？

      // return {
      //   href: $item('.avatar').attr('href'),
      //   title: $item('.title').text()
      // }
    })

    const targetJSON = JSON.stringify(infoArr)
    fs.writeFileSync('./server/test.json', targetJSON)
    // res.on('data', d => {
    //   const $ = cheerio.load(d)
    //   const liArr = $('ul.note-list')
    //     .children('li')
    //     .toArray()

    //   const infoArr = liArr.map(item => {
    //     const $item = cheerio.load(item)
    //     // 这种写法就对
    //     const href = $item('.avatar').attr('href') || ''
    //     const title = $item('.title').text() || ''
    //     const infoItem = {
    //       href,
    //       title
    //     }
    //     return infoItem
    //     // TODO: 这种写法打印对写入就不对？？为什么？？

    //     // return {
    //     //   href: $item('.avatar').attr('href'),
    //     //   title: $item('.title').text()
    //     // }
    //   })
    //   console.log(Object.prototype.toString.call(infoArr))

    //   const targetJSON = JSON.stringify(infoArr)
    //   console.log(targetJSON)
    //   // await fs.writeFileSync('./server/test.json', targetJSON)
    //   fs.writeFile('./server/test.json', targetJSON, 'utf8', function(error) {
    //     if (error) {
    //       console.log(error)
    //       return false
    //     }
    //     console.log('写入成功')
    //   })
    // })
  })
  .on('error', e => {
    console.error(e)
  })

// let body = []

// fs.readFile('./test.json', (err, data) => {
//   console.log('err', err)
//   console.log('data', data)

//   body = data
// })

// console.log(body)

// app.use(async ctx => {
//   ctx.body = body
// })
