export default function BlueWhiteText({ text, startBlue = true }) {
  return text.split(/(\s+)/).map((part, index) => {
    if (!part.trim()) return part

    const wordIndex = Math.floor(index / 2)
    const isBlue = startBlue ? wordIndex % 2 === 0 : wordIndex % 2 !== 0

    return (
      <span
        className={isBlue ? 'heading-word heading-word-blue' : 'heading-word heading-word-white'}
        key={`${part}-${index}`}
      >
        {part}
      </span>
    )
  })
}
