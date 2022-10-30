import * as fs from 'node:fs';
import * as path from 'node:path';
import { assert } from 'chai';

import { Grammar } from '../src/index.js'

describe('SABNF', function () {
  it('should export Grammar', function () {
    assert.isFunction(Grammar);
  });

  it('should convert to string', function () {
    const abnfFilePath = path.join('..', 'src', 'runtime-expression.bnf');
    const abnf = fs.readFileSync(new URL(abnfFilePath, import.meta.url)).toString();
    const grammar = new Grammar();

    assert.strictEqual(abnf, grammar.toString());
  })
})
