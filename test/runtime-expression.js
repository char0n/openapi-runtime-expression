import { assert } from 'chai';

import { SABNF } from '../src/index.js'

describe('SABNF', function () {
  it('should export SABNF grammar', function () {
    assert.isString(SABNF);
  });
})
