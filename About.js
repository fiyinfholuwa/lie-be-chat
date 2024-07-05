function animateCounter(targetElement, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = 100; 
    let stepTime = Math.abs(Math.floor(duration / (range / increment)));
    if (stepTime < 1) stepTime = 1; 
    let timer = setInterval(function() {
      current += increment;
      if (current > end) {
        current = end; 
      }
      targetElement.textContent = current.toLocaleString(); 
      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // Trigger counter animation when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.querySelector('.counter');
    animateCounter(counterElement, 0, 50000, 900);
  });