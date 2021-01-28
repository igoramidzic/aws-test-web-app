const express = require('express')
const app = express()
const port = 3000

var name = "Igor Amidzic";

app.get('/', (req, res) => {
  res.send(name)
})

app.get('/api/set-name', (req, res) => {
  name = req.params.name
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})