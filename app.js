const arr = ["hello world", "word", "foo", "bar"];
let newArr = [];
function getOtherWords(word, index) {
  return index !== 0;
}
// capitalize the only first letter of each array element
arr.forEach((item) => {
  const firstWord = item[0].toUpperCase();
  const remain = Array.from(item).filter(getOtherWords).join("");
  newArr.push(firstWord + remain);
});

// capitalize the first letter of each word in array element
const result = arr.map((item) => {
  const splt = item.split(" ");
  //   console.log(splt);
  const totalSentence = splt
    .map((word) => {
      const remain = Array.from(word).filter(getOtherWords).join("");
      const joined = word[0].toUpperCase() + remain;
      return joined;
    })
    .join(" ");
  //   console.log(totalSentence);
  return totalSentence;
});
// console.log(result);
// console.log(arr);
// console.log(newArr);

const evnArr = [1, 2, 3, 4, 10, 8, 7, 81, 5, 6, 501];

// filter even numbers

const evenNumbers = evnArr.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

const res = evenNumbers.reduce((acc, curr) => acc + curr, "Aminul");
console.log(res);
