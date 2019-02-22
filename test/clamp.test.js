import { expect } from 'chai';

import clamp from '../src/clamp';

describe('Test Clamp', () => {
  const min = 0;
  const max = 3;

  it('2 must be returned in [0,3]', () => {
    const val = 2;
    expect(clamp(val, min, max)).to.equal(2);
  });
});
