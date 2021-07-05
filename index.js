// Intente aplicar como solución añadir el evento de click a la clase padre de los botones
// Pero esto no es correcto, ya que se toma un click en el borde de los botones y la separación espaciada entre ellos, por lo tanto
// Para tomar el click correcto de cada botón se debe aplicar la solución sugerida por la profesora.
/*document.querySelector(".set").addEventListener("click", function() {
    alert("I got clicked!");
});*/

// Cuando se presiona un botón
var cantidad = document.querySelectorAll(".drum").length;

for (var i = 0; i < cantidad; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    Sonido(buttonInnerHTML);
  });
}

// Cuando se presiona una tecla
// Si bien anteriormente agregamos el eventListener solo a los botones este también puede ser añadido a toda la página
document.addEventListener("keydown", function (event) {
  Sonido(event.key);
});

// Función del sonido
function Sonido(character) {
  switch (character) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

/*

var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
  moveSuitcase: function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}

function BellBoy ( name, age, hasWorkPermit, languages){
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}*/
