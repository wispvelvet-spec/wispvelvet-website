// ======================
// PARTICLES
// ======================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2.8 + 1.2;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * 0.4 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.35;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = `rgba(192, 38, 211, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (particles.length < 140) particles.push(new Particle());
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(animateParticles);
}

// ======================
// MOBILE MENU
// ======================
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// ======================
// INIT
// ======================
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateParticles();

console.log("%c wispvelvet website ready for debut 🖤", "color: #c026d3; font-family: Cinzel;");