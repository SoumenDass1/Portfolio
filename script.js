// script.js

let typed1 = new Typed('.first-line', {
    strings: ["Welcome to My portfolio, I hope you will like it!"],
    typeSpeed: 90,
    loop: false
});

let typed = new Typed('.Text', {
    strings: ["Python", "HTML", "CSS", "JavaScript"],
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
});


let typedAbout = new Typed('.typing-about', {
    strings: ["I'm a passionate developer and technology enthusiast. I love building interactive and modern websites using HTML, CSS, JavaScript, and Python. I'm currently pursuing my studies and constantly learning new technologies to improve my skills."],
    typeSpeed: 40,
    loop: false
});


document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        let progressBar = card.querySelector(".progress-fill");
        let percentage = progressBar.getAttribute("data-percent");
        progressBar.style.width = percentage + "%";
    });

    card.addEventListener("mouseleave", () => {
        let progressBar = card.querySelector(".progress-fill");
        progressBar.style.width = "0%"; 
    });
});
