document.addEventListener("DOMContentLoaded", function () {
  const navToggler = document.querySelector(".nav__toggler");
  const mobileNav = document.querySelector(".mobile__nav");
  const portfolioBtns = document.querySelectorAll(".portfolio__btn");
  const portfolioProjects = document.querySelectorAll(".portfolio__project");
  const arrowR = document.querySelector(".testimonials__arrow--right");
  const arrowL = document.querySelector(".testimonials__arrow--left");
  const persons = document.querySelectorAll(".testimonials__person");
  const dots = document.querySelectorAll(".testimonials__dot");
  let slideIndex = 1;
  // mobile menu

  navToggler.addEventListener("click", () => {
    mobileNav.classList.remove("hiddens");
    mobileNav.classList.add("visible");
  });

  document
    .querySelectorAll(".mobile__item, .mobile__close")
    .forEach((element) => {
      element.addEventListener("click", () => {
        // mobileNav.style.display = "none";
        mobileNav.classList.remove("visible");
        mobileNav.classList.add("hiddens");
      });
    });

  // portfolio

  portfolioBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      portfolioBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      this.classList.toggle("active");
      const filterType = this.getAttribute("data-filter");
      portfolioProjects.forEach((project) => {
        project.style.display = "none";
        if (
          project.getAttribute("data-filter") === "all" ||
          filterType === "all" ||
          project.getAttribute("data-filter") === filterType
        ) {
          project.style.display = "block";
        }
      });
    });
  });

  // testimonials slider


  function showSlides(n) {
    if (n > persons.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = persons.length;
    }

    for (i = 0; i < persons.length; i++) {
      persons[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" indicated", "");
    }

    persons[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " indicated";
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // let currentSlide = function (n) {
  //   showSlides((slideIndex = n));
  // };

  arrowL.addEventListener("touchstart", () => {
    plusSlides(-1);
  });

  arrowR.addEventListener("touchstart", () => {
    plusSlides(1);
  });

  arrowL.addEventListener("click", () => {
    plusSlides(-1);
  });

  arrowR.addEventListener("click", () => {
    plusSlides(1);
  });
});
