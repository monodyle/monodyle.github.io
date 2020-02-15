const start_toc_module = function() {
  const replaceATag = str => `${str.replace('</a>','').replace(/id=\".*\"/,'').replace(/class=\".*\"/,'').replace(/aria-hidden=\".*\"/,'')}</a>`;
  let toc_headings = [].slice.call(document.querySelectorAll('h2, h3, h4, h5, h6'));
  let toc_items = toc_headings.map(item => `<li><${item.localName}>${replaceATag(item.innerHTML)}</${item.localName}></li>`);
  if (toc_items.length <= 0) return;
  let toc_html_template = `<div class="toc-container"><ul>${toc_items.join('')}</ul></div>`;
  let toc_element_container = document.createElement('div');
  toc_element_container.innerHTML = toc_html_template;
  let main_container = document.querySelector('.main');
  main_container.insertBefore(toc_element_container.firstChild, main_container.childNodes[0]);
};