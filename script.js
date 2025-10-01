const overlay = document.querySelector(".overlay")
const nav = document.querySelector(".nav")
const menu = document.getElementById("menu");
const topbar = document.getElementById("topbar");
const icon = document.getElementById("icon");




let scrollY = 0;

menu.addEventListener("click", function() {
    menu.classList.toggle("open");
    topbar.classList.toggle("opened");

    const isOpened = topbar.classList.contains("opened");

    overlay.style.opacity = isOpened ? "1" : "0";
    nav.style.borderBottom = isOpened ? "2px solid #FFFEFC" : "0";
    icon.src = isOpened ? "img/x.png" : "img/menu.png";

});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(navmargin) {
    navmargin.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const navHeight = nav.offsetHeight;
    const targetPos = target.offsetTop - navHeight;
    window.scrollTo({
      top: targetPos,
      behavior: 'smooth'
    });
  });
});




document.querySelectorAll(".topbar a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
        topbar.classList.remove("opened");
        overlay.style.opacity = "0";
        nav.style.borderBottom = "0";
        icon.src = "img/menu.png";
        document.body.style.overflow = "auto"
    });
});








/*
*{
    margin: 0;
    padding: 0;
} Estilo básico do corpo 
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
 Estilo do botão 
.menu-btn {
    position: absolute;
    top: 40px;
    left: 20px;
    background-color: aqua;
    border: none;
    cursor: pointer;
    z-index: 1;
}
 Estilo da barra de navegação (inicialmente escondida) 
.nav-menu {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    transition: top 0.3s ease;  Animação suave para o menu descer 
}

.nav-menu ul {
    list-style-type: none;
    padding: 0;
}

.nav-menu ul li {
    margin: 10px 0;
}

.nav-menu ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

Estilo para quando o botão for clicado (para trocar a imagem) 
.menu-btn.open #icon {
    content: url('');  Troca a imagem para o X 
}







<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barra de Navegação</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- Botão com ícone de menu -->
    <button id="btnMenu" class="menu-btn">
        <img id="icon" src="img/menu.png" alt="Menu Icon" />
    </button>

    <!-- Barra de Navegação -->
    <div id="navMenu" class="nav-menu">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </div>

    <script src="script.js"></script>
</body>
</html>
*/