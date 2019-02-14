import isDate from './isDate';
import isFunction from './isFunction';

const formatReg = /YYYY|MM|dd|HH?|mm?|ss?|./g;

const formatMapper = {
  YYYY: date => date.getFullYear(),
  MM: date => padded(date.getMonth() + 1),
  dd: date => padded(date.getDate()),
  HH: date => padded(date.getHours()),
  mm: date => padded(date.getMinutes()),
  ss: date => padded(date.getSeconds())
};

/**
 * 一位日期转成两位的字符串
 * 5 -> 05
 * 10 -> 10
 * TODO：自己实现一个
 *
 * @param {number} input
 */
function padded(input) {
  return ('' + input).padStart(2, '0');
}

/**
 * 生成格式日期的函数
 *
 * @param {string} format 格式
 */
function makeFormatter(format) {
  const formatters = format
    .match(formatReg)
    .map(token => (formatMapper[token] ? formatMapper[token] : token));

  return date => {
    let result = '';
    for (const formatter of formatters) {
      result += isFunction(formatter) ? formatter(date) : formatter;
    }
    return result;
  };
}

/**
 * 格式化日期
 *
 * YYYY: 年
 * MM: 月
 * dd: 日
 * HH: 时（24小时制）
 * mm: 分
 * ss: 秒
 *
 * 未来可能会支持更多的格式，我也不确定
 *
 * @param {Date} date 需要格式化的日期
 * @param {string} format 格式
 */
export default function formatDate(date, format) {
  if (!isDate(date) || date.toString() === 'Invalid Date')
    throw new TypeError('Argument `date` is not a valid `Date` object');
  return makeFormatter(format)(date);
}
