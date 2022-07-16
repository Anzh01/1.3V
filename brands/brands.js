var swiper = new Swiper('.swiper-container', {
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    slidesPerView: 'auto',
    direction: 'horizontal',
    width: 240,
    centeredSlides: true,
    breakpoints: {
        768: {
            enabled: false,
            onAny() {
                swiper.destroy(true, true);
            }
        }},
    observer: true,
});

var brandsBlock = document.querySelector('.swiper-wrapper');
var button = document.querySelector('.services_button-read-more');
var buttonText = document.querySelector('.services_button-read-more-text');
var buttonIcon = document.querySelector('.services_button-icon');

button.addEventListener('click', function () {
    if (brandsBlock.clientHeight === 180) {
        brandsBlock.classList.add('swiper-wrapper_open');
        brandsBlock.classList.remove('swiper-wrapper_close');
        buttonText.textContent = 'Скрыть';
        button.classList.add('services_button-read-more-open')
        buttonIcon.classList.add('services_button-icon-open');
    } else {
        brandsBlock.classList.remove('swiper-wrapper_open');
        brandsBlock.classList.add('swiper-wrapper_close');
        buttonText.textContent = 'Показать все';
        button.classList.remove('services_button-read-more-open')
        buttonIcon.classList.remove('services_button-icon-open');
    }
})
