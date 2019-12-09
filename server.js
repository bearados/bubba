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
  var queryst = 'Insert Into user_scores("userid", "size", "test") Values ($1, $2, $3);';
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
  var i, j = 0;
  context.rs =[];
  context.rs = {
    nodes: [],
    links: []
  };
  var Values = [id];
  var queryst = 'Select "id", "size", "today"  from user_scores where "userid" = $1';
  client.query(queryst, Values, (err, res) => {
    if (err) throw err;
    client.end();
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
      context.rs.nodes.push(row);
    }
    i = res.rowCount;
    console.log("row count: " + i);
    console.log("last today: " + context.rs.nodes[i-1].today)
    for(j = 0; j< i; j++){
      if(j+1 < i){
        console.log("j day: " + context.rs.nodes[j].today + " j+1 day: " + context.rs.nodes[j+1].today);
        if(JSON.stringify(context.rs.nodes[j+1].today) == JSON.stringify(context.rs.nodes[j].today)){
          console.log("in if push link if");
          var link = { source: context.rs.nodes[j].id, target: context.rs.nodes[j+1].id };
          context.rs.links.push(link);
        }
      }
    } 
    callback(context.rs);
  });
}




app.post('/myScores', (req, res)=>{
  console.log("in myScores");
  var context = [];
  context.rs =[];
  context.rs = {
    nodes: [],
    links: []
  };
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