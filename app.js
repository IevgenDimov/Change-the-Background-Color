const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
// get a random number between 0 - 3
const randomNumber = getRandomNumber();

console.log(randomNumber)

//changed the background color of the body using the (.style) on it, set it equal to the array named colors with the index for the array = to randomNumber
document.body.style.backgroundColor = colors[randomNumber];

// changes the content inside the class called "color" with  index of colors array = randomNumber
color.textContent = colors[randomNumber];
})

// create a function that will return a RANDOM number between 0-3. Math.floor removes all the decimals and Math.random gives a random number between 0-1
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}