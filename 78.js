(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{"Azj+":function(O,T,E){"use strict";function I(O){for(var T={},E=O.split(" "),I=0;I<E.length;++I)T[E[I]]=!0;return T}E.r(T),E.d(T,"pig",(function(){return C}));var N="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",e="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",A="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ",R=I(N),t=I(e),S=I(A),r=/[*+\-%<>=&?:\/!|]/;function L(O,T,E){return T.tokenize=E,E(O,T)}function n(O,T){var E,I=!1;while(E=O.next()){if("/"==E&&I){T.tokenize=a;break}I="*"==E}return"comment"}function U(O){return function(T,E){var I,N=!1,e=!1;while(null!=(I=T.next())){if(I==O&&!N){e=!0;break}N=!N&&"\\"==I}return!e&&N||(E.tokenize=a),"error"}}function a(O,T){var E=O.next();return'"'==E||"'"==E?L(O,T,U(E)):/[\[\]{}\(\),;\.]/.test(E)?null:/\d/.test(E)?(O.eatWhile(/[\w\.]/),"number"):"/"==E?O.eat("*")?L(O,T,n):(O.eatWhile(r),"operator"):"-"==E?O.eat("-")?(O.skipToEnd(),"comment"):(O.eatWhile(r),"operator"):r.test(E)?(O.eatWhile(r),"operator"):(O.eatWhile(/[\w\$_]/),t&&t.propertyIsEnumerable(O.current().toUpperCase())&&!O.eat(")")&&!O.eat(".")?"keyword":R&&R.propertyIsEnumerable(O.current().toUpperCase())?"builtin":S&&S.propertyIsEnumerable(O.current().toUpperCase())?"type":"variable")}var C={startState:function(){return{tokenize:a,startOfLine:!0}},token:function(O,T){if(O.eatSpace())return null;var E=T.tokenize(O,T);return E},languageData:{autocomplete:(N+A+e).split(" ")}}}}]);