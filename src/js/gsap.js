import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import getIsDesk from './getIsDesk';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const mm = gsap.matchMedia();

mm.add('(min-width: 1440px)', () => {
  tl.fromTo('.about-slider-bg', { x: '0%' }, { x: '610px', duration: 1 }, 0);
  tl.fromTo('.about-text-wrap', { x: '0%' }, { x: '-590px', duration: 1 }, 0);
  tl.fromTo('.about-slider-wrap', { opacity: 1 }, { opacity: 0, duration: 0 }, 0.5);
  tl.fromTo('.about-slider-how-it-works-wrap.how-it-works', { opacity: 1 }, { opacity: 0, duration: 0 }, 0.5);
  tl.fromTo('.about-slider-how-it-works-wrap.interaction-scheme', { opacity: 0 }, { opacity: 1, duration: 0 }, 0.5);
  tl.fromTo('.about-interaction-scheme-animation', { opacity: 0 }, { opacity: 1, duration: 0 }, 0.5);

  ScrollTrigger.create({
    animation: tl,
    trigger: '.about-content-wrap',
    start: 'center center',
    end: 'bottom',
    scrub: true,
    pin: true,
  });
});
