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

serverApp.post('/register', function(req, res){
  console.log(req.body);
  res.status(200).send({"message": "Data received"});
});

serverApp.listen(PORT, function(){
  console.log("Server running on localhost:"+PORT);
});
