import { expect } from 'chai';

import hex2rgb from '../src/hex2rgb';

describe('hex to rgb', () => {
  it('#ffffff is equals to rgb(255, 255, 255)', () => {
    const hex = '#ffffff';
    expect(hex2rgb(hex)).to.equal('rgb(255, 255, 255)');
  });
});
