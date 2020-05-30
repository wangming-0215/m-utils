/**
 * 是否是数组
 *
 * @param obj obj
 */
export default function isArray<T = any>(obj: any): obj is Array<T> {
  return Array.isArray
    ? Array.isArray(obj)
    : Object.prototype.toString.call(obj) === '[object Array]';
}
