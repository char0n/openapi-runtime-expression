import ApgExp from 'apg-js/src/apg-exp/apg-exp.js';

import SABNF from './runtime-expression.bnf.js';

const apgExp = new ApgExp(SABNF);

export const test = apgExp.test.bind(apgExp);
export { SABNF };
