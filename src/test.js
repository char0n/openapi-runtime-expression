import ApgExp from 'apg-js/src/apg-exp/apg-exp.js';

import Grammar from './runtime-expression.cjs';

const grammar = new Grammar();

const test = (str, { strict = false } = {}) => {
  if (typeof str !== 'string') {
    return false;
  }

  const apgExp = new ApgExp(grammar, 'y');
  return apgExp.test(str);
};

export default test;

