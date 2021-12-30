const calcOn = document.querySelector("#calc-on");
const calc = document.querySelector("#calc");
const calcExit = document.querySelector("#calc-exit");
const historyWindow = document.querySelector("#calc-display .display__history");
const resultWindow = document.querySelector("#calc-display .display__result");
const numBtn = document.querySelectorAll(".input-num");
const fnBtn = document.querySelectorAll(".calc__fn-btn");
const resetBtn = document.querySelector("#reset-btn");
const delBtn = document.querySelector("#del-btn");
const resultBtn = document.querySelector("#result-btn");
const Btns = calc.querySelectorAll("button");

calcOn.addEventListener("click", () => {
  calcOn.classList.add("hidden");
  calc.classList.remove("hidden");
});
calcExit.addEventListener("click", () => {
  calcOn.classList.remove("hidden");
  calc.classList.add("hidden");
});

let numMass = [""];
let calcStep = 0;
function handleNumBtn(event) {
  const inputNum = event.target.innerHTML;
  numMass[calcStep] += inputNum;
  resultWindow.innerHTML = numMass[calcStep];
  historyWindow.innerHTML += inputNum;
}
function handleFnBtn(event) {
  const inputFn = event.target.innerHTML;
  if (numMass[calcStep] === "") {
    console.log(historyWindow.innerHTML.slice(-3));
    historyWindow.innerHTML = historyWindow.innerHTML.replace(
      historyWindow.innerHTML.slice(-3),
      ` ${inputFn} `
    );
  } else {
    historyWindow.innerHTML += ` ${inputFn} `;
    numMass.push("");
    return calcStep++, numMass;
  }
}

for (let i = 0; i < numBtn.length; i++) {
  if (numBtn[i].id === "") {
    numBtn[i].addEventListener("click", handleNumBtn);
  }
}
for (let j = 0; j < fnBtn.length; j++) {
  if (fnBtn[j].id === "") {
    fnBtn[j].addEventListener("click", handleFnBtn);
  }
}

resetBtn.addEventListener("click", () => {
  numMass = [""];
  calcStep = 0;
  historyWindow.innerHTML = "";
  resultWindow.innerHTML = "";
});
delBtn.addEventListener("click", () => {
  numMass[calcStep] = numMass[calcStep].replace(
    numMass[calcStep].charAt(numMass[calcStep].length - 1),
    ""
  );
  resultWindow.innerHTML = numMass[calcStep];
  historyWindow.innerHTML.replace(historyWindow.inner);
});
