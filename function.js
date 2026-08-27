//average of three numbers
function average(a, b, c) {
    // your code
    return (a+b+c)/3;
}

console.log(average(10, 20, 30));

const checkNum = (a,b)=>{
    (a%2==0 && b%2==0)?console.log('both even'):console.log('both not even');
}


checkNum(10,20);