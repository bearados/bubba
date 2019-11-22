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


async function scoreQuery(){
  let response;
  var queryst = 'Select "id" from user_scores where "userid" = 1';
  client.connect();
  try {
    response = await client.query(queryst, (err, res));
  } catch (error) {
    throw error;
  }
  return response.rows;
}



app.post('/myScores', (req, res)=>{
  console.log("in myScores");
  client.connect();
  var context = [];
  context.res = [];
  context.res.nodes =[];
  
  var queryst = 'Select "id" from user_scores where "userid" = 1';
  context.res = await scoreQuery();
  console.log("context.res " + JSON.stringify(context.res));
  res.send(context);
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));