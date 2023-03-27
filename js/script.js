let mobileMenu = document.querySelector('.mobile-menu');
let navHeader = document.querySelector('.nav-header');

mobileMenu.addEventListener('click', function() {
  if (navHeader.style.display === 'block') {
    navHeader.style.display = 'none';
  } else {
    navHeader.style.display = 'block';
  }
})