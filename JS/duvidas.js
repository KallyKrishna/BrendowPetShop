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

// Conteudo Principal
const botoes = document.querySelectorAll(".faq-pergunta");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const itemAtual = botao.parentElement;

    // Fechar todos os outros abertos
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== itemAtual) {
        item.classList.remove("ativo");
      }
    });

    // Alternar a visibilidade da resposta clicada
    itemAtual.classList.toggle("ativo");
  });
});

// Botão Voltar ao Topoconst btnTopo = document.getElementById("btnTopo");

window.onscroll = () => {
  btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
};

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


