// Бургер-меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
    // Открытие/закрытие по клику на бургер
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Закрытие при клике на любую ссылку в меню
    const navLinks = document.querySelectorAll('.nav__list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Закрытие при клике вне меню и бургера
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// Обработка формы бронирования
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        bookingForm.reset();
    });
}
