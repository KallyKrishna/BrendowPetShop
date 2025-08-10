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

// Função para alternar entre jogos
function mostrarJogo(id, btn) {
  document.querySelectorAll('.jogo').forEach(j => j.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ===== Quiz Pet ===== */
(function(){
  const perguntas = [
    {q:"Qual desses animais é um cão?", op:["🐱 Gato","🐶 Cachorro","🐭 Rato","🐰 Coelho"], resp:1},
    {q:"Qual é o alimento favorito dos gatos?", op:["Peixe","Carne","Ração","Frutas"], resp:0},
    {q:"Qual desses é um animal de estimação comum?", op:["Tigre","Papagaio","Leão","Elefante"], resp:1},
    {q:"Qual animal mia?", op:["Cachorro","Gato","Coelho","Peixe"], resp:1},
    {q:"Qual é o melhor amigo do homem?", op:["Gato","Cachorro","Pássaro","Peixe"], resp:1}
  ];
  let indice = 0;
  let acertou = 0;
  const pPergunta = document.getElementById('quiz-pergunta');
  const divOpcoes = document.getElementById('quiz-opcoes');
  const divResultado = document.getElementById('quiz-resultado');
  const btnReiniciar = document.getElementById('quiz-reiniciar');

  function mostrarPergunta() {
    divResultado.textContent = "";
    pPergunta.textContent = perguntas[indice].q;
    divOpcoes.innerHTML = "";
    perguntas[indice].op.forEach((op, i) => {
      const btn = document.createElement('div');
      btn.className = 'quiz-opcao';
      btn.textContent = op;
      btn.onclick = () => selecionarResposta(i);
      divOpcoes.appendChild(btn);
    });
  }

  function selecionarResposta(i) {
    if(divResultado.textContent) return; // já respondeu
    const opcoes = divOpcoes.children;
    if(i === perguntas[indice].resp) {
      acertou++;
      opcoes[i].classList.add('quiz-correto');
    } else {
      opcoes[i].classList.add('quiz-incorreto');
      opcoes[perguntas[indice].resp].classList.add('quiz-correto');
    }
    divResultado.textContent = "Resposta " + (i === perguntas[indice].resp ? "correta! 🎉" : "errada 😞");
    indice++;
    if(indice < perguntas.length) {
      btnReiniciar.style.display = "inline-block";
      btnReiniciar.textContent = "Próxima Pergunta";
    } else {
      divResultado.textContent += ` Você acertou ${acertou} de ${perguntas.length}.`;
      btnReiniciar.textContent = "Reiniciar Quiz";
      btnReiniciar.style.display = "inline-block";
    }
  }

  btnReiniciar.onclick = () => {
    if(indice < perguntas.length) {
      mostrarPergunta();
      btnReiniciar.style.display = "none";
    } else {
      indice = 0;
      acertou = 0;
      mostrarPergunta();
      divResultado.textContent = "";
      btnReiniciar.style.display = "none";
    }
  };

  mostrarPergunta();
})();

/* ===== Jogo da Velha ===== */
(function(){
  const tabuleiro = document.getElementById('velha-tabuleiro');
  const info = document.getElementById('velha-info');
  const turnoSpan = document.getElementById('velha-turno');
  const btnResetar = document.getElementById('velha-resetar');

  let turno = '🐾'; 
  let jogoAtivo = true;
  let estadoTabuleiro = ["", "", "", "", "", "", "", "", ""];

  const combinacoesVencedoras = [
    [0,1,2],[3,4,5],[6,7,8], 
    [0,3,6],[1,4,7],[2,5,8], 
    [0,4,8],[2,4,6]          
  ];

  function handleClick(e) {
    const celula = e.target;
    const idx = parseInt(celula.dataset.celula);
    if(!jogoAtivo || estadoTabuleiro[idx] !== "") return;

    estadoTabuleiro[idx] = turno;
    celula.textContent = turno;

    if(verificarVencedor()) {
      info.textContent = `Jogador ${turno} venceu! 🎉`;
      jogoAtivo = false;
      return;
    }
    if(!estadoTabuleiro.includes("")) {
      info.textContent = "Empate! 🤝";
      jogoAtivo = false;
      return;
    }

    turno = turno === '🐾' ? '🦴' : '🐾';
    turnoSpan.textContent = turno;
    info.textContent = `Turno: `;
  }

  function verificarVencedor() {
    return combinacoesVencedoras.some(comb => {
      return comb.every(i => estadoTabuleiro[i] === turno);
    });
  }

  function resetar() {
    estadoTabuleiro.fill("");
    const celulas = tabuleiro.querySelectorAll('.velha-celula');
    celulas.forEach(cel => cel.textContent = "");
    turno = '🐾';
    jogoAtivo = true;
    turnoSpan.textContent = turno;
    info.textContent = `Turno: `;
  }

  tabuleiro.addEventListener('click', handleClick);
  btnResetar.addEventListener('click', resetar);
  resetar();
})();

/* ===== Jogo da Memória ===== */
(function(){
  const tabuleiro = document.getElementById('memoria-tabuleiro');
  const info = document.getElementById('memoria-info');
  const btnReset = document.getElementById('memoria-reset');

  const cartas = ["🐶","🐱","🐰","🦜","🐹","🐢"];
  let deck = [];
  let primeiraCarta = null;
  let segundaCarta = null;
  let bloqueio = false;
  let paresEncontrados = 0;

  function embaralhar(array) {
    for(let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function criarDeck() {
    deck = cartas.concat(cartas);
    embaralhar(deck);
  }

  function criarTabuleiro() {
    tabuleiro.innerHTML = "";
    deck.forEach((carta, i) => {
      const div = document.createElement('div');
      div.className = 'memoria-carta';
      div.dataset.carta = carta;
      div.addEventListener('click', virarCarta);
      div.innerHTML = `
        <div class="memoria-face memoria-front">❓</div>
        <div class="memoria-face memoria-back">${carta}</div>
      `;
      tabuleiro.appendChild(div);
    });
  }

  function virarCarta(e) {
    if(bloqueio) return;
    const carta = e.currentTarget;
    if(carta === primeiraCarta) return;

    carta.classList.add('flipped');
    if(!primeiraCarta) {
      primeiraCarta = carta;
      return;
    }
    segundaCarta = carta;
    bloqueio = true;

    if(primeiraCarta.dataset.carta === segundaCarta.dataset.carta) {
      paresEncontrados++;
      resetarTurno();
      if(paresEncontrados === cartas.length) {
        info.textContent = "Parabéns! Você encontrou todos os pares! 🎉";
      }
    } else {
      setTimeout(() => {
        primeiraCarta.classList.remove('flipped');
        segundaCarta.classList.remove('flipped');
        resetarTurno();
      }, 1000);
    }
  }

  function resetarTurno() {
    [primeiraCarta, segundaCarta] = [null, null];
    bloqueio = false;
  }

  btnReset.addEventListener('click', () => {
    criarDeck();
    criarTabuleiro();
    paresEncontrados = 0;
    info.textContent = "";
  });

  criarDeck();
  criarTabuleiro();
})();


/* ===== Forca Pet com Dicas ===== */
(function(){
  const palavras = [
    { palavra: "gato", dica: "Animal que mia" },
    { palavra: "cachorro", dica: "Melhor amigo do homem" },
    { palavra: "hamster", dica: "Pequeno roedor de estimação" },
    { palavra: "coelho", dica: "Sabe pular muito rápido" },
    { palavra: "passaro", dica: "Tem asas e pode voar" },
    { palavra: "peixe", dica: "Vive na água e nada" }
  ];
  
  let palavraSecreta = "";
  let dicaAtual = "";
  let letrasUsadas = [];
  let erros = 0;
  const maxErros = 6;

  const palavraDiv = document.getElementById('forca-palavra');
  const letrasDiv = document.getElementById('forca-letras');
  const infoDiv = document.getElementById('forca-info');
  const dicaDiv = document.getElementById('forca-dica'); // nova div para a dica
  const btnReset = document.getElementById('forca-reset');

  function escolherPalavra() {
    const item = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSecreta = item.palavra.toUpperCase();
    dicaAtual = item.dica;
  }

  function mostrarPalavra() {
    palavraDiv.textContent = "";
    for(const letra of palavraSecreta) {
      if(letrasUsadas.includes(letra)) {
        palavraDiv.textContent += letra + " ";
      } else {
        palavraDiv.textContent += "_ ";
      }
    }
  }

  function criarTeclado() {
    letrasDiv.innerHTML = "";
    for(let i=65; i<=90; i++) {
      const letra = String.fromCharCode(i);
      const btn = document.createElement('button');
      btn.classList.add('forca-letra');
      btn.textContent = letra;
      btn.onclick = () => escolherLetra(letra, btn);
      letrasDiv.appendChild(btn);
    }
  }

  function escolherLetra(letra, botao) {
    if(letrasUsadas.includes(letra)) return;
    letrasUsadas.push(letra);
    botao.disabled = true;

    if(!palavraSecreta.includes(letra)) {
      erros++;
      infoDiv.textContent = `Erros: ${erros} de ${maxErros}`;
    } else {
      infoDiv.textContent = `Erros: ${erros} de ${maxErros}`;
    }

    mostrarPalavra();

    if(erros >= maxErros) {
      infoDiv.textContent = `Você perdeu! A palavra era: ${palavraSecreta}`;
      bloquearTeclado();
    } else if(!palavraDiv.textContent.includes("_")) {
      infoDiv.textContent = "Parabéns, você ganhou! 🎉";
      bloquearTeclado();
    }
  }

  function bloquearTeclado() {
    letrasDiv.querySelectorAll('button').forEach(b => b.disabled = true);
  }

  btnReset.onclick = () => {
    erros = 0;
    letrasUsadas = [];
    infoDiv.textContent = "";
    escolherPalavra();
    mostrarPalavra();
    criarTeclado();
    dicaDiv.textContent = `Dica: ${dicaAtual}`;
  };

  btnReset.click();
})();


// Animação "em construção"
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
  imgElement.classList.add("fade");

  setTimeout(() => {
    indexAtual = (indexAtual + 1) % imagens.length;
    imgElement.src = imagens[indexAtual];

    imgElement.onload = () => {
      imgElement.classList.remove("fade");
    };
  }, 500);
}

setInterval(trocarImagem, 2000);





