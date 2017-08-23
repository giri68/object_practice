'use strict';
function validateKeys(object, expectedKeys){
  let arrayOfKeys = Object.keys(object);
  if (arrayOfKeys.length !== expectedKeys.length){
    return false;
  }
  for (let i = 0; i < expectedKeys.length; i++){
    if (arrayOfKeys[i] === expectedKeys[i]){
      return true;
    } else {
      return false;
    }
  }
}

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
};

const expectedKeys = [
  'id', 'name', 'age', 'city'
];
const keys = [
  'id', 'name', 'age', 'city'
];
const objectC = {
  id: 9,
  name: 'Billy Bear',
  age: 62,
  city: 'Milwaukee',
  status: 'paused'
}

console.log(validateKeys(objectC, keys));
