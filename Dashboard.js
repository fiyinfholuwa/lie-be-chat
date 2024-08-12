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
  const openIcon = document.querySelector('.icon-open');
  const closeIcon = document.querySelector('.icon-close');
  
  // Function to toggle sidebar
  const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    dashboardContent.classList.toggle('active');
    
    // Toggle icons
    openIcon.style.display = sidebar.classList.contains('active') ? 'none' : 'block';
    closeIcon.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
  };

  // Toggle sidebar on button click
  toggleButton.addEventListener('click', () => {
    toggleSidebar();
  });
});