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
  var Values = [ID, score, req.body.test];
  var queryst = 'Insert Into user_scores("id", "size", "test") Values ($1, $2, $3);';
  console.log(queryst);
  client.query(queryst, Values, (err, res) => {
    if (err) throw err;
    client.end();
  
  });
  res.send("ok");
});


app.post('/myScores', (req, res)=>{
  console.log("in myScores");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
    }); 
  client.connect();
  var Values = [req.body.ID];
  var context = [];
  context.rs =[];
  context.rs.nodes =[];
  context.test = [];
  var queryst = 'Select "id", "size"  from user_scores where "userid" = $1';
  client.query(queryst, Values, (err, res) => {
    if (err) throw err;
    client.end();
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
      context.rs.nodes.push(row);
      console.log("context.rs.nodes " + JSON.stringify(context.rs.nodes));
    }
  });

  context.test = {
    nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
    links: [{ source: '1', target: '2' }, { source: '1', target: '3' }]
  };
  console.log("context.rs.nodes " + JSON.stringify(context.rs.nodes));
  console.log("context.test " + JSON.stringify(context.test));
  res.send(context.test);
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));