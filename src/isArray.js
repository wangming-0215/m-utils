import { TYPES } from './helper/types';

/**
 * 判断入参是否为数组
 *
 * @param {*} input
 */
export default function isArray(input) {
  return Array.isArray
    ? Array.isArray(input)
    : Object.prototype.toString.call(input) === TYPES.ARRAY;
}
