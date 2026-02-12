const textEl = document.getElementById("text");
const yesEl = document.getElementById("yes");

// Words for each element
const words1 = [""];
const words2 = ["creates.","innovates.","inspires."];

let i1 = 0, j1 = 0;
let i2 = 0, j2 = 0;

const speed = 200;

// ---------- TEXT (nav) ----------
function typeText() {
  if (j1 < words1[i1].length) {
    textEl.textContent += words1[i1][j1++];
    setTimeout(typeText, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (j1 > 0) {
    textEl.textContent = words1[i1].slice(0, --j1);
    setTimeout(eraseText, speed / 2);
  } else {
    i1 = (i1 + 1) % words1.length;
    setTimeout(typeText, speed);
  }
}

// ---------- YES ----------
function typeYes() {
  if (j2 < words2[i2].length) {
    yesEl.textContent += words2[i2][j2++];
    setTimeout(typeYes, speed);
  } else {
    setTimeout(eraseYes, 1000);
  }
}

function eraseYes() {
  if (j2 > 0) {
    yesEl.textContent = words2[i2].slice(0, --j2);
    setTimeout(eraseYes, speed / 2);
  } else {
    i2 = (i2 + 1) % words2.length;
    setTimeout(typeYes, speed);
  }
}

// Start both at the same time
typeText();
typeYes();
