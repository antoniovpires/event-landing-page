AOS.init();

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 750) {
      valueDisplays.forEach((valueDisplay) => {
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        if (parseInt(valueDisplay.textContent) > 0) return false
        let startValue = 0;
      
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(() => {
          startValue += endValue > 100 ? 10 : 1;
          valueDisplay.textContent = `${startValue}+`;
          if(startValue ==endValue) {
            clearInterval(counter);
          }
        }, duration)
      })
    }
  });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
});
});