export default function limitTextLength(text, limit = 14) {
  if (text.length > limit) {
    let result = text.substring(0, limit);
    result += "...";
    return result;
  }
  return text;
}
