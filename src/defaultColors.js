export default function getDefaultColors () {
  const colors = new Array(5)
  colors.map(() => {
    let str = '#'
    for (let i = 0; i < 6; i++) {
      const num = Math.floor(Math.random() * 16)
      str += num.toString(16)
    }
    return str
  });
  return colors
}