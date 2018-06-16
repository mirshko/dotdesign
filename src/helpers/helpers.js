export const generateRandomPastelColor = () =>
  `hsl(${360 * Math.random()}, ${25 + 70 * Math.random()}%, ${85 +
    10 * Math.random()}%`

export const randomPastelHsl = {
  h: 360 * Math.random(),
  s: 25 + 70 * Math.random(),
  l: 85 + 10 * Math.random(),
}

export const rgbFromHsl = ({ h, s, l }) => `rgb(${h}, ${s}, ${l})`
