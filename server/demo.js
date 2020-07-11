const fs = require('fs')
fs.readFile('./test.json', 'utf8', (err, data) => {
  console.log('err', err)
  console.log('data', data)
})

fs.readlink('./test.json', 'utf8', (err, data) => {
  console.log('err', err)
  console.log('data', data)
})
