import AOS from 'aos';
import getIsDesk from './getIsDesk';

AOS.init({
  duration: 1000,
});

window.addEventListener('resize', onWindowResize);
window.addEventListener('load', onWindowResize);

function onWindowResize() {
  const isDesk = getIsDesk();
  const items = document.querySelectorAll('[data-aos-offset]');

  items.forEach((item) => {
    const value = isDesk ? 300 : 0;
    item.setAttribute('data-aos-offset', value);
  });

  AOS.refresh();
}
