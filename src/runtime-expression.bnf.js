const SABNF = `
; OpenAPI runtime expression ABNF syntax - https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#runtime-expressions
expression       = ( "$url" / "$method" / "$statusCode" / "$request." source / "$response." source )
source           = ( header-reference / query-reference / path-reference / body-reference )
header-reference = "header." token
query-reference  = "query." name  
path-reference   = "path." name
body-reference   = "body" ["#" json-pointer ]
json-pointer     = *( "/" reference-token )
reference-token  = *( unescaped / escaped )
unescaped        = %x00-2E / %x30-7D / %x7F-10FFFF ; %x2F ('/') and %x7E ('~') are excluded from 'unescaped'
escaped          = "~" ( "0" / "1" ) ; representing '~' and '/', respectively
name             = *( CHAR )
token            = 1*tchar
tchar            = "!" / "#" / "$" / "%" / "&" / "'" / "*" / "+" / "-" / "." / "^" / "_" / "\`" / "|" / "~" / DIGIT / ALPHA

; RFC 7159 - https://www.rfc-editor.org/rfc/rfc7159
CHAR = unescape /
    escape (
        %x22 /          ; "    quotation mark  U+0022
        %x5C /          ;     reverse solidus U+005C
        %x2F /          ; /    solidus         U+002F
        %x62 /          ; b    backspace       U+0008
        %x66 /          ; f    form feed       U+000C
        %x6E /          ; n    line feed       U+000A
        %x72 /          ; r    carriage return U+000D
        %x74 /          ; t    tab             U+0009
        %x75 4HEXDIG )  ; uXXXX                U+XXXX
escape         = %x5C              ; \\
quotation-mark = %x22      ; "
unescape       = %x20-21 / %x23-5B / %x5D-10FFFF

; Core rules - https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form
HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
DIGIT  = %x30-39
ALPHA  = %d65-90 / %d97-122
`

export default SABNF;
