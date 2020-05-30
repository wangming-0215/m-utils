import { expect } from 'chai';

import compose from '../src/compose';

describe('Compose', () => {
  it('compose add and sub function', () => {
    const add = x => 3 + x;
    const sub = x => 5 - x;
    const composed = compose(
      sub,
      add
    );

    expect(composed(2)).to.be.equal(add(sub(2)));
  });
});
