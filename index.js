// Write your code here!

//Remove the tag main
const removeMain = document.querySelector('main')
removeMain.remove()

const newHeader = document.createElement('h1')
//Create an id to the h1
newHeader.id = 'victory'
//Create or add text to the h1
newHeader.textContent = 'Kelvin Acosta is the champion'

//console.log(newHeader)

//Appending newHeader to the body
const body = document.querySelector('body')
body.appendChild(newHeader)

