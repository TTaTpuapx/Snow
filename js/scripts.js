const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.toggle('active');      
        burger.classList.toggle('active');   
        document.body.classList.toggle('menu-open');
    });
    const navLinks = document.querySelectorAll('.nav__list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        bookingForm.reset();
    });
}

