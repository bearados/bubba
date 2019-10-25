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

// create a GET route
app.get('/express_backend', (req, res) => {
  
  msg = "having fun with data";
  
  res.send({ express: msg });
});

app.get('/getdata', (req, res) => {
  graphdata = {
    nodes: [ 
        { 
          "id": "1"
        },
        { 
          "id": "2"
        },
        {
          "id": "3"
        },
        {
          "id": "4"
        }
    ],
    links: [
        {
            "source": "1",
            "target": "2"
        },
        {
          "source": "2",
          "target": "3"
        },
        {
          "source": "3",
          "target": "4"
        }
    ]
}
  res.send({express : graphdata });
});



app.get('/getQuiz', (req, res) => {
  res.send("success")
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));