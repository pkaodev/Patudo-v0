function _mergeNamespaces(i,e){for(var s=0;s<e.length;s++){const o=e[s];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in i)){const c=Object.getOwnPropertyDescriptor(o,a);c&&Object.defineProperty(i,a,c.get?c:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();function getDefaultExportFromCjs(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$2=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$3=Symbol.for("react.fragment"),q$2=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t$1=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$2=Symbol.for("react.forward_ref"),w$1=Symbol.for("react.suspense"),x$2=Symbol.for("react.memo"),y$1=Symbol.for("react.lazy"),z$3=Symbol.iterator;function A$2(i){return i===null||typeof i!="object"?null:(i=z$3&&i[z$3]||i["@@iterator"],typeof i=="function"?i:null)}var B$3={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$3=Object.assign,D$3={};function E$2(i,e,s){this.props=i,this.context=e,this.refs=D$3,this.updater=s||B$3}E$2.prototype.isReactComponent={};E$2.prototype.setState=function(i,e){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,e,"setState")};E$2.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function F$2(){}F$2.prototype=E$2.prototype;function G$2(i,e,s){this.props=i,this.context=e,this.refs=D$3,this.updater=s||B$3}var H$2=G$2.prototype=new F$2;H$2.constructor=G$2;C$3(H$2,E$2.prototype);H$2.isPureReactComponent=!0;var I$2=Array.isArray,J$2=Object.prototype.hasOwnProperty,K$3={current:null},L$3={key:!0,ref:!0,__self:!0,__source:!0};function M$2(i,e,s){var o,a={},c=null,d=null;if(e!=null)for(o in e.ref!==void 0&&(d=e.ref),e.key!==void 0&&(c=""+e.key),e)J$2.call(e,o)&&!L$3.hasOwnProperty(o)&&(a[o]=e[o]);var h=arguments.length-2;if(h===1)a.children=s;else if(1<h){for(var g=Array(h),_=0;_<h;_++)g[_]=arguments[_+2];a.children=g}if(i&&i.defaultProps)for(o in h=i.defaultProps,h)a[o]===void 0&&(a[o]=h[o]);return{$$typeof:l$2,type:i,key:c,ref:d,props:a,_owner:K$3.current}}function N$3(i,e){return{$$typeof:l$2,type:i.type,key:e,ref:i.ref,props:i.props,_owner:i._owner}}function O$3(i){return typeof i=="object"&&i!==null&&i.$$typeof===l$2}function escape(i){var e={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(s){return e[s]})}var P$2=/\/+/g;function Q$3(i,e){return typeof i=="object"&&i!==null&&i.key!=null?escape(""+i.key):e.toString(36)}function R$2(i,e,s,o,a){var c=typeof i;(c==="undefined"||c==="boolean")&&(i=null);var d=!1;if(i===null)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(i.$$typeof){case l$2:case n$1:d=!0}}if(d)return d=i,a=a(d),i=o===""?"."+Q$3(d,0):o,I$2(a)?(s="",i!=null&&(s=i.replace(P$2,"$&/")+"/"),R$2(a,e,s,"",function(_){return _})):a!=null&&(O$3(a)&&(a=N$3(a,s+(!a.key||d&&d.key===a.key?"":(""+a.key).replace(P$2,"$&/")+"/")+i)),e.push(a)),1;if(d=0,o=o===""?".":o+":",I$2(i))for(var h=0;h<i.length;h++){c=i[h];var g=o+Q$3(c,h);d+=R$2(c,e,s,g,a)}else if(g=A$2(i),typeof g=="function")for(i=g.call(i),h=0;!(c=i.next()).done;)c=c.value,g=o+Q$3(c,h++),d+=R$2(c,e,s,g,a);else if(c==="object")throw e=String(i),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return d}function S$2(i,e,s){if(i==null)return i;var o=[],a=0;return R$2(i,o,"","",function(c){return e.call(s,c,a++)}),o}function T$2(i){if(i._status===-1){var e=i._result;e=e(),e.then(function(s){(i._status===0||i._status===-1)&&(i._status=1,i._result=s)},function(s){(i._status===0||i._status===-1)&&(i._status=2,i._result=s)}),i._status===-1&&(i._status=0,i._result=e)}if(i._status===1)return i._result.default;throw i._result}var U$3={current:null},V$2={transition:null},W$3={ReactCurrentDispatcher:U$3,ReactCurrentBatchConfig:V$2,ReactCurrentOwner:K$3};react_production_min.Children={map:S$2,forEach:function(i,e,s){S$2(i,function(){e.apply(this,arguments)},s)},count:function(i){var e=0;return S$2(i,function(){e++}),e},toArray:function(i){return S$2(i,function(e){return e})||[]},only:function(i){if(!O$3(i))throw Error("React.Children.only expected to receive a single React element child.");return i}};react_production_min.Component=E$2;react_production_min.Fragment=p$3;react_production_min.Profiler=r;react_production_min.PureComponent=G$2;react_production_min.StrictMode=q$2;react_production_min.Suspense=w$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$3;react_production_min.cloneElement=function(i,e,s){if(i==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+i+".");var o=C$3({},i.props),a=i.key,c=i.ref,d=i._owner;if(e!=null){if(e.ref!==void 0&&(c=e.ref,d=K$3.current),e.key!==void 0&&(a=""+e.key),i.type&&i.type.defaultProps)var h=i.type.defaultProps;for(g in e)J$2.call(e,g)&&!L$3.hasOwnProperty(g)&&(o[g]=e[g]===void 0&&h!==void 0?h[g]:e[g])}var g=arguments.length-2;if(g===1)o.children=s;else if(1<g){h=Array(g);for(var _=0;_<g;_++)h[_]=arguments[_+2];o.children=h}return{$$typeof:l$2,type:i.type,key:a,ref:c,props:o,_owner:d}};react_production_min.createContext=function(i){return i={$$typeof:u,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},i.Provider={$$typeof:t$1,_context:i},i.Consumer=i};react_production_min.createElement=M$2;react_production_min.createFactory=function(i){var e=M$2.bind(null,i);return e.type=i,e};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(i){return{$$typeof:v$2,render:i}};react_production_min.isValidElement=O$3;react_production_min.lazy=function(i){return{$$typeof:y$1,_payload:{_status:-1,_result:i},_init:T$2}};react_production_min.memo=function(i,e){return{$$typeof:x$2,type:i,compare:e===void 0?null:e}};react_production_min.startTransition=function(i){var e=V$2.transition;V$2.transition={};try{i()}finally{V$2.transition=e}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};react_production_min.useCallback=function(i,e){return U$3.current.useCallback(i,e)};react_production_min.useContext=function(i){return U$3.current.useContext(i)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(i){return U$3.current.useDeferredValue(i)};react_production_min.useEffect=function(i,e){return U$3.current.useEffect(i,e)};react_production_min.useId=function(){return U$3.current.useId()};react_production_min.useImperativeHandle=function(i,e,s){return U$3.current.useImperativeHandle(i,e,s)};react_production_min.useInsertionEffect=function(i,e){return U$3.current.useInsertionEffect(i,e)};react_production_min.useLayoutEffect=function(i,e){return U$3.current.useLayoutEffect(i,e)};react_production_min.useMemo=function(i,e){return U$3.current.useMemo(i,e)};react_production_min.useReducer=function(i,e,s){return U$3.current.useReducer(i,e,s)};react_production_min.useRef=function(i){return U$3.current.useRef(i)};react_production_min.useState=function(i){return U$3.current.useState(i)};react_production_min.useSyncExternalStore=function(i,e,s){return U$3.current.useSyncExternalStore(i,e,s)};react_production_min.useTransition=function(){return U$3.current.useTransition()};react_production_min.version="18.2.0";(function(i){i.exports=react_production_min})(react);const React=getDefaultExportFromCjs(react.exports),React$1=_mergeNamespaces({__proto__:null,default:React},[react.exports]);var client={},reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(i){function e(xt,Dt){var Ft=xt.length;xt.push(Dt);e:for(;0<Ft;){var Ht=Ft-1>>>1,Yt=xt[Ht];if(0<a(Yt,Dt))xt[Ht]=Dt,xt[Ft]=Yt,Ft=Ht;else break e}}function s(xt){return xt.length===0?null:xt[0]}function o(xt){if(xt.length===0)return null;var Dt=xt[0],Ft=xt.pop();if(Ft!==Dt){xt[0]=Ft;e:for(var Ht=0,Yt=xt.length,ir=Yt>>>1;Ht<ir;){var er=2*(Ht+1)-1,lr=xt[er],tr=er+1,sr=xt[tr];if(0>a(lr,Ft))tr<Yt&&0>a(sr,lr)?(xt[Ht]=sr,xt[tr]=Ft,Ht=tr):(xt[Ht]=lr,xt[er]=Ft,Ht=er);else if(tr<Yt&&0>a(sr,Ft))xt[Ht]=sr,xt[tr]=Ft,Ht=tr;else break e}}return Dt}function a(xt,Dt){var Ft=xt.sortIndex-Dt.sortIndex;return Ft!==0?Ft:xt.id-Dt.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();i.unstable_now=function(){return d.now()-h}}var g=[],_=[],b=1,et=null,ot=3,gt=!1,_t=!1,$t=!1,St=typeof setTimeout=="function"?setTimeout:null,mt=typeof clearTimeout=="function"?clearTimeout:null,pt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function yt(xt){for(var Dt=s(_);Dt!==null;){if(Dt.callback===null)o(_);else if(Dt.startTime<=xt)o(_),Dt.sortIndex=Dt.expirationTime,e(g,Dt);else break;Dt=s(_)}}function wt(xt){if($t=!1,yt(xt),!_t)if(s(g)!==null)_t=!0,or(It);else{var Dt=s(_);Dt!==null&&ar(wt,Dt.startTime-xt)}}function It(xt,Dt){_t=!1,$t&&($t=!1,mt(Ot),Ot=-1),gt=!0;var Ft=ot;try{for(yt(Dt),et=s(g);et!==null&&(!(et.expirationTime>Dt)||xt&&!Fn());){var Ht=et.callback;if(typeof Ht=="function"){et.callback=null,ot=et.priorityLevel;var Yt=Ht(et.expirationTime<=Dt);Dt=i.unstable_now(),typeof Yt=="function"?et.callback=Yt:et===s(g)&&o(g),yt(Dt)}else o(g);et=s(g)}if(et!==null)var ir=!0;else{var er=s(_);er!==null&&ar(wt,er.startTime-Dt),ir=!1}return ir}finally{et=null,ot=Ft,gt=!1}}var Ct=!1,kt=null,Ot=-1,Bt=5,Mt=-1;function Fn(){return!(i.unstable_now()-Mt<Bt)}function nr(){if(kt!==null){var xt=i.unstable_now();Mt=xt;var Dt=!0;try{Dt=kt(!0,xt)}finally{Dt?rr():(Ct=!1,kt=null)}}else Ct=!1}var rr;if(typeof pt=="function")rr=function(){pt(nr)};else if(typeof MessageChannel<"u"){var ur=new MessageChannel,cr=ur.port2;ur.port1.onmessage=nr,rr=function(){cr.postMessage(null)}}else rr=function(){St(nr,0)};function or(xt){kt=xt,Ct||(Ct=!0,rr())}function ar(xt,Dt){Ot=St(function(){xt(i.unstable_now())},Dt)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(xt){xt.callback=null},i.unstable_continueExecution=function(){_t||gt||(_t=!0,or(It))},i.unstable_forceFrameRate=function(xt){0>xt||125<xt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Bt=0<xt?Math.floor(1e3/xt):5},i.unstable_getCurrentPriorityLevel=function(){return ot},i.unstable_getFirstCallbackNode=function(){return s(g)},i.unstable_next=function(xt){switch(ot){case 1:case 2:case 3:var Dt=3;break;default:Dt=ot}var Ft=ot;ot=Dt;try{return xt()}finally{ot=Ft}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(xt,Dt){switch(xt){case 1:case 2:case 3:case 4:case 5:break;default:xt=3}var Ft=ot;ot=xt;try{return Dt()}finally{ot=Ft}},i.unstable_scheduleCallback=function(xt,Dt,Ft){var Ht=i.unstable_now();switch(typeof Ft=="object"&&Ft!==null?(Ft=Ft.delay,Ft=typeof Ft=="number"&&0<Ft?Ht+Ft:Ht):Ft=Ht,xt){case 1:var Yt=-1;break;case 2:Yt=250;break;case 5:Yt=1073741823;break;case 4:Yt=1e4;break;default:Yt=5e3}return Yt=Ft+Yt,xt={id:b++,callback:Dt,priorityLevel:xt,startTime:Ft,expirationTime:Yt,sortIndex:-1},Ft>Ht?(xt.sortIndex=Ft,e(_,xt),s(g)===null&&xt===s(_)&&($t?(mt(Ot),Ot=-1):$t=!0,ar(wt,Ft-Ht))):(xt.sortIndex=Yt,e(g,xt),_t||gt||(_t=!0,or(It))),xt},i.unstable_shouldYield=Fn,i.unstable_wrapCallback=function(xt){var Dt=ot;return function(){var Ft=ot;ot=Dt;try{return xt.apply(this,arguments)}finally{ot=Ft}}}})(scheduler_production_min);(function(i){i.exports=scheduler_production_min})(scheduler);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa$2=react.exports,ca=scheduler.exports;function p$2(i){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+i,s=1;s<arguments.length;s++)e+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+i+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da$1=new Set,ea$1={};function fa$1(i,e){ha$1(i,e),ha$1(i+"Capture",e)}function ha$1(i,e){for(ea$1[i]=e,i=0;i<e.length;i++)da$1.add(e[i])}var ia$2=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja$1=Object.prototype.hasOwnProperty,ka$1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma$2={};function oa$1(i){return ja$1.call(ma$2,i)?!0:ja$1.call(la,i)?!1:ka$1.test(i)?ma$2[i]=!0:(la[i]=!0,!1)}function pa$2(i,e,s,o){if(s!==null&&s.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:s!==null?!s.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function qa$2(i,e,s,o){if(e===null||typeof e>"u"||pa$2(i,e,s,o))return!0;if(o)return!1;if(s!==null)switch(s.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function v$1(i,e,s,o,a,c,d){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=i,this.type=e,this.sanitizeURL=c,this.removeEmptyString=d}var z$2={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){z$2[i]=new v$1(i,0,!1,i,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var e=i[0];z$2[e]=new v$1(e,1,!1,i[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(i){z$2[i]=new v$1(i,2,!1,i.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){z$2[i]=new v$1(i,2,!1,i,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){z$2[i]=new v$1(i,3,!1,i.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(i){z$2[i]=new v$1(i,3,!0,i,null,!1,!1)});["capture","download"].forEach(function(i){z$2[i]=new v$1(i,4,!1,i,null,!1,!1)});["cols","rows","size","span"].forEach(function(i){z$2[i]=new v$1(i,6,!1,i,null,!1,!1)});["rowSpan","start"].forEach(function(i){z$2[i]=new v$1(i,5,!1,i.toLowerCase(),null,!1,!1)});var ra$2=/[\-:]([a-z])/g;function sa$1(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var e=i.replace(ra$2,sa$1);z$2[e]=new v$1(e,1,!1,i,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var e=i.replace(ra$2,sa$1);z$2[e]=new v$1(e,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(i){var e=i.replace(ra$2,sa$1);z$2[e]=new v$1(e,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(i){z$2[i]=new v$1(i,1,!1,i.toLowerCase(),null,!1,!1)});z$2.xlinkHref=new v$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(i){z$2[i]=new v$1(i,1,!1,i.toLowerCase(),null,!0,!0)});function ta$2(i,e,s,o){var a=z$2.hasOwnProperty(e)?z$2[e]:null;(a!==null?a.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qa$2(e,s,a,o)&&(s=null),o||a===null?oa$1(e)&&(s===null?i.removeAttribute(e):i.setAttribute(e,""+s)):a.mustUseProperty?i[a.propertyName]=s===null?a.type===3?!1:"":s:(e=a.attributeName,o=a.attributeNamespace,s===null?i.removeAttribute(e):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,o?i.setAttributeNS(o,e,s):i.setAttribute(e,s))))}var ua$1=aa$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va$2=Symbol.for("react.element"),wa$1=Symbol.for("react.portal"),ya$2=Symbol.for("react.fragment"),za$1=Symbol.for("react.strict_mode"),Aa$1=Symbol.for("react.profiler"),Ba$1=Symbol.for("react.provider"),Ca$1=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea$1=Symbol.for("react.suspense"),Fa$1=Symbol.for("react.suspense_list"),Ga$1=Symbol.for("react.memo"),Ha$1=Symbol.for("react.lazy"),Ia$1=Symbol.for("react.offscreen"),Ja$1=Symbol.iterator;function Ka$2(i){return i===null||typeof i!="object"?null:(i=Ja$1&&i[Ja$1]||i["@@iterator"],typeof i=="function"?i:null)}var A$1=Object.assign,La$1;function Ma$2(i){if(La$1===void 0)try{throw Error()}catch(s){var e=s.stack.trim().match(/\n( *(at )?)/);La$1=e&&e[1]||""}return`
`+La$1+i}var Na$1=!1;function Oa$2(i,e){if(!i||Na$1)return"";Na$1=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(_){var o=_}Reflect.construct(i,[],e)}else{try{e.call()}catch(_){o=_}i.call(e.prototype)}else{try{throw Error()}catch(_){o=_}i()}}catch(_){if(_&&o&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),c=o.stack.split(`
`),d=a.length-1,h=c.length-1;1<=d&&0<=h&&a[d]!==c[h];)h--;for(;1<=d&&0<=h;d--,h--)if(a[d]!==c[h]){if(d!==1||h!==1)do if(d--,h--,0>h||a[d]!==c[h]){var g=`
`+a[d].replace(" at new "," at ");return i.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",i.displayName)),g}while(1<=d&&0<=h);break}}}finally{Na$1=!1,Error.prepareStackTrace=s}return(i=i?i.displayName||i.name:"")?Ma$2(i):""}function Pa$1(i){switch(i.tag){case 5:return Ma$2(i.type);case 16:return Ma$2("Lazy");case 13:return Ma$2("Suspense");case 19:return Ma$2("SuspenseList");case 0:case 2:case 15:return i=Oa$2(i.type,!1),i;case 11:return i=Oa$2(i.type.render,!1),i;case 1:return i=Oa$2(i.type,!0),i;default:return""}}function Qa$1(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case ya$2:return"Fragment";case wa$1:return"Portal";case Aa$1:return"Profiler";case za$1:return"StrictMode";case Ea$1:return"Suspense";case Fa$1:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case Ca$1:return(i.displayName||"Context")+".Consumer";case Ba$1:return(i._context.displayName||"Context")+".Provider";case Da:var e=i.render;return i=i.displayName,i||(i=e.displayName||e.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Ga$1:return e=i.displayName||null,e!==null?e:Qa$1(i.type)||"Memo";case Ha$1:e=i._payload,i=i._init;try{return Qa$1(i(e))}catch{}}return null}function Ra$2(i){var e=i.type;switch(i.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=e.render,i=i.displayName||i.name||"",e.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa$1(e);case 8:return e===za$1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sa$2(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ta$2(i){var e=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ua$2(i){var e=Ta$2(i)?"checked":"value",s=Object.getOwnPropertyDescriptor(i.constructor.prototype,e),o=""+i[e];if(!i.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,c=s.set;return Object.defineProperty(i,e,{configurable:!0,get:function(){return a.call(this)},set:function(d){o=""+d,c.call(this,d)}}),Object.defineProperty(i,e,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){i._valueTracker=null,delete i[e]}}}}function Va$2(i){i._valueTracker||(i._valueTracker=Ua$2(i))}function Wa$1(i){if(!i)return!1;var e=i._valueTracker;if(!e)return!0;var s=e.getValue(),o="";return i&&(o=Ta$2(i)?i.checked?"true":"false":i.value),i=o,i!==s?(e.setValue(i),!0):!1}function Xa$1(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ya$1(i,e){var s=e.checked;return A$1({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s!=null?s:i._wrapperState.initialChecked})}function Za$1(i,e){var s=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;s=Sa$2(e.value!=null?e.value:s),i._wrapperState={initialChecked:o,initialValue:s,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ab$1(i,e){e=e.checked,e!=null&&ta$2(i,"checked",e,!1)}function bb$1(i,e){ab$1(i,e);var s=Sa$2(e.value),o=e.type;if(s!=null)o==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+s):i.value!==""+s&&(i.value=""+s);else if(o==="submit"||o==="reset"){i.removeAttribute("value");return}e.hasOwnProperty("value")?cb$1(i,e.type,s):e.hasOwnProperty("defaultValue")&&cb$1(i,e.type,Sa$2(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(i.defaultChecked=!!e.defaultChecked)}function db$2(i,e,s){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+i._wrapperState.initialValue,s||e===i.value||(i.value=e),i.defaultValue=e}s=i.name,s!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,s!==""&&(i.name=s)}function cb$1(i,e,s){(e!=="number"||Xa$1(i.ownerDocument)!==i)&&(s==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+s&&(i.defaultValue=""+s))}var eb=Array.isArray;function fb$1(i,e,s,o){if(i=i.options,e){e={};for(var a=0;a<s.length;a++)e["$"+s[a]]=!0;for(s=0;s<i.length;s++)a=e.hasOwnProperty("$"+i[s].value),i[s].selected!==a&&(i[s].selected=a),a&&o&&(i[s].defaultSelected=!0)}else{for(s=""+Sa$2(s),e=null,a=0;a<i.length;a++){if(i[a].value===s){i[a].selected=!0,o&&(i[a].defaultSelected=!0);return}e!==null||i[a].disabled||(e=i[a])}e!==null&&(e.selected=!0)}}function gb$1(i,e){if(e.dangerouslySetInnerHTML!=null)throw Error(p$2(91));return A$1({},e,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function hb$1(i,e){var s=e.value;if(s==null){if(s=e.children,e=e.defaultValue,s!=null){if(e!=null)throw Error(p$2(92));if(eb(s)){if(1<s.length)throw Error(p$2(93));s=s[0]}e=s}e==null&&(e=""),s=e}i._wrapperState={initialValue:Sa$2(s)}}function ib$1(i,e){var s=Sa$2(e.value),o=Sa$2(e.defaultValue);s!=null&&(s=""+s,s!==i.value&&(i.value=s),e.defaultValue==null&&i.defaultValue!==s&&(i.defaultValue=s)),o!=null&&(i.defaultValue=""+o)}function jb$1(i){var e=i.textContent;e===i._wrapperState.initialValue&&e!==""&&e!==null&&(i.value=e)}function kb$1(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb$1(i,e){return i==null||i==="http://www.w3.org/1999/xhtml"?kb$1(e):i==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var mb$1,nb$1=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,s,o,a){MSApp.execUnsafeLocalFunction(function(){return i(e,s,o,a)})}:i}(function(i,e){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=e;else{for(mb$1=mb$1||document.createElement("div"),mb$1.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mb$1.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;e.firstChild;)i.appendChild(e.firstChild)}});function ob$1(i,e){if(e){var s=i.firstChild;if(s&&s===i.lastChild&&s.nodeType===3){s.nodeValue=e;return}}i.textContent=e}var pb$1={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb$1=["Webkit","ms","Moz","O"];Object.keys(pb$1).forEach(function(i){qb$1.forEach(function(e){e=e+i.charAt(0).toUpperCase()+i.substring(1),pb$1[e]=pb$1[i]})});function rb$1(i,e,s){return e==null||typeof e=="boolean"||e===""?"":s||typeof e!="number"||e===0||pb$1.hasOwnProperty(i)&&pb$1[i]?(""+e).trim():e+"px"}function sb$1(i,e){i=i.style;for(var s in e)if(e.hasOwnProperty(s)){var o=s.indexOf("--")===0,a=rb$1(s,e[s],o);s==="float"&&(s="cssFloat"),o?i.setProperty(s,a):i[s]=a}}var tb$1=A$1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub$1(i,e){if(e){if(tb$1[i]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(p$2(137,i));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(p$2(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(p$2(61))}if(e.style!=null&&typeof e.style!="object")throw Error(p$2(62))}}function vb$1(i,e){if(i.indexOf("-")===-1)return typeof e.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb$1=null;function xb(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var yb$1=null,zb$1=null,Ab$1=null;function Bb$1(i){if(i=Cb$1(i)){if(typeof yb$1!="function")throw Error(p$2(280));var e=i.stateNode;e&&(e=Db$1(e),yb$1(i.stateNode,i.type,e))}}function Eb$1(i){zb$1?Ab$1?Ab$1.push(i):Ab$1=[i]:zb$1=i}function Fb$1(){if(zb$1){var i=zb$1,e=Ab$1;if(Ab$1=zb$1=null,Bb$1(i),e)for(i=0;i<e.length;i++)Bb$1(e[i])}}function Gb$1(i,e){return i(e)}function Hb$1(){}var Ib$1=!1;function Jb$1(i,e,s){if(Ib$1)return i(e,s);Ib$1=!0;try{return Gb$1(i,e,s)}finally{Ib$1=!1,(zb$1!==null||Ab$1!==null)&&(Hb$1(),Fb$1())}}function Kb$1(i,e){var s=i.stateNode;if(s===null)return null;var o=Db$1(s);if(o===null)return null;s=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(i=i.type,o=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!o;break e;default:i=!1}if(i)return null;if(s&&typeof s!="function")throw Error(p$2(231,e,typeof s));return s}var Lb$1=!1;if(ia$2)try{var Mb$1={};Object.defineProperty(Mb$1,"passive",{get:function(){Lb$1=!0}}),window.addEventListener("test",Mb$1,Mb$1),window.removeEventListener("test",Mb$1,Mb$1)}catch{Lb$1=!1}function Nb$1(i,e,s,o,a,c,d,h,g){var _=Array.prototype.slice.call(arguments,3);try{e.apply(s,_)}catch(b){this.onError(b)}}var Ob$1=!1,Pb$1=null,Qb$1=!1,Rb$1=null,Sb$1={onError:function(i){Ob$1=!0,Pb$1=i}};function Tb$1(i,e,s,o,a,c,d,h,g){Ob$1=!1,Pb$1=null,Nb$1.apply(Sb$1,arguments)}function Ub$1(i,e,s,o,a,c,d,h,g){if(Tb$1.apply(this,arguments),Ob$1){if(Ob$1){var _=Pb$1;Ob$1=!1,Pb$1=null}else throw Error(p$2(198));Qb$1||(Qb$1=!0,Rb$1=_)}}function Vb$1(i){var e=i,s=i;if(i.alternate)for(;e.return;)e=e.return;else{i=e;do e=i,(e.flags&4098)!==0&&(s=e.return),i=e.return;while(i)}return e.tag===3?s:null}function Wb$1(i){if(i.tag===13){var e=i.memoizedState;if(e===null&&(i=i.alternate,i!==null&&(e=i.memoizedState)),e!==null)return e.dehydrated}return null}function Xb$1(i){if(Vb$1(i)!==i)throw Error(p$2(188))}function Yb$1(i){var e=i.alternate;if(!e){if(e=Vb$1(i),e===null)throw Error(p$2(188));return e!==i?null:i}for(var s=i,o=e;;){var a=s.return;if(a===null)break;var c=a.alternate;if(c===null){if(o=a.return,o!==null){s=o;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===s)return Xb$1(a),i;if(c===o)return Xb$1(a),e;c=c.sibling}throw Error(p$2(188))}if(s.return!==o.return)s=a,o=c;else{for(var d=!1,h=a.child;h;){if(h===s){d=!0,s=a,o=c;break}if(h===o){d=!0,o=a,s=c;break}h=h.sibling}if(!d){for(h=c.child;h;){if(h===s){d=!0,s=c,o=a;break}if(h===o){d=!0,o=c,s=a;break}h=h.sibling}if(!d)throw Error(p$2(189))}}if(s.alternate!==o)throw Error(p$2(190))}if(s.tag!==3)throw Error(p$2(188));return s.stateNode.current===s?i:e}function Zb$1(i){return i=Yb$1(i),i!==null?$b$1(i):null}function $b$1(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var e=$b$1(i);if(e!==null)return e;i=i.sibling}return null}var ac$2=ca.unstable_scheduleCallback,bc$2=ca.unstable_cancelCallback,cc$2=ca.unstable_shouldYield,dc$2=ca.unstable_requestPaint,B$2=ca.unstable_now,ec$1=ca.unstable_getCurrentPriorityLevel,fc$2=ca.unstable_ImmediatePriority,gc$2=ca.unstable_UserBlockingPriority,hc$2=ca.unstable_NormalPriority,ic$2=ca.unstable_LowPriority,jc$2=ca.unstable_IdlePriority,kc$1=null,lc$2=null;function mc$2(i){if(lc$2&&typeof lc$2.onCommitFiberRoot=="function")try{lc$2.onCommitFiberRoot(kc$1,i,void 0,(i.current.flags&128)===128)}catch{}}var oc$2=Math.clz32?Math.clz32:nc$1,pc$2=Math.log,qc$1=Math.LN2;function nc$1(i){return i>>>=0,i===0?32:31-(pc$2(i)/qc$1|0)|0}var rc$2=64,sc$2=4194304;function tc$1(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function uc$2(i,e){var s=i.pendingLanes;if(s===0)return 0;var o=0,a=i.suspendedLanes,c=i.pingedLanes,d=s&268435455;if(d!==0){var h=d&~a;h!==0?o=tc$1(h):(c&=d,c!==0&&(o=tc$1(c)))}else d=s&~a,d!==0?o=tc$1(d):c!==0&&(o=tc$1(c));if(o===0)return 0;if(e!==0&&e!==o&&(e&a)===0&&(a=o&-o,c=e&-e,a>=c||a===16&&(c&4194240)!==0))return e;if((o&4)!==0&&(o|=s&16),e=i.entangledLanes,e!==0)for(i=i.entanglements,e&=o;0<e;)s=31-oc$2(e),a=1<<s,o|=i[s],e&=~a;return o}function vc$2(i,e){switch(i){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc$2(i,e){for(var s=i.suspendedLanes,o=i.pingedLanes,a=i.expirationTimes,c=i.pendingLanes;0<c;){var d=31-oc$2(c),h=1<<d,g=a[d];g===-1?((h&s)===0||(h&o)!==0)&&(a[d]=vc$2(h,e)):g<=e&&(i.expiredLanes|=h),c&=~h}}function xc$1(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function yc$1(){var i=rc$2;return rc$2<<=1,(rc$2&4194240)===0&&(rc$2=64),i}function zc$1(i){for(var e=[],s=0;31>s;s++)e.push(i);return e}function Ac$2(i,e,s){i.pendingLanes|=e,e!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,e=31-oc$2(e),i[e]=s}function Bc$2(i,e){var s=i.pendingLanes&~e;i.pendingLanes=e,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=e,i.mutableReadLanes&=e,i.entangledLanes&=e,e=i.entanglements;var o=i.eventTimes;for(i=i.expirationTimes;0<s;){var a=31-oc$2(s),c=1<<a;e[a]=0,o[a]=-1,i[a]=-1,s&=~c}}function Cc$1(i,e){var s=i.entangledLanes|=e;for(i=i.entanglements;s;){var o=31-oc$2(s),a=1<<o;a&e|i[o]&e&&(i[o]|=e),s&=~a}}var C$2=0;function Dc$1(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ec$2,Fc$1,Gc$2,Hc$1,Ic$2,Jc$2=!1,Kc$1=[],Lc$1=null,Mc$1=null,Nc$1=null,Oc$1=new Map,Pc$2=new Map,Qc$1=[],Rc$2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc$1(i,e){switch(i){case"focusin":case"focusout":Lc$1=null;break;case"dragenter":case"dragleave":Mc$1=null;break;case"mouseover":case"mouseout":Nc$1=null;break;case"pointerover":case"pointerout":Oc$1.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc$2.delete(e.pointerId)}}function Tc$2(i,e,s,o,a,c){return i===null||i.nativeEvent!==c?(i={blockedOn:e,domEventName:s,eventSystemFlags:o,nativeEvent:c,targetContainers:[a]},e!==null&&(e=Cb$1(e),e!==null&&Fc$1(e)),i):(i.eventSystemFlags|=o,e=i.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),i)}function Uc$2(i,e,s,o,a){switch(e){case"focusin":return Lc$1=Tc$2(Lc$1,i,e,s,o,a),!0;case"dragenter":return Mc$1=Tc$2(Mc$1,i,e,s,o,a),!0;case"mouseover":return Nc$1=Tc$2(Nc$1,i,e,s,o,a),!0;case"pointerover":var c=a.pointerId;return Oc$1.set(c,Tc$2(Oc$1.get(c)||null,i,e,s,o,a)),!0;case"gotpointercapture":return c=a.pointerId,Pc$2.set(c,Tc$2(Pc$2.get(c)||null,i,e,s,o,a)),!0}return!1}function Vc$2(i){var e=Wc$1(i.target);if(e!==null){var s=Vb$1(e);if(s!==null){if(e=s.tag,e===13){if(e=Wb$1(s),e!==null){i.blockedOn=e,Ic$2(i.priority,function(){Gc$2(s)});return}}else if(e===3&&s.stateNode.current.memoizedState.isDehydrated){i.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Xc$2(i){if(i.blockedOn!==null)return!1;for(var e=i.targetContainers;0<e.length;){var s=Yc$2(i.domEventName,i.eventSystemFlags,e[0],i.nativeEvent);if(s===null){s=i.nativeEvent;var o=new s.constructor(s.type,s);wb$1=o,s.target.dispatchEvent(o),wb$1=null}else return e=Cb$1(s),e!==null&&Fc$1(e),i.blockedOn=s,!1;e.shift()}return!0}function Zc$2(i,e,s){Xc$2(i)&&s.delete(e)}function $c$2(){Jc$2=!1,Lc$1!==null&&Xc$2(Lc$1)&&(Lc$1=null),Mc$1!==null&&Xc$2(Mc$1)&&(Mc$1=null),Nc$1!==null&&Xc$2(Nc$1)&&(Nc$1=null),Oc$1.forEach(Zc$2),Pc$2.forEach(Zc$2)}function ad$1(i,e){i.blockedOn===e&&(i.blockedOn=null,Jc$2||(Jc$2=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c$2)))}function bd$1(i){function e(a){return ad$1(a,i)}if(0<Kc$1.length){ad$1(Kc$1[0],i);for(var s=1;s<Kc$1.length;s++){var o=Kc$1[s];o.blockedOn===i&&(o.blockedOn=null)}}for(Lc$1!==null&&ad$1(Lc$1,i),Mc$1!==null&&ad$1(Mc$1,i),Nc$1!==null&&ad$1(Nc$1,i),Oc$1.forEach(e),Pc$2.forEach(e),s=0;s<Qc$1.length;s++)o=Qc$1[s],o.blockedOn===i&&(o.blockedOn=null);for(;0<Qc$1.length&&(s=Qc$1[0],s.blockedOn===null);)Vc$2(s),s.blockedOn===null&&Qc$1.shift()}var cd$1=ua$1.ReactCurrentBatchConfig,dd$1=!0;function ed$1(i,e,s,o){var a=C$2,c=cd$1.transition;cd$1.transition=null;try{C$2=1,fd$1(i,e,s,o)}finally{C$2=a,cd$1.transition=c}}function gd$1(i,e,s,o){var a=C$2,c=cd$1.transition;cd$1.transition=null;try{C$2=4,fd$1(i,e,s,o)}finally{C$2=a,cd$1.transition=c}}function fd$1(i,e,s,o){if(dd$1){var a=Yc$2(i,e,s,o);if(a===null)hd$1(i,e,o,id$1,s),Sc$1(i,o);else if(Uc$2(a,i,e,s,o))o.stopPropagation();else if(Sc$1(i,o),e&4&&-1<Rc$2.indexOf(i)){for(;a!==null;){var c=Cb$1(a);if(c!==null&&Ec$2(c),c=Yc$2(i,e,s,o),c===null&&hd$1(i,e,o,id$1,s),c===a)break;a=c}a!==null&&o.stopPropagation()}else hd$1(i,e,o,null,s)}}var id$1=null;function Yc$2(i,e,s,o){if(id$1=null,i=xb(o),i=Wc$1(i),i!==null)if(e=Vb$1(i),e===null)i=null;else if(s=e.tag,s===13){if(i=Wb$1(e),i!==null)return i;i=null}else if(s===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;i=null}else e!==i&&(i=null);return id$1=i,null}function jd$1(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec$1()){case fc$2:return 1;case gc$2:return 4;case hc$2:case ic$2:return 16;case jc$2:return 536870912;default:return 16}default:return 16}}var kd$1=null,ld$1=null,md$1=null;function nd$1(){if(md$1)return md$1;var i,e=ld$1,s=e.length,o,a="value"in kd$1?kd$1.value:kd$1.textContent,c=a.length;for(i=0;i<s&&e[i]===a[i];i++);var d=s-i;for(o=1;o<=d&&e[s-o]===a[c-o];o++);return md$1=a.slice(i,1<o?1-o:void 0)}function od$1(i){var e=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&e===13&&(i=13)):i=e,i===10&&(i=13),32<=i||i===13?i:0}function pd$1(){return!0}function qd$1(){return!1}function rd$1(i){function e(s,o,a,c,d){this._reactName=s,this._targetInst=a,this.type=o,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var h in i)i.hasOwnProperty(h)&&(s=i[h],this[h]=s?s(c):c[h]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?pd$1:qd$1,this.isPropagationStopped=qd$1,this}return A$1(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=pd$1)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=pd$1)},persist:function(){},isPersistent:pd$1}),e}var sd$1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td$1=rd$1(sd$1),ud$1=A$1({},sd$1,{view:0,detail:0}),vd$1=rd$1(ud$1),wd$1,xd$1,yd$1,Ad$1=A$1({},ud$1,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd$1,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==yd$1&&(yd$1&&i.type==="mousemove"?(wd$1=i.screenX-yd$1.screenX,xd$1=i.screenY-yd$1.screenY):xd$1=wd$1=0,yd$1=i),wd$1)},movementY:function(i){return"movementY"in i?i.movementY:xd$1}}),Bd$1=rd$1(Ad$1),Cd$1=A$1({},Ad$1,{dataTransfer:0}),Dd$1=rd$1(Cd$1),Ed$1=A$1({},ud$1,{relatedTarget:0}),Fd$1=rd$1(Ed$1),Gd$1=A$1({},sd$1,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd$1=rd$1(Gd$1),Id$1=A$1({},sd$1,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Jd$1=rd$1(Id$1),Kd$1=A$1({},sd$1,{data:0}),Ld$1=rd$1(Kd$1),Md$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd$1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od$1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd$1(i){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(i):(i=Od$1[i])?!!e[i]:!1}function zd$1(){return Pd$1}var Qd$1=A$1({},ud$1,{key:function(i){if(i.key){var e=Md$1[i.key]||i.key;if(e!=="Unidentified")return e}return i.type==="keypress"?(i=od$1(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Nd$1[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd$1,charCode:function(i){return i.type==="keypress"?od$1(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?od$1(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Rd$1=rd$1(Qd$1),Sd$1=A$1({},Ad$1,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td$1=rd$1(Sd$1),Ud$1=A$1({},ud$1,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd$1}),Vd$1=rd$1(Ud$1),Wd=A$1({},sd$1,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd$1(Wd),Yd=A$1({},Ad$1,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd$1(Yd),$d=[9,13,27,32],ae$1=ia$2&&"CompositionEvent"in window,be$1=null;ia$2&&"documentMode"in document&&(be$1=document.documentMode);var ce$1=ia$2&&"TextEvent"in window&&!be$1,de$1=ia$2&&(!ae$1||be$1&&8<be$1&&11>=be$1),ee$1=String.fromCharCode(32),fe=!1;function ge$1(i,e){switch(i){case"keyup":return $d.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he$1(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ie$1=!1;function je$1(i,e){switch(i){case"compositionend":return he$1(e);case"keypress":return e.which!==32?null:(fe=!0,ee$1);case"textInput":return i=e.data,i===ee$1&&fe?null:i;default:return null}}function ke$1(i,e){if(ie$1)return i==="compositionend"||!ae$1&&ge$1(i,e)?(i=nd$1(),md$1=ld$1=kd$1=null,ie$1=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return de$1&&e.locale!=="ko"?null:e.data;default:return null}}var le$1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me$1(i){var e=i&&i.nodeName&&i.nodeName.toLowerCase();return e==="input"?!!le$1[i.type]:e==="textarea"}function ne$1(i,e,s,o){Eb$1(o),e=oe$1(e,"onChange"),0<e.length&&(s=new td$1("onChange","change",null,s,o),i.push({event:s,listeners:e}))}var pe$1=null,qe=null;function re$1(i){se$1(i,0)}function te$1(i){var e=ue$1(i);if(Wa$1(e))return i}function ve$1(i,e){if(i==="change")return e}var we$1=!1;if(ia$2){var xe$1;if(ia$2){var ye$1="oninput"in document;if(!ye$1){var ze$1=document.createElement("div");ze$1.setAttribute("oninput","return;"),ye$1=typeof ze$1.oninput=="function"}xe$1=ye$1}else xe$1=!1;we$1=xe$1&&(!document.documentMode||9<document.documentMode)}function Ae$1(){pe$1&&(pe$1.detachEvent("onpropertychange",Be$1),qe=pe$1=null)}function Be$1(i){if(i.propertyName==="value"&&te$1(qe)){var e=[];ne$1(e,qe,i,xb(i)),Jb$1(re$1,e)}}function Ce(i,e,s){i==="focusin"?(Ae$1(),pe$1=e,qe=s,pe$1.attachEvent("onpropertychange",Be$1)):i==="focusout"&&Ae$1()}function De(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return te$1(qe)}function Ee$1(i,e){if(i==="click")return te$1(e)}function Fe$1(i,e){if(i==="input"||i==="change")return te$1(e)}function Ge$1(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var He$1=typeof Object.is=="function"?Object.is:Ge$1;function Ie(i,e){if(He$1(i,e))return!0;if(typeof i!="object"||i===null||typeof e!="object"||e===null)return!1;var s=Object.keys(i),o=Object.keys(e);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var a=s[o];if(!ja$1.call(e,a)||!He$1(i[a],e[a]))return!1}return!0}function Je$1(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ke(i,e){var s=Je$1(i);i=0;for(var o;s;){if(s.nodeType===3){if(o=i+s.textContent.length,i<=e&&o>=e)return{node:s,offset:e-i};i=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Je$1(s)}}function Le$1(i,e){return i&&e?i===e?!0:i&&i.nodeType===3?!1:e&&e.nodeType===3?Le$1(i,e.parentNode):"contains"in i?i.contains(e):i.compareDocumentPosition?!!(i.compareDocumentPosition(e)&16):!1:!1}function Me$1(){for(var i=window,e=Xa$1();e instanceof i.HTMLIFrameElement;){try{var s=typeof e.contentWindow.location.href=="string"}catch{s=!1}if(s)i=e.contentWindow;else break;e=Xa$1(i.document)}return e}function Ne$1(i){var e=i&&i.nodeName&&i.nodeName.toLowerCase();return e&&(e==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||e==="textarea"||i.contentEditable==="true")}function Oe$1(i){var e=Me$1(),s=i.focusedElem,o=i.selectionRange;if(e!==s&&s&&s.ownerDocument&&Le$1(s.ownerDocument.documentElement,s)){if(o!==null&&Ne$1(s)){if(e=o.start,i=o.end,i===void 0&&(i=e),"selectionStart"in s)s.selectionStart=e,s.selectionEnd=Math.min(i,s.value.length);else if(i=(e=s.ownerDocument||document)&&e.defaultView||window,i.getSelection){i=i.getSelection();var a=s.textContent.length,c=Math.min(o.start,a);o=o.end===void 0?c:Math.min(o.end,a),!i.extend&&c>o&&(a=o,o=c,c=a),a=Ke(s,c);var d=Ke(s,o);a&&d&&(i.rangeCount!==1||i.anchorNode!==a.node||i.anchorOffset!==a.offset||i.focusNode!==d.node||i.focusOffset!==d.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),i.removeAllRanges(),c>o?(i.addRange(e),i.extend(d.node,d.offset)):(e.setEnd(d.node,d.offset),i.addRange(e)))}}for(e=[],i=s;i=i.parentNode;)i.nodeType===1&&e.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<e.length;s++)i=e[s],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Pe$1=ia$2&&"documentMode"in document&&11>=document.documentMode,Qe$1=null,Re$1=null,Se=null,Te$1=!1;function Ue(i,e,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Te$1||Qe$1==null||Qe$1!==Xa$1(o)||(o=Qe$1,"selectionStart"in o&&Ne$1(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Se&&Ie(Se,o)||(Se=o,o=oe$1(Re$1,"onSelect"),0<o.length&&(e=new td$1("onSelect","select",null,e,s),i.push({event:e,listeners:o}),e.target=Qe$1)))}function Ve(i,e){var s={};return s[i.toLowerCase()]=e.toLowerCase(),s["Webkit"+i]="webkit"+e,s["Moz"+i]="moz"+e,s}var We$1={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe$1={},Ye$1={};ia$2&&(Ye$1=document.createElement("div").style,"AnimationEvent"in window||(delete We$1.animationend.animation,delete We$1.animationiteration.animation,delete We$1.animationstart.animation),"TransitionEvent"in window||delete We$1.transitionend.transition);function Ze$1(i){if(Xe$1[i])return Xe$1[i];if(!We$1[i])return i;var e=We$1[i],s;for(s in e)if(e.hasOwnProperty(s)&&s in Ye$1)return Xe$1[i]=e[s];return i}var $e$1=Ze$1("animationend"),af=Ze$1("animationiteration"),bf=Ze$1("animationstart"),cf=Ze$1("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(i,e){df.set(i,e),fa$1(e,[i])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e$1,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha$1("onMouseEnter",["mouseout","mouseover"]);ha$1("onMouseLeave",["mouseout","mouseover"]);ha$1("onPointerEnter",["pointerout","pointerover"]);ha$1("onPointerLeave",["pointerout","pointerover"]);fa$1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa$1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa$1("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa$1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa$1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa$1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(i,e,s){var o=i.type||"unknown-event";i.currentTarget=s,Ub$1(o,e,void 0,i),i.currentTarget=null}function se$1(i,e){e=(e&4)!==0;for(var s=0;s<i.length;s++){var o=i[s],a=o.event;o=o.listeners;e:{var c=void 0;if(e)for(var d=o.length-1;0<=d;d--){var h=o[d],g=h.instance,_=h.currentTarget;if(h=h.listener,g!==c&&a.isPropagationStopped())break e;nf(a,h,_),c=g}else for(d=0;d<o.length;d++){if(h=o[d],g=h.instance,_=h.currentTarget,h=h.listener,g!==c&&a.isPropagationStopped())break e;nf(a,h,_),c=g}}}if(Qb$1)throw i=Rb$1,Qb$1=!1,Rb$1=null,i}function D$2(i,e){var s=e[of];s===void 0&&(s=e[of]=new Set);var o=i+"__bubble";s.has(o)||(pf(e,i,2,!1),s.add(o))}function qf(i,e,s){var o=0;e&&(o|=4),pf(s,i,o,e)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(i){if(!i[rf]){i[rf]=!0,da$1.forEach(function(s){s!=="selectionchange"&&(mf.has(s)||qf(s,!1,i),qf(s,!0,i))});var e=i.nodeType===9?i:i.ownerDocument;e===null||e[rf]||(e[rf]=!0,qf("selectionchange",!1,e))}}function pf(i,e,s,o){switch(jd$1(e)){case 1:var a=ed$1;break;case 4:a=gd$1;break;default:a=fd$1}s=a.bind(null,e,s,i),a=void 0,!Lb$1||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),o?a!==void 0?i.addEventListener(e,s,{capture:!0,passive:a}):i.addEventListener(e,s,!0):a!==void 0?i.addEventListener(e,s,{passive:a}):i.addEventListener(e,s,!1)}function hd$1(i,e,s,o,a){var c=o;if((e&1)===0&&(e&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var h=o.stateNode.containerInfo;if(h===a||h.nodeType===8&&h.parentNode===a)break;if(d===4)for(d=o.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===a||g.nodeType===8&&g.parentNode===a))return;d=d.return}for(;h!==null;){if(d=Wc$1(h),d===null)return;if(g=d.tag,g===5||g===6){o=c=d;continue e}h=h.parentNode}}o=o.return}Jb$1(function(){var _=c,b=xb(s),et=[];e:{var ot=df.get(i);if(ot!==void 0){var gt=td$1,_t=i;switch(i){case"keypress":if(od$1(s)===0)break e;case"keydown":case"keyup":gt=Rd$1;break;case"focusin":_t="focus",gt=Fd$1;break;case"focusout":_t="blur",gt=Fd$1;break;case"beforeblur":case"afterblur":gt=Fd$1;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":gt=Bd$1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":gt=Dd$1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":gt=Vd$1;break;case $e$1:case af:case bf:gt=Hd$1;break;case cf:gt=Xd;break;case"scroll":gt=vd$1;break;case"wheel":gt=Zd;break;case"copy":case"cut":case"paste":gt=Jd$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":gt=Td$1}var $t=(e&4)!==0,St=!$t&&i==="scroll",mt=$t?ot!==null?ot+"Capture":null:ot;$t=[];for(var pt=_,yt;pt!==null;){yt=pt;var wt=yt.stateNode;if(yt.tag===5&&wt!==null&&(yt=wt,mt!==null&&(wt=Kb$1(pt,mt),wt!=null&&$t.push(tf(pt,wt,yt)))),St)break;pt=pt.return}0<$t.length&&(ot=new gt(ot,_t,null,s,b),et.push({event:ot,listeners:$t}))}}if((e&7)===0){e:{if(ot=i==="mouseover"||i==="pointerover",gt=i==="mouseout"||i==="pointerout",ot&&s!==wb$1&&(_t=s.relatedTarget||s.fromElement)&&(Wc$1(_t)||_t[uf]))break e;if((gt||ot)&&(ot=b.window===b?b:(ot=b.ownerDocument)?ot.defaultView||ot.parentWindow:window,gt?(_t=s.relatedTarget||s.toElement,gt=_,_t=_t?Wc$1(_t):null,_t!==null&&(St=Vb$1(_t),_t!==St||_t.tag!==5&&_t.tag!==6)&&(_t=null)):(gt=null,_t=_),gt!==_t)){if($t=Bd$1,wt="onMouseLeave",mt="onMouseEnter",pt="mouse",(i==="pointerout"||i==="pointerover")&&($t=Td$1,wt="onPointerLeave",mt="onPointerEnter",pt="pointer"),St=gt==null?ot:ue$1(gt),yt=_t==null?ot:ue$1(_t),ot=new $t(wt,pt+"leave",gt,s,b),ot.target=St,ot.relatedTarget=yt,wt=null,Wc$1(b)===_&&($t=new $t(mt,pt+"enter",_t,s,b),$t.target=yt,$t.relatedTarget=St,wt=$t),St=wt,gt&&_t)t:{for($t=gt,mt=_t,pt=0,yt=$t;yt;yt=vf(yt))pt++;for(yt=0,wt=mt;wt;wt=vf(wt))yt++;for(;0<pt-yt;)$t=vf($t),pt--;for(;0<yt-pt;)mt=vf(mt),yt--;for(;pt--;){if($t===mt||mt!==null&&$t===mt.alternate)break t;$t=vf($t),mt=vf(mt)}$t=null}else $t=null;gt!==null&&wf(et,ot,gt,$t,!1),_t!==null&&St!==null&&wf(et,St,_t,$t,!0)}}e:{if(ot=_?ue$1(_):window,gt=ot.nodeName&&ot.nodeName.toLowerCase(),gt==="select"||gt==="input"&&ot.type==="file")var It=ve$1;else if(me$1(ot))if(we$1)It=Fe$1;else{It=De;var Ct=Ce}else(gt=ot.nodeName)&&gt.toLowerCase()==="input"&&(ot.type==="checkbox"||ot.type==="radio")&&(It=Ee$1);if(It&&(It=It(i,_))){ne$1(et,It,s,b);break e}Ct&&Ct(i,ot,_),i==="focusout"&&(Ct=ot._wrapperState)&&Ct.controlled&&ot.type==="number"&&cb$1(ot,"number",ot.value)}switch(Ct=_?ue$1(_):window,i){case"focusin":(me$1(Ct)||Ct.contentEditable==="true")&&(Qe$1=Ct,Re$1=_,Se=null);break;case"focusout":Se=Re$1=Qe$1=null;break;case"mousedown":Te$1=!0;break;case"contextmenu":case"mouseup":case"dragend":Te$1=!1,Ue(et,s,b);break;case"selectionchange":if(Pe$1)break;case"keydown":case"keyup":Ue(et,s,b)}var kt;if(ae$1)e:{switch(i){case"compositionstart":var Ot="onCompositionStart";break e;case"compositionend":Ot="onCompositionEnd";break e;case"compositionupdate":Ot="onCompositionUpdate";break e}Ot=void 0}else ie$1?ge$1(i,s)&&(Ot="onCompositionEnd"):i==="keydown"&&s.keyCode===229&&(Ot="onCompositionStart");Ot&&(de$1&&s.locale!=="ko"&&(ie$1||Ot!=="onCompositionStart"?Ot==="onCompositionEnd"&&ie$1&&(kt=nd$1()):(kd$1=b,ld$1="value"in kd$1?kd$1.value:kd$1.textContent,ie$1=!0)),Ct=oe$1(_,Ot),0<Ct.length&&(Ot=new Ld$1(Ot,i,null,s,b),et.push({event:Ot,listeners:Ct}),kt?Ot.data=kt:(kt=he$1(s),kt!==null&&(Ot.data=kt)))),(kt=ce$1?je$1(i,s):ke$1(i,s))&&(_=oe$1(_,"onBeforeInput"),0<_.length&&(b=new Ld$1("onBeforeInput","beforeinput",null,s,b),et.push({event:b,listeners:_}),b.data=kt))}se$1(et,e)})}function tf(i,e,s){return{instance:i,listener:e,currentTarget:s}}function oe$1(i,e){for(var s=e+"Capture",o=[];i!==null;){var a=i,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=Kb$1(i,s),c!=null&&o.unshift(tf(i,c,a)),c=Kb$1(i,e),c!=null&&o.push(tf(i,c,a))),i=i.return}return o}function vf(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function wf(i,e,s,o,a){for(var c=e._reactName,d=[];s!==null&&s!==o;){var h=s,g=h.alternate,_=h.stateNode;if(g!==null&&g===o)break;h.tag===5&&_!==null&&(h=_,a?(g=Kb$1(s,c),g!=null&&d.unshift(tf(s,g,h))):a||(g=Kb$1(s,c),g!=null&&d.push(tf(s,g,h)))),s=s.return}d.length!==0&&i.push({event:e,listeners:d})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(i){return(typeof i=="string"?i:""+i).replace(xf,`
`).replace(yf,"")}function Af(i,e,s){if(e=zf(e),zf(i)!==e&&s)throw Error(p$2(425))}function Bf(){}var Cf=null,Df=null;function Ef(i,e){return i==="textarea"||i==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(i){return Hf.resolve(null).then(i).catch(If)}:Ff;function If(i){setTimeout(function(){throw i})}function Kf(i,e){var s=e,o=0;do{var a=s.nextSibling;if(i.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(o===0){i.removeChild(a),bd$1(e);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=a}while(s);bd$1(e)}function Lf(i){for(;i!=null;i=i.nextSibling){var e=i.nodeType;if(e===1||e===3)break;if(e===8){if(e=i.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return i}function Mf(i){i=i.previousSibling;for(var e=0;i;){if(i.nodeType===8){var s=i.data;if(s==="$"||s==="$!"||s==="$?"){if(e===0)return i;e--}else s==="/$"&&e++}i=i.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc$1(i){var e=i[Of];if(e)return e;for(var s=i.parentNode;s;){if(e=s[uf]||s[Of]){if(s=e.alternate,e.child!==null||s!==null&&s.child!==null)for(i=Mf(i);i!==null;){if(s=i[Of])return s;i=Mf(i)}return e}i=s,s=i.parentNode}return null}function Cb$1(i){return i=i[Of]||i[uf],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ue$1(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(p$2(33))}function Db$1(i){return i[Pf]||null}var Sf=[],Tf=-1;function Uf(i){return{current:i}}function E$1(i){0>Tf||(i.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G$1(i,e){Tf++,Sf[Tf]=i.current,i.current=e}var Vf={},H$1=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(i,e){var s=i.type.contextTypes;if(!s)return Vf;var o=i.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in s)a[c]=e[c];return o&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=e,i.__reactInternalMemoizedMaskedChildContext=a),a}function Zf(i){return i=i.childContextTypes,i!=null}function $f(){E$1(Wf),E$1(H$1)}function ag(i,e,s){if(H$1.current!==Vf)throw Error(p$2(168));G$1(H$1,e),G$1(Wf,s)}function bg(i,e,s){var o=i.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return s;o=o.getChildContext();for(var a in o)if(!(a in e))throw Error(p$2(108,Ra$2(i)||"Unknown",a));return A$1({},s,o)}function cg(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Vf,Xf=H$1.current,G$1(H$1,i),G$1(Wf,Wf.current),!0}function dg(i,e,s){var o=i.stateNode;if(!o)throw Error(p$2(169));s?(i=bg(i,e,Xf),o.__reactInternalMemoizedMergedChildContext=i,E$1(Wf),E$1(H$1),G$1(H$1,i)):E$1(Wf),G$1(Wf,s)}var eg=null,fg=!1,gg=!1;function hg(i){eg===null?eg=[i]:eg.push(i)}function ig(i){fg=!0,hg(i)}function jg(){if(!gg&&eg!==null){gg=!0;var i=0,e=C$2;try{var s=eg;for(C$2=1;i<s.length;i++){var o=s[i];do o=o(!0);while(o!==null)}eg=null,fg=!1}catch(a){throw eg!==null&&(eg=eg.slice(i+1)),ac$2(fc$2,jg),a}finally{C$2=e,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(i,e){kg[lg++]=ng,kg[lg++]=mg,mg=i,ng=e}function ug(i,e,s){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=i;var o=rg;i=sg;var a=32-oc$2(o)-1;o&=~(1<<a),s+=1;var c=32-oc$2(e)+a;if(30<c){var d=a-a%5;c=(o&(1<<d)-1).toString(32),o>>=d,a-=d,rg=1<<32-oc$2(e)+a|s<<a|o,sg=c+i}else rg=1<<c|s<<a|o,sg=i}function vg(i){i.return!==null&&(tg(i,1),ug(i,1,0))}function wg(i){for(;i===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;i===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I$1=!1,zg=null;function Ag(i,e){var s=Bg(5,null,null,0);s.elementType="DELETED",s.stateNode=e,s.return=i,e=i.deletions,e===null?(i.deletions=[s],i.flags|=16):e.push(s)}function Cg(i,e){switch(i.tag){case 5:var s=i.type;return e=e.nodeType!==1||s.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(i.stateNode=e,xg=i,yg=Lf(e.firstChild),!0):!1;case 6:return e=i.pendingProps===""||e.nodeType!==3?null:e,e!==null?(i.stateNode=e,xg=i,yg=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(s=qg!==null?{id:rg,overflow:sg}:null,i.memoizedState={dehydrated:e,treeContext:s,retryLane:1073741824},s=Bg(18,null,null,0),s.stateNode=e,s.return=i,i.child=s,xg=i,yg=null,!0):!1;default:return!1}}function Dg(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Eg(i){if(I$1){var e=yg;if(e){var s=e;if(!Cg(i,e)){if(Dg(i))throw Error(p$2(418));e=Lf(s.nextSibling);var o=xg;e&&Cg(i,e)?Ag(o,s):(i.flags=i.flags&-4097|2,I$1=!1,xg=i)}}else{if(Dg(i))throw Error(p$2(418));i.flags=i.flags&-4097|2,I$1=!1,xg=i}}}function Fg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;xg=i}function Gg(i){if(i!==xg)return!1;if(!I$1)return Fg(i),I$1=!0,!1;var e;if((e=i.tag!==3)&&!(e=i.tag!==5)&&(e=i.type,e=e!=="head"&&e!=="body"&&!Ef(i.type,i.memoizedProps)),e&&(e=yg)){if(Dg(i))throw Hg(),Error(p$2(418));for(;e;)Ag(i,e),e=Lf(e.nextSibling)}if(Fg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p$2(317));e:{for(i=i.nextSibling,e=0;i;){if(i.nodeType===8){var s=i.data;if(s==="/$"){if(e===0){yg=Lf(i.nextSibling);break e}e--}else s!=="$"&&s!=="$!"&&s!=="$?"||e++}i=i.nextSibling}yg=null}}else yg=xg?Lf(i.stateNode.nextSibling):null;return!0}function Hg(){for(var i=yg;i;)i=Lf(i.nextSibling)}function Ig(){yg=xg=null,I$1=!1}function Jg(i){zg===null?zg=[i]:zg.push(i)}var Kg=ua$1.ReactCurrentBatchConfig;function Lg(i,e){if(i&&i.defaultProps){e=A$1({},e),i=i.defaultProps;for(var s in i)e[s]===void 0&&(e[s]=i[s]);return e}return e}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(i){var e=Mg.current;E$1(Mg),i._currentValue=e}function Sg(i,e,s){for(;i!==null;){var o=i.alternate;if((i.childLanes&e)!==e?(i.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),i===s)break;i=i.return}}function Tg(i,e){Ng=i,Pg=Og=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&e)!==0&&(Ug=!0),i.firstContext=null)}function Vg(i){var e=i._currentValue;if(Pg!==i)if(i={context:i,memoizedValue:e,next:null},Og===null){if(Ng===null)throw Error(p$2(308));Og=i,Ng.dependencies={lanes:0,firstContext:i}}else Og=Og.next=i;return e}var Wg=null;function Xg(i){Wg===null?Wg=[i]:Wg.push(i)}function Yg(i,e,s,o){var a=e.interleaved;return a===null?(s.next=s,Xg(e)):(s.next=a.next,a.next=s),e.interleaved=s,Zg(i,o)}function Zg(i,e){i.lanes|=e;var s=i.alternate;for(s!==null&&(s.lanes|=e),s=i,i=i.return;i!==null;)i.childLanes|=e,s=i.alternate,s!==null&&(s.childLanes|=e),s=i,i=i.return;return s.tag===3?s.stateNode:null}var $g=!1;function ah$1(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh$1(i,e){i=i.updateQueue,e.updateQueue===i&&(e.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ch(i,e){return{eventTime:i,lane:e,tag:0,payload:null,callback:null,next:null}}function dh$1(i,e,s){var o=i.updateQueue;if(o===null)return null;if(o=o.shared,(K$2&2)!==0){var a=o.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),o.pending=e,Zg(i,s)}return a=o.interleaved,a===null?(e.next=e,Xg(o)):(e.next=a.next,a.next=e),o.interleaved=e,Zg(i,s)}function eh$1(i,e,s){if(e=e.updateQueue,e!==null&&(e=e.shared,(s&4194240)!==0)){var o=e.lanes;o&=i.pendingLanes,s|=o,e.lanes=s,Cc$1(i,s)}}function fh$1(i,e){var s=i.updateQueue,o=i.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var a=null,c=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};c===null?a=c=d:c=c.next=d,s=s.next}while(s!==null);c===null?a=c=e:c=c.next=e}else a=c=e;s={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:o.shared,effects:o.effects},i.updateQueue=s;return}i=s.lastBaseUpdate,i===null?s.firstBaseUpdate=e:i.next=e,s.lastBaseUpdate=e}function gh(i,e,s,o){var a=i.updateQueue;$g=!1;var c=a.firstBaseUpdate,d=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var g=h,_=g.next;g.next=null,d===null?c=_:d.next=_,d=g;var b=i.alternate;b!==null&&(b=b.updateQueue,h=b.lastBaseUpdate,h!==d&&(h===null?b.firstBaseUpdate=_:h.next=_,b.lastBaseUpdate=g))}if(c!==null){var et=a.baseState;d=0,b=_=g=null,h=c;do{var ot=h.lane,gt=h.eventTime;if((o&ot)===ot){b!==null&&(b=b.next={eventTime:gt,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var _t=i,$t=h;switch(ot=e,gt=s,$t.tag){case 1:if(_t=$t.payload,typeof _t=="function"){et=_t.call(gt,et,ot);break e}et=_t;break e;case 3:_t.flags=_t.flags&-65537|128;case 0:if(_t=$t.payload,ot=typeof _t=="function"?_t.call(gt,et,ot):_t,ot==null)break e;et=A$1({},et,ot);break e;case 2:$g=!0}}h.callback!==null&&h.lane!==0&&(i.flags|=64,ot=a.effects,ot===null?a.effects=[h]:ot.push(h))}else gt={eventTime:gt,lane:ot,tag:h.tag,payload:h.payload,callback:h.callback,next:null},b===null?(_=b=gt,g=et):b=b.next=gt,d|=ot;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;ot=h,h=ot.next,ot.next=null,a.lastBaseUpdate=ot,a.shared.pending=null}}while(1);if(b===null&&(g=et),a.baseState=g,a.firstBaseUpdate=_,a.lastBaseUpdate=b,e=a.shared.interleaved,e!==null){a=e;do d|=a.lane,a=a.next;while(a!==e)}else c===null&&(a.shared.lanes=0);hh$1|=d,i.lanes=d,i.memoizedState=et}}function ih$1(i,e,s){if(i=e.effects,e.effects=null,i!==null)for(e=0;e<i.length;e++){var o=i[e],a=o.callback;if(a!==null){if(o.callback=null,o=s,typeof a!="function")throw Error(p$2(191,a));a.call(o)}}}var jh=new aa$2.Component().refs;function kh$1(i,e,s,o){e=i.memoizedState,s=s(o,e),s=s==null?e:A$1({},e,s),i.memoizedState=s,i.lanes===0&&(i.updateQueue.baseState=s)}var nh={isMounted:function(i){return(i=i._reactInternals)?Vb$1(i)===i:!1},enqueueSetState:function(i,e,s){i=i._reactInternals;var o=L$2(),a=lh$1(i),c=ch(o,a);c.payload=e,s!=null&&(c.callback=s),e=dh$1(i,c,a),e!==null&&(mh(e,i,a,o),eh$1(e,i,a))},enqueueReplaceState:function(i,e,s){i=i._reactInternals;var o=L$2(),a=lh$1(i),c=ch(o,a);c.tag=1,c.payload=e,s!=null&&(c.callback=s),e=dh$1(i,c,a),e!==null&&(mh(e,i,a,o),eh$1(e,i,a))},enqueueForceUpdate:function(i,e){i=i._reactInternals;var s=L$2(),o=lh$1(i),a=ch(s,o);a.tag=2,e!=null&&(a.callback=e),e=dh$1(i,a,o),e!==null&&(mh(e,i,o,s),eh$1(e,i,o))}};function oh$1(i,e,s,o,a,c,d){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(o,c,d):e.prototype&&e.prototype.isPureReactComponent?!Ie(s,o)||!Ie(a,c):!0}function ph(i,e,s){var o=!1,a=Vf,c=e.contextType;return typeof c=="object"&&c!==null?c=Vg(c):(a=Zf(e)?Xf:H$1.current,o=e.contextTypes,c=(o=o!=null)?Yf(i,a):Vf),e=new e(s,c),i.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nh,i.stateNode=e,e._reactInternals=i,o&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=c),e}function qh(i,e,s,o){i=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(s,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(s,o),e.state!==i&&nh.enqueueReplaceState(e,e.state,null)}function rh$1(i,e,s,o){var a=i.stateNode;a.props=s,a.state=i.memoizedState,a.refs=jh,ah$1(i);var c=e.contextType;typeof c=="object"&&c!==null?a.context=Vg(c):(c=Zf(e)?Xf:H$1.current,a.context=Yf(i,c)),a.state=i.memoizedState,c=e.getDerivedStateFromProps,typeof c=="function"&&(kh$1(i,e,c,s),a.state=i.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&nh.enqueueReplaceState(a,a.state,null),gh(i,s,a,o),a.state=i.memoizedState),typeof a.componentDidMount=="function"&&(i.flags|=4194308)}function sh$1(i,e,s){if(i=s.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(p$2(309));var o=s.stateNode}if(!o)throw Error(p$2(147,i));var a=o,c=""+i;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===c?e.ref:(e=function(d){var h=a.refs;h===jh&&(h=a.refs={}),d===null?delete h[c]:h[c]=d},e._stringRef=c,e)}if(typeof i!="string")throw Error(p$2(284));if(!s._owner)throw Error(p$2(290,i))}return i}function th(i,e){throw i=Object.prototype.toString.call(e),Error(p$2(31,i==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":i))}function uh$1(i){var e=i._init;return e(i._payload)}function vh$1(i){function e(mt,pt){if(i){var yt=mt.deletions;yt===null?(mt.deletions=[pt],mt.flags|=16):yt.push(pt)}}function s(mt,pt){if(!i)return null;for(;pt!==null;)e(mt,pt),pt=pt.sibling;return null}function o(mt,pt){for(mt=new Map;pt!==null;)pt.key!==null?mt.set(pt.key,pt):mt.set(pt.index,pt),pt=pt.sibling;return mt}function a(mt,pt){return mt=wh(mt,pt),mt.index=0,mt.sibling=null,mt}function c(mt,pt,yt){return mt.index=yt,i?(yt=mt.alternate,yt!==null?(yt=yt.index,yt<pt?(mt.flags|=2,pt):yt):(mt.flags|=2,pt)):(mt.flags|=1048576,pt)}function d(mt){return i&&mt.alternate===null&&(mt.flags|=2),mt}function h(mt,pt,yt,wt){return pt===null||pt.tag!==6?(pt=xh$1(yt,mt.mode,wt),pt.return=mt,pt):(pt=a(pt,yt),pt.return=mt,pt)}function g(mt,pt,yt,wt){var It=yt.type;return It===ya$2?b(mt,pt,yt.props.children,wt,yt.key):pt!==null&&(pt.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===Ha$1&&uh$1(It)===pt.type)?(wt=a(pt,yt.props),wt.ref=sh$1(mt,pt,yt),wt.return=mt,wt):(wt=yh(yt.type,yt.key,yt.props,null,mt.mode,wt),wt.ref=sh$1(mt,pt,yt),wt.return=mt,wt)}function _(mt,pt,yt,wt){return pt===null||pt.tag!==4||pt.stateNode.containerInfo!==yt.containerInfo||pt.stateNode.implementation!==yt.implementation?(pt=zh(yt,mt.mode,wt),pt.return=mt,pt):(pt=a(pt,yt.children||[]),pt.return=mt,pt)}function b(mt,pt,yt,wt,It){return pt===null||pt.tag!==7?(pt=Ah$1(yt,mt.mode,wt,It),pt.return=mt,pt):(pt=a(pt,yt),pt.return=mt,pt)}function et(mt,pt,yt){if(typeof pt=="string"&&pt!==""||typeof pt=="number")return pt=xh$1(""+pt,mt.mode,yt),pt.return=mt,pt;if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case va$2:return yt=yh(pt.type,pt.key,pt.props,null,mt.mode,yt),yt.ref=sh$1(mt,null,pt),yt.return=mt,yt;case wa$1:return pt=zh(pt,mt.mode,yt),pt.return=mt,pt;case Ha$1:var wt=pt._init;return et(mt,wt(pt._payload),yt)}if(eb(pt)||Ka$2(pt))return pt=Ah$1(pt,mt.mode,yt,null),pt.return=mt,pt;th(mt,pt)}return null}function ot(mt,pt,yt,wt){var It=pt!==null?pt.key:null;if(typeof yt=="string"&&yt!==""||typeof yt=="number")return It!==null?null:h(mt,pt,""+yt,wt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case va$2:return yt.key===It?g(mt,pt,yt,wt):null;case wa$1:return yt.key===It?_(mt,pt,yt,wt):null;case Ha$1:return It=yt._init,ot(mt,pt,It(yt._payload),wt)}if(eb(yt)||Ka$2(yt))return It!==null?null:b(mt,pt,yt,wt,null);th(mt,yt)}return null}function gt(mt,pt,yt,wt,It){if(typeof wt=="string"&&wt!==""||typeof wt=="number")return mt=mt.get(yt)||null,h(pt,mt,""+wt,It);if(typeof wt=="object"&&wt!==null){switch(wt.$$typeof){case va$2:return mt=mt.get(wt.key===null?yt:wt.key)||null,g(pt,mt,wt,It);case wa$1:return mt=mt.get(wt.key===null?yt:wt.key)||null,_(pt,mt,wt,It);case Ha$1:var Ct=wt._init;return gt(mt,pt,yt,Ct(wt._payload),It)}if(eb(wt)||Ka$2(wt))return mt=mt.get(yt)||null,b(pt,mt,wt,It,null);th(pt,wt)}return null}function _t(mt,pt,yt,wt){for(var It=null,Ct=null,kt=pt,Ot=pt=0,Bt=null;kt!==null&&Ot<yt.length;Ot++){kt.index>Ot?(Bt=kt,kt=null):Bt=kt.sibling;var Mt=ot(mt,kt,yt[Ot],wt);if(Mt===null){kt===null&&(kt=Bt);break}i&&kt&&Mt.alternate===null&&e(mt,kt),pt=c(Mt,pt,Ot),Ct===null?It=Mt:Ct.sibling=Mt,Ct=Mt,kt=Bt}if(Ot===yt.length)return s(mt,kt),I$1&&tg(mt,Ot),It;if(kt===null){for(;Ot<yt.length;Ot++)kt=et(mt,yt[Ot],wt),kt!==null&&(pt=c(kt,pt,Ot),Ct===null?It=kt:Ct.sibling=kt,Ct=kt);return I$1&&tg(mt,Ot),It}for(kt=o(mt,kt);Ot<yt.length;Ot++)Bt=gt(kt,mt,Ot,yt[Ot],wt),Bt!==null&&(i&&Bt.alternate!==null&&kt.delete(Bt.key===null?Ot:Bt.key),pt=c(Bt,pt,Ot),Ct===null?It=Bt:Ct.sibling=Bt,Ct=Bt);return i&&kt.forEach(function(Fn){return e(mt,Fn)}),I$1&&tg(mt,Ot),It}function $t(mt,pt,yt,wt){var It=Ka$2(yt);if(typeof It!="function")throw Error(p$2(150));if(yt=It.call(yt),yt==null)throw Error(p$2(151));for(var Ct=It=null,kt=pt,Ot=pt=0,Bt=null,Mt=yt.next();kt!==null&&!Mt.done;Ot++,Mt=yt.next()){kt.index>Ot?(Bt=kt,kt=null):Bt=kt.sibling;var Fn=ot(mt,kt,Mt.value,wt);if(Fn===null){kt===null&&(kt=Bt);break}i&&kt&&Fn.alternate===null&&e(mt,kt),pt=c(Fn,pt,Ot),Ct===null?It=Fn:Ct.sibling=Fn,Ct=Fn,kt=Bt}if(Mt.done)return s(mt,kt),I$1&&tg(mt,Ot),It;if(kt===null){for(;!Mt.done;Ot++,Mt=yt.next())Mt=et(mt,Mt.value,wt),Mt!==null&&(pt=c(Mt,pt,Ot),Ct===null?It=Mt:Ct.sibling=Mt,Ct=Mt);return I$1&&tg(mt,Ot),It}for(kt=o(mt,kt);!Mt.done;Ot++,Mt=yt.next())Mt=gt(kt,mt,Ot,Mt.value,wt),Mt!==null&&(i&&Mt.alternate!==null&&kt.delete(Mt.key===null?Ot:Mt.key),pt=c(Mt,pt,Ot),Ct===null?It=Mt:Ct.sibling=Mt,Ct=Mt);return i&&kt.forEach(function(nr){return e(mt,nr)}),I$1&&tg(mt,Ot),It}function St(mt,pt,yt,wt){if(typeof yt=="object"&&yt!==null&&yt.type===ya$2&&yt.key===null&&(yt=yt.props.children),typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case va$2:e:{for(var It=yt.key,Ct=pt;Ct!==null;){if(Ct.key===It){if(It=yt.type,It===ya$2){if(Ct.tag===7){s(mt,Ct.sibling),pt=a(Ct,yt.props.children),pt.return=mt,mt=pt;break e}}else if(Ct.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===Ha$1&&uh$1(It)===Ct.type){s(mt,Ct.sibling),pt=a(Ct,yt.props),pt.ref=sh$1(mt,Ct,yt),pt.return=mt,mt=pt;break e}s(mt,Ct);break}else e(mt,Ct);Ct=Ct.sibling}yt.type===ya$2?(pt=Ah$1(yt.props.children,mt.mode,wt,yt.key),pt.return=mt,mt=pt):(wt=yh(yt.type,yt.key,yt.props,null,mt.mode,wt),wt.ref=sh$1(mt,pt,yt),wt.return=mt,mt=wt)}return d(mt);case wa$1:e:{for(Ct=yt.key;pt!==null;){if(pt.key===Ct)if(pt.tag===4&&pt.stateNode.containerInfo===yt.containerInfo&&pt.stateNode.implementation===yt.implementation){s(mt,pt.sibling),pt=a(pt,yt.children||[]),pt.return=mt,mt=pt;break e}else{s(mt,pt);break}else e(mt,pt);pt=pt.sibling}pt=zh(yt,mt.mode,wt),pt.return=mt,mt=pt}return d(mt);case Ha$1:return Ct=yt._init,St(mt,pt,Ct(yt._payload),wt)}if(eb(yt))return _t(mt,pt,yt,wt);if(Ka$2(yt))return $t(mt,pt,yt,wt);th(mt,yt)}return typeof yt=="string"&&yt!==""||typeof yt=="number"?(yt=""+yt,pt!==null&&pt.tag===6?(s(mt,pt.sibling),pt=a(pt,yt),pt.return=mt,mt=pt):(s(mt,pt),pt=xh$1(yt,mt.mode,wt),pt.return=mt,mt=pt),d(mt)):s(mt,pt)}return St}var Bh$1=vh$1(!0),Ch$1=vh$1(!1),Dh$1={},Eh=Uf(Dh$1),Fh$1=Uf(Dh$1),Gh=Uf(Dh$1);function Hh(i){if(i===Dh$1)throw Error(p$2(174));return i}function Ih(i,e){switch(G$1(Gh,e),G$1(Fh$1,i),G$1(Eh,Dh$1),i=e.nodeType,i){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lb$1(null,"");break;default:i=i===8?e.parentNode:e,e=i.namespaceURI||null,i=i.tagName,e=lb$1(e,i)}E$1(Eh),G$1(Eh,e)}function Jh(){E$1(Eh),E$1(Fh$1),E$1(Gh)}function Kh(i){Hh(Gh.current);var e=Hh(Eh.current),s=lb$1(e,i.type);e!==s&&(G$1(Fh$1,i),G$1(Eh,s))}function Lh(i){Fh$1.current===i&&(E$1(Eh),E$1(Fh$1))}var M$1=Uf(0);function Mh$1(i){for(var e=i;e!==null;){if(e.tag===13){var s=e.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break;for(;e.sibling===null;){if(e.return===null||e.return===i)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nh$1=[];function Oh$1(){for(var i=0;i<Nh$1.length;i++)Nh$1[i]._workInProgressVersionPrimary=null;Nh$1.length=0}var Ph$1=ua$1.ReactCurrentDispatcher,Qh=ua$1.ReactCurrentBatchConfig,Rh$1=0,N$2=null,O$2=null,P$1=null,Sh$1=!1,Th=!1,Uh$1=0,Vh$1=0;function Q$2(){throw Error(p$2(321))}function Wh(i,e){if(e===null)return!1;for(var s=0;s<e.length&&s<i.length;s++)if(!He$1(i[s],e[s]))return!1;return!0}function Xh(i,e,s,o,a,c){if(Rh$1=c,N$2=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ph$1.current=i===null||i.memoizedState===null?Yh:Zh,i=s(o,a),Th){c=0;do{if(Th=!1,Uh$1=0,25<=c)throw Error(p$2(301));c+=1,P$1=O$2=null,e.updateQueue=null,Ph$1.current=$h$1,i=s(o,a)}while(Th)}if(Ph$1.current=ai$1,e=O$2!==null&&O$2.next!==null,Rh$1=0,P$1=O$2=N$2=null,Sh$1=!1,e)throw Error(p$2(300));return i}function bi(){var i=Uh$1!==0;return Uh$1=0,i}function ci$1(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P$1===null?N$2.memoizedState=P$1=i:P$1=P$1.next=i,P$1}function di(){if(O$2===null){var i=N$2.alternate;i=i!==null?i.memoizedState:null}else i=O$2.next;var e=P$1===null?N$2.memoizedState:P$1.next;if(e!==null)P$1=e,O$2=i;else{if(i===null)throw Error(p$2(310));O$2=i,i={memoizedState:O$2.memoizedState,baseState:O$2.baseState,baseQueue:O$2.baseQueue,queue:O$2.queue,next:null},P$1===null?N$2.memoizedState=P$1=i:P$1=P$1.next=i}return P$1}function ei$1(i,e){return typeof e=="function"?e(i):e}function fi(i){var e=di(),s=e.queue;if(s===null)throw Error(p$2(311));s.lastRenderedReducer=i;var o=O$2,a=o.baseQueue,c=s.pending;if(c!==null){if(a!==null){var d=a.next;a.next=c.next,c.next=d}o.baseQueue=a=c,s.pending=null}if(a!==null){c=a.next,o=o.baseState;var h=d=null,g=null,_=c;do{var b=_.lane;if((Rh$1&b)===b)g!==null&&(g=g.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),o=_.hasEagerState?_.eagerState:i(o,_.action);else{var et={lane:b,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};g===null?(h=g=et,d=o):g=g.next=et,N$2.lanes|=b,hh$1|=b}_=_.next}while(_!==null&&_!==c);g===null?d=o:g.next=h,He$1(o,e.memoizedState)||(Ug=!0),e.memoizedState=o,e.baseState=d,e.baseQueue=g,s.lastRenderedState=o}if(i=s.interleaved,i!==null){a=i;do c=a.lane,N$2.lanes|=c,hh$1|=c,a=a.next;while(a!==i)}else a===null&&(s.lanes=0);return[e.memoizedState,s.dispatch]}function gi(i){var e=di(),s=e.queue;if(s===null)throw Error(p$2(311));s.lastRenderedReducer=i;var o=s.dispatch,a=s.pending,c=e.memoizedState;if(a!==null){s.pending=null;var d=a=a.next;do c=i(c,d.action),d=d.next;while(d!==a);He$1(c,e.memoizedState)||(Ug=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),s.lastRenderedState=c}return[c,o]}function hi(){}function ii$1(i,e){var s=N$2,o=di(),a=e(),c=!He$1(o.memoizedState,a);if(c&&(o.memoizedState=a,Ug=!0),o=o.queue,ji(ki.bind(null,s,o,i),[i]),o.getSnapshot!==e||c||P$1!==null&&P$1.memoizedState.tag&1){if(s.flags|=2048,li(9,mi.bind(null,s,o,a,e),void 0,null),R$1===null)throw Error(p$2(349));(Rh$1&30)!==0||ni$1(s,e,a)}return a}function ni$1(i,e,s){i.flags|=16384,i={getSnapshot:e,value:s},e=N$2.updateQueue,e===null?(e={lastEffect:null,stores:null},N$2.updateQueue=e,e.stores=[i]):(s=e.stores,s===null?e.stores=[i]:s.push(i))}function mi(i,e,s,o){e.value=s,e.getSnapshot=o,oi$1(e)&&pi(i)}function ki(i,e,s){return s(function(){oi$1(e)&&pi(i)})}function oi$1(i){var e=i.getSnapshot;i=i.value;try{var s=e();return!He$1(i,s)}catch{return!0}}function pi(i){var e=Zg(i,1);e!==null&&mh(e,i,1,-1)}function qi$1(i){var e=ci$1();return typeof i=="function"&&(i=i()),e.memoizedState=e.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei$1,lastRenderedState:i},e.queue=i,i=i.dispatch=ri$1.bind(null,N$2,i),[e.memoizedState,i]}function li(i,e,s,o){return i={tag:i,create:e,destroy:s,deps:o,next:null},e=N$2.updateQueue,e===null?(e={lastEffect:null,stores:null},N$2.updateQueue=e,e.lastEffect=i.next=i):(s=e.lastEffect,s===null?e.lastEffect=i.next=i:(o=s.next,s.next=i,i.next=o,e.lastEffect=i)),i}function si$1(){return di().memoizedState}function ti$1(i,e,s,o){var a=ci$1();N$2.flags|=i,a.memoizedState=li(1|e,s,void 0,o===void 0?null:o)}function ui$1(i,e,s,o){var a=di();o=o===void 0?null:o;var c=void 0;if(O$2!==null){var d=O$2.memoizedState;if(c=d.destroy,o!==null&&Wh(o,d.deps)){a.memoizedState=li(e,s,c,o);return}}N$2.flags|=i,a.memoizedState=li(1|e,s,c,o)}function vi(i,e){return ti$1(8390656,8,i,e)}function ji(i,e){return ui$1(2048,8,i,e)}function wi(i,e){return ui$1(4,2,i,e)}function xi(i,e){return ui$1(4,4,i,e)}function yi(i,e){if(typeof e=="function")return i=i(),e(i),function(){e(null)};if(e!=null)return i=i(),e.current=i,function(){e.current=null}}function zi(i,e,s){return s=s!=null?s.concat([i]):null,ui$1(4,4,yi.bind(null,e,i),s)}function Ai(){}function Bi$1(i,e){var s=di();e=e===void 0?null:e;var o=s.memoizedState;return o!==null&&e!==null&&Wh(e,o[1])?o[0]:(s.memoizedState=[i,e],i)}function Ci(i,e){var s=di();e=e===void 0?null:e;var o=s.memoizedState;return o!==null&&e!==null&&Wh(e,o[1])?o[0]:(i=i(),s.memoizedState=[i,e],i)}function Di(i,e,s){return(Rh$1&21)===0?(i.baseState&&(i.baseState=!1,Ug=!0),i.memoizedState=s):(He$1(s,e)||(s=yc$1(),N$2.lanes|=s,hh$1|=s,i.baseState=!0),e)}function Ei(i,e){var s=C$2;C$2=s!==0&&4>s?s:4,i(!0);var o=Qh.transition;Qh.transition={};try{i(!1),e()}finally{C$2=s,Qh.transition=o}}function Fi(){return di().memoizedState}function Gi(i,e,s){var o=lh$1(i);if(s={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null},Hi(i))Ii(e,s);else if(s=Yg(i,e,s,o),s!==null){var a=L$2();mh(s,i,o,a),Ji(s,e,o)}}function ri$1(i,e,s){var o=lh$1(i),a={lane:o,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hi(i))Ii(e,a);else{var c=i.alternate;if(i.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var d=e.lastRenderedState,h=c(d,s);if(a.hasEagerState=!0,a.eagerState=h,He$1(h,d)){var g=e.interleaved;g===null?(a.next=a,Xg(e)):(a.next=g.next,g.next=a),e.interleaved=a;return}}catch{}finally{}s=Yg(i,e,a,o),s!==null&&(a=L$2(),mh(s,i,o,a),Ji(s,e,o))}}function Hi(i){var e=i.alternate;return i===N$2||e!==null&&e===N$2}function Ii(i,e){Th=Sh$1=!0;var s=i.pending;s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e}function Ji(i,e,s){if((s&4194240)!==0){var o=e.lanes;o&=i.pendingLanes,s|=o,e.lanes=s,Cc$1(i,s)}}var ai$1={readContext:Vg,useCallback:Q$2,useContext:Q$2,useEffect:Q$2,useImperativeHandle:Q$2,useInsertionEffect:Q$2,useLayoutEffect:Q$2,useMemo:Q$2,useReducer:Q$2,useRef:Q$2,useState:Q$2,useDebugValue:Q$2,useDeferredValue:Q$2,useTransition:Q$2,useMutableSource:Q$2,useSyncExternalStore:Q$2,useId:Q$2,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(i,e){return ci$1().memoizedState=[i,e===void 0?null:e],i},useContext:Vg,useEffect:vi,useImperativeHandle:function(i,e,s){return s=s!=null?s.concat([i]):null,ti$1(4194308,4,yi.bind(null,e,i),s)},useLayoutEffect:function(i,e){return ti$1(4194308,4,i,e)},useInsertionEffect:function(i,e){return ti$1(4,2,i,e)},useMemo:function(i,e){var s=ci$1();return e=e===void 0?null:e,i=i(),s.memoizedState=[i,e],i},useReducer:function(i,e,s){var o=ci$1();return e=s!==void 0?s(e):e,o.memoizedState=o.baseState=e,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:e},o.queue=i,i=i.dispatch=Gi.bind(null,N$2,i),[o.memoizedState,i]},useRef:function(i){var e=ci$1();return i={current:i},e.memoizedState=i},useState:qi$1,useDebugValue:Ai,useDeferredValue:function(i){return ci$1().memoizedState=i},useTransition:function(){var i=qi$1(!1),e=i[0];return i=Ei.bind(null,i[1]),ci$1().memoizedState=i,[e,i]},useMutableSource:function(){},useSyncExternalStore:function(i,e,s){var o=N$2,a=ci$1();if(I$1){if(s===void 0)throw Error(p$2(407));s=s()}else{if(s=e(),R$1===null)throw Error(p$2(349));(Rh$1&30)!==0||ni$1(o,e,s)}a.memoizedState=s;var c={value:s,getSnapshot:e};return a.queue=c,vi(ki.bind(null,o,c,i),[i]),o.flags|=2048,li(9,mi.bind(null,o,c,s,e),void 0,null),s},useId:function(){var i=ci$1(),e=R$1.identifierPrefix;if(I$1){var s=sg,o=rg;s=(o&~(1<<32-oc$2(o)-1)).toString(32)+s,e=":"+e+"R"+s,s=Uh$1++,0<s&&(e+="H"+s.toString(32)),e+=":"}else s=Vh$1++,e=":"+e+"r"+s.toString(32)+":";return i.memoizedState=e},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi$1,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si$1,useState:function(){return fi(ei$1)},useDebugValue:Ai,useDeferredValue:function(i){var e=di();return Di(e,O$2.memoizedState,i)},useTransition:function(){var i=fi(ei$1)[0],e=di().memoizedState;return[i,e]},useMutableSource:hi,useSyncExternalStore:ii$1,useId:Fi,unstable_isNewReconciler:!1},$h$1={readContext:Vg,useCallback:Bi$1,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si$1,useState:function(){return gi(ei$1)},useDebugValue:Ai,useDeferredValue:function(i){var e=di();return O$2===null?e.memoizedState=i:Di(e,O$2.memoizedState,i)},useTransition:function(){var i=gi(ei$1)[0],e=di().memoizedState;return[i,e]},useMutableSource:hi,useSyncExternalStore:ii$1,useId:Fi,unstable_isNewReconciler:!1};function Ki$1(i,e){try{var s="",o=e;do s+=Pa$1(o),o=o.return;while(o);var a=s}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:i,source:e,stack:a,digest:null}}function Li$1(i,e,s){return{value:i,source:null,stack:s!=null?s:null,digest:e!=null?e:null}}function Mi(i,e){try{console.error(e.value)}catch(s){setTimeout(function(){throw s})}}var Ni=typeof WeakMap=="function"?WeakMap:Map;function Oi(i,e,s){s=ch(-1,s),s.tag=3,s.payload={element:null};var o=e.value;return s.callback=function(){Pi||(Pi=!0,Qi=o),Mi(i,e)},s}function Ri(i,e,s){s=ch(-1,s),s.tag=3;var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var a=e.value;s.payload=function(){return o(a)},s.callback=function(){Mi(i,e)}}var c=i.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(s.callback=function(){Mi(i,e),typeof o!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var d=e.stack;this.componentDidCatch(e.value,{componentStack:d!==null?d:""})}),s}function Ti(i,e,s){var o=i.pingCache;if(o===null){o=i.pingCache=new Ni;var a=new Set;o.set(e,a)}else a=o.get(e),a===void 0&&(a=new Set,o.set(e,a));a.has(s)||(a.add(s),i=Ui$1.bind(null,i,e,s),e.then(i,i))}function Vi(i){do{var e;if((e=i.tag===13)&&(e=i.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return i;i=i.return}while(i!==null);return null}function Wi(i,e,s,o,a){return(i.mode&1)===0?(i===e?i.flags|=65536:(i.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(e=ch(-1,1),e.tag=2,dh$1(s,e,1))),s.lanes|=1),i):(i.flags|=65536,i.lanes=a,i)}var Xi$1=ua$1.ReactCurrentOwner,Ug=!1;function Yi(i,e,s,o){e.child=i===null?Ch$1(e,null,s,o):Bh$1(e,i.child,s,o)}function Zi(i,e,s,o,a){s=s.render;var c=e.ref;return Tg(e,a),o=Xh(i,e,s,o,c,a),s=bi(),i!==null&&!Ug?(e.updateQueue=i.updateQueue,e.flags&=-2053,i.lanes&=~a,$i(i,e,a)):(I$1&&s&&vg(e),e.flags|=1,Yi(i,e,o,a),e.child)}function aj(i,e,s,o,a){if(i===null){var c=s.type;return typeof c=="function"&&!bj(c)&&c.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(e.tag=15,e.type=c,cj(i,e,c,o,a)):(i=yh(s.type,null,o,e,e.mode,a),i.ref=e.ref,i.return=e,e.child=i)}if(c=i.child,(i.lanes&a)===0){var d=c.memoizedProps;if(s=s.compare,s=s!==null?s:Ie,s(d,o)&&i.ref===e.ref)return $i(i,e,a)}return e.flags|=1,i=wh(c,o),i.ref=e.ref,i.return=e,e.child=i}function cj(i,e,s,o,a){if(i!==null){var c=i.memoizedProps;if(Ie(c,o)&&i.ref===e.ref)if(Ug=!1,e.pendingProps=o=c,(i.lanes&a)!==0)(i.flags&131072)!==0&&(Ug=!0);else return e.lanes=i.lanes,$i(i,e,a)}return dj(i,e,s,o,a)}function ej(i,e,s){var o=e.pendingProps,a=o.children,c=i!==null?i.memoizedState:null;if(o.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G$1(fj,gj),gj|=s;else{if((s&1073741824)===0)return i=c!==null?c.baseLanes|s:s,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:i,cachePool:null,transitions:null},e.updateQueue=null,G$1(fj,gj),gj|=i,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=c!==null?c.baseLanes:s,G$1(fj,gj),gj|=o}else c!==null?(o=c.baseLanes|s,e.memoizedState=null):o=s,G$1(fj,gj),gj|=o;return Yi(i,e,a,s),e.child}function hj(i,e){var s=e.ref;(i===null&&s!==null||i!==null&&i.ref!==s)&&(e.flags|=512,e.flags|=2097152)}function dj(i,e,s,o,a){var c=Zf(s)?Xf:H$1.current;return c=Yf(e,c),Tg(e,a),s=Xh(i,e,s,o,c,a),o=bi(),i!==null&&!Ug?(e.updateQueue=i.updateQueue,e.flags&=-2053,i.lanes&=~a,$i(i,e,a)):(I$1&&o&&vg(e),e.flags|=1,Yi(i,e,s,a),e.child)}function ij(i,e,s,o,a){if(Zf(s)){var c=!0;cg(e)}else c=!1;if(Tg(e,a),e.stateNode===null)jj(i,e),ph(e,s,o),rh$1(e,s,o,a),o=!0;else if(i===null){var d=e.stateNode,h=e.memoizedProps;d.props=h;var g=d.context,_=s.contextType;typeof _=="object"&&_!==null?_=Vg(_):(_=Zf(s)?Xf:H$1.current,_=Yf(e,_));var b=s.getDerivedStateFromProps,et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function";et||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==o||g!==_)&&qh(e,d,o,_),$g=!1;var ot=e.memoizedState;d.state=ot,gh(e,o,d,a),g=e.memoizedState,h!==o||ot!==g||Wf.current||$g?(typeof b=="function"&&(kh$1(e,s,b,o),g=e.memoizedState),(h=$g||oh$1(e,s,h,o,ot,g,_))?(et||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(e.flags|=4194308)):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=g),d.props=o,d.state=g,d.context=_,o=h):(typeof d.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{d=e.stateNode,bh$1(i,e),h=e.memoizedProps,_=e.type===e.elementType?h:Lg(e.type,h),d.props=_,et=e.pendingProps,ot=d.context,g=s.contextType,typeof g=="object"&&g!==null?g=Vg(g):(g=Zf(s)?Xf:H$1.current,g=Yf(e,g));var gt=s.getDerivedStateFromProps;(b=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==et||ot!==g)&&qh(e,d,o,g),$g=!1,ot=e.memoizedState,d.state=ot,gh(e,o,d,a);var _t=e.memoizedState;h!==et||ot!==_t||Wf.current||$g?(typeof gt=="function"&&(kh$1(e,s,gt,o),_t=e.memoizedState),(_=$g||oh$1(e,s,_,o,ot,_t,g)||!1)?(b||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,_t,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,_t,g)),typeof d.componentDidUpdate=="function"&&(e.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===i.memoizedProps&&ot===i.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===i.memoizedProps&&ot===i.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=_t),d.props=o,d.state=_t,d.context=g,o=_):(typeof d.componentDidUpdate!="function"||h===i.memoizedProps&&ot===i.memoizedState||(e.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===i.memoizedProps&&ot===i.memoizedState||(e.flags|=1024),o=!1)}return kj(i,e,s,o,c,a)}function kj(i,e,s,o,a,c){hj(i,e);var d=(e.flags&128)!==0;if(!o&&!d)return a&&dg(e,s,!1),$i(i,e,c);o=e.stateNode,Xi$1.current=e;var h=d&&typeof s.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,i!==null&&d?(e.child=Bh$1(e,i.child,null,c),e.child=Bh$1(e,null,h,c)):Yi(i,e,h,c),e.memoizedState=o.state,a&&dg(e,s,!0),e.child}function lj(i){var e=i.stateNode;e.pendingContext?ag(i,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(i,e.context,!1),Ih(i,e.containerInfo)}function mj(i,e,s,o,a){return Ig(),Jg(a),e.flags|=256,Yi(i,e,s,o),e.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(i){return{baseLanes:i,cachePool:null,transitions:null}}function pj(i,e,s){var o=e.pendingProps,a=M$1.current,c=!1,d=(e.flags&128)!==0,h;if((h=d)||(h=i!==null&&i.memoizedState===null?!1:(a&2)!==0),h?(c=!0,e.flags&=-129):(i===null||i.memoizedState!==null)&&(a|=1),G$1(M$1,a&1),i===null)return Eg(e),i=e.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((e.mode&1)===0?e.lanes=1:i.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(d=o.children,i=o.fallback,c?(o=e.mode,c=e.child,d={mode:"hidden",children:d},(o&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=d):c=qj(d,o,0,null),i=Ah$1(i,o,s,null),c.return=e,i.return=e,c.sibling=i,e.child=c,e.child.memoizedState=oj(s),e.memoizedState=nj,i):rj(e,d));if(a=i.memoizedState,a!==null&&(h=a.dehydrated,h!==null))return sj(i,e,d,o,h,a,s);if(c){c=o.fallback,d=e.mode,a=i.child,h=a.sibling;var g={mode:"hidden",children:o.children};return(d&1)===0&&e.child!==a?(o=e.child,o.childLanes=0,o.pendingProps=g,e.deletions=null):(o=wh(a,g),o.subtreeFlags=a.subtreeFlags&14680064),h!==null?c=wh(h,c):(c=Ah$1(c,d,s,null),c.flags|=2),c.return=e,o.return=e,o.sibling=c,e.child=o,o=c,c=e.child,d=i.child.memoizedState,d=d===null?oj(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=i.childLanes&~s,e.memoizedState=nj,o}return c=i.child,i=c.sibling,o=wh(c,{mode:"visible",children:o.children}),(e.mode&1)===0&&(o.lanes=s),o.return=e,o.sibling=null,i!==null&&(s=e.deletions,s===null?(e.deletions=[i],e.flags|=16):s.push(i)),e.child=o,e.memoizedState=null,o}function rj(i,e){return e=qj({mode:"visible",children:e},i.mode,0,null),e.return=i,i.child=e}function tj(i,e,s,o){return o!==null&&Jg(o),Bh$1(e,i.child,null,s),i=rj(e,e.pendingProps.children),i.flags|=2,e.memoizedState=null,i}function sj(i,e,s,o,a,c,d){if(s)return e.flags&256?(e.flags&=-257,o=Li$1(Error(p$2(422))),tj(i,e,d,o)):e.memoizedState!==null?(e.child=i.child,e.flags|=128,null):(c=o.fallback,a=e.mode,o=qj({mode:"visible",children:o.children},a,0,null),c=Ah$1(c,a,d,null),c.flags|=2,o.return=e,c.return=e,o.sibling=c,e.child=o,(e.mode&1)!==0&&Bh$1(e,i.child,null,d),e.child.memoizedState=oj(d),e.memoizedState=nj,c);if((e.mode&1)===0)return tj(i,e,d,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var h=o.dgst;return o=h,c=Error(p$2(419)),o=Li$1(c,o,void 0),tj(i,e,d,o)}if(h=(d&i.childLanes)!==0,Ug||h){if(o=R$1,o!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|d))!==0?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,Zg(i,a),mh(o,i,a,-1))}return uj(),o=Li$1(Error(p$2(421))),tj(i,e,d,o)}return a.data==="$?"?(e.flags|=128,e.child=i.child,e=vj.bind(null,i),a._reactRetry=e,null):(i=c.treeContext,yg=Lf(a.nextSibling),xg=e,I$1=!0,zg=null,i!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=i.id,sg=i.overflow,qg=e),e=rj(e,o.children),e.flags|=4096,e)}function wj(i,e,s){i.lanes|=e;var o=i.alternate;o!==null&&(o.lanes|=e),Sg(i.return,e,s)}function xj(i,e,s,o,a){var c=i.memoizedState;c===null?i.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:a}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=o,c.tail=s,c.tailMode=a)}function yj(i,e,s){var o=e.pendingProps,a=o.revealOrder,c=o.tail;if(Yi(i,e,o.children,s),o=M$1.current,(o&2)!==0)o=o&1|2,e.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=e.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&wj(i,s,e);else if(i.tag===19)wj(i,s,e);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}o&=1}if(G$1(M$1,o),(e.mode&1)===0)e.memoizedState=null;else switch(a){case"forwards":for(s=e.child,a=null;s!==null;)i=s.alternate,i!==null&&Mh$1(i)===null&&(a=s),s=s.sibling;s=a,s===null?(a=e.child,e.child=null):(a=s.sibling,s.sibling=null),xj(e,!1,a,s,c);break;case"backwards":for(s=null,a=e.child,e.child=null;a!==null;){if(i=a.alternate,i!==null&&Mh$1(i)===null){e.child=a;break}i=a.sibling,a.sibling=s,s=a,a=i}xj(e,!0,s,null,c);break;case"together":xj(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jj(i,e){(e.mode&1)===0&&i!==null&&(i.alternate=null,e.alternate=null,e.flags|=2)}function $i(i,e,s){if(i!==null&&(e.dependencies=i.dependencies),hh$1|=e.lanes,(s&e.childLanes)===0)return null;if(i!==null&&e.child!==i.child)throw Error(p$2(153));if(e.child!==null){for(i=e.child,s=wh(i,i.pendingProps),e.child=s,s.return=e;i.sibling!==null;)i=i.sibling,s=s.sibling=wh(i,i.pendingProps),s.return=e;s.sibling=null}return e.child}function zj(i,e,s){switch(e.tag){case 3:lj(e),Ig();break;case 5:Kh(e);break;case 1:Zf(e.type)&&cg(e);break;case 4:Ih(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,a=e.memoizedProps.value;G$1(Mg,o._currentValue),o._currentValue=a;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(G$1(M$1,M$1.current&1),e.flags|=128,null):(s&e.child.childLanes)!==0?pj(i,e,s):(G$1(M$1,M$1.current&1),i=$i(i,e,s),i!==null?i.sibling:null);G$1(M$1,M$1.current&1);break;case 19:if(o=(s&e.childLanes)!==0,(i.flags&128)!==0){if(o)return yj(i,e,s);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),G$1(M$1,M$1.current),o)break;return null;case 22:case 23:return e.lanes=0,ej(i,e,s)}return $i(i,e,s)}var Aj,Bj,Cj,Dj;Aj=function(i,e){for(var s=e.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};Bj=function(){};Cj=function(i,e,s,o){var a=i.memoizedProps;if(a!==o){i=e.stateNode,Hh(Eh.current);var c=null;switch(s){case"input":a=Ya$1(i,a),o=Ya$1(i,o),c=[];break;case"select":a=A$1({},a,{value:void 0}),o=A$1({},o,{value:void 0}),c=[];break;case"textarea":a=gb$1(i,a),o=gb$1(i,o),c=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(i.onclick=Bf)}ub$1(s,o);var d;s=null;for(_ in a)if(!o.hasOwnProperty(_)&&a.hasOwnProperty(_)&&a[_]!=null)if(_==="style"){var h=a[_];for(d in h)h.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(ea$1.hasOwnProperty(_)?c||(c=[]):(c=c||[]).push(_,null));for(_ in o){var g=o[_];if(h=a!=null?a[_]:void 0,o.hasOwnProperty(_)&&g!==h&&(g!=null||h!=null))if(_==="style")if(h){for(d in h)!h.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in g)g.hasOwnProperty(d)&&h[d]!==g[d]&&(s||(s={}),s[d]=g[d])}else s||(c||(c=[]),c.push(_,s)),s=g;else _==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,h=h?h.__html:void 0,g!=null&&h!==g&&(c=c||[]).push(_,g)):_==="children"?typeof g!="string"&&typeof g!="number"||(c=c||[]).push(_,""+g):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(ea$1.hasOwnProperty(_)?(g!=null&&_==="onScroll"&&D$2("scroll",i),c||h===g||(c=[])):(c=c||[]).push(_,g))}s&&(c=c||[]).push("style",s);var _=c;(e.updateQueue=_)&&(e.flags|=4)}};Dj=function(i,e,s,o){s!==o&&(e.flags|=4)};function Ej(i,e){if(!I$1)switch(i.tailMode){case"hidden":e=i.tail;for(var s=null;e!==null;)e.alternate!==null&&(s=e),e=e.sibling;s===null?i.tail=null:s.sibling=null;break;case"collapsed":s=i.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?e||i.tail===null?i.tail=null:i.tail.sibling=null:o.sibling=null}}function S$1(i){var e=i.alternate!==null&&i.alternate.child===i.child,s=0,o=0;if(e)for(var a=i.child;a!==null;)s|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=i,a=a.sibling;else for(a=i.child;a!==null;)s|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=i,a=a.sibling;return i.subtreeFlags|=o,i.childLanes=s,e}function Fj(i,e,s){var o=e.pendingProps;switch(wg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S$1(e),null;case 1:return Zf(e.type)&&$f(),S$1(e),null;case 3:return o=e.stateNode,Jh(),E$1(Wf),E$1(H$1),Oh$1(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Gg(e)?e.flags|=4:i===null||i.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,zg!==null&&(Gj(zg),zg=null))),Bj(i,e),S$1(e),null;case 5:Lh(e);var a=Hh(Gh.current);if(s=e.type,i!==null&&e.stateNode!=null)Cj(i,e,s,o,a),i.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(p$2(166));return S$1(e),null}if(i=Hh(Eh.current),Gg(e)){o=e.stateNode,s=e.type;var c=e.memoizedProps;switch(o[Of]=e,o[Pf]=c,i=(e.mode&1)!==0,s){case"dialog":D$2("cancel",o),D$2("close",o);break;case"iframe":case"object":case"embed":D$2("load",o);break;case"video":case"audio":for(a=0;a<lf.length;a++)D$2(lf[a],o);break;case"source":D$2("error",o);break;case"img":case"image":case"link":D$2("error",o),D$2("load",o);break;case"details":D$2("toggle",o);break;case"input":Za$1(o,c),D$2("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!c.multiple},D$2("invalid",o);break;case"textarea":hb$1(o,c),D$2("invalid",o)}ub$1(s,c),a=null;for(var d in c)if(c.hasOwnProperty(d)){var h=c[d];d==="children"?typeof h=="string"?o.textContent!==h&&(c.suppressHydrationWarning!==!0&&Af(o.textContent,h,i),a=["children",h]):typeof h=="number"&&o.textContent!==""+h&&(c.suppressHydrationWarning!==!0&&Af(o.textContent,h,i),a=["children",""+h]):ea$1.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&D$2("scroll",o)}switch(s){case"input":Va$2(o),db$2(o,c,!0);break;case"textarea":Va$2(o),jb$1(o);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(o.onclick=Bf)}o=a,e.updateQueue=o,o!==null&&(e.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=kb$1(s)),i==="http://www.w3.org/1999/xhtml"?s==="script"?(i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof o.is=="string"?i=d.createElement(s,{is:o.is}):(i=d.createElement(s),s==="select"&&(d=i,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):i=d.createElementNS(i,s),i[Of]=e,i[Pf]=o,Aj(i,e,!1,!1),e.stateNode=i;e:{switch(d=vb$1(s,o),s){case"dialog":D$2("cancel",i),D$2("close",i),a=o;break;case"iframe":case"object":case"embed":D$2("load",i),a=o;break;case"video":case"audio":for(a=0;a<lf.length;a++)D$2(lf[a],i);a=o;break;case"source":D$2("error",i),a=o;break;case"img":case"image":case"link":D$2("error",i),D$2("load",i),a=o;break;case"details":D$2("toggle",i),a=o;break;case"input":Za$1(i,o),a=Ya$1(i,o),D$2("invalid",i);break;case"option":a=o;break;case"select":i._wrapperState={wasMultiple:!!o.multiple},a=A$1({},o,{value:void 0}),D$2("invalid",i);break;case"textarea":hb$1(i,o),a=gb$1(i,o),D$2("invalid",i);break;default:a=o}ub$1(s,a),h=a;for(c in h)if(h.hasOwnProperty(c)){var g=h[c];c==="style"?sb$1(i,g):c==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&nb$1(i,g)):c==="children"?typeof g=="string"?(s!=="textarea"||g!=="")&&ob$1(i,g):typeof g=="number"&&ob$1(i,""+g):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea$1.hasOwnProperty(c)?g!=null&&c==="onScroll"&&D$2("scroll",i):g!=null&&ta$2(i,c,g,d))}switch(s){case"input":Va$2(i),db$2(i,o,!1);break;case"textarea":Va$2(i),jb$1(i);break;case"option":o.value!=null&&i.setAttribute("value",""+Sa$2(o.value));break;case"select":i.multiple=!!o.multiple,c=o.value,c!=null?fb$1(i,!!o.multiple,c,!1):o.defaultValue!=null&&fb$1(i,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(i.onclick=Bf)}switch(s){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return S$1(e),null;case 6:if(i&&e.stateNode!=null)Dj(i,e,i.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(p$2(166));if(s=Hh(Gh.current),Hh(Eh.current),Gg(e)){if(o=e.stateNode,s=e.memoizedProps,o[Of]=e,(c=o.nodeValue!==s)&&(i=xg,i!==null))switch(i.tag){case 3:Af(o.nodeValue,s,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Af(o.nodeValue,s,(i.mode&1)!==0)}c&&(e.flags|=4)}else o=(s.nodeType===9?s:s.ownerDocument).createTextNode(o),o[Of]=e,e.stateNode=o}return S$1(e),null;case 13:if(E$1(M$1),o=e.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(I$1&&yg!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Hg(),Ig(),e.flags|=98560,c=!1;else if(c=Gg(e),o!==null&&o.dehydrated!==null){if(i===null){if(!c)throw Error(p$2(318));if(c=e.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(p$2(317));c[Of]=e}else Ig(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;S$1(e),c=!1}else zg!==null&&(Gj(zg),zg=null),c=!0;if(!c)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=s,e):(o=o!==null,o!==(i!==null&&i.memoizedState!==null)&&o&&(e.child.flags|=8192,(e.mode&1)!==0&&(i===null||(M$1.current&1)!==0?T$1===0&&(T$1=3):uj())),e.updateQueue!==null&&(e.flags|=4),S$1(e),null);case 4:return Jh(),Bj(i,e),i===null&&sf(e.stateNode.containerInfo),S$1(e),null;case 10:return Rg(e.type._context),S$1(e),null;case 17:return Zf(e.type)&&$f(),S$1(e),null;case 19:if(E$1(M$1),c=e.memoizedState,c===null)return S$1(e),null;if(o=(e.flags&128)!==0,d=c.rendering,d===null)if(o)Ej(c,!1);else{if(T$1!==0||i!==null&&(i.flags&128)!==0)for(i=e.child;i!==null;){if(d=Mh$1(i),d!==null){for(e.flags|=128,Ej(c,!1),o=d.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=s,s=e.child;s!==null;)c=s,i=o,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=i,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,i=d.dependencies,c.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),s=s.sibling;return G$1(M$1,M$1.current&1|2),e.child}i=i.sibling}c.tail!==null&&B$2()>Hj&&(e.flags|=128,o=!0,Ej(c,!1),e.lanes=4194304)}else{if(!o)if(i=Mh$1(d),i!==null){if(e.flags|=128,o=!0,s=i.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),Ej(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!I$1)return S$1(e),null}else 2*B$2()-c.renderingStartTime>Hj&&s!==1073741824&&(e.flags|=128,o=!0,Ej(c,!1),e.lanes=4194304);c.isBackwards?(d.sibling=e.child,e.child=d):(s=c.last,s!==null?s.sibling=d:e.child=d,c.last=d)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=B$2(),e.sibling=null,s=M$1.current,G$1(M$1,o?s&1|2:s&1),e):(S$1(e),null);case 22:case 23:return Ij(),o=e.memoizedState!==null,i!==null&&i.memoizedState!==null!==o&&(e.flags|=8192),o&&(e.mode&1)!==0?(gj&1073741824)!==0&&(S$1(e),e.subtreeFlags&6&&(e.flags|=8192)):S$1(e),null;case 24:return null;case 25:return null}throw Error(p$2(156,e.tag))}function Jj(i,e){switch(wg(e),e.tag){case 1:return Zf(e.type)&&$f(),i=e.flags,i&65536?(e.flags=i&-65537|128,e):null;case 3:return Jh(),E$1(Wf),E$1(H$1),Oh$1(),i=e.flags,(i&65536)!==0&&(i&128)===0?(e.flags=i&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(E$1(M$1),i=e.memoizedState,i!==null&&i.dehydrated!==null){if(e.alternate===null)throw Error(p$2(340));Ig()}return i=e.flags,i&65536?(e.flags=i&-65537|128,e):null;case 19:return E$1(M$1),null;case 4:return Jh(),null;case 10:return Rg(e.type._context),null;case 22:case 23:return Ij(),null;case 24:return null;default:return null}}var Kj=!1,U$2=!1,Lj=typeof WeakSet=="function"?WeakSet:Set,V$1=null;function Mj(i,e){var s=i.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(o){W$2(i,e,o)}else s.current=null}function Nj(i,e,s){try{s()}catch(o){W$2(i,e,o)}}var Oj=!1;function Pj(i,e){if(Cf=dd$1,i=Me$1(),Ne$1(i)){if("selectionStart"in i)var s={start:i.selectionStart,end:i.selectionEnd};else e:{s=(s=i.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var a=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{s.nodeType,c.nodeType}catch{s=null;break e}var d=0,h=-1,g=-1,_=0,b=0,et=i,ot=null;t:for(;;){for(var gt;et!==s||a!==0&&et.nodeType!==3||(h=d+a),et!==c||o!==0&&et.nodeType!==3||(g=d+o),et.nodeType===3&&(d+=et.nodeValue.length),(gt=et.firstChild)!==null;)ot=et,et=gt;for(;;){if(et===i)break t;if(ot===s&&++_===a&&(h=d),ot===c&&++b===o&&(g=d),(gt=et.nextSibling)!==null)break;et=ot,ot=et.parentNode}et=gt}s=h===-1||g===-1?null:{start:h,end:g}}else s=null}s=s||{start:0,end:0}}else s=null;for(Df={focusedElem:i,selectionRange:s},dd$1=!1,V$1=e;V$1!==null;)if(e=V$1,i=e.child,(e.subtreeFlags&1028)!==0&&i!==null)i.return=e,V$1=i;else for(;V$1!==null;){e=V$1;try{var _t=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_t!==null){var $t=_t.memoizedProps,St=_t.memoizedState,mt=e.stateNode,pt=mt.getSnapshotBeforeUpdate(e.elementType===e.type?$t:Lg(e.type,$t),St);mt.__reactInternalSnapshotBeforeUpdate=pt}break;case 3:var yt=e.stateNode.containerInfo;yt.nodeType===1?yt.textContent="":yt.nodeType===9&&yt.documentElement&&yt.removeChild(yt.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p$2(163))}}catch(wt){W$2(e,e.return,wt)}if(i=e.sibling,i!==null){i.return=e.return,V$1=i;break}V$1=e.return}return _t=Oj,Oj=!1,_t}function Qj(i,e,s){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&i)===i){var c=a.destroy;a.destroy=void 0,c!==void 0&&Nj(e,s,c)}a=a.next}while(a!==o)}}function Rj(i,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var s=e=e.next;do{if((s.tag&i)===i){var o=s.create;s.destroy=o()}s=s.next}while(s!==e)}}function Sj(i){var e=i.ref;if(e!==null){var s=i.stateNode;switch(i.tag){case 5:i=s;break;default:i=s}typeof e=="function"?e(i):e.current=i}}function Tj(i){var e=i.alternate;e!==null&&(i.alternate=null,Tj(e)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(e=i.stateNode,e!==null&&(delete e[Of],delete e[Pf],delete e[of],delete e[Qf],delete e[Rf])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Uj(i){return i.tag===5||i.tag===3||i.tag===4}function Vj(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Uj(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Wj(i,e,s){var o=i.tag;if(o===5||o===6)i=i.stateNode,e?s.nodeType===8?s.parentNode.insertBefore(i,e):s.insertBefore(i,e):(s.nodeType===8?(e=s.parentNode,e.insertBefore(i,s)):(e=s,e.appendChild(i)),s=s._reactRootContainer,s!=null||e.onclick!==null||(e.onclick=Bf));else if(o!==4&&(i=i.child,i!==null))for(Wj(i,e,s),i=i.sibling;i!==null;)Wj(i,e,s),i=i.sibling}function Xj(i,e,s){var o=i.tag;if(o===5||o===6)i=i.stateNode,e?s.insertBefore(i,e):s.appendChild(i);else if(o!==4&&(i=i.child,i!==null))for(Xj(i,e,s),i=i.sibling;i!==null;)Xj(i,e,s),i=i.sibling}var X$2=null,Yj=!1;function Zj(i,e,s){for(s=s.child;s!==null;)ak(i,e,s),s=s.sibling}function ak(i,e,s){if(lc$2&&typeof lc$2.onCommitFiberUnmount=="function")try{lc$2.onCommitFiberUnmount(kc$1,s)}catch{}switch(s.tag){case 5:U$2||Mj(s,e);case 6:var o=X$2,a=Yj;X$2=null,Zj(i,e,s),X$2=o,Yj=a,X$2!==null&&(Yj?(i=X$2,s=s.stateNode,i.nodeType===8?i.parentNode.removeChild(s):i.removeChild(s)):X$2.removeChild(s.stateNode));break;case 18:X$2!==null&&(Yj?(i=X$2,s=s.stateNode,i.nodeType===8?Kf(i.parentNode,s):i.nodeType===1&&Kf(i,s),bd$1(i)):Kf(X$2,s.stateNode));break;case 4:o=X$2,a=Yj,X$2=s.stateNode.containerInfo,Yj=!0,Zj(i,e,s),X$2=o,Yj=a;break;case 0:case 11:case 14:case 15:if(!U$2&&(o=s.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var c=a,d=c.destroy;c=c.tag,d!==void 0&&((c&2)!==0||(c&4)!==0)&&Nj(s,e,d),a=a.next}while(a!==o)}Zj(i,e,s);break;case 1:if(!U$2&&(Mj(s,e),o=s.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=s.memoizedProps,o.state=s.memoizedState,o.componentWillUnmount()}catch(h){W$2(s,e,h)}Zj(i,e,s);break;case 21:Zj(i,e,s);break;case 22:s.mode&1?(U$2=(o=U$2)||s.memoizedState!==null,Zj(i,e,s),U$2=o):Zj(i,e,s);break;default:Zj(i,e,s)}}function bk(i){var e=i.updateQueue;if(e!==null){i.updateQueue=null;var s=i.stateNode;s===null&&(s=i.stateNode=new Lj),e.forEach(function(o){var a=ck.bind(null,i,o);s.has(o)||(s.add(o),o.then(a,a))})}}function dk(i,e){var s=e.deletions;if(s!==null)for(var o=0;o<s.length;o++){var a=s[o];try{var c=i,d=e,h=d;e:for(;h!==null;){switch(h.tag){case 5:X$2=h.stateNode,Yj=!1;break e;case 3:X$2=h.stateNode.containerInfo,Yj=!0;break e;case 4:X$2=h.stateNode.containerInfo,Yj=!0;break e}h=h.return}if(X$2===null)throw Error(p$2(160));ak(c,d,a),X$2=null,Yj=!1;var g=a.alternate;g!==null&&(g.return=null),a.return=null}catch(_){W$2(a,e,_)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ek(e,i),e=e.sibling}function ek(i,e){var s=i.alternate,o=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(dk(e,i),fk(i),o&4){try{Qj(3,i,i.return),Rj(3,i)}catch($t){W$2(i,i.return,$t)}try{Qj(5,i,i.return)}catch($t){W$2(i,i.return,$t)}}break;case 1:dk(e,i),fk(i),o&512&&s!==null&&Mj(s,s.return);break;case 5:if(dk(e,i),fk(i),o&512&&s!==null&&Mj(s,s.return),i.flags&32){var a=i.stateNode;try{ob$1(a,"")}catch($t){W$2(i,i.return,$t)}}if(o&4&&(a=i.stateNode,a!=null)){var c=i.memoizedProps,d=s!==null?s.memoizedProps:c,h=i.type,g=i.updateQueue;if(i.updateQueue=null,g!==null)try{h==="input"&&c.type==="radio"&&c.name!=null&&ab$1(a,c),vb$1(h,d);var _=vb$1(h,c);for(d=0;d<g.length;d+=2){var b=g[d],et=g[d+1];b==="style"?sb$1(a,et):b==="dangerouslySetInnerHTML"?nb$1(a,et):b==="children"?ob$1(a,et):ta$2(a,b,et,_)}switch(h){case"input":bb$1(a,c);break;case"textarea":ib$1(a,c);break;case"select":var ot=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var gt=c.value;gt!=null?fb$1(a,!!c.multiple,gt,!1):ot!==!!c.multiple&&(c.defaultValue!=null?fb$1(a,!!c.multiple,c.defaultValue,!0):fb$1(a,!!c.multiple,c.multiple?[]:"",!1))}a[Pf]=c}catch($t){W$2(i,i.return,$t)}}break;case 6:if(dk(e,i),fk(i),o&4){if(i.stateNode===null)throw Error(p$2(162));a=i.stateNode,c=i.memoizedProps;try{a.nodeValue=c}catch($t){W$2(i,i.return,$t)}}break;case 3:if(dk(e,i),fk(i),o&4&&s!==null&&s.memoizedState.isDehydrated)try{bd$1(e.containerInfo)}catch($t){W$2(i,i.return,$t)}break;case 4:dk(e,i),fk(i);break;case 13:dk(e,i),fk(i),a=i.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(gk=B$2())),o&4&&bk(i);break;case 22:if(b=s!==null&&s.memoizedState!==null,i.mode&1?(U$2=(_=U$2)||b,dk(e,i),U$2=_):dk(e,i),fk(i),o&8192){if(_=i.memoizedState!==null,(i.stateNode.isHidden=_)&&!b&&(i.mode&1)!==0)for(V$1=i,b=i.child;b!==null;){for(et=V$1=b;V$1!==null;){switch(ot=V$1,gt=ot.child,ot.tag){case 0:case 11:case 14:case 15:Qj(4,ot,ot.return);break;case 1:Mj(ot,ot.return);var _t=ot.stateNode;if(typeof _t.componentWillUnmount=="function"){o=ot,s=ot.return;try{e=o,_t.props=e.memoizedProps,_t.state=e.memoizedState,_t.componentWillUnmount()}catch($t){W$2(o,s,$t)}}break;case 5:Mj(ot,ot.return);break;case 22:if(ot.memoizedState!==null){hk(et);continue}}gt!==null?(gt.return=ot,V$1=gt):hk(et)}b=b.sibling}e:for(b=null,et=i;;){if(et.tag===5){if(b===null){b=et;try{a=et.stateNode,_?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(h=et.stateNode,g=et.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,h.style.display=rb$1("display",d))}catch($t){W$2(i,i.return,$t)}}}else if(et.tag===6){if(b===null)try{et.stateNode.nodeValue=_?"":et.memoizedProps}catch($t){W$2(i,i.return,$t)}}else if((et.tag!==22&&et.tag!==23||et.memoizedState===null||et===i)&&et.child!==null){et.child.return=et,et=et.child;continue}if(et===i)break e;for(;et.sibling===null;){if(et.return===null||et.return===i)break e;b===et&&(b=null),et=et.return}b===et&&(b=null),et.sibling.return=et.return,et=et.sibling}}break;case 19:dk(e,i),fk(i),o&4&&bk(i);break;case 21:break;default:dk(e,i),fk(i)}}function fk(i){var e=i.flags;if(e&2){try{e:{for(var s=i.return;s!==null;){if(Uj(s)){var o=s;break e}s=s.return}throw Error(p$2(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(ob$1(a,""),o.flags&=-33);var c=Vj(i);Xj(i,c,a);break;case 3:case 4:var d=o.stateNode.containerInfo,h=Vj(i);Wj(i,h,d);break;default:throw Error(p$2(161))}}catch(g){W$2(i,i.return,g)}i.flags&=-3}e&4096&&(i.flags&=-4097)}function ik(i,e,s){V$1=i,jk(i)}function jk(i,e,s){for(var o=(i.mode&1)!==0;V$1!==null;){var a=V$1,c=a.child;if(a.tag===22&&o){var d=a.memoizedState!==null||Kj;if(!d){var h=a.alternate,g=h!==null&&h.memoizedState!==null||U$2;h=Kj;var _=U$2;if(Kj=d,(U$2=g)&&!_)for(V$1=a;V$1!==null;)d=V$1,g=d.child,d.tag===22&&d.memoizedState!==null?kk(a):g!==null?(g.return=d,V$1=g):kk(a);for(;c!==null;)V$1=c,jk(c),c=c.sibling;V$1=a,Kj=h,U$2=_}lk(i)}else(a.subtreeFlags&8772)!==0&&c!==null?(c.return=a,V$1=c):lk(i)}}function lk(i){for(;V$1!==null;){var e=V$1;if((e.flags&8772)!==0){var s=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:U$2||Rj(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!U$2)if(s===null)o.componentDidMount();else{var a=e.elementType===e.type?s.memoizedProps:Lg(e.type,s.memoizedProps);o.componentDidUpdate(a,s.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var c=e.updateQueue;c!==null&&ih$1(e,c,o);break;case 3:var d=e.updateQueue;if(d!==null){if(s=null,e.child!==null)switch(e.child.tag){case 5:s=e.child.stateNode;break;case 1:s=e.child.stateNode}ih$1(e,d,s)}break;case 5:var h=e.stateNode;if(s===null&&e.flags&4){s=h;var g=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&s.focus();break;case"img":g.src&&(s.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var _=e.alternate;if(_!==null){var b=_.memoizedState;if(b!==null){var et=b.dehydrated;et!==null&&bd$1(et)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p$2(163))}U$2||e.flags&512&&Sj(e)}catch(ot){W$2(e,e.return,ot)}}if(e===i){V$1=null;break}if(s=e.sibling,s!==null){s.return=e.return,V$1=s;break}V$1=e.return}}function hk(i){for(;V$1!==null;){var e=V$1;if(e===i){V$1=null;break}var s=e.sibling;if(s!==null){s.return=e.return,V$1=s;break}V$1=e.return}}function kk(i){for(;V$1!==null;){var e=V$1;try{switch(e.tag){case 0:case 11:case 15:var s=e.return;try{Rj(4,e)}catch(g){W$2(e,s,g)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var a=e.return;try{o.componentDidMount()}catch(g){W$2(e,a,g)}}var c=e.return;try{Sj(e)}catch(g){W$2(e,c,g)}break;case 5:var d=e.return;try{Sj(e)}catch(g){W$2(e,d,g)}}}catch(g){W$2(e,e.return,g)}if(e===i){V$1=null;break}var h=e.sibling;if(h!==null){h.return=e.return,V$1=h;break}V$1=e.return}}var mk=Math.ceil,nk=ua$1.ReactCurrentDispatcher,ok=ua$1.ReactCurrentOwner,pk=ua$1.ReactCurrentBatchConfig,K$2=0,R$1=null,Y$2=null,Z$2=0,gj=0,fj=Uf(0),T$1=0,qk=null,hh$1=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=1/0,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L$2(){return(K$2&6)!==0?B$2():Bk!==-1?Bk:Bk=B$2()}function lh$1(i){return(i.mode&1)===0?1:(K$2&2)!==0&&Z$2!==0?Z$2&-Z$2:Kg.transition!==null?(Ck===0&&(Ck=yc$1()),Ck):(i=C$2,i!==0||(i=window.event,i=i===void 0?16:jd$1(i.type)),i)}function mh(i,e,s,o){if(50<zk)throw zk=0,Ak=null,Error(p$2(185));Ac$2(i,s,o),((K$2&2)===0||i!==R$1)&&(i===R$1&&((K$2&2)===0&&(rk|=s),T$1===4&&Dk(i,Z$2)),Ek(i,o),s===1&&K$2===0&&(e.mode&1)===0&&(Hj=B$2()+500,fg&&jg()))}function Ek(i,e){var s=i.callbackNode;wc$2(i,e);var o=uc$2(i,i===R$1?Z$2:0);if(o===0)s!==null&&bc$2(s),i.callbackNode=null,i.callbackPriority=0;else if(e=o&-o,i.callbackPriority!==e){if(s!=null&&bc$2(s),e===1)i.tag===0?ig(Fk.bind(null,i)):hg(Fk.bind(null,i)),Jf(function(){(K$2&6)===0&&jg()}),s=null;else{switch(Dc$1(o)){case 1:s=fc$2;break;case 4:s=gc$2;break;case 16:s=hc$2;break;case 536870912:s=jc$2;break;default:s=hc$2}s=Gk(s,Hk.bind(null,i))}i.callbackPriority=e,i.callbackNode=s}}function Hk(i,e){if(Bk=-1,Ck=0,(K$2&6)!==0)throw Error(p$2(327));var s=i.callbackNode;if(Ik()&&i.callbackNode!==s)return null;var o=uc$2(i,i===R$1?Z$2:0);if(o===0)return null;if((o&30)!==0||(o&i.expiredLanes)!==0||e)e=Jk(i,o);else{e=o;var a=K$2;K$2|=2;var c=Kk();(R$1!==i||Z$2!==e)&&(vk=null,Hj=B$2()+500,Lk(i,e));do try{Mk();break}catch(h){Nk(i,h)}while(1);Qg(),nk.current=c,K$2=a,Y$2!==null?e=0:(R$1=null,Z$2=0,e=T$1)}if(e!==0){if(e===2&&(a=xc$1(i),a!==0&&(o=a,e=Ok(i,a))),e===1)throw s=qk,Lk(i,0),Dk(i,o),Ek(i,B$2()),s;if(e===6)Dk(i,o);else{if(a=i.current.alternate,(o&30)===0&&!Pk(a)&&(e=Jk(i,o),e===2&&(c=xc$1(i),c!==0&&(o=c,e=Ok(i,c))),e===1))throw s=qk,Lk(i,0),Dk(i,o),Ek(i,B$2()),s;switch(i.finishedWork=a,i.finishedLanes=o,e){case 0:case 1:throw Error(p$2(345));case 2:Qk(i,uk,vk);break;case 3:if(Dk(i,o),(o&130023424)===o&&(e=gk+500-B$2(),10<e)){if(uc$2(i,0)!==0)break;if(a=i.suspendedLanes,(a&o)!==o){L$2(),i.pingedLanes|=i.suspendedLanes&a;break}i.timeoutHandle=Ff(Qk.bind(null,i,uk,vk),e);break}Qk(i,uk,vk);break;case 4:if(Dk(i,o),(o&4194240)===o)break;for(e=i.eventTimes,a=-1;0<o;){var d=31-oc$2(o);c=1<<d,d=e[d],d>a&&(a=d),o&=~c}if(o=a,o=B$2()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*mk(o/1960))-o,10<o){i.timeoutHandle=Ff(Qk.bind(null,i,uk,vk),o);break}Qk(i,uk,vk);break;case 5:Qk(i,uk,vk);break;default:throw Error(p$2(329))}}}return Ek(i,B$2()),i.callbackNode===s?Hk.bind(null,i):null}function Ok(i,e){var s=tk;return i.current.memoizedState.isDehydrated&&(Lk(i,e).flags|=256),i=Jk(i,e),i!==2&&(e=uk,uk=s,e!==null&&Gj(e)),i}function Gj(i){uk===null?uk=i:uk.push.apply(uk,i)}function Pk(i){for(var e=i;;){if(e.flags&16384){var s=e.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var o=0;o<s.length;o++){var a=s[o],c=a.getSnapshot;a=a.value;try{if(!He$1(c(),a))return!1}catch{return!1}}}if(s=e.child,e.subtreeFlags&16384&&s!==null)s.return=e,e=s;else{if(e===i)break;for(;e.sibling===null;){if(e.return===null||e.return===i)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dk(i,e){for(e&=~sk,e&=~rk,i.suspendedLanes|=e,i.pingedLanes&=~e,i=i.expirationTimes;0<e;){var s=31-oc$2(e),o=1<<s;i[s]=-1,e&=~o}}function Fk(i){if((K$2&6)!==0)throw Error(p$2(327));Ik();var e=uc$2(i,0);if((e&1)===0)return Ek(i,B$2()),null;var s=Jk(i,e);if(i.tag!==0&&s===2){var o=xc$1(i);o!==0&&(e=o,s=Ok(i,o))}if(s===1)throw s=qk,Lk(i,0),Dk(i,e),Ek(i,B$2()),s;if(s===6)throw Error(p$2(345));return i.finishedWork=i.current.alternate,i.finishedLanes=e,Qk(i,uk,vk),Ek(i,B$2()),null}function Rk(i,e){var s=K$2;K$2|=1;try{return i(e)}finally{K$2=s,K$2===0&&(Hj=B$2()+500,fg&&jg())}}function Sk(i){xk!==null&&xk.tag===0&&(K$2&6)===0&&Ik();var e=K$2;K$2|=1;var s=pk.transition,o=C$2;try{if(pk.transition=null,C$2=1,i)return i()}finally{C$2=o,pk.transition=s,K$2=e,(K$2&6)===0&&jg()}}function Ij(){gj=fj.current,E$1(fj)}function Lk(i,e){i.finishedWork=null,i.finishedLanes=0;var s=i.timeoutHandle;if(s!==-1&&(i.timeoutHandle=-1,Gf(s)),Y$2!==null)for(s=Y$2.return;s!==null;){var o=s;switch(wg(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&$f();break;case 3:Jh(),E$1(Wf),E$1(H$1),Oh$1();break;case 5:Lh(o);break;case 4:Jh();break;case 13:E$1(M$1);break;case 19:E$1(M$1);break;case 10:Rg(o.type._context);break;case 22:case 23:Ij()}s=s.return}if(R$1=i,Y$2=i=wh(i.current,null),Z$2=gj=e,T$1=0,qk=null,sk=rk=hh$1=0,uk=tk=null,Wg!==null){for(e=0;e<Wg.length;e++)if(s=Wg[e],o=s.interleaved,o!==null){s.interleaved=null;var a=o.next,c=s.pending;if(c!==null){var d=c.next;c.next=a,o.next=d}s.pending=o}Wg=null}return i}function Nk(i,e){do{var s=Y$2;try{if(Qg(),Ph$1.current=ai$1,Sh$1){for(var o=N$2.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Sh$1=!1}if(Rh$1=0,P$1=O$2=N$2=null,Th=!1,Uh$1=0,ok.current=null,s===null||s.return===null){T$1=1,qk=e,Y$2=null;break}e:{var c=i,d=s.return,h=s,g=e;if(e=Z$2,h.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var _=g,b=h,et=b.tag;if((b.mode&1)===0&&(et===0||et===11||et===15)){var ot=b.alternate;ot?(b.updateQueue=ot.updateQueue,b.memoizedState=ot.memoizedState,b.lanes=ot.lanes):(b.updateQueue=null,b.memoizedState=null)}var gt=Vi(d);if(gt!==null){gt.flags&=-257,Wi(gt,d,h,c,e),gt.mode&1&&Ti(c,_,e),e=gt,g=_;var _t=e.updateQueue;if(_t===null){var $t=new Set;$t.add(g),e.updateQueue=$t}else _t.add(g);break e}else{if((e&1)===0){Ti(c,_,e),uj();break e}g=Error(p$2(426))}}else if(I$1&&h.mode&1){var St=Vi(d);if(St!==null){(St.flags&65536)===0&&(St.flags|=256),Wi(St,d,h,c,e),Jg(Ki$1(g,h));break e}}c=g=Ki$1(g,h),T$1!==4&&(T$1=2),tk===null?tk=[c]:tk.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,e&=-e,c.lanes|=e;var mt=Oi(c,g,e);fh$1(c,mt);break e;case 1:h=g;var pt=c.type,yt=c.stateNode;if((c.flags&128)===0&&(typeof pt.getDerivedStateFromError=="function"||yt!==null&&typeof yt.componentDidCatch=="function"&&(Si===null||!Si.has(yt)))){c.flags|=65536,e&=-e,c.lanes|=e;var wt=Ri(c,h,e);fh$1(c,wt);break e}}c=c.return}while(c!==null)}Tk(s)}catch(It){e=It,Y$2===s&&s!==null&&(Y$2=s=s.return);continue}break}while(1)}function Kk(){var i=nk.current;return nk.current=ai$1,i===null?ai$1:i}function uj(){(T$1===0||T$1===3||T$1===2)&&(T$1=4),R$1===null||(hh$1&268435455)===0&&(rk&268435455)===0||Dk(R$1,Z$2)}function Jk(i,e){var s=K$2;K$2|=2;var o=Kk();(R$1!==i||Z$2!==e)&&(vk=null,Lk(i,e));do try{Uk();break}catch(a){Nk(i,a)}while(1);if(Qg(),K$2=s,nk.current=o,Y$2!==null)throw Error(p$2(261));return R$1=null,Z$2=0,T$1}function Uk(){for(;Y$2!==null;)Vk(Y$2)}function Mk(){for(;Y$2!==null&&!cc$2();)Vk(Y$2)}function Vk(i){var e=Wk(i.alternate,i,gj);i.memoizedProps=i.pendingProps,e===null?Tk(i):Y$2=e,ok.current=null}function Tk(i){var e=i;do{var s=e.alternate;if(i=e.return,(e.flags&32768)===0){if(s=Fj(s,e,gj),s!==null){Y$2=s;return}}else{if(s=Jj(s,e),s!==null){s.flags&=32767,Y$2=s;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{T$1=6,Y$2=null;return}}if(e=e.sibling,e!==null){Y$2=e;return}Y$2=e=i}while(e!==null);T$1===0&&(T$1=5)}function Qk(i,e,s){var o=C$2,a=pk.transition;try{pk.transition=null,C$2=1,Xk(i,e,s,o)}finally{pk.transition=a,C$2=o}return null}function Xk(i,e,s,o){do Ik();while(xk!==null);if((K$2&6)!==0)throw Error(p$2(327));s=i.finishedWork;var a=i.finishedLanes;if(s===null)return null;if(i.finishedWork=null,i.finishedLanes=0,s===i.current)throw Error(p$2(177));i.callbackNode=null,i.callbackPriority=0;var c=s.lanes|s.childLanes;if(Bc$2(i,c),i===R$1&&(Y$2=R$1=null,Z$2=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||wk||(wk=!0,Gk(hc$2,function(){return Ik(),null})),c=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||c){c=pk.transition,pk.transition=null;var d=C$2;C$2=1;var h=K$2;K$2|=4,ok.current=null,Pj(i,s),ek(s,i),Oe$1(Df),dd$1=!!Cf,Df=Cf=null,i.current=s,ik(s),dc$2(),K$2=h,C$2=d,pk.transition=c}else i.current=s;if(wk&&(wk=!1,xk=i,yk=a),c=i.pendingLanes,c===0&&(Si=null),mc$2(s.stateNode),Ek(i,B$2()),e!==null)for(o=i.onRecoverableError,s=0;s<e.length;s++)a=e[s],o(a.value,{componentStack:a.stack,digest:a.digest});if(Pi)throw Pi=!1,i=Qi,Qi=null,i;return(yk&1)!==0&&i.tag!==0&&Ik(),c=i.pendingLanes,(c&1)!==0?i===Ak?zk++:(zk=0,Ak=i):zk=0,jg(),null}function Ik(){if(xk!==null){var i=Dc$1(yk),e=pk.transition,s=C$2;try{if(pk.transition=null,C$2=16>i?16:i,xk===null)var o=!1;else{if(i=xk,xk=null,yk=0,(K$2&6)!==0)throw Error(p$2(331));var a=K$2;for(K$2|=4,V$1=i.current;V$1!==null;){var c=V$1,d=c.child;if((V$1.flags&16)!==0){var h=c.deletions;if(h!==null){for(var g=0;g<h.length;g++){var _=h[g];for(V$1=_;V$1!==null;){var b=V$1;switch(b.tag){case 0:case 11:case 15:Qj(8,b,c)}var et=b.child;if(et!==null)et.return=b,V$1=et;else for(;V$1!==null;){b=V$1;var ot=b.sibling,gt=b.return;if(Tj(b),b===_){V$1=null;break}if(ot!==null){ot.return=gt,V$1=ot;break}V$1=gt}}}var _t=c.alternate;if(_t!==null){var $t=_t.child;if($t!==null){_t.child=null;do{var St=$t.sibling;$t.sibling=null,$t=St}while($t!==null)}}V$1=c}}if((c.subtreeFlags&2064)!==0&&d!==null)d.return=c,V$1=d;else e:for(;V$1!==null;){if(c=V$1,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:Qj(9,c,c.return)}var mt=c.sibling;if(mt!==null){mt.return=c.return,V$1=mt;break e}V$1=c.return}}var pt=i.current;for(V$1=pt;V$1!==null;){d=V$1;var yt=d.child;if((d.subtreeFlags&2064)!==0&&yt!==null)yt.return=d,V$1=yt;else e:for(d=pt;V$1!==null;){if(h=V$1,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(It){W$2(h,h.return,It)}if(h===d){V$1=null;break e}var wt=h.sibling;if(wt!==null){wt.return=h.return,V$1=wt;break e}V$1=h.return}}if(K$2=a,jg(),lc$2&&typeof lc$2.onPostCommitFiberRoot=="function")try{lc$2.onPostCommitFiberRoot(kc$1,i)}catch{}o=!0}return o}finally{C$2=s,pk.transition=e}}return!1}function Yk(i,e,s){e=Ki$1(s,e),e=Oi(i,e,1),i=dh$1(i,e,1),e=L$2(),i!==null&&(Ac$2(i,1,e),Ek(i,e))}function W$2(i,e,s){if(i.tag===3)Yk(i,i,s);else for(;e!==null;){if(e.tag===3){Yk(e,i,s);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Si===null||!Si.has(o))){i=Ki$1(s,i),i=Ri(e,i,1),e=dh$1(e,i,1),i=L$2(),e!==null&&(Ac$2(e,1,i),Ek(e,i));break}}e=e.return}}function Ui$1(i,e,s){var o=i.pingCache;o!==null&&o.delete(e),e=L$2(),i.pingedLanes|=i.suspendedLanes&s,R$1===i&&(Z$2&s)===s&&(T$1===4||T$1===3&&(Z$2&130023424)===Z$2&&500>B$2()-gk?Lk(i,0):sk|=s),Ek(i,e)}function Zk(i,e){e===0&&((i.mode&1)===0?e=1:(e=sc$2,sc$2<<=1,(sc$2&130023424)===0&&(sc$2=4194304)));var s=L$2();i=Zg(i,e),i!==null&&(Ac$2(i,e,s),Ek(i,s))}function vj(i){var e=i.memoizedState,s=0;e!==null&&(s=e.retryLane),Zk(i,s)}function ck(i,e){var s=0;switch(i.tag){case 13:var o=i.stateNode,a=i.memoizedState;a!==null&&(s=a.retryLane);break;case 19:o=i.stateNode;break;default:throw Error(p$2(314))}o!==null&&o.delete(e),Zk(i,s)}var Wk;Wk=function(i,e,s){if(i!==null)if(i.memoizedProps!==e.pendingProps||Wf.current)Ug=!0;else{if((i.lanes&s)===0&&(e.flags&128)===0)return Ug=!1,zj(i,e,s);Ug=(i.flags&131072)!==0}else Ug=!1,I$1&&(e.flags&1048576)!==0&&ug(e,ng,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;jj(i,e),i=e.pendingProps;var a=Yf(e,H$1.current);Tg(e,s),a=Xh(null,e,o,i,a,s);var c=bi();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zf(o)?(c=!0,cg(e)):c=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ah$1(e),a.updater=nh,e.stateNode=a,a._reactInternals=e,rh$1(e,o,i,s),e=kj(null,e,o,!0,c,s)):(e.tag=0,I$1&&c&&vg(e),Yi(null,e,a,s),e=e.child),e;case 16:o=e.elementType;e:{switch(jj(i,e),i=e.pendingProps,a=o._init,o=a(o._payload),e.type=o,a=e.tag=$k(o),i=Lg(o,i),a){case 0:e=dj(null,e,o,i,s);break e;case 1:e=ij(null,e,o,i,s);break e;case 11:e=Zi(null,e,o,i,s);break e;case 14:e=aj(null,e,o,Lg(o.type,i),s);break e}throw Error(p$2(306,o,""))}return e;case 0:return o=e.type,a=e.pendingProps,a=e.elementType===o?a:Lg(o,a),dj(i,e,o,a,s);case 1:return o=e.type,a=e.pendingProps,a=e.elementType===o?a:Lg(o,a),ij(i,e,o,a,s);case 3:e:{if(lj(e),i===null)throw Error(p$2(387));o=e.pendingProps,c=e.memoizedState,a=c.element,bh$1(i,e),gh(e,o,null,s);var d=e.memoizedState;if(o=d.element,c.isDehydrated)if(c={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){a=Ki$1(Error(p$2(423)),e),e=mj(i,e,o,s,a);break e}else if(o!==a){a=Ki$1(Error(p$2(424)),e),e=mj(i,e,o,s,a);break e}else for(yg=Lf(e.stateNode.containerInfo.firstChild),xg=e,I$1=!0,zg=null,s=Ch$1(e,null,o,s),e.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ig(),o===a){e=$i(i,e,s);break e}Yi(i,e,o,s)}e=e.child}return e;case 5:return Kh(e),i===null&&Eg(e),o=e.type,a=e.pendingProps,c=i!==null?i.memoizedProps:null,d=a.children,Ef(o,a)?d=null:c!==null&&Ef(o,c)&&(e.flags|=32),hj(i,e),Yi(i,e,d,s),e.child;case 6:return i===null&&Eg(e),null;case 13:return pj(i,e,s);case 4:return Ih(e,e.stateNode.containerInfo),o=e.pendingProps,i===null?e.child=Bh$1(e,null,o,s):Yi(i,e,o,s),e.child;case 11:return o=e.type,a=e.pendingProps,a=e.elementType===o?a:Lg(o,a),Zi(i,e,o,a,s);case 7:return Yi(i,e,e.pendingProps,s),e.child;case 8:return Yi(i,e,e.pendingProps.children,s),e.child;case 12:return Yi(i,e,e.pendingProps.children,s),e.child;case 10:e:{if(o=e.type._context,a=e.pendingProps,c=e.memoizedProps,d=a.value,G$1(Mg,o._currentValue),o._currentValue=d,c!==null)if(He$1(c.value,d)){if(c.children===a.children&&!Wf.current){e=$i(i,e,s);break e}}else for(c=e.child,c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){d=c.child;for(var g=h.firstContext;g!==null;){if(g.context===o){if(c.tag===1){g=ch(-1,s&-s),g.tag=2;var _=c.updateQueue;if(_!==null){_=_.shared;var b=_.pending;b===null?g.next=g:(g.next=b.next,b.next=g),_.pending=g}}c.lanes|=s,g=c.alternate,g!==null&&(g.lanes|=s),Sg(c.return,s,e),h.lanes|=s;break}g=g.next}}else if(c.tag===10)d=c.type===e.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(p$2(341));d.lanes|=s,h=d.alternate,h!==null&&(h.lanes|=s),Sg(d,s,e),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===e){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}Yi(i,e,a.children,s),e=e.child}return e;case 9:return a=e.type,o=e.pendingProps.children,Tg(e,s),a=Vg(a),o=o(a),e.flags|=1,Yi(i,e,o,s),e.child;case 14:return o=e.type,a=Lg(o,e.pendingProps),a=Lg(o.type,a),aj(i,e,o,a,s);case 15:return cj(i,e,e.type,e.pendingProps,s);case 17:return o=e.type,a=e.pendingProps,a=e.elementType===o?a:Lg(o,a),jj(i,e),e.tag=1,Zf(o)?(i=!0,cg(e)):i=!1,Tg(e,s),ph(e,o,a),rh$1(e,o,a,s),kj(null,e,o,!0,i,s);case 19:return yj(i,e,s);case 22:return ej(i,e,s)}throw Error(p$2(156,e.tag))};function Gk(i,e){return ac$2(i,e)}function al$1(i,e,s,o){this.tag=i,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(i,e,s,o){return new al$1(i,e,s,o)}function bj(i){return i=i.prototype,!(!i||!i.isReactComponent)}function $k(i){if(typeof i=="function")return bj(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Da)return 11;if(i===Ga$1)return 14}return 2}function wh(i,e){var s=i.alternate;return s===null?(s=Bg(i.tag,e,i.key,i.mode),s.elementType=i.elementType,s.type=i.type,s.stateNode=i.stateNode,s.alternate=i,i.alternate=s):(s.pendingProps=e,s.type=i.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=i.flags&14680064,s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},s.sibling=i.sibling,s.index=i.index,s.ref=i.ref,s}function yh(i,e,s,o,a,c){var d=2;if(o=i,typeof i=="function")bj(i)&&(d=1);else if(typeof i=="string")d=5;else e:switch(i){case ya$2:return Ah$1(s.children,a,c,e);case za$1:d=8,a|=8;break;case Aa$1:return i=Bg(12,s,e,a|2),i.elementType=Aa$1,i.lanes=c,i;case Ea$1:return i=Bg(13,s,e,a),i.elementType=Ea$1,i.lanes=c,i;case Fa$1:return i=Bg(19,s,e,a),i.elementType=Fa$1,i.lanes=c,i;case Ia$1:return qj(s,a,c,e);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Ba$1:d=10;break e;case Ca$1:d=9;break e;case Da:d=11;break e;case Ga$1:d=14;break e;case Ha$1:d=16,o=null;break e}throw Error(p$2(130,i==null?i:typeof i,""))}return e=Bg(d,s,e,a),e.elementType=i,e.type=o,e.lanes=c,e}function Ah$1(i,e,s,o){return i=Bg(7,i,o,e),i.lanes=s,i}function qj(i,e,s,o){return i=Bg(22,i,o,e),i.elementType=Ia$1,i.lanes=s,i.stateNode={isHidden:!1},i}function xh$1(i,e,s){return i=Bg(6,i,null,e),i.lanes=s,i}function zh(i,e,s){return e=Bg(4,i.children!==null?i.children:[],i.key,e),e.lanes=s,e.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},e}function bl(i,e,s,o,a){this.tag=e,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc$1(0),this.expirationTimes=zc$1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc$1(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function cl$1(i,e,s,o,a,c,d,h,g){return i=new bl(i,e,s,h,g),e===1?(e=1,c===!0&&(e|=8)):e=0,c=Bg(3,null,null,e),i.current=c,c.stateNode=i,c.memoizedState={element:o,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah$1(c),i}function dl$1(i,e,s){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa$1,key:o==null?null:""+o,children:i,containerInfo:e,implementation:s}}function el(i){if(!i)return Vf;i=i._reactInternals;e:{if(Vb$1(i)!==i||i.tag!==1)throw Error(p$2(170));var e=i;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zf(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(p$2(171))}if(i.tag===1){var s=i.type;if(Zf(s))return bg(i,s,e)}return e}function fl(i,e,s,o,a,c,d,h,g){return i=cl$1(s,o,!0,i,a,c,d,h,g),i.context=el(null),s=i.current,o=L$2(),a=lh$1(s),c=ch(o,a),c.callback=e!=null?e:null,dh$1(s,c,a),i.current.lanes=a,Ac$2(i,a,o),Ek(i,o),i}function gl(i,e,s,o){var a=e.current,c=L$2(),d=lh$1(a);return s=el(s),e.context===null?e.context=s:e.pendingContext=s,e=ch(c,d),e.payload={element:i},o=o===void 0?null:o,o!==null&&(e.callback=o),i=dh$1(a,e,d),i!==null&&(mh(i,a,d,c),eh$1(i,a,d)),d}function hl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function il(i,e){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var s=i.retryLane;i.retryLane=s!==0&&s<e?s:e}}function jl(i,e){il(i,e),(i=i.alternate)&&il(i,e)}function kl(){return null}var ll=typeof reportError=="function"?reportError:function(i){console.error(i)};function ml(i){this._internalRoot=i}nl.prototype.render=ml.prototype.render=function(i){var e=this._internalRoot;if(e===null)throw Error(p$2(409));gl(i,e,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var e=i.containerInfo;Sk(function(){gl(null,i,null,null)}),e[uf]=null}};function nl(i){this._internalRoot=i}nl.prototype.unstable_scheduleHydration=function(i){if(i){var e=Hc$1();i={blockedOn:null,target:i,priority:e};for(var s=0;s<Qc$1.length&&e!==0&&e<Qc$1[s].priority;s++);Qc$1.splice(s,0,i),s===0&&Vc$2(i)}};function ol(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function pl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ql(){}function rl(i,e,s,o,a){if(a){if(typeof o=="function"){var c=o;o=function(){var _=hl(d);c.call(_)}}var d=fl(e,o,i,0,null,!1,!1,"",ql);return i._reactRootContainer=d,i[uf]=d.current,sf(i.nodeType===8?i.parentNode:i),Sk(),d}for(;a=i.lastChild;)i.removeChild(a);if(typeof o=="function"){var h=o;o=function(){var _=hl(g);h.call(_)}}var g=cl$1(i,0,!1,null,null,!1,!1,"",ql);return i._reactRootContainer=g,i[uf]=g.current,sf(i.nodeType===8?i.parentNode:i),Sk(function(){gl(e,g,s,o)}),g}function sl(i,e,s,o,a){var c=s._reactRootContainer;if(c){var d=c;if(typeof a=="function"){var h=a;a=function(){var g=hl(d);h.call(g)}}gl(e,d,i,a)}else d=rl(s,e,i,a,o);return hl(d)}Ec$2=function(i){switch(i.tag){case 3:var e=i.stateNode;if(e.current.memoizedState.isDehydrated){var s=tc$1(e.pendingLanes);s!==0&&(Cc$1(e,s|1),Ek(e,B$2()),(K$2&6)===0&&(Hj=B$2()+500,jg()))}break;case 13:Sk(function(){var o=Zg(i,1);if(o!==null){var a=L$2();mh(o,i,1,a)}}),jl(i,1)}};Fc$1=function(i){if(i.tag===13){var e=Zg(i,134217728);if(e!==null){var s=L$2();mh(e,i,134217728,s)}jl(i,134217728)}};Gc$2=function(i){if(i.tag===13){var e=lh$1(i),s=Zg(i,e);if(s!==null){var o=L$2();mh(s,i,e,o)}jl(i,e)}};Hc$1=function(){return C$2};Ic$2=function(i,e){var s=C$2;try{return C$2=i,e()}finally{C$2=s}};yb$1=function(i,e,s){switch(e){case"input":if(bb$1(i,s),e=s.name,s.type==="radio"&&e!=null){for(s=i;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<s.length;e++){var o=s[e];if(o!==i&&o.form===i.form){var a=Db$1(o);if(!a)throw Error(p$2(90));Wa$1(o),bb$1(o,a)}}}break;case"textarea":ib$1(i,s);break;case"select":e=s.value,e!=null&&fb$1(i,!!s.multiple,e,!1)}};Gb$1=Rk;Hb$1=Sk;var tl={usingClientEntryPoint:!1,Events:[Cb$1,ue$1,Db$1,Eb$1,Fb$1,Rk]},ul={findFiberByHostInstance:Wc$1,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vl$1={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua$1.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Zb$1(i),i===null?null:i.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc$1=wl.inject(vl$1),lc$2=wl}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;reactDom_production_min.createPortal=function(i,e){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ol(e))throw Error(p$2(200));return dl$1(i,e,null,s)};reactDom_production_min.createRoot=function(i,e){if(!ol(i))throw Error(p$2(299));var s=!1,o="",a=ll;return e!=null&&(e.unstable_strictMode===!0&&(s=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=cl$1(i,1,!1,null,null,s,!1,o,a),i[uf]=e.current,sf(i.nodeType===8?i.parentNode:i),new ml(e)};reactDom_production_min.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var e=i._reactInternals;if(e===void 0)throw typeof i.render=="function"?Error(p$2(188)):(i=Object.keys(i).join(","),Error(p$2(268,i)));return i=Zb$1(e),i=i===null?null:i.stateNode,i};reactDom_production_min.flushSync=function(i){return Sk(i)};reactDom_production_min.hydrate=function(i,e,s){if(!pl(e))throw Error(p$2(200));return sl(null,i,e,!0,s)};reactDom_production_min.hydrateRoot=function(i,e,s){if(!ol(i))throw Error(p$2(405));var o=s!=null&&s.hydratedSources||null,a=!1,c="",d=ll;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),e=fl(e,null,i,1,s!=null?s:null,a,!1,c,d),i[uf]=e.current,sf(i),o)for(i=0;i<o.length;i++)s=o[i],a=s._getVersion,a=a(s._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[s,a]:e.mutableSourceEagerHydrationData.push(s,a);return new nl(e)};reactDom_production_min.render=function(i,e,s){if(!pl(e))throw Error(p$2(200));return sl(null,i,e,!1,s)};reactDom_production_min.unmountComponentAtNode=function(i){if(!pl(i))throw Error(p$2(40));return i._reactRootContainer?(Sk(function(){sl(null,null,i,!1,function(){i._reactRootContainer=null,i[uf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Rk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(i,e,s,o){if(!pl(s))throw Error(p$2(200));if(i==null||i._reactInternals===void 0)throw Error(p$2(38));return sl(i,e,s,!1,o)};reactDom_production_min.version="18.2.0-next-9e3b772b8-20220608";(function(i){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(s){console.error(s)}}e(),i.exports=reactDom_production_min})(reactDom);var m$1=reactDom.exports;client.createRoot=m$1.createRoot,client.hydrateRoot=m$1.hydrateRoot;/**
 * @remix-run/router v1.0.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(i[o]=s[o])}return i},_extends$1.apply(this,arguments)}var Action;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Action||(Action={}));const PopStateEventType="popstate";function createBrowserHistory(i){i===void 0&&(i={});function e(o,a){var c,d;let{pathname:h,search:g,hash:_}=o.location;return createLocation("",{pathname:h,search:g,hash:_},((c=a.state)==null?void 0:c.usr)||null,((d=a.state)==null?void 0:d.key)||"default")}function s(o,a){return typeof a=="string"?a:createPath(a)}return getUrlBasedHistory(e,s,null,i)}function createKey(){return Math.random().toString(36).substr(2,8)}function getHistoryState(i){return{usr:i.state,key:i.key}}function createLocation(i,e,s,o){return s===void 0&&(s=null),_extends$1({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?parsePath(e):e,{state:s,key:(e==null?void 0:e.key)||o||createKey()})}function createPath(i){let{pathname:e="/",search:s="",hash:o=""}=i;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function parsePath(i){let e={};if(i){let s=i.indexOf("#");s>=0&&(e.hash=i.substr(s),i=i.substr(0,s));let o=i.indexOf("?");o>=0&&(e.search=i.substr(o),i=i.substr(0,o)),i&&(e.pathname=i)}return e}function getUrlBasedHistory(i,e,s,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:c=!1}=o,d=a.history,h=Action.Pop,g=null;function _(){h=Action.Pop,g&&g({action:h,location:ot.location})}function b(gt,_t){h=Action.Push;let $t=createLocation(ot.location,gt,_t);s==null||s($t,gt);let St=getHistoryState($t),mt=ot.createHref($t);try{d.pushState(St,"",mt)}catch{a.location.assign(mt)}c&&g&&g({action:h,location:$t})}function et(gt,_t){h=Action.Replace;let $t=createLocation(ot.location,gt,_t);s==null||s($t,gt);let St=getHistoryState($t),mt=ot.createHref($t);d.replaceState(St,"",mt),c&&g&&g({action:h,location:$t})}let ot={get action(){return h},get location(){return i(a,d)},listen(gt){if(g)throw new Error("A history only accepts one active listener");return a.addEventListener(PopStateEventType,_),g=gt,()=>{a.removeEventListener(PopStateEventType,_),g=null}},createHref(gt){return e(a,gt)},push:b,replace:et,go(gt){return d.go(gt)}};return ot}var ResultType;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(ResultType||(ResultType={}));function matchRoutes(i,e,s){s===void 0&&(s="/");let o=typeof e=="string"?parsePath(e):e,a=stripBasename(o.pathname||"/",s);if(a==null)return null;let c=flattenRoutes(i);rankRouteBranches(c);let d=null;for(let h=0;d==null&&h<c.length;++h)d=matchRouteBranch(c[h],a);return d}function flattenRoutes(i,e,s,o){return e===void 0&&(e=[]),s===void 0&&(s=[]),o===void 0&&(o=""),i.forEach((a,c)=>{let d={relativePath:a.path||"",caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};d.relativePath.startsWith("/")&&(invariant(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let h=joinPaths([o,d.relativePath]),g=s.concat(d);a.children&&a.children.length>0&&(invariant(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),flattenRoutes(a.children,e,g,h)),!(a.path==null&&!a.index)&&e.push({path:h,score:computeScore(h,a.index),routesMeta:g})}),e}function rankRouteBranches(i){i.sort((e,s)=>e.score!==s.score?s.score-e.score:compareIndexes(e.routesMeta.map(o=>o.childrenIndex),s.routesMeta.map(o=>o.childrenIndex)))}const paramRe=/^:\w+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=i=>i==="*";function computeScore(i,e){let s=i.split("/"),o=s.length;return s.some(isSplat)&&(o+=splatPenalty),e&&(o+=indexRouteValue),s.filter(a=>!isSplat(a)).reduce((a,c)=>a+(paramRe.test(c)?dynamicSegmentValue:c===""?emptySegmentValue:staticSegmentValue),o)}function compareIndexes(i,e){return i.length===e.length&&i.slice(0,-1).every((o,a)=>o===e[a])?i[i.length-1]-e[e.length-1]:0}function matchRouteBranch(i,e){let{routesMeta:s}=i,o={},a="/",c=[];for(let d=0;d<s.length;++d){let h=s[d],g=d===s.length-1,_=a==="/"?e:e.slice(a.length)||"/",b=matchPath({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},_);if(!b)return null;Object.assign(o,b.params);let et=h.route;c.push({params:o,pathname:joinPaths([a,b.pathname]),pathnameBase:normalizePathname(joinPaths([a,b.pathnameBase])),route:et}),b.pathnameBase!=="/"&&(a=joinPaths([a,b.pathnameBase]))}return c}function matchPath(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,o]=compilePath(i.path,i.caseSensitive,i.end),a=e.match(s);if(!a)return null;let c=a[0],d=c.replace(/(.)\/+$/,"$1"),h=a.slice(1);return{params:o.reduce((_,b,et)=>{if(b==="*"){let ot=h[et]||"";d=c.slice(0,c.length-ot.length).replace(/(.)\/+$/,"$1")}return _[b]=safelyDecodeURIComponent(h[et]||"",b),_},{}),pathname:c,pathnameBase:d,pattern:i}}function compilePath(i,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),warning(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let o=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(d,h)=>(o.push(h),"([^\\/]+)"));return i.endsWith("*")?(o.push("*"),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=s?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,e?void 0:"i"),o]}function safelyDecodeURIComponent(i,e){try{return decodeURIComponent(i)}catch(s){return warning(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+i+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+s+").")),i}}function stripBasename(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,o=i.charAt(s);return o&&o!=="/"?null:i.slice(s)||"/"}function invariant(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function warning(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function resolvePath(i,e){e===void 0&&(e="/");let{pathname:s,search:o="",hash:a=""}=typeof i=="string"?parsePath(i):i;return{pathname:s?s.startsWith("/")?s:resolvePathname(s,e):e,search:normalizeSearch(o),hash:normalizeHash(a)}}function resolvePathname(i,e){let s=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?s.length>1&&s.pop():a!=="."&&s.push(a)}),s.length>1?s.join("/"):"/"}function resolveTo(i,e,s,o){o===void 0&&(o=!1);let a=typeof i=="string"?parsePath(i):_extends$1({},i),c=i===""||a.pathname==="",d=c?"/":a.pathname,h;if(o||d==null)h=s;else{let et=e.length-1;if(d.startsWith("..")){let ot=d.split("/");for(;ot[0]==="..";)ot.shift(),et-=1;a.pathname=ot.join("/")}h=et>=0?e[et]:"/"}let g=resolvePath(a,h),_=d&&d!=="/"&&d.endsWith("/"),b=(c||d===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(_||b)&&(g.pathname+="/"),g}const joinPaths=i=>i.join("/").replace(/\/\/+/g,"/"),normalizePathname=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,normalizeHash=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;class ErrorResponse{constructor(e,s,o){this.status=e,this.statusText=s||"",this.data=o}}function isRouteErrorResponse(i){return i instanceof ErrorResponse}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=react.exports,k$2=Symbol.for("react.element"),l$1=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};function q$1(i,e,s){var o,a={},c=null,d=null;s!==void 0&&(c=""+s),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(d=e.ref);for(o in e)m.call(e,o)&&!p$1.hasOwnProperty(o)&&(a[o]=e[o]);if(i&&i.defaultProps)for(o in e=i.defaultProps,e)a[o]===void 0&&(a[o]=e[o]);return{$$typeof:k$2,type:i,key:c,ref:d,props:a,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l$1;reactJsxRuntime_production_min.jsx=q$1;reactJsxRuntime_production_min.jsxs=q$1;(function(i){i.exports=reactJsxRuntime_production_min})(jsxRuntime);const Fragment=jsxRuntime.exports.Fragment,jsx=jsxRuntime.exports.jsx,jsxs=jsxRuntime.exports.jsxs;/**
 * React Router v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _extends(){return _extends=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(i[o]=s[o])}return i},_extends.apply(this,arguments)}function isPolyfill(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}const is$1=typeof Object.is=="function"?Object.is:isPolyfill,{useState,useEffect,useLayoutEffect,useDebugValue}=React$1;function useSyncExternalStore$2(i,e,s){const o=e(),[{inst:a},c]=useState({inst:{value:o,getSnapshot:e}});return useLayoutEffect(()=>{a.value=o,a.getSnapshot=e,checkIfSnapshotChanged(a)&&c({inst:a})},[i,o,e]),useEffect(()=>(checkIfSnapshotChanged(a)&&c({inst:a}),i(()=>{checkIfSnapshotChanged(a)&&c({inst:a})})),[i]),useDebugValue(o),o}function checkIfSnapshotChanged(i){const e=i.getSnapshot,s=i.value;try{const o=e();return!is$1(s,o)}catch{return!0}}function useSyncExternalStore$1(i,e,s){return e()}const canUseDOM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",isServerEnvironment=!canUseDOM,shim=isServerEnvironment?useSyncExternalStore$1:useSyncExternalStore$2;"useSyncExternalStore"in React$1&&(i=>i.useSyncExternalStore)(React$1);const DataStaticRouterContext=react.exports.createContext(null),DataRouterContext=react.exports.createContext(null),DataRouterStateContext=react.exports.createContext(null),NavigationContext=react.exports.createContext(null),LocationContext=react.exports.createContext(null),RouteContext=react.exports.createContext({outlet:null,matches:[]}),RouteErrorContext=react.exports.createContext(null);function useInRouterContext(){return react.exports.useContext(LocationContext)!=null}function useLocation(){return useInRouterContext()||invariant(!1),react.exports.useContext(LocationContext).location}function getPathContributingMatches(i){return i.filter((e,s)=>s===0||!e.route.index&&e.pathnameBase!==i[s-1].pathnameBase)}function useNavigate(){useInRouterContext()||invariant(!1);let{basename:i,navigator:e}=react.exports.useContext(NavigationContext),{matches:s}=react.exports.useContext(RouteContext),{pathname:o}=useLocation(),a=JSON.stringify(getPathContributingMatches(s).map(h=>h.pathnameBase)),c=react.exports.useRef(!1);return react.exports.useEffect(()=>{c.current=!0}),react.exports.useCallback(function(h,g){if(g===void 0&&(g={}),!c.current)return;if(typeof h=="number"){e.go(h);return}let _=resolveTo(h,JSON.parse(a),o,g.relative==="path");i!=="/"&&(_.pathname=_.pathname==="/"?i:joinPaths([i,_.pathname])),(g.replace?e.replace:e.push)(_,g.state,g)},[i,e,a,o])}function useParams(){let{matches:i}=react.exports.useContext(RouteContext),e=i[i.length-1];return e?e.params:{}}function useRoutes(i,e){useInRouterContext()||invariant(!1);let s=react.exports.useContext(DataRouterStateContext),{matches:o}=react.exports.useContext(RouteContext),a=o[o.length-1],c=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let h=useLocation(),g;if(e){var _;let _t=typeof e=="string"?parsePath(e):e;d==="/"||((_=_t.pathname)==null?void 0:_.startsWith(d))||invariant(!1),g=_t}else g=h;let b=g.pathname||"/",et=d==="/"?b:b.slice(d.length)||"/",ot=matchRoutes(i,{pathname:et}),gt=_renderMatches(ot&&ot.map(_t=>Object.assign({},_t,{params:Object.assign({},c,_t.params),pathname:joinPaths([d,_t.pathname]),pathnameBase:_t.pathnameBase==="/"?d:joinPaths([d,_t.pathnameBase])})),o,s||void 0);return e?jsx(LocationContext.Provider,{value:{location:_extends({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Action.Pop},children:gt}):gt}function DefaultErrorElement(){let i=useRouteError(),e=isRouteErrorResponse(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o};return jsxs(Fragment,{children:[jsx("h2",{children:"Unhandled Thrown Error!"}),jsx("h3",{style:{fontStyle:"italic"},children:e}),s?jsx("pre",{style:a,children:s}):null,jsx("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),jsxs("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",jsx("code",{style:c,children:"errorElement"})," props on\xA0",jsx("code",{style:c,children:"<Route>"})]})]})}class RenderErrorBoundary extends react.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location?{error:e.error,location:e.location}:{error:e.error||s.error,location:s.location}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error?jsx(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function RenderedRoute(i){let{routeContext:e,match:s,children:o}=i,a=react.exports.useContext(DataStaticRouterContext);return a&&s.route.errorElement&&(a._deepestRenderedBoundaryId=s.route.id),jsx(RouteContext.Provider,{value:e,children:o})}function _renderMatches(i,e,s){if(e===void 0&&(e=[]),i==null)if(s!=null&&s.errors)i=s.matches;else return null;let o=i,a=s==null?void 0:s.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||invariant(!1),o=o.slice(0,Math.min(o.length,c+1))}return o.reduceRight((c,d,h)=>{let g=d.route.id?a==null?void 0:a[d.route.id]:null,_=s?d.route.errorElement||jsx(DefaultErrorElement,{}):null,b=()=>jsx(RenderedRoute,{match:d,routeContext:{outlet:c,matches:e.concat(o.slice(0,h+1))},children:g?_:d.route.element!==void 0?d.route.element:c});return s&&(d.route.errorElement||h===0)?jsx(RenderErrorBoundary,{location:s.location,component:_,error:g,children:b()}):b()},null)}var DataRouterHook;(function(i){i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator"})(DataRouterHook||(DataRouterHook={}));function useDataRouterState(i){let e=react.exports.useContext(DataRouterStateContext);return e||invariant(!1),e}function useRouteError(){var i;let e=react.exports.useContext(RouteErrorContext),s=useDataRouterState(DataRouterHook.UseRouteError),o=react.exports.useContext(RouteContext),a=o.matches[o.matches.length-1];return e||(o||invariant(!1),a.route.id||invariant(!1),(i=s.errors)==null?void 0:i[a.route.id])}function Navigate(i){let{to:e,replace:s,state:o,relative:a}=i;useInRouterContext()||invariant(!1);let c=react.exports.useContext(DataRouterStateContext),d=useNavigate();return react.exports.useEffect(()=>{c&&c.navigation.state!=="idle"||d(e,{replace:s,state:o,relative:a})}),null}function Route(i){invariant(!1)}function Router(i){let{basename:e="/",children:s=null,location:o,navigationType:a=Action.Pop,navigator:c,static:d=!1}=i;useInRouterContext()&&invariant(!1);let h=e.replace(/^\/*/,"/"),g=react.exports.useMemo(()=>({basename:h,navigator:c,static:d}),[h,c,d]);typeof o=="string"&&(o=parsePath(o));let{pathname:_="/",search:b="",hash:et="",state:ot=null,key:gt="default"}=o,_t=react.exports.useMemo(()=>{let $t=stripBasename(_,h);return $t==null?null:{pathname:$t,search:b,hash:et,state:ot,key:gt}},[h,_,b,et,ot,gt]);return _t==null?null:jsx(NavigationContext.Provider,{value:g,children:jsx(LocationContext.Provider,{children:s,value:{location:_t,navigationType:a}})})}function Routes(i){let{children:e,location:s}=i,o=react.exports.useContext(DataRouterContext),a=o&&!e?o.router.routes:createRoutesFromChildren(e);return useRoutes(a,s)}var AwaitRenderStatus;(function(i){i[i.pending=0]="pending",i[i.success=1]="success",i[i.error=2]="error"})(AwaitRenderStatus||(AwaitRenderStatus={}));new Promise(()=>{});function createRoutesFromChildren(i,e){e===void 0&&(e=[]);let s=[];return react.exports.Children.forEach(i,(o,a)=>{if(!react.exports.isValidElement(o))return;if(o.type===react.exports.Fragment){s.push.apply(s,createRoutesFromChildren(o.props.children,e));return}o.type!==Route&&invariant(!1);let c=[...e,a],d={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,hasErrorBoundary:o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle};o.props.children&&(d.children=createRoutesFromChildren(o.props.children,c)),s.push(d)}),s}/**
 * React Router DOM v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function BrowserRouter(i){let{basename:e,children:s,window:o}=i,a=react.exports.useRef();a.current==null&&(a.current=createBrowserHistory({window:o,v5Compat:!0}));let c=a.current,[d,h]=react.exports.useState({action:c.action,location:c.location});return react.exports.useLayoutEffect(()=>c.listen(h),[c]),jsx(Router,{basename:e,children:s,location:d.location,navigationType:d.action,navigator:c})}const style="",useColorSwitcher=()=>{const[i,e]=react.exports.useState(""),s=["1","2","3","5","6","7"];return{colorState:i,switchColor:()=>{const a=s[Math.floor(Math.random()*s.length)];e(a)}}},startButton_black="/Patudo-v0/assets/power-button-black.c7c4d07e.png",cancel_black="/Patudo-v0/assets/cancel-black.ded42e9e.png";function Popup({children:i,setPopup:e,color:s}){return jsx(Fragment,{children:jsx("div",{className:"popup__background",children:jsxs("div",{className:`popup__holder color${s} center-of-screen`,children:[jsx("div",{className:`popup__close-btn-holder flex-column color${s}`,children:jsx("img",{className:"popup__close-btn",onClick:()=>{e(!1)},src:cancel_black})}),jsx("div",{className:"popup__content lighten-m",children:i})]})})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const stringToByteArray$1=function(i){const e=[];let s=0;for(let o=0;o<i.length;o++){let a=i.charCodeAt(o);a<128?e[s++]=a:a<2048?(e[s++]=a>>6|192,e[s++]=a&63|128):(a&64512)===55296&&o+1<i.length&&(i.charCodeAt(o+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++o)&1023),e[s++]=a>>18|240,e[s++]=a>>12&63|128,e[s++]=a>>6&63|128,e[s++]=a&63|128):(e[s++]=a>>12|224,e[s++]=a>>6&63|128,e[s++]=a&63|128)}return e},byteArrayToString=function(i){const e=[];let s=0,o=0;for(;s<i.length;){const a=i[s++];if(a<128)e[o++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[s++];e[o++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[s++],d=i[s++],h=i[s++],g=((a&7)<<18|(c&63)<<12|(d&63)<<6|h&63)-65536;e[o++]=String.fromCharCode(55296+(g>>10)),e[o++]=String.fromCharCode(56320+(g&1023))}else{const c=i[s++],d=i[s++];e[o++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let a=0;a<i.length;a+=3){const c=i[a],d=a+1<i.length,h=d?i[a+1]:0,g=a+2<i.length,_=g?i[a+2]:0,b=c>>2,et=(c&3)<<4|h>>4;let ot=(h&15)<<2|_>>6,gt=_&63;g||(gt=64,d||(ot=64)),o.push(s[b],s[et],s[ot],s[gt])}return o.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(stringToByteArray$1(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):byteArrayToString(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let a=0;a<i.length;){const c=s[i.charAt(a++)],h=a<i.length?s[i.charAt(a)]:0;++a;const _=a<i.length?s[i.charAt(a)]:64;++a;const et=a<i.length?s[i.charAt(a)]:64;if(++a,c==null||h==null||_==null||et==null)throw Error();const ot=c<<2|h>>4;if(o.push(ot),_!==64){const gt=h<<4&240|_>>2;if(o.push(gt),et!==64){const _t=_<<6&192|et;o.push(_t)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}},base64Encode=function(i){const e=stringToByteArray$1(i);return base64.encodeByteArray(e,!0)},base64urlEncodeWithoutPadding=function(i){return base64Encode(i).replace(/\./g,"")},base64Decode=function(i){try{return base64.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function deepExtend(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const s=e;return new Date(s.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const s in e)!e.hasOwnProperty(s)||!isValidKey(s)||(i[s]=deepExtend(i[s],e[s]));return i}function isValidKey(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,o)=>{s?this.reject(s):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,o))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function isMobileCordova(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isNode(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function isBrowser(){return typeof self=="object"&&self.self===self}function isBrowserExtension(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function isReactNative(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function isElectron(){return getUA().indexOf("Electron/")>=0}function isIE(){const i=getUA();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function isUWP(){return getUA().indexOf("MSAppHost/")>=0}function isIndexedDBAvailable(){return typeof indexedDB=="object"}function validateIndexedDBOpenable(){return new Promise((i,e)=>{try{let s=!0;const o="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(o);a.onsuccess=()=>{a.result.close(),s||self.indexedDB.deleteDatabase(o),i(!0)},a.onupgradeneeded=()=>{s=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(s){e(s)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERROR_NAME="FirebaseError";class FirebaseError extends Error{constructor(e,s,o){super(s),this.code=e,this.customData=o,this.name=ERROR_NAME,Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}}class ErrorFactory{constructor(e,s,o){this.service=e,this.serviceName=s,this.errors=o}create(e,...s){const o=s[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?replaceTemplate(c,o):"Error",h=`${this.serviceName}: ${d} (${a}).`;return new FirebaseError(a,h,o)}}function replaceTemplate(i,e){return i.replace(PATTERN,(s,o)=>{const a=e[o];return a!=null?String(a):`<${o}?>`})}const PATTERN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function contains(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function isEmpty(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function deepEqual(i,e){if(i===e)return!0;const s=Object.keys(i),o=Object.keys(e);for(const a of s){if(!o.includes(a))return!1;const c=i[a],d=e[a];if(isObject(c)&&isObject(d)){if(!deepEqual(c,d))return!1}else if(c!==d)return!1}for(const a of o)if(!s.includes(a))return!1;return!0}function isObject(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function querystring(i){const e=[];for(const[s,o]of Object.entries(i))Array.isArray(o)?o.forEach(a=>{e.push(encodeURIComponent(s)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(s)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function querystringDecode(i){const e={};return i.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[a,c]=o.split("=");e[decodeURIComponent(a)]=decodeURIComponent(c)}}),e}function extractQuerystring(i){const e=i.indexOf("?");if(!e)return"";const s=i.indexOf("#",e);return i.substring(e,s>0?s:void 0)}function createSubscribe(i,e){const s=new ObserverProxy(i,e);return s.subscribe.bind(s)}class ObserverProxy{constructor(e,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(s=>{s.next(e)})}error(e){this.forEachObserver(s=>{s.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,s,o){let a;if(e===void 0&&s===void 0&&o===void 0)throw new Error("Missing Observer.");implementsAnyMethods(e,["next","error","complete"])?a=e:a={next:e,error:s,complete:o},a.next===void 0&&(a.next=noop),a.error===void 0&&(a.error=noop),a.complete===void 0&&(a.complete=noop);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,e)}sendOne(e,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{s(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function implementsAnyMethods(i,e){if(typeof i!="object"||i===null)return!1;for(const s of e)if(s in i&&typeof i[s]=="function")return!0;return!1}function noop(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(i){return i&&i._delegate?i._delegate:i}class Component{constructor(e,s,o){this.name=e,this.instanceFactory=s,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME$1="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Provider{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const o=new Deferred;if(this.instancesDeferred.set(s,o),this.isInitialized(s)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:s});a&&o.resolve(a)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){var s;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(s=e==null?void 0:e.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(isComponentEager(e))try{this.getOrInitializeService({instanceIdentifier:DEFAULT_ENTRY_NAME$1})}catch{}for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);try{const c=this.getOrInitializeService({instanceIdentifier:a});o.resolve(c)}catch{}}}}clearInstance(e=DEFAULT_ENTRY_NAME$1){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=DEFAULT_ENTRY_NAME$1){return this.instances.has(e)}getOptions(e=DEFAULT_ENTRY_NAME$1){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:o,options:s});for(const[c,d]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(c);o===h&&d.resolve(a)}return a}onInit(e,s){var o;const a=this.normalizeInstanceIdentifier(s),c=(o=this.onInitCallbacks.get(a))!==null&&o!==void 0?o:new Set;c.add(e),this.onInitCallbacks.set(a,c);const d=this.instances.get(a);return d&&e(d,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,s){const o=this.onInitCallbacks.get(s);if(!!o)for(const a of o)try{a(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:normalizeIdentifierForFactory(e),options:s}),this.instances.set(e,o),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=DEFAULT_ENTRY_NAME$1){return this.component?this.component.multipleInstances?e:DEFAULT_ENTRY_NAME$1:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function normalizeIdentifierForFactory(i){return i===DEFAULT_ENTRY_NAME$1?void 0:i}function isComponentEager(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ComponentContainer{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Provider(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const instances=[];var LogLevel;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(LogLevel||(LogLevel={}));const levelStringToEnum={debug:LogLevel.DEBUG,verbose:LogLevel.VERBOSE,info:LogLevel.INFO,warn:LogLevel.WARN,error:LogLevel.ERROR,silent:LogLevel.SILENT},defaultLogLevel=LogLevel.INFO,ConsoleMethod={[LogLevel.DEBUG]:"log",[LogLevel.VERBOSE]:"log",[LogLevel.INFO]:"info",[LogLevel.WARN]:"warn",[LogLevel.ERROR]:"error"},defaultLogHandler=(i,e,...s)=>{if(e<i.logLevel)return;const o=new Date().toISOString(),a=ConsoleMethod[e];if(a)console[a](`[${o}]  ${i.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Logger{constructor(e){this.name=e,this._logLevel=defaultLogLevel,this._logHandler=defaultLogHandler,this._userLogHandler=null,instances.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in LogLevel))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?levelStringToEnum[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.DEBUG,...e),this._logHandler(this,LogLevel.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.VERBOSE,...e),this._logHandler(this,LogLevel.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.INFO,...e),this._logHandler(this,LogLevel.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.WARN,...e),this._logHandler(this,LogLevel.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,LogLevel.ERROR,...e),this._logHandler(this,LogLevel.ERROR,...e)}}function setLogLevel$1(i){instances.forEach(e=>{e.setLogLevel(i)})}function setUserLogHandler(i,e){for(const s of instances){let o=null;e&&e.level&&(o=levelStringToEnum[e.level]),i===null?s.userLogHandler=null:s.userLogHandler=(a,c,...d)=>{const h=d.map(g=>{if(g==null)return null;if(typeof g=="string")return g;if(typeof g=="number"||typeof g=="boolean")return g.toString();if(g instanceof Error)return g.message;try{return JSON.stringify(g)}catch{return null}}).filter(g=>g).join(" ");c>=(o!=null?o:a.logLevel)&&i({level:LogLevel[c].toLowerCase(),message:h,args:d,type:a.name})}}}const instanceOfAny=(i,e)=>e.some(s=>i instanceof s);let idbProxyableTypes,cursorAdvanceMethods;function getIdbProxyableTypes(){return idbProxyableTypes||(idbProxyableTypes=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return cursorAdvanceMethods||(cursorAdvanceMethods=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cursorRequestMap=new WeakMap,transactionDoneMap=new WeakMap,transactionStoreNamesMap=new WeakMap,transformCache=new WeakMap,reverseTransformCache=new WeakMap;function promisifyRequest(i){const e=new Promise((s,o)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",d)},c=()=>{s(wrap(i.result)),a()},d=()=>{o(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",d)});return e.then(s=>{s instanceof IDBCursor&&cursorRequestMap.set(s,i)}).catch(()=>{}),reverseTransformCache.set(e,i),e}function cacheDonePromiseForTransaction(i){if(transactionDoneMap.has(i))return;const e=new Promise((s,o)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",d),i.removeEventListener("abort",d)},c=()=>{s(),a()},d=()=>{o(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",d),i.addEventListener("abort",d)});transactionDoneMap.set(i,e)}let idbProxyTraps={get(i,e,s){if(i instanceof IDBTransaction){if(e==="done")return transactionDoneMap.get(i);if(e==="objectStoreNames")return i.objectStoreNames||transactionStoreNamesMap.get(i);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return wrap(i[e])},set(i,e,s){return i[e]=s,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function replaceTraps(i){idbProxyTraps=i(idbProxyTraps)}function wrapFunction(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const o=i.call(unwrap$1(this),e,...s);return transactionStoreNamesMap.set(o,e.sort?e.sort():[e]),wrap(o)}:getCursorAdvanceMethods().includes(i)?function(...e){return i.apply(unwrap$1(this),e),wrap(cursorRequestMap.get(this))}:function(...e){return wrap(i.apply(unwrap$1(this),e))}}function transformCachableValue(i){return typeof i=="function"?wrapFunction(i):(i instanceof IDBTransaction&&cacheDonePromiseForTransaction(i),instanceOfAny(i,getIdbProxyableTypes())?new Proxy(i,idbProxyTraps):i)}function wrap(i){if(i instanceof IDBRequest)return promisifyRequest(i);if(transformCache.has(i))return transformCache.get(i);const e=transformCachableValue(i);return e!==i&&(transformCache.set(i,e),reverseTransformCache.set(e,i)),e}const unwrap$1=i=>reverseTransformCache.get(i);function openDB(i,e,{blocked:s,upgrade:o,blocking:a,terminated:c}={}){const d=indexedDB.open(i,e),h=wrap(d);return o&&d.addEventListener("upgradeneeded",g=>{o(wrap(d.result),g.oldVersion,g.newVersion,wrap(d.transaction))}),s&&d.addEventListener("blocked",()=>s()),h.then(g=>{c&&g.addEventListener("close",()=>c()),a&&g.addEventListener("versionchange",()=>a())}).catch(()=>{}),h}const readMethods=["get","getKey","getAll","getAllKeys","count"],writeMethods=["put","add","delete","clear"],cachedMethods=new Map;function getMethod(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(cachedMethods.get(e))return cachedMethods.get(e);const s=e.replace(/FromIndex$/,""),o=e!==s,a=writeMethods.includes(s);if(!(s in(o?IDBIndex:IDBObjectStore).prototype)||!(a||readMethods.includes(s)))return;const c=async function(d,...h){const g=this.transaction(d,a?"readwrite":"readonly");let _=g.store;return o&&(_=_.index(h.shift())),(await Promise.all([_[s](...h),a&&g.done]))[0]};return cachedMethods.set(e,c),c}replaceTraps(i=>({...i,get:(e,s,o)=>getMethod(e,s)||i.get(e,s,o),has:(e,s)=>!!getMethod(e,s)||i.has(e,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PlatformLoggerServiceImpl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(isVersionServiceProvider(s)){const o=s.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(s=>s).join(" ")}}function isVersionServiceProvider(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const name$o="@firebase/app",version$1$1="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logger$1=new Logger("@firebase/app"),name$n="@firebase/app-compat",name$m="@firebase/analytics-compat",name$l="@firebase/analytics",name$k="@firebase/app-check-compat",name$j="@firebase/app-check",name$i="@firebase/auth",name$h="@firebase/auth-compat",name$g="@firebase/database",name$f="@firebase/database-compat",name$e="@firebase/functions",name$d="@firebase/functions-compat",name$c="@firebase/installations",name$b="@firebase/installations-compat",name$a="@firebase/messaging",name$9="@firebase/messaging-compat",name$8="@firebase/performance",name$7="@firebase/performance-compat",name$6="@firebase/remote-config",name$5="@firebase/remote-config-compat",name$4="@firebase/storage",name$3$1="@firebase/storage-compat",name$2$1="@firebase/firestore",name$1$1="@firebase/firestore-compat",name$p="firebase",version$4="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_ENTRY_NAME="[DEFAULT]",PLATFORM_LOG_STRING={[name$o]:"fire-core",[name$n]:"fire-core-compat",[name$l]:"fire-analytics",[name$m]:"fire-analytics-compat",[name$j]:"fire-app-check",[name$k]:"fire-app-check-compat",[name$i]:"fire-auth",[name$h]:"fire-auth-compat",[name$g]:"fire-rtdb",[name$f]:"fire-rtdb-compat",[name$e]:"fire-fn",[name$d]:"fire-fn-compat",[name$c]:"fire-iid",[name$b]:"fire-iid-compat",[name$a]:"fire-fcm",[name$9]:"fire-fcm-compat",[name$8]:"fire-perf",[name$7]:"fire-perf-compat",[name$6]:"fire-rc",[name$5]:"fire-rc-compat",[name$4]:"fire-gcs",[name$3$1]:"fire-gcs-compat",[name$2$1]:"fire-fst",[name$1$1]:"fire-fst-compat","fire-js":"fire-js",[name$p]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _apps=new Map,_components=new Map;function _addComponent(i,e){try{i.container.addComponent(e)}catch(s){logger$1.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,s)}}function _addOrOverwriteComponent(i,e){i.container.addOrOverwriteComponent(e)}function _registerComponent(i){const e=i.name;if(_components.has(e))return logger$1.debug(`There were multiple attempts to register component ${e}.`),!1;_components.set(e,i);for(const s of _apps.values())_addComponent(s,i);return!0}function _getProvider(i,e){const s=i.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),i.container.getProvider(e)}function _removeServiceInstance(i,e,s=DEFAULT_ENTRY_NAME){_getProvider(i,e).clearInstance(s)}function _clearComponents(){_components.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERRORS$1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ERROR_FACTORY$1=new ErrorFactory("app","Firebase",ERRORS$1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FirebaseAppImpl$1{constructor(e,s,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ERROR_FACTORY$1.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SDK_VERSION=version$4;function initializeApp(i,e={}){typeof e!="object"&&(e={name:e});const s=Object.assign({name:DEFAULT_ENTRY_NAME,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ERROR_FACTORY$1.create("bad-app-name",{appName:String(o)});const a=_apps.get(o);if(a){if(deepEqual(i,a.options)&&deepEqual(s,a.config))return a;throw ERROR_FACTORY$1.create("duplicate-app",{appName:o})}const c=new ComponentContainer(o);for(const h of _components.values())c.addComponent(h);const d=new FirebaseAppImpl$1(i,s,c);return _apps.set(o,d),d}function getApp(i=DEFAULT_ENTRY_NAME){const e=_apps.get(i);if(!e)throw ERROR_FACTORY$1.create("no-app",{appName:i});return e}function getApps(){return Array.from(_apps.values())}async function deleteApp(i){const e=i.name;_apps.has(e)&&(_apps.delete(e),await Promise.all(i.container.getProviders().map(s=>s.delete())),i.isDeleted=!0)}function registerVersion(i,e,s){var o;let a=(o=PLATFORM_LOG_STRING[i])!==null&&o!==void 0?o:i;s&&(a+=`-${s}`);const c=a.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const h=[`Unable to register library "${a}" with version "${e}":`];c&&h.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&d&&h.push("and"),d&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),logger$1.warn(h.join(" "));return}_registerComponent(new Component(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function onLog(i,e){if(i!==null&&typeof i!="function")throw ERROR_FACTORY$1.create("invalid-log-argument");setUserLogHandler(i,e)}function setLogLevel(i){setLogLevel$1(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB_NAME$1="firebase-heartbeat-database",DB_VERSION$1=1,STORE_NAME="firebase-heartbeat-store";let dbPromise=null;function getDbPromise(){return dbPromise||(dbPromise=openDB(DB_NAME$1,DB_VERSION$1,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(STORE_NAME)}}}).catch(i=>{throw ERROR_FACTORY$1.create("idb-open",{originalErrorMessage:i.message})})),dbPromise}async function readHeartbeatsFromIndexedDB(i){var e;try{return(await getDbPromise()).transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(i))}catch(s){if(s instanceof FirebaseError)logger$1.warn(s.message);else{const o=ERROR_FACTORY$1.create("idb-get",{originalErrorMessage:(e=s)===null||e===void 0?void 0:e.message});logger$1.warn(o.message)}}}async function writeHeartbeatsToIndexedDB(i,e){var s;try{const a=(await getDbPromise()).transaction(STORE_NAME,"readwrite");return await a.objectStore(STORE_NAME).put(e,computeKey(i)),a.done}catch(o){if(o instanceof FirebaseError)logger$1.warn(o.message);else{const a=ERROR_FACTORY$1.create("idb-set",{originalErrorMessage:(s=o)===null||s===void 0?void 0:s.message});logger$1.warn(a.message)}}}function computeKey(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MAX_HEADER_BYTES=1024,STORED_HEARTBEAT_RETENTION_MAX_MILLIS=30*24*60*60*1e3;class HeartbeatServiceImpl{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(s),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=getUTCDateString();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=STORED_HEARTBEAT_RETENTION_MAX_MILLIS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=getUTCDateString(),{heartbeatsToSend:s,unsentEntries:o}=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),a=base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function getUTCDateString(){return new Date().toISOString().substring(0,10)}function extractHeartbeatsForHeader(i,e=MAX_HEADER_BYTES){const s=[];let o=i.slice();for(const a of i){const c=s.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),countBytes(s)>e){c.dates.pop();break}}else if(s.push({agent:a.agent,dates:[a.date]}),countBytes(s)>e){s.pop();break}o=o.slice(1)}return{heartbeatsToSend:s,unsentEntries:o}}class HeartbeatStorageImpl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return isIndexedDBAvailable()?validateIndexedDBOpenable().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await readHeartbeatsFromIndexedDB(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const a=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const a=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function countBytes(i){return base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function registerCoreComponents$1(i){_registerComponent(new Component("platform-logger",e=>new PlatformLoggerServiceImpl(e),"PRIVATE")),_registerComponent(new Component("heartbeat",e=>new HeartbeatServiceImpl(e),"PRIVATE")),registerVersion(name$o,version$1$1,i),registerVersion(name$o,version$1$1,"esm2017"),registerVersion("fire-js","")}registerCoreComponents$1("");const modularAPIs=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION,_DEFAULT_ENTRY_NAME:DEFAULT_ENTRY_NAME,_addComponent,_addOrOverwriteComponent,_apps,_clearComponents,_components,_getProvider,_registerComponent,_removeServiceInstance,deleteApp,getApp,getApps,initializeApp,onLog,registerVersion,setLogLevel,FirebaseError},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FirebaseAppImpl{constructor(e,s){this._delegate=e,this.firebase=s,_addComponent(e,new Component("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),deleteApp(this._delegate)))}_getService(e,s=DEFAULT_ENTRY_NAME){var o;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((o=a.getComponent())===null||o===void 0?void 0:o.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:s})}_removeServiceInstance(e,s=DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(s)}_addComponent(e){_addComponent(this._delegate,e)}_addOrOverwriteComponent(e){_addOrOverwriteComponent(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ERRORS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},ERROR_FACTORY=new ErrorFactory("app-compat","Firebase",ERRORS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createFirebaseNamespaceCore(i){const e={},s={__esModule:!0,initializeApp:c,app:a,registerVersion,setLogLevel,onLog,apps:null,SDK_VERSION,INTERNAL:{registerComponent:h,removeApp:o,useAsService:g,modularAPIs}};s.default=s,Object.defineProperty(s,"apps",{get:d});function o(_){delete e[_]}function a(_){if(_=_||DEFAULT_ENTRY_NAME,!contains(e,_))throw ERROR_FACTORY.create("no-app",{appName:_});return e[_]}a.App=i;function c(_,b={}){const et=initializeApp(_,b);if(contains(e,et.name))return e[et.name];const ot=new i(et,s);return e[et.name]=ot,ot}function d(){return Object.keys(e).map(_=>e[_])}function h(_){const b=_.name,et=b.replace("-compat","");if(_registerComponent(_)&&_.type==="PUBLIC"){const ot=(gt=a())=>{if(typeof gt[et]!="function")throw ERROR_FACTORY.create("invalid-app-argument",{appName:b});return gt[et]()};_.serviceProps!==void 0&&deepExtend(ot,_.serviceProps),s[et]=ot,i.prototype[et]=function(...gt){return this._getService.bind(this,b).apply(this,_.multipleInstances?gt:[])}}return _.type==="PUBLIC"?s[et]:null}function g(_,b){return b==="serverAuth"?null:b}return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createFirebaseNamespace(){const i=createFirebaseNamespaceCore(FirebaseAppImpl);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace,extendNamespace:e,createSubscribe,ErrorFactory,deepExtend});function e(s){deepExtend(i,s)}return i}const firebase$1=createFirebaseNamespace();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logger=new Logger("@firebase/app-compat"),name$3="@firebase/app-compat",version$3="0.1.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function registerCoreComponents(i){registerVersion(name$3,version$3,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(isBrowser()&&self.firebase!==void 0){logger.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const i=self.firebase.SDK_VERSION;i&&i.indexOf("LITE")>=0&&logger.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const firebase=firebase$1;registerCoreComponents();var name$2="firebase",version$2="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */firebase.registerVersion(name$2,version$2,"app-compat");function __rest(i,e){var s={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&e.indexOf(o)<0&&(s[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(i);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(i,o[a])&&(s[o[a]]=i[o[a]]);return s}const ProviderId={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ActionCodeOperation={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _debugErrorMap(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function _prodErrorMap(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const debugErrorMap=_debugErrorMap,prodErrorMap=_prodErrorMap,_DEFAULT_AUTH_ERROR_FACTORY=new ErrorFactory("auth","Firebase",_prodErrorMap());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const logClient=new Logger("@firebase/auth");function _logError(i,...e){logClient.logLevel<=LogLevel.ERROR&&logClient.error(`Auth (${SDK_VERSION}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _fail(i,...e){throw createErrorInternal(i,...e)}function _createError(i,...e){return createErrorInternal(i,...e)}function _errorWithCustomMessage(i,e,s){const o=Object.assign(Object.assign({},prodErrorMap()),{[e]:s});return new ErrorFactory("auth","Firebase",o).create(e,{appName:i.name})}function _assertInstanceOf(i,e,s){const o=s;if(!(e instanceof o))throw o.name!==e.constructor.name&&_fail(i,"argument-error"),_errorWithCustomMessage(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function createErrorInternal(i,...e){if(typeof i!="string"){const s=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=i.name),i._errorFactory.create(s,...o)}return _DEFAULT_AUTH_ERROR_FACTORY.create(i,...e)}function _assert$4(i,e,...s){if(!i)throw createErrorInternal(e,...s)}function debugFail(i){const e="INTERNAL ASSERTION FAILED: "+i;throw _logError(e),new Error(e)}function debugAssert(i,e){i||debugFail(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const instanceCache=new Map;function _getInstance(i){debugAssert(i instanceof Function,"Expected a class definition");let e=instanceCache.get(i);return e?(debugAssert(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,instanceCache.set(i,e),e)}function _initializeAuthInstance(i,e){const s=(e==null?void 0:e.persistence)||[],o=(Array.isArray(s)?s:[s]).map(_getInstance);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(o,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getCurrentUrl(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function _isHttpOrHttps$1(){return _getCurrentScheme$1()==="http:"||_getCurrentScheme$1()==="https:"}function _getCurrentScheme$1(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isOnline(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_isHttpOrHttps$1()||isBrowserExtension()||"connection"in navigator)?navigator.onLine:!0}function _getUserLanguage(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Delay{constructor(e,s){this.shortDelay=e,this.longDelay=s,debugAssert(s>e,"Short delay should be less than long delay!"),this.isMobile=isMobileCordova()||isReactNative()}get(){return _isOnline()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _emulatorUrl(i,e){debugAssert(i.emulator,"Emulator should always be set here");const{url:s}=i.emulator;return e?`${s}${e.startsWith("/")?e.slice(1):e}`:s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FetchProvider{static initialize(e,s,o){this.fetchImpl=e,s&&(this.headersImpl=s),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SERVER_ERROR_MAP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DEFAULT_API_TIMEOUT_MS=new Delay(3e4,6e4);function _addTidIfNecessary(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function _performApiRequest(i,e,s,o,a={}){return _performFetchWithErrorHandling(i,a,async()=>{let c={},d={};o&&(e==="GET"?d=o:c={body:JSON.stringify(o)});const h=querystring(Object.assign({key:i.config.apiKey},d)).slice(1),g=await i._getAdditionalHeaders();return g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode),FetchProvider.fetch()(_getFinalTarget(i,i.config.apiHost,s,h),Object.assign({method:e,headers:g,referrerPolicy:"no-referrer"},c))})}async function _performFetchWithErrorHandling(i,e,s){i._canInitEmulator=!1;const o=Object.assign(Object.assign({},SERVER_ERROR_MAP),e);try{const a=new NetworkTimeout(i),c=await Promise.race([s(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw _makeTaggedError(i,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const h=c.ok?d.errorMessage:d.error.message,[g,_]=h.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw _makeTaggedError(i,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw _makeTaggedError(i,"email-already-in-use",d);if(g==="USER_DISABLED")throw _makeTaggedError(i,"user-disabled",d);const b=o[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw _errorWithCustomMessage(i,b,_);_fail(i,b)}}catch(a){if(a instanceof FirebaseError)throw a;_fail(i,"network-request-failed")}}async function _performSignInRequest(i,e,s,o,a={}){const c=await _performApiRequest(i,e,s,o,a);return"mfaPendingCredential"in c&&_fail(i,"multi-factor-auth-required",{_serverResponse:c}),c}function _getFinalTarget(i,e,s,o){const a=`${e}${s}?${o}`;return i.config.emulator?_emulatorUrl(i.config,a):`${i.config.apiScheme}://${a}`}class NetworkTimeout{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((s,o)=>{this.timer=setTimeout(()=>o(_createError(this.auth,"network-request-failed")),DEFAULT_API_TIMEOUT_MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _makeTaggedError(i,e,s){const o={appName:i.name};s.email&&(o.email=s.email),s.phoneNumber&&(o.phoneNumber=s.phoneNumber);const a=_createError(i,e,o);return a.customData._tokenResponse=s,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function deleteAccount(i,e){return _performApiRequest(i,"POST","/v1/accounts:delete",e)}async function deleteLinkedAccounts(i,e){return _performApiRequest(i,"POST","/v1/accounts:update",e)}async function getAccountInfo(i,e){return _performApiRequest(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function utcTimestampToDateString(i){if(!!i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function getIdTokenResult(i,e=!1){const s=getModularInstance(i),o=await s.getIdToken(e),a=_parseToken(o);_assert$4(a&&a.exp&&a.auth_time&&a.iat,s.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:a,token:o,authTime:utcTimestampToDateString(secondsStringToMilliseconds(a.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(a.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(a.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function secondsStringToMilliseconds(i){return Number(i)*1e3}function _parseToken(i){var e;const[s,o,a]=i.split(".");if(s===void 0||o===void 0||a===void 0)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{const c=base64Decode(o);return c?JSON.parse(c):(_logError("Failed to decode base64 JWT payload"),null)}catch(c){return _logError("Caught error parsing JWT payload as JSON",(e=c)===null||e===void 0?void 0:e.toString()),null}}function _tokenExpiresIn(i){const e=_parseToken(i);return _assert$4(e,"internal-error"),_assert$4(typeof e.exp<"u","internal-error"),_assert$4(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _logoutIfInvalidated(i,e,s=!1){if(s)return e;try{return await e}catch(o){throw o instanceof FirebaseError&&isUserInvalidated(o)&&i.auth.currentUser===i&&await i.auth.signOut(),o}}function isUserInvalidated({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ProactiveRefresh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var s;if(e){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const a=((s=this.user.stsTokenManager.expirationTime)!==null&&s!==void 0?s:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const s=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(s){((e=s)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UserMetadata{constructor(e,s){this.createdAt=e,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reloadWithoutSaving(i){var e;const s=i.auth,o=await i.getIdToken(),a=await _logoutIfInvalidated(i,getAccountInfo(s,{idToken:o}));_assert$4(a==null?void 0:a.users.length,s,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const d=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?extractProviderData(c.providerUserInfo):[],h=mergeProviderData(i.providerData,d),g=i.isAnonymous,_=!(i.email&&c.passwordHash)&&!(h!=null&&h.length),b=g?_:!1,et={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:h,metadata:new UserMetadata(c.createdAt,c.lastLoginAt),isAnonymous:b};Object.assign(i,et)}async function reload(i){const e=getModularInstance(i);await _reloadWithoutSaving(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mergeProviderData(i,e){return[...i.filter(o=>!e.some(a=>a.providerId===o.providerId)),...e]}function extractProviderData(i){return i.map(e=>{var{providerId:s}=e,o=__rest(e,["providerId"]);return{providerId:s,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function requestStsToken(i,e){const s=await _performFetchWithErrorHandling(i,{},async()=>{const o=querystring({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,d=_getFinalTarget(i,a,"/v1/token",`key=${c}`),h=await i._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(d,{method:"POST",headers:h,body:o})});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_assert$4(e.idToken,"internal-error"),_assert$4(typeof e.idToken<"u","internal-error"),_assert$4(typeof e.refreshToken<"u","internal-error");const s="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_tokenExpiresIn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,s)}async getToken(e,s=!1){return _assert$4(!this.accessToken||this.refreshToken,e,"user-token-expired"),!s&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,s){const{accessToken:o,refreshToken:a,expiresIn:c}=await requestStsToken(e,s);this.updateTokensAndExpiration(o,a,Number(c))}updateTokensAndExpiration(e,s,o){this.refreshToken=s||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,s){const{refreshToken:o,accessToken:a,expirationTime:c}=s,d=new StsTokenManager;return o&&(_assert$4(typeof o=="string","internal-error",{appName:e}),d.refreshToken=o),a&&(_assert$4(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(_assert$4(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function assertStringOrUndefined(i,e){_assert$4(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class UserImpl{constructor(e){var{uid:s,auth:o,stsTokenManager:a}=e,c=__rest(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=s,this.auth=o,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new UserMetadata(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const s=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,e));return _assert$4(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(e){return getIdTokenResult(this,e)}reload(){return reload(this)}_assign(e){this!==e&&(_assert$4(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(s=>Object.assign({},s)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new UserImpl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_assert$4(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,s=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),s&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,s){var o,a,c,d,h,g,_,b;const et=(o=s.displayName)!==null&&o!==void 0?o:void 0,ot=(a=s.email)!==null&&a!==void 0?a:void 0,gt=(c=s.phoneNumber)!==null&&c!==void 0?c:void 0,_t=(d=s.photoURL)!==null&&d!==void 0?d:void 0,$t=(h=s.tenantId)!==null&&h!==void 0?h:void 0,St=(g=s._redirectEventId)!==null&&g!==void 0?g:void 0,mt=(_=s.createdAt)!==null&&_!==void 0?_:void 0,pt=(b=s.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:yt,emailVerified:wt,isAnonymous:It,providerData:Ct,stsTokenManager:kt}=s;_assert$4(yt&&kt,e,"internal-error");const Ot=StsTokenManager.fromJSON(this.name,kt);_assert$4(typeof yt=="string",e,"internal-error"),assertStringOrUndefined(et,e.name),assertStringOrUndefined(ot,e.name),_assert$4(typeof wt=="boolean",e,"internal-error"),_assert$4(typeof It=="boolean",e,"internal-error"),assertStringOrUndefined(gt,e.name),assertStringOrUndefined(_t,e.name),assertStringOrUndefined($t,e.name),assertStringOrUndefined(St,e.name),assertStringOrUndefined(mt,e.name),assertStringOrUndefined(pt,e.name);const Bt=new UserImpl({uid:yt,auth:e,email:ot,emailVerified:wt,displayName:et,isAnonymous:It,photoURL:_t,phoneNumber:gt,tenantId:$t,stsTokenManager:Ot,createdAt:mt,lastLoginAt:pt});return Ct&&Array.isArray(Ct)&&(Bt.providerData=Ct.map(Mt=>Object.assign({},Mt))),St&&(Bt._redirectEventId=St),Bt}static async _fromIdTokenResponse(e,s,o=!1){const a=new StsTokenManager;a.updateFromServerResponse(s);const c=new UserImpl({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o});return await _reloadWithoutSaving(c),c}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,s){this.storage[e]=s}async _get(e){const s=this.storage[e];return s===void 0?null:s}async _remove(e){delete this.storage[e]}_addListener(e,s){}_removeListener(e,s){}}InMemoryPersistence.type="NONE";const inMemoryPersistence=InMemoryPersistence;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _persistenceKeyName(i,e,s){return`firebase:${i}:${e}:${s}`}class PersistenceUserManager{constructor(e,s,o){this.persistence=e,this.auth=s,this.userKey=o;const{config:a,name:c}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,a.apiKey,c),this.fullPersistenceKey=_persistenceKeyName("persistence",a.apiKey,c),this.boundEventHandler=s._onStorageEvent.bind(s),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?UserImpl._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,s)return this.setCurrentUser(s)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,s,o="authUser"){if(!s.length)return new PersistenceUserManager(_getInstance(inMemoryPersistence),e,o);const a=(await Promise.all(s.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=a[0]||_getInstance(inMemoryPersistence);const d=_persistenceKeyName(o,e.config.apiKey,e.name);let h=null;for(const _ of s)try{const b=await _._get(d);if(b){const et=UserImpl._fromJSON(e,b);_!==c&&(h=et),c=_;break}}catch{}const g=a.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new PersistenceUserManager(c,e,o):(c=g[0],h&&await c._set(d,h.toJSON()),await Promise.all(s.map(async _=>{if(_!==c)try{await _._remove(d)}catch{}})),new PersistenceUserManager(c,e,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getBrowserName(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_isIEMobile(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_isFirefox(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_isBlackBerry(e))return"Blackberry";if(_isWebOS(e))return"Webos";if(_isSafari(e))return"Safari";if((e.includes("chrome/")||_isChromeIOS(e))&&!e.includes("edge/"))return"Chrome";if(_isAndroid(e))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=i.match(s);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function _isFirefox(i=getUA()){return/firefox\//i.test(i)}function _isSafari(i=getUA()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _isChromeIOS(i=getUA()){return/crios\//i.test(i)}function _isIEMobile(i=getUA()){return/iemobile/i.test(i)}function _isAndroid(i=getUA()){return/android/i.test(i)}function _isBlackBerry(i=getUA()){return/blackberry/i.test(i)}function _isWebOS(i=getUA()){return/webos/i.test(i)}function _isIOS(i=getUA()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function _isIOS7Or8(i=getUA()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function _isIOSStandalone(i=getUA()){var e;return _isIOS(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _isIE10(){return isIE()&&document.documentMode===10}function _isMobileBrowser(i=getUA()){return _isIOS(i)||_isAndroid(i)||_isWebOS(i)||_isBlackBerry(i)||/windows phone/i.test(i)||_isIEMobile(i)}function _isIframe(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getClientVersion(i,e=[]){let s;switch(i){case"Browser":s=_getBrowserName(getUA());break;case"Worker":s=`${_getBrowserName(getUA())}-${i}`;break;default:s=i}const o=e.length?e.join(","):"FirebaseCore-web";return`${s}/JsCore/${SDK_VERSION}/${o}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthMiddlewareQueue{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,s){const o=c=>new Promise((d,h)=>{try{const g=e(c);d(g)}catch(g){h(g)}});o.onAbort=s,this.queue.push(o);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){var s;if(this.auth.currentUser===e)return;const o=[];try{for(const a of this.queue)await a(e),a.onAbort&&o.push(a.onAbort)}catch(a){o.reverse();for(const c of o)try{c()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(s=a)===null||s===void 0?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthImpl{constructor(e,s,o){this.app=e,this.heartbeatServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_DEFAULT_AUTH_ERROR_FACTORY,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,s){return s&&(this._popupRedirectResolver=_getInstance(s)),this._initializationPromise=this.queue(async()=>{var o,a;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,e),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(s),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var s;const o=await this.assertedPersistence.getCurrentUser();let a=o,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId,h=a==null?void 0:a._redirectEventId,g=await this.tryRedirectSignIn(e);(!d||d===h)&&(g==null?void 0:g.user)&&(a=g.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return _assert$4(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(e){var s;try{await _reloadWithoutSaving(e)}catch(o){if(((s=o)===null||s===void 0?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_getUserLanguage()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const s=e?getModularInstance(e):null;return s&&_assert$4(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(e,s=!1){if(!this._deleted)return e&&_assert$4(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,s,o){return this.registerStateListener(this.authStateSubscription,e,s,o)}beforeAuthStateChanged(e,s){return this.beforeStateQueue.pushCallback(e,s)}onIdTokenChanged(e,s,o){return this.registerStateListener(this.idTokenSubscription,e,s,o)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,s){const o=await this.getOrInitRedirectPersistenceManager(s);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const s=e&&_getInstance(e)||this._popupRedirectResolver;_assert$4(s,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var s,o;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)===null||s===void 0?void 0:s._redirectEventId)===e?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(s=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&s!==void 0?s:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,s,o,a){if(this._deleted)return()=>{};const c=typeof s=="function"?s:s.next.bind(s),d=this._isInitialized?Promise.resolve():this._initializationPromise;return _assert$4(d,this,"internal-error"),d.then(()=>c(this.currentUser)),typeof s=="function"?e.addObserver(s,o,a):e.addObserver(s)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _assert$4(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const s={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(s["X-Firebase-gmpid"]=this.app.options.appId);const o=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return o&&(s["X-Firebase-Client"]=o),s}}function _castAuth(i){return getModularInstance(i)}class Subscription{constructor(e){this.auth=e,this.observer=null,this.addObserver=createSubscribe(s=>this.observer=s)}get next(){return _assert$4(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function connectAuthEmulator(i,e,s){const o=_castAuth(i);_assert$4(o._canInitEmulator,o,"emulator-config-failed"),_assert$4(/^https?:\/\//.test(e),o,"invalid-emulator-scheme");const a=!!(s!=null&&s.disableWarnings),c=extractProtocol(e),{host:d,port:h}=extractHostAndPort(e),g=h===null?"":`:${h}`;o.config.emulator={url:`${c}//${d}${g}/`},o.settings.appVerificationDisabledForTesting=!0,o.emulatorConfig=Object.freeze({host:d,port:h,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||emitEmulatorWarning()}function extractProtocol(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function extractHostAndPort(i){const e=extractProtocol(i),s=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!s)return{host:"",port:null};const o=s[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(o);if(a){const c=a[1];return{host:c,port:parsePort(o.substr(c.length+1))}}else{const[c,d]=o.split(":");return{host:c,port:parsePort(d)}}}function parsePort(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function emitEmulatorWarning(){function i(){const e=document.createElement("p"),s=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthCredential{constructor(e,s){this.providerId=e,this.signInMethod=s}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(e){return debugFail("not implemented")}_linkToIdToken(e,s){return debugFail("not implemented")}_getReauthenticationResolver(e){return debugFail("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function resetPassword(i,e){return _performApiRequest(i,"POST","/v1/accounts:resetPassword",_addTidIfNecessary(i,e))}async function updateEmailPassword(i,e){return _performApiRequest(i,"POST","/v1/accounts:update",e)}async function applyActionCode$1(i,e){return _performApiRequest(i,"POST","/v1/accounts:update",_addTidIfNecessary(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithPassword(i,e){return _performSignInRequest(i,"POST","/v1/accounts:signInWithPassword",_addTidIfNecessary(i,e))}async function sendOobCode(i,e){return _performApiRequest(i,"POST","/v1/accounts:sendOobCode",_addTidIfNecessary(i,e))}async function sendEmailVerification$1(i,e){return sendOobCode(i,e)}async function sendPasswordResetEmail$1(i,e){return sendOobCode(i,e)}async function sendSignInLinkToEmail$1(i,e){return sendOobCode(i,e)}async function verifyAndChangeEmail(i,e){return sendOobCode(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithEmailLink$1(i,e){return _performSignInRequest(i,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(i,e))}async function signInWithEmailLinkForLinking(i,e){return _performSignInRequest(i,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EmailAuthCredential extends AuthCredential{constructor(e,s,o,a=null){super("password",o),this._email=e,this._password=s,this._tenantId=a}static _fromEmailAndPassword(e,s){return new EmailAuthCredential(e,s,"password")}static _fromEmailAndCode(e,s,o=null){return new EmailAuthCredential(e,s,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e;if((s==null?void 0:s.email)&&(s==null?void 0:s.password)){if(s.signInMethod==="password")return this._fromEmailAndPassword(s.email,s.password);if(s.signInMethod==="emailLink")return this._fromEmailAndCode(s.email,s.password,s.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return signInWithPassword(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLink$1(e,{email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}async _linkToIdToken(e,s){switch(this.signInMethod){case"password":return updateEmailPassword(e,{idToken:s,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLinkForLinking(e,{idToken:s,email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithIdp(i,e){return _performSignInRequest(i,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IDP_REQUEST_URI$1="http://localhost";class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const s=new OAuthCredential(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(s.idToken=e.idToken),e.accessToken&&(s.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(s.nonce=e.nonce),e.pendingToken&&(s.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(s.accessToken=e.oauthToken,s.secret=e.oauthTokenSecret):_fail("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e,{providerId:o,signInMethod:a}=s,c=__rest(s,["providerId","signInMethod"]);if(!o||!a)return null;const d=new OAuthCredential(o,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const s=this.buildRequest();return signInWithIdp(e,s)}_linkToIdToken(e,s){const o=this.buildRequest();return o.idToken=s,signInWithIdp(e,o)}_getReauthenticationResolver(e){const s=this.buildRequest();return s.autoCreate=!1,signInWithIdp(e,s)}buildRequest(){const e={requestUri:IDP_REQUEST_URI$1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),e.postBody=querystring(s)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sendPhoneVerificationCode(i,e){return _performApiRequest(i,"POST","/v1/accounts:sendVerificationCode",_addTidIfNecessary(i,e))}async function signInWithPhoneNumber$1(i,e){return _performSignInRequest(i,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(i,e))}async function linkWithPhoneNumber$1(i,e){const s=await _performSignInRequest(i,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(i,e));if(s.temporaryProof)throw _makeTaggedError(i,"account-exists-with-different-credential",s);return s}const VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_={USER_NOT_FOUND:"user-not-found"};async function verifyPhoneNumberForExisting(i,e){const s=Object.assign(Object.assign({},e),{operation:"REAUTH"});return _performSignInRequest(i,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(i,s),VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PhoneAuthCredential extends AuthCredential{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,s){return new PhoneAuthCredential({verificationId:e,verificationCode:s})}static _fromTokenResponse(e,s){return new PhoneAuthCredential({phoneNumber:e,temporaryProof:s})}_getIdTokenResponse(e){return signInWithPhoneNumber$1(e,this._makeVerificationRequest())}_linkToIdToken(e,s){return linkWithPhoneNumber$1(e,Object.assign({idToken:s},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return verifyPhoneNumberForExisting(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:s,verificationId:o,verificationCode:a}=this.params;return e&&s?{temporaryProof:e,phoneNumber:s}:{sessionInfo:o,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:s,verificationCode:o,phoneNumber:a,temporaryProof:c}=e;return!o&&!s&&!a&&!c?null:new PhoneAuthCredential({verificationId:s,verificationCode:o,phoneNumber:a,temporaryProof:c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function parseMode(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function parseDeepLink(i){const e=querystringDecode(extractQuerystring(i)).link,s=e?querystringDecode(extractQuerystring(e)).deep_link_id:null,o=querystringDecode(extractQuerystring(i)).deep_link_id;return(o?querystringDecode(extractQuerystring(o)).link:null)||o||s||e||i}class ActionCodeURL{constructor(e){var s,o,a,c,d,h;const g=querystringDecode(extractQuerystring(e)),_=(s=g.apiKey)!==null&&s!==void 0?s:null,b=(o=g.oobCode)!==null&&o!==void 0?o:null,et=parseMode((a=g.mode)!==null&&a!==void 0?a:null);_assert$4(_&&b&&et,"argument-error"),this.apiKey=_,this.operation=et,this.code=b,this.continueUrl=(c=g.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(d=g.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(h=g.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const s=parseDeepLink(e);try{return new ActionCodeURL(s)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EmailAuthProvider{constructor(){this.providerId=EmailAuthProvider.PROVIDER_ID}static credential(e,s){return EmailAuthCredential._fromEmailAndPassword(e,s)}static credentialWithLink(e,s){const o=ActionCodeURL.parseLink(s);return _assert$4(o,"argument-error"),EmailAuthCredential._fromEmailAndCode(e,o.code,o.tenantId)}}EmailAuthProvider.PROVIDER_ID="password";EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD="password";EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FederatedAuthProvider{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class OAuthProvider extends BaseOAuthProvider{static credentialFromJSON(e){const s=typeof e=="string"?JSON.parse(e):e;return _assert$4("providerId"in s&&"signInMethod"in s,"argument-error"),OAuthCredential._fromParams(s)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return _assert$4(e.idToken||e.accessToken,"argument-error"),OAuthCredential._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return OAuthProvider.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return OAuthProvider.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:s,oauthAccessToken:o,oauthTokenSecret:a,pendingToken:c,nonce:d,providerId:h}=e;if(!o&&!a&&!s&&!c||!h)return null;try{return new OAuthProvider(h)._credential({idToken:s,accessToken:o,nonce:d,pendingToken:c})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(e){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return FacebookAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return FacebookAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(e.oauthAccessToken)}catch{return null}}}FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com";FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(e,s){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:s})}static credentialFromResult(e){return GoogleAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GoogleAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:s,oauthAccessToken:o}=e;if(!s&&!o)return null;try{return GoogleAuthProvider.credential(s,o)}catch{return null}}}GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com";GoogleAuthProvider.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(e){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return GithubAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GithubAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return GithubAuthProvider.credential(e.oauthAccessToken)}catch{return null}}}GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com";GithubAuthProvider.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IDP_REQUEST_URI="http://localhost";class SAMLAuthCredential extends AuthCredential{constructor(e,s){super(e,e),this.pendingToken=s}_getIdTokenResponse(e){const s=this.buildRequest();return signInWithIdp(e,s)}_linkToIdToken(e,s){const o=this.buildRequest();return o.idToken=s,signInWithIdp(e,o)}_getReauthenticationResolver(e){const s=this.buildRequest();return s.autoCreate=!1,signInWithIdp(e,s)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e,{providerId:o,signInMethod:a,pendingToken:c}=s;return!o||!a||!c||o!==a?null:new SAMLAuthCredential(o,c)}static _create(e,s){return new SAMLAuthCredential(e,s)}buildRequest(){return{requestUri:IDP_REQUEST_URI,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SAML_PROVIDER_PREFIX="saml.";class SAMLAuthProvider extends FederatedAuthProvider{constructor(e){_assert$4(e.startsWith(SAML_PROVIDER_PREFIX),"argument-error"),super(e)}static credentialFromResult(e){return SAMLAuthProvider.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return SAMLAuthProvider.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const s=SAMLAuthCredential.fromJSON(e);return _assert$4(s,"argument-error"),s}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:s,providerId:o}=e;if(!s||!o)return null;try{return SAMLAuthCredential._create(o,s)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(e,s){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:s})}static credentialFromResult(e){return TwitterAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return TwitterAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:s,oauthTokenSecret:o}=e;if(!s||!o)return null;try{return TwitterAuthProvider.credential(s,o)}catch{return null}}}TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com";TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signUp(i,e){return _performSignInRequest(i,"POST","/v1/accounts:signUp",_addTidIfNecessary(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UserCredentialImpl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,s,o,a=!1){const c=await UserImpl._fromIdTokenResponse(e,o,a),d=providerIdForResponse(o);return new UserCredentialImpl({user:c,providerId:d,_tokenResponse:o,operationType:s})}static async _forOperation(e,s,o){await e._updateTokensIfNecessary(o,!0);const a=providerIdForResponse(o);return new UserCredentialImpl({user:e,providerId:a,_tokenResponse:o,operationType:s})}}function providerIdForResponse(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInAnonymously(i){var e;const s=_castAuth(i);if(await s._initializationPromise,!((e=s.currentUser)===null||e===void 0)&&e.isAnonymous)return new UserCredentialImpl({user:s.currentUser,providerId:null,operationType:"signIn"});const o=await signUp(s,{returnSecureToken:!0}),a=await UserCredentialImpl._fromIdTokenResponse(s,"signIn",o,!0);return await s._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MultiFactorError extends FirebaseError{constructor(e,s,o,a){var c;super(s.code,s.message),this.operationType=o,this.user=a,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:s.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(e,s,o,a){return new MultiFactorError(e,s,o,a)}}function _processCredentialSavingMfaContextIfNecessary(i,e,s,o){return(e==="reauthenticate"?s._getReauthenticationResolver(i):s._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?MultiFactorError._fromErrorAndOperation(i,c,e,o):c})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function providerDataAsNames(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function unlink(i,e){const s=getModularInstance(i);await _assertLinkedStatus(!0,s,e);const{providerUserInfo:o}=await deleteLinkedAccounts(s.auth,{idToken:await s.getIdToken(),deleteProvider:[e]}),a=providerDataAsNames(o||[]);return s.providerData=s.providerData.filter(c=>a.has(c.providerId)),a.has("phone")||(s.phoneNumber=null),await s.auth._persistUserIfCurrent(s),s}async function _link$1(i,e,s=!1){const o=await _logoutIfInvalidated(i,e._linkToIdToken(i.auth,await i.getIdToken()),s);return UserCredentialImpl._forOperation(i,"link",o)}async function _assertLinkedStatus(i,e,s){await _reloadWithoutSaving(e);const o=providerDataAsNames(e.providerData),a=i===!1?"provider-already-linked":"no-such-provider";_assert$4(o.has(s)===i,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reauthenticate(i,e,s=!1){var o;const{auth:a}=i,c="reauthenticate";try{const d=await _logoutIfInvalidated(i,_processCredentialSavingMfaContextIfNecessary(a,c,e,i),s);_assert$4(d.idToken,a,"internal-error");const h=_parseToken(d.idToken);_assert$4(h,a,"internal-error");const{sub:g}=h;return _assert$4(i.uid===g,a,"user-mismatch"),UserCredentialImpl._forOperation(i,c,d)}catch(d){throw((o=d)===null||o===void 0?void 0:o.code)==="auth/user-not-found"&&_fail(a,"user-mismatch"),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _signInWithCredential(i,e,s=!1){const o="signIn",a=await _processCredentialSavingMfaContextIfNecessary(i,o,e),c=await UserCredentialImpl._fromIdTokenResponse(i,o,a);return s||await i._updateCurrentUser(c.user),c}async function signInWithCredential(i,e){return _signInWithCredential(_castAuth(i),e)}async function linkWithCredential(i,e){const s=getModularInstance(i);return await _assertLinkedStatus(!1,s,e.providerId),_link$1(s,e)}async function reauthenticateWithCredential(i,e){return _reauthenticate(getModularInstance(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithCustomToken$1(i,e){return _performSignInRequest(i,"POST","/v1/accounts:signInWithCustomToken",_addTidIfNecessary(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithCustomToken(i,e){const s=_castAuth(i),o=await signInWithCustomToken$1(s,{token:e,returnSecureToken:!0}),a=await UserCredentialImpl._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MultiFactorInfoImpl{constructor(e,s){this.factorId=e,this.uid=s.mfaEnrollmentId,this.enrollmentTime=new Date(s.enrolledAt).toUTCString(),this.displayName=s.displayName}static _fromServerResponse(e,s){return"phoneInfo"in s?PhoneMultiFactorInfoImpl._fromServerResponse(e,s):_fail(e,"internal-error")}}class PhoneMultiFactorInfoImpl extends MultiFactorInfoImpl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,s){return new PhoneMultiFactorInfoImpl(s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _setActionCodeSettingsOnRequest(i,e,s){var o;_assert$4(((o=s.url)===null||o===void 0?void 0:o.length)>0,i,"invalid-continue-uri"),_assert$4(typeof s.dynamicLinkDomain>"u"||s.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),e.continueUrl=s.url,e.dynamicLinkDomain=s.dynamicLinkDomain,e.canHandleCodeInApp=s.handleCodeInApp,s.iOS&&(_assert$4(s.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=s.iOS.bundleId),s.android&&(_assert$4(s.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=s.android.installApp,e.androidMinimumVersionCode=s.android.minimumVersion,e.androidPackageName=s.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sendPasswordResetEmail(i,e,s){const o=getModularInstance(i),a={requestType:"PASSWORD_RESET",email:e};s&&_setActionCodeSettingsOnRequest(o,a,s),await sendPasswordResetEmail$1(o,a)}async function confirmPasswordReset(i,e,s){await resetPassword(getModularInstance(i),{oobCode:e,newPassword:s})}async function applyActionCode(i,e){await applyActionCode$1(getModularInstance(i),{oobCode:e})}async function checkActionCode(i,e){const s=getModularInstance(i),o=await resetPassword(s,{oobCode:e}),a=o.requestType;switch(_assert$4(a,s,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_assert$4(o.newEmail,s,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_assert$4(o.mfaInfo,s,"internal-error");default:_assert$4(o.email,s,"internal-error")}let c=null;return o.mfaInfo&&(c=MultiFactorInfoImpl._fromServerResponse(_castAuth(s),o.mfaInfo)),{data:{email:(o.requestType==="VERIFY_AND_CHANGE_EMAIL"?o.newEmail:o.email)||null,previousEmail:(o.requestType==="VERIFY_AND_CHANGE_EMAIL"?o.email:o.newEmail)||null,multiFactorInfo:c},operation:a}}async function verifyPasswordResetCode(i,e){const{data:s}=await checkActionCode(getModularInstance(i),e);return s.email}async function createUserWithEmailAndPassword(i,e,s){const o=_castAuth(i),a=await signUp(o,{returnSecureToken:!0,email:e,password:s}),c=await UserCredentialImpl._fromIdTokenResponse(o,"signIn",a);return await o._updateCurrentUser(c.user),c}function signInWithEmailAndPassword(i,e,s){return signInWithCredential(getModularInstance(i),EmailAuthProvider.credential(e,s))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sendSignInLinkToEmail(i,e,s){const o=getModularInstance(i),a={requestType:"EMAIL_SIGNIN",email:e};_assert$4(s.handleCodeInApp,o,"argument-error"),s&&_setActionCodeSettingsOnRequest(o,a,s),await sendSignInLinkToEmail$1(o,a)}function isSignInWithEmailLink(i,e){const s=ActionCodeURL.parseLink(e);return(s==null?void 0:s.operation)==="EMAIL_SIGNIN"}async function signInWithEmailLink(i,e,s){const o=getModularInstance(i),a=EmailAuthProvider.credentialWithLink(e,s||_getCurrentUrl());return _assert$4(a._tenantId===(o.tenantId||null),o,"tenant-id-mismatch"),signInWithCredential(o,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function createAuthUri(i,e){return _performApiRequest(i,"POST","/v1/accounts:createAuthUri",_addTidIfNecessary(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fetchSignInMethodsForEmail(i,e){const s=_isHttpOrHttps$1()?_getCurrentUrl():"http://localhost",o={identifier:e,continueUri:s},{signinMethods:a}=await createAuthUri(getModularInstance(i),o);return a||[]}async function sendEmailVerification(i,e){const s=getModularInstance(i),o=await i.getIdToken(),a={requestType:"VERIFY_EMAIL",idToken:o};e&&_setActionCodeSettingsOnRequest(s.auth,a,e);const{email:c}=await sendEmailVerification$1(s.auth,a);c!==i.email&&await i.reload()}async function verifyBeforeUpdateEmail(i,e,s){const o=getModularInstance(i),a=await i.getIdToken(),c={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:a,newEmail:e};s&&_setActionCodeSettingsOnRequest(o.auth,c,s);const{email:d}=await verifyAndChangeEmail(o.auth,c);d!==i.email&&await i.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function updateProfile$1(i,e){return _performApiRequest(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function updateProfile(i,{displayName:e,photoURL:s}){if(e===void 0&&s===void 0)return;const o=getModularInstance(i),c={idToken:await o.getIdToken(),displayName:e,photoUrl:s,returnSecureToken:!0},d=await _logoutIfInvalidated(o,updateProfile$1(o.auth,c));o.displayName=d.displayName||null,o.photoURL=d.photoUrl||null;const h=o.providerData.find(({providerId:g})=>g==="password");h&&(h.displayName=o.displayName,h.photoURL=o.photoURL),await o._updateTokensIfNecessary(d)}function updateEmail(i,e){return updateEmailOrPassword(getModularInstance(i),e,null)}function updatePassword(i,e){return updateEmailOrPassword(getModularInstance(i),null,e)}async function updateEmailOrPassword(i,e,s){const{auth:o}=i,c={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(c.email=e),s&&(c.password=s);const d=await _logoutIfInvalidated(i,updateEmailPassword(o,c));await i._updateTokensIfNecessary(d,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _fromIdTokenResponse(i){var e,s;if(!i)return null;const{providerId:o}=i,a=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},c=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!o&&(i==null?void 0:i.idToken)){const d=(s=(e=_parseToken(i.idToken))===null||e===void 0?void 0:e.firebase)===null||s===void 0?void 0:s.sign_in_provider;if(d){const h=d!=="anonymous"&&d!=="custom"?d:null;return new GenericAdditionalUserInfo(c,h)}}if(!o)return null;switch(o){case"facebook.com":return new FacebookAdditionalUserInfo(c,a);case"github.com":return new GithubAdditionalUserInfo(c,a);case"google.com":return new GoogleAdditionalUserInfo(c,a);case"twitter.com":return new TwitterAdditionalUserInfo(c,a,i.screenName||null);case"custom":case"anonymous":return new GenericAdditionalUserInfo(c,null);default:return new GenericAdditionalUserInfo(c,o,a)}}class GenericAdditionalUserInfo{constructor(e,s,o={}){this.isNewUser=e,this.providerId=s,this.profile=o}}class FederatedAdditionalUserInfoWithUsername extends GenericAdditionalUserInfo{constructor(e,s,o,a){super(e,s,o),this.username=a}}class FacebookAdditionalUserInfo extends GenericAdditionalUserInfo{constructor(e,s){super(e,"facebook.com",s)}}class GithubAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername{constructor(e,s){super(e,"github.com",s,typeof(s==null?void 0:s.login)=="string"?s==null?void 0:s.login:null)}}class GoogleAdditionalUserInfo extends GenericAdditionalUserInfo{constructor(e,s){super(e,"google.com",s)}}class TwitterAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername{constructor(e,s,o){super(e,"twitter.com",s,o)}}function getAdditionalUserInfo(i){const{user:e,_tokenResponse:s}=i;return e.isAnonymous&&!s?{providerId:null,isNewUser:!1,profile:null}:_fromIdTokenResponse(s)}class MultiFactorSessionImpl{constructor(e,s){this.type=e,this.credential=s}static _fromIdtoken(e){return new MultiFactorSessionImpl("enroll",e)}static _fromMfaPendingCredential(e){return new MultiFactorSessionImpl("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var s,o;if(e!=null&&e.multiFactorSession){if(!((s=e.multiFactorSession)===null||s===void 0)&&s.pendingCredential)return MultiFactorSessionImpl._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((o=e.multiFactorSession)===null||o===void 0)&&o.idToken)return MultiFactorSessionImpl._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MultiFactorResolverImpl{constructor(e,s,o){this.session=e,this.hints=s,this.signInResolver=o}static _fromError(e,s){const o=_castAuth(e),a=s.customData._serverResponse,c=(a.mfaInfo||[]).map(h=>MultiFactorInfoImpl._fromServerResponse(o,h));_assert$4(a.mfaPendingCredential,o,"internal-error");const d=MultiFactorSessionImpl._fromMfaPendingCredential(a.mfaPendingCredential);return new MultiFactorResolverImpl(d,c,async h=>{const g=await h._process(o,d);delete a.mfaInfo,delete a.mfaPendingCredential;const _=Object.assign(Object.assign({},a),{idToken:g.idToken,refreshToken:g.refreshToken});switch(s.operationType){case"signIn":const b=await UserCredentialImpl._fromIdTokenResponse(o,s.operationType,_);return await o._updateCurrentUser(b.user),b;case"reauthenticate":return _assert$4(s.user,o,"internal-error"),UserCredentialImpl._forOperation(s.user,s.operationType,_);default:_fail(o,"internal-error")}})}async resolveSignIn(e){const s=e;return this.signInResolver(s)}}function getMultiFactorResolver(i,e){var s;const o=getModularInstance(i),a=e;return _assert$4(e.customData.operationType,o,"argument-error"),_assert$4((s=a.customData._serverResponse)===null||s===void 0?void 0:s.mfaPendingCredential,o,"argument-error"),MultiFactorResolverImpl._fromError(o,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function startEnrollPhoneMfa(i,e){return _performApiRequest(i,"POST","/v2/accounts/mfaEnrollment:start",_addTidIfNecessary(i,e))}function finalizeEnrollPhoneMfa(i,e){return _performApiRequest(i,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(i,e))}function withdrawMfa(i,e){return _performApiRequest(i,"POST","/v2/accounts/mfaEnrollment:withdraw",_addTidIfNecessary(i,e))}class MultiFactorUserImpl{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(s=>{s.mfaInfo&&(this.enrolledFactors=s.mfaInfo.map(o=>MultiFactorInfoImpl._fromServerResponse(e.auth,o)))})}static _fromUser(e){return new MultiFactorUserImpl(e)}async getSession(){return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken())}async enroll(e,s){const o=e,a=await this.getSession(),c=await _logoutIfInvalidated(this.user,o._process(this.user.auth,a,s));return await this.user._updateTokensIfNecessary(c),this.user.reload()}async unenroll(e){var s;const o=typeof e=="string"?e:e.uid,a=await this.user.getIdToken(),c=await _logoutIfInvalidated(this.user,withdrawMfa(this.user.auth,{idToken:a,mfaEnrollmentId:o}));this.enrolledFactors=this.enrolledFactors.filter(({uid:d})=>d!==o),await this.user._updateTokensIfNecessary(c);try{await this.user.reload()}catch(d){if(((s=d)===null||s===void 0?void 0:s.code)!=="auth/user-token-expired")throw d}}}const multiFactorUserCache=new WeakMap;function multiFactor(i){const e=getModularInstance(i);return multiFactorUserCache.has(e)||multiFactorUserCache.set(e,MultiFactorUserImpl._fromUser(e)),multiFactorUserCache.get(e)}const STORAGE_AVAILABLE_KEY="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BrowserPersistenceClass{constructor(e,s){this.storageRetriever=e,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(STORAGE_AVAILABLE_KEY,"1"),this.storage.removeItem(STORAGE_AVAILABLE_KEY),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,s){return this.storage.setItem(e,JSON.stringify(s)),Promise.resolve()}_get(e){const s=this.storage.getItem(e);return Promise.resolve(s?JSON.parse(s):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _iframeCannotSyncWebStorage(){const i=getUA();return _isSafari(i)||_isIOS(i)}const _POLLING_INTERVAL_MS$1=1e3,IE10_LOCAL_STORAGE_SYNC_DELAY=10;class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,s)=>this.onStorageEvent(e,s),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_iframeCannotSyncWebStorage()&&_isIframe(),this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const s of Object.keys(this.listeners)){const o=this.storage.getItem(s),a=this.localCache[s];o!==a&&e(s,a,o)}}onStorageEvent(e,s=!1){if(!e.key){this.forAllChangedKeys((d,h,g)=>{this.notifyListeners(d,g)});return}const o=e.key;if(s?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const d=this.storage.getItem(o);if(e.newValue!==d)e.newValue!==null?this.storage.setItem(o,e.newValue):this.storage.removeItem(o);else if(this.localCache[o]===e.newValue&&!s)return}const a=()=>{const d=this.storage.getItem(o);!s&&this.localCache[o]===d||this.notifyListeners(o,d)},c=this.storage.getItem(o);_isIE10()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,IE10_LOCAL_STORAGE_SYNC_DELAY):a()}notifyListeners(e,s){this.localCache[e]=s;const o=this.listeners[e];if(o)for(const a of Array.from(o))a(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,s,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:s,newValue:o}),!0)})},_POLLING_INTERVAL_MS$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,s){await super._set(e,s),this.localCache[e]=JSON.stringify(s)}async _get(e){const s=await super._get(e);return this.localCache[e]=JSON.stringify(s),s}async _remove(e){await super._remove(e),delete this.localCache[e]}}BrowserLocalPersistence.type="LOCAL";const browserLocalPersistence=BrowserLocalPersistence;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,s){}_removeListener(e,s){}}BrowserSessionPersistence.type="SESSION";const browserSessionPersistence=BrowserSessionPersistence;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _allSettled(i){return Promise.all(i.map(async e=>{try{const s=await e;return{fulfilled:!0,value:s}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Receiver{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const s=this.receivers.find(a=>a.isListeningto(e));if(s)return s;const o=new Receiver(e);return this.receivers.push(o),o}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const s=e,{eventId:o,eventType:a,data:c}=s.data,d=this.handlersMap[a];if(!(d!=null&&d.size))return;s.ports[0].postMessage({status:"ack",eventId:o,eventType:a});const h=Array.from(d).map(async _=>_(s.origin,c)),g=await _allSettled(h);s.ports[0].postMessage({status:"done",eventId:o,eventType:a,response:g})}_subscribe(e,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(s)}_unsubscribe(e,s){this.handlersMap[e]&&s&&this.handlersMap[e].delete(s),(!s||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Receiver.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _generateEventId(i="",e=10){let s="";for(let o=0;o<e;o++)s+=Math.floor(Math.random()*10);return i+s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sender{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,s,o=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((h,g)=>{const _=_generateEventId("",20);a.port1.start();const b=setTimeout(()=>{g(new Error("unsupported_event"))},o);d={messageChannel:a,onMessage(et){const ot=et;if(ot.data.eventId===_)switch(ot.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),h(ot.data.response);break;default:clearTimeout(b),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:_,data:s},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _window(){return window}function _setWindowLocation(i){_window().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isWorker$1(){return typeof _window().WorkerGlobalScope<"u"&&typeof _window().importScripts=="function"}async function _getActiveServiceWorker(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _getServiceWorkerController(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function _getWorkerGlobalScope(){return _isWorker$1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB_NAME="firebaseLocalStorageDb",DB_VERSION=1,DB_OBJECTSTORE_NAME="firebaseLocalStorage",DB_DATA_KEYPATH="fbase_key";class DBPromise{constructor(e){this.request=e}toPromise(){return new Promise((e,s)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function getObjectStore(i,e){return i.transaction([DB_OBJECTSTORE_NAME],e?"readwrite":"readonly").objectStore(DB_OBJECTSTORE_NAME)}function _deleteDatabase(){const i=indexedDB.deleteDatabase(DB_NAME);return new DBPromise(i).toPromise()}function _openDatabase(){const i=indexedDB.open(DB_NAME,DB_VERSION);return new Promise((e,s)=>{i.addEventListener("error",()=>{s(i.error)}),i.addEventListener("upgradeneeded",()=>{const o=i.result;try{o.createObjectStore(DB_OBJECTSTORE_NAME,{keyPath:DB_DATA_KEYPATH})}catch(a){s(a)}}),i.addEventListener("success",async()=>{const o=i.result;o.objectStoreNames.contains(DB_OBJECTSTORE_NAME)?e(o):(o.close(),await _deleteDatabase(),e(await _openDatabase()))})})}async function _putObject(i,e,s){const o=getObjectStore(i,!0).put({[DB_DATA_KEYPATH]:e,value:s});return new DBPromise(o).toPromise()}async function getObject(i,e){const s=getObjectStore(i,!1).get(e),o=await new DBPromise(s).toPromise();return o===void 0?null:o.value}function _deleteObject(i,e){const s=getObjectStore(i,!0).delete(e);return new DBPromise(s).toPromise()}const _POLLING_INTERVAL_MS=800,_TRANSACTION_RETRY_COUNT=3;class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _openDatabase(),this.db)}async _withRetries(e){let s=0;for(;;)try{const o=await this._openDb();return await e(o)}catch(o){if(s++>_TRANSACTION_RETRY_COUNT)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker$1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_getWorkerGlobalScope()),this.receiver._subscribe("keyChanged",async(e,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(e,s)=>["keyChanged"])}async initializeSender(){var e,s;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);const o=await this.sender._send("ping",{},800);!o||((e=o[0])===null||e===void 0?void 0:e.fulfilled)&&((s=o[0])===null||s===void 0?void 0:s.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_getServiceWorkerController()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _openDatabase();return await _putObject(e,STORAGE_AVAILABLE_KEY,"1"),await _deleteObject(e,STORAGE_AVAILABLE_KEY),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,s){return this._withPendingWrite(async()=>(await this._withRetries(o=>_putObject(o,e,s)),this.localCache[e]=s,this.notifyServiceWorker(e)))}async _get(e){const s=await this._withRetries(o=>getObject(o,e));return this.localCache[e]=s,s}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(s=>_deleteObject(s,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=getObjectStore(a,!1).getAll();return new DBPromise(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const s=[],o=new Set;for(const{fbase_key:a,value:c}of e)o.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),s.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!o.has(a)&&(this.notifyListeners(a,null),s.push(a));return s}notifyListeners(e,s){this.localCache[e]=s;const o=this.listeners[e];if(o)for(const a of Array.from(o))a(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_POLLING_INTERVAL_MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,s){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IndexedDBLocalPersistence.type="LOCAL";const indexedDBLocalPersistence=IndexedDBLocalPersistence;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function startSignInPhoneMfa(i,e){return _performApiRequest(i,"POST","/v2/accounts/mfaSignIn:start",_addTidIfNecessary(i,e))}function finalizeSignInPhoneMfa(i,e){return _performApiRequest(i,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getRecaptchaParams(i){return(await _performApiRequest(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getScriptParentElement(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}function _loadJS(i){return new Promise((e,s)=>{const o=document.createElement("script");o.setAttribute("src",i),o.onload=e,o.onerror=a=>{const c=_createError("internal-error");c.customData=a,s(c)},o.type="text/javascript",o.charset="UTF-8",getScriptParentElement().appendChild(o)})}function _generateCallbackName(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _SOLVE_TIME_MS=500,_EXPIRATION_TIME_MS=6e4,_WIDGET_ID_START=1e12;class MockReCaptcha{constructor(e){this.auth=e,this.counter=_WIDGET_ID_START,this._widgets=new Map}render(e,s){const o=this.counter;return this._widgets.set(o,new MockWidget(e,this.auth.name,s||{})),this.counter++,o}reset(e){var s;const o=e||_WIDGET_ID_START;(s=this._widgets.get(o))===null||s===void 0||s.delete(),this._widgets.delete(o)}getResponse(e){var s;const o=e||_WIDGET_ID_START;return((s=this._widgets.get(o))===null||s===void 0?void 0:s.getResponse())||""}async execute(e){var s;const o=e||_WIDGET_ID_START;return(s=this._widgets.get(o))===null||s===void 0||s.execute(),""}}class MockWidget{constructor(e,s,o){this.params=o,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;_assert$4(a,"argument-error",{appName:s}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=generateRandomAlphaNumericString(50);const{callback:e,"expired-callback":s}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,s)try{s()}catch{}this.isVisible&&this.execute()},_EXPIRATION_TIME_MS)},_SOLVE_TIME_MS))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function generateRandomAlphaNumericString(i){const e=[],s="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let o=0;o<i;o++)e.push(s.charAt(Math.floor(Math.random()*s.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _JSLOAD_CALLBACK=_generateCallbackName("rcb"),NETWORK_TIMEOUT_DELAY=new Delay(3e4,6e4),RECAPTCHA_BASE="https://www.google.com/recaptcha/api.js?";class ReCaptchaLoaderImpl{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=_window().grecaptcha)===null||e===void 0)&&e.render)}load(e,s=""){return _assert$4(isHostLanguageValid(s),e,"argument-error"),this.shouldResolveImmediately(s)?Promise.resolve(_window().grecaptcha):new Promise((o,a)=>{const c=_window().setTimeout(()=>{a(_createError(e,"network-request-failed"))},NETWORK_TIMEOUT_DELAY.get());_window()[_JSLOAD_CALLBACK]=()=>{_window().clearTimeout(c),delete _window()[_JSLOAD_CALLBACK];const h=_window().grecaptcha;if(!h){a(_createError(e,"internal-error"));return}const g=h.render;h.render=(_,b)=>{const et=g(_,b);return this.counter++,et},this.hostLanguage=s,o(h)};const d=`${RECAPTCHA_BASE}?${querystring({onload:_JSLOAD_CALLBACK,render:"explicit",hl:s})}`;_loadJS(d).catch(()=>{clearTimeout(c),a(_createError(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var s;return!!(!((s=_window().grecaptcha)===null||s===void 0)&&s.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function isHostLanguageValid(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class MockReCaptchaLoaderImpl{async load(e){return new MockReCaptcha(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RECAPTCHA_VERIFIER_TYPE="recaptcha",DEFAULT_PARAMS={theme:"light",type:"image"};class RecaptchaVerifier$1{constructor(e,s=Object.assign({},DEFAULT_PARAMS),o){this.parameters=s,this.type=RECAPTCHA_VERIFIER_TYPE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=_castAuth(o),this.isInvisible=this.parameters.size==="invisible",_assert$4(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof e=="string"?document.getElementById(e):e;_assert$4(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new MockReCaptchaLoaderImpl:new ReCaptchaLoaderImpl,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),s=this.getAssertedRecaptcha(),o=s.getResponse(e);return o||new Promise(a=>{const c=d=>{!d||(this.tokenChangeListeners.delete(c),a(d))};this.tokenChangeListeners.add(c),this.isInvisible&&s.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){_assert$4(!this.parameters.sitekey,this.auth,"argument-error"),_assert$4(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_assert$4(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return s=>{if(this.tokenChangeListeners.forEach(o=>o(s)),typeof e=="function")e(s);else if(typeof e=="string"){const o=_window()[e];typeof o=="function"&&o(s)}}}assertNotDestroyed(){_assert$4(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const s=document.createElement("div");e.appendChild(s),e=s}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_assert$4(_isHttpOrHttps$1()&&!_isWorker$1(),this.auth,"internal-error"),await domReady(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await getRecaptchaParams(this.auth);_assert$4(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _assert$4(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function domReady(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ConfirmationResultImpl{constructor(e,s){this.verificationId=e,this.onConfirmation=s}confirm(e){const s=PhoneAuthCredential._fromVerification(this.verificationId,e);return this.onConfirmation(s)}}async function signInWithPhoneNumber(i,e,s){const o=_castAuth(i),a=await _verifyPhoneNumber(o,e,getModularInstance(s));return new ConfirmationResultImpl(a,c=>signInWithCredential(o,c))}async function linkWithPhoneNumber(i,e,s){const o=getModularInstance(i);await _assertLinkedStatus(!1,o,"phone");const a=await _verifyPhoneNumber(o.auth,e,getModularInstance(s));return new ConfirmationResultImpl(a,c=>linkWithCredential(o,c))}async function reauthenticateWithPhoneNumber(i,e,s){const o=getModularInstance(i),a=await _verifyPhoneNumber(o.auth,e,getModularInstance(s));return new ConfirmationResultImpl(a,c=>reauthenticateWithCredential(o,c))}async function _verifyPhoneNumber(i,e,s){var o;const a=await s.verify();try{_assert$4(typeof a=="string",i,"argument-error"),_assert$4(s.type===RECAPTCHA_VERIFIER_TYPE,i,"argument-error");let c;if(typeof e=="string"?c={phoneNumber:e}:c=e,"session"in c){const d=c.session;if("phoneNumber"in c)return _assert$4(d.type==="enroll",i,"internal-error"),(await startEnrollPhoneMfa(i,{idToken:d.credential,phoneEnrollmentInfo:{phoneNumber:c.phoneNumber,recaptchaToken:a}})).phoneSessionInfo.sessionInfo;{_assert$4(d.type==="signin",i,"internal-error");const h=((o=c.multiFactorHint)===null||o===void 0?void 0:o.uid)||c.multiFactorUid;return _assert$4(h,i,"missing-multi-factor-info"),(await startSignInPhoneMfa(i,{mfaPendingCredential:d.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:a}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:d}=await sendPhoneVerificationCode(i,{phoneNumber:c.phoneNumber,recaptchaToken:a});return d}}finally{s._reset()}}async function updatePhoneNumber(i,e){await _link$1(getModularInstance(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PhoneAuthProvider$1{constructor(e){this.providerId=PhoneAuthProvider$1.PROVIDER_ID,this.auth=_castAuth(e)}verifyPhoneNumber(e,s){return _verifyPhoneNumber(this.auth,e,getModularInstance(s))}static credential(e,s){return PhoneAuthCredential._fromVerification(e,s)}static credentialFromResult(e){const s=e;return PhoneAuthProvider$1.credentialFromTaggedObject(s)}static credentialFromError(e){return PhoneAuthProvider$1.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:s,temporaryProof:o}=e;return s&&o?PhoneAuthCredential._fromTokenResponse(s,o):null}}PhoneAuthProvider$1.PROVIDER_ID="phone";PhoneAuthProvider$1.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _withDefaultResolver(i,e){return e?_getInstance(e):(_assert$4(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IdpCredential extends AuthCredential{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return signInWithIdp(e,this._buildIdpRequest())}_linkToIdToken(e,s){return signInWithIdp(e,this._buildIdpRequest(s))}_getReauthenticationResolver(e){return signInWithIdp(e,this._buildIdpRequest())}_buildIdpRequest(e){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(s.idToken=e),s}}function _signIn(i){return _signInWithCredential(i.auth,new IdpCredential(i),i.bypassAuthState)}function _reauth(i){const{auth:e,user:s}=i;return _assert$4(s,e,"internal-error"),_reauthenticate(s,new IdpCredential(i),i.bypassAuthState)}async function _link(i){const{auth:e,user:s}=i;return _assert$4(s,e,"internal-error"),_link$1(s,new IdpCredential(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AbstractPopupRedirectOperation{constructor(e,s,o,a,c=!1){this.auth=e,this.resolver=o,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(e,s)=>{this.pendingPromise={resolve:e,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(e){const{urlResponse:s,sessionId:o,postBody:a,tenantId:c,error:d,type:h}=e;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:s,sessionId:o,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(e){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){debugAssert(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _POLL_WINDOW_CLOSE_TIMEOUT=new Delay(2e3,1e4);async function signInWithPopup(i,e,s){const o=_castAuth(i);_assertInstanceOf(i,e,FederatedAuthProvider);const a=_withDefaultResolver(o,s);return new PopupOperation(o,"signInViaPopup",e,a).executeNotNull()}async function reauthenticateWithPopup(i,e,s){const o=getModularInstance(i);_assertInstanceOf(o.auth,e,FederatedAuthProvider);const a=_withDefaultResolver(o.auth,s);return new PopupOperation(o.auth,"reauthViaPopup",e,a,o).executeNotNull()}async function linkWithPopup(i,e,s){const o=getModularInstance(i);_assertInstanceOf(o.auth,e,FederatedAuthProvider);const a=_withDefaultResolver(o.auth,s);return new PopupOperation(o.auth,"linkViaPopup",e,a,o).executeNotNull()}class PopupOperation extends AbstractPopupRedirectOperation{constructor(e,s,o,a,c){super(e,s,a,c),this.provider=o,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _assert$4(e,this.auth,"internal-error"),e}async onExecution(){debugAssert(this.filter.length===1,"Popup operations only handle one event");const e=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){const e=()=>{var s,o;if(!((o=(s=this.authWindow)===null||s===void 0?void 0:s.window)===null||o===void 0)&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,_POLL_WINDOW_CLOSE_TIMEOUT.get())};e()}}PopupOperation.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PENDING_REDIRECT_KEY="pendingRedirect",redirectOutcomeMap=new Map;class RedirectAction extends AbstractPopupRedirectOperation{constructor(e,s,o=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,o),this.eventId=null}async execute(){let e=redirectOutcomeMap.get(this.auth._key());if(!e){try{const o=await _getAndClearPendingRedirectStatus(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(o)}catch(s){e=()=>Promise.reject(s)}redirectOutcomeMap.set(this.auth._key(),e)}return this.bypassAuthState||redirectOutcomeMap.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const s=await this.auth._redirectUserForId(e.eventId);if(s)return this.user=s,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _getAndClearPendingRedirectStatus(i,e){const s=pendingRedirectKey(e),o=resolverPersistence(i);if(!await o._isAvailable())return!1;const a=await o._get(s)==="true";return await o._remove(s),a}async function _setPendingRedirectStatus(i,e){return resolverPersistence(i)._set(pendingRedirectKey(e),"true")}function _clearRedirectOutcomes(){redirectOutcomeMap.clear()}function _overrideRedirectResult(i,e){redirectOutcomeMap.set(i._key(),e)}function resolverPersistence(i){return _getInstance(i._redirectPersistence)}function pendingRedirectKey(i){return _persistenceKeyName(PENDING_REDIRECT_KEY,i.config.apiKey,i.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function signInWithRedirect(i,e,s){return _signInWithRedirect(i,e,s)}async function _signInWithRedirect(i,e,s){const o=_castAuth(i);_assertInstanceOf(i,e,FederatedAuthProvider);const a=_withDefaultResolver(o,s);return await _setPendingRedirectStatus(a,o),a._openRedirect(o,e,"signInViaRedirect")}function reauthenticateWithRedirect(i,e,s){return _reauthenticateWithRedirect(i,e,s)}async function _reauthenticateWithRedirect(i,e,s){const o=getModularInstance(i);_assertInstanceOf(o.auth,e,FederatedAuthProvider);const a=_withDefaultResolver(o.auth,s);await _setPendingRedirectStatus(a,o.auth);const c=await prepareUserForRedirect(o);return a._openRedirect(o.auth,e,"reauthViaRedirect",c)}function linkWithRedirect(i,e,s){return _linkWithRedirect(i,e,s)}async function _linkWithRedirect(i,e,s){const o=getModularInstance(i);_assertInstanceOf(o.auth,e,FederatedAuthProvider);const a=_withDefaultResolver(o.auth,s);await _assertLinkedStatus(!1,o,e.providerId),await _setPendingRedirectStatus(a,o.auth);const c=await prepareUserForRedirect(o);return a._openRedirect(o.auth,e,"linkViaRedirect",c)}async function getRedirectResult(i,e){return await _castAuth(i)._initializationPromise,_getRedirectResult(i,e,!1)}async function _getRedirectResult(i,e,s=!1){const o=_castAuth(i),a=_withDefaultResolver(o,e),d=await new RedirectAction(o,a,s).execute();return d&&!s&&(delete d.user._redirectEventId,await o._persistUserIfCurrent(d.user),await o._setRedirectUser(null,e)),d}async function prepareUserForRedirect(i){const e=_generateEventId(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EVENT_DUPLICATION_CACHE_DURATION_MS=10*60*1e3;class AuthEventManager{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let s=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(e,o)&&(s=!0,this.sendToConsumer(e,o),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!isRedirectEvent(e)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=e,s=!0)),s}sendToConsumer(e,s){var o;if(e.error&&!isNullRedirectEvent(e)){const a=((o=e.error.code)===null||o===void 0?void 0:o.split("auth/")[1])||"internal-error";s.onError(_createError(this.auth,a))}else s.onAuthEvent(e)}isEventForConsumer(e,s){const o=s.eventId===null||!!e.eventId&&e.eventId===s.eventId;return s.filter.includes(e.type)&&o}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EVENT_DUPLICATION_CACHE_DURATION_MS&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(e))}saveEventToCache(e){this.cachedEventUids.add(eventUid(e)),this.lastProcessedEventTime=Date.now()}}function eventUid(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function isNullRedirectEvent({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function isRedirectEvent(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getProjectConfig(i,e={}){return _performApiRequest(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP_ADDRESS_REGEX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HTTP_REGEX=/^https?/;async function _validateOrigin$1(i){if(i.config.emulator)return;const{authorizedDomains:e}=await _getProjectConfig(i);for(const s of e)try{if(matchDomain(s))return}catch{}_fail(i,"unauthorized-domain")}function matchDomain(i){const e=_getCurrentUrl(),{protocol:s,hostname:o}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&o===""?s==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):s==="chrome-extension:"&&d.hostname===o}if(!HTTP_REGEX.test(s))return!1;if(IP_ADDRESS_REGEX.test(i))return o===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(o)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NETWORK_TIMEOUT=new Delay(3e4,6e4);function resetUnloadedGapiModules(){const i=_window().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let s=0;s<i.CP.length;s++)i.CP[s]=null}}function loadGapi(i){return new Promise((e,s)=>{var o,a,c;function d(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),s(_createError(i,"network-request-failed"))},timeout:NETWORK_TIMEOUT.get()})}if(!((a=(o=_window().gapi)===null||o===void 0?void 0:o.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=_window().gapi)===null||c===void 0)&&c.load)d();else{const h=_generateCallbackName("iframefcb");return _window()[h]=()=>{gapi.load?d():s(_createError(i,"network-request-failed"))},_loadJS(`https://apis.google.com/js/api.js?onload=${h}`).catch(g=>s(g))}}).catch(e=>{throw cachedGApiLoader=null,e})}let cachedGApiLoader=null;function _loadGapi(i){return cachedGApiLoader=cachedGApiLoader||loadGapi(i),cachedGApiLoader}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PING_TIMEOUT=new Delay(5e3,15e3),IFRAME_PATH="__/auth/iframe",EMULATED_IFRAME_PATH="emulator/auth/iframe",IFRAME_ATTRIBUTES={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EID_FROM_APIHOST=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function getIframeUrl(i){const e=i.config;_assert$4(e.authDomain,i,"auth-domain-config-required");const s=e.emulator?_emulatorUrl(e,EMULATED_IFRAME_PATH):`https://${i.config.authDomain}/${IFRAME_PATH}`,o={apiKey:e.apiKey,appName:i.name,v:SDK_VERSION},a=EID_FROM_APIHOST.get(i.config.apiHost);a&&(o.eid=a);const c=i._getFrameworks();return c.length&&(o.fw=c.join(",")),`${s}?${querystring(o).slice(1)}`}async function _openIframe(i){const e=await _loadGapi(i),s=_window().gapi;return _assert$4(s,i,"internal-error"),e.open({where:document.body,url:getIframeUrl(i),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IFRAME_ATTRIBUTES,dontclear:!0},o=>new Promise(async(a,c)=>{await o.restyle({setHideOnLeave:!1});const d=_createError(i,"network-request-failed"),h=_window().setTimeout(()=>{c(d)},PING_TIMEOUT.get());function g(){_window().clearTimeout(h),a(o)}o.ping(g).then(g,()=>{c(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BASE_POPUP_OPTIONS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DEFAULT_WIDTH=500,DEFAULT_HEIGHT=600,TARGET_BLANK="_blank",FIREFOX_EMPTY_URL="http://localhost";class AuthPopup{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _open(i,e,s,o=DEFAULT_WIDTH,a=DEFAULT_HEIGHT){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-o)/2,0).toString();let h="";const g=Object.assign(Object.assign({},BASE_POPUP_OPTIONS),{width:o.toString(),height:a.toString(),top:c,left:d}),_=getUA().toLowerCase();s&&(h=_isChromeIOS(_)?TARGET_BLANK:s),_isFirefox(_)&&(e=e||FIREFOX_EMPTY_URL,g.scrollbars="yes");const b=Object.entries(g).reduce((ot,[gt,_t])=>`${ot}${gt}=${_t},`,"");if(_isIOSStandalone(_)&&h!=="_self")return openAsNewWindowIOS(e||"",h),new AuthPopup(null);const et=window.open(e||"",h,b);_assert$4(et,i,"popup-blocked");try{et.focus()}catch{}return new AuthPopup(et)}function openAsNewWindowIOS(i,e){const s=document.createElement("a");s.href=i,s.target=e;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WIDGET_PATH="__/auth/handler",EMULATOR_WIDGET_PATH="emulator/auth/handler";function _getRedirectUrl(i,e,s,o,a,c){_assert$4(i.config.authDomain,i,"auth-domain-config-required"),_assert$4(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:s,redirectUrl:o,v:SDK_VERSION,eventId:a};if(e instanceof FederatedAuthProvider){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",isEmpty(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,_]of Object.entries(c||{}))d[g]=_}if(e instanceof BaseOAuthProvider){const g=e.getScopes().filter(_=>_!=="");g.length>0&&(d.scopes=g.join(","))}i.tenantId&&(d.tid=i.tenantId);const h=d;for(const g of Object.keys(h))h[g]===void 0&&delete h[g];return`${getHandlerBase(i)}?${querystring(h).slice(1)}`}function getHandlerBase({config:i}){return i.emulator?_emulatorUrl(i,EMULATOR_WIDGET_PATH):`https://${i.authDomain}/${WIDGET_PATH}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WEB_STORAGE_SUPPORT_KEY="webStorageSupport";class BrowserPopupRedirectResolver{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=browserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(e,s,o,a){var c;debugAssert((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const d=_getRedirectUrl(e,s,o,_getCurrentUrl(),a);return _open(e,d,_generateEventId())}async _openRedirect(e,s,o,a){return await this._originValidation(e),_setWindowLocation(_getRedirectUrl(e,s,o,_getCurrentUrl(),a)),new Promise(()=>{})}_initialize(e){const s=e._key();if(this.eventManagers[s]){const{manager:a,promise:c}=this.eventManagers[s];return a?Promise.resolve(a):(debugAssert(c,"If manager is not set, promise should be"),c)}const o=this.initAndGetManager(e);return this.eventManagers[s]={promise:o},o.catch(()=>{delete this.eventManagers[s]}),o}async initAndGetManager(e){const s=await _openIframe(e),o=new AuthEventManager(e);return s.register("authEvent",a=>(_assert$4(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:o.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:o},this.iframes[e._key()]=s,o}_isIframeWebStorageSupported(e,s){this.iframes[e._key()].send(WEB_STORAGE_SUPPORT_KEY,{type:WEB_STORAGE_SUPPORT_KEY},a=>{var c;const d=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[WEB_STORAGE_SUPPORT_KEY];d!==void 0&&s(!!d),_fail(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const s=e._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=_validateOrigin$1(e)),this.originValidationPromises[s]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}}const browserPopupRedirectResolver=BrowserPopupRedirectResolver;class MultiFactorAssertionImpl{constructor(e){this.factorId=e}_process(e,s,o){switch(s.type){case"enroll":return this._finalizeEnroll(e,s.credential,o);case"signin":return this._finalizeSignIn(e,s.credential);default:return debugFail("unexpected MultiFactorSessionType")}}}class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new PhoneMultiFactorAssertionImpl(e)}_finalizeEnroll(e,s,o){return finalizeEnrollPhoneMfa(e,{idToken:s,displayName:o,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,s){return finalizeSignInPhoneMfa(e,{mfaPendingCredential:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class PhoneMultiFactorGenerator{constructor(){}static assertion(e){return PhoneMultiFactorAssertionImpl._fromCredential(e)}}PhoneMultiFactorGenerator.FACTOR_ID="phone";var name$1="@firebase/auth",version$1="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AuthInterop{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const s=this.auth.onIdTokenChanged(o=>{var a;e(((a=o)===null||a===void 0?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,s),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const s=this.internalListeners.get(e);!s||(this.internalListeners.delete(e),s(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert$4(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getVersionForPlatform(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function registerAuth(i){_registerComponent(new Component("auth",(e,{options:s})=>{const o=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),{apiKey:c,authDomain:d}=o.options;return((h,g)=>{_assert$4(c&&!c.includes(":"),"invalid-api-key",{appName:h.name}),_assert$4(!(d!=null&&d.includes(":")),"argument-error",{appName:h.name});const _={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(i)},b=new AuthImpl(h,g,_);return _initializeAuthInstance(b,s),b})(o,a)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,s,o)=>{e.getProvider("auth-internal").initialize()})),_registerComponent(new Component("auth-internal",e=>{const s=_castAuth(e.getProvider("auth").getImmediate());return(o=>new AuthInterop(o))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),registerVersion(name$1,version$1,getVersionForPlatform(i)),registerVersion(name$1,version$1,"esm2017")}registerAuth("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _cordovaWindow(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const REDIRECT_TIMEOUT_MS=2e3;async function _generateHandlerUrl(i,e,s){var o;const{BuildInfo:a}=_cordovaWindow();debugAssert(e.sessionId,"AuthEvent did not contain a session ID");const c=await computeSha256(e.sessionId),d={};return _isIOS()?d.ibi=a.packageName:_isAndroid()?d.apn=a.packageName:_fail(i,"operation-not-supported-in-this-environment"),a.displayName&&(d.appDisplayName=a.displayName),d.sessionId=c,_getRedirectUrl(i,s,e.type,void 0,(o=e.eventId)!==null&&o!==void 0?o:void 0,d)}async function _validateOrigin(i){const{BuildInfo:e}=_cordovaWindow(),s={};_isIOS()?s.iosBundleId=e.packageName:_isAndroid()?s.androidPackageName=e.packageName:_fail(i,"operation-not-supported-in-this-environment"),await _getProjectConfig(i,s)}function _performRedirect(i){const{cordova:e}=_cordovaWindow();return new Promise(s=>{e.plugins.browsertab.isAvailable(o=>{let a=null;o?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,_isIOS7Or8()?"_blank":"_system","location=yes"),s(a)})})}async function _waitForAppResume(i,e,s){const{cordova:o}=_cordovaWindow();let a=()=>{};try{await new Promise((c,d)=>{let h=null;function g(){var et;c();const ot=(et=o.plugins.browsertab)===null||et===void 0?void 0:et.close;typeof ot=="function"&&ot(),typeof(s==null?void 0:s.close)=="function"&&s.close()}function _(){h||(h=window.setTimeout(()=>{d(_createError(i,"redirect-cancelled-by-user"))},REDIRECT_TIMEOUT_MS))}function b(){(document==null?void 0:document.visibilityState)==="visible"&&_()}e.addPassiveListener(g),document.addEventListener("resume",_,!1),_isAndroid()&&document.addEventListener("visibilitychange",b,!1),a=()=>{e.removePassiveListener(g),document.removeEventListener("resume",_,!1),document.removeEventListener("visibilitychange",b,!1),h&&window.clearTimeout(h)}})}finally{a()}}function _checkCordovaConfiguration(i){var e,s,o,a,c,d,h,g,_,b;const et=_cordovaWindow();_assert$4(typeof((e=et==null?void 0:et.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),_assert$4(typeof((s=et==null?void 0:et.BuildInfo)===null||s===void 0?void 0:s.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),_assert$4(typeof((c=(a=(o=et==null?void 0:et.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_assert$4(typeof((g=(h=(d=et==null?void 0:et.cordova)===null||d===void 0?void 0:d.plugins)===null||h===void 0?void 0:h.browsertab)===null||g===void 0?void 0:g.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),_assert$4(typeof((b=(_=et==null?void 0:et.cordova)===null||_===void 0?void 0:_.InAppBrowser)===null||b===void 0?void 0:b.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function computeSha256(i){const e=stringToArrayBuffer(i),s=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(s)).map(a=>a.toString(16).padStart(2,"0")).join("")}function stringToArrayBuffer(i){if(debugAssert(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),s=new Uint8Array(e);for(let o=0;o<i.length;o++)s[o]=i.charCodeAt(o);return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SESSION_ID_LENGTH=20;class CordovaAuthEventManager extends AuthEventManager{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(s=>s(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _generateNewEvent(i,e,s=null){return{type:e,eventId:s,urlResponse:null,sessionId:generateSessionId(),postBody:null,tenantId:i.tenantId,error:_createError(i,"no-auth-event")}}function _savePartialEvent(i,e){return storage()._set(persistenceKey(i),e)}async function _getAndRemoveEvent(i){const e=await storage()._get(persistenceKey(i));return e&&await storage()._remove(persistenceKey(i)),e}function _eventFromPartialAndUrl(i,e){var s,o;const a=_getDeepLinkFromCallback(e);if(a.includes("/__/auth/callback")){const c=searchParamsOrEmpty(a),d=c.firebaseError?parseJsonOrNull(decodeURIComponent(c.firebaseError)):null,h=(o=(s=d==null?void 0:d.code)===null||s===void 0?void 0:s.split("auth/"))===null||o===void 0?void 0:o[1],g=h?_createError(h):null;return g?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:g,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function generateSessionId(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<SESSION_ID_LENGTH;s++){const o=Math.floor(Math.random()*e.length);i.push(e.charAt(o))}return i.join("")}function storage(){return _getInstance(browserLocalPersistence)}function persistenceKey(i){return _persistenceKeyName("authEvent",i.config.apiKey,i.name)}function parseJsonOrNull(i){try{return JSON.parse(i)}catch{return null}}function _getDeepLinkFromCallback(i){const e=searchParamsOrEmpty(i),s=e.link?decodeURIComponent(e.link):void 0,o=searchParamsOrEmpty(s).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return searchParamsOrEmpty(a).link||a||o||s||i}function searchParamsOrEmpty(i){if(!(i!=null&&i.includes("?")))return{};const[e,...s]=i.split("?");return querystringDecode(s.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const INITIAL_EVENT_TIMEOUT_MS=500;class CordovaPopupRedirectResolver{constructor(){this._redirectPersistence=browserSessionPersistence,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _initialize(e){const s=e._key();let o=this.eventManagers.get(s);return o||(o=new CordovaAuthEventManager(e),this.eventManagers.set(s,o),this.attachCallbackListeners(e,o)),o}_openPopup(e){_fail(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,s,o,a){_checkCordovaConfiguration(e);const c=await this._initialize(e);await c.initialized(),c.resetRedirect(),_clearRedirectOutcomes(),await this._originValidation(e);const d=_generateNewEvent(e,o,a);await _savePartialEvent(e,d);const h=await _generateHandlerUrl(e,d,s),g=await _performRedirect(h);return _waitForAppResume(e,c,g)}_isIframeWebStorageSupported(e,s){throw new Error("Method not implemented.")}_originValidation(e){const s=e._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=_validateOrigin(e)),this.originValidationPromises[s]}attachCallbackListeners(e,s){const{universalLinks:o,handleOpenURL:a,BuildInfo:c}=_cordovaWindow(),d=setTimeout(async()=>{await _getAndRemoveEvent(e),s.onEvent(generateNoEvent())},INITIAL_EVENT_TIMEOUT_MS),h=async b=>{clearTimeout(d);const et=await _getAndRemoveEvent(e);let ot=null;et&&(b==null?void 0:b.url)&&(ot=_eventFromPartialAndUrl(et,b.url)),s.onEvent(ot||generateNoEvent())};typeof o<"u"&&typeof o.subscribe=="function"&&o.subscribe(null,h);const g=a,_=`${c.packageName.toLowerCase()}://`;_cordovaWindow().handleOpenURL=async b=>{if(b.toLowerCase().startsWith(_)&&h({url:b}),typeof g=="function")try{g(b)}catch(et){console.error(et)}}}}const cordovaPopupRedirectResolver=CordovaPopupRedirectResolver;function generateNoEvent(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:_createError("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function addFrameworkForLogging(i,e){_castAuth(i)._logFramework(e)}var name="@firebase/auth-compat",version="0.2.19";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CORDOVA_ONDEVICEREADY_TIMEOUT_MS=1e3;function _getCurrentScheme(){var i;return((i=self==null?void 0:self.location)===null||i===void 0?void 0:i.protocol)||null}function _isHttpOrHttps(){return _getCurrentScheme()==="http:"||_getCurrentScheme()==="https:"}function _isAndroidOrIosCordovaScheme(i=getUA()){return!!((_getCurrentScheme()==="file:"||_getCurrentScheme()==="ionic:"||_getCurrentScheme()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function _isNativeEnvironment(){return isReactNative()||isNode()}function _isIe11(){return isIE()&&(document==null?void 0:document.documentMode)===11}function _isEdge(i=getUA()){return/Edge\/\d+/.test(i)}function _isLocalStorageNotSynchronized(i=getUA()){return _isIe11()||_isEdge(i)}function _isWebStorageSupported(){try{const i=self.localStorage,e=_generateEventId();if(i)return i.setItem(e,"1"),i.removeItem(e),_isLocalStorageNotSynchronized()?isIndexedDBAvailable():!0}catch{return _isWorker()&&isIndexedDBAvailable()}return!1}function _isWorker(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function _isPopupRedirectSupported(){return(_isHttpOrHttps()||isBrowserExtension()||_isAndroidOrIosCordovaScheme())&&!_isNativeEnvironment()&&_isWebStorageSupported()&&!_isWorker()}function _isLikelyCordova(){return _isAndroidOrIosCordovaScheme()&&typeof document<"u"}async function _isCordova(){return _isLikelyCordova()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},CORDOVA_ONDEVICEREADY_TIMEOUT_MS);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function _getSelfWindow(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Persistence={LOCAL:"local",NONE:"none",SESSION:"session"},_assert$3=_assert$4,PERSISTENCE_KEY="persistence";function _validatePersistenceArgument(i,e){if(_assert$3(Object.values(Persistence).includes(e),i,"invalid-persistence-type"),isReactNative()){_assert$3(e!==Persistence.SESSION,i,"unsupported-persistence-type");return}if(isNode()){_assert$3(e===Persistence.NONE,i,"unsupported-persistence-type");return}if(_isWorker()){_assert$3(e===Persistence.NONE||e===Persistence.LOCAL&&isIndexedDBAvailable(),i,"unsupported-persistence-type");return}_assert$3(e===Persistence.NONE||_isWebStorageSupported(),i,"unsupported-persistence-type")}async function _savePersistenceForRedirect(i){await i._initializationPromise;const e=getSessionStorageIfAvailable(),s=_persistenceKeyName(PERSISTENCE_KEY,i.config.apiKey,i.name);e&&e.setItem(s,i._getPersistence())}function _getPersistencesFromRedirect(i,e){const s=getSessionStorageIfAvailable();if(!s)return[];const o=_persistenceKeyName(PERSISTENCE_KEY,i,e);switch(s.getItem(o)){case Persistence.NONE:return[inMemoryPersistence];case Persistence.LOCAL:return[indexedDBLocalPersistence,browserSessionPersistence];case Persistence.SESSION:return[browserSessionPersistence];default:return[]}}function getSessionStorageIfAvailable(){var i;try{return((i=_getSelfWindow())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _assert$2=_assert$4;class CompatPopupRedirectResolver{constructor(){this.browserResolver=_getInstance(browserPopupRedirectResolver),this.cordovaResolver=_getInstance(cordovaPopupRedirectResolver),this.underlyingResolver=null,this._redirectPersistence=browserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,s,o,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,s,o,a)}async _openRedirect(e,s,o,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,s,o,a)}_isIframeWebStorageSupported(e,s){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,s)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return _isLikelyCordova()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return _assert$2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await _isCordova();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function unwrap(i){return i.unwrap()}function wrapped(i){return i.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function credentialFromResponse(i){return credentialFromObject(i)}function attachExtraErrorFields(i,e){var s,o;const a=(s=e.customData)===null||s===void 0?void 0:s._tokenResponse;if(((o=e)===null||o===void 0?void 0:o.code)==="auth/multi-factor-auth-required"){const c=e;c.resolver=new MultiFactorResolver(i,getMultiFactorResolver(i,e))}else if(a){const c=credentialFromObject(e),d=e;c&&(d.credential=c,d.tenantId=a.tenantId||void 0,d.email=a.email||void 0,d.phoneNumber=a.phoneNumber||void 0)}}function credentialFromObject(i){const{_tokenResponse:e}=i instanceof FirebaseError?i.customData:i;if(!e)return null;if(!(i instanceof FirebaseError)&&"temporaryProof"in e&&"phoneNumber"in e)return PhoneAuthProvider$1.credentialFromResult(i);const s=e.providerId;if(!s||s===ProviderId.PASSWORD)return null;let o;switch(s){case ProviderId.GOOGLE:o=GoogleAuthProvider;break;case ProviderId.FACEBOOK:o=FacebookAuthProvider;break;case ProviderId.GITHUB:o=GithubAuthProvider;break;case ProviderId.TWITTER:o=TwitterAuthProvider;break;default:const{oauthIdToken:a,oauthAccessToken:c,oauthTokenSecret:d,pendingToken:h,nonce:g}=e;return!c&&!d&&!a&&!h?null:h?s.startsWith("saml.")?SAMLAuthCredential._create(s,h):OAuthCredential._fromParams({providerId:s,signInMethod:s,pendingToken:h,idToken:a,accessToken:c}):new OAuthProvider(s).credential({idToken:a,accessToken:c,rawNonce:g})}return i instanceof FirebaseError?o.credentialFromError(i):o.credentialFromResult(i)}function convertCredential(i,e){return e.catch(s=>{throw s instanceof FirebaseError&&attachExtraErrorFields(i,s),s}).then(s=>{const o=s.operationType,a=s.user;return{operationType:o,credential:credentialFromResponse(s),additionalUserInfo:getAdditionalUserInfo(s),user:User.getOrCreate(a)}})}async function convertConfirmationResult(i,e){const s=await e;return{verificationId:s.verificationId,confirm:o=>convertCredential(i,s.confirm(o))}}class MultiFactorResolver{constructor(e,s){this.resolver=s,this.auth=wrapped(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return convertCredential(unwrap(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class User{constructor(e){this._delegate=e,this.multiFactor=multiFactor(e)}static getOrCreate(e){return User.USER_MAP.has(e)||User.USER_MAP.set(e,new User(e)),User.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return convertCredential(this.auth,linkWithCredential(this._delegate,e))}async linkWithPhoneNumber(e,s){return convertConfirmationResult(this.auth,linkWithPhoneNumber(this._delegate,e,s))}async linkWithPopup(e){return convertCredential(this.auth,linkWithPopup(this._delegate,e,CompatPopupRedirectResolver))}async linkWithRedirect(e){return await _savePersistenceForRedirect(_castAuth(this.auth)),linkWithRedirect(this._delegate,e,CompatPopupRedirectResolver)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return convertCredential(this.auth,reauthenticateWithCredential(this._delegate,e))}reauthenticateWithPhoneNumber(e,s){return convertConfirmationResult(this.auth,reauthenticateWithPhoneNumber(this._delegate,e,s))}reauthenticateWithPopup(e){return convertCredential(this.auth,reauthenticateWithPopup(this._delegate,e,CompatPopupRedirectResolver))}async reauthenticateWithRedirect(e){return await _savePersistenceForRedirect(_castAuth(this.auth)),reauthenticateWithRedirect(this._delegate,e,CompatPopupRedirectResolver)}sendEmailVerification(e){return sendEmailVerification(this._delegate,e)}async unlink(e){return await unlink(this._delegate,e),this}updateEmail(e){return updateEmail(this._delegate,e)}updatePassword(e){return updatePassword(this._delegate,e)}updatePhoneNumber(e){return updatePhoneNumber(this._delegate,e)}updateProfile(e){return updateProfile(this._delegate,e)}verifyBeforeUpdateEmail(e,s){return verifyBeforeUpdateEmail(this._delegate,e,s)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}User.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _assert$1=_assert$4;class Auth{constructor(e,s){if(this.app=e,s.isInitialized()){this._delegate=s.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:o}=e.options;_assert$1(o,"invalid-api-key",{appName:e.name}),_assert$1(o,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?CompatPopupRedirectResolver:void 0;this._delegate=s.initialize({options:{persistence:buildPersistenceHierarchy(o,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(debugErrorMap),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?User.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,s){connectAuthEmulator(this._delegate,e,s)}applyActionCode(e){return applyActionCode(this._delegate,e)}checkActionCode(e){return checkActionCode(this._delegate,e)}confirmPasswordReset(e,s){return confirmPasswordReset(this._delegate,e,s)}async createUserWithEmailAndPassword(e,s){return convertCredential(this._delegate,createUserWithEmailAndPassword(this._delegate,e,s))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return fetchSignInMethodsForEmail(this._delegate,e)}isSignInWithEmailLink(e){return isSignInWithEmailLink(this._delegate,e)}async getRedirectResult(){_assert$1(_isPopupRedirectSupported(),this._delegate,"operation-not-supported-in-this-environment");const e=await getRedirectResult(this._delegate,CompatPopupRedirectResolver);return e?convertCredential(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){addFrameworkForLogging(this._delegate,e)}onAuthStateChanged(e,s,o){const{next:a,error:c,complete:d}=wrapObservers(e,s,o);return this._delegate.onAuthStateChanged(a,c,d)}onIdTokenChanged(e,s,o){const{next:a,error:c,complete:d}=wrapObservers(e,s,o);return this._delegate.onIdTokenChanged(a,c,d)}sendSignInLinkToEmail(e,s){return sendSignInLinkToEmail(this._delegate,e,s)}sendPasswordResetEmail(e,s){return sendPasswordResetEmail(this._delegate,e,s||void 0)}async setPersistence(e){_validatePersistenceArgument(this._delegate,e);let s;switch(e){case Persistence.SESSION:s=browserSessionPersistence;break;case Persistence.LOCAL:s=await _getInstance(indexedDBLocalPersistence)._isAvailable()?indexedDBLocalPersistence:browserLocalPersistence;break;case Persistence.NONE:s=inMemoryPersistence;break;default:return _fail("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(s)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return convertCredential(this._delegate,signInAnonymously(this._delegate))}signInWithCredential(e){return convertCredential(this._delegate,signInWithCredential(this._delegate,e))}signInWithCustomToken(e){return convertCredential(this._delegate,signInWithCustomToken(this._delegate,e))}signInWithEmailAndPassword(e,s){return convertCredential(this._delegate,signInWithEmailAndPassword(this._delegate,e,s))}signInWithEmailLink(e,s){return convertCredential(this._delegate,signInWithEmailLink(this._delegate,e,s))}signInWithPhoneNumber(e,s){return convertConfirmationResult(this._delegate,signInWithPhoneNumber(this._delegate,e,s))}async signInWithPopup(e){return _assert$1(_isPopupRedirectSupported(),this._delegate,"operation-not-supported-in-this-environment"),convertCredential(this._delegate,signInWithPopup(this._delegate,e,CompatPopupRedirectResolver))}async signInWithRedirect(e){return _assert$1(_isPopupRedirectSupported(),this._delegate,"operation-not-supported-in-this-environment"),await _savePersistenceForRedirect(this._delegate),signInWithRedirect(this._delegate,e,CompatPopupRedirectResolver)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return verifyPasswordResetCode(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Auth.Persistence=Persistence;function wrapObservers(i,e,s){let o=i;typeof i!="function"&&({next:o,error:e,complete:s}=i);const a=o;return{next:d=>a(d&&User.getOrCreate(d)),error:e,complete:s}}function buildPersistenceHierarchy(i,e){const s=_getPersistencesFromRedirect(i,e);if(typeof self<"u"&&!s.includes(indexedDBLocalPersistence)&&s.push(indexedDBLocalPersistence),typeof window<"u")for(const o of[browserLocalPersistence,browserSessionPersistence])s.includes(o)||s.push(o);return s.includes(inMemoryPersistence)||s.push(inMemoryPersistence),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PhoneAuthProvider{constructor(){this.providerId="phone",this._delegate=new PhoneAuthProvider$1(unwrap(firebase.auth()))}static credential(e,s){return PhoneAuthProvider$1.credential(e,s)}verifyPhoneNumber(e,s){return this._delegate.verifyPhoneNumber(e,s)}unwrap(){return this._delegate}}PhoneAuthProvider.PHONE_SIGN_IN_METHOD=PhoneAuthProvider$1.PHONE_SIGN_IN_METHOD;PhoneAuthProvider.PROVIDER_ID=PhoneAuthProvider$1.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _assert=_assert$4;class RecaptchaVerifier{constructor(e,s,o=firebase.app()){var a;_assert((a=o.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:o.name}),this._delegate=new RecaptchaVerifier$1(e,s,o.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AUTH_TYPE="auth-compat";function registerAuthCompat(i){i.INTERNAL.registerComponent(new Component(AUTH_TYPE,e=>{const s=e.getProvider("app-compat").getImmediate(),o=e.getProvider("auth");return new Auth(s,o)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ActionCodeOperation.EMAIL_SIGNIN,PASSWORD_RESET:ActionCodeOperation.PASSWORD_RESET,RECOVER_EMAIL:ActionCodeOperation.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ActionCodeOperation.VERIFY_EMAIL}},EmailAuthProvider,FacebookAuthProvider,GithubAuthProvider,GoogleAuthProvider,OAuthProvider,SAMLAuthProvider,PhoneAuthProvider,PhoneMultiFactorGenerator,RecaptchaVerifier,TwitterAuthProvider,Auth,AuthCredential,Error:FirebaseError}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(name,version)}registerAuthCompat(firebase);var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k$1,goog=goog||{},l=commonjsGlobal||self;function aa$1(){}function ba$1(i){var e=typeof i;return e=e!="object"?e:i?Array.isArray(i)?"array":e:"null",e=="array"||e=="object"&&typeof i.length=="number"}function p(i){var e=typeof i;return e=="object"&&i!=null||e=="function"}function da(i){return Object.prototype.hasOwnProperty.call(i,ea)&&i[ea]||(i[ea]=++fa)}var ea="closure_uid_"+(1e9*Math.random()>>>0),fa=0;function ha(i,e,s){return i.call.apply(i.bind,arguments)}function ia$1(i,e,s){if(!i)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,o),i.apply(e,a)}}return function(){return i.apply(e,arguments)}}function q(i,e,s){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?q=ha:q=ia$1,q.apply(null,arguments)}function ja(i,e){var s=Array.prototype.slice.call(arguments,1);return function(){var o=s.slice();return o.push.apply(o,arguments),i.apply(this,o)}}function t(i,e){function s(){}s.prototype=e.prototype,i.Z=e.prototype,i.prototype=new s,i.prototype.constructor=i,i.Vb=function(o,a,c){for(var d=Array(arguments.length-2),h=2;h<arguments.length;h++)d[h-2]=arguments[h];return e.prototype[a].apply(o,d)}}function v(){this.s=this.s,this.o=this.o}var ka=0;v.prototype.s=!1;v.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ka!=0)&&da(this)};v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ma$1=Array.prototype.indexOf?function(i,e){return Array.prototype.indexOf.call(i,e,void 0)}:function(i,e){if(typeof i=="string")return typeof e!="string"||e.length!=1?-1:i.indexOf(e,0);for(let s=0;s<i.length;s++)if(s in i&&i[s]===e)return s;return-1},na=Array.prototype.forEach?function(i,e,s){Array.prototype.forEach.call(i,e,s)}:function(i,e,s){const o=i.length,a=typeof i=="string"?i.split(""):i;for(let c=0;c<o;c++)c in a&&e.call(s,a[c],c,i)};function oa(i){e:{var e=pa$1;const s=i.length,o=typeof i=="string"?i.split(""):i;for(let a=0;a<s;a++)if(a in o&&e.call(void 0,o[a],a,i)){e=a;break e}e=-1}return 0>e?null:typeof i=="string"?i.charAt(e):i[e]}function qa$1(i){return Array.prototype.concat.apply([],arguments)}function ra$1(i){const e=i.length;if(0<e){const s=Array(e);for(let o=0;o<e;o++)s[o]=i[o];return s}return[]}function sa(i){return/^[\s\xa0]*$/.test(i)}var ta$1=String.prototype.trim?function(i){return i.trim()}:function(i){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(i)[1]};function w(i,e){return i.indexOf(e)!=-1}function ua(i,e){return i<e?-1:i>e?1:0}var x$1;e:{var va$1=l.navigator;if(va$1){var wa=va$1.userAgent;if(wa){x$1=wa;break e}}x$1=""}function xa$1(i,e,s){for(const o in i)e.call(s,i[o],o,i)}function ya$1(i){const e={};for(const s in i)e[s]=i[s];return e}var za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Aa(i,e){let s,o;for(let a=1;a<arguments.length;a++){o=arguments[a];for(s in o)i[s]=o[s];for(let c=0;c<za.length;c++)s=za[c],Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s])}}function Ca(i){return Ca[" "](i),i}Ca[" "]=aa$1;function Fa(i){var e=Ga;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=i(9)}var Ha=w(x$1,"Opera"),y=w(x$1,"Trident")||w(x$1,"MSIE"),Ia=w(x$1,"Edge"),Ja=Ia||y,Ka$1=w(x$1,"Gecko")&&!(w(x$1.toLowerCase(),"webkit")&&!w(x$1,"Edge"))&&!(w(x$1,"Trident")||w(x$1,"MSIE"))&&!w(x$1,"Edge"),La=w(x$1.toLowerCase(),"webkit")&&!w(x$1,"Edge");function Ma$1(){var i=l.document;return i?i.documentMode:void 0}var Na;e:{var Oa$1="",Pa=function(){var i=x$1;if(Ka$1)return/rv:([^\);]+)(\)|;)/.exec(i);if(Ia)return/Edge\/([\d\.]+)/.exec(i);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(i);if(La)return/WebKit\/(\S+)/.exec(i);if(Ha)return/(?:Version)[ \/]?(\S+)/.exec(i)}();if(Pa&&(Oa$1=Pa?Pa[1]:""),y){var Qa=Ma$1();if(Qa!=null&&Qa>parseFloat(Oa$1)){Na=String(Qa);break e}}Na=Oa$1}var Ga={};function Ra$1(){return Fa(function(){let i=0;const e=ta$1(String(Na)).split("."),s=ta$1("9").split("."),o=Math.max(e.length,s.length);for(let d=0;i==0&&d<o;d++){var a=e[d]||"",c=s[d]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],c=/(\d*)(\D*)(.*)/.exec(c)||["","","",""],a[0].length==0&&c[0].length==0)break;i=ua(a[1].length==0?0:parseInt(a[1],10),c[1].length==0?0:parseInt(c[1],10))||ua(a[2].length==0,c[2].length==0)||ua(a[2],c[2]),a=a[3],c=c[3]}while(i==0)}return 0<=i})}var Sa$1;if(l.document&&y){var Ta$1=Ma$1();Sa$1=Ta$1||parseInt(Na,10)||void 0}else Sa$1=void 0;var Ua$1=Sa$1,Va$1=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,e=Object.defineProperty({},"passive",{get:function(){i=!0}});try{l.addEventListener("test",aa$1,e),l.removeEventListener("test",aa$1,e)}catch{}return i}();function z$1(i,e){this.type=i,this.g=this.target=e,this.defaultPrevented=!1}z$1.prototype.h=function(){this.defaultPrevented=!0};function A(i,e){if(z$1.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var s=this.type=i.type,o=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=e,e=i.relatedTarget){if(Ka$1){e:{try{Ca(e.nodeName);var a=!0;break e}catch{}a=!1}a||(e=null)}}else s=="mouseover"?e=i.fromElement:s=="mouseout"&&(e=i.toElement);this.relatedTarget=e,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Wa[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&A.Z.h.call(this)}}t(A,z$1);var Wa={2:"touch",3:"pen",4:"mouse"};A.prototype.h=function(){A.Z.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var B$1="closure_listenable_"+(1e6*Math.random()|0),Xa=0;function Ya(i,e,s,o,a){this.listener=i,this.proxy=null,this.src=e,this.type=s,this.capture=!!o,this.ia=a,this.key=++Xa,this.ca=this.fa=!1}function Za(i){i.ca=!0,i.listener=null,i.proxy=null,i.src=null,i.ia=null}function $a(i){this.src=i,this.g={},this.h=0}$a.prototype.add=function(i,e,s,o,a){var c=i.toString();i=this.g[c],i||(i=this.g[c]=[],this.h++);var d=ab(i,e,o,a);return-1<d?(e=i[d],s||(e.fa=!1)):(e=new Ya(e,this.src,c,!!o,a),e.fa=s,i.push(e)),e};function bb(i,e){var s=e.type;if(s in i.g){var o=i.g[s],a=ma$1(o,e),c;(c=0<=a)&&Array.prototype.splice.call(o,a,1),c&&(Za(e),i.g[s].length==0&&(delete i.g[s],i.h--))}}function ab(i,e,s,o){for(var a=0;a<i.length;++a){var c=i[a];if(!c.ca&&c.listener==e&&c.capture==!!s&&c.ia==o)return a}return-1}var cb="closure_lm_"+(1e6*Math.random()|0),db$1={};function fb(i,e,s,o,a){if(o&&o.once)return gb(i,e,s,o,a);if(Array.isArray(e)){for(var c=0;c<e.length;c++)fb(i,e[c],s,o,a);return null}return s=hb(s),i&&i[B$1]?i.N(e,s,p(o)?!!o.capture:!!o,a):ib(i,e,s,!1,o,a)}function ib(i,e,s,o,a,c){if(!e)throw Error("Invalid event type");var d=p(a)?!!a.capture:!!a,h=jb(i);if(h||(i[cb]=h=new $a(i)),s=h.add(e,s,o,d,c),s.proxy)return s;if(o=kb(),s.proxy=o,o.src=i,o.listener=s,i.addEventListener)Va$1||(a=d),a===void 0&&(a=!1),i.addEventListener(e.toString(),o,a);else if(i.attachEvent)i.attachEvent(lb(e.toString()),o);else if(i.addListener&&i.removeListener)i.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return s}function kb(){function i(s){return e.call(i.src,i.listener,s)}var e=mb;return i}function gb(i,e,s,o,a){if(Array.isArray(e)){for(var c=0;c<e.length;c++)gb(i,e[c],s,o,a);return null}return s=hb(s),i&&i[B$1]?i.O(e,s,p(o)?!!o.capture:!!o,a):ib(i,e,s,!0,o,a)}function nb(i,e,s,o,a){if(Array.isArray(e))for(var c=0;c<e.length;c++)nb(i,e[c],s,o,a);else o=p(o)?!!o.capture:!!o,s=hb(s),i&&i[B$1]?(i=i.i,e=String(e).toString(),e in i.g&&(c=i.g[e],s=ab(c,s,o,a),-1<s&&(Za(c[s]),Array.prototype.splice.call(c,s,1),c.length==0&&(delete i.g[e],i.h--)))):i&&(i=jb(i))&&(e=i.g[e.toString()],i=-1,e&&(i=ab(e,s,o,a)),(s=-1<i?e[i]:null)&&ob(s))}function ob(i){if(typeof i!="number"&&i&&!i.ca){var e=i.src;if(e&&e[B$1])bb(e.i,i);else{var s=i.type,o=i.proxy;e.removeEventListener?e.removeEventListener(s,o,i.capture):e.detachEvent?e.detachEvent(lb(s),o):e.addListener&&e.removeListener&&e.removeListener(o),(s=jb(e))?(bb(s,i),s.h==0&&(s.src=null,e[cb]=null)):Za(i)}}}function lb(i){return i in db$1?db$1[i]:db$1[i]="on"+i}function mb(i,e){if(i.ca)i=!0;else{e=new A(e,this);var s=i.listener,o=i.ia||i.src;i.fa&&ob(i),i=s.call(o,e)}return i}function jb(i){return i=i[cb],i instanceof $a?i:null}var pb="__closure_events_fn_"+(1e9*Math.random()>>>0);function hb(i){return typeof i=="function"?i:(i[pb]||(i[pb]=function(e){return i.handleEvent(e)}),i[pb])}function C$1(){v.call(this),this.i=new $a(this),this.P=this,this.I=null}t(C$1,v);C$1.prototype[B$1]=!0;C$1.prototype.removeEventListener=function(i,e,s,o){nb(this,i,e,s,o)};function D$1(i,e){var s,o=i.I;if(o)for(s=[];o;o=o.I)s.push(o);if(i=i.P,o=e.type||e,typeof e=="string")e=new z$1(e,i);else if(e instanceof z$1)e.target=e.target||i;else{var a=e;e=new z$1(o,i),Aa(e,a)}if(a=!0,s)for(var c=s.length-1;0<=c;c--){var d=e.g=s[c];a=qb(d,o,!0,e)&&a}if(d=e.g=i,a=qb(d,o,!0,e)&&a,a=qb(d,o,!1,e)&&a,s)for(c=0;c<s.length;c++)d=e.g=s[c],a=qb(d,o,!1,e)&&a}C$1.prototype.M=function(){if(C$1.Z.M.call(this),this.i){var i=this.i,e;for(e in i.g){for(var s=i.g[e],o=0;o<s.length;o++)Za(s[o]);delete i.g[e],i.h--}}this.I=null};C$1.prototype.N=function(i,e,s,o){return this.i.add(String(i),e,!1,s,o)};C$1.prototype.O=function(i,e,s,o){return this.i.add(String(i),e,!0,s,o)};function qb(i,e,s,o){if(e=i.i.g[String(e)],!e)return!0;e=e.concat();for(var a=!0,c=0;c<e.length;++c){var d=e[c];if(d&&!d.ca&&d.capture==s){var h=d.listener,g=d.ia||d.src;d.fa&&bb(i.i,d),a=h.call(g,o)!==!1&&a}}return a&&!o.defaultPrevented}var rb=l.JSON.stringify;function sb(){var i=tb;let e=null;return i.g&&(e=i.g,i.g=i.g.next,i.g||(i.h=null),e.next=null),e}class ub{constructor(){this.h=this.g=null}add(e,s){const o=vb.get();o.set(e,s),this.h?this.h.next=o:this.g=o,this.h=o}}var vb=new class{constructor(i,e){this.i=i,this.j=e,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}(()=>new wb,i=>i.reset());class wb{constructor(){this.next=this.g=this.h=null}set(e,s){this.h=e,this.g=s,this.next=null}reset(){this.next=this.g=this.h=null}}function yb(i){l.setTimeout(()=>{throw i},0)}function zb(i,e){Ab||Bb(),Cb||(Ab(),Cb=!0),tb.add(i,e)}var Ab;function Bb(){var i=l.Promise.resolve(void 0);Ab=function(){i.then(Db)}}var Cb=!1,tb=new ub;function Db(){for(var i;i=sb();){try{i.h.call(i.g)}catch(s){yb(s)}var e=vb;e.j(i),100>e.h&&(e.h++,i.next=e.g,e.g=i)}Cb=!1}function Eb(i,e){C$1.call(this),this.h=i||1,this.g=e||l,this.j=q(this.kb,this),this.l=Date.now()}t(Eb,C$1);k$1=Eb.prototype;k$1.da=!1;k$1.S=null;k$1.kb=function(){if(this.da){var i=Date.now()-this.l;0<i&&i<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-i):(this.S&&(this.g.clearTimeout(this.S),this.S=null),D$1(this,"tick"),this.da&&(Fb(this),this.start()))}};k$1.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fb(i){i.da=!1,i.S&&(i.g.clearTimeout(i.S),i.S=null)}k$1.M=function(){Eb.Z.M.call(this),Fb(this),delete this.g};function Gb(i,e,s){if(typeof i=="function")s&&(i=q(i,s));else if(i&&typeof i.handleEvent=="function")i=q(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:l.setTimeout(i,e||0)}function Hb(i){i.g=Gb(()=>{i.g=null,i.i&&(i.i=!1,Hb(i))},i.j);const e=i.h;i.h=null,i.m.apply(null,e)}class Ib extends v{constructor(e,s){super(),this.m=e,this.j=s,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hb(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function E(i){v.call(this),this.h=i,this.g={}}t(E,v);var Jb=[];function Kb(i,e,s,o){Array.isArray(s)||(s&&(Jb[0]=s.toString()),s=Jb);for(var a=0;a<s.length;a++){var c=fb(e,s[a],o||i.handleEvent,!1,i.h||i);if(!c)break;i.g[c.key]=c}}function Lb(i){xa$1(i.g,function(e,s){this.g.hasOwnProperty(s)&&ob(e)},i),i.g={}}E.prototype.M=function(){E.Z.M.call(this),Lb(this)};E.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mb(){this.g=!0}Mb.prototype.Aa=function(){this.g=!1};function Nb(i,e,s,o,a,c){i.info(function(){if(i.g)if(c)for(var d="",h=c.split("&"),g=0;g<h.length;g++){var _=h[g].split("=");if(1<_.length){var b=_[0];_=_[1];var et=b.split("_");d=2<=et.length&&et[1]=="type"?d+(b+"="+_+"&"):d+(b+"=redacted&")}}else d=null;else d=c;return"XMLHTTP REQ ("+o+") [attempt "+a+"]: "+e+`
`+s+`
`+d})}function Ob(i,e,s,o,a,c,d){i.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+a+"]: "+e+`
`+s+`
`+c+" "+d})}function F$1(i,e,s,o){i.info(function(){return"XMLHTTP TEXT ("+e+"): "+Pb(i,s)+(o?" "+o:"")})}function Qb(i,e){i.info(function(){return"TIMEOUT: "+e})}Mb.prototype.info=function(){};function Pb(i,e){if(!i.g)return e;if(!e)return null;try{var s=JSON.parse(e);if(s){for(i=0;i<s.length;i++)if(Array.isArray(s[i])){var o=s[i];if(!(2>o.length)){var a=o[1];if(Array.isArray(a)&&!(1>a.length)){var c=a[0];if(c!="noop"&&c!="stop"&&c!="close")for(var d=1;d<a.length;d++)a[d]=""}}}}return rb(s)}catch{return e}}var H={},Rb=null;function Sb(){return Rb=Rb||new C$1}H.Ma="serverreachability";function Tb(i){z$1.call(this,H.Ma,i)}t(Tb,z$1);function I(i){const e=Sb();D$1(e,new Tb(e))}H.STAT_EVENT="statevent";function Ub(i,e){z$1.call(this,H.STAT_EVENT,i),this.stat=e}t(Ub,z$1);function J$1(i){const e=Sb();D$1(e,new Ub(e,i))}H.Na="timingevent";function Vb(i,e){z$1.call(this,H.Na,i),this.size=e}t(Vb,z$1);function K$1(i,e){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},e)}var Wb={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Xb={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yb(){}Yb.prototype.h=null;function Zb(i){return i.h||(i.h=i.i())}function $b(){}var L$1={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ac$1(){z$1.call(this,"d")}t(ac$1,z$1);function bc$1(){z$1.call(this,"c")}t(bc$1,z$1);var cc$1;function dc$1(){}t(dc$1,Yb);dc$1.prototype.g=function(){return new XMLHttpRequest};dc$1.prototype.i=function(){return{}};cc$1=new dc$1;function M(i,e,s,o){this.l=i,this.j=e,this.m=s,this.X=o||1,this.V=new E(this),this.P=ec,i=Ja?125:void 0,this.W=new Eb(i),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fc$1}function fc$1(){this.i=null,this.g="",this.h=!1}var ec=45e3,gc$1={},hc$1={};k$1=M.prototype;k$1.setTimeout=function(i){this.P=i};function ic$1(i,e,s){i.K=1,i.v=jc$1(N$1(e)),i.s=s,i.U=!0,kc(i,null)}function kc(i,e){i.F=Date.now(),lc$1(i),i.A=N$1(i.v);var s=i.A,o=i.X;Array.isArray(o)||(o=[String(o)]),mc$1(s.h,"t",o),i.C=0,s=i.l.H,i.h=new fc$1,i.g=nc(i.l,s?e:null,!i.s),0<i.O&&(i.L=new Ib(q(i.Ia,i,i.g),i.O)),Kb(i.V,i.g,"readystatechange",i.gb),e=i.H?ya$1(i.H):{},i.s?(i.u||(i.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.s,e)):(i.u="GET",i.g.ea(i.A,i.u,null,e)),I(),Nb(i.j,i.u,i.A,i.m,i.X,i.s)}k$1.gb=function(i){i=i.target;const e=this.L;e&&O$1(i)==3?e.l():this.Ia(i)};k$1.Ia=function(i){try{if(i==this.g)e:{const b=O$1(this.g);var e=this.g.Da();const et=this.g.ba();if(!(3>b)&&(b!=3||Ja||this.g&&(this.h.h||this.g.ga()||oc$1(this.g)))){this.I||b!=4||e==7||(e==8||0>=et?I(3):I(2)),pc$1(this);var s=this.g.ba();this.N=s;t:if(qc(this)){var o=oc$1(this.g);i="";var a=o.length,c=O$1(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){P(this),rc$1(this);var d="";break t}this.h.i=new l.TextDecoder}for(e=0;e<a;e++)this.h.h=!0,i+=this.h.i.decode(o[e],{stream:c&&e==a-1});o.splice(0,a),this.h.g+=i,this.C=0,d=this.h.g}else d=this.g.ga();if(this.i=s==200,Ob(this.j,this.u,this.A,this.m,this.X,b,s),this.i){if(this.$&&!this.J){t:{if(this.g){var h,g=this.g;if((h=g.g?g.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sa(h)){var _=h;break t}}_=null}if(s=_)F$1(this.j,this.m,s,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sc$1(this,s);else{this.i=!1,this.o=3,J$1(12),P(this),rc$1(this);break e}}this.U?(tc(this,b,d),Ja&&this.i&&b==3&&(Kb(this.V,this.W,"tick",this.fb),this.W.start())):(F$1(this.j,this.m,d,null),sc$1(this,d)),b==4&&P(this),this.i&&!this.I&&(b==4?uc$1(this.l,this):(this.i=!1,lc$1(this)))}else s==400&&0<d.indexOf("Unknown SID")?(this.o=3,J$1(12)):(this.o=0,J$1(13)),P(this),rc$1(this)}}}catch{}finally{}};function qc(i){return i.g?i.u=="GET"&&i.K!=2&&i.l.Ba:!1}function tc(i,e,s){let o=!0,a;for(;!i.I&&i.C<s.length;)if(a=vc$1(i,s),a==hc$1){e==4&&(i.o=4,J$1(14),o=!1),F$1(i.j,i.m,null,"[Incomplete Response]");break}else if(a==gc$1){i.o=4,J$1(15),F$1(i.j,i.m,s,"[Invalid Chunk]"),o=!1;break}else F$1(i.j,i.m,a,null),sc$1(i,a);qc(i)&&a!=hc$1&&a!=gc$1&&(i.h.g="",i.C=0),e!=4||s.length!=0||i.h.h||(i.o=1,J$1(16),o=!1),i.i=i.i&&o,o?0<s.length&&!i.aa&&(i.aa=!0,e=i.l,e.g==i&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+s.length),wc$1(e),e.L=!0,J$1(11))):(F$1(i.j,i.m,s,"[Invalid Chunked Response]"),P(i),rc$1(i))}k$1.fb=function(){if(this.g){var i=O$1(this.g),e=this.g.ga();this.C<e.length&&(pc$1(this),tc(this,i,e),this.i&&i!=4&&lc$1(this))}};function vc$1(i,e){var s=i.C,o=e.indexOf(`
`,s);return o==-1?hc$1:(s=Number(e.substring(s,o)),isNaN(s)?gc$1:(o+=1,o+s>e.length?hc$1:(e=e.substr(o,s),i.C=o+s,e)))}k$1.cancel=function(){this.I=!0,P(this)};function lc$1(i){i.Y=Date.now()+i.P,xc(i,i.P)}function xc(i,e){if(i.B!=null)throw Error("WatchDog timer not null");i.B=K$1(q(i.eb,i),e)}function pc$1(i){i.B&&(l.clearTimeout(i.B),i.B=null)}k$1.eb=function(){this.B=null;const i=Date.now();0<=i-this.Y?(Qb(this.j,this.A),this.K!=2&&(I(),J$1(17)),P(this),this.o=2,rc$1(this)):xc(this,this.Y-i)};function rc$1(i){i.l.G==0||i.I||uc$1(i.l,i)}function P(i){pc$1(i);var e=i.L;e&&typeof e.na=="function"&&e.na(),i.L=null,Fb(i.W),Lb(i.V),i.g&&(e=i.g,i.g=null,e.abort(),e.na())}function sc$1(i,e){try{var s=i.l;if(s.G!=0&&(s.g==i||yc(s.i,i))){if(s.I=i.N,!i.J&&yc(s.i,i)&&s.G==3){try{var o=s.Ca.g.parse(e)}catch{o=null}if(Array.isArray(o)&&o.length==3){var a=o;if(a[0]==0){e:if(!s.u){if(s.g)if(s.g.F+3e3<i.F)zc(s),Ac$1(s);else break e;Bc$1(s),J$1(18)}}else s.ta=a[1],0<s.ta-s.U&&37500>a[2]&&s.N&&s.A==0&&!s.v&&(s.v=K$1(q(s.ab,s),6e3));if(1>=Cc(s.i)&&s.ka){try{s.ka()}catch{}s.ka=void 0}}else Q$1(s,11)}else if((i.J||s.g==i)&&zc(s),!sa(e))for(a=s.Ca.g.parse(e),e=0;e<a.length;e++){let _=a[e];if(s.U=_[0],_=_[1],s.G==2)if(_[0]=="c"){s.J=_[1],s.la=_[2];const b=_[3];b!=null&&(s.ma=b,s.h.info("VER="+s.ma));const et=_[4];et!=null&&(s.za=et,s.h.info("SVER="+s.za));const ot=_[5];ot!=null&&typeof ot=="number"&&0<ot&&(o=1.5*ot,s.K=o,s.h.info("backChannelRequestTimeoutMs_="+o)),o=s;const gt=i.g;if(gt){const _t=gt.g?gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_t){var c=o.i;!c.g&&(w(_t,"spdy")||w(_t,"quic")||w(_t,"h2"))&&(c.j=c.l,c.g=new Set,c.h&&(Dc(c,c.h),c.h=null))}if(o.D){const $t=gt.g?gt.g.getResponseHeader("X-HTTP-Session-Id"):null;$t&&(o.sa=$t,R(o.F,o.D,$t))}}s.G=3,s.j&&s.j.xa(),s.$&&(s.O=Date.now()-i.F,s.h.info("Handshake RTT: "+s.O+"ms")),o=s;var d=i;if(o.oa=Ec$1(o,o.H?o.la:null,o.W),d.J){Fc(o.i,d);var h=d,g=o.K;g&&h.setTimeout(g),h.B&&(pc$1(h),lc$1(h)),o.g=d}else Gc$1(o);0<s.l.length&&Hc(s)}else _[0]!="stop"&&_[0]!="close"||Q$1(s,7);else s.G==3&&(_[0]=="stop"||_[0]=="close"?_[0]=="stop"?Q$1(s,7):Ic$1(s):_[0]!="noop"&&s.j&&s.j.wa(_),s.A=0)}}I(4)}catch{}}function Jc$1(i){if(i.R&&typeof i.R=="function")return i.R();if(typeof i=="string")return i.split("");if(ba$1(i)){for(var e=[],s=i.length,o=0;o<s;o++)e.push(i[o]);return e}e=[],s=0;for(o in i)e[s++]=i[o];return e}function Kc(i,e){if(i.forEach&&typeof i.forEach=="function")i.forEach(e,void 0);else if(ba$1(i)||typeof i=="string")na(i,e,void 0);else{if(i.T&&typeof i.T=="function")var s=i.T();else if(i.R&&typeof i.R=="function")s=void 0;else if(ba$1(i)||typeof i=="string"){s=[];for(var o=i.length,a=0;a<o;a++)s.push(a)}else for(a in s=[],o=0,i)s[o++]=a;o=Jc$1(i),a=o.length;for(var c=0;c<a;c++)e.call(void 0,o[c],s&&s[c],i)}}function S(i,e){this.h={},this.g=[],this.i=0;var s=arguments.length;if(1<s){if(s%2)throw Error("Uneven number of arguments");for(var o=0;o<s;o+=2)this.set(arguments[o],arguments[o+1])}else if(i)if(i instanceof S)for(s=i.T(),o=0;o<s.length;o++)this.set(s[o],i.get(s[o]));else for(o in i)this.set(o,i[o])}k$1=S.prototype;k$1.R=function(){Lc(this);for(var i=[],e=0;e<this.g.length;e++)i.push(this.h[this.g[e]]);return i};k$1.T=function(){return Lc(this),this.g.concat()};function Lc(i){if(i.i!=i.g.length){for(var e=0,s=0;e<i.g.length;){var o=i.g[e];T(i.h,o)&&(i.g[s++]=o),e++}i.g.length=s}if(i.i!=i.g.length){var a={};for(s=e=0;e<i.g.length;)o=i.g[e],T(a,o)||(i.g[s++]=o,a[o]=1),e++;i.g.length=s}}k$1.get=function(i,e){return T(this.h,i)?this.h[i]:e};k$1.set=function(i,e){T(this.h,i)||(this.i++,this.g.push(i)),this.h[i]=e};k$1.forEach=function(i,e){for(var s=this.T(),o=0;o<s.length;o++){var a=s[o],c=this.get(a);i.call(e,c,a,this)}};function T(i,e){return Object.prototype.hasOwnProperty.call(i,e)}var Mc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Nc(i,e){if(i){i=i.split("&");for(var s=0;s<i.length;s++){var o=i[s].indexOf("="),a=null;if(0<=o){var c=i[s].substring(0,o);a=i[s].substring(o+1)}else c=i[s];e(c,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}function U$1(i,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,i instanceof U$1){this.g=e!==void 0?e:i.g,Oc(this,i.j),this.s=i.s,Pc$1(this,i.i),Qc(this,i.m),this.l=i.l,e=i.h;var s=new Rc$1;s.i=e.i,e.g&&(s.g=new S(e.g),s.h=e.h),Sc(this,s),this.o=i.o}else i&&(s=String(i).match(Mc))?(this.g=!!e,Oc(this,s[1]||"",!0),this.s=Tc$1(s[2]||""),Pc$1(this,s[3]||"",!0),Qc(this,s[4]),this.l=Tc$1(s[5]||"",!0),Sc(this,s[6]||"",!0),this.o=Tc$1(s[7]||"")):(this.g=!!e,this.h=new Rc$1(null,this.g))}U$1.prototype.toString=function(){var i=[],e=this.j;e&&i.push(Uc$1(e,Vc$1,!0),":");var s=this.i;return(s||e=="file")&&(i.push("//"),(e=this.s)&&i.push(Uc$1(e,Vc$1,!0),"@"),i.push(encodeURIComponent(String(s)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s=this.m,s!=null&&i.push(":",String(s))),(s=this.l)&&(this.i&&s.charAt(0)!="/"&&i.push("/"),i.push(Uc$1(s,s.charAt(0)=="/"?Wc:Xc$1,!0))),(s=this.h.toString())&&i.push("?",s),(s=this.o)&&i.push("#",Uc$1(s,Yc$1)),i.join("")};function N$1(i){return new U$1(i)}function Oc(i,e,s){i.j=s?Tc$1(e,!0):e,i.j&&(i.j=i.j.replace(/:$/,""))}function Pc$1(i,e,s){i.i=s?Tc$1(e,!0):e}function Qc(i,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);i.m=e}else i.m=null}function Sc(i,e,s){e instanceof Rc$1?(i.h=e,Zc$1(i.h,i.g)):(s||(e=Uc$1(e,$c$1)),i.h=new Rc$1(e,i.g))}function R(i,e,s){i.h.set(e,s)}function jc$1(i){return R(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function ad(i){return i instanceof U$1?N$1(i):new U$1(i,void 0)}function bd(i,e,s,o){var a=new U$1(null,void 0);return i&&Oc(a,i),e&&Pc$1(a,e),s&&Qc(a,s),o&&(a.l=o),a}function Tc$1(i,e){return i?e?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Uc$1(i,e,s){return typeof i=="string"?(i=encodeURI(i).replace(e,cd),s&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function cd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Vc$1=/[#\/\?@]/g,Xc$1=/[#\?:]/g,Wc=/[#\?]/g,$c$1=/[#\?@]/g,Yc$1=/#/g;function Rc$1(i,e){this.h=this.g=null,this.i=i||null,this.j=!!e}function V(i){i.g||(i.g=new S,i.h=0,i.i&&Nc(i.i,function(e,s){i.add(decodeURIComponent(e.replace(/\+/g," ")),s)}))}k$1=Rc$1.prototype;k$1.add=function(i,e){V(this),this.i=null,i=W$1(this,i);var s=this.g.get(i);return s||this.g.set(i,s=[]),s.push(e),this.h+=1,this};function dd(i,e){V(i),e=W$1(i,e),T(i.g.h,e)&&(i.i=null,i.h-=i.g.get(e).length,i=i.g,T(i.h,e)&&(delete i.h[e],i.i--,i.g.length>2*i.i&&Lc(i)))}function ed(i,e){return V(i),e=W$1(i,e),T(i.g.h,e)}k$1.forEach=function(i,e){V(this),this.g.forEach(function(s,o){na(s,function(a){i.call(e,a,o,this)},this)},this)};k$1.T=function(){V(this);for(var i=this.g.R(),e=this.g.T(),s=[],o=0;o<e.length;o++)for(var a=i[o],c=0;c<a.length;c++)s.push(e[o]);return s};k$1.R=function(i){V(this);var e=[];if(typeof i=="string")ed(this,i)&&(e=qa$1(e,this.g.get(W$1(this,i))));else{i=this.g.R();for(var s=0;s<i.length;s++)e=qa$1(e,i[s])}return e};k$1.set=function(i,e){return V(this),this.i=null,i=W$1(this,i),ed(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[e]),this.h+=1,this};k$1.get=function(i,e){return i?(i=this.R(i),0<i.length?String(i[0]):e):e};function mc$1(i,e,s){dd(i,e),0<s.length&&(i.i=null,i.g.set(W$1(i,e),ra$1(s)),i.h+=s.length)}k$1.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var i=[],e=this.g.T(),s=0;s<e.length;s++){var o=e[s],a=encodeURIComponent(String(o));o=this.R(o);for(var c=0;c<o.length;c++){var d=a;o[c]!==""&&(d+="="+encodeURIComponent(String(o[c]))),i.push(d)}}return this.i=i.join("&")};function W$1(i,e){return e=String(e),i.j&&(e=e.toLowerCase()),e}function Zc$1(i,e){e&&!i.j&&(V(i),i.i=null,i.g.forEach(function(s,o){var a=o.toLowerCase();o!=a&&(dd(this,o),mc$1(this,a,s))},i)),i.j=e}var fd=class{constructor(i,e){this.h=i,this.g=e}};function gd(i){this.l=i||hd,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.g&&l.g.Ea&&l.g.Ea()&&l.g.Ea().Zb),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hd=10;function id(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Cc(i){return i.h?1:i.g?i.g.size:0}function yc(i,e){return i.h?i.h==e:i.g?i.g.has(e):!1}function Dc(i,e){i.g?i.g.add(e):i.h=e}function Fc(i,e){i.h&&i.h==e?i.h=null:i.g&&i.g.has(e)&&i.g.delete(e)}gd.prototype.cancel=function(){if(this.i=jd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function jd(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let e=i.i;for(const s of i.g.values())e=e.concat(s.D);return e}return ra$1(i.i)}function kd(){}kd.prototype.stringify=function(i){return l.JSON.stringify(i,void 0)};kd.prototype.parse=function(i){return l.JSON.parse(i,void 0)};function ld(){this.g=new kd}function md(i,e,s){const o=s||"";try{Kc(i,function(a,c){let d=a;p(a)&&(d=rb(a)),e.push(o+c+"="+encodeURIComponent(d))})}catch(a){throw e.push(o+"type="+encodeURIComponent("_badmap")),a}}function nd(i,e){const s=new Mb;if(l.Image){const o=new Image;o.onload=ja(od,s,o,"TestLoadImage: loaded",!0,e),o.onerror=ja(od,s,o,"TestLoadImage: error",!1,e),o.onabort=ja(od,s,o,"TestLoadImage: abort",!1,e),o.ontimeout=ja(od,s,o,"TestLoadImage: timeout",!1,e),l.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=i}else e(!1)}function od(i,e,s,o,a){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,a(o)}catch{}}function pd(i){this.l=i.$b||null,this.j=i.ib||!1}t(pd,Yb);pd.prototype.g=function(){return new qd(this.l,this.j)};pd.prototype.i=function(i){return function(){return i}}({});function qd(i,e){C$1.call(this),this.D=i,this.u=e,this.m=void 0,this.readyState=rd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}t(qd,C$1);var rd=0;k$1=qd.prototype;k$1.open=function(i,e){if(this.readyState!=rd)throw this.abort(),Error("Error reopening a connection");this.C=i,this.B=e,this.readyState=1,sd(this)};k$1.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};i&&(e.body=i),(this.D||l).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};k$1.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,td(this)),this.readyState=rd};k$1.Va=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,sd(this)),this.g&&(this.readyState=3,sd(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ud(this)}else i.text().then(this.Ua.bind(this),this.ha.bind(this))};function ud(i){i.j.read().then(i.Sa.bind(i)).catch(i.ha.bind(i))}k$1.Sa=function(i){if(this.g){if(this.u&&i.value)this.response.push(i.value);else if(!this.u){var e=i.value?i.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!i.done}))&&(this.response=this.responseText+=e)}i.done?td(this):sd(this),this.readyState==3&&ud(this)}};k$1.Ua=function(i){this.g&&(this.response=this.responseText=i,td(this))};k$1.Ta=function(i){this.g&&(this.response=i,td(this))};k$1.ha=function(){this.g&&td(this)};function td(i){i.readyState=4,i.l=null,i.j=null,i.A=null,sd(i)}k$1.setRequestHeader=function(i,e){this.v.append(i,e)};k$1.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""};k$1.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],e=this.h.entries();for(var s=e.next();!s.done;)s=s.value,i.push(s[0]+": "+s[1]),s=e.next();return i.join(`\r
`)};function sd(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(qd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});var vd=l.JSON.parse;function X$1(i){C$1.call(this),this.headers=new S,this.u=i||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wd,this.K=this.L=!1}t(X$1,C$1);var wd="",xd=/^https?$/i,yd=["POST","PUT"];k$1=X$1.prototype;k$1.ea=function(i,e,s,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+i);e=e?e.toUpperCase():"GET",this.H=i,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cc$1.g(),this.C=this.u?Zb(this.u):Zb(cc$1),this.g.onreadystatechange=q(this.Fa,this);try{this.F=!0,this.g.open(e,String(i),!0),this.F=!1}catch(c){zd(this,c);return}i=s||"";const a=new S(this.headers);o&&Kc(o,function(c,d){a.set(d,c)}),o=oa(a.T()),s=l.FormData&&i instanceof l.FormData,!(0<=ma$1(yd,e))||o||s||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),a.forEach(function(c,d){this.g.setRequestHeader(d,c)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ad(this),0<this.B&&((this.K=Bd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=q(this.pa,this)):this.A=Gb(this.pa,this.B,this)),this.v=!0,this.g.send(i),this.v=!1}catch(c){zd(this,c)}};function Bd(i){return y&&Ra$1()&&typeof i.timeout=="number"&&i.ontimeout!==void 0}function pa$1(i){return i.toLowerCase()=="content-type"}k$1.pa=function(){typeof goog<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,D$1(this,"timeout"),this.abort(8))};function zd(i,e){i.h=!1,i.g&&(i.l=!0,i.g.abort(),i.l=!1),i.j=e,i.m=5,Cd(i),Dd(i)}function Cd(i){i.D||(i.D=!0,D$1(i,"complete"),D$1(i,"error"))}k$1.abort=function(i){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=i||7,D$1(this,"complete"),D$1(this,"abort"),Dd(this))};k$1.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dd(this,!0)),X$1.Z.M.call(this)};k$1.Fa=function(){this.s||(this.F||this.v||this.l?Ed(this):this.cb())};k$1.cb=function(){Ed(this)};function Ed(i){if(i.h&&typeof goog<"u"&&(!i.C[1]||O$1(i)!=4||i.ba()!=2)){if(i.v&&O$1(i)==4)Gb(i.Fa,0,i);else if(D$1(i,"readystatechange"),O$1(i)==4){i.h=!1;try{const h=i.ba();e:switch(h){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var s;if(!(s=e)){var o;if(o=h===0){var a=String(i.H).match(Mc)[1]||null;if(!a&&l.self&&l.self.location){var c=l.self.location.protocol;a=c.substr(0,c.length-1)}o=!xd.test(a?a.toLowerCase():"")}s=o}if(s)D$1(i,"complete"),D$1(i,"success");else{i.m=6;try{var d=2<O$1(i)?i.g.statusText:""}catch{d=""}i.j=d+" ["+i.ba()+"]",Cd(i)}}finally{Dd(i)}}}}function Dd(i,e){if(i.g){Ad(i);const s=i.g,o=i.C[0]?aa$1:null;i.g=null,i.C=null,e||D$1(i,"ready");try{s.onreadystatechange=o}catch{}}}function Ad(i){i.g&&i.K&&(i.g.ontimeout=null),i.A&&(l.clearTimeout(i.A),i.A=null)}function O$1(i){return i.g?i.g.readyState:0}k$1.ba=function(){try{return 2<O$1(this)?this.g.status:-1}catch{return-1}};k$1.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};k$1.Qa=function(i){if(this.g){var e=this.g.responseText;return i&&e.indexOf(i)==0&&(e=e.substring(i.length)),vd(e)}};function oc$1(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.J){case wd:case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}k$1.Da=function(){return this.m};k$1.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fd(i){let e="";return xa$1(i,function(s,o){e+=o,e+=":",e+=s,e+=`\r
`}),e}function Gd(i,e,s){e:{for(o in s){var o=!1;break e}o=!0}o||(s=Fd(s),typeof i=="string"?s!=null&&encodeURIComponent(String(s)):R(i,e,s))}function Hd(i,e,s){return s&&s.internalChannelParams&&s.internalChannelParams[i]||e}function Id(i){this.za=0,this.l=[],this.h=new Mb,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Hd("failFast",!1,i),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Hd("baseRetryDelayMs",5e3,i),this.$a=Hd("retryDelaySeedMs",1e4,i),this.Ya=Hd("forwardChannelMaxRetries",2,i),this.ra=Hd("forwardChannelRequestTimeoutMs",2e4,i),this.qa=i&&i.xmlHttpFactory||void 0,this.Ba=i&&i.Yb||!1,this.K=void 0,this.H=i&&i.supportsCrossDomainXhr||!1,this.J="",this.i=new gd(i&&i.concurrentRequestLimit),this.Ca=new ld,this.ja=i&&i.fastHandshake||!1,this.Ra=i&&i.Wb||!1,i&&i.Aa&&this.h.Aa(),i&&i.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&i&&i.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!i||i.Xb!==!1}k$1=Id.prototype;k$1.ma=8;k$1.G=1;function Ic$1(i){if(Jd(i),i.G==3){var e=i.V++,s=N$1(i.F);R(s,"SID",i.J),R(s,"RID",e),R(s,"TYPE","terminate"),Kd(i,s),e=new M(i,i.h,e,void 0),e.K=2,e.v=jc$1(N$1(s)),s=!1,l.navigator&&l.navigator.sendBeacon&&(s=l.navigator.sendBeacon(e.v.toString(),"")),!s&&l.Image&&(new Image().src=e.v,s=!0),s||(e.g=nc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),lc$1(e)}Ld(i)}k$1.hb=function(i){try{this.h.info("Origin Trials invoked: "+i)}catch{}};function Ac$1(i){i.g&&(wc$1(i),i.g.cancel(),i.g=null)}function Jd(i){Ac$1(i),i.u&&(l.clearTimeout(i.u),i.u=null),zc(i),i.i.cancel(),i.m&&(typeof i.m=="number"&&l.clearTimeout(i.m),i.m=null)}function Md(i,e){i.l.push(new fd(i.Za++,e)),i.G==3&&Hc(i)}function Hc(i){id(i.i)||i.m||(i.m=!0,zb(i.Ha,i),i.C=0)}function Nd(i,e){return Cc(i.i)>=i.i.j-(i.m?1:0)?!1:i.m?(i.l=e.D.concat(i.l),!0):i.G==1||i.G==2||i.C>=(i.Xa?0:i.Ya)?!1:(i.m=K$1(q(i.Ha,i,e),Od(i,i.C)),i.C++,!0)}k$1.Ha=function(i){if(this.m)if(this.m=null,this.G==1){if(!i){this.V=Math.floor(1e5*Math.random()),i=this.V++;const a=new M(this,this.h,i,void 0);let c=this.s;if(this.P&&(c?(c=ya$1(c),Aa(c,this.P)):c=this.P),this.o===null&&(a.H=c),this.ja)e:{for(var e=0,s=0;s<this.l.length;s++){t:{var o=this.l[s];if("__data__"in o.g&&(o=o.g.__data__,typeof o=="string")){o=o.length;break t}o=void 0}if(o===void 0)break;if(e+=o,4096<e){e=s;break e}if(e===4096||s===this.l.length-1){e=s+1;break e}}e=1e3}else e=1e3;e=Pd(this,a,e),s=N$1(this.F),R(s,"RID",i),R(s,"CVER",22),this.D&&R(s,"X-HTTP-Session-Id",this.D),Kd(this,s),this.o&&c&&Gd(s,this.o,c),Dc(this.i,a),this.Ra&&R(s,"TYPE","init"),this.ja?(R(s,"$req",e),R(s,"SID","null"),a.$=!0,ic$1(a,s,null)):ic$1(a,s,e),this.G=2}}else this.G==3&&(i?Qd(this,i):this.l.length==0||id(this.i)||Qd(this))};function Qd(i,e){var s;e?s=e.m:s=i.V++;const o=N$1(i.F);R(o,"SID",i.J),R(o,"RID",s),R(o,"AID",i.U),Kd(i,o),i.o&&i.s&&Gd(o,i.o,i.s),s=new M(i,i.h,s,i.C+1),i.o===null&&(s.H=i.s),e&&(i.l=e.D.concat(i.l)),e=Pd(i,s,1e3),s.setTimeout(Math.round(.5*i.ra)+Math.round(.5*i.ra*Math.random())),Dc(i.i,s),ic$1(s,o,e)}function Kd(i,e){i.j&&Kc({},function(s,o){R(e,o,s)})}function Pd(i,e,s){s=Math.min(i.l.length,s);var o=i.j?q(i.j.Oa,i.j,i):null;e:{var a=i.l;let c=-1;for(;;){const d=["count="+s];c==-1?0<s?(c=a[0].h,d.push("ofs="+c)):c=0:d.push("ofs="+c);let h=!0;for(let g=0;g<s;g++){let _=a[g].h;const b=a[g].g;if(_-=c,0>_)c=Math.max(0,a[g].h-100),h=!1;else try{md(b,d,"req"+_+"_")}catch{o&&o(b)}}if(h){o=d.join("&");break e}}}return i=i.l.splice(0,s),e.D=i,o}function Gc$1(i){i.g||i.u||(i.Y=1,zb(i.Ga,i),i.A=0)}function Bc$1(i){return i.g||i.u||3<=i.A?!1:(i.Y++,i.u=K$1(q(i.Ga,i),Od(i,i.A)),i.A++,!0)}k$1.Ga=function(){if(this.u=null,Rd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var i=2*this.O;this.h.info("BP detection timer enabled: "+i),this.B=K$1(q(this.bb,this),i)}};k$1.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,J$1(10),Ac$1(this),Rd(this))};function wc$1(i){i.B!=null&&(l.clearTimeout(i.B),i.B=null)}function Rd(i){i.g=new M(i,i.h,"rpc",i.Y),i.o===null&&(i.g.H=i.s),i.g.O=0;var e=N$1(i.oa);R(e,"RID","rpc"),R(e,"SID",i.J),R(e,"CI",i.N?"0":"1"),R(e,"AID",i.U),Kd(i,e),R(e,"TYPE","xmlhttp"),i.o&&i.s&&Gd(e,i.o,i.s),i.K&&i.g.setTimeout(i.K);var s=i.g;i=i.la,s.K=1,s.v=jc$1(N$1(e)),s.s=null,s.U=!0,kc(s,i)}k$1.ab=function(){this.v!=null&&(this.v=null,Ac$1(this),Bc$1(this),J$1(19))};function zc(i){i.v!=null&&(l.clearTimeout(i.v),i.v=null)}function uc$1(i,e){var s=null;if(i.g==e){zc(i),wc$1(i),i.g=null;var o=2}else if(yc(i.i,e))s=e.D,Fc(i.i,e),o=1;else return;if(i.I=e.N,i.G!=0){if(e.i)if(o==1){s=e.s?e.s.length:0,e=Date.now()-e.F;var a=i.C;o=Sb(),D$1(o,new Vb(o,s)),Hc(i)}else Gc$1(i);else if(a=e.o,a==3||a==0&&0<i.I||!(o==1&&Nd(i,e)||o==2&&Bc$1(i)))switch(s&&0<s.length&&(e=i.i,e.i=e.i.concat(s)),a){case 1:Q$1(i,5);break;case 4:Q$1(i,10);break;case 3:Q$1(i,6);break;default:Q$1(i,2)}}}function Od(i,e){let s=i.Pa+Math.floor(Math.random()*i.$a);return i.j||(s*=2),s*e}function Q$1(i,e){if(i.h.info("Error code "+e),e==2){var s=null;i.j&&(s=null);var o=q(i.jb,i);s||(s=new U$1("//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oc(s,"https"),jc$1(s)),nd(s.toString(),o)}else J$1(2);i.G=0,i.j&&i.j.va(e),Ld(i),Jd(i)}k$1.jb=function(i){i?(this.h.info("Successfully pinged google.com"),J$1(2)):(this.h.info("Failed to ping google.com"),J$1(1))};function Ld(i){i.G=0,i.I=-1,i.j&&((jd(i.i).length!=0||i.l.length!=0)&&(i.i.i.length=0,ra$1(i.l),i.l.length=0),i.j.ua())}function Ec$1(i,e,s){let o=ad(s);if(o.i!="")e&&Pc$1(o,e+"."+o.i),Qc(o,o.m);else{const a=l.location;o=bd(a.protocol,e?e+"."+a.hostname:a.hostname,+a.port,s)}return i.aa&&xa$1(i.aa,function(a,c){R(o,c,a)}),e=i.D,s=i.sa,e&&s&&R(o,e,s),R(o,"VER",i.ma),Kd(i,o),o}function nc(i,e,s){if(e&&!i.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=s&&i.Ba&&!i.qa?new X$1(new pd({ib:!0})):new X$1(i.qa),e.L=i.H,e}function Sd(){}k$1=Sd.prototype;k$1.xa=function(){};k$1.wa=function(){};k$1.va=function(){};k$1.ua=function(){};k$1.Oa=function(){};function Td(){if(y&&!(10<=Number(Ua$1)))throw Error("Environmental error: no available transport.")}Td.prototype.g=function(i,e){return new Y$1(i,e)};function Y$1(i,e){C$1.call(this),this.g=new Id(e),this.l=i,this.h=e&&e.messageUrlParams||null,i=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.s=i,i=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(i?i["X-WebChannel-Content-Type"]=e.messageContentType:i={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(i?i["X-WebChannel-Client-Profile"]=e.ya:i={"X-WebChannel-Client-Profile":e.ya}),this.g.P=i,(i=e&&e.httpHeadersOverwriteParam)&&!sa(i)&&(this.g.o=i),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sa(e)&&(this.g.D=e,i=this.h,i!==null&&e in i&&(i=this.h,e in i&&delete i[e])),this.j=new Z$1(this)}t(Y$1,C$1);Y$1.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var i=this.g,e=this.l,s=this.h||void 0;i.Wa&&(i.h.info("Origin Trials enabled."),zb(q(i.hb,i,e))),J$1(0),i.W=e,i.aa=s||{},i.N=i.X,i.F=Ec$1(i,null,i.W),Hc(i)};Y$1.prototype.close=function(){Ic$1(this.g)};Y$1.prototype.u=function(i){if(typeof i=="string"){var e={};e.__data__=i,Md(this.g,e)}else this.v?(e={},e.__data__=rb(i),Md(this.g,e)):Md(this.g,i)};Y$1.prototype.M=function(){this.g.j=null,delete this.j,Ic$1(this.g),delete this.g,Y$1.Z.M.call(this)};function Ud(i){ac$1.call(this);var e=i.__sm__;if(e){e:{for(const s in e){i=s;break e}i=void 0}(this.i=i)&&(i=this.i,e=e!==null&&i in e?e[i]:void 0),this.data=e}else this.data=i}t(Ud,ac$1);function Vd(){bc$1.call(this),this.status=1}t(Vd,bc$1);function Z$1(i){this.g=i}t(Z$1,Sd);Z$1.prototype.xa=function(){D$1(this.g,"a")};Z$1.prototype.wa=function(i){D$1(this.g,new Ud(i))};Z$1.prototype.va=function(i){D$1(this.g,new Vd)};Z$1.prototype.ua=function(){D$1(this.g,"b")};Td.prototype.createWebChannel=Td.prototype.g;Y$1.prototype.send=Y$1.prototype.u;Y$1.prototype.open=Y$1.prototype.m;Y$1.prototype.close=Y$1.prototype.close;Wb.NO_ERROR=0;Wb.TIMEOUT=8;Wb.HTTP_ERROR=6;Xb.COMPLETE="complete";$b.EventType=L$1;L$1.OPEN="a";L$1.CLOSE="b";L$1.ERROR="c";L$1.MESSAGE="d";C$1.prototype.listen=C$1.prototype.N;X$1.prototype.listenOnce=X$1.prototype.O;X$1.prototype.getLastError=X$1.prototype.La;X$1.prototype.getLastErrorCode=X$1.prototype.Da;X$1.prototype.getStatus=X$1.prototype.ba;X$1.prototype.getResponseJson=X$1.prototype.Qa;X$1.prototype.getResponseText=X$1.prototype.ga;X$1.prototype.send=X$1.prototype.ea;var createWebChannelTransport=function(){return new Td},getStatEventTarget=function(){return Sb()},ErrorCode=Wb,EventType=Xb,Event=H,Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},FetchXmlHttpFactory=pd,WebChannel=$b,XhrIo=X$1;const D="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}C.UNAUTHENTICATED=new C(null),C.GOOGLE_CREDENTIALS=new C("google-credentials-uid"),C.FIRST_PARTY=new C("first-party-uid"),C.MOCK_USER=new C("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Logger("@firebase/firestore");function k(){return N.logLevel}function O(i,...e){if(N.logLevel<=LogLevel.DEBUG){const s=e.map(B);N.debug(`Firestore (${x}): ${i}`,...s)}}function F(i,...e){if(N.logLevel<=LogLevel.ERROR){const s=e.map(B);N.error(`Firestore (${x}): ${i}`,...s)}}function $(i,...e){if(N.logLevel<=LogLevel.WARN){const s=e.map(B);N.warn(`Firestore (${x}): ${i}`,...s)}}function B(i){if(typeof i=="string")return i;try{return e=i,JSON.stringify(e)}catch{return i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(i="Unexpected state"){const e=`FIRESTORE (${x}) INTERNAL ASSERTION FAILED: `+i;throw F(e),new Error(e)}function U(i,e){i||L()}function K(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends FirebaseError{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(){this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable(()=>s(C.UNAUTHENTICATED))}shutdown(){}}class J{constructor(e){this.t=e,this.currentUser=C.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,s){let o=this.i;const a=g=>this.i!==o?(o=this.i,s(g)):Promise.resolve();let c=new j;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new j,e.enqueueRetryable(()=>a(this.currentUser))};const d=()=>{const g=c;e.enqueueRetryable(async()=>{await g.promise,await a(this.currentUser)})},h=g=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.auth.addAuthTokenListener(this.o),d()};this.t.onInit(g=>h(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?h(g):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new j)}},0),d()}getToken(){const e=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(o=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(U(typeof o.accessToken=="string"),new W(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new C(e)}}class Y{constructor(e,s,o,a){this.h=e,this.l=s,this.m=o,this.g=a,this.type="FirstParty",this.user=C.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(U(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class X{constructor(e,s,o,a){this.h=e,this.l=s,this.m=o,this.g=a}getToken(){return Promise.resolve(new Y(this.h,this.l,this.m,this.g))}start(e,s){e.enqueueRetryable(()=>s(C.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tt{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,s){const o=c=>{c.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.A;return this.A=c.token,O("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?s(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>o(c))};const a=c=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.appCheck.addTokenListener(this.o)};this.T.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.T.getImmediate({optional:!0});c?a(c):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(s=>s?(U(typeof s.token=="string"),this.A=s.token,new Z(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),s=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(s);else for(let o=0;o<i;o++)s[o]=Math.floor(256*Math.random());return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=Math.floor(256/e.length)*e.length;let o="";for(;o.length<20;){const a=nt(40);for(let c=0;c<a.length;++c)o.length<20&&a[c]<s&&(o+=e.charAt(a[c]%e.length))}return o}}function it(i,e){return i<e?-1:i>e?1:0}function rt(i,e,s){return i.length===e.length&&i.every((o,a)=>s(o,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,s){if(this.seconds=e,this.nanoseconds=s,s<0)throw new Q(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(s>=1e9)throw new Q(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(e<-62135596800)throw new Q(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const s=Math.floor(e/1e3),o=Math.floor(1e6*(e-1e3*s));return new ut(s,o)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?it(this.nanoseconds,e.nanoseconds):it(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ct(e)}static min(){return new ct(new ut(0,0))}static max(){return new ct(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,s,o){s===void 0?s=0:s>e.length&&L(),o===void 0?o=e.length-s:o>e.length-s&&L(),this.segments=e,this.offset=s,this.len=o}get length(){return this.len}isEqual(e){return at.comparator(this,e)===0}child(e){const s=this.segments.slice(this.offset,this.limit());return e instanceof at?e.forEach(o=>{s.push(o)}):s.push(e),this.construct(s)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}forEach(e){for(let s=this.offset,o=this.limit();s<o;s++)e(this.segments[s])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,s){const o=Math.min(e.length,s.length);for(let a=0;a<o;a++){const c=e.get(a),d=s.get(a);if(c<d)return-1;if(c>d)return 1}return e.length<s.length?-1:e.length>s.length?1:0}}class ht extends at{construct(e,s,o){return new ht(e,s,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const s=[];for(const o of e){if(o.indexOf("//")>=0)throw new Q(G.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);s.push(...o.split("/").filter(a=>a.length>0))}return new ht(s)}static emptyPath(){return new ht([])}}const lt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends at{construct(e,s,o){return new ft(e,s,o)}static isValidIdentifier(e){return lt.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const s=[];let o="",a=0;const c=()=>{if(o.length===0)throw new Q(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);s.push(o),o=""};let d=!1;for(;a<e.length;){const h=e[a];if(h==="\\"){if(a+1===e.length)throw new Q(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[a+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new Q(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);o+=g,a+=2}else h==="`"?(d=!d,a++):h!=="."||d?(o+=h,a++):(c(),a++)}if(c(),d)throw new Q(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(s)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.path=e}static fromPath(e){return new dt(ht.fromString(e))}static fromName(e){return new dt(ht.fromString(e).popFirst(5))}static empty(){return new dt(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ht.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,s){return ht.comparator(e.path,s.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new dt(new ht(e.slice()))}}function Tt(i,e){const s=i.toTimestamp().seconds,o=i.toTimestamp().nanoseconds+1,a=ct.fromTimestamp(o===1e9?new ut(s+1,0):new ut(s,o));return new At(a,dt.empty(),e)}function Et(i){return new At(i.readTime,i.key,-1)}class At{constructor(e,s,o){this.readTime=e,this.documentKey=s,this.largestBatchId=o}static min(){return new At(ct.min(),dt.empty(),-1)}static max(){return new At(ct.max(),dt.empty(),-1)}}function Rt(i,e){let s=i.readTime.compareTo(e.readTime);return s!==0?s:(s=dt.comparator(i.documentKey,e.documentKey),s!==0?s:it(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==bt)throw i;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(s=>{this.isDone=!0,this.result=s,this.nextCallback&&this.nextCallback(s)},s=>{this.isDone=!0,this.error=s,this.catchCallback&&this.catchCallback(s)})}catch(e){return this.next(void 0,e)}next(e,s){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(s,this.error):this.wrapSuccess(e,this.result):new Vt((o,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(o,a)},this.catchCallback=c=>{this.wrapFailure(s,c).next(o,a)}})}toPromise(){return new Promise((e,s)=>{this.next(e,s)})}wrapUserFunction(e){try{const s=e();return s instanceof Vt?s:Vt.resolve(s)}catch(s){return Vt.reject(s)}}wrapSuccess(e,s){return e?this.wrapUserFunction(()=>e(s)):Vt.resolve(s)}wrapFailure(e,s){return e?this.wrapUserFunction(()=>e(s)):Vt.reject(s)}static resolve(e){return new Vt((s,o)=>{s(e)})}static reject(e){return new Vt((s,o)=>{o(e)})}static waitFor(e){return new Vt((s,o)=>{let a=0,c=0,d=!1;e.forEach(h=>{++a,h.next(()=>{++c,d&&c===a&&s()},g=>o(g))}),d=!0,c===a&&s()})}static or(e){let s=Vt.resolve(!1);for(const o of e)s=s.next(a=>a?Vt.resolve(a):o());return s}static forEach(e,s){const o=[];return e.forEach((a,c)=>{o.push(s.call(this,a,c))}),this.waitFor(o)}static mapArray(e,s){return new Vt((o,a)=>{const c=e.length,d=new Array(c);let h=0;for(let g=0;g<c;g++){const _=g;s(e[_]).next(b=>{d[_]=b,++h,h===c&&o(d)},b=>a(b))}})}static doWhile(e,s){return new Vt((o,a)=>{const c=()=>{e()===!0?s().next(()=>{c()},a):o()};c()})}}function Nt(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,s){this.previousValue=e,s&&(s.sequenceNumberHandler=o=>this.ut(o),this.ct=o=>s.writeSequenceNumber(o))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(i){let e=0;for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&e++;return e}function qt(i,e){for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&e(s,i[s])}function Kt(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.at=-1;class Gt{constructor(e,s){this.comparator=e,this.root=s||jt.EMPTY}insert(e,s){return new Gt(this.comparator,this.root.insert(e,s,this.comparator).copy(null,null,jt.BLACK,null,null))}remove(e){return new Gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,jt.BLACK,null,null))}get(e){let s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return s.value;o<0?s=s.left:o>0&&(s=s.right)}return null}indexOf(e){let s=0,o=this.root;for(;!o.isEmpty();){const a=this.comparator(e,o.key);if(a===0)return s+o.left.size;a<0?o=o.left:(s+=o.left.size+1,o=o.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((s,o)=>(e(s,o),!1))}toString(){const e=[];return this.inorderTraversal((s,o)=>(e.push(`${s}:${o}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qt(this.root,e,this.comparator,!0)}}class Qt{constructor(e,s,o,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=s?o(e.key,s):1,s&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const s={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return s}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class jt{constructor(e,s,o,a,c){this.key=e,this.value=s,this.color=o!=null?o:jt.RED,this.left=a!=null?a:jt.EMPTY,this.right=c!=null?c:jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,s,o,a,c){return new jt(e!=null?e:this.key,s!=null?s:this.value,o!=null?o:this.color,a!=null?a:this.left,c!=null?c:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,s,o){let a=this;const c=o(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,s,o),null):c===0?a.copy(null,s,null,null,null):a.copy(null,null,null,null,a.right.insert(e,s,o)),a.fixUp()}removeMin(){if(this.left.isEmpty())return jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,s){let o,a=this;if(s(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,s),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),s(e,a.key)===0){if(a.right.isEmpty())return jt.EMPTY;o=a.right.min(),a=a.copy(o.key,o.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,s))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),s=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,s)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}jt.EMPTY=null,jt.RED=!0,jt.BLACK=!1;jt.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(i,e,s,o,a){return this}insert(i,e,s){return new jt(i,e)}remove(i,e){return this}isEmpty(){return!0}inorderTraversal(i){return!1}reverseTraversal(i){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.comparator=e,this.data=new Gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((s,o)=>(e(s),!1))}forEachInRange(e,s){const o=this.data.getIteratorFrom(e[0]);for(;o.hasNext();){const a=o.getNext();if(this.comparator(a.key,e[1])>=0)return;s(a.key)}}forEachWhile(e,s){let o;for(o=s!==void 0?this.data.getIteratorFrom(s):this.data.getIterator();o.hasNext();)if(!e(o.getNext().key))return}firstAfterOrEqual(e){const s=this.data.getIteratorFrom(e);return s.hasNext()?s.getNext().key:null}getIterator(){return new zt(this.data.getIterator())}getIteratorFrom(e){return new zt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let s=this;return s.size<e.size&&(s=e,e=this),e.forEach(o=>{s=s.add(o)}),s}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const s=this.data.getIterator(),o=e.data.getIterator();for(;s.hasNext();){const a=s.getNext().key,c=o.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(s=>{e.push(s)}),e}toString(){const e=[];return this.forEach(s=>e.push(s)),"SortedSet("+e.toString()+")"}copy(e){const s=new Wt(this.comparator);return s.data=e,s}}class zt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Jt([])}unionWith(e){let s=new Wt(ft.comparator);for(const o of this.fields)s=s.add(o);for(const o of e)s=s.add(o);return new Jt(s.toArray())}covers(e){for(const s of this.fields)if(s.isPrefixOf(e))return!0;return!1}isEqual(e){return rt(this.fields,e.fields,(s,o)=>s.isEqual(o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const s=atob(e);return new Xt(s)}static fromUint8Array(e){const s=function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a}(e);return new Xt(s)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let o=0;o<e.length;o++)s[o]=e.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return it(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const Zt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(i){if(U(!!i),typeof i=="string"){let e=0;const s=Zt.exec(i);if(U(!!s),s[1]){let a=s[1];a=(a+"000000000").substr(0,9),e=Number(a)}const o=new Date(i);return{seconds:Math.floor(o.getTime()/1e3),nanos:e}}return{seconds:ee(i.seconds),nanos:ee(i.nanos)}}function ee(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ne(i){return typeof i=="string"?Xt.fromBase64String(i):Xt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(i){var e,s;return((s=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||s===void 0?void 0:s.stringValue)==="server_timestamp"}function ie(i){const e=i.mapValue.fields.__previous_value__;return se(e)?ie(e):e}function re(i){const e=te(i.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,s,o,a,c,d,h,g){this.databaseId=e,this.appId=s,this.persistenceKey=o,this.host=a,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=h,this.useFetchStreams=g}}class ue{constructor(e,s){this.projectId=e,this.database=s||"(default)"}static empty(){return new ue("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ue&&e.projectId===this.projectId&&e.database===this.database}}function ce(i){return i==null}function ae(i){return i===0&&1/i==-1/0}function he(i){return typeof i=="number"&&Number.isInteger(i)&&!ae(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?se(i)?4:ve(i)?9007199254740991:10:L()}function _e(i,e){if(i===e)return!0;const s=de(i);if(s!==de(e))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return re(i).isEqual(re(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=te(o.timestampValue),d=te(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,a){return ne(o.bytesValue).isEqual(ne(a.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,a){return ee(o.geoPointValue.latitude)===ee(a.geoPointValue.latitude)&&ee(o.geoPointValue.longitude)===ee(a.geoPointValue.longitude)}(i,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return ee(o.integerValue)===ee(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=ee(o.doubleValue),d=ee(a.doubleValue);return c===d?ae(c)===ae(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return rt(i.arrayValue.values||[],e.arrayValue.values||[],_e);case 10:return function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if(Ut(c)!==Ut(d))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(d[h]===void 0||!_e(c[h],d[h])))return!1;return!0}(i,e);default:return L()}}function we(i,e){return(i.values||[]).find(s=>_e(s,e))!==void 0}function me(i,e){if(i===e)return 0;const s=de(i),o=de(e);if(s!==o)return it(s,o);switch(s){case 0:case 9007199254740991:return 0;case 1:return it(i.booleanValue,e.booleanValue);case 2:return function(a,c){const d=ee(a.integerValue||a.doubleValue),h=ee(c.integerValue||c.doubleValue);return d<h?-1:d>h?1:d===h?0:isNaN(d)?isNaN(h)?0:-1:1}(i,e);case 3:return ge(i.timestampValue,e.timestampValue);case 4:return ge(re(i),re(e));case 5:return it(i.stringValue,e.stringValue);case 6:return function(a,c){const d=ne(a),h=ne(c);return d.compareTo(h)}(i.bytesValue,e.bytesValue);case 7:return function(a,c){const d=a.split("/"),h=c.split("/");for(let g=0;g<d.length&&g<h.length;g++){const _=it(d[g],h[g]);if(_!==0)return _}return it(d.length,h.length)}(i.referenceValue,e.referenceValue);case 8:return function(a,c){const d=it(ee(a.latitude),ee(c.latitude));return d!==0?d:it(ee(a.longitude),ee(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return function(a,c){const d=a.values||[],h=c.values||[];for(let g=0;g<d.length&&g<h.length;++g){const _=me(d[g],h[g]);if(_)return _}return it(d.length,h.length)}(i.arrayValue,e.arrayValue);case 10:return function(a,c){if(a===le.mapValue&&c===le.mapValue)return 0;if(a===le.mapValue)return 1;if(c===le.mapValue)return-1;const d=a.fields||{},h=Object.keys(d),g=c.fields||{},_=Object.keys(g);h.sort(),_.sort();for(let b=0;b<h.length&&b<_.length;++b){const et=it(h[b],_[b]);if(et!==0)return et;const ot=me(d[h[b]],g[_[b]]);if(ot!==0)return ot}return it(h.length,_.length)}(i.mapValue,e.mapValue);default:throw L()}}function ge(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return it(i,e);const s=te(i),o=te(e),a=it(s.seconds,o.seconds);return a!==0?a:it(s.nanos,o.nanos)}function ye(i){return pe(i)}function pe(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(o){const a=te(o);return`time(${a.seconds},${a.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?ne(i.bytesValue).toBase64():"referenceValue"in i?(s=i.referenceValue,dt.fromName(s).toString()):"geoPointValue"in i?`geo(${(e=i.geoPointValue).latitude},${e.longitude})`:"arrayValue"in i?function(o){let a="[",c=!0;for(const d of o.values||[])c?c=!1:a+=",",a+=pe(d);return a+"]"}(i.arrayValue):"mapValue"in i?function(o){const a=Object.keys(o.fields||{}).sort();let c="{",d=!0;for(const h of a)d?d=!1:c+=",",c+=`${h}:${pe(o.fields[h])}`;return c+"}"}(i.mapValue):L();var e,s}function Te(i){return!!i&&"integerValue"in i}function Ee(i){return!!i&&"arrayValue"in i}function Ae(i){return!!i&&"nullValue"in i}function Re(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function be(i){return!!i&&"mapValue"in i}function Pe(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return qt(i.mapValue.fields,(s,o)=>e.mapValue.fields[s]=Pe(o)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let s=0;s<(i.arrayValue.values||[]).length;++s)e.arrayValue.values[s]=Pe(i.arrayValue.values[s]);return e}return Object.assign({},i)}function ve(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.value=e}static empty(){return new xe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let s=this.value;for(let o=0;o<e.length-1;++o)if(s=(s.mapValue.fields||{})[e.get(o)],!be(s))return null;return s=(s.mapValue.fields||{})[e.lastSegment()],s||null}}set(e,s){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pe(s)}setAll(e){let s=ft.emptyPath(),o={},a=[];e.forEach((d,h)=>{if(!s.isImmediateParentOf(h)){const g=this.getFieldsMap(s);this.applyChanges(g,o,a),o={},a=[],s=h.popLast()}d?o[h.lastSegment()]=Pe(d):a.push(h.lastSegment())});const c=this.getFieldsMap(s);this.applyChanges(c,o,a)}delete(e){const s=this.field(e.popLast());be(s)&&s.mapValue.fields&&delete s.mapValue.fields[e.lastSegment()]}isEqual(e){return _e(this.value,e.value)}getFieldsMap(e){let s=this.value;s.mapValue.fields||(s.mapValue={fields:{}});for(let o=0;o<e.length;++o){let a=s.mapValue.fields[e.get(o)];be(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},s.mapValue.fields[e.get(o)]=a),s=a}return s.mapValue.fields}applyChanges(e,s,o){qt(s,(a,c)=>e[a]=c);for(const a of o)delete e[a]}clone(){return new xe(Pe(this.value))}}function Ne(i){const e=[];return qt(i.fields,(s,o)=>{const a=new ft([s]);if(be(o)){const c=Ne(o.mapValue).fields;if(c.length===0)e.push(a);else for(const d of c)e.push(a.child(d))}else e.push(a)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,s,o,a,c,d){this.key=e,this.documentType=s,this.version=o,this.readTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new ke(e,0,ct.min(),ct.min(),xe.empty(),0)}static newFoundDocument(e,s,o){return new ke(e,1,s,ct.min(),o,0)}static newNoDocument(e,s){return new ke(e,2,s,ct.min(),xe.empty(),0)}static newUnknownDocument(e,s){return new ke(e,3,s,ct.min(),xe.empty(),2)}convertToFoundDocument(e,s){return this.version=e,this.documentType=1,this.data=s,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ct.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,s=null,o=[],a=[],c=null,d=null,h=null){this.path=e,this.collectionGroup=s,this.orderBy=o,this.filters=a,this.limit=c,this.startAt=d,this.endAt=h,this.ht=null}}function Oe(i,e=null,s=[],o=[],a=null,c=null,d=null){return new Me(i,e,s,o,a,c,d)}function Fe(i){const e=K(i);if(e.ht===null){let s=e.path.canonicalString();e.collectionGroup!==null&&(s+="|cg:"+e.collectionGroup),s+="|f:",s+=e.filters.map(o=>{return(a=o).field.canonicalString()+a.op.toString()+ye(a.value);var a}).join(","),s+="|ob:",s+=e.orderBy.map(o=>function(a){return a.field.canonicalString()+a.dir}(o)).join(","),ce(e.limit)||(s+="|l:",s+=e.limit),e.startAt&&(s+="|lb:",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(o=>ye(o)).join(",")),e.endAt&&(s+="|ub:",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(o=>ye(o)).join(",")),e.ht=s}return e.ht}function $e(i){let e=i.path.canonicalString();return i.collectionGroup!==null&&(e+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(e+=`, filters: [${i.filters.map(s=>{return`${(o=s).field.canonicalString()} ${o.op} ${ye(o.value)}`;var o}).join(", ")}]`),ce(i.limit)||(e+=", limit: "+i.limit),i.orderBy.length>0&&(e+=`, orderBy: [${i.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),i.startAt&&(e+=", startAt: ",e+=i.startAt.inclusive?"b:":"a:",e+=i.startAt.position.map(s=>ye(s)).join(",")),i.endAt&&(e+=", endAt: ",e+=i.endAt.inclusive?"a:":"b:",e+=i.endAt.position.map(s=>ye(s)).join(",")),`Target(${e})`}function Be(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let a=0;a<i.orderBy.length;a++)if(!en(i.orderBy[a],e.orderBy[a]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let a=0;a<i.filters.length;a++)if(s=i.filters[a],o=e.filters[a],s.op!==o.op||!s.field.isEqual(o.field)||!_e(s.value,o.value))return!1;var s,o;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!sn(i.startAt,e.startAt)&&sn(i.endAt,e.endAt)}function Le(i){return dt.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}class Ge extends class{}{constructor(e,s,o){super(),this.field=e,this.op=s,this.value=o}static create(e,s,o){return e.isKeyField()?s==="in"||s==="not-in"?this.lt(e,s,o):new Qe(e,s,o):s==="array-contains"?new He(e,o):s==="in"?new Je(e,o):s==="not-in"?new Ye(e,o):s==="array-contains-any"?new Xe(e,o):new Ge(e,s,o)}static lt(e,s,o){return s==="in"?new je(e,o):new We(e,o)}matches(e){const s=e.data.field(this.field);return this.op==="!="?s!==null&&this.ft(me(s,this.value)):s!==null&&de(this.value)===de(s)&&this.ft(me(s,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Qe extends Ge{constructor(e,s,o){super(e,s,o),this.key=dt.fromName(o.referenceValue)}matches(e){const s=dt.comparator(e.key,this.key);return this.ft(s)}}class je extends Ge{constructor(e,s){super(e,"in",s),this.keys=ze("in",s)}matches(e){return this.keys.some(s=>s.isEqual(e.key))}}class We extends Ge{constructor(e,s){super(e,"not-in",s),this.keys=ze("not-in",s)}matches(e){return!this.keys.some(s=>s.isEqual(e.key))}}function ze(i,e){var s;return(((s=e.arrayValue)===null||s===void 0?void 0:s.values)||[]).map(o=>dt.fromName(o.referenceValue))}class He extends Ge{constructor(e,s){super(e,"array-contains",s)}matches(e){const s=e.data.field(this.field);return Ee(s)&&we(s.arrayValue,this.value)}}class Je extends Ge{constructor(e,s){super(e,"in",s)}matches(e){const s=e.data.field(this.field);return s!==null&&we(this.value.arrayValue,s)}}class Ye extends Ge{constructor(e,s){super(e,"not-in",s)}matches(e){if(we(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const s=e.data.field(this.field);return s!==null&&!we(this.value.arrayValue,s)}}class Xe extends Ge{constructor(e,s){super(e,"array-contains-any",s)}matches(e){const s=e.data.field(this.field);return!(!Ee(s)||!s.arrayValue.values)&&s.arrayValue.values.some(o=>we(this.value.arrayValue,o))}}class Ze{constructor(e,s){this.position=e,this.inclusive=s}}class tn{constructor(e,s="asc"){this.field=e,this.dir=s}}function en(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}function nn(i,e,s){let o=0;for(let a=0;a<i.position.length;a++){const c=e[a],d=i.position[a];if(c.field.isKeyField()?o=dt.comparator(dt.fromName(d.referenceValue),s.key):o=me(d,s.data.field(c.field)),c.dir==="desc"&&(o*=-1),o!==0)break}return o}function sn(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let s=0;s<i.position.length;s++)if(!_e(i.position[s],e.position[s]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,s=null,o=[],a=[],c=null,d="F",h=null,g=null){this.path=e,this.collectionGroup=s,this.explicitOrderBy=o,this.filters=a,this.limit=c,this.limitType=d,this.startAt=h,this.endAt=g,this._t=null,this.wt=null,this.startAt,this.endAt}}function on(i,e,s,o,a,c,d,h){return new rn(i,e,s,o,a,c,d,h)}function un(i){return new rn(i)}function cn(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function an(i){return i.explicitOrderBy.length>0?i.explicitOrderBy[0].field:null}function hn(i){for(const e of i.filters)if(e.dt())return e.field;return null}function ln(i){return i.collectionGroup!==null}function fn(i){const e=K(i);if(e._t===null){e._t=[];const s=hn(e),o=an(e);if(s!==null&&o===null)s.isKeyField()||e._t.push(new tn(s)),e._t.push(new tn(ft.keyField(),"asc"));else{let a=!1;for(const c of e.explicitOrderBy)e._t.push(c),c.field.isKeyField()&&(a=!0);if(!a){const c=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new tn(ft.keyField(),c))}}}return e._t}function dn(i){const e=K(i);if(!e.wt)if(e.limitType==="F")e.wt=Oe(e.path,e.collectionGroup,fn(e),e.filters,e.limit,e.startAt,e.endAt);else{const s=[];for(const c of fn(e)){const d=c.dir==="desc"?"asc":"desc";s.push(new tn(c.field,d))}const o=e.endAt?new Ze(e.endAt.position,e.endAt.inclusive):null,a=e.startAt?new Ze(e.startAt.position,e.startAt.inclusive):null;e.wt=Oe(e.path,e.collectionGroup,s,e.filters,e.limit,o,a)}return e.wt}function _n(i,e,s){return new rn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,s,i.startAt,i.endAt)}function wn(i,e){return Be(dn(i),dn(e))&&i.limitType===e.limitType}function mn(i){return`${Fe(dn(i))}|lt:${i.limitType}`}function gn(i){return`Query(target=${$e(dn(i))}; limitType=${i.limitType})`}function yn(i,e){return e.isFoundDocument()&&function(s,o){const a=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(a):dt.isDocumentKey(s.path)?s.path.isEqual(a):s.path.isImmediateParentOf(a)}(i,e)&&function(s,o){for(const a of s.explicitOrderBy)if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const a of s.filters)if(!a.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(a,c,d){const h=nn(a,c,d);return a.inclusive?h<=0:h<0}(s.startAt,fn(s),o)||s.endAt&&!function(a,c,d){const h=nn(a,c,d);return a.inclusive?h>=0:h>0}(s.endAt,fn(s),o))}(i,e)}function pn(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function In(i){return(e,s)=>{let o=!1;for(const a of fn(i)){const c=Tn(a,e,s);if(c!==0)return c;o=o||a.field.isKeyField()}return 0}}function Tn(i,e,s){const o=i.field.isKeyField()?dt.comparator(e.key,s.key):function(a,c,d){const h=c.data.field(a),g=d.data.field(a);return h!==null&&g!==null?me(h,g):L()}(i.field,e,s);switch(i.dir){case"asc":return o;case"desc":return-1*o;default:return L()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(i,e){if(i.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ae(e)?"-0":e}}function An(i){return{integerValue:""+i}}function Rn(i,e){return he(e)?An(e):En(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this._=void 0}}function Pn(i,e,s){return i instanceof Sn?function(o,a){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&(c.fields.__previous_value__=a),{mapValue:c}}(s,e):i instanceof Dn?Cn(i,e):i instanceof xn?Nn(i,e):function(o,a){const c=Vn(o,a),d=Mn(c)+Mn(o.yt);return Te(c)&&Te(o.yt)?An(d):En(o.It,d)}(i,e)}function vn(i,e,s){return i instanceof Dn?Cn(i,e):i instanceof xn?Nn(i,e):s}function Vn(i,e){return i instanceof kn?Te(s=e)||function(o){return!!o&&"doubleValue"in o}(s)?e:{integerValue:0}:null;var s}class Sn extends bn{}class Dn extends bn{constructor(e){super(),this.elements=e}}function Cn(i,e){const s=On(e);for(const o of i.elements)s.some(a=>_e(a,o))||s.push(o);return{arrayValue:{values:s}}}class xn extends bn{constructor(e){super(),this.elements=e}}function Nn(i,e){let s=On(e);for(const o of i.elements)s=s.filter(a=>!_e(a,o));return{arrayValue:{values:s}}}class kn extends bn{constructor(e,s){super(),this.It=e,this.yt=s}}function Mn(i){return ee(i.integerValue||i.doubleValue)}function On(i){return Ee(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function $n(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Dn&&o instanceof Dn||s instanceof xn&&o instanceof xn?rt(s.elements,o.elements,_e):s instanceof kn&&o instanceof kn?_e(s.yt,o.yt):s instanceof Sn&&o instanceof Sn}(i.transform,e.transform)}class Bn{constructor(e,s){this.version=e,this.transformResults=s}}class Ln{constructor(e,s){this.updateTime=e,this.exists=s}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Un(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class qn{}function Kn(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Zn(i.key,Ln.none()):new zn(i.key,i.data,Ln.none());{const s=i.data,o=xe.empty();let a=new Wt(ft.comparator);for(let c of e.fields)if(!a.has(c)){let d=s.field(c);d===null&&c.length>1&&(c=c.popLast(),d=s.field(c)),d===null?o.delete(c):o.set(c,d),a=a.add(c)}return new Hn(i.key,o,new Jt(a.toArray()),Ln.none())}}function Gn(i,e,s){i instanceof zn?function(o,a,c){const d=o.value.clone(),h=Yn(o.fieldTransforms,a,c.transformResults);d.setAll(h),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,s):i instanceof Hn?function(o,a,c){if(!Un(o.precondition,a))return void a.convertToUnknownDocument(c.version);const d=Yn(o.fieldTransforms,a,c.transformResults),h=a.data;h.setAll(Jn(o)),h.setAll(d),a.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(i,e,s):function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,s)}function Qn(i,e,s,o){return i instanceof zn?function(a,c,d,h){if(!Un(a.precondition,c))return d;const g=a.value.clone(),_=Xn(a.fieldTransforms,h,c);return g.setAll(_),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,s,o):i instanceof Hn?function(a,c,d,h){if(!Un(a.precondition,c))return d;const g=Xn(a.fieldTransforms,h,c),_=c.data;return _.setAll(Jn(a)),_.setAll(g),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(b=>b.field))}(i,e,s,o):function(a,c,d){return Un(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,s)}function jn(i,e){let s=null;for(const o of i.fieldTransforms){const a=e.data.field(o.field),c=Vn(o.transform,a||null);c!=null&&(s===null&&(s=xe.empty()),s.set(o.field,c))}return s||null}function Wn(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&rt(s,o,(a,c)=>$n(a,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class zn extends qn{constructor(e,s,o,a=[]){super(),this.key=e,this.value=s,this.precondition=o,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Hn extends qn{constructor(e,s,o,a,c=[]){super(),this.key=e,this.data=s,this.fieldMask=o,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function Jn(i){const e=new Map;return i.fieldMask.fields.forEach(s=>{if(!s.isEmpty()){const o=i.data.field(s);e.set(s,o)}}),e}function Yn(i,e,s){const o=new Map;U(i.length===s.length);for(let a=0;a<s.length;a++){const c=i[a],d=c.transform,h=e.data.field(c.field);o.set(c.field,vn(d,h,s[a]))}return o}function Xn(i,e,s){const o=new Map;for(const a of i){const c=a.transform,d=s.data.field(a.field);o.set(a.field,Pn(c,d,e))}return o}class Zn extends qn{constructor(e,s){super(),this.key=e,this.precondition=s,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ts extends qn{constructor(e,s){super(),this.key=e,this.precondition=s,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ns,ss;function is(i){switch(i){default:return L();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function rs(i){if(i===void 0)return F("GRPC error has no .code"),G.UNKNOWN;switch(i){case ns.OK:return G.OK;case ns.CANCELLED:return G.CANCELLED;case ns.UNKNOWN:return G.UNKNOWN;case ns.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ns.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ns.INTERNAL:return G.INTERNAL;case ns.UNAVAILABLE:return G.UNAVAILABLE;case ns.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ns.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ns.NOT_FOUND:return G.NOT_FOUND;case ns.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ns.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ns.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ns.ABORTED:return G.ABORTED;case ns.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ns.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ns.DATA_LOSS:return G.DATA_LOSS;default:return L()}}(ss=ns||(ns={}))[ss.OK=0]="OK",ss[ss.CANCELLED=1]="CANCELLED",ss[ss.UNKNOWN=2]="UNKNOWN",ss[ss.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ss[ss.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ss[ss.NOT_FOUND=5]="NOT_FOUND",ss[ss.ALREADY_EXISTS=6]="ALREADY_EXISTS",ss[ss.PERMISSION_DENIED=7]="PERMISSION_DENIED",ss[ss.UNAUTHENTICATED=16]="UNAUTHENTICATED",ss[ss.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ss[ss.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ss[ss.ABORTED=10]="ABORTED",ss[ss.OUT_OF_RANGE=11]="OUT_OF_RANGE",ss[ss.UNIMPLEMENTED=12]="UNIMPLEMENTED",ss[ss.INTERNAL=13]="INTERNAL",ss[ss.UNAVAILABLE=14]="UNAVAILABLE",ss[ss.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,s){this.mapKeyFn=e,this.equalsFn=s,this.inner={},this.innerSize=0}get(e){const s=this.mapKeyFn(e),o=this.inner[s];if(o!==void 0){for(const[a,c]of o)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,s){const o=this.mapKeyFn(e),a=this.inner[o];if(a===void 0)return this.inner[o]=[[e,s]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,s]);a.push([e,s]),this.innerSize++}delete(e){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return!1;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return o.length===1?delete this.inner[s]:o.splice(a,1),this.innerSize--,!0;return!1}forEach(e){qt(this.inner,(s,o)=>{for(const[a,c]of o)e(a,c)})}isEmpty(){return Kt(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Gt(dt.comparator);function cs(){return us}const as=new Gt(dt.comparator);function hs(...i){let e=as;for(const s of i)e=e.insert(s.key,s);return e}function ls(i){let e=as;return i.forEach((s,o)=>e=e.insert(s,o.overlayedDocument)),e}function fs(){return _s()}function ds(){return _s()}function _s(){return new os(i=>i.toString(),(i,e)=>i.isEqual(e))}const ws=new Gt(dt.comparator),ms=new Wt(dt.comparator);function gs(...i){let e=ms;for(const s of i)e=e.add(s);return e}const ys=new Wt(it);function ps(){return ys}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,s,o,a,c){this.snapshotVersion=e,this.targetChanges=s,this.targetMismatches=o,this.documentUpdates=a,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,s){const o=new Map;return o.set(e,Ts.createSynthesizedTargetChangeForCurrentChange(e,s)),new Is(ct.min(),o,ps(),cs(),gs())}}class Ts{constructor(e,s,o,a,c){this.resumeToken=e,this.current=s,this.addedDocuments=o,this.modifiedDocuments=a,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,s){return new Ts(Xt.EMPTY_BYTE_STRING,s,gs(),gs(),gs())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,s,o,a){this.Tt=e,this.removedTargetIds=s,this.key=o,this.Et=a}}class As{constructor(e,s){this.targetId=e,this.At=s}}class Rs{constructor(e,s,o=Xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=s,this.resumeToken=o,this.cause=a}}class bs{constructor(){this.Rt=0,this.bt=Vs(),this.Pt=Xt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=gs(),s=gs(),o=gs();return this.bt.forEach((a,c)=>{switch(c){case 0:e=e.add(a);break;case 2:s=s.add(a);break;case 1:o=o.add(a);break;default:L()}}),new Ts(this.Pt,this.vt,e,s,o)}Nt(){this.Vt=!1,this.bt=Vs()}kt(e,s){this.Vt=!0,this.bt=this.bt.insert(e,s)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ps{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=cs(),this.qt=vs(),this.Kt=new Wt(it)}Gt(e){for(const s of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(s,e.Et):this.jt(s,e.key,e.Et);for(const s of e.removedTargetIds)this.jt(s,e.key,e.Et)}Wt(e){this.forEachTarget(e,s=>{const o=this.zt(s);switch(e.state){case 0:this.Ht(s)&&o.Ct(e.resumeToken);break;case 1:o.Ft(),o.St||o.Nt(),o.Ct(e.resumeToken);break;case 2:o.Ft(),o.St||this.removeTarget(s);break;case 3:this.Ht(s)&&(o.$t(),o.Ct(e.resumeToken));break;case 4:this.Ht(s)&&(this.Jt(s),o.Ct(e.resumeToken));break;default:L()}})}forEachTarget(e,s){e.targetIds.length>0?e.targetIds.forEach(s):this.Lt.forEach((o,a)=>{this.Ht(a)&&s(a)})}Yt(e){const s=e.targetId,o=e.At.count,a=this.Xt(s);if(a){const c=a.target;if(Le(c))if(o===0){const d=new dt(c.path);this.jt(s,d,ke.newNoDocument(d,ct.min()))}else U(o===1);else this.Zt(s)!==o&&(this.Jt(s),this.Kt=this.Kt.add(s))}}te(e){const s=new Map;this.Lt.forEach((c,d)=>{const h=this.Xt(d);if(h){if(c.current&&Le(h.target)){const g=new dt(h.target.path);this.Ut.get(g)!==null||this.ee(d,g)||this.jt(d,g,ke.newNoDocument(g,e))}c.Dt&&(s.set(d,c.xt()),c.Nt())}});let o=gs();this.qt.forEach((c,d)=>{let h=!0;d.forEachWhile(g=>{const _=this.Xt(g);return!_||_.purpose===2||(h=!1,!1)}),h&&(o=o.add(c))}),this.Ut.forEach((c,d)=>d.setReadTime(e));const a=new Is(e,s,this.Kt,this.Ut,o);return this.Ut=cs(),this.qt=vs(),this.Kt=new Wt(it),a}Qt(e,s){if(!this.Ht(e))return;const o=this.ee(e,s.key)?2:0;this.zt(e).kt(s.key,o),this.Ut=this.Ut.insert(s.key,s),this.qt=this.qt.insert(s.key,this.ne(s.key).add(e))}jt(e,s,o){if(!this.Ht(e))return;const a=this.zt(e);this.ee(e,s)?a.kt(s,1):a.Mt(s),this.qt=this.qt.insert(s,this.ne(s).delete(e)),o&&(this.Ut=this.Ut.insert(s,o))}removeTarget(e){this.Lt.delete(e)}Zt(e){const s=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+s.addedDocuments.size-s.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let s=this.Lt.get(e);return s||(s=new bs,this.Lt.set(e,s)),s}ne(e){let s=this.qt.get(e);return s||(s=new Wt(it),this.qt=this.qt.insert(e,s)),s}Ht(e){const s=this.Xt(e)!==null;return s||O("WatchChangeAggregator","Detected inactive target",e),s}Xt(e){const s=this.Lt.get(e);return s&&s.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new bs),this.Bt.getRemoteKeysForTarget(e).forEach(s=>{this.jt(e,s,null)})}ee(e,s){return this.Bt.getRemoteKeysForTarget(e).has(s)}}function vs(){return new Gt(dt.comparator)}function Vs(){return new Gt(dt.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ds=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Cs{constructor(e,s){this.databaseId=e,this.gt=s}}function xs(i,e){return i.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ns(i,e){return i.gt?e.toBase64():e.toUint8Array()}function ks(i,e){return xs(i,e.toTimestamp())}function Ms(i){return U(!!i),ct.fromTimestamp(function(e){const s=te(e);return new ut(s.seconds,s.nanos)}(i))}function Os(i,e){return function(s){return new ht(["projects",s.projectId,"databases",s.database])}(i).child("documents").child(e).canonicalString()}function Fs(i){const e=ht.fromString(i);return U(ai(e)),e}function $s(i,e){return Os(i.databaseId,e.path)}function Bs(i,e){const s=Fs(e);if(s.get(1)!==i.databaseId.projectId)throw new Q(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+s.get(1)+" vs "+i.databaseId.projectId);if(s.get(3)!==i.databaseId.database)throw new Q(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+s.get(3)+" vs "+i.databaseId.database);return new dt(Ks(s))}function Ls(i,e){return Os(i.databaseId,e)}function Us(i){const e=Fs(i);return e.length===4?ht.emptyPath():Ks(e)}function qs(i){return new ht(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Ks(i){return U(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Gs(i,e,s){return{name:$s(i,e),fields:s.value.mapValue.fields}}function Ws(i,e){let s;if("targetChange"in e){e.targetChange;const o=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],c=function(g,_){return g.gt?(U(_===void 0||typeof _=="string"),Xt.fromBase64String(_||"")):(U(_===void 0||_ instanceof Uint8Array),Xt.fromUint8Array(_||new Uint8Array))}(i,e.targetChange.resumeToken),d=e.targetChange.cause,h=d&&function(g){const _=g.code===void 0?G.UNKNOWN:rs(g.code);return new Q(_,g.message||"")}(d);s=new Rs(o,a,c,h||null)}else if("documentChange"in e){e.documentChange;const o=e.documentChange;o.document,o.document.name,o.document.updateTime;const a=Bs(i,o.document.name),c=Ms(o.document.updateTime),d=new xe({mapValue:{fields:o.document.fields}}),h=ke.newFoundDocument(a,c,d),g=o.targetIds||[],_=o.removedTargetIds||[];s=new Es(g,_,h.key,h)}else if("documentDelete"in e){e.documentDelete;const o=e.documentDelete;o.document;const a=Bs(i,o.document),c=o.readTime?Ms(o.readTime):ct.min(),d=ke.newNoDocument(a,c),h=o.removedTargetIds||[];s=new Es([],h,d.key,d)}else if("documentRemove"in e){e.documentRemove;const o=e.documentRemove;o.document;const a=Bs(i,o.document),c=o.removedTargetIds||[];s=new Es([],c,a,null)}else{if(!("filter"in e))return L();{e.filter;const o=e.filter;o.targetId;const a=o.count||0,c=new es(a),d=o.targetId;s=new As(d,c)}}return s}function zs(i,e){let s;if(e instanceof zn)s={update:Gs(i,e.key,e.value)};else if(e instanceof Zn)s={delete:$s(i,e.key)};else if(e instanceof Hn)s={update:Gs(i,e.key,e.data),updateMask:ci(e.fieldMask)};else{if(!(e instanceof ts))return L();s={verify:$s(i,e.key)}}return e.fieldTransforms.length>0&&(s.updateTransforms=e.fieldTransforms.map(o=>function(a,c){const d=c.transform;if(d instanceof Sn)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Dn)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof xn)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof kn)return{fieldPath:c.field.canonicalString(),increment:d.yt};throw L()}(0,o))),e.precondition.isNone||(s.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:ks(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:L()}(i,e.precondition)),s}function Js(i,e){return i&&i.length>0?(U(e!==void 0),i.map(s=>function(o,a){let c=o.updateTime?Ms(o.updateTime):Ms(a);return c.isEqual(ct.min())&&(c=Ms(a)),new Bn(c,o.transformResults||[])}(s,e))):[]}function Ys(i,e){return{documents:[Ls(i,e.path)]}}function Xs(i,e){const s={structuredQuery:{}},o=e.path;e.collectionGroup!==null?(s.parent=Ls(i,o),s.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s.parent=Ls(i,o.popLast()),s.structuredQuery.from=[{collectionId:o.lastSegment()}]);const a=function(g){if(g.length===0)return;const _=g.map(b=>function(et){if(et.op==="=="){if(Re(et.value))return{unaryFilter:{field:ii(et.field),op:"IS_NAN"}};if(Ae(et.value))return{unaryFilter:{field:ii(et.field),op:"IS_NULL"}}}else if(et.op==="!="){if(Re(et.value))return{unaryFilter:{field:ii(et.field),op:"IS_NOT_NAN"}};if(Ae(et.value))return{unaryFilter:{field:ii(et.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(et.field),op:si(et.op),value:et.value}}}(b));return _.length===1?_[0]:{compositeFilter:{op:"AND",filters:_}}}(e.filters);a&&(s.structuredQuery.where=a);const c=function(g){if(g.length!==0)return g.map(_=>function(b){return{field:ii(b.field),direction:ni(b.dir)}}(_))}(e.orderBy);c&&(s.structuredQuery.orderBy=c);const d=function(g,_){return g.gt||ce(_)?_:{value:_}}(i,e.limit);var h;return d!==null&&(s.structuredQuery.limit=d),e.startAt&&(s.structuredQuery.startAt={before:(h=e.startAt).inclusive,values:h.position}),e.endAt&&(s.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),s}function Zs(i){let e=Us(i.parent);const s=i.structuredQuery,o=s.from?s.from.length:0;let a=null;if(o>0){U(o===1);const b=s.from[0];b.allDescendants?a=b.collectionId:e=e.child(b.collectionId)}let c=[];s.where&&(c=ei(s.where));let d=[];s.orderBy&&(d=s.orderBy.map(b=>function(et){return new tn(ri(et.field),function(ot){switch(ot){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(et.direction))}(b)));let h=null;s.limit&&(h=function(b){let et;return et=typeof b=="object"?b.value:b,ce(et)?null:et}(s.limit));let g=null;s.startAt&&(g=function(b){const et=!!b.before,ot=b.values||[];return new Ze(ot,et)}(s.startAt));let _=null;return s.endAt&&(_=function(b){const et=!b.before,ot=b.values||[];return new Ze(ot,et)}(s.endAt)),on(e,a,d,c,h,"F",g,_)}function ti(i,e){const s=function(o,a){switch(a){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return L()}}(0,e.purpose);return s==null?null:{"goog-listen-tags":s}}function ei(i){return i?i.unaryFilter!==void 0?[ui(i)]:i.fieldFilter!==void 0?[oi(i)]:i.compositeFilter!==void 0?i.compositeFilter.filters.map(e=>ei(e)).reduce((e,s)=>e.concat(s)):L():[]}function ni(i){return Ss[i]}function si(i){return Ds[i]}function ii(i){return{fieldPath:i.canonicalString()}}function ri(i){return ft.fromServerFormat(i.fieldPath)}function oi(i){return Ge.create(ri(i.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(i.fieldFilter.op),i.fieldFilter.value)}function ui(i){switch(i.unaryFilter.op){case"IS_NAN":const e=ri(i.unaryFilter.field);return Ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const s=ri(i.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ri(i.unaryFilter.field);return Ge.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ri(i.unaryFilter.field);return Ge.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}function ci(i){const e=[];return i.fields.forEach(s=>e.push(s.canonicalString())),{fieldPaths:e}}function ai(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,s,o,a){this.batchId=e,this.localWriteTime=s,this.baseMutations=o,this.mutations=a}applyToRemoteDocument(e,s){const o=s.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&Gn(c,e,o[a])}}applyToLocalView(e,s){for(const o of this.baseMutations)o.key.isEqual(e.key)&&(s=Qn(o,e,s,this.localWriteTime));for(const o of this.mutations)o.key.isEqual(e.key)&&(s=Qn(o,e,s,this.localWriteTime));return s}applyToLocalDocumentSet(e,s){const o=ds();return this.mutations.forEach(a=>{const c=e.get(a.key),d=c.overlayedDocument;let h=this.applyToLocalView(d,c.mutatedFields);h=s.has(a.key)?null:h;const g=Kn(d,h);g!==null&&o.set(a.key,g),d.isValidDocument()||d.convertToNoDocument(ct.min())}),o}keys(){return this.mutations.reduce((e,s)=>e.add(s.key),gs())}isEqual(e){return this.batchId===e.batchId&&rt(this.mutations,e.mutations,(s,o)=>Wn(s,o))&&rt(this.baseMutations,e.baseMutations,(s,o)=>Wn(s,o))}}class Li{constructor(e,s,o,a){this.batch=e,this.commitVersion=s,this.mutationResults=o,this.docVersions=a}static from(e,s,o){U(e.mutations.length===o.length);let a=ws;const c=e.mutations;for(let d=0;d<c.length;d++)a=a.insert(c[d].key,o[d].version);return new Li(e,s,o,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,s){this.largestBatchId=e,this.mutation=s}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,s,o,a,c=ct.min(),d=ct.min(),h=Xt.EMPTY_BYTE_STRING){this.target=e,this.targetId=s,this.purpose=o,this.sequenceNumber=a,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=h}withSequenceNumber(e){return new qi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,s){return new qi(this.target,this.targetId,this.purpose,this.sequenceNumber,s,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.re=e}}function Xi(i){const e=Zs({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?_n(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.Ye=new pr}addToCollectionParentIndex(e,s){return this.Ye.add(s),Vt.resolve()}getCollectionParents(e,s){return Vt.resolve(this.Ye.getEntries(s))}addFieldIndex(e,s){return Vt.resolve()}deleteFieldIndex(e,s){return Vt.resolve()}getDocumentsMatchingTarget(e,s){return Vt.resolve(null)}getIndexType(e,s){return Vt.resolve(0)}getFieldIndexes(e,s){return Vt.resolve([])}getNextCollectionGroupToUpdate(e){return Vt.resolve(null)}getMinOffset(e,s){return Vt.resolve(At.min())}getMinOffsetFromCollectionGroup(e,s){return Vt.resolve(At.min())}updateCollectionGroup(e,s,o){return Vt.resolve()}updateIndexEntries(e,s){return Vt.resolve()}}class pr{constructor(){this.index={}}add(e){const s=e.lastSegment(),o=e.popLast(),a=this.index[s]||new Wt(ht.comparator),c=!a.has(o);return this.index[s]=a.add(o),c}has(e){const s=e.lastSegment(),o=e.popLast(),a=this.index[s];return a&&a.has(o)}getEntries(e){return(this.index[e]||new Wt(ht.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Or(0)}static vn(){return new Or(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.changes=new os(e=>e.toString(),(e,s)=>e.isEqual(s)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,s){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(s))}getEntry(e,s){this.assertNotApplied();const o=this.changes.get(s);return o!==void 0?Vt.resolve(o):this.getFromCache(e,s)}getEntries(e,s){return this.getAllFromCache(e,s)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,s){this.overlayedDocument=e,this.mutatedFields=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,s,o,a){this.remoteDocumentCache=e,this.mutationQueue=s,this.documentOverlayCache=o,this.indexManager=a}getDocument(e,s){let o=null;return this.documentOverlayCache.getOverlay(e,s).next(a=>(o=a,this.getBaseDocument(e,s,o))).next(a=>(o!==null&&Qn(o.mutation,a,Jt.empty(),ut.now()),a))}getDocuments(e,s){return this.remoteDocumentCache.getEntries(e,s).next(o=>this.getLocalViewOfDocuments(e,o,gs()).next(()=>o))}getLocalViewOfDocuments(e,s,o=gs()){const a=fs();return this.populateOverlays(e,a,s).next(()=>this.computeViews(e,s,a,o).next(c=>{let d=hs();return c.forEach((h,g)=>{d=d.insert(h,g.overlayedDocument)}),d}))}getOverlayedDocuments(e,s){const o=fs();return this.populateOverlays(e,o,s).next(()=>this.computeViews(e,s,o,gs()))}populateOverlays(e,s,o){const a=[];return o.forEach(c=>{s.has(c)||a.push(c)}),this.documentOverlayCache.getOverlays(e,a).next(c=>{c.forEach((d,h)=>{s.set(d,h)})})}computeViews(e,s,o,a){let c=cs();const d=_s(),h=_s();return s.forEach((g,_)=>{const b=o.get(_.key);a.has(_.key)&&(b===void 0||b.mutation instanceof Hn)?c=c.insert(_.key,_):b!==void 0&&(d.set(_.key,b.mutation.getFieldMask()),Qn(b.mutation,_,b.mutation.getFieldMask(),ut.now()))}),this.recalculateAndSaveOverlays(e,c).next(g=>(g.forEach((_,b)=>d.set(_,b)),s.forEach((_,b)=>{var et;return h.set(_,new no(b,(et=d.get(_))!==null&&et!==void 0?et:null))}),h))}recalculateAndSaveOverlays(e,s){const o=_s();let a=new Gt((d,h)=>d-h),c=gs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,s).next(d=>{for(const h of d)h.keys().forEach(g=>{const _=s.get(g);if(_===null)return;let b=o.get(g)||Jt.empty();b=h.applyToLocalView(_,b),o.set(g,b);const et=(a.get(h.batchId)||gs()).add(g);a=a.insert(h.batchId,et)})}).next(()=>{const d=[],h=a.getReverseIterator();for(;h.hasNext();){const g=h.getNext(),_=g.key,b=g.value,et=ds();b.forEach(ot=>{if(!c.has(ot)){const gt=Kn(s.get(ot),o.get(ot));gt!==null&&et.set(ot,gt),c=c.add(ot)}}),d.push(this.documentOverlayCache.saveOverlays(e,_,et))}return Vt.waitFor(d)}).next(()=>o)}recalculateAndSaveOverlaysForDocumentKeys(e,s){return this.remoteDocumentCache.getEntries(e,s).next(o=>this.recalculateAndSaveOverlays(e,o))}getDocumentsMatchingQuery(e,s,o){return function(a){return dt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(s)?this.getDocumentsMatchingDocumentQuery(e,s.path):ln(s)?this.getDocumentsMatchingCollectionGroupQuery(e,s,o):this.getDocumentsMatchingCollectionQuery(e,s,o)}getNextDocuments(e,s,o,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,s,o,a).next(c=>{const d=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,s,o.largestBatchId,a-c.size):Vt.resolve(fs());let h=-1,g=c;return d.next(_=>Vt.forEach(_,(b,et)=>(h<et.largestBatchId&&(h=et.largestBatchId),c.get(b)?Vt.resolve():this.getBaseDocument(e,b,et).next(ot=>{g=g.insert(b,ot)}))).next(()=>this.populateOverlays(e,_,c)).next(()=>this.computeViews(e,g,_,gs())).next(b=>({batchId:h,changes:ls(b)})))})}getDocumentsMatchingDocumentQuery(e,s){return this.getDocument(e,new dt(s)).next(o=>{let a=hs();return o.isFoundDocument()&&(a=a.insert(o.key,o)),a})}getDocumentsMatchingCollectionGroupQuery(e,s,o){const a=s.collectionGroup;let c=hs();return this.indexManager.getCollectionParents(e,a).next(d=>Vt.forEach(d,h=>{const g=function(_,b){return new rn(b,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(s,h.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,o).next(_=>{_.forEach((b,et)=>{c=c.insert(b,et)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,s,o){let a;return this.remoteDocumentCache.getAllFromCollection(e,s.path,o).next(c=>(a=c,this.documentOverlayCache.getOverlaysForCollection(e,s.path,o.largestBatchId))).next(c=>{c.forEach((h,g)=>{const _=g.getKey();a.get(_)===null&&(a=a.insert(_,ke.newInvalidDocument(_)))});let d=hs();return a.forEach((h,g)=>{const _=c.get(h);_!==void 0&&Qn(_.mutation,g,Jt.empty(),ut.now()),yn(s,g)&&(d=d.insert(h,g))}),d})}getBaseDocument(e,s,o){return o===null||o.mutation.type===1?this.remoteDocumentCache.getEntry(e,s):Vt.resolve(ke.newInvalidDocument(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,s){return Vt.resolve(this.Zn.get(s))}saveBundleMetadata(e,s){var o;return this.Zn.set(s.id,{id:(o=s).id,version:o.version,createTime:Ms(o.createTime)}),Vt.resolve()}getNamedQuery(e,s){return Vt.resolve(this.ts.get(s))}saveNamedQuery(e,s){return this.ts.set(s.name,function(o){return{name:o.name,query:Xi(o.bundledQuery),readTime:Ms(o.readTime)}}(s)),Vt.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.overlays=new Gt(dt.comparator),this.es=new Map}getOverlay(e,s){return Vt.resolve(this.overlays.get(s))}getOverlays(e,s){const o=fs();return Vt.forEach(s,a=>this.getOverlay(e,a).next(c=>{c!==null&&o.set(a,c)})).next(()=>o)}saveOverlays(e,s,o){return o.forEach((a,c)=>{this.ue(e,s,c)}),Vt.resolve()}removeOverlaysForBatchId(e,s,o){const a=this.es.get(o);return a!==void 0&&(a.forEach(c=>this.overlays=this.overlays.remove(c)),this.es.delete(o)),Vt.resolve()}getOverlaysForCollection(e,s,o){const a=fs(),c=s.length+1,d=new dt(s.child("")),h=this.overlays.getIteratorFrom(d);for(;h.hasNext();){const g=h.getNext().value,_=g.getKey();if(!s.isPrefixOf(_.path))break;_.path.length===c&&g.largestBatchId>o&&a.set(g.getKey(),g)}return Vt.resolve(a)}getOverlaysForCollectionGroup(e,s,o,a){let c=new Gt((_,b)=>_-b);const d=this.overlays.getIterator();for(;d.hasNext();){const _=d.getNext().value;if(_.getKey().getCollectionGroup()===s&&_.largestBatchId>o){let b=c.get(_.largestBatchId);b===null&&(b=fs(),c=c.insert(_.largestBatchId,b)),b.set(_.getKey(),_)}}const h=fs(),g=c.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,b)=>h.set(_,b)),!(h.size()>=a)););return Vt.resolve(h)}ue(e,s,o){const a=this.overlays.get(o.key);if(a!==null){const d=this.es.get(a.largestBatchId).delete(o.key);this.es.set(a.largestBatchId,d)}this.overlays=this.overlays.insert(o.key,new Ui(s,o));let c=this.es.get(s);c===void 0&&(c=gs(),this.es.set(s,c)),this.es.set(s,c.add(o.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.ns=new Wt(uo.ss),this.rs=new Wt(uo.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,s){const o=new uo(e,s);this.ns=this.ns.add(o),this.rs=this.rs.add(o)}us(e,s){e.forEach(o=>this.addReference(o,s))}removeReference(e,s){this.cs(new uo(e,s))}hs(e,s){e.forEach(o=>this.removeReference(o,s))}ls(e){const s=new dt(new ht([])),o=new uo(s,e),a=new uo(s,e+1),c=[];return this.rs.forEachInRange([o,a],d=>{this.cs(d),c.push(d.key)}),c}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const s=new dt(new ht([])),o=new uo(s,e),a=new uo(s,e+1);let c=gs();return this.rs.forEachInRange([o,a],d=>{c=c.add(d.key)}),c}containsKey(e){const s=new uo(e,0),o=this.ns.firstAfterOrEqual(s);return o!==null&&e.isEqual(o.key)}}class uo{constructor(e,s){this.key=e,this._s=s}static ss(e,s){return dt.comparator(e.key,s.key)||it(e._s,s._s)}static os(e,s){return it(e._s,s._s)||dt.comparator(e.key,s.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,s){this.indexManager=e,this.referenceDelegate=s,this.mutationQueue=[],this.ws=1,this.gs=new Wt(uo.ss)}checkEmpty(e){return Vt.resolve(this.mutationQueue.length===0)}addMutationBatch(e,s,o,a){const c=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new Bi(c,s,o,a);this.mutationQueue.push(d);for(const h of a)this.gs=this.gs.add(new uo(h.key,c)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Vt.resolve(d)}lookupMutationBatch(e,s){return Vt.resolve(this.ys(s))}getNextMutationBatchAfterBatchId(e,s){const o=s+1,a=this.ps(o),c=a<0?0:a;return Vt.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return Vt.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return Vt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,s){const o=new uo(s,0),a=new uo(s,Number.POSITIVE_INFINITY),c=[];return this.gs.forEachInRange([o,a],d=>{const h=this.ys(d._s);c.push(h)}),Vt.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,s){let o=new Wt(it);return s.forEach(a=>{const c=new uo(a,0),d=new uo(a,Number.POSITIVE_INFINITY);this.gs.forEachInRange([c,d],h=>{o=o.add(h._s)})}),Vt.resolve(this.Is(o))}getAllMutationBatchesAffectingQuery(e,s){const o=s.path,a=o.length+1;let c=o;dt.isDocumentKey(c)||(c=c.child(""));const d=new uo(new dt(c),0);let h=new Wt(it);return this.gs.forEachWhile(g=>{const _=g.key.path;return!!o.isPrefixOf(_)&&(_.length===a&&(h=h.add(g._s)),!0)},d),Vt.resolve(this.Is(h))}Is(e){const s=[];return e.forEach(o=>{const a=this.ys(o);a!==null&&s.push(a)}),s}removeMutationBatch(e,s){U(this.Ts(s.batchId,"removed")===0),this.mutationQueue.shift();let o=this.gs;return Vt.forEach(s.mutations,a=>{const c=new uo(a.key,s.batchId);return o=o.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.gs=o})}An(e){}containsKey(e,s){const o=new uo(s,0),a=this.gs.firstAfterOrEqual(o);return Vt.resolve(s.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Vt.resolve()}Ts(e,s){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const s=this.ps(e);return s<0||s>=this.mutationQueue.length?null:this.mutationQueue[s]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.Es=e,this.docs=new Gt(dt.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,s){const o=s.key,a=this.docs.get(o),c=a?a.size:0,d=this.Es(s);return this.docs=this.docs.insert(o,{document:s.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,o.path.popLast())}removeEntry(e){const s=this.docs.get(e);s&&(this.docs=this.docs.remove(e),this.size-=s.size)}getEntry(e,s){const o=this.docs.get(s);return Vt.resolve(o?o.document.mutableCopy():ke.newInvalidDocument(s))}getEntries(e,s){let o=cs();return s.forEach(a=>{const c=this.docs.get(a);o=o.insert(a,c?c.document.mutableCopy():ke.newInvalidDocument(a))}),Vt.resolve(o)}getAllFromCollection(e,s,o){let a=cs();const c=new dt(s.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:h,value:{document:g}}=d.getNext();if(!s.isPrefixOf(h.path))break;h.path.length>s.length+1||Rt(Et(g),o)<=0||(a=a.insert(g.key,g.mutableCopy()))}return Vt.resolve(a)}getAllFromCollectionGroup(e,s,o,a){L()}As(e,s){return Vt.forEach(this.docs,o=>s(o))}newChangeBuffer(e){return new ho(this)}getSize(e){return Vt.resolve(this.size)}}class ho extends Wr{constructor(e){super(),this.Yn=e}applyChanges(e){const s=[];return this.changes.forEach((o,a)=>{a.isValidDocument()?s.push(this.Yn.addEntry(e,a)):this.Yn.removeEntry(o)}),Vt.waitFor(s)}getFromCache(e,s){return this.Yn.getEntry(e,s)}getAllFromCache(e,s){return this.Yn.getEntries(e,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.persistence=e,this.Rs=new os(s=>Fe(s),Be),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.bs=0,this.Ps=new oo,this.targetCount=0,this.vs=Or.Pn()}forEachTarget(e,s){return this.Rs.forEach((o,a)=>s(a)),Vt.resolve()}getLastRemoteSnapshotVersion(e){return Vt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Vt.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Vt.resolve(this.highestTargetId)}setTargetsMetadata(e,s,o){return o&&(this.lastRemoteSnapshotVersion=o),s>this.bs&&(this.bs=s),Vt.resolve()}Dn(e){this.Rs.set(e.target,e);const s=e.targetId;s>this.highestTargetId&&(this.vs=new Or(s),this.highestTargetId=s),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,s){return this.Dn(s),this.targetCount+=1,Vt.resolve()}updateTargetData(e,s){return this.Dn(s),Vt.resolve()}removeTargetData(e,s){return this.Rs.delete(s.target),this.Ps.ls(s.targetId),this.targetCount-=1,Vt.resolve()}removeTargets(e,s,o){let a=0;const c=[];return this.Rs.forEach((d,h)=>{h.sequenceNumber<=s&&o.get(h.targetId)===null&&(this.Rs.delete(d),c.push(this.removeMatchingKeysForTargetId(e,h.targetId)),a++)}),Vt.waitFor(c).next(()=>a)}getTargetCount(e){return Vt.resolve(this.targetCount)}getTargetData(e,s){const o=this.Rs.get(s)||null;return Vt.resolve(o)}addMatchingKeys(e,s,o){return this.Ps.us(s,o),Vt.resolve()}removeMatchingKeys(e,s,o){this.Ps.hs(s,o);const a=this.persistence.referenceDelegate,c=[];return a&&s.forEach(d=>{c.push(a.markPotentiallyOrphaned(e,d))}),Vt.waitFor(c)}removeMatchingKeysForTargetId(e,s){return this.Ps.ls(s),Vt.resolve()}getMatchingKeysForTargetId(e,s){const o=this.Ps.ds(s);return Vt.resolve(o)}containsKey(e,s){return Vt.resolve(this.Ps.containsKey(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,s){this.Vs={},this.overlays={},this.Ss=new Lt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new lo(this),this.indexManager=new yr,this.remoteDocumentCache=function(o){return new ao(o)}(o=>this.referenceDelegate.xs(o)),this.It=new Ki(s),this.Ns=new io(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let s=this.overlays[e.toKey()];return s||(s=new ro,this.overlays[e.toKey()]=s),s}getMutationQueue(e,s){let o=this.Vs[e.toKey()];return o||(o=new co(s,this.referenceDelegate),this.Vs[e.toKey()]=o),o}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,s,o){O("MemoryPersistence","Starting transaction:",e);const a=new _o(this.Ss.next());return this.referenceDelegate.ks(),o(a).next(c=>this.referenceDelegate.Ms(a).next(()=>c)).toPromise().then(c=>(a.raiseOnCommittedEvent(),c))}Os(e,s){return Vt.or(Object.values(this.Vs).map(o=>()=>o.containsKey(e,s)))}}class _o extends Pt{constructor(e){super(),this.currentSequenceNumber=e}}class wo{constructor(e){this.persistence=e,this.Fs=new oo,this.$s=null}static Bs(e){return new wo(e)}get Ls(){if(this.$s)return this.$s;throw L()}addReference(e,s,o){return this.Fs.addReference(o,s),this.Ls.delete(o.toString()),Vt.resolve()}removeReference(e,s,o){return this.Fs.removeReference(o,s),this.Ls.add(o.toString()),Vt.resolve()}markPotentiallyOrphaned(e,s){return this.Ls.add(s.toString()),Vt.resolve()}removeTarget(e,s){this.Fs.ls(s.targetId).forEach(a=>this.Ls.add(a.toString()));const o=this.persistence.getTargetCache();return o.getMatchingKeysForTargetId(e,s.targetId).next(a=>{a.forEach(c=>this.Ls.add(c.toString()))}).next(()=>o.removeTargetData(e,s))}ks(){this.$s=new Set}Ms(e){const s=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Vt.forEach(this.Ls,o=>{const a=dt.fromPath(o);return this.Us(e,a).next(c=>{c||s.removeEntry(a,ct.min())})}).next(()=>(this.$s=null,s.apply(e)))}updateLimboDocument(e,s){return this.Us(e,s).next(o=>{o?this.Ls.delete(s.toString()):this.Ls.add(s.toString())})}xs(e){return 0}Us(e,s){return Vt.or([()=>Vt.resolve(this.Fs.containsKey(s)),()=>this.persistence.getTargetCache().containsKey(e,s),()=>this.persistence.Os(e,s)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,s,o,a){this.targetId=e,this.fromCache=s,this.Si=o,this.Di=a}static Ci(e,s){let o=gs(),a=gs();for(const c of s.docChanges)switch(c.type){case 0:o=o.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new Ao(e,s.fromCache,o,a)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.xi=!1}initialize(e,s){this.Ni=e,this.indexManager=s,this.xi=!0}getDocumentsMatchingQuery(e,s,o,a){return this.ki(e,s).next(c=>c||this.Mi(e,s,a,o)).next(c=>c||this.Oi(e,s))}ki(e,s){if(cn(s))return Vt.resolve(null);let o=dn(s);return this.indexManager.getIndexType(e,o).next(a=>a===0?null:(s.limit!==null&&a===1&&(s=_n(s,null,"F"),o=dn(s)),this.indexManager.getDocumentsMatchingTarget(e,o).next(c=>{const d=gs(...c);return this.Ni.getDocuments(e,d).next(h=>this.indexManager.getMinOffset(e,o).next(g=>{const _=this.Fi(s,h);return this.$i(s,_,d,g.readTime)?this.ki(e,_n(s,null,"F")):this.Bi(e,_,s,g)}))})))}Mi(e,s,o,a){return cn(s)||a.isEqual(ct.min())?this.Oi(e,s):this.Ni.getDocuments(e,o).next(c=>{const d=this.Fi(s,c);return this.$i(s,d,o,a)?this.Oi(e,s):(k()<=LogLevel.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),gn(s)),this.Bi(e,d,s,Tt(a,-1)))})}Fi(e,s){let o=new Wt(In(e));return s.forEach((a,c)=>{yn(e,c)&&(o=o.add(c))}),o}$i(e,s,o,a){if(e.limit===null)return!1;if(o.size!==s.size)return!0;const c=e.limitType==="F"?s.last():s.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}Oi(e,s){return k()<=LogLevel.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",gn(s)),this.Ni.getDocumentsMatchingQuery(e,s,At.min())}Bi(e,s,o,a){return this.Ni.getDocumentsMatchingQuery(e,o,a).next(c=>(s.forEach(d=>{c=c.insert(d.key,d)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,s,o,a){this.persistence=e,this.Li=s,this.It=a,this.Ui=new Gt(it),this.qi=new os(c=>Fe(c),Be),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(o)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new so(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",s=>e.collect(s,this.Ui))}}function Po(i,e,s,o){return new bo(i,e,s,o)}async function vo(i,e){const s=K(i);return await s.persistence.runTransaction("Handle user change","readonly",o=>{let a;return s.mutationQueue.getAllMutationBatches(o).next(c=>(a=c,s.Qi(e),s.mutationQueue.getAllMutationBatches(o))).next(c=>{const d=[],h=[];let g=gs();for(const _ of a){d.push(_.batchId);for(const b of _.mutations)g=g.add(b.key)}for(const _ of c){h.push(_.batchId);for(const b of _.mutations)g=g.add(b.key)}return s.localDocuments.getDocuments(o,g).next(_=>({ji:_,removedBatchIds:d,addedBatchIds:h}))})})}function Vo(i,e){const s=K(i);return s.persistence.runTransaction("Acknowledge batch","readwrite-primary",o=>{const a=e.batch.keys(),c=s.Gi.newChangeBuffer({trackRemovals:!0});return function(d,h,g,_){const b=g.batch,et=b.keys();let ot=Vt.resolve();return et.forEach(gt=>{ot=ot.next(()=>_.getEntry(h,gt)).next(_t=>{const $t=g.docVersions.get(gt);U($t!==null),_t.version.compareTo($t)<0&&(b.applyToRemoteDocument(_t,g),_t.isValidDocument()&&(_t.setReadTime(g.commitVersion),_.addEntry(_t)))})}),ot.next(()=>d.mutationQueue.removeMutationBatch(h,b))}(s,o,e,c).next(()=>c.apply(o)).next(()=>s.mutationQueue.performConsistencyCheck(o)).next(()=>s.documentOverlayCache.removeOverlaysForBatchId(o,a,e.batch.batchId)).next(()=>s.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(o,function(d){let h=gs();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(h=h.add(d.batch.mutations[g].key));return h}(e))).next(()=>s.localDocuments.getDocuments(o,a))})}function So(i){const e=K(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",s=>e.Cs.getLastRemoteSnapshotVersion(s))}function Do(i,e){const s=K(i),o=e.snapshotVersion;let a=s.Ui;return s.persistence.runTransaction("Apply remote event","readwrite-primary",c=>{const d=s.Gi.newChangeBuffer({trackRemovals:!0});a=s.Ui;const h=[];e.targetChanges.forEach((b,et)=>{const ot=a.get(et);if(!ot)return;h.push(s.Cs.removeMatchingKeys(c,b.removedDocuments,et).next(()=>s.Cs.addMatchingKeys(c,b.addedDocuments,et)));let gt=ot.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.has(et)?gt=gt.withResumeToken(Xt.EMPTY_BYTE_STRING,ct.min()).withLastLimboFreeSnapshotVersion(ct.min()):b.resumeToken.approximateByteSize()>0&&(gt=gt.withResumeToken(b.resumeToken,o)),a=a.insert(et,gt),function(_t,$t,St){return _t.resumeToken.approximateByteSize()===0||$t.snapshotVersion.toMicroseconds()-_t.snapshotVersion.toMicroseconds()>=3e8?!0:St.addedDocuments.size+St.modifiedDocuments.size+St.removedDocuments.size>0}(ot,gt,b)&&h.push(s.Cs.updateTargetData(c,gt))});let g=cs(),_=gs();if(e.documentUpdates.forEach(b=>{e.resolvedLimboDocuments.has(b)&&h.push(s.persistence.referenceDelegate.updateLimboDocument(c,b))}),h.push(Co(c,d,e.documentUpdates).next(b=>{g=b.Wi,_=b.zi})),!o.isEqual(ct.min())){const b=s.Cs.getLastRemoteSnapshotVersion(c).next(et=>s.Cs.setTargetsMetadata(c,c.currentSequenceNumber,o));h.push(b)}return Vt.waitFor(h).next(()=>d.apply(c)).next(()=>s.localDocuments.getLocalViewOfDocuments(c,g,_)).next(()=>g)}).then(c=>(s.Ui=a,c))}function Co(i,e,s){let o=gs(),a=gs();return s.forEach(c=>o=o.add(c)),e.getEntries(i,o).next(c=>{let d=cs();return s.forEach((h,g)=>{const _=c.get(h);g.isFoundDocument()!==_.isFoundDocument()&&(a=a.add(h)),g.isNoDocument()&&g.version.isEqual(ct.min())?(e.removeEntry(h,g.readTime),d=d.insert(h,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),d=d.insert(h,g)):O("LocalStore","Ignoring outdated watch update for ",h,". Current version:",_.version," Watch version:",g.version)}),{Wi:d,zi:a}})}function xo(i,e){const s=K(i);return s.persistence.runTransaction("Get next mutation batch","readonly",o=>(e===void 0&&(e=-1),s.mutationQueue.getNextMutationBatchAfterBatchId(o,e)))}function No(i,e){const s=K(i);return s.persistence.runTransaction("Allocate target","readwrite",o=>{let a;return s.Cs.getTargetData(o,e).next(c=>c?(a=c,Vt.resolve(a)):s.Cs.allocateTargetId(o).next(d=>(a=new qi(e,d,0,o.currentSequenceNumber),s.Cs.addTargetData(o,a).next(()=>a))))}).then(o=>{const a=s.Ui.get(o.targetId);return(a===null||o.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(s.Ui=s.Ui.insert(o.targetId,o),s.qi.set(e,o.targetId)),o})}async function ko(i,e,s){const o=K(i),a=o.Ui.get(e),c=s?"readwrite":"readwrite-primary";try{s||await o.persistence.runTransaction("Release target",c,d=>o.persistence.referenceDelegate.removeTarget(d,a))}catch(d){if(!Nt(d))throw d;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${d}`)}o.Ui=o.Ui.remove(e),o.qi.delete(a.target)}function Mo(i,e,s){const o=K(i);let a=ct.min(),c=gs();return o.persistence.runTransaction("Execute query","readonly",d=>function(h,g,_){const b=K(h),et=b.qi.get(_);return et!==void 0?Vt.resolve(b.Ui.get(et)):b.Cs.getTargetData(g,_)}(o,d,dn(e)).next(h=>{if(h)return a=h.lastLimboFreeSnapshotVersion,o.Cs.getMatchingKeysForTargetId(d,h.targetId).next(g=>{c=g})}).next(()=>o.Li.getDocumentsMatchingQuery(d,e,s?a:ct.min(),s?c:gs())).next(h=>($o(o,pn(e),h),{documents:h,Hi:c})))}function $o(i,e,s){let o=ct.min();s.forEach((a,c)=>{c.readTime.compareTo(o)>0&&(o=c.readTime)}),i.Ki.set(e,o)}class zo{constructor(){this.activeTargetIds=ps()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jo{constructor(){this.Lr=new zo,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,s,o){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,s,o){this.Ur[e]=s}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new zo,Promise.resolve()}handleUserChange(e,s,o){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http";this.oo=s+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,s,o,a,c){const d=this.ao(e,s);O("RestConnection","Sending: ",d,o);const h={};return this.ho(h,a,c),this.lo(e,d,h,o).then(g=>(O("RestConnection","Received: ",g),g),g=>{throw $("RestConnection",`${e} failed with error: `,g,"url: ",d,"request:",o),g})}fo(e,s,o,a,c,d){return this.co(e,s,o,a,c)}ho(e,s,o){e["X-Goog-Api-Client"]="gl-js/ fire/"+x,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((a,c)=>e[c]=a),o&&o.headers.forEach((a,c)=>e[c]=a)}ao(e,s){const o=Zo[e];return`${this.oo}/v1/${s}:${o}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,s,o,a){return new Promise((c,d)=>{const h=new XhrIo;h.listenOnce(EventType.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ErrorCode.NO_ERROR:const _=h.getResponseJson();O("Connection","XHR received:",JSON.stringify(_)),c(_);break;case ErrorCode.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),d(new Q(G.DEADLINE_EXCEEDED,"Request time out"));break;case ErrorCode.HTTP_ERROR:const b=h.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',b,"response text:",h.getResponseText()),b>0){const et=h.getResponseJson().error;if(et&&et.status&&et.message){const ot=function(gt){const _t=gt.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(_t)>=0?_t:G.UNKNOWN}(et.status);d(new Q(ot,et.message))}else d(new Q(G.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new Q(G.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const g=JSON.stringify(a);h.send(s,"POST",g,o,15)})}_o(e,s,o){const a=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=createWebChannelTransport(),d=getStatEventTarget(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(h.xmlHttpFactory=new FetchXmlHttpFactory({})),this.ho(h.initMessageHeaders,s,o),isMobileCordova()||isReactNative()||isElectron()||isIE()||isUWP()||isBrowserExtension()||(h.httpHeadersOverwriteParam="$httpHeaders");const g=a.join("");O("Connection","Creating WebChannel: "+g,h);const _=c.createWebChannel(g,h);let b=!1,et=!1;const ot=new tu({Hr:_t=>{et?O("Connection","Not sending because WebChannel is closed:",_t):(b||(O("Connection","Opening WebChannel transport."),_.open(),b=!0),O("Connection","WebChannel sending:",_t),_.send(_t))},Jr:()=>_.close()}),gt=(_t,$t,St)=>{_t.listen($t,mt=>{try{St(mt)}catch(pt){setTimeout(()=>{throw pt},0)}})};return gt(_,WebChannel.EventType.OPEN,()=>{et||O("Connection","WebChannel transport opened.")}),gt(_,WebChannel.EventType.CLOSE,()=>{et||(et=!0,O("Connection","WebChannel transport closed"),ot.io())}),gt(_,WebChannel.EventType.ERROR,_t=>{et||(et=!0,$("Connection","WebChannel transport errored:",_t),ot.io(new Q(G.UNAVAILABLE,"The operation could not be completed")))}),gt(_,WebChannel.EventType.MESSAGE,_t=>{var $t;if(!et){const St=_t.data[0];U(!!St);const mt=St,pt=mt.error||(($t=mt[0])===null||$t===void 0?void 0:$t.error);if(pt){O("Connection","WebChannel received error:",pt);const yt=pt.status;let wt=function(Ct){const kt=ns[Ct];if(kt!==void 0)return rs(kt)}(yt),It=pt.message;wt===void 0&&(wt=G.INTERNAL,It="Unknown error status: "+yt+" with message "+pt.message),et=!0,ot.io(new Q(wt,It)),_.close()}else O("Connection","WebChannel received:",St),ot.ro(St)}}),gt(d,Event.STAT_EVENT,_t=>{_t.stat===Stat.PROXY?O("Connection","Detected buffering proxy"):_t.stat===Stat.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{ot.so()},0),ot}}function su(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(i){return new Cs(i,!0)}class ru{constructor(e,s,o=1e3,a=1.5,c=6e4){this.Hs=e,this.timerId=s,this.wo=o,this.mo=a,this.yo=c,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const s=Math.floor(this.po+this.Ro()),o=Math.max(0,Date.now()-this.To),a=Math.max(0,s-o);a>0&&O("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.po} ms, delay with jitter: ${s} ms, last attempt: ${o} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,a,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,s,o,a,c,d,h,g){this.Hs=e,this.Po=o,this.vo=a,this.Vo=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=h,this.listener=g,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ru(e,s)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,s){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():s&&s.code===G.RESOURCE_EXHAUSTED?(F(s.toString()),F("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):s&&s.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(s)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),s=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([o,a])=>{this.So===s&&this.Go(o,a)},o=>{e(()=>{const a=new Q(G.UNKNOWN,"Fetching auth token failed: "+o.message);return this.Qo(a)})})}Go(e,s){const o=this.Ko(this.So);this.stream=this.jo(e,s),this.stream.Yr(()=>{o(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(a=>{o(()=>this.Qo(a))}),this.stream.onMessage(a=>{o(()=>this.onMessage(a))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return s=>{this.Hs.enqueueAndForget(()=>this.So===e?s():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uu extends ou{constructor(e,s,o,a,c,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",s,o,a,d),this.It=c}jo(e,s){return this.Vo._o("Listen",e,s)}onMessage(e){this.xo.reset();const s=Ws(this.It,e),o=function(a){if(!("targetChange"in a))return ct.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?ct.min():c.readTime?Ms(c.readTime):ct.min()}(e);return this.listener.Wo(s,o)}zo(e){const s={};s.database=qs(this.It),s.addTarget=function(a,c){let d;const h=c.target;return d=Le(h)?{documents:Ys(a,h)}:{query:Xs(a,h)},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0?d.resumeToken=Ns(a,c.resumeToken):c.snapshotVersion.compareTo(ct.min())>0&&(d.readTime=xs(a,c.snapshotVersion.toTimestamp())),d}(this.It,e);const o=ti(this.It,e);o&&(s.labels=o),this.Bo(s)}Ho(e){const s={};s.database=qs(this.It),s.removeTarget=e,this.Bo(s)}}class cu extends ou{constructor(e,s,o,a,c,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",s,o,a,d),this.It=c,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,s){return this.Vo._o("Write",e,s)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const s=Js(e.writeResults,e.commitTime),o=Ms(e.commitTime);return this.listener.Zo(o,s)}return U(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=qs(this.It),this.Bo(e)}Xo(e){const s={streamToken:this.lastStreamToken,writes:e.map(o=>zs(this.It,o))};this.Bo(s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends class{}{constructor(e,s,o,a){super(),this.authCredentials=e,this.appCheckCredentials=s,this.Vo=o,this.It=a,this.nu=!1}su(){if(this.nu)throw new Q(G.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,s,o){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.Vo.co(e,s,o,a,c)).catch(a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(G.UNKNOWN,a.toString())})}fo(e,s,o,a){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.Vo.fo(e,s,o,c,d,a)).catch(c=>{throw c.name==="FirebaseError"?(c.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Q(G.UNKNOWN,c.toString())})}terminate(){this.nu=!0}}class hu{constructor(e,s){this.asyncQueue=e,this.onlineStateHandler=s,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const s=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(F(s),this.ou=!1):O("OnlineStateTracker",s)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,s,o,a,c){this.localStore=e,this.datastore=s,this.asyncQueue=o,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=c,this.mu.qr(d=>{o.enqueueAndForget(async()=>{Iu(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(h){const g=K(h);g._u.add(4),await du(g),g.gu.set("Unknown"),g._u.delete(4),await fu(g)}(this))})}),this.gu=new hu(o,a)}}async function fu(i){if(Iu(i))for(const e of i.wu)await e(!0)}async function du(i){for(const e of i.wu)await e(!1)}function _u(i,e){const s=K(i);s.du.has(e.targetId)||(s.du.set(e.targetId,e),pu(s)?yu(s):$u(s).ko()&&mu(s,e))}function wu(i,e){const s=K(i),o=$u(s);s.du.delete(e),o.ko()&&gu(s,e),s.du.size===0&&(o.ko()?o.Fo():Iu(s)&&s.gu.set("Unknown"))}function mu(i,e){i.yu.Ot(e.targetId),$u(i).zo(e)}function gu(i,e){i.yu.Ot(e),$u(i).Ho(e)}function yu(i){i.yu=new Ps({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),se:e=>i.du.get(e)||null}),$u(i).start(),i.gu.uu()}function pu(i){return Iu(i)&&!$u(i).No()&&i.du.size>0}function Iu(i){return K(i)._u.size===0}function Tu(i){i.yu=void 0}async function Eu(i){i.du.forEach((e,s)=>{mu(i,e)})}async function Au(i,e){Tu(i),pu(i)?(i.gu.hu(e),yu(i)):i.gu.set("Unknown")}async function Ru(i,e,s){if(i.gu.set("Online"),e instanceof Rs&&e.state===2&&e.cause)try{await async function(o,a){const c=a.cause;for(const d of a.targetIds)o.du.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.du.delete(d),o.yu.removeTarget(d))}(i,e)}catch(o){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),o),await bu(i,o)}else if(e instanceof Es?i.yu.Gt(e):e instanceof As?i.yu.Yt(e):i.yu.Wt(e),!s.isEqual(ct.min()))try{const o=await So(i.localStore);s.compareTo(o)>=0&&await function(a,c){const d=a.yu.te(c);return d.targetChanges.forEach((h,g)=>{if(h.resumeToken.approximateByteSize()>0){const _=a.du.get(g);_&&a.du.set(g,_.withResumeToken(h.resumeToken,c))}}),d.targetMismatches.forEach(h=>{const g=a.du.get(h);if(!g)return;a.du.set(h,g.withResumeToken(Xt.EMPTY_BYTE_STRING,g.snapshotVersion)),gu(a,h);const _=new qi(g.target,h,1,g.sequenceNumber);mu(a,_)}),a.remoteSyncer.applyRemoteEvent(d)}(i,s)}catch(o){O("RemoteStore","Failed to raise snapshot:",o),await bu(i,o)}}async function bu(i,e,s){if(!Nt(e))throw e;i._u.add(1),await du(i),i.gu.set("Offline"),s||(s=()=>So(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await s(),i._u.delete(1),await fu(i)})}function Pu(i,e){return e().catch(s=>bu(i,s,e))}async function vu(i){const e=K(i),s=Bu(e);let o=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Vu(e);)try{const a=await xo(e.localStore,o);if(a===null){e.fu.length===0&&s.Fo();break}o=a.batchId,Su(e,a)}catch(a){await bu(e,a)}Du(e)&&Cu(e)}function Vu(i){return Iu(i)&&i.fu.length<10}function Su(i,e){i.fu.push(e);const s=Bu(i);s.ko()&&s.Yo&&s.Xo(e.mutations)}function Du(i){return Iu(i)&&!Bu(i).No()&&i.fu.length>0}function Cu(i){Bu(i).start()}async function xu(i){Bu(i).eu()}async function Nu(i){const e=Bu(i);for(const s of i.fu)e.Xo(s.mutations)}async function ku(i,e,s){const o=i.fu.shift(),a=Li.from(o,e,s);await Pu(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await vu(i)}async function Mu(i,e){e&&Bu(i).Yo&&await async function(s,o){if(a=o.code,is(a)&&a!==G.ABORTED){const c=s.fu.shift();Bu(s).Oo(),await Pu(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o)),await vu(s)}var a}(i,e),Du(i)&&Cu(i)}async function Ou(i,e){const s=K(i);s.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const o=Iu(s);s._u.add(3),await du(s),o&&s.gu.set("Unknown"),await s.remoteSyncer.handleCredentialChange(e),s._u.delete(3),await fu(s)}async function Fu(i,e){const s=K(i);e?(s._u.delete(2),await fu(s)):e||(s._u.add(2),await du(s),s.gu.set("Unknown"))}function $u(i){return i.pu||(i.pu=function(e,s,o){const a=K(e);return a.su(),new uu(s,a.Vo,a.authCredentials,a.appCheckCredentials,a.It,o)}(i.datastore,i.asyncQueue,{Yr:Eu.bind(null,i),Zr:Au.bind(null,i),Wo:Ru.bind(null,i)}),i.wu.push(async e=>{e?(i.pu.Oo(),pu(i)?yu(i):i.gu.set("Unknown")):(await i.pu.stop(),Tu(i))})),i.pu}function Bu(i){return i.Iu||(i.Iu=function(e,s,o){const a=K(e);return a.su(),new cu(s,a.Vo,a.authCredentials,a.appCheckCredentials,a.It,o)}(i.datastore,i.asyncQueue,{Yr:xu.bind(null,i),Zr:Mu.bind(null,i),tu:Nu.bind(null,i),Zo:ku.bind(null,i)}),i.wu.push(async e=>{e?(i.Iu.Oo(),await vu(i)):(await i.Iu.stop(),i.fu.length>0&&(O("RemoteStore",`Stopping write stream with ${i.fu.length} pending writes`),i.fu=[]))})),i.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,s,o,a,c){this.asyncQueue=e,this.timerId=s,this.targetTimeMs=o,this.op=a,this.removalCallback=c,this.deferred=new j,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}static createAndSchedule(e,s,o,a,c){const d=Date.now()+o,h=new Lu(e,s,d,a,c);return h.start(o),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uu(i,e){if(F("AsyncQueue",`${e}: ${i}`),Nt(i))return new Q(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.comparator=e?(s,o)=>e(s,o)||dt.comparator(s.key,o.key):(s,o)=>dt.comparator(s.key,o.key),this.keyedMap=hs(),this.sortedSet=new Gt(this.comparator)}static emptySet(e){return new qu(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const s=this.keyedMap.get(e);return s?this.sortedSet.indexOf(s):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((s,o)=>(e(s),!1))}add(e){const s=this.delete(e.key);return s.copy(s.keyedMap.insert(e.key,e),s.sortedSet.insert(e,null))}delete(e){const s=this.get(e);return s?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(s)):this}isEqual(e){if(!(e instanceof qu)||this.size!==e.size)return!1;const s=this.sortedSet.getIterator(),o=e.sortedSet.getIterator();for(;s.hasNext();){const a=s.getNext().key,c=o.getNext().key;if(!a.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach(s=>{e.push(s.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,s){const o=new qu;return o.comparator=this.comparator,o.keyedMap=e,o.sortedSet=s,o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.Tu=new Gt(dt.comparator)}track(e){const s=e.doc.key,o=this.Tu.get(s);o?e.type!==0&&o.type===3?this.Tu=this.Tu.insert(s,e):e.type===3&&o.type!==1?this.Tu=this.Tu.insert(s,{type:o.type,doc:e.doc}):e.type===2&&o.type===2?this.Tu=this.Tu.insert(s,{type:2,doc:e.doc}):e.type===2&&o.type===0?this.Tu=this.Tu.insert(s,{type:0,doc:e.doc}):e.type===1&&o.type===0?this.Tu=this.Tu.remove(s):e.type===1&&o.type===2?this.Tu=this.Tu.insert(s,{type:1,doc:o.doc}):e.type===0&&o.type===1?this.Tu=this.Tu.insert(s,{type:2,doc:e.doc}):L():this.Tu=this.Tu.insert(s,e)}Eu(){const e=[];return this.Tu.inorderTraversal((s,o)=>{e.push(o)}),e}}class Gu{constructor(e,s,o,a,c,d,h,g){this.query=e,this.docs=s,this.oldDocs=o,this.docChanges=a,this.mutatedKeys=c,this.fromCache=d,this.syncStateChanged=h,this.excludesMetadataChanges=g}static fromInitialDocuments(e,s,o,a){const c=[];return s.forEach(d=>{c.push({type:0,doc:d})}),new Gu(e,s,qu.emptySet(s),c,o,a,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const s=this.docChanges,o=e.docChanges;if(s.length!==o.length)return!1;for(let a=0;a<s.length;a++)if(s[a].type!==o[a].type||!s[a].doc.isEqual(o[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.Au=void 0,this.listeners=[]}}class ju{constructor(){this.queries=new os(e=>mn(e),wn),this.onlineState="Unknown",this.Ru=new Set}}async function Wu(i,e){const s=K(i),o=e.query;let a=!1,c=s.queries.get(o);if(c||(a=!0,c=new Qu),a)try{c.Au=await s.onListen(o)}catch(d){const h=Uu(d,`Initialization of query '${gn(e.query)}' failed`);return void e.onError(h)}s.queries.set(o,c),c.listeners.push(e),e.bu(s.onlineState),c.Au&&e.Pu(c.Au)&&Yu(s)}async function zu(i,e){const s=K(i),o=e.query;let a=!1;const c=s.queries.get(o);if(c){const d=c.listeners.indexOf(e);d>=0&&(c.listeners.splice(d,1),a=c.listeners.length===0)}if(a)return s.queries.delete(o),s.onUnlisten(o)}function Hu(i,e){const s=K(i);let o=!1;for(const a of e){const c=a.query,d=s.queries.get(c);if(d){for(const h of d.listeners)h.Pu(a)&&(o=!0);d.Au=a}}o&&Yu(s)}function Ju(i,e,s){const o=K(i),a=o.queries.get(e);if(a)for(const c of a.listeners)c.onError(s);o.queries.delete(e)}function Yu(i){i.Ru.forEach(e=>{e.next()})}class Xu{constructor(e,s,o){this.query=e,this.vu=s,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=o||{}}Pu(e){if(!this.options.includeMetadataChanges){const o=[];for(const a of e.docChanges)a.type!==3&&o.push(a);e=new Gu(e.query,e.docs,e.oldDocs,o,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let s=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),s=!0):this.Cu(e,this.onlineState)&&(this.xu(e),s=!0),this.Su=e,s}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let s=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),s=!0),s}Cu(e,s){if(!e.fromCache)return!0;const o=s!=="Offline";return(!this.options.Nu||!o)&&(!e.docs.isEmpty()||s==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const s=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!s)&&this.options.includeMetadataChanges===!0}xu(e){e=Gu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.key=e}}class ic{constructor(e){this.key=e}}class rc{constructor(e,s){this.query=e,this.Lu=s,this.Uu=null,this.current=!1,this.qu=gs(),this.mutatedKeys=gs(),this.Ku=In(e),this.Gu=new qu(this.Ku)}get Qu(){return this.Lu}ju(e,s){const o=s?s.Wu:new Ku,a=s?s.Gu:this.Gu;let c=s?s.mutatedKeys:this.mutatedKeys,d=a,h=!1;const g=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,_=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((b,et)=>{const ot=a.get(b),gt=yn(this.query,et)?et:null,_t=!!ot&&this.mutatedKeys.has(ot.key),$t=!!gt&&(gt.hasLocalMutations||this.mutatedKeys.has(gt.key)&&gt.hasCommittedMutations);let St=!1;ot&&gt?ot.data.isEqual(gt.data)?_t!==$t&&(o.track({type:3,doc:gt}),St=!0):this.zu(ot,gt)||(o.track({type:2,doc:gt}),St=!0,(g&&this.Ku(gt,g)>0||_&&this.Ku(gt,_)<0)&&(h=!0)):!ot&&gt?(o.track({type:0,doc:gt}),St=!0):ot&&!gt&&(o.track({type:1,doc:ot}),St=!0,(g||_)&&(h=!0)),St&&(gt?(d=d.add(gt),c=$t?c.add(b):c.delete(b)):(d=d.delete(b),c=c.delete(b)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const b=this.query.limitType==="F"?d.last():d.first();d=d.delete(b.key),c=c.delete(b.key),o.track({type:1,doc:b})}return{Gu:d,Wu:o,$i:h,mutatedKeys:c}}zu(e,s){return e.hasLocalMutations&&s.hasCommittedMutations&&!s.hasLocalMutations}applyChanges(e,s,o){const a=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const c=e.Wu.Eu();c.sort((_,b)=>function(et,ot){const gt=_t=>{switch(_t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return gt(et)-gt(ot)}(_.type,b.type)||this.Ku(_.doc,b.doc)),this.Hu(o);const d=s?this.Ju():[],h=this.qu.size===0&&this.current?1:0,g=h!==this.Uu;return this.Uu=h,c.length!==0||g?{snapshot:new Gu(this.query,e.Gu,a,c,e.mutatedKeys,h===0,g,!1),Yu:d}:{Yu:d}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Ku,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(s=>this.Lu=this.Lu.add(s)),e.modifiedDocuments.forEach(s=>{}),e.removedDocuments.forEach(s=>this.Lu=this.Lu.delete(s)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=gs(),this.Gu.forEach(o=>{this.Xu(o.key)&&(this.qu=this.qu.add(o.key))});const s=[];return e.forEach(o=>{this.qu.has(o)||s.push(new ic(o))}),this.qu.forEach(o=>{e.has(o)||s.push(new sc(o))}),s}Zu(e){this.Lu=e.Hi,this.qu=gs();const s=this.ju(e.documents);return this.applyChanges(s,!0)}tc(){return Gu.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class oc{constructor(e,s,o){this.query=e,this.targetId=s,this.view=o}}class uc{constructor(e){this.key=e,this.ec=!1}}class cc{constructor(e,s,o,a,c,d){this.localStore=e,this.remoteStore=s,this.eventManager=o,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.nc={},this.sc=new os(h=>mn(h),wn),this.ic=new Map,this.rc=new Set,this.oc=new Gt(dt.comparator),this.uc=new Map,this.cc=new oo,this.ac={},this.hc=new Map,this.lc=Or.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function ac(i,e){const s=$c(i);let o,a;const c=s.sc.get(e);if(c)o=c.targetId,s.sharedClientState.addLocalQueryTarget(o),a=c.view.tc();else{const d=await No(s.localStore,dn(e));s.isPrimaryClient&&_u(s.remoteStore,d);const h=s.sharedClientState.addLocalQueryTarget(d.targetId);o=d.targetId,a=await hc(s,e,o,h==="current")}return a}async function hc(i,e,s,o){i.dc=(b,et,ot)=>async function(gt,_t,$t,St){let mt=_t.view.ju($t);mt.$i&&(mt=await Mo(gt.localStore,_t.query,!1).then(({documents:wt})=>_t.view.ju(wt,mt)));const pt=St&&St.targetChanges.get(_t.targetId),yt=_t.view.applyChanges(mt,gt.isPrimaryClient,pt);return Ac(gt,_t.targetId,yt.Yu),yt.snapshot}(i,b,et,ot);const a=await Mo(i.localStore,e,!0),c=new rc(e,a.Hi),d=c.ju(a.documents),h=Ts.createSynthesizedTargetChangeForCurrentChange(s,o&&i.onlineState!=="Offline"),g=c.applyChanges(d,i.isPrimaryClient,h);Ac(i,s,g.Yu);const _=new oc(e,s,c);return i.sc.set(e,_),i.ic.has(s)?i.ic.get(s).push(e):i.ic.set(s,[e]),g.snapshot}async function lc(i,e){const s=K(i),o=s.sc.get(e),a=s.ic.get(o.targetId);if(a.length>1)return s.ic.set(o.targetId,a.filter(c=>!wn(c,e))),void s.sc.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ko(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),wu(s.remoteStore,o.targetId),Tc(s,o.targetId)}).catch(vt)):(Tc(s,o.targetId),await ko(s.localStore,o.targetId,!0))}async function fc(i,e,s){const o=Bc(i);try{const a=await function(c,d){const h=K(c),g=ut.now(),_=d.reduce((ot,gt)=>ot.add(gt.key),gs());let b,et;return h.persistence.runTransaction("Locally write mutations","readwrite",ot=>{let gt=cs(),_t=gs();return h.Gi.getEntries(ot,_).next($t=>{gt=$t,gt.forEach((St,mt)=>{mt.isValidDocument()||(_t=_t.add(St))})}).next(()=>h.localDocuments.getOverlayedDocuments(ot,gt)).next($t=>{b=$t;const St=[];for(const mt of d){const pt=jn(mt,b.get(mt.key).overlayedDocument);pt!=null&&St.push(new Hn(mt.key,pt,Ne(pt.value.mapValue),Ln.exists(!0)))}return h.mutationQueue.addMutationBatch(ot,g,St,d)}).next($t=>{et=$t;const St=$t.applyToLocalDocumentSet(b,_t);return h.documentOverlayCache.saveOverlays(ot,$t.batchId,St)})}).then(()=>({batchId:et.batchId,changes:ls(b)}))}(o.localStore,e);o.sharedClientState.addPendingMutation(a.batchId),function(c,d,h){let g=c.ac[c.currentUser.toKey()];g||(g=new Gt(it)),g=g.insert(d,h),c.ac[c.currentUser.toKey()]=g}(o,a.batchId,s),await Pc(o,a.changes),await vu(o.remoteStore)}catch(a){const c=Uu(a,"Failed to persist write");s.reject(c)}}async function dc(i,e){const s=K(i);try{const o=await Do(s.localStore,e);e.targetChanges.forEach((a,c)=>{const d=s.uc.get(c);d&&(U(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?d.ec=!0:a.modifiedDocuments.size>0?U(d.ec):a.removedDocuments.size>0&&(U(d.ec),d.ec=!1))}),await Pc(s,o,e)}catch(o){await vt(o)}}function _c(i,e,s){const o=K(i);if(o.isPrimaryClient&&s===0||!o.isPrimaryClient&&s===1){const a=[];o.sc.forEach((c,d)=>{const h=d.view.bu(e);h.snapshot&&a.push(h.snapshot)}),function(c,d){const h=K(c);h.onlineState=d;let g=!1;h.queries.forEach((_,b)=>{for(const et of b.listeners)et.bu(d)&&(g=!0)}),g&&Yu(h)}(o.eventManager,e),a.length&&o.nc.Wo(a),o.onlineState=e,o.isPrimaryClient&&o.sharedClientState.setOnlineState(e)}}async function wc(i,e,s){const o=K(i);o.sharedClientState.updateQueryState(e,"rejected",s);const a=o.uc.get(e),c=a&&a.key;if(c){let d=new Gt(dt.comparator);d=d.insert(c,ke.newNoDocument(c,ct.min()));const h=gs().add(c),g=new Is(ct.min(),new Map,new Wt(it),d,h);await dc(o,g),o.oc=o.oc.remove(c),o.uc.delete(e),bc(o)}else await ko(o.localStore,e,!1).then(()=>Tc(o,e,s)).catch(vt)}async function mc(i,e){const s=K(i),o=e.batch.batchId;try{const a=await Vo(s.localStore,e);Ic(s,o,null),pc(s,o),s.sharedClientState.updateMutationState(o,"acknowledged"),await Pc(s,a)}catch(a){await vt(a)}}async function gc(i,e,s){const o=K(i);try{const a=await function(c,d){const h=K(c);return h.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return h.mutationQueue.lookupMutationBatch(g,d).next(b=>(U(b!==null),_=b.keys(),h.mutationQueue.removeMutationBatch(g,b))).next(()=>h.mutationQueue.performConsistencyCheck(g)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(g,_,d)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>h.localDocuments.getDocuments(g,_))})}(o.localStore,e);Ic(o,e,s),pc(o,e),o.sharedClientState.updateMutationState(e,"rejected",s),await Pc(o,a)}catch(a){await vt(a)}}function pc(i,e){(i.hc.get(e)||[]).forEach(s=>{s.resolve()}),i.hc.delete(e)}function Ic(i,e,s){const o=K(i);let a=o.ac[o.currentUser.toKey()];if(a){const c=a.get(e);c&&(s?c.reject(s):c.resolve(),a=a.remove(e)),o.ac[o.currentUser.toKey()]=a}}function Tc(i,e,s=null){i.sharedClientState.removeLocalQueryTarget(e);for(const o of i.ic.get(e))i.sc.delete(o),s&&i.nc._c(o,s);i.ic.delete(e),i.isPrimaryClient&&i.cc.ls(e).forEach(o=>{i.cc.containsKey(o)||Ec(i,o)})}function Ec(i,e){i.rc.delete(e.path.canonicalString());const s=i.oc.get(e);s!==null&&(wu(i.remoteStore,s),i.oc=i.oc.remove(e),i.uc.delete(s),bc(i))}function Ac(i,e,s){for(const o of s)o instanceof sc?(i.cc.addReference(o.key,e),Rc(i,o)):o instanceof ic?(O("SyncEngine","Document no longer in limbo: "+o.key),i.cc.removeReference(o.key,e),i.cc.containsKey(o.key)||Ec(i,o.key)):L()}function Rc(i,e){const s=e.key,o=s.path.canonicalString();i.oc.get(s)||i.rc.has(o)||(O("SyncEngine","New document in limbo: "+s),i.rc.add(o),bc(i))}function bc(i){for(;i.rc.size>0&&i.oc.size<i.maxConcurrentLimboResolutions;){const e=i.rc.values().next().value;i.rc.delete(e);const s=new dt(ht.fromString(e)),o=i.lc.next();i.uc.set(o,new uc(s)),i.oc=i.oc.insert(s,o),_u(i.remoteStore,new qi(dn(un(s.path)),o,2,Lt.at))}}async function Pc(i,e,s){const o=K(i),a=[],c=[],d=[];o.sc.isEmpty()||(o.sc.forEach((h,g)=>{d.push(o.dc(g,e,s).then(_=>{if(_){o.isPrimaryClient&&o.sharedClientState.updateQueryState(g.targetId,_.fromCache?"not-current":"current"),a.push(_);const b=Ao.Ci(g.targetId,_);c.push(b)}}))}),await Promise.all(d),o.nc.Wo(a),await async function(h,g){const _=K(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>Vt.forEach(g,et=>Vt.forEach(et.Si,ot=>_.persistence.referenceDelegate.addReference(b,et.targetId,ot)).next(()=>Vt.forEach(et.Di,ot=>_.persistence.referenceDelegate.removeReference(b,et.targetId,ot)))))}catch(b){if(!Nt(b))throw b;O("LocalStore","Failed to update sequence numbers: "+b)}for(const b of g){const et=b.targetId;if(!b.fromCache){const ot=_.Ui.get(et),gt=ot.snapshotVersion,_t=ot.withLastLimboFreeSnapshotVersion(gt);_.Ui=_.Ui.insert(et,_t)}}}(o.localStore,c))}async function vc(i,e){const s=K(i);if(!s.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const o=await vo(s.localStore,e);s.currentUser=e,function(a,c){a.hc.forEach(d=>{d.forEach(h=>{h.reject(new Q(G.CANCELLED,c))})}),a.hc.clear()}(s,"'waitForPendingWrites' promise is rejected due to a user change."),s.sharedClientState.handleUserChange(e,o.removedBatchIds,o.addedBatchIds),await Pc(s,o.ji)}}function Vc(i,e){const s=K(i),o=s.uc.get(e);if(o&&o.ec)return gs().add(o.key);{let a=gs();const c=s.ic.get(e);if(!c)return a;for(const d of c){const h=s.sc.get(d);a=a.unionWith(h.view.Qu)}return a}}function $c(i){const e=K(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=dc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wc.bind(null,e),e.nc.Wo=Hu.bind(null,e.eventManager),e.nc._c=Ju.bind(null,e.eventManager),e}function Bc(i){const e=K(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gc.bind(null,e),e}class Uc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=iu(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,s){return null}Tc(e,s){return null}yc(e){return Po(this.persistence,new Ro,e.initialUser,this.It)}gc(e){return new fo(wo.Bs,this.It)}mc(e){return new Jo}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gc{async initialize(e,s){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(s),this.remoteStore=this.createRemoteStore(s),this.eventManager=this.createEventManager(s),this.syncEngine=this.createSyncEngine(s,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=o=>_c(this.syncEngine,o,1),this.remoteStore.remoteSyncer.handleCredentialChange=vc.bind(null,this.syncEngine),await Fu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ju}createDatastore(e){const s=iu(e.databaseInfo.databaseId),o=(a=e.databaseInfo,new eu(a));var a;return function(c,d,h,g){return new au(c,d,h,g)}(e.authCredentials,e.appCheckCredentials,o,s)}createRemoteStore(e){return s=this.localStore,o=this.datastore,a=e.asyncQueue,c=h=>_c(this.syncEngine,h,0),d=Xo.C()?new Xo:new Yo,new lu(s,o,a,c,d);var s,o,a,c,d}createSyncEngine(e,s){return function(o,a,c,d,h,g,_){const b=new cc(o,a,c,d,h,g);return _&&(b.fc=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,s)}terminate(){return async function(e){const s=K(e);O("RemoteStore","RemoteStore shutting down."),s._u.add(5),await du(s),s.mu.shutdown(),s.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):F("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,s){this.muted||setTimeout(()=>{this.muted||e(s)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,s,o,a){this.authCredentials=e,this.appCheckCredentials=s,this.asyncQueue=o,this.databaseInfo=a,this.user=C.UNAUTHENTICATED,this.clientId=st.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(o,async c=>{O("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(o,c=>(O("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q(G.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new j;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(s){const o=Uu(s,"Failed to shutdown persistence");e.reject(o)}}),e.promise}}async function Yc(i,e){i.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const s=await i.getConfiguration();await e.initialize(s);let o=s.initialUser;i.setCredentialChangeListener(async a=>{o.isEqual(a)||(await vo(e.localStore,a),o=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i.offlineComponents=e}async function Xc(i,e){i.asyncQueue.verifyOperationInProgress();const s=await Zc(i);O("FirestoreClient","Initializing OnlineComponentProvider");const o=await i.getConfiguration();await e.initialize(s,o),i.setCredentialChangeListener(a=>Ou(e.remoteStore,a)),i.setAppCheckTokenChangeListener((a,c)=>Ou(e.remoteStore,c)),i.onlineComponents=e}async function Zc(i){return i.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await Yc(i,new Uc)),i.offlineComponents}async function ta(i){return i.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await Xc(i,new Gc)),i.onlineComponents}function ia(i){return ta(i).then(e=>e.syncEngine)}async function ra(i){const e=await ta(i),s=e.eventManager;return s.onListen=ac.bind(null,e.syncEngine),s.onUnlisten=lc.bind(null,e.syncEngine),s}function aa(i,e,s={}){const o=new j;return i.asyncQueue.enqueueAndForget(async()=>function(a,c,d,h,g){const _=new jc({next:et=>{c.enqueueAndForget(()=>zu(a,b));const ot=et.docs.has(d);!ot&&et.fromCache?g.reject(new Q(G.UNAVAILABLE,"Failed to get document because the client is offline.")):ot&&et.fromCache&&h&&h.source==="server"?g.reject(new Q(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(et)},error:et=>g.reject(et)}),b=new Xu(un(d.path),_,{includeMetadataChanges:!0,Nu:!0});return Wu(a,b)}(await ra(i),i.asyncQueue,e,s,o)),o.promise}const ma=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(i,e,s){if(!s)throw new Q(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function ya(i,e,s,o){if(e===!0&&o===!0)throw new Q(G.INVALID_ARGUMENT,`${i} and ${s} cannot be used together.`)}function pa(i){if(!dt.isDocumentKey(i))throw new Q(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ta(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":L()}function Ea(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Q(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=Ta(i);throw new Q(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${s}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){var s;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(s=e.ssl)===null||s===void 0||s;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ya("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,s,o,a){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=o,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ra({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Q(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ra(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new z;switch(s.type){case"gapi":const o=s.client;return new X(o,s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Q(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=ma.get(e);s&&(O("ComponentProvider","Removing Datastore"),ma.delete(e),s.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,s,o){this.converter=s,this._key=o,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new va(this.firestore,e,this._key)}}class Va{constructor(e,s,o){this.converter=s,this._query=o,this.type="query",this.firestore=e}withConverter(e){return new Va(this.firestore,e,this._query)}}class Sa extends Va{constructor(e,s,o){super(e,s,un(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new va(this.firestore,null,new dt(e))}withConverter(e){return new Sa(this.firestore,e,this._path)}}function xa(i,e,...s){if(i=getModularInstance(i),arguments.length===1&&(e=st.R()),ga("doc","path",e),i instanceof ba){const o=ht.fromString(e,...s);return pa(o),new va(i,null,new dt(o))}{if(!(i instanceof va||i instanceof Sa))throw new Q(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const o=i._path.child(ht.fromString(e,...s));return pa(o),new va(i.firestore,i instanceof Sa?i.converter:null,new dt(o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new ru(this,"async_queue_retry"),this.jc=()=>{const s=su();s&&O("AsyncQueue","Visibility state changed to "+s.visibilityState),this.xo.bo()};const e=su();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const s=su();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const s=new j;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Nt(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const s=this.$c.then(()=>(this.Kc=!0,e().catch(o=>{this.qc=o,this.Kc=!1;const a=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(o);throw F("INTERNAL UNHANDLED ERROR: ",a),o}).then(o=>(this.Kc=!1,o))));return this.$c=s,s}enqueueAfterDelay(e,s,o){this.Wc(),this.Qc.indexOf(e)>-1&&(s=0);const a=Lu.createAndSchedule(this,e,s,o,c=>this.Jc(c));return this.Uc.push(a),a}Wc(){this.qc&&L()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const s of this.Uc)if(s.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((s,o)=>s.targetTimeMs-o.targetTimeMs);for(const s of this.Uc)if(s.skipDelay(),e!=="all"&&s.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const s=this.Uc.indexOf(e);this.Uc.splice(s,1)}}function Oa(i){return function(e,s){if(typeof e!="object"||e===null)return!1;const o=e;for(const a of s)if(a in o&&typeof o[a]=="function")return!0;return!1}(i,["next","error","complete"])}class Ba extends ba{constructor(e,s,o,a){super(e,s,o,a),this.type="firestore",this._queue=new Ma,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ka(this),this._firestoreClient.terminate()}}function Ua(i,e){const s=typeof i=="object"?i:getApp(),o=typeof i=="string"?i:e||"(default)";return _getProvider(s,"firestore").getImmediate({identifier:o})}function qa(i){return i._firestoreClient||Ka(i),i._firestoreClient.verifyNotTerminated(),i._firestoreClient}function Ka(i){var e;const s=i._freezeSettings(),o=function(a,c,d,h){return new oe(a,c,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,h.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,s);i._firestoreClient=new Jc(i._authCredentials,i._appCheckCredentials,i._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(...e){for(let s=0;s<e.length;++s)if(e[s].length===0)throw new Q(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sh(Xt.fromBase64String(e))}catch(s){throw new Q(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+s)}}static fromUint8Array(e){return new sh(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,s){if(!isFinite(e)||e<-90||e>90)throw new Q(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(s)||s<-180||s>180)throw new Q(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+s);this._lat=e,this._long=s}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return it(this._lat,e._lat)||it(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=/^__.*__$/;class uh{constructor(e,s,o){this.data=e,this.fieldMask=s,this.fieldTransforms=o}toMutation(e,s){return this.fieldMask!==null?new Hn(e,this.data,this.fieldMask,s,this.fieldTransforms):new zn(e,this.data,s,this.fieldTransforms)}}function ah(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class hh{constructor(e,s,o,a,c,d){this.settings=e,this.databaseId=s,this.It=o,this.ignoreUndefinedProperties=a,c===void 0&&this.ea(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var s;const o=(s=this.path)===null||s===void 0?void 0:s.child(e),a=this.sa({path:o,ra:!1});return a.oa(e),a}ua(e){var s;const o=(s=this.path)===null||s===void 0?void 0:s.child(e),a=this.sa({path:o,ra:!1});return a.ea(),a}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Dh(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(s=>e.isPrefixOf(s))!==void 0||this.fieldTransforms.find(s=>e.isPrefixOf(s.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(ah(this.na)&&oh.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class lh{constructor(e,s,o){this.databaseId=e,this.ignoreUndefinedProperties=s,this.It=o||iu(e)}fa(e,s,o,a=!1){return new hh({na:e,methodName:s,la:o,path:ft.emptyPath(),ra:!1,ha:a},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function fh(i){const e=i._freezeSettings(),s=iu(i._databaseId);return new lh(i._databaseId,!!e.ignoreUndefinedProperties,s)}function dh(i,e,s,o,a,c={}){const d=i.fa(c.merge||c.mergeFields?2:0,e,s,a);Ph("Data must be an object, but it was:",d,o);const h=Rh(o,d);let g,_;if(c.merge)g=new Jt(d.fieldMask),_=d.fieldTransforms;else if(c.mergeFields){const b=[];for(const et of c.mergeFields){const ot=vh(e,et,s);if(!d.contains(ot))throw new Q(G.INVALID_ARGUMENT,`Field '${ot}' is specified in your field mask but missing from your input data.`);Ch(b,ot)||b.push(ot)}g=new Jt(b),_=d.fieldTransforms.filter(et=>g.covers(et.field))}else g=null,_=d.fieldTransforms;return new uh(new xe(h),g,_)}function Ah(i,e){if(bh(i=getModularInstance(i)))return Ph("Unsupported field value:",e,i),Rh(i,e);if(i instanceof ih)return function(s,o){if(!ah(o.na))throw o.aa(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.aa(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(s,o){const a=[];let c=0;for(const d of s){let h=Ah(d,o.ca(c));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),c++}return{arrayValue:{values:a}}}(i,e)}return function(s,o){if((s=getModularInstance(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Rn(o.It,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=ut.fromDate(s);return{timestampValue:xs(o.It,a)}}if(s instanceof ut){const a=new ut(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xs(o.It,a)}}if(s instanceof rh)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof sh)return{bytesValue:Ns(o.It,s._byteString)};if(s instanceof va){const a=o.databaseId,c=s.firestore._databaseId;if(!c.isEqual(a))throw o.aa(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Os(s.firestore._databaseId||o.databaseId,s._key.path)}}throw o.aa(`Unsupported field value: ${Ta(s)}`)}(i,e)}function Rh(i,e){const s={};return Kt(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qt(i,(o,a)=>{const c=Ah(a,e.ia(o));c!=null&&(s[o]=c)}),{mapValue:{fields:s}}}function bh(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ut||i instanceof rh||i instanceof sh||i instanceof va||i instanceof ih)}function Ph(i,e,s){if(!bh(s)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(s)){const o=Ta(s);throw o==="an object"?e.aa(i+" a custom object"):e.aa(i+" "+o)}}function vh(i,e,s){if((e=getModularInstance(e))instanceof eh)return e._internalPath;if(typeof e=="string")return Sh(i,e);throw Dh("Field path arguments must be of type string or ",i,!1,void 0,s)}const Vh=new RegExp("[~\\*/\\[\\]]");function Sh(i,e,s){if(e.search(Vh)>=0)throw Dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,s);try{return new eh(...e.split("."))._internalPath}catch{throw Dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,s)}}function Dh(i,e,s,o,a){const c=o&&!o.isEmpty(),d=a!==void 0;let h=`Function ${e}() called with invalid data`;s&&(h+=" (via `toFirestore()`)"),h+=". ";let g="";return(c||d)&&(g+=" (found",c&&(g+=` in field ${o}`),d&&(g+=` in document ${a}`),g+=")"),new Q(G.INVALID_ARGUMENT,h+i+g)}function Ch(i,e){return i.some(s=>s.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,s,o,a,c){this._firestore=e,this._userDataWriter=s,this._key=o,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new va(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const s=this._document.data.field(kh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s)}}}class Nh extends xh{data(){return super.data()}}function kh(i,e){return typeof e=="string"?Sh(i,e):e instanceof eh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,s){this.hasPendingWrites=e,this.fromCache=s}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Oh extends xh{constructor(e,s,o,a,c,d){super(e,s,o,a,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const s=new Fh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(s,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,s={}){if(this._document){const o=this._document.data.field(kh("DocumentSnapshot.get",e));if(o!==null)return this._userDataWriter.convertValue(o,s.serverTimestamps)}}}class Fh extends Oh{data(e={}){return super.data(e)}}class $h{constructor(e,s,o,a){this._firestore=e,this._userDataWriter=s,this._snapshot=a,this.metadata=new Mh(a.hasPendingWrites,a.fromCache),this.query=o}get docs(){const e=[];return this.forEach(s=>e.push(s)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,s){this._snapshot.docs.forEach(o=>{e.call(s,new Fh(this._firestore,this._userDataWriter,o.key,o,new Mh(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const s=!!e.includeMetadataChanges;if(s&&this._snapshot.excludesMetadataChanges)throw new Q(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===s||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>({type:"added",doc:new Fh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Mh(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter),oldIndex:-1,newIndex:c++}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const h=new Fh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Mh(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,_=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),_=c.indexOf(d.doc.key)),{type:Bh(d.type),doc:h,oldIndex:g,newIndex:_}})}}(this,s),this._cachedChangesIncludeMetadataChanges=s),this._cachedChanges}}function Bh(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new Q(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{convertValue(e,s="none"){switch(de(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,s);case 5:return e.stringValue;case 6:return this.convertBytes(ne(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,s);case 10:return this.convertObject(e.mapValue,s);default:throw L()}}convertObject(e,s){const o={};return qt(e.fields,(a,c)=>{o[a]=this.convertValue(c,s)}),o}convertGeoPoint(e){return new rh(ee(e.latitude),ee(e.longitude))}convertArray(e,s){return(e.values||[]).map(o=>this.convertValue(o,s))}convertServerTimestamp(e,s){switch(s){case"previous":const o=ie(e);return o==null?null:this.convertValue(o,s);case"estimate":return this.convertTimestamp(re(e));default:return null}}convertTimestamp(e){const s=te(e);return new ut(s.seconds,s.nanos)}convertDocumentKey(e,s){const o=ht.fromString(e);U(ai(o));const a=new ue(o.get(1),o.get(3)),c=new dt(o.popFirst(5));return a.isEqual(s)||F(`Document ${c} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${s.projectId}/${s.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(i,e,s){let o;return o=i?s&&(s.merge||s.mergeFields)?i.toFirestore(e,s):i.toFirestore(e):e,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(i){i=Ea(i,va);const e=Ea(i.firestore,Ba);return aa(qa(e),i._key).then(s=>vl(e,i,s))}class _l extends cl{constructor(e){super(),this.firestore=e}convertBytes(e){return new sh(e)}convertReference(e){const s=this.convertDocumentKey(e,this.firestore._databaseId);return new va(this.firestore,null,s)}}function Il(i,e,s){i=Ea(i,va);const o=Ea(i.firestore,Ba),a=al(i.converter,e,s);return Pl(o,[dh(fh(o),"setDoc",i._key,a,i.converter!==null,s).toMutation(i._key,Ln.none())])}function Rl(i,...e){var s,o,a;i=getModularInstance(i);let c={includeMetadataChanges:!1},d=0;typeof e[d]!="object"||Oa(e[d])||(c=e[d],d++);const h={includeMetadataChanges:c.includeMetadataChanges};if(Oa(e[d])){const et=e[d];e[d]=(s=et.next)===null||s===void 0?void 0:s.bind(et),e[d+1]=(o=et.error)===null||o===void 0?void 0:o.bind(et),e[d+2]=(a=et.complete)===null||a===void 0?void 0:a.bind(et)}let g,_,b;if(i instanceof va)_=Ea(i.firestore,Ba),b=un(i._key.path),g={next:et=>{e[d]&&e[d](vl(_,i,et))},error:e[d+1],complete:e[d+2]};else{const et=Ea(i,Va);_=Ea(et.firestore,Ba),b=et._query;const ot=new _l(_);g={next:gt=>{e[d]&&e[d](new $h(_,ot,et,gt))},error:e[d+1],complete:e[d+2]},Uh(i._query)}return function(et,ot,gt,_t){const $t=new jc(_t),St=new Xu(ot,$t,gt);return et.asyncQueue.enqueueAndForget(async()=>Wu(await ra(et),St)),()=>{$t.Rc(),et.asyncQueue.enqueueAndForget(async()=>zu(await ra(et),St))}}(qa(_),b,h,g)}function Pl(i,e){return function(s,o){const a=new j;return s.asyncQueue.enqueueAndForget(async()=>fc(await ia(s),o,a)),a.promise}(qa(i),e)}function vl(i,e,s){const o=s.docs.get(e._key),a=new _l(i);return new Oh(i,a,e._key,o,new Mh(s.hasPendingWrites,s.fromCache),e.converter)}(function(i,e=!0){(function(s){x=s})(SDK_VERSION),_registerComponent(new Component("firestore",(s,{instanceIdentifier:o,options:a})=>{const c=s.getProvider("app").getImmediate(),d=new Ba(new J(s.getProvider("auth-internal")),new tt(s.getProvider("app-check-internal")),function(h,g){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ue(h.options.projectId,g)}(c,o),c);return a=Object.assign({useFetchStreams:e},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),registerVersion(D,"3.4.15",i),registerVersion(D,"3.4.15","esm2017")})();const firebaseConfig={apiKey:"AIzaSyCgbcjS1ozcgkj9gS1kWTqzPeE9iKV2NN4",authDomain:"patudo-v1.firebaseapp.com",projectId:"patudo-v1",storageBucket:"patudo-v1.appspot.com",messagingSenderId:"345146444552",appId:"1:345146444552:web:cef7140cf37444e5e6fabd",measurementId:"G-3DMXW83594"},app=firebase.initializeApp(firebaseConfig),auth=app.auth(),db=Ua(app),AuthContext=react.exports.createContext();function useAuth(){return react.exports.useContext(AuthContext)}function AuthProvider({children:i}){const[e,s]=react.exports.useState(!0),[o,a]=react.exports.useState();function c(_,b){return auth.createUserWithEmailAndPassword(_,b)}function d(_,b){return auth.signInWithEmailAndPassword(_,b)}function h(){return auth.signOut()}react.exports.useEffect(()=>auth.onAuthStateChanged(b=>{a(b),s(!1)}),[]);const g={currentUser:o,signup:c,login:d,logout:h};return jsx(AuthContext.Provider,{value:g,children:!e&&i})}function SignoutButton({setPopup:i}){const[e,s]=react.exports.useState(""),{currentUser:o,logout:a}=useAuth(),c=useNavigate();async function d(){s("");try{await a(),c("/Patudo-v0/home"),i(!1)}catch{s("Failed to logout")}}return jsx(Fragment,{children:o&&jsx("button",{className:"",onClick:d,children:"Sign out"})})}function SignInOut({setPopup:i}){const e=useNavigate(),{currentUser:s}=useAuth();return jsx("div",{children:s?jsx(SignoutButton,{setPopup:i}):jsx("button",{className:"btn-one",onClick:()=>{e("/Patudo-v0/login-register"),i(!1)},children:"Sign in"})})}function MenuContents({setPopup:i,BGProps:{appBGState:e,setAppBGState:s}}){react.exports.useState(!1);const o=useNavigate();return jsxs("div",{className:"flex-column menu-content",children:[jsx("h2",{className:`menu-title ${e===1?"menu-logo--party-mode":void 0}`,children:"Menu"}),jsx("button",{onClick:()=>{o("/Patudo-v0/home"),i(!1)},children:"Home"}),jsx("br",{}),jsx("button",{onClick:()=>{o("/Patudo-v0/find-game"),i(!1)},children:"Play Patudo!"}),jsx("br",{}),jsx(SignInOut,{setPopup:i}),jsx("br",{}),jsx("div",{className:e===1?"menu-btn--party-mode--on-holder":void 0,children:jsxs("button",{onClick:()=>{//!!!temporarily disabled, Minified React error #130
s(e===0?1:0)},className:"flex-row",children:["Party mode:",jsx("div",{children:"\xA0"})," ",jsx("div",{className:`${e===1?"menu-btn--party-mode--on2":void 0}`,children:jsx("p",{className:`flex-row menu-btn--party-mode ${e===1?"menu-btn--party-mode--on1":void 0}`,children:e?"On":"Off"})})]})}),"warning -  sound!",jsx("br",{}),jsx("br",{})]})}function MenuBtn({BGProps:i}){const[e,s]=react.exports.useState(!1);return jsxs(Fragment,{children:[jsx("div",{className:"menu-holder",children:jsx("img",{className:"menu-btn",src:startButton_black,onClick:()=>{s(!0)}})}),e&&jsx(Popup,{setPopup:s,color:"7",children:jsx(MenuContents,{setPopup:s,BGProps:i})})]})}function PatudoLogo({switchColor:i,appBGState:e}){return jsx("div",{className:`patudo-logo patudo-logo-${e}`,onClick:i,children:"PATUDO"})}function Navbar({BGProps:i}){const{colorState:e,switchColor:s}=useColorSwitcher();return jsxs("div",{className:"navbar-holder",children:[jsxs("nav",{className:`navbar ${e&&`color${e}`}`,children:[jsx(PatudoLogo,{switchColor:s,appBGState:i.appBGState}),jsx(MenuBtn,{BGProps:i})]}),jsx("div",{className:`navbar-edge1 ${e&&`color${e}-st`}`}),jsx("div",{className:`navbar-edge2 ${e&&`color${e}-st2`}`}),jsx("div",{className:`navbar-edge3 ${e&&`color${e}-st3`}`})]})}function PAGE_Home(){return jsxs("div",{className:"home-placeholder flex-column take-up-whole-space",children:["Welcome!",jsx("br",{}),jsx("br",{}),"For the best experience, please view on a mobile device.",jsx("br",{}),jsx("br",{}),'To play a game of Patudo, click "Play Patudo!"in the menu, which can be accessed in the top right corner of the screen.',jsx("br",{}),jsx("br",{}),"Currently you will have to create an account to play, however a made up, non-existant email address will work.",jsx("br",{}),jsx("br",{}),"If you are by yourself, create another account and join your own game.  It's possible to start a game as a single player, but it's not very fun.",jsx("br",{}),jsx("br",{}),"Thank you for playing!"]})}function Login(){const i=react.exports.useRef(),e=react.exports.useRef(),[s,o]=react.exports.useState(""),[a,c]=react.exports.useState(!1),d=useNavigate(),{login:h}=useAuth();async function g(_){_.preventDefault();try{o(""),c(!0),await h(i.current.value,e.current.value),d("/Patudo-v0/find-game")}catch{o("Failed to sign in")}c(!1)}return jsxs("div",{className:"login-holder flex-column",children:[jsx("p",{className:"padding-l",children:"Log In"}),jsxs("form",{className:"flex-column",id:"login-form",onSubmit:g,children:[jsx("p",{className:"padding-s",children:"email"}),jsx("input",{type:"email",id:"login-email",ref:i,required:!0}),jsx("p",{className:"padding-s",children:"password"}),jsx("input",{type:"password",id:"login-password",ref:e,required:!0}),jsx("button",{disabled:a,type:"submit",children:"Log in"})]})]})}function Register(){const i=react.exports.useRef(),e=react.exports.useRef(),s=react.exports.useRef(),[o,a]=react.exports.useState(""),[c,d]=react.exports.useState(!1),h=useNavigate(),{signup:g}=useAuth();async function _(b){if(b.preventDefault(),e.current.value!==s.current.value)return a("Passwords do not match");try{a(""),d(!0),await g(i.current.value,e.current.value),h("/Patudo-v0/find-game")}catch{a("Failed to create an account")}d(!1)}return jsxs("div",{className:"register-holder flex-column",children:[jsx("p",{className:"padding-l",children:"Sign Up"}),jsxs("form",{className:"flex-column",id:"register-form",onSubmit:_,children:[jsx("p",{className:"padding-s",children:"email"}),jsx("input",{type:"email",id:"register-email",ref:i,required:!0}),jsx("p",{className:"padding-s",children:"password"}),jsx("input",{type:"password",id:"register-password1",ref:e,required:!0}),jsx("p",{className:"padding-s",children:"repeat password"}),jsx("input",{type:"password",id:"register-password2",ref:s,required:!0}),jsx("button",{disabled:c,type:"submit",children:"Sign Up"})]})]})}function PAGE_LoginRegister(){return jsx("section",{className:"page-login-register centre-single-item take-up-whole-space",children:jsx("div",{className:"flex-column login-register-holder",children:jsxs("div",{className:"flex-column",children:[jsx(Login,{}),jsx(Register,{})]})})})}function PrivateRoute({children:i}){const{currentUser:e}=useAuth();return e?i:jsx(Navigate,{to:"/Patudo-v0/login-register"})}const utilMakeLobbyCode=()=>{const i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let e="";for(let s=0;s<4;s++)e+=i.charAt(Math.floor(Math.random()*i.length));return e},utilShuffleArray=i=>{let e=i.length;for(;e!==0;){let s=Math.floor(Math.random()*e);e-=1;let o=i[e];i[e]=i[s],i[s]=o}return i},handleMakeLobby=async(i,e,s,o)=>{i.preventDefault();try{const a=utilMakeLobbyCode(),c={createdAt:new Date,admin:e,players:[{uid:e,nickname:s}],hasStarted:!1},d=await Il(xa(db,"lobbies",a),c);o(`/Patudo-v0/lobby/${a}`)}catch(a){console.error("ERROR-handleMakeLobby",a)}},autoSubscribeToLobby=async(i,e,s)=>{try{if((await dl(xa(db,"lobbies",i))).data().players.some(c=>c.uid===e)){const c=Rl(xa(db,"lobbies",i),d=>{const h=Object.assign({},d.data());s(h)})}}catch(o){console.error("ERROR-autoSubscribeToLobby",o)}},handleJoinLobby=async(i,e,s,o,a)=>{i.preventDefault();try{const d=(await dl(xa(db,"lobbies",e))).data();d.players.length<7&&!d.players.some(h=>h.uid===s)&&(d.players.push({uid:s,nickname:o}),await Il(xa(db,"lobbies",e),d)),a(`/Patudo-v0/lobby/${e}`)}catch(c){console.error("ERROR-handleJoinLobby",c)}},handleCreateGame=async(i,e,s)=>{i.preventDefault();try{const o={};o.text=[{type:"round",text:[{style:"bold",text:"Round 1:"},{style:"normal",text:`${e.players.length*5} dice remaining`}]}],o.createdAt=new Date,o.round=1,o.moveNumber=0,o.currentPlayer=0,o.currentBet="1,0",o.isPacifico=!1,o.isOver=!1,o.admin=e.admin,o.losers=[],o.players=utilShuffleArray(e.players.map(a=>({uid:a.uid,nickname:a.nickname,numberOfDice:5}))),o.players.forEach(a=>{const c={};c.gameCode=s,c.cup=[];for(let d=0;d<5;d++)c.cup.push(Math.floor(Math.random()*6)+1);Il(xa(db,"private",`${s}-${a.uid}`),c)}),Il(xa(db,"games",s),o),await Il(xa(db,"lobbies",s),{gameHasStarted:!0},{merge:!0})}catch(o){console.error("ERROR-handleCreateGame",o)}},autoSubscribeToGame=async(i,e,s)=>{try{if((await dl(xa(db,"games",i))).exists()){const a=Rl(xa(db,"games",i),c=>{const d=Object.assign({},c.data());s(d)})}}catch(o){console.error("ERROR-autoSubscribeToGame",o)}},autoSubscribeToPrivate=async(i,e,s)=>{try{const o=await Rl(xa(db,"private",`${i}-${e}`),a=>{s(a.data().cup)})}catch(o){console.error("ERROR-autoSubscribeToPrivate",o)}},apiPUTMove=async(i,e,s,o)=>{i.preventDefault();try{const{moveNumber:a,moveType:c,betValue:d}=o,h=await e.getIdToken(!0),g=await fetch("https://patudo-v0-backend-vkyykriwka-ew.a.run.app/tester",{method:"PUT",body:JSON.stringify({gameCode:s,moveNumber:a,moveType:c,betValue:d}),headers:new Headers({"Content-Type":"application/json",patauthtoken:h,patauthuid:e.uid})})}catch(a){console.error("ERROR-apiPUTMove",a)}};function JoinLobby({nickname:i}){const e=useNavigate(),{currentUser:s}=useAuth(),[o,a]=react.exports.useState(""),c=d=>{/^[a-zA-Z0-9]*$/.test(d.target.value)&&a(d.target.value.toUpperCase())};return jsxs("div",{className:"flex-column join-lobby-holder",children:[jsx("input",{id:"join-lobby__input input-one",className:"join-lobby__input",type:"text",maxLength:4,value:o,onChange:d=>c(d)}),jsx("button",{className:"btn-one",onClick:d=>{handleJoinLobby(d,o,s.uid,i,e)},children:"Join lobby"})]})}function MakeLobby({nickname:i}){const e=useNavigate(),{currentUser:s}=useAuth();return jsx("div",{className:"flex-column make-lobby-holder",children:jsx("button",{id:"make-lobby__button",className:"create-lobby-btn",onClick:o=>{handleMakeLobby(o,s.uid,i,e)},children:"Create lobby"})})}react.exports.createContext();const ContextGame=react.exports.createContext();function Nickname({props:{nickname:i,setNickname:e}}){const s=o=>{/^[a-z0-9]{0,13}$/i.test(o.target.value)&&e(o.target.value)};return jsxs("div",{className:"nickname flex-column",children:[jsx("label",{className:"padding-m",htmlFor:"nickname__input",children:"Pick a nickname"}),jsx("input",{id:"nickname__input",className:"nickname__input",type:"text",value:i,maxLength:7,onChange:o=>s(o)})]})}function HowToPlay(){return jsxs("div",{className:"padding-sides-s how-to-play",children:[jsxs("p",{children:[jsx("br",{}),"Patudo is a variant of ",jsx("a",{href:"https://en.wikipedia.org/wiki/Liar%27s_dice",target:"_blank",rel:"noopener noreferrer",children:"Liar's Dice"})]}),jsx("br",{}),jsxs("p",{children:["Each player starts with 5 dice in a cup. The goal is to be the last player with dice in the cup.",jsx("br",{}),jsx("br",{}),"At the start of a round everyone rolls their dice. You are allowed to only see your own dice.",jsx("br",{}),jsx("br",{}),"At the start of the round the first player has to place a bet. You are bettiing on the number of dice (under all the cups!) that have a certain number on them (face value).",jsx("br",{}),jsx("br",{}),`For example, betting "Two 3's" means that you are betting that there are`," ",jsx("u",{children:"AT LEAST"})," two dice with a 3 on them.",jsx("br",{}),jsx("br",{}),"The player then has two options; placing another (higher) bet or calling the previous bet a lie (BS).",jsx("br",{}),jsx("br",{}),"If the player calls BS, then everyone reveals their dice to each other and the bet is checked. In this case the number of dice with a value of 3 is counted. If there are two or more dice with a value of 3, the bet was valid, and the player who called BS loses a dice. If there were fewer than two dice with a value of 3, the bet was invalid, and the player who made the bet loses a dice. The next round the starts with the player who lost a dice starting.",jsx("br",{}),jsx("br",{}),"If the second player wishes to place another bet instead of call BS, the bet must be of a higher value. This means that the new bet must EITHER have the same number of dice but with a higher face value, OR it can be a higher number of dice with any face value.",jsx("br",{}),jsx("br",{}),`For example if the first player bets "Two 3's", the second player can bet "Two 4's", "Two 5's", "Two 6's", or "Three/Four/Five.... of any value". The second player cannot bet "Two 2's" or "One 6", for example.`,jsx("br",{}),jsx("br",{}),"Cabbages:",jsx("br",{}),`At any time after the first bet is made, a player who has not just made a bet or who's turn it is to call BS, may call "Cabbages". If this happens all players reveal their dice. If there are `,jsx("u",{children:"EXACTLY"})," the number of dice that were bet on, the player who called cabbages"," ",jsx("u",{children:"GAINS"})," a dice. If the the number was not exact, the player who called cabbages loses a dice. The next round starts with the player who called cabbages.",jsx("br",{}),jsx("br",{}),"Pacifico:",jsx("br",{}),`When a player loses a dice and only has one dice remaining, the next round is a "Pacifico" round. During this round every bet made has to use the face value of the first bet made that round. For example, if the starting player bets "One 6", the next player could only bet "Two 6's", "Three 6's" etc. After this round the pacifico rule is removed and the game continues as normal (unless another player goes down to one dice during that round).`,jsx("br",{}),jsx("br",{}),"NOTE:",jsx("br",{}),"Whilst trying to peek at other players dice is not allowed and frowned upon, sarcasm and competetive banter is encouraged.",jsx("br",{}),jsx("br",{}),"NOTE NOTE:",jsx("br",{}),"If you have played another variant of Liar's Dice, you may notice that the rules are slightly different. The main differences between Patudo and 'the other popular variant' are:",jsxs("ul",{className:"rules-list",children:[jsx("li",{children:"Dice with face value of one aren't special"}),jsx("li",{children:"Pacifico can happen multiple times for each player, whenever they go down to one dice"}),jsx("li",{children:"The singular and plural of dice is dice. Die just reads weirdly."})]}),jsx("br",{})]})]})}function PAGE_FindGame(){const[i,e]=react.exports.useState(""),[s,o]=react.exports.useState(!1);return jsx(PrivateRoute,{children:jsxs("section",{className:"page-find-game centre-single-item take-up-whole-space flex-column",children:[jsx("form",{className:"find-game-holder flex-row",children:jsxs("div",{children:[jsx("div",{className:"flex-row nickname-holder",children:jsx(Nickname,{props:{nickname:i,setNickname:e}})}),jsxs("div",{className:"create-join-holder flex-row",children:[jsx(MakeLobby,{nickname:i}),jsx("p",{className:"find-game__or flex-row ",children:"Or"}),jsx(JoinLobby,{nickname:i})]})]})}),jsx("div",{className:"float1 color2",children:jsx("button",{className:"padding-l",onClick:()=>{o(!0)},children:"How to play"})}),s&&jsx(Popup,{setPopup:o,color:"5",children:jsx(HowToPlay,{})})]})})}function PlayerList({players:i,admin:e}){return jsx("ul",{className:"lobby__player-list",children:i.map((s,o)=>jsxs("div",{children:[jsx("li",{className:"lobby__players-list__item",children:`${s.nickname} ${s.uid===e?"(host)":""}`},s.uid),jsx("br",{})]},o))})}function StartGameButton({props:i}){const{lobbyState:e,lobbyCode:s}=i;return jsx("button",{onClick:o=>{handleCreateGame(o,e,s)},children:"Start game"})}const lobbyObjSHAPE={lobbyCode:"",createdAt:new Date(0),admin:"",players:[],gameHasStarted:!1};function PAGE_Lobby(){const i=useNavigate(),{currentUser:e}=useAuth(),{lobbyCode:s}=useParams(),[o,a]=react.exports.useState(lobbyObjSHAPE);return react.exports.useEffect(()=>{autoSubscribeToLobby(s,e.uid,a)},[]),react.exports.useEffect(()=>{o.gameHasStarted&&i(`/Patudo-v0/game/${s}`)},[o.gameHasStarted]),jsx(PrivateRoute,{children:jsx("section",{className:"page-lobby take-up-whole-space centre-single-item flex-column",children:jsxs("div",{className:"lobby-holder flex-column",children:[jsx("br",{}),jsxs("p",{className:"padding-m",children:["Lobby code: ",jsx("u",{children:s})]}),jsx("br",{}),jsx("br",{}),jsx("p",{className:"padding-m",children:"Players:"}),jsx("br",{}),jsx(PlayerList,{players:o.players,admin:o.admin}),jsx("br",{}),jsx("br",{}),e.uid===o.admin&&jsx(StartGameButton,{props:{lobbyState:o,lobbyCode:s}}),jsx("br",{})]})})})}function InfoArea(){const{gameState:i}=react.exports.useContext(ContextGame);return jsx("div",{className:"info-area-holder flex-column",children:jsxs("div",{className:"info-area flex-column",children:[jsxs("div",{className:"info-area__round",children:["Round: ",i.round]}),jsx("div",{className:"info-area__text-holder",children:i.text.map(e=>jsx(Fragment,{children:jsx("div",{className:"info-area__text-line",children:e.type==="gameOver"?jsx("p",{className:"ia-text-frag ia-winner",children:e.text[0].text}):e.text.map(s=>jsx("p",{className:`ia-text-frag ia-${s.style}`,children:s.text}))})})).reverse()})]})})}const avatar="/Patudo-v0/assets/avatar.1dc0bb32.png",king_white="/Patudo-v0/assets/king-white.004b28e8.png",dice_q_white="/Patudo-v0/assets/dice-q-white.a73f44da.png";function Opponent({props:{player:i,isCurrent:e,isOver:s}}){//!!!put loader here
return s===null?jsx(Fragment,{}):jsxs("div",{className:`opponent-holder ${e?"current-border":""} flex-column`,children:[jsx("img",{className:"opponent__avatar flex-column",src:s?king_white:avatar}),jsx("div",{className:"opponent__nickname",children:i.nickname}),jsx("div",{className:"opponent__dice-holder",children:Array.from(Array(i.numberOfDice)).map((o,a)=>jsx("img",{className:"opponent__dice--q",src:dice_q_white},a))})]})}const king_white_no_crown="/Patudo-v0/assets/king-white-no-crown.8be6b6c6.png",king_crown="/Patudo-v0/assets/king-crown.f6535750.png";function TableArea(){const{gameState:i}=react.exports.useContext(ContextGame),{currentUser:e}=useAuth(),s=e.uid,o=i.players,a=o.findIndex(g=>g.uid===s),c=o.slice(a+1),d=o.slice(0,a),h=c.concat(d);return jsx("div",{className:"table-area-holder flex-column",children:jsx("div",{className:"table-area flex-row",children:i.isOver===null?jsx(Fragment,{}):i.isOver&&i.players[0].uid===s?jsxs(Fragment,{children:[jsx("img",{src:king_crown,alt:"crown",className:"winner-crown"}),jsx("img",{src:king_white_no_crown,alt:"winner",className:"winner-king"})]}):i.players.some(g=>g.uid===s)?h.map((g,_)=>{var b;return jsx(Opponent,{props:{player:g,isCurrent:((b=i.players[i.currentPlayer])==null?void 0:b.uid)===g.uid,isOver:i.isOver}},g.uid)}):i.players.map((g,_)=>{var b;return jsx(Opponent,{props:{player:g,isCurrent:((b=i.players[i.currentPlayer])==null?void 0:b.uid)===g.uid,isOver:i.isOver}},g.uid)})})})}const dice1_white="/Patudo-v0/assets/dice-full-white-1.8a47ba88.png",dice2_white="/Patudo-v0/assets/dice-full-white-2.3a78bd44.png",dice3_white="/Patudo-v0/assets/dice-full-white-3.0fa99d11.png",dice4_white="/Patudo-v0/assets/dice-full-white-4.9f93b712.png",dice5_white="/Patudo-v0/assets/dice-full-white-5.25a6a941.png",dice6_white="/Patudo-v0/assets/dice-full-white-6.a043e153.png",dice1_black="/Patudo-v0/assets/dice-full-black-1.39287507.png",dice2_black="/Patudo-v0/assets/dice-full-black-2.69adce17.png",dice3_black="/Patudo-v0/assets/dice-full-black-3.cbae40b5.png",dice4_black="/Patudo-v0/assets/dice-full-black-4.d190cf20.png",dice5_black="/Patudo-v0/assets/dice-full-black-5.c6f1864d.png",dice6_black="/Patudo-v0/assets/dice-full-black-6.42fb3095.png",imgDic_white$1={1:dice1_white,2:dice2_white,3:dice3_white,4:dice4_white,5:dice5_white,6:dice6_white},imgDic_black$1={1:dice1_black,2:dice2_black,3:dice3_black,4:dice4_black,5:dice5_black,6:dice6_black};function OwnDice({props:{faceValue:i,isWhite:e}}){return jsx("img",{className:"own-dice",src:e?imgDic_white$1[i]:imgDic_black$1[i],alt:i})}function OwnCupArea(){const{privateState:i}=react.exports.useContext(ContextGame),[e,s]=react.exports.useState(i.map(()=>!1));return jsx("div",{className:"own-cup-area-holder flex-row",children:jsx("div",{className:"own-cup-area flex-row",onClick:()=>{s(i.map(()=>Math.random()<.5))},children:i.map((a,c)=>jsx(OwnDice,{props:{faceValue:a,isWhite:e[c]}},c))})})}const upArrowBlack="/Patudo-v0/assets/up-arrow-black.4fc450e4.png",downArrowBlack="/Patudo-v0/assets/down-arrow-black.e29a6d85.png",upArrowWhite="/Patudo-v0/assets/up-arrow-white.ac8fec6a.png",downArrowWhite="/Patudo-v0/assets/down-arrow-white.e1b81014.png",imgDic_white={1:dice1_white,2:dice2_white,3:dice3_white,4:dice4_white,5:dice5_white,6:dice6_white},imgDic_black={1:dice1_black,2:dice2_black,3:dice3_black,4:dice4_black,5:dice5_black,6:dice6_black};//!!!refactor to use state for each up/down arrow, and use betvalue instead of nod/fv
function Bet({isValid:i}){const{gameState:e}=react.exports.useContext(ContextGame),{gameCode:s}=useParams(),{currentUser:o}=useAuth(),[a,c]=react.exports.useState({}),[d,h]=react.exports.useState(!1),g=e.players.reduce((Bt,Mt)=>Bt+Mt.numberOfDice,0),_=()=>{h(!d)};let[b,et]=e.currentBet.split(",");b=Number(b),et=Number(et);const ot=6*(b-1)+et,[gt,_t]=react.exports.useState(1),[$t,St]=react.exports.useState(1);react.exports.useEffect(()=>{e.isPacifico&&e.moveNumber>0?(_t(et),St(b<g?b+1:b)):(_t(et<6?et+1:b<g?1:6),St(et<6?b:b<g?b+1:g))},[e]);const mt=()=>{e.isPacifico&&$t===g||i&&($t<g?St($t+1):_t(6))},pt=()=>{i&&(e.isPacifico&&e.moveNumber>0?$t>1+b&&St($t-1):ot+1<=6*($t-1)+gt-6?St($t-1):(_t((ot+1)%6),St(Math.floor(ot/6)+1)))},yt=()=>{e.isPacifico&&e.moveNumber>0||i&&(gt<6?_t(gt+1):$t<g&&(_t(1),St($t+1)))},wt=()=>{e.isPacifico&&e.moveNumber>0||i&&6*($t-1)+gt>ot+1&&(gt>1?_t(gt-1):(_t(6),St($t-1)))},[It,Ct]=react.exports.useState(!1),[kt,Ot]=react.exports.useState(!1);return react.exports.useEffect(()=>{Ct($t===g&&gt===6)},[gt,$t,g]),react.exports.useEffect(()=>{Ot(ot+1===6*($t-1)+gt)},[gt,$t]),react.exports.useEffect(()=>{c({moveNumber:e.moveNumber+1,moveType:"bet",betValue:`${$t},${gt}`})},[$t,gt]),jsxs("div",{className:"bet-holder flex-row",children:[jsxs("div",{className:"flex-column",children:[jsx("img",{disabled:!i,src:upArrowWhite,className:`bet__arrow ${It||!i?"opacity-50":""} ${i?"":"opacity-50"}`,onClick:mt}),jsx("div",{className:"bet__number-of-dice-holder flex-row",children:jsxs("p",{className:`bet__number-of-dice ${i?"":"opacity-50"}`,children:[`${$t}`," X"]})}),jsx("img",{disabled:!i,src:downArrowWhite,className:`bet__arrow ${kt||!i||e.isPacifico&&$t===1+b?"opacity-50":""}`,onClick:pt})]}),jsxs("div",{className:"flex-column",children:[jsx("img",{disabled:!i,src:upArrowBlack,className:`bet__arrow ${It||!i||e.isPacifico&&e.moveNumber>0?"opacity-50":""}`,onClick:yt}),jsx("img",{src:d?imgDic_white[gt]:imgDic_black[gt],className:`bet__dice ${i?"":"opacity-50"}`,onClick:_}),jsx("img",{disabled:!i,src:downArrowBlack,className:`bet__arrow ${kt||!i||e.isPacifico&&e.moveNumber>0?"opacity-50":""} ${i?"":"opacity-50"}`,onClick:wt})]}),jsx("button",{disabled:!i,className:`${i?"":"faded-text"}`,onClick:Bt=>{i&&apiPUTMove(Bt,o,s,a)},children:"Bet"})]})}function BS({isValid:i}){const{gameState:e}=react.exports.useContext(ContextGame),{gameCode:s}=useParams(),{currentUser:o}=useAuth();return jsx("div",{className:"bs-holder flex-column",children:jsx("button",{onClick:a=>{apiPUTMove(a,o,s,{moveNumber:e.moveNumber+1,moveType:"bs"})},disabled:!i,className:`${i?"":"faded-text"}`,children:"BS"})})}function Cabbages({isValid:i}){const{gameState:e}=react.exports.useContext(ContextGame),{gameCode:s}=useParams(),{currentUser:o}=useAuth();return jsx("div",{className:"cabbages-holder flex-column",children:jsx("button",{onClick:a=>{apiPUTMove(a,o,s,{moveNumber:e.moveNumber+1,moveType:"cabbages"})},disabled:!i,className:`${i?"":"faded-text"}`,children:"Cbgs"})})}const findValidMoves=(i,e)=>{var _;const{moveNumber:s,currentPlayer:o,players:a,currentBet:c}=i,[d,h]=c.split(","),g=i.players.reduce((b,et)=>b+et.numberOfDice,0);return{bet:Number(d)<g&&((_=a[o])==null?void 0:_.uid)===e,bs:s!==0&&(a[o].uid===e||a[(o+a.length-1)%a.length].uid!==e),cabbages:s!==0&&a[o].uid!==e&&a[(o+a.length-1)%a.length].uid!==e}};function DecisionArea(){var o;const{gameState:i}=react.exports.useContext(ContextGame),{currentUser:e}=useAuth(),s=findValidMoves(i,e.uid);return jsx("div",{className:"decision-area-holder flex-row",children:jsx("div",{className:`decision-area flex-row ${((o=i.players[i.currentPlayer])==null?void 0:o.uid)===e.uid?"current-border":""}`,children:i.isOver?jsx("div",{className:"winner-avatar-message flex-column",children:"Victory!"}):jsxs(Fragment,{children:[jsx(Bet,{isValid:s.bet}),jsxs("div",{className:"bs-cabbages-holder flex-column",children:[jsx(BS,{isValid:s.bs}),jsx(Cabbages,{isValid:s.cabbages})]})]})})})}function LoserArea(){return jsx("div",{className:"loser-area-holder flex-column",children:jsx("div",{className:"loser-area",children:"Loser area"})})}const mockGameState={admin:"",currentBet:"1,0",createdAt:"",currentPlayer:0,isOver:null,isPacifico:!1,losers:[{nickname:"",uid:"",numberOfDice:0}],players:[{nickname:"",uid:"",numberOfDice:0}],round:0,text:[],moveNumber:0};function PAGE_Game(){const{currentUser:i}=useAuth(),{gameCode:e}=useParams(),[s,o]=react.exports.useState(mockGameState),[a,c]=react.exports.useState([]);return react.exports.useEffect(()=>{autoSubscribeToGame(e,i.uid,o)},[]),react.exports.useEffect(()=>{autoSubscribeToPrivate(e,i.uid,c)},[]),jsx(PrivateRoute,{children:jsx(ContextGame.Provider,{value:{gameState:s,privateState:a},children:jsxs("div",{className:"take-up-whole-space",children:[jsx(InfoArea,{}),jsx(TableArea,{}),s.players.some(d=>d.uid===i.uid)?jsxs(Fragment,{children:[jsx(OwnCupArea,{}),jsx(DecisionArea,{})]}):jsx(LoserArea,{})]})})})}var propTypes={exports:{}},ReactPropTypesSecret_1,hasRequiredReactPropTypesSecret;function requireReactPropTypesSecret(){if(hasRequiredReactPropTypesSecret)return ReactPropTypesSecret_1;hasRequiredReactPropTypesSecret=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ReactPropTypesSecret_1=i,ReactPropTypesSecret_1}var factoryWithThrowingShims,hasRequiredFactoryWithThrowingShims;function requireFactoryWithThrowingShims(){if(hasRequiredFactoryWithThrowingShims)return factoryWithThrowingShims;hasRequiredFactoryWithThrowingShims=1;var i=requireReactPropTypesSecret();function e(){}function s(){}return s.resetWarningCache=e,factoryWithThrowingShims=function(){function o(d,h,g,_,b,et){if(et!==i){var ot=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ot.name="Invariant Violation",ot}}o.isRequired=o;function a(){return o}var c={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:a,element:o,elementType:o,instanceOf:a,node:o,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:e};return c.PropTypes=c,c},factoryWithThrowingShims}var hasRequiredPropTypes;function requirePropTypes(){return hasRequiredPropTypes||(hasRequiredPropTypes=1,propTypes.exports=requireFactoryWithThrowingShims()()),propTypes.exports}var bundle=function(i){var e={};function s(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return i[o].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=i,s.c=e,s.d=function(o,a,c){s.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:c})},s.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,a){if(1&a&&(o=s(o)),8&a||4&a&&typeof o=="object"&&o&&o.__esModule)return o;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),2&a&&typeof o!="string")for(var d in o)s.d(c,d,function(h){return o[h]}.bind(null,d));return c},s.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return s.d(a,"a",a),a},s.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},s.p="",s(s.s=2)}([function(i,e){i.exports=requirePropTypes()},function(i,e){i.exports=react.exports},function(module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(i){return(_typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(i)}function _extends(){return(_extends=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(i[o]=s[o])}return i}).apply(this,arguments)}function _classCallCheck(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function _createClass(i,e,s){return e&&_defineProperties(i.prototype,e),s&&_defineProperties(i,s),i}function _inherits(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),e&&_setPrototypeOf(i,e)}function _setPrototypeOf(i,e){return(_setPrototypeOf=Object.setPrototypeOf||function(s,o){return s.__proto__=o,s})(i,e)}function _createSuper(i){return function(){var e,s=_getPrototypeOf(i);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(i,e){return!e||_typeof(e)!=="object"&&typeof e!="function"?_assertThisInitialized(i):e}function _assertThisInitialized(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function _isNativeReflectConstruct(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function _getPrototypeOf(i){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(i)}function _defineProperty(i,e,s){return e in i?Object.defineProperty(i,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[e]=s,i}enterModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module),typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var i;_classCallCheck(this,ReactAudioPlayer);for(var e=arguments.length,s=new Array(e),o=0;o<e;o++)s[o]=arguments[o];return _defineProperty(_assertThisInitialized(i=_super.call.apply(_super,[this].concat(s))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(i),"listenTracker",void 0),_defineProperty(_assertThisInitialized(i),"onError",function(a){var c,d;return(c=(d=i.props).onError)===null||c===void 0?void 0:c.call(d,a)}),_defineProperty(_assertThisInitialized(i),"onCanPlay",function(a){var c,d;return(c=(d=i.props).onCanPlay)===null||c===void 0?void 0:c.call(d,a)}),_defineProperty(_assertThisInitialized(i),"onCanPlayThrough",function(a){var c,d;return(c=(d=i.props).onCanPlayThrough)===null||c===void 0?void 0:c.call(d,a)}),_defineProperty(_assertThisInitialized(i),"onPlay",function(a){var c,d;i.setListenTrack(),(c=(d=i.props).onPlay)===null||c===void 0||c.call(d,a)}),_defineProperty(_assertThisInitialized(i),"onAbort",function(a){var c,d;i.clearListenTrack(),(c=(d=i.props).onAbort)===null||c===void 0||c.call(d,a)}),_defineProperty(_assertThisInitialized(i),"onEnded",function(a){var c,d;i.clearListenTrack(),(c=(d=i.props).onEnded)===null||c===void 0||c.call(d,a)}),_defineProperty(_assertThisInitialized(i),"onPause",function(a){var c,d;i.clearListenTrack(),(c=(d=i.props).onPause)===null||c===void 0||c.call(d,a)}),_defineProperty(_assertThisInitialized(i),"onSeeked",function(a){var c,d;(c=(d=i.props).onSeeked)===null||c===void 0||c.call(d,a)}),_defineProperty(_assertThisInitialized(i),"onLoadedMetadata",function(a){var c,d;(c=(d=i.props).onLoadedMetadata)===null||c===void 0||c.call(d,a)}),_defineProperty(_assertThisInitialized(i),"onVolumeChanged",function(a){var c,d;(c=(d=i.props).onVolumeChanged)===null||c===void 0||c.call(d,a)}),i}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var i=this.audioEl.current;i&&(this.updateVolume(this.props.volume),i.addEventListener("error",this.onError),i.addEventListener("canplay",this.onCanPlay),i.addEventListener("canplaythrough",this.onCanPlayThrough),i.addEventListener("play",this.onPlay),i.addEventListener("abort",this.onAbort),i.addEventListener("ended",this.onEnded),i.addEventListener("pause",this.onPause),i.addEventListener("seeked",this.onSeeked),i.addEventListener("loadedmetadata",this.onLoadedMetadata),i.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var i=this.audioEl.current;i&&(i.removeEventListener("error",this.onError),i.removeEventListener("canplay",this.onCanPlay),i.removeEventListener("canplaythrough",this.onCanPlayThrough),i.removeEventListener("play",this.onPlay),i.removeEventListener("abort",this.onAbort),i.removeEventListener("ended",this.onEnded),i.removeEventListener("pause",this.onPause),i.removeEventListener("seeked",this.onSeeked),i.removeEventListener("loadedmetadata",this.onLoadedMetadata),i.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(i){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var i=this;if(!this.listenTracker){var e=this.props.listenInterval;this.listenTracker=window.setInterval(function(){var s,o;i.audioEl.current&&((s=(o=i.props).onListen)===null||s===void 0||s.call(o,i.audioEl.current.currentTime))},e)}}},{key:"updateVolume",value:function(i){var e=this.audioEl.current;e!==null&&typeof i=="number"&&i!==(e==null?void 0:e.volume)&&(e.volume=i)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var i=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),e=this.props.controls!==!1,s=this.props.title?this.props.title:this.props.src,o={};return this.props.controlsList&&(o.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:e,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:s},o),i)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},function(i,e){i.exports=function(s){if(!s.webpackPolyfill){var o=Object.create(s);o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),Object.defineProperty(o,"exports",{enumerable:!0}),o.webpackPolyfill=1}return o}}]);const Song0="/Patudo-v0/assets/Song0.9127ee48.mp3",Song1="/Patudo-v0/assets/Song1.cae06ec3.mp3",Song2="/Patudo-v0/assets/Song2.33e14aa8.mp3",Song3="/Patudo-v0/assets/Song3.ca217bf9.mp3",Song4="/Patudo-v0/assets/Song4.6f1b888a.mp3",Song5="/Patudo-v0/assets/Song5.128e1f6b.mp3",Song6="/Patudo-v0/assets/Song6.8d7cce96.mp3",Song7="/Patudo-v0/assets/Song7.27e6587c.mp3",Song8="/Patudo-v0/assets/Song8.a628eabf.mp3",HackyRap=bundle.default?bundle.default:bundle,songArray=[Song0,Song1,Song2,Song3,Song4,Song5,Song6,Song7,Song8];//!!!deal with /Patudo-v0 routing stuff
function AppRouter(){const[i,e]=react.exports.useState(0),[s,o]=react.exports.useState(0);react.exports.useEffect(()=>{o(Math.floor(Math.random()*songArray.length))},[i]);const a=()=>{o((s+1)%songArray.length)};return jsx(BrowserRouter,{children:jsxs(AuthProvider,{children:[jsx("div",{className:`app-background app-bg-${i}`}),jsxs("div",{className:"app-router",children:[jsx(Navbar,{BGProps:{appBGState:i,setAppBGState:e}}),jsx("div",{className:"main-holder",children:jsxs(Routes,{children:[jsx(Route,{path:"/Patudo-v0/home",element:jsx(PAGE_Home,{})}),jsx(Route,{path:"/Patudo-v0/login-register",element:jsx(PAGE_LoginRegister,{})}),jsx(Route,{path:"/Patudo-v0/find-game",element:jsx(PAGE_FindGame,{})}),jsx(Route,{path:"/Patudo-v0/lobby/:lobbyCode",element:jsx(PAGE_Lobby,{})}),jsx(Route,{path:"/Patudo-v0/game/:gameCode",element:jsx(PAGE_Game,{})}),jsx(Route,{path:"*",element:jsx(Navigate,{to:"/Patudo-v0/home"})})]})})]}),i&&jsx(HackyRap,{src:songArray[s],onEnded:a,autoPlay:!0})]})})}client.createRoot(document.getElementById("root")).render(jsx(React.StrictMode,{children:jsx(AppRouter,{})}));
