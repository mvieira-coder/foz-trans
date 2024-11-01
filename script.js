// Função para fazer login
function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  // Verifica se o login e a senha estão corretos
  if (login == "admin" && senha == "admin") {
    // Salva o login e a senha no localStorage
    const dadosLogin = {
      usuario: login,
      senha: senha,
    };
    
    localStorage.setItem("login", JSON.stringify(dadosLogin));

    // Redireciona para a página "home.html"
    location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos");
  }
}

// Função para fazer logout
function logout() {
  // Remove o login do localStorage ao sair
  // localStorage.removeItem('login');

  // Redireciona para a página inicial
  window.location.href = "index.html"; // Ajuste o caminho conforme necessário
}

// Função para mostrar o login no console
function mostrarLogin() {
  // Recupera os dados do localStorage e exibe no console
  const dadosLogin = localStorage.getItem("login");
  if (dadosLogin) {
    const login = JSON.parse(dadosLogin);
    console.log("Usuário:", login.usuario);
    console.log("Senha:", login.senha);
  } else {
    console.log("Nenhum login encontrado.");
  }
}
