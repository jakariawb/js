

// array Destrucring

var number = {
    name :'jakaria',
    Number:'01401813864',
    age:33
};

 var {name} = number
 console.log(name);

 var {age} = number;
 console.log(age) 

var {Number : title} = {number}
console.log(number)

var name1 = {
    name :'jakaria',
    education:{
        degre:'masters'
    }
}
var {education:{degre}} = name1
console.log(degre)

var {education:{degre}} = name1
console.log(degre)


var Number1 = [1,34,5,6,7,8,[100,444]]
var [,,,,,,[g,h]] = Number1
console.log(g,h)

var a = 2;
var b = 3;
 //var name = 
 
 [b,a] = [a,b]
 console.log(b,a)
//  //console.log(name)
//  import {a}from "./truthy.js"//array import
//  console.log(a)

//  template - literal
var a  = 10
var b = 20
console.log(`a + b = ${a+b}`);

function modifier(strings , ...values){
    var m = strings.reduce((prev ,current)  =>{
        return prev + current + (values.length ?"Mr ." + values.shift():"")
    } ,"")
    return m
}
var player = 'sakib'
var player1= 'tamim'
console.log(modifier`we have ${player} and ${player1} in cricket tem.`)

function mode (strings , ...values){
    var t =  strings.reduce((prev , current) =>{
        return prev + current +(values.length ? "mr ." + values.shift():"")
    },"")
    return t
}
    

var name = 'jakari'
var fitherName = 'ruhule Amin Jomadder'
console.log(mode`My name ${name} and my firhers name ${fitherName}`)


function modi (strings, ...values){
    var y = strings.reduce((prev,current)=>{
       return prev + current + (values.length? "mise ." + values.shift():"")
    },"")
    return y
}
var matherName = 'julakha bagum'
var mySister = 'Nusrate'
console.log(modi`My mather ${matherName} and my sister ${mySister}`)

function gitrntInfo (strings, ...values){
    var b = strings.reduce((prev, current)=>{
      return  prev + current + (values.length?"2022 ." + values.shift():"")
    },"")
    return b;
}

var  mygirentmather = 'rohema bagom'
var mygirentfither = 'hatime ali jommadder'

console.log(gitrntInfo`my girentmather is date ${mygirentmather} and my girentfither is date ${mygirentfither}`)




function naimInfo (strings, ...values){
    var e = strings.reduce((prev,current)=>{
        return prev + current +(values.length? "my info ." +  values.shift(): "")
    },'')
  return e
}
var number = "014303030"
var Email = "jakaria jomadder"
console.log(naimInfo `my Nunder ${number} and is my Email ${Email}`)

 var add1 = ['1','2','3'];
  var add2 = ['1','2','3'];
  // দুইটা array কে spread operator দিয়ে একসাথে মিশিয়ে একটা নতুন array তৈরি করলাম
  var Num = [...add1,...add2];
  
  // map ফাংশন দিয়ে প্রতিটা string কে number এ রূপান্তর করলাম
  var stringConvert = Num.map(Number)
  console.log(stringConvert)
  console.log(typeof stringConvert)

   var arr = [12,45,67,88,9,90,9,9]
  var maxNumber= Math.max(...arr)
  console.log(maxNumber)

  var smoleNUmber = Math.min(...arr)
  console.log(smoleNUmber)

//   var Nines = arr.filter(function(reeptNmber){
//      return reeptNmber === 9;
//   })
//   console.log(Nines);
var Nines = arr.filter(nam => nam === 9)
console.log(Nines)
var num = 'my faberat Number'
var fun = [1,2,3,4,55,6,6,7,77]
       function addNumber() {
      return fun.filter(function(num) {
        return num % 2 == 0;
      });
    }
    var rusult = addNumber();
      console.log(rusult,`my laki and = ${num}`)
    function oddNumber1(){
      return  fun.filter(function(num){
            return num % 2 !== 0;
        });
    }
    var result = oddNumber1()
   var sum = result.reduce(function(acc,current){
      return  acc + current
    },0)
  var result1 =  addNumber()
    console.log(sum , `+ number ${sum}`)
  var sub = sum - 43
  console.log(sub,`- Number ${sub}`)
  var nam = sub * 2;

console.log(nam,`* Number ${nam}`)

 var namString = String(nam)
var result =  namString.push()

 console.log(result)
