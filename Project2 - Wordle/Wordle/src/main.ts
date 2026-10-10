import listOfWords from "./words"

const container = document.querySelector('.container')

const rows: number = 6
const cols: number = 5

let index: number = 0 // Index variable will indicate which cell we're at on any given moment

const random_word: string = listOfWords[Math.floor(Math.random() * listOfWords.length)] // Generates a random word from the list 
console.log(random_word)

// Loop to generate the 5 * 6 grid

for(var i = 0; i < rows * cols; i++) {
  const letterContainer = document.createElement("div")
  letterContainer.className = "letter_container"
  container?.append(letterContainer)
}

const letterContainers = document.getElementsByClassName('letter_container')

console.log(letterContainers)

const acceptableValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let guess: string = ""
let submitted: boolean = true

console.log(acceptableValues)

document.body.addEventListener("keydown", function (event) {

  console.log(index)
  console.log(submitted)
  
  if(!submitted && event.key == "Enter") {
    submitted = true
    guess = ""
  }
  
  if(event.key == "Backspace" && index > 0) { // We make sure that backspace isn't applied when at index = 0
    index--
    letterContainers[index].innerHTML = ""
        
    if(!submitted) submitted = true // This prevents a bug, where deleting a letter on the last cell of a row disallows for writing furthermore
 
  }
  if(submitted) { // Makes sure that you can't type on the next row, unless you've submitted the answer
    if(!(index > letterContainers.length-1) && acceptableValues.includes(event.key.toLowerCase())) {
      letterContainers[index].innerHTML = event.key.toUpperCase()
      guess = guess.concat("", event.key.toUpperCase())
      index++
      if(index % 5 == 0 && index != 0) submitted = false
    }    
  }
  console.log(guess)

})