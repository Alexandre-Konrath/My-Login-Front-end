export default function mensagem(texto, cor) {
  let container_mensagem = document.getElementById('container_mensagem');
  if (container_mensagem) {
    container_mensagem.textContent = texto;
    container_mensagem.classList.add(cor); // Adiciona a classe de cor
    container_mensagem.classList.remove('hidden');

    setTimeout(() => {
      container_mensagem.classList.add('hidden');
    }, 3000);
  } else {
    console.error("Elemento container_mensagem não encontrado no DOM.");
  }
}
