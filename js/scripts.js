document.addEventListener('click', function(event) {
  if (event.target.className.includes('acc-title')) {
    selectTab(event.target);
  }
})

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