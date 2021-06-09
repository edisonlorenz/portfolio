const nav = document.querySelector("#navbar");

//Handle Nav  Hover
const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest("#navbar").querySelectorAll(".nav-link");
    const logo = link.closest("#navbar").querySelector(".logo");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $("#navbar").addClass("sticky");
    } else {
      $("#navbar").removeClass("sticky");
    }
  });
  $("#navbar").on("mouseout", handleHover.bind(1));
  $("#navbar").on("mouseover", handleHover.bind(0.5));

  $(".menu-btn").click(function () {
    $("#navbar #nav-links").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
