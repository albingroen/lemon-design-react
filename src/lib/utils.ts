export function arrayFromNumber(number: number) {
  return Array.from(Array(number).keys());
}

export function chunk(array: any[], chunkSize: number) {
  let chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}
