function animateCounter(targetElement, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = range > 100 ? 100 : 1;
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
  const counters = [
    { selector: '.counter1', end: 50000 },
    { selector: '.counter2', end: 32472 },
    { selector: '.counter3', end: 10 }
  ];

  counters.forEach(counter => {
    const counterElement = document.querySelector(counter.selector);
    if (counterElement) {
      animateCounter(counterElement, 0, counter.end, 900);
    }
  });
});
