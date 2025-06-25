

var  generateRGBColor = () => {
 var r = (Math.floor(Math.random() * 255));
   var g = (Math.floor(Math.random() * 255));
 var b =  (Math.floor(Math.random() * 255));
 return `rgb(${r},${g},${b})`
}
var updateColor = () =>{
    var color = generateRGBColor();
  var colorBox = document.getElementById('colorBox')
  colorBox.style.backgroundColor = color
 var colorCode = document.getElementById('colorCode');
 colorCode.innerText = color
}

var copyColorCode = () => {
  var colorCode = document.getElementById('colorCode')
  var inputTag = document.createElement('input')
  document.body.appendChild(inputTag)
  inputTag.value = colorCode.innerText;

  inputTag.select();
  document.execCommand('copy') //copy extension
  document.body.removeChild(inputTag)//remove  body input child
  alert("copy Code :" + inputTag.value)
}

document.getElementById('copyButton').addEventListener('click',()=>{
    copyColorCode()
})
function newColor(){
    updateColor()
}

/* mine project 2 */
var timeLeft;
var clierTime;
var isRunning = false;
var timerFun = document.getElementById('timer')
var startbtn = document.getElementById('startbtn')
var stopbtn = document.getElementById('stopbtn')

var startTimer = (duration) => {
  var timer = duration; 
  clierTime = setInterval(() =>{
   var timerMinet = parseInt (timer / 60, 10)
   var timerSeconds = parseInt (timer % 60,10)
  var timerCondison = timerMinet <10? '0' + timerMinet: timerMinet;
  var secondsCondison = timerSeconds <10? '0' + timerSeconds : timerSeconds;
   timerFun.innerText = timerCondison + ':' + secondsCondison; 

   if(--timer < 0){
      clearInterval (clierTime)
      timerFun.innerText = 'Time End';

      setTimeout(()=>{
        timerFun.innerText = 'time Is Start Agine'
         startTimer(timeLeft)
      })
   }
  } ,1000)
}

var updateTimer = () => {
  clearInterval(clierTime);
  timerFun.innerText = 'Breathing time is stop';
  isRunning = false;
}

startbtn.addEventListener('click',()=>{
  if(!isRunning){
    timeLeft = 90; // 90 seconds
    startTimer(timeLeft);
    isRunning = true;
  }
})
stopbtn.addEventListener('click',()=>{
  updateTimer()
  isRunning = false;
})

//project 2
var addTask = () =>{
 var taskInput = document.getElementById('textInput');
 var taskValue = taskInput.value.trim();
  if(taskValue !==''){
    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.innerHTML = ' <input onclick="updateTask()" type="checkbox">' + taskValue +  ' <button onclick="removeTaskList(this)">Delete</button>';
     taskList.appendChild(li);
     taskInput.value = ''; // Clear the input field after adding the task
  }
  else{
     alert('Please enter a task');
    
  }
}
var removeTaskList = (btn) =>{
 var li = btn.closest;
 li.removeChild(li);

}
  var updateTask = () => {
  var checkBoxs = document.querySelectorAll('input.task-checkbox:checked');
  checkBoxs.forEach(checkbox => {
    var li = checkbox.closest('li');
    if (li) li.remove();
  });
}

  // var taskList = document.getElementById('taskList');
  // var checkBoxs = document.querySelectorAll('input[type="checkbox"]:checked');
  // checkBoxs.forEach (checkbox => {
  //  var li = checkbox.parentNode;
  //  li.parentNode.removeChild(li);
  // });


addButton.addEventListener('click',()=>{
  addTask ()
})

// var loadImage = () =>{
//   var imgUrl = document.getElementById('fileInput');
//   var imgConvart = document.getElementById('output');
//   var fille = imgUrl.filles[0];

//   if(!fille){
//    imgConvart.innerText = 'Please select an image file';
//     return;
//   } 
//  Tesseract.recognize(
//    fille,            // এখানে fille pass করা হবে
//     'eng',
//  ).then(({date}) =>{
//   imgConvart.textContent = date.text;
//  }).catch((error) =>{
//   console.error('Error:', error);
//   imgConvart.textContent = 'Error recognizing text from image';
//  })

// }
// loadButton.addEventListener('click',() =>{
//   loadImage();
// })

