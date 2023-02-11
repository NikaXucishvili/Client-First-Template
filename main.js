const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle("show");
});

const listItems = document.querySelectorAll("li");
listItems.forEach(listItem => {
  listItem.addEventListener('click', () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove('show');
  });
});