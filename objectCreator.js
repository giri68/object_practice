'use strict';
function createMYObject(){
  return {
    foo: "bar",
    answerToUiverse: 42,
    "olly olly": "oxen free",
    sayHello: function(){
      return "hello";
    }
  };
}

console.log(createMYObject());
