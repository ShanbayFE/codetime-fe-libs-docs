(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{ULPp:function(e,t,n){"use strict";function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}n.r(t),n.d(t,"mumps",(function(){return p}));var $=new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"),a=new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"),r=new RegExp("^[\\.,:]"),c=new RegExp("[()]"),i=new RegExp("^[%A-Za-z][A-Za-z0-9]*"),m=["break","close","do","else","for","goto","halt","hang","if","job","kill","lock","merge","new","open","quit","read","set","tcommit","trollback","tstart","use","view","write","xecute","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","tc","tro","ts","u","v","w","x"],d=["\\$ascii","\\$char","\\$data","\\$ecode","\\$estack","\\$etrap","\\$extract","\\$find","\\$fnumber","\\$get","\\$horolog","\\$io","\\$increment","\\$job","\\$justify","\\$length","\\$name","\\$next","\\$order","\\$piece","\\$qlength","\\$qsubscript","\\$query","\\$quit","\\$random","\\$reverse","\\$select","\\$stack","\\$test","\\$text","\\$translate","\\$view","\\$x","\\$y","\\$a","\\$c","\\$d","\\$e","\\$ec","\\$es","\\$et","\\$f","\\$fn","\\$g","\\$h","\\$i","\\$j","\\$l","\\$n","\\$na","\\$o","\\$p","\\$q","\\$ql","\\$qs","\\$r","\\$re","\\$s","\\$st","\\$t","\\$tr","\\$v","\\$z"],s=o(d),l=o(m);function u(e,t){e.sol()&&(t.label=!0,t.commandMode=0);var n=e.peek();return" "==n||"\t"==n?(t.label=!1,0==t.commandMode?t.commandMode=1:(t.commandMode<0||2==t.commandMode)&&(t.commandMode=0)):"."!=n&&t.commandMode>0&&(t.commandMode=":"==n?-1:2),"("!==n&&"\t"!==n||(t.label=!1),";"===n?(e.skipToEnd(),"comment"):e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)?"number":'"'==n?e.skipTo('"')?(e.next(),"string"):(e.skipToEnd(),"error"):e.match(a)||e.match($)?"operator":e.match(r)?null:c.test(n)?(e.next(),"bracket"):t.commandMode>0&&e.match(l)?"controlKeyword":e.match(s)?"builtin":e.match(i)?"variable":"$"===n||"^"===n?(e.next(),"builtin"):"@"===n?(e.next(),"string.special"):/[\w%]/.test(n)?(e.eatWhile(/[\w%]/),"variable"):(e.next(),"error")}var p={startState:function(){return{label:!1,commandMode:0}},token:function(e,t){var n=u(e,t);return t.label?"tag":n}}}}]);