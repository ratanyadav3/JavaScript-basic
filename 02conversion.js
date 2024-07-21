let score="33"
console.log(typeof(score))//output=string

let convertInNumber=Number(score)//This is the syntax to convert any data type into number

console.log(typeof(convertInNumber))//output= number
/* but there is a problem lets see in below code*/

let value ="53abc"

let convert=Number(value);//here we converted it into number;
//let print this
console.log(convert)//NaN is printed on screen means not a number
//let print type of this
console.log(typeof(convert))

/* return type of variable in JavaScript
1. Primitive Datatypes
Number=>number;
string=>string
Booolean=>boolean
null=>object
undefined=>undefined
Symbol=>symbol
BigInt=>bigint

2.Non Primitive Datatypes
Arrays=>object
Function=>function
Onject=>object*/