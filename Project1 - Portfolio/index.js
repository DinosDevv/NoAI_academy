function toggle () {
  const left = document.getElementById("l")
  const right = document.getElementById("r")

  console.log(left.style.display)

  if(left.style.display === "none") left.style.display = "flex" 
  else left.style.display = "none"

  if(right.style.display === "none") right.style.display = "flex" 
  else right.style.display = "none"
  

}

function magic() {
  const body = document.getElementById('body')
  const headers = document.querySelector('h1')
  const paragraphs = document.querySelector('p')
  const nav = document.querySelector('nav')

  body.style.animation = "backgroundAnim 2s forwards"
  headers.style.animation = "textAnim 2s forwards"
  paragraphs.style.animation = "textAnim 2s forwards"
  body.style.fontFamily = "sans-serif"
  nav.style.animation = "navAnim 2s forwards"
  console.log("Done")
}