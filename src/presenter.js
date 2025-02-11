import sumar from "./sumador.js";
//import multiplicar from "./multiplicador.js"; // Importamos la función de multiplicación
import { multiplicar } from "./multiplicador.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

// Crear y agregar el botón de multiplicación al formulario
const multiplyButton = document.createElement("button");
multiplyButton.textContent = "Multiplicar";
multiplyButton.type = "button"; // Para evitar que se comporte como un submit
form.appendChild(multiplyButton);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>Suma: " + sumar(firstNumber, secondNumber) + "</p>";
});

// Evento para la multiplicación
multiplyButton.addEventListener("click", () => {
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>Multiplicación: " + multiplicar(firstNumber, secondNumber) + "</p>";
});
