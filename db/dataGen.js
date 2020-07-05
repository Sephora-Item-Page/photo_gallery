const faker = require('faker');
const db = require('./index.js');
const mongoose = require('mongoose');
const { itemSchema } = require('./schema.js');

const Item = mongoose.model('Item', itemSchema);

const save = () => {
  let allItemsArr = [];

  let brush = {
    itemName: faker.commerce.productName(),
    type: 'brush',
    lowRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Brushes/brush1.jpg'
    ],
    highRes: ['https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Brushes/brush1.jpg']
  }

  let eyelashes = {
    itemName: faker.commerce.productName(),
    type: 'eyelashes',
    lowRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyelashes/Eyelashes1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyelashes/Eyelashes2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyelashes/Eyelashes3.jpg'
    ],
    highRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyelashes/Eyelashes1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyelashes/Eyelashes2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyelashes/Eyelashes3.jpg'
    ]
  }

  let eyeshadow = {
    itemName: faker.commerce.productName(),
    type: 'eyeshadow',
    lowRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow3.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow4.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow5.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow6.jpg'
    ],
    highRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow3.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow4.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow5.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow6.jpg'
    ]
  }

  let lips = {
    itemName: faker.commerce.productName(),
    type: 'lips',
    lowRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Lips/Lips1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Lips/Lips2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Lips/Lips3.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Lips/Lips4.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Lips/Lips5.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Lips/Lips6.jpg'
    ],
    highRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Lips/Lips1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Lips/Lips2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Lips/Lips3.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Lips/Lips4.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Lips/Lips5.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Lips/Lips6.jpg'
    ]
  }

  let nails = {
    itemName: faker.commerce.productName(),
    type: 'nails',
    lowRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Nails/Nails1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Nails/Nails2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Nails/Nails3.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Nails/Nails4.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Nails/Nails5.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Nails/Nails6.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Nails/Nails7.jpg'
    ],
    highRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Nails/Nails1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Nails/Nails2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Nails/Nails3.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Nails/Nails4.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Nails/Nails5.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Nails/Nails6.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Nails/Nails7.jpg'
    ]
  }

  let idWithPadding = (id) => {
    var idStr = id.toString();
    var paddedId = idStr.padStart(4, '0')
    return paddedId;
  }

  let seedBrushes = () => {
    for (var i = 1; i < 20; i += 1) {
      let item = new Item(brush);
      brush.productId = idWithPadding(i);
      console.log('brush id: ', brush.productId);
      allItemsArr.push(item);
      brush.itemName = faker.commerce.productName();
    }
  }

  let seedEyelashes = () => {
    for (var i = 20; i < 40; i += 1) {
      let item = new Item(eyelashes);
      eyelashes.productId = idWithPadding(i);
      console.log('eyes id: ', eyelashes.productId);
      allItemsArr.push(item);
      eyelashes.itemName = faker.commerce.productName();
    }
  }

  let seedEyeshadow = () => {
    for (var i = 40; i < 60; i += 1) {
      let item = new Item(eyeshadow);
      eyeshadow.productId = idWithPadding(i);
      console.log('eyes2 id: ', eyeshadow.productId);
      allItemsArr.push(item);
      eyeshadow.itemName = faker.commerce.productName();
    }
  }

  let seedLips = () => {
    for (var i = 60; i < 80; i += 1) {
      let item = new Item(lips);
      lips.productId = idWithPadding(i);
      console.log('lips id: ', lips.productId);
      allItemsArr.push(item);
      lips.itemName = faker.commerce.productName();
    }
  }

  let seedNails = () => {
    for (var i = 80; i <= 101; i += 1) {
      let item = new Item(nails);
      nails.productId = idWithPadding(i);
      console.log('nails id: ', nails.productId);
      allItemsArr.push(item);
      nails.itemName = faker.commerce.productName();
    }
  }

  //run the functions to add the data
  seedBrushes();
  seedEyelashes();
  seedEyeshadow();
  seedLips();
  seedNails();

//THIS IS FOR W/O DOCKER
//   db.db.dropCollection('items')
//     .then(() => {
//     Item.collection.insertMany(allItemsArr)
//       .then(() => {
//         console.log('successfully seeded!')
//       })
//       .catch(err => {
//         console.log('seeding error: ', err)
//       });
//   })
//   .then( () => { mongoose.disconnect()} )
//   .catch(err => {
//     console.log('closing error: ', err)
//   });
// }


  Item.collection.insertMany(allItemsArr)
    .then(() => {
      console.log('successfully seeded!')
    })
    // .catch(err => {
    //   console.log('seeding error: ', err)
    // })
  .then(() => { mongoose.disconnect() })
  .catch(err => {
    console.log('closing error: ', err)
  });

}





const getAll = (callback) => {
  Item.find({}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  })
};

const findItemById = (id, callback) => {
  Item.find({productId: id}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  })
};

module.exports = { save, getAll, findItemById };

