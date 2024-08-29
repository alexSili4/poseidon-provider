import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sliders from './swiper';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(min-width: 1440px)', () => {
  const tlSlider = gsap.timeline();
  const tlContainer = gsap.timeline();
  const aboutSliderSecondItem = gsap.timeline();
  const aboutSliderThirdItem = gsap.timeline();
  const aboutSliderFourthItem = gsap.timeline();

  tlSlider
    .fromTo('.about-slider-bg', { x: '0%' }, { x: '610px', duration: 1 }, 0)
    .fromTo('.about-interaction-scheme-animation', { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
    .fromTo('.about-slider-wrap', { opacity: 1 }, { opacity: 0, duration: 1 }, 0)
    .fromTo('.about-slider-how-it-works-wrap.interaction-scheme', { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
    .fromTo('.js-about-slider-pagination-item-second', {}, {}, 0)
    .fromTo('.js-about-slider-pagination-item-third', {}, {}, 0)
    .fromTo('.js-about-slider-pagination-item-fourth', {}, {}, 0);

  ScrollTrigger.create({
    animation: aboutSliderSecondItem,
    trigger: '.js-about-slider-pagination-item-second',
    start: 'top',
    end: 'bottom',
    onEnter: () => sliders.aboutSlider.slideTo(1),
    onEnterBack: () => sliders.aboutSlider.slideTo(0),
  });

  ScrollTrigger.create({
    animation: aboutSliderThirdItem,
    trigger: '.js-about-slider-pagination-item-third',
    start: 'top+=200',
    end: 'bottom',
    onEnter: () => sliders.aboutSlider.slideTo(2),
    onEnterBack: () => sliders.aboutSlider.slideTo(1),
  });

  ScrollTrigger.create({
    animation: aboutSliderFourthItem,
    trigger: '.js-about-slider-pagination-item-fourth',
    start: 'top+=500',
    end: 'bottom',
    onEnter: () => sliders.aboutSlider.slideTo(3),
    onEnterBack: () => sliders.aboutSlider.slideTo(2),
  });

  ScrollTrigger.create({
    animation: tlContainer,
    trigger: '.about-content-container',
    start: 'center center',
    end: 'bottom+=900',
    pin: true,
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: tlSlider,
    trigger: '.about-content-wrap',
    start: 'top+=1500px center',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });
});

mm.add('(max-width: 1439px)', () => {
  const tlSlider = gsap.timeline();
  const tlContainer = gsap.timeline();
  const aboutSliderSecondItem = gsap.timeline();
  const aboutSliderThirdItem = gsap.timeline();
  const aboutSliderFourthItem = gsap.timeline();

  tlSlider
    .fromTo('.about-slider-bg', { y: '0%' }, { y: '-396px', duration: 1 }, 0)
    .fromTo('.about-interaction-scheme-animation', { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
    .fromTo('.about-slider-wrap', { opacity: 1 }, { opacity: 0, duration: 1 }, 0)
    .fromTo('.about-slider-how-it-works-wrap.interaction-scheme', { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
    .fromTo('.js-about-slider-pagination-item-second', {}, {}, 0)
    .fromTo('.js-about-slider-pagination-item-third', {}, {}, 0)
    .fromTo('.js-about-slider-pagination-item-fourth', {}, {}, 0);

  ScrollTrigger.create({
    animation: aboutSliderSecondItem,
    trigger: '.js-about-slider-pagination-item-second',
    start: 'top+=100',
    end: 'bottom',
    onEnter: () => sliders.aboutSlider.slideTo(1),
    onEnterBack: () => sliders.aboutSlider.slideTo(0),
  });

  ScrollTrigger.create({
    animation: aboutSliderThirdItem,
    trigger: '.js-about-slider-pagination-item-third',
    start: 'top+=300',
    end: 'bottom',
    onEnter: () => sliders.aboutSlider.slideTo(2),
    onEnterBack: () => sliders.aboutSlider.slideTo(1),
  });

  ScrollTrigger.create({
    animation: aboutSliderFourthItem,
    trigger: '.js-about-slider-pagination-item-fourth',
    start: 'top+=600',
    end: 'bottom',
    onEnter: () => sliders.aboutSlider.slideTo(3),
    onEnterBack: () => sliders.aboutSlider.slideTo(2),
  });

  ScrollTrigger.create({
    animation: tlContainer,
    trigger: '.about-content-container',
    start: 'center center',
    end: 'bottom+=700',
    pin: true,
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: tlSlider,
    trigger: '.about-content-wrap',
    start: 'top+=1600px center',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });
});
