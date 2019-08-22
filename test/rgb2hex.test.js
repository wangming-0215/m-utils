import { expect } from 'chai';

import rgb2hex from '../src/rgb2hex';

describe('rgb to hex', () => {
  it('rgb(255, 255, 255) equals to #ffffff', () => {
    const rgb = 'rgb(255, 255, 255)';
    expect(rgb2hex(rgb)).to.equal('#ffffff');
  });
});
