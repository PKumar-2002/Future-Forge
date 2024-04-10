// home_script.js

// JavaScript for controlling the carousel
let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-image').length;

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();

  // Check if it's the last image and navigate to the next HTML page
  if (currentIndex === 0) {
    navigateToNextPage();
  }
}

function updateCarousel() {
  const carouselImages = document.querySelector('.carousel-images');
  const transformValue = -currentIndex * 100 + '%';
  carouselImages.style.transform = 'translateX(' + transformValue + ')';
}

function navigateToNextPage() {
  // Change 'signup.html' to the desired HTML page you want to link to
  window.location.href = '../Sign Up Page/signup.html';
}
