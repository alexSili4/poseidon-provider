import refs from './refs';

refs.productValueCard.forEach((card) => {
  const animation = card.querySelector('lottie-player');

  card.addEventListener('mouseenter', () => {
    animation.setDirection(1);
    animation.play();
  });

  card.addEventListener('mouseleave', () => {
    animation.setDirection(-1);
    animation.play();
  });
});
