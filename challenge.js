// for every second
//find where timer is located
// increment by 1
const counter = document.querySelector('#counter');
let isPaused = false
let startTime = 0;
var timer = setInterval(increaseTimer,1000);


function increaseTimer(){
  // const counter = document.querySelector('#counter');
  if (!isPaused){
    counter.innerText = startTime;
    startTime++
  }
}

//MANULLY INC AND DEC

const decrement = document.getElementById('-')
const increment = document.getElementById('+')

increment.addEventListener('click', function(e){
  console.log('clicked!')
  counter.innerText = startTime;
  startTime++
})


decrement.addEventListener('click', function(e){
  console.log('clicked dec!')
  counter.innerText = startTime;
  startTime--
})



const heart = document.getElementById('<3')
heart.addEventListener('click', function(e){
  
  const listItem = document.createElement('li')
  listItem.innerText = `${startTime-1}`
  document.querySelector('.likes').appendChild(listItem)

})

const pause = document.getElementById('pause')
pause.addEventListener('click', function(e){

  decrement.disabled = true
  increment.disabled = true
  heart.disabled = true
  isPaused = true;
})
