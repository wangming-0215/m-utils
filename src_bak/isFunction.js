import { TYPES } from './helper/types';

/**
 * 判断入参是否为 Function 类型
 *
 * @param {*} func
 */
export default function isFunction(func) {
  return (
    func instanceof Function ||
    Object.prototype.toString.call(func) === TYPES.FUNCTION
  );
}
