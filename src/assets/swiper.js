import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  on: {
    init: function () {
      setActiveBulletColor();
    },
    slideChange: function () {
      setActiveBulletColor();
    }
  }

});

function setActiveBulletColor() {
  document.querySelectorAll('.swiper-pagination-bullet').forEach((item) => {
    item.classList.add('bg-gray-300')
  });
  const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
  if (activeBullet) {
    activeBullet.classList.remove('bg-gray-300');
    activeBullet.classList.add('bg-primary');
  }

}

