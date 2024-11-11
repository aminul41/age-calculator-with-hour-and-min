// const myArray = [
//   "sadia",
//   "ahmed",
//   "tarek",
//   "sadia",
//   "mohamed",
//   "tarek",
//   "mohamed",
// ];
// const uniqueArray = myArray.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// const uniqueArray = myArray.filter((value, index, self) => {
//   console.log(self.indexOf(value));
//   //   return self.indexOf(value) === index;
// });
// console.log(uniqueArray);

// const data = [
//   { Id: 1, name: "apple", type: "fruit" },
//   { Id: 1, name: "apple", type: "fruit" },
//   { Id: 2, name: "samsung", type: "fruit" },
//   { Id: 3, name: "tesla", type: "fruit" },
// ];
// let newArray = [];

// data.map((item) => {
//   newArray.push(item.name);
//   return newArray;
// });
// console.log(newArray);

// const newString =
//   "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis non tellus convallis malesuada. Nulla facilisi. Sed et turpis vel mauris fringilla convallis. Nulla facil";

// const stringArray = newString.toLowerCase().split("");
// let count = 0;
// stringArray.map((char) => {
//   if (char.includes("a")) {
//     count++;
//     return count;
//   }
// });
// console.log(count);

// const data = [
//   { name: "john", age: 25 },
//   { name: "jane", age: 30 },
//   { name: "john", age: 25 },
// ];
// // const amaderDesh = "bangladesh";

/* const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    namfruitse: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
]; */

// Get the total number of characters by eye color (hint. a map of eye color to count)

// const eyeColorCounts = characters.reduce(getEyColor, {});
// function getEyColor(acc, item) {
//   if (acc[item.eye_color]) {
//     acc[item.eye_color]++;
//   } else {
//     acc[item.eye_color] = 1;
//   }
//   return acc;
// }
// console.log(eyeColorCounts);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
// let reversed = [];
// fruits.forEach((item) => {
//   reversed.unshift(item);
// });
// console.log(reversed);

// let newFruit = ["Lemon", "Kiwi"];
// fruits.splice(0, 0, ...newFruit);
// console.log("fruits:", fruits);

// sorting menu item based on price
// const menuItem = [
//   { name: "Pizza", price: "10.99" },
//   { name: "Burger", price: "8.99" },
//   { name: "Fries", price: "5.99" },
// ];

// const sortedMenu = menuItem.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log("Sorted Menu:", sortedMenu);

// let a = {
//   nam: 1,
// };

// function result(val) {
//   val.nam = 2;
// }
// result(a);
// console.log(a);

// const str = "hey buddy, how are you? is everything fine?";
// const vowels = ["a", "e", "i", "o", "u"];
// const strArray = str.toLowerCase().split("");
// console.log(strArray);

// const result = strArray.reduce(getvowels, {});
// function getvowels(result, el) {
//   if (vowels.includes(el)) {
//     result[el] = result[el] ? result[el] + 1 : 1;
//   }
//   return result;
// }
// console.log(result);

// const str = "hey buddy, how are you? is everything fine?";
// const vowels = ["a", "e", "i", "o", "u"];
// let vowelCount = {};

// vowels.forEach((vowel) => {
//   vowelCount[vowel] = 0;
// });
// // Iterate through the string and count the vowels
// for (const char of str.toLowerCase()) {
//   vowels.includes(char) ? vowelCount[char]++ : 0;
// }
// console.log(vowelCount);

// function to generate random number between two arguments

/* function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(10, 20)); */

//get form data inside object
/* const form = document.querySelector("form");
let formData = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < event.target.length - 1; i++) {
    // console.log(formData[event.target[i].name]);
    formData[event.target[i].name] = event.target[i].value;
    event.target.reset();
  }
});
console.log(formData); */

// print this
// /*
//  **
//  ***
//  ****
//  ***** */
/* const starEl = document.querySelector(".star");

function printStars(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    pattern += stars + "<br>";
  }
  starEl.innerHTML = pattern;
}

printStars(5);
 */

// Function to trigger the counter animation
function startWheelAnimation(targetNumber) {
  const digits = targetNumber.toString().split(""); // Split the number into digits
  const wheel = document.querySelector(".wheel"); // Get the wheel div

  // Create and append a span element for each digit in the wheel
  const digitElements = digits.map((digit) => {
    const span = document.createElement("span");
    span.innerText = digit;
    wheel.appendChild(span);
    return span;
  });

  // Function to simulate spinning for each digit
  function rollWheel(span, targetDigit) {
    let currentDigit = 0;

    if (targetDigit === "0") {
      span.innerText = "0"; // No animation for 0
    } else {
      // Animate the spinning effect for digits other than 0
      let spinDuration = 1000; // Set spin duration (1 second)
      let spinSteps = 10; // Total steps for a full cycle (0-9)

      let interval = setInterval(() => {
        span.innerText = currentDigit;
        currentDigit = (currentDigit + 1) % 10; // Cycle through digits 0-9
      }, 100); // Update every 100ms (adjust as needed)

      // Stop the spinning after reaching the target digit
      setTimeout(() => {
        clearInterval(interval);
        span.innerText = targetDigit; // Set the final target digit
      }, spinDuration);
    }
  }

  // Check if the counter is in the viewport
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  // Trigger the animation when the counter div is in view
  function triggerAnimation() {
    if (isInView(document.getElementById("counter"))) {
      // For each digit, start the spinning animation
      digitElements.forEach((span, index) => {
        rollWheel(span, digits[index]); // Roll each span to the target digit
      });
    }
  }

  // Listen for scroll event to check if the counter is in view
  window.addEventListener("scroll", triggerAnimation);

  // Initially check if the counter is already in view on page load
  triggerAnimation();
}

// Start the animation for number 160 when the page is ready
document.addEventListener("DOMContentLoaded", function () {
  startWheelAnimation(160);
});
