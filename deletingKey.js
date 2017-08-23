'use strict';
function keyDeleter(obj) {
  // your code here
  delete obj["foo"];
  delete obj["bar"];
  return obj;
}


var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang'
};

console.log(keyDeleter(sampleObj));
