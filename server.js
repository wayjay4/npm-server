const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const serverApp = express();
serverApp.use(bodyParser.json());
serverApp.use(cors());

serverApp.get('/', function(req, res){
  res.send('Hello from server');
});

serverApp.listen(PORT, function(){
  console.log("Server running on localhost:"+PORT);
});
