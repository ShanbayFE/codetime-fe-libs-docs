(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{ZPlC:function(i,l,e){"use strict";function n(i){var l=[],e="",n={".abort":"builtin",".align":"builtin",".altmacro":"builtin",".ascii":"builtin",".asciz":"builtin",".balign":"builtin",".balignw":"builtin",".balignl":"builtin",".bundle_align_mode":"builtin",".bundle_lock":"builtin",".bundle_unlock":"builtin",".byte":"builtin",".cfi_startproc":"builtin",".comm":"builtin",".data":"builtin",".def":"builtin",".desc":"builtin",".dim":"builtin",".double":"builtin",".eject":"builtin",".else":"builtin",".elseif":"builtin",".end":"builtin",".endef":"builtin",".endfunc":"builtin",".endif":"builtin",".equ":"builtin",".equiv":"builtin",".eqv":"builtin",".err":"builtin",".error":"builtin",".exitm":"builtin",".extern":"builtin",".fail":"builtin",".file":"builtin",".fill":"builtin",".float":"builtin",".func":"builtin",".global":"builtin",".gnu_attribute":"builtin",".hidden":"builtin",".hword":"builtin",".ident":"builtin",".if":"builtin",".incbin":"builtin",".include":"builtin",".int":"builtin",".internal":"builtin",".irp":"builtin",".irpc":"builtin",".lcomm":"builtin",".lflags":"builtin",".line":"builtin",".linkonce":"builtin",".list":"builtin",".ln":"builtin",".loc":"builtin",".loc_mark_labels":"builtin",".local":"builtin",".long":"builtin",".macro":"builtin",".mri":"builtin",".noaltmacro":"builtin",".nolist":"builtin",".octa":"builtin",".offset":"builtin",".org":"builtin",".p2align":"builtin",".popsection":"builtin",".previous":"builtin",".print":"builtin",".protected":"builtin",".psize":"builtin",".purgem":"builtin",".pushsection":"builtin",".quad":"builtin",".reloc":"builtin",".rept":"builtin",".sbttl":"builtin",".scl":"builtin",".section":"builtin",".set":"builtin",".short":"builtin",".single":"builtin",".size":"builtin",".skip":"builtin",".sleb128":"builtin",".space":"builtin",".stab":"builtin",".string":"builtin",".struct":"builtin",".subsection":"builtin",".symver":"builtin",".tag":"builtin",".text":"builtin",".title":"builtin",".type":"builtin",".uleb128":"builtin",".val":"builtin",".version":"builtin",".vtable_entry":"builtin",".vtable_inherit":"builtin",".warning":"builtin",".weak":"builtin",".weakref":"builtin",".word":"builtin"},t={};function a(){e="#",t.al="variable",t.ah="variable",t.ax="variable",t.eax="variableName.special",t.rax="variableName.special",t.bl="variable",t.bh="variable",t.bx="variable",t.ebx="variableName.special",t.rbx="variableName.special",t.cl="variable",t.ch="variable",t.cx="variable",t.ecx="variableName.special",t.rcx="variableName.special",t.dl="variable",t.dh="variable",t.dx="variable",t.edx="variableName.special",t.rdx="variableName.special",t.si="variable",t.esi="variableName.special",t.rsi="variableName.special",t.di="variable",t.edi="variableName.special",t.rdi="variableName.special",t.sp="variable",t.esp="variableName.special",t.rsp="variableName.special",t.bp="variable",t.ebp="variableName.special",t.rbp="variableName.special",t.ip="variable",t.eip="variableName.special",t.rip="variableName.special",t.cs="keyword",t.ds="keyword",t.ss="keyword",t.es="keyword",t.fs="keyword",t.gs="keyword"}function b(){e="@",n.syntax="builtin",t.r0="variable",t.r1="variable",t.r2="variable",t.r3="variable",t.r4="variable",t.r5="variable",t.r6="variable",t.r7="variable",t.r8="variable",t.r9="variable",t.r10="variable",t.r11="variable",t.r12="variable",t.sp="variableName.special",t.lr="variableName.special",t.pc="variableName.special",t.r13=t.sp,t.r14=t.lr,t.r15=t.pc,l.push((function(i,l){if("#"===i)return l.eatWhile(/\w/),"number"}))}function r(i,l){var e,n=!1;while(null!=(e=i.next())){if(e===l&&!n)return!1;n=!n&&"\\"===e}return n}function u(i,l){var e,n=!1;while(null!=(e=i.next())){if("/"===e&&n){l.tokenize=null;break}n="*"===e}return"comment"}return"x86"===i?a():"arm"!==i&&"armv6"!==i||b(),{startState:function(){return{tokenize:null}},token:function(i,a){if(a.tokenize)return a.tokenize(i,a);if(i.eatSpace())return null;var b,s,c=i.next();if("/"===c&&i.eat("*"))return a.tokenize=u,u(i,a);if(c===e)return i.skipToEnd(),"comment";if('"'===c)return r(i,'"'),"string";if("."===c)return i.eatWhile(/\w/),s=i.current().toLowerCase(),b=n[s],b||null;if("="===c)return i.eatWhile(/\w/),"tag";if("{"===c)return"bracket";if("}"===c)return"bracket";if(/\d/.test(c))return"0"===c&&i.eat("x")?(i.eatWhile(/[0-9a-fA-F]/),"number"):(i.eatWhile(/\d/),"number");if(/\w/.test(c))return i.eatWhile(/\w/),i.eat(":")?"tag":(s=i.current().toLowerCase(),b=t[s],b||null);for(var o=0;o<l.length;o++)if(b=l[o](c,i,a),b)return b},languageData:{commentTokens:{line:e,block:{open:"/*",close:"*/"}}}}}e.r(l),e.d(l,"gas",(function(){return t})),e.d(l,"gasArm",(function(){return a}));var t=n("x86"),a=n("arm")}}]);