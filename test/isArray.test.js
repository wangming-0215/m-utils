import { expect } from 'chai';

import isArray from '../src/isArray';

describe('isArray', () => {
  it('123 is not an Array', () => {
    expect(isArray(123)).to.be.false;
  });

  it('[1, 2, 3] is an Array', () => {
    expect(isArray([1, 2, 3])).to.be.true;
  });
});
