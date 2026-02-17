// Мобильное меню (бургер)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--active');
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav__list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--active');
        });
    });
}

// Обработка формы бронирования (демо)
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        bookingForm.reset();
    });
}