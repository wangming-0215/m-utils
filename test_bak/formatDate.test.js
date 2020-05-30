import { expect } from 'chai';

import formatDate from '../src/formatDate';

describe('Format Date', () => {
  it('convert date to YYYY-MM-dd', () => {
    const formatted = formatDate(new Date(2019, 1, 14), 'YYYY-MM-dd');
    expect(formatted).to.equal('2019-02-14');
  });

  it('convert date to YYYY/MM/dd', () => {
    const formatted = formatDate(new Date(2019, 1, 14), 'YYYY/MM/dd');
    expect(formatted).to.equal('2019/02/14');
  });
});
