(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"wBE/":function(e,t,n){"use strict";function r(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n.r(t),n.d(t,"asn1",(function(){return E}));var i={keywords:r("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:r("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:r("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:r("current deprecated mandatory obsolete"),tags:r("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:r("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:r("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:r("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0};function E(e){var t,n=e.keywords||i.keywords,r=e.cmipVerbs||i.cmipVerbs,E=e.compareTypes||i.compareTypes,a=e.status||i.status,s=e.tags||i.tags,o=e.storage||i.storage,I=e.modifier||i.modifier,T=e.accessTypes||i.accessTypes,u=e.multiLineStrings||i.multiLineStrings,S=!1!==e.indentStatements,l=/[\|\^]/;function p(e,i){var u=e.next();if('"'==u||"'"==u)return i.tokenize=A(u),i.tokenize(e,i);if(/[\[\]\(\){}:=,;]/.test(u))return t=u,"punctuation";if("-"==u&&e.eat("-"))return e.skipToEnd(),"comment";if(/\d/.test(u))return e.eatWhile(/[\w\.]/),"number";if(l.test(u))return e.eatWhile(l),"operator";e.eatWhile(/[\w\-]/);var S=e.current();return n.propertyIsEnumerable(S)?"keyword":r.propertyIsEnumerable(S)?"variableName":E.propertyIsEnumerable(S)?"atom":a.propertyIsEnumerable(S)?"comment":s.propertyIsEnumerable(S)?"typeName":o.propertyIsEnumerable(S)||I.propertyIsEnumerable(S)||T.propertyIsEnumerable(S)?"modifier":"variableName"}function A(e){return function(t,n){var r,i=!1,E=!1;while(null!=(r=t.next())){if(r==e&&!i){var a=t.peek();a&&(a=a.toLowerCase(),"b"!=a&&"h"!=a&&"o"!=a||t.next()),E=!0;break}i=!i&&"\\"==r}return(E||!i&&!u)&&(n.tokenize=null),"string"}}function N(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function c(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new N(r,t,n,null,e.context)}function O(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(){return{tokenize:null,context:new N(-2,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var r=n.context;if(e.sol()&&(null==r.align&&(r.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;t=null;var i=(n.tokenize||p)(e,n);if("comment"==i)return i;if(null==r.align&&(r.align=!0),";"!=t&&":"!=t&&","!=t||"statement"!=r.type)if("{"==t)c(n,e.column(),"}");else if("["==t)c(n,e.column(),"]");else if("("==t)c(n,e.column(),")");else if("}"==t){while("statement"==r.type)r=O(n);"}"==r.type&&(r=O(n));while("statement"==r.type)r=O(n)}else t==r.type?O(n):S&&(("}"==r.type||"top"==r.type)&&";"!=t||"statement"==r.type&&"newstatement"==t)&&c(n,e.column(),"statement");else O(n);return n.startOfLine=!1,i},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"--"}}}}}}]);