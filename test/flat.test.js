import { expect } from 'chai';

import flat from '../src/flat';

describe('Flat Array', () => {
  it('flat [1, 2, [1, 2, 3]] to [1, 2, 1, 2, 3]', () => {
    expect(flat([1, 2, [1, 2, 3]])).to.deep.equal([1, 2, 1, 2, 3]);
  });
});
