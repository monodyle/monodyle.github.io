import { emojis } from "./config"

export const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext)
}

export const emojiPattern = /:([\w-_]+):/g

export const emojiParse = (content) => {
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
