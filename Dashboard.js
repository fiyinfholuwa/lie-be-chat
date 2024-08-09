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
  const sidebar = document.querySelector('.sidebar');
  const toggleButton = document.querySelector('.sidebar-toggle');
  const dashboardContent = document.querySelector('.dashboard-content');

  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    dashboardContent.classList.toggle('active');
  });
});