(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{PzU8:function(e,a,t){"use strict";t.r(a),t.d(a,"mathematica",(function(){return l}));var n="[a-zA-Z\\$][a-zA-Z0-9\\$]*",c="(?:\\d+)",o="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",m="(?:\\.\\w+|\\w+\\.\\w*|\\w+)",r="(?:`(?:`?"+o+")?)",z=new RegExp("(?:"+c+"(?:\\^\\^"+m+r+"?(?:\\*\\^[+-]?\\d+)?))"),i=new RegExp("(?:"+o+r+"?(?:\\*\\^[+-]?\\d+)?)"),A=new RegExp("(?:`?)(?:"+n+")(?:`(?:"+n+"))*(?:`?)");function Z(e,a){var t;return t=e.next(),'"'===t?(a.tokenize=$,a.tokenize(e,a)):"("===t&&e.eat("*")?(a.commentLevel++,a.tokenize=u,a.tokenize(e,a)):(e.backUp(1),e.match(z,!0,!1)||e.match(i,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string.special":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)||e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variableName.special":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"character":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variableName.constant":e.match(A,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function $(e,a){var t,n=!1,c=!1;while(null!=(t=e.next())){if('"'===t&&!c){n=!0;break}c=!c&&"\\"===t}return n&&!c&&(a.tokenize=Z),"string"}function u(e,a){var t,n;while(a.commentLevel>0&&null!=(n=e.next()))"("===t&&"*"===n&&a.commentLevel++,"*"===t&&")"===n&&a.commentLevel--,t=n;return a.commentLevel<=0&&(a.tokenize=Z),"comment"}var l={startState:function(){return{tokenize:Z,commentLevel:0}},token:function(e,a){return e.eatSpace()?null:a.tokenize(e,a)},languageData:{commentTokens:{block:{open:"(*",close:"*)"}}}}}}]);