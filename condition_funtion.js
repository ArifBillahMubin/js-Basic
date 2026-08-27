const numbers = [10, 15, 20, 25, 30, 35, 40];
const result = [];

for(let item of numbers){
    (20<=item)?result.push('pass'):result.push('fail');
}
console.log(result);