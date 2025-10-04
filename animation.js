// Select all the elements you want to animate
const elements = document.querySelectorAll('.fade-in-element');

// Create the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once it has appeared
    }
  });
}, {
  threshold: 0.1 // triggers when 10% of the element is visible
});

// Observe each target element
elements.forEach(el => observer.observe(el));

