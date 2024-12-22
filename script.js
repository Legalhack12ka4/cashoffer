

  // humburger menu
  function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('visible');
  }

  // slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');

  function updateSlider() {
    const slider = document.querySelector('.testimonial-slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function moveSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateSlider();
  }

  function setSlide(index) {
    currentSlide = index;
    updateSlider();
  }
  updateSlider();