function enrollInSummerSchool(students) {
  students.forEach(obj => obj.status = "In Summer School");
  return students;
}

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

console.log(enrollInSummerSchool(studentData));