/**
 * 睡眠
 *
 * @param {number} ms 程序睡眠的时长,单位毫秒
 *
 * example:
 * sleep(1000).then(() => doSomething());
 * or:
 * await sleep(1000);
 * doSomethind();
 */
export default function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
