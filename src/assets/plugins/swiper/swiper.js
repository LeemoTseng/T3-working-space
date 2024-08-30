
import Swiper from './swiper-bundle.mjs';

const swiper = new Swiper('.swiper-main', {

  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
    navigation: {
      enabled:true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      setActiveBulletColor();
    },
    slideChange: function () {
      setActiveBulletColor();
      // console.log('the plugin is working');
    }
  }
});

function setActiveBulletColor() {
  document.querySelectorAll('.swiper-pagination-bullet').forEach((item) => {
    item.classList.add('bg-gray-300');
  });
  const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
  if (activeBullet) {
    activeBullet.classList.remove('bg-gray-300');
    activeBullet.classList.add('bg-primary');
  }
}
// console.log('swiper.js is fully loaded!');

