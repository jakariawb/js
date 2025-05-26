

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