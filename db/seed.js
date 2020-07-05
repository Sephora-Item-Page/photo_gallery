const { db } = require('./index.js');
const { save } = require('./dataGen.js');

// db.dropCollection('items', (err, res) => {
//   if (err) {
//     console.log('Error dropping the collection: ', err);
//   }
//   else {
//     console.log('successfully dropped the collection');
//   }
// })

save();