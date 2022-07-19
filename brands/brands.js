var swiper = new Swiper('.swiper-container', {
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    slidesPerView: 'auto',
    direction: 'horizontal',
    spaceBetween: 16,
    centeredSlides: true,
    breakpoints: {
        768: {
            enabled: false,
            onAny() {
                swiper.destroy(true, true);
            },
            spaceBetween: 0,
        }},
    observer: true,
});

const brandsBlock = document.querySelector('.swiper-wrapper');
const button = document.querySelector('.services__button-more');

button.addEventListener('click', function () {
    if (brandsBlock.clientHeight === 180) {
        brandsBlock.classList.add('swiper-wrapper_open');
        brandsBlock.classList.remove('swiper-wrapper_close');
        button.textContent = 'Скрыть';
        button.classList.add('services__button-more_open');
    } else {
        brandsBlock.classList.remove('swiper-wrapper_open');
        brandsBlock.classList.add('swiper-wrapper_close');
        button.textContent = 'Показать все';
        button.classList.remove('services__button-more_open');
    }
})

// var windowSize = window.innerWidth;
// function removeStyle () {
//     if (windowSize >= 768) {
//         brandsBlock.style = null;
//     }
// }
// windowSize.addEventListener('resize', function () {
//     removeStyle()
// });