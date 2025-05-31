// Copia o código PIX para a área de transferência
function copiarPix() {
  const codigoPix = document.getElementById("codigoPix").value;

  navigator.clipboard.writeText(codigoPix)
    .then(() => {
      alert("Código PIX copiado! Obrigado por apoiar nosso projeto e ajudar a salvar cada vez mais vidas!💖🌍");
    })
    .catch(err => {
      console.error("Erro ao copiar: ", err);
      alert("Não foi possível copiar o código PIX.");
    });
}

// Mostra ou esconde o botão "Voltar ao Topo" ao rolar a página
window.onscroll = function () {
  const botao = document.getElementById("btnTopo");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    botao.style.display = "block"; // Mostra o botão
  } else {
    botao.style.display = "none"; // Esconde o botão
  }
};

// Rola suavemente para o topo da página
function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

