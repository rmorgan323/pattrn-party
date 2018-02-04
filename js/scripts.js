function selectTab(target) {
  const tabNum = target.classList[1].slice(6,7);

  document.querySelectorAll('.acc-title').forEach(title => {
    title.classList.remove('title-active');
  })
  target.classList.add('title-active');

  document.querySelectorAll('.plus-minus').forEach(char => {
    char.innerText = '+';
  })
  document.querySelector(`.plus-minus-${tabNum}`).innerText = '-';

  document.querySelectorAll('.acc-content').forEach(content => {
    content.classList.remove('content-active');
  })
  document.querySelector(`.content-${tabNum}`).classList.add('content-active')
}

const toggleNav = () => {
  const menu = document.querySelector('.hb-menu');
  if (menu.className.includes('hb-menu-hidden')) {
    menu.classList.remove('hb-menu-hidden');
  } else {
    menu.classList.add('hb-menu-hidden');
  }
}

const showCode = (target) => {
  const buttonNum = target.classList[1].slice(7,8);
  const codeArray = [
    'https://github.com/rmorgan323/pattrn-party',
    'https://github.com/rmorgan323/pattrn-party',
    'https://github.com/rmorgan323/pattrn-party'
  ];
  window.open(codeArray[buttonNum])
}

document.querySelector('.hb-menu-text').addEventListener('click', toggleNav)
document.addEventListener('click', function(event) {
  if (event.target.className.includes('acc-title')) {
    selectTab(event.target);
  } else if (event.target.className.includes('see-code-button')) {
    showCode(event.target)
  }
})
