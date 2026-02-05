function sayYes() {
    const msg = document.getElementById("message");
    msg.style.display = "block";
    msg.innerHTML = "YAY Muinat!!! 😍💖 Olatunde loves you forever 🌹✨";
  }
  
  function moveNo() {
    const noBtn = document.querySelector(".no");
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
  
  // Floating Hearts Generator
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
  
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
  
  setInterval(createHeart, 400);
  