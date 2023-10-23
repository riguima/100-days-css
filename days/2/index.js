var menu = document.querySelector('.menu__bars-container');
var menu_bars = menu.querySelectorAll('.menu__bar');


function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function showX() {
  menu_bars.forEach(element => {
    element.style.marginBottom = '-7px';
  });
  menu_bars[1].style.opacity = '0%';
  sleep(500).then(() => {
    menu_bars[0].style.transform = 'rotate(-45deg)';
    menu_bars[2].style.transform = 'rotate(45deg)';
  });
}


function showMenuBars() {
  menu_bars[0].style.transform = 'rotate(0deg)';
  menu_bars[2].style.transform = 'rotate(0deg)';
  sleep(500).then(() => {
    menu_bars.forEach(element => {
      element.style.marginBottom = '15px';
    });
    menu_bars[1].style.opacity = '100%';
  })
}


menu.addEventListener('click', (e) => {
  if (menu_bars[1].style.opacity === '0') {
    showMenuBars();
  } else {
    showX();
  }
})
