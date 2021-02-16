const menuBtn = document.querySelector('.menu-btn');
const navLink = document.getElementById("navigation");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navLink.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navLink.classList.remove('active');
    menuOpen = false;
  }
});

