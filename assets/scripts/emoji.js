document.addEventListener(
  'DOMContentLoaded',
  function () {
    const emojis = {
      adore: "adore.png",
      argggg: "argggg.png",
      christ: "christ.png",
      confused: "confused.png",
      cry: "cry.png",
      doubt: "doubt.png",
      go: "go.png",
      gun: "gun.png",
      lookdown: "look_down.png",
      moka: "moka.png",
      mokas: "mokas.png",
      ok: "ok.png",
      okay: "okay.png",
      pepe_surrender: "pepe_surrender.png",
      popcorn: "popcorn.png",
      rage: "rage.png",
      sad: "sad.png",
      smug: "smug.png",
      snug: "snug.png",
      stab: "stab.png",
      surrender: "surrender.png",
      yikes: "yikes.png",
      sosad: "sosad.gif",
    }

    const emojiPattern = /:([\w-_]+):/g

    const emojiParse = (content) => {
      let result = ""
      while ((result = emojiPattern.exec(content))) {
        if (emojis[result[1]])
          content = content.replace(
            result[0],
            `<img src="/assets/emoji/${emojis[result[1]]}" class="emoji" />`,
          )
      }
      return content
    }

    const containers = [
      "#content > p",
      "#content > ul",
      "#content > blockquote > p",
      "#content [emoji=\"1\"]"
    ]

    let container = document.querySelectorAll(containers.join(","))

    if (emojiPattern.test(document.querySelector("#content").textContent))
      container.forEach((i) => (i.innerHTML = emojiParse(i.innerHTML)))
  },
  false
);
