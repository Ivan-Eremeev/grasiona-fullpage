window.onload = function () {

  // Swiper | Слайдер
  const swiper = new Swiper('#swiper', {
    slidesPerView: 1,
    direction: "vertical",
    effect: 'fade',
    speed: 700,
    loop: true,
    mousewheel: true,
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
  });

  // Смена изображений в телефоне
  function changeImage() {
    let imgWrap = document.querySelectorAll('.slider__phone-img');
    imgWrap.forEach((imgWrapCurrent) => {
      let img = imgWrapCurrent.querySelectorAll('img');
      let index = 1;
      let indexAll = img.length - 1;
      setInterval(() => {
        img.forEach(element => {
          element.classList.remove('show');
        });
        img[index].classList.add('show');
        if (index < indexAll) {
          index++; 
        } else {
          index = 0;
        }        
      }, 3000);
    })
  }
  changeImage();

  // Текст - печатная машинка
  gsap.registerPlugin(TextPlugin);

  const headings = document.querySelectorAll(".slider__text p");

  // Анимация печатной машинки
  function printText(index) {
    let headingCurrent = headings[index];
    let headingCurrentText = headingCurrent.textContent;
    headingCurrent.style = 'display: inline';
    headingCurrent.textContent = '';
    gsap.to(headingCurrent, 1.5, {
      duration: 4,
      ease: 'none',
      text: headingCurrentText
    });
  }
  printText(1);

  // Включить анимацию при смене слайдов
  swiper.on('activeIndexChange', () => {
    let index = swiper.activeIndex;
    printText(index);
  });

}