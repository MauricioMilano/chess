const express = require('express')
const app = express()
let port = 3000
app.use('/', express.static(__dirname + '/'));
port = process.env.PORT || process.argv[2] || port;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})