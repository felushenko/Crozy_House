
let burger = document.getElementById('burger')

burger.onclick = function() {
  burger.classList.toggle('header__burger-active')
  document.querySelector('.header__burger>span').classList.toggle('span-active')
  document.querySelector('.menu').classList.toggle('menu-active')
  document.querySelector('body').classList.toggle('lock')
  document.querySelector('header').classList.toggle('burger-lock')
}



const animItems = document.querySelectorAll('._anime-items')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeigth = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      animItemPoint = window.innerHeight - animItemHeigth / animStart;
      
      if (animItemHeigth > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeigth)) {
        animItem.classList.add('_active-anim')
      } //  else {
      //   animItem.classList.remove('_active-anim')
      // }

    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
  }
  animOnScroll()
}
