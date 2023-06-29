const firstName = prompt("Inserisci il nome");
const lastName = prompt("Inserisci il cognome");
const favColor = prompt("Inserisci il tuo colore preferito");
const age = prompt("Inserisci la tua etá");

document.getElementById("hello-title").innerHTML = `Ciao ${firstName}, ecco la tua nuova password`;
document.getElementById("name").innerHTML = firstName;
document.getElementById("lastname").innerHTML = lastName;
document.getElementById("color").innerHTML = favColor;
document.getElementById("age").innerHTML = age;
document.getElementById("password").innerHTML = firstName + lastName + favColor + "21";
