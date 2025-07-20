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
