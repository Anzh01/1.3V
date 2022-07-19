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



var swiper = Swiper;
var init = false;
var pagination = document.querySelector('.swiper-pagination');

function swiperMode() {
    if(window.innerWidth < 768) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    },
                slidesPerView: 'auto',
                direction: 'horizontal',
                spaceBetween: 16,
                centeredSlides: true,
                observer: true,
            });
            pagination.classList.remove('hidden');
        }

    }

    else if (init) {
        init = false;
        swiper.destroy();
        pagination.classList.add('hidden');
    }
}

swiperMode();
window.addEventListener('resize', swiperMode);