(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{vIuv:function(e,t,a){"use strict";a.r(t),a.d(t,"ebnf",(function(){return r}));var c={slash:0,parenthesis:1},n={comment:0,_string:1,characterClass:2},r={startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(e,t){if(e){switch(0===t.stack.length&&('"'==e.peek()||"'"==e.peek()?(t.stringType=e.peek(),e.next(),t.stack.unshift(n._string)):e.match("/*")?(t.stack.unshift(n.comment),t.commentType=c.slash):e.match("(*")&&(t.stack.unshift(n.comment),t.commentType=c.parenthesis)),t.stack[0]){case n._string:while(t.stack[0]===n._string&&!e.eol())e.peek()===t.stringType?(e.next(),t.stack.shift()):"\\"===e.peek()?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return t.lhs?"property":"string";case n.comment:while(t.stack[0]===n.comment&&!e.eol())t.commentType===c.slash&&e.match("*/")||t.commentType===c.parenthesis&&e.match("*)")?(t.stack.shift(),t.commentType=null):e.match(/^.[^\*]*/);return"comment";case n.characterClass:while(t.stack[0]===n.characterClass&&!e.eol())e.match(/^[^\]\\]+/)||e.match(".")||t.stack.shift();return"operator"}var a=e.peek();switch(a){case"[":return e.next(),t.stack.unshift(n.characterClass),"bracket";case":":case"|":case";":return e.next(),"operator";case"%":if(e.match("%%"))return"header";if(e.match(/[%][A-Za-z]+/))return"keyword";if(e.match(/[%][}]/))return"bracket";break;case"/":if(e.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(e.match(/[\][a-z]+/))return"string.special";case".":if(e.match("."))return"atom";case"*":case"-":case"+":case"^":if(e.match(a))return"atom";case"$":if(e.match("$$"))return"builtin";if(e.match(/[$][0-9]+/))return"variableName.special";case"<":if(e.match(/<<[a-zA-Z_]+>>/))return"builtin"}return e.match("//")?(e.skipToEnd(),"comment"):e.match("return")?"operator":e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?e.match(/(?=[\(.])/)?"variable":e.match(/(?=[\s\n]*[:=])/)?"def":"variableName.special":-1!=["[","]","(",")"].indexOf(e.peek())?(e.next(),"bracket"):(e.eatSpace()||e.next(),null)}}}}}]);