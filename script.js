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
      setTimeout(type, 150); // velocidade da digitação
    } else {
      typing = false;
      setTimeout(type, 2000); // pausa antes de apagar
    }
  } else {
    if (charIndex > 0) {
      changingText.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 100); // velocidade de apagar
    } else {
      typing = true;
      index = (index + 1) % texts.length;
      setTimeout(type, 500); // pausa antes de começar a digitar novo texto
    }
  }
}

type();

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
