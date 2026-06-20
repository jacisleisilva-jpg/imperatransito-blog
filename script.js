const posts = [
  {
    titulo: "Placas de Trânsito",
    texto: "Aprenda todas as sinalizações",
    imagem: "https://images.unsplash.com/photo-1581091215367-59ab6b4c9c9b",
    link: "placas.html"
  },
  {
    titulo: "Pontuação CNH",
    texto: "Como funciona na prática",
    imagem: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    link: "cnh.html"
  },
  {
    titulo: "Multas",
    texto: "Evite as mais comuns",
    imagem: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    link: "multas.html"
  },
  {
    titulo: "Direção Segura",
    texto: "Boas práticas no dia a dia",
    imagem: "https://images.unsplash.com/photo-1493238792000-8113da705763",
    link: "direcao.html"
  }
];

const container = document.getElementById("cards");

posts.forEach((post, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${post.imagem}" alt="">
    <div class="card-content">
      <h3>${post.titulo}</h3>
      <p>${post.texto}</p>
    </div>
  `;

  card.onclick = () => window.open(post.link, '_blank');

  container.appendChild(card);

  setTimeout(() => {
    card.classList.add("show");
  }, index * 150);
});