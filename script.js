const bill = document.querySelector("#bill");
const tipPercent = document.querySelector("#tip-percentage");
const tipAmount = document.querySelector("#tip-amount");
const totalResult = document.querySelector("#totalOutput");
const calculateBtn = document.querySelector(".calculate-btn");
let inputElems = document.querySelectorAll("input[type='number']");

window.addEventListener("load", () => {
  inputElems.forEach((input) => (input.value = ""));
});

calculateBtn.addEventListener("click", getTotal);

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    getTotal();
  }
});

function getTotal() {
  let billValue = bill.value;
  let tipPercentValue = tipPercent.value;
  let tipAmountValue = tipAmount.value;
  let totalResultValue = totalResult.value;

  tipAmountValue = billValue / tipPercentValue;
  totalResultValue = parseFloat(billValue) + parseFloat(tipAmountValue);
  totalResult.innerHTML = totalResultValue.toLocaleString();
}
