document.addEventListener('DOMContentLoaded', function() {

    const navToggler = document.querySelector(".nav__toggler");
    const mobileNav = document.querySelector(".mobile__nav");
    const mobileClose = document.querySelector(".mobile__close");


        navToggler.addEventListener('click', () => {
           mobileNav.style.display = "block";
        })

        document.querySelectorAll(".mobile__item, .mobile__close").forEach((element) => {
            element.addEventListener("click", () => {
                mobileNav.style.display = "none";
            })
        })





})