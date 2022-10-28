# openapi-runtime-expression

Runtime expressions allow defining values based on information that will only be available within the HTTP message in an actual API call.
This mechanism is used by [Link Objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#linkObject) and [Callback Objects](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#callbackObject).

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

