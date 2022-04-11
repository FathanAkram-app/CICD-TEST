const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const http = require('http');
const { recursiveTest } = require('./app/helpers/helpers');
const server = http.createServer(app);
const port = 80

app.use(express.static(__dirname+'/public'));


app.use(bodyParser.json())

app.get('/',(_,res)=>{
    res.send({
        status: "success",
        status_code:200,
        result: recursiveTest([7,88989813,41124,511,1])
    })
})



server.listen(port, () => {
  console.log(`🚀 listening on port ${port} 🚀`)
  
})