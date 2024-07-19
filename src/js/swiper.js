import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade, FreeMode } from 'swiper/modules';
import 'swiper/css';
import getAboutSliderSectionTitle from './getAboutSliderSectionTitle';

const reviewsSlider = new Swiper('.js-reviews-slider', {
  modules: [Navigation],
  direction: 'horizontal',
  centeredSlides: true,
  loop: true,
  spaceBetween: 8,
  slidesPerView: 1.095,
  speed: 800,
  grabCursor: true,
  breakpoints: {
    1440: {
      spaceBetween: 32,
      slidesPerView: 3.65,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '.js-reviews-slider-btn-next',
    prevEl: '.js-reviews-slider-btn-prev',
  },
});

const aboutSlider = new Swiper('.js-about-slider', {
  modules: [Pagination, Autoplay, EffectFade],
  spaceBetween: 30,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    waitForTransition: false,
  },
  pagination: {
    el: '.about-slider-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      const number = String(index + 1).padStart(2, 0);
      const aboutSliderSectionTitle = getAboutSliderSectionTitle(index);

      return `
      <div class="about-slider-pagination-item ${className}">
        <p class="about-slider-pagination-item-number">${number}</p>
        <p class="about-slider-pagination-item-title">${aboutSliderSectionTitle}</p>
      </div>
      `;
    },
  },
});
