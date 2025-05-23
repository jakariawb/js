// function number(){
//     return 42; 
// }
// number()
//ES6 Arrow Function
//  let number = () => {
//     return 42;
//}

let number2 = () => 42; // 42
console.log(number2()) // 42

//Es6 return arguments
let add = (a,b) => a+b;
console.log(add(10,20))//30

// arhuments multiple lines 
let add2 = (a,b) =>{
    let sum = a-b
    return sum;
} 
console.log(add2(20,10))//10
//vanella js  return arguments
function add1(a,b){
    return a+b;
}
console.log(" nagtibe number = "+add1(40,50))//90

// es6 arrow function inportent thnks

var name = {
    name: 'javascript',
    libraries: ['jquery', 'react', 'angular'],
    printlibraries: function  (){
        this.libraries.forEach((a)=> console.log(`${this.name} loves ${a}`));
    }
}
name.printlibraries();


var name2 ={
    Name: 'css',
    libraries:['bootstrap','taliwind','discord'],
    printlibraries: function(){
        this.libraries.forEach((a) => console.log(`${this.Name}loves ${a}`))
    }

}

name2.printlibraries();


var name3 = {
    name:'jakaria',
    libraries:['html' , 'css', 'js'],
    printlibraries: function(){
        this.libraries.forEach((b) => console.log(`this is ${this.name} love ${b}`))
    }
}
name3.printlibraries();
// arrow function with this

var info = {
   name: 'jskaria',
    age: 23,
    pfrosone:'developer',
    lengose:['html,','css', 'javascript'],
    printInfo:function(){
        this.lengose.forEach((a) => console.log(`${this.name} agr ${this.age} loves ${a}`))
    }
}
info.printInfo();