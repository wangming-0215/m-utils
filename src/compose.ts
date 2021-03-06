/**
 * 函数组合
 *
 * g(f(x)) => componse(f, g)(x)
 *
 * @param  {...any} funcs 一系列函数 按函数执行的顺序
 * @return  {function} 组合后的函数
 */
export default function compose(...funcs: Function[]) {
  return function composed(...args: any[]) {
    return funcs.reduce((acc, cur) => cur(acc(...args)));
  };
}
