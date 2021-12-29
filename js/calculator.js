const calcOn = document.querySelector("#calc-on");
const calc = document.querySelector("#calc");
const calcExit = document.querySelector("#calc-exit");

calcOn.addEventListener("click", (event) => {
  calcOn.classList.add("hidden");
  calc.classList.remove("hidden");
});
calcExit.addEventListener("click", (event) => {
  calcOn.classList.remove("hidden");
  calc.classList.add("hidden");
});
