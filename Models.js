  function toggleState(element) {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
      element.classList.add('inactive');
      element.querySelector('i.fa-toggle-on').classList.add('fa-toggle-off');
      element.querySelector('i.fa-toggle-on').classList.remove('fa-toggle-on');
    } else {
      element.classList.remove('inactive');
      element.classList.add('active');
      element.querySelector('i.fa-toggle-off').classList.add('fa-toggle-on');
      element.querySelector('i.fa-toggle-off').classList.remove('fa-toggle-off');
    }
  }

// Pagination Functionality
function updatePaginationLinks(filteredCards = null) {
  const cards = filteredCards || document.querySelectorAll('.row .col-md-4');
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
    const featuredChecked = document.getElementById('featured').checked;
    const onlineChecked = document.getElementById('online').checked;
    let cards;

    if (featuredChecked && onlineChecked) {
      cards = document.querySelectorAll('.row .col-md-4.featured.online');
    } else if (featuredChecked) {
      cards = document.querySelectorAll('.row .col-md-4.featured');
    } else if (onlineChecked) {
      cards = document.querySelectorAll('.row .col-md-4.online');
    } else {
      cards = document.querySelectorAll('.row .col-md-4');
    }

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

// Event listener for the Featured and Online checkboxes
function filterCards() {
  const featuredChecked = document.getElementById('featured').checked;
  const onlineChecked = document.getElementById('online').checked;
  let cards;

  if (featuredChecked && onlineChecked) {
    cards = document.querySelectorAll('.row .col-md-4.featured.online');
  } else if (featuredChecked) {
    cards = document.querySelectorAll('.row .col-md-4.featured');
  } else if (onlineChecked) {
    cards = document.querySelectorAll('.row .col-md-4.online');
  } else {
    cards = document.querySelectorAll('.row .col-md-4');
  }

  // Show/hide cards based on the filters
  document.querySelectorAll('.row .col-md-4').forEach(function(card) {
    card.style.display = 'none';
  });
  cards.forEach(function(card) {
    card.style.display = 'block';
  });

  // Update pagination links based on the filtered cards
  updatePaginationLinks(cards);

  // Reset the pagination to the first page
  document.querySelector('.pagination .page-link[data-page="1"]').click();
}

document.getElementById('featured').addEventListener('change', filterCards);
document.getElementById('online').addEventListener('change', filterCards);

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