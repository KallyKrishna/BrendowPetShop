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

function mostrarConteudo(secao) {
  const container = document.getElementById("conteudo-principal");
  const jaExiste = document.getElementById("secao-" + secao);

  if (jaExiste) {
    jaExiste.remove();
    return;
  }

  document.querySelectorAll(".secao-termos, .secao-privacidade, .secao-cookies, .secao-cancelamento")
  .forEach(secaoAberta => secaoAberta.remove());

  let conteudoHTML = "";

  if (secao === "termos") {
    conteudoHTML = `
      <div id="secao-termos" class="secao-termos ${window.innerWidth <= 480 ? 'animar-fadeDown' : 'animar-slide'}">
        <h2 class="titulo-termos">Termos de Uso</h2>
        <div class="conteudo-termos">
          <p>
            Ao acessar e utilizar o site do PetShop do Brendow, você concorda com os termos e condições aqui descritos. O uso deste site é permitido apenas para maiores de 18 anos ou menores devidamente autorizados por seus responsáveis legais. 
            É proibido usar este site para fins ilegais ou não autorizados. Reservamo-nos o direito de modificar estes termos a qualquer momento, sendo responsabilidade do usuário consultá-los periodicamente.
            Todos os direitos de imagens, textos e conteúdos são protegidos por lei. Qualquer violação pode resultar em medidas legais.
          </p>
          <img src="IMAGENS/ICOCat.webp" alt="Ícone Termos" class="imagem-termos">
        </div>
      </div>
    `;
  }

  if (secao === "privacidade") {
    conteudoHTML = `
      <div id="secao-privacidade" class="secao-privacidade ${window.innerWidth <= 480 ? 'animar-fadeDown' : 'animar-slide'}">
        <h2 class="titulo-privacidade">Política de Privacidade</h2>
        <div class="conteudo-privacidade">
          <p>
            A sua privacidade é muito importante para nós. Coletamos apenas os dados essenciais para o funcionamento do site e para oferecer uma melhor experiência ao usuário, como nome, e-mail e telefone em formulários de contato.
            Os dados são armazenados com segurança e jamais serão vendidos ou compartilhados com terceiros sem seu consentimento, exceto quando exigido por lei. 
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Para isso, entre em contato conosco pelos meios disponíveis no site.
          </p>
          <img src="IMAGENS/ICOYork1.webp" alt="Ícone Privacidade" class="imagem-privacidade">
        </div>
      </div>
    `;
  }

  if (secao === "cookies") {
    conteudoHTML = `
      <div id="secao-cookies" class="secao-cookies ${window.innerWidth <= 480 ? 'animar-fadeDown' : 'animar-slide'}">
        <h2 class="titulo-cookies">Política de Cookies</h2>
        <div class="conteudo-cookies">
          <p>
            Utilizamos cookies para melhorar sua navegação, personalizar conteúdo e analisar nosso tráfego. Cookies são pequenos arquivos armazenados no seu dispositivo que ajudam o site a lembrar de você.
            Você pode controlar e/ou desativar cookies nas configurações do seu navegador. No entanto, ao desativá-los, certas funcionalidades do site podem não funcionar corretamente.
            Ao continuar navegando, você concorda com o uso de cookies conforme descrito nesta política.
          </p>
          <img src="IMAGENS/ICOPug.webp" alt="Ícone Cookies" class="imagem-cookies">
        </div>
      </div>
    `;
  }

  if (secao === "cancelamento") {
    conteudoHTML = `
      <div id="secao-cancelamento" class="secao-cancelamento ${window.innerWidth <= 480 ? 'animar-fadeDown' : 'animar-slide'}">
        <h2 class="titulo-cancelamento">Política de Cancelamento</h2>
        <div class="conteudo-cancelamento">
          <p>
            Para reagendamentos ou cancelamentos de serviços, solicitamos que o cliente entre em contato com, no mínimo, 24 horas de antecedência. Cancelamentos fora desse prazo poderão ser cobrados parcial ou integralmente, a depender do serviço contratado.
            Em casos de arrependimento, o reembolso e/ou reclamação só será atendido até o prazo máximo de 24 horas após a compra, conforme o Código de Defesa do Consumidor. Após esse prazo, a devolução poderá ser convertida em crédito para uso futuro, em produtos e/ou serviços da loja, à critério do cliente.
          </p>
          <img src="IMAGENS/ICOYork2.webp" alt="Ícone Cancelamento" class="imagem-cancelamento">
        </div>
      </div>
    `;
  }

  if (window.innerWidth <= 480) {
    const botao = document.querySelector(`button[onclick="mostrarConteudo('${secao}')"]`);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = conteudoHTML;
    botao.insertAdjacentElement("afterend", tempDiv.firstElementChild);

    setTimeout(() => {
      const novaSecao = document.getElementById("secao-" + secao);
      novaSecao?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

  } else {
    container.innerHTML = conteudoHTML;
  }
}

// Ao carregar a página, verifica se há uma seção na URL
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const secao = params.get('secao');

  if (secao) {
    mostrarConteudo(secao);
  }
});
