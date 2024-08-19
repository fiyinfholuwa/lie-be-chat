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