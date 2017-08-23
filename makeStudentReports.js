function makeStudentReports(data){
  return data.map(obj => `${obj.name}: ${obj.grade}`);
}

const testData = [
  {name: 'Jane Doe', grade: 'A'},
  {name: 'John Dough', grade: 'B'},
  {name: 'Jill Do', grade: 'A'}
];

console.log(makeStudentReports(testData));
