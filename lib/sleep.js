"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sleep;

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
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}