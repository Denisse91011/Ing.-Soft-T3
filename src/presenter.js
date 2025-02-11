import sumar from "./sumador.js";
import { multiplicar } from "./multiplicador.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const multiplyButton = document.querySelector("#multiplicar-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = `<p>Suma: ${sumar(firstNumber, secondNumber)}</p>`;
});

multiplyButton.addEventListener("click", () => {
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = `<p>Multiplicación: ${multiplicar(firstNumber, secondNumber)}</p>`;
});
