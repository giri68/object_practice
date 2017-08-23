'use strict';
const jon = {
  name: "Jon",
  job_title: "Owner"
};

const giri = {
  name: "Giri",
  job_title: "Developer"
};

const eric = {
  name: "Eric",
  job_title: "Full stack developer"
};

const rich = {
  name: "Rich",
  job_title: "Instructer"
};

const pavan = {
  name: "Pavan",
  job_title: "Student"
};
const arr = [jon, giri, eric, rich, pavan];
//console.log(arr.forEach(obj => `${obj[job_title]} and ${obj[name]}` ));
//console.log(arr[0].job_title);
console.log(arr.map(obj => `${obj.job_title} and ${obj.name}` 
));