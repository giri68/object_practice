'use strict';
const jon = {
  name: "Jon",
  job_title: "Owner"
};

const giri = {
  name: "Giri",
  job_title: "Developer",
  boss: "Jon"
};

const eric = {
  name: "Eric",
  job_title: "Full stack developer",
  boss: "Jon"
};

const rich = {
  name: "Rich",
  job_title: "Instructer",
  boss: "Jon"
};

const pavan = {
  name: "Pavan",
  job_title: "Student",
  boss: "Jon"
};
const arr = [jon, giri, eric, rich, pavan];
//console.log(arr.forEach(obj => `${obj[job_title]} and ${obj[name]}` ));
//console.log(arr[0].job_title);
console.log(arr.map(obj => { 
  if (obj.boss) {
    return `${obj.job_title} ${obj.name} reports to ${obj.boss}` 
  }
  else {
    return `${obj.job_title} ${obj.name} doesn't reports to anybody`
  }
}));

// ask why there is a back slash before our quotation mark when running the code
