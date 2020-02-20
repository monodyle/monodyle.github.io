const emojiMap = {
  cry: "/assets/emoji/cry.png",
  sad: "/assets/emoji/sad.png",
  confused: "/assets/emoji/confused.png",
  surrender: "/assets/emoji/surrender.png",
  lookdown: "/assets/emoji/look_down.png",
  okay: "/assets/emoji/okay.png",
}

const pattern = /:([\w-_]+):/g
let container = document.querySelectorAll(".article-body > p, .article-body > ul")

const emojiParse = (regex, content) => {
  let result = ""
  while (result = regex.exec(content)) {
    if (emojiMap[result[1]]) content = content.replace(result[0], `<img src="${emojiMap[result[1]]}" class="emoji" />`)
  }
  return content
}

pattern.test(document.querySelector(".article-body").textContent)
  ? container.forEach(i => i.innerHTML = emojiParse(pattern, i.innerHTML)) : null