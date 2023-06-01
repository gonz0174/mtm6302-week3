// Accesing the document
console.log(document.title)
console.log(document.lastModified)

// finding an element by id
const infoPara = document.getElementById ("info")
console.log(infoPara) // if the .log does not show the element properties use .dir
/* console.dir(infoPara) */

console.log(infoPara.textContent)
let ogText = infoPara.textContent
infoPara.textContent = ogText + " Daniela"
// infoPara.textContent += " Daniela" . We can do also this.

// finding elements using CSS selectors
let container = document.querySelector(".container")
console.log(container)

// using the style property and setting CSS styles
container.style.maxWidth = "800px"
container.style.margin = "0 auto"

// finding all elements using CSS selectors
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)

allNodes[0].style.background = "pink"

// looping through an array and accesing each item indivudually inside the loop
for(let eachNode of allNodes) {
    eachNode.style.border = "1px solid black"
}



/* Traversing the DOM */
// find element by id
const mainNodes = document.getElementById("threeNodes")
console.log(mainNodes)

//accesing the children of an element
const listOfNodes = mainNodes.children
console.log(listOfNodes)

// access the second item in the array and set style
listOfNodes[1].style.margin = "10px 0"

//my own trial
mainNodes.style.border = "1px solid black"
mainNodes.style.padding = "30px"


// using firstElementChild to get the first element of another element
const firstNodeType = mainNodes.firstElementChild
console.log(firstNodeType.textContent)



/* Attribute Node */
const learnMore = document.getElementById("learn")
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))

// setting the value of the attribute using setAttribute
learnMore.setAttribute("target", "_blank")



/* Manipulation Classes */
learnMore.classList.add("btn")

const fakeConsole = document.getElementById("box")
fakeConsole.setAttribute("style", `background-color: powderblue; padding: 10px; margin: 10px 0; border: 1px solid black;`)

/* fakeConsole.textContent = "This is a fake console" */
//Or also it could be like this
fakeConsole.innerHTML += "<p>This is a fake console, where we can output our information</p>" 

fakeConsole.innerHTML +="The above URL is " + learnMore.getAttribute("href")