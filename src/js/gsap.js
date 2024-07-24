import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(min-width: 1440px)', () => {
  const tlSlider = gsap.timeline();
  const tlContainer = gsap.timeline();

  tlSlider
    .fromTo('.about-slider-bg', { x: '0%' }, { x: '610px', duration: 1 }, 0)
    .fromTo('.about-interaction-scheme-animation', { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
    .fromTo('.about-slider-wrap', { opacity: 1 }, { opacity: 0, duration: 1 }, 0)
    .fromTo('.about-slider-how-it-works-wrap.interaction-scheme', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

  ScrollTrigger.create({
    animation: tlContainer,
    trigger: '.about-content-container',
    start: 'center center',
    end: 'center+=60',
    pin: true,
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: tlSlider,
    trigger: '.about-content-wrap',
    start: 'top+=500px center',
    end: 'center+=60',
    toggleActions: 'play none none reverse',
  });
});

mm.add('(max-width: 1439px)', () => {
  const tlSlider = gsap.timeline();
  const tlContainer = gsap.timeline();

  tlSlider
    .fromTo('.about-slider-bg', { y: '0%' }, { y: '-396px', duration: 1 }, 0)
    .fromTo('.about-interaction-scheme-animation', { opacity: 0 }, { opacity: 1, duration: 1 }, 0)
    .fromTo('.about-slider-wrap', { opacity: 1 }, { opacity: 0, duration: 1 }, 0)
    .fromTo('.about-slider-how-it-works-wrap.interaction-scheme', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

  ScrollTrigger.create({
    animation: tlContainer,
    trigger: '.about-content-container',
    start: 'center center',
    end: 'center+=60',
    pin: true,
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: tlSlider,
    trigger: '.about-content-wrap',
    start: 'top+=500px center',
    end: 'center+=60',
    toggleActions: 'play none none reverse',
  });
});
