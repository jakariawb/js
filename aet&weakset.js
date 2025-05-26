

//set 
// function log(angything){
//     console.log(angything)
// }
//let myArray = [] //literal syntax
let myArray  = [2,3,4]; //constructor syntax
 let myset = new Set('baindladesh'); //creating a set from an array
 for(let value in myArray){
    // console.log(value)
    console.log(myArray[value])
 }
console.log(myset);

let MySet = new Set ([1,2,3,4,5,6,7,8,9,10]);
MySet.add(11)
console.log(MySet)

var mySet1 = ['jakaria', 'sakib', 'tamim', 'mashrafe'];
mySet1 = new Set(mySet1)
mySet1.add('shakib')
 mySet1.delete('tamim')
// mySet1.delete('tamim') //this will remove the element 'tamim' from the set
//mySet1.clear(mySet1)
 // mySet1.clear() //this will remove all elements from the set
console.log(mySet1);

let arrayconvert = [1,2,3,4,5,6,7,8,9,10]
let mySet2 = new Set(arrayconvert);
console.log([...mySet2]);
//set to array conversion

let mySet3 = [1,2,3,4,5,5,7,8,9,10];
console.log([...new Set(mySet3)]);

let a = [1,2,8,4,10];
let b = [6,7,8,9,10];
let c =  new Set([...a, ...b]);
console.log(c)
// let bset = new Set(b);
let i = new Set([...a] .filter(x =>b. includes (x)))
console.log(i); //intersection of two sets


let j = [1,2,3,4,4];
let k = [5,6,7,8,9,10];

var conbart =new Set([...j, ...k]);
console.log(conbart)
// union of two sets
let l = new Set([...j].filter(x =>k.includes(x)))
console.log(l ) //intersection of two sets
let m = new Set([...j].filter(x=> !k.includes(x)))
console.log(m)
let n = new Set([...j].filter(x => !j.includes(x)))
console.log(n)