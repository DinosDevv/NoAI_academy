function toggle () {
  const left = document.getElementById("l")
  const right = document.getElementById("r")

  console.log(left.style.display)

  if(left.style.display === "none") left.style.display = "flex" 
  else left.style.display = "none"

  if(right.style.display === "none") right.style.display = "flex" 
  else right.style.display = "none"
  

}
window.onload = function () {
  magic()
}

function magic() {
  const body = document.getElementById('body')
  const headers = document.querySelector('h1')
  const paragraphs = document.querySelector('p')
  const nav = document.querySelector('nav')
  const pfp = document.querySelector('.main img')
  const content = document.querySelector('.content')

  // Animations

  body.style.animation = "backgroundAnim 2s forwards"
  headers.style.animation = "textAnim 2s forwards"
  paragraphs.style.animation = "textAnim 2s forwards"
  nav.style.animation = "navAnim 2s forwards"
  pfp.style.animation = "pfpAnim 2s forwards"
  content.style.animation = "sectionAnim 2s forwards"

  // Other Style changes

  body.style.fontFamily = "sans-serif"
  
  // Debugging

  console.log("Done")
}