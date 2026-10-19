import listOfWords from "./words"

const container = document.querySelector('.container')

const rows: number = 6
const cols: number = 5

const gameState = document.getElementById('game_state')

let index: number = 0 // Index variable will indicate which cell we're at on any given moment

const randomWord: string = listOfWords[Math.floor(Math.random() * listOfWords.length)] // Generates a random word from the list 
console.log(randomWord)

// Loop to generate the 5 * 6 grid

for(var i = 0; i < rows * cols; i++) {
  const letterContainer = document.createElement("div")
  letterContainer.className = "letter_container"
  container?.append(letterContainer)
}

const letterContainers = document.getElementsByClassName('letter_container') as HTMLCollectionOf<HTMLElement>

console.log(letterContainers)

const acceptableValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let guess: string = ""
let submitted: boolean = true

console.log(acceptableValues)

document.body.addEventListener("keydown", function (event) {

  console.log(`CurrentIndex? ${index}`)
  console.log(`Is Submitted? ${submitted}`)
  
  if(!submitted && event.key == "Enter") {
    
    if(checkValidity(guess)) {
      submitted = true
      console.log(checkAnswer(guess))      
      drawCells(index, checkAnswer(guess))
      writeGameState("")
      if(!checkAnswer(guess).includes('WP') && !checkAnswer(guess).includes('W')) {
        // Win, Game Over
        writeGameState("Game Over, you Won!")
      }
        guess = ""
    } else {
      // Invalid Word
      writeGameState("Word doesn't exist in the word list!")
    }
  }
  
  if(event.key == "Backspace" && index % 5 != 0 || event.key == "Backspace" && !submitted) { // We make sure that backspace isn't applied when at index = 0
    index--
    letterContainers[index].innerHTML = ""
    
    guess = guess.slice(0, -1)

    if(!submitted) submitted = true // This prevents a bug, where deleting a letter on the last cell of a row disallows for writing furthermore
 
  }
  if(submitted) { // Makes sure that you can't type on the next row, unless you've submitted the answer
    if(!(index > letterContainers.length-1) && acceptableValues.includes(event.key.toLowerCase())) {
      letterContainers[index].innerHTML = event.key.toUpperCase()
      letterContainers[index].style.animation = "typing 0.25s forwards"
      guess = guess.concat("", event.key.toUpperCase())
      index++
      if(index % 5 == 0 && index != 0) submitted = false
    }    
  }
  console.log(`Current Guess? ${guess}`)

})
function stringToArray(string: string): string[] {
  const array: string[] = []

  for(let i: number = 0; i < string.length; i++) {
    array.push(string[i])
  }

  return array
}
function checkAnswer(userGuess: string): string[] {
  // Iterate through letters and compare them one on one
  // string.charAt(index)


  /*
    RP: Right Place
    WP: Wrong Place
    W : Wrong Character
  */


  const randomWordArray = stringToArray(randomWord)

  let results: string[] = []

  for(let i: number = 0; i < 5; i++) {
    if(randomWordArray.includes(userGuess[i])) {
      console.log(`Random word index: ${randomWord[i]} User Guess: ${userGuess[i]}`)
      if(randomWord[i] == userGuess[i]) {
        results.push('RP')
      } else {
        results.push('WP')
      } 

      // Remove each found character from the available, preventing a character from displaying as Wrong Place twice or more 

      const j = randomWordArray.indexOf(userGuess[i])
      if(j > -1) randomWordArray.splice(j, 1)
      
      console.log(`Random Word to Array? ${randomWordArray}`)
    } else {
      results.push('W')
    }
  }
  return results
}
function checkValidity(userGuess: string): boolean {
  return listOfWords.includes(userGuess)
}
function drawCells(index: number, results: string[]) {
  let j = 0
  for(let i = index-5; i < index; i++) {
    letterContainers[i].style.transform = "rotateY(180deg)"
    if(results[j] == 'WP') letterContainers[i].style.backgroundColor = "#B59F3B"
    if(results[j] == 'RP') letterContainers[i].style.backgroundColor = "#538D4E"
    if(results[j] == 'W') letterContainers[i].style.backgroundColor = "#3A3A3C"
    j++
  }
}
function writeGameState(message: string): void {
  if(gameState) gameState.innerHTML = message
}