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

