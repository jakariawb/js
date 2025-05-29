

// //set 
// // function log(angything){
// //     console.log(angything)
// // }
// //let myArray = [] //literal syntax
let myArray  = [2,3,4]; //constructor syntax
 let myset = new Set('baindladesh'); //creating a set from an array
 for(let index in myArray){
    // console.log(value)
    console.log(myArray[index])
 }
console.log(myset);

let MySet = new Set ([1,2,3,4,5,6,7,8,9,10]);
MySet.add(11)
console.log(MySet)

var mySet1 = ['jakaria', 'sakib', 'tamim', 'mashrafe'];
mySet1 = new Set(mySet1)
mySet1.add('shakib')
 mySet1.delete('tamim')
// // mySet1.delete('tamim') //this will remove the element 'tamim' from the set
// //mySet1.clear(mySet1)
//  // mySet1.clear() //this will remove all elements from the set
console.log(mySet1);

let arrayconvert = [1,2,3,4,5,6,7,8,9,10]
let mySet2 = new Set(arrayconvert);
console.log([...mySet2]);
// //set to array conversion

let mySet3 = [1,2,3,4,5,5,7,8,9,10];
console.log([...new Set(mySet3)]);

let a = [1,2,8,4,10];
let b = [6,7,8,9,10];

let c =  new Set([...a, ...b]);
console.log(c)
// // let bset = new Set(b);
// let i = new Set([...a] .filter(x =>b. includes (x)))
// console.log(i); //intersection of two sets


// let j = [1,2,3,4,4];
// let k = [5,6,7,8,9,10];

// var conbart =new Set([...j, ...k]);
// console.log(conbart)
// // union of two sets
// let l = new Set([...j].filter(x =>k.includes(x)))
// console.log(l ) //intersection of two sets
// let m = new Set([...j].filter(x=> !k.includes(x)))
// console.log(m)
// let n = new Set([...j].filter(x => !j.includes(x)))
// console.log(n)

// var name = "jakaria";
// for (let arr of name){
//     console.log(arr)
// }
// for (let arr in name){
//     console.log(arr)
// }

// const name8 = "jakaria";
// const age = "23";
// const info = {name8, age};
// console.log(info); // { name8: 'jakaria', age: '23' }

var arr = [1,2,3,4,5,6,7];
var rusult = 0
arr.push(20,49)
 function name (a,f) {
     for (var i = 1;i <= 5; i++){
         return a - f
      }
      console.log(i)
   }
 name(12,77)
 



var obj ={
   name:"jakaria",
   age:21
}
 var ke = Object.keys(obj)
 var kiValue = Object.values(obj)
 console.log(kiValue)
 console.log(ke)
 console.log(obj)
console.log( `my name is ${obj.name} 
                   and age ${obj.age}`)

   var numberSt = [1,2,3,4,5,6,7]
  var conbart = numberSt.toString()
  console.log(conbart)
  console.log(typeof conbart)
  



   var Number = [1,2,3,4,5];
      var Number1 = [1,2,3,4,5];
         var add = [...Number,...Number1];
           console.log(add)


 var add1 = ['1','2','3']
  var add2 = ['1','2','3']
  // দুইটা array কে spread operator দিয়ে একসাথে মিশিয়ে একটা নতুন array তৈরি করলাম
  var Num = [...add1,...add2];
  // map ফাংশন দিয়ে প্রতিটা string কে number এ রূপান্তর করলাম
  var stringConvert = Num.map(Number)
  console.log(stringConvert)
  

  