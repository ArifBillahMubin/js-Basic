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

const {name, age, marks} = student;
console.log(name, age, marks);