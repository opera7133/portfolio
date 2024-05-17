export function nl2br(str: string) {
  const newlineRegex = /(\r\n|\r|\n)/g;
  return str.split(newlineRegex).map(function (line, index) {
    if (line.match(newlineRegex)) {
      return `<br />`
    }
    return line;
  }).join("");
}
