/* ===============================
   TYPEWRITER
================================ */
const texts = ["estudante de", "desenvolvimento de sistemas"];
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

