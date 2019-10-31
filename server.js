const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

var path = require('path');
app.use(express.static(path.join(__dirname, '/client/build')));

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



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.post('/putscores',(req, res) => { 
  console.log("in putscore");
  console.log(req.body);
  var score = req.body.score;
  var queryst = "Insert Into user_scores(ID, score) Values (1, " + score + ")";
  console.log(queryst);
  res.send("ok");
});

app.get('/myScores', (req, res)=>{
  console.log("in myScores");
  var queryst = "Select * from user_scores where ID = 1";
  res.send("ok");
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));