(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[111],{"m+MU":function(e,t,n){"use strict";n.r(t),n.d(t,"xQuery",(function(){return b}));var r=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"punctuation",style:null},i={type:"axis_specifier",style:"qualifier"},a={",":r},s=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],o=0,c=s.length;o<c;o++)a[s[o]]=e(s[o]);var u=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"];for(o=0,c=u.length;o<c;o++)a[u[o]]=n;var l=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"];for(o=0,c=l.length;o<c;o++)a[l[o]]=t;var f=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"];for(o=0,c=f.length;o<c;o++)a[f[o]]=i;return a}();function i(e,t,n){return t.tokenize=n,n(e,t)}function a(e,t){var n=e.next(),a=!1,l=y(e);if("<"==n){if(e.match("!--",!0))return i(e,t,f);if(e.match("![CDATA",!1))return t.tokenize=p,"tag";if(e.match("?",!1))return i(e,t,m);var d=e.eat("/");e.eatSpace();var h,v="";while(h=e.eat(/[^\s\u00a0=<>\"\'\/?]/))v+=h;return i(e,t,u(v,d))}if("{"==n)return k(t,{type:"codeblock"}),null;if("}"==n)return w(t),null;if(g(t))return">"==n?"tag":"/"==n&&e.eat(">")?(w(t),"tag"):"variable";if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===n&&e.eat(":"))return k(t,{type:"comment"}),i(e,t,s);if(l||'"'!==n&&"'"!==n){if("$"===n)return i(e,t,c);if(":"===n&&e.eat("="))return"keyword";if("("===n)return k(t,{type:"paren"}),null;if(")"===n)return w(t),null;if("["===n)return k(t,{type:"bracket"}),null;if("]"===n)return w(t),null;var b=r.propertyIsEnumerable(n)&&r[n];if(l&&'"'===n)while('"'!==e.next());if(l&&"'"===n)while("'"!==e.next());b||e.eatWhile(/[\w\$_-]/);var z=e.eat(":");!e.eat(":")&&z&&e.eatWhile(/[\w\$_-]/),e.match(/^[ \t]*\(/,!1)&&(a=!0);var I=e.current();return b=r.propertyIsEnumerable(I)&&r[I],a&&!b&&(b={type:"function_call",style:"def"}),x(t)?(w(t),"variable"):("element"!=I&&"attribute"!=I&&"axis_specifier"!=b.type||k(t,{type:"xmlconstructor"}),b?b.style:"variable")}return i(e,t,o(n))}function s(e,t){var n,r=!1,i=!1,a=0;while(n=e.next()){if(")"==n&&r){if(!(a>0)){w(t);break}a--}else":"==n&&i&&a++;r=":"==n,i="("==n}return"comment"}function o(e,t){return function(n,r){var i;if(h(r)&&n.current()==e)return w(r),t&&(r.tokenize=t),"string";if(k(r,{type:"string",name:e,tokenize:o(e,t)}),n.match("{",!1)&&d(r))return r.tokenize=a,"string";while(i=n.next()){if(i==e){w(r),t&&(r.tokenize=t);break}if(n.match("{",!1)&&d(r))return r.tokenize=a,"string"}return"string"}}function c(e,t){var n=/[\w\$_-]/;if(e.eat('"')){while('"'!==e.next());e.eat(":")}else e.eatWhile(n),e.match(":=",!1)||e.eat(":");return e.eatWhile(n),t.tokenize=a,"variable"}function u(e,t){return function(n,r){return n.eatSpace(),t&&n.eat(">")?(w(r),r.tokenize=a,"tag"):(n.eat("/")||k(r,{type:"tag",name:e,tokenize:a}),n.eat(">")?(r.tokenize=a,"tag"):(r.tokenize=l,"tag"))}}function l(e,t){var n=e.next();return"/"==n&&e.eat(">")?(d(t)&&w(t),g(t)&&w(t),"tag"):">"==n?(d(t)&&w(t),"tag"):"="==n?null:'"'==n||"'"==n?i(e,t,o(n,l)):(d(t)||k(t,{type:"attribute",tokenize:l}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(w(t),t.tokenize=a),"attribute")}function f(e,t){var n;while(n=e.next())if("-"==n&&e.match("->",!0))return t.tokenize=a,"comment"}function p(e,t){var n;while(n=e.next())if("]"==n&&e.match("]",!0))return t.tokenize=a,"comment"}function m(e,t){var n;while(n=e.next())if("?"==n&&e.match(">",!0))return t.tokenize=a,"processingInstruction"}function g(e){return v(e,"tag")}function d(e){return v(e,"attribute")}function x(e){return v(e,"xmlconstructor")}function h(e){return v(e,"string")}function y(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1)}function v(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function k(e,t){e.stack.push(t)}function w(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||a}var b={startState:function(){return{tokenize:a,cc:[],stack:[]}},token:function(e,t){if(e.eatSpace())return null;var n=t.tokenize(e,t);return n},languageData:{commentTokens:{block:{open:"(:",close:":)"}}}}}}]);