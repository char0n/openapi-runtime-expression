# openapi-runtime-expression

[Runtime Expressions](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#runtimeExpression) allow defining values based on information that will only be available within the HTTP message in an actual API call.
This mechanism is used by [Link Objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#linkObject) and [Callback Objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#callbackObject)
of [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification);

`openapi-runtime-expression` is a **parser** and **validator** for OpenAPI Runtime Expressions. It supports
Runtime Expressions defined in following OpenAPI specification versions:

- [OpenAPI 3.0.0](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md#runtimeExpression)
- [OpenAPI 3.0.1](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.1.md#runtimeExpression)
- [OpenAPI 3.0.2](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#runtimeExpression)
- [OpenAPI 3.0.3](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#runtimeExpression)
- [OpenAPI 3.1.0](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#runtimeExpression)

## Table of Contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Parsing](#parsing)
    - [Validation](#validation)
    - [Grammar](#grammar)
- [More about OpenAPI runtime expressions](#more-about-openapi-runtime-expressions)
- [License](#license)
- [Software Bill Of Materials (SBOM)](#software-bill-of-materials-sbom)


## Getting started

### Installation

You can install `openapi-runtime-expression` using `npm`:

```sh
 $ npm install openapi-runtime-expression
```

Given that `openapi-runtime-expression` is a [pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
you can also install it directly from GitHub.

```sh
 $ npm install github:char0n/openapi-runtime-expression
```

### Usage

`openapi-runtime-expression` currently supports **parsing** and **validation**.
Both parser and validator are based on a superset of [ABNF](https://www.rfc-editor.org/rfc/rfc5234) ([SABNF](https://cs.github.com/ldthomas/apg-js2/blob/master/SABNF.md))
and use [apg-js](https://github.com/ldthomas/apg-js) parser generator.

#### Parsing

Parsing a Runtime Expression is as simple as importing the **parse** function
and calling it.

```js
import { parse } from 'openapi-runtime-expression';

const parseResult = parse('$request.header.accept');
```

**parseResult** variable has the following shape:

```
{
  result: {
    success: true,
    state: 101,
    length: 22,
    matched: 22,
    maxMatched: 22,
    maxTreeDepth: 14,
    nodeHits: 152,
    inputLength: 22,
    subBegin: 0,
    subEnd: 22,
    subLength: 22
  },
  ast: exportsAst {
    callbacks: [
      expression: [Function: expression],
      source: [Function: source],
      'header-reference': [Function: headerReference],
      'query-reference': [Function: queryReference],
      'path-reference': [Function: pathReference],
      'body-reference': [Function: bodyReference],
      'json-pointer': [Function: jsonPointer],
      'reference-token': [Function: referenceToken],
      name: [Function: name],
      token: [Function: token]
    ],
    astObject: 'astObject',
    init: [Function: init],
    ruleDefined: [Function: ruleDefined],
    udtDefined: [Function: udtDefined],
    down: [Function: down],
    up: [Function: up],
    translate: [Function: translate],
    setLength: [Function: setLength],
    getLength: [Function: getLength],
    toXml: [Function: toSml],
    phrases: [Function: phrases]
  }
}
```

###### Interpreting AST as list of entries

```js
import { parse } from 'openapi-runtime-expression';

const parseResult = parse('$request.header.accept');
const parts = [];

parseResult.ast.translate(parts);
```

After running the above code, **parts** variable has the following shape:

```js
[
  ['expression', '$request.query.queryUrl' ],
  ['source', 'query.queryUrl'],
  ['query-reference', 'query.queryUrl'],
  ['name', 'queryUrl'],
]
```

###### Interpreting AST as XML

```js
import { parse } from 'openapi-runtime-expression';

const parseResult = parse('$request.header.accept');
const xml = parseResult.ast.toXml();
```

After running the above code, **xml** variable has the following content:

```xml
<?xml version="1.0" encoding="utf-8"?>
<root nodes="4" characters="23">
<!-- input string, decimal integer character codes -->
  36,114,101,113,117,101,115,116,46,113,117,101,114,121,46,113,117,101,114,121,85,114,108
 <node name="expression" index="0" length="23">
   36,114,101,113,117,101,115,116,46,113,117,101,114,121,46,113,117,101,114,121,85,114,108
  <node name="source" index="9" length="14">
    113,117,101,114,121,46,113,117,101,114,121,85,114,108
   <node name="query-reference" index="9" length="14">
     113,117,101,114,121,46,113,117,101,114,121,85,114,108
    <node name="name" index="15" length="8">
      113,117,101,114,121,85,114,108
    </node><!-- name="name" -->
   </node><!-- name="query-reference" -->
  </node><!-- name="source" -->
 </node><!-- name="expression" -->
</root>
```

> NOTE: AST can also be traversed in classical way using [depth first traversal](https://www.tutorialspoint.com/data_structures_algorithms/depth_first_traversal.htm). For more information about this option please refer to [apg-js](https://github.com/ldthomas/apg-js) and [apg-js-examples](https://github.com/ldthomas/apg-js-examples).

#### Validation

Validating a Runtime Expression is as simple as importing the **test** function
and calling it.

```js
import { test } from 'openapi-runtime-expression';

test('$request.header.accept'); // => true
test('nonsensical string'); // => false
```

#### Grammar

New grammar instance can be created in following way:

```js
import { Grammar } from 'openapi-runtime-expression';

const grammar = new Grammar();
```

To obtain original ABNF (SABNF) grammar as a string:

```js
import { Grammar } from 'openapi-runtime-expression';

const grammar = new Grammar();

grammar.toString();
// or
String(grammar);
```

## More about OpenAPI runtime expressions

The runtime expression is defined by the following [ABNF](https://tools.ietf.org/html/rfc5234) syntax

```abnf
      expression = ( "$url" / "$method" / "$statusCode" / "$request." source / "$response." source )
      source = ( header-reference / query-reference / path-reference / body-reference )
      header-reference = "header." token
      query-reference = "query." name
      path-reference = "path." name
      body-reference = "body" ["#" json-pointer ]
      json-pointer    = *( "/" reference-token )
      reference-token = *( unescaped / escaped )
      unescaped       = %x00-2E / %x30-7D / %x7F-10FFFF
         ; %x2F ('/') and %x7E ('~') are excluded from 'unescaped'
      escaped         = "~" ( "0" / "1" )
        ; representing '~' and '/', respectively
      name = *( CHAR )
      token = 1*tchar
      tchar = "!" / "#" / "$" / "%" / "&" / "'" / "*" / "+" / "-" / "." /
        "^" / "_" / "`" / "|" / "~" / DIGIT / ALPHA
```

Here, `json-pointer` is taken from [RFC6901](https://tools.ietf.org/html/rfc6901), `char` from [RFC7159](https://tools.ietf.org/html/rfc7159#section-7) and `token` from [RFC7230](https://tools.ietf.org/html/rfc7230#section-3.2.6).

The `name` identifier is case-sensitive, whereas `token` is not.

The table below provides examples of runtime expressions and examples of their use in a value:

##### Examples

Source Location | example expression  | notes
---|:---|:---|
HTTP Method            | `$method`         | The allowable values for the `$method` will be those for the HTTP operation.
Requested media type | `$request.header.accept`        |
Request parameter      | `$request.path.id`        | Request parameters MUST be declared in the `parameters` section of the parent operation or they cannot be evaluated. This includes request headers.
Request body property   | `$request.body#/user/uuid`   | In operations which accept payloads, references may be made to portions of the `requestBody` or the entire body.
Request URL            | `$url`            |
Response value         | `$response.body#/status`       |  In operations which return payloads, references may be made to portions of the response body or the entire body.
Response header        | `$response.header.Server` |  Single header values only are available

Runtime expressions preserve the type of the referenced value.
Expressions can be embedded into string values by surrounding the expression with `{}` curly braces.

## License

`openapi-runtime-expression` is licensed under [Apache 2.0 license](https://github.com/char0n/openapi-runtime-expression/blob/main/LICENSE).
`openapi-runtime-expression` comes with an explicit [NOTICE](https://github.com/char0n/openapi-runtime-expression/blob/main/NOTICE) file
containing additional legal notices and information.

## Software Bill Of Materials (SBOM)

Software Bill Of materials is available in [sbom.spdx.yaml](https://github.com/char0n/openapi-runtime-expression/blob/main/sbom.spdx.yaml) using [SPDX](https://spdx.dev/) language.
