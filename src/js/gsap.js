import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const mm = gsap.matchMedia();

mm.add('(min-width: 1440px)', () => {
  tl.fromTo('.about-slider-bg', { x: '0%' }, { x: '610px', duration: 1 }, 0.5)
    .fromTo('.about-slider-wrap', { opacity: 1 }, { opacity: 0, duration: 0 }, 1)
    .fromTo('.about-interaction-scheme-animation', { opacity: 0 }, { opacity: 1, duration: 0 }, 1);

  ScrollTrigger.create({
    animation: tl,
    trigger: '.about-content-wrap',
    start: 'center center',
    end: 'bottom 50%',
    pin: true,
    toggleActions: 'play none play reverse',
  });
});
