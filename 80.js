(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[80],{IzQd:function(e,t,n){"use strict";function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}n.r(t),n.d(t,"protobuf",(function(){return c}));var i=["package","message","import","syntax","required","optional","repeated","reserved","default","extensions","packed","bool","bytes","double","enum","float","string","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","option","service","rpc","returns"],a=r(i),u=new RegExp("^[_A-Za-z\xa1-\uffff][_A-Za-z0-9\xa1-\uffff]*");function o(e){if(e.eatSpace())return null;if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(/^[0-9\.+-]/,!1)){if(e.match(/^[+-]?0x[0-9a-fA-F]+/))return"number";if(e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))return"number";if(e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))return"number"}return e.match(/^"([^"]|(""))*"/)||e.match(/^'([^']|(''))*'/)?"string":e.match(a)?"keyword":e.match(u)?"variable":(e.next(),null)}var c={token:o,languageData:{autocomplete:i}}}}]);