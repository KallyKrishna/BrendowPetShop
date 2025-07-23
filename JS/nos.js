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

  // Se já existe a seção aberta, clicar novamente irá fechá-la
  if (jaExiste) {
    jaExiste.remove();
    return;
  }

  // Remove qualquer outra seção aberta
  const existente = document.querySelector(".secao-historia");
  if (existente) existente.remove();

  // HTML da seção específica
  let conteudoHTML = "";

  if (secao === "historia") {
    conteudoHTML = `
      <div id="secao-historia" class="secao-historia ${window.innerWidth <= 480 ? 'animar-fadeDown' : 'animar-slide'}">
        <h2 class="titulo-historia">Quem Somos</h2>
        <div class="conteudo-historia">
          <p>
            O PetShop do Brendow nasceu do amor incondicional que o Brendow sempre teve pelos animais.<br>
            Aos 17 anos, ele começa a se dedicar aos pets de pequeno porte, e aos 25 realiza o sonho de ter seu próprio PetShop.<br>
            Desde então, o Brendow se dedica integralmente, a oferecer o melhor cuidado e atenção aos animais que passam por suas mãos.
          </p>
          <img src="IMAGENS/Brendow.webp" alt="Brendow" class="imagem-historia">
        </div>
      </div>
    `;
  }

if (secao === "visao") {
  conteudoHTML = `
    <div id="secao-visao" class="secao-historia ${window.innerWidth <= 480 ? 'animar-fadeDown' : 'animar-slide'}">
      <h2 class="titulo-historia">Nossa Visão</h2>
      <div class="conteudo-historia">
        <p>
          O PetShop do Brendow tem como visão ser um espaço de referência em cuidado, beleza e amor para seus AUmigos.<br>
          Mais do que apenas um PetShop, queremos ser um refúgio de carinho e equilíbrio para cada pet que nos escolher como destino de beleza e cuidado — oferecendo serviços com excelência, carinho e responsabilidade.<br>
          Acreditamos em um mundo onde cada pet seja tratado com afeto e receba a atenção que merece.
        </p>
        <img src="IMAGENS/ICOCat.webp" alt="Visão" class="imagem-historia">
      </div>
    </div>
  `;
}

if (secao === "missao") {
  conteudoHTML = `
    <div id="secao-missao" class="secao-historia ${window.innerWidth <= 480 ? 'animar-fadeDown' : 'animar-slide'}">
      <h2 class="titulo-historia">Nossa Missão</h2>
      <div class="conteudo-historia">
        <p>
          Nossa missão é proporcionar experiências de bem-estar e beleza, criando um ambiente onde os pets se sintam seguros, felizes e acolhidos.<br>
          Acreditamos que servir aos animais é um ato de amor, e por isso buscamos constantemente a excelência ao cuidar de cada pet de forma única, em cada detalhe.<br>
        </p>
        <img src="IMAGENS/ICOYork1.webp" alt="Missão" class="imagem-historia">
      </div>
    </div>
  `;
}

if (secao === "valores") {
  conteudoHTML = `
    <div id="secao-valores" class="secao-historia ${window.innerWidth <= 480 ? 'animar-fadeDown' : 'animar-slide'}">
      <h2 class="titulo-historia">Nossos Valores</h2>
      <div class="conteudo-historia">
        <p>
          Nossos valores são guiados pelo amor, respeito e compromisso com a vida animal.<br>
          Acreditamos na empatia, na escuta sensível e na importância de cada detalhe no cuidado com os pets.<br>
          Valorizamos a transparência, o acolhimento e a responsabilidade.
          Porque para nós, cada pet é parte da família.
        </p>
        <img src="IMAGENS/Brendow1.webp" alt="Valores" class="imagem-historia">
      </div>
    </div>
  `;
}

if (secao === "mascotes") {
  conteudoHTML = `
    <div id="secao-mascotes" class="secao-historia ${window.innerWidth <= 480 ? 'animar-fadeDown' : 'animar-slide'}" style="text-align: center;">
      <h2 class="titulo-historia">Nossos Mascotes</h2>
      <div class="conteudo-historia" style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-top: 20px;">
        <div class="mascote-item" style="flex: 1 1 120px; max-width: 140px;">
          <img src="IMAGENS/ICOPug.webp" alt="Bartô" style="width: 100px; height: auto; margin-bottom: 1px;" />
          <p style="font-family: var(--fonte-destaque); font-size: 1.3em; margin: 0; color: white; text-shadow: 1px 1px 3px #000;">Bartô</p>
        </div>
        <div class="mascote-item" style="flex: 1 1 120px; max-width: 140px;">
          <img src="IMAGENS/ICOCat.webp" alt="Amora" style="width: 100px; height: auto; margin-bottom: 1px;" />
          <p style="font-family: var(--fonte-destaque); font-size: 1.3em; margin: 0; color: white; text-shadow: 1px 1px 3px #000;">Amora</p>
        </div>
        <div class="mascote-item" style="flex: 1 1 120px; max-width: 140px;">
          <img src="IMAGENS/ICOYork1.webp" alt="Bella" style="width: 100px; height: auto; margin-bottom: 1px;" />
          <p style="font-family: var(--fonte-destaque); font-size: 1.3em; margin: 0; color: white; text-shadow: 1px 1px 3px #000;">Bella</p>
        </div>
        <div class="mascote-item" style="flex: 1 1 120px; max-width: 140px;">
          <img src="IMAGENS/ICOYork2.webp" alt="Duna" style="width: 100px; height: auto; margin-bottom: 1px;" />
          <p style="font-family: var(--fonte-destaque); font-size: 1.3em; margin: 0; color: white; text-shadow: 1px 1px 3px #000;">Duna</p>
        </div>
      </div>
    </div>
  `;
}




  if (window.innerWidth <= 480) {
    // MOBILE: insere logo após o botão clicado
    const botao = document.querySelector(`button[onclick="mostrarConteudo('${secao}')"]`);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = conteudoHTML;
    botao.insertAdjacentElement("afterend", tempDiv.firstElementChild);

    // Scroll automático
    setTimeout(() => {
      const novaSecao = document.getElementById("secao-historia");
      novaSecao?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

  } else {
    // DESKTOP: injeta na lateral direita
    container.innerHTML = conteudoHTML;
  }

}
