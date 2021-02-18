const menuBtn = document.querySelector('.menu-btn');
const navLink = document.getElementById("navigation");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    navLink.classList.remove('active');
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navLink.classList.add('active');
    menuOpen = false;
  }
});