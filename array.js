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

//includes method
const arr4 = [10, 20, 30, 40, 50]
const arr5 = '5'
const includes = arr4.includes(30);
console.log(includes);
console.log(arr4.includes(60));

//indexOf method
const indexOf = arr4.indexOf(30);
console.log(indexOf);

//is Array method
const isArray = Array.isArray(arr5);
console.log(isArray);


//reverse method
const arr6 = [10, 20, 30, 40, 50]
const reverse = arr6.reverse();
console.log(reverse);