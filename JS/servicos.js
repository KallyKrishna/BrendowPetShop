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

// Função para exibir o conteúdo do serviço
document.getElementById("btn-agendar").addEventListener("click", function () {
  const tipoPet = document.getElementById("tipo-pet").value;
  const porte = document.getElementById("porte").value;
  const pelagem = document.getElementById("pelagem").value;
  const servicosSelecionados = Array.from(document.querySelectorAll(".lista-servicos input:checked"))
    .map(cb => cb.value)
    .join(", ");

  if (!tipoPet || !porte || !pelagem || !servicosSelecionados) {
    alert("Por favor, selecione todos os campos e ao menos um serviço.");
    return;
  }

  const mensagem = `Olá, gostaria de agendar um serviço no PetShop do Brendow:\n\n` +
    `• Tipo de Pet: ${tipoPet}\n` +
    `• Porte: ${porte}\n` +
    `• Pelagem: ${pelagem}\n` +
    `• Serviços: ${servicosSelecionados}\n\n` +
    `Por favor, me retorne com as opções de horários disponíveis.`;

  const telefone = "5512974036034"; // substitua pelo número real
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

  window.open(urlWhatsApp, "_blank");
});

// Fecha a seleção se clicar fora no mobile
document.addEventListener("click", function(event) {
  const container = document.querySelector("#nossos-servicos .container");
  if (!container.contains(event.target)) {
    document.querySelectorAll(".lista-servicos input").forEach(cb => cb.checked = false);
  }
});
