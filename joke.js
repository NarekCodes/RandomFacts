//https://official-joke-api.appspot.com/random_joke
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");


async function jokes(){
    try{
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
    
        p1.textContent = `The question: ${data.setup}`;
        p2.textContent = `The answer: ${data.punchline}`;
    }
    catch(error){
        console.error(error);
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

  async function copyData() {
    if (p1.textContent && p2.textContent) {
      try {
        navigator.clipboard.writeText(p1.textContent + " " + p2.textContent);
      } catch (error) {
        console.error(error);
      }
    }
  }

