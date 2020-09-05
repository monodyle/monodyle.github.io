export const pageTranstion = {
  incoming: {
    y: 20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.0, 0.0, 0.2, 1],
      duration: 0.1,
      opacity: { duration: 0.1 },
    },
  },
}

export const postTranstion = {
  incoming: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.0, 0.0, 0.2, 1],
      duration: 0.1,
      opacity: { duration: 0.1 },
    },
  },
}

export const menus = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "☕ Buy me a coffee",
    path: "https://ko-fi.com/monodyle",
  },
]

export const emojis = {
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
