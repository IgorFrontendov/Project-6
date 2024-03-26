var nameElement = document.querySelectorAll('.comparison-of-characteristics .scooter-without-name .name ');

nameElement.forEach( name => {
  name.innerText = '⠀⠀⠀⠀⠀⠀';
});


const sections = document.querySelectorAll('.section')

sections.forEach( section => {

  section.addEventListener('click', () => {
    const sectionActive = document.querySelector('.section.active')
    sectionActive.classList.remove('active')
    section.classList.add('active')
  })

})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      // Вызываем функцию прокрутки из библиотеки SmoothScroll.js
      window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
      });
  });
});