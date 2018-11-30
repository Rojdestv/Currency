const path = require('path')
const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 8080
const app = express()

module.exports = app

  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // sends index.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  require("./api/index")(app);

    app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
    );