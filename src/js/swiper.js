import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import getAboutSliderSectionTitle from './getAboutSliderSectionTitle';
import getAboutSliderAdditionalClassName from './getAboutSliderAdditionalClassName';

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
  modules: [Pagination, EffectFade],
  spaceBetween: 30,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  allowTouchMove: false,
  pagination: {
    el: '.about-slider-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      const number = String(index + 1).padStart(2, 0);
      const aboutSliderSectionTitle = getAboutSliderSectionTitle(index);
      const aboutSliderAdditionalClassName = getAboutSliderAdditionalClassName(index);

      return `
      <div class="about-slider-pagination-item ${className} ${aboutSliderAdditionalClassName}">
        <p class="about-slider-pagination-item-number">${number}</p>
        <p class="about-slider-pagination-item-title">${aboutSliderSectionTitle}</p>
        <span class="about-slider-pagination-item-marker"></span>
      </div>
      `;
    },
  },
});

const sliders = { reviewsSlider, aboutSlider };

export default sliders;
