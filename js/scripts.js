const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    hamburger.classList.toggle('active')
})
<nav class="navbar">
        <ul class="menu">
            <li class="item">
                <a href="#">Главная</a>
            </li>
            <li class="item">
                <a href="#">Цены</a>
            </li>
            <li class="item">
                <a href="#">Портфолио</a>
            </li>
            <li class="item">
                <a href="#">О заказе</a>
            </li>
            <li class="item">
                <a href="#">Об оплате</a>
            </li>
            <li class="item">
                <a href="#">О нас</a>
            </li>
        </ul>
        <div class="hamburger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
