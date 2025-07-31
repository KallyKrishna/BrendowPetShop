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

function mostrarServico(tipo) {
  const quadro = document.getElementById("conteudo-servico");

  let conteudo = "";

  if (tipo === "banho") {
    conteudo = `
      <h2>Banho & Tosa</h2>
      <p>Do banho refrescante à tosa estilizada, oferecemos carinho e qualidade para deixar seu pet limpo e feliz!</p>
    `;
  } else if (tipo === "mimos") {
    conteudo = `
      <h2>Mimos & Cuidados</h2>
      <p>Pelos brilhantes, patinhas protegidas e focinhos hidratados. Porque cada detalhe merece cuidado especial.</p>
    `;
  } else if (tipo === "spa") {
    conteudo = `
      <h2>Spa & Zen</h2>
      <p>Ofurôs, massagens, aromas e energia boa. Um verdadeiro dia de relaxamento para o bem-estar do seu pet!</p>
    `;
  } else if (tipo === "vet") {
    conteudo = `
      <h2>Vet & Farma</h2>
      <p>Consulta, prevenção e cuidado. Nossa equipe veterinária está pronta para proteger quem você ama.</p>
    `;
  }

  quadro.innerHTML = conteudo;
}
