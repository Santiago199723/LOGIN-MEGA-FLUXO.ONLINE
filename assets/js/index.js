if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar ao indicador!");
  window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `<span style="font-family: 'Verdana', sans-serif; color: #4CAF50; font-size: 1.5em;">Olá,</span> ${userLogado.nome}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}


