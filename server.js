const express = require('express')
const fsp = require('fs-promise')

const app = express()
app.set('port', (process.env.PORT || 3001))
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/data', express.static('./data'))

app.get('/api/books/:userid', (req, res) => {
  const dataDir = './data/books'
  fsp.readdir(dataDir)
  .then((books) => {
    var responseData = []
    var counter = 0
    books.forEach((filename) => {
      if (filename.indexOf(' - ') != -1) {
        var parts = filename.split(' - ')
        responseData.push({
          id: counter++,
          url: `${dataDir}/${filename}`,
          title: parts[0],
          author: parts[1]
        })
      }
    })
    res.json(responseData)
  })
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});