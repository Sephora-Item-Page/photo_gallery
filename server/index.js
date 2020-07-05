// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');

const cors = require('cors');

const bodyParser = require('body-parser');

// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 3003;

const { getAll, findItemById } = require('../db/dataGen.js');


app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

//to parse json data
app.use(express.json());
app.use(bodyParser.json());

// Serve static files. Any requests for specific files will be served if they exist in the provided folder

//THIS IS FOR THE INDIVIDUAL COMPONENT
app.use('/photoGallery/:productId', express.static(path.join(__dirname, '/../client/dist')));

//THIS IS FOR THE PROXY SERVER
// app.use('/photoGallery', express.static(path.join(__dirname, '/../client/dist')));
// app.use(express.static(path.join(__dirname, '../client/dist')));




//gets all items within database
app.get('/items', (req, res) => {
  getAll((data) => {
    res.send(data);
  })
});
//gets single item by id
app.get('/photoGallery/items/:productId', (req, res) => {
  findItemById(req.params.productId, (data) => {
    res.send(data);
  })
});

// Start the server on the provided port
app.listen(PORT, () => console.log('Listening on port: ' + PORT));