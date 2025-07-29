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
function enviarWhatsApp(event) {
  event.preventDefault();

  const form = document.getElementById('formContato');
  const nome = form.nome.value.trim();
  const telefone = form.telefone.value.trim();
  const email = form.email.value.trim();
  const assunto = form.assunto.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !telefone || !email || !assunto || !mensagem) {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return;
  }

  const telefoneLimpo = telefone.replace(/\D/g, '');
  if (telefoneLimpo.length !== 11) {
    alert("Por favor, insira um número de celular válido com DDD. Ex: (13) 99145-5985");
    return;
  }

  const texto = `🐾 *Novo Contato do PetShop do Brendow* 🐾\n\n *Nome:* ${nome}\n *Telefone:* ${telefone}\n *Email:* ${email}\n *Assunto:* ${assunto}\n *Mensagem:* ${mensagem}`;

  const numeroWhats = '5512997633527';
  const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`;

  // Abre o WhatsApp em nova aba
  window.open(url, '_blank');

  // Redireciona a aba atual para a home após 1 segundo
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}
