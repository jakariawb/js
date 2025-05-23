var myvar = 'jakaria';
//false ,0 , null , undefined, NaN
//true , 1, '0', 'false', [], {}, -1
// and ! operator এইটা দিলে জদি 0 থাকে তাহলে false হবে
// !myvar = false হবে
if(myvar) {
    console.log('myvar is truthy');
} else {
    console.log('myvar is falsy');
}

// টারিনারি অপারেটর
var age = 33;
var rusult = (age >= 18)? 'you are adult': 'you are not adult';
console.log(rusult);

var isNumber = 20;
var result = (isNumber<=20)?'is true':'is false';
console.log(result); // is false and 20 is true

// array prototupe findIndex

var arr = [1,2,3,4,5];
var rusult = arr.findIndex((item, index) =>{
    
    return (item>2)
    // return (item>3 && index>2) ? true : false;
})
console.log(rusult); // 0

//array filter mathod
var numberArr = [1,2,3,4,5,6,7,8,9,10];

 var eusult =numberArr.filter((currentValue, index, array)=>{
                    //filter এর কাজ হচ্ছে array এর ভিতর থেকে filter করে নাম্বার বের করে আনা
        console.log( 'currentValue ='+currentValue); // 1,2,3,4,5,6,7,8,9,10
        console.log( 'index ='+index); // 0,1,2,3,4,5,6,7,8,9 //এই খানে index গুলো বের করে আনা হয়েছে
        console.log( 'array ='+array); // 1,2,3,4,5,6,7,8,9,10
  return currentValue>4;
//আর মানে হচ্ছে ৪ এর উপরে যেগুলো আছে সেগুলো বের করে আনা
     
  })
  console.log(eusult); 
  // [5,6,7,8,9,10] এই খানে ৪ এর উপরে যেগুলো আছে সেগুলো বের করে আনা হয়েছে

  //array slice mathod
    var numberArr = [1,2,3,4,5,6,7,8,9,10];
    console.log(numberArr);
     var rusult = numberArr.slice(0,5)
     console.log(rusult); // [1,2,3,4,5,6,7];
        //slice এর কাজ হচ্ছে array এর ভিতর থেকে slice করে বের করে আনা
        

//array splice mathod
var numberArr1 = [1,2,3,4,5,6,7,8,9,10];
 var removeNumber =  numberArr1.splice(1, 4,44,55,66,88)
console.log(numberArr1); // [1, 44, 55, 66, 88.6 ,7,8, 9, 10]
console.log(removeNumber); // [2, 3, 4, 5] //removeNumber এর ভিতর ২,৩,৪,৫ বের করে আনা হয়েছে
//splice এর কাজ হচ্ছে array এর ভিতর থেকে splice করে বের করে আনা

var numberArr2 = [1,2,3,4,5,6,7,8,9,10];
var total = numberArr2.splice(-3, 3, 44,55,66,88) // -3 মানে হচ্ছে array এর শেষ থেকে ৩ টা বের করে আনা
console.log(numberArr2); // [1, 2, 3, 4, 5, 6, 7, 44, 55, 66]
console.log('bar kora anna holo = '+total);




var numberArr2 = [1,2,3,4,5,6,7,8,9,10];
 var totalNumber =  numberArr2.reduce((total, currentValue)=>{
     return total + currentValue;
 }, 0);
 console.log(totalNumber); // 55

 //array.concat mathod
 //array.concat mathod এর কাজ হচ্ছে array এর ভিতর নতুন array যোগ করা বা জোড়া লাগানো
  var numberArr3 = [1,2,3,4,5,6,7,8,9,10];
  var  numberArr5 = [16,17,18,19,20];
  var numberArr4 = [11,12,13,14,15];
var rusult =  numberArr3.concat(numberArr4, numberArr5) // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(rusult);

//array.push mathod
var numberArr6 = [1,2,3,4,5,6,7,8,9,10];
numberArr6.push(11,12,13,14,15) // array এর ভিতর নতুন array যোগ করা সবার শেশে
console.log("push kora holo = "+  numberArr6); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//আরে পুশ মেইন আরে কে চেঞ্জ করে দেয়
//array.pop mathod
//array prototype .map funcation
var Number = [1,2,3,4,5,6]
var rusult = Number.map((num)=>{
    return 3 * num;
})
console.log(rusult)


var array1 = [1,2,3,4,5,6,7,];
 var rusult = array1.map((sum)=>{
    return 3 * sum;
})
console.log(rusult);

