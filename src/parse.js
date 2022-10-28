import ApgExp from 'apg-js/src/apg-exp/apg-exp.js';

import Grammar from './runtime-expression.cjs';

const grammar = new Grammar();

const parse = (str) => {
  const apgExp = new ApgExp(grammar);
  return apgExp.exec(str);
}

export default parse;
