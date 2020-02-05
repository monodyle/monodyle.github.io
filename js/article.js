let container = document.getElementById('tableOfContent')
let content = document.getElementById('articleContent')

let fixTableOfContent = () => {
  let ww = window.innerWidth, // window width
      tw = container.offsetWidth, // table of content width
      ow = (content.offsetWidth - 680) / 2, // offset padding
      cw = content.offsetWidth // page content width
  container.style.marginLeft = (cw - ow + 80) + 'px'
  container.style.display = (container.offsetLeft + tw > ww) ? 'none' : 'block'
}

document.addEventListener('DOMContentLoaded', () => {
  let links = document.querySelector('#tableOfContent .links')
  let headers = document.querySelectorAll('article h1[id], article h2[id], article h3[id], article h4[id], article h5[id], article h6[id]')
  if (headers) {
    headers.forEach(i => {
      let node = document.createElement('a')
      node.href = `#${i.id}`
      node.innerText = i.innerText.trim()
      node.classList.add(`level-${i.localName}`)
      links.appendChild(node)
    })
    container.style.display = 'block'
    fixTableOfContent()
    container.style.marginTop = `-${container.offsetHeight}px`
  }
})

window.addEventListener("resize", () => {
  fixTableOfContent()
})

/* 
window.onscroll = () => {
  let t_ot = container.offsetTop,
      c_ot = document.querySelector('.article-header').offsetTop
  container.style.opacity = (t_ot > c_ot) ? 1 : 0
}
 */
