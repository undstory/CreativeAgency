document.addEventListener('DOMContentLoaded', function() {

    const mobileLink = document.querySelectorAll(".mobile__link");

    document.querySelectorAll('.nav__toggler, .mobile__close, .mobile__link').forEach(elem => {
        elem.addEventListener('click', () => {
            document.querySelector('.mobile__nav').classList.toggle('hidden')
        })
    })



})