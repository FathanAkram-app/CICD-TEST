const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const http = require('http');
const server = http.createServer(app);
const port = 3000

app.use(express.static(__dirname+'/public'));


app.use(bodyParser.json())

app.get('/',(_,res)=>{
    res.send({
        status: "success",
        status_code:200
    })
})


server.listen(port, () => {
  console.log(`🚀 listening on port ${port} 🚀`)
})