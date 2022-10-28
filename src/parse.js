import ApgExp from 'apg-js/src/apg-exp/apg-exp.js';

import SABNF from './runtime-expression.bnf.js';

const parse = (str) => {
  const apgExp = new ApgExp(SABNF);
  return apgExp.exec(str);
}

export default parse;
