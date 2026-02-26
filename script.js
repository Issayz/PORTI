/* ===============================
   TYPEWRITER
================================ */
const texts = ["a programming student,", "turning ideas into real projects!"];
const changingText = document.querySelector(".changing-text");

let textIndex = 0;
let charIndex = 0;
let typing = true;

function typeWriter() {
  if (!changingText) return;

  if (typing) {
    if (charIndex < texts[textIndex].length) {
      changingText.textContent += texts[textIndex][charIndex];
      charIndex++;
      setTimeout(typeWriter, 120);
    } else {
      typing = false;
      setTimeout(typeWriter, 1500);
    }
  } else {
    if (charIndex > 0) {
      changingText.textContent =
        texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, 80);
    } else {
      typing = true;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, 400);
    }
  }
}

typeWriter();

function scaleSite() {
  const container = document.getElementById('scale-container');
  let scale = window.innerWidth / 1200;
  if (scale > 1) scale = 1;        // nunca aumenta além do tamanho real
  if (scale < 0.7) scale = 0.7;    // nunca fica menor que 70%
  container.style.transform = `scale(${scale})`;
  container.style.width = `${1200 * scale}px`;
}

document.querySelector('.fa-code')

document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});
