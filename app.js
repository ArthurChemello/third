const express = require('express')
const app = express()
const port = 3020

app.get('/', (req, res) => {
  res.send('Hello Worlda!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

