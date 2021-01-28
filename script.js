const express = require('express')
const app = express()
const port = 3000

var name = "Igor Amidzic";

app.get('/', (req, res) => {
  console.log(name)
  res.send(name)
})

app.get('/api/set-name', (req, res) => {
  name = req.params.name
  console.log(name)
  res.send("Success")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})