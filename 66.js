(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{uvw6:function(e,t,n){"use strict";function a(e){return new RegExp("^(?:"+e.join("|")+")","i")}function r(e){return new RegExp("^(?:"+e.join("|")+")$","i")}n.r(t),n.d(t,"lua",(function(){return h}));var i=r(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),o=r(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),u=r(["function","if","repeat","do","\\(","{"]),s=r(["end","until","\\)","}"]),l=a(["end","until","\\)","}","else","elseif"]);function c(e){var t=0;while(e.eat("="))++t;return e.eat("["),t}function g(e,t){var n=e.next();return"-"==n&&e.eat("-")?e.eat("[")&&e.eat("[")?(t.cur=m(c(e),"comment"))(e,t):(e.skipToEnd(),"comment"):'"'==n||"'"==n?(t.cur=d(n))(e,t):"["==n&&/[\[=]/.test(e.peek())?(t.cur=m(c(e),"string"))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function m(e,t){return function(n,a){var r,i=null;while(null!=(r=n.next()))if(null==i)"]"==r&&(i=0);else if("="==r)++i;else{if("]"==r&&i==e){a.cur=g;break}i=null}return t}}function d(e){return function(t,n){var a,r=!1;while(null!=(a=t.next())){if(a==e&&!r)break;r=!r&&"\\"==a}return r||(n.cur=g),"string"}}var h={startState:function(e){return{basecol:0,indentDepth:0,cur:g}},token:function(e,t){if(e.eatSpace())return null;var n=t.cur(e,t),a=e.current();return"variable"==n&&(o.test(a)?n="keyword":i.test(a)&&(n="builtin")),"comment"!=n&&"string"!=n&&(u.test(a)?++t.indentDepth:s.test(a)&&--t.indentDepth),n},indent:function(e,t,n){var a=l.test(t);return e.basecol+n.unit*(e.indentDepth-(a?1:0))},languageData:{indentOnInput:/^\s*(?:end|until|else|\)|\})$/,commentTokens:{line:"--",block:{open:"--[[",close:"]]--"}}}}}}]);