const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color')
const box = document.querySelector(".box")


btn.addEventListener('click', function(){
   
    // need a place holder for where the hex colors that start with a '#' and have 6 different digits will be.
  let hexColor = '#';

// Create a for loop that will loop 6 times
  for( let i = 0; i < 6; i++){

// each time the for loop will loop it will add a digit to the hexColor variable.The += adds a digit while keeping the previous ones, resulting in 6 digits
    hexColor += hex[getRandomNumber()];
  }

//  Targets the body of the document and using the style method changes the background color to the value of hexColor
   document.body.style.backgroundColor = hexColor
   color.textContent = hexColor;
   
   console.log(hexColor)

   
})

// this generates a random number that 
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}