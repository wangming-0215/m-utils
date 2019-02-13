/**
 * 睡眠
 *
 * @param {number} ms 程序睡眠的时长,单位毫秒
 */
export default function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
