const express = require('express')
const app = express()


app.get('/', function (req, res) {
   res.sendfile(__dirname + '/client/js/main/index.html');
})

app.listen(8001)
	