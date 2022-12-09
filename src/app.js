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
  let val1 = document.querySelector("input");
  //val1.setAttribute = ("value", "ingresa_num");
  //num_ingreso.innerHTML;
  document.body.appendChild(num_ingreso);
  //document.body.appendChild(val1);
  console.log(num_ingreso);
  //}
  // lienzo para desplegar las cartas
  //generarMixCards();
  //function generarMixCards() {}
}

window.onload = function() {
  //write your code here
  init();
};
