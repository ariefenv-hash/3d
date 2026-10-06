var S_=Object.defineProperty;var M_=(t,e,n)=>e in t?S_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Z=(t,e,n)=>M_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Sm={exports:{}},Ll={},Mm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),E_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),A_=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),b_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),L_=Symbol.for("react.memo"),D_=Symbol.for("react.lazy"),bd=Symbol.iterator;function N_(t){return t===null||typeof t!="object"?null:(t=bd&&t[bd]||t["@@iterator"],typeof t=="function"?t:null)}var Em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,wm={};function Is(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Em}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Am(){}Am.prototype=Is.prototype;function mf(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Em}var gf=mf.prototype=new Am;gf.constructor=mf;Tm(gf,Is.prototype);gf.isPureReactComponent=!0;var Pd=Array.isArray,Rm=Object.prototype.hasOwnProperty,_f={current:null},Cm={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rm.call(e,i)&&!Cm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ko,type:t,key:s,ref:o,props:r,_owner:_f.current}}function U_(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function I_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ld=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?I_(""+t.key):e.toString(36)}function ka(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case E_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ic(o,0):i,Pd(r)?(n="",t!=null&&(n=t.replace(Ld,"$&/")+"/"),ka(r,e,n,"",function(c){return c})):r!=null&&(vf(r)&&(r=U_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ld,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ic(s,a);o+=ka(s,e,n,l,r)}else if(l=N_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ic(s,a++),o+=ka(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var i=[],r=0;return ka(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Ba={transition:null},F_={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:_f};function Pm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!vf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Is;je.Fragment=T_;je.Profiler=A_;je.PureComponent=mf;je.StrictMode=w_;je.Suspense=P_;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;je.act=Pm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_f.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rm.call(e,l)&&!Cm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ko,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:C_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:R_,_context:t},t.Consumer=t};je.createElement=bm;je.createFactory=function(t){var e=bm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:b_,render:t}};je.isValidElement=vf;je.lazy=function(t){return{$$typeof:D_,_payload:{_status:-1,_result:t},_init:O_}};je.memo=function(t,e){return{$$typeof:L_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};je.unstable_act=Pm;je.useCallback=function(t,e){return rn.current.useCallback(t,e)};je.useContext=function(t){return rn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};je.useEffect=function(t,e){return rn.current.useEffect(t,e)};je.useId=function(){return rn.current.useId()};je.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return rn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};je.useRef=function(t){return rn.current.useRef(t)};je.useState=function(t){return rn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return rn.current.useTransition()};je.version="18.3.1";Mm.exports=je;var $e=Mm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=$e,k_=Symbol.for("react.element"),B_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,G_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V_={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H_.call(e,i)&&!V_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:k_,type:t,key:s,ref:o,props:r,_owner:G_.current}}Ll.Fragment=B_;Ll.jsx=Lm;Ll.jsxs=Lm;Sm.exports=Ll;var z=Sm.exports,Dm={exports:{}},Mn={},Nm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var H=N.length;N.push(O);e:for(;0<H;){var Q=H-1>>>1,J=N[Q];if(0<r(J,O))N[Q]=O,N[H]=J,H=Q;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],H=N.pop();if(H!==O){N[0]=H;e:for(var Q=0,J=N.length,j=J>>>1;Q<j;){var K=2*(Q+1)-1,ce=N[K],Y=K+1,re=N[Y];if(0>r(ce,H))Y<J&&0>r(re,ce)?(N[Q]=re,N[Y]=H,Q=Y):(N[Q]=ce,N[K]=H,Q=K);else if(Y<J&&0>r(re,H))N[Q]=re,N[Y]=H,Q=Y;else break e}}return O}function r(N,O){var H=N.sortIndex-O.sortIndex;return H!==0?H:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,_=!1,x=!1,m=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=N)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function y(N){if(m=!1,v(N),!x)if(n(l)!==null)x=!0,q(C);else{var O=n(c);O!==null&&$(y,O.startTime-N)}}function C(N,O){x=!1,m&&(m=!1,u(P),P=-1),_=!0;var H=h;try{for(v(O),d=n(l);d!==null&&(!(d.expirationTime>O)||N&&!F());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,h=d.priorityLevel;var J=Q(d.expirationTime<=O);O=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(l)&&i(l),v(O)}else i(l);d=n(l)}if(d!==null)var j=!0;else{var K=n(c);K!==null&&$(y,K.startTime-O),j=!1}return j}finally{d=null,h=H,_=!1}}var T=!1,A=null,P=-1,S=5,E=-1;function F(){return!(t.unstable_now()-E<S)}function W(){if(A!==null){var N=t.unstable_now();E=N;var O=!0;try{O=A(!0,N)}finally{O?ee():(T=!1,A=null)}}else T=!1}var ee;if(typeof g=="function")ee=function(){g(W)};else if(typeof MessageChannel!="undefined"){var L=new MessageChannel,k=L.port2;L.port1.onmessage=W,ee=function(){k.postMessage(null)}}else ee=function(){p(W,0)};function q(N){A=N,T||(T=!0,ee())}function $(N,O){P=p(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,q(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var H=h;h=O;try{return N()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=h;h=N;try{return O()}finally{h=H}},t.unstable_scheduleCallback=function(N,O,H){var Q=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Q+H:Q):H=Q,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=H+J,N={id:f++,callback:O,priorityLevel:N,startTime:H,expirationTime:J,sortIndex:-1},H>Q?(N.sortIndex=H,e(c,N),n(l)===null&&N===n(c)&&(m?(u(P),P=-1):m=!0,$(y,H-Q))):(N.sortIndex=J,e(l,N),x||_||(x=!0,q(C))),N},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(N){var O=h;return function(){var H=h;h=O;try{return N.apply(this,arguments)}finally{h=H}}}})(Um);Nm.exports=Um;var W_=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=$e,Sn=W_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,vo={};function Lr(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(vo[t]=e,t=0;t<e.length;t++)Im.add(e[t])}var yi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),fu=Object.prototype.hasOwnProperty,j_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dd={},Nd={};function q_(t){return fu.call(Nd,t)?!0:fu.call(Dd,t)?!1:j_.test(t)?Nd[t]=!0:(Dd[t]=!0,!1)}function Y_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $_(t,e,n,i){if(e===null||typeof e=="undefined"||Y_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var xf=/[\-:]([a-z])/g;function yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xf,yf);kt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xf,yf);kt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xf,yf);kt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sf(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($_(e,n,r,i)&&(n=null),i||r===null?q_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),Om=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),zm=Symbol.for("react.offscreen"),Ud=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,rc;function to(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var sc=!1;function oc(t,e){if(!t||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function K_(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case du:return"Profiler";case Mf:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fm:return(t.displayName||"Context")+".Consumer";case Om:return(t._context.displayName||"Context")+".Provider";case Ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tf:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function Z_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===Mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q_(t){var e=km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){t._valueTracker||(t._valueTracker=Q_(t))}function Bm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Id(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hm(t,e){e=e.checked,e!=null&&Sf(t,"checked",e,!1)}function _u(t,e){Hm(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Od(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||Ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(no(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function Gm(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zo,Wm=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J_=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){J_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function Xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ev=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Su(t,e){if(e){if(ev[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tu=null,gs=null,_s=null;function kd(t){if(t=Go(t)){if(typeof Tu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Ol(e),Tu(t.stateNode,t.type,e))}}function qm(t){gs?_s?_s.push(t):_s=[t]:gs=t}function Ym(){if(gs){var t=gs,e=_s;if(_s=gs=null,kd(t),e)for(t=0;t<e.length;t++)kd(e[t])}}function $m(t,e){return t(e)}function Km(){}var ac=!1;function Zm(t,e,n){if(ac)return t(e,n);ac=!0;try{return $m(t,e,n)}finally{ac=!1,(gs!==null||_s!==null)&&(Km(),Ym())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ol(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var wu=!1;if(yi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{wu=!1}function tv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var oo=!1,el=null,tl=!1,Au=null,nv={onError:function(t){oo=!0,el=t}};function iv(t,e,n,i,r,s,o,a,l){oo=!1,el=null,tv.apply(nv,arguments)}function rv(t,e,n,i,r,s,o,a,l){if(iv.apply(this,arguments),oo){if(oo){var c=el;oo=!1,el=null}else throw Error(ie(198));tl||(tl=!0,Au=c)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bd(t){if(Dr(t)!==t)throw Error(ie(188))}function sv(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bd(r),t;if(s===i)return Bd(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Jm(t){return t=sv(t),t!==null?eg(t):null}function eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eg(t);if(e!==null)return e;t=t.sibling}return null}var tg=Sn.unstable_scheduleCallback,Hd=Sn.unstable_cancelCallback,ov=Sn.unstable_shouldYield,av=Sn.unstable_requestPaint,Mt=Sn.unstable_now,lv=Sn.unstable_getCurrentPriorityLevel,Af=Sn.unstable_ImmediatePriority,ng=Sn.unstable_UserBlockingPriority,nl=Sn.unstable_NormalPriority,cv=Sn.unstable_LowPriority,ig=Sn.unstable_IdlePriority,Dl=null,si=null;function uv(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:hv,fv=Math.log,dv=Math.LN2;function hv(t){return t>>>=0,t===0?32:31-(fv(t)/dv|0)|0}var Qo=64,Jo=4194304;function io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=io(a):(s&=o,s!==0&&(i=io(s)))}else o=n&~r,o!==0?i=io(o):s!==0&&(i=io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function pv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=pv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ru(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rg(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function gv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var og,Cf,ag,lg,cg,Cu=!1,ea=[],Bi=null,Hi=null,Gi=null,So=new Map,Mo=new Map,Ui=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Go(e),e!==null&&Cf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vv(t,e,n,i,r){switch(e){case"focusin":return Bi=Ws(Bi,t,e,n,i,r),!0;case"dragenter":return Hi=Ws(Hi,t,e,n,i,r),!0;case"mouseover":return Gi=Ws(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return So.set(s,Ws(So.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Mo.set(s,Ws(Mo.get(s)||null,t,e,n,i,r)),!0}return!1}function ug(t){var e=mr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qm(n),e!==null){t.blockedOn=e,cg(t.priority,function(){ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ha(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Eu=i,n.target.dispatchEvent(i),Eu=null}else return e=Go(n),e!==null&&Cf(e),t.blockedOn=n,!1;e.shift()}return!0}function Vd(t,e,n){Ha(t)&&n.delete(e)}function xv(){Cu=!1,Bi!==null&&Ha(Bi)&&(Bi=null),Hi!==null&&Ha(Hi)&&(Hi=null),Gi!==null&&Ha(Gi)&&(Gi=null),So.forEach(Vd),Mo.forEach(Vd)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,xv)))}function Eo(t){function e(r){return Xs(r,t)}if(0<ea.length){Xs(ea[0],t);for(var n=1;n<ea.length;n++){var i=ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bi!==null&&Xs(Bi,t),Hi!==null&&Xs(Hi,t),Gi!==null&&Xs(Gi,t),So.forEach(e),Mo.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)ug(n),n.blockedOn===null&&Ui.shift()}var vs=wi.ReactCurrentBatchConfig,rl=!0;function yv(t,e,n,i){var r=Ze,s=vs.transition;vs.transition=null;try{Ze=1,bf(t,e,n,i)}finally{Ze=r,vs.transition=s}}function Sv(t,e,n,i){var r=Ze,s=vs.transition;vs.transition=null;try{Ze=4,bf(t,e,n,i)}finally{Ze=r,vs.transition=s}}function bf(t,e,n,i){if(rl){var r=bu(t,e,n,i);if(r===null)vc(t,e,i,sl,n),Gd(t,i);else if(vv(r,t,e,n,i))i.stopPropagation();else if(Gd(t,i),e&4&&-1<_v.indexOf(t)){for(;r!==null;){var s=Go(r);if(s!==null&&og(s),s=bu(t,e,n,i),s===null&&vc(t,e,i,sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else vc(t,e,i,null,n)}}var sl=null;function bu(t,e,n,i){if(sl=null,t=wf(i),t=mr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function fg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lv()){case Af:return 1;case ng:return 4;case nl:case cv:return 16;case ig:return 536870912;default:return 16}default:return 16}}var Oi=null,Pf=null,Ga=null;function dg(){if(Ga)return Ga;var t,e=Pf,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ga=r.slice(t,1<i?1-i:void 0)}function Va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function Wd(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:Wd,this.isPropagationStopped=Wd,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=En(Os),Ho=_t({},Os,{view:0,detail:0}),Mv=En(Ho),cc,uc,js,Nl=_t({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(cc=t.screenX-js.screenX,uc=t.screenY-js.screenY):uc=cc=0,js=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),Xd=En(Nl),Ev=_t({},Nl,{dataTransfer:0}),Tv=En(Ev),wv=_t({},Ho,{relatedTarget:0}),fc=En(wv),Av=_t({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=En(Av),Cv=_t({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bv=En(Cv),Pv=_t({},Os,{data:0}),jd=En(Pv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nv[t])?!!e[t]:!1}function Df(){return Uv}var Iv=_t({},Ho,{key:function(t){if(t.key){var e=Lv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(t){return t.type==="keypress"?Va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=En(Iv),Fv=_t({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=En(Fv),zv=_t({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),kv=En(zv),Bv=_t({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=En(Bv),Gv=_t({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=En(Gv),Wv=[9,13,27,32],Nf=yi&&"CompositionEvent"in window,ao=null;yi&&"documentMode"in document&&(ao=document.documentMode);var Xv=yi&&"TextEvent"in window&&!ao,hg=yi&&(!Nf||ao&&8<ao&&11>=ao),Yd=" ",$d=!1;function pg(t,e){switch(t){case"keyup":return Wv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function jv(t,e){switch(t){case"compositionend":return mg(e);case"keypress":return e.which!==32?null:($d=!0,Yd);case"textInput":return t=e.data,t===Yd&&$d?null:t;default:return null}}function qv(t,e){if(ts)return t==="compositionend"||!Nf&&pg(t,e)?(t=dg(),Ga=Pf=Oi=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hg&&e.locale!=="ko"?null:e.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yv[t.type]:e==="textarea"}function gg(t,e,n,i){qm(i),e=ol(e,"onChange"),0<e.length&&(n=new Lf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var lo=null,To=null;function $v(t){Rg(t,0)}function Ul(t){var e=rs(t);if(Bm(e))return t}function Kv(t,e){if(t==="change")return e}var _g=!1;if(yi){var dc;if(yi){var hc="oninput"in document;if(!hc){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),hc=typeof Zd.oninput=="function"}dc=hc}else dc=!1;_g=dc&&(!document.documentMode||9<document.documentMode)}function Qd(){lo&&(lo.detachEvent("onpropertychange",vg),To=lo=null)}function vg(t){if(t.propertyName==="value"&&Ul(To)){var e=[];gg(e,To,t,wf(t)),Zm($v,e)}}function Zv(t,e,n){t==="focusin"?(Qd(),lo=e,To=n,lo.attachEvent("onpropertychange",vg)):t==="focusout"&&Qd()}function Qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(To)}function Jv(t,e){if(t==="click")return Ul(e)}function ex(t,e){if(t==="input"||t==="change")return Ul(e)}function tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:tx;function wo(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!fu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eh(t,e){var n=Jd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jd(n)}}function xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yg(){for(var t=window,e=Ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function Uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nx(t){var e=yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xg(n.ownerDocument.documentElement,n)){if(i!==null&&Uf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=eh(n,s);var o=eh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ix=yi&&"documentMode"in document&&11>=document.documentMode,ns=null,Pu=null,co=null,Lu=!1;function th(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||ns==null||ns!==Ja(i)||(i=ns,"selectionStart"in i&&Uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),co&&wo(co,i)||(co=i,i=ol(Pu,"onSelect"),0<i.length&&(e=new Lf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},pc={},Sg={};yi&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Il(t){if(pc[t])return pc[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sg)return pc[t]=e[n];return t}var Mg=Il("animationend"),Eg=Il("animationiteration"),Tg=Il("animationstart"),wg=Il("transitionend"),Ag=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){Ag.set(t,e),Lr(e,[t])}for(var mc=0;mc<nh.length;mc++){var gc=nh[mc],rx=gc.toLowerCase(),sx=gc[0].toUpperCase()+gc.slice(1);er(rx,"on"+sx)}er(Mg,"onAnimationEnd");er(Eg,"onAnimationIteration");er(Tg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(wg,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function ih(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rv(i,e,void 0,t),t.currentTarget=null}function Rg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ih(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ih(r,a,c),s=l}}}if(tl)throw t=Au,tl=!1,Au=null,t}function rt(t,e){var n=e[Ou];n===void 0&&(n=e[Ou]=new Set);var i=t+"__bubble";n.has(i)||(Cg(e,t,2,!1),n.add(i))}function _c(t,e,n){var i=0;e&&(i|=4),Cg(n,t,i,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[ia]){t[ia]=!0,Im.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,_c("selectionchange",!1,e))}}function Cg(t,e,n,i){switch(fg(e)){case 1:var r=yv;break;case 4:r=Sv;break;default:r=bf}n=r.bind(null,e,n,t),r=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Zm(function(){var c=s,f=wf(n),d=[];e:{var h=Ag.get(t);if(h!==void 0){var _=Lf,x=t;switch(t){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":_=Ov;break;case"focusin":x="focus",_=fc;break;case"focusout":x="blur",_=fc;break;case"beforeblur":case"afterblur":_=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=kv;break;case Mg:case Eg:case Tg:_=Rv;break;case wg:_=Hv;break;case"scroll":_=Mv;break;case"wheel":_=Vv;break;case"copy":case"cut":case"paste":_=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=qd}var m=(e&4)!==0,p=!m&&t==="scroll",u=m?h!==null?h+"Capture":null:h;m=[];for(var g=c,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=yo(g,u),y!=null&&m.push(Ro(g,y,v)))),p)break;g=g.return}0<m.length&&(h=new _(h,x,null,n,f),d.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Eu&&(x=n.relatedTarget||n.fromElement)&&(mr(x)||x[Si]))break e;if((_||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=c,x=x?mr(x):null,x!==null&&(p=Dr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=c),_!==x)){if(m=Xd,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(m=qd,y="onPointerLeave",u="onPointerEnter",g="pointer"),p=_==null?h:rs(_),v=x==null?h:rs(x),h=new m(y,g+"leave",_,n,f),h.target=p,h.relatedTarget=v,y=null,mr(f)===c&&(m=new m(u,g+"enter",x,n,f),m.target=v,m.relatedTarget=p,y=m),p=y,_&&x)t:{for(m=_,u=x,g=0,v=m;v;v=Ur(v))g++;for(v=0,y=u;y;y=Ur(y))v++;for(;0<g-v;)m=Ur(m),g--;for(;0<v-g;)u=Ur(u),v--;for(;g--;){if(m===u||u!==null&&m===u.alternate)break t;m=Ur(m),u=Ur(u)}m=null}else m=null;_!==null&&rh(d,h,_,m,!1),x!==null&&p!==null&&rh(d,p,x,m,!0)}}e:{if(h=c?rs(c):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var C=Kv;else if(Kd(h))if(_g)C=ex;else{C=Qv;var T=Zv}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Jv);if(C&&(C=C(t,c))){gg(d,C,n,f);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&vu(h,"number",h.value)}switch(T=c?rs(c):window,t){case"focusin":(Kd(T)||T.contentEditable==="true")&&(ns=T,Pu=c,co=null);break;case"focusout":co=Pu=ns=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,th(d,n,f);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":th(d,n,f)}var A;if(Nf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ts?pg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(hg&&n.locale!=="ko"&&(ts||P!=="onCompositionStart"?P==="onCompositionEnd"&&ts&&(A=dg()):(Oi=f,Pf="value"in Oi?Oi.value:Oi.textContent,ts=!0)),T=ol(c,P),0<T.length&&(P=new jd(P,t,null,n,f),d.push({event:P,listeners:T}),A?P.data=A:(A=mg(n),A!==null&&(P.data=A)))),(A=Xv?jv(t,n):qv(t,n))&&(c=ol(c,"onBeforeInput"),0<c.length&&(f=new jd("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=A))}Rg(d,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=yo(t,n),s!=null&&i.unshift(Ro(t,s,r)),s=yo(t,e),s!=null&&i.push(Ro(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=yo(n,s),l!=null&&o.unshift(Ro(n,l,a))):r||(l=yo(n,s),l!=null&&o.push(Ro(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ax=/\r\n?/g,lx=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(ax,`
`).replace(lx,"")}function ra(t,e,n){if(e=sh(e),sh(t)!==e&&n)throw Error(ie(425))}function al(){}var Du=null,Nu=null;function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Iu=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof oh!="undefined"?function(t){return oh.resolve(null).then(t).catch(fx)}:Iu;function fx(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Eo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Eo(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Fs,Co="__reactProps$"+Fs,Si="__reactContainer$"+Fs,Ou="__reactEvents$"+Fs,dx="__reactListeners$"+Fs,hx="__reactHandles$"+Fs;function mr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ah(t);t!==null;){if(n=t[ni])return n;t=ah(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[ni]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Ol(t){return t[Co]||null}var Fu=[],ss=-1;function tr(t){return{current:t}}function ot(t){0>ss||(t.current=Fu[ss],Fu[ss]=null,ss--)}function it(t,e){ss++,Fu[ss]=t.current,t.current=e}var Qi={},jt=tr(Qi),cn=tr(!1),Er=Qi;function ws(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function ll(){ot(cn),ot(jt)}function lh(t,e,n){if(jt.current!==Qi)throw Error(ie(168));it(jt,e),it(cn,n)}function bg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Z_(t)||"Unknown",r));return _t({},n,i)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Er=jt.current,it(jt,t),it(cn,cn.current),!0}function ch(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=bg(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,ot(cn),ot(jt),it(jt,t)):ot(cn),it(cn,n)}var mi=null,Fl=!1,yc=!1;function Pg(t){mi===null?mi=[t]:mi.push(t)}function px(t){Fl=!0,Pg(t)}function nr(){if(!yc&&mi!==null){yc=!0;var t=0,e=Ze;try{var n=mi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,Fl=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),tg(Af,nr),r}finally{Ze=e,yc=!1}}return null}var os=[],as=0,ul=null,fl=0,An=[],Rn=0,Tr=null,gi=1,_i="";function cr(t,e){os[as++]=fl,os[as++]=ul,ul=t,fl=e}function Lg(t,e,n){An[Rn++]=gi,An[Rn++]=_i,An[Rn++]=Tr,Tr=t;var i=gi;t=_i;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,gi=1<<32-jn(e)+r|n<<r|i,_i=s+t}else gi=1<<s|n<<r|i,_i=t}function If(t){t.return!==null&&(cr(t,1),Lg(t,1,0))}function Of(t){for(;t===ul;)ul=os[--as],os[as]=null,fl=os[--as],os[as]=null;for(;t===Tr;)Tr=An[--Rn],An[Rn]=null,_i=An[--Rn],An[Rn]=null,gi=An[--Rn],An[Rn]=null}var xn=null,vn=null,lt=!1,Vn=null;function Dg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,vn=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:gi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,vn=null,!0):!1;default:return!1}}function zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ku(t){if(lt){var e=vn;if(e){var n=e;if(!uh(t,e)){if(zu(t))throw Error(ie(418));e=Vi(n.nextSibling);var i=xn;e&&uh(t,e)?Dg(i,n):(t.flags=t.flags&-4097|2,lt=!1,xn=t)}}else{if(zu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,lt=!1,xn=t}}}function fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function sa(t){if(t!==xn)return!1;if(!lt)return fh(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uu(t.type,t.memoizedProps)),e&&(e=vn)){if(zu(t))throw Ng(),Error(ie(418));for(;e;)Dg(t,e),e=Vi(e.nextSibling)}if(fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=xn?Vi(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=vn;t;)t=Vi(t.nextSibling)}function As(){vn=xn=null,lt=!1}function Ff(t){Vn===null?Vn=[t]:Vn.push(t)}var mx=wi.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function oa(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dh(t){var e=t._init;return e(t._payload)}function Ug(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=qi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,y){return g===null||g.tag!==6?(g=Rc(v,u.mode,y),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,y){var C=v.type;return C===es?f(u,g,v.props.children,y,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Di&&dh(C)===g.type)?(y=r(g,v.props),y.ref=qs(u,g,v),y.return=u,y):(y=Ka(v.type,v.key,v.props,null,u.mode,y),y.ref=qs(u,g,v),y.return=u,y)}function c(u,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Cc(v,u.mode,y),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function f(u,g,v,y,C){return g===null||g.tag!==7?(g=xr(v,u.mode,y,C),g.return=u,g):(g=r(g,v),g.return=u,g)}function d(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Rc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case $o:return v=Ka(g.type,g.key,g.props,null,u.mode,v),v.ref=qs(u,null,g),v.return=u,v;case Jr:return g=Cc(g,u.mode,v),g.return=u,g;case Di:var y=g._init;return d(u,y(g._payload),v)}if(no(g)||Gs(g))return g=xr(g,u.mode,v,null),g.return=u,g;oa(u,g)}return null}function h(u,g,v,y){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(u,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $o:return v.key===C?l(u,g,v,y):null;case Jr:return v.key===C?c(u,g,v,y):null;case Di:return C=v._init,h(u,g,C(v._payload),y)}if(no(v)||Gs(v))return C!==null?null:f(u,g,v,y,null);oa(u,v)}return null}function _(u,g,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,a(g,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $o:return u=u.get(y.key===null?v:y.key)||null,l(g,u,y,C);case Jr:return u=u.get(y.key===null?v:y.key)||null,c(g,u,y,C);case Di:var T=y._init;return _(u,g,v,T(y._payload),C)}if(no(y)||Gs(y))return u=u.get(v)||null,f(g,u,y,C,null);oa(g,y)}return null}function x(u,g,v,y){for(var C=null,T=null,A=g,P=g=0,S=null;A!==null&&P<v.length;P++){A.index>P?(S=A,A=null):S=A.sibling;var E=h(u,A,v[P],y);if(E===null){A===null&&(A=S);break}t&&A&&E.alternate===null&&e(u,A),g=s(E,g,P),T===null?C=E:T.sibling=E,T=E,A=S}if(P===v.length)return n(u,A),lt&&cr(u,P),C;if(A===null){for(;P<v.length;P++)A=d(u,v[P],y),A!==null&&(g=s(A,g,P),T===null?C=A:T.sibling=A,T=A);return lt&&cr(u,P),C}for(A=i(u,A);P<v.length;P++)S=_(A,u,P,v[P],y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?P:S.key),g=s(S,g,P),T===null?C=S:T.sibling=S,T=S);return t&&A.forEach(function(F){return e(u,F)}),lt&&cr(u,P),C}function m(u,g,v,y){var C=Gs(v);if(typeof C!="function")throw Error(ie(150));if(v=C.call(v),v==null)throw Error(ie(151));for(var T=C=null,A=g,P=g=0,S=null,E=v.next();A!==null&&!E.done;P++,E=v.next()){A.index>P?(S=A,A=null):S=A.sibling;var F=h(u,A,E.value,y);if(F===null){A===null&&(A=S);break}t&&A&&F.alternate===null&&e(u,A),g=s(F,g,P),T===null?C=F:T.sibling=F,T=F,A=S}if(E.done)return n(u,A),lt&&cr(u,P),C;if(A===null){for(;!E.done;P++,E=v.next())E=d(u,E.value,y),E!==null&&(g=s(E,g,P),T===null?C=E:T.sibling=E,T=E);return lt&&cr(u,P),C}for(A=i(u,A);!E.done;P++,E=v.next())E=_(A,u,P,E.value,y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?P:E.key),g=s(E,g,P),T===null?C=E:T.sibling=E,T=E);return t&&A.forEach(function(W){return e(u,W)}),lt&&cr(u,P),C}function p(u,g,v,y){if(typeof v=="object"&&v!==null&&v.type===es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $o:e:{for(var C=v.key,T=g;T!==null;){if(T.key===C){if(C=v.type,C===es){if(T.tag===7){n(u,T.sibling),g=r(T,v.props.children),g.return=u,u=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Di&&dh(C)===T.type){n(u,T.sibling),g=r(T,v.props),g.ref=qs(u,T,v),g.return=u,u=g;break e}n(u,T);break}else e(u,T);T=T.sibling}v.type===es?(g=xr(v.props.children,u.mode,y,v.key),g.return=u,u=g):(y=Ka(v.type,v.key,v.props,null,u.mode,y),y.ref=qs(u,g,v),y.return=u,u=y)}return o(u);case Jr:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Cc(v,u.mode,y),g.return=u,u=g}return o(u);case Di:return T=v._init,p(u,g,T(v._payload),y)}if(no(v))return x(u,g,v,y);if(Gs(v))return m(u,g,v,y);oa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Rc(v,u.mode,y),g.return=u,u=g),o(u)):n(u,g)}return p}var Rs=Ug(!0),Ig=Ug(!1),dl=tr(null),hl=null,ls=null,zf=null;function kf(){zf=ls=hl=null}function Bf(t){var e=dl.current;ot(dl),t._currentValue=e}function Bu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){hl=t,zf=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(zf!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(hl===null)throw Error(ie(308));ls=t,hl.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var gr=null;function Hf(t){gr===null?gr=[t]:gr.push(t)}function Og(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Mi(t,i)}function Mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(t,n)}function Wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rf(t,n)}}function hh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,_=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,m=a;switch(h=e,_=n,m.tag){case 1:if(x=m.payload,typeof x=="function"){d=x.call(_,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,h=typeof x=="function"?x.call(_,d,h):x,h==null)break e;d=_t({},d,h);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else _={eventTime:_,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=_,l=d):f=f.next=_,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=o,t.lanes=o,t.memoizedState=d}}function ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Vo={},oi=tr(Vo),bo=tr(Vo),Po=tr(Vo);function _r(t){if(t===Vo)throw Error(ie(174));return t}function Vf(t,e){switch(it(Po,e),it(bo,t),it(oi,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yu(e,t)}ot(oi),it(oi,e)}function Cs(){ot(oi),ot(bo),ot(Po)}function zg(t){_r(Po.current);var e=_r(oi.current),n=yu(e,t.type);e!==n&&(it(bo,t),it(oi,n))}function Wf(t){bo.current===t&&(ot(oi),ot(bo))}var pt=tr(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function Xf(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var Xa=wi.ReactCurrentDispatcher,Mc=wi.ReactCurrentBatchConfig,wr=0,mt=null,wt=null,Nt=null,gl=!1,uo=!1,Lo=0,gx=0;function Ht(){throw Error(ie(321))}function jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function qf(t,e,n,i,r,s){if(wr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xa.current=t===null||t.memoizedState===null?yx:Sx,t=n(i,r),uo){s=0;do{if(uo=!1,Lo=0,25<=s)throw Error(ie(301));s+=1,Nt=wt=null,e.updateQueue=null,Xa.current=Mx,t=n(i,r)}while(uo)}if(Xa.current=_l,e=wt!==null&&wt.next!==null,wr=0,Nt=wt=mt=null,gl=!1,e)throw Error(ie(300));return t}function Yf(){var t=Lo!==0;return Lo=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Un(){if(wt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Nt===null?mt.memoizedState:Nt.next;if(e!==null)Nt=e,wt=t;else{if(t===null)throw Error(ie(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Do(t,e){return typeof e=="function"?e(t):e}function Ec(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((wr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=f,Ar|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function kg(){}function Bg(t,e){var n=mt,i=Un(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,$f(Vg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,No(9,Gg.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ie(349));wr&30||Hg(n,e,r)}return r}function Hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gg(t,e,n,i){e.value=n,e.getSnapshot=i,Wg(e)&&Xg(t)}function Vg(t,e,n){return n(function(){Wg(e)&&Xg(t)})}function Wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function Xg(t){var e=Mi(t,1);e!==null&&qn(e,t,1,-1)}function mh(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=xx.bind(null,mt,t),[e.memoizedState,t]}function No(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jg(){return Un().memoizedState}function ja(t,e,n,i){var r=ei();mt.flags|=t,r.memoizedState=No(1|e,n,void 0,i===void 0?null:i)}function zl(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&jf(i,o.deps)){r.memoizedState=No(e,n,s,i);return}}mt.flags|=t,r.memoizedState=No(1|e,n,s,i)}function gh(t,e){return ja(8390656,8,t,e)}function $f(t,e){return zl(2048,8,t,e)}function qg(t,e){return zl(4,2,t,e)}function Yg(t,e){return zl(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kg(t,e,n){return n=n!=null?n.concat([t]):null,zl(4,4,$g.bind(null,e,t),n)}function Kf(){}function Zg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Jg(t,e,n){return wr&21?($n(n,e)||(n=rg(),mt.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function _x(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=Mc.transition;Mc.transition={};try{t(!1),e()}finally{Ze=n,Mc.transition=i}}function e0(){return Un().memoizedState}function vx(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},t0(t))n0(e,n);else if(n=Og(t,e,n,i),n!==null){var r=nn();qn(n,t,i,r),i0(n,e,i)}}function xx(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(t0(t))n0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,Hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Og(t,e,r,i),n!==null&&(r=nn(),qn(n,t,i,r),i0(n,e,i))}}function t0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function n0(t,e){uo=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function i0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rf(t,n)}}var _l={readContext:Nn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},yx={readContext:Nn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:gh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ja(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return ja(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:mh,useDebugValue:Kf,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=mh(!1),e=t[0];return t=_x.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ei();if(lt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ut===null)throw Error(ie(349));wr&30||Hg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gh(Vg.bind(null,i,s,t),[t]),i.flags|=2048,No(9,Gg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Ut.identifierPrefix;if(lt){var n=_i,i=gi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sx={readContext:Nn,useCallback:Zg,useContext:Nn,useEffect:$f,useImperativeHandle:Kg,useInsertionEffect:qg,useLayoutEffect:Yg,useMemo:Qg,useReducer:Ec,useRef:jg,useState:function(){return Ec(Do)},useDebugValue:Kf,useDeferredValue:function(t){var e=Un();return Jg(e,wt.memoizedState,t)},useTransition:function(){var t=Ec(Do)[0],e=Un().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Bg,useId:e0,unstable_isNewReconciler:!1},Mx={readContext:Nn,useCallback:Zg,useContext:Nn,useEffect:$f,useImperativeHandle:Kg,useInsertionEffect:qg,useLayoutEffect:Yg,useMemo:Qg,useReducer:Tc,useRef:jg,useState:function(){return Tc(Do)},useDebugValue:Kf,useDeferredValue:function(t){var e=Un();return wt===null?e.memoizedState=t:Jg(e,wt.memoizedState,t)},useTransition:function(){var t=Tc(Do)[0],e=Un().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Bg,useId:e0,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ji(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(qn(e,t,r,i),Wa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ji(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(qn(e,t,r,i),Wa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=ji(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(t,r,i),e!==null&&(qn(e,t,i,n),Wa(e,t,i))}};function _h(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!wo(n,i)||!wo(r,s):!0}function r0(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=un(e)?Er:jt.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Gu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Gf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=un(e)?Er:jt.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kl.enqueueReplaceState(r,r.state,null),pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=K_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function wc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Vu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ex=typeof WeakMap=="function"?WeakMap:Map;function s0(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xl||(xl=!0,Ju=i),Vu(t,e)},n}function o0(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vu(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ex;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fx.bind(null,t,e,n),e.then(t,t))}function yh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var Tx=wi.ReactCurrentOwner,ln=!1;function Jt(t,e,n,i){e.child=t===null?Ig(e,null,n,i):Rs(e,t.child,n,i)}function Mh(t,e,n,i,r){n=n.render;var s=e.ref;return xs(e,r),i=qf(t,e,n,i,s,r),n=Yf(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(lt&&n&&If(e),e.flags|=1,Jt(t,e,i,r),e.child)}function Eh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!rd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,a0(t,e,s,i,r)):(t=Ka(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(o,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function a0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wo(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return Wu(t,e,n,i,r)}function l0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(us,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(us,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(us,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(us,gn),gn|=i;return Jt(t,e,r,n),e.child}function c0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,i,r){var s=un(n)?Er:jt.current;return s=ws(e,s),xs(e,r),n=qf(t,e,n,i,s,r),i=Yf(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(lt&&i&&If(e),e.flags|=1,Jt(t,e,n,r),e.child)}function Th(t,e,n,i,r){if(un(n)){var s=!0;cl(e)}else s=!1;if(xs(e,r),e.stateNode===null)qa(t,e),r0(e,n,i),Gu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=un(n)?Er:jt.current,c=ws(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&vh(e,o,i,c),Ni=!1;var h=e.memoizedState;o.state=h,pl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||cn.current||Ni?(typeof f=="function"&&(Hu(e,n,f,i),l=e.memoizedState),(a=Ni||_h(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Fg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=un(n)?Er:jt.current,l=ws(e,l));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&vh(e,o,i,l),Ni=!1,h=e.memoizedState,o.state=h,pl(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||cn.current||Ni?(typeof _=="function"&&(Hu(e,n,_,i),x=e.memoizedState),(c=Ni||_h(e,n,c,i,h,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Xu(t,e,n,i,s,r)}function Xu(t,e,n,i,r,s){c0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ch(e,n,!1),Ei(t,e,s);i=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&ch(e,n,!0),e.child}function u0(t){var e=t.stateNode;e.pendingContext?lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lh(t,e.context,!1),Vf(t,e.containerInfo)}function wh(t,e,n,i,r){return As(),Ff(r),e.flags|=256,Jt(t,e,n,i),e.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function f0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(pt,r&1),t===null)return ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gl(o,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qu(n),e.memoizedState=ju,t):Zf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=qi(a,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ju,i}return s=t.child,t=s.sibling,i=qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zf(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,i){return i!==null&&Ff(i),Rs(e,t.child,null,n),t=Zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=wc(Error(ie(422))),aa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=qu(o),e.memoizedState=ju,s);if(!(e.mode&1))return aa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=wc(s,i,void 0),aa(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(t,r),qn(i,t,r,-1))}return id(),i=wc(Error(ie(421))),aa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=Vi(r.nextSibling),xn=e,lt=!0,Vn=null,t!==null&&(An[Rn++]=gi,An[Rn++]=_i,An[Rn++]=Tr,gi=t.id,_i=t.overflow,Tr=e),e=Zf(e,i.children),e.flags|=4096,e)}function Ah(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bu(t.return,e,n)}function Ac(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function d0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ah(t,n,e);else if(t.tag===19)Ah(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ac(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ax(t,e,n){switch(e.tag){case 3:u0(e),As();break;case 5:zg(e);break;case 1:un(e.type)&&cl(e);break;case 4:Vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?f0(t,e,n):(it(pt,pt.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);it(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return d0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,l0(t,e,n)}return Ei(t,e,n)}var h0,Yu,p0,m0;h0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};p0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(oi.current);var s=null;switch(n){case"input":r=gu(t,r),i=gu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=xu(t,r),i=xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=al)}Su(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};m0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Rx(t,e,n){var i=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return un(e.type)&&ll(),Gt(e),null;case 3:return i=e.stateNode,Cs(),ot(cn),ot(jt),Xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(nf(Vn),Vn=null))),Yu(t,e),Gt(e),null;case 5:Wf(e);var r=_r(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)p0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Gt(e),null}if(t=_r(oi.current),sa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Co]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<ro.length;r++)rt(ro[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Id(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Fd(i,s),rt("invalid",i)}Su(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",""+a]):vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":Ko(i),Od(i,s,!0);break;case"textarea":Ko(i),zd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Co]=i,h0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mu(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ro.length;r++)rt(ro[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":Id(t,i),r=gu(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Fd(t,i),r=xu(t,i),rt("invalid",t);break;default:r=i}Su(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&Sf(t,s,l,o))}switch(n){case"input":Ko(t),Od(t,i,!1);break;case"textarea":Ko(t),zd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)m0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=_r(Po.current),_r(oi.current),sa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Gt(e),null;case 13:if(ot(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&vn!==null&&e.mode&1&&!(e.flags&128))Ng(),As(),e.flags|=98560,s=!1;else if(s=sa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ni]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Vn!==null&&(nf(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?At===0&&(At=3):id())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Cs(),Yu(t,e),t===null&&Ao(e.stateNode.containerInfo),Gt(e),null;case 10:return Bf(e.type._context),Gt(e),null;case 17:return un(e.type)&&ll(),Gt(e),null;case 19:if(ot(pt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ys(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,Ys(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Ps&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=ml(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Gt(e),null}else 2*Mt()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=pt.current,it(pt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return nd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Cx(t,e){switch(Of(e),e.tag){case 1:return un(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),ot(cn),ot(jt),Xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wf(e),null;case 13:if(ot(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(pt),null;case 4:return Cs(),null;case 10:return Bf(e.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var la=!1,Xt=!1,bx=typeof WeakSet=="function"?WeakSet:Set,me=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function $u(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Rh=!1;function Px(t,e){if(Du=rl,t=yg(),Uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var _;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nu={focusedElem:t,selectionRange:n},rl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,p=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?m:Hn(e.type,m),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){yt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=Rh,Rh=!1,x}function fo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$u(e,n,s)}r=r.next}while(r!==i)}}function Bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function g0(t){var e=t.alternate;e!==null&&(t.alternate=null,g0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Co],delete e[Ou],delete e[dx],delete e[hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _0(t){return t.tag===5||t.tag===3||t.tag===4}function Ch(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}var Ot=null,Gn=!1;function Ai(t,e,n){for(n=n.child;n!==null;)v0(t,e,n),n=n.sibling}function v0(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:Xt||cs(n,e);case 6:var i=Ot,r=Gn;Ot=null,Ai(t,e,n),Ot=i,Gn=r,Ot!==null&&(Gn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Gn?(t=Ot,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),Eo(t)):xc(Ot,n.stateNode));break;case 4:i=Ot,r=Gn,Ot=n.stateNode.containerInfo,Gn=!0,Ai(t,e,n),Ot=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$u(n,e,o),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!Xt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ai(t,e,n),Xt=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function bh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(i){var r=kx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Gn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Gn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Ot===null)throw Error(ie(160));v0(s,o,r),Ot=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}function x0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Zn(t),i&4){try{fo(3,t,t.return),Bl(3,t)}catch(m){yt(t,t.return,m)}try{fo(5,t,t.return)}catch(m){yt(t,t.return,m)}}break;case 1:In(e,t),Zn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(In(e,t),Zn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{xo(r,"")}catch(m){yt(t,t.return,m)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hm(r,s),Mu(a,o);var c=Mu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?jm(r,d):f==="dangerouslySetInnerHTML"?Wm(r,d):f==="children"?xo(r,d):Sf(r,f,d,c)}switch(a){case"input":_u(r,s);break;case"textarea":Gm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?ms(r,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?ms(r,!!s.multiple,s.defaultValue,!0):ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Co]=s}catch(m){yt(t,t.return,m)}}break;case 6:if(In(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(m){yt(t,t.return,m)}}break;case 3:if(In(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(m){yt(t,t.return,m)}break;case 4:In(e,t),Zn(t);break;case 13:In(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ed=Mt())),i&4&&bh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||f,In(e,t),Xt=c):In(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(d=me=f;me!==null;){switch(h=me,_=h.child,h.tag){case 0:case 11:case 14:case 15:fo(4,h,h.return);break;case 1:cs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(m){yt(i,n,m)}}break;case 5:cs(h,h.return);break;case 22:if(h.memoizedState!==null){Lh(d);continue}}_!==null?(_.return=h,me=_):Lh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xm("display",o))}catch(m){yt(t,t.return,m)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(m){yt(t,t.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:In(e,t),Zn(t),i&4&&bh(t);break;case 21:break;default:In(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var s=Ch(t);Qu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ch(t);Zu(t,a,o);break;default:throw Error(ie(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lx(t,e,n){me=t,y0(t)}function y0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||la;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=la;var c=Xt;if(la=o,(Xt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Dh(r):l!==null?(l.return=o,me=l):Dh(r);for(;s!==null;)me=s,y0(s),s=s.sibling;me=r,la=a,Xt=c}Ph(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Ph(t)}}function Ph(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Bl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ph(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ph(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Eo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Xt||e.flags&512&&Ku(e)}catch(h){yt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Lh(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Dh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bl(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Ku(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Ku(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Dx=Math.ceil,vl=wi.ReactCurrentDispatcher,Qf=wi.ReactCurrentOwner,Dn=wi.ReactCurrentBatchConfig,Ye=0,Ut=null,Tt=null,zt=0,gn=0,us=tr(0),At=0,Uo=null,Ar=0,Hl=0,Jf=0,ho=null,an=null,ed=0,Ps=1/0,pi=null,xl=!1,Ju=null,Xi=null,ca=!1,Fi=null,yl=0,po=0,ef=null,Ya=-1,$a=0;function nn(){return Ye&6?Mt():Ya!==-1?Ya:Ya=Mt()}function ji(t){return t.mode&1?Ye&2&&zt!==0?zt&-zt:mx.transition!==null?($a===0&&($a=rg()),$a):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:fg(t.type)),t):1}function qn(t,e,n,i){if(50<po)throw po=0,ef=null,Error(ie(185));Bo(t,n,i),(!(Ye&2)||t!==Ut)&&(t===Ut&&(!(Ye&2)&&(Hl|=n),At===4&&Ii(t,zt)),fn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Ps=Mt()+500,Fl&&nr()))}function fn(t,e){var n=t.callbackNode;mv(t,e);var i=il(t,t===Ut?zt:0);if(i===0)n!==null&&Hd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hd(n),e===1)t.tag===0?px(Nh.bind(null,t)):Pg(Nh.bind(null,t)),ux(function(){!(Ye&6)&&nr()}),n=null;else{switch(sg(i)){case 1:n=Af;break;case 4:n=ng;break;case 16:n=nl;break;case 536870912:n=ig;break;default:n=nl}n=C0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(Ya=-1,$a=0,Ye&6)throw Error(ie(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=il(t,t===Ut?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sl(t,i);else{e=i;var r=Ye;Ye|=2;var s=E0();(Ut!==t||zt!==e)&&(pi=null,Ps=Mt()+500,vr(t,e));do try{Ix();break}catch(a){M0(t,a)}while(!0);kf(),vl.current=s,Ye=r,Tt!==null?e=0:(Ut=null,zt=0,e=At)}if(e!==0){if(e===2&&(r=Ru(t),r!==0&&(i=r,e=tf(t,r))),e===1)throw n=Uo,vr(t,0),Ii(t,i),fn(t,Mt()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!Nx(r)&&(e=Sl(t,i),e===2&&(s=Ru(t),s!==0&&(i=s,e=tf(t,s))),e===1))throw n=Uo,vr(t,0),Ii(t,i),fn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:ur(t,an,pi);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=ed+500-Mt(),10<e)){if(il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Iu(ur.bind(null,t,an,pi),e);break}ur(t,an,pi);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dx(i/1960))-i,10<i){t.timeoutHandle=Iu(ur.bind(null,t,an,pi),i);break}ur(t,an,pi);break;case 5:ur(t,an,pi);break;default:throw Error(ie(329))}}}return fn(t,Mt()),t.callbackNode===n?S0.bind(null,t):null}function tf(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=an,an=n,e!==null&&nf(e)),t}function nf(t){an===null?an=t:an.push.apply(an,t)}function Nx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~Jf,e&=~Hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Nh(t){if(Ye&6)throw Error(ie(327));ys();var e=il(t,0);if(!(e&1))return fn(t,Mt()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var i=Ru(t);i!==0&&(e=i,n=tf(t,i))}if(n===1)throw n=Uo,vr(t,0),Ii(t,e),fn(t,Mt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,an,pi),fn(t,Mt()),null}function td(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Ps=Mt()+500,Fl&&nr())}}function Rr(t){Fi!==null&&Fi.tag===0&&!(Ye&6)&&ys();var e=Ye;Ye|=1;var n=Dn.transition,i=Ze;try{if(Dn.transition=null,Ze=1,t)return t()}finally{Ze=i,Dn.transition=n,Ye=e,!(Ye&6)&&nr()}}function nd(){gn=us.current,ot(us)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ll();break;case 3:Cs(),ot(cn),ot(jt),Xf();break;case 5:Wf(i);break;case 4:Cs();break;case 13:ot(pt);break;case 19:ot(pt);break;case 10:Bf(i.type._context);break;case 22:case 23:nd()}n=n.return}if(Ut=t,Tt=t=qi(t.current,null),zt=gn=e,At=0,Uo=null,Jf=Hl=Ar=0,an=ho=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}gr=null}return t}function M0(t,e){do{var n=Tt;try{if(kf(),Xa.current=_l,gl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(wr=0,Nt=wt=mt=null,uo=!1,Lo=0,Qf.current=null,n===null||n.return===null){At=1,Uo=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=yh(o);if(_!==null){_.flags&=-257,Sh(_,o,a,s,e),_.mode&1&&xh(s,c,e),e=_,l=c;var x=e.updateQueue;if(x===null){var m=new Set;m.add(l),e.updateQueue=m}else x.add(l);break e}else{if(!(e&1)){xh(s,c,e),id();break e}l=Error(ie(426))}}else if(lt&&a.mode&1){var p=yh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Sh(p,o,a,s,e),Ff(bs(l,a));break e}}s=l=bs(l,a),At!==4&&(At=2),ho===null?ho=[s]:ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=s0(s,l,e);hh(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Xi===null||!Xi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=o0(s,a,e);hh(s,y);break e}}s=s.return}while(s!==null)}w0(n)}catch(C){e=C,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function E0(){var t=vl.current;return vl.current=_l,t===null?_l:t}function id(){(At===0||At===3||At===2)&&(At=4),Ut===null||!(Ar&268435455)&&!(Hl&268435455)||Ii(Ut,zt)}function Sl(t,e){var n=Ye;Ye|=2;var i=E0();(Ut!==t||zt!==e)&&(pi=null,vr(t,e));do try{Ux();break}catch(r){M0(t,r)}while(!0);if(kf(),Ye=n,vl.current=i,Tt!==null)throw Error(ie(261));return Ut=null,zt=0,At}function Ux(){for(;Tt!==null;)T0(Tt)}function Ix(){for(;Tt!==null&&!ov();)T0(Tt)}function T0(t){var e=R0(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?w0(t):Tt=e,Qf.current=null}function w0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cx(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Tt=null;return}}else if(n=Rx(n,e,gn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);At===0&&(At=5)}function ur(t,e,n){var i=Ze,r=Dn.transition;try{Dn.transition=null,Ze=1,Ox(t,e,n,i)}finally{Dn.transition=r,Ze=i}return null}function Ox(t,e,n,i){do ys();while(Fi!==null);if(Ye&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gv(t,s),t===Ut&&(Tt=Ut=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,C0(nl,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=Ze;Ze=1;var a=Ye;Ye|=4,Qf.current=null,Px(t,n),x0(n,t),nx(Nu),rl=!!Du,Nu=Du=null,t.current=n,Lx(n),av(),Ye=a,Ze=o,Dn.transition=s}else t.current=n;if(ca&&(ca=!1,Fi=t,yl=r),s=t.pendingLanes,s===0&&(Xi=null),uv(n.stateNode),fn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(xl)throw xl=!1,t=Ju,Ju=null,t;return yl&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===ef?po++:(po=0,ef=t):po=0,nr(),null}function ys(){if(Fi!==null){var t=sg(yl),e=Dn.transition,n=Ze;try{if(Dn.transition=null,Ze=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,yl=0,Ye&6)throw Error(ie(331));var r=Ye;for(Ye|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:fo(8,f,s)}var d=f.child;if(d!==null)d.return=f,me=d;else for(;me!==null;){f=me;var h=f.sibling,_=f.return;if(g0(f),f===c){me=null;break}if(h!==null){h.return=_,me=h;break}me=_}}}var x=s.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var p=m.sibling;m.sibling=null,m=p}while(m!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bl(9,a)}}catch(C){yt(a,a.return,C)}if(a===o){me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,me=y;break e}me=a.return}}if(Ye=r,nr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Dl,t)}catch{}i=!0}return i}finally{Ze=n,Dn.transition=e}}return!1}function Uh(t,e,n){e=bs(n,e),e=s0(t,e,1),t=Wi(t,e,1),e=nn(),t!==null&&(Bo(t,1,e),fn(t,e))}function yt(t,e,n){if(t.tag===3)Uh(t,t,n);else for(;e!==null;){if(e.tag===3){Uh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=bs(n,t),t=o0(e,t,1),e=Wi(e,t,1),t=nn(),e!==null&&(Bo(e,1,t),fn(e,t));break}}e=e.return}}function Fx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(zt&n)===n&&(At===4||At===3&&(zt&130023424)===zt&&500>Mt()-ed?vr(t,0):Jf|=n),fn(t,e)}function A0(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=nn();t=Mi(t,e),t!==null&&(Bo(t,e,n),fn(t,n))}function zx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),A0(t,n)}function kx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),A0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,Ax(t,e,n);ln=!!(t.flags&131072)}else ln=!1,lt&&e.flags&1048576&&Lg(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qa(t,e),t=e.pendingProps;var r=ws(e,jt.current);xs(e,n),r=qf(null,e,i,t,r,n);var s=Yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gf(e),r.updater=kl,e.stateNode=r,r._reactInternals=e,Gu(e,i,t,n),e=Xu(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&If(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(qa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hx(i),t=Hn(i,t),r){case 0:e=Wu(null,e,i,t,n);break e;case 1:e=Th(null,e,i,t,n);break e;case 11:e=Mh(null,e,i,t,n);break e;case 14:e=Eh(null,e,i,Hn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Wu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Th(t,e,i,r,n);case 3:e:{if(u0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fg(t,e),pl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(ie(423)),e),e=wh(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(ie(424)),e),e=wh(t,e,i,n,r);break e}else for(vn=Vi(e.stateNode.containerInfo.firstChild),xn=e,lt=!0,Vn=null,n=Ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),i===r){e=Ei(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return zg(e),t===null&&ku(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Uu(i,r)?o=null:s!==null&&Uu(i,s)&&(e.flags|=32),c0(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&ku(e),null;case 13:return f0(t,e,n);case 4:return Vf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Mh(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(dl,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!cn.current){e=Ei(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xs(e,n),r=Nn(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Eh(t,e,i,r,n);case 15:return a0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),qa(t,e),e.tag=1,un(i)?(t=!0,cl(e)):t=!1,xs(e,n),r0(e,i,r),Gu(e,i,r,n),Xu(null,e,i,!0,t,n);case 19:return d0(t,e,n);case 22:return l0(t,e,n)}throw Error(ie(156,e.tag))};function C0(t,e){return tg(t,e)}function Bx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Bx(t,e,n,i)}function rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hx(t){if(typeof t=="function")return rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ef)return 11;if(t===Tf)return 14}return 2}function qi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ka(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")rd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return xr(n.children,r,s,e);case Mf:o=8,r|=8;break;case du:return t=Ln(12,n,e,r|2),t.elementType=du,t.lanes=s,t;case hu:return t=Ln(13,n,e,r),t.elementType=hu,t.lanes=s,t;case pu:return t=Ln(19,n,e,r),t.elementType=pu,t.lanes=s,t;case zm:return Gl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Om:o=10;break e;case Fm:o=9;break e;case Ef:o=11;break e;case Tf:o=14;break e;case Di:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Gl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=zm,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lc(0),this.expirationTimes=lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sd(t,e,n,i,r,s,o,a,l){return t=new Gx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(s),t}function Vx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function b0(t){if(!t)return Qi;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(un(n))return bg(t,n,e)}return e}function P0(t,e,n,i,r,s,o,a,l){return t=sd(n,i,!0,t,r,s,o,a,l),t.context=b0(null),n=t.current,i=nn(),r=ji(n),s=xi(i,r),s.callback=e!=null?e:null,Wi(n,s,r),t.current.lanes=r,Bo(t,r,i),fn(t,i),t}function Vl(t,e,n,i){var r=e.current,s=nn(),o=ji(r);return n=b0(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wi(r,e,o),t!==null&&(qn(t,r,o,s),Wa(t,r,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ih(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function od(t,e){Ih(t,e),(t=t.alternate)&&Ih(t,e)}function Wx(){return null}var L0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}Wl.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Vl(t,e,null,null)};Wl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Vl(null,t,null,null)}),e[Si]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&ug(t)}};function ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function Xx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ml(o);s.call(c)}}var o=P0(e,i,t,0,null,!1,!1,"",Oh);return t._reactRootContainer=o,t[Si]=o.current,Ao(t.nodeType===8?t.parentNode:t),Rr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ml(l);a.call(c)}}var l=sd(t,0,!1,null,null,!1,!1,"",Oh);return t._reactRootContainer=l,t[Si]=l.current,Ao(t.nodeType===8?t.parentNode:t),Rr(function(){Vl(e,l,n,i)}),l}function jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ml(o);a.call(l)}}Vl(e,o,t,r)}else o=Xx(n,e,t,r,i);return Ml(o)}og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=io(e.pendingLanes);n!==0&&(Rf(e,n|1),fn(e,Mt()),!(Ye&6)&&(Ps=Mt()+500,nr()))}break;case 13:Rr(function(){var i=Mi(t,1);if(i!==null){var r=nn();qn(i,t,1,r)}}),od(t,1)}};Cf=function(t){if(t.tag===13){var e=Mi(t,134217728);if(e!==null){var n=nn();qn(e,t,134217728,n)}od(t,134217728)}};ag=function(t){if(t.tag===13){var e=ji(t),n=Mi(t,e);if(n!==null){var i=nn();qn(n,t,e,i)}od(t,e)}};lg=function(){return Ze};cg=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Tu=function(t,e,n){switch(e){case"input":if(_u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ol(i);if(!r)throw Error(ie(90));Bm(i),_u(i,r)}}}break;case"textarea":Gm(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};$m=td;Km=Rr;var jx={usingClientEntryPoint:!1,Events:[Go,rs,Ol,qm,Ym,td]},$s={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qx={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jm(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||Wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{Dl=ua.inject(qx),si=ua}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(e))throw Error(ie(200));return Vx(t,e,null,n)};Mn.createRoot=function(t,e){if(!ld(t))throw Error(ie(299));var n=!1,i="",r=L0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sd(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Ao(t.nodeType===8?t.parentNode:t),new ad(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Jm(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Rr(t)};Mn.hydrate=function(t,e,n){if(!Xl(e))throw Error(ie(200));return jl(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!ld(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=L0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P0(e,null,t,1,n!=null?n:null,r,!1,s,o),t[Si]=e.current,Ao(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Wl(e)};Mn.render=function(t,e,n){if(!Xl(e))throw Error(ie(200));return jl(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(ie(40));return t._reactRootContainer?(Rr(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};Mn.unstable_batchedUpdates=td;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return jl(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function D0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)}catch(t){console.error(t)}}D0(),Dm.exports=Mn;var Yx=Dm.exports,N0,Fh=Yx;N0=Fh.createRoot,Fh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="160",$x=0,zh=1,Kx=2,U0=1,Zx=2,hi=3,Ji=0,dn=1,ii=2,Yi=0,Ss=1,kh=2,Bh=3,Hh=4,Qx=5,hr=100,Jx=101,ey=102,Gh=103,Vh=104,ty=200,ny=201,iy=202,ry=203,rf=204,sf=205,sy=206,oy=207,ay=208,ly=209,cy=210,uy=211,fy=212,dy=213,hy=214,py=0,my=1,gy=2,El=3,_y=4,vy=5,xy=6,yy=7,I0=0,Sy=1,My=2,$i=0,Ey=1,Ty=2,wy=3,O0=4,Ay=5,Ry=6,F0=300,Ls=301,Ds=302,of=303,af=304,ql=306,lf=1e3,Wn=1001,cf=1002,en=1003,Wh=1004,bc=1005,Cn=1006,Cy=1007,Io=1008,Ki=1009,by=1010,Py=1011,ud=1012,z0=1013,zi=1014,ki=1015,Oo=1016,k0=1017,B0=1018,yr=1020,Ly=1021,Xn=1023,Dy=1024,Ny=1025,Sr=1026,Ns=1027,Uy=1028,H0=1029,Iy=1030,G0=1031,V0=1033,Pc=33776,Lc=33777,Dc=33778,Nc=33779,Xh=35840,jh=35841,qh=35842,Yh=35843,W0=36196,$h=37492,Kh=37496,Zh=37808,Qh=37809,Jh=37810,ep=37811,tp=37812,np=37813,ip=37814,rp=37815,sp=37816,op=37817,ap=37818,lp=37819,cp=37820,up=37821,Uc=36492,fp=36494,dp=36495,Oy=36283,hp=36284,pp=36285,mp=36286,X0=3e3,Mr=3001,Fy=3200,zy=3201,j0=0,ky=1,Pn="",Ft="srgb",Ti="srgb-linear",fd="display-p3",Yl="display-p3-linear",Tl="linear",st="srgb",wl="rec709",Al="p3",Ir=7680,gp=519,By=512,Hy=513,Gy=514,q0=515,Vy=516,Wy=517,Xy=518,jy=519,_p=35044,vp="300 es",uf=1035,vi=2e3,Rl=2001;class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xp=1234567;const Ms=Math.PI/180,Fo=180/Math.PI;function ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function dd(t,e){return(t%e+e)%e}function qy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Yy(t,e,n){return t!==e?(n-t)/(e-t):0}function mo(t,e,n){return(1-n)*t+n*e}function $y(t,e,n,i){return mo(t,e,1-Math.exp(-n*i))}function Ky(t,e=1){return e-Math.abs(dd(t,e*2)-e)}function Zy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Qy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Jy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function eS(t,e){return t+Math.random()*(e-t)}function tS(t){return t*(.5-Math.random())}function nS(t){t!==void 0&&(xp=t);let e=xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iS(t){return t*Ms}function rS(t){return t*Fo}function ff(t){return(t&t-1)===0&&t!==0}function sS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Cl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function oS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),_=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*x,l*_,a*c);break;case"YXY":t.set(l*_,a*f,l*x,a*c);break;case"ZYZ":t.set(l*x,l*_,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Qn={DEG2RAD:Ms,RAD2DEG:Fo,generateUUID:ks,clamp:tn,euclideanModulo:dd,mapLinear:qy,inverseLerp:Yy,lerp:mo,damp:$y,pingpong:Ky,smoothstep:Zy,smootherstep:Qy,randInt:Jy,randFloat:eS,randFloatSpread:tS,seededRandom:nS,degToRad:iS,radToDeg:rS,isPowerOfTwo:ff,ceilPowerOfTwo:sS,floorPowerOfTwo:Cl,setQuaternionFromProperEuler:oS,normalize:Zt,denormalize:Qr};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],_=i[5],x=i[8],m=r[0],p=r[3],u=r[6],g=r[1],v=r[4],y=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*m+a*g+l*C,s[3]=o*p+a*v+l*T,s[6]=o*u+a*y+l*A,s[1]=c*m+f*g+d*C,s[4]=c*p+f*v+d*T,s[7]=c*u+f*y+d*A,s[2]=h*m+_*g+x*C,s[5]=h*p+_*v+x*T,s[8]=h*u+_*y+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,_=c*s-o*l,x=n*d+i*h+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return e[0]=d*m,e[1]=(r*c-f*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(f*n-r*l)*m,e[5]=(r*s-a*n)*m,e[6]=_*m,e[7]=(i*l-c*n)*m,e[8]=(o*n-i*s)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ic.makeScale(e,n)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ic.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new Ge;function Y0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function aS(){const t=bl("canvas");return t.style.display="block",t}const yp={};function go(t){t in yp||(yp[t]=!0,console.warn(t))}const Sp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fa={[Ti]:{transfer:Tl,primaries:wl,toReference:t=>t,fromReference:t=>t},[Ft]:{transfer:st,primaries:wl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yl]:{transfer:Tl,primaries:Al,toReference:t=>t.applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(Sp)},[fd]:{transfer:st,primaries:Al,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(Sp).convertLinearToSRGB()}},lS=new Set([Ti,Yl]),Je={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!lS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=fa[e].toReference,r=fa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return fa[t].primaries},getTransfer:function(t){return t===Pn?Tl:fa[t].transfer}};function Es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Oc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class $0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=bl("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Es(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Es(n[i]/255)*255):n[i]=Es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cS=0;class K0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=ks(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fc(r[o].image)):s.push(Fc(r[o]))}else s=Fc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fc(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?$0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uS=0;class yn extends zs{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Wn,r=Wn,s=Cn,o=Io,a=Xn,l=Ki,c=yn.DEFAULT_ANISOTROPY,f=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=ks(),this.name="",this.source=new K0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Mr?Ft:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lf:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lf:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?Mr:X0}set encoding(e){go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mr?Ft:Pn}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=F0;yn.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,n=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],_=l[5],x=l[9],m=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-m)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+m)<.1&&Math.abs(x+p)<.1&&Math.abs(c+_+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(_+1)/2,C=(u+1)/2,T=(f+h)/4,A=(d+m)/4,P=(x+p)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(d-m)*(d-m)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(d-m)/g,this.z=(h-f)/g,this.w=Math.acos((c+_+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fS extends zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ct(0,0,e,n),this.scissorTest=!1,this.viewport=new ct(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mr?Ft:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new K0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends fS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Z0 extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dS extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],_=s[o+1],x=s[o+2],m=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=_,e[n+2]=x,e[n+3]=m;return}if(d!==m||l!==h||c!==_||f!==x){let p=1-a;const u=l*h+c*_+f*x+d*m,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,u*g);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const y=a*g;if(l=l*p+h*y,c=c*p+_*y,f=f*p+x*y,d=d*p+m*y,p===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=C,c*=C,f*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],_=s[o+2],x=s[o+3];return e[n]=a*x+f*d+l*_-c*h,e[n+1]=l*x+f*h+c*d-a*_,e[n+2]=c*x+f*_+a*h-l*d,e[n+3]=f*x-a*d-l*h-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),_=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*_*x,this._y=c*_*d-h*f*x,this._z=c*f*x+h*_*d,this._w=c*f*d-h*_*x;break;case"YXZ":this._x=h*f*d+c*_*x,this._y=c*_*d-h*f*x,this._z=c*f*x-h*_*d,this._w=c*f*d+h*_*x;break;case"ZXY":this._x=h*f*d-c*_*x,this._y=c*_*d+h*f*x,this._z=c*f*x+h*_*d,this._w=c*f*d-h*_*x;break;case"ZYX":this._x=h*f*d-c*_*x,this._y=c*_*d+h*f*x,this._z=c*f*x-h*_*d,this._w=c*f*d+h*_*x;break;case"YZX":this._x=h*f*d+c*_*x,this._y=c*_*d+h*f*x,this._z=c*f*x-h*_*d,this._w=c*f*d-h*_*x;break;case"XZY":this._x=h*f*d-c*_*x,this._y=c*_*d-h*f*x,this._z=c*f*x+h*_*d,this._w=c*f*d+h*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const _=.5/Math.sqrt(h+1);this._w=.25/_,this._x=(f-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(i>a&&i>d){const _=2*Math.sqrt(1+i-a-d);this._w=(f-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>d){const _=2*Math.sqrt(1+a-i-d);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+f)/_}else{const _=2*Math.sqrt(1+d-i-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-n;return this._w=_*o+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new D,Ep=new ri;class Wo{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),ha.subVectors(this.max,Ks),Fr.subVectors(e.a,Ks),zr.subVectors(e.b,Ks),kr.subVectors(e.c,Ks),Ri.subVectors(zr,Fr),Ci.subVectors(kr,zr),sr.subVectors(Fr,kr);let n=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-sr.z,sr.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,sr.z,0,-sr.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-sr.y,sr.x,0];return!kc(n,Fr,zr,kr,ha)||(n=[1,0,0,0,1,0,0,0,1],!kc(n,Fr,zr,kr,ha))?!1:(pa.crossVectors(Ri,Ci),n=[pa.x,pa.y,pa.z],kc(n,Fr,zr,kr,ha))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new D,new D,new D,new D,new D,new D,new D,new D],On=new D,da=new Wo,Fr=new D,zr=new D,kr=new D,Ri=new D,Ci=new D,sr=new D,Ks=new D,ha=new D,pa=new D,or=new D;function kc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),f=i.dot(or);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const hS=new Wo,Zs=new D,Bc=new D;class Xo{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Bc)),this.expandByPoint(Zs.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new D,Hc=new D,ma=new D,bi=new D,Gc=new D,ga=new D,Vc=new D;class $l{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Hc.copy(e).add(n).multiplyScalar(.5),ma.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(Hc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ma),a=bi.dot(this.direction),l=-bi.dot(ma),c=bi.lengthSq(),f=Math.abs(1-o*o);let d,h,_,x;if(f>0)if(d=o*l-a,h=o*a-l,x=s*f,d>=0)if(h>=-x)if(h<=x){const m=1/f;d*=m,h*=m,_=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),_=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),_=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),_=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),_=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Hc).addScaledVector(ma,h),_}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){Gc.subVectors(n,e),ga.subVectors(i,e),Vc.crossVectors(Gc,ga);let o=this.direction.dot(Vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(ga.crossVectors(bi,ga));if(l<0)return null;const c=a*this.direction.dot(Gc.cross(bi));if(c<0||l+c>o)return null;const f=-a*bi.dot(Vc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,_,x,m,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,_,x,m,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,_,x,m,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=_,u[7]=x,u[11]=m,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,_=o*d,x=a*f,m=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=_+x*c,n[5]=h-m*c,n[9]=-a*l,n[2]=m-h*c,n[6]=x+_*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,_=l*d,x=c*f,m=c*d;n[0]=h+m*a,n[4]=x*a-_,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=_*a-x,n[6]=m+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,_=l*d,x=c*f,m=c*d;n[0]=h-m*a,n[4]=-o*d,n[8]=x+_*a,n[1]=_+x*a,n[5]=o*f,n[9]=m-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,_=o*d,x=a*f,m=a*d;n[0]=l*f,n[4]=x*c-_,n[8]=h*c+m,n[1]=l*d,n[5]=m*c+h,n[9]=_*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,_=o*c,x=a*l,m=a*c;n[0]=l*f,n[4]=m-h*d,n[8]=x*d+_,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=_*d+x,n[10]=h-m*d}else if(e.order==="XZY"){const h=o*l,_=o*c,x=a*l,m=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+m,n[5]=o*f,n[9]=_*d-x,n[2]=x*d-_,n[6]=a*f,n[10]=m*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pS,e,mS)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Pi.crossVectors(i,pn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Pi.crossVectors(i,pn)),Pi.normalize(),_a.crossVectors(pn,Pi),r[0]=Pi.x,r[4]=_a.x,r[8]=pn.x,r[1]=Pi.y,r[5]=_a.y,r[9]=pn.y,r[2]=Pi.z,r[6]=_a.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],_=i[13],x=i[2],m=i[6],p=i[10],u=i[14],g=i[3],v=i[7],y=i[11],C=i[15],T=r[0],A=r[4],P=r[8],S=r[12],E=r[1],F=r[5],W=r[9],ee=r[13],L=r[2],k=r[6],q=r[10],$=r[14],N=r[3],O=r[7],H=r[11],Q=r[15];return s[0]=o*T+a*E+l*L+c*N,s[4]=o*A+a*F+l*k+c*O,s[8]=o*P+a*W+l*q+c*H,s[12]=o*S+a*ee+l*$+c*Q,s[1]=f*T+d*E+h*L+_*N,s[5]=f*A+d*F+h*k+_*O,s[9]=f*P+d*W+h*q+_*H,s[13]=f*S+d*ee+h*$+_*Q,s[2]=x*T+m*E+p*L+u*N,s[6]=x*A+m*F+p*k+u*O,s[10]=x*P+m*W+p*q+u*H,s[14]=x*S+m*ee+p*$+u*Q,s[3]=g*T+v*E+y*L+C*N,s[7]=g*A+v*F+y*k+C*O,s[11]=g*P+v*W+y*q+C*H,s[15]=g*S+v*ee+y*$+C*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],_=e[14],x=e[3],m=e[7],p=e[11],u=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*_-i*l*_)+m*(+n*l*_-n*c*h+s*o*h-r*o*_+r*c*f-s*l*f)+p*(+n*c*d-n*a*_-s*o*d+i*o*_+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],_=e[11],x=e[12],m=e[13],p=e[14],u=e[15],g=d*p*c-m*h*c+m*l*_-a*p*_-d*l*u+a*h*u,v=x*h*c-f*p*c-x*l*_+o*p*_+f*l*u-o*h*u,y=f*m*c-x*d*c+x*a*_-o*m*_-f*a*u+o*d*u,C=x*d*l-f*m*l-x*a*h+o*m*h+f*a*p-o*d*p,T=n*g+i*v+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(m*h*s-d*p*s-m*r*_+i*p*_+d*r*u-i*h*u)*A,e[2]=(a*p*s-m*l*s+m*r*c-i*p*c-a*r*u+i*l*u)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*_-i*l*_)*A,e[4]=v*A,e[5]=(f*p*s-x*h*s+x*r*_-n*p*_-f*r*u+n*h*u)*A,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*A,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*_+n*l*_)*A,e[8]=y*A,e[9]=(x*d*s-f*m*s-x*i*_+n*m*_+f*i*u-n*d*u)*A,e[10]=(o*m*s-x*a*s+x*i*c-n*m*c-o*i*u+n*a*u)*A,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*_-n*a*_)*A,e[12]=C*A,e[13]=(f*m*r-x*d*r+x*i*h-n*m*h-f*i*p+n*d*p)*A,e[14]=(x*a*r-o*m*r-x*i*l+n*m*l+o*i*p-n*a*p)*A,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,_=s*f,x=s*d,m=o*f,p=o*d,u=a*d,g=l*c,v=l*f,y=l*d,C=i.x,T=i.y,A=i.z;return r[0]=(1-(m+u))*C,r[1]=(_+y)*C,r[2]=(x-v)*C,r[3]=0,r[4]=(_-y)*T,r[5]=(1-(h+u))*T,r[6]=(p+g)*T,r[7]=0,r[8]=(x+v)*A,r[9]=(p-g)*A,r[10]=(1-(h+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,f=1/o,d=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=f,Fn.elements[5]*=f,Fn.elements[6]*=f,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=vi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let _,x;if(a===vi)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Rl)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,_=(i+r)*f;let x,m;if(a===vi)x=(o+s)*d,m=-2*d;else if(a===Rl)x=s*d,m=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=m,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new D,Fn=new gt,pS=new D(0,0,0),mS=new D(1,1,1),Pi=new D,_a=new D,pn=new D,Tp=new gt,wp=new ri;class Kl{constructor(e=0,n=0,i=0,r=Kl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kl.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gS=0;const Ap=new D,Hr=new ri,ui=new gt,va=new D,Qs=new D,_S=new D,vS=new ri,Rp=new D(1,0,0),Cp=new D(0,1,0),bp=new D(0,0,1),xS={type:"added"},yS={type:"removed"};class Rt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new D,n=new Kl,i=new ri,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ge}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(bp,e)}translateOnAxis(e,n){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?va.copy(e):va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Qs,va,this.up):ui.lookAt(va,Qs,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(ui),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,_S),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,vS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),_=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new D(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new D,fi=new D,Wc=new D,di=new D,Gr=new D,Vr=new D,Pp=new D,Xc=new D,jc=new D,qc=new D;let xa=!1;class bn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),fi.subVectors(i,n),Wc.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(fi),l=zn.dot(Wc),c=fi.dot(fi),f=fi.dot(Wc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,_=(c*l-a*f)*h,x=(o*f-a*l)*h;return s.set(1-_-x,x,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,n,i,r,s,o,a,l){return xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),fi.subVectors(e,n),zn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xa=!0),bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,i),Vr.subVectors(s,i),Xc.subVectors(e,i);const l=Gr.dot(Xc),c=Vr.dot(Xc);if(l<=0&&c<=0)return n.copy(i);jc.subVectors(e,r);const f=Gr.dot(jc),d=Vr.dot(jc);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Gr,o);qc.subVectors(e,s);const _=Gr.dot(qc),x=Vr.dot(qc);if(x>=0&&_<=x)return n.copy(s);const m=_*c-l*x;if(m<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Vr,a);const p=f*x-_*d;if(p<=0&&d-f>=0&&_-x>=0)return Pp.subVectors(s,r),a=(d-f)/(d-f+(_-x)),n.copy(r).addScaledVector(Pp,a);const u=1/(p+m+h);return o=m*u,a=h*u,n.copy(i).addScaledVector(Gr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Yc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=dd(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Yc(o,s,e+1/3),this.g=Yc(o,s,e),this.b=Yc(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ft){const i=Q0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=Oc(e.r),this.g=Oc(e.g),this.b=Oc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Je.fromWorkingColorSpace(Wt.copy(this),e),Math.round(tn(Wt.r*255,0,255))*65536+Math.round(tn(Wt.g*255,0,255))*256+Math.round(tn(Wt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ft){Je.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Ft?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(ya);const i=mo(Li.h,ya.h,n),r=mo(Li.s,ya.s,n),s=mo(Li.l,ya.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new qe;qe.NAMES=Q0;let SS=0;class Nr extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Ss,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rf&&(i.blendSrc=this.blendSrc),this.blendDst!==sf&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==El&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fs extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new D,Sa=new Xe;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sa.fromBufferAttribute(this,n),Sa.applyMatrix3(e),this.setXY(n,Sa.x,Sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}}class J0 extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class e_ extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class at extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let MS=0;const wn=new gt,$c=new Rt,Wr=new D,mn=new Wo,Js=new Wo,Dt=new D;class qt extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y0(e)?e_:J0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(mn.min,Js.min),mn.expandByPoint(Dt),Dt.addVectors(mn.max,Js.max),mn.expandByPoint(Dt)):(mn.expandByPoint(Js.min),mn.expandByPoint(Js.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Dt.fromBufferAttribute(a,c),l&&(Wr.fromBufferAttribute(e,c),Dt.add(Wr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let E=0;E<a;E++)c[E]=new D,f[E]=new D;const d=new D,h=new D,_=new D,x=new Xe,m=new Xe,p=new Xe,u=new D,g=new D;function v(E,F,W){d.fromArray(r,E*3),h.fromArray(r,F*3),_.fromArray(r,W*3),x.fromArray(o,E*2),m.fromArray(o,F*2),p.fromArray(o,W*2),h.sub(d),_.sub(d),m.sub(x),p.sub(x);const ee=1/(m.x*p.y-p.x*m.y);isFinite(ee)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(_,-m.y).multiplyScalar(ee),g.copy(_).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(ee),c[E].add(u),c[F].add(u),c[W].add(u),f[E].add(g),f[F].add(g),f[W].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,F=y.length;E<F;++E){const W=y[E],ee=W.start,L=W.count;for(let k=ee,q=ee+L;k<q;k+=3)v(i[k+0],i[k+1],i[k+2])}const C=new D,T=new D,A=new D,P=new D;function S(E){A.fromArray(s,E*3),P.copy(A);const F=c[E];C.copy(F),C.sub(A.multiplyScalar(A.dot(F))).normalize(),T.crossVectors(P,F);const ee=T.dot(f[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=ee}for(let E=0,F=y.length;E<F;++E){const W=y[E],ee=W.start,L=W.count;for(let k=ee,q=ee+L;k<q;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,_=i.count;h<_;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,f=new D,d=new D;if(e)for(let h=0,_=e.count;h<_;h+=3){const x=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,_=n.count;h<_;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let _=0,x=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?_=l[m]*a.data.stride+a.offset:_=l[m]*f;for(let u=0;u<f;u++)h[x++]=c[_++]}return new Yn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],_=e(h,i);l.push(_)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const _=c[d];f.push(_.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,_=d.length;h<_;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lp=new gt,ar=new $l,Ma=new Xo,Dp=new D,Xr=new D,jr=new D,qr=new D,Kc=new D,Ea=new D,Ta=new Xe,wa=new Xe,Aa=new Xe,Np=new D,Up=new D,Ip=new D,Ra=new D,Ca=new D;class ht extends Rt{constructor(e=new qt,n=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Kc.fromBufferAttribute(d,e),o?Ea.addScaledVector(Kc,f):Ea.addScaledVector(Kc.sub(n),f))}n.add(Ea)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ma.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ma,Dp)===null||ar.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Lp.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Lp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,m=h.length;x<m;x++){const p=h[x],u=o[p.materialIndex],g=Math.max(p.start,_.start),v=Math.min(a.count,Math.min(p.start+p.count,_.start+_.count));for(let y=g,C=v;y<C;y+=3){const T=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);r=ba(this,u,e,i,c,f,d,T,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),m=Math.min(a.count,_.start+_.count);for(let p=x,u=m;p<u;p+=3){const g=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);r=ba(this,o,e,i,c,f,d,g,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,m=h.length;x<m;x++){const p=h[x],u=o[p.materialIndex],g=Math.max(p.start,_.start),v=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let y=g,C=v;y<C;y+=3){const T=y,A=y+1,P=y+2;r=ba(this,u,e,i,c,f,d,T,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),m=Math.min(l.count,_.start+_.count);for(let p=x,u=m;p<u;p+=3){const g=p,v=p+1,y=p+2;r=ba(this,o,e,i,c,f,d,g,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function ES(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ca);return c<n.near||c>n.far?null:{distance:c,point:Ca.clone(),object:t}}function ba(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xr),t.getVertexPosition(l,jr),t.getVertexPosition(c,qr);const f=ES(t,e,n,i,Xr,jr,qr,Ra);if(f){r&&(Ta.fromBufferAttribute(r,a),wa.fromBufferAttribute(r,l),Aa.fromBufferAttribute(r,c),f.uv=bn.getInterpolation(Ra,Xr,jr,qr,Ta,wa,Aa,new Xe)),s&&(Ta.fromBufferAttribute(s,a),wa.fromBufferAttribute(s,l),Aa.fromBufferAttribute(s,c),f.uv1=bn.getInterpolation(Ra,Xr,jr,qr,Ta,wa,Aa,new Xe),f.uv2=f.uv1),o&&(Np.fromBufferAttribute(o,a),Up.fromBufferAttribute(o,l),Ip.fromBufferAttribute(o,c),f.normal=bn.getInterpolation(Ra,Xr,jr,qr,Np,Up,Ip,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};bn.getNormal(Xr,jr,qr,d.normal),f.face=d}return f}class br extends qt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,_=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function x(m,p,u,g,v,y,C,T,A,P,S){const E=y/A,F=C/P,W=y/2,ee=C/2,L=T/2,k=A+1,q=P+1;let $=0,N=0;const O=new D;for(let H=0;H<q;H++){const Q=H*F-ee;for(let J=0;J<k;J++){const j=J*E-W;O[m]=j*g,O[p]=Q*v,O[u]=L,c.push(O.x,O.y,O.z),O[m]=0,O[p]=0,O[u]=T>0?1:-1,f.push(O.x,O.y,O.z),d.push(J/A),d.push(1-H/P),$+=1}}for(let H=0;H<P;H++)for(let Q=0;Q<A;Q++){const J=h+Q+k*H,j=h+Q+k*(H+1),K=h+(Q+1)+k*(H+1),ce=h+(Q+1)+k*H;l.push(J,j,ce),l.push(j,K,ce),N+=6}a.addGroup(_,N,S),_+=N,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function TS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function t_(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const wS={clone:Us,merge:Qt};var AS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=TS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class n_ extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends n_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,$r=1;class CS extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Yr,$r,e,n);r.layers=this.layers,this.add(r);const s=new _n(Yr,$r,e,n);s.layers=this.layers,this.add(s);const o=new _n(Yr,$r,e,n);o.layers=this.layers,this.add(o);const a=new _n(Yr,$r,e,n);a.layers=this.layers,this.add(a);const l=new _n(Yr,$r,e,n);l.layers=this.layers,this.add(l);const c=new _n(Yr,$r,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,_),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class i_ extends yn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ls,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bS extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mr?Ft:Pn),this.texture=new i_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new br(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Yi});s.uniforms.tEquirect.value=n;const o=new ht(r,s),a=n.minFilter;return n.minFilter===Io&&(n.minFilter=Cn),new CS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Zc=new D,PS=new D,LS=new Ge;class fr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zc.subVectors(i,n).cross(PS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LS.getNormalMatrix(e),r=this.coplanarPoint(Zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Xo,Pa=new D;class pd{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,o=new fr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],_=r[8],x=r[9],m=r[10],p=r[11],u=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-_,y-u).normalize(),i[1].setComponents(l+s,h+c,p+_,y+u).normalize(),i[2].setComponents(l+o,h+f,p+x,y+g).normalize(),i[3].setComponents(l-o,h-f,p-x,y-g).normalize(),i[4].setComponents(l-a,h-d,p-m,y-v).normalize(),n===vi)i[5].setComponents(l+a,h+d,p+m,y+v).normalize();else if(n===Rl)i[5].setComponents(a,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function r_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function DS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,_=d.byteLength,x=t.createBuffer();t.bindBuffer(f,x),t.bufferData(f,d,h),c.onUploadCallback();let m;if(d instanceof Float32Array)m=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)m=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=t.SHORT;else if(d instanceof Uint32Array)m=t.UNSIGNED_INT;else if(d instanceof Int32Array)m=t.INT;else if(d instanceof Int8Array)m=t.BYTE;else if(d instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:_}}function s(c,f,d){const h=f.array,_=f._updateRange,x=f.updateRanges;if(t.bindBuffer(d,c),_.count===-1&&x.length===0&&t.bufferSubData(d,0,h),x.length!==0){for(let m=0,p=x.length;m<p;m++){const u=x[m];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}_.count!==-1&&(n?t.bufferSubData(d,_.offset*h.BYTES_PER_ELEMENT,h,_.offset,_.count):t.bufferSubData(d,_.offset*h.BYTES_PER_ELEMENT,h.subarray(_.offset,_.offset+_.count)),_.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class md extends qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,_=[],x=[],m=[],p=[];for(let u=0;u<f;u++){const g=u*h-o;for(let v=0;v<c;v++){const y=v*d-s;x.push(y,-g,0),m.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,y=g+c*(u+1),C=g+1+c*(u+1),T=g+1+c*u;_.push(v,y,T),_.push(y,C,T)}this.setIndex(_),this.setAttribute("position",new at(x,3)),this.setAttribute("normal",new at(m,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.width,e.height,e.widthSegments,e.heightSegments)}}var NS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,US=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,IS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,VS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,BM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,YM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,KM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:NS,alphahash_pars_fragment:US,alphamap_fragment:IS,alphamap_pars_fragment:OS,alphatest_fragment:FS,alphatest_pars_fragment:zS,aomap_fragment:kS,aomap_pars_fragment:BS,batching_pars_vertex:HS,batching_vertex:GS,begin_vertex:VS,beginnormal_vertex:WS,bsdfs:XS,iridescence_fragment:jS,bumpmap_pars_fragment:qS,clipping_planes_fragment:YS,clipping_planes_pars_fragment:$S,clipping_planes_pars_vertex:KS,clipping_planes_vertex:ZS,color_fragment:QS,color_pars_fragment:JS,color_pars_vertex:eM,color_vertex:tM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:rM,displacementmap_pars_vertex:sM,displacementmap_vertex:oM,emissivemap_fragment:aM,emissivemap_pars_fragment:lM,colorspace_fragment:cM,colorspace_pars_fragment:uM,envmap_fragment:fM,envmap_common_pars_fragment:dM,envmap_pars_fragment:hM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:AM,envmap_vertex:mM,fog_vertex:gM,fog_pars_vertex:_M,fog_fragment:vM,fog_pars_fragment:xM,gradientmap_pars_fragment:yM,lightmap_fragment:SM,lightmap_pars_fragment:MM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:TM,lights_pars_begin:wM,lights_toon_fragment:RM,lights_toon_pars_fragment:CM,lights_phong_fragment:bM,lights_phong_pars_fragment:PM,lights_physical_fragment:LM,lights_physical_pars_fragment:DM,lights_fragment_begin:NM,lights_fragment_maps:UM,lights_fragment_end:IM,logdepthbuf_fragment:OM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:kM,map_fragment:BM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:VM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:XM,morphcolor_vertex:jM,morphnormal_vertex:qM,morphtarget_pars_vertex:YM,morphtarget_vertex:$M,normal_fragment_begin:KM,normal_fragment_maps:ZM,normal_pars_fragment:QM,normal_pars_vertex:JM,normal_vertex:eE,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,opaque_fragment:oE,packing:aE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:fE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:_E,skinbase_vertex:vE,skinning_pars_vertex:xE,skinning_vertex:yE,skinnormal_vertex:SE,specularmap_fragment:ME,specularmap_pars_fragment:EE,tonemapping_fragment:TE,tonemapping_pars_fragment:wE,transmission_fragment:AE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:bE,uv_vertex:PE,worldpos_vertex:LE,background_vert:DE,background_frag:NE,backgroundCube_vert:UE,backgroundCube_frag:IE,cube_vert:OE,cube_frag:FE,depth_vert:zE,depth_frag:kE,distanceRGBA_vert:BE,distanceRGBA_frag:HE,equirect_vert:GE,equirect_frag:VE,linedashed_vert:WE,linedashed_frag:XE,meshbasic_vert:jE,meshbasic_frag:qE,meshlambert_vert:YE,meshlambert_frag:$E,meshmatcap_vert:KE,meshmatcap_frag:ZE,meshnormal_vert:QE,meshnormal_frag:JE,meshphong_vert:e1,meshphong_frag:t1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:r1,meshtoon_frag:s1,points_vert:o1,points_frag:a1,shadow_vert:l1,shadow_frag:c1,sprite_vert:u1,sprite_frag:f1},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ti={basic:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Qt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Qt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Qt([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Qt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Qt([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Qt([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Qt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Qt([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ti.physical={uniforms:Qt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const La={r:0,b:0,g:0};function d1(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,f,d=null,h=0,_=null;function x(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?m(a,l):v&&v.isColor&&(m(v,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ql)?(f===void 0&&(f=new ht(new br(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:Us(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=Je.getTransfer(v.colorSpace)!==st,(d!==v||h!==v.version||_!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,_=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ht(new md(2,2),new Pr({name:"BackgroundMaterial",uniforms:Us(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Je.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||_!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,_=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,u){p.getRGB(La,t_(t)),i.buffers.color.setClear(La.r,La.g,La.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:x}}function h1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(L,k,q,$,N){let O=!1;if(o){const H=m($,q,k);c!==H&&(c=H,_(c.object)),O=u(L,$,q,N),O&&g(L,$,q,N)}else{const H=k.wireframe===!0;(c.geometry!==$.id||c.program!==q.id||c.wireframe!==H)&&(c.geometry=$.id,c.program=q.id,c.wireframe=H,O=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,P(L,k,q,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function _(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,k,q){const $=q.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let O=N[k.id];O===void 0&&(O={},N[k.id]=O);let H=O[$];return H===void 0&&(H=p(h()),O[$]=H),H}function p(L){const k=[],q=[],$=[];for(let N=0;N<r;N++)k[N]=0,q[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:$,object:L,attributes:{},index:null}}function u(L,k,q,$){const N=c.attributes,O=k.attributes;let H=0;const Q=q.getAttributes();for(const J in Q)if(Q[J].location>=0){const K=N[J];let ce=O[J];if(ce===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;H++}return c.attributesNum!==H||c.index!==$}function g(L,k,q,$){const N={},O=k.attributes;let H=0;const Q=q.getAttributes();for(const J in Q)if(Q[J].location>=0){let K=O[J];K===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),N[J]=ce,H++}c.attributes=N,c.attributesNum=H,c.index=$}function v(){const L=c.newAttributes;for(let k=0,q=L.length;k<q;k++)L[k]=0}function y(L){C(L,0)}function C(L,k){const q=c.newAttributes,$=c.enabledAttributes,N=c.attributeDivisors;q[L]=1,$[L]===0&&(t.enableVertexAttribArray(L),$[L]=1),N[L]!==k&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),N[L]=k)}function T(){const L=c.newAttributes,k=c.enabledAttributes;for(let q=0,$=k.length;q<$;q++)k[q]!==L[q]&&(t.disableVertexAttribArray(q),k[q]=0)}function A(L,k,q,$,N,O,H){H===!0?t.vertexAttribIPointer(L,k,q,N,O):t.vertexAttribPointer(L,k,q,$,N,O)}function P(L,k,q,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=$.attributes,O=q.getAttributes(),H=k.defaultAttributeValues;for(const Q in O){const J=O[Q];if(J.location>=0){let j=N[Q];if(j===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const K=j.normalized,ce=j.itemSize,Y=n.get(j);if(Y===void 0)continue;const re=Y.buffer,Ee=Y.type,de=Y.bytesPerElement,xe=i.isWebGL2===!0&&(Ee===t.INT||Ee===t.UNSIGNED_INT||j.gpuType===z0);if(j.isInterleavedBufferAttribute){const Ve=j.data,I=Ve.stride,It=j.offset;if(Ve.isInstancedInterleavedBuffer){for(let Te=0;Te<J.locationSize;Te++)C(J.location+Te,Ve.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Te=0;Te<J.locationSize;Te++)y(J.location+Te);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Te=0;Te<J.locationSize;Te++)A(J.location+Te,ce/J.locationSize,Ee,K,I*de,(It+ce/J.locationSize*Te)*de,xe)}else{if(j.isInstancedBufferAttribute){for(let Ve=0;Ve<J.locationSize;Ve++)C(J.location+Ve,j.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ve=0;Ve<J.locationSize;Ve++)y(J.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Ve=0;Ve<J.locationSize;Ve++)A(J.location+Ve,ce/J.locationSize,Ee,K,ce*de,ce/J.locationSize*Ve*de,xe)}}else if(H!==void 0){const K=H[Q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(J.location,K);break;case 3:t.vertexAttrib3fv(J.location,K);break;case 4:t.vertexAttrib4fv(J.location,K);break;default:t.vertexAttrib1fv(J.location,K)}}}}T()}function S(){W();for(const L in a){const k=a[L];for(const q in k){const $=k[q];for(const N in $)x($[N].object),delete $[N];delete k[q]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const q in k){const $=k[q];for(const N in $)x($[N].object),delete $[N];delete k[q]}delete a[L.id]}function F(L){for(const k in a){const q=a[k];if(q[L.id]===void 0)continue;const $=q[L.id];for(const N in $)x($[N].object),delete $[N];delete q[L.id]}}function W(){ee(),f=!0,c!==l&&(c=l,_(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:ee,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function p1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let _,x;if(r)_=t,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<h;x++)this.render(f[x],d[x]);else{_.multiDrawArraysWEBGL(s,f,0,d,0,h);let x=0;for(let m=0;m<h;m++)x+=d[m];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function m1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),C=v&&y,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:T}}function g1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new fr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const _=d.length!==0||h||i!==0||r;return r=h,i=d.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,_){const x=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,v=g*4;let y=u.clippingState||null;l.value=y,y=f(x,h,v,_);for(let C=0;C!==v;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,_,x){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=l.value,x!==!0||p===null){const u=_+m*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,y=_;v!==m;++v,y+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function _1(t){let e=new WeakMap;function n(o,a){return a===of?o.mapping=Ls:a===af&&(o.mapping=Ds),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===of||a===af)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class s_ extends n_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,Op=[.125,.215,.35,.446,.526,.582],pr=20,Qc=new s_,Fp=new qe;let Jc=null,eu=0,tu=0;const dr=(1+Math.sqrt(5))/2,Kr=1/dr,zp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,dr,Kr),new D(0,dr,-Kr),new D(Kr,0,dr),new D(-Kr,0,dr),new D(dr,Kr,0),new D(-dr,Kr,0)];class kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,eu,tu),e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Oo,format:Xn,colorSpace:Ti,depthBuffer:!1},r=Bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v1(s)),this._blurMaterial=x1(s,e,n)}return r}_compileMaterial(e){const n=new ht(this._lodPlanes[0],e);this._renderer.compile(n,Qc)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Fp),f.toneMapping=$i,f.autoClear=!1;const _=new fs({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new ht(new br,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(Fp),m=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Da(r,g*v,u>2?v:0,v,v),f.setRenderTarget(r),m&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ls||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Da(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zp[(r-1)%zp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ht(this._lodPlanes[r],c),h=c.uniforms,_=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*pr-1),m=s/x,p=isFinite(s)?1+Math.floor(f*m):pr;p>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pr}`);const u=[];let g=0;for(let A=0;A<pr;++A){const P=A/m,S=Math.exp(-P*P/2);u.push(S),A===0?g+=S:A<p&&(g+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-ds?r-v+ds:0),T=4*(this._cubeSize-y);Da(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(d,Qc)}}function v1(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+Op.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ds?l=Op[o-t+ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],_=6,x=6,m=3,p=2,u=1,g=new Float32Array(m*x*_),v=new Float32Array(p*x*_),y=new Float32Array(u*x*_);for(let T=0;T<_;T++){const A=T%3*2/3-1,P=T>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(S,m*x*T),v.set(h,p*x*T);const E=[T,T,T,T,T,T];y.set(E,u*x*T)}const C=new qt;C.setAttribute("position",new Yn(g,m)),C.setAttribute("uv",new Yn(v,p)),C.setAttribute("faceIndex",new Yn(y,u)),e.push(C),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bp(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Da(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function x1(t,e,n){const i=new Float32Array(pr),r=new D(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Hp(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Gp(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===of||l===af,f=l===Ls||l===Ds;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new kp(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new kp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function S1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function M1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const m=h.morphAttributes[x];for(let p=0,u=m.length;p<u;p++)e.remove(m[p])}h.removeEventListener("dispose",o),delete r[h.id];const _=s.get(h);_&&(e.remove(_),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const _=d.morphAttributes;for(const x in _){const m=_[x];for(let p=0,u=m.length;p<u;p++)e.update(m[p],t.ARRAY_BUFFER)}}function c(d){const h=[],_=d.index,x=d.attributes.position;let m=0;if(_!==null){const g=_.array;m=_.version;for(let v=0,y=g.length;v<y;v+=3){const C=g[v+0],T=g[v+1],A=g[v+2];h.push(C,T,T,A,A,C)}}else if(x!==void 0){const g=x.array;m=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const C=v+0,T=v+1,A=v+2;h.push(C,T,T,A,A,C)}}else return;const p=new(Y0(h)?e_:J0)(h,1);p.version=m;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const _=d.index;_!==null&&h.version<_.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function E1(t,e,n,i){const r=i.isWebGL2;let s;function o(_){s=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function f(_,x){t.drawElements(s,x,a,_*l),n.update(x,s,1)}function d(_,x,m){if(m===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,a,_*l,m),n.update(x,s,m)}function h(_,x,m){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<m;u++)this.render(_[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,a,_,0,m);let u=0;for(let g=0;g<m;g++)u+=x[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function T1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function w1(t,e){return t[0]-e[0]}function A1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function R1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,m=x!==void 0?x.length:0;let p=s.get(f);if(p===void 0||p.count!==m){let k=function(){ee.dispose(),s.delete(f),f.removeEventListener("dispose",k)};var _=k;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),C===!0&&(S=3);let E=f.attributes.position.count*S,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const W=new Float32Array(E*F*4*m),ee=new Z0(W,E,F,m);ee.type=ki,ee.needsUpdate=!0;const L=S*4;for(let q=0;q<m;q++){const $=T[q],N=A[q],O=P[q],H=E*F*4*q;for(let Q=0;Q<$.count;Q++){const J=Q*L;v===!0&&(o.fromBufferAttribute($,Q),W[H+J+0]=o.x,W[H+J+1]=o.y,W[H+J+2]=o.z,W[H+J+3]=0),y===!0&&(o.fromBufferAttribute(N,Q),W[H+J+4]=o.x,W[H+J+5]=o.y,W[H+J+6]=o.z,W[H+J+7]=0),C===!0&&(o.fromBufferAttribute(O,Q),W[H+J+8]=o.x,W[H+J+9]=o.y,W[H+J+10]=o.z,W[H+J+11]=O.itemSize===4?o.w:1)}}p={count:m,texture:ee,size:new Xe(E,F)},s.set(f,p),f.addEventListener("dispose",k)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const g=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let m=i[f.id];if(m===void 0||m.length!==x){m=[];for(let y=0;y<x;y++)m[y]=[y,0];i[f.id]=m}for(let y=0;y<x;y++){const C=m[y];C[0]=y,C[1]=h[y]}m.sort(A1);for(let y=0;y<8;y++)y<x&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(w1);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const C=a[y],T=C[0],A=C[1];T!==Number.MAX_SAFE_INTEGER&&A?(p&&f.getAttribute("morphTarget"+y)!==p[T]&&f.setAttribute("morphTarget"+y,p[T]),u&&f.getAttribute("morphNormal"+y)!==u[T]&&f.setAttribute("morphNormal"+y,u[T]),r[y]=A,g+=A):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),u&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const v=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function C1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class o_ extends yn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Sr,f!==Sr&&f!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Sr&&(i=zi),i===void 0&&f===Ns&&(i=yr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const a_=new yn,l_=new o_(1,1);l_.compareFunction=q0;const c_=new Z0,u_=new dS,f_=new i_,Vp=[],Wp=[],Xp=new Float32Array(16),jp=new Float32Array(9),qp=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vp[r];if(s===void 0&&(s=new Float32Array(r),Vp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zl(t,e){let n=Wp[e];n===void 0&&(n=new Int32Array(e),Wp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function b1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function P1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function N1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;qp.set(i),t.uniformMatrix2fv(this.addr,!1,qp),bt(n,i)}}function U1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;jp.set(i),t.uniformMatrix3fv(this.addr,!1,jp),bt(n,i)}}function I1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Xp.set(i),t.uniformMatrix4fv(this.addr,!1,Xp),bt(n,i)}}function O1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function B1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function W1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?l_:a_;n.setTexture2D(e||s,r)}function X1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||u_,r)}function j1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||f_,r)}function q1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||c_,r)}function Y1(t){switch(t){case 5126:return b1;case 35664:return P1;case 35665:return L1;case 35666:return D1;case 35674:return N1;case 35675:return U1;case 35676:return I1;case 5124:case 35670:return O1;case 35667:case 35671:return F1;case 35668:case 35672:return z1;case 35669:case 35673:return k1;case 5125:return B1;case 36294:return H1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return q1}}function $1(t,e){t.uniform1fv(this.addr,e)}function K1(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function Z1(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function Q1(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function J1(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eT(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tT(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nT(t,e){t.uniform1iv(this.addr,e)}function iT(t,e){t.uniform2iv(this.addr,e)}function rT(t,e){t.uniform3iv(this.addr,e)}function sT(t,e){t.uniform4iv(this.addr,e)}function oT(t,e){t.uniform1uiv(this.addr,e)}function aT(t,e){t.uniform2uiv(this.addr,e)}function lT(t,e){t.uniform3uiv(this.addr,e)}function cT(t,e){t.uniform4uiv(this.addr,e)}function uT(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a_,s[o])}function fT(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||u_,s[o])}function dT(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||f_,s[o])}function hT(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||c_,s[o])}function pT(t){switch(t){case 5126:return $1;case 35664:return K1;case 35665:return Z1;case 35666:return Q1;case 35674:return J1;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return aT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}class mT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Y1(n.type)}}class gT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pT(n.type)}}class _T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function Yp(t,e){t.seq.push(e),t.map[e.id]=e}function vT(t,e,n){const i=t.name,r=i.length;for(nu.lastIndex=0;;){const s=nu.exec(i),o=nu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yp(n,c===void 0?new mT(a,t,e):new gT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new _T(a),Yp(n,d)),n=d}}}class Za{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);vT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function $p(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xT=37297;let yT=0;function ST(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function MT(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Al&&n===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&n===Al&&(i="LinearSRGBToLinearDisplayP3"),t){case Ti:case Yl:return[i,"LinearTransferOETF"];case Ft:case fd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ST(t.getShaderSource(e),o)}else return r}function ET(t,e){const n=MT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function TT(t,e){let n;switch(e){case Ey:n="Linear";break;case Ty:n="Reinhard";break;case wy:n="OptimizedCineon";break;case O0:n="ACESFilmic";break;case Ry:n="AgX";break;case Ay:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function AT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hs).join(`
`)}function RT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function hs(t){return t!==""}function Zp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bT=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(t){return t.replace(bT,LT)}const PT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function LT(t,e){let n=Oe[e];if(n===void 0){const i=PT.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return df(n)}const DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(t){return t.replace(DT,NT)}function NT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function em(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Zx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function IT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ls:case Ds:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function FT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case I0:e="ENVMAP_BLENDING_MULTIPLY";break;case Sy:e="ENVMAP_BLENDING_MIX";break;case My:e="ENVMAP_BLENDING_ADD";break}return e}function zT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UT(n),c=IT(n),f=OT(n),d=FT(n),h=zT(n),_=n.isWebGL2?"":wT(n),x=AT(n),m=RT(s),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(hs).join(`
`),u.length>0&&(u+=`
`),g=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(hs).join(`
`),g.length>0&&(g+=`
`)):(u=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),g=[_,em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Oe.tonemapping_pars_fragment:"",n.toneMapping!==$i?TT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,ET("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hs).join(`
`)),o=df(o),o=Zp(o,n),o=Qp(o,n),a=df(a),a=Zp(a,n),a=Qp(a,n),o=Jp(o),a=Jp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+u+o,C=v+g+a,T=$p(r,r.VERTEX_SHADER,y),A=$p(r,r.FRAGMENT_SHADER,C);r.attachShader(p,T),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function P(W){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(T).trim(),k=r.getShaderInfoLog(A).trim();let q=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,T,A);else{const N=Kp(r,T,"vertex"),O=Kp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+N+`
`+O)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(L===""||k==="")&&($=!1);$&&(W.diagnostics={runnable:q,programLog:ee,vertexShader:{log:L,prefix:u},fragmentShader:{log:k,prefix:g}})}r.deleteShader(T),r.deleteShader(A),S=new Za(r,p),E=CT(r,p)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(p,xT)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}let BT=0;class HT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new GT(e),n.set(e,i)),i}}class GT{constructor(e){this.id=BT++,this.code=e,this.usedTimes=0}}function VT(t,e,n,i,r,s,o){const a=new hd,l=new HT,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return S===0?"uv":`uv${S}`}function p(S,E,F,W,ee){const L=W.fog,k=ee.geometry,q=S.isMeshStandardMaterial?W.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||q),N=$&&$.mapping===ql?$.image.height:null,O=x[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const H=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Q=H!==void 0?H.length:0;let J=0;k.morphAttributes.position!==void 0&&(J=1),k.morphAttributes.normal!==void 0&&(J=2),k.morphAttributes.color!==void 0&&(J=3);let j,K,ce,Y;if(O){const Yt=ti[O];j=Yt.vertexShader,K=Yt.fragmentShader}else j=S.vertexShader,K=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const re=t.getRenderTarget(),Ee=ee.isInstancedMesh===!0,de=ee.isBatchedMesh===!0,xe=!!S.map,Ve=!!S.matcap,I=!!$,It=!!S.aoMap,Te=!!S.lightMap,be=!!S.bumpMap,ve=!!S.normalMap,ut=!!S.displacementMap,Fe=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,G=S.anisotropy>0,se=S.clearcoat>0,ne=S.iridescence>0,oe=S.sheen>0,Se=S.transmission>0,he=G&&!!S.anisotropyMap,ge=se&&!!S.clearcoatMap,Ce=se&&!!S.clearcoatNormalMap,ze=se&&!!S.clearcoatRoughnessMap,te=ne&&!!S.iridescenceMap,Qe=ne&&!!S.iridescenceThicknessMap,We=oe&&!!S.sheenColorMap,De=oe&&!!S.sheenRoughnessMap,we=!!S.specularMap,_e=!!S.specularColorMap,Ie=!!S.specularIntensityMap,Ke=Se&&!!S.transmissionMap,vt=Se&&!!S.thicknessMap,Be=!!S.gradientMap,ae=!!S.alphaMap,b=S.alphaTest>0,ue=!!S.alphaHash,fe=!!S.extensions,Pe=!!k.attributes.uv1,Ae=!!k.attributes.uv2,et=!!k.attributes.uv3;let tt=$i;return S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:K,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:de,instancing:Ee,instancingColor:Ee&&ee.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ti,map:xe,matcap:Ve,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:N,aoMap:It,lightMap:Te,bumpMap:be,normalMap:ve,displacementMap:h&&ut,emissiveMap:Fe,normalMapObjectSpace:ve&&S.normalMapType===ky,normalMapTangentSpace:ve&&S.normalMapType===j0,metalnessMap:R,roughnessMap:M,anisotropy:G,anisotropyMap:he,clearcoat:se,clearcoatMap:ge,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ze,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:Qe,sheen:oe,sheenColorMap:We,sheenRoughnessMap:De,specularMap:we,specularColorMap:_e,specularIntensityMap:Ie,transmission:Se,transmissionMap:Ke,thicknessMap:vt,gradientMap:Be,opaque:S.transparent===!1&&S.blending===Ss,alphaMap:ae,alphaTest:b,alphaHash:ue,combine:S.combine,mapUv:xe&&m(S.map.channel),aoMapUv:It&&m(S.aoMap.channel),lightMapUv:Te&&m(S.lightMap.channel),bumpMapUv:be&&m(S.bumpMap.channel),normalMapUv:ve&&m(S.normalMap.channel),displacementMapUv:ut&&m(S.displacementMap.channel),emissiveMapUv:Fe&&m(S.emissiveMap.channel),metalnessMapUv:R&&m(S.metalnessMap.channel),roughnessMapUv:M&&m(S.roughnessMap.channel),anisotropyMapUv:he&&m(S.anisotropyMap.channel),clearcoatMapUv:ge&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(S.sheenRoughnessMap.channel),specularMapUv:we&&m(S.specularMap.channel),specularColorMapUv:_e&&m(S.specularColorMap.channel),specularIntensityMapUv:Ie&&m(S.specularIntensityMap.channel),transmissionMapUv:Ke&&m(S.transmissionMap.channel),thicknessMapUv:vt&&m(S.thicknessMap.channel),alphaMapUv:ae&&m(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ve||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ae,vertexUv3s:et,pointsUvs:ee.isPoints===!0&&!!k.attributes.uv&&(xe||ae),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ii,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:fe&&S.extensions.derivatives===!0,extensionFragDepth:fe&&S.extensions.fragDepth===!0,extensionDrawBuffers:fe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)E.push(F),E.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(g(E,S),v(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function g(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=x[S.type];let F;if(E){const W=ti[E];F=wS.clone(W.uniforms)}else F=S.uniforms;return F}function C(S,E){let F;for(let W=0,ee=c.length;W<ee;W++){const L=c[W];if(L.cacheKey===E){F=L,++F.usedTimes;break}}return F===void 0&&(F=new kT(t,E,S,s),c.push(F)),F}function T(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:P}}function WT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function XT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,_,x,m,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:_,groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=_,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=m,u.group=p),e++,u}function a(d,h,_,x,m,p){const u=o(d,h,_,x,m,p);_.transmission>0?i.push(u):_.transparent===!0?r.push(u):n.push(u)}function l(d,h,_,x,m,p){const u=o(d,h,_,x,m,p);_.transmission>0?i.unshift(u):_.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||XT),i.length>1&&i.sort(h||tm),r.length>1&&r.sort(h||tm)}function f(){for(let d=e,h=t.length;d<h;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function jT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new nm,t.set(i,[o])):r>=s.length?(o=new nm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new qe};break;case"SpotLight":n={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function YT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $T=0;function KT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZT(t,e){const n=new qT,i=YT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new D);const s=new D,o=new gt,a=new gt;function l(f,d){let h=0,_=0,x=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let m=0,p=0,u=0,g=0,v=0,y=0,C=0,T=0,A=0,P=0,S=0;f.sort(KT);const E=d===!0?Math.PI:1;for(let W=0,ee=f.length;W<ee;W++){const L=f[W],k=L.color,q=L.intensity,$=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*q*E,_+=k.g*q*E,x+=k.b*q*E;else if(L.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(L.sh.coefficients[O],q);S++}else if(L.isDirectionalLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const H=L.shadow,Q=i.get(L);Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,r.directionalShadow[m]=Q,r.directionalShadowMap[m]=N,r.directionalShadowMatrix[m]=L.shadow.matrix,y++}r.directional[m]=O,m++}else if(L.isSpotLight){const O=n.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(k).multiplyScalar(q*E),O.distance=$,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,r.spot[u]=O;const H=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,H.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[u]=H.matrix,L.castShadow){const Q=i.get(L);Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,r.spotShadow[u]=Q,r.spotShadowMap[u]=N,T++}u++}else if(L.isRectAreaLight){const O=n.get(L);O.color.copy(k).multiplyScalar(q),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=O,g++}else if(L.isPointLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*E),O.distance=L.distance,O.decay=L.decay,L.castShadow){const H=L.shadow,Q=i.get(L);Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,r.pointShadow[p]=Q,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=L.shadow.matrix,C++}r.point[p]=O,p++}else if(L.isHemisphereLight){const O=n.get(L);O.skyColor.copy(L.color).multiplyScalar(q*E),O.groundColor.copy(L.groundColor).multiplyScalar(q*E),r.hemi[v]=O,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=_,r.ambient[2]=x;const F=r.hash;(F.directionalLength!==m||F.pointLength!==p||F.spotLength!==u||F.rectAreaLength!==g||F.hemiLength!==v||F.numDirectionalShadows!==y||F.numPointShadows!==C||F.numSpotShadows!==T||F.numSpotMaps!==A||F.numLightProbes!==S)&&(r.directional.length=m,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=T+A-P,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,F.directionalLength=m,F.pointLength=p,F.spotLength=u,F.rectAreaLength=g,F.hemiLength=v,F.numDirectionalShadows=y,F.numPointShadows=C,F.numSpotShadows=T,F.numSpotMaps=A,F.numLightProbes=S,r.version=$T++)}function c(f,d){let h=0,_=0,x=0,m=0,p=0;const u=d.matrixWorldInverse;for(let g=0,v=f.length;g<v;g++){const y=f[g];if(y.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),h++}else if(y.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const C=r.rectArea[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),_++}else if(y.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function im(t,e){const n=new ZT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function QT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new im(t,e),n.set(s,[l])):o>=a.length?(l=new im(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class JT extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ew extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iw(t,e,n){let i=new pd;const r=new Xe,s=new Xe,o=new ct,a=new JT({depthPacking:zy}),l=new ew,c={},f=n.maxTextureSize,d={[Ji]:dn,[dn]:Ji,[ii]:ii},h=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:tw,fragmentShader:nw}),_=h.clone();_.defines.HORIZONTAL_PASS=1;const x=new qt;x.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ht(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let u=this.type;this.render=function(T,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),E=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Yi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ee=u!==hi&&this.type===hi,L=u===hi&&this.type!==hi;for(let k=0,q=T.length;k<q;k++){const $=T[k],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();if(r.multiply(O),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,N.mapSize.y=s.y)),N.map===null||ee===!0||L===!0){const Q=this.type!==hi?{minFilter:en,magFilter:en}:{};N.map!==null&&N.map.dispose(),N.map=new Cr(r.x,r.y,Q),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const H=N.getViewportCount();for(let Q=0;Q<H;Q++){const J=N.getViewport(Q);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),W.viewport(o),N.updateMatrices($,Q),i=N.getFrustum(),y(A,P,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===hi&&g(N,P),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(S,E,F)};function g(T,A){const P=e.update(m);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,_.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,_.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,h,m,null),_.uniforms.shadow_pass.value=T.mapPass.texture,_.uniforms.resolution.value=T.mapSize,_.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,_,m,null)}function v(T,A,P,S){let E=null;const F=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)E=F;else if(E=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=E.uuid,ee=A.uuid;let L=c[W];L===void 0&&(L={},c[W]=L);let k=L[ee];k===void 0&&(k=E.clone(),L[ee]=k,A.addEventListener("dispose",C)),E=k}if(E.visible=A.visible,E.wireframe=A.wireframe,S===hi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:d[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=t.properties.get(E);W.light=P}return E}function y(T,A,P,S,E){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===hi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const ee=e.update(T),L=T.material;if(Array.isArray(L)){const k=ee.groups;for(let q=0,$=k.length;q<$;q++){const N=k[q],O=L[N.materialIndex];if(O&&O.visible){const H=v(T,O,S,E);T.onBeforeShadow(t,T,A,P,ee,H,N),t.renderBufferDirect(P,null,ee,H,T,N),T.onAfterShadow(t,T,A,P,ee,H,N)}}}else if(L.visible){const k=v(T,L,S,E);T.onBeforeShadow(t,T,A,P,ee,k,null),t.renderBufferDirect(P,null,ee,k,T,null),T.onAfterShadow(t,T,A,P,ee,k,null)}}const W=T.children;for(let ee=0,L=W.length;ee<L;ee++)y(W[ee],A,P,S,E)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const S=c[P],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function rw(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const ue=new ct;let fe=null;const Pe=new ct(0,0,0,0);return{setMask:function(Ae){fe!==Ae&&!b&&(t.colorMask(Ae,Ae,Ae,Ae),fe=Ae)},setLocked:function(Ae){b=Ae},setClear:function(Ae,et,tt,Pt,Yt){Yt===!0&&(Ae*=Pt,et*=Pt,tt*=Pt),ue.set(Ae,et,tt,Pt),Pe.equals(ue)===!1&&(t.clearColor(Ae,et,tt,Pt),Pe.copy(ue))},reset:function(){b=!1,fe=null,Pe.set(-1,0,0,0)}}}function s(){let b=!1,ue=null,fe=null,Pe=null;return{setTest:function(Ae){Ae?de(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(Ae){ue!==Ae&&!b&&(t.depthMask(Ae),ue=Ae)},setFunc:function(Ae){if(fe!==Ae){switch(Ae){case py:t.depthFunc(t.NEVER);break;case my:t.depthFunc(t.ALWAYS);break;case gy:t.depthFunc(t.LESS);break;case El:t.depthFunc(t.LEQUAL);break;case _y:t.depthFunc(t.EQUAL);break;case vy:t.depthFunc(t.GEQUAL);break;case xy:t.depthFunc(t.GREATER);break;case yy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=Ae}},setLocked:function(Ae){b=Ae},setClear:function(Ae){Pe!==Ae&&(t.clearDepth(Ae),Pe=Ae)},reset:function(){b=!1,ue=null,fe=null,Pe=null}}}function o(){let b=!1,ue=null,fe=null,Pe=null,Ae=null,et=null,tt=null,Pt=null,Yt=null;return{setTest:function(nt){b||(nt?de(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!b&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,$t,Kn){(fe!==nt||Pe!==$t||Ae!==Kn)&&(t.stencilFunc(nt,$t,Kn),fe=nt,Pe=$t,Ae=Kn)},setOp:function(nt,$t,Kn){(et!==nt||tt!==$t||Pt!==Kn)&&(t.stencilOp(nt,$t,Kn),et=nt,tt=$t,Pt=Kn)},setLocked:function(nt){b=nt},setClear:function(nt){Yt!==nt&&(t.clearStencil(nt),Yt=nt)},reset:function(){b=!1,ue=null,fe=null,Pe=null,Ae=null,et=null,tt=null,Pt=null,Yt=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},_={},x=new WeakMap,m=[],p=null,u=!1,g=null,v=null,y=null,C=null,T=null,A=null,P=null,S=new qe(0,0,0),E=0,F=!1,W=null,ee=null,L=null,k=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=O>=2);let Q=null,J={};const j=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ce=new ct().fromArray(j),Y=new ct().fromArray(K);function re(b,ue,fe,Pe){const Ae=new Uint8Array(4),et=t.createTexture();t.bindTexture(b,et),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<fe;tt++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(ue+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return et}const Ee={};Ee[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(t.DEPTH_TEST),l.setFunc(El),Fe(!1),R(zh),de(t.CULL_FACE),ve(Yi);function de(b){h[b]!==!0&&(t.enable(b),h[b]=!0)}function xe(b){h[b]!==!1&&(t.disable(b),h[b]=!1)}function Ve(b,ue){return _[b]!==ue?(t.bindFramebuffer(b,ue),_[b]=ue,i&&(b===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=ue),b===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function I(b,ue){let fe=m,Pe=!1;if(b)if(fe=x.get(ue),fe===void 0&&(fe=[],x.set(ue,fe)),b.isWebGLMultipleRenderTargets){const Ae=b.texture;if(fe.length!==Ae.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=Ae.length;et<tt;et++)fe[et]=t.COLOR_ATTACHMENT0+et;fe.length=Ae.length,Pe=!0}}else fe[0]!==t.COLOR_ATTACHMENT0&&(fe[0]=t.COLOR_ATTACHMENT0,Pe=!0);else fe[0]!==t.BACK&&(fe[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function It(b){return p!==b?(t.useProgram(b),p=b,!0):!1}const Te={[hr]:t.FUNC_ADD,[Jx]:t.FUNC_SUBTRACT,[ey]:t.FUNC_REVERSE_SUBTRACT};if(i)Te[Gh]=t.MIN,Te[Vh]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Te[Gh]=b.MIN_EXT,Te[Vh]=b.MAX_EXT)}const be={[ty]:t.ZERO,[ny]:t.ONE,[iy]:t.SRC_COLOR,[rf]:t.SRC_ALPHA,[cy]:t.SRC_ALPHA_SATURATE,[ay]:t.DST_COLOR,[sy]:t.DST_ALPHA,[ry]:t.ONE_MINUS_SRC_COLOR,[sf]:t.ONE_MINUS_SRC_ALPHA,[ly]:t.ONE_MINUS_DST_COLOR,[oy]:t.ONE_MINUS_DST_ALPHA,[uy]:t.CONSTANT_COLOR,[fy]:t.ONE_MINUS_CONSTANT_COLOR,[dy]:t.CONSTANT_ALPHA,[hy]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(b,ue,fe,Pe,Ae,et,tt,Pt,Yt,nt){if(b===Yi){u===!0&&(xe(t.BLEND),u=!1);return}if(u===!1&&(de(t.BLEND),u=!0),b!==Qx){if(b!==g||nt!==F){if((v!==hr||T!==hr)&&(t.blendEquation(t.FUNC_ADD),v=hr,T=hr),nt)switch(b){case Ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kh:t.blendFunc(t.ONE,t.ONE);break;case Bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,C=null,A=null,P=null,S.set(0,0,0),E=0,g=b,F=nt}return}Ae=Ae||ue,et=et||fe,tt=tt||Pe,(ue!==v||Ae!==T)&&(t.blendEquationSeparate(Te[ue],Te[Ae]),v=ue,T=Ae),(fe!==y||Pe!==C||et!==A||tt!==P)&&(t.blendFuncSeparate(be[fe],be[Pe],be[et],be[tt]),y=fe,C=Pe,A=et,P=tt),(Pt.equals(S)===!1||Yt!==E)&&(t.blendColor(Pt.r,Pt.g,Pt.b,Yt),S.copy(Pt),E=Yt),g=b,F=!1}function ut(b,ue){b.side===ii?xe(t.CULL_FACE):de(t.CULL_FACE);let fe=b.side===dn;ue&&(fe=!fe),Fe(fe),b.blending===Ss&&b.transparent===!1?ve(Yi):ve(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const Pe=b.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(b.stencilWriteMask),c.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),c.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),G(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(b){W!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),W=b)}function R(b){b!==$x?(de(t.CULL_FACE),b!==ee&&(b===zh?t.cullFace(t.BACK):b===Kx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),ee=b}function M(b){b!==L&&(N&&t.lineWidth(b),L=b)}function G(b,ue,fe){b?(de(t.POLYGON_OFFSET_FILL),(k!==ue||q!==fe)&&(t.polygonOffset(ue,fe),k=ue,q=fe)):xe(t.POLYGON_OFFSET_FILL)}function se(b){b?de(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function ne(b){b===void 0&&(b=t.TEXTURE0+$-1),Q!==b&&(t.activeTexture(b),Q=b)}function oe(b,ue,fe){fe===void 0&&(Q===null?fe=t.TEXTURE0+$-1:fe=Q);let Pe=J[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},J[fe]=Pe),(Pe.type!==b||Pe.texture!==ue)&&(Q!==fe&&(t.activeTexture(fe),Q=fe),t.bindTexture(b,ue||Ee[b]),Pe.type=b,Pe.texture=ue)}function Se(){const b=J[Q];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ie(b){ce.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),ce.copy(b))}function Ke(b){Y.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),Y.copy(b))}function vt(b,ue){let fe=d.get(ue);fe===void 0&&(fe=new WeakMap,d.set(ue,fe));let Pe=fe.get(b);Pe===void 0&&(Pe=t.getUniformBlockIndex(ue,b.name),fe.set(b,Pe))}function Be(b,ue){const Pe=d.get(ue).get(b);f.get(ue)!==Pe&&(t.uniformBlockBinding(ue,Pe,b.__bindingPointIndex),f.set(ue,Pe))}function ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Q=null,J={},_={},x=new WeakMap,m=[],p=null,u=!1,g=null,v=null,y=null,C=null,T=null,A=null,P=null,S=new qe(0,0,0),E=0,F=!1,W=null,ee=null,L=null,k=null,q=null,ce.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:xe,bindFramebuffer:Ve,drawBuffers:I,useProgram:It,setBlending:ve,setMaterial:ut,setFlipSided:Fe,setCullFace:R,setLineWidth:M,setPolygonOffset:G,setScissorTest:se,activeTexture:ne,bindTexture:oe,unbindTexture:Se,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:we,texImage3D:_e,updateUBOMapping:vt,uniformBlockBinding:Be,texStorage2D:We,texStorage3D:De,texSubImage2D:Ce,texSubImage3D:ze,compressedTexSubImage2D:te,compressedTexSubImage3D:Qe,scissor:Ie,viewport:Ke,reset:ae}}function sw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return _?new OffscreenCanvas(R,M):bl("canvas")}function m(R,M,G,se){let ne=1;if((R.width>se||R.height>se)&&(ne=se/Math.max(R.width,R.height)),ne<1||M===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){const oe=M?Cl:Math.floor,Se=oe(ne*R.width),he=oe(ne*R.height);d===void 0&&(d=x(Se,he));const ge=G?x(Se,he):d;return ge.width=Se,ge.height=he,ge.getContext("2d").drawImage(R,0,0,Se,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Se+"x"+he+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return ff(R.width)&&ff(R.height)}function u(R){return a?!1:R.wrapS!==Wn||R.wrapT!==Wn||R.minFilter!==en&&R.minFilter!==Cn}function g(R,M){return R.generateMipmaps&&M&&R.minFilter!==en&&R.minFilter!==Cn}function v(R){t.generateMipmap(R)}function y(R,M,G,se,ne=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=M;if(M===t.RED&&(G===t.FLOAT&&(oe=t.R32F),G===t.HALF_FLOAT&&(oe=t.R16F),G===t.UNSIGNED_BYTE&&(oe=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(oe=t.R8UI),G===t.UNSIGNED_SHORT&&(oe=t.R16UI),G===t.UNSIGNED_INT&&(oe=t.R32UI),G===t.BYTE&&(oe=t.R8I),G===t.SHORT&&(oe=t.R16I),G===t.INT&&(oe=t.R32I)),M===t.RG&&(G===t.FLOAT&&(oe=t.RG32F),G===t.HALF_FLOAT&&(oe=t.RG16F),G===t.UNSIGNED_BYTE&&(oe=t.RG8)),M===t.RGBA){const Se=ne?Tl:Je.getTransfer(se);G===t.FLOAT&&(oe=t.RGBA32F),G===t.HALF_FLOAT&&(oe=t.RGBA16F),G===t.UNSIGNED_BYTE&&(oe=Se===st?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(R,M,G){return g(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){return R===en||R===Wh||R===bc?t.NEAREST:t.LINEAR}function A(R){const M=R.target;M.removeEventListener("dispose",A),S(M),M.isVideoTexture&&f.delete(M)}function P(R){const M=R.target;M.removeEventListener("dispose",P),F(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const G=R.source,se=h.get(G);if(se){const ne=se[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(R),Object.keys(se).length===0&&h.delete(G)}i.remove(R)}function E(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const G=R.source,se=h.get(G);delete se[M.__cacheKey],o.memory.textures--}function F(R){const M=R.texture,G=i.get(R),se=i.get(M);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let oe=0;oe<G.__webglFramebuffer[ne].length;oe++)t.deleteFramebuffer(G.__webglFramebuffer[ne][oe]);else t.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)t.deleteFramebuffer(G.__webglFramebuffer[ne]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,oe=M.length;ne<oe;ne++){const Se=i.get(M[ne]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(R)}let W=0;function ee(){W=0}function L(){const R=W;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),W+=1,R}function k(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const G=i.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,R,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function $(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ce(G,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function N(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ce(G,R,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function O(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Y(G,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const H={[lf]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[cf]:t.MIRRORED_REPEAT},Q={[en]:t.NEAREST,[Wh]:t.NEAREST_MIPMAP_NEAREST,[bc]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[Cy]:t.LINEAR_MIPMAP_NEAREST,[Io]:t.LINEAR_MIPMAP_LINEAR},J={[By]:t.NEVER,[jy]:t.ALWAYS,[Hy]:t.LESS,[q0]:t.LEQUAL,[Gy]:t.EQUAL,[Xy]:t.GEQUAL,[Vy]:t.GREATER,[Wy]:t.NOTEQUAL};function j(R,M,G){if(G?(t.texParameteri(R,t.TEXTURE_WRAP_S,H[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,H[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,H[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Wn||M.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==en&&M.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===en||M.minFilter!==bc&&M.minFilter!==Io||M.type===ki&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Oo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const se=M.source;let ne=h.get(se);ne===void 0&&(ne={},h.set(se,ne));const oe=k(M);if(oe!==R.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[oe].usedTimes++;const Se=ne[R.__cacheKey];Se!==void 0&&(ne[R.__cacheKey].usedTimes--,Se.usedTimes===0&&E(M)),R.__cacheKey=oe,R.__webglTexture=ne[oe].texture}return G}function ce(R,M,G){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const ne=K(R,M),oe=M.source;n.bindTexture(se,R.__webglTexture,t.TEXTURE0+G);const Se=i.get(oe);if(oe.version!==Se.__version||ne===!0){n.activeTexture(t.TEXTURE0+G);const he=Je.getPrimaries(Je.workingColorSpace),ge=M.colorSpace===Pn?null:Je.getPrimaries(M.colorSpace),Ce=M.colorSpace===Pn||he===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ze=u(M)&&p(M.image)===!1;let te=m(M.image,ze,!1,r.maxTextureSize);te=Fe(M,te);const Qe=p(te)||a,We=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),we=y(M.internalFormat,We,De,M.colorSpace,M.isVideoTexture);j(se,M,Qe);let _e;const Ie=M.mipmaps,Ke=a&&M.isVideoTexture!==!0&&we!==W0,vt=Se.__version===void 0||ne===!0,Be=C(M,te,Qe);if(M.isDepthTexture)we=t.DEPTH_COMPONENT,a?M.type===ki?we=t.DEPTH_COMPONENT32F:M.type===zi?we=t.DEPTH_COMPONENT24:M.type===yr?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:M.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Sr&&we===t.DEPTH_COMPONENT&&M.type!==ud&&M.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=zi,De=s.convert(M.type)),M.format===Ns&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,M.type!==yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=yr,De=s.convert(M.type))),vt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,we,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,we,te.width,te.height,0,We,De,null));else if(M.isDataTexture)if(Ie.length>0&&Qe){Ke&&vt&&n.texStorage2D(t.TEXTURE_2D,Be,we,Ie[0].width,Ie[0].height);for(let ae=0,b=Ie.length;ae<b;ae++)_e=Ie[ae],Ke?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,_e.width,_e.height,We,De,_e.data):n.texImage2D(t.TEXTURE_2D,ae,we,_e.width,_e.height,0,We,De,_e.data);M.generateMipmaps=!1}else Ke?(vt&&n.texStorage2D(t.TEXTURE_2D,Be,we,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,We,De,te.data)):n.texImage2D(t.TEXTURE_2D,0,we,te.width,te.height,0,We,De,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,we,Ie[0].width,Ie[0].height,te.depth);for(let ae=0,b=Ie.length;ae<b;ae++)_e=Ie[ae],M.format!==Xn?We!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,te.depth,We,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,we,_e.width,_e.height,te.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,te.depth,We,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,we,_e.width,_e.height,te.depth,0,We,De,_e.data)}else{Ke&&vt&&n.texStorage2D(t.TEXTURE_2D,Be,we,Ie[0].width,Ie[0].height);for(let ae=0,b=Ie.length;ae<b;ae++)_e=Ie[ae],M.format!==Xn?We!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,_e.width,_e.height,We,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,we,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,_e.width,_e.height,We,De,_e.data):n.texImage2D(t.TEXTURE_2D,ae,we,_e.width,_e.height,0,We,De,_e.data)}else if(M.isDataArrayTexture)Ke?(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,we,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,We,De,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,te.width,te.height,te.depth,0,We,De,te.data);else if(M.isData3DTexture)Ke?(vt&&n.texStorage3D(t.TEXTURE_3D,Be,we,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,We,De,te.data)):n.texImage3D(t.TEXTURE_3D,0,we,te.width,te.height,te.depth,0,We,De,te.data);else if(M.isFramebufferTexture){if(vt)if(Ke)n.texStorage2D(t.TEXTURE_2D,Be,we,te.width,te.height);else{let ae=te.width,b=te.height;for(let ue=0;ue<Be;ue++)n.texImage2D(t.TEXTURE_2D,ue,we,ae,b,0,We,De,null),ae>>=1,b>>=1}}else if(Ie.length>0&&Qe){Ke&&vt&&n.texStorage2D(t.TEXTURE_2D,Be,we,Ie[0].width,Ie[0].height);for(let ae=0,b=Ie.length;ae<b;ae++)_e=Ie[ae],Ke?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,We,De,_e):n.texImage2D(t.TEXTURE_2D,ae,we,We,De,_e);M.generateMipmaps=!1}else Ke?(vt&&n.texStorage2D(t.TEXTURE_2D,Be,we,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,De,te)):n.texImage2D(t.TEXTURE_2D,0,we,We,De,te);g(M,Qe)&&v(se),Se.__version=oe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Y(R,M,G){if(M.image.length!==6)return;const se=K(R,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const oe=i.get(ne);if(ne.version!==oe.__version||se===!0){n.activeTexture(t.TEXTURE0+G);const Se=Je.getPrimaries(Je.workingColorSpace),he=M.colorSpace===Pn?null:Je.getPrimaries(M.colorSpace),ge=M.colorSpace===Pn||Se===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,te=[];for(let ae=0;ae<6;ae++)!Ce&&!ze?te[ae]=m(M.image[ae],!1,!0,r.maxCubemapSize):te[ae]=ze?M.image[ae].image:M.image[ae],te[ae]=Fe(M,te[ae]);const Qe=te[0],We=p(Qe)||a,De=s.convert(M.format,M.colorSpace),we=s.convert(M.type),_e=y(M.internalFormat,De,we,M.colorSpace),Ie=a&&M.isVideoTexture!==!0,Ke=oe.__version===void 0||se===!0;let vt=C(M,Qe,We);j(t.TEXTURE_CUBE_MAP,M,We);let Be;if(Ce){Ie&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,_e,Qe.width,Qe.height);for(let ae=0;ae<6;ae++){Be=te[ae].mipmaps;for(let b=0;b<Be.length;b++){const ue=Be[b];M.format!==Xn?De!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b,0,0,ue.width,ue.height,De,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b,0,0,ue.width,ue.height,De,we,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b,_e,ue.width,ue.height,0,De,we,ue.data)}}}else{Be=M.mipmaps,Ie&&Ke&&(Be.length>0&&vt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,_e,te[0].width,te[0].height));for(let ae=0;ae<6;ae++)if(ze){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,te[ae].width,te[ae].height,De,we,te[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,te[ae].width,te[ae].height,0,De,we,te[ae].data);for(let b=0;b<Be.length;b++){const fe=Be[b].image[ae].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b+1,0,0,fe.width,fe.height,De,we,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b+1,_e,fe.width,fe.height,0,De,we,fe.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,we,te[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,De,we,te[ae]);for(let b=0;b<Be.length;b++){const ue=Be[b];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b+1,0,0,De,we,ue.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b+1,_e,De,we,ue.image[ae])}}}g(M,We)&&v(t.TEXTURE_CUBE_MAP),oe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,G,se,ne,oe){const Se=s.convert(G.format,G.colorSpace),he=s.convert(G.type),ge=y(G.internalFormat,Se,he,G.colorSpace);if(!i.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>oe),te=Math.max(1,M.height>>oe);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,oe,ge,ze,te,M.depth,0,Se,he,null):n.texImage2D(ne,oe,ge,ze,te,0,Se,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,0,be(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(R,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let se=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||ve(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ki?se=t.DEPTH_COMPONENT32F:ne.type===zi&&(se=t.DEPTH_COMPONENT24));const oe=be(M);ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,se,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,se,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const se=be(M);G&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<se.length;ne++){const oe=se[ne],Se=s.convert(oe.format,oe.colorSpace),he=s.convert(oe.type),ge=y(oe.internalFormat,Se,he,oe.colorSpace),Ce=be(M);G&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ge,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,ne=be(M);if(M.depthTexture.format===Sr)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===Ns)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function xe(R){const M=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");de(M.__webglFramebuffer,R)}else if(G){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),Ee(M.__webglDepthbuffer[se],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ee(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(R,M,G){const se=i.get(R);M!==void 0&&re(se.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&xe(R)}function I(R){const M=R.texture,G=i.get(R),se=i.get(M);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,o.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,Se=p(R)||a;if(ne){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let ge=0;ge<M.mipmaps.length;ge++)G.__webglFramebuffer[he][ge]=t.createFramebuffer()}else G.__webglFramebuffer[he]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)G.__webglFramebuffer[he]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(oe)if(r.drawBuffers){const he=R.texture;for(let ge=0,Ce=he.length;ge<Ce;ge++){const ze=i.get(he[ge]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ve(R)===!1){const he=oe?M:[M];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const Ce=he[ge];G.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const ze=s.convert(Ce.format,Ce.colorSpace),te=s.convert(Ce.type),Qe=y(Ce.internalFormat,ze,te,Ce.colorSpace,R.isXRRenderTarget===!0),We=be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Qe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),j(t.TEXTURE_CUBE_MAP,M,Se);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)re(G.__webglFramebuffer[he][ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else re(G.__webglFramebuffer[he],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(M,Se)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){const he=R.texture;for(let ge=0,Ce=he.length;ge<Ce;ge++){const ze=he[ge],te=i.get(ze);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),j(t.TEXTURE_2D,ze,Se),re(G.__webglFramebuffer,R,ze,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),g(ze,Se)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,se.__webglTexture),j(he,M,Se),a&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)re(G.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,he,ge);else re(G.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,he,0);g(M,Se)&&v(he),n.unbindTexture()}R.depthBuffer&&xe(R)}function It(R){const M=p(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,ne=G.length;se<ne;se++){const oe=G[se];if(g(oe,M)){const Se=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(oe).__webglTexture;n.bindTexture(Se,he),v(Se),n.unbindTexture()}}}function Te(R){if(a&&R.samples>0&&ve(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,se=R.height;let ne=t.COLOR_BUFFER_BIT;const oe=[],Se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(R),ge=R.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){oe.push(t.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&oe.push(Se);const ze=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ze===!1&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),ge){const te=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,G,se,0,0,G,se,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const ze=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function be(R){return Math.min(r.maxSamples,R.samples)}function ve(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function Fe(R,M){const G=R.colorSpace,se=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===uf||G!==Ti&&G!==Pn&&(Je.getTransfer(G)===st?a===!1?e.has("EXT_sRGB")===!0&&se===Xn?(R.format=uf,R.minFilter=Cn,R.generateMipmaps=!1):M=$0.sRGBToLinear(M):(se!==Xn||ne!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=L,this.resetTextureUnits=ee,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=Ve,this.setupRenderTarget=I,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ve}function ow(t,e,n){const i=n.isWebGL2;function r(s,o=Pn){let a;const l=Je.getTransfer(o);if(s===Ki)return t.UNSIGNED_BYTE;if(s===k0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===B0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===by)return t.BYTE;if(s===Py)return t.SHORT;if(s===ud)return t.UNSIGNED_SHORT;if(s===z0)return t.INT;if(s===zi)return t.UNSIGNED_INT;if(s===ki)return t.FLOAT;if(s===Oo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ly)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===Dy)return t.LUMINANCE;if(s===Ny)return t.LUMINANCE_ALPHA;if(s===Sr)return t.DEPTH_COMPONENT;if(s===Ns)return t.DEPTH_STENCIL;if(s===uf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Uy)return t.RED;if(s===H0)return t.RED_INTEGER;if(s===Iy)return t.RG;if(s===G0)return t.RG_INTEGER;if(s===V0)return t.RGBA_INTEGER;if(s===Pc||s===Lc||s===Dc||s===Nc)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xh||s===jh||s===qh||s===Yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===W0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$h||s===Kh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$h)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Kh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zh||s===Qh||s===Jh||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===cp||s===up)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ep)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===np)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ip)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===op)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===up)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uc||s===fp||s===dp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Uc)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Oy||s===hp||s===pp||s===mp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===hp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class aw extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ps extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lw={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=n.getJointPose(m,i),u=this._getHandJoint(c,m);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),_=.02,x=.005;c.inputState.pinching&&h>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class cw extends zs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,_=null,x=null;const m=n.getContextAttributes();let p=null,u=null;const g=[],v=[],y=new Xe;let C=null;const T=new _n;T.layers.enable(1),T.viewport=new ct;const A=new _n;A.layers.enable(2),A.viewport=new ct;const P=[T,A],S=new aw;S.layers.enable(1),S.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=g[j];return K===void 0&&(K=new iu,g[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=g[j];return K===void 0&&(K=new iu,g[j]=K),K.getGripSpace()},this.getHand=function(j){let K=g[j];return K===void 0&&(K=new iu,g[j]=K),K.getHandSpace()};function W(j){const K=v.indexOf(j.inputSource);if(K===-1)return;const ce=g[K];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||o),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function ee(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",L);for(let j=0;j<g.length;j++){const K=v[j];K!==null&&(v[j]=null,g[j].disconnect(K))}E=null,F=null,e.setRenderTarget(p),_=null,h=null,d=null,r=null,u=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:_},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),u=new Cr(_.framebufferWidth,_.framebufferHeight,{format:Xn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ce=null,Y=null;m.depth&&(Y=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=m.stencil?Ns:Sr,ce=m.stencil?yr:zi);const re={colorFormat:n.RGBA8,depthFormat:Y,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Cr(h.textureWidth,h.textureHeight,{format:Xn,type:Ki,depthTexture:new o_(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ee=e.properties.get(u);Ee.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(j){for(let K=0;K<j.removed.length;K++){const ce=j.removed[K],Y=v.indexOf(ce);Y>=0&&(v[Y]=null,g[Y].disconnect(ce))}for(let K=0;K<j.added.length;K++){const ce=j.added[K];let Y=v.indexOf(ce);if(Y===-1){for(let Ee=0;Ee<g.length;Ee++)if(Ee>=v.length){v.push(ce),Y=Ee;break}else if(v[Ee]===null){v[Ee]=ce,Y=Ee;break}if(Y===-1)break}const re=g[Y];re&&re.connect(ce)}}const k=new D,q=new D;function $(j,K,ce){k.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);const Y=k.distanceTo(q),re=K.projectionMatrix.elements,Ee=ce.projectionMatrix.elements,de=re[14]/(re[10]-1),xe=re[14]/(re[10]+1),Ve=(re[9]+1)/re[5],I=(re[9]-1)/re[5],It=(re[8]-1)/re[0],Te=(Ee[8]+1)/Ee[0],be=de*It,ve=de*Te,ut=Y/(-It+Te),Fe=ut*-It;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=de+ut,M=xe+ut,G=be-Fe,se=ve+(Y-Fe),ne=Ve*xe/M*R,oe=I*xe/M*R;j.projectionMatrix.makePerspective(G,se,ne,oe,R,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function N(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=A.near=T.near=j.near,S.far=A.far=T.far=j.far,(E!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,F=S.far);const K=j.parent,ce=S.cameras;N(S,K);for(let Y=0;Y<ce.length;Y++)N(ce[Y],K);ce.length===2?$(S,T,A):S.projectionMatrix.copy(T.projectionMatrix),O(j,S,K)};function O(j,K,ce){ce===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&_===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)};let H=null;function Q(j,K){if(f=K.getViewerPose(c||o),x=K,f!==null){const ce=f.views;_!==null&&(e.setRenderTargetFramebuffer(u,_.framebuffer),e.setRenderTarget(u));let Y=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,Y=!0);for(let re=0;re<ce.length;re++){const Ee=ce[re];let de=null;if(_!==null)de=_.getViewport(Ee);else{const Ve=d.getViewSubImage(h,Ee);de=Ve.viewport,re===0&&(e.setRenderTargetTextures(u,Ve.colorTexture,h.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(u))}let xe=P[re];xe===void 0&&(xe=new _n,xe.layers.enable(re),xe.viewport=new ct,P[re]=xe),xe.matrix.fromArray(Ee.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Ee.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(de.x,de.y,de.width,de.height),re===0&&(S.matrix.copy(xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Y===!0&&S.cameras.push(xe)}}for(let ce=0;ce<g.length;ce++){const Y=v[ce],re=g[ce];Y!==null&&re!==void 0&&re.update(Y,K,c||o)}H&&H(j,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const J=new r_;J.setAnimationLoop(Q),this.setAnimationLoop=function(j){H=j},this.dispose=function(){}}}function uw(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,t_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&_(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),m(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===dn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===dn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function _(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function m(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=r[g.id];y===void 0&&(x(g),y=f(g),r[g.id]=y,g.addEventListener("dispose",p));const C=v.program;i.updateUBOMapping(g,C);const T=e.render.frame;s[g.id]!==T&&(h(g),s[g.id]=T)}function f(g){const v=d();g.__bindingPointIndex=v;const y=t.createBuffer(),C=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=y.length;T<A;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,E=P.length;S<E;S++){const F=P[S];if(_(F,T,S,C)===!0){const W=F.__offset,ee=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let k=0;k<ee.length;k++){const q=ee[k],$=m(q);typeof q=="number"||typeof q=="boolean"?(F.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,W+L,F.__data)):q.isMatrix3?(F.__data[0]=q.elements[0],F.__data[1]=q.elements[1],F.__data[2]=q.elements[2],F.__data[3]=0,F.__data[4]=q.elements[3],F.__data[5]=q.elements[4],F.__data[6]=q.elements[5],F.__data[7]=0,F.__data[8]=q.elements[6],F.__data[9]=q.elements[7],F.__data[10]=q.elements[8],F.__data[11]=0):(q.toArray(F.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(g,v,y,C){const T=g.value,A=v+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function x(g){const v=g.uniforms;let y=0;const C=16;for(let A=0,P=v.length;A<P;A++){const S=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,F=S.length;E<F;E++){const W=S[E],ee=Array.isArray(W.value)?W.value:[W.value];for(let L=0,k=ee.length;L<k;L++){const q=ee[L],$=m(q),N=y%C;N!==0&&C-N<$.boundary&&(y+=C-N),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=$.storage}}}const T=y%C;return T>0&&(y+=C-T),g.__size=y,g.__cache={},this}function m(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class d_{constructor(e={}){const{canvas:n=aS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=$i,this.toneMappingExposure=1;const v=this;let y=!1,C=0,T=0,A=null,P=-1,S=null;const E=new ct,F=new ct;let W=null;const ee=new qe(0);let L=0,k=n.width,q=n.height,$=1,N=null,O=null;const H=new ct(0,0,k,q),Q=new ct(0,0,k,q);let J=!1;const j=new pd;let K=!1,ce=!1,Y=null;const re=new gt,Ee=new Xe,de=new D,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?$:1}let I=i;function It(w,U){for(let V=0;V<w.length;V++){const X=w[V],B=n.getContext(X,U);if(B!==null)return B}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cd}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",ue,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),I=It(U,w),I===null)throw It(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,be,ve,ut,Fe,R,M,G,se,ne,oe,Se,he,ge,Ce,ze,te,Qe,We,De,we,_e,Ie,Ke;function vt(){Te=new S1(I),be=new m1(I,Te,e),Te.init(be),_e=new ow(I,Te,be),ve=new rw(I,Te,be),ut=new T1(I),Fe=new WT,R=new sw(I,Te,ve,Fe,be,_e,ut),M=new _1(v),G=new y1(v),se=new DS(I,be),Ie=new h1(I,Te,se,be),ne=new M1(I,se,ut,Ie),oe=new C1(I,ne,se,ut),We=new R1(I,be,R),ze=new g1(Fe),Se=new VT(v,M,G,Te,be,Ie,ze),he=new uw(v,Fe),ge=new jT,Ce=new QT(Te,be),Qe=new d1(v,M,G,ve,oe,h,l),te=new iw(v,oe,be),Ke=new fw(I,ut,be,ve),De=new p1(I,Te,ut,be),we=new E1(I,Te,ut,be),ut.programs=Se.programs,v.capabilities=be,v.extensions=Te,v.properties=Fe,v.renderLists=ge,v.shadowMap=te,v.state=ve,v.info=ut}vt();const Be=new cw(v,I);this.xr=Be,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(k,q,!1))},this.getSize=function(w){return w.set(k,q)},this.setSize=function(w,U,V=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,q=U,n.width=Math.floor(w*$),n.height=Math.floor(U*$),V===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(k*$,q*$).floor()},this.setDrawingBufferSize=function(w,U,V){k=w,q=U,$=V,n.width=Math.floor(w*V),n.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,U,V,X){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,U,V,X),ve.viewport(E.copy(H).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,U,V,X){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,U,V,X),ve.scissor(F.copy(Q).multiplyScalar($).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(w){ve.setScissorTest(J=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){O=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(w=!0,U=!0,V=!0){let X=0;if(w){let B=!1;if(A!==null){const pe=A.texture.format;B=pe===V0||pe===G0||pe===H0}if(B){const pe=A.texture.type,Me=pe===Ki||pe===zi||pe===ud||pe===yr||pe===k0||pe===B0,Re=Qe.getClearColor(),Le=Qe.getClearAlpha(),ke=Re.r,Ne=Re.g,Ue=Re.b;Me?(_[0]=ke,_[1]=Ne,_[2]=Ue,_[3]=Le,I.clearBufferuiv(I.COLOR,0,_)):(x[0]=ke,x[1]=Ne,x[2]=Ue,x[3]=Le,I.clearBufferiv(I.COLOR,0,x))}else X|=I.COLOR_BUFFER_BIT}U&&(X|=I.DEPTH_BUFFER_BIT),V&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),ge.dispose(),Ce.dispose(),Fe.dispose(),M.dispose(),G.dispose(),oe.dispose(),Ie.dispose(),Ke.dispose(),Se.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Yt),Be.removeEventListener("sessionend",nt),Y&&(Y.dispose(),Y=null),$t.stop()};function ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ut.autoReset,U=te.enabled,V=te.autoUpdate,X=te.needsUpdate,B=te.type;vt(),ut.autoReset=w,te.enabled=U,te.autoUpdate=V,te.needsUpdate=X,te.type=B}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){const U=w.target;U.removeEventListener("dispose",fe),Pe(U)}function Pe(w){Ae(w),Fe.remove(w)}function Ae(w){const U=Fe.get(w).programs;U!==void 0&&(U.forEach(function(V){Se.releaseProgram(V)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,X,B,pe){U===null&&(U=xe);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Re=__(w,U,V,X,B);ve.setMaterial(X,Me);let Le=V.index,ke=1;if(X.wireframe===!0){if(Le=ne.getWireframeAttribute(V),Le===void 0)return;ke=2}const Ne=V.drawRange,Ue=V.attributes.position;let St=Ne.start*ke,hn=(Ne.start+Ne.count)*ke;pe!==null&&(St=Math.max(St,pe.start*ke),hn=Math.min(hn,(pe.start+pe.count)*ke)),Le!==null?(St=Math.max(St,0),hn=Math.min(hn,Le.count)):Ue!=null&&(St=Math.max(St,0),hn=Math.min(hn,Ue.count));const Lt=hn-St;if(Lt<0||Lt===1/0)return;Ie.setup(B,X,Re,V,Le);let ai,ft=De;if(Le!==null&&(ai=se.get(Le),ft=we,ft.setIndex(ai)),B.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*Ve()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(B.isLine){let He=X.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*Ve()),B.isLineSegments?ft.setMode(I.LINES):B.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else B.isPoints?ft.setMode(I.POINTS):B.isSprite&&ft.setMode(I.TRIANGLES);if(B.isBatchedMesh)ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ft.renderInstances(St,Lt,B.count);else if(V.isInstancedBufferGeometry){const He=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Jl=Math.min(V.instanceCount,He);ft.renderInstances(St,Lt,Jl)}else ft.render(St,Lt)};function et(w,U,V){w.transparent===!0&&w.side===ii&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,qo(w,U,V),w.side=Ji,w.needsUpdate=!0,qo(w,U,V),w.side=ii):qo(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),p=Ce.get(V),p.init(),g.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==V&&w.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(v._useLegacyLights);const X=new Set;return w.traverse(function(B){const pe=B.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const Re=pe[Me];et(Re,V,B),X.add(Re)}else et(pe,V,B),X.add(pe)}),g.pop(),p=null,X},this.compileAsync=function(w,U,V=null){const X=this.compile(w,U,V);return new Promise(B=>{function pe(){if(X.forEach(function(Me){Fe.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){B(w);return}setTimeout(pe,10)}Te.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let tt=null;function Pt(w){tt&&tt(w)}function Yt(){$t.stop()}function nt(){$t.start()}const $t=new r_;$t.setAnimationLoop(Pt),typeof self!="undefined"&&$t.setContext(self),this.setAnimationLoop=function(w){tt=w,Be.setAnimationLoop(w),w===null?$t.stop():$t.start()},Be.addEventListener("sessionstart",Yt),Be.addEventListener("sessionend",nt),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(U),U=Be.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),p=Ce.get(w,g.length),p.init(),g.push(p),re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(re),ce=this.localClippingEnabled,K=ze.init(this.clippingPlanes,ce),m=ge.get(w,u.length),m.init(),u.push(m),Kn(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(N,O),this.info.render.frame++,K===!0&&ze.beginShadows();const V=p.state.shadowsArray;if(te.render(V,w,U),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(m,w),p.setupLights(v._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let B=0,pe=X.length;B<pe;B++){const Me=X[B];Ed(m,w,Me,Me.viewport)}}else Ed(m,w,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),Ie.resetDefaultState(),P=-1,S=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?m=u[u.length-1]:m=null};function Kn(w,U,V,X){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){X&&de.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);const Me=oe.update(w),Re=w.material;Re.visible&&m.push(w,Me,Re,V,de.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const Me=oe.update(w),Re=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),de.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),de.copy(Me.boundingSphere.center)),de.applyMatrix4(w.matrixWorld).applyMatrix4(re)),Array.isArray(Re)){const Le=Me.groups;for(let ke=0,Ne=Le.length;ke<Ne;ke++){const Ue=Le[ke],St=Re[Ue.materialIndex];St&&St.visible&&m.push(w,Me,St,V,de.z,Ue)}}else Re.visible&&m.push(w,Me,Re,V,de.z,null)}}const pe=w.children;for(let Me=0,Re=pe.length;Me<Re;Me++)Kn(pe[Me],U,V,X)}function Ed(w,U,V,X){const B=w.opaque,pe=w.transmissive,Me=w.transparent;p.setupLightsView(V),K===!0&&ze.setGlobalState(v.clippingPlanes,V),pe.length>0&&g_(B,pe,U,V),X&&ve.viewport(E.copy(X)),B.length>0&&jo(B,U,V),pe.length>0&&jo(pe,U,V),Me.length>0&&jo(Me,U,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function g_(w,U,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const pe=be.isWebGL2;Y===null&&(Y=new Cr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Oo:Ki,minFilter:Io,samples:pe?4:0})),v.getDrawingBufferSize(Ee),pe?Y.setSize(Ee.x,Ee.y):Y.setSize(Cl(Ee.x),Cl(Ee.y));const Me=v.getRenderTarget();v.setRenderTarget(Y),v.getClearColor(ee),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Re=v.toneMapping;v.toneMapping=$i,jo(w,V,X),R.updateMultisampleRenderTarget(Y),R.updateRenderTargetMipmap(Y);let Le=!1;for(let ke=0,Ne=U.length;ke<Ne;ke++){const Ue=U[ke],St=Ue.object,hn=Ue.geometry,Lt=Ue.material,ai=Ue.group;if(Lt.side===ii&&St.layers.test(X.layers)){const ft=Lt.side;Lt.side=dn,Lt.needsUpdate=!0,Td(St,V,X,hn,Lt,ai),Lt.side=ft,Lt.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(Y),R.updateRenderTargetMipmap(Y)),v.setRenderTarget(Me),v.setClearColor(ee,L),v.toneMapping=Re}function jo(w,U,V){const X=U.isScene===!0?U.overrideMaterial:null;for(let B=0,pe=w.length;B<pe;B++){const Me=w[B],Re=Me.object,Le=Me.geometry,ke=X===null?Me.material:X,Ne=Me.group;Re.layers.test(V.layers)&&Td(Re,U,V,Le,ke,Ne)}}function Td(w,U,V,X,B,pe){w.onBeforeRender(v,U,V,X,B,pe),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,U,V,X,w,pe),B.transparent===!0&&B.side===ii&&B.forceSinglePass===!1?(B.side=dn,B.needsUpdate=!0,v.renderBufferDirect(V,U,X,B,w,pe),B.side=Ji,B.needsUpdate=!0,v.renderBufferDirect(V,U,X,B,w,pe),B.side=ii):v.renderBufferDirect(V,U,X,B,w,pe),w.onAfterRender(v,U,V,X,B,pe)}function qo(w,U,V){U.isScene!==!0&&(U=xe);const X=Fe.get(w),B=p.state.lights,pe=p.state.shadowsArray,Me=B.state.version,Re=Se.getParameters(w,B.state,pe,U,V),Le=Se.getProgramCacheKey(Re);let ke=X.programs;X.environment=w.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(w.isMeshStandardMaterial?G:M).get(w.envMap||X.environment),ke===void 0&&(w.addEventListener("dispose",fe),ke=new Map,X.programs=ke);let Ne=ke.get(Le);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===Me)return Ad(w,Re),Ne}else Re.uniforms=Se.getUniforms(w),w.onBuild(V,Re,v),w.onBeforeCompile(Re,v),Ne=Se.acquireProgram(Re,Le),ke.set(Le,Ne),X.uniforms=Re.uniforms;const Ue=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),Ad(w,Re),X.needsLights=x_(w),X.lightsStateVersion=Me,X.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function wd(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Za.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ad(w,U){const V=Fe.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function __(w,U,V,X,B){U.isScene!==!0&&(U=xe),R.resetTextureUnits();const pe=U.fog,Me=X.isMeshStandardMaterial?U.environment:null,Re=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ti,Le=(X.isMeshStandardMaterial?G:M).get(X.envMap||Me),ke=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!V.morphAttributes.position,St=!!V.morphAttributes.normal,hn=!!V.morphAttributes.color;let Lt=$i;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Lt=v.toneMapping);const ai=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=ai!==void 0?ai.length:0,He=Fe.get(X),Jl=p.state.lights;if(K===!0&&(ce===!0||w!==S)){const Tn=w===S&&X.id===P;ze.setState(X,w,Tn)}let xt=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Jl.state.version||He.outputColorSpace!==Re||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||He.envMap!==Le||X.fog===!0&&He.fog!==pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ze.numPlanes||He.numIntersection!==ze.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ne||He.morphTargets!==Ue||He.morphNormals!==St||He.morphColors!==hn||He.toneMapping!==Lt||be.isWebGL2===!0&&He.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,He.__version=X.version);let ir=He.currentProgram;xt===!0&&(ir=qo(X,U,B));let Rd=!1,Hs=!1,ec=!1;const Bt=ir.getUniforms(),rr=He.uniforms;if(ve.useProgram(ir.program)&&(Rd=!0,Hs=!0,ec=!0),X.id!==P&&(P=X.id,Hs=!0),Rd||S!==w){Bt.setValue(I,"projectionMatrix",w.projectionMatrix),Bt.setValue(I,"viewMatrix",w.matrixWorldInverse);const Tn=Bt.map.cameraPosition;Tn!==void 0&&Tn.setValue(I,de.setFromMatrixPosition(w.matrixWorld)),be.logarithmicDepthBuffer&&Bt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Bt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Hs=!0,ec=!0)}if(B.isSkinnedMesh){Bt.setOptional(I,B,"bindMatrix"),Bt.setOptional(I,B,"bindMatrixInverse");const Tn=B.skeleton;Tn&&(be.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Bt.setValue(I,"boneTexture",Tn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Bt.setOptional(I,B,"batchingTexture"),Bt.setValue(I,"batchingTexture",B._matricesTexture,R));const tc=V.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0&&be.isWebGL2===!0)&&We.update(B,V,ir),(Hs||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,Bt.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(rr.envMap.value=Le,rr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Hs&&(Bt.setValue(I,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&v_(rr,ec),pe&&X.fog===!0&&he.refreshFogUniforms(rr,pe),he.refreshMaterialUniforms(rr,X,$,q,Y),Za.upload(I,wd(He),rr,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Za.upload(I,wd(He),rr,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Bt.setValue(I,"center",B.center),Bt.setValue(I,"modelViewMatrix",B.modelViewMatrix),Bt.setValue(I,"normalMatrix",B.normalMatrix),Bt.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Tn=X.uniformsGroups;for(let nc=0,y_=Tn.length;nc<y_;nc++)if(be.isWebGL2){const Cd=Tn[nc];Ke.update(Cd,ir),Ke.bind(Cd,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function v_(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function x_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,V){Fe.get(w.texture).__webglTexture=U,Fe.get(w.depthTexture).__webglTexture=V;const X=Fe.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const V=Fe.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){A=w,C=U,T=V;let X=!0,B=null,pe=!1,Me=!1;if(w){const Le=Fe.get(w);Le.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(I.FRAMEBUFFER,null),X=!1):Le.__webglFramebuffer===void 0?R.setupRenderTarget(w):Le.__hasExternalTextures&&R.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Me=!0);const Ne=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?B=Ne[U][V]:B=Ne[U],pe=!0):be.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?B=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[V]:B=Ne,E.copy(w.viewport),F.copy(w.scissor),W=w.scissorTest}else E.copy(H).multiplyScalar($).floor(),F.copy(Q).multiplyScalar($).floor(),W=J;if(ve.bindFramebuffer(I.FRAMEBUFFER,B)&&be.drawBuffers&&X&&ve.drawBuffers(w,B),ve.viewport(E),ve.scissor(F),ve.setScissorTest(W),pe){const Le=Fe.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,V)}else if(Me){const Le=Fe.get(w.texture),ke=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,V||0,ke)}P=-1},this.readRenderTargetPixels=function(w,U,V,X,B,pe,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){ve.bindFramebuffer(I.FRAMEBUFFER,Re);try{const Le=w.texture,ke=Le.format,Ne=Le.type;if(ke!==Xn&&_e.convert(ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ne===Oo&&(Te.has("EXT_color_buffer_half_float")||be.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ne!==Ki&&_e.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===ki&&(be.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-X&&V>=0&&V<=w.height-B&&I.readPixels(U,V,X,B,_e.convert(ke),_e.convert(Ne),pe)}finally{const Le=A!==null?Fe.get(A).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(w,U,V=0){const X=Math.pow(2,-V),B=Math.floor(U.image.width*X),pe=Math.floor(U.image.height*X);R.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,w.x,w.y,B,pe),ve.unbindTexture()},this.copyTextureToTexture=function(w,U,V,X=0){const B=U.image.width,pe=U.image.height,Me=_e.convert(V.format),Re=_e.convert(V.type);R.setTexture2D(V,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,X,w.x,w.y,B,pe,Me,Re,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,X,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,X,w.x,w.y,Me,Re,U.image),X===0&&V.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V,X,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=w.max.x-w.min.x+1,Me=w.max.y-w.min.y+1,Re=w.max.z-w.min.z+1,Le=_e.convert(X.format),ke=_e.convert(X.type);let Ne;if(X.isData3DTexture)R.setTexture3D(X,0),Ne=I.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)R.setTexture2DArray(X,0),Ne=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Ue=I.getParameter(I.UNPACK_ROW_LENGTH),St=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hn=I.getParameter(I.UNPACK_SKIP_PIXELS),Lt=I.getParameter(I.UNPACK_SKIP_ROWS),ai=I.getParameter(I.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[B]:V.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?I.texSubImage3D(Ne,B,U.x,U.y,U.z,pe,Me,Re,Le,ke,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ne,B,U.x,U.y,U.z,pe,Me,Re,Le,ft.data)):I.texSubImage3D(Ne,B,U.x,U.y,U.z,pe,Me,Re,Le,ke,ft),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ai),B===0&&X.generateMipmaps&&I.generateMipmap(Ne),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,ve.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===fd?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Yl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?Mr:X0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mr?Ft:Ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dw extends d_{}dw.prototype.isWebGL1Renderer=!0;class _d{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=n}clone(){return new _d(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hw extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Qa extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rm=new D,sm=new D,om=new gt,ru=new $l,Na=new Xo;class pw extends Rt{constructor(e=new qt,n=new Qa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)rm.fromBufferAttribute(n,r-1),sm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=rm.distanceTo(sm);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;om.copy(r).invert(),ru.copy(e.ray).applyMatrix4(om);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,f=new D,d=new D,h=new D,_=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const u=Math.max(0,o.start),g=Math.min(x.count,o.start+o.count);for(let v=u,y=g-1;v<y;v+=_){const C=x.getX(v),T=x.getX(v+1);if(c.fromBufferAttribute(p,C),f.fromBufferAttribute(p,T),ru.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||n.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=u,y=g-1;v<y;v+=_){if(c.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),ru.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||n.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const am=new D,lm=new D;class su extends pw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)am.fromBufferAttribute(n,r),lm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+am.distanceTo(lm);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h_ extends Nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cm=new gt,hf=new $l,Ua=new Xo,Ia=new D;class mw extends Rt{constructor(e=new qt,n=new h_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(r),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;cm.copy(r).invert(),hf.copy(e.ray).applyMatrix4(cm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let x=h,m=_;x<m;x++){const p=c.getX(x);Ia.fromBufferAttribute(d,p),um(Ia,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let x=h,m=_;x<m;x++)Ia.fromBufferAttribute(d,x),um(Ia,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function um(t,e,n,i,r,s,o){const a=hf.distanceSqToPoint(t);if(a<n){const l=new D;hf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class vd extends qt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new D,f=new Xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const _=i+d/n*r;c.x=e*Math.cos(_),c.y=e*Math.sin(_),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zo extends qt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],_=[];let x=0;const m=[],p=i/2;let u=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(_,2));function g(){const y=new D,C=new D;let T=0;const A=(n-e)/i;for(let P=0;P<=s;P++){const S=[],E=P/s,F=E*(n-e)+e;for(let W=0;W<=r;W++){const ee=W/r,L=ee*l+a,k=Math.sin(L),q=Math.cos(L);C.x=F*k,C.y=-E*i+p,C.z=F*q,d.push(C.x,C.y,C.z),y.set(k,A,q).normalize(),h.push(y.x,y.y,y.z),_.push(ee,1-E),S.push(x++)}m.push(S)}for(let P=0;P<r;P++)for(let S=0;S<s;S++){const E=m[S][P],F=m[S+1][P],W=m[S+1][P+1],ee=m[S][P+1];f.push(E,F,ee),f.push(F,W,ee),T+=6}c.addGroup(u,T,0),u+=T}function v(y){const C=x,T=new Xe,A=new D;let P=0;const S=y===!0?e:n,E=y===!0?1:-1;for(let W=1;W<=r;W++)d.push(0,p*E,0),h.push(0,E,0),_.push(.5,.5),x++;const F=x;for(let W=0;W<=r;W++){const L=W/r*l+a,k=Math.cos(L),q=Math.sin(L);A.x=S*q,A.y=p*E,A.z=S*k,d.push(A.x,A.y,A.z),h.push(0,E,0),T.x=k*.5+.5,T.y=q*.5*E+.5,_.push(T.x,T.y),x++}for(let W=0;W<r;W++){const ee=C+W,L=F+W;y===!0?f.push(L,L+1,ee):f.push(L+1,L,ee),P+=3}c.addGroup(u,P,y===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xd extends zo{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new xd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ql extends qt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new D,y=new D,C=new D;for(let T=0;T<n.length;T+=3)_(n[T+0],v),_(n[T+1],y),_(n[T+2],C),l(v,y,C,g)}function l(g,v,y,C){const T=C+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const S=g.clone().lerp(y,P/T),E=v.clone().lerp(y,P/T),F=T-P;for(let W=0;W<=F;W++)W===0&&P===T?A[P][W]=S:A[P][W]=S.clone().lerp(E,W/F)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const E=Math.floor(S/2);S%2===0?(h(A[P][E+1]),h(A[P+1][E]),h(A[P][E])):(h(A[P][E+1]),h(A[P+1][E+1]),h(A[P+1][E]))}}function c(g){const v=new D;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(g),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function f(){const g=new D;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const y=p(g)/2/Math.PI+.5,C=u(g)/Math.PI+.5;o.push(y,1-C)}x(),d()}function d(){for(let g=0;g<o.length;g+=6){const v=o[g+0],y=o[g+2],C=o[g+4],T=Math.max(v,y,C),A=Math.min(v,y,C);T>.9&&A<.1&&(v<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function _(g,v){const y=g*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function x(){const g=new D,v=new D,y=new D,C=new D,T=new Xe,A=new Xe,P=new Xe;for(let S=0,E=0;S<s.length;S+=9,E+=6){g.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),T.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),P.set(o[E+4],o[E+5]),C.copy(g).add(v).add(y).divideScalar(3);const F=p(C);m(T,E+0,g,F),m(A,E+2,v,F),m(P,E+4,y,F)}}function m(g,v,y,C){C<0&&g.x===1&&(o[v]=g.x-1),y.x===0&&y.z===0&&(o[v]=C/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.vertices,e.indices,e.radius,e.details)}}const Oa=new D,Fa=new D,ou=new D,za=new bn;class gw extends qt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ms*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},_=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:m,b:p,c:u}=za;if(m.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),za.getNormal(ou),d[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let g=0;g<3;g++){const v=(g+1)%3,y=d[g],C=d[v],T=za[f[g]],A=za[f[v]],P=`${y}_${C}`,S=`${C}_${y}`;S in h&&h[S]?(ou.dot(h[S].normal)<=s&&(_.push(T.x,T.y,T.z),_.push(A.x,A.y,A.z)),h[S]=null):P in h||(h[P]={index0:c[g],index1:c[v],normal:ou.clone()})}}for(const x in h)if(h[x]){const{index0:m,index1:p}=h[x];Oa.fromBufferAttribute(a,m),Fa.fromBufferAttribute(a,p),_.push(Oa.x,Oa.y,Oa.z),_.push(Fa.x,Fa.y,Fa.z)}this.setAttribute("position",new at(_,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yd extends Ql{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new yd(e.radius,e.detail)}}class Sd extends Ql{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Sd(e.radius,e.detail)}}class Pl extends qt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new D,h=new D,_=[],x=[],m=[],p=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const T=C/n;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),m.push(h.x,h.y,h.z),p.push(T+y,1-v),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=f[u][g+1],y=f[u][g],C=f[u+1][g],T=f[u+1][g+1];(u!==0||o>0)&&_.push(v,y,T),(u!==i-1||l<Math.PI)&&_.push(y,C,T)}this.setIndex(_),this.setAttribute("position",new at(x,3)),this.setAttribute("normal",new at(m,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _o extends qt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new D,d=new D,h=new D;for(let _=0;_<=i;_++)for(let x=0;x<=r;x++){const m=x/r*s,p=_/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(m),d.y=(e+n*Math.cos(p))*Math.sin(m),d.z=n*Math.sin(p),a.push(d.x,d.y,d.z),f.x=e*Math.cos(m),f.y=e*Math.sin(m),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(x/r),c.push(_/i)}for(let _=1;_<=i;_++)for(let x=1;x<=r;x++){const m=(r+1)*_+x-1,p=(r+1)*(_-1)+x-1,u=(r+1)*(_-1)+x,g=(r+1)*_+x;o.push(m,p,g),o.push(p,u,g)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jn extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j0,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Md extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class _w extends Md{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const au=new gt,fm=new D,dm=new D;class p_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;fm.setFromMatrixPosition(e.matrixWorld),n.position.copy(fm),dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dm),n.updateMatrixWorld(),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hm=new gt,eo=new D,lu=new D;class vw extends p_{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),i.position.copy(eo),lu.copy(i.position),lu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(lu),i.updateMatrixWorld(),r.makeTranslation(-eo.x,-eo.y,-eo.z),hm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hm)}}class xw extends Md{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yw extends p_{constructor(){super(new s_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sw extends Md{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new yw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mw{constructor(e,n,i=0,r=1/0){this.ray=new $l(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return pf(e,this,i,n),i.sort(pm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)pf(e[r],this,i,n);return i.sort(pm),i}}function pm(t,e){return t.distance-e.distance}function pf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)pf(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);const dt=(t,e)=>({p:t,s:e}),on=(t,e)=>({p:t,s:e,hazard:!0}),Ew=(t,e,n,i,r,s=0)=>({p:t,s:e,move:{axis:n,range:i,period:r,phase:s}});function kn(t,e,n){const r=t/2,s=e/2,o=n/2;return[dt([0,-(s+1/2),0],[t+2*1,1,n+2*1]),dt([0,s+1/2,0],[t+2*1,1,n+2*1]),dt([-(r+1/2),0,0],[1,e+2*1,n+2*1]),dt([r+1/2,0,0],[1,e+2*1,n+2*1]),dt([0,0,-(o+1/2)],[t+2*1,e+2*1,1]),dt([0,0,o+1/2],[t+2*1,e+2*1,1])]}const Bn=[{name:"引力初感",hint:"按 → 让重力向右倾倒，球会一路滚向传送门。空格键随时把重力回正向下——迷路时的万能保险。",par:1,spawn:[-7,1.2,0],portal:{p:[7.5,1.15,0],n:[1,0,0]},boxes:[dt([0,-.5,0],[18,1,12])],stars:[[-3,.95,0],[0,.95,0],[4,.95,0]]},{name:"深入视界",hint:"按 ↑：重力倒向屏幕深处，球滑向远墙。封闭房间，随时可以重试。",par:1,spawn:[0,-3.4,3.5],portal:{p:[0,-3.4,-5.5],n:[0,0,1]},boxes:kn(12,9,12),stars:[[3.5,-4,0],[-3.5,-4,0],[0,-3.5,-4.4]]},{name:"天花板课堂",hint:"先按 ↑ 滑向远墙，再按一次 ↑ 原地升空——球贴着远墙爬升，正好撞进高处的传送门。连按两次 ←/→ 即可反转重力。",par:2,spawn:[0,-3.4,4],portal:{p:[0,4,-5.5],n:[0,-1,0]},boxes:kn(12,9,12),stars:[[4,-4,4],[-4,-4,4],[0,1.5,-5.4]]},{name:"弹射之道",hint:"→ 出发撞上弹射板飞越断崖，落地后再按一次 → 冲向第二块弹射板，直达彼岸传送门。",par:2,spawn:[-10,1.2,0],portal:{p:[12.5,1.15,0],n:[1,0,0]},boxes:[dt([-8,-.5,0],[8,1,6]),dt([1,-1.5,0],[8,1,6]),dt([10,-.5,0],[8,1,6])],bumpers:[{p:[-4.6,.15,0],n:[.55,.835,0]},{p:[4.6,-.85,0],n:[.55,.835,0]}],stars:[[-8,.95,0],[3,-.55,0],[11,.95,0]]},{name:"检查站",hint:"按 ↓ 贴到南墙，再按 ← 沿墙滑向东侧传送门——晶柱拦不住贴墙路线。青色立环会记住你的进度。",par:2,spawn:[-5.5,-3.4,0],portal:{p:[3,-3.4,5.45],n:[0,0,-1]},boxes:[...kn(12,9,12),on([-2,-4.2,0],[1,1.8,1])],checkpoints:[{p:[0,-4.3,4.6]}],stars:[[-4,-4,0],[0,-4,4],[2,-4,4.6]]},{name:"反重力井",hint:"按 → 全速冲进反重力井，被托举升空；场内方向键是推进脉冲，微调航向顺势飘上高台。",par:1,spawn:[-9.5,1.2,0],portal:{p:[7,2.6,0],n:[0,1,0]},boxes:[dt([-8,-.5,0],[6,1,6]),dt([6,1.5,0],[12,1,6])],fields:[{p:[-2.5,1.5,0],s:[5,5,4],dir:[0,1,0]}],stars:[[-8,.95,0],[4.6,5,0],[7,2.9,0]]},{name:"双钥闸门",hint:"↓ 滚到南墙压亮第一钥，空格落回墙根，← 沿墙根滑到西南角压亮第二钥——闸门溶解，↑ 沿西墙直捣传送门。",par:4,spawn:[0,-3.4,4],portal:{p:[-5.45,-4.05,-2],n:[1,0,0]},boxes:kn(12,9,12),plates:[{p:[0,-4.3,4.8]},{p:[-4.5,-4.3,5.2]}],gates:[{p:[-5.1,-3.7,-2],s:[.5,1.6,6],need:2}],stars:[[0,-4,4.6],[-4.5,-4,5.05],[-3,-4,-2]]},{name:"空中接力",hint:"弹射上舞台，滚过压力板开启能量墙，一路滚向传送门。",par:2,spawn:[-11,1.2,0],portal:{p:[13.5,1.15,0],n:[1,0,0]},boxes:[dt([-10.5,-.5,0],[5,1,5]),dt([-2.5,-.5,0],[10,1,5]),dt([4.5,-.5,0],[5,1,5]),dt([8,-.25,0],[2,.5,3]),dt([12,-.5,0],[6,1,5])],bumpers:[{p:[-8.6,.15,0],n:[.55,.835,0]}],plates:[{p:[5,.12,0]}],gates:[{p:[9.5,3.5,0],s:[.5,7,6],need:1}],checkpoints:[{p:[0,.6,0]},{p:[10,.6,0]}],stars:[[-8,.95,0],[-5.4,2.8,0],[12,.95,0]]},{name:"空中楼阁",hint:"→ 滑行，← 刹停在悬浮楼阁正下方，再连按 → 原地升空——球会顶住楼阁底部，正好悬挂进下方悬挂的传送门。",par:4,spawn:[-6.5,-5,0],portal:{p:[5,1.8,0],n:[0,1,0],r:2.6},boxes:[...kn(16,12,16),dt([5,3.75,0],[6,1.5,6]),on([-3,-5.4,2.5],[1,1.2,1]),on([-3,-5.4,-2.5],[1,1.2,1])],checkpoints:[{p:[-4,-5.5,0]},{p:[5,2.5,0]}],stars:[[-6,-5.1,0],[5,5.1,0],[4,2.6,0]]},{name:"倒悬行军",hint:"← ← 原地升空贴顶，顺路压亮穹顶之钥；轻点 → 沿穹顶东行到塔顶正上方，空格坠落塔崴——失足也会回到穹顶信标。",par:5,spawn:[-6.5,-6,0],portal:{p:[0,4.55,0],n:[0,1,0]},boxes:[...kn(16,14,16),dt([0,-1.75,0],[6,11.7,6]),on([3,-6.4,3],[1.2,1.2,1.2]),on([3,-6.4,-3],[1.2,1.2,1.2]),on([-3,-6.4,3],[1.2,1.2,1.2]),on([-3,-6.4,-3],[1.2,1.2,1.2])],plates:[{p:[-5.5,6.45,0],n:[0,-1,0]}],gates:[{p:[0,4.35,0],s:[6,.5,6],need:1}],checkpoints:[{p:[-6,-6.15,0]},{p:[-5,6.3,0]}],stars:[[-6.9,-6.1,0],[-7,6.1,0],[-3.7,5.2,0]]},{name:"万花筒",hint:"↑ 穿过中央回廊直抵北墙（顺路摘星），← 沿北墙滑行撞进传送门。反转重力还能摘到穹顶的星。",par:2,spawn:[3.5,-4.9,4],portal:{p:[0,-4.8,-5.45],n:[0,0,1]},boxes:[...kn(12,12,12),on([0,0,0],[2,2.4,2]),on([4.6,-4.3,0],[.8,2.4,1.4]),on([-4.6,-4.3,0],[.8,2.4,1.4]),on([0,-4.3,4],[1.4,2.4,1]),on([0,-4.3,-3.5],[1.4,2.4,1])],checkpoints:[{p:[1.5,5.3,-4.5]}],stars:[[3.8,-5,4.3],[3.5,-5,-2],[0,5.5,-4.5]]},{name:"引力之心",hint:"起点即是地板之钥——← ← 原地升空贴顶压亮第二钥，轻点 ← 沿穹顶东行，滑到峡谷正上方再按 ← 垂直坠落，正好落进传送门。",par:4,spawn:[-5.5,-6,3],portal:{p:[0,4.7,3],n:[0,1,0]},boxes:[...kn(16,14,16),dt([0,-1.45,0],[5,11,14.5])],plates:[{p:[-5,-6.92,3]},{p:[-7,6.42,3],n:[0,-1,0]}],gates:[{p:[0,4.55,0],s:[5.4,.5,14.5],need:2}],checkpoints:[{p:[-5.5,-6.15,3]},{p:[-7,6.3,3]}],stars:[[-5.2,-5.9,3],[-6.2,-1,3],[-3,6.05,3]]},{name:"相位之门",hint:"↑ ↑ 升空贴顶摘西北星，空格落回北墙根；再按 ←（此时屏幕左=世界东）沿北墙直行——掐准时序闸门青色的窗口冲过（红光闪烁=即将关闭），一路滚进东北角的传送门。",par:4,spawn:[-5.5,-3.4,0],portal:{p:[5.45,-3.4,-4.6],n:[-1,0,0]},boxes:kn(12,9,12),gates:[{p:[0,-3.2,0],s:[.5,1.7,12],timing:{period:6,duty:.45,phase:.1}}],stars:[[-5.5,3.3,-4.6],[-4,-4,-4.6],[3.5,-4,-4.6]]},{name:"浮空航道",hint:"等悬浮平台滑到西侧岸边，→ 冲上去随平台东渡；到岸后空格落定、再按 → 滚上东岸撞弹射板，飞上高台滚进传送门。",par:4,spawn:[-8.5,1.2,0],portal:{p:[11,5.3,0],n:[0,1,0]},boxes:[dt([-6.5,-.5,0],[7,1,6]),dt([7.5,-.5,0],[8,1,5]),Ew([0,-.25,0],[3,.5,4],[1,0,0],2.5,8),dt([10,3.5,0],[4,.7,4])],bumpers:[{p:[6,.15,0],n:[.3,.954,0],power:16}],stars:[[-8,.95,0],[0,1.35,0],[10,4.7,0]]},{name:"引力反转",hint:"→ 滚上弹射板腾空（弹射瞬间重力归下），穿过品红转换球的一瞬重力再度反转，把你直送穹顶传送门；贴顶后按 ←（倒悬时屏幕左=世界东）滚向东侧摘星入传送门。",par:3,spawn:[-4.5,-4.4,0],portal:{p:[3.5,4.55,0],n:[0,-1,0]},boxes:kn(12,11,12),bumpers:[{p:[0,-4.85,0],n:[.15,.989,0],power:15}],orbs:[{p:[.5,-1.5,0]}],stars:[[-4,-4.1,0],[.6,.5,0],[2.2,4.3,0]]},{name:"矩阵之心",hint:"→ 一路向东：开局顺手压亮琥珀之钥，能量墙随之敞开；掐准时序闸门窗口冲到尽头弹射板腾空，上升途中穿过品红转换球再度反转，直送穹顶传送门。",par:2,spawn:[-7,-5.9,0],portal:{p:[5,6.55,0],n:[0,-1,0],r:1.6},boxes:[...kn(16,14,16),on([3,-6.2,2],[.7,1.4,1]),on([3,-6.2,-2],[.7,1.4,1])],plates:[{p:[-6.5,-6.88,0]}],gates:[{p:[-4,-5.6,0],s:[.5,1.8,16],need:1},{p:[-2,-6.2,0],s:[.5,1.7,16],timing:{period:6,duty:.45,phase:.15}}],bumpers:[{p:[3,-6.85,0],n:[.25,.968,0],power:16}],orbs:[{p:[3.6,-3.5,0]}],checkpoints:[{p:[-1,-6.6,0]}],stars:[[-7,-6.1,0],[.5,-6.1,0],[2.6,-4.5,0]]}];function Tw(t){const e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(const i of t)if(!i.hazard)for(let r=0;r<3;r++)e[r]=Math.min(e[r],i.p[r]-i.s[r]/2),n[r]=Math.max(n[r],i.p[r]+i.s[r]/2);return{min:e,max:n}}class ww{constructor(){Z(this,"ctx",null);Z(this,"muted",!1)}ensure(){if(this.muted)return null;try{if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}catch{return null}}unlock(){this.ensure()}tone(e,n,i="sine",r=.12,s,o=0){const a=this.ensure();if(!a)return;const l=a.currentTime+o,c=a.createOscillator(),f=a.createGain();c.type=i,c.frequency.setValueAtTime(e,l),s&&c.frequency.exponentialRampToValueAtTime(Math.max(30,s),l+n),f.gain.setValueAtTime(1e-4,l),f.gain.exponentialRampToValueAtTime(r,l+.012),f.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(f),f.connect(a.destination),c.start(l),c.stop(l+n+.05)}rotate(){this.tone(320,.09,"triangle",.09,430)}land(){this.tone(110,.06,"sine",.1,78)}star(){this.tone(880,.1,"sine",.13),this.tone(1318,.14,"sine",.11,void 0,.08)}win(){[523,659,784,1046].forEach((e,n)=>this.tone(e,.16,"triangle",.12,void 0,n*.11))}die(){this.tone(220,.35,"sawtooth",.12,60)}click(){this.tone(660,.05,"square",.05)}bumper(){this.tone(240,.18,"square",.1,720),this.tone(480,.12,"sine",.08,960,.04)}field(){this.tone(300,.3,"sine",.07,900)}thrust(){this.tone(500,.06,"sine",.05,700)}plate(){this.tone(660,.09,"triangle",.11),this.tone(880,.14,"triangle",.1,void 0,.09)}gate(){this.tone(180,.42,"sawtooth",.09,50),this.tone(720,.26,"sine",.07,1180,.06)}checkpoint(){this.tone(523,.1,"sine",.1),this.tone(784,.16,"sine",.1,void 0,.09)}orb(){this.tone(700,.22,"sine",.11,240),this.tone(350,.16,"triangle",.08,900,.06)}gateOpen(){this.tone(520,.08,"sine",.07,860)}gateShut(){this.tone(200,.16,"sawtooth",.08,90)}}const Aw=26,Kt=.42,Rw=11,Cw=19,bw=.05,mm=1.5,Pw=1.1,Zr=6,gm=8.6,cu=1/120,Lw=1.15,Dw=1.05,Nw=1.5,Uw=1.15,Iw=1.2,ye=(t=0,e=0,n=0)=>new D(t,e,n),_m=Math.PI/180;class Ow{constructor(e,n){Z(this,"webglFailed",!1);Z(this,"sfx",new ww);Z(this,"canvas");Z(this,"cb");Z(this,"renderer");Z(this,"scene",new hw);Z(this,"cam");Z(this,"mode","off");Z(this,"enabled",!1);Z(this,"levelIdx",0);Z(this,"levelGroup",null);Z(this,"boxes",[]);Z(this,"solidMeshes",[]);Z(this,"stars",[]);Z(this,"portal",null);Z(this,"portalR",mm);Z(this,"spawn",ye());Z(this,"boundMin",ye());Z(this,"boundMax",ye());Z(this,"fields",[]);Z(this,"plates",[]);Z(this,"bumpers",[]);Z(this,"checkpoints",[]);Z(this,"orbs",[]);Z(this,"curField",null);Z(this,"checkpoint",null);Z(this,"deaths",0);Z(this,"boostT",0);Z(this,"activePlates",0);Z(this,"moveT",0);Z(this,"ball",{pos:ye(),vel:ye()});Z(this,"ballMesh");Z(this,"ballLight");Z(this,"gBase",ye(0,-1,0));Z(this,"gEff",ye(0,-1,0));Z(this,"qBase",new ri);Z(this,"yawOff",0);Z(this,"pitchOff",0);Z(this,"qTarget",new ri);Z(this,"camDist",gm);Z(this,"rotations",0);Z(this,"time",0);Z(this,"timerOn",!1);Z(this,"finished",!1);Z(this,"dead",!1);Z(this,"gen",0);Z(this,"starsGot",0);Z(this,"starsTotal",0);Z(this,"acc",0);Z(this,"lastT",-1);Z(this,"statT",0);Z(this,"prevContact",!1);Z(this,"contactN",ye(0,1,0));Z(this,"shake",0);Z(this,"tweens",[]);Z(this,"geoBox",new br(1,1,1));Z(this,"geoEdge",new gw(new br(1,1,1)));Z(this,"geoBall",new Pl(Kt,32,24));Z(this,"geoWire",new yd(Kt*1.06,1));Z(this,"geoStar",new Sd(.32));Z(this,"geoTorus",new _o(1.05,.11,12,40));Z(this,"geoDisc",new vd(.95,32));Z(this,"geoPlate",new zo(.55,.68,.14,28));Z(this,"geoRing",new _o(.55,.075,10,32));Z(this,"geoCone",new xd(.3,.55,16));Z(this,"geoBump",new zo(.62,.75,.2,28));Z(this,"geoOrb",new Pl(.3,20,16));Z(this,"geoOrbRing",new _o(.52,.045,8,32));Z(this,"matSolid",new Jn({color:"#242c42",roughness:.85,metalness:.08}));Z(this,"matHazard",new Jn({color:"#3a1220",emissive:"#ff2d55",emissiveIntensity:.9,roughness:.6}));Z(this,"matEdge",new Qa({color:"#3fc1ff",transparent:!0,opacity:.4}));Z(this,"matBall",new Jn({color:"#e8f4ff",roughness:.3,metalness:.15,emissive:"#1f6f8f",emissiveIntensity:.4}));Z(this,"matWire",new fs({color:"#7fdcff",wireframe:!0,transparent:!0,opacity:.28}));Z(this,"matStarBase",new Jn({color:"#ffd54a",emissive:"#ffb300",emissiveIntensity:.85,roughness:.35,transparent:!0}));Z(this,"matTorus",new Jn({color:"#8a5cff",emissive:"#7c4dff",emissiveIntensity:.9,roughness:.4}));Z(this,"matDisc",new fs({color:"#b39dff",transparent:!0,opacity:.3,side:ii,depthWrite:!1}));Z(this,"matField",new fs({color:"#3fc1ff",transparent:!0,opacity:.09,depthWrite:!1}));Z(this,"matGate",new Jn({color:"#8a5cff",emissive:"#7c4dff",emissiveIntensity:.75,roughness:.4,transparent:!0,opacity:.85}));Z(this,"matPlateOff",new Jn({color:"#4a5568",emissive:"#000000",emissiveIntensity:0,roughness:.6}));Z(this,"matBumper",new Jn({color:"#0e3a52",emissive:"#3fc1ff",emissiveIntensity:.9,roughness:.35}));Z(this,"matCpOff",new Jn({color:"#4a5568",emissive:"#22303c",emissiveIntensity:.4,roughness:.5}));Z(this,"matOrb",new Jn({color:"#ff4dd2",emissive:"#ff2d9e",emissiveIntensity:.9,roughness:.3}));Z(this,"matOrbRing",new fs({color:"#ffb3ec",transparent:!0,opacity:.65}));Z(this,"gyroOn",!1);Z(this,"gyroActive",!1);Z(this,"gyroSeen",!1);Z(this,"gyroP",0);Z(this,"gyroR",0);Z(this,"gyroP0",0);Z(this,"gyroR0",0);Z(this,"doeHandler",e=>this.onDeviceOrientation(e));Z(this,"raycaster",new Mw);Z(this,"ro",null);Z(this,"lastThrustT",0);Z(this,"keyHandler",e=>{if(!(this.mode!=="play"||!this.enabled))switch(e.key){case"ArrowLeft":e.preventDefault(),this.tip("L");break;case"ArrowRight":e.preventDefault(),this.tip("R");break;case"ArrowUp":e.preventDefault(),this.tip("U");break;case"ArrowDown":e.preventDefault(),this.tip("D");break;case"q":case"Q":case"a":case"A":this.yaw(1);break;case"e":case"E":case"d":case"D":this.yaw(-1);break;case"r":case"R":this.restart();break;case" ":case"Spacebar":e.preventDefault(),e.repeat||this.restoreDown();break;case"Escape":case"p":case"P":this.cb.onPauseRequest();break}});Z(this,"pts",new Map);Z(this,"pinchD",0);Z(this,"pdHandler",e=>{if(!(this.mode!=="play"||!this.enabled)&&!(e.pointerType==="mouse"&&e.button!==0)&&(this.pts.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pts.size===2)){const[n,i]=[...this.pts.values()];this.pinchD=Math.hypot(n.x-i.x,n.y-i.y)}});Z(this,"pmHandler",e=>{const n=this.pts.get(e.pointerId);if(!n)return;const i=e.clientX-n.x,r=e.clientY-n.y;if(n.x=e.clientX,n.y=e.clientY,!(this.mode!=="play"||!this.enabled)){if(this.pts.size===1)i!==0&&this.freeYaw(i*.006),r!==0&&this.pitch(r*.006);else if(this.pts.size===2){const[s,o]=[...this.pts.values()],a=Math.hypot(s.x-o.x,s.y-o.y);this.pinchD>0&&Math.abs(a-this.pinchD)>.5&&(this.camDist=Qn.clamp(this.camDist+(this.pinchD-a)*.03,4,16),this.pinchD=a)}}});Z(this,"puHandler",e=>{this.pts.delete(e.pointerId),this.pts.size<2&&(this.pinchD=0)});Z(this,"wheelHandler",e=>{this.mode!=="play"||!this.enabled||(e.preventDefault(),this.camDist=Qn.clamp(this.camDist+e.deltaY*.004,4,16))});Z(this,"resizeHandler",()=>this.resize());Z(this,"loop",e=>{if(this.mode==="off")return;const n=e/1e3;this.lastT<0&&(this.lastT=n);const i=Math.min(.05,Math.max(1e-4,n-this.lastT));if(this.lastT=n,this.mode==="play"&&this.timerOn&&!this.finished&&!this.dead&&(this.time+=i),this.mode==="attract"&&(this.yawOff+=.1*i,this.composeQ()),this.computeG(),!this.finished&&!this.dead)for(this.acc=Math.min(this.acc+i,.08);this.acc>=cu;)this.step(cu),this.acc-=cu;this.mode==="play"&&!this.dead&&!this.finished&&(this.updateZones(),this.checkPickups()),this.ballMesh.position.copy(this.ball.pos);const r=this.ball.vel.length();if(r>.05){const s=this.gEff.clone().negate(),o=ye().crossVectors(s,this.ball.vel);o.lengthSq()>1e-6&&(o.normalize(),this.ballMesh.quaternion.premultiply(new ri().setFromAxisAngle(o,r*i/Kt)))}this.updateCamera(i),this.portal&&(this.portal.rotation.z+=i*.8);for(const s of this.stars)s.got||(s.mesh.rotation.y+=i*1.6,s.mesh.position.y=s.baseY+Math.sin(n*2+s.phase)*.12);this.matHazard.emissiveIntensity=.75+.3*Math.sin(n*3.2),this.matField.opacity=.07+.04*(.5+.5*Math.sin(n*1.7)),this.matBumper.emissiveIntensity=.75+.35*(.5+.5*Math.sin(n*4.2));for(const s of this.orbs){s.mesh.rotation.y+=i*1.3,s.ring.rotation.z+=i*2.2;const o=s.cd<=0;this.matOrb.emissiveIntensity=o?.7+.4*(.5+.5*Math.sin(n*5)):.2,this.matOrbRing.opacity=o?.5+.3*Math.sin(n*5):.15}for(const s of this.boxes){const o=s.gate;if(o&&!o.timing&&o.opened&&o.animT<1){o.animT=Math.min(1,o.animT+i*2);const a=o.animT,l=o.mesh.userData;l.bx===void 0&&(l.bx=o.mesh.scale.x,l.by=o.mesh.scale.y,l.bz=o.mesh.scale.z);const c=Math.max(.02,1-a);o.mesh.scale.set(l.bx*c,l.by*c,l.bz*c);const f=o.mesh.material;f.opacity=.85*(1-a),a>=1&&(o.mesh.visible=!1)}}for(const s of this.boxes){const o=s.gate;if(!o||!o.timing)continue;const a=((this.moveT/o.timing.period+o.timing.phase)%1+1)%1,l=o.mesh.material;if(o.opened){if(a>o.timing.duty*.7){const c=.5+.5*Math.sin(n*14);l.emissive.set(c>.5?"#ff3b6b":"#3fc1ff"),l.emissiveIntensity=.5+c*.5,l.opacity=.16+c*.2}}else l.emissive.set("#ff3b6b"),l.emissiveIntensity=.7+.25*Math.sin(n*3)}for(let s=this.tweens.length-1;s>=0;s--){const o=this.tweens[s];o.t+=i;const a=o.t/o.dur;if(o.kind==="star"){o.obj.scale.setScalar(1+a*2.2);const l=o.obj.material;l.opacity=Math.max(0,1-a),l.transparent=!0,a>=1&&(o.obj.visible=!1,this.tweens.splice(s,1))}else o.obj.scale.setScalar(1+Math.sin(Math.min(1,a)*Math.PI)*.5),a>=1&&(o.obj.scale.setScalar(1),this.tweens.splice(s,1))}this.statT+=i,this.mode==="play"&&this.statT>.15&&(this.statT=0,this.pushStats()),this.renderer.render(this.scene,this.cam)});this.canvas=e,this.cb=n;try{this.renderer=new d_({canvas:e,antialias:!0,powerPreference:"high-performance"})}catch{throw this.webglFailed=!0,new Error("WebGL init failed")}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.toneMapping=O0,this.renderer.toneMappingExposure=1.1,this.scene.background=new qe("#05060e"),this.scene.fog=new _d(329230,.015),this.cam=new _n(60,1,.1,220),this.cam.position.set(0,3,9);const i=new _w(9676799,2366010,.85),r=new Sw(16777215,1);r.position.set(6,12,4),this.scene.add(i,r),this.ballMesh=new ht(this.geoBall,this.matBall);const s=new ht(this.geoWire,this.matWire);this.ballMesh.add(s),this.ballLight=new xw(6740479,.9,7),this.ballMesh.add(this.ballLight),this.scene.add(this.ballMesh),this.scene.add(this.makeStarfield()),this.bindEvents(),this.resize(),window.__gt3d={state:()=>({pos:this.ball.pos.toArray().map(o=>+o.toFixed(2)),vel:+this.ball.vel.length().toFixed(2),g:this.gBase.toArray(),rot:this.rotations,mode:this.mode,stars:this.starsGot,deaths:this.deaths,plates:this.activePlates,finished:this.finished,dead:this.dead,level:this.levelIdx,gates:this.boxes.filter(o=>o.gate).map(o=>o.gate.opened?1:0),movers:this.boxes.filter(o=>o.move).map(o=>o.mesh.position.toArray().map(a=>+a.toFixed(2)))}),tip:o=>this.tip(o),restore:()=>this.restoreDown(),yaw:o=>this.yaw(o),dirs:()=>{const o=this.gBase.clone().negate(),a=ye(1,0,0).applyQuaternion(this.qTarget);a.addScaledVector(o,-a.dot(o)),a.lengthSq()<1e-6&&a.set(1,0,0),a.normalize();const l=ye(0,0,-1).applyQuaternion(this.qTarget),c=l.addScaledVector(o,-l.dot(o));return c.lengthSq()<1e-6&&c.copy(a).negate(),c.normalize(),{R:a.toArray(),L:a.clone().negate().toArray(),U:c.toArray(),D:c.clone().negate().toArray()}},cam:()=>({yaw:+this.yawOff.toFixed(3),pitch:+this.pitchOff.toFixed(3),dist:+this.camDist.toFixed(2),faded:this.solidMeshes.filter(o=>{const a=o.userData.fade;return!!a&&a.cur<.9}).length}),pitch:o=>this.pitch(o),win:()=>this.forceWin(),goto:o=>this.startLevel(o),warp:(o,a,l)=>{this.ball.pos.set(o,a,l),this.ball.vel.set(0,0,0)},gyroSet:(o,a)=>{this.gyroP0=0,this.gyroR0=0,this.gyroP=o,this.gyroR=a,this.gyroSeen=!0,this.gyroActive=!0}},this.renderer.setAnimationLoop(this.loop)}makeStarfield(){const n=new Float32Array(2700);for(let s=0;s<900;s++){const o=ye().randomDirection().multiplyScalar(55+Math.random()*40);n[s*3]=o.x,n[s*3+1]=o.y,n[s*3+2]=o.z}const i=new qt;i.setAttribute("position",new Yn(n,3));const r=new h_({color:10467583,size:.6,transparent:!0,opacity:.75,sizeAttenuation:!0,depthWrite:!1,fog:!1});return new mw(i,r)}clearLevel(){this.levelGroup&&(this.scene.remove(this.levelGroup),this.levelGroup.traverse(e=>{const n=e;n.material&&n.material.dispose&&!this.isShared(n.material)&&n.material.dispose()}),this.levelGroup=null),this.boxes=[],this.solidMeshes=[],this.stars=[],this.portal=null,this.tweens=[],this.fields=[],this.plates=[],this.bumpers=[],this.checkpoints=[],this.orbs=[],this.curField=null}isShared(e){const n=Array.isArray(e)?e[0]:e;return n===this.matSolid||n===this.matHazard||n===this.matTorus||n===this.matDisc||n===this.matField||n===this.matBumper||n===this.matPlateOff||n===this.matCpOff||n===this.matOrb||n===this.matOrbRing}buildLevel(e){var a,l,c,f,d,h,_,x;this.clearLevel();const n=Bn[e];this.levelIdx=e;const i=new ps;this.levelGroup=i;for(const m of n.boxes){let p;if(m.hazard)p=new ht(this.geoBox,this.matHazard);else{const y=this.matSolid.clone();p=new ht(this.geoBox,y);const C=this.matEdge.clone();p.add(new su(this.geoEdge,C)),p.userData.fade={mat:y,edgeMat:C,base:1,baseEdge:.4,cur:1,occl:!1},this.solidMeshes.push(p)}const u=ye(m.p[0]-m.s[0]/2,m.p[1]-m.s[1]/2,m.p[2]-m.s[2]/2),g=ye(m.p[0]+m.s[0]/2,m.p[1]+m.s[1]/2,m.p[2]+m.s[2]/2);p.position.set(m.p[0],m.p[1],m.p[2]),p.scale.set(m.s[0],m.s[1],m.s[2]),i.add(p);const v={min:u,max:g,hazard:!!m.hazard,mesh:p};if(m.move){const y=ye(...m.move.axis).normalize(),C=Math.sin(((a=m.move.phase)!=null?a:0)*Math.PI*2)*m.move.range,T=y.clone().multiplyScalar(C);u.add(T),g.add(T),p.position.copy(ye(m.p[0],m.p[1],m.p[2])).add(T),v.move={base:ye(m.p[0],m.p[1],m.p[2]),axis:y,range:m.move.range,period:Math.max(.5,m.move.period),phase:(l=m.move.phase)!=null?l:0,prev:T.clone(),delta:ye()}}this.boxes.push(v)}if(n.fields)for(const m of n.fields){const p=new ht(this.geoBox,this.matField);p.position.set(m.p[0],m.p[1],m.p[2]),p.scale.set(m.s[0],m.s[1],m.s[2]);const u=new su(this.geoEdge,new Qa({color:"#3fc1ff",transparent:!0,opacity:.55}));p.add(u),i.add(p),this.fields.push({min:ye(m.p[0]-m.s[0]/2,m.p[1]-m.s[1]/2,m.p[2]-m.s[2]/2),max:ye(m.p[0]+m.s[0]/2,m.p[1]+m.s[1]/2,m.p[2]+m.s[2]/2),dir:ye(...m.dir).normalize(),mesh:p})}if(n.plates)for(const m of n.plates){const p=this.matPlateOff.clone(),u=new ht(this.geoPlate,p);u.position.set(m.p[0],m.p[1],m.p[2]);const g=ye(...(c=m.n)!=null?c:[0,1,0]).normalize();u.quaternion.setFromUnitVectors(ye(0,1,0),g),i.add(u),this.plates.push({pos:ye(m.p[0],m.p[1],m.p[2]),active:!1,mat:p})}if(n.gates)for(const m of n.gates){const p=this.matGate.clone(),u=new Qa({color:"#c9b3ff",transparent:!0,opacity:.8}),g=new ht(this.geoBox,p);g.position.set(m.p[0],m.p[1],m.p[2]),g.scale.set(m.s[0],m.s[1],m.s[2]),g.add(new su(this.geoEdge,u)),g.userData.fade={mat:p,edgeMat:u,base:.85,baseEdge:.8,cur:1,occl:!1},i.add(g);const v={need:(f=m.need)!=null?f:1,opened:!1,animT:0,mesh:g};if(this.solidMeshes.push(g),m.timing){v.timing={period:Math.max(1,m.timing.period),duty:Qn.clamp((d=m.timing.duty)!=null?d:.5,.1,.9),phase:(h=m.timing.phase)!=null?h:0};const y=v.timing.phase%1;if(v.opened=y<v.timing.duty,v.opened){p.opacity=.16,p.emissive.set("#3fc1ff"),p.emissiveIntensity=.5;const C=this.solidMeshes.indexOf(g);C>=0&&this.solidMeshes.splice(C,1)}}this.boxes.push({min:ye(m.p[0]-m.s[0]/2,m.p[1]-m.s[1]/2,m.p[2]-m.s[2]/2),max:ye(m.p[0]+m.s[0]/2,m.p[1]+m.s[1]/2,m.p[2]+m.s[2]/2),hazard:!1,mesh:g,gate:v})}if(n.bumpers)for(const m of n.bumpers){const p=ye(...m.n).normalize(),u=new ht(this.geoBump,this.matBumper);u.position.set(m.p[0],m.p[1],m.p[2]),u.quaternion.setFromUnitVectors(ye(0,1,0),p);const g=new ht(this.geoCone,this.matBumper);g.position.copy(p.clone().multiplyScalar(.55)),g.quaternion.copy(u.quaternion),u.add(g),i.add(u),this.bumpers.push({pos:ye(m.p[0],m.p[1],m.p[2]),n:p,power:(_=m.power)!=null?_:13.5,cd:0,disc:u})}if(n.checkpoints)for(const m of n.checkpoints){const p=this.matCpOff.clone(),u=new ht(this.geoRing,p);u.position.set(m.p[0],m.p[1],m.p[2]),u.rotation.y=Math.PI/2,i.add(u),this.checkpoints.push({pos:ye(m.p[0],m.p[1],m.p[2]),active:!1,mat:p})}if(n.orbs)for(const m of n.orbs){const p=new ht(this.geoOrb,this.matOrb);p.position.set(m.p[0],m.p[1],m.p[2]);const u=new ht(this.geoOrbRing,this.matOrbRing);u.rotation.x=Math.PI/2.6,p.add(u),i.add(p),this.orbs.push({pos:ye(m.p[0],m.p[1],m.p[2]),cd:0,mesh:p,ring:u})}for(const m of n.stars){const p=this.matStarBase.clone(),u=new ht(this.geoStar,p);u.position.set(m[0],m[1],m[2]),i.add(u),this.stars.push({mesh:u,baseY:m[1],phase:Math.random()*Math.PI*2,got:!1})}this.starsTotal=this.stars.length,this.starsGot=0;const r=new ps;r.add(new ht(this.geoTorus,this.matTorus)),r.add(new ht(this.geoDisc,this.matDisc)),r.position.set(n.portal.p[0],n.portal.p[1],n.portal.p[2]),this.portalR=(x=n.portal.r)!=null?x:mm;const s=ye(...n.portal.n).normalize();r.quaternion.setFromUnitVectors(ye(0,0,1),s),i.add(r),this.portal=r;const o=Tw(n.boxes);this.boundMin.set(o.min[0],o.min[1],o.min[2]),this.boundMax.set(o.max[0],o.max[1],o.max[2]),this.spawn.set(...n.spawn),this.ball.pos.copy(this.spawn),this.ball.vel.set(0,0,0),this.scene.add(i)}startLevel(e){this.gen++,this.buildLevel(e),this.mode="play",this.enabled=!0,this.rotations=0,this.time=0,this.timerOn=!1,this.finished=!1,this.dead=!1,this.deaths=0,this.activePlates=0,this.checkpoint=null,this.boostT=0,this.prevContact=!1,this.gBase.set(0,-1,0),this.qBase.identity(),this.yawOff=0,this.pitchOff=0,this.composeQ(),this.camDist=gm,this.gyroSeen=!1,this.gyroActive=this.gyroOn&&this.gyroSeen,this.pushStats()}restart(){this.mode==="play"&&this.startLevel(this.levelIdx)}toAttract(){this.gen++,this.buildLevel(9),this.mode="attract",this.enabled=!1,this.gBase.set(0,-1,0),this.qBase.identity(),this.yawOff=0,this.pitchOff=0,this.composeQ()}setEnabled(e){this.mode==="play"&&(this.enabled=e)}tip(e){if(this.mode!=="play"||!this.enabled||this.finished||this.dead)return;const n=this.gBase.clone().negate(),i=ye(1,0,0).applyQuaternion(this.qTarget);i.addScaledVector(n,-i.dot(n)),i.lengthSq()<1e-6&&i.set(1,0,0),i.normalize();const r=ye(0,0,-1).applyQuaternion(this.qTarget),s=r.addScaledVector(n,-r.dot(n));s.lengthSq()<1e-6&&s.copy(i).negate(),s.normalize();let o;if(e==="R"?o=i:e==="L"?o=i.negate():e==="U"?o=s:o=s.negate(),this.curField){const a=o.addScaledVector(this.curField.dir,-o.dot(this.curField.dir));if(a.lengthSq()>.5){const l=performance.now();l-this.lastThrustT>140&&(this.lastThrustT=l,this.ball.vel.addScaledVector(a.normalize(),3.4),this.sfx.thrust())}this.timerOn||(this.timerOn=!0);return}this.gBase.copy(o),this.refitCamera(),this.rotations++,this.timerOn||(this.timerOn=!0),this.sfx.rotate()}restoreDown(){this.mode!=="play"||!this.enabled||this.finished||this.dead||this.curField||this.gBase.x===0&&this.gBase.y===-1&&this.gBase.z===0||(this.gBase.set(0,-1,0),this.refitCamera(),this.rotations++,this.timerOn||(this.timerOn=!0),this.sfx.rotate())}yaw(e){this.mode!=="play"||!this.enabled||this.finished||this.dead||(this.yawOff+=e*Math.PI*.5,this.composeQ(),this.sfx.rotate())}freeYaw(e){this.mode!=="play"||!this.enabled||(this.yawOff+=e,this.composeQ())}pitch(e){this.mode!=="play"||!this.enabled||(this.pitchOff=Qn.clamp(this.pitchOff+e,-1.25,1.25),this.composeQ())}enableGyro(e){return e?typeof window.DeviceOrientationEvent=="undefined"?!1:(this.gyroOn=!0,this.gyroSeen=!1,this.gyroActive=!1,this.gyroP=0,this.gyroR=0,window.addEventListener("deviceorientation",this.doeHandler),!0):(this.gyroOn=!1,this.gyroActive=!1,window.removeEventListener("deviceorientation",this.doeHandler),!0)}gyroIsActive(){return this.gyroActive}onDeviceOrientation(e){if(e.beta==null||e.gamma==null)return;const n=(typeof screen!="undefined"&&screen.orientation?screen.orientation.angle:0)||0;let i,r;switch(n){case 90:i=e.gamma,r=-e.beta;break;case 180:i=-e.beta,r=-e.gamma;break;case 270:case-90:i=-e.gamma,r=e.beta;break;default:i=e.beta,r=e.gamma}if(!this.gyroSeen){this.gyroSeen=!0,this.gyroActive=this.gyroOn,this.gyroP0=i,this.gyroR0=r,this.gyroP=i,this.gyroR=r;return}this.gyroP+=(i-this.gyroP)*.35,this.gyroR+=(r-this.gyroR)*.35}gyroOffset(e){const n=Math.abs(e),i=4,r=32;return n<=i?0:Math.sign(e)*Math.min(r,n-i)}forceWin(){this.mode==="play"&&!this.finished&&this.win()}dispose(){this.renderer.setAnimationLoop(null),window.removeEventListener("keydown",this.keyHandler),window.removeEventListener("resize",this.resizeHandler),this.ro&&this.ro.disconnect(),this.enableGyro(!1),this.renderer.dispose(),this.mode="off"}bindEvents(){window.addEventListener("keydown",this.keyHandler),window.addEventListener("resize",this.resizeHandler),this.canvas.addEventListener("pointerdown",this.pdHandler),window.addEventListener("pointermove",this.pmHandler),window.addEventListener("pointerup",this.puHandler),this.canvas.addEventListener("wheel",this.wheelHandler,{passive:!1}),typeof ResizeObserver!="undefined"&&(this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.canvas))}resize(){const e=this.canvas.clientWidth||window.innerWidth,n=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,n,!1),this.cam.aspect=e/Math.max(1,n),this.cam.updateProjectionMatrix()}composeQ(){const e=ye(0,1,0).applyQuaternion(this.qBase),n=new ri().setFromAxisAngle(e,this.yawOff),i=new ri().setFromAxisAngle(ye(1,0,0),this.pitchOff);this.qTarget.copy(n).multiply(this.qBase).multiply(i)}refitCamera(){const e=this.gBase.clone().negate(),n=ye(0,0,-1).applyQuaternion(this.qBase),i=ye(0,1,0).applyQuaternion(this.qBase);let r=n.clone().addScaledVector(e,-n.dot(e));if(r.lengthSq()<.0025&&(r=i.clone().addScaledVector(e,-i.dot(e))),r.lengthSq()<.0025){const c=ye(1,0,0).applyQuaternion(this.qBase);r=c.clone().addScaledVector(e,-c.dot(e))}r.lengthSq()<.0025&&(r=ye(1,0,0).addScaledVector(e,-e.x)),r.lengthSq()<1e-6&&(r=ye(0,1,0).addScaledVector(e,-e.y));const o=r.normalize().clone().negate(),a=ye().crossVectors(e,o).normalize(),l=new gt().makeBasis(a,e,o);this.qBase.setFromRotationMatrix(l),this.composeQ()}updateCamera(e){this.cam.quaternion.slerp(this.qTarget,1-Math.exp(-5.5*e));const i=ye(0,0,this.camDist).applyQuaternion(this.cam.quaternion).add(this.ball.pos).clone().sub(this.ball.pos),r=i.length();i.normalize(),this.raycaster.set(this.ball.pos,i),this.raycaster.far=r;const s=this.raycaster.intersectObjects(this.solidMeshes,!1);let o=r;s.length&&(o=Math.max(2.2,s[0].distance-.6)),this.cam.position.copy(this.ball.pos).addScaledVector(i,o);const a=o+.6;for(const l of s){if(l.distance>a)break;const c=l.object.userData.fade;c&&(c.occl=!0)}this.updateFades(e),this.shake>.001&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake*=Math.exp(-5*e))}updateFades(e){for(const n of this.solidMeshes){const i=n.userData.fade;if(!i)continue;const r=i.occl?.14:1;i.occl=!1;const s=Math.min(1,(r===1?3.2:9)*e);i.cur+=(r-i.cur)*s,Math.abs(r-i.cur)<.005&&(i.cur=r);const o=i.cur>=.999;i.mat.transparent=!o,i.mat.opacity=i.base*i.cur,i.mat.depthWrite=i.cur>.85,i.edgeMat&&(i.edgeMat.opacity=i.baseEdge*(.35+.65*i.cur))}}computeG(){const e=ye().copy(this.gBase);if(this.gyroOn&&this.gyroActive){const n=ye(1,0,0).applyQuaternion(this.qTarget),i=ye(0,0,-1).applyQuaternion(this.qTarget),r=this.gyroOffset(this.gyroP-this.gyroP0),s=this.gyroOffset(this.gyroR-this.gyroR0);r&&e.applyAxisAngle(n,-r*_m),s&&e.applyAxisAngle(i,-s*_m),e.normalize()}this.gEff.copy(e).multiplyScalar(Aw)}resolveBox(e){const n=this.ball.pos,i=Qn.clamp(n.x,e.min.x,e.max.x),r=Qn.clamp(n.y,e.min.y,e.max.y),s=Qn.clamp(n.z,e.min.z,e.max.z),o=n.x-i,a=n.y-r,l=n.z-s,c=o*o+a*a+l*l;if(e.hazard)return c<Kt*Kt*.81&&this.die("hazard"),!1;if(c>=Kt*Kt)return!1;let f,d;if(c>1e-10){const _=Math.sqrt(c);f=ye(o/_,a/_,l/_),d=Kt-_}else{const _=[[n.x-e.min.x+Kt,ye(1,0,0)],[e.max.x-n.x+Kt,ye(-1,0,0)],[n.y-e.min.y+Kt,ye(0,1,0)],[e.max.y-n.y+Kt,ye(0,-1,0)],[n.z-e.min.z+Kt,ye(0,0,1)],[e.max.z-n.z+Kt,ye(0,0,-1)]];_.sort((x,m)=>x[0]-m[0]),f=_[0][1],d=_[0][0]}n.addScaledVector(f,d);const h=this.ball.vel.dot(f);return h<0&&(h<-2.2?this.ball.vel.addScaledVector(f,-1.16*h):this.ball.vel.addScaledVector(f,-h)),this.contactN.copy(f),!0}step(e){var s;this.moveT+=e;for(const o of this.boxes)o.touchedPrev=o.touchedCur,o.touchedCur=!1;this.updateMovers(),this.updateTimingGates();const n=this.ball.vel;n.addScaledVector(this.gEff,e),this.boostT>0&&(this.boostT-=e);const i=this.boostT>0?Cw:Rw;n.length()>i&&n.setLength(i),n.multiplyScalar(1-Math.min(.5,bw*e)),this.ball.pos.addScaledVector(n,e);let r=!1;for(let o=0;o<2;o++)for(const a of this.boxes)(s=a.gate)!=null&&s.opened||this.resolveBox(a)&&(r=!0,a.touchedCur=!0);if(r){const o=this.contactN,a=n.dot(o),l=n.clone().addScaledVector(o,-a),f=Math.max(0,-this.gEff.dot(o))*.35+1.2,d=l.length();d>1e-4&&l.setLength(Math.max(0,d-f*e)),n.copy(l).addScaledVector(o,a),!this.prevContact&&a<-2.2&&this.sfx.land()}this.prevContact=r}updateMovers(){for(const e of this.boxes){const n=e.move;if(!n)continue;const i=Math.sin((this.moveT/n.period+n.phase)*Math.PI*2)*n.range,r=n.axis.clone().multiplyScalar(i);n.delta.copy(r).sub(n.prev),n.prev.copy(r),e.touchedPrev&&this.ball.pos.add(n.delta),e.min.add(n.delta),e.max.add(n.delta),e.mesh.position.copy(n.base).add(r)}}ballInBox(e,n){const i=this.ball.pos,r=Qn.clamp(i.x,e.min.x,e.max.x),s=Qn.clamp(i.y,e.min.y,e.max.y),o=Qn.clamp(i.z,e.min.z,e.max.z),a=i.x-r,l=i.y-s,c=i.z-o,f=Kt+n;return a*a+l*l+c*c<f*f}updateTimingGates(){for(const e of this.boxes){const n=e.gate;if(!n||!n.timing)continue;const r=((this.moveT/n.timing.period+n.timing.phase)%1+1)%1<n.timing.duty;if(r===n.opened||!r&&this.ballInBox(e,.15))continue;n.opened=r;const s=n.mesh.material;if(r){const o=this.solidMeshes.indexOf(n.mesh);o>=0&&this.solidMeshes.splice(o,1),s.opacity=.16,s.emissive.set("#3fc1ff"),s.emissiveIntensity=.5,this.sfx.gateOpen()}else this.solidMeshes.push(n.mesh),s.opacity=.85,s.emissive.set("#ff3b6b"),s.emissiveIntensity=.85,this.sfx.gateShut()}}updateZones(){const e=this.ball.pos;let n=null;for(const i of this.fields)if(e.x>i.min.x&&e.x<i.max.x&&e.y>i.min.y&&e.y<i.max.y&&e.z>i.min.z&&e.z<i.max.z){n=i;break}n!==this.curField&&(n?(this.gBase.copy(n.dir),this.sfx.field()):this.curField&&(this.gBase.set(0,-1,0),this.refitCamera()),this.curField=n);for(const i of this.plates)!i.active&&e.distanceTo(i.pos)<Lw&&(i.active=!0,this.activePlates++,i.mat.emissive.set("#ffb300"),i.mat.emissiveIntensity=.95,i.mat.color.set("#6b5316"),this.sfx.plate(),this.openGates());for(const i of this.bumpers)i.cd>0&&(i.cd-=1/60),i.cd<=0&&e.distanceTo(i.pos)<Dw&&(i.cd=.4,this.ball.vel.copy(i.n).multiplyScalar(i.power),this.gBase.set(0,-1,0),this.refitCamera(),this.boostT=.9,this.shake=Math.max(this.shake,.22),this.sfx.bumper());for(const i of this.checkpoints)!i.active&&e.distanceTo(i.pos)<Nw&&(i.active=!0,i.mat.emissive.set("#2dffa8"),i.mat.emissiveIntensity=1.1,i.mat.color.set("#0e4d33"),this.checkpoint={pos:i.pos.clone(),gBase:this.gBase.clone(),qBase:this.qBase.clone(),yawOff:this.yawOff,pitchOff:this.pitchOff},this.sfx.checkpoint());for(const i of this.orbs)i.cd>0&&(i.cd-=1/60),i.cd<=0&&e.distanceTo(i.pos)<Uw&&(i.cd=Iw,this.gBase.negate(),this.refitCamera(),this.rotations++,this.timerOn||(this.timerOn=!0),this.shake=Math.max(this.shake,.18),this.sfx.orb())}openGates(){for(const e of this.boxes){const n=e.gate;if(n&&!n.opened&&this.activePlates>=n.need){n.opened=!0,this.sfx.gate();const i=this.solidMeshes.indexOf(n.mesh);i>=0&&this.solidMeshes.splice(i,1)}}}checkPickups(){const e=this.ball.pos;if(e.x<this.boundMin.x-Zr||e.x>this.boundMax.x+Zr||e.y<this.boundMin.y-Zr||e.y>this.boundMax.y+Zr||e.z<this.boundMin.z-Zr||e.z>this.boundMax.z+Zr){this.die("fall");return}for(const n of this.stars)!n.got&&n.mesh.position.distanceTo(e)<Pw&&(n.got=!0,this.starsGot++,this.sfx.star(),this.tweens.push({obj:n.mesh,t:0,dur:.45,kind:"star"}));this.portal&&this.portal.position.distanceTo(e)<this.portalR&&this.win()}die(e){if(this.dead||this.finished)return;this.dead=!0,this.deaths++,this.shake=.35,this.sfx.die(),this.cb.onDeath(e);const n=++this.gen;window.setTimeout(()=>{if(n!==this.gen||this.mode!=="play")return;const i=this.checkpoint;this.ball.pos.copy(i?i.pos:this.spawn),this.ball.vel.set(0,0,0),this.gBase.copy(i?i.gBase:ye(0,-1,0)),i?(this.qBase.copy(i.qBase),this.yawOff=i.yawOff,this.pitchOff=i.pitchOff):(this.qBase.identity(),this.yawOff=0,this.pitchOff=0),this.composeQ(),this.curField=null,this.boostT=0,this.dead=!1},320)}win(){this.finished=!0,this.enabled=!1,this.timerOn=!1,this.sfx.win(),this.portal&&this.tweens.push({obj:this.portal,t:0,dur:.8,kind:"win"});const e=++this.gen;window.setTimeout(()=>{e===this.gen&&this.cb.onWin({rotations:this.rotations,time:this.time,stars:this.starsGot,deaths:this.deaths})},800)}pushStats(){const e=this.cam.quaternion.clone().invert(),n=ye(0,-1,0).applyQuaternion(e),i=Math.round(Math.atan2(n.x,n.y)*180/Math.PI);this.cb.onStats({time:this.time,rotations:this.rotations,stars:this.starsGot,starsTotal:this.starsTotal,deaths:this.deaths,gAngle:i})}}const m_="gt3d.progress.v2",uu="gt3d.muted.v1";function Fw(){try{const t=localStorage.getItem(m_);if(t){const e=JSON.parse(t);if(e&&typeof e.unlocked=="number")return{unlocked:Math.min(Math.max(1,e.unlocked),Bn.length),best:e.best||{}}}}catch{}return{unlocked:1,best:{}}}function vm(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${String(n).padStart(2,"0")}`}function xm(t,e){return t===0&&e>=2?"S":t<=4?"A":"B"}const ym=typeof window!="undefined"&&(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||Math.min(window.innerWidth,window.innerHeight)<500);function zw(){const t=$e.useRef(null),e=$e.useRef(null),n=$e.useRef(0),i=$e.useRef(Fw()),r=$e.useRef(0),[s,o]=$e.useState("title"),[a,l]=$e.useState(0),[c,f]=$e.useState({time:0,rotations:0,stars:0,starsTotal:3,deaths:0,gAngle:90}),[d,h]=$e.useState(null),[_,x]=$e.useState(i.current),[m,p]=$e.useState(!1),[u,g]=$e.useState(!1),[v,y]=$e.useState(!1),[C,T]=$e.useState(""),[A,P]=$e.useState(0),[S,E]=$e.useState(""),[F,W]=$e.useState(()=>localStorage.getItem(uu)==="1"),[ee,L]=$e.useState(!1),[k,q]=$e.useState(!1),$=$e.useCallback(Y=>{T(Y),window.setTimeout(()=>T(""),2600)},[]),N=$e.useCallback(Y=>{E(Y),window.clearTimeout(r.current),r.current=window.setTimeout(()=>E(""),7e3)},[]);$e.useEffect(()=>{const Y=t.current;if(!Y)return;let re;try{re=new Ow(Y,{onStats:f,onDeath:de=>{P(xe=>xe+1),$(de==="fall"?"坠出边界 — 空格回正可防迷路，R 键立刻重试":"撞上危险晶体 — 记住它的位置，R 键重试")},onPauseRequest:()=>p(de=>!de),onWin:de=>{var ve;const xe=n.current,Ve=i.current,I=Ve.best[xe],It=!I||de.stars>I.stars||de.rotations<I.rotations||de.time<I.time,Te=I?{stars:Math.max(I.stars,de.stars),rotations:Math.min(I.rotations,de.rotations),time:Math.min(I.time,de.time),deaths:Math.min((ve=I.deaths)!=null?ve:de.deaths,de.deaths)}:{stars:de.stars,rotations:de.rotations,time:de.time,deaths:de.deaths},be={unlocked:Math.max(Ve.unlocked,Math.min(xe+2,Bn.length)),best:{...Ve.best,[xe]:Te}};i.current=be,x(be);try{localStorage.setItem(m_,JSON.stringify(be))}catch{}h({...de,rating:xm(de.deaths,de.stars),newRecord:It,level:xe})}})}catch{q(!0);return}e.current=re,re.sfx.muted=localStorage.getItem(uu)==="1",re.toAttract();const Ee=()=>re.sfx.unlock();return window.addEventListener("pointerdown",Ee,{once:!0}),()=>{window.removeEventListener("pointerdown",Ee),re.dispose(),e.current=null}},[]),$e.useEffect(()=>{const Y=e.current;!Y||s!=="playing"||Y.setEnabled(!m&&!d)},[m,d,s]);const O=$e.useCallback(Y=>{const re=e.current;re&&(n.current=Y,l(Y),h(null),p(!1),y(!1),o("playing"),re.startLevel(Y),N(Bn[Y].hint))},[N]),H=$e.useCallback(()=>{var Y;(Y=e.current)==null||Y.restart(),N(Bn[n.current].hint)},[N]),Q=$e.useCallback(()=>{W(Y=>{const re=!Y;return localStorage.setItem(uu,re?"1":"0"),e.current&&(e.current.sfx.muted=re),re})},[]),J=$e.useCallback(async()=>{const Y=e.current;if(Y){if(ee){Y.enableGyro(!1),L(!1),$("陀螺仪已关闭");return}try{const re=DeviceOrientationEvent;if(typeof re.requestPermission=="function"&&await re.requestPermission()!=="granted"){$("陀螺仪权限被拒绝，无法开启");return}const Ee=Y.enableGyro(!0);if(L(Ee),!Ee){$("当前设备不支持陀螺仪");return}window.setTimeout(()=>{e.current&&!e.current.gyroIsActive()?$("未检测到陀螺仪数据（需要真实移动设备）"):$("陀螺仪已开启：倾斜手机即可偏转重力")},900)}catch{$("陀螺仪不可用")}}},[ee,$]),j=$e.useCallback(()=>{const Y=e.current;Y&&(p(!1),h(null),y(!1),o("title"),Y.toAttract())},[]),K=Y=>({onPointerDown:re=>{re.preventDefault(),Y();const Ee=window.setInterval(Y,300),de=re.currentTarget,xe=()=>window.clearInterval(Ee);de.addEventListener("pointerup",xe,{once:!0}),de.addEventListener("pointercancel",xe,{once:!0}),de.addEventListener("pointerleave",xe,{once:!0})}}),ce=z.jsxs("div",{className:"touch-layer",children:[z.jsxs("div",{className:"pad pad-move",children:[z.jsx("button",{className:"pad-btn pad-u",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.tip("U")}),children:"↑"}),z.jsx("button",{className:"pad-btn pad-l",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.tip("L")}),children:"←"}),z.jsx("button",{className:"pad-btn pad-r",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.tip("R")}),children:"→"}),z.jsx("button",{className:"pad-btn pad-d",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.tip("D")}),children:"↓"}),z.jsx("div",{className:"pad-center"})]}),z.jsxs("div",{className:"pad pad-yaw",children:[z.jsx("button",{className:"pad-btn",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.yaw(1)}),children:"↺"}),z.jsx("button",{className:"pad-btn",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.yaw(-1)}),children:"↻"}),z.jsx("button",{className:"pad-btn pad-restore",onClick:()=>{var Y;return(Y=e.current)==null?void 0:Y.restoreDown()},title:"重力回正",children:"回"})]})]});return z.jsxs("div",{className:"app",children:[z.jsx("canvas",{ref:t,className:"game-canvas"}),A>0&&z.jsx("div",{className:"death-flash"},A),s==="title"&&z.jsxs("div",{className:"overlay title-screen",children:[z.jsx("div",{className:"title-badge",children:"3D"}),z.jsx("h1",{className:"title-main",children:"几何贯穿"}),z.jsx("div",{className:"title-sub",children:"引力矩阵 · GRAVITY MATRIX"}),z.jsx("p",{className:"title-desc",children:"六向重力解谜：倾倒重力让球滚动、平飞、坠落；空格随时回正向下，地面罗盘永不迷路。弹射板、反重力井、压力闸门、检查信标、时序闸门、悬浮平台、引力转换球——七种机关，十六关引力矩阵等你贯穿。连按两次 ←/→ 可反转重力。"}),z.jsxs("div",{className:"title-actions",children:[z.jsx("button",{className:"btn btn-primary",onClick:()=>O(Math.min(_.unlocked,Bn.length)-1),children:_.unlocked>1?"继续游戏":"开始游戏"}),z.jsx("button",{className:"btn",onClick:()=>y(!0),children:"选择关卡"}),z.jsx("button",{className:"btn",onClick:()=>g(!0),children:"玩法说明"})]}),z.jsxs("div",{className:"title-progress",children:["已解锁 ",_.unlocked," / ",Bn.length," 关"]}),z.jsx("div",{className:"title-foot",children:z.jsxs("span",{children:["2D 原版：",z.jsx("a",{href:"https://ariefenv-hash.github.io/geometric-traverse/",target:"_blank",rel:"noreferrer",children:"几何贯穿 · 视界重力"})]})})]}),s==="playing"&&z.jsxs(z.Fragment,{children:[z.jsxs("div",{className:"hud",children:[z.jsxs("div",{className:"hud-left",children:[z.jsxs("span",{className:"hud-level",children:["第 ",a+1," 关 · ",Bn[a].name]}),z.jsxs("span",{className:"hud-stars",children:["★".repeat(c.stars),"☆".repeat(Math.max(0,c.starsTotal-c.stars))]})]}),z.jsxs("div",{className:"hud-right",children:[z.jsx("span",{className:"grav-compass",title:"地面罗盘：箭头指向世界地面在屏幕上的方位",children:z.jsxs("svg",{viewBox:"0 0 36 36",style:{transform:`rotate(${c.gAngle}deg)`},children:[z.jsx("circle",{cx:"18",cy:"18",r:"16",className:"gc-ring"}),z.jsx("path",{d:"M 18 6 L 24 20 L 18 16.5 L 12 20 Z",className:"gc-arrow"})]})}),z.jsxs("span",{className:"hud-stat",children:["转向 ",c.rotations]}),z.jsxs("span",{className:"hud-stat",children:["坠落 ",c.deaths]}),z.jsx("span",{className:"hud-stat",children:vm(c.time)}),z.jsx("button",{className:"icon-btn",onClick:H,title:"重开 (R)",children:"↺"}),z.jsx("button",{className:"icon-btn"+(ee?" on":""),onClick:J,title:"陀螺仪重力",children:"陀"}),z.jsx("button",{className:"icon-btn"+(F?"":" on"),onClick:Q,title:"音效",children:F?"静":"音"}),z.jsx("button",{className:"icon-btn",onClick:()=>p(!0),title:"暂停 (Esc)",children:"‖"})]})]}),S&&z.jsx("div",{className:"hint-banner",onClick:()=>E(""),children:S}),!ym&&z.jsx("div",{className:"key-hints",children:"↑ ↓ ← → 倾倒重力 · 空格 回正向下 · Q/E 90°旋转 · 拖拽自由环视（可俯仰） · 滚轮缩放 · R 重开 · Esc 暂停"}),ym&&ce]}),v&&z.jsx("div",{className:"overlay modal-overlay",onClick:()=>y(!1),children:z.jsxs("div",{className:"modal",onClick:Y=>Y.stopPropagation(),children:[z.jsx("div",{className:"modal-title",children:"选择关卡"}),z.jsx("div",{className:"level-grid",children:Bn.map((Y,re)=>{const Ee=re+1>_.unlocked,de=_.best[re];return z.jsxs("button",{className:"level-cell"+(Ee?" locked":""),disabled:Ee,onClick:()=>O(re),children:[z.jsx("span",{className:"lv-num",children:re+1}),z.jsx("span",{className:"lv-name",children:Ee?"未解锁":Y.name}),z.jsx("span",{className:"lv-best",children:Ee?"···":de?`★${de.stars} · ${de.deaths!=null?xm(de.deaths,de.stars):"—"}`:"未通关"})]},re)})}),z.jsx("div",{className:"modal-actions",children:z.jsx("button",{className:"btn",onClick:()=>y(!1),children:"返回"})})]})}),u&&z.jsx("div",{className:"overlay modal-overlay",onClick:()=>g(!1),children:z.jsxs("div",{className:"modal help-modal",onClick:Y=>Y.stopPropagation(),children:[z.jsx("div",{className:"modal-title",children:"玩法说明"}),z.jsxs("div",{className:"help-body",children:[z.jsxs("p",{children:[z.jsx("b",{children:"目标："}),"操控重力方向，让小球抵达发光传送门。途中的金色八面体是星星（每关 3 颗），红色晶簇碰到即重生。"]}),z.jsx("p",{children:z.jsx("b",{children:"核心操作（重力只会倾倒 90°）："})}),z.jsxs("ul",{children:[z.jsx("li",{children:"← / →：重力向屏幕左 / 右倾倒，球贴地滚动"}),z.jsx("li",{children:"↑：重力倒向屏幕深处；↓：倒向屏幕近处"}),z.jsxs("li",{children:[z.jsx("b",{children:"连按两次 ←（或 →）：重力反转"}),"，球飞向天花板；连按四次可完成「升空→行军→垂直下坠」"]}),z.jsxs("li",{children:[z.jsx("b",{children:"空格：重力瞬间回正世界向下"})," —— 倒悬迷路时的万能保险，随时可按"]}),z.jsxs("li",{children:["顶栏",z.jsx("b",{children:"地面罗盘"}),"箭头始终指向世界地面在屏幕上的方位——镜头翻滚后一眼找到「下」在哪"]}),z.jsxs("li",{children:["Q / E：90° 旋转视角；",z.jsx("b",{children:"在画面上按住拖拽可自由环视"}),"（上下拖动=俯视 / 仰视）；滚轮或双指捏合缩放"]}),z.jsxs("li",{children:[z.jsx("b",{children:"穿墙透视："}),"墙壁挡住小球与镜头时会自动变半透明，任何角度都不会丢失视野"]}),z.jsx("li",{children:"R 重开；Esc 暂停"})]}),z.jsx("p",{children:z.jsx("b",{children:"机关图鉴："})}),z.jsxs("ul",{children:[z.jsxs("li",{children:[z.jsx("b",{children:"弹射板"}),"（青色箭头圆盘）：触到即沿箭头方向强力弹射，可飞越断崖"]}),z.jsxs("li",{children:[z.jsx("b",{children:"反重力井"}),"（青色半透明区）：场内重力强制变为场的方向；",z.jsx("b",{children:"方向键在场内是推进脉冲"}),"，可微调航向与升力"]}),z.jsxs("li",{children:[z.jsx("b",{children:"压力板 + 闸门"}),"（琥珀圆盘 / 紫色能量墙）：滚过压力板即永久点亮，集齐后闸门溶解"]}),z.jsxs("li",{children:[z.jsx("b",{children:"时序闸门"}),"（红紫⇌青色能量墙）：按周期自动开合，青色=通行、红光闪烁=即将关闭；球在门内时绝不会夹伤你"]}),z.jsxs("li",{children:[z.jsx("b",{children:"悬浮平台"}),"（深色棱线平台）：沿轴线往复巡航，站上去会被载着走——看准它靠岸的时机"]}),z.jsxs("li",{children:[z.jsx("b",{children:"引力转换球"}),"（品红球+光环）：触碰即把当前重力 180° 反转——弹射板腾空后穿过它可被直送穹顶，迎面撞上它会被原路弹回"]}),z.jsxs("li",{children:[z.jsx("b",{children:"检查信标"}),"（立环）：穿过即激活，此后坠落或触刺都会回到信标处（连重力姿态一起还原）"]})]}),z.jsxs("p",{children:[z.jsx("b",{children:"移动端："}),"左下方向垫 = 倾倒重力（可长按连发），右下 ↺/↻ = 90° 旋转视角、回 = 重力回正；在画面上",z.jsx("b",{children:"拖拽可自由环视（含俯仰）"}),"，双指捏合缩放。"]}),z.jsxs("p",{children:[z.jsx("b",{children:"陀螺仪（实验）："}),"点击顶栏「陀」开启权限后，倾斜手机即可在当前重力基础上连续偏转方向；竖屏横屏自动适配，重新开关可校准基准角。"]}),z.jsxs("p",{children:[z.jsx("b",{children:"评价："}),"零死亡且至少 2 星 = 棱镜 S；死亡 ≤ 4 = A；通关 = B。转向数与最短用时单独保存为纪录，破纪录会在结算时庆祝。"]})]}),z.jsx("div",{className:"modal-actions",children:z.jsx("button",{className:"btn btn-primary",onClick:()=>g(!1),children:"明白了"})})]})}),m&&!d&&s==="playing"&&z.jsx("div",{className:"overlay modal-overlay",children:z.jsxs("div",{className:"modal pause-modal",children:[z.jsx("div",{className:"modal-title",children:"已暂停"}),z.jsxs("div",{className:"modal-actions column",children:[z.jsx("button",{className:"btn btn-primary",onClick:()=>p(!1),children:"继续"}),z.jsx("button",{className:"btn",onClick:H,children:"重开本关"}),z.jsx("button",{className:"btn",onClick:()=>{p(!1),y(!0)},children:"选择关卡"}),z.jsx("button",{className:"btn",onClick:j,children:"回到标题"})]})]})}),d&&z.jsxs("div",{className:"overlay modal-overlay",children:[Array.from({length:18}).map((Y,re)=>z.jsx("i",{className:"confetti c"+re%6,style:{left:`${re*37%100}%`,animationDelay:`${re%9*.12}s`}},re)),z.jsxs("div",{className:"modal win-modal",children:[d.newRecord&&z.jsx("div",{className:"record-badge",children:"新纪录！"}),z.jsx("div",{className:"rating rating-"+d.rating,children:d.rating}),z.jsx("div",{className:"win-title",children:d.level===Bn.length-1?"全部通关！":"关卡完成"}),z.jsx("div",{className:"win-stars",children:[0,1,2].map(Y=>z.jsx("span",{className:Y<d.stars?"got":"",children:"★"},Y))}),z.jsxs("div",{className:"win-stats",children:[z.jsxs("div",{children:[z.jsx("i",{children:"转向"}),z.jsx("b",{children:d.rotations})]}),z.jsxs("div",{children:[z.jsx("i",{children:"用时"}),z.jsx("b",{children:vm(d.time)})]}),z.jsxs("div",{children:[z.jsx("i",{children:"坠落"}),z.jsx("b",{children:d.deaths})]})]}),z.jsx("div",{className:"win-tip",children:"零死亡 + 2 星 = S · 坠落 ≤ 4 = A"}),z.jsxs("div",{className:"modal-actions",children:[z.jsx("button",{className:"btn",onClick:()=>O(d.level),children:"重玩"}),d.level<Bn.length-1?z.jsx("button",{className:"btn btn-primary",onClick:()=>O(d.level+1),children:"下一关"}):z.jsx("button",{className:"btn btn-primary",onClick:()=>{h(null),y(!0)},children:"选关"})]})]})]}),C&&z.jsx("div",{className:"toast",children:C}),k&&z.jsx("div",{className:"overlay modal-overlay",children:z.jsxs("div",{className:"modal",children:[z.jsx("div",{className:"modal-title",children:"无法启动"}),z.jsx("p",{className:"help-body",children:"当前浏览器不支持 WebGL，请更换较新的浏览器（Chrome / Edge / Safari / Firefox 均可）。"})]})})]})}N0(document.getElementById("root")).render(z.jsx(zw,{}));
