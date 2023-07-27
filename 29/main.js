const slider = document.getElementById('slider')
const dragger = document.getElementById('dragger')
const beforeAI = document.querySelector('.before-ai')

slider.addEventListener('input', (event) => {
  beforeAI.style.width = `${event.target.value}%`
  dragger.style.left = `${event.target.value}%`
})