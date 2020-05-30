import isArray from './isArray';

export default function flatArray<T = any>(arr: T[][]): T[] {
  return arr.reduce((acc, cur) => {
    return acc.concat(
      isArray(cur) ? flatArray((cur as unknown) as T[][]) : cur
    );
  }, []);
}
