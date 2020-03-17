'use strict';



//  función con número random
// const food = 10;

// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * 10);
// }


// function writeThis(word, getRandomNumber) {
//   for (let index = 0; index < getRandomNumber; index++) {
//     console.log(word);
//   }
// }

// writeThis('pizza', getRandomNumber());
// writeThis('aguacate', getRandomNumber());
// writeThis('patata', getRandomNumber());

const lists = [{
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];


const food = [{
    text: 'Pizza',
    total: 6
  },
  {
    text: 'aguacate',
    total: 2
  },
  {
    text: 'caffe',
    total: 8
  },
  {
    text: 'leche',
    total: 4
  }
];




const list = [];

function writeMyArray(array) {
  for (let index = 0; index < array.length; index++) {
    // console.log(array[index].text, array[index].total);
    for (let indexTotal = 0; indexTotal < array[index].total; indexTotal++) {

      console.log(array[index].text);

    }

  }
}

writeMyArray(lists)
writeMyArray(food)




//  intento con for of 

// function writeMyArray(array) {
//   for (let index of array) {
//     // console.log(index.text, index.total);

//     for (let indexTotal of array[index].total) {

//       console.log(array[index].text);

//     }

//   }
// }

// writeMyArray(food)
