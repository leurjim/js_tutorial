let Phrase = require("leurjim-palindrome");

let string = prompt("Ingrese una cadena para la prueba del palíndrome:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" es un palindrome!`);
} else {
  alert(`"${phrase.content}" no es un palindrome!`);
}
