// Detect when elements come into view
const sliders = document.querySelectorAll('.slide-in');

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sliders.forEach(slide => {
  appearOnScroll.observe(slide);
});
