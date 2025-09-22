
const login = document.querySelector("#login");

login.addEventListener("click", () => {

  const user = document.querySelector("#userLogin").value;
  const password = document.querySelector("#passwordLogin").value;

  const userRegister = sessionStorage.getItem("user");
  const passwordRegister = sessionStorage.getItem("password");

  if(user != userRegister && password != passwordRegister){
    
    alert("Acesso negado!");
    return;
    
  }
  
  alert("Acesso permitido.");
  
  window.location.href = "../pages/allowed.html";

});

const show = document.querySelector("#show");

show.addEventListener("change", () => {

  const passwordLogin = document.querySelector("#passwordLogin");

  const type = passwordLogin.getAttribute("type");

  if(type != "password"){
    passwordLogin.setAttribute("type", "password");
    return;
  }

  passwordLogin.setAttribute("type", "text");
  
});
