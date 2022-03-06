// function toTheTop() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
  
//   built in function that scrolls the page to bring the element it is being called upon into view i.e. body
//     document.body.scrollIntoView({behavior: "smooth"});
// };

// $(document).ready(function() {
//     $(".portfolio__item").hover(showProjectInfo, hideProjectInfo);
// })


const navToggle = document.querySelector('.nav-toggle');
const navBar = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    navBar.classList.toggle('visible');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('visible');
    });
});

// $(".nav-toggle").click(function() {
//     $(".navbar-nav").toggleClass("visible");
// });
