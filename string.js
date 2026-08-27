//length of string
const name = "JavaScript";
console.log((name.length > 5) ? "longString" : "shortString");

count = 0;
for(let item of name){
    count++;
}
(count > 5) ? console.log("longString") : console.log("shortString");

//reverse of string
const text = "hello";
const reversedText = text.split("").reverse().join("");
console.log(reversedText);

//slice method
const str = "JavaScript";
const slicedStr = str.slice(0, 4);
console.log(slicedStr);