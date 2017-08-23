const obj = {
  foo: 'happy',
  bar: 'sad',
  fum: 'mad',
  quum: 'glad',
  spam: 'really angry'
};

for (let key in obj) {
  console.log(key +": " + obj[key]);
}

