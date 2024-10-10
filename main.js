function showSection(sectionId) {
    // Hide all sections under 'main'
    document.querySelectorAll('main > section').forEach(section => {
      section.classList.add('hidden');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
  }

  // Show the 'home' section by default on page load
  document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
  });


  let currentSlide = 0;
      const slides = document.querySelectorAll('.carousel-item');
      const indicators = document.querySelectorAll('.indicators button');

      function showSlide(index) {
          slides.forEach((slide, i) => {
              slide.classList.remove('prev', 'next', 'active');

              if (i === index) {
                  slide.classList.add('active');
              } else if (i === (index - 1 + slides.length) % slides.length) {
                  slide.classList.add('prev');
              } else if (i === (index + 1) % slides.length) {
                  slide.classList.add('next');
              }
          });

          indicators.forEach((indicator, i) => {
              indicator.classList.toggle('active', i === index);
          });
      }

      function goToSlide(index) {
          currentSlide = index;
          showSlide(currentSlide);
          resetTimer();
      }

      function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
      }

      let slideInterval = setInterval(nextSlide, 4000);

      function resetTimer() {
          clearInterval(slideInterval);
          slideInterval = setInterval(nextSlide, 4000);
      }

      // Initialize the first slide
      showSlide(currentSlide);