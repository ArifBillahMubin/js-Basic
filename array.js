//filter method
let arr = [12, 20, 15, 25]
const result = arr.filter((item) => item < 20);
console.log(result);

//map method
const arr1 = [4, 8, 12, 16, 20]
const map = arr1.map((item) => item * 2);
console.log(map);

//find method
const arr2 = [10, 20, 30, 40, 50]
const find = arr2.find((item) => item > 30);
console.log(find);

//reduce method
const arr3 = [10, 20, 30, 40, 50]
const reduce = arr3.reduce((a,b) => a + b);
console.log(reduce);