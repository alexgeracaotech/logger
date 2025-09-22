
const greeting = document.getElementById("greeting");

const name = sessionStorage.getItem("name");

greeting.innerText = `Olá, ${name}!`;
