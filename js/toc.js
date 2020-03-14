const start_toc_module = function() {
  const replaceATag = str => `${str.replace('</a>','').replace(/id=\".*\"/,'').replace(/class=\".*\"/,'').replace(/aria-hidden=\".*\"/,'')}</a>`;
  let toc_headings = [].slice.call(document.querySelectorAll('.article-body h2, .article-body h3, .article-body h4'));
  let toc_items = toc_headings.map(item => `<li><${item.localName}><a href="#${item.id}" title="${replaceATag(item.innerHTML).replace('</a>', '')}">${replaceATag(item.innerHTML)}</${item.localName}></li>`);
  if (toc_items.length <= 1) return;
  let toc_html_template = `<div class="toc-container"><ul>${toc_items.join('')}</ul></div>`;
  let toc_element_container = document.createElement('div');
  toc_element_container.innerHTML = toc_html_template;
  let main_container = document.querySelector('.c-article .c-article__main');
  main_container.insertBefore(toc_element_container.firstChild, main_container.childNodes[0]);
};