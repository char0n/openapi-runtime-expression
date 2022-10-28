import ApgExp from 'apg-js/src/apg-exp/apg-exp.js';

import SABNF from './runtime-expression.bnf.js';

const test = (str) => {
  const apgExp = new ApgExp(SABNF);
  return apgExp.test(str);
};

export default test;

