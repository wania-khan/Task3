//Module 1:
const gridItems = document.querySelectorAll('.grid-item');
const array = [...Array(9)].map((_, index) => index + 1); //Array with index from 1 to 9

function rand() {
array.forEach((a, index) => {
let randomIndex = Math.floor(Math.random() * array.length); // Generate a random index to assign 
let temp = array[index];
array[index] = array[randomIndex]; //Make sure no number is repeated by shuffling the current value with a random value from array
array[randomIndex] = temp;
});

gridItems.forEach((item, index) => {
item.textContent = array[index]; //Assign the above confirmed shuffled number
});
startTimer();
}

//Module 2:
dragged = null;
function drag(event) {
  dragged = event.target;
}
  function allowDrop(event) {
    event.preventDefault();
  }
  function dragOver(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    if (dragged != event.target) {
        const temp = event.target.textContent;
        event.target.textContent = dragged.textContent;
        dragged.textContent = temp;
        //Module 3:
        checkOrder();
      }
    }
    function checkOrder() {
        const gridItems = document.querySelectorAll('.grid-item');
        start = 1; // Starting number in the sequence 1-23456789
        for (let i = 0; i < gridItems.length; i++) {
          if (parseInt(gridItems[i].textContent) != start) {
            return; // If any block is out of sequence, exit the function
          }
          start++;
        }      
      }
      clearInterval(timerInterval); // stop the timer when the grid is arranged
     if (start == 10) {
      alert("Congratulations, you won!");
    }  
     else {
      alert("You lost"); //oops
    }
//Module 4:
let min = 0;
let sec = 0;
let timerInterval;

function startGame() {
  rand(); // Generate random numbers
  startTimer(); // Start the timer
}

function startTimer() {
  min = 0;
  sec = 0;
  timerInterval = setInterval(updateTimer, 1000); // Update timer every second
  }
      
  function updateTimer() {
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
      }
      }