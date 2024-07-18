import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

if (window.innerWidth >= 1440) {
  tl.fromTo('.about-slider-bg', { x: '0%' }, { x: '610px', duration: 1 }, 0);
  tl.fromTo('.about-text-wrap', { x: '0%' }, { x: '-590px', duration: 1 }, 0);
  tl.fromTo('.about-slider-wrap', { opacity: 1 }, { opacity: 0, duration: 1 }, 0);
  tl.fromTo('.about-slider-how-it-works-wrap.how-it-works', { opacity: 1 }, { opacity: 0, duration: 1 }, 0);
  tl.fromTo('.about-slider-how-it-works-wrap.interaction-scheme', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  tl.fromTo('.about-interaction-scheme-img', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

  ScrollTrigger.create({
    animation: tl,
    trigger: '.about-content-wrap',
    start: 'center center',
    end: 2000,
    scrub: true,
    pin: true,
  });
}
