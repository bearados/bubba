const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

var path = require('path');
const { Client } = require('pg');


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}
else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}


app.post('/putscores',(req, res) => {
  const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
  }); 
  console.log("in putscore");
  console.log(req.body);
  client.connect();
  var ID = 1;
  var score = req.body.score;
  var tst = req.body.test;
  var Values = [ID, score, tst];
  console.log("value array: " + JSON.stringify(Values));
  var queryst = 'Insert Into user_scores("userid", "score", "test") Values ($1, $2, $3);';
  client.query(queryst, Values, (err, res) => {
    if (err) throw err;
    client.end();
  
  });
  res.send("ok");
});


function getScores(id, callback){
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
    }); 
  client.connect();
  var context = [];
  context.rs =[];
  var Values = [id];
  var queryst = 'Select * from user_scores where "userid" = $1';
  client.query(queryst, Values, (err, res) => {
    if (err) throw err;
    client.end();
    for (let row of res.rows) {
      context.rs.push(row);
    }
    var i = res.rowCount;
    console.log(context.rs);
    callback(context.rs);
  });
}


app.post('/myScores', (req, res)=>{
  console.log("in myScores");
  var context = [];
  context.rs =[];
  var count = 0;
  getScores(req.body.ID, callback);
  function callback(cont){
    count++;
    if(count === 1){
      context.rs = cont;
      console.log("cont " + JSON.stringify(context.rs));
      res.send(context.rs);
    }
  }
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));