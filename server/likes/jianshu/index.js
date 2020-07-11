const fs = require('fs')
const https = require('https')
const cheerio = require('cheerio')

const baseURL = 'https://www.jianshu.com'

https.get(`${baseURL}/users/609d9926b39c/liked_notes`, res => {
  let html = ''
  res.on('data', function(data) {
    html += data
  })
  res.on('end', function() {
    fs.writeFileSync('./server/likes/jianshu/test.html', html)
  })
})

const html = fs.readFileSync('./server/likes/jianshu/test.html')
const $ = cheerio.load(html)

const liArr = $('ul.note-list')
  .children('li')
  .toArray()

const infoArr = liArr.map(item => {
  const $item = cheerio.load(item)

  return {
    href: baseURL + $item('.avatar').attr('href'),
    title: $item('.title').text()
  }
})

module.exports = {
  infoArr
}
