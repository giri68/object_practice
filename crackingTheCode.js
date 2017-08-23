function decode(code){
  const ourArray = code.split(" ");
  let dString = "";
    for(let i=0; i<ourArray.length; i++) {
      const firstLetter = ourArray[i].charAt(0)
        console.log(obj[firstLetter]);
        if (firstLetter != "a" && firstLetter!= "b" && firstLetter != "c" && firstLetter != "d") {
          dString += " ";
        }
        else {
        dString += ourArray[i].charAt((obj[firstLetter])-1);
        }
      // switch(ourArray[i].charAt(0)) {
      //   case "a":
      //     dString += ourArray[i].charAt(obj.a-1);
      //     break;
      //   case "b":
      //     dString += ourArray[i].charAt(obj.b-1);
      //     break;
      //   case "c":
      //     dString += ourArray[i].charAt(obj.c-1);
      //     break;
      //   case "d":
      //     dString += ourArray[i].charAt(obj.d-1); 
      //     break;
      //   default: 
      //     dString += " ";
      // }
    }
    return dString;
}

const obj = {
  a: 2, 
  b: 3,
  c: 4,
  d: 5,
}

console.log(decode("craft block argon meter bells brown croon droop"));
