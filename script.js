let inputElems = document.querySelectorAll("input[type='number']");
const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip-percentage");
const total = document.querySelector("#totalOutput");
const numberOfPersons = document.querySelector("#persons");
const calculateBtn = document.querySelector(".calculate-btn");

window.addEventListener("load", () => {
  inputElems.forEach((input) => (input.value = ""));
});

calculateBtn.addEventListener("click", calculateTotal);

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    calculateTotal();
  }
});

function calculateTotal() {
  let billValue = bill.value;
  let tipPercentValue = tip.value / 100;
  let tipAmountValue = billValue * tipPercentValue;
  let totalResult = parseFloat(billValue) + parseFloat(tipAmountValue);
  let totalPerPerson = totalResult / numberOfPersons.value;
  total.innerHTML = `${totalPerPerson.toLocaleString()} (per person)`;
}
