import AST from 'apg-js/src/apg-lib/ast.js';
import Parser from 'apg-js/src/apg-lib/parser.js';

import Grammar from '../runtime-expression.cjs';
import expressionCallback from './callbacks/expression.js';
import sourceCallback from './callbacks/source.js';
import headerReferenceCallback from './callbacks/header-reference.js';
import queryReferenceCallback from './callbacks/query-reference.js';
import pathReferenceCallback from './callbacks/path-reference.js';
import bodyReferenceCallback from './callbacks/body-reference.js';
import jsonPointerCallback from './callbacks/json-pointer.js';
import referenceTokenCallback from './callbacks/reference-token.js';
import nameCallback from './callbacks/name.js';
import tokenCallback from './callbacks/token.js';


const grammar = new Grammar();

const parse = (str) => {
  const parser = new Parser();

  parser.ast = new AST();
  parser.ast.callbacks.expression = expressionCallback;
  parser.ast.callbacks.source = sourceCallback;
  parser.ast.callbacks['header-reference'] = headerReferenceCallback;
  parser.ast.callbacks['query-reference'] = queryReferenceCallback;
  parser.ast.callbacks['path-reference'] = pathReferenceCallback;
  parser.ast.callbacks['body-reference'] = bodyReferenceCallback;
  parser.ast.callbacks['json-pointer'] = jsonPointerCallback;
  parser.ast.callbacks['json-pointer'] = jsonPointerCallback;
  parser.ast.callbacks['reference-token'] = referenceTokenCallback;
  parser.ast.callbacks.name = nameCallback;
  parser.ast.callbacks.token = tokenCallback;

  const result = parser.parse(grammar, 'expression', str);

  return { result, ast: parser.ast };
}

export default parse;
