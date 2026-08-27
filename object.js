const student = {
    name: "Mehedi",
    age: 22,
    marks: 75
};


const checkStudent = (student) => {
    if(student.marks >= 50){
        console.log(`${student.name} passed.`);
    }else{
        console.log(`${student.name} failed.`);
    }
}
checkStudent(student);

//destructuring
const {name, age, marks} = student;
console.log(name, age, marks);

//for in loop used to print all key and value
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}