(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[115],{GSh6:function(t,e,n){"use strict";n.r(e),n.d(e,"StreamLanguage",(function(){return b})),n.d(e,"StringStream",(function(){return v}));var s=n("jrin"),i=n("tJVT"),r=n("rAM+"),a=n("tS8v"),o=n("yKVA"),h=n("879j"),u=n("fWQN"),l=n("mtLc"),c=n("lmln"),f=n("ubVE"),p=n("yqQ+");function g(t,e,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;null==e&&(e=t.search(/[^\s\u00a0]/),-1==e&&(e=t.length));for(var r=i,a=s;a<e;a++)9==t.charCodeAt(a)?r+=n-r%n:r++;return r}var v=function(){function t(e,n,s){Object(u["a"])(this,t),this.string=e,this.tabSize=n,this.indentUnit=s,this.pos=0,this.start=0,this.lastColumnPos=0,this.lastColumnValue=0}return Object(l["a"])(t,[{key:"eol",value:function(){return this.pos>=this.string.length}},{key:"sol",value:function(){return 0==this.pos}},{key:"peek",value:function(){return this.string.charAt(this.pos)||void 0}},{key:"next",value:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}},{key:"eat",value:function(t){var e,n=this.string.charAt(this.pos);if(e="string"==typeof t?n==t:n&&(t instanceof RegExp?t.test(n):t(n)),e)return++this.pos,n}},{key:"eatWhile",value:function(t){var e=this.pos;while(this.eat(t));return this.pos>e}},{key:"eatSpace",value:function(){var t=this.pos;while(/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;return this.pos>t}},{key:"skipToEnd",value:function(){this.pos=this.string.length}},{key:"skipTo",value:function(t){var e=this.string.indexOf(t,this.pos);if(e>-1)return this.pos=e,!0}},{key:"backUp",value:function(t){this.pos-=t}},{key:"column",value:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=g(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue}},{key:"indentation",value:function(){return g(this.string,null,this.tabSize)}},{key:"match",value:function(t,e,n){if("string"==typeof t){var s=function(t){return n?t.toLowerCase():t},i=this.string.substr(this.pos,t.length);return s(i)==s(t)?(!1!==e&&(this.pos+=t.length),!0):null}var r=this.string.slice(this.pos).match(t);return r&&r.index>0?null:(r&&!1!==e&&(this.pos+=r[0].length),r)}},{key:"current",value:function(){return this.string.slice(this.start,this.pos)}}]),t}();function d(t){return{token:t.token,blankLine:t.blankLine||function(){},startState:t.startState||function(){return!0},copyState:t.copyState||k,indent:t.indent||function(){return null},languageData:t.languageData||{},tokenTable:t.tokenTable||O}}function k(t){if("object"!=typeof t)return t;var e={};for(var n in t){var s=t[n];e[n]=s instanceof Array?s.slice():s}return e}var b=function(t){Object(o["a"])(n,t);var e=Object(h["a"])(n);function n(t){var s;Object(u["a"])(this,n);var i,r=Object(p["defineLanguageFacet"])(t.languageData),f=d(t),g=new(function(t){Object(o["a"])(n,t);var e=Object(h["a"])(n);function n(){return Object(u["a"])(this,n),e.apply(this,arguments)}return Object(l["a"])(n,[{key:"createParse",value:function(t,e,n){return new w(i,t,e,n)}}]),n}(c["e"]));return s=e.call(this,r,g,E(r),[p["indentService"].of((function(t,e){return s.getIndent(t,e)}))]),i=Object(a["a"])(s),s.streamParser=f,s.stateAfter=new c["b"]({perNode:!0}),s.tokenTable=t.tokenTable?new R(f.tokenTable):D,s}return Object(l["a"])(n,[{key:"getIndent",value:function(t,e){var n=Object(p["syntaxTree"])(t.state),s=n.resolve(e);while(s&&s.type!=this.topNode)s=s.parent;if(!s)return null;var i,r,a=m(this,n,0,s.from,e);if(a?(r=a.state,i=a.pos+1):(r=this.streamParser.startState(t.unit),i=0),e-i>1e4)return null;while(i<e){var o=t.state.doc.lineAt(i),h=Math.min(e,o.to);if(o.length){var u=new v(o.text,t.state.tabSize,t.unit);while(u.pos<h-o.from)j(this.streamParser.token,u,r)}else this.streamParser.blankLine(r,t.unit);if(h==e)break;i=o.to+1}var l=t.lineAt(e),c=l.text;return this.streamParser.indent(r,/^\s*(.*)/.exec(c)[1],t)}},{key:"allowsNesting",get:function(){return!1}}],[{key:"define",value:function(t){return new n(t)}}]),n}(p["Language"]);function m(t,e,n,s,i){var r=n>=s&&n+e.length<=i&&e.prop(t.stateAfter);if(r)return{state:t.streamParser.copyState(r),pos:n+e.length};for(var a=e.children.length-1;a>=0;a--){var o=e.children[a],h=n+e.positions[a],u=o instanceof c["f"]&&h<i&&m(t,o,h,s,i);if(u)return u}return null}function y(t,e,n,s,i){if(i&&n<=0&&s>=e.length)return e;i||e.type!=t.topNode||(i=!0);for(var r=e.children.length-1;r>=0;r--){var a=e.positions[r],o=e.children[r],h=void 0;if(a<s&&o instanceof c["f"]){if(!(h=y(t,o,n-a,s-a,i)))break;return i?new c["f"](e.type,e.children.slice(0,r).concat(h),e.positions.slice(0,r+1),a+h.length):h}}return null}function P(t,e,n,s){var i,a=Object(r["a"])(e);try{for(a.s();!(i=a.n()).done;){var o=i.value,h=o.from+(o.openStart?25:0),u=o.to-(o.openEnd?25:0),l=h<=n&&u>n&&m(t,o.tree,0-o.offset,n,u),f=void 0;if(l&&(f=y(t,o.tree,n+o.offset,l.pos+o.offset,!1)))return{state:l.state,tree:f}}}catch(g){a.e(g)}finally{a.f()}return{state:t.streamParser.startState(s?Object(p["getIndentUnit"])(s):4),tree:c["f"].empty}}var w=function(){function t(e,n,s,i){Object(u["a"])(this,t),this.lang=e,this.input=n,this.fragments=s,this.ranges=i,this.stoppedAt=null,this.chunks=[],this.chunkPos=[],this.chunk=[],this.chunkReused=void 0,this.rangeIndex=0,this.to=i[i.length-1].to;var r=p["ParseContext"].get(),a=i[0].from,o=P(e,s,a,null===r||void 0===r?void 0:r.state),h=o.state,l=o.tree;this.state=h,this.parsedPos=this.chunkStart=a+l.length;for(var c=0;c<l.children.length;c++)this.chunks.push(l.children[c]),this.chunkPos.push(l.positions[c]);r&&this.parsedPos<r.viewport.from-1e5&&(this.state=this.lang.streamParser.startState(Object(p["getIndentUnit"])(r.state)),r.skipUntilInView(this.parsedPos,r.viewport.from),this.parsedPos=r.viewport.from),this.moveRangeIndex()}return Object(l["a"])(t,[{key:"advance",value:function(){var t=p["ParseContext"].get(),e=null==this.stoppedAt?this.to:Math.min(this.to,this.stoppedAt),n=Math.min(e,this.chunkStart+2048);t&&(n=Math.min(n,t.viewport.to));while(this.parsedPos<n)this.parseLine(t);return this.chunkStart<this.parsedPos&&this.finishChunk(),this.parsedPos>=e?this.finish():t&&this.parsedPos>=t.viewport.to?(t.skipUntilInView(this.parsedPos,e),this.finish()):null}},{key:"stopAt",value:function(t){this.stoppedAt=t}},{key:"lineAfter",value:function(t){var e=this.input.chunk(t);if(this.input.lineChunks)"\n"==e&&(e="");else{var n=e.indexOf("\n");n>-1&&(e=e.slice(0,n))}return t+e.length<=this.to?e:e.slice(0,this.to-t)}},{key:"nextLine",value:function(){for(var t=this.parsedPos,e=this.lineAfter(t),n=t+e.length,s=this.rangeIndex;;){var i=this.ranges[s].to;if(i>=n)break;if(e=e.slice(0,i-(n-e.length)),s++,s==this.ranges.length)break;var r=this.ranges[s].from,a=this.lineAfter(r);e+=a,n=r+a.length}return{line:e,end:n}}},{key:"skipGapsTo",value:function(t,e,n){for(;;){var s=this.ranges[this.rangeIndex].to,i=t+e;if(n>0?s>i:s>=i)break;var r=this.ranges[++this.rangeIndex].from;e+=r-s}return e}},{key:"moveRangeIndex",value:function(){while(this.ranges[this.rangeIndex].to<this.parsedPos)this.rangeIndex++}},{key:"emitToken",value:function(t,e,n,s,i){if(this.ranges.length>1){i=this.skipGapsTo(e,i,1),e+=i;var r=this.chunk.length;i=this.skipGapsTo(n,i,-1),n+=i,s+=this.chunk.length-r}return this.chunk.push(t,e,n,s),i}},{key:"parseLine",value:function(t){var e=this.nextLine(),n=e.line,s=e.end,i=0,r=this.lang.streamParser,a=new v(n,t?t.state.tabSize:4,t?Object(p["getIndentUnit"])(t.state):2);if(a.eol())r.blankLine(this.state,a.indentUnit);else while(!a.eol()){var o=j(r.token,a,this.state);if(o&&(i=this.emitToken(this.lang.tokenTable.resolve(o),this.parsedPos+a.start,this.parsedPos+a.pos,4,i)),a.start>1e4)break}this.parsedPos=s,this.moveRangeIndex(),this.parsedPos<this.to&&this.parsedPos++}},{key:"finishChunk",value:function(){var t=c["f"].build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:x,topID:0,maxBufferLength:2048,reused:this.chunkReused});t=new c["f"](t.type,t.children,t.positions,t.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]),this.chunks.push(t),this.chunkPos.push(this.chunkStart-this.ranges[0].from),this.chunk=[],this.chunkReused=void 0,this.chunkStart=this.parsedPos}},{key:"finish",value:function(){return new c["f"](this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}}]),t}();function j(t,e,n){e.start=e.pos;for(var s=0;s<10;s++){var i=t(e,n);if(e.pos>e.start)return i}throw new Error("Stream parser failed to advance stream.")}for(var O=Object.create(null),S=[c["d"].none],x=new c["c"](S),A=[],I=Object.create(null),T=0,C=[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","typeName"],["attribute","propertyName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]];T<C.length;T++){var L=C[T],N=Object(i["a"])(L,2),U=N[0],V=N[1];I[U]=z(O,V)}var R=function(){function t(e){Object(u["a"])(this,t),this.extra=e,this.table=Object.assign(Object.create(null),I)}return Object(l["a"])(t,[{key:"resolve",value:function(t){return t?this.table[t]||(this.table[t]=z(this.extra,t)):0}}]),t}(),D=new R(O);function M(t,e){A.indexOf(t)>-1||(A.push(t),console.warn(e))}function z(t,e){var n,i=null,a=Object(r["a"])(e.split("."));try{for(a.s();!(n=a.n()).done;){var o=n.value,h=t[o]||f["tags"][o];h?"function"==typeof h?i?i=h(i):M(o,"Modifier ".concat(o," used at start of tag")):i?M(o,"Tag ".concat(o," used as modifier")):i=h:M(o,"Unknown highlighting tag ".concat(o))}}catch(p){a.e(p)}finally{a.f()}if(!i)return 0;var u=e.replace(/ /g,"_"),l=c["d"].define({id:S.length,name:u,props:[Object(f["styleTags"])(Object(s["a"])({},u,i))]});return S.push(l),l.id}function E(t){var e=c["d"].define({id:S.length,name:"Document",props:[p["languageDataProp"].add((function(){return t}))]});return S.push(e),e}}}]);