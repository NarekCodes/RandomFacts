const p = document.getElementById("p");

async function search() {
  const response = await fetch(
    "https://uselessfacts.jsph.pl/random.json?language=en"
  );
  const data = await response.json();

  p.textContent = data.text;
}

async function copyData() {
  if (p.textContent) {
    try {
      navigator.clipboard.writeText(p.textContent);
    } catch (error) {
      console.error(error);
    }
  }
}

function switchTeames() {
  document.body.classList.toggle("dark-mode");
}

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

function gray() {
  document.body.style.backgroundColor = "gray";
  document.body.style.color = "black";
}

function setWhite() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}

function setWhiteBlue() {
  document.body.style.backgroundColor = "#e0f7ff";
  document.body.style.color = "black";
}

function setWhiteRed() {
  document.body.style.backgroundColor = "#ffe0e0";
  document.body.style.color = "black";
}

function smtWentWrong() {
  window.alert("This feature is still under development!");
}
