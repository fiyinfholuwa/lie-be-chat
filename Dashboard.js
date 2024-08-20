document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const dashboardContent = document.querySelector('.dashboard-content');
  const openIcon = document.querySelector('.icon-open');
  const closeIcon = document.querySelector('.icon-close');
  const topbar = document.querySelector(".topbar");

  // Check if all elements are selected correctly
  if (!toggleButton || !sidebar || !dashboardContent || !openIcon || !closeIcon || !topbar) {
    console.error('One or more elements could not be found. Please check your HTML structure.');
    return;
  }

  // Function to toggle sidebar
  const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    dashboardContent.classList.toggle('active');
    
    // Toggle icons
    const sidebarIsActive = sidebar.classList.contains('active');
    openIcon.style.display = sidebarIsActive ? 'none' : 'block';
    closeIcon.style.display = sidebarIsActive ? 'block' : 'none';
  };

  // Toggle sidebar on button click
  toggleButton.addEventListener('click', function () {
    toggleSidebar();

    // Hide or show topbar on mobile screens
    if (window.innerWidth <= 768) {
      const isSidebarHidden = sidebar.classList.contains("active"); // Toggle based on active status
      topbar.classList.toggle("topbar-hidden", isSidebarHidden);
    }
  });
});

// STATUS UPDATE.
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('status-modal');
  const modalImage = document.getElementById('status-image');
  const modalText = document.getElementById('status-text');
  const closeModal = document.querySelector('.close');
  const progressBar = document.querySelector('.status-progress-bar');
  
  const statusUpload = document.getElementById('status-upload');
  const statusCaption = document.getElementById('status-caption');
  const uploadStatusButton = document.getElementById('upload-status');
  
  const statusesContainer = document.querySelector('.status-scroller');

  // Define the duration for which the status is displayed (in milliseconds)
  const statusDuration = 5000; // 5 seconds

  // Get all status elements
  const statuses = document.querySelectorAll('.status');

  statuses.forEach(function (status) {
    status.addEventListener('click', function () {
      const statusText = this.getAttribute('data-status-text');
      const statusImage = this.getAttribute('data-status-image');

      modalText.textContent = statusText;
      modalImage.src = statusImage;

      modal.style.display = 'flex';

      // Start progress bar animation
      progressBar.style.width = '0%';
      progressBar.style.transition = `width ${statusDuration}ms linear`;

      setTimeout(function () {
        progressBar.style.width = '100%';
      }, 100);

      // Automatically close the modal after the defined duration
      setTimeout(function () {
        modal.style.display = 'none';
      }, statusDuration);
    });
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Handle status uploads
  uploadStatusButton.addEventListener('click', function () {
    const file = statusUpload.files[0];
    const caption = statusCaption.value;

    if (file && caption) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.alt = 'User Status';
        imgElement.className = 'status-image';

        const newStatus = document.createElement('div');
        newStatus.className = 'status spaced-status';
        newStatus.setAttribute('data-status-text', caption);
        newStatus.setAttribute('data-status-image', e.target.result);

        newStatus.appendChild(imgElement);
        newStatus.appendChild(document.createElement('span')).textContent = 'New User'; // Placeholder user name
        statusesContainer.appendChild(newStatus);

        // Reset the form
        statusUpload.value = '';
        statusCaption.value = '';
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a file and enter a caption.');
    }
  });
});