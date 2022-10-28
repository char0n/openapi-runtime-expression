import { assert } from 'chai';

import { parse } from '../src/index.js'

describe('parse', function () {
  it('should parse source string', function () {
    const parseResult = parse('$url');

    assert.isObject(parseResult);
  });
})
