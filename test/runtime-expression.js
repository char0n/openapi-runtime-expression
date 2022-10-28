import { assert } from 'chai';

import { Grammar } from '../src/index.js'

describe('SABNF', function () {
  it('should export Grammar', function () {
    assert.isFunction(Grammar);
  });
})
