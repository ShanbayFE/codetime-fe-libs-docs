(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{"/Lqz":function(E,t,R){"use strict";function e(E){var t=[];return E.split(" ").forEach((function(E){t.push({name:E})})),t}R.r(t),R.d(t,"forth",(function(){return O}));var i=e("INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL"),n=e("IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE");function r(E,t){var R;for(R=E.length-1;R>=0;R--)if(E[R].name===t.toUpperCase())return E[R]}var O={startState:function(){return{state:"",base:10,coreWordList:i,immediateWordList:n,wordList:[]}},token:function(E,t){var R;if(E.eatSpace())return null;if(""===t.state){if(E.match(/^(\]|:NONAME)(\s|$)/i))return t.state=" compilation","builtin";if(R=E.match(/^(\:)\s+(\S+)(\s|$)+/),R)return t.wordList.push({name:R[2].toUpperCase()}),t.state=" compilation","def";if(R=E.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i),R)return t.wordList.push({name:R[2].toUpperCase()}),"def";if(R=E.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/),R)return"builtin"}else{if(E.match(/^(\;|\[)(\s)/))return t.state="",E.backUp(1),"builtin";if(E.match(/^(\;|\[)($)/))return t.state="","builtin";if(E.match(/^(POSTPONE)\s+\S+(\s|$)+/))return"builtin"}return R=E.match(/^(\S+)(\s+|$)/),R?void 0!==r(t.wordList,R[1])?"variable":"\\"===R[1]?(E.skipToEnd(),"comment"):void 0!==r(t.coreWordList,R[1])?"builtin":void 0!==r(t.immediateWordList,R[1])?"keyword":"("===R[1]?(E.eatWhile((function(E){return")"!==E})),E.eat(")"),"comment"):".("===R[1]?(E.eatWhile((function(E){return")"!==E})),E.eat(")"),"string"):'S"'===R[1]||'."'===R[1]||'C"'===R[1]?(E.eatWhile((function(E){return'"'!==E})),E.eat('"'),"string"):R[1]-68719476735?"number":"atom":void 0}}}}]);