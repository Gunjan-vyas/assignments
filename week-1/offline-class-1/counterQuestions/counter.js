// create a js counter from 30 to 0
// function a(i) {
//   console.log("i", i);
// }
// for (let i = 30; i > 0; i--) {
//   setTimeout(function b() {
//     a(i);
//   }, (30 - i) * 1000);
// }

// calculate the time it takes between a setTimeout adn the inner function actually runnign
function myFunction() {
  console.log("Timeout function executed!");
  console.log("Time when function executed:", new Date());
}

// Log the current time before calling setTimeout
const startTime = new Date();
console.log("Time before setTimeout:", startTime);

// Call setTimeout with a delay of 2000 milliseconds (2 seconds)
setTimeout(myFunction, 2000);

// Calculate the time difference when setTimeout is called and when the function executes
setTimeout(() => {
  const endTime = new Date();
  const timeDifference = endTime - startTime; // Difference in milliseconds
  console.log("Time difference:", timeDifference, "milliseconds");
}, 2000);




function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

//create a terminal clock (HH:MM:SS)
setTimeout(() => {
   console.log(getCurrentTime());
},1000);
