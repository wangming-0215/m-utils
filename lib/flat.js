"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flat;

var _isArray = _interopRequireDefault(require("./isArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 数组中是否包含数组
 *
 * @param {*} arr 数组
 */
function containsArray(arr) {
  return !!arr.find(function (t) {
    return (0, _isArray.default)(t);
  });
}
/**
 * 拍平二维数组
 *
 * @param {Array} arr 数组
 */


function reduce(arr) {
  return arr.reduce(function (result, current) {
    return result.concat(current);
  }, []);
}
/**
 * 拍平任意维数数组
 *
 * @param {Array} arr 任意维数数组
 */


function flat(arr) {
  if (!containsArray(arr)) return arr;
  return flat(reduce(arr));
}