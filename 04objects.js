//lets dive into objects

//how define a object
const obj={
    name:"Ratan",
    email:"ratan@google.com",
    age:23,
    location:"Prayagraj"
}

const key=Symbol("key")
//how access an object
//first method
//console.log(obj.name)

const obj1={
    "name":"Ratan",
    [key]: "key1"//this is symbol type
}

//accessing symbol
console.log(obj1[key])


//defining a function
obj.greeting=function(){
    console.log(`Hi my name is ${this.name} and symbol is ${obj1[key]}`)
}
console.log(obj.greeting())