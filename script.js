const themeBtn = document.querySelector(".themebox");
const body = document.body;
const icon = document.querySelector(".icon");

/* LOAD THEME ON PAGE LOAD */
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.className = savedTheme;
    icon.textContent = savedTheme === "light" ? "☀️" : "🌙";
}

/* TOGGLE THEME */
themeBtn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light");
    body.classList.toggle("dark");

    const theme = isLight ? "light" : "dark";
    localStorage.setItem("theme", theme);

    icon.textContent = theme === "light" ? "☀️" : "🌙";
});


const cursor = document.querySelector(".cursor-dot");

let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    dotX += (mouseX - dotX) * 0.08;
    dotY += (mouseY - dotY) * 0.08;

    cursor.style.transform = `translate(${dotX}px, ${dotY}px)`;

    requestAnimationFrame(animateCursor);
}

animateCursor();
