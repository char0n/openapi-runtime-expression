import IDENTIFIERS from 'apg-js/src/apg-lib/identifiers.js';
import { charsToString } from 'apg-js/src/apg-lib/utilities.js';

const expression = (state, chars, phraseIndex, phraseLength, data) => {
  if (state === IDENTIFIERS.SEM_PRE) {
    if (Array.isArray(data) === false) {
      throw new Error("parser's user data must be an array");
    }
    data.push(['expression', charsToString(chars, phraseIndex, phraseLength)]);
  }

  return IDENTIFIERS.SEM_OK;
};

export default expression;
