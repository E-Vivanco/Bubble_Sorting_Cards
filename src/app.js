/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//import { right } from "@popperjs/core";
//import { left } from "@popperjs/core";
function init() {
  //vamos a crear el menu del tablero
  // crearMenu();
  //function crearMenu() {
  let num_ingreso = document.createElement("input");
  num_ingreso.style.alignContent = "center";
  document.body.appendChild(num_ingreso);
  let val1 = document.querySelector("input");
  val1.setAttribute("value", "numero");
  let paint = document.createElement("button");
  paint.style.background = "grey";
  paint.innerText = "Draw";
  document.body.appendChild(paint);
  let val2 = document.querySelector("button");
  val2.setAttribute("value", "paint");
  val2.setAttribute("class", "btn btn-secondary");

  //num_ingreso.innerHTML;

  console.log(num_ingreso, paint);
  //}
  // lienzo para desplegar las cartas
  //generarMixCards();
  //function generarMixCards() {}
}

window.onload = function() {
  //write your code here
  init();
};
