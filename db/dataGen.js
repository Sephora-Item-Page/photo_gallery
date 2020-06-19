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
    photos: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Brushes/brush1.jpg'
    ]
  }

  //eyelashes will have an id num 200+
  let eyelashes = {
    _id: 200,
    itemName: faker.commerce.productName(),
    type: 'eyelashes',
    photos: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Eyelashes/Eyelashes1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Eyelashes/Eyelashes2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Eyelashes/Eyelashes3.jpg'
    ]
  }

    //eyelashes will have an id num 300+
  let eyeshadow = {
    _id: 300,
    itemName: faker.commerce.productName(),
    type: 'eyeshadow',
    photos: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Eyes/Eyeshadow1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Eyes/Eyeshadow2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Eyes/Eyeshadow3.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Eyes/Eyeshadow4.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Eyes/Eyeshadow5.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Eyes/Eyeshadow6.jpg'
    ]
  }

    //eyelashes will have an id num 400+
  let lips = {
    _id: 400,
    itemName: faker.commerce.productName(),
    type: 'lips',
    photos: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Lips/Lips1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Lips/Lips2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Lips/Lips3.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Lips/Lips4.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Lips/Lips5.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Lips/Lips6.jpg'
    ]
  }

    //eyelashes will have an id num 500+
  let nails = {
    _id: 500,
    itemName: faker.commerce.productName(),
    type: 'nails',
    photos: [
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Nails/Nails1.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Nails/Nails2.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Nails/Nails3.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Nails/Nails4.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Nails/Nails5.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Nails/Nails6.jpg',
      'https://sephoraitems.s3-us-west-1.amazonaws.com/Nails/Nails7.jpg'
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
  Items.find({}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  })
};

const findItemById = (id, callback) => {
  Items.find({_id: id}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  })
};

module.exports = { save, getAll, findItemById };

