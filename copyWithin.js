//copy within method 3 prameter rseive kora (target, stert, end)
//(target, start, end) a golo heche array er index abong array er position rsieve kore
//target is requird and start and is optional start by default 0 jodi apni start na den by default 0 hoba
// abong end default array length hoba jodi apni end na den by default array length hoba
let a = ['javascript','php','python','ruby','c++','rust'];
console.log(a)
a.copyWithin(-1, 1, 2); // copyWithin(target, start, end)
console.log("ching array value: "+a) // ['javascript', 'php', 'python', 'ruby', 'c++', 'php']
a.copyWithin(5 ,1,-3); // copyWithin(target, start, end) 
console.log(a)
       

var array = [1,2,3,4,5,6]

var revers = array.toReversed();
console.log(revers)
console.log(array)
// console.log(revers)

var number = '12'
var sum = Number(number)
console.log(sum)
console.log(typeof number);

var number1 = 23;
console.log(typeof number1)
var sue = String(number1)
console.log(sue)   

var octal = 0o75
console.log(octal)

