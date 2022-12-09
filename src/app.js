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
  crearMenu();
  function crearMenu() {
    let box1 = document.createElement("div");
    box1.innerHTML = "Original";
    document.body.appendChild(box1);
    let num_ingreso = document.createElement("input");
    num_ingreso.style.alignContent = "center";
    document.body.appendChild(num_ingreso);

    let val1 = document.querySelector("input");
    val1.setAttribute("value", "numero");
    let paint = document.createElement("button");
    paint.style.background = "grey";
    paint.innerText = "Draw";
    document.body.appendChild(paint);

    let sort1 = document.createElement("button");
    sort1.style.borderInline = "grey";
    sort1.innerText = "Sort";
    document.body.appendChild(sort1);

    let val2 = document.querySelector("button");
    val2.setAttribute("value", "paint");
    val2.setAttribute("class", "btn btn-secondary");

    let val3 = document.querySelector("button");
    val3.setAttribute("value", "sort");
    val3.setAttribute("class", "btn btn-secondary");

    console.log(
      "btn draw",
      paint,
      "btn sort",
      sort1,
      "agrega atrib btn paint",
      val2,
      "agrega atrib btn sort",
      val3,
      "agrega input",
      val1,
      "caja contenedora div",
      box1
    );
  }
  //aqui se desplegaran las 1°s cartas
  //desplegaCartas(num);
  function desplegaCartas(val) {
    for (let i in val) {
    }
  }

  // lienzo para desplegar las cartas

  generarMixCards();
  function generarMixCards() {}
}

window.onload = function() {
  //write your code here
  init();
};
