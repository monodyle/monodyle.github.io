const emojiMap = {
  adore: "/assets/emoji/adore.png",
  argggg: "/assets/emoji/argggg.png",
  christ: "/assets/emoji/christ.png",
  confused: "/assets/emoji/confused.png",
  cry: "/assets/emoji/cry.png",
  doubt: "/assets/emoji/doubt.png",
  go: "/assets/emoji/go.png",
  gun: "/assets/emoji/gun.png",
  lookdown: "/assets/emoji/look_down.png",
  moka: "/assets/emoji/moka.png",
  mokas: "/assets/emoji/mokas.png",
  ok: "/assets/emoji/ok.png",
  okay: "/assets/emoji/okay.png",
  pepe_surrender: "/assets/emoji/pepe_surrender.png",
  popcorn: "/assets/emoji/popcorn.png",
  rage: "/assets/emoji/rage.png",
  sad: "/assets/emoji/sad.png",
  smug: "/assets/emoji/smug.png",
  snug: "/assets/emoji/snug.png",
  stab: "/assets/emoji/stab.png",
  surrender: "/assets/emoji/surrender.png",
  yikes: "/assets/emoji/yikes.png",
  sosad: "/assets/emoji/sosad.gif",
}

const pattern = /:([\w-_]+):/g
let container = document.querySelectorAll(`
  .article-body > p,
  .article-body > ul,
  .article-body > blockquote > p,
  .article-body [emoji="1"]
  `)

const emojiParse = (regex, content) => {
  let result = ""
  while (result = regex.exec(content)) {
    if (emojiMap[result[1]])
      content = content.replace(
        result[0],
        `<img src="${emojiMap[result[1]]}" class="emoji" />`
      )
  }
  return content
}

pattern.test(document.querySelector(".article-body").textContent)
  ? container.forEach(i => i.innerHTML = emojiParse(pattern, i.innerHTML)) : null