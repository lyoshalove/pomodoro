export const sliceText = (text: string, charsCount: number) => {
  return charsCount >= text.length ? text : `${text.slice(0, charsCount)}...`;
}