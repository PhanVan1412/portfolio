// var home = document.querySelector('.home')
// var about = document.querySelector('#about');
// var aboutLink = document.querySelector('#about-link');
// console.log(about)
// console.log(home)
// aboutLink.onclick = function () {
//     home.classList.add('hidden');
//     about.classList.remove('hidden');
//     console.log('hi')
// }

var sections = document.querySelectorAll('.section');

var about = document.querySelector('#about');
var portfolio = document.querySelector('#portfolio');
var contact = document.querySelector('#contact');
var service = document.querySelector('#service');

var aboutLink = document.querySelector('#about-link');
var portfolioLink = document.querySelector('#portfolio-link');
var contactLink = document.querySelector('#contact-link');
var serviceLink = document.querySelector('#service-link');

aboutLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    
    about.classList.remove('hidden');
}

portfolioLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    portfolio.classList.remove('hidden');
}

contactLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    contact.classList.remove('hidden');
}

serviceLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    service.classList.remove('hidden');
}
