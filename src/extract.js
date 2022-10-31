/**
 * This function is used for extracting the expression from OpenAPI Runtime Expression notation.
 *
 * @example
 *
 * extract('{$url}'); // => '$url'
 */

const extract = (openapiRuntimeExpression) => {
  if (typeof openapiRuntimeExpression !== 'string') {
    return null;
  }

  const match = openapiRuntimeExpression.match(/^{(?<expression>.+)}$/);
  return match?.groups?.expression || null;
};

export default extract;
