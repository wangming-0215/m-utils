import isArray from './isArray';

export default function flatArray(arr: any[]): any[] {
  return arr.reduce((acc: any[], cur: any) => {
    if (isArray(cur)) {
      return acc.concat(flatArray(cur));
    }
    return acc.concat(cur);
  }, []);
}

const arr = [
  [1, 2, 3],
  ['a', 'ab', ['e', 'f', 1, 3]]
];

console.log(flatArray(arr));
