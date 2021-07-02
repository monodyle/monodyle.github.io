const pattern = /:([\w-_]+):/g;
const emojis: Record<string, string> = {
  adore: 'adore.png',
  argggg: 'argggg.png',
  christ: 'christ.png',
  confused: 'confused.png',
  cry: 'cry.png',
  doubt: 'doubt.png',
  go: 'go.png',
  gun: 'gun.png',
  lookdown: 'look_down.png',
  moka: 'moka.png',
  mokas: 'mokas.png',
  ok: 'ok.png',
  okay: 'okay.png',
  pepe_surrender: 'pepe_surrender.png',
  popcorn: 'popcorn.png',
  rage: 'rage.png',
  sad: 'sad.png',
  smug: 'smug.png',
  snug: 'snug.png',
  stab: 'stab.png',
  surrender: 'surrender.png',
  yikes: 'yikes.png',
  sosad: 'sosad.gif',
};

const parser = (content: string) => {
  let result: RegExpExecArray | null = null;
  while ((result = pattern.exec(content))) {
    if (emojis[result[1]])
      content = content.replace(
        result[0],
        `<img src="/assets/emoji/${emojis[result[1]]}" emoji />`,
      );
  }
  return content;
};

export const emoji = { parser, pattern };
