const openSideMenu = document.getElementById("open-sidebar");
const sidebar = document.getElementById("sidebar");
const menuIndicator = document.querySelector(".fas");

let isOpen = true;
const navLinks = document.querySelector(".nav-links");

const sidebarStyle = (position, transition, remove) => {
  sidebar.style.left = position;
  sidebar.style.transition = transition;
  menuIndicator.classList.remove("fa-bars");
  menuIndicator.classList.add("fa-times");
  if (remove !== "remove") {
    menuIndicator.classList.add("fa-bars");
    menuIndicator.classList.remove("fa-times");
  }
};
openSideMenu.addEventListener("click", function (e) {
  if (isOpen) {
    sidebarStyle(0, "all ease .5s", "remove");
  } else {
    sidebarStyle("-250px", "all ease .5s");
  }
  isOpen = !isOpen;
});

//Navigation bar
navLinks.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();
    sidebarStyle("-250px", "none");
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

window.addEventListener("scroll", () => {
  sidebarStyle("-250px", "none");
});
