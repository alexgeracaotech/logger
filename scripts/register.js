
const register = document.querySelector("#register");

register.addEventListener("click", () => {
  
  const name = document.querySelector("#name").value;
  const user = document.querySelector("#userRegister").value;
  const password = document.querySelector("#passwordRegister").value;

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("user", user);
  sessionStorage.setItem("password", password);

  alert("Usuário cadastrado com sucesso.");

  window.location.href = "../pages/login.html";
  
});

const show = document.querySelector("#show");

show.addEventListener("change", () => {

  const passwordRegister = document.querySelector("#passwordRegister");

  const type = passwordRegister.getAttribute("type");

  if(type != "password"){
    passwordRegister.setAttribute("type", "password");
    return;
  }

  passwordRegister.setAttribute("type", "text");
  
});
