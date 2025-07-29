// Abre e fecha submenu ao clicar
function toggleSubmenu() {
  const submenu = document.getElementById("submenu");
  submenu.classList.toggle("mostrar");
}

function fecharSubmenu() {
  const submenu = document.getElementById("submenu");
  submenu.classList.remove("mostrar");
}

// Fecha submenu ao clicar fora dele
document.addEventListener("click", function(event) {
  const submenu = document.getElementById("submenu");
  const menuBtn = document.querySelector(".menu-btn");
  if (!submenu.contains(event.target) && !menuBtn.contains(event.target)) {
    submenu.classList.remove("mostrar");
  }
});

// Animacao em construcao Nosso Universo
const imagens = [
  "IMAGENS/ICOBrendow.webp",
  "IMAGENS/ICOPug.webp",
  "IMAGENS/ICOCat.webp",
  "IMAGENS/ICOYork1.webp",
  "IMAGENS/ICOYork2.webp"
];

let indexAtual = 0;
const imgElement = document.getElementById("imgConstrucao");

function trocarImagem() {
  imgElement.classList.add("fade"); // Aplica fade-out

  setTimeout(() => {
    indexAtual = (indexAtual + 1) % imagens.length;
    imgElement.src = imagens[indexAtual];

    imgElement.onload = () => {
      imgElement.classList.remove("fade"); // Aplica fade-in após nova imagem carregar
    };
  }, 500); // Tempo do fade-out
}


setInterval(trocarImagem, 2000); // troca a cada 2 segundos

// Verifica se o usuário já fez uma escolha
document.addEventListener("DOMContentLoaded", () => {
  const preferenciaCookies = localStorage.getItem("preferenciaCookies");
  const modal = document.querySelector("#cookieModal");

  if (!preferenciaCookies && modal) {
    modal.classList.add("ativo");
  }

  // Botões do modal
  const aceitarBtn = document.getElementById("aceitarCookies");
  const recusarBtn = document.getElementById("recusarCookies");
  const editarBtn = document.getElementById("editarCookies");

  aceitarBtn?.addEventListener("click", () => {
    localStorage.setItem("preferenciaCookies", "aceito");
    fecharModalCookies();
  });

  recusarBtn?.addEventListener("click", () => {
    localStorage.setItem("preferenciaCookies", "recusado");
    fecharModalCookies();
  });

  editarBtn?.addEventListener("click", () => {
    alert("Você pode personalizar suas preferências em breve!");
    // Aqui você pode abrir uma tela ou painel de edição personalizada.
  });

  function fecharModalCookies() {
    modal.classList.remove("ativo");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const preferenciaCookies = localStorage.getItem("preferenciaCookies");
  const modal = document.querySelector("#cookieModal");

  if (!preferenciaCookies && modal) {
    modal.classList.add("ativo");
  }

  const aceitarBtn = document.getElementById("aceitarCookies");
  const recusarBtn = document.getElementById("recusarCookies");
  const editarBtn = document.getElementById("editarCookies");

  aceitarBtn?.addEventListener("click", () => {
    console.log("🟢 Aceitou os cookies!");
    localStorage.setItem("preferenciaCookies", "aceito");
    fecharModalCookies();
  });

  recusarBtn?.addEventListener("click", () => {
    console.log("🔴 Recusou os cookies!");
    localStorage.setItem("preferenciaCookies", "recusado");
    fecharModalCookies();
  });

  editarBtn?.addEventListener("click", () => {
    console.log("🟡 Editar preferências clicado!");
    alert("Você pode personalizar suas preferências em breve!");
  });

  function fecharModalCookies() {
    modal.classList.remove("ativo");
    console.log("🔒 Modal fechado.");
  }
});

// Verificar se o usuário já aceitou os cookies
window.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup-cookies");
  const aceitarBtn = document.querySelector("#btnAceitar");
  const recusarBtn = document.querySelector("#btnRecusar");

  const jaAceitou = localStorage.getItem("cookiesAceitos");

  if (!jaAceitou && popup) {
    popup.classList.add("ativo");
  }

  aceitarBtn?.addEventListener("click", () => {
    localStorage.setItem("cookiesAceitos", "sim");
    popup.classList.remove("ativo");
  });

  recusarBtn?.addEventListener("click", () => {
    localStorage.setItem("cookiesAceitos", "nao");
    popup.classList.remove("ativo");
  });
});

