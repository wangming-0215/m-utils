import isArray from './isArray';

/**
 * 数组中是否包含数组
 *
 * @param {*} arr 数组
 */
function containsArray(arr) {
  return !!arr.find(t => isArray(t));
}

/**
 * 拍平二维数组
 *
 * @param {Array} arr 数组
 */
function reduce(arr) {
  return arr.reduce((result, current) => result.concat(current), []);
}

/**
 * 拍平任意维数数组
 *
 * @param {Array} arr 任意维数数组
 */
export default function flat(arr) {
  if (!containsArray(arr)) return arr;
  return flat(reduce(arr));
}
