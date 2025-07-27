const toggleBtn = document.querySelector('.navbar button');
  const body = document.body;

  // toggleBtn.addEventListener('click', () => {
  //   body.classList.toggle('dark-mode');
  //   body.classList.toggle('light-mode');
  // });

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

// Animate outline for smooth trailing effect
function animateOutline() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;
  cursorOutline.style.left = `${outlineX}px`;
  cursorOutline.style.top = `${outlineY}px`;
  requestAnimationFrame(animateOutline);
}
animateOutline();


const scrollContainer = document.getElementById('certificateScroll');
const cardWidth = 300 + 32; // card width + gap
const leftBtn = document.getElementById('scrollLeft');
const rightBtn = document.getElementById('scrollRight');

function updateArrowVisibility() {
  // Hide left arrow if at the start
  if (scrollContainer.scrollLeft <= 0) {
    leftBtn.style.display = 'none';
  } else {
    leftBtn.style.display = 'block';
  }
  // Hide right arrow if at the end
  if (
    scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
    scrollContainer.scrollWidth - 2
  ) {
    rightBtn.style.display = 'none';
  } else {
    rightBtn.style.display = 'block';
  }
}

// Initial check
updateArrowVisibility();

// On scroll, update arrow visibility
scrollContainer.addEventListener('scroll', updateArrowVisibility);

// On click, scroll and update
leftBtn.onclick = () => {
  scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  setTimeout(updateArrowVisibility, 400);
};
rightBtn.onclick = () => {
  scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
  setTimeout(updateArrowVisibility, 400);
};


// Show button when user scrolls down 200px

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  const btn = document.getElementById("topBtn");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
// Scroll to top when button clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const hamburger = document.getElementById('hamburger-menu');
  const navbar = document.querySelector('.navbar');
  hamburger.onclick = function() {
    navbar.classList.toggle('active');
  }
