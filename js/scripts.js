document.addEventListener('click', function(event) {
  if (event.target.className.includes('tab-title')) {
    selectTab(event.target);
  }
})

function selectTab(target) {
  const titleArray = [].slice.call(target.parentNode.children);
  const tabNum = target.classList[0].slice(6,7);
  
  titleArray.forEach(child => {
    child.classList.remove('tab-active');
  })
  target.classList.add('tab-active');
  document.querySelectorAll('.tabs').forEach(tab => {
    tab.classList.remove('active');
  })
  document.querySelector(`.tab-${tabNum}`).classList.add('active')
}