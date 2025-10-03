const overlay = document.querySelector(".overlay")
const nav = document.querySelector(".nav")
const menu = document.getElementById("menu");
const topbar = document.getElementById("topbar");
const icon = document.getElementById("icon");
const bsnimg = document.querySelector(".bsn")

function ajustarBorda() {
    const isOpened = topbar.classList.contains("opened");
    const tamanho = window.innerWidth;

    if (tamanho > 500) {
        nav.style.borderBottom = "2px solid #000000";
    } else if (isOpened && tamanho <= 500) {
        nav.style.borderBottom = "2px solid #FFFEFC";
    } else {
        nav.style.borderBottom = "0";
    }
}

menu.addEventListener("click", function() {
    menu.classList.toggle("open");
    topbar.classList.toggle("opened");

    const isOpened = topbar.classList.contains("opened");
    overlay.style.opacity = isOpened ? "1" : "0";
    icon.src = isOpened ? "img/x.png" : "img/menu.png";
    ajustarBorda();
});

window.addEventListener("resize", ajustarBorda);


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

