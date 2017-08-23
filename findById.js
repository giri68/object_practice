'use strict';
function findById(items, idNum){
  return items.find(obj => idNum === obj.id);
}
const scratchData = [
  {id: 22, foo: 'bar'},
  {id: 28, foo: 'bizz'},
  {id: 19, foo: 'bazz'}
];
console.log(findById(scratchData, 22));