//Module1:
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
}
//Module2:
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
      }
    }
    