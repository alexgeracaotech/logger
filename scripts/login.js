
var login = document.getElementById("login");

login.addEventListener("click", function(){

  var user = document.getElementById("userLogin").value;
  var password = document.getElementById("passwordLogin").value;

  var userRegister = sessionStorage.getItem("user");
  var passwordRegister = sessionStorage.getItem("password");

  if(user === userRegister && password === passwordRegister){
    
    alert("Acesso permitido.");

    window.location.href = "../pages/allowed.html";

    return;

  }

  alert("Acesso negado!");

});

var show = document.getElementById("show");

show.addEventListener("change", function(){

  var passwordLogin = document.getElementById("passwordLogin");

  var type = passwordLogin.getAttribute("type");

  if(type === "password"){
    passwordLogin.setAttribute("type", "text");
  } else {
    passwordLogin.setAttribute("type", "password");
  }

});