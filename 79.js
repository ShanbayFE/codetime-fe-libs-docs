(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{hwb1:function(e,t,r){"use strict";function n(e,t){t=t||{};for(var r=void 0!==t.prefix?t.prefix:"^",n=void 0!==t.suffix?t.suffix:"\\b",o=0;o<e.length;o++)e[o]instanceof RegExp?e[o]=e[o].source:e[o]=e[o].replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");return new RegExp(r+"("+e.join("|")+")"+n,"i")}r.r(t),r.d(t,"powerShell",(function(){return z}));var o="(?=[^A-Za-z\\d\\-_]|$)",i=/[\w\-:]/,a=n([/begin|break|catch|continue|data|default|do|dynamicparam/,/else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,/param|process|return|switch|throw|trap|try|until|where|while/],{suffix:o}),s=/[\[\]{},;`\\\.]|@[({]/,u=n(["f",/b?not/,/[ic]?split/,"join",/is(not)?/,"as",/[ic]?(eq|ne|[gl][te])/,/[ic]?(not)?(like|match|contains)/,/[ic]?replace/,/b?(and|or|xor)/],{prefix:"-"}),c=/[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/,l=n([u,c],{suffix:""}),p=/^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i,m=/^[A-Za-z\_][A-Za-z\-\_\d]*\b/,S=/[A-Z]:|%|\?/i,f=n([/Add-(Computer|Content|History|Member|PSSnapin|Type)/,/Checkpoint-Computer/,/Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,/Compare-Object/,/Complete-Transaction/,/Connect-PSSession/,/ConvertFrom-(Csv|Json|SecureString|StringData)/,/Convert-Path/,/ConvertTo-(Csv|Html|Json|SecureString|Xml)/,/Copy-Item(Property)?/,/Debug-Process/,/Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/Disconnect-PSSession/,/Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/(Enter|Exit)-PSSession/,/Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,/ForEach-Object/,/Format-(Custom|List|Table|Wide)/,new RegExp("Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)"),/Group-Object/,/Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,/ImportSystemModules/,/Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,/Join-Path/,/Limit-EventLog/,/Measure-(Command|Object)/,/Move-Item(Property)?/,new RegExp("New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)"),/Out-(Default|File|GridView|Host|Null|Printer|String)/,/Pause/,/(Pop|Push)-Location/,/Read-Host/,/Receive-(Job|PSSession)/,/Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,/Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,/Rename-(Computer|Item(Property)?)/,/Reset-ComputerMachinePassword/,/Resolve-Path/,/Restart-(Computer|Service)/,/Restore-Computer/,/Resume-(Job|Service)/,/Save-Help/,/Select-(Object|String|Xml)/,/Send-MailMessage/,new RegExp("Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)"),/Show-(Command|ControlPanelItem|EventLog)/,/Sort-Object/,/Split-Path/,/Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,/Stop-(Computer|Job|Process|Service|Transcript)/,/Suspend-(Job|Service)/,/TabExpansion2/,/Tee-Object/,/Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,/Trace-Command/,/Unblock-File/,/Undo-Transaction/,/Unregister-(Event|PSSessionConfiguration)/,/Update-(FormatData|Help|List|TypeData)/,/Use-Transaction/,/Wait-(Event|Job|Process)/,/Where-Object/,/Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,/cd|help|mkdir|more|oss|prompt/,/ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,/echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,/group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,/measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,/rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,/sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/],{prefix:"",suffix:""}),P=n([/[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,/FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,/MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,/PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,/PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,/WarningPreference|WhatIfPreference/,/Event|EventArgs|EventSubscriber|Sender/,/Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,/true|false|null/],{prefix:"\\$",suffix:""}),d=n([S,f,P],{suffix:o}),g={keyword:a,number:p,operator:l,builtin:d,punctuation:s,variable:m};function v(e,t){var r=t.returnStack[t.returnStack.length-1];if(r&&r.shouldReturnFrom(t))return t.tokenize=r.tokenize,t.returnStack.pop(),t.tokenize(e,t);if(e.eatSpace())return null;if(e.eat("("))return t.bracketNesting+=1,"punctuation";if(e.eat(")"))return t.bracketNesting-=1,"punctuation";for(var n in g)if(e.match(g[n]))return n;var o=e.next();if("'"===o)return b(e,t);if("$"===o)return y(e,t);if('"'===o)return C(e,t);if("<"===o&&e.eat("#"))return t.tokenize=w,w(e,t);if("#"===o)return e.skipToEnd(),"comment";if("@"===o){var a=e.eat(/["']/);if(a&&e.eol())return t.tokenize=R,t.startQuote=a[0],R(e,t);if(e.eol())return"error";if(e.peek().match(/[({]/))return"punctuation";if(e.peek().match(i))return y(e,t)}return"error"}function b(e,t){var r;while(null!=(r=e.peek()))if(e.next(),"'"===r&&!e.eat("'"))return t.tokenize=v,"string";return"error"}function C(e,t){var r;while(null!=(r=e.peek())){if("$"===r)return t.tokenize=k,"string";if(e.next(),"`"!==r){if('"'===r&&!e.eat('"'))return t.tokenize=v,"string"}else e.next()}return"error"}function k(e,t){return E(e,t,C)}function h(e,t){return t.tokenize=R,t.startQuote='"',R(e,t)}function x(e,t){return E(e,t,h)}function E(e,t,r){if(e.match("$(")){var n=t.bracketNesting;return t.returnStack.push({shouldReturnFrom:function(e){return e.bracketNesting===n},tokenize:r}),t.tokenize=v,t.bracketNesting+=1,"punctuation"}return e.next(),t.returnStack.push({shouldReturnFrom:function(){return!0},tokenize:r}),t.tokenize=y,t.tokenize(e,t)}function w(e,t){var r,n=!1;while(null!=(r=e.next())){if(n&&">"==r){t.tokenize=v;break}n="#"===r}return"comment"}function y(e,t){var r=e.peek();return e.eat("{")?(t.tokenize=M,M(e,t)):void 0!=r&&r.match(i)?(e.eatWhile(i),t.tokenize=v,"variable"):(t.tokenize=v,"error")}function M(e,t){var r;while(null!=(r=e.next()))if("}"===r){t.tokenize=v;break}return"variable"}function R(e,t){var r=t.startQuote;if(e.sol()&&e.match(new RegExp(r+"@")))t.tokenize=v;else if('"'===r)while(!e.eol()){var n=e.peek();if("$"===n)return t.tokenize=x,"string";e.next(),"`"===n&&e.next()}else e.skipToEnd();return"string"}var z={startState:function(){return{returnStack:[],bracketNesting:0,tokenize:v}},token:function(e,t){return t.tokenize(e,t)},languageData:{commentTokens:{line:"#",block:{open:"<#",close:"#>"}}}}}}]);