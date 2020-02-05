document.addEventListener('DOMContentLoaded', () => {
  let scroll = document.getElementById('back-to-top')
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 1000) {
      scroll.classList.add('visible')
    } else {
      scroll.classList.remove('visible')
    }
  })
  scroll.onclick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
})
