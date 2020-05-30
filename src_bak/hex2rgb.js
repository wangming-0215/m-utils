/**
 *
 * 十六进制颜色转 rgb
 *
 * @param {string} hex 十六进制颜色值
 */
export default function hex2rgb(hex = '#fff') {
  const hexString = hex.slice(1);
  const hexNum = Number(
    `0x${hexString.length === 3 ? hexString.repeat(2) : hexString}`
  );
  const red = (hexNum >> 16) & 0xff;
  const green = (hexNum >> 8) & 0xff;
  const blue = hexNum & 0xff;
  return `rgb(${red}, ${green}, ${blue})`;
}
