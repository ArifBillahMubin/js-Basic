const students = [
    { name: "Rahim", marks: 80 },
    { name: "Karim", marks: 45 },
    { name: "Hasan", marks: 70 },
    { name: "Rafi", marks: 35 }
];

for (let student of students) {
    if (student.marks >= 50) {
        console.log(`${student.name} passed.`);
    } else {
        console.log(`${student.name} failed.`);
    }
}
