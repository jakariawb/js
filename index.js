var a = document.getElementById('j');
a.innerHTML = 'my name is jakaria';
  
var b  = document.getElementById('body');



window.onload = () => {
  main();
}

//step 3  collect all the elements

function main (){
  var continerBody = document.getElementById('container');
  var btn = document.getElementById('btn');

  // step 4  add event listener to the button
  btn.addEventListener('click',function(){
    var color = colorGenerator();
    continerBody.style.backgroundColor = color;
  })
}

// step 1  create onload hendler

// step 2  color generator function

function colorGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random()* 255);
  return `rgb(${red}, ${green}, ${blue})` //random color generate
}

