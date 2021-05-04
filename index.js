/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (time) => {
  const numberStrings = time.split(':')
  const numbers = numberStrings.map((string) => {
    return parseInt(string)
  })
  if (numbers[0] < 12) {
    return 'Good Morning'
  } else if (numbers[0] >= 12 && numbers[0] < 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}
/* Write your implementation of displayMessage() */
const displayMessage = (string) => {
  const element = document.getElementById('greeting')
  element.innerText = string
}
