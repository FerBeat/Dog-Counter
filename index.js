// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

//  camelCase - se usa para direccionar las variables entre html y java
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // pass in arguments,  se pas infor de html a java
let count = 0

function increment() {
    // console.log("clicked")
    count += 1
    countEl.textContent = count
}
// 1. Create a function, save(), which logs out the count when it's called
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
save()

//let username = "per"
//let message = "You have tree new notifications"
//let messageToUser = message + ", " + username + "!"
//console.log(messageToUser)

//let name = "Luis Fernando Martínez Romero"
//let greeting = "Hi, my name is "
//let myGreeting = greeting + name + "!"
//console.log(myGreeting)

//console.log(4 + 5) // saca 9 
//console.log("2" + "4") // saca 24
//console.log("5" + 1) // saca 51, porque el string siempre le gana al número
//console.log(100 + "100") // saca 100100

