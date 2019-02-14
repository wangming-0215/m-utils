import { TYPES } from './helper/types';

/**
 * 判断入参是否为 Date 类型
 *
 * @param {*} date 入参
 */
export default function isDate(date) {
  return (
    date instanceof Date || Object.prototype.toString.call(date) === TYPES.DATE
  );
}
