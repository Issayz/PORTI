   // TYPEWRITER
const texts = ["estudante de", "desenvolvimento de sistemas"];
const changingText = document.querySelector(".changing-text");
let index = 0;
let charIndex = 0;
let typing = true;

function type() {
  if (typing) {
    if (charIndex < texts[index].length) {
      changingText.textContent += texts[index][charIndex];
      charIndex++;
      setTimeout(type, 150);
    } else {
      typing = false;
      setTimeout(type, 2000);
    }
  } else {
    if (charIndex > 0) {
      changingText.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 100);
    } else {
      typing = true;
      index = (index + 1) % texts.length;
      setTimeout(type, 500);
    }
  }
}
type();

   // SCROLL E ANIMAÇÕES 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.links a');

window.addEventListener('scroll', () => {

   // MOSTRA SCROLL BAR TEMPORARIAMENTE 
  document.body.classList.add('show-scrollbar');
  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(() => {
    document.body.classList.remove('show-scrollbar');
  }, 1000);

   // ANIMAÇÃO DAS SEÇÕES
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100; 
    if (sectionTop < triggerPoint) {
      section.classList.add('visible');
    }
  });
});

   // NAVBAR 
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }
});

   //  SKILL BARS 
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-progress").forEach(bar => {
    const width = bar.getAttribute("data-progress"); 
    bar.style.width = width; 
  });
});

(function () {
  function preencherBarras() {
    const barras = document.querySelectorAll('.skill-progress');
    if (!barras.length) return;

    barras.forEach ? barras.forEach(set) : [].forEach.call(barras, set);

    function set(bar) {
      const raw = bar.getAttribute('data-width') || bar.getAttribute('data-progress') || '0';
      const num = parseFloat(String(raw).replace(',', '.')) || 0;
      bar.style.width = num + '%';     
    }
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".animar");
  elementos.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("aparecer");
    }
  });
});

setTimeout(() => {
  document.querySelector("#Início").classList.add("aparecer");
  document.querySelector("#sobre").classList.add("aparecer");
}, 300);


