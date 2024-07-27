// Pagination Functionality
function updatePaginationLinks() {
  const cards = document.querySelectorAll('.row .col-md-4');
  const totalItems = cards.length;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item');
    if (i === 1) {
      pageItem.classList.add('active');
    }

    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.href = '#';
    pageLink.dataset.page = i;
    pageLink.textContent = i;

    pageItem.appendChild(pageLink);
    paginationContainer.appendChild(pageItem);
  }
}

// Event listener for pagination links
document.querySelector('.pagination').addEventListener('click', function(event) {
  if (event.target.classList.contains('page-link')) {
    event.preventDefault();

    const page = parseInt(event.target.dataset.page);
    const cards = document.querySelectorAll('.row .col-md-4');
    const itemsPerPage = 9;

    // Remove active class from all cards and hide them
    cards.forEach(function(card) {
      card.classList.remove('active');
      card.style.display = 'none';
    });

    // Show cards for the selected page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    for (let i = startIndex; i < endIndex; i++) {
      if (cards[i]) {
        cards[i].classList.add('active');
        cards[i].style.display = 'block';
      }
    }

    // Update active class for pagination links
    document.querySelectorAll('.pagination .page-item').forEach(function(item) {
      item.classList.remove('active');
    });
    event.target.parentElement.classList.add('active');
  }
});

// Call the function to initialize pagination links
updatePaginationLinks();

// Sliding functionality
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function slideImages() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease';
      }, 50);
    } else {
      slider.style.transform = `translateX(-${currentIndex * 160}px)`;
    }
  }

  // Automatically slide every 3 seconds
  setInterval(slideImages, 100000);
});

// Add click event listener to each slide
slides.forEach(slide => {
  slide.addEventListener('click', function() {
    const modelId = this.getAttribute('data-model-id');
    // Redirect to the image details page
    window.location.href = `/image-details/${modelId}`;
  });
});
