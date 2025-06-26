let typed = new Typed('.text', {
  strings: ["Python", "HTML", "CSS", "JavaScript", "React", "Figma", "Photopea"],
  typeSpeed: 100,
  backSpeed: 40,
  backDelay: 2000,
  loop: true
});
// about.js
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.querySelector(".read-more");
  new Typed(".text2", {
    strings: [
      "A passionate developer and technology enthusiast. I love building interactive and modern websites using HTML, CSS, JavaScript. I'm currently pursuing my studies in B.Tech Computer Science and Artificial Intelligence and constantly learning new technologies to improve my skills."
    ],
    typeSpeed: 40,
    loop: false,
    showCursor: false,
    onComplete: function () {
      readMoreBtn.classList.remove("hidden");
      readMoreBtn.classList.add("visible");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flip-card");
  const container = document.querySelector(".project-box");

  cards.forEach(card => {
    let x = Math.random() * (container.clientWidth - card.clientWidth);
    let y = Math.random() * (container.clientHeight - card.clientHeight);
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    let isPaused = false;

    card.style.left = `${x}px`;
    card.style.top = `${y}px`;

    // Event: pause on hover
    card.addEventListener("mouseenter", () => {
      isPaused = true;
      card.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
    });

    // Event: resume after hover
    card.addEventListener("mouseleave", () => {
      isPaused = false;
      card.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
    });

    function move() {
      if (!isPaused) {
        x += dx;
        y += dy;

        if (x <= 0 || x + card.clientWidth >= container.clientWidth) dx *= -1;
        if (y <= 0 || y + card.clientHeight >= container.clientHeight) dy *= -1;

        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
      }

      requestAnimationFrame(move);
    }

    move();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".project-box");

  for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position
    star.style.left = `${Math.random() * container.clientWidth}px`;
    star.style.top = `${Math.random() * container.clientHeight}px`;

    // 💡 Random blink speed and delay
    const duration = (1 + Math.random() * 2).toFixed(2); // 1s to 3s
    const delay = (Math.random() * 5).toFixed(2);        // 0s to 5s

    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    container.appendChild(star);
  }
});

const container = document.querySelector('.stars-container');

for (let i = 0; i < 60; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  container.appendChild(star);
}

const meteorContainer = document.querySelector('.meteor-container');

function createMeteor() {
  const meteor = document.createElement('div');
  meteor.classList.add('meteor');
  meteor.style.top = `${Math.random() * 70}%`;
  meteor.style.left = `${Math.random() * 100}%`;
  meteor.style.animationDelay = `0s`;

  meteorContainer.appendChild(meteor);

  // Remove after animation completes
  setTimeout(() => {
    meteor.remove();
  }, 1200);
}

// Create meteors continuously without pause
setInterval(() => {
  createMeteor();
}, 800); // M
