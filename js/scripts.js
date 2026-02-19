const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--active');
    });

    const navLinks = document.querySelectorAll('.nav__list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--active');
        });
    });
}
 let hamburger = document.getElementById('hamburger');

let headerLinks = document.querySelector('.header_links');

hamburger.addEventListener('click', function() { button.classList.toggle('button-open'); headerLinks.classList.toggle('links-open'); }); 
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        bookingForm.reset();
    });
}

