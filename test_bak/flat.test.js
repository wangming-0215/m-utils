import { expect } from 'chai';

import flat from '../src/flat';

describe('Flat Array', () => {
  it('flat [1, 2, [1, 2, 3]] to [1, 2, 1, 2, 3]', () => {
    expect(flat([1, 2, [1, 2, 3]])).to.deep.equal([1, 2, 1, 2, 3]);
  });

  it('flat [1, [2, [3, [4, [5, [6, [7, [8, [9, [0]]]]]]]]]] to [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]', () => {
    expect(
      flat([1, [2, [3, [4, [5, [6, [7, [8, [9, [0]]]]]]]]]])
    ).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  });

  it('flat [{a: 1}, [{b: 2}, [{c: 3}]]] to [{a: 1}, {b:2}, {c:3}]', () => {
    expect(flat([{ a: 1 }, [{ b: 2 }, [{ c: 3 }]]])).to.deep.equal([
      { a: 1 },
      { b: 2 },
      { c: 3 }
    ]);
  });
});
