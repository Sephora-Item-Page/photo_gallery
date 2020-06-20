const faker = require('faker');
const db = require('./index.js');
const mongoose = require('mongoose');
const { itemSchema } = require('./schema.js');

const Item = mongoose.model('Item', itemSchema);

const save = () => {
  let allItemsArr = [];

  //brushes will have an id num 100+
  let brush = {
    _id: 100,
    itemName: faker.commerce.productName(),
    type: 'brush',
    lowRes: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Brushes/brush1.jpg'
    ],
    highRes: ['https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Brushes/brush1.jpg']
  }

  //eyelashes will have an id num 200+
  let eyelashes = {
    _id: 200,
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

  //eyeshadow will have an id num 300+
  let eyeshadow = {
    _id: 300,
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

  //lips will have an id num 400+
  let lips = {
    _id: 400,
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

  //nails will have an id num 500+
  let nails = {
    _id: 500,
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

  let seedBrushes = () => {
    for (var i = 0; i <= 20; i += 1) {
      let item = new Item(brush);
      allItemsArr.push(item);
      brush.itemName = faker.commerce.productName(),
      brush._id += 1;
    }
  }

  let seedEyelashes = () => {
    for (var i = 0; i <= 20; i += 1) {
      let item = new Item(eyelashes);
      allItemsArr.push(item);
      eyelashes.itemName = faker.commerce.productName(),
      eyelashes._id += 1;
    }
  }

  let seedEyeshadow = () => {
    for (var i = 0; i <= 20; i += 1) {
      let item = new Item(eyeshadow);
      allItemsArr.push(item);
      eyeshadow.itemName = faker.commerce.productName(),
      eyeshadow._id += 1;
    }
  }

  let seedLips = () => {
    for (var i = 0; i <= 20; i += 1) {
      let item = new Item(lips);
      allItemsArr.push(item);
      lips.itemName = faker.commerce.productName(),
      lips._id += 1;
    }
  }

  let seedNails = () => {
    for (var i = 0; i <= 20; i += 1) {
      let item = new Item(nails);
      allItemsArr.push(item);
      nails.itemName = faker.commerce.productName(),
      nails._id += 1;
    }
  }

  //run the functions to add the data
  seedBrushes();
  seedEyelashes();
  seedEyeshadow();
  seedLips();
  seedNails();

  Item.collection.insertMany(allItemsArr)
    .then(() => {
      console.log('successfully seeded!')
    })
    .catch(err => {
      console.log('seeding error: ', err)
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
  Item.find({_id: id}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  })
};

module.exports = { save, getAll, findItemById };

