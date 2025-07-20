function mostrarConteudo(tema) {
  const conteudo = document.getElementById("conteudo");

  let textos = {
    historia: {
      texto: `Apaixonado por animais desde a infância…<br>
              Com 17 anos, começa a se dedicar aos pets de pequeno porte…<br>
              Aos 25, realiza o sonho de ter seu próprio pet shop…<br>
              Está sempre se aperfeiçoando…<br>
              Transparência, dedicação, zelo e organização…`,
      imagem: "IMAGENS/ICOBrendow.webp"
    },
    visao: {
      texto: `Ser referência em atendimento e cuidado com os animais de estimação,
              promovendo bem-estar e alegria a cada visita.`,
      imagem: "IMAGENS/ICOYork1.webp"
    },
    missao: {
      texto: `Oferecer serviços e produtos de qualidade, com amor, segurança e respeito
              à vida dos nossos fiéis companheiros.`,
      imagem: "IMAGENS/ICOCat.webp"
    },
    valores: {
      texto: `Compromisso, carinho, ética, confiança, organização e zelo em cada detalhe.
              Somos mais que um pet shop: somos família.`,
      imagem: "IMAGENS/ICOPug.webp"
    },
    mascotes: {
      texto: `Conheça nossos mascotes encantadores que representam a alma do PetShop do Brendow.`,
      imagem: "IMAGENS/ICOYork2.webp"
    }
  };

  let conteudoSelecionado = textos[tema];

  conteudo.innerHTML = `
    <div class="tema fade">
      <img src="${conteudoSelecionado.imagem}" alt="${tema}" />
      <p>${conteudoSelecionado.texto}</p>
    </div>
  `;
}
