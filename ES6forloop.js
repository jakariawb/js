

 for (var i = 0;i<=5 ; i++){
    console.log(i)
}

//ES6 for loops
var t = 0
for(; t<=5; t++){
    console.log(t)
}

var y = 1; 
for(; ; y++){
    if(y<=5){
        console.log(y)
    }else{
        break
    }
}

// for in loops
// for in loops এর কাজ হল প্র্তিটা প্র্পাট্রি কে ইটারেট করে এব। আমরা সেটা করতে পারি ফর ইন লুপ দিএ

var obj = {
    name:'jakaria',
    age :'23',
    profsone: 'devloper'
}
for(property in obj){
    console.log(property)
}
//এই খানে ভার এর সব প্র্পাট্রি অউটপুট আসবে ফর ইন লুপ ইটারেট কর্রবে

// !আমরা এবার  দেকবো ফর অফ লুপ এর ব্যবহার দরেন এরে নেব 
var array = [1,2,3,4,5,6]
//এখানে জদি আমরা ইন ব্যবহার করি তা হলে আমরা ইন্দেক্স নাম্বার পাব অউটপুট পাব ১,২,৩,৪,৫, 
for (array in array){
    console.log(array)
}

for(arr of array){
    console.log(arr)
}
//এর জদি অফ ব্যবহার করি তাহলে আরে এর নাম্বার গলা পাব জমেন ১,২,৩,৪,৫,৬;
var array = 'jakaria'
for(name of array){
    console.log(name)
}

//আমরা চাইলে এই সেইম কাজ স্ত্রিং এর জন্য ব্যবহার করতে পারি 
var array = 'jakaria'
for(name of array){
    console.log(name)
}
//এর জদি অফ ব্যবহার করি তাহলে স্ত্রিং টাকে পাব জমেন 
// j
// a
// k
// a
// r
// i
// a
//এই বাবে

//!এখানে জদি আমরা ইন ব্যবহার করি তা হলে আমরা ইন্দেক্স নাম্বার পাব অউটপুট পাব 0,১,২,৩,৪,৫,6;
var array = 'jakaria'
for(name1 in array){
    console.log(name1)
}



//আমরা এখন দেখব important onject methods kesy এর ব্যবহার
var name = {
    name:'jakaria',
    age:'22',
    profsone:'devloper',
    homeTowne:'pirojpur'
}
//!এই খান থেকে আমরা অবজেক্ট এর কিস গুল কে বের করছি Object keys হইচে  [ 'name', 'age', 'profsone', 'homeTowne' ]এই গুল কিস বলে থাকি
var keys = Object.keys(name);
console.log(keys)

//!আমরা এখন দেখব important object methods values এর ব্যবহার
var value = Object.values(name)
console.log(value)
//সেইম ভাভে আমরা ভ্যেলু বের করতে পারি just object এর কিস এর ওই খানে ভ্যালু বসি দিব অউটপুট আসবে [ 'jakaria', '22', 'devloper', 'pirojpur' ]

//! আমরা যদি keys value এক সাথে পেতে চাই তা হলে আর এক টা ম্যাথড ইউজ করতে পারি entries ম্যথড। আমরা যেমন করে kedy mathod and value mathod ব্যবহার করি সেম বাভে ব্যবহার করভ 
var entrie = Object.entries(name)
console.log(entrie)
// অউটপুট 
// [
//   [ 'name', 'jakaria' ],
//   [ 'age', '22' ],
//   [ 'profsone', 'devloper' ],
//   [ 'homeTowne', 'pirojpur' ]
// ]

//!function default parameter valu
function myfun(x =10){//এই খানে রিটান করর্বে ১০ কারন এই খানে আমরা কন ব্যালু পাস করি নাই
   return x;
}
console.log(myfun()) //এই খানে সে ডিফ্ল্ড ব্যালু হিসাবে ১০ বসে যাবে
//ডিফলট ভ্যলু  আচে ১০ আমরা যদি কন প্যারা মিটার এ কেন ব্যালু পাস না করি তা হলে সে ১০ রিটান কর্রবে
function myfun2(y = 10){
   return y;
}
console.log(myfun2(4))//এই খানে যদি আপনে পেরা মিটার এর মান হিসাবে undefined দেন তা হলে সে ডিফল্ট ব্যালু ১০ রিটন করবে
//আর যদি কন ভ্যালু পাস করি তা হলে সে সেই ভ্যালু পাস করর্বে বা রিটান করবে ৪ কারন আমরা প্যারা মিটার ভ্যালু ৪ দিচি

function undefined1 (e = 10){ //আউটপুট ১০ হবে
    return e;
}
console.log(undefined1(undefined))//কারন প্যারা মিটার এর ব্যালু হিসাবে  undefined পাস করচি
//এই খানে যদি আপনে পেরা মিটার এর মান হিসাবে undefined দেন তা হলে সে ডিফল্ট ব্যালু ১০ রিটন করবে

function nul (t = 10){
    return t;
}
console.log(nul(null)) 
//এই চারা আপনে যদি প্যারামিটা এর ব্যালু হিসাবে ন্যাল দেন তা হলে সে আপনাকে ন্যাল রিটন করর্বে প্যারা মিটার এর ডিফল্ট ব্যালু রিটান কর্রবে না

//!আমরা spread operator এর ব্যবহার দেখবো spread এর মানে সরিএ দেও  আমরা দেখবো spread অপারেটর এর ব্যবহার
var spread = [1,2,3,4]
var spread2 = [...spread ,5,6,7,8,9]
console.log(spread2)
//এই খানে আমরা অউটপটু পাব[
//1, 2, 3, 4, 5, 6, 7, 8, 9
                                          
var obj1 = {
    name : 'jakaria',
    number:'10837272287',
    email:'jakariaja@mail.com'
}
var obj2 = {
    profsone:'devloper',
    langose:'HTML CSS And javasCript'
}
console.log({
    ...obj1,
    ...obj2
})
//!rest operator

function myfun(a,...params){

    console.log(params,a)
}
myfun(2,1,2,3,4,5);
function myfun1(...parameter){
     console.log(parameter)
}
myfun1(2,1,2,3,4,5);