function toggleNavbar() {
  const navbarLinks = document.getElementById("navbar-links");
  const navbarcloseLinks = document.querySelector(".closebtn");
  const overlay = document.querySelector(".overlay");

  navbarLinks.classList.toggle("navbar-hide");
  navbarLinks.classList.toggle("navbar-show");

  overlay.classList.toggle("show-overlay");
  navbarcloseLinks.classList.toggle("show-overlay");
}

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", toggleNavbar);
