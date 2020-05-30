/**
 * 将 rgb 颜色转为十六进制
 *
 * @param {string} rgb rgb格式颜色
 */
export default function rgb2hex(rgb = 'rgb(255, 255, 255)') {
  const [red, green, blue] = rgb.match(/\d+/g);

  return `#${((red << 16) | (green << 8) | blue).toString(16)}`;
}
