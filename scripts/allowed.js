
var greeting = document.getElementById("greeting");

var name = sessionStorage.getItem("name");

greeting.innerText = "Olá, " + sessionStorage.getItem("name") + "!";
