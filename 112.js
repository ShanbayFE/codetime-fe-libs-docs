(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[112],{"K/14":function(e,n,t){"use strict";function r(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}t.r(n),t.d(n,"yacas",(function(){return h}));var o=r("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"),a="(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)",i="(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)",c=new RegExp(a),u=new RegExp(i),l=new RegExp(i+"?_"+i),s=new RegExp(i+"\\s*\\(");function p(e,n){var t;if(t=e.next(),'"'===t)return n.tokenize=m,n.tokenize(e,n);if("/"===t){if(e.eat("*"))return n.tokenize=f,n.tokenize(e,n);if(e.eat("/"))return e.skipToEnd(),"comment"}e.backUp(1);var r=e.match(/^(\w+)\s*\(/,!1);null!==r&&o.hasOwnProperty(r[1])&&n.scopes.push("bodied");var a=k(n);if("bodied"===a&&"["===t&&n.scopes.pop(),"["!==t&&"{"!==t&&"("!==t||n.scopes.push(t),a=k(n),("["===a&&"]"===t||"{"===a&&"}"===t||"("===a&&")"===t)&&n.scopes.pop(),";"===t)while("bodied"===a)n.scopes.pop(),a=k(n);return e.match(/\d+ *#/,!0,!1)?"qualifier":e.match(c,!0,!1)?"number":e.match(l,!0,!1)?"variableName.special":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(s,!0,!1)?(e.backUp(1),"variableName.function"):e.match(u,!0,!1)?"variable":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/,!0,!1)?"operator":"error"}function m(e,n){var t,r=!1,o=!1;while(null!=(t=e.next())){if('"'===t&&!o){r=!0;break}o=!o&&"\\"===t}return r&&!o&&(n.tokenize=p),"string"}function f(e,n){var t,r;while(null!=(r=e.next())){if("*"===t&&"/"===r){n.tokenize=p;break}t=r}return"comment"}function k(e){var n=null;return e.scopes.length>0&&(n=e.scopes[e.scopes.length-1]),n}var h={startState:function(){return{tokenize:p,scopes:[]}},token:function(e,n){return e.eatSpace()?null:n.tokenize(e,n)},indent:function(e,n,t){if(e.tokenize!==p&&null!==e.tokenize)return null;var r=0;return"]"!==n&&"];"!==n&&"}"!==n&&"};"!==n&&");"!==n||(r=-1),(e.scopes.length+r)*t.unit},languageData:{electricInput:/[{}\[\]()\;]/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}}]);