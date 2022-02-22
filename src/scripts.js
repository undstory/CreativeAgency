document.addEventListener('DOMContentLoaded', function() {

    const navToggler = document.querySelector(".nav__toggler");
    const mobileNav = document.querySelector(".mobile__nav");
    const portfolioBtns = document.querySelectorAll('.portfolio__btn');
    const portfolioProjects = document.querySelectorAll('.portfolio__project');



        navToggler.addEventListener('click', () => {
           mobileNav.style.display = "block";
        })

        document.querySelectorAll(".mobile__item, .mobile__close").forEach((element) => {
            element.addEventListener("click", () => {
                mobileNav.style.display = "none";
            })
        })

        portfolioBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                portfolioBtns.forEach(btn => {
                    btn.classList.remove('active');
                })
                this.classList.toggle('active');
                const filterType = this.getAttribute('data-filter');
                portfolioProjects.forEach(project => {
                    project.style.display = 'none';
                    if(project.getAttribute('data-filter') === 'all' || filterType === 'all' || project.getAttribute('data-filter') === filterType) {
                        project.style.display = 'block';
                    }
                })
            })
        })





})

