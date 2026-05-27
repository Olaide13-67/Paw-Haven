// ================================================
// ACTIVE NAV LINK — highlight current page
// ================================================
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ================================================
// NAVBAR SCROLL EFFECT
// ================================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ================================================
// MOBILE MENU
// ================================================
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.textContent = '☰';
  });
});

// ================================================
// HERO SLIDER
// ================================================
let slideIndex = 0;
const slides = document.querySelectorAll('.slides');
const dots   = document.querySelectorAll('.dot');

function showSlides() {
  slides.forEach(s => s.style.display = 'none');
  dots.forEach(d => d.classList.remove('active'));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = 'block';
  if (dots[slideIndex - 1]) dots[slideIndex - 1].classList.add('active');

  setTimeout(showSlides, 4000);
}

if (slides.length) showSlides();

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

if (prevBtn) prevBtn.addEventListener('click', () => { slideIndex -= 2; if (slideIndex < 0) slideIndex = slides.length - 1; showSlides(); });
if (nextBtn) nextBtn.addEventListener('click', () => { showSlides(); });

// ================================================
// SEARCH FILTER
// ================================================
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keyup', () => {
    const val = searchInput.value.toLowerCase();
    document.querySelectorAll('.searchable').forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(val) ? 'block' : 'none';
    });
  });
}

// ================================================
// CART COUNTER
// ================================================
let count = 0;
document.querySelectorAll('.cart-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    document.getElementById('cart-count').innerText = count;
    const cartEl = document.querySelector('.cart');
    if (cartEl) {
      cartEl.style.transform = 'scale(1.15)';
      setTimeout(() => cartEl.style.transform = '', 220);
    }
  });
});

// ================================================
// BACK TO TOP
// ================================================
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = document.documentElement.scrollTop > 200 ? 'flex' : 'none';
});
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// ================================================
// CONTACT FORM
// ================================================
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent successfully!');
    form.reset();
  });
}

// ================================================
// FAQ ACCORDION
// ================================================
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => q.closest('.faq-item').classList.toggle('open'));
});
