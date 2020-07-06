const mongoose = require('mongoose');

//THIS IS FOR THE LOCAL APP COMPONENT W/O DOCKER-COMPOSE
mongoose.connect('mongodb://172.17.0.2/sephoraPG', {useNewUrlParser: true, useUnifiedTopology: true });

// //THIS IS FOR THE LOCAL APP COMPONENT W DOCKER-COMPOSE
// mongoose.connect('mongodb://photogallerydb/sephoraPG', {useNewUrlParser: true, useUnifiedTopology: true });

//THIS IS FOR NOT DOCKER
// mongoose.connect('mongodb://localhost/sephoraPG', {useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', function() {
  (console, 'connection error: ');
})

db.on('open', function() {
  console.log('successful connection');
})

db.on('disconnected', function() {
  console.log('disconnected');
})

module.exports = { db };