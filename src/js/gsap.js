import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const mm = gsap.matchMedia();

mm.add('(min-width: 1440px)', () => {
  tl.fromTo('.about-slider-bg-wrap', { x: '0%' }, { x: '610px', duration: 1 }, 1.5)
    .fromTo('.about-interaction-scheme-animation', { opacity: 0 }, { opacity: 1, duration: 1 }, 1)
    .fromTo('.about-slider-wrap', { opacity: 1 }, { opacity: 0, duration: 1 }, 1);

  ScrollTrigger.create({
    animation: tl,
    trigger: '.about-content-wrap',
    start: 'center center',
    end: 'bottom',
    pin: true,
    toggleActions: 'play none play reverse',
  });
});

mm.add('(max-width: 1439px)', () => {
  tl.fromTo('.about-slider-bg-wrap', { y: '0%' }, { y: '-396px', duration: 1 }, 1.5)
    .fromTo('.about-interaction-scheme-animation', { opacity: 0 }, { opacity: 1, duration: 1 }, 1)
    .fromTo('.about-slider-wrap', { opacity: 1 }, { opacity: 0, duration: 1 }, 1)
    .fromTo('.about-slider-bg-wrap', { 'background-color': '#ffffff' }, { 'background-color': 'transparent', duration: 0 }, 1.7);

  ScrollTrigger.create({
    animation: tl,
    trigger: '.about-content-wrap',
    start: 'center center',
    end: 'bottom',
    pin: true,
    toggleActions: 'play none play reverse',
  });
});
