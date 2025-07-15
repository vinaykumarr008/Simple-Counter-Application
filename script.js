const counterValue = document.getElementById("counterValue");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");

let count = 0;

incrementButton.addEventListener("click", function () {
  count++;
  counterValue.textContent = count;
});

decrementButton.addEventListener("click", function () {
  count--;
  counterValue.textContent = count;
});

resetButton.addEventListener("click", function () {
  count = 0;
  counterValue.textContent = count;
});
