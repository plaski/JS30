const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  panels.forEach(panel => {
    if (panel.classList.contains('open')) {
      panel.classList.remove('open')
    }
  })
  this.classList.toggle('open');
}
function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
