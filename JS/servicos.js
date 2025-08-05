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

  // Mostrar agendamento se for "banho"
  const quadros = document.querySelectorAll('.quadro-servico');
  quadros.forEach(q => q.style.display = 'none');

  if (tipo === 'banho') {
    const quadroAgendamento = document.getElementById('agendamento-simples');
    if (quadroAgendamento) {
      quadroAgendamento.style.display = 'block';
    }
  }
}

// Função para mostrar opções de tosa
function mostrarOpcoesTosa() {
  const servico = document.getElementById('servico').value;
  const campoTosa = document.getElementById('campo-tosa');
  const obsBanho = document.getElementById('obs-banho');

  // Mostrar campo de tosa somente se "Tosa" estiver selecionado
  campoTosa.style.display = servico === 'Tosa' ? 'block' : 'none';

  // Mostrar observações se for Banho ou Banho & Tosa
  obsBanho.style.display = (servico === 'Banho' || servico === 'Banho & Tosa') ? 'block' : 'none';
}

// Função para montar e enviar a mensagem via WhatsApp
function enviarAgendamentoWhatsApp() {
  const tipoPet = document.getElementById('tipoPet').value;
  const porte = document.getElementById('porte').value;
  const pelagem = document.getElementById('pelagem').value;
  const servico = document.getElementById('servico').value;
  const tipoTosa = document.getElementById('tipoTosa')?.value || "";

  // Fecha o quadro de agendamento ao clicar fora dele
document.addEventListener("click", function (event) {
  const quadro = document.getElementById("agendamento-simples");
  const bolha = document.querySelector(".bolha[onclick*='banho']");
  
  // Verifica se o quadro está visível
  if (quadro && quadro.style.display === "block") {
    const dentroDoQuadro = quadro.contains(event.target);
    const clicouNaBolha = bolha.contains(event.target);

    // Se não clicou no quadro nem no botão, esconde
    if (!dentroDoQuadro && !clicouNaBolha) {
      quadro.style.display = "none";
    }
  }
});

  // Verificação dos campos obrigatórios
  if (!tipoPet || !porte || !pelagem || !servico) {
    alert('Por favor, preencha todos os campos obrigatórios antes de agendar.');
    return;
  }

  if (servico === "Tosa" && !tipoTosa) {
    alert("Por favor, selecione o tipo de tosa.");
    return;
  }

  // Monta mensagem base
  let mensagem = `Olá, gostaria de agendar um serviço no PetShop do Brendow:\n\n`;
  mensagem += `• Tipo de Pet: ${tipoPet}\n`;
  mensagem += `• Porte: ${porte}\n`;
  mensagem += `• Pelagem: ${pelagem}\n`;
  mensagem += `• Serviço: ${servico}\n`;

  if (servico === "Tosa") {
    mensagem += `• Tipo de Tosa: ${tipoTosa}\n`;
    mensagem += `\nObs: Todos os tipos de tosa incluem banho simples e corte de unha.\n`;
  }

  if (servico === "Banho" || servico === "Banho & Tosa") {
    mensagem += `\nObs: Todos os banhos incluem corte de unha e tosa higiênica (bumbum, patinhas e barriguinha).\n`;
  }

  mensagem += `\nPor favor, me retorne com as opções de horários disponíveis.`;

  const telefone = '5511999999999'; // Substitua com o número correto
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

  window.open(urlWhatsApp, '_blank');
}
