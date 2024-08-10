const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

dark.addEventListener("click", function () {
  document.querySelector("body").classList.add("darkMode");
  light.classList.remove("active");
  dark.classList.add("active");
});

light.addEventListener("click", function () {
  document.querySelector("body").classList.remove("darkMode");
  dark.classList.remove("active");
  light.classList.add("active");
});

// JavaScript for toggling the sidebar
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const dashboardContent = document.querySelector('.dashboard-content');

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    dashboardContent.classList.toggle('active');
  };

  // Toggle sidebar on button click
  toggleButton.addEventListener('click', () => {
    toggleSidebar();
  });

  // Close sidebar when clicking outside of it or inside the sidebar
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      if (sidebar.classList.contains('active')) {
        toggleSidebar();
      }
    }
  });

  // Close sidebar when clicking inside the sidebar
  sidebar.addEventListener('click', (event) => {
    // Prevent closing the sidebar if the click is on the sidebar itself
    event.stopPropagation();
    if (sidebar.classList.contains('active')) {
      toggleSidebar();
    }
  });

  // Close sidebar when pressing the Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('active')) {
      toggleSidebar();
    }
  });
});