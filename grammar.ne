@builtin "number.ne"

expression -> "$url" | "$method" | "$statusCode" | ("$request." source) | ("$response." source )
source -> header_reference | query_reference | path_reference | body_reference
header_reference -> "header." token
query_reference -> "query." name
path_reference -> "path." name
body_reference -> "body" "#" json_pointer
json_pointer -> ( "/" reference_token ) | null
reference_token -> unescaped:* | escaped:*
unescaped -> "%x00-2E" | "%x30-7D" | "%x7F-10FFFF"
escaped -> "~" ( "0" | "1" )
name -> CHAR:*
token -> tchar:+
tchar -> "!" | "#" | "$" | "%" | "&" | "'" | "*" | "+" | "-" | "." | "^" | "_" | "`" | "|" | "~" | DIGIT | ALPHA
CHAR -> [bfnrt\/\\]
      | "\\u" [a-fA-F0-9] [a-fA-F0-9] [a-fA-F0-9] [a-fA-F0-9]
      | [^"\\]
ALPHA -> [a-zA-Z]
DIGIT -> unsigned_int
