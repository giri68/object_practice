'use strict';
function personMaker(){
  const person = {
    firstName: 'paul',
    lastName: 'JOnes',
    fullName: function(){
      return this.firstName + ' ' + this.lastName; }
  }
  return person;
}
console.log(personMaker());