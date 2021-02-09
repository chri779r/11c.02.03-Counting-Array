let arr = [];
const counter = arr.values;

startCounter();

function startCounter() {
  counter++;
  setTimeout();
}

function timeOut() {
  arr = Array.from(counter).push(arr);
  setTimeout(timeOut, 150);
  console.log(counter);
}
