const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

var path = require('path');
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

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
  console.log("in putscore");
  console.log(req.body);
  client.connect();
  var ID = 1;
  var score = req.body.score;
  var Values = [ID, score, req.body.test];
  var queryst = 'Insert Into user_scores("id", "score", "test") Values ($1, $2, $3);';
  console.log(queryst);
  client.query(queryst, Values, (err, res) => {
    if (err) throw err;
    client.end();
  
  });
  res.send("ok");
});

app.post('/myScores', (req, res)=>{
  console.log("in myScores");
  client.connect();
  var context = [];
  context.res = [];
  
  var queryst = 'Select * from user_scores where "ID" = 1';
  client.query(queryst, (err, res) => {
    if (err) throw err;
    context.count = JSON.stringify(res.rowCount);
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
      context.res.push(JSON.stringify(row));
    }
    client.end();
  });
  res.send(context);
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));