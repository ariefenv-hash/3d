var S_=Object.defineProperty;var M_=(t,e,n)=>e in t?S_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var J=(t,e,n)=>M_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Sm={exports:{}},Pl={},Mm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),E_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),A_=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),b_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),L_=Symbol.for("react.memo"),D_=Symbol.for("react.lazy"),bd=Symbol.iterator;function N_(t){return t===null||typeof t!="object"?null:(t=bd&&t[bd]||t["@@iterator"],typeof t=="function"?t:null)}var Em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,wm={};function Us(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Em}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Am(){}Am.prototype=Us.prototype;function pf(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Em}var mf=pf.prototype=new Am;mf.constructor=pf;Tm(mf,Us.prototype);mf.isPureReactComponent=!0;var Pd=Array.isArray,Rm=Object.prototype.hasOwnProperty,gf={current:null},Cm={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rm.call(e,i)&&!Cm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:zo,type:t,key:s,ref:o,props:r,_owner:gf.current}}function U_(t,e){return{$$typeof:zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _f(t){return typeof t=="object"&&t!==null&&t.$$typeof===zo}function I_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ld=/\/+/g;function nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?I_(""+t.key):e.toString(36)}function za(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zo:case E_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+nc(o,0):i,Pd(r)?(n="",t!=null&&(n=t.replace(Ld,"$&/")+"/"),za(r,e,n,"",function(c){return c})):r!=null&&(_f(r)&&(r=U_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ld,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+nc(s,a);o+=za(s,e,n,l,r)}else if(l=N_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+nc(s,a++),o+=za(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qo(t,e,n){if(t==null)return t;var i=[],r=0;return za(t,i,"","",function(s){return e.call(n,s,r++)}),i}function F_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},ka={transition:null},O_={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:ka,ReactCurrentOwner:gf};function Pm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!_f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Us;je.Fragment=T_;je.Profiler=A_;je.PureComponent=pf;je.StrictMode=w_;je.Suspense=P_;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;je.act=Pm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rm.call(e,l)&&!Cm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:zo,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:C_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:R_,_context:t},t.Consumer=t};je.createElement=bm;je.createFactory=function(t){var e=bm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:b_,render:t}};je.isValidElement=_f;je.lazy=function(t){return{$$typeof:D_,_payload:{_status:-1,_result:t},_init:F_}};je.memo=function(t,e){return{$$typeof:L_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};je.unstable_act=Pm;je.useCallback=function(t,e){return nn.current.useCallback(t,e)};je.useContext=function(t){return nn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};je.useEffect=function(t,e){return nn.current.useEffect(t,e)};je.useId=function(){return nn.current.useId()};je.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return nn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};je.useRef=function(t){return nn.current.useRef(t)};je.useState=function(t){return nn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return nn.current.useTransition()};je.version="18.3.1";Mm.exports=je;var $e=Mm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=$e,k_=Symbol.for("react.element"),B_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,G_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V_={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H_.call(e,i)&&!V_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:k_,type:t,key:s,ref:o,props:r,_owner:G_.current}}Pl.Fragment=B_;Pl.jsx=Lm;Pl.jsxs=Lm;Sm.exports=Pl;var V=Sm.exports,Dm={exports:{}},Sn={},Nm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,F){var B=N.length;N.push(F);e:for(;0<B;){var Z=B-1>>>1,Q=N[Z];if(0<r(Q,F))N[Z]=F,N[B]=Q,B=Z;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],B=N.pop();if(B!==F){N[0]=B;e:for(var Z=0,Q=N.length,j=Q>>>1;Z<j;){var K=2*(Z+1)-1,ce=N[K],Y=K+1,re=N[Y];if(0>r(ce,B))Y<Q&&0>r(re,ce)?(N[Z]=re,N[Y]=B,Z=Y):(N[Z]=ce,N[K]=B,Z=K);else if(Y<Q&&0>r(re,B))N[Z]=re,N[Y]=B,Z=Y;else break e}}return F}function r(N,F){var B=N.sortIndex-F.sortIndex;return B!==0?B:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,u=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=N)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function y(N){if(x=!1,_(N),!v)if(n(l)!==null)v=!0,q(C);else{var F=n(c);F!==null&&$(y,F.startTime-N)}}function C(N,F){v=!1,x&&(x=!1,f(P),P=-1),p=!0;var B=d;try{for(_(F),u=n(l);u!==null&&(!(u.expirationTime>F)||N&&!O());){var Z=u.callback;if(typeof Z=="function"){u.callback=null,d=u.priorityLevel;var Q=Z(u.expirationTime<=F);F=t.unstable_now(),typeof Q=="function"?u.callback=Q:u===n(l)&&i(l),_(F)}else i(l);u=n(l)}if(u!==null)var j=!0;else{var K=n(c);K!==null&&$(y,K.startTime-F),j=!1}return j}finally{u=null,d=B,p=!1}}var T=!1,A=null,P=-1,S=5,E=-1;function O(){return!(t.unstable_now()-E<S)}function W(){if(A!==null){var N=t.unstable_now();E=N;var F=!0;try{F=A(!0,N)}finally{F?ee():(T=!1,A=null)}}else T=!1}var ee;if(typeof g=="function")ee=function(){g(W)};else if(typeof MessageChannel!="undefined"){var L=new MessageChannel,z=L.port2;L.port1.onmessage=W,ee=function(){z.postMessage(null)}}else ee=function(){m(W,0)};function q(N){A=N,T||(T=!0,ee())}function $(N,F){P=m(function(){N(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,q(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var B=d;d=F;try{return N()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=d;d=N;try{return F()}finally{d=B}},t.unstable_scheduleCallback=function(N,F,B){var Z=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=B+Q,N={id:h++,callback:F,priorityLevel:N,startTime:B,expirationTime:Q,sortIndex:-1},B>Z?(N.sortIndex=B,e(c,N),n(l)===null&&N===n(c)&&(x?(f(P),P=-1):x=!0,$(y,B-Z))):(N.sortIndex=Q,e(l,N),v||p||(v=!0,q(C))),N},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(N){var F=d;return function(){var B=d;d=F;try{return N.apply(this,arguments)}finally{d=B}}}})(Um);Nm.exports=Um;var W_=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=$e,yn=W_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,_o={};function Pr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(_o[t]=e,t=0;t<e.length;t++)Im.add(e[t])}var vi=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),uu=Object.prototype.hasOwnProperty,j_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dd={},Nd={};function q_(t){return uu.call(Nd,t)?!0:uu.call(Dd,t)?!1:j_.test(t)?Nd[t]=!0:(Dd[t]=!0,!1)}function Y_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $_(t,e,n,i){if(e===null||typeof e=="undefined"||Y_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var vf=/[\-:]([a-z])/g;function xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vf,xf);kt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vf,xf);kt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vf,xf);kt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function yf(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($_(e,n,r,i)&&(n=null),i||r===null?q_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Fm=Symbol.for("react.provider"),Om=Symbol.for("react.context"),Mf=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),Ef=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),zm=Symbol.for("react.offscreen"),Ud=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,ic;function eo(t){if(ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ic=e&&e[1]||""}return`
`+ic+t}var rc=!1;function sc(t,e){if(!t||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function K_(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=sc(t.type,!1),t;case 11:return t=sc(t.type.render,!1),t;case 1:return t=sc(t.type,!0),t;default:return""}}function pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case fu:return"Profiler";case Sf:return"StrictMode";case du:return"Suspense";case hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Om:return(t.displayName||"Context")+".Consumer";case Fm:return(t._context.displayName||"Context")+".Provider";case Mf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ef:return e=t.displayName||null,e!==null?e:pu(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return pu(t(e))}catch{}}return null}function Z_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pu(e);case 8:return e===Sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q_(t){var e=km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=Q_(t))}function Bm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Qa(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function mu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Id(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hm(t,e){e=e.checked,e!=null&&yf(t,"checked",e,!1)}function gu(t,e){Hm(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_u(t,e.type,n):e.hasOwnProperty("defaultValue")&&_u(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _u(t,e,n){(e!=="number"||Qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function vu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Od(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(to(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function Gm(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,Wm=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J_=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){J_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function Xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ev=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(t,e){if(e){if(ev[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function Tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eu=null,ms=null,gs=null;function kd(t){if(t=Ho(t)){if(typeof Eu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Il(e),Eu(t.stateNode,t.type,e))}}function qm(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Ym(){if(ms){var t=ms,e=gs;if(gs=ms=null,kd(t),e)for(t=0;t<e.length;t++)kd(e[t])}}function $m(t,e){return t(e)}function Km(){}var oc=!1;function Zm(t,e,n){if(oc)return t(e,n);oc=!0;try{return $m(t,e,n)}finally{oc=!1,(ms!==null||gs!==null)&&(Km(),Ym())}}function xo(t,e){var n=t.stateNode;if(n===null)return null;var i=Il(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Tu=!1;if(vi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Tu=!1}function tv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var so=!1,Ja=null,el=!1,wu=null,nv={onError:function(t){so=!0,Ja=t}};function iv(t,e,n,i,r,s,o,a,l){so=!1,Ja=null,tv.apply(nv,arguments)}function rv(t,e,n,i,r,s,o,a,l){if(iv.apply(this,arguments),so){if(so){var c=Ja;so=!1,Ja=null}else throw Error(ie(198));el||(el=!0,wu=c)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bd(t){if(Lr(t)!==t)throw Error(ie(188))}function sv(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bd(r),t;if(s===i)return Bd(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Jm(t){return t=sv(t),t!==null?eg(t):null}function eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eg(t);if(e!==null)return e;t=t.sibling}return null}var tg=yn.unstable_scheduleCallback,Hd=yn.unstable_cancelCallback,ov=yn.unstable_shouldYield,av=yn.unstable_requestPaint,St=yn.unstable_now,lv=yn.unstable_getCurrentPriorityLevel,wf=yn.unstable_ImmediatePriority,ng=yn.unstable_UserBlockingPriority,tl=yn.unstable_NormalPriority,cv=yn.unstable_LowPriority,ig=yn.unstable_IdlePriority,Ll=null,ni=null;function uv(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:hv,fv=Math.log,dv=Math.LN2;function hv(t){return t>>>=0,t===0?32:31-(fv(t)/dv|0)|0}var Zo=64,Qo=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=no(a):(s&=o,s!==0&&(i=no(s)))}else o=n&~r,o!==0?i=no(o):s!==0&&(i=no(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function pv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=pv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rg(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function gv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var og,Rf,ag,lg,cg,Ru=!1,Jo=[],ki=null,Bi=null,Hi=null,yo=new Map,So=new Map,Ni=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ho(e),e!==null&&Rf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vv(t,e,n,i,r){switch(e){case"focusin":return ki=Vs(ki,t,e,n,i,r),!0;case"dragenter":return Bi=Vs(Bi,t,e,n,i,r),!0;case"mouseover":return Hi=Vs(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return yo.set(s,Vs(yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,So.set(s,Vs(So.get(s)||null,t,e,n,i,r)),!0}return!1}function ug(t){var e=pr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qm(n),e!==null){t.blockedOn=e,cg(t.priority,function(){ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mu=i,n.target.dispatchEvent(i),Mu=null}else return e=Ho(n),e!==null&&Rf(e),t.blockedOn=n,!1;e.shift()}return!0}function Vd(t,e,n){Ba(t)&&n.delete(e)}function xv(){Ru=!1,ki!==null&&Ba(ki)&&(ki=null),Bi!==null&&Ba(Bi)&&(Bi=null),Hi!==null&&Ba(Hi)&&(Hi=null),yo.forEach(Vd),So.forEach(Vd)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Ru||(Ru=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,xv)))}function Mo(t){function e(r){return Ws(r,t)}if(0<Jo.length){Ws(Jo[0],t);for(var n=1;n<Jo.length;n++){var i=Jo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Ws(ki,t),Bi!==null&&Ws(Bi,t),Hi!==null&&Ws(Hi,t),yo.forEach(e),So.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)ug(n),n.blockedOn===null&&Ni.shift()}var _s=Ei.ReactCurrentBatchConfig,il=!0;function yv(t,e,n,i){var r=Ze,s=_s.transition;_s.transition=null;try{Ze=1,Cf(t,e,n,i)}finally{Ze=r,_s.transition=s}}function Sv(t,e,n,i){var r=Ze,s=_s.transition;_s.transition=null;try{Ze=4,Cf(t,e,n,i)}finally{Ze=r,_s.transition=s}}function Cf(t,e,n,i){if(il){var r=Cu(t,e,n,i);if(r===null)_c(t,e,i,rl,n),Gd(t,i);else if(vv(r,t,e,n,i))i.stopPropagation();else if(Gd(t,i),e&4&&-1<_v.indexOf(t)){for(;r!==null;){var s=Ho(r);if(s!==null&&og(s),s=Cu(t,e,n,i),s===null&&_c(t,e,i,rl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _c(t,e,i,null,n)}}var rl=null;function Cu(t,e,n,i){if(rl=null,t=Tf(i),t=pr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rl=t,null}function fg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lv()){case wf:return 1;case ng:return 4;case tl:case cv:return 16;case ig:return 536870912;default:return 16}default:return 16}}var Ii=null,bf=null,Ha=null;function dg(){if(Ha)return Ha;var t,e=bf,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ha=r.slice(t,1<i?1-i:void 0)}function Ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function Wd(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ea:Wd,this.isPropagationStopped=Wd,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pf=Mn(Is),Bo=mt({},Is,{view:0,detail:0}),Mv=Mn(Bo),lc,cc,Xs,Dl=mt({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(lc=t.screenX-Xs.screenX,cc=t.screenY-Xs.screenY):cc=lc=0,Xs=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:cc}}),Xd=Mn(Dl),Ev=mt({},Dl,{dataTransfer:0}),Tv=Mn(Ev),wv=mt({},Bo,{relatedTarget:0}),uc=Mn(wv),Av=mt({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=Mn(Av),Cv=mt({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bv=Mn(Cv),Pv=mt({},Is,{data:0}),jd=Mn(Pv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nv[t])?!!e[t]:!1}function Lf(){return Uv}var Iv=mt({},Bo,{key:function(t){if(t.key){var e=Lv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(t){return t.type==="keypress"?Ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fv=Mn(Iv),Ov=mt({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=Mn(Ov),zv=mt({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),kv=Mn(zv),Bv=mt({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=Mn(Bv),Gv=mt({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=Mn(Gv),Wv=[9,13,27,32],Df=vi&&"CompositionEvent"in window,oo=null;vi&&"documentMode"in document&&(oo=document.documentMode);var Xv=vi&&"TextEvent"in window&&!oo,hg=vi&&(!Df||oo&&8<oo&&11>=oo),Yd=" ",$d=!1;function pg(t,e){switch(t){case"keyup":return Wv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function jv(t,e){switch(t){case"compositionend":return mg(e);case"keypress":return e.which!==32?null:($d=!0,Yd);case"textInput":return t=e.data,t===Yd&&$d?null:t;default:return null}}function qv(t,e){if(ts)return t==="compositionend"||!Df&&pg(t,e)?(t=dg(),Ha=bf=Ii=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hg&&e.locale!=="ko"?null:e.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yv[t.type]:e==="textarea"}function gg(t,e,n,i){qm(i),e=sl(e,"onChange"),0<e.length&&(n=new Pf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ao=null,Eo=null;function $v(t){Rg(t,0)}function Nl(t){var e=rs(t);if(Bm(e))return t}function Kv(t,e){if(t==="change")return e}var _g=!1;if(vi){var fc;if(vi){var dc="oninput"in document;if(!dc){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),dc=typeof Zd.oninput=="function"}fc=dc}else fc=!1;_g=fc&&(!document.documentMode||9<document.documentMode)}function Qd(){ao&&(ao.detachEvent("onpropertychange",vg),Eo=ao=null)}function vg(t){if(t.propertyName==="value"&&Nl(Eo)){var e=[];gg(e,Eo,t,Tf(t)),Zm($v,e)}}function Zv(t,e,n){t==="focusin"?(Qd(),ao=e,Eo=n,ao.attachEvent("onpropertychange",vg)):t==="focusout"&&Qd()}function Qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(Eo)}function Jv(t,e){if(t==="click")return Nl(e)}function ex(t,e){if(t==="input"||t==="change")return Nl(e)}function tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:tx;function To(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eh(t,e){var n=Jd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jd(n)}}function xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yg(){for(var t=window,e=Qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qa(t.document)}return e}function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nx(t){var e=yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xg(n.ownerDocument.documentElement,n)){if(i!==null&&Nf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=eh(n,s);var o=eh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ix=vi&&"documentMode"in document&&11>=document.documentMode,ns=null,bu=null,lo=null,Pu=!1;function th(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pu||ns==null||ns!==Qa(i)||(i=ns,"selectionStart"in i&&Nf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),lo&&To(lo,i)||(lo=i,i=sl(bu,"onSelect"),0<i.length&&(e=new Pf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},hc={},Sg={};vi&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Ul(t){if(hc[t])return hc[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sg)return hc[t]=e[n];return t}var Mg=Ul("animationend"),Eg=Ul("animationiteration"),Tg=Ul("animationstart"),wg=Ul("transitionend"),Ag=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){Ag.set(t,e),Pr(e,[t])}for(var pc=0;pc<nh.length;pc++){var mc=nh[pc],rx=mc.toLowerCase(),sx=mc[0].toUpperCase()+mc.slice(1);Ji(rx,"on"+sx)}Ji(Mg,"onAnimationEnd");Ji(Eg,"onAnimationIteration");Ji(Tg,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(wg,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function ih(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rv(i,e,void 0,t),t.currentTarget=null}function Rg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ih(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ih(r,a,c),s=l}}}if(el)throw t=wu,el=!1,wu=null,t}function rt(t,e){var n=e[Iu];n===void 0&&(n=e[Iu]=new Set);var i=t+"__bubble";n.has(i)||(Cg(e,t,2,!1),n.add(i))}function gc(t,e,n){var i=0;e&&(i|=4),Cg(n,t,i,e)}var na="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[na]){t[na]=!0,Im.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||gc(n,!1,t),gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[na]||(e[na]=!0,gc("selectionchange",!1,e))}}function Cg(t,e,n,i){switch(fg(e)){case 1:var r=yv;break;case 4:r=Sv;break;default:r=Cf}n=r.bind(null,e,n,t),r=void 0,!Tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _c(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Zm(function(){var c=s,h=Tf(n),u=[];e:{var d=Ag.get(t);if(d!==void 0){var p=Pf,v=t;switch(t){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":p=Fv;break;case"focusin":v="focus",p=uc;break;case"focusout":v="blur",p=uc;break;case"beforeblur":case"afterblur":p=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kv;break;case Mg:case Eg:case Tg:p=Rv;break;case wg:p=Hv;break;case"scroll":p=Mv;break;case"wheel":p=Vv;break;case"copy":case"cut":case"paste":p=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qd}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var g=c,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,f!==null&&(y=xo(g,f),y!=null&&x.push(Ao(g,y,_)))),m)break;g=g.return}0<x.length&&(d=new p(d,v,null,n,h),u.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Mu&&(v=n.relatedTarget||n.fromElement)&&(pr(v)||v[xi]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?pr(v):null,v!==null&&(m=Lr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Xd,y="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=qd,y="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?d:rs(p),_=v==null?d:rs(v),d=new x(y,g+"leave",p,n,h),d.target=m,d.relatedTarget=_,y=null,pr(h)===c&&(x=new x(f,g+"enter",v,n,h),x.target=_,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,f=v,g=0,_=x;_;_=Nr(_))g++;for(_=0,y=f;y;y=Nr(y))_++;for(;0<g-_;)x=Nr(x),g--;for(;0<_-g;)f=Nr(f),_--;for(;g--;){if(x===f||f!==null&&x===f.alternate)break t;x=Nr(x),f=Nr(f)}x=null}else x=null;p!==null&&rh(u,d,p,x,!1),v!==null&&m!==null&&rh(u,m,v,x,!0)}}e:{if(d=c?rs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=Kv;else if(Kd(d))if(_g)C=ex;else{C=Qv;var T=Zv}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Jv);if(C&&(C=C(t,c))){gg(u,C,n,h);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&_u(d,"number",d.value)}switch(T=c?rs(c):window,t){case"focusin":(Kd(T)||T.contentEditable==="true")&&(ns=T,bu=c,lo=null);break;case"focusout":lo=bu=ns=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,th(u,n,h);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":th(u,n,h)}var A;if(Df)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ts?pg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(hg&&n.locale!=="ko"&&(ts||P!=="onCompositionStart"?P==="onCompositionEnd"&&ts&&(A=dg()):(Ii=h,bf="value"in Ii?Ii.value:Ii.textContent,ts=!0)),T=sl(c,P),0<T.length&&(P=new jd(P,t,null,n,h),u.push({event:P,listeners:T}),A?P.data=A:(A=mg(n),A!==null&&(P.data=A)))),(A=Xv?jv(t,n):qv(t,n))&&(c=sl(c,"onBeforeInput"),0<c.length&&(h=new jd("onBeforeInput","beforeinput",null,n,h),u.push({event:h,listeners:c}),h.data=A))}Rg(u,e)})}function Ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xo(t,n),s!=null&&i.unshift(Ao(t,s,r)),s=xo(t,e),s!=null&&i.push(Ao(t,s,r))),t=t.return}return i}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=xo(n,s),l!=null&&o.unshift(Ao(n,l,a))):r||(l=xo(n,s),l!=null&&o.push(Ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ax=/\r\n?/g,lx=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(ax,`
`).replace(lx,"")}function ia(t,e,n){if(e=sh(e),sh(t)!==e&&n)throw Error(ie(425))}function ol(){}var Lu=null,Du=null;function Nu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof oh!="undefined"?function(t){return oh.resolve(null).then(t).catch(fx)}:Uu;function fx(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Mo(e)}function Gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Fs,Ro="__reactProps$"+Fs,xi="__reactContainer$"+Fs,Iu="__reactEvents$"+Fs,dx="__reactListeners$"+Fs,hx="__reactHandles$"+Fs;function pr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ah(t);t!==null;){if(n=t[Jn])return n;t=ah(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[Jn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Il(t){return t[Ro]||null}var Fu=[],ss=-1;function er(t){return{current:t}}function ot(t){0>ss||(t.current=Fu[ss],Fu[ss]=null,ss--)}function it(t,e){ss++,Fu[ss]=t.current,t.current=e}var Zi={},jt=er(Zi),ln=er(!1),Mr=Zi;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function al(){ot(ln),ot(jt)}function lh(t,e,n){if(jt.current!==Zi)throw Error(ie(168));it(jt,e),it(ln,n)}function bg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Z_(t)||"Unknown",r));return mt({},n,i)}function ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Mr=jt.current,it(jt,t),it(ln,ln.current),!0}function ch(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=bg(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,ot(ln),ot(jt),it(jt,t)):ot(ln),it(ln,n)}var hi=null,Fl=!1,xc=!1;function Pg(t){hi===null?hi=[t]:hi.push(t)}function px(t){Fl=!0,Pg(t)}function tr(){if(!xc&&hi!==null){xc=!0;var t=0,e=Ze;try{var n=hi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Fl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),tg(wf,tr),r}finally{Ze=e,xc=!1}}return null}var os=[],as=0,cl=null,ul=0,An=[],Rn=0,Er=null,pi=1,mi="";function lr(t,e){os[as++]=ul,os[as++]=cl,cl=t,ul=e}function Lg(t,e,n){An[Rn++]=pi,An[Rn++]=mi,An[Rn++]=Er,Er=t;var i=pi;t=mi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-Xn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function Uf(t){t.return!==null&&(lr(t,1),Lg(t,1,0))}function If(t){for(;t===cl;)cl=os[--as],os[as]=null,ul=os[--as],os[as]=null;for(;t===Er;)Er=An[--Rn],An[Rn]=null,mi=An[--Rn],An[Rn]=null,pi=An[--Rn],An[Rn]=null}var vn=null,_n=null,lt=!1,Gn=null;function Dg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function uh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,_n=Gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,_n=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zu(t){if(lt){var e=_n;if(e){var n=e;if(!uh(t,e)){if(Ou(t))throw Error(ie(418));e=Gi(n.nextSibling);var i=vn;e&&uh(t,e)?Dg(i,n):(t.flags=t.flags&-4097|2,lt=!1,vn=t)}}else{if(Ou(t))throw Error(ie(418));t.flags=t.flags&-4097|2,lt=!1,vn=t}}}function fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function ra(t){if(t!==vn)return!1;if(!lt)return fh(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nu(t.type,t.memoizedProps)),e&&(e=_n)){if(Ou(t))throw Ng(),Error(ie(418));for(;e;)Dg(t,e),e=Gi(e.nextSibling)}if(fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=vn?Gi(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=_n;t;)t=Gi(t.nextSibling)}function ws(){_n=vn=null,lt=!1}function Ff(t){Gn===null?Gn=[t]:Gn.push(t)}var mx=Ei.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function sa(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dh(t){var e=t._init;return e(t._payload)}function Ug(t){function e(f,g){if(t){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=ji(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,_,y){return g===null||g.tag!==6?(g=Ac(_,f.mode,y),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,y){var C=_.type;return C===es?h(f,g,_.props.children,y,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Li&&dh(C)===g.type)?(y=r(g,_.props),y.ref=js(f,g,_),y.return=f,y):(y=$a(_.type,_.key,_.props,null,f.mode,y),y.ref=js(f,g,_),y.return=f,y)}function c(f,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Rc(_,f.mode,y),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function h(f,g,_,y,C){return g===null||g.tag!==7?(g=vr(_,f.mode,y,C),g.return=f,g):(g=r(g,_),g.return=f,g)}function u(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ac(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return _=$a(g.type,g.key,g.props,null,f.mode,_),_.ref=js(f,null,g),_.return=f,_;case Jr:return g=Rc(g,f.mode,_),g.return=f,g;case Li:var y=g._init;return u(f,y(g._payload),_)}if(to(g)||Hs(g))return g=vr(g,f.mode,_,null),g.return=f,g;sa(f,g)}return null}function d(f,g,_,y){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(f,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:return _.key===C?l(f,g,_,y):null;case Jr:return _.key===C?c(f,g,_,y):null;case Li:return C=_._init,d(f,g,C(_._payload),y)}if(to(_)||Hs(_))return C!==null?null:h(f,g,_,y,null);sa(f,_)}return null}function p(f,g,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(_)||null,a(g,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yo:return f=f.get(y.key===null?_:y.key)||null,l(g,f,y,C);case Jr:return f=f.get(y.key===null?_:y.key)||null,c(g,f,y,C);case Li:var T=y._init;return p(f,g,_,T(y._payload),C)}if(to(y)||Hs(y))return f=f.get(_)||null,h(g,f,y,C,null);sa(g,y)}return null}function v(f,g,_,y){for(var C=null,T=null,A=g,P=g=0,S=null;A!==null&&P<_.length;P++){A.index>P?(S=A,A=null):S=A.sibling;var E=d(f,A,_[P],y);if(E===null){A===null&&(A=S);break}t&&A&&E.alternate===null&&e(f,A),g=s(E,g,P),T===null?C=E:T.sibling=E,T=E,A=S}if(P===_.length)return n(f,A),lt&&lr(f,P),C;if(A===null){for(;P<_.length;P++)A=u(f,_[P],y),A!==null&&(g=s(A,g,P),T===null?C=A:T.sibling=A,T=A);return lt&&lr(f,P),C}for(A=i(f,A);P<_.length;P++)S=p(A,f,P,_[P],y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?P:S.key),g=s(S,g,P),T===null?C=S:T.sibling=S,T=S);return t&&A.forEach(function(O){return e(f,O)}),lt&&lr(f,P),C}function x(f,g,_,y){var C=Hs(_);if(typeof C!="function")throw Error(ie(150));if(_=C.call(_),_==null)throw Error(ie(151));for(var T=C=null,A=g,P=g=0,S=null,E=_.next();A!==null&&!E.done;P++,E=_.next()){A.index>P?(S=A,A=null):S=A.sibling;var O=d(f,A,E.value,y);if(O===null){A===null&&(A=S);break}t&&A&&O.alternate===null&&e(f,A),g=s(O,g,P),T===null?C=O:T.sibling=O,T=O,A=S}if(E.done)return n(f,A),lt&&lr(f,P),C;if(A===null){for(;!E.done;P++,E=_.next())E=u(f,E.value,y),E!==null&&(g=s(E,g,P),T===null?C=E:T.sibling=E,T=E);return lt&&lr(f,P),C}for(A=i(f,A);!E.done;P++,E=_.next())E=p(A,f,P,E.value,y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?P:E.key),g=s(E,g,P),T===null?C=E:T.sibling=E,T=E);return t&&A.forEach(function(W){return e(f,W)}),lt&&lr(f,P),C}function m(f,g,_,y){if(typeof _=="object"&&_!==null&&_.type===es&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Yo:e:{for(var C=_.key,T=g;T!==null;){if(T.key===C){if(C=_.type,C===es){if(T.tag===7){n(f,T.sibling),g=r(T,_.props.children),g.return=f,f=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Li&&dh(C)===T.type){n(f,T.sibling),g=r(T,_.props),g.ref=js(f,T,_),g.return=f,f=g;break e}n(f,T);break}else e(f,T);T=T.sibling}_.type===es?(g=vr(_.props.children,f.mode,y,_.key),g.return=f,f=g):(y=$a(_.type,_.key,_.props,null,f.mode,y),y.ref=js(f,g,_),y.return=f,f=y)}return o(f);case Jr:e:{for(T=_.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Rc(_,f.mode,y),g.return=f,f=g}return o(f);case Li:return T=_._init,m(f,g,T(_._payload),y)}if(to(_))return v(f,g,_,y);if(Hs(_))return x(f,g,_,y);sa(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,_),g.return=f,f=g):(n(f,g),g=Ac(_,f.mode,y),g.return=f,f=g),o(f)):n(f,g)}return m}var As=Ug(!0),Ig=Ug(!1),fl=er(null),dl=null,ls=null,Of=null;function zf(){Of=ls=dl=null}function kf(t){var e=fl.current;ot(fl),t._currentValue=e}function ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){dl=t,Of=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Of!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(dl===null)throw Error(ie(308));ls=t,dl.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var mr=null;function Bf(t){mr===null?mr=[t]:mr.push(t)}function Fg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bf(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Bf(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Af(t,n)}}function hh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){u=v.call(p,u,d);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,u,d):v,d==null)break e;u=mt({},u,d);break e;case 2:Di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=u):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=o,t.lanes=o,t.memoizedState=u}}function ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Go={},ii=er(Go),Co=er(Go),bo=er(Go);function gr(t){if(t===Go)throw Error(ie(174));return t}function Gf(t,e){switch(it(bo,e),it(Co,t),it(ii,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xu(e,t)}ot(ii),it(ii,e)}function Rs(){ot(ii),ot(Co),ot(bo)}function zg(t){gr(bo.current);var e=gr(ii.current),n=xu(e,t.type);e!==n&&(it(Co,t),it(ii,n))}function Vf(t){Co.current===t&&(ot(ii),ot(Co))}var dt=er(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yc=[];function Wf(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var Wa=Ei.ReactCurrentDispatcher,Sc=Ei.ReactCurrentBatchConfig,Tr=0,ht=null,wt=null,Nt=null,ml=!1,co=!1,Po=0,gx=0;function Ht(){throw Error(ie(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function jf(t,e,n,i,r,s){if(Tr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wa.current=t===null||t.memoizedState===null?yx:Sx,t=n(i,r),co){s=0;do{if(co=!1,Po=0,25<=s)throw Error(ie(301));s+=1,Nt=wt=null,e.updateQueue=null,Wa.current=Mx,t=n(i,r)}while(co)}if(Wa.current=gl,e=wt!==null&&wt.next!==null,Tr=0,Nt=wt=ht=null,ml=!1,e)throw Error(ie(300));return t}function qf(){var t=Po!==0;return Po=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Un(){if(wt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Nt===null?ht.memoizedState:Nt.next;if(e!==null)Nt=e,wt=t;else{if(t===null)throw Error(ie(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Lo(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Tr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=i):l=l.next=u,ht.lanes|=h,wr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=Un(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function kg(){}function Bg(t,e){var n=ht,i=Un(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,Yf(Vg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Do(9,Gg.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ie(349));Tr&30||Hg(n,e,r)}return r}function Hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gg(t,e,n,i){e.value=n,e.getSnapshot=i,Wg(e)&&Xg(t)}function Vg(t,e,n){return n(function(){Wg(e)&&Xg(t)})}function Wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Xg(t){var e=yi(t,1);e!==null&&jn(e,t,1,-1)}function mh(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=xx.bind(null,ht,t),[e.memoizedState,t]}function Do(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jg(){return Un().memoizedState}function Xa(t,e,n,i){var r=Zn();ht.flags|=t,r.memoizedState=Do(1|e,n,void 0,i===void 0?null:i)}function Ol(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Xf(i,o.deps)){r.memoizedState=Do(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Do(1|e,n,s,i)}function gh(t,e){return Xa(8390656,8,t,e)}function Yf(t,e){return Ol(2048,8,t,e)}function qg(t,e){return Ol(4,2,t,e)}function Yg(t,e){return Ol(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kg(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4,4,$g.bind(null,e,t),n)}function $f(){}function Zg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qg(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Jg(t,e,n){return Tr&21?(Yn(n,e)||(n=rg(),ht.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function _x(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=Sc.transition;Sc.transition={};try{t(!1),e()}finally{Ze=n,Sc.transition=i}}function e0(){return Un().memoizedState}function vx(t,e,n){var i=Xi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},t0(t))n0(e,n);else if(n=Fg(t,e,n,i),n!==null){var r=tn();jn(n,t,i,r),i0(n,e,i)}}function xx(t,e,n){var i=Xi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(t0(t))n0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Bf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fg(t,e,r,i),n!==null&&(r=tn(),jn(n,t,i,r),i0(n,e,i))}}function t0(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function n0(t,e){co=ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function i0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Af(t,n)}}var gl={readContext:Nn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},yx={readContext:Nn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:gh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vx.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:mh,useDebugValue:$f,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=mh(!1),e=t[0];return t=_x.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Zn();if(lt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ut===null)throw Error(ie(349));Tr&30||Hg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gh(Vg.bind(null,i,s,t),[t]),i.flags|=2048,Do(9,Gg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ut.identifierPrefix;if(lt){var n=mi,i=pi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sx={readContext:Nn,useCallback:Zg,useContext:Nn,useEffect:Yf,useImperativeHandle:Kg,useInsertionEffect:qg,useLayoutEffect:Yg,useMemo:Qg,useReducer:Mc,useRef:jg,useState:function(){return Mc(Lo)},useDebugValue:$f,useDeferredValue:function(t){var e=Un();return Jg(e,wt.memoizedState,t)},useTransition:function(){var t=Mc(Lo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Bg,useId:e0,unstable_isNewReconciler:!1},Mx={readContext:Nn,useCallback:Zg,useContext:Nn,useEffect:Yf,useImperativeHandle:Kg,useInsertionEffect:qg,useLayoutEffect:Yg,useMemo:Qg,useReducer:Ec,useRef:jg,useState:function(){return Ec(Lo)},useDebugValue:$f,useDeferredValue:function(t){var e=Un();return wt===null?e.memoizedState=t:Jg(e,wt.memoizedState,t)},useTransition:function(){var t=Ec(Lo)[0],e=Un().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:Bg,useId:e0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=Xi(t),s=_i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(jn(e,t,r,i),Va(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=Xi(t),s=_i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(jn(e,t,r,i),Va(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=Xi(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(jn(e,t,i,n),Va(e,t,i))}};function _h(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(n,i)||!To(r,s):!0}function r0(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=cn(e)?Mr:jt.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function Hu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Hf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=cn(e)?Mr:jt.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zl.enqueueReplaceState(r,r.state,null),hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",i=e;do n+=K_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ex=typeof WeakMap=="function"?WeakMap:Map;function s0(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vl||(vl=!0,Qu=i),Gu(t,e)},n}function o0(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof i!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ex;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ox.bind(null,t,e,n),e.then(t,t))}function yh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var Tx=Ei.ReactCurrentOwner,an=!1;function Qt(t,e,n,i){e.child=t===null?Ig(e,null,n,i):As(e,t.child,n,i)}function Mh(t,e,n,i,r){n=n.render;var s=e.ref;return vs(e,r),i=jf(t,e,n,i,s,r),n=qf(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(lt&&n&&Uf(e),e.flags|=1,Qt(t,e,i,r),e.child)}function Eh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,a0(t,e,s,i,r)):(t=$a(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(o,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function a0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(To(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Si(t,e,r)}return Vu(t,e,n,i,r)}function l0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(us,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(us,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(us,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(us,mn),mn|=i;return Qt(t,e,r,n),e.child}function c0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vu(t,e,n,i,r){var s=cn(n)?Mr:jt.current;return s=Ts(e,s),vs(e,r),n=jf(t,e,n,i,s,r),i=qf(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(lt&&i&&Uf(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Th(t,e,n,i,r){if(cn(n)){var s=!0;ll(e)}else s=!1;if(vs(e,r),e.stateNode===null)ja(t,e),r0(e,n,i),Hu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=cn(n)?Mr:jt.current,c=Ts(e,c));var h=n.getDerivedStateFromProps,u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&vh(e,o,i,c),Di=!1;var d=e.memoizedState;o.state=d,hl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||ln.current||Di?(typeof h=="function"&&(Bu(e,n,h,i),l=e.memoizedState),(a=Di||_h(e,n,a,i,d,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Og(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,u=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=cn(n)?Mr:jt.current,l=Ts(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||d!==l)&&vh(e,o,i,l),Di=!1,d=e.memoizedState,o.state=d,hl(e,i,o,r);var v=e.memoizedState;a!==u||d!==v||ln.current||Di?(typeof p=="function"&&(Bu(e,n,p,i),v=e.memoizedState),(c=Di||_h(e,n,c,i,d,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Wu(t,e,n,i,s,r)}function Wu(t,e,n,i,r,s){c0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ch(e,n,!1),Si(t,e,s);i=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&ch(e,n,!0),e.child}function u0(t){var e=t.stateNode;e.pendingContext?lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lh(t,e.context,!1),Gf(t,e.containerInfo)}function wh(t,e,n,i,r){return ws(),Ff(r),e.flags|=256,Qt(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function f0(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(dt,r&1),t===null)return zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Hl(o,i,0,null),t=vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ju(n),e.memoizedState=Xu,t):Kf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ji(a,s):(s=vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ju(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xu,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Kf(t,e){return e=Hl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oa(t,e,n,i){return i!==null&&Ff(i),As(e,t.child,null,n),t=Kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Tc(Error(ie(422))),oa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Hl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=ju(o),e.memoizedState=Xu,s);if(!(e.mode&1))return oa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Tc(s,i,void 0),oa(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),jn(i,t,r,-1))}return nd(),i=Tc(Error(ie(421))),oa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Gi(r.nextSibling),vn=e,lt=!0,Gn=null,t!==null&&(An[Rn++]=pi,An[Rn++]=mi,An[Rn++]=Er,pi=t.id,mi=t.overflow,Er=e),e=Kf(e,i.children),e.flags|=4096,e)}function Ah(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ku(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function d0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ah(t,n,e);else if(t.tag===19)Ah(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ax(t,e,n){switch(e.tag){case 3:u0(e),ws();break;case 5:zg(e);break;case 1:cn(e.type)&&ll(e);break;case 4:Gf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?f0(t,e,n):(it(dt,dt.current&1),t=Si(t,e,n),t!==null?t.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return d0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,l0(t,e,n)}return Si(t,e,n)}var h0,qu,p0,m0;h0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qu=function(){};p0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,gr(ii.current);var s=null;switch(n){case"input":r=mu(t,r),i=mu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=vu(t,r),i=vu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ol)}yu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};m0=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Rx(t,e,n){var i=e.pendingProps;switch(If(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return cn(e.type)&&al(),Gt(e),null;case 3:return i=e.stateNode,Rs(),ot(ln),ot(jt),Wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(tf(Gn),Gn=null))),qu(t,e),Gt(e),null;case 5:Vf(e);var r=gr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)p0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Gt(e),null}if(t=gr(ii.current),ra(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<io.length;r++)rt(io[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Id(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Od(i,s),rt("invalid",i)}yu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ia(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ia(i.textContent,a,t),r=["children",""+a]):_o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":$o(i),Fd(i,s,!0);break;case"textarea":$o(i),zd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[Ro]=i,h0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Su(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<io.length;r++)rt(io[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":Id(t,i),r=mu(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Od(t,i),r=vu(t,i),rt("invalid",t);break;default:r=i}yu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vo(t,l):typeof l=="number"&&vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&yf(t,s,l,o))}switch(n){case"input":$o(t),Fd(t,i,!1);break;case"textarea":$o(t),zd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)m0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=gr(bo.current),gr(ii.current),ra(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:ia(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ia(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Gt(e),null;case 13:if(ot(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&_n!==null&&e.mode&1&&!(e.flags&128))Ng(),ws(),e.flags|=98560,s=!1;else if(s=ra(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Jn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Gn!==null&&(tf(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?At===0&&(At=3):nd())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Rs(),qu(t,e),t===null&&wo(e.stateNode.containerInfo),Gt(e),null;case 10:return kf(e.type._context),Gt(e),null;case 17:return cn(e.type)&&al(),Gt(e),null;case 19:if(ot(dt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)qs(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pl(t),o!==null){for(e.flags|=128,qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>bs&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=pl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Gt(e),null}else 2*St()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=dt.current,it(dt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return td(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Cx(t,e){switch(If(e),e.tag){case 1:return cn(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),ot(ln),ot(jt),Wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vf(e),null;case 13:if(ot(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(dt),null;case 4:return Rs(),null;case 10:return kf(e.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var aa=!1,Xt=!1,bx=typeof WeakSet=="function"?WeakSet:Set,me=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Yu(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Rh=!1;function Px(t,e){if(Lu=il,t=yg(),Nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,u=t,d=null;t:for(;;){for(var p;u!==n||r!==0&&u.nodeType!==3||(a=o+r),u!==s||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)d=u,u=p;for(;;){if(u===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:t,selectionRange:n},il=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Bn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return v=Rh,Rh=!1,v}function uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yu(e,n,s)}r=r.next}while(r!==i)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $u(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function g0(t){var e=t.alternate;e!==null&&(t.alternate=null,g0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Ro],delete e[Iu],delete e[dx],delete e[hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _0(t){return t.tag===5||t.tag===3||t.tag===4}function Ch(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(i!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}var Ft=null,Hn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)v0(t,e,n),n=n.sibling}function v0(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:Xt||cs(n,e);case 6:var i=Ft,r=Hn;Ft=null,Ti(t,e,n),Ft=i,Hn=r,Ft!==null&&(Hn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Hn?(t=Ft,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),Mo(t)):vc(Ft,n.stateNode));break;case 4:i=Ft,r=Hn,Ft=n.stateNode.containerInfo,Hn=!0,Ti(t,e,n),Ft=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yu(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Xt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ti(t,e,n),Xt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function bh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(i){var r=kx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Hn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ft===null)throw Error(ie(160));v0(s,o,r),Ft=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}function x0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Kn(t),i&4){try{uo(3,t,t.return),kl(3,t)}catch(x){vt(t,t.return,x)}try{uo(5,t,t.return)}catch(x){vt(t,t.return,x)}}break;case 1:In(e,t),Kn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(In(e,t),Kn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{vo(r,"")}catch(x){vt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hm(r,s),Su(a,o);var c=Su(a,s);for(o=0;o<l.length;o+=2){var h=l[o],u=l[o+1];h==="style"?jm(r,u):h==="dangerouslySetInnerHTML"?Wm(r,u):h==="children"?vo(r,u):yf(r,h,u,c)}switch(a){case"input":gu(r,s);break;case"textarea":Gm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ps(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ps(r,!!s.multiple,s.defaultValue,!0):ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ro]=s}catch(x){vt(t,t.return,x)}}break;case 6:if(In(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){vt(t,t.return,x)}}break;case 3:if(In(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(x){vt(t,t.return,x)}break;case 4:In(e,t),Kn(t);break;case 13:In(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jf=St())),i&4&&bh(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||h,In(e,t),Xt=c):In(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(me=t,h=t.child;h!==null;){for(u=me=h;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:uo(4,d,d.return);break;case 1:cs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){vt(i,n,x)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){Lh(u);continue}}p!==null?(p.return=d,me=p):Lh(u)}h=h.sibling}e:for(h=null,u=t;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Xm("display",o))}catch(x){vt(t,t.return,x)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(x){vt(t,t.return,x)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:In(e,t),Kn(t),i&4&&bh(t);break;case 21:break;default:In(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(vo(r,""),i.flags&=-33);var s=Ch(t);Zu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ch(t);Ku(t,a,o);break;default:throw Error(ie(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lx(t,e,n){me=t,y0(t)}function y0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||aa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=aa;var c=Xt;if(aa=o,(Xt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Dh(r):l!==null?(l.return=o,me=l):Dh(r);for(;s!==null;)me=s,y0(s),s=s.sibling;me=r,aa=a,Xt=c}Ph(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Ph(t)}}function Ph(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ph(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ph(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&Mo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Xt||e.flags&512&&$u(e)}catch(d){vt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Lh(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Dh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{$u(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{$u(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Dx=Math.ceil,_l=Ei.ReactCurrentDispatcher,Zf=Ei.ReactCurrentOwner,Dn=Ei.ReactCurrentBatchConfig,Ye=0,Ut=null,Tt=null,zt=0,mn=0,us=er(0),At=0,No=null,wr=0,Bl=0,Qf=0,fo=null,on=null,Jf=0,bs=1/0,di=null,vl=!1,Qu=null,Wi=null,la=!1,Fi=null,xl=0,ho=0,Ju=null,qa=-1,Ya=0;function tn(){return Ye&6?St():qa!==-1?qa:qa=St()}function Xi(t){return t.mode&1?Ye&2&&zt!==0?zt&-zt:mx.transition!==null?(Ya===0&&(Ya=rg()),Ya):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:fg(t.type)),t):1}function jn(t,e,n,i){if(50<ho)throw ho=0,Ju=null,Error(ie(185));ko(t,n,i),(!(Ye&2)||t!==Ut)&&(t===Ut&&(!(Ye&2)&&(Bl|=n),At===4&&Ui(t,zt)),un(t,i),n===1&&Ye===0&&!(e.mode&1)&&(bs=St()+500,Fl&&tr()))}function un(t,e){var n=t.callbackNode;mv(t,e);var i=nl(t,t===Ut?zt:0);if(i===0)n!==null&&Hd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hd(n),e===1)t.tag===0?px(Nh.bind(null,t)):Pg(Nh.bind(null,t)),ux(function(){!(Ye&6)&&tr()}),n=null;else{switch(sg(i)){case 1:n=wf;break;case 4:n=ng;break;case 16:n=tl;break;case 536870912:n=ig;break;default:n=tl}n=C0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(qa=-1,Ya=0,Ye&6)throw Error(ie(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var i=nl(t,t===Ut?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yl(t,i);else{e=i;var r=Ye;Ye|=2;var s=E0();(Ut!==t||zt!==e)&&(di=null,bs=St()+500,_r(t,e));do try{Ix();break}catch(a){M0(t,a)}while(!0);zf(),_l.current=s,Ye=r,Tt!==null?e=0:(Ut=null,zt=0,e=At)}if(e!==0){if(e===2&&(r=Au(t),r!==0&&(i=r,e=ef(t,r))),e===1)throw n=No,_r(t,0),Ui(t,i),un(t,St()),n;if(e===6)Ui(t,i);else{if(r=t.current.alternate,!(i&30)&&!Nx(r)&&(e=yl(t,i),e===2&&(s=Au(t),s!==0&&(i=s,e=ef(t,s))),e===1))throw n=No,_r(t,0),Ui(t,i),un(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:cr(t,on,di);break;case 3:if(Ui(t,i),(i&130023424)===i&&(e=Jf+500-St(),10<e)){if(nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uu(cr.bind(null,t,on,di),e);break}cr(t,on,di);break;case 4:if(Ui(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dx(i/1960))-i,10<i){t.timeoutHandle=Uu(cr.bind(null,t,on,di),i);break}cr(t,on,di);break;case 5:cr(t,on,di);break;default:throw Error(ie(329))}}}return un(t,St()),t.callbackNode===n?S0.bind(null,t):null}function ef(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=yl(t,e),t!==2&&(e=on,on=n,e!==null&&tf(e)),t}function tf(t){on===null?on=t:on.push.apply(on,t)}function Nx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ui(t,e){for(e&=~Qf,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Nh(t){if(Ye&6)throw Error(ie(327));xs();var e=nl(t,0);if(!(e&1))return un(t,St()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var i=Au(t);i!==0&&(e=i,n=ef(t,i))}if(n===1)throw n=No,_r(t,0),Ui(t,e),un(t,St()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,on,di),un(t,St()),null}function ed(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(bs=St()+500,Fl&&tr())}}function Ar(t){Fi!==null&&Fi.tag===0&&!(Ye&6)&&xs();var e=Ye;Ye|=1;var n=Dn.transition,i=Ze;try{if(Dn.transition=null,Ze=1,t)return t()}finally{Ze=i,Dn.transition=n,Ye=e,!(Ye&6)&&tr()}}function td(){mn=us.current,ot(us)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(If(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&al();break;case 3:Rs(),ot(ln),ot(jt),Wf();break;case 5:Vf(i);break;case 4:Rs();break;case 13:ot(dt);break;case 19:ot(dt);break;case 10:kf(i.type._context);break;case 22:case 23:td()}n=n.return}if(Ut=t,Tt=t=ji(t.current,null),zt=mn=e,At=0,No=null,Qf=Bl=wr=0,on=fo=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}mr=null}return t}function M0(t,e){do{var n=Tt;try{if(zf(),Wa.current=gl,ml){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ml=!1}if(Tr=0,Nt=wt=ht=null,co=!1,Po=0,Zf.current=null,n===null||n.return===null){At=1,No=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=yh(o);if(p!==null){p.flags&=-257,Sh(p,o,a,s,e),p.mode&1&&xh(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){xh(s,c,e),nd();break e}l=Error(ie(426))}}else if(lt&&a.mode&1){var m=yh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Sh(m,o,a,s,e),Ff(Cs(l,a));break e}}s=l=Cs(l,a),At!==4&&(At=2),fo===null?fo=[s]:fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=s0(s,l,e);hh(s,f);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Wi===null||!Wi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=o0(s,a,e);hh(s,y);break e}}s=s.return}while(s!==null)}w0(n)}catch(C){e=C,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function E0(){var t=_l.current;return _l.current=gl,t===null?gl:t}function nd(){(At===0||At===3||At===2)&&(At=4),Ut===null||!(wr&268435455)&&!(Bl&268435455)||Ui(Ut,zt)}function yl(t,e){var n=Ye;Ye|=2;var i=E0();(Ut!==t||zt!==e)&&(di=null,_r(t,e));do try{Ux();break}catch(r){M0(t,r)}while(!0);if(zf(),Ye=n,_l.current=i,Tt!==null)throw Error(ie(261));return Ut=null,zt=0,At}function Ux(){for(;Tt!==null;)T0(Tt)}function Ix(){for(;Tt!==null&&!ov();)T0(Tt)}function T0(t){var e=R0(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?w0(t):Tt=e,Zf.current=null}function w0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cx(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Tt=null;return}}else if(n=Rx(n,e,mn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);At===0&&(At=5)}function cr(t,e,n){var i=Ze,r=Dn.transition;try{Dn.transition=null,Ze=1,Fx(t,e,n,i)}finally{Dn.transition=r,Ze=i}return null}function Fx(t,e,n,i){do xs();while(Fi!==null);if(Ye&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gv(t,s),t===Ut&&(Tt=Ut=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||la||(la=!0,C0(tl,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=Ze;Ze=1;var a=Ye;Ye|=4,Zf.current=null,Px(t,n),x0(n,t),nx(Du),il=!!Lu,Du=Lu=null,t.current=n,Lx(n),av(),Ye=a,Ze=o,Dn.transition=s}else t.current=n;if(la&&(la=!1,Fi=t,xl=r),s=t.pendingLanes,s===0&&(Wi=null),uv(n.stateNode),un(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vl)throw vl=!1,t=Qu,Qu=null,t;return xl&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===Ju?ho++:(ho=0,Ju=t):ho=0,tr(),null}function xs(){if(Fi!==null){var t=sg(xl),e=Dn.transition,n=Ze;try{if(Dn.transition=null,Ze=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,xl=0,Ye&6)throw Error(ie(331));var r=Ye;for(Ye|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var h=me;switch(h.tag){case 0:case 11:case 15:uo(8,h,s)}var u=h.child;if(u!==null)u.return=h,me=u;else for(;me!==null;){h=me;var d=h.sibling,p=h.return;if(g0(h),h===c){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,me=f;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,me=_;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kl(9,a)}}catch(C){vt(a,a.return,C)}if(a===o){me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,me=y;break e}me=a.return}}if(Ye=r,tr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Ll,t)}catch{}i=!0}return i}finally{Ze=n,Dn.transition=e}}return!1}function Uh(t,e,n){e=Cs(n,e),e=s0(t,e,1),t=Vi(t,e,1),e=tn(),t!==null&&(ko(t,1,e),un(t,e))}function vt(t,e,n){if(t.tag===3)Uh(t,t,n);else for(;e!==null;){if(e.tag===3){Uh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wi===null||!Wi.has(i))){t=Cs(n,t),t=o0(e,t,1),e=Vi(e,t,1),t=tn(),e!==null&&(ko(e,1,t),un(e,t));break}}e=e.return}}function Ox(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(zt&n)===n&&(At===4||At===3&&(zt&130023424)===zt&&500>St()-Jf?_r(t,0):Qf|=n),un(t,e)}function A0(t,e){e===0&&(t.mode&1?(e=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):e=1);var n=tn();t=yi(t,e),t!==null&&(ko(t,e,n),un(t,n))}function zx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),A0(t,n)}function kx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),A0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,Ax(t,e,n);an=!!(t.flags&131072)}else an=!1,lt&&e.flags&1048576&&Lg(e,ul,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ja(t,e),t=e.pendingProps;var r=Ts(e,jt.current);vs(e,n),r=jf(null,e,i,t,r,n);var s=qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,ll(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Hf(e),r.updater=zl,e.stateNode=r,r._reactInternals=e,Hu(e,i,t,n),e=Wu(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&Uf(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hx(i),t=Bn(i,t),r){case 0:e=Vu(null,e,i,t,n);break e;case 1:e=Th(null,e,i,t,n);break e;case 11:e=Mh(null,e,i,t,n);break e;case 14:e=Eh(null,e,i,Bn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Vu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Th(t,e,i,r,n);case 3:e:{if(u0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Og(t,e),hl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cs(Error(ie(423)),e),e=wh(t,e,i,n,r);break e}else if(i!==r){r=Cs(Error(ie(424)),e),e=wh(t,e,i,n,r);break e}else for(_n=Gi(e.stateNode.containerInfo.firstChild),vn=e,lt=!0,Gn=null,n=Ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),i===r){e=Si(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return zg(e),t===null&&zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Nu(i,r)?o=null:s!==null&&Nu(i,s)&&(e.flags|=32),c0(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&zu(e),null;case 13:return f0(t,e,n);case 4:return Gf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Mh(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(fl,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!ln.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ku(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ku(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vs(e,n),r=Nn(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),Eh(t,e,i,r,n);case 15:return a0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ja(t,e),e.tag=1,cn(i)?(t=!0,ll(e)):t=!1,vs(e,n),r0(e,i,r),Hu(e,i,r,n),Wu(null,e,i,!0,t,n);case 19:return d0(t,e,n);case 22:return l0(t,e,n)}throw Error(ie(156,e.tag))};function C0(t,e){return tg(t,e)}function Bx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Bx(t,e,n,i)}function id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hx(t){if(typeof t=="function")return id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mf)return 11;if(t===Ef)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $a(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case es:return vr(n.children,r,s,e);case Sf:o=8,r|=8;break;case fu:return t=Ln(12,n,e,r|2),t.elementType=fu,t.lanes=s,t;case du:return t=Ln(13,n,e,r),t.elementType=du,t.lanes=s,t;case hu:return t=Ln(19,n,e,r),t.elementType=hu,t.lanes=s,t;case zm:return Hl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fm:o=10;break e;case Om:o=9;break e;case Mf:o=11;break e;case Ef:o=14;break e;case Li:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Hl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=zm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ac(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rd(t,e,n,i,r,s,o,a,l){return t=new Gx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(s),t}function Vx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function b0(t){if(!t)return Zi;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(cn(n))return bg(t,n,e)}return e}function P0(t,e,n,i,r,s,o,a,l){return t=rd(n,i,!0,t,r,s,o,a,l),t.context=b0(null),n=t.current,i=tn(),r=Xi(n),s=_i(i,r),s.callback=e!=null?e:null,Vi(n,s,r),t.current.lanes=r,ko(t,r,i),un(t,i),t}function Gl(t,e,n,i){var r=e.current,s=tn(),o=Xi(r);return n=b0(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,o),t!==null&&(jn(t,r,o,s),Va(t,r,o)),o}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ih(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sd(t,e){Ih(t,e),(t=t.alternate)&&Ih(t,e)}function Wx(){return null}var L0=typeof reportError=="function"?reportError:function(t){console.error(t)};function od(t){this._internalRoot=t}Vl.prototype.render=od.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Gl(t,e,null,null)};Vl.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){Gl(null,t,null,null)}),e[xi]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&ug(t)}};function ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fh(){}function Xx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Sl(o);s.call(c)}}var o=P0(e,i,t,0,null,!1,!1,"",Fh);return t._reactRootContainer=o,t[xi]=o.current,wo(t.nodeType===8?t.parentNode:t),Ar(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Sl(l);a.call(c)}}var l=rd(t,0,!1,null,null,!1,!1,"",Fh);return t._reactRootContainer=l,t[xi]=l.current,wo(t.nodeType===8?t.parentNode:t),Ar(function(){Gl(e,l,n,i)}),l}function Xl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Sl(o);a.call(l)}}Gl(e,o,t,r)}else o=Xx(n,e,t,r,i);return Sl(o)}og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(Af(e,n|1),un(e,St()),!(Ye&6)&&(bs=St()+500,tr()))}break;case 13:Ar(function(){var i=yi(t,1);if(i!==null){var r=tn();jn(i,t,1,r)}}),sd(t,1)}};Rf=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=tn();jn(e,t,134217728,n)}sd(t,134217728)}};ag=function(t){if(t.tag===13){var e=Xi(t),n=yi(t,e);if(n!==null){var i=tn();jn(n,t,e,i)}sd(t,e)}};lg=function(){return Ze};cg=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Eu=function(t,e,n){switch(e){case"input":if(gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Il(i);if(!r)throw Error(ie(90));Bm(i),gu(i,r)}}}break;case"textarea":Gm(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};$m=ed;Km=Ar;var jx={usingClientEntryPoint:!1,Events:[Ho,rs,Il,qm,Ym,ed]},Ys={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qx={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||Wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{Ll=ca.inject(qx),ni=ca}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(e))throw Error(ie(200));return Vx(t,e,null,n)};Sn.createRoot=function(t,e){if(!ad(t))throw Error(ie(299));var n=!1,i="",r=L0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rd(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,wo(t.nodeType===8?t.parentNode:t),new od(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Jm(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Ar(t)};Sn.hydrate=function(t,e,n){if(!Wl(e))throw Error(ie(200));return Xl(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!ad(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=L0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P0(e,null,t,1,n!=null?n:null,r,!1,s,o),t[xi]=e.current,wo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Vl(e)};Sn.render=function(t,e,n){if(!Wl(e))throw Error(ie(200));return Xl(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(ie(40));return t._reactRootContainer?(Ar(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};Sn.unstable_batchedUpdates=ed;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Wl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Xl(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function D0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)}catch(t){console.error(t)}}D0(),Dm.exports=Sn;var Yx=Dm.exports,N0,Oh=Yx;N0=Oh.createRoot,Oh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="160",$x=0,zh=1,Kx=2,U0=1,Zx=2,fi=3,Qi=0,fn=1,ei=2,qi=0,ys=1,kh=2,Bh=3,Hh=4,Qx=5,dr=100,Jx=101,ey=102,Gh=103,Vh=104,ty=200,ny=201,iy=202,ry=203,nf=204,rf=205,sy=206,oy=207,ay=208,ly=209,cy=210,uy=211,fy=212,dy=213,hy=214,py=0,my=1,gy=2,Ml=3,_y=4,vy=5,xy=6,yy=7,I0=0,Sy=1,My=2,Yi=0,Ey=1,Ty=2,wy=3,F0=4,Ay=5,Ry=6,O0=300,Ps=301,Ls=302,sf=303,of=304,jl=306,af=1e3,Vn=1001,lf=1002,Jt=1003,Wh=1004,Cc=1005,Cn=1006,Cy=1007,Uo=1008,$i=1009,by=1010,Py=1011,cd=1012,z0=1013,Oi=1014,zi=1015,Io=1016,k0=1017,B0=1018,xr=1020,Ly=1021,Wn=1023,Dy=1024,Ny=1025,yr=1026,Ds=1027,Uy=1028,H0=1029,Iy=1030,G0=1031,V0=1033,bc=33776,Pc=33777,Lc=33778,Dc=33779,Xh=35840,jh=35841,qh=35842,Yh=35843,W0=36196,$h=37492,Kh=37496,Zh=37808,Qh=37809,Jh=37810,ep=37811,tp=37812,np=37813,ip=37814,rp=37815,sp=37816,op=37817,ap=37818,lp=37819,cp=37820,up=37821,Nc=36492,fp=36494,dp=36495,Fy=36283,hp=36284,pp=36285,mp=36286,X0=3e3,Sr=3001,Oy=3200,zy=3201,j0=0,ky=1,Pn="",Ot="srgb",Mi="srgb-linear",ud="display-p3",ql="display-p3-linear",El="linear",st="srgb",Tl="rec709",wl="p3",Ur=7680,gp=519,By=512,Hy=513,Gy=514,q0=515,Vy=516,Wy=517,Xy=518,jy=519,_p=35044,vp="300 es",cf=1035,gi=2e3,Al=2001;class Os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xp=1234567;const Ss=Math.PI/180,Fo=180/Math.PI;function zs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function fd(t,e){return(t%e+e)%e}function qy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Yy(t,e,n){return t!==e?(n-t)/(e-t):0}function po(t,e,n){return(1-n)*t+n*e}function $y(t,e,n,i){return po(t,e,1-Math.exp(-n*i))}function Ky(t,e=1){return e-Math.abs(fd(t,e*2)-e)}function Zy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Qy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Jy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function eS(t,e){return t+Math.random()*(e-t)}function tS(t){return t*(.5-Math.random())}function nS(t){t!==void 0&&(xp=t);let e=xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iS(t){return t*Ss}function rS(t){return t*Fo}function uf(t){return(t&t-1)===0&&t!==0}function sS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Rl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function oS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*h,l*u,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*u,a*c);break;case"ZXZ":t.set(l*u,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*v,l*p,a*c);break;case"YXY":t.set(l*p,a*h,l*v,a*c);break;case"ZYZ":t.set(l*v,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ir={DEG2RAD:Ss,RAD2DEG:Fo,generateUUID:zs,clamp:en,euclideanModulo:fd,mapLinear:qy,inverseLerp:Yy,lerp:po,damp:$y,pingpong:Ky,smoothstep:Zy,smootherstep:Qy,randInt:Jy,randFloat:eS,randFloatSpread:tS,seededRandom:nS,degToRad:iS,radToDeg:rS,isPowerOfTwo:uf,ceilPowerOfTwo:sS,floorPowerOfTwo:Rl,setQuaternionFromProperEuler:oS,normalize:Kt,denormalize:Qr};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],g=r[1],_=r[4],y=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*x+a*g+l*C,s[3]=o*m+a*_+l*T,s[6]=o*f+a*y+l*A,s[1]=c*x+h*g+u*C,s[4]=c*m+h*_+u*T,s[7]=c*f+h*y+u*A,s[2]=d*x+p*g+v*C,s[5]=d*m+p*_+v*T,s[8]=d*f+p*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,v=n*u+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=u*x,e[1]=(r*c-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(h*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Uc.makeScale(e,n)),this}rotate(e){return this.premultiply(Uc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new Ge;function Y0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function aS(){const t=Cl("canvas");return t.style.display="block",t}const yp={};function mo(t){t in yp||(yp[t]=!0,console.warn(t))}const Sp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ua={[Mi]:{transfer:El,primaries:Tl,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:st,primaries:Tl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ql]:{transfer:El,primaries:wl,toReference:t=>t.applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(Sp)},[ud]:{transfer:st,primaries:wl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(Sp).convertLinearToSRGB()}},lS=new Set([Mi,ql]),Je={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!lS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ua[e].toReference,r=ua[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ua[t].primaries},getTransfer:function(t){return t===Pn?El:ua[t].transfer}};function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ic(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class $0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=Cl("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=Cl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cS=0;class K0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=zs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fc(r[o].image)):s.push(Fc(r[o]))}else s=Fc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fc(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?$0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uS=0;class xn extends Os{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Vn,r=Vn,s=Cn,o=Uo,a=Wn,l=$i,c=xn.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=zs(),this.name="",this.source=new K0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Sr?Ot:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case af:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case af:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Sr:X0}set encoding(e){mo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?Ot:Pn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=O0;xn.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,n=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,C=(f+1)/2,T=(h+d)/4,A=(u+x)/4,P=(v+m)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(u-x)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fS extends Os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ct(0,0,e,n),this.scissorTest=!1,this.viewport=new ct(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(mo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Sr?Ot:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new K0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends fS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Z0 extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dS extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(u!==x||l!==d||c!==p||h!==v){let m=1-a;const f=l*d+c*p+h*v+u*x,g=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,f*g);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const y=a*g;if(l=l*m+d*y,c=c*m+p*y,h=h*m+v*y,u=u*m+x*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+h*u+l*p-c*d,e[n+1]=l*v+h*d+c*u-a*p,e[n+2]=c*v+h*p+a*d-l*u,e[n+3]=h*v-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u-d*p*v;break;case"YXZ":this._x=d*h*u+c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u+d*p*v;break;case"ZXY":this._x=d*h*u-c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u-d*p*v;break;case"ZYX":this._x=d*h*u-c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u+d*p*v;break;case"YZX":this._x=d*h*u+c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u-d*p*v;break;case"XZY":this._x=d*h*u-c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],u=n[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),u=2*(s*i-o*n);return this.x=n+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oc=new D,Ep=new ti;class Vo{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),da.subVectors(this.max,$s),Or.subVectors(e.a,$s),zr.subVectors(e.b,$s),kr.subVectors(e.c,$s),wi.subVectors(zr,Or),Ai.subVectors(kr,zr),rr.subVectors(Or,kr);let n=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-rr.z,rr.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,rr.z,0,-rr.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-rr.y,rr.x,0];return!zc(n,Or,zr,kr,da)||(n=[1,0,0,0,1,0,0,0,1],!zc(n,Or,zr,kr,da))?!1:(ha.crossVectors(wi,Ai),n=[ha.x,ha.y,ha.z],zc(n,Or,zr,kr,da))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new D,new D,new D,new D,new D,new D,new D,new D],Fn=new D,fa=new Vo,Or=new D,zr=new D,kr=new D,wi=new D,Ai=new D,rr=new D,$s=new D,da=new D,ha=new D,sr=new D;function zc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){sr.fromArray(t,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=n.dot(sr),h=i.dot(sr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hS=new Vo,Ks=new D,kc=new D;class Wo{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(kc)),this.expandByPoint(Ks.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new D,Bc=new D,pa=new D,Ri=new D,Hc=new D,ma=new D,Gc=new D;class Yl{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bc.copy(e).add(n).multiplyScalar(.5),pa.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(Bc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pa),a=Ri.dot(this.direction),l=-Ri.dot(pa),c=Ri.lengthSq(),h=Math.abs(1-o*o);let u,d,p,v;if(h>0)if(u=o*l-a,d=o*a-l,v=s*h,u>=0)if(d>=-v)if(d<=v){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bc).addScaledVector(pa,d),p}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){Hc.subVectors(n,e),ma.subVectors(i,e),Gc.crossVectors(Hc,ma);let o=this.direction.dot(Gc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(ma.crossVectors(Ri,ma));if(l<0)return null;const c=a*this.direction.dot(Hc.cross(Ri));if(c<0||l+c>o)return null;const h=-a*Ri.dot(Gc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,c,h,u,d,p,v,x,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,u,d,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,h,u,d,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,v=a*h,x=a*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=p+v*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,v=c*h,x=c*u;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*u,n[5]=o*h,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,v=c*h,x=c*u;n[0]=d-x*a,n[4]=-o*u,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*h,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,v=a*h,x=a*u;n[0]=l*h,n[4]=v*c-p,n[8]=d*c+x,n[1]=l*u,n[5]=x*c+d,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*h,n[4]=x-d*u,n[8]=v*u+p,n[1]=u,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=p*u+v,n[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=d*u+x,n[5]=o*h,n[9]=p*u-v,n[2]=v*u-p,n[6]=a*h,n[10]=x*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pS,e,mS)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ci.crossVectors(i,hn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ci.crossVectors(i,hn)),Ci.normalize(),ga.crossVectors(hn,Ci),r[0]=Ci.x,r[4]=ga.x,r[8]=hn.x,r[1]=Ci.y,r[5]=ga.y,r[9]=hn.y,r[2]=Ci.z,r[6]=ga.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],g=i[3],_=i[7],y=i[11],C=i[15],T=r[0],A=r[4],P=r[8],S=r[12],E=r[1],O=r[5],W=r[9],ee=r[13],L=r[2],z=r[6],q=r[10],$=r[14],N=r[3],F=r[7],B=r[11],Z=r[15];return s[0]=o*T+a*E+l*L+c*N,s[4]=o*A+a*O+l*z+c*F,s[8]=o*P+a*W+l*q+c*B,s[12]=o*S+a*ee+l*$+c*Z,s[1]=h*T+u*E+d*L+p*N,s[5]=h*A+u*O+d*z+p*F,s[9]=h*P+u*W+d*q+p*B,s[13]=h*S+u*ee+d*$+p*Z,s[2]=v*T+x*E+m*L+f*N,s[6]=v*A+x*O+m*z+f*F,s[10]=v*P+x*W+m*q+f*B,s[14]=v*S+x*ee+m*$+f*Z,s[3]=g*T+_*E+y*L+C*N,s[7]=g*A+_*O+y*z+C*F,s[11]=g*P+_*W+y*q+C*B,s[15]=g*S+_*ee+y*$+C*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*u-r*c*u-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+n*c*u-n*a*p-s*o*u+i*o*p+s*a*h-i*c*h)+f*(-r*a*h-n*l*u+n*a*d+r*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],g=u*m*c-x*d*c+x*l*p-a*m*p-u*l*f+a*d*f,_=v*d*c-h*m*c-v*l*p+o*m*p+h*l*f-o*d*f,y=h*x*c-v*u*c+v*a*p-o*x*p-h*a*f+o*u*f,C=v*u*l-h*x*l-v*a*d+o*x*d+h*a*m-o*u*m,T=n*g+i*_+r*y+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(x*d*s-u*m*s-x*r*p+i*m*p+u*r*f-i*d*f)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(u*l*s-a*d*s-u*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(h*m*s-v*d*s+v*r*p-n*m*p-h*r*f+n*d*f)*A,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*f-n*l*f)*A,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(v*u*s-h*x*s-v*i*p+n*x*p+h*i*f-n*u*f)*A,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*f+n*a*f)*A,e[11]=(h*a*s-o*u*s-h*i*c+n*u*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(h*x*r-v*u*r+v*i*d-n*x*d-h*i*m+n*u*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*u*r-h*a*r+h*i*l-n*u*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,v=s*u,x=o*h,m=o*u,f=a*u,g=l*c,_=l*h,y=l*u,C=i.x,T=i.y,A=i.z;return r[0]=(1-(x+f))*C,r[1]=(p+y)*C,r[2]=(v-_)*C,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+f))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(v+_)*A,r[9]=(m-g)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,h=1/o,u=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,n.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=gi){const l=this.elements,c=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===gi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Al)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi){const l=this.elements,c=1/(n-e),h=1/(i-r),u=1/(o-s),d=(n+e)*c,p=(i+r)*h;let v,x;if(a===gi)v=(o+s)*u,x=-2*u;else if(a===Al)v=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new D,On=new pt,pS=new D(0,0,0),mS=new D(1,1,1),Ci=new D,ga=new D,hn=new D,Tp=new pt,wp=new ti;class $l{constructor(e=0,n=0,i=0,r=$l.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$l.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gS=0;const Ap=new D,Hr=new ti,ai=new pt,_a=new D,Zs=new D,_S=new D,vS=new ti,Rp=new D(1,0,0),Cp=new D(0,1,0),bp=new D(0,0,1),xS={type:"added"},yS={type:"removed"};class Rt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new D,n=new $l,i=new ti,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ge}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(bp,e)}translateOnAxis(e,n){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_a.copy(e):_a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Zs,_a,this.up):ai.lookAt(_a,Zs,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(ai),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,_S),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,vS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new D(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new D,li=new D,Vc=new D,ci=new D,Gr=new D,Vr=new D,Pp=new D,Wc=new D,Xc=new D,jc=new D;let va=!1;class bn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),li.subVectors(i,n),Vc.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(li),l=zn.dot(Vc),c=li.dot(li),h=li.dot(Vc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,s,o,a,l){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),li.subVectors(e,n),zn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),zn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return va===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),va=!0),bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,i),Vr.subVectors(s,i),Wc.subVectors(e,i);const l=Gr.dot(Wc),c=Vr.dot(Wc);if(l<=0&&c<=0)return n.copy(i);Xc.subVectors(e,r);const h=Gr.dot(Xc),u=Vr.dot(Xc);if(h>=0&&u<=h)return n.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Gr,o);jc.subVectors(e,s);const p=Gr.dot(jc),v=Vr.dot(jc);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Vr,a);const m=h*v-p*u;if(m<=0&&u-h>=0&&p-v>=0)return Pp.subVectors(s,r),a=(u-h)/(u-h+(p-v)),n.copy(r).addScaledVector(Pp,a);const f=1/(m+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(Gr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function qc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=fd(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=qc(o,s,e+1/3),this.g=qc(o,s,e),this.b=qc(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=Q0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Ic(e.r),this.g=Ic(e.g),this.b=Ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Je.fromWorkingColorSpace(Wt.copy(this),e),Math.round(en(Wt.r*255,0,255))*65536+Math.round(en(Wt.g*255,0,255))*256+Math.round(en(Wt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ot){Je.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(xa);const i=po(bi.h,xa.h,n),r=po(bi.s,xa.s,n),s=po(bi.l,xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new qe;qe.NAMES=Q0;let SS=0;class Dr extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=ys,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=rf,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nf&&(i.blendSrc=this.blendSrc),this.blendDst!==rf&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ml&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class go extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new D,ya=new Xe;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ya.fromBufferAttribute(this,n),ya.applyMatrix3(e),this.setXY(n,ya.x,ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}}class J0 extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class e_ extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class at extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let MS=0;const Tn=new pt,Yc=new Rt,Wr=new D,pn=new Vo,Qs=new Vo,Dt=new D;class qt extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y0(e)?e_:J0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(pn.min,Qs.min),pn.expandByPoint(Dt),Dt.addVectors(pn.max,Qs.max),pn.expandByPoint(Dt)):(pn.expandByPoint(Qs.min),pn.expandByPoint(Qs.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(Wr.fromBufferAttribute(e,c),Dt.add(Wr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new D,h[E]=new D;const u=new D,d=new D,p=new D,v=new Xe,x=new Xe,m=new Xe,f=new D,g=new D;function _(E,O,W){u.fromArray(r,E*3),d.fromArray(r,O*3),p.fromArray(r,W*3),v.fromArray(o,E*2),x.fromArray(o,O*2),m.fromArray(o,W*2),d.sub(u),p.sub(u),x.sub(v),m.sub(v);const ee=1/(x.x*m.y-m.x*x.y);isFinite(ee)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(ee),g.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(ee),c[E].add(f),c[O].add(f),c[W].add(f),h[E].add(g),h[O].add(g),h[W].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,O=y.length;E<O;++E){const W=y[E],ee=W.start,L=W.count;for(let z=ee,q=ee+L;z<q;z+=3)_(i[z+0],i[z+1],i[z+2])}const C=new D,T=new D,A=new D,P=new D;function S(E){A.fromArray(s,E*3),P.copy(A);const O=c[E];C.copy(O),C.sub(A.multiplyScalar(A.dot(O))).normalize(),T.crossVectors(P,O);const ee=T.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=ee}for(let E=0,O=y.length;E<O;++E){const W=y[E],ee=W.start,L=W.count;for(let z=ee,q=ee+L;z<q;z+=3)S(i[z+0]),S(i[z+1]),S(i[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[v++]=c[p++]}return new qn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lp=new pt,or=new Yl,Sa=new Wo,Dp=new D,Xr=new D,jr=new D,qr=new D,$c=new D,Ma=new D,Ea=new Xe,Ta=new Xe,wa=new Xe,Np=new D,Up=new D,Ip=new D,Aa=new D,Ra=new D;class yt extends Rt{constructor(e=new qt,n=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&($c.fromBufferAttribute(u,e),o?Ma.addScaledVector($c,h):Ma.addScaledVector($c.sub(n),h))}n.add(Ma)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(Sa.containsPoint(or.origin)===!1&&(or.intersectSphere(Sa,Dp)===null||or.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Lp.copy(s).invert(),or.copy(e.ray).applyMatrix4(Lp),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=_;y<C;y+=3){const T=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);r=Ca(this,f,e,i,c,h,u,T,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const g=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Ca(this,o,e,i,c,h,u,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,C=_;y<C;y+=3){const T=y,A=y+1,P=y+2;r=Ca(this,f,e,i,c,h,u,T,A,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const g=m,_=m+1,y=m+2;r=Ca(this,o,e,i,c,h,u,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ES(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qi,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ra);return c<n.near||c>n.far?null:{distance:c,point:Ra.clone(),object:t}}function Ca(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xr),t.getVertexPosition(l,jr),t.getVertexPosition(c,qr);const h=ES(t,e,n,i,Xr,jr,qr,Aa);if(h){r&&(Ea.fromBufferAttribute(r,a),Ta.fromBufferAttribute(r,l),wa.fromBufferAttribute(r,c),h.uv=bn.getInterpolation(Aa,Xr,jr,qr,Ea,Ta,wa,new Xe)),s&&(Ea.fromBufferAttribute(s,a),Ta.fromBufferAttribute(s,l),wa.fromBufferAttribute(s,c),h.uv1=bn.getInterpolation(Aa,Xr,jr,qr,Ea,Ta,wa,new Xe),h.uv2=h.uv1),o&&(Np.fromBufferAttribute(o,a),Up.fromBufferAttribute(o,l),Ip.fromBufferAttribute(o,c),h.normal=bn.getInterpolation(Aa,Xr,jr,qr,Np,Up,Ip,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};bn.getNormal(Xr,jr,qr,u.normal),h.face=u}return h}class Cr extends qt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function v(x,m,f,g,_,y,C,T,A,P,S){const E=y/A,O=C/P,W=y/2,ee=C/2,L=T/2,z=A+1,q=P+1;let $=0,N=0;const F=new D;for(let B=0;B<q;B++){const Z=B*O-ee;for(let Q=0;Q<z;Q++){const j=Q*E-W;F[x]=j*g,F[m]=Z*_,F[f]=L,c.push(F.x,F.y,F.z),F[x]=0,F[m]=0,F[f]=T>0?1:-1,h.push(F.x,F.y,F.z),u.push(Q/A),u.push(1-B/P),$+=1}}for(let B=0;B<P;B++)for(let Z=0;Z<A;Z++){const Q=d+Z+z*B,j=d+Z+z*(B+1),K=d+(Z+1)+z*(B+1),ce=d+(Z+1)+z*B;l.push(Q,j,ce),l.push(j,K,ce),N+=6}a.addGroup(p,N,S),p+=N,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function TS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function t_(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const wS={clone:Ns,merge:Zt};var AS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=TS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class n_ extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends n_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,$r=1;class CS extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Yr,$r,e,n);r.layers=this.layers,this.add(r);const s=new gn(Yr,$r,e,n);s.layers=this.layers,this.add(s);const o=new gn(Yr,$r,e,n);o.layers=this.layers,this.add(o);const a=new gn(Yr,$r,e,n);a.layers=this.layers,this.add(a);const l=new gn(Yr,$r,e,n);l.layers=this.layers,this.add(l);const c=new gn(Yr,$r,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(u,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class i_ extends xn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Ps,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bS extends Rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(mo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Sr?Ot:Pn),this.texture=new i_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),s=new br({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:qi});s.uniforms.tEquirect.value=n;const o=new yt(r,s),a=n.minFilter;return n.minFilter===Uo&&(n.minFilter=Cn),new CS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Kc=new D,PS=new D,LS=new Ge;class ur{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Kc.subVectors(i,n).cross(PS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LS.getNormalMatrix(e),r=this.coplanarPoint(Kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Wo,ba=new D;class hd{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,o=new ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-f).normalize(),i[1].setComponents(l+s,d+c,m+p,y+f).normalize(),i[2].setComponents(l+o,d+h,m+v,y+g).normalize(),i[3].setComponents(l-o,d-h,m-v,y-g).normalize(),i[4].setComponents(l-a,d-u,m-x,y-_).normalize(),n===gi)i[5].setComponents(l+a,d+u,m+x,y+_).normalize();else if(n===Al)i[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function r_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function DS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const u=c.array,d=c.usage,p=u.byteLength,v=t.createBuffer();t.bindBuffer(h,v),t.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=t.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=t.SHORT;else if(u instanceof Uint32Array)x=t.UNSIGNED_INT;else if(u instanceof Int32Array)x=t.INT;else if(u instanceof Int8Array)x=t.BYTE;else if(u instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,u){const d=h.array,p=h._updateRange,v=h.updateRanges;if(t.bindBuffer(u,c),p.count===-1&&v.length===0&&t.bufferSubData(u,0,d),v.length!==0){for(let x=0,m=v.length;x<m;x++){const f=v[x];n?t.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):t.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,r(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class pd extends qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=n/l,p=[],v=[],x=[],m=[];for(let f=0;f<h;f++){const g=f*d-o;for(let _=0;_<c;_++){const y=_*u-s;v.push(y,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const _=g+c*f,y=g+c*(f+1),C=g+1+c*(f+1),T=g+1+c*f;p.push(_,y,T),p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pd(e.width,e.height,e.widthSegments,e.heightSegments)}}var NS=`#ifdef USE_ALPHAHASH
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
#endif`,FS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`#ifdef USE_ALPHATEST
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
#endif`,FM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
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
}`,Fe={alphahash_fragment:NS,alphahash_pars_fragment:US,alphamap_fragment:IS,alphamap_pars_fragment:FS,alphatest_fragment:OS,alphatest_pars_fragment:zS,aomap_fragment:kS,aomap_pars_fragment:BS,batching_pars_vertex:HS,batching_vertex:GS,begin_vertex:VS,beginnormal_vertex:WS,bsdfs:XS,iridescence_fragment:jS,bumpmap_pars_fragment:qS,clipping_planes_fragment:YS,clipping_planes_pars_fragment:$S,clipping_planes_pars_vertex:KS,clipping_planes_vertex:ZS,color_fragment:QS,color_pars_fragment:JS,color_pars_vertex:eM,color_vertex:tM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:rM,displacementmap_pars_vertex:sM,displacementmap_vertex:oM,emissivemap_fragment:aM,emissivemap_pars_fragment:lM,colorspace_fragment:cM,colorspace_pars_fragment:uM,envmap_fragment:fM,envmap_common_pars_fragment:dM,envmap_pars_fragment:hM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:AM,envmap_vertex:mM,fog_vertex:gM,fog_pars_vertex:_M,fog_fragment:vM,fog_pars_fragment:xM,gradientmap_pars_fragment:yM,lightmap_fragment:SM,lightmap_pars_fragment:MM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:TM,lights_pars_begin:wM,lights_toon_fragment:RM,lights_toon_pars_fragment:CM,lights_phong_fragment:bM,lights_phong_pars_fragment:PM,lights_physical_fragment:LM,lights_physical_pars_fragment:DM,lights_fragment_begin:NM,lights_fragment_maps:UM,lights_fragment_end:IM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:kM,map_fragment:BM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:VM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:XM,morphcolor_vertex:jM,morphnormal_vertex:qM,morphtarget_pars_vertex:YM,morphtarget_vertex:$M,normal_fragment_begin:KM,normal_fragment_maps:ZM,normal_pars_fragment:QM,normal_pars_vertex:JM,normal_vertex:eE,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,opaque_fragment:oE,packing:aE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:fE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:_E,skinbase_vertex:vE,skinning_pars_vertex:xE,skinning_vertex:yE,skinnormal_vertex:SE,specularmap_fragment:ME,specularmap_pars_fragment:EE,tonemapping_fragment:TE,tonemapping_pars_fragment:wE,transmission_fragment:AE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:bE,uv_vertex:PE,worldpos_vertex:LE,background_vert:DE,background_frag:NE,backgroundCube_vert:UE,backgroundCube_frag:IE,cube_vert:FE,cube_frag:OE,depth_vert:zE,depth_frag:kE,distanceRGBA_vert:BE,distanceRGBA_frag:HE,equirect_vert:GE,equirect_frag:VE,linedashed_vert:WE,linedashed_frag:XE,meshbasic_vert:jE,meshbasic_frag:qE,meshlambert_vert:YE,meshlambert_frag:$E,meshmatcap_vert:KE,meshmatcap_frag:ZE,meshnormal_vert:QE,meshnormal_frag:JE,meshphong_vert:e1,meshphong_frag:t1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:r1,meshtoon_frag:s1,points_vert:o1,points_frag:a1,shadow_vert:l1,shadow_frag:c1,sprite_vert:u1,sprite_frag:f1},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Qn={basic:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Zt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Zt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Zt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Zt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Zt([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Qn.physical={uniforms:Zt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Pa={r:0,b:0,g:0};function d1(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function v(m,f){let g=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?n:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===jl)?(h===void 0&&(h=new yt(new Cr(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:Ns(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Je.getTransfer(_.colorSpace)!==st,(u!==_||d!==_.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new yt(new pd(2,2),new br({name:"BackgroundMaterial",uniforms:Ns(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Je.getTransfer(_.colorSpace)!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(Pa,t_(t)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function h1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(L,z,q,$,N){let F=!1;if(o){const B=x($,q,z);c!==B&&(c=B,p(c.object)),F=f(L,$,q,N),F&&g(L,$,q,N)}else{const B=z.wireframe===!0;(c.geometry!==$.id||c.program!==q.id||c.wireframe!==B)&&(c.geometry=$.id,c.program=q.id,c.wireframe=B,F=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,P(L,z,q,$),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,z,q){const $=q.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let F=N[z.id];F===void 0&&(F={},N[z.id]=F);let B=F[$];return B===void 0&&(B=m(d()),F[$]=B),B}function m(L){const z=[],q=[],$=[];for(let N=0;N<r;N++)z[N]=0,q[N]=0,$[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:$,object:L,attributes:{},index:null}}function f(L,z,q,$){const N=c.attributes,F=z.attributes;let B=0;const Z=q.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const K=N[Q];let ce=F[Q];if(ce===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;B++}return c.attributesNum!==B||c.index!==$}function g(L,z,q,$){const N={},F=z.attributes;let B=0;const Z=q.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let K=F[Q];K===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),N[Q]=ce,B++}c.attributes=N,c.attributesNum=B,c.index=$}function _(){const L=c.newAttributes;for(let z=0,q=L.length;z<q;z++)L[z]=0}function y(L){C(L,0)}function C(L,z){const q=c.newAttributes,$=c.enabledAttributes,N=c.attributeDivisors;q[L]=1,$[L]===0&&(t.enableVertexAttribArray(L),$[L]=1),N[L]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),N[L]=z)}function T(){const L=c.newAttributes,z=c.enabledAttributes;for(let q=0,$=z.length;q<$;q++)z[q]!==L[q]&&(t.disableVertexAttribArray(q),z[q]=0)}function A(L,z,q,$,N,F,B){B===!0?t.vertexAttribIPointer(L,z,q,N,F):t.vertexAttribPointer(L,z,q,$,N,F)}function P(L,z,q,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const N=$.attributes,F=q.getAttributes(),B=z.defaultAttributeValues;for(const Z in F){const Q=F[Z];if(Q.location>=0){let j=N[Z];if(j===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const K=j.normalized,ce=j.itemSize,Y=n.get(j);if(Y===void 0)continue;const re=Y.buffer,Me=Y.type,de=Y.bytesPerElement,xe=i.isWebGL2===!0&&(Me===t.INT||Me===t.UNSIGNED_INT||j.gpuType===z0);if(j.isInterleavedBufferAttribute){const Ve=j.data,I=Ve.stride,It=j.offset;if(Ve.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Q.locationSize;Ee++)C(Q.location+Ee,Ve.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Ee=0;Ee<Q.locationSize;Ee++)y(Q.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Ee=0;Ee<Q.locationSize;Ee++)A(Q.location+Ee,ce/Q.locationSize,Me,K,I*de,(It+ce/Q.locationSize*Ee)*de,xe)}else{if(j.isInstancedBufferAttribute){for(let Ve=0;Ve<Q.locationSize;Ve++)C(Q.location+Ve,j.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ve=0;Ve<Q.locationSize;Ve++)y(Q.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Ve=0;Ve<Q.locationSize;Ve++)A(Q.location+Ve,ce/Q.locationSize,Me,K,ce*de,ce/Q.locationSize*Ve*de,xe)}}else if(B!==void 0){const K=B[Z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Q.location,K);break;case 3:t.vertexAttrib3fv(Q.location,K);break;case 4:t.vertexAttrib4fv(Q.location,K);break;default:t.vertexAttrib1fv(Q.location,K)}}}}T()}function S(){W();for(const L in a){const z=a[L];for(const q in z){const $=z[q];for(const N in $)v($[N].object),delete $[N];delete z[q]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const z=a[L.id];for(const q in z){const $=z[q];for(const N in $)v($[N].object),delete $[N];delete z[q]}delete a[L.id]}function O(L){for(const z in a){const q=a[z];if(q[L.id]===void 0)continue;const $=q[L.id];for(const N in $)v($[N].object),delete $[N];delete q[L.id]}}function W(){ee(),h=!0,c!==l&&(c=l,p(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:ee,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function p1(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,u){t.drawArrays(s,h,u),n.update(u,s,1)}function l(h,u,d){if(d===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,h,u,d),n.update(u,s,d)}function c(h,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d;v++)this.render(h[v],u[v]);else{p.multiDrawArraysWEBGL(s,h,0,u,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function m1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||e.has("OES_texture_float"),C=_&&y,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:T}}function g1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ur,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,p){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=t.get(u);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const g=s?0:i,_=g*4;let y=f.clippingState||null;l.value=y,y=h(v,d,_,p);for(let C=0;C!==_;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(u[_]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function _1(t){let e=new WeakMap;function n(o,a){return a===sf?o.mapping=Ps:a===of&&(o.mapping=Ls),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===sf||a===of)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class s_ extends n_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=4,Fp=[.125,.215,.35,.446,.526,.582],hr=20,Zc=new s_,Op=new qe;let Qc=null,Jc=0,eu=0;const fr=(1+Math.sqrt(5))/2,Kr=1/fr,zp=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,fr,Kr),new D(0,fr,-Kr),new D(Kr,0,fr),new D(-Kr,0,fr),new D(fr,Kr,0),new D(-fr,Kr,0)];class kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,eu),e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Io,format:Wn,colorSpace:Mi,depthBuffer:!1},r=Bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v1(s)),this._blurMaterial=x1(s,e,n)}return r}_compileMaterial(e){const n=new yt(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Op),h.toneMapping=Yi,h.autoClear=!1;const p=new go({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),v=new yt(new Cr,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Op),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;La(r,g*_,f>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ps||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;La(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zp[(r-1)%zp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new yt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hr-1),x=s/v,m=isFinite(s)?1+Math.floor(h*x):hr;m>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const f=[];let g=0;for(let A=0;A<hr;++A){const P=A/x,S=Math.exp(-P*P/2);f.push(S),A===0?g+=S:A<m&&(g+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const y=this._sizeLods[r],C=3*y*(r>_-fs?r-_+fs:0),T=4*(this._cubeSize-y);La(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(u,Zc)}}function v1(t){const e=[],n=[],i=[];let r=t;const s=t-fs+1+Fp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-fs?l=Fp[o-t+fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,x=3,m=2,f=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(S,x*v*T),_.set(d,m*v*T);const E=[T,T,T,T,T,T];y.set(E,f*v*T)}const C=new qt;C.setAttribute("position",new qn(g,x)),C.setAttribute("uv",new qn(_,m)),C.setAttribute("faceIndex",new qn(y,f)),e.push(C),r>fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bp(t,e,n){const i=new Rr(t,e,n);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function x1(t,e,n){const i=new Float32Array(hr),r=new D(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:md(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Hp(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Gp(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function md(){return`

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
	`}function y1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sf||l===of,h=l===Ps||l===Ls;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return n===null&&(n=new kp(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){n===null&&(n=new kp(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function S1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function M1(t,e,n,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(u){const d=u.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=u.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,v=u.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,y=g.length;_<y;_+=3){const C=g[_+0],T=g[_+1],A=g[_+2];d.push(C,T,T,A,A,C)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const C=_+0,T=_+1,A=_+2;d.push(C,T,T,A,A,C)}}else return;const m=new(Y0(d)?e_:J0)(d,1);m.version=x;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function E1(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function u(p,v,x){if(x===0)return;let m,f;if(r)m=t,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,v,a,p*l,x),n.update(v,s,x)}function d(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,v[f]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,x);let f=0;for(let g=0;g<x;g++)f+=v[g];n.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function T1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function w1(t,e){return t[0]-e[0]}function A1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function R1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let m=s.get(h);if(m===void 0||m.count!==x){let z=function(){ee.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const _=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),C===!0&&(S=3);let E=h.attributes.position.count*S,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const W=new Float32Array(E*O*4*x),ee=new Z0(W,E,O,x);ee.type=zi,ee.needsUpdate=!0;const L=S*4;for(let q=0;q<x;q++){const $=T[q],N=A[q],F=P[q],B=E*O*4*q;for(let Z=0;Z<$.count;Z++){const Q=Z*L;_===!0&&(o.fromBufferAttribute($,Z),W[B+Q+0]=o.x,W[B+Q+1]=o.y,W[B+Q+2]=o.z,W[B+Q+3]=0),y===!0&&(o.fromBufferAttribute(N,Z),W[B+Q+4]=o.x,W[B+Q+5]=o.y,W[B+Q+6]=o.z,W[B+Q+7]=0),C===!0&&(o.fromBufferAttribute(F,Z),W[B+Q+8]=o.x,W[B+Q+9]=o.y,W[B+Q+10]=o.z,W[B+Q+11]=F.itemSize===4?o.w:1)}}m={count:x,texture:ee,size:new Xe(E,O)},s.set(h,m),h.addEventListener("dispose",z)}let f=0;for(let _=0;_<d.length;_++)f+=d[_];const g=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(t,"morphTargetBaseInfluence",g),u.getUniforms().setValue(t,"morphTargetInfluences",d),u.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let x=i[h.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[h.id]=x}for(let y=0;y<v;y++){const C=x[y];C[0]=y,C[1]=d[y]}x.sort(A1);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(w1);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const C=a[y],T=C[0],A=C[1];T!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+y)!==m[T]&&h.setAttribute("morphTarget"+y,m[T]),f&&h.getAttribute("morphNormal"+y)!==f[T]&&h.setAttribute("morphNormal"+y,f[T]),r[y]=A,g+=A):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const _=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(t,"morphTargetBaseInfluence",_),u.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function C1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class o_ extends xn{constructor(e,n,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:yr,h!==yr&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===yr&&(i=Oi),i===void 0&&h===Ds&&(i=xr),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const a_=new xn,l_=new o_(1,1);l_.compareFunction=q0;const c_=new Z0,u_=new dS,f_=new i_,Vp=[],Wp=[],Xp=new Float32Array(16),jp=new Float32Array(9),qp=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vp[r];if(s===void 0&&(s=new Float32Array(r),Vp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kl(t,e){let n=Wp[e];n===void 0&&(n=new Int32Array(e),Wp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function b1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function P1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function N1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;qp.set(i),t.uniformMatrix2fv(this.addr,!1,qp),bt(n,i)}}function U1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;jp.set(i),t.uniformMatrix3fv(this.addr,!1,jp),bt(n,i)}}function I1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Xp.set(i),t.uniformMatrix4fv(this.addr,!1,Xp),bt(n,i)}}function F1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function B1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function W1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?l_:a_;n.setTexture2D(e||s,r)}function X1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||u_,r)}function j1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||f_,r)}function q1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||c_,r)}function Y1(t){switch(t){case 5126:return b1;case 35664:return P1;case 35665:return L1;case 35666:return D1;case 35674:return N1;case 35675:return U1;case 35676:return I1;case 5124:case 35670:return F1;case 35667:case 35671:return O1;case 35668:case 35672:return z1;case 35669:case 35673:return k1;case 5125:return B1;case 36294:return H1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return q1}}function $1(t,e){t.uniform1fv(this.addr,e)}function K1(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function Z1(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function Q1(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function J1(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eT(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tT(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nT(t,e){t.uniform1iv(this.addr,e)}function iT(t,e){t.uniform2iv(this.addr,e)}function rT(t,e){t.uniform3iv(this.addr,e)}function sT(t,e){t.uniform4iv(this.addr,e)}function oT(t,e){t.uniform1uiv(this.addr,e)}function aT(t,e){t.uniform2uiv(this.addr,e)}function lT(t,e){t.uniform3uiv(this.addr,e)}function cT(t,e){t.uniform4uiv(this.addr,e)}function uT(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a_,s[o])}function fT(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||u_,s[o])}function dT(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||f_,s[o])}function hT(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||c_,s[o])}function pT(t){switch(t){case 5126:return $1;case 35664:return K1;case 35665:return Z1;case 35666:return Q1;case 35674:return J1;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return aT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}class mT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Y1(n.type)}}class gT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pT(n.type)}}class _T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function Yp(t,e){t.seq.push(e),t.map[e.id]=e}function vT(t,e,n){const i=t.name,r=i.length;for(tu.lastIndex=0;;){const s=tu.exec(i),o=tu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yp(n,c===void 0?new mT(a,t,e):new gT(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new _T(a),Yp(n,u)),n=u}}}class Ka{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);vT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function $p(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xT=37297;let yT=0;function ST(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function MT(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===wl&&n===Tl?i="LinearDisplayP3ToLinearSRGB":e===Tl&&n===wl&&(i="LinearSRGBToLinearDisplayP3"),t){case Mi:case ql:return[i,"LinearTransferOETF"];case Ot:case ud:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ST(t.getShaderSource(e),o)}else return r}function ET(t,e){const n=MT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function TT(t,e){let n;switch(e){case Ey:n="Linear";break;case Ty:n="Reinhard";break;case wy:n="OptimizedCineon";break;case F0:n="ACESFilmic";break;case Ry:n="AgX";break;case Ay:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function AT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function RT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ds(t){return t!==""}function Zp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(t){return t.replace(bT,LT)}const PT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function LT(t,e){let n=Fe[e];if(n===void 0){const i=PT.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ff(n)}const DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(t){return t.replace(DT,NT)}function NT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function em(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Zx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function IT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function OT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case I0:e="ENVMAP_BLENDING_MULTIPLY";break;case Sy:e="ENVMAP_BLENDING_MIX";break;case My:e="ENVMAP_BLENDING_ADD";break}return e}function zT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UT(n),c=IT(n),h=FT(n),u=OT(n),d=zT(n),p=n.isWebGL2?"":wT(n),v=AT(n),x=RT(s),m=r.createProgram();let f,g,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ds).join(`
`),f.length>0&&(f+=`
`),g=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ds).join(`
`),g.length>0&&(g+=`
`)):(f=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),g=[p,em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Yi?TT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,ET("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ds).join(`
`)),o=ff(o),o=Zp(o,n),o=Qp(o,n),a=ff(a),a=Zp(a,n),a=Qp(a,n),o=Jp(o),a=Jp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+f+o,C=_+g+a,T=$p(r,r.VERTEX_SHADER,y),A=$p(r,r.FRAGMENT_SHADER,C);r.attachShader(m,T),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(W){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(T).trim(),z=r.getShaderInfoLog(A).trim();let q=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,T,A);else{const N=Kp(r,T,"vertex"),F=Kp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+N+`
`+F)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(L===""||z==="")&&($=!1);$&&(W.diagnostics={runnable:q,programLog:ee,vertexShader:{log:L,prefix:f},fragmentShader:{log:z,prefix:g}})}r.deleteShader(T),r.deleteShader(A),S=new Ka(r,m),E=CT(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(m,xT)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}let BT=0;class HT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new GT(e),n.set(e,i)),i}}class GT{constructor(e){this.id=BT++,this.code=e,this.usedTimes=0}}function VT(t,e,n,i,r,s,o){const a=new dd,l=new HT,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,E,O,W,ee){const L=W.fog,z=ee.geometry,q=S.isMeshStandardMaterial?W.environment:null,$=(S.isMeshStandardMaterial?n:e).get(S.envMap||q),N=$&&$.mapping===jl?$.image.height:null,F=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const B=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Z=B!==void 0?B.length:0;let Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let j,K,ce,Y;if(F){const Yt=Qn[F];j=Yt.vertexShader,K=Yt.fragmentShader}else j=S.vertexShader,K=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);const re=t.getRenderTarget(),Me=ee.isInstancedMesh===!0,de=ee.isBatchedMesh===!0,xe=!!S.map,Ve=!!S.matcap,I=!!$,It=!!S.aoMap,Ee=!!S.lightMap,be=!!S.bumpMap,ve=!!S.normalMap,ut=!!S.displacementMap,Oe=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,H=S.anisotropy>0,se=S.clearcoat>0,ne=S.iridescence>0,oe=S.sheen>0,ye=S.transmission>0,he=H&&!!S.anisotropyMap,ge=se&&!!S.clearcoatMap,Ce=se&&!!S.clearcoatNormalMap,ze=se&&!!S.clearcoatRoughnessMap,te=ne&&!!S.iridescenceMap,Qe=ne&&!!S.iridescenceThicknessMap,We=oe&&!!S.sheenColorMap,De=oe&&!!S.sheenRoughnessMap,Te=!!S.specularMap,_e=!!S.specularColorMap,Ie=!!S.specularIntensityMap,Ke=ye&&!!S.transmissionMap,gt=ye&&!!S.thicknessMap,Be=!!S.gradientMap,ae=!!S.alphaMap,b=S.alphaTest>0,ue=!!S.alphaHash,fe=!!S.extensions,Pe=!!z.attributes.uv1,Ae=!!z.attributes.uv2,et=!!z.attributes.uv3;let tt=Yi;return S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:h,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:K,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:de,instancing:Me,instancingColor:Me&&ee.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Mi,map:xe,matcap:Ve,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:N,aoMap:It,lightMap:Ee,bumpMap:be,normalMap:ve,displacementMap:d&&ut,emissiveMap:Oe,normalMapObjectSpace:ve&&S.normalMapType===ky,normalMapTangentSpace:ve&&S.normalMapType===j0,metalnessMap:R,roughnessMap:M,anisotropy:H,anisotropyMap:he,clearcoat:se,clearcoatMap:ge,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ze,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:Qe,sheen:oe,sheenColorMap:We,sheenRoughnessMap:De,specularMap:Te,specularColorMap:_e,specularIntensityMap:Ie,transmission:ye,transmissionMap:Ke,thicknessMap:gt,gradientMap:Be,opaque:S.transparent===!1&&S.blending===ys,alphaMap:ae,alphaTest:b,alphaHash:ue,combine:S.combine,mapUv:xe&&x(S.map.channel),aoMapUv:It&&x(S.aoMap.channel),lightMapUv:Ee&&x(S.lightMap.channel),bumpMapUv:be&&x(S.bumpMap.channel),normalMapUv:ve&&x(S.normalMap.channel),displacementMapUv:ut&&x(S.displacementMap.channel),emissiveMapUv:Oe&&x(S.emissiveMap.channel),metalnessMapUv:R&&x(S.metalnessMap.channel),roughnessMapUv:M&&x(S.roughnessMap.channel),anisotropyMapUv:he&&x(S.anisotropyMap.channel),clearcoatMapUv:ge&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(S.sheenRoughnessMap.channel),specularMapUv:Te&&x(S.specularMap.channel),specularColorMapUv:_e&&x(S.specularColorMap.channel),specularIntensityMapUv:Ie&&x(S.specularIntensityMap.channel),transmissionMapUv:Ke&&x(S.transmissionMap.channel),thicknessMapUv:gt&&x(S.thicknessMap.channel),alphaMapUv:ae&&x(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ae,vertexUv3s:et,pointsUvs:ee.isPoints===!0&&!!z.attributes.uv&&(xe||ae),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:fe&&S.extensions.derivatives===!0,extensionFragDepth:fe&&S.extensions.fragDepth===!0,extensionDrawBuffers:fe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)E.push(O),E.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(g(E,S),_(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function g(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function _(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=v[S.type];let O;if(E){const W=Qn[E];O=wS.clone(W.uniforms)}else O=S.uniforms;return O}function C(S,E){let O;for(let W=0,ee=c.length;W<ee;W++){const L=c[W];if(L.cacheKey===E){O=L,++O.usedTimes;break}}return O===void 0&&(O=new kT(t,E,S,s),c.push(O)),O}function T(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:P}}function WT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function XT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u,d,p,v,x,m){let f=t[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},t[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function a(u,d,p,v,x,m){const f=o(u,d,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(u,d,p,v,x,m){const f=o(u,d,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(u,d){n.length>1&&n.sort(u||XT),i.length>1&&i.sort(d||tm),r.length>1&&r.sort(d||tm)}function h(){for(let u=e,d=t.length;u<d;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function jT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new nm,t.set(i,[o])):r>=s.length?(o=new nm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new qe};break;case"SpotLight":n={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function YT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $T=0;function KT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZT(t,e){const n=new qT,i=YT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new D);const s=new D,o=new pt,a=new pt;function l(h,u){let d=0,p=0,v=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let x=0,m=0,f=0,g=0,_=0,y=0,C=0,T=0,A=0,P=0,S=0;h.sort(KT);const E=u===!0?Math.PI:1;for(let W=0,ee=h.length;W<ee;W++){const L=h[W],z=L.color,q=L.intensity,$=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=z.r*q*E,p+=z.g*q*E,v+=z.b*q*E;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],q);S++}else if(L.isDirectionalLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const B=L.shadow,Z=i.get(L);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=N,r.directionalShadowMatrix[x]=L.shadow.matrix,y++}r.directional[x]=F,x++}else if(L.isSpotLight){const F=n.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(z).multiplyScalar(q*E),F.distance=$,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[f]=F;const B=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,B.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=B.matrix,L.castShadow){const Z=i.get(L);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,r.spotShadow[f]=Z,r.spotShadowMap[f]=N,T++}f++}else if(L.isRectAreaLight){const F=n.get(L);F.color.copy(z).multiplyScalar(q),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=F,g++}else if(L.isPointLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),F.distance=L.distance,F.decay=L.decay,L.castShadow){const B=L.shadow,Z=i.get(L);Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=L.shadow.matrix,C++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=n.get(L);F.skyColor.copy(L.color).multiplyScalar(q*E),F.groundColor.copy(L.groundColor).multiplyScalar(q*E),r.hemi[_]=F,_++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const O=r.hash;(O.directionalLength!==x||O.pointLength!==m||O.spotLength!==f||O.rectAreaLength!==g||O.hemiLength!==_||O.numDirectionalShadows!==y||O.numPointShadows!==C||O.numSpotShadows!==T||O.numSpotMaps!==A||O.numLightProbes!==S)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=g,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=T+A-P,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,O.directionalLength=x,O.pointLength=m,O.spotLength=f,O.rectAreaLength=g,O.hemiLength=_,O.numDirectionalShadows=y,O.numPointShadows=C,O.numSpotShadows=T,O.numSpotMaps=A,O.numLightProbes=S,r.version=$T++)}function c(h,u){let d=0,p=0,v=0,x=0,m=0;const f=u.matrixWorldInverse;for(let g=0,_=h.length;g<_;g++){const y=h[g];if(y.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),d++}else if(y.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function im(t,e){const n=new ZT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function l(u){n.setup(i,u)}function c(u){n.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function QT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new im(t,e),n.set(s,[l])):o>=a.length?(l=new im(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class JT extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ew extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tw=`void main() {
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
}`;function iw(t,e,n){let i=new hd;const r=new Xe,s=new Xe,o=new ct,a=new JT({depthPacking:zy}),l=new ew,c={},h=n.maxTextureSize,u={[Qi]:fn,[fn]:Qi,[ei]:ei},d=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:tw,fragmentShader:nw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new qt;v.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new yt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let f=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),E=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),W=t.state;W.setBlending(qi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ee=f!==fi&&this.type===fi,L=f===fi&&this.type!==fi;for(let z=0,q=T.length;z<q;z++){const $=T[z],N=$.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const F=N.getFrameExtents();if(r.multiply(F),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/F.x),r.x=s.x*F.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/F.y),r.y=s.y*F.y,N.mapSize.y=s.y)),N.map===null||ee===!0||L===!0){const Z=this.type!==fi?{minFilter:Jt,magFilter:Jt}:{};N.map!==null&&N.map.dispose(),N.map=new Rr(r.x,r.y,Z),N.map.texture.name=$.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const B=N.getViewportCount();for(let Z=0;Z<B;Z++){const Q=N.getViewport(Z);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),W.viewport(o),N.updateMatrices($,Z),i=N.getFrustum(),y(A,P,N.camera,$,this.type)}N.isPointLightShadow!==!0&&this.type===fi&&g(N,P),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(S,E,O)};function g(T,A){const P=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Rr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,p,x,null)}function _(T,A,P,S){let E=null;const O=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)E=O;else if(E=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=E.uuid,ee=A.uuid;let L=c[W];L===void 0&&(L={},c[W]=L);let z=L[ee];z===void 0&&(z=E.clone(),L[ee]=z,A.addEventListener("dispose",C)),E=z}if(E.visible=A.visible,E.wireframe=A.wireframe,S===fi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=t.properties.get(E);W.light=P}return E}function y(T,A,P,S,E){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===fi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const ee=e.update(T),L=T.material;if(Array.isArray(L)){const z=ee.groups;for(let q=0,$=z.length;q<$;q++){const N=z[q],F=L[N.materialIndex];if(F&&F.visible){const B=_(T,F,S,E);T.onBeforeShadow(t,T,A,P,ee,B,N),t.renderBufferDirect(P,null,ee,B,T,N),T.onAfterShadow(t,T,A,P,ee,B,N)}}}else if(L.visible){const z=_(T,L,S,E);T.onBeforeShadow(t,T,A,P,ee,z,null),t.renderBufferDirect(P,null,ee,z,T,null),T.onAfterShadow(t,T,A,P,ee,z,null)}}const W=T.children;for(let ee=0,L=W.length;ee<L;ee++)y(W[ee],A,P,S,E)}function C(T){T.target.removeEventListener("dispose",C);for(const P in c){const S=c[P],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function rw(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const ue=new ct;let fe=null;const Pe=new ct(0,0,0,0);return{setMask:function(Ae){fe!==Ae&&!b&&(t.colorMask(Ae,Ae,Ae,Ae),fe=Ae)},setLocked:function(Ae){b=Ae},setClear:function(Ae,et,tt,Pt,Yt){Yt===!0&&(Ae*=Pt,et*=Pt,tt*=Pt),ue.set(Ae,et,tt,Pt),Pe.equals(ue)===!1&&(t.clearColor(Ae,et,tt,Pt),Pe.copy(ue))},reset:function(){b=!1,fe=null,Pe.set(-1,0,0,0)}}}function s(){let b=!1,ue=null,fe=null,Pe=null;return{setTest:function(Ae){Ae?de(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(Ae){ue!==Ae&&!b&&(t.depthMask(Ae),ue=Ae)},setFunc:function(Ae){if(fe!==Ae){switch(Ae){case py:t.depthFunc(t.NEVER);break;case my:t.depthFunc(t.ALWAYS);break;case gy:t.depthFunc(t.LESS);break;case Ml:t.depthFunc(t.LEQUAL);break;case _y:t.depthFunc(t.EQUAL);break;case vy:t.depthFunc(t.GEQUAL);break;case xy:t.depthFunc(t.GREATER);break;case yy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=Ae}},setLocked:function(Ae){b=Ae},setClear:function(Ae){Pe!==Ae&&(t.clearDepth(Ae),Pe=Ae)},reset:function(){b=!1,ue=null,fe=null,Pe=null}}}function o(){let b=!1,ue=null,fe=null,Pe=null,Ae=null,et=null,tt=null,Pt=null,Yt=null;return{setTest:function(nt){b||(nt?de(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!b&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,$t,$n){(fe!==nt||Pe!==$t||Ae!==$n)&&(t.stencilFunc(nt,$t,$n),fe=nt,Pe=$t,Ae=$n)},setOp:function(nt,$t,$n){(et!==nt||tt!==$t||Pt!==$n)&&(t.stencilOp(nt,$t,$n),et=nt,tt=$t,Pt=$n)},setLocked:function(nt){b=nt},setClear:function(nt){Yt!==nt&&(t.clearStencil(nt),Yt=nt)},reset:function(){b=!1,ue=null,fe=null,Pe=null,Ae=null,et=null,tt=null,Pt=null,Yt=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},v=new WeakMap,x=[],m=null,f=!1,g=null,_=null,y=null,C=null,T=null,A=null,P=null,S=new qe(0,0,0),E=0,O=!1,W=null,ee=null,L=null,z=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=F>=1):B.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=F>=2);let Z=null,Q={};const j=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ce=new ct().fromArray(j),Y=new ct().fromArray(K);function re(b,ue,fe,Pe){const Ae=new Uint8Array(4),et=t.createTexture();t.bindTexture(b,et),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<fe;tt++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(ue+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return et}const Me={};Me[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Me[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(t.DEPTH_TEST),l.setFunc(Ml),Oe(!1),R(zh),de(t.CULL_FACE),ve(qi);function de(b){d[b]!==!0&&(t.enable(b),d[b]=!0)}function xe(b){d[b]!==!1&&(t.disable(b),d[b]=!1)}function Ve(b,ue){return p[b]!==ue?(t.bindFramebuffer(b,ue),p[b]=ue,i&&(b===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ue),b===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function I(b,ue){let fe=x,Pe=!1;if(b)if(fe=v.get(ue),fe===void 0&&(fe=[],v.set(ue,fe)),b.isWebGLMultipleRenderTargets){const Ae=b.texture;if(fe.length!==Ae.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let et=0,tt=Ae.length;et<tt;et++)fe[et]=t.COLOR_ATTACHMENT0+et;fe.length=Ae.length,Pe=!0}}else fe[0]!==t.COLOR_ATTACHMENT0&&(fe[0]=t.COLOR_ATTACHMENT0,Pe=!0);else fe[0]!==t.BACK&&(fe[0]=t.BACK,Pe=!0);Pe&&(n.isWebGL2?t.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function It(b){return m!==b?(t.useProgram(b),m=b,!0):!1}const Ee={[dr]:t.FUNC_ADD,[Jx]:t.FUNC_SUBTRACT,[ey]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[Gh]=t.MIN,Ee[Vh]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Ee[Gh]=b.MIN_EXT,Ee[Vh]=b.MAX_EXT)}const be={[ty]:t.ZERO,[ny]:t.ONE,[iy]:t.SRC_COLOR,[nf]:t.SRC_ALPHA,[cy]:t.SRC_ALPHA_SATURATE,[ay]:t.DST_COLOR,[sy]:t.DST_ALPHA,[ry]:t.ONE_MINUS_SRC_COLOR,[rf]:t.ONE_MINUS_SRC_ALPHA,[ly]:t.ONE_MINUS_DST_COLOR,[oy]:t.ONE_MINUS_DST_ALPHA,[uy]:t.CONSTANT_COLOR,[fy]:t.ONE_MINUS_CONSTANT_COLOR,[dy]:t.CONSTANT_ALPHA,[hy]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(b,ue,fe,Pe,Ae,et,tt,Pt,Yt,nt){if(b===qi){f===!0&&(xe(t.BLEND),f=!1);return}if(f===!1&&(de(t.BLEND),f=!0),b!==Qx){if(b!==g||nt!==O){if((_!==dr||T!==dr)&&(t.blendEquation(t.FUNC_ADD),_=dr,T=dr),nt)switch(b){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kh:t.blendFunc(t.ONE,t.ONE);break;case Bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,C=null,A=null,P=null,S.set(0,0,0),E=0,g=b,O=nt}return}Ae=Ae||ue,et=et||fe,tt=tt||Pe,(ue!==_||Ae!==T)&&(t.blendEquationSeparate(Ee[ue],Ee[Ae]),_=ue,T=Ae),(fe!==y||Pe!==C||et!==A||tt!==P)&&(t.blendFuncSeparate(be[fe],be[Pe],be[et],be[tt]),y=fe,C=Pe,A=et,P=tt),(Pt.equals(S)===!1||Yt!==E)&&(t.blendColor(Pt.r,Pt.g,Pt.b,Yt),S.copy(Pt),E=Yt),g=b,O=!1}function ut(b,ue){b.side===ei?xe(t.CULL_FACE):de(t.CULL_FACE);let fe=b.side===fn;ue&&(fe=!fe),Oe(fe),b.blending===ys&&b.transparent===!1?ve(qi):ve(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const Pe=b.stencilWrite;c.setTest(Pe),Pe&&(c.setMask(b.stencilWriteMask),c.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),c.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),H(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(b){W!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),W=b)}function R(b){b!==$x?(de(t.CULL_FACE),b!==ee&&(b===zh?t.cullFace(t.BACK):b===Kx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),ee=b}function M(b){b!==L&&(N&&t.lineWidth(b),L=b)}function H(b,ue,fe){b?(de(t.POLYGON_OFFSET_FILL),(z!==ue||q!==fe)&&(t.polygonOffset(ue,fe),z=ue,q=fe)):xe(t.POLYGON_OFFSET_FILL)}function se(b){b?de(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function ne(b){b===void 0&&(b=t.TEXTURE0+$-1),Z!==b&&(t.activeTexture(b),Z=b)}function oe(b,ue,fe){fe===void 0&&(Z===null?fe=t.TEXTURE0+$-1:fe=Z);let Pe=Q[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},Q[fe]=Pe),(Pe.type!==b||Pe.texture!==ue)&&(Z!==fe&&(t.activeTexture(fe),Z=fe),t.bindTexture(b,ue||Me[b]),Pe.type=b,Pe.texture=ue)}function ye(){const b=Q[Z];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ie(b){ce.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),ce.copy(b))}function Ke(b){Y.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),Y.copy(b))}function gt(b,ue){let fe=u.get(ue);fe===void 0&&(fe=new WeakMap,u.set(ue,fe));let Pe=fe.get(b);Pe===void 0&&(Pe=t.getUniformBlockIndex(ue,b.name),fe.set(b,Pe))}function Be(b,ue){const Pe=u.get(ue).get(b);h.get(ue)!==Pe&&(t.uniformBlockBinding(ue,Pe,b.__bindingPointIndex),h.set(ue,Pe))}function ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Z=null,Q={},p={},v=new WeakMap,x=[],m=null,f=!1,g=null,_=null,y=null,C=null,T=null,A=null,P=null,S=new qe(0,0,0),E=0,O=!1,W=null,ee=null,L=null,z=null,q=null,ce.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:de,disable:xe,bindFramebuffer:Ve,drawBuffers:I,useProgram:It,setBlending:ve,setMaterial:ut,setFlipSided:Oe,setCullFace:R,setLineWidth:M,setPolygonOffset:H,setScissorTest:se,activeTexture:ne,bindTexture:oe,unbindTexture:ye,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:Te,texImage3D:_e,updateUBOMapping:gt,uniformBlockBinding:Be,texStorage2D:We,texStorage3D:De,texSubImage2D:Ce,texSubImage3D:ze,compressedTexSubImage2D:te,compressedTexSubImage3D:Qe,scissor:Ie,viewport:Ke,reset:ae}}function sw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return p?new OffscreenCanvas(R,M):Cl("canvas")}function x(R,M,H,se){let ne=1;if((R.width>se||R.height>se)&&(ne=se/Math.max(R.width,R.height)),ne<1||M===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){const oe=M?Rl:Math.floor,ye=oe(ne*R.width),he=oe(ne*R.height);u===void 0&&(u=v(ye,he));const ge=H?v(ye,he):u;return ge.width=ye,ge.height=he,ge.getContext("2d").drawImage(R,0,0,ye,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+he+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return uf(R.width)&&uf(R.height)}function f(R){return a?!1:R.wrapS!==Vn||R.wrapT!==Vn||R.minFilter!==Jt&&R.minFilter!==Cn}function g(R,M){return R.generateMipmaps&&M&&R.minFilter!==Jt&&R.minFilter!==Cn}function _(R){t.generateMipmap(R)}function y(R,M,H,se,ne=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=M;if(M===t.RED&&(H===t.FLOAT&&(oe=t.R32F),H===t.HALF_FLOAT&&(oe=t.R16F),H===t.UNSIGNED_BYTE&&(oe=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(oe=t.R8UI),H===t.UNSIGNED_SHORT&&(oe=t.R16UI),H===t.UNSIGNED_INT&&(oe=t.R32UI),H===t.BYTE&&(oe=t.R8I),H===t.SHORT&&(oe=t.R16I),H===t.INT&&(oe=t.R32I)),M===t.RG&&(H===t.FLOAT&&(oe=t.RG32F),H===t.HALF_FLOAT&&(oe=t.RG16F),H===t.UNSIGNED_BYTE&&(oe=t.RG8)),M===t.RGBA){const ye=ne?El:Je.getTransfer(se);H===t.FLOAT&&(oe=t.RGBA32F),H===t.HALF_FLOAT&&(oe=t.RGBA16F),H===t.UNSIGNED_BYTE&&(oe=ye===st?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(R,M,H){return g(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){return R===Jt||R===Wh||R===Cc?t.NEAREST:t.LINEAR}function A(R){const M=R.target;M.removeEventListener("dispose",A),S(M),M.isVideoTexture&&h.delete(M)}function P(R){const M=R.target;M.removeEventListener("dispose",P),O(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,se=d.get(H);if(se){const ne=se[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(R),Object.keys(se).length===0&&d.delete(H)}i.remove(R)}function E(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const H=R.source,se=d.get(H);delete se[M.__cacheKey],o.memory.textures--}function O(R){const M=R.texture,H=i.get(R),se=i.get(M);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(H.__webglFramebuffer[ne]))for(let oe=0;oe<H.__webglFramebuffer[ne].length;oe++)t.deleteFramebuffer(H.__webglFramebuffer[ne][oe]);else t.deleteFramebuffer(H.__webglFramebuffer[ne]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ne])}else{if(Array.isArray(H.__webglFramebuffer))for(let ne=0;ne<H.__webglFramebuffer.length;ne++)t.deleteFramebuffer(H.__webglFramebuffer[ne]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,oe=M.length;ne<oe;ne++){const ye=i.get(M[ne]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(R)}let W=0;function ee(){W=0}function L(){const R=W;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),W+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const H=i.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,R,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function $(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ce(H,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function N(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ce(H,R,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function F(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Y(H,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const B={[af]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[lf]:t.MIRRORED_REPEAT},Z={[Jt]:t.NEAREST,[Wh]:t.NEAREST_MIPMAP_NEAREST,[Cc]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[Cy]:t.LINEAR_MIPMAP_NEAREST,[Uo]:t.LINEAR_MIPMAP_LINEAR},Q={[By]:t.NEVER,[jy]:t.ALWAYS,[Hy]:t.LESS,[q0]:t.LEQUAL,[Gy]:t.EQUAL,[Xy]:t.GEQUAL,[Vy]:t.GREATER,[Wy]:t.NOTEQUAL};function j(R,M,H){if(H?(t.texParameteri(R,t.TEXTURE_WRAP_S,B[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,B[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,B[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Vn||M.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Jt&&M.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Jt||M.minFilter!==Cc&&M.minFilter!==Uo||M.type===zi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Io&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function K(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const se=M.source;let ne=d.get(se);ne===void 0&&(ne={},d.set(se,ne));const oe=z(M);if(oe!==R.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[oe].usedTimes++;const ye=ne[R.__cacheKey];ye!==void 0&&(ne[R.__cacheKey].usedTimes--,ye.usedTimes===0&&E(M)),R.__cacheKey=oe,R.__webglTexture=ne[oe].texture}return H}function ce(R,M,H){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const ne=K(R,M),oe=M.source;n.bindTexture(se,R.__webglTexture,t.TEXTURE0+H);const ye=i.get(oe);if(oe.version!==ye.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const he=Je.getPrimaries(Je.workingColorSpace),ge=M.colorSpace===Pn?null:Je.getPrimaries(M.colorSpace),Ce=M.colorSpace===Pn||he===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ze=f(M)&&m(M.image)===!1;let te=x(M.image,ze,!1,r.maxTextureSize);te=Oe(M,te);const Qe=m(te)||a,We=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),Te=y(M.internalFormat,We,De,M.colorSpace,M.isVideoTexture);j(se,M,Qe);let _e;const Ie=M.mipmaps,Ke=a&&M.isVideoTexture!==!0&&Te!==W0,gt=ye.__version===void 0||ne===!0,Be=C(M,te,Qe);if(M.isDepthTexture)Te=t.DEPTH_COMPONENT,a?M.type===zi?Te=t.DEPTH_COMPONENT32F:M.type===Oi?Te=t.DEPTH_COMPONENT24:M.type===xr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:M.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===yr&&Te===t.DEPTH_COMPONENT&&M.type!==cd&&M.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Oi,De=s.convert(M.type)),M.format===Ds&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,M.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=xr,De=s.convert(M.type))),gt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,Te,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Te,te.width,te.height,0,We,De,null));else if(M.isDataTexture)if(Ie.length>0&&Qe){Ke&&gt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,Ie[0].width,Ie[0].height);for(let ae=0,b=Ie.length;ae<b;ae++)_e=Ie[ae],Ke?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,_e.width,_e.height,We,De,_e.data):n.texImage2D(t.TEXTURE_2D,ae,Te,_e.width,_e.height,0,We,De,_e.data);M.generateMipmaps=!1}else Ke?(gt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,We,De,te.data)):n.texImage2D(t.TEXTURE_2D,0,Te,te.width,te.height,0,We,De,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Te,Ie[0].width,Ie[0].height,te.depth);for(let ae=0,b=Ie.length;ae<b;ae++)_e=Ie[ae],M.format!==Wn?We!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,te.depth,We,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Te,_e.width,_e.height,te.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,te.depth,We,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Te,_e.width,_e.height,te.depth,0,We,De,_e.data)}else{Ke&&gt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,Ie[0].width,Ie[0].height);for(let ae=0,b=Ie.length;ae<b;ae++)_e=Ie[ae],M.format!==Wn?We!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,_e.width,_e.height,We,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,_e.width,_e.height,We,De,_e.data):n.texImage2D(t.TEXTURE_2D,ae,Te,_e.width,_e.height,0,We,De,_e.data)}else if(M.isDataArrayTexture)Ke?(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Te,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,We,De,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,We,De,te.data);else if(M.isData3DTexture)Ke?(gt&&n.texStorage3D(t.TEXTURE_3D,Be,Te,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,We,De,te.data)):n.texImage3D(t.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,We,De,te.data);else if(M.isFramebufferTexture){if(gt)if(Ke)n.texStorage2D(t.TEXTURE_2D,Be,Te,te.width,te.height);else{let ae=te.width,b=te.height;for(let ue=0;ue<Be;ue++)n.texImage2D(t.TEXTURE_2D,ue,Te,ae,b,0,We,De,null),ae>>=1,b>>=1}}else if(Ie.length>0&&Qe){Ke&&gt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,Ie[0].width,Ie[0].height);for(let ae=0,b=Ie.length;ae<b;ae++)_e=Ie[ae],Ke?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,We,De,_e):n.texImage2D(t.TEXTURE_2D,ae,Te,We,De,_e);M.generateMipmaps=!1}else Ke?(gt&&n.texStorage2D(t.TEXTURE_2D,Be,Te,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,De,te)):n.texImage2D(t.TEXTURE_2D,0,Te,We,De,te);g(M,Qe)&&_(se),ye.__version=oe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Y(R,M,H){if(M.image.length!==6)return;const se=K(R,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const oe=i.get(ne);if(ne.version!==oe.__version||se===!0){n.activeTexture(t.TEXTURE0+H);const ye=Je.getPrimaries(Je.workingColorSpace),he=M.colorSpace===Pn?null:Je.getPrimaries(M.colorSpace),ge=M.colorSpace===Pn||ye===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,te=[];for(let ae=0;ae<6;ae++)!Ce&&!ze?te[ae]=x(M.image[ae],!1,!0,r.maxCubemapSize):te[ae]=ze?M.image[ae].image:M.image[ae],te[ae]=Oe(M,te[ae]);const Qe=te[0],We=m(Qe)||a,De=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),_e=y(M.internalFormat,De,Te,M.colorSpace),Ie=a&&M.isVideoTexture!==!0,Ke=oe.__version===void 0||se===!0;let gt=C(M,Qe,We);j(t.TEXTURE_CUBE_MAP,M,We);let Be;if(Ce){Ie&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,gt,_e,Qe.width,Qe.height);for(let ae=0;ae<6;ae++){Be=te[ae].mipmaps;for(let b=0;b<Be.length;b++){const ue=Be[b];M.format!==Wn?De!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b,0,0,ue.width,ue.height,De,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b,0,0,ue.width,ue.height,De,Te,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b,_e,ue.width,ue.height,0,De,Te,ue.data)}}}else{Be=M.mipmaps,Ie&&Ke&&(Be.length>0&&gt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,gt,_e,te[0].width,te[0].height));for(let ae=0;ae<6;ae++)if(ze){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,te[ae].width,te[ae].height,De,Te,te[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,te[ae].width,te[ae].height,0,De,Te,te[ae].data);for(let b=0;b<Be.length;b++){const fe=Be[b].image[ae].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b+1,0,0,fe.width,fe.height,De,Te,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b+1,_e,fe.width,fe.height,0,De,Te,fe.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Te,te[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,De,Te,te[ae]);for(let b=0;b<Be.length;b++){const ue=Be[b];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b+1,0,0,De,Te,ue.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,b+1,_e,De,Te,ue.image[ae])}}}g(M,We)&&_(t.TEXTURE_CUBE_MAP),oe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,H,se,ne,oe){const ye=s.convert(H.format,H.colorSpace),he=s.convert(H.type),ge=y(H.internalFormat,ye,he,H.colorSpace);if(!i.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>oe),te=Math.max(1,M.height>>oe);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,oe,ge,ze,te,M.depth,0,ye,he,null):n.texImage2D(ne,oe,ge,ze,te,0,ye,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,i.get(H).__webglTexture,0,be(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,i.get(H).__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(R,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let se=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ve(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===zi?se=t.DEPTH_COMPONENT32F:ne.type===Oi&&(se=t.DEPTH_COMPONENT24));const oe=be(M);ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,se,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,se,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const se=be(M);H&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const se=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<se.length;ne++){const oe=se[ne],ye=s.convert(oe.format,oe.colorSpace),he=s.convert(oe.type),ge=y(oe.internalFormat,ye,he,oe.colorSpace),Ce=be(M);H&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ge,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,ne=be(M);if(M.depthTexture.format===yr)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===Ds)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function xe(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");de(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]=t.createRenderbuffer(),Me(M.__webglDepthbuffer[se],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Me(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(R,M,H){const se=i.get(R);M!==void 0&&re(se.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&xe(R)}function I(R){const M=R.texture,H=i.get(R),se=i.get(M);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,o.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,ye=m(R)||a;if(ne){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let ge=0;ge<M.mipmaps.length;ge++)H.__webglFramebuffer[he][ge]=t.createFramebuffer()}else H.__webglFramebuffer[he]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)H.__webglFramebuffer[he]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(oe)if(r.drawBuffers){const he=R.texture;for(let ge=0,Ce=he.length;ge<Ce;ge++){const ze=i.get(he[ge]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ve(R)===!1){const he=oe?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const Ce=he[ge];H.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ge]);const ze=s.convert(Ce.format,Ce.colorSpace),te=s.convert(Ce.type),Qe=y(Ce.internalFormat,ze,te,Ce.colorSpace,R.isXRRenderTarget===!0),We=be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Qe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,H.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),j(t.TEXTURE_CUBE_MAP,M,ye);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)re(H.__webglFramebuffer[he][ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else re(H.__webglFramebuffer[he],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(M,ye)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){const he=R.texture;for(let ge=0,Ce=he.length;ge<Ce;ge++){const ze=he[ge],te=i.get(ze);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),j(t.TEXTURE_2D,ze,ye),re(H.__webglFramebuffer,R,ze,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),g(ze,ye)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,se.__webglTexture),j(he,M,ye),a&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)re(H.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,he,ge);else re(H.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,he,0);g(M,ye)&&_(he),n.unbindTexture()}R.depthBuffer&&xe(R)}function It(R){const M=m(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,ne=H.length;se<ne;se++){const oe=H[se];if(g(oe,M)){const ye=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(oe).__webglTexture;n.bindTexture(ye,he),_(ye),n.unbindTexture()}}}function Ee(R){if(a&&R.samples>0&&ve(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,se=R.height;let ne=t.COLOR_BUFFER_BIT;const oe=[],ye=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(R),ge=R.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){oe.push(t.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&oe.push(ye);const ze=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ze===!1&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),ge){const te=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,H,se,0,0,H,se,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,oe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const ze=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function be(R){return Math.min(r.maxSamples,R.samples)}function ve(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Oe(R,M){const H=R.colorSpace,se=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===cf||H!==Mi&&H!==Pn&&(Je.getTransfer(H)===st?a===!1?e.has("EXT_sRGB")===!0&&se===Wn?(R.format=cf,R.minFilter=Cn,R.generateMipmaps=!1):M=$0.sRGBToLinear(M):(se!==Wn||ne!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=L,this.resetTextureUnits=ee,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=F,this.rebindTextures=Ve,this.setupRenderTarget=I,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ve}function ow(t,e,n){const i=n.isWebGL2;function r(s,o=Pn){let a;const l=Je.getTransfer(o);if(s===$i)return t.UNSIGNED_BYTE;if(s===k0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===B0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===by)return t.BYTE;if(s===Py)return t.SHORT;if(s===cd)return t.UNSIGNED_SHORT;if(s===z0)return t.INT;if(s===Oi)return t.UNSIGNED_INT;if(s===zi)return t.FLOAT;if(s===Io)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ly)return t.ALPHA;if(s===Wn)return t.RGBA;if(s===Dy)return t.LUMINANCE;if(s===Ny)return t.LUMINANCE_ALPHA;if(s===yr)return t.DEPTH_COMPONENT;if(s===Ds)return t.DEPTH_STENCIL;if(s===cf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Uy)return t.RED;if(s===H0)return t.RED_INTEGER;if(s===Iy)return t.RG;if(s===G0)return t.RG_INTEGER;if(s===V0)return t.RGBA_INTEGER;if(s===bc||s===Pc||s===Lc||s===Dc)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===bc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===bc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xh||s===jh||s===qh||s===Yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===W0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$h||s===Kh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$h)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Kh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zh||s===Qh||s===Jh||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===cp||s===up)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ep)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===np)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ip)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===op)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===cp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===up)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nc||s===fp||s===dp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Nc)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fy||s===hp||s===pp||s===mp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Nc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===hp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class aw extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hs extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lw={type:"move"};class nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class cw extends Os{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,v=null;const x=n.getContextAttributes();let m=null,f=null;const g=[],_=[],y=new Xe;let C=null;const T=new gn;T.layers.enable(1),T.viewport=new ct;const A=new gn;A.layers.enable(2),A.viewport=new ct;const P=[T,A],S=new aw;S.layers.enable(1),S.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=g[j];return K===void 0&&(K=new nu,g[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=g[j];return K===void 0&&(K=new nu,g[j]=K),K.getGripSpace()},this.getHand=function(j){let K=g[j];return K===void 0&&(K=new nu,g[j]=K),K.getHandSpace()};function W(j){const K=_.indexOf(j.inputSource);if(K===-1)return;const ce=g[K];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||o),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function ee(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",L);for(let j=0;j<g.length;j++){const K=_[j];K!==null&&(_[j]=null,g[j].disconnect(K))}E=null,O=null,e.setRenderTarget(m),p=null,d=null,u=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Rr(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ce=null,Y=null;x.depth&&(Y=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=x.stencil?Ds:yr,ce=x.stencil?xr:Oi);const re={colorFormat:n.RGBA8,depthFormat:Y,scaleFactor:s};u=new XRWebGLBinding(r,n),d=u.createProjectionLayer(re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Rr(d.textureWidth,d.textureHeight,{format:Wn,type:$i,depthTexture:new o_(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Me=e.properties.get(f);Me.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(j){for(let K=0;K<j.removed.length;K++){const ce=j.removed[K],Y=_.indexOf(ce);Y>=0&&(_[Y]=null,g[Y].disconnect(ce))}for(let K=0;K<j.added.length;K++){const ce=j.added[K];let Y=_.indexOf(ce);if(Y===-1){for(let Me=0;Me<g.length;Me++)if(Me>=_.length){_.push(ce),Y=Me;break}else if(_[Me]===null){_[Me]=ce,Y=Me;break}if(Y===-1)break}const re=g[Y];re&&re.connect(ce)}}const z=new D,q=new D;function $(j,K,ce){z.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);const Y=z.distanceTo(q),re=K.projectionMatrix.elements,Me=ce.projectionMatrix.elements,de=re[14]/(re[10]-1),xe=re[14]/(re[10]+1),Ve=(re[9]+1)/re[5],I=(re[9]-1)/re[5],It=(re[8]-1)/re[0],Ee=(Me[8]+1)/Me[0],be=de*It,ve=de*Ee,ut=Y/(-It+Ee),Oe=ut*-It;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Oe),j.translateZ(ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=de+ut,M=xe+ut,H=be-Oe,se=ve+(Y-Oe),ne=Ve*xe/M*R,oe=I*xe/M*R;j.projectionMatrix.makePerspective(H,se,ne,oe,R,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function N(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=A.near=T.near=j.near,S.far=A.far=T.far=j.far,(E!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,O=S.far);const K=j.parent,ce=S.cameras;N(S,K);for(let Y=0;Y<ce.length;Y++)N(ce[Y],K);ce.length===2?$(S,T,A):S.projectionMatrix.copy(T.projectionMatrix),F(j,S,K)};function F(j,K,ce){ce===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let B=null;function Z(j,K){if(h=K.getViewerPose(c||o),v=K,h!==null){const ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Y=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,Y=!0);for(let re=0;re<ce.length;re++){const Me=ce[re];let de=null;if(p!==null)de=p.getViewport(Me);else{const Ve=u.getViewSubImage(d,Me);de=Ve.viewport,re===0&&(e.setRenderTargetTextures(f,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(f))}let xe=P[re];xe===void 0&&(xe=new gn,xe.layers.enable(re),xe.viewport=new ct,P[re]=xe),xe.matrix.fromArray(Me.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Me.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(de.x,de.y,de.width,de.height),re===0&&(S.matrix.copy(xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Y===!0&&S.cameras.push(xe)}}for(let ce=0;ce<g.length;ce++){const Y=_[ce],re=g[ce];Y!==null&&re!==void 0&&re.update(Y,K,c||o)}B&&B(j,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const Q=new r_;Q.setAnimationLoop(Z),this.setAnimationLoop=function(j){B=j},this.dispose=function(){}}}function uw(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,t_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function c(g,_){let y=r[g.id];y===void 0&&(v(g),y=h(g),r[g.id]=y,g.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(g,C);const T=e.render.frame;s[g.id]!==T&&(d(g),s[g.id]=T)}function h(g){const _=u();g.__bindingPointIndex=_;const y=t.createBuffer(),C=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function u(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],y=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,A=y.length;T<A;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,E=P.length;S<E;S++){const O=P[S];if(p(O,T,S,C)===!0){const W=O.__offset,ee=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let z=0;z<ee.length;z++){const q=ee[z],$=x(q);typeof q=="number"||typeof q=="boolean"?(O.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,W+L,O.__data)):q.isMatrix3?(O.__data[0]=q.elements[0],O.__data[1]=q.elements[1],O.__data[2]=q.elements[2],O.__data[3]=0,O.__data[4]=q.elements[3],O.__data[5]=q.elements[4],O.__data[6]=q.elements[5],O.__data[7]=0,O.__data[8]=q.elements[6],O.__data[9]=q.elements[7],O.__data[10]=q.elements[8],O.__data[11]=0):(q.toArray(O.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,y,C){const T=g.value,A=_+"_"+y;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const P=C[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function v(g){const _=g.uniforms;let y=0;const C=16;for(let A=0,P=_.length;A<P;A++){const S=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,O=S.length;E<O;E++){const W=S[E],ee=Array.isArray(W.value)?W.value:[W.value];for(let L=0,z=ee.length;L<z;L++){const q=ee[L],$=x(q),N=y%C;N!==0&&C-N<$.boundary&&(y+=C-N),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=$.storage}}}const T=y%C;return T>0&&(y+=C-T),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class d_{constructor(e={}){const{canvas:n=aS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const _=this;let y=!1,C=0,T=0,A=null,P=-1,S=null;const E=new ct,O=new ct;let W=null;const ee=new qe(0);let L=0,z=n.width,q=n.height,$=1,N=null,F=null;const B=new ct(0,0,z,q),Z=new ct(0,0,z,q);let Q=!1;const j=new hd;let K=!1,ce=!1,Y=null;const re=new pt,Me=new Xe,de=new D,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return A===null?$:1}let I=i;function It(w,U){for(let G=0;G<w.length;G++){const X=w[G],k=n.getContext(X,U);if(k!==null)return k}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ld}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",ue,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),I=It(U,w),I===null)throw It(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ee,be,ve,ut,Oe,R,M,H,se,ne,oe,ye,he,ge,Ce,ze,te,Qe,We,De,Te,_e,Ie,Ke;function gt(){Ee=new S1(I),be=new m1(I,Ee,e),Ee.init(be),_e=new ow(I,Ee,be),ve=new rw(I,Ee,be),ut=new T1(I),Oe=new WT,R=new sw(I,Ee,ve,Oe,be,_e,ut),M=new _1(_),H=new y1(_),se=new DS(I,be),Ie=new h1(I,Ee,se,be),ne=new M1(I,se,ut,Ie),oe=new C1(I,ne,se,ut),We=new R1(I,be,R),ze=new g1(Oe),ye=new VT(_,M,H,Ee,be,Ie,ze),he=new uw(_,Oe),ge=new jT,Ce=new QT(Ee,be),Qe=new d1(_,M,H,ve,oe,d,l),te=new iw(_,oe,be),Ke=new fw(I,ut,be,ve),De=new p1(I,Ee,ut,be),Te=new E1(I,Ee,ut,be),ut.programs=ye.programs,_.capabilities=be,_.extensions=Ee,_.properties=Oe,_.renderLists=ge,_.shadowMap=te,_.state=ve,_.info=ut}gt();const Be=new cw(_,I);this.xr=Be,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(z,q,!1))},this.getSize=function(w){return w.set(z,q)},this.setSize=function(w,U,G=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,q=U,n.width=Math.floor(w*$),n.height=Math.floor(U*$),G===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(z*$,q*$).floor()},this.setDrawingBufferSize=function(w,U,G){z=w,q=U,$=G,n.width=Math.floor(w*G),n.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,U,G,X){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,U,G,X),ve.viewport(E.copy(B).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,U,G,X){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,U,G,X),ve.scissor(O.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){ve.setScissorTest(Q=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(w=!0,U=!0,G=!0){let X=0;if(w){let k=!1;if(A!==null){const pe=A.texture.format;k=pe===V0||pe===G0||pe===H0}if(k){const pe=A.texture.type,Se=pe===$i||pe===Oi||pe===cd||pe===xr||pe===k0||pe===B0,Re=Qe.getClearColor(),Le=Qe.getClearAlpha(),ke=Re.r,Ne=Re.g,Ue=Re.b;Se?(p[0]=ke,p[1]=Ne,p[2]=Ue,p[3]=Le,I.clearBufferuiv(I.COLOR,0,p)):(v[0]=ke,v[1]=Ne,v[2]=Ue,v[3]=Le,I.clearBufferiv(I.COLOR,0,v))}else X|=I.COLOR_BUFFER_BIT}U&&(X|=I.DEPTH_BUFFER_BIT),G&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),ge.dispose(),Ce.dispose(),Oe.dispose(),M.dispose(),H.dispose(),oe.dispose(),Ie.dispose(),Ke.dispose(),ye.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Yt),Be.removeEventListener("sessionend",nt),Y&&(Y.dispose(),Y=null),$t.stop()};function ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ut.autoReset,U=te.enabled,G=te.autoUpdate,X=te.needsUpdate,k=te.type;gt(),ut.autoReset=w,te.enabled=U,te.autoUpdate=G,te.needsUpdate=X,te.type=k}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){const U=w.target;U.removeEventListener("dispose",fe),Pe(U)}function Pe(w){Ae(w),Oe.remove(w)}function Ae(w){const U=Oe.get(w).programs;U!==void 0&&(U.forEach(function(G){ye.releaseProgram(G)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,X,k,pe){U===null&&(U=xe);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Re=__(w,U,G,X,k);ve.setMaterial(X,Se);let Le=G.index,ke=1;if(X.wireframe===!0){if(Le=ne.getWireframeAttribute(G),Le===void 0)return;ke=2}const Ne=G.drawRange,Ue=G.attributes.position;let xt=Ne.start*ke,dn=(Ne.start+Ne.count)*ke;pe!==null&&(xt=Math.max(xt,pe.start*ke),dn=Math.min(dn,(pe.start+pe.count)*ke)),Le!==null?(xt=Math.max(xt,0),dn=Math.min(dn,Le.count)):Ue!=null&&(xt=Math.max(xt,0),dn=Math.min(dn,Ue.count));const Lt=dn-xt;if(Lt<0||Lt===1/0)return;Ie.setup(k,X,Re,G,Le);let ri,ft=De;if(Le!==null&&(ri=se.get(Le),ft=Te,ft.setIndex(ri)),k.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*Ve()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(k.isLine){let He=X.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*Ve()),k.isLineSegments?ft.setMode(I.LINES):k.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else k.isPoints?ft.setMode(I.POINTS):k.isSprite&&ft.setMode(I.TRIANGLES);if(k.isBatchedMesh)ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ft.renderInstances(xt,Lt,k.count);else if(G.isInstancedBufferGeometry){const He=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ql=Math.min(G.instanceCount,He);ft.renderInstances(xt,Lt,Ql)}else ft.render(xt,Lt)};function et(w,U,G){w.transparent===!0&&w.side===ei&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,jo(w,U,G),w.side=Qi,w.needsUpdate=!0,jo(w,U,G),w.side=ei):jo(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),m=Ce.get(G),m.init(),g.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==G&&w.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(_._useLegacyLights);const X=new Set;return w.traverse(function(k){const pe=k.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Re=pe[Se];et(Re,G,k),X.add(Re)}else et(pe,G,k),X.add(pe)}),g.pop(),m=null,X},this.compileAsync=function(w,U,G=null){const X=this.compile(w,U,G);return new Promise(k=>{function pe(){if(X.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){k(w);return}setTimeout(pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let tt=null;function Pt(w){tt&&tt(w)}function Yt(){$t.stop()}function nt(){$t.start()}const $t=new r_;$t.setAnimationLoop(Pt),typeof self!="undefined"&&$t.setContext(self),this.setAnimationLoop=function(w){tt=w,Be.setAnimationLoop(w),w===null?$t.stop():$t.start()},Be.addEventListener("sessionstart",Yt),Be.addEventListener("sessionend",nt),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(U),U=Be.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,A),m=Ce.get(w,g.length),m.init(),g.push(m),re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(re),ce=this.localClippingEnabled,K=ze.init(this.clippingPlanes,ce),x=ge.get(w,f.length),x.init(),f.push(x),$n(w,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(N,F),this.info.render.frame++,K===!0&&ze.beginShadows();const G=m.state.shadowsArray;if(te.render(G,w,U),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(x,w),m.setupLights(_._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let k=0,pe=X.length;k<pe;k++){const Se=X[k];Ed(x,w,Se,Se.viewport)}}else Ed(x,w,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,U),Ie.resetDefaultState(),P=-1,S=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function $n(w,U,G,X){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){X&&de.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);const Se=oe.update(w),Re=w.material;Re.visible&&x.push(w,Se,Re,G,de.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const Se=oe.update(w),Re=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),de.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),de.copy(Se.boundingSphere.center)),de.applyMatrix4(w.matrixWorld).applyMatrix4(re)),Array.isArray(Re)){const Le=Se.groups;for(let ke=0,Ne=Le.length;ke<Ne;ke++){const Ue=Le[ke],xt=Re[Ue.materialIndex];xt&&xt.visible&&x.push(w,Se,xt,G,de.z,Ue)}}else Re.visible&&x.push(w,Se,Re,G,de.z,null)}}const pe=w.children;for(let Se=0,Re=pe.length;Se<Re;Se++)$n(pe[Se],U,G,X)}function Ed(w,U,G,X){const k=w.opaque,pe=w.transmissive,Se=w.transparent;m.setupLightsView(G),K===!0&&ze.setGlobalState(_.clippingPlanes,G),pe.length>0&&g_(k,pe,U,G),X&&ve.viewport(E.copy(X)),k.length>0&&Xo(k,U,G),pe.length>0&&Xo(pe,U,G),Se.length>0&&Xo(Se,U,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function g_(w,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const pe=be.isWebGL2;Y===null&&(Y=new Rr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Io:$i,minFilter:Uo,samples:pe?4:0})),_.getDrawingBufferSize(Me),pe?Y.setSize(Me.x,Me.y):Y.setSize(Rl(Me.x),Rl(Me.y));const Se=_.getRenderTarget();_.setRenderTarget(Y),_.getClearColor(ee),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Re=_.toneMapping;_.toneMapping=Yi,Xo(w,G,X),R.updateMultisampleRenderTarget(Y),R.updateRenderTargetMipmap(Y);let Le=!1;for(let ke=0,Ne=U.length;ke<Ne;ke++){const Ue=U[ke],xt=Ue.object,dn=Ue.geometry,Lt=Ue.material,ri=Ue.group;if(Lt.side===ei&&xt.layers.test(X.layers)){const ft=Lt.side;Lt.side=fn,Lt.needsUpdate=!0,Td(xt,G,X,dn,Lt,ri),Lt.side=ft,Lt.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(Y),R.updateRenderTargetMipmap(Y)),_.setRenderTarget(Se),_.setClearColor(ee,L),_.toneMapping=Re}function Xo(w,U,G){const X=U.isScene===!0?U.overrideMaterial:null;for(let k=0,pe=w.length;k<pe;k++){const Se=w[k],Re=Se.object,Le=Se.geometry,ke=X===null?Se.material:X,Ne=Se.group;Re.layers.test(G.layers)&&Td(Re,U,G,Le,ke,Ne)}}function Td(w,U,G,X,k,pe){w.onBeforeRender(_,U,G,X,k,pe),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(_,U,G,X,w,pe),k.transparent===!0&&k.side===ei&&k.forceSinglePass===!1?(k.side=fn,k.needsUpdate=!0,_.renderBufferDirect(G,U,X,k,w,pe),k.side=Qi,k.needsUpdate=!0,_.renderBufferDirect(G,U,X,k,w,pe),k.side=ei):_.renderBufferDirect(G,U,X,k,w,pe),w.onAfterRender(_,U,G,X,k,pe)}function jo(w,U,G){U.isScene!==!0&&(U=xe);const X=Oe.get(w),k=m.state.lights,pe=m.state.shadowsArray,Se=k.state.version,Re=ye.getParameters(w,k.state,pe,U,G),Le=ye.getProgramCacheKey(Re);let ke=X.programs;X.environment=w.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||X.environment),ke===void 0&&(w.addEventListener("dispose",fe),ke=new Map,X.programs=ke);let Ne=ke.get(Le);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===Se)return Ad(w,Re),Ne}else Re.uniforms=ye.getUniforms(w),w.onBuild(G,Re,_),w.onBeforeCompile(Re,_),Ne=ye.acquireProgram(Re,Le),ke.set(Le,Ne),X.uniforms=Re.uniforms;const Ue=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),Ad(w,Re),X.needsLights=x_(w),X.lightsStateVersion=Se,X.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function wd(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Ka.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ad(w,U){const G=Oe.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function __(w,U,G,X,k){U.isScene!==!0&&(U=xe),R.resetTextureUnits();const pe=U.fog,Se=X.isMeshStandardMaterial?U.environment:null,Re=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mi,Le=(X.isMeshStandardMaterial?H:M).get(X.envMap||Se),ke=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!G.morphAttributes.position,xt=!!G.morphAttributes.normal,dn=!!G.morphAttributes.color;let Lt=Yi;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Lt=_.toneMapping);const ri=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=ri!==void 0?ri.length:0,He=Oe.get(X),Ql=m.state.lights;if(K===!0&&(ce===!0||w!==S)){const En=w===S&&X.id===P;ze.setState(X,w,En)}let _t=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ql.state.version||He.outputColorSpace!==Re||k.isBatchedMesh&&He.batching===!1||!k.isBatchedMesh&&He.batching===!0||k.isInstancedMesh&&He.instancing===!1||!k.isInstancedMesh&&He.instancing===!0||k.isSkinnedMesh&&He.skinning===!1||!k.isSkinnedMesh&&He.skinning===!0||k.isInstancedMesh&&He.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&He.instancingColor===!1&&k.instanceColor!==null||He.envMap!==Le||X.fog===!0&&He.fog!==pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ze.numPlanes||He.numIntersection!==ze.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ne||He.morphTargets!==Ue||He.morphNormals!==xt||He.morphColors!==dn||He.toneMapping!==Lt||be.isWebGL2===!0&&He.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,He.__version=X.version);let nr=He.currentProgram;_t===!0&&(nr=jo(X,U,k));let Rd=!1,Bs=!1,Jl=!1;const Bt=nr.getUniforms(),ir=He.uniforms;if(ve.useProgram(nr.program)&&(Rd=!0,Bs=!0,Jl=!0),X.id!==P&&(P=X.id,Bs=!0),Rd||S!==w){Bt.setValue(I,"projectionMatrix",w.projectionMatrix),Bt.setValue(I,"viewMatrix",w.matrixWorldInverse);const En=Bt.map.cameraPosition;En!==void 0&&En.setValue(I,de.setFromMatrixPosition(w.matrixWorld)),be.logarithmicDepthBuffer&&Bt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Bt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Bs=!0,Jl=!0)}if(k.isSkinnedMesh){Bt.setOptional(I,k,"bindMatrix"),Bt.setOptional(I,k,"bindMatrixInverse");const En=k.skeleton;En&&(be.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Bt.setValue(I,"boneTexture",En.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Bt.setOptional(I,k,"batchingTexture"),Bt.setValue(I,"batchingTexture",k._matricesTexture,R));const ec=G.morphAttributes;if((ec.position!==void 0||ec.normal!==void 0||ec.color!==void 0&&be.isWebGL2===!0)&&We.update(k,G,nr),(Bs||He.receiveShadow!==k.receiveShadow)&&(He.receiveShadow=k.receiveShadow,Bt.setValue(I,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ir.envMap.value=Le,ir.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Bs&&(Bt.setValue(I,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&v_(ir,Jl),pe&&X.fog===!0&&he.refreshFogUniforms(ir,pe),he.refreshMaterialUniforms(ir,X,$,q,Y),Ka.upload(I,wd(He),ir,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ka.upload(I,wd(He),ir,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Bt.setValue(I,"center",k.center),Bt.setValue(I,"modelViewMatrix",k.modelViewMatrix),Bt.setValue(I,"normalMatrix",k.normalMatrix),Bt.setValue(I,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const En=X.uniformsGroups;for(let tc=0,y_=En.length;tc<y_;tc++)if(be.isWebGL2){const Cd=En[tc];Ke.update(Cd,nr),Ke.bind(Cd,nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nr}function v_(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function x_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,G){Oe.get(w.texture).__webglTexture=U,Oe.get(w.depthTexture).__webglTexture=G;const X=Oe.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const G=Oe.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){A=w,C=U,T=G;let X=!0,k=null,pe=!1,Se=!1;if(w){const Le=Oe.get(w);Le.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(I.FRAMEBUFFER,null),X=!1):Le.__webglFramebuffer===void 0?R.setupRenderTarget(w):Le.__hasExternalTextures&&R.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);const Ne=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?k=Ne[U][G]:k=Ne[U],pe=!0):be.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?k=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[G]:k=Ne,E.copy(w.viewport),O.copy(w.scissor),W=w.scissorTest}else E.copy(B).multiplyScalar($).floor(),O.copy(Z).multiplyScalar($).floor(),W=Q;if(ve.bindFramebuffer(I.FRAMEBUFFER,k)&&be.drawBuffers&&X&&ve.drawBuffers(w,k),ve.viewport(E),ve.scissor(O),ve.setScissorTest(W),pe){const Le=Oe.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,G)}else if(Se){const Le=Oe.get(w.texture),ke=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,G||0,ke)}P=-1},this.readRenderTargetPixels=function(w,U,G,X,k,pe,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){ve.bindFramebuffer(I.FRAMEBUFFER,Re);try{const Le=w.texture,ke=Le.format,Ne=Le.type;if(ke!==Wn&&_e.convert(ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ne===Io&&(Ee.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ne!==$i&&_e.convert(Ne)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===zi&&(be.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-X&&G>=0&&G<=w.height-k&&I.readPixels(U,G,X,k,_e.convert(ke),_e.convert(Ne),pe)}finally{const Le=A!==null?Oe.get(A).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(w,U,G=0){const X=Math.pow(2,-G),k=Math.floor(U.image.width*X),pe=Math.floor(U.image.height*X);R.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,w.x,w.y,k,pe),ve.unbindTexture()},this.copyTextureToTexture=function(w,U,G,X=0){const k=U.image.width,pe=U.image.height,Se=_e.convert(G.format),Re=_e.convert(G.type);R.setTexture2D(G,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,X,w.x,w.y,k,pe,Se,Re,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,X,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,Se,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,X,w.x,w.y,Se,Re,U.image),X===0&&G.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G,X,k=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,Re=w.max.z-w.min.z+1,Le=_e.convert(X.format),ke=_e.convert(X.type);let Ne;if(X.isData3DTexture)R.setTexture3D(X,0),Ne=I.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)R.setTexture2DArray(X,0),Ne=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Ue=I.getParameter(I.UNPACK_ROW_LENGTH),xt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dn=I.getParameter(I.UNPACK_SKIP_PIXELS),Lt=I.getParameter(I.UNPACK_SKIP_ROWS),ri=I.getParameter(I.UNPACK_SKIP_IMAGES),ft=G.isCompressedTexture?G.mipmaps[k]:G.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?I.texSubImage3D(Ne,k,U.x,U.y,U.z,pe,Se,Re,Le,ke,ft.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ne,k,U.x,U.y,U.z,pe,Se,Re,Le,ft.data)):I.texSubImage3D(Ne,k,U.x,U.y,U.z,pe,Se,Re,Le,ke,ft),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ue),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ri),k===0&&X.generateMipmaps&&I.generateMipmap(Ne),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,ve.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ud?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===ql?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Sr:X0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?Ot:Mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dw extends d_{}dw.prototype.isWebGL1Renderer=!0;class gd{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=n}clone(){return new gd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hw extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Za extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rm=new D,sm=new D,om=new pt,iu=new Yl,Da=new Wo;class pw extends Rt{constructor(e=new qt,n=new Za){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)rm.fromBufferAttribute(n,r-1),sm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=rm.distanceTo(sm);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(r),Da.radius+=s,e.ray.intersectsSphere(Da)===!1)return;om.copy(r).invert(),iu.copy(e.ray).applyMatrix4(om);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,h=new D,u=new D,d=new D,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const f=Math.max(0,o.start),g=Math.min(v.count,o.start+o.count);for(let _=f,y=g-1;_<y;_+=p){const C=v.getX(_),T=v.getX(_+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),iu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||n.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=f,y=g-1;_<y;_+=p){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),iu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||n.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const am=new D,lm=new D;class ru extends pw{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)am.fromBufferAttribute(n,r),lm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+am.distanceTo(lm);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h_ extends Dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cm=new pt,df=new Yl,Na=new Wo,Ua=new D;class mw extends Rt{constructor(e=new qt,n=new h_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;cm.copy(r).invert(),df.copy(e.ray).applyMatrix4(cm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,x=p;v<x;v++){const m=c.getX(v);Ua.fromBufferAttribute(u,m),um(Ua,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=d,x=p;v<x;v++)Ua.fromBufferAttribute(u,v),um(Ua,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function um(t,e,n,i,r,s,o){const a=df.distanceSqToPoint(t);if(a<n){const l=new D;df.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class _d extends qt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new D,h=new Xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=n;u++,d+=3){const p=i+u/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=n;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _d(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Oo extends qt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let v=0;const x=[],m=i/2;let f=0;g(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(p,2));function g(){const y=new D,C=new D;let T=0;const A=(n-e)/i;for(let P=0;P<=s;P++){const S=[],E=P/s,O=E*(n-e)+e;for(let W=0;W<=r;W++){const ee=W/r,L=ee*l+a,z=Math.sin(L),q=Math.cos(L);C.x=O*z,C.y=-E*i+m,C.z=O*q,u.push(C.x,C.y,C.z),y.set(z,A,q).normalize(),d.push(y.x,y.y,y.z),p.push(ee,1-E),S.push(v++)}x.push(S)}for(let P=0;P<r;P++)for(let S=0;S<s;S++){const E=x[S][P],O=x[S+1][P],W=x[S+1][P+1],ee=x[S][P+1];h.push(E,O,ee),h.push(O,W,ee),T+=6}c.addGroup(f,T,0),f+=T}function _(y){const C=v,T=new Xe,A=new D;let P=0;const S=y===!0?e:n,E=y===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),v++;const O=v;for(let W=0;W<=r;W++){const L=W/r*l+a,z=Math.cos(L),q=Math.sin(L);A.x=S*q,A.y=m*E,A.z=S*z,u.push(A.x,A.y,A.z),d.push(0,E,0),T.x=z*.5+.5,T.y=q*.5*E+.5,p.push(T.x,T.y),v++}for(let W=0;W<r;W++){const ee=C+W,L=O+W;y===!0?h.push(L,L+1,ee):h.push(L+1,L,ee),P+=3}c.addGroup(f,P,y===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vd extends Oo{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new vd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zl extends qt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const _=new D,y=new D,C=new D;for(let T=0;T<n.length;T+=3)p(n[T+0],_),p(n[T+1],y),p(n[T+2],C),l(_,y,C,g)}function l(g,_,y,C){const T=C+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const S=g.clone().lerp(y,P/T),E=_.clone().lerp(y,P/T),O=T-P;for(let W=0;W<=O;W++)W===0&&P===T?A[P][W]=S:A[P][W]=S.clone().lerp(E,W/O)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const E=Math.floor(S/2);S%2===0?(d(A[P][E+1]),d(A[P+1][E]),d(A[P][E])):(d(A[P][E+1]),d(A[P+1][E+1]),d(A[P+1][E]))}}function c(g){const _=new D;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(g),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function h(){const g=new D;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const y=m(g)/2/Math.PI+.5,C=f(g)/Math.PI+.5;o.push(y,1-C)}v(),u()}function u(){for(let g=0;g<o.length;g+=6){const _=o[g+0],y=o[g+2],C=o[g+4],T=Math.max(_,y,C),A=Math.min(_,y,C);T>.9&&A<.1&&(_<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function p(g,_){const y=g*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function v(){const g=new D,_=new D,y=new D,C=new D,T=new Xe,A=new Xe,P=new Xe;for(let S=0,E=0;S<s.length;S+=9,E+=6){g.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),T.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),P.set(o[E+4],o[E+5]),C.copy(g).add(_).add(y).divideScalar(3);const O=m(C);x(T,E+0,g,O),x(A,E+2,_,O),x(P,E+4,y,O)}}function x(g,_,y,C){C<0&&g.x===1&&(o[_]=g.x-1),y.x===0&&y.z===0&&(o[_]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function f(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.vertices,e.indices,e.radius,e.details)}}const Ia=new D,Fa=new D,su=new D,Oa=new bn;class gw extends qt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ss*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:x,b:m,c:f}=Oa;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Oa.getNormal(su),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let g=0;g<3;g++){const _=(g+1)%3,y=u[g],C=u[_],T=Oa[h[g]],A=Oa[h[_]],P=`${y}_${C}`,S=`${C}_${y}`;S in d&&d[S]?(su.dot(d[S].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),d[S]=null):P in d||(d[P]={index0:c[g],index1:c[_],normal:su.clone()})}}for(const v in d)if(d[v]){const{index0:x,index1:m}=d[v];Ia.fromBufferAttribute(a,x),Fa.fromBufferAttribute(a,m),p.push(Ia.x,Ia.y,Ia.z),p.push(Fa.x,Fa.y,Fa.z)}this.setAttribute("position",new at(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xd extends Zl{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new xd(e.radius,e.detail)}}class yd extends Zl{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new yd(e.radius,e.detail)}}class Sd extends qt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,p=[],v=[],x=[],m=[];for(let f=0;f<=i;f++){const g=[],_=f/i;let y=0;f===0&&o===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const T=C/n;u.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-_),g.push(c++)}h.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const _=h[f][g+1],y=h[f][g],C=h[f+1][g],T=h[f+1][g+1];(f!==0||o>0)&&p.push(_,y,T),(f!==i-1||l<Math.PI)&&p.push(y,C,T)}this.setIndex(p),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bl extends qt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new D,u=new D,d=new D;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;u.x=(e+n*Math.cos(m))*Math.cos(x),u.y=(e+n*Math.cos(m))*Math.sin(x),u.z=n*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,f=(r+1)*(p-1)+v,g=(r+1)*p+v;o.push(x,m,g),o.push(m,f,g)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ui extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j0,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Md extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class _w extends Md{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ou=new pt,fm=new D,dm=new D;class p_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;fm.setFromMatrixPosition(e.matrixWorld),n.position.copy(fm),dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dm),n.updateMatrixWorld(),ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hm=new pt,Js=new D,au=new D;class vw extends p_{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),i.position.copy(Js),au.copy(i.position),au.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(au),i.updateMatrixWorld(),r.makeTranslation(-Js.x,-Js.y,-Js.z),hm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hm)}}class xw extends Md{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yw extends p_{constructor(){super(new s_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sw extends Md{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new yw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mw{constructor(e,n,i=0,r=1/0){this.ray=new Yl(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new dd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return hf(e,this,i,n),i.sort(pm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)hf(e[r],this,i,n);return i.sort(pm),i}}function pm(t,e){return t.distance-e.distance}function hf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)hf(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);const Et=(t,e)=>({p:t,s:e}),wn=(t,e)=>({p:t,s:e,hazard:!0});function Pi(t,e,n){const r=t/2,s=e/2,o=n/2;return[Et([0,-(s+1/2),0],[t+2*1,1,n+2*1]),Et([0,s+1/2,0],[t+2*1,1,n+2*1]),Et([-(r+1/2),0,0],[1,e+2*1,n+2*1]),Et([r+1/2,0,0],[1,e+2*1,n+2*1]),Et([0,0,-(o+1/2)],[t+2*1,e+2*1,1]),Et([0,0,o+1/2],[t+2*1,e+2*1,1])]}const kn=[{name:"引力初感",hint:"按 → 让重力向右倾倒，球会一路滚向传送门。空格键随时把重力回正向下——迷路时的万能保险。",par:1,spawn:[-7,1.2,0],portal:{p:[7.5,1.15,0],n:[1,0,0]},boxes:[Et([0,-.5,0],[18,1,12])],stars:[[-3,.95,0],[0,.95,0],[4,.95,0]]},{name:"深入视界",hint:"按 ↑：重力倒向屏幕深处，球滑向远墙。封闭房间，随时可以重试。",par:1,spawn:[0,-3.4,3.5],portal:{p:[0,-3.4,-5.5],n:[0,0,1]},boxes:Pi(12,9,12),stars:[[3.5,-4,0],[-3.5,-4,0],[0,-3.5,-4.4]]},{name:"天花板课堂",hint:"先按 ↑ 滑向远墙，再按一次 ↑ 原地升空——球贴着远墙爬升，正好撞进高处的传送门。连按两次 ←/→ 即可反转重力。",par:2,spawn:[0,-3.4,4],portal:{p:[0,4,-5.5],n:[0,-1,0]},boxes:Pi(12,9,12),stars:[[4,-4,4],[-4,-4,4],[0,1.5,-5.4]]},{name:"弹射之道",hint:"→ 出发撞上弹射板飞越断崖，落地后再按一次 → 冲向第二块弹射板，直达彼岸传送门。",par:2,spawn:[-10,1.2,0],portal:{p:[12.5,1.15,0],n:[1,0,0]},boxes:[Et([-8,-.5,0],[8,1,6]),Et([1,-1.5,0],[8,1,6]),Et([10,-.5,0],[8,1,6])],bumpers:[{p:[-4.6,.15,0],n:[.55,.835,0]},{p:[4.6,-.85,0],n:[.55,.835,0]}],stars:[[-8,.95,0],[3,-.55,0],[11,.95,0]]},{name:"检查站",hint:"按 ↓ 贴到南墙，再按 ← 沿墙滑向东侧传送门——晶柱拦不住贴墙路线。青色立环会记住你的进度。",par:2,spawn:[-5.5,-3.4,0],portal:{p:[3,-3.4,5.45],n:[0,0,-1]},boxes:[...Pi(12,9,12),wn([-2,-4.2,0],[1,1.8,1])],checkpoints:[{p:[0,-4.3,4.6]}],stars:[[-4,-4,0],[0,-4,4],[2,-4,4.6]]},{name:"反重力井",hint:"按 → 全速冲进反重力井，被托举升空；场内方向键是推进脉冲，微调航向顺势飘上高台。",par:1,spawn:[-9.5,1.2,0],portal:{p:[7,2.6,0],n:[0,1,0]},boxes:[Et([-8,-.5,0],[6,1,6]),Et([6,1.5,0],[12,1,6])],fields:[{p:[-2.5,1.5,0],s:[5,5,4],dir:[0,1,0]}],stars:[[-8,.95,0],[4.6,5,0],[7,2.9,0]]},{name:"双钥闸门",hint:"↓ 滚到南墙压亮第一钥，空格落回墙根，← 沿墙根滑到西南角压亮第二钥——闸门溶解，↑ 沿西墙直捣传送门。",par:4,spawn:[0,-3.4,4],portal:{p:[-5.45,-4.05,-2],n:[1,0,0]},boxes:Pi(12,9,12),plates:[{p:[0,-4.3,4.8]},{p:[-4.5,-4.3,5.2]}],gates:[{p:[-5.1,-3.7,-2],s:[.5,1.6,6],need:2}],stars:[[0,-4,4.6],[-4.5,-4,5.05],[-3,-4,-2]]},{name:"空中接力",hint:"弹射上舞台，滚过压力板开启能量墙，一路滚向传送门。",par:2,spawn:[-11,1.2,0],portal:{p:[13.5,1.15,0],n:[1,0,0]},boxes:[Et([-10.5,-.5,0],[5,1,5]),Et([-2.5,-.5,0],[10,1,5]),Et([4.5,-.5,0],[5,1,5]),Et([8,-.25,0],[2,.5,3]),Et([12,-.5,0],[6,1,5])],bumpers:[{p:[-8.6,.15,0],n:[.55,.835,0]}],plates:[{p:[5,.12,0]}],gates:[{p:[9.5,3.5,0],s:[.5,7,6],need:1}],checkpoints:[{p:[0,.6,0]},{p:[10,.6,0]}],stars:[[-8,.95,0],[-5.4,2.8,0],[12,.95,0]]},{name:"空中楼阁",hint:"→ 滑行，← 刹停在悬浮楼阁正下方，再连按 → 原地升空——球会顶住楼阁底部，正好悬挂进下方悬挂的传送门。",par:4,spawn:[-6.5,-5,0],portal:{p:[5,1.8,0],n:[0,1,0],r:2.6},boxes:[...Pi(16,12,16),Et([5,3.75,0],[6,1.5,6]),wn([-3,-5.4,2.5],[1,1.2,1]),wn([-3,-5.4,-2.5],[1,1.2,1])],checkpoints:[{p:[-4,-5.5,0]},{p:[5,2.5,0]}],stars:[[-6,-5.1,0],[5,5.1,0],[4,2.6,0]]},{name:"倒悬行军",hint:"← ← 原地升空贴顶，顺路压亮穹顶之钥；轻点 → 沿穹顶东行到塔顶正上方，空格坠落塔崴——失足也会回到穹顶信标。",par:5,spawn:[-6.5,-6,0],portal:{p:[0,4.55,0],n:[0,1,0]},boxes:[...Pi(16,14,16),Et([0,-1.75,0],[6,11.7,6]),wn([3,-6.4,3],[1.2,1.2,1.2]),wn([3,-6.4,-3],[1.2,1.2,1.2]),wn([-3,-6.4,3],[1.2,1.2,1.2]),wn([-3,-6.4,-3],[1.2,1.2,1.2])],plates:[{p:[-5.5,6.45,0],n:[0,-1,0]}],gates:[{p:[0,4.35,0],s:[6,.5,6],need:1}],checkpoints:[{p:[-6,-6.15,0]},{p:[-5,6.3,0]}],stars:[[-6.9,-6.1,0],[-7,6.1,0],[-3.7,5.2,0]]},{name:"万花筒",hint:"↑ 穿过中央回廊直抵北墙（顺路摘星），← 沿北墙滑行撞进传送门。反转重力还能摘到穹顶的星。",par:2,spawn:[3.5,-4.9,4],portal:{p:[0,-4.8,-5.45],n:[0,0,1]},boxes:[...Pi(12,12,12),wn([0,0,0],[2,2.4,2]),wn([4.6,-4.3,0],[.8,2.4,1.4]),wn([-4.6,-4.3,0],[.8,2.4,1.4]),wn([0,-4.3,4],[1.4,2.4,1]),wn([0,-4.3,-3.5],[1.4,2.4,1])],checkpoints:[{p:[1.5,5.3,-4.5]}],stars:[[3.8,-5,4.3],[3.5,-5,-2],[0,5.5,-4.5]]},{name:"引力之心",hint:"起点即是地板之钥——← ← 原地升空贴顶压亮第二钥，轻点 ← 沿穹顶东行，滑到峡谷正上方再按 ← 垂直坠落，正好落进传送门。",par:4,spawn:[-5.5,-6,3],portal:{p:[0,4.7,3],n:[0,1,0]},boxes:[...Pi(16,14,16),Et([0,-1.45,0],[5,11,14.5])],plates:[{p:[-5,-6.92,3]},{p:[-7,6.42,3],n:[0,-1,0]}],gates:[{p:[0,4.55,0],s:[5.4,.5,14.5],need:2}],checkpoints:[{p:[-5.5,-6.15,3]},{p:[-7,6.3,3]}],stars:[[-5.2,-5.9,3],[-6.2,-1,3],[-3,6.05,3]]}];function Ew(t){const e=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(const i of t)if(!i.hazard)for(let r=0;r<3;r++)e[r]=Math.min(e[r],i.p[r]-i.s[r]/2),n[r]=Math.max(n[r],i.p[r]+i.s[r]/2);return{min:e,max:n}}class Tw{constructor(){J(this,"ctx",null);J(this,"muted",!1)}ensure(){if(this.muted)return null;try{if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}catch{return null}}unlock(){this.ensure()}tone(e,n,i="sine",r=.12,s,o=0){const a=this.ensure();if(!a)return;const l=a.currentTime+o,c=a.createOscillator(),h=a.createGain();c.type=i,c.frequency.setValueAtTime(e,l),s&&c.frequency.exponentialRampToValueAtTime(Math.max(30,s),l+n),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(r,l+.012),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(h),h.connect(a.destination),c.start(l),c.stop(l+n+.05)}rotate(){this.tone(320,.09,"triangle",.09,430)}land(){this.tone(110,.06,"sine",.1,78)}star(){this.tone(880,.1,"sine",.13),this.tone(1318,.14,"sine",.11,void 0,.08)}win(){[523,659,784,1046].forEach((e,n)=>this.tone(e,.16,"triangle",.12,void 0,n*.11))}die(){this.tone(220,.35,"sawtooth",.12,60)}click(){this.tone(660,.05,"square",.05)}bumper(){this.tone(240,.18,"square",.1,720),this.tone(480,.12,"sine",.08,960,.04)}field(){this.tone(300,.3,"sine",.07,900)}thrust(){this.tone(500,.06,"sine",.05,700)}plate(){this.tone(660,.09,"triangle",.11),this.tone(880,.14,"triangle",.1,void 0,.09)}gate(){this.tone(180,.42,"sawtooth",.09,50),this.tone(720,.26,"sine",.07,1180,.06)}checkpoint(){this.tone(523,.1,"sine",.1),this.tone(784,.16,"sine",.1,void 0,.09)}}const ww=26,sn=.42,Aw=11,Rw=19,Cw=.05,mm=1.5,bw=1.1,Zr=6,gm=8.6,lu=1/120,Pw=1.15,Lw=1.05,Dw=1.5,we=(t=0,e=0,n=0)=>new D(t,e,n),_m=Math.PI/180;class Nw{constructor(e,n){J(this,"webglFailed",!1);J(this,"sfx",new Tw);J(this,"canvas");J(this,"cb");J(this,"renderer");J(this,"scene",new hw);J(this,"cam");J(this,"mode","off");J(this,"enabled",!1);J(this,"levelIdx",0);J(this,"levelGroup",null);J(this,"boxes",[]);J(this,"solidMeshes",[]);J(this,"stars",[]);J(this,"portal",null);J(this,"portalR",mm);J(this,"spawn",we());J(this,"boundMin",we());J(this,"boundMax",we());J(this,"fields",[]);J(this,"plates",[]);J(this,"bumpers",[]);J(this,"checkpoints",[]);J(this,"curField",null);J(this,"checkpoint",null);J(this,"deaths",0);J(this,"boostT",0);J(this,"activePlates",0);J(this,"ball",{pos:we(),vel:we()});J(this,"ballMesh");J(this,"ballLight");J(this,"gBase",we(0,-1,0));J(this,"gEff",we(0,-1,0));J(this,"qBase",new ti);J(this,"yawOff",0);J(this,"pitchOff",0);J(this,"qTarget",new ti);J(this,"camDist",gm);J(this,"rotations",0);J(this,"time",0);J(this,"timerOn",!1);J(this,"finished",!1);J(this,"dead",!1);J(this,"gen",0);J(this,"starsGot",0);J(this,"starsTotal",0);J(this,"acc",0);J(this,"lastT",-1);J(this,"statT",0);J(this,"prevContact",!1);J(this,"contactN",we(0,1,0));J(this,"shake",0);J(this,"tweens",[]);J(this,"geoBox",new Cr(1,1,1));J(this,"geoEdge",new gw(new Cr(1,1,1)));J(this,"geoBall",new Sd(sn,32,24));J(this,"geoWire",new xd(sn*1.06,1));J(this,"geoStar",new yd(.32));J(this,"geoTorus",new bl(1.05,.11,12,40));J(this,"geoDisc",new _d(.95,32));J(this,"geoPlate",new Oo(.55,.68,.14,28));J(this,"geoRing",new bl(.55,.075,10,32));J(this,"geoCone",new vd(.3,.55,16));J(this,"geoBump",new Oo(.62,.75,.2,28));J(this,"matSolid",new ui({color:"#242c42",roughness:.85,metalness:.08}));J(this,"matHazard",new ui({color:"#3a1220",emissive:"#ff2d55",emissiveIntensity:.9,roughness:.6}));J(this,"matEdge",new Za({color:"#3fc1ff",transparent:!0,opacity:.4}));J(this,"matBall",new ui({color:"#e8f4ff",roughness:.3,metalness:.15,emissive:"#1f6f8f",emissiveIntensity:.4}));J(this,"matWire",new go({color:"#7fdcff",wireframe:!0,transparent:!0,opacity:.28}));J(this,"matStarBase",new ui({color:"#ffd54a",emissive:"#ffb300",emissiveIntensity:.85,roughness:.35,transparent:!0}));J(this,"matTorus",new ui({color:"#8a5cff",emissive:"#7c4dff",emissiveIntensity:.9,roughness:.4}));J(this,"matDisc",new go({color:"#b39dff",transparent:!0,opacity:.3,side:ei,depthWrite:!1}));J(this,"matField",new go({color:"#3fc1ff",transparent:!0,opacity:.09,depthWrite:!1}));J(this,"matGate",new ui({color:"#8a5cff",emissive:"#7c4dff",emissiveIntensity:.75,roughness:.4,transparent:!0,opacity:.85}));J(this,"matPlateOff",new ui({color:"#4a5568",emissive:"#000000",emissiveIntensity:0,roughness:.6}));J(this,"matBumper",new ui({color:"#0e3a52",emissive:"#3fc1ff",emissiveIntensity:.9,roughness:.35}));J(this,"matCpOff",new ui({color:"#4a5568",emissive:"#22303c",emissiveIntensity:.4,roughness:.5}));J(this,"gyroOn",!1);J(this,"gyroActive",!1);J(this,"gyroSeen",!1);J(this,"gyroP",0);J(this,"gyroR",0);J(this,"gyroP0",0);J(this,"gyroR0",0);J(this,"doeHandler",e=>this.onDeviceOrientation(e));J(this,"raycaster",new Mw);J(this,"ro",null);J(this,"lastThrustT",0);J(this,"keyHandler",e=>{if(!(this.mode!=="play"||!this.enabled))switch(e.key){case"ArrowLeft":e.preventDefault(),this.tip("L");break;case"ArrowRight":e.preventDefault(),this.tip("R");break;case"ArrowUp":e.preventDefault(),this.tip("U");break;case"ArrowDown":e.preventDefault(),this.tip("D");break;case"q":case"Q":case"a":case"A":this.yaw(1);break;case"e":case"E":case"d":case"D":this.yaw(-1);break;case"r":case"R":this.restart();break;case" ":case"Spacebar":e.preventDefault(),e.repeat||this.restoreDown();break;case"Escape":case"p":case"P":this.cb.onPauseRequest();break}});J(this,"pts",new Map);J(this,"pinchD",0);J(this,"pdHandler",e=>{if(!(this.mode!=="play"||!this.enabled)&&!(e.pointerType==="mouse"&&e.button!==0)&&(this.pts.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pts.size===2)){const[n,i]=[...this.pts.values()];this.pinchD=Math.hypot(n.x-i.x,n.y-i.y)}});J(this,"pmHandler",e=>{const n=this.pts.get(e.pointerId);if(!n)return;const i=e.clientX-n.x,r=e.clientY-n.y;if(n.x=e.clientX,n.y=e.clientY,!(this.mode!=="play"||!this.enabled)){if(this.pts.size===1)i!==0&&this.freeYaw(i*.006),r!==0&&this.pitch(r*.006);else if(this.pts.size===2){const[s,o]=[...this.pts.values()],a=Math.hypot(s.x-o.x,s.y-o.y);this.pinchD>0&&Math.abs(a-this.pinchD)>.5&&(this.camDist=Ir.clamp(this.camDist+(this.pinchD-a)*.03,4,16),this.pinchD=a)}}});J(this,"puHandler",e=>{this.pts.delete(e.pointerId),this.pts.size<2&&(this.pinchD=0)});J(this,"wheelHandler",e=>{this.mode!=="play"||!this.enabled||(e.preventDefault(),this.camDist=Ir.clamp(this.camDist+e.deltaY*.004,4,16))});J(this,"resizeHandler",()=>this.resize());J(this,"loop",e=>{if(this.mode==="off")return;const n=e/1e3;this.lastT<0&&(this.lastT=n);const i=Math.min(.05,Math.max(1e-4,n-this.lastT));if(this.lastT=n,this.mode==="play"&&this.timerOn&&!this.finished&&!this.dead&&(this.time+=i),this.mode==="attract"&&(this.yawOff+=.1*i,this.composeQ()),this.computeG(),!this.finished&&!this.dead)for(this.acc=Math.min(this.acc+i,.08);this.acc>=lu;)this.step(lu),this.acc-=lu;this.mode==="play"&&!this.dead&&!this.finished&&(this.updateZones(),this.checkPickups()),this.ballMesh.position.copy(this.ball.pos);const r=this.ball.vel.length();if(r>.05){const s=this.gEff.clone().negate(),o=we().crossVectors(s,this.ball.vel);o.lengthSq()>1e-6&&(o.normalize(),this.ballMesh.quaternion.premultiply(new ti().setFromAxisAngle(o,r*i/sn)))}this.updateCamera(i),this.portal&&(this.portal.rotation.z+=i*.8);for(const s of this.stars)s.got||(s.mesh.rotation.y+=i*1.6,s.mesh.position.y=s.baseY+Math.sin(n*2+s.phase)*.12);this.matHazard.emissiveIntensity=.75+.3*Math.sin(n*3.2),this.matField.opacity=.07+.04*(.5+.5*Math.sin(n*1.7)),this.matBumper.emissiveIntensity=.75+.35*(.5+.5*Math.sin(n*4.2));for(const s of this.boxes){const o=s.gate;if(o&&o.opened&&o.animT<1){o.animT=Math.min(1,o.animT+i*2);const a=o.animT,l=o.mesh.userData;l.bx===void 0&&(l.bx=o.mesh.scale.x,l.by=o.mesh.scale.y,l.bz=o.mesh.scale.z);const c=Math.max(.02,1-a);o.mesh.scale.set(l.bx*c,l.by*c,l.bz*c);const h=o.mesh.material;h.opacity=.85*(1-a),a>=1&&(o.mesh.visible=!1)}}for(let s=this.tweens.length-1;s>=0;s--){const o=this.tweens[s];o.t+=i;const a=o.t/o.dur;if(o.kind==="star"){o.obj.scale.setScalar(1+a*2.2);const l=o.obj.material;l.opacity=Math.max(0,1-a),l.transparent=!0,a>=1&&(o.obj.visible=!1,this.tweens.splice(s,1))}else o.obj.scale.setScalar(1+Math.sin(Math.min(1,a)*Math.PI)*.5),a>=1&&(o.obj.scale.setScalar(1),this.tweens.splice(s,1))}this.statT+=i,this.mode==="play"&&this.statT>.15&&(this.statT=0,this.pushStats()),this.renderer.render(this.scene,this.cam)});this.canvas=e,this.cb=n;try{this.renderer=new d_({canvas:e,antialias:!0,powerPreference:"high-performance"})}catch{throw this.webglFailed=!0,new Error("WebGL init failed")}this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.toneMapping=F0,this.renderer.toneMappingExposure=1.1,this.scene.background=new qe("#05060e"),this.scene.fog=new gd(329230,.015),this.cam=new gn(60,1,.1,220),this.cam.position.set(0,3,9);const i=new _w(9676799,2366010,.85),r=new Sw(16777215,1);r.position.set(6,12,4),this.scene.add(i,r),this.ballMesh=new yt(this.geoBall,this.matBall);const s=new yt(this.geoWire,this.matWire);this.ballMesh.add(s),this.ballLight=new xw(6740479,.9,7),this.ballMesh.add(this.ballLight),this.scene.add(this.ballMesh),this.scene.add(this.makeStarfield()),this.bindEvents(),this.resize(),window.__gt3d={state:()=>({pos:this.ball.pos.toArray().map(o=>+o.toFixed(2)),vel:+this.ball.vel.length().toFixed(2),g:this.gBase.toArray(),rot:this.rotations,mode:this.mode,stars:this.starsGot,deaths:this.deaths,plates:this.activePlates,finished:this.finished,dead:this.dead,level:this.levelIdx}),tip:o=>this.tip(o),restore:()=>this.restoreDown(),yaw:o=>this.yaw(o),dirs:()=>{const o=this.gBase.clone().negate(),a=we(1,0,0).applyQuaternion(this.qTarget);a.addScaledVector(o,-a.dot(o)),a.lengthSq()<1e-6&&a.set(1,0,0),a.normalize();const l=we(0,0,-1).applyQuaternion(this.qTarget),c=l.addScaledVector(o,-l.dot(o));return c.lengthSq()<1e-6&&c.copy(a).negate(),c.normalize(),{R:a.toArray(),L:a.clone().negate().toArray(),U:c.toArray(),D:c.clone().negate().toArray()}},cam:()=>({yaw:+this.yawOff.toFixed(3),pitch:+this.pitchOff.toFixed(3),dist:+this.camDist.toFixed(2),faded:this.solidMeshes.filter(o=>{const a=o.userData.fade;return!!a&&a.cur<.9}).length}),pitch:o=>this.pitch(o),win:()=>this.forceWin(),goto:o=>this.startLevel(o),warp:(o,a,l)=>{this.ball.pos.set(o,a,l),this.ball.vel.set(0,0,0)},gyroSet:(o,a)=>{this.gyroP0=0,this.gyroR0=0,this.gyroP=o,this.gyroR=a,this.gyroSeen=!0,this.gyroActive=!0}},this.renderer.setAnimationLoop(this.loop)}makeStarfield(){const n=new Float32Array(2700);for(let s=0;s<900;s++){const o=we().randomDirection().multiplyScalar(55+Math.random()*40);n[s*3]=o.x,n[s*3+1]=o.y,n[s*3+2]=o.z}const i=new qt;i.setAttribute("position",new qn(n,3));const r=new h_({color:10467583,size:.6,transparent:!0,opacity:.75,sizeAttenuation:!0,depthWrite:!1,fog:!1});return new mw(i,r)}clearLevel(){this.levelGroup&&(this.scene.remove(this.levelGroup),this.levelGroup.traverse(e=>{const n=e;n.material&&n.material.dispose&&!this.isShared(n.material)&&n.material.dispose()}),this.levelGroup=null),this.boxes=[],this.solidMeshes=[],this.stars=[],this.portal=null,this.tweens=[],this.fields=[],this.plates=[],this.bumpers=[],this.checkpoints=[],this.curField=null}isShared(e){const n=Array.isArray(e)?e[0]:e;return n===this.matSolid||n===this.matHazard||n===this.matTorus||n===this.matDisc||n===this.matField||n===this.matBumper||n===this.matPlateOff||n===this.matCpOff}buildLevel(e){var a,l,c,h;this.clearLevel();const n=kn[e];this.levelIdx=e;const i=new hs;this.levelGroup=i;for(const u of n.boxes){let d;if(u.hazard)d=new yt(this.geoBox,this.matHazard);else{const p=this.matSolid.clone();d=new yt(this.geoBox,p);const v=this.matEdge.clone();d.add(new ru(this.geoEdge,v)),d.userData.fade={mat:p,edgeMat:v,base:1,baseEdge:.4,cur:1,occl:!1},this.solidMeshes.push(d)}d.position.set(u.p[0],u.p[1],u.p[2]),d.scale.set(u.s[0],u.s[1],u.s[2]),i.add(d),this.boxes.push({min:we(u.p[0]-u.s[0]/2,u.p[1]-u.s[1]/2,u.p[2]-u.s[2]/2),max:we(u.p[0]+u.s[0]/2,u.p[1]+u.s[1]/2,u.p[2]+u.s[2]/2),hazard:!!u.hazard,mesh:d})}if(n.fields)for(const u of n.fields){const d=new yt(this.geoBox,this.matField);d.position.set(u.p[0],u.p[1],u.p[2]),d.scale.set(u.s[0],u.s[1],u.s[2]);const p=new ru(this.geoEdge,new Za({color:"#3fc1ff",transparent:!0,opacity:.55}));d.add(p),i.add(d),this.fields.push({min:we(u.p[0]-u.s[0]/2,u.p[1]-u.s[1]/2,u.p[2]-u.s[2]/2),max:we(u.p[0]+u.s[0]/2,u.p[1]+u.s[1]/2,u.p[2]+u.s[2]/2),dir:we(...u.dir).normalize(),mesh:d})}if(n.plates)for(const u of n.plates){const d=this.matPlateOff.clone(),p=new yt(this.geoPlate,d);p.position.set(u.p[0],u.p[1],u.p[2]);const v=we(...(a=u.n)!=null?a:[0,1,0]).normalize();p.quaternion.setFromUnitVectors(we(0,1,0),v),i.add(p),this.plates.push({pos:we(u.p[0],u.p[1],u.p[2]),active:!1,mat:d})}if(n.gates)for(const u of n.gates){const d=this.matGate.clone(),p=new Za({color:"#c9b3ff",transparent:!0,opacity:.8}),v=new yt(this.geoBox,d);v.position.set(u.p[0],u.p[1],u.p[2]),v.scale.set(u.s[0],u.s[1],u.s[2]),v.add(new ru(this.geoEdge,p)),v.userData.fade={mat:d,edgeMat:p,base:.85,baseEdge:.8,cur:1,occl:!1},i.add(v);const x={need:(l=u.need)!=null?l:1,opened:!1,animT:0,mesh:v};this.solidMeshes.push(v),this.boxes.push({min:we(u.p[0]-u.s[0]/2,u.p[1]-u.s[1]/2,u.p[2]-u.s[2]/2),max:we(u.p[0]+u.s[0]/2,u.p[1]+u.s[1]/2,u.p[2]+u.s[2]/2),hazard:!1,mesh:v,gate:x})}if(n.bumpers)for(const u of n.bumpers){const d=we(...u.n).normalize(),p=new yt(this.geoBump,this.matBumper);p.position.set(u.p[0],u.p[1],u.p[2]),p.quaternion.setFromUnitVectors(we(0,1,0),d);const v=new yt(this.geoCone,this.matBumper);v.position.copy(d.clone().multiplyScalar(.55)),v.quaternion.copy(p.quaternion),p.add(v),i.add(p),this.bumpers.push({pos:we(u.p[0],u.p[1],u.p[2]),n:d,power:(c=u.power)!=null?c:13.5,cd:0,disc:p})}if(n.checkpoints)for(const u of n.checkpoints){const d=this.matCpOff.clone(),p=new yt(this.geoRing,d);p.position.set(u.p[0],u.p[1],u.p[2]),p.rotation.y=Math.PI/2,i.add(p),this.checkpoints.push({pos:we(u.p[0],u.p[1],u.p[2]),active:!1,mat:d})}for(const u of n.stars){const d=this.matStarBase.clone(),p=new yt(this.geoStar,d);p.position.set(u[0],u[1],u[2]),i.add(p),this.stars.push({mesh:p,baseY:u[1],phase:Math.random()*Math.PI*2,got:!1})}this.starsTotal=this.stars.length,this.starsGot=0;const r=new hs;r.add(new yt(this.geoTorus,this.matTorus)),r.add(new yt(this.geoDisc,this.matDisc)),r.position.set(n.portal.p[0],n.portal.p[1],n.portal.p[2]),this.portalR=(h=n.portal.r)!=null?h:mm;const s=we(...n.portal.n).normalize();r.quaternion.setFromUnitVectors(we(0,0,1),s),i.add(r),this.portal=r;const o=Ew(n.boxes);this.boundMin.set(o.min[0],o.min[1],o.min[2]),this.boundMax.set(o.max[0],o.max[1],o.max[2]),this.spawn.set(...n.spawn),this.ball.pos.copy(this.spawn),this.ball.vel.set(0,0,0),this.scene.add(i)}startLevel(e){this.gen++,this.buildLevel(e),this.mode="play",this.enabled=!0,this.rotations=0,this.time=0,this.timerOn=!1,this.finished=!1,this.dead=!1,this.deaths=0,this.activePlates=0,this.checkpoint=null,this.boostT=0,this.prevContact=!1,this.gBase.set(0,-1,0),this.qBase.identity(),this.yawOff=0,this.pitchOff=0,this.composeQ(),this.camDist=gm,this.gyroSeen=!1,this.gyroActive=this.gyroOn&&this.gyroSeen,this.pushStats()}restart(){this.mode==="play"&&this.startLevel(this.levelIdx)}toAttract(){this.gen++,this.buildLevel(9),this.mode="attract",this.enabled=!1,this.gBase.set(0,-1,0),this.qBase.identity(),this.yawOff=0,this.pitchOff=0,this.composeQ()}setEnabled(e){this.mode==="play"&&(this.enabled=e)}tip(e){if(this.mode!=="play"||!this.enabled||this.finished||this.dead)return;const n=this.gBase.clone().negate(),i=we(1,0,0).applyQuaternion(this.qTarget);i.addScaledVector(n,-i.dot(n)),i.lengthSq()<1e-6&&i.set(1,0,0),i.normalize();const r=we(0,0,-1).applyQuaternion(this.qTarget),s=r.addScaledVector(n,-r.dot(n));s.lengthSq()<1e-6&&s.copy(i).negate(),s.normalize();let o;if(e==="R"?o=i:e==="L"?o=i.negate():e==="U"?o=s:o=s.negate(),this.curField){const a=o.addScaledVector(this.curField.dir,-o.dot(this.curField.dir));if(a.lengthSq()>.5){const l=performance.now();l-this.lastThrustT>140&&(this.lastThrustT=l,this.ball.vel.addScaledVector(a.normalize(),3.4),this.sfx.thrust())}this.timerOn||(this.timerOn=!0);return}this.gBase.copy(o),this.refitCamera(),this.rotations++,this.timerOn||(this.timerOn=!0),this.sfx.rotate()}restoreDown(){this.mode!=="play"||!this.enabled||this.finished||this.dead||this.curField||this.gBase.x===0&&this.gBase.y===-1&&this.gBase.z===0||(this.gBase.set(0,-1,0),this.refitCamera(),this.rotations++,this.timerOn||(this.timerOn=!0),this.sfx.rotate())}yaw(e){this.mode!=="play"||!this.enabled||this.finished||this.dead||(this.yawOff+=e*Math.PI*.5,this.composeQ(),this.sfx.rotate())}freeYaw(e){this.mode!=="play"||!this.enabled||(this.yawOff+=e,this.composeQ())}pitch(e){this.mode!=="play"||!this.enabled||(this.pitchOff=Ir.clamp(this.pitchOff+e,-1.25,1.25),this.composeQ())}enableGyro(e){return e?typeof window.DeviceOrientationEvent=="undefined"?!1:(this.gyroOn=!0,this.gyroSeen=!1,this.gyroActive=!1,this.gyroP=0,this.gyroR=0,window.addEventListener("deviceorientation",this.doeHandler),!0):(this.gyroOn=!1,this.gyroActive=!1,window.removeEventListener("deviceorientation",this.doeHandler),!0)}gyroIsActive(){return this.gyroActive}onDeviceOrientation(e){if(e.beta==null||e.gamma==null)return;const n=(typeof screen!="undefined"&&screen.orientation?screen.orientation.angle:0)||0;let i,r;switch(n){case 90:i=e.gamma,r=-e.beta;break;case 180:i=-e.beta,r=-e.gamma;break;case 270:case-90:i=-e.gamma,r=e.beta;break;default:i=e.beta,r=e.gamma}if(!this.gyroSeen){this.gyroSeen=!0,this.gyroActive=this.gyroOn,this.gyroP0=i,this.gyroR0=r,this.gyroP=i,this.gyroR=r;return}this.gyroP+=(i-this.gyroP)*.35,this.gyroR+=(r-this.gyroR)*.35}gyroOffset(e){const n=Math.abs(e),i=4,r=32;return n<=i?0:Math.sign(e)*Math.min(r,n-i)}forceWin(){this.mode==="play"&&!this.finished&&this.win()}dispose(){this.renderer.setAnimationLoop(null),window.removeEventListener("keydown",this.keyHandler),window.removeEventListener("resize",this.resizeHandler),this.ro&&this.ro.disconnect(),this.enableGyro(!1),this.renderer.dispose(),this.mode="off"}bindEvents(){window.addEventListener("keydown",this.keyHandler),window.addEventListener("resize",this.resizeHandler),this.canvas.addEventListener("pointerdown",this.pdHandler),window.addEventListener("pointermove",this.pmHandler),window.addEventListener("pointerup",this.puHandler),this.canvas.addEventListener("wheel",this.wheelHandler,{passive:!1}),typeof ResizeObserver!="undefined"&&(this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.canvas))}resize(){const e=this.canvas.clientWidth||window.innerWidth,n=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,n,!1),this.cam.aspect=e/Math.max(1,n),this.cam.updateProjectionMatrix()}composeQ(){const e=we(0,1,0).applyQuaternion(this.qBase),n=new ti().setFromAxisAngle(e,this.yawOff),i=new ti().setFromAxisAngle(we(1,0,0),this.pitchOff);this.qTarget.copy(n).multiply(this.qBase).multiply(i)}refitCamera(){const e=this.gBase.clone().negate(),n=we(0,0,-1).applyQuaternion(this.qBase),i=we(0,1,0).applyQuaternion(this.qBase);let r=n.clone().addScaledVector(e,-n.dot(e));if(r.lengthSq()<.0025&&(r=i.clone().addScaledVector(e,-i.dot(e))),r.lengthSq()<.0025){const c=we(1,0,0).applyQuaternion(this.qBase);r=c.clone().addScaledVector(e,-c.dot(e))}r.lengthSq()<.0025&&(r=we(1,0,0).addScaledVector(e,-e.x)),r.lengthSq()<1e-6&&(r=we(0,1,0).addScaledVector(e,-e.y));const o=r.normalize().clone().negate(),a=we().crossVectors(e,o).normalize(),l=new pt().makeBasis(a,e,o);this.qBase.setFromRotationMatrix(l),this.composeQ()}updateCamera(e){this.cam.quaternion.slerp(this.qTarget,1-Math.exp(-5.5*e));const i=we(0,0,this.camDist).applyQuaternion(this.cam.quaternion).add(this.ball.pos).clone().sub(this.ball.pos),r=i.length();i.normalize(),this.raycaster.set(this.ball.pos,i),this.raycaster.far=r;const s=this.raycaster.intersectObjects(this.solidMeshes,!1);let o=r;s.length&&(o=Math.max(2.2,s[0].distance-.6)),this.cam.position.copy(this.ball.pos).addScaledVector(i,o);const a=o+.6;for(const l of s){if(l.distance>a)break;const c=l.object.userData.fade;c&&(c.occl=!0)}this.updateFades(e),this.shake>.001&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake*=Math.exp(-5*e))}updateFades(e){for(const n of this.solidMeshes){const i=n.userData.fade;if(!i)continue;const r=i.occl?.14:1;i.occl=!1;const s=Math.min(1,(r===1?3.2:9)*e);i.cur+=(r-i.cur)*s,Math.abs(r-i.cur)<.005&&(i.cur=r);const o=i.cur>=.999;i.mat.transparent=!o,i.mat.opacity=i.base*i.cur,i.mat.depthWrite=i.cur>.85,i.edgeMat&&(i.edgeMat.opacity=i.baseEdge*(.35+.65*i.cur))}}computeG(){const e=we().copy(this.gBase);if(this.gyroOn&&this.gyroActive){const n=we(1,0,0).applyQuaternion(this.qTarget),i=we(0,0,-1).applyQuaternion(this.qTarget),r=this.gyroOffset(this.gyroP-this.gyroP0),s=this.gyroOffset(this.gyroR-this.gyroR0);r&&e.applyAxisAngle(n,-r*_m),s&&e.applyAxisAngle(i,-s*_m),e.normalize()}this.gEff.copy(e).multiplyScalar(ww)}resolveBox(e){const n=this.ball.pos,i=Ir.clamp(n.x,e.min.x,e.max.x),r=Ir.clamp(n.y,e.min.y,e.max.y),s=Ir.clamp(n.z,e.min.z,e.max.z),o=n.x-i,a=n.y-r,l=n.z-s,c=o*o+a*a+l*l;if(e.hazard)return c<sn*sn*.81&&this.die("hazard"),!1;if(c>=sn*sn)return!1;let h,u;if(c>1e-10){const p=Math.sqrt(c);h=we(o/p,a/p,l/p),u=sn-p}else{const p=[[n.x-e.min.x+sn,we(1,0,0)],[e.max.x-n.x+sn,we(-1,0,0)],[n.y-e.min.y+sn,we(0,1,0)],[e.max.y-n.y+sn,we(0,-1,0)],[n.z-e.min.z+sn,we(0,0,1)],[e.max.z-n.z+sn,we(0,0,-1)]];p.sort((v,x)=>v[0]-x[0]),h=p[0][1],u=p[0][0]}n.addScaledVector(h,u);const d=this.ball.vel.dot(h);return d<0&&(d<-2.2?this.ball.vel.addScaledVector(h,-1.16*d):this.ball.vel.addScaledVector(h,-d)),this.contactN.copy(h),!0}step(e){var s;const n=this.ball.vel;n.addScaledVector(this.gEff,e),this.boostT>0&&(this.boostT-=e);const i=this.boostT>0?Rw:Aw;n.length()>i&&n.setLength(i),n.multiplyScalar(1-Math.min(.5,Cw*e)),this.ball.pos.addScaledVector(n,e);let r=!1;for(let o=0;o<2;o++)for(const a of this.boxes)(s=a.gate)!=null&&s.opened||this.resolveBox(a)&&(r=!0);if(r){const o=this.contactN,a=n.dot(o),l=n.clone().addScaledVector(o,-a),h=Math.max(0,-this.gEff.dot(o))*.35+1.2,u=l.length();u>1e-4&&l.setLength(Math.max(0,u-h*e)),n.copy(l).addScaledVector(o,a),!this.prevContact&&a<-2.2&&this.sfx.land()}this.prevContact=r}updateZones(){const e=this.ball.pos;let n=null;for(const i of this.fields)if(e.x>i.min.x&&e.x<i.max.x&&e.y>i.min.y&&e.y<i.max.y&&e.z>i.min.z&&e.z<i.max.z){n=i;break}n!==this.curField&&(n?(this.gBase.copy(n.dir),this.sfx.field()):this.curField&&(this.gBase.set(0,-1,0),this.refitCamera()),this.curField=n);for(const i of this.plates)!i.active&&e.distanceTo(i.pos)<Pw&&(i.active=!0,this.activePlates++,i.mat.emissive.set("#ffb300"),i.mat.emissiveIntensity=.95,i.mat.color.set("#6b5316"),this.sfx.plate(),this.openGates());for(const i of this.bumpers)i.cd>0&&(i.cd-=1/60),i.cd<=0&&e.distanceTo(i.pos)<Lw&&(i.cd=.4,this.ball.vel.copy(i.n).multiplyScalar(i.power),this.gBase.set(0,-1,0),this.refitCamera(),this.boostT=.9,this.shake=Math.max(this.shake,.22),this.sfx.bumper());for(const i of this.checkpoints)!i.active&&e.distanceTo(i.pos)<Dw&&(i.active=!0,i.mat.emissive.set("#2dffa8"),i.mat.emissiveIntensity=1.1,i.mat.color.set("#0e4d33"),this.checkpoint={pos:i.pos.clone(),gBase:this.gBase.clone(),qBase:this.qBase.clone(),yawOff:this.yawOff,pitchOff:this.pitchOff},this.sfx.checkpoint())}openGates(){for(const e of this.boxes){const n=e.gate;if(n&&!n.opened&&this.activePlates>=n.need){n.opened=!0,this.sfx.gate();const i=this.solidMeshes.indexOf(n.mesh);i>=0&&this.solidMeshes.splice(i,1)}}}checkPickups(){const e=this.ball.pos;if(e.x<this.boundMin.x-Zr||e.x>this.boundMax.x+Zr||e.y<this.boundMin.y-Zr||e.y>this.boundMax.y+Zr||e.z<this.boundMin.z-Zr||e.z>this.boundMax.z+Zr){this.die("fall");return}for(const n of this.stars)!n.got&&n.mesh.position.distanceTo(e)<bw&&(n.got=!0,this.starsGot++,this.sfx.star(),this.tweens.push({obj:n.mesh,t:0,dur:.45,kind:"star"}));this.portal&&this.portal.position.distanceTo(e)<this.portalR&&this.win()}die(e){if(this.dead||this.finished)return;this.dead=!0,this.deaths++,this.shake=.35,this.sfx.die(),this.cb.onDeath(e);const n=++this.gen;window.setTimeout(()=>{if(n!==this.gen||this.mode!=="play")return;const i=this.checkpoint;this.ball.pos.copy(i?i.pos:this.spawn),this.ball.vel.set(0,0,0),this.gBase.copy(i?i.gBase:we(0,-1,0)),i?(this.qBase.copy(i.qBase),this.yawOff=i.yawOff,this.pitchOff=i.pitchOff):(this.qBase.identity(),this.yawOff=0,this.pitchOff=0),this.composeQ(),this.curField=null,this.boostT=0,this.dead=!1},320)}win(){this.finished=!0,this.enabled=!1,this.timerOn=!1,this.sfx.win(),this.portal&&this.tweens.push({obj:this.portal,t:0,dur:.8,kind:"win"});const e=++this.gen;window.setTimeout(()=>{e===this.gen&&this.cb.onWin({rotations:this.rotations,time:this.time,stars:this.starsGot,deaths:this.deaths})},800)}pushStats(){const e=this.cam.quaternion.clone().invert(),n=we(0,-1,0).applyQuaternion(e),i=Math.round(Math.atan2(n.x,n.y)*180/Math.PI);this.cb.onStats({time:this.time,rotations:this.rotations,stars:this.starsGot,starsTotal:this.starsTotal,deaths:this.deaths,gAngle:i})}}const m_="gt3d.progress.v2",cu="gt3d.muted.v1";function Uw(){try{const t=localStorage.getItem(m_);if(t){const e=JSON.parse(t);if(e&&typeof e.unlocked=="number")return{unlocked:Math.min(Math.max(1,e.unlocked),kn.length),best:e.best||{}}}}catch{}return{unlocked:1,best:{}}}function vm(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${String(n).padStart(2,"0")}`}function xm(t,e){return t===0&&e>=2?"S":t<=4?"A":"B"}const ym=typeof window!="undefined"&&(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||Math.min(window.innerWidth,window.innerHeight)<500);function Iw(){const t=$e.useRef(null),e=$e.useRef(null),n=$e.useRef(0),i=$e.useRef(Uw()),r=$e.useRef(0),[s,o]=$e.useState("title"),[a,l]=$e.useState(0),[c,h]=$e.useState({time:0,rotations:0,stars:0,starsTotal:3,deaths:0,gAngle:90}),[u,d]=$e.useState(null),[p,v]=$e.useState(i.current),[x,m]=$e.useState(!1),[f,g]=$e.useState(!1),[_,y]=$e.useState(!1),[C,T]=$e.useState(""),[A,P]=$e.useState(0),[S,E]=$e.useState(""),[O,W]=$e.useState(()=>localStorage.getItem(cu)==="1"),[ee,L]=$e.useState(!1),[z,q]=$e.useState(!1),$=$e.useCallback(Y=>{T(Y),window.setTimeout(()=>T(""),2600)},[]),N=$e.useCallback(Y=>{E(Y),window.clearTimeout(r.current),r.current=window.setTimeout(()=>E(""),7e3)},[]);$e.useEffect(()=>{const Y=t.current;if(!Y)return;let re;try{re=new Nw(Y,{onStats:h,onDeath:de=>{P(xe=>xe+1),$(de==="fall"?"坠出边界 — 空格回正可防迷路，R 键立刻重试":"撞上危险晶体 — 记住它的位置，R 键重试")},onPauseRequest:()=>m(de=>!de),onWin:de=>{var ve;const xe=n.current,Ve=i.current,I=Ve.best[xe],It=!I||de.stars>I.stars||de.rotations<I.rotations||de.time<I.time,Ee=I?{stars:Math.max(I.stars,de.stars),rotations:Math.min(I.rotations,de.rotations),time:Math.min(I.time,de.time),deaths:Math.min((ve=I.deaths)!=null?ve:de.deaths,de.deaths)}:{stars:de.stars,rotations:de.rotations,time:de.time,deaths:de.deaths},be={unlocked:Math.max(Ve.unlocked,Math.min(xe+2,kn.length)),best:{...Ve.best,[xe]:Ee}};i.current=be,v(be);try{localStorage.setItem(m_,JSON.stringify(be))}catch{}d({...de,rating:xm(de.deaths,de.stars),newRecord:It,level:xe})}})}catch{q(!0);return}e.current=re,re.sfx.muted=localStorage.getItem(cu)==="1",re.toAttract();const Me=()=>re.sfx.unlock();return window.addEventListener("pointerdown",Me,{once:!0}),()=>{window.removeEventListener("pointerdown",Me),re.dispose(),e.current=null}},[]),$e.useEffect(()=>{const Y=e.current;!Y||s!=="playing"||Y.setEnabled(!x&&!u)},[x,u,s]);const F=$e.useCallback(Y=>{const re=e.current;re&&(n.current=Y,l(Y),d(null),m(!1),y(!1),o("playing"),re.startLevel(Y),N(kn[Y].hint))},[N]),B=$e.useCallback(()=>{var Y;(Y=e.current)==null||Y.restart(),N(kn[n.current].hint)},[N]),Z=$e.useCallback(()=>{W(Y=>{const re=!Y;return localStorage.setItem(cu,re?"1":"0"),e.current&&(e.current.sfx.muted=re),re})},[]),Q=$e.useCallback(async()=>{const Y=e.current;if(Y){if(ee){Y.enableGyro(!1),L(!1),$("陀螺仪已关闭");return}try{const re=DeviceOrientationEvent;if(typeof re.requestPermission=="function"&&await re.requestPermission()!=="granted"){$("陀螺仪权限被拒绝，无法开启");return}const Me=Y.enableGyro(!0);if(L(Me),!Me){$("当前设备不支持陀螺仪");return}window.setTimeout(()=>{e.current&&!e.current.gyroIsActive()?$("未检测到陀螺仪数据（需要真实移动设备）"):$("陀螺仪已开启：倾斜手机即可偏转重力")},900)}catch{$("陀螺仪不可用")}}},[ee,$]),j=$e.useCallback(()=>{const Y=e.current;Y&&(m(!1),d(null),y(!1),o("title"),Y.toAttract())},[]),K=Y=>({onPointerDown:re=>{re.preventDefault(),Y();const Me=window.setInterval(Y,300),de=re.currentTarget,xe=()=>window.clearInterval(Me);de.addEventListener("pointerup",xe,{once:!0}),de.addEventListener("pointercancel",xe,{once:!0}),de.addEventListener("pointerleave",xe,{once:!0})}}),ce=V.jsxs("div",{className:"touch-layer",children:[V.jsxs("div",{className:"pad pad-move",children:[V.jsx("button",{className:"pad-btn pad-u",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.tip("U")}),children:"↑"}),V.jsx("button",{className:"pad-btn pad-l",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.tip("L")}),children:"←"}),V.jsx("button",{className:"pad-btn pad-r",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.tip("R")}),children:"→"}),V.jsx("button",{className:"pad-btn pad-d",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.tip("D")}),children:"↓"}),V.jsx("div",{className:"pad-center"})]}),V.jsxs("div",{className:"pad pad-yaw",children:[V.jsx("button",{className:"pad-btn",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.yaw(1)}),children:"↺"}),V.jsx("button",{className:"pad-btn",...K(()=>{var Y;return(Y=e.current)==null?void 0:Y.yaw(-1)}),children:"↻"}),V.jsx("button",{className:"pad-btn pad-restore",onClick:()=>{var Y;return(Y=e.current)==null?void 0:Y.restoreDown()},title:"重力回正",children:"回"})]})]});return V.jsxs("div",{className:"app",children:[V.jsx("canvas",{ref:t,className:"game-canvas"}),A>0&&V.jsx("div",{className:"death-flash"},A),s==="title"&&V.jsxs("div",{className:"overlay title-screen",children:[V.jsx("div",{className:"title-badge",children:"3D"}),V.jsx("h1",{className:"title-main",children:"几何贯穿"}),V.jsx("div",{className:"title-sub",children:"引力矩阵 · GRAVITY MATRIX"}),V.jsx("p",{className:"title-desc",children:"六向重力解谜：倾倒重力让球滚动、平飞、坠落；空格随时回正向下，地面罗盘永不迷路。借助弹射板、反重力井、压力闸门与检查信标，抵达传送门。连按两次 ←/→ 可反转重力。"}),V.jsxs("div",{className:"title-actions",children:[V.jsx("button",{className:"btn btn-primary",onClick:()=>F(Math.min(p.unlocked,kn.length)-1),children:p.unlocked>1?"继续游戏":"开始游戏"}),V.jsx("button",{className:"btn",onClick:()=>y(!0),children:"选择关卡"}),V.jsx("button",{className:"btn",onClick:()=>g(!0),children:"玩法说明"})]}),V.jsxs("div",{className:"title-progress",children:["已解锁 ",p.unlocked," / ",kn.length," 关"]}),V.jsx("div",{className:"title-foot",children:V.jsxs("span",{children:["2D 原版：",V.jsx("a",{href:"https://ariefenv-hash.github.io/geometric-traverse/",target:"_blank",rel:"noreferrer",children:"几何贯穿 · 视界重力"})]})})]}),s==="playing"&&V.jsxs(V.Fragment,{children:[V.jsxs("div",{className:"hud",children:[V.jsxs("div",{className:"hud-left",children:[V.jsxs("span",{className:"hud-level",children:["第 ",a+1," 关 · ",kn[a].name]}),V.jsxs("span",{className:"hud-stars",children:["★".repeat(c.stars),"☆".repeat(Math.max(0,c.starsTotal-c.stars))]})]}),V.jsxs("div",{className:"hud-right",children:[V.jsx("span",{className:"grav-compass",title:"地面罗盘：箭头指向世界地面在屏幕上的方位",children:V.jsxs("svg",{viewBox:"0 0 36 36",style:{transform:`rotate(${c.gAngle}deg)`},children:[V.jsx("circle",{cx:"18",cy:"18",r:"16",className:"gc-ring"}),V.jsx("path",{d:"M 18 6 L 24 20 L 18 16.5 L 12 20 Z",className:"gc-arrow"})]})}),V.jsxs("span",{className:"hud-stat",children:["转向 ",c.rotations]}),V.jsxs("span",{className:"hud-stat",children:["坠落 ",c.deaths]}),V.jsx("span",{className:"hud-stat",children:vm(c.time)}),V.jsx("button",{className:"icon-btn",onClick:B,title:"重开 (R)",children:"↺"}),V.jsx("button",{className:"icon-btn"+(ee?" on":""),onClick:Q,title:"陀螺仪重力",children:"陀"}),V.jsx("button",{className:"icon-btn"+(O?"":" on"),onClick:Z,title:"音效",children:O?"静":"音"}),V.jsx("button",{className:"icon-btn",onClick:()=>m(!0),title:"暂停 (Esc)",children:"‖"})]})]}),S&&V.jsx("div",{className:"hint-banner",onClick:()=>E(""),children:S}),!ym&&V.jsx("div",{className:"key-hints",children:"↑ ↓ ← → 倾倒重力 · 空格 回正向下 · Q/E 90°旋转 · 拖拽自由环视（可俯仰） · 滚轮缩放 · R 重开 · Esc 暂停"}),ym&&ce]}),_&&V.jsx("div",{className:"overlay modal-overlay",onClick:()=>y(!1),children:V.jsxs("div",{className:"modal",onClick:Y=>Y.stopPropagation(),children:[V.jsx("div",{className:"modal-title",children:"选择关卡"}),V.jsx("div",{className:"level-grid",children:kn.map((Y,re)=>{const Me=re+1>p.unlocked,de=p.best[re];return V.jsxs("button",{className:"level-cell"+(Me?" locked":""),disabled:Me,onClick:()=>F(re),children:[V.jsx("span",{className:"lv-num",children:re+1}),V.jsx("span",{className:"lv-name",children:Me?"未解锁":Y.name}),V.jsx("span",{className:"lv-best",children:Me?"···":de?`★${de.stars} · ${de.deaths!=null?xm(de.deaths,de.stars):"—"}`:"未通关"})]},re)})}),V.jsx("div",{className:"modal-actions",children:V.jsx("button",{className:"btn",onClick:()=>y(!1),children:"返回"})})]})}),f&&V.jsx("div",{className:"overlay modal-overlay",onClick:()=>g(!1),children:V.jsxs("div",{className:"modal help-modal",onClick:Y=>Y.stopPropagation(),children:[V.jsx("div",{className:"modal-title",children:"玩法说明"}),V.jsxs("div",{className:"help-body",children:[V.jsxs("p",{children:[V.jsx("b",{children:"目标："}),"操控重力方向，让小球抵达发光传送门。途中的金色八面体是星星（每关 3 颗），红色晶簇碰到即重生。"]}),V.jsx("p",{children:V.jsx("b",{children:"核心操作（重力只会倾倒 90°）："})}),V.jsxs("ul",{children:[V.jsx("li",{children:"← / →：重力向屏幕左 / 右倾倒，球贴地滚动"}),V.jsx("li",{children:"↑：重力倒向屏幕深处；↓：倒向屏幕近处"}),V.jsxs("li",{children:[V.jsx("b",{children:"连按两次 ←（或 →）：重力反转"}),"，球飞向天花板；连按四次可完成「升空→行军→垂直下坠」"]}),V.jsxs("li",{children:[V.jsx("b",{children:"空格：重力瞬间回正世界向下"})," —— 倒悬迷路时的万能保险，随时可按"]}),V.jsxs("li",{children:["顶栏",V.jsx("b",{children:"地面罗盘"}),"箭头始终指向世界地面在屏幕上的方位——镜头翻滚后一眼找到「下」在哪"]}),V.jsxs("li",{children:["Q / E：90° 旋转视角；",V.jsx("b",{children:"在画面上按住拖拽可自由环视"}),"（上下拖动=俯视 / 仰视）；滚轮或双指捏合缩放"]}),V.jsxs("li",{children:[V.jsx("b",{children:"穿墙透视："}),"墙壁挡住小球与镜头时会自动变半透明，任何角度都不会丢失视野"]}),V.jsx("li",{children:"R 重开；Esc 暂停"})]}),V.jsx("p",{children:V.jsx("b",{children:"机关图鉴："})}),V.jsxs("ul",{children:[V.jsxs("li",{children:[V.jsx("b",{children:"弹射板"}),"（青色箭头圆盘）：触到即沿箭头方向强力弹射，可飞越断崖"]}),V.jsxs("li",{children:[V.jsx("b",{children:"反重力井"}),"（青色半透明区）：场内重力强制变为场的方向；",V.jsx("b",{children:"方向键在场内是推进脉冲"}),"，可微调航向与升力"]}),V.jsxs("li",{children:[V.jsx("b",{children:"压力板 + 闸门"}),"（琥珀圆盘 / 紫色能量墙）：滚过压力板即永久点亮，集齐后闸门溶解"]}),V.jsxs("li",{children:[V.jsx("b",{children:"检查信标"}),"（立环）：穿过即激活，此后坠落或触刺都会回到信标处（连重力姿态一起还原）"]})]}),V.jsxs("p",{children:[V.jsx("b",{children:"移动端："}),"左下方向垫 = 倾倒重力（可长按连发），右下 ↺/↻ = 90° 旋转视角、回 = 重力回正；在画面上",V.jsx("b",{children:"拖拽可自由环视（含俯仰）"}),"，双指捏合缩放。"]}),V.jsxs("p",{children:[V.jsx("b",{children:"陀螺仪（实验）："}),"点击顶栏「陀」开启权限后，倾斜手机即可在当前重力基础上连续偏转方向；竖屏横屏自动适配，重新开关可校准基准角。"]}),V.jsxs("p",{children:[V.jsx("b",{children:"评价："}),"零死亡且至少 2 星 = 棱镜 S；死亡 ≤ 4 = A；通关 = B。转向数与最短用时单独保存为纪录，破纪录会在结算时庆祝。"]})]}),V.jsx("div",{className:"modal-actions",children:V.jsx("button",{className:"btn btn-primary",onClick:()=>g(!1),children:"明白了"})})]})}),x&&!u&&s==="playing"&&V.jsx("div",{className:"overlay modal-overlay",children:V.jsxs("div",{className:"modal pause-modal",children:[V.jsx("div",{className:"modal-title",children:"已暂停"}),V.jsxs("div",{className:"modal-actions column",children:[V.jsx("button",{className:"btn btn-primary",onClick:()=>m(!1),children:"继续"}),V.jsx("button",{className:"btn",onClick:B,children:"重开本关"}),V.jsx("button",{className:"btn",onClick:()=>{m(!1),y(!0)},children:"选择关卡"}),V.jsx("button",{className:"btn",onClick:j,children:"回到标题"})]})]})}),u&&V.jsxs("div",{className:"overlay modal-overlay",children:[Array.from({length:18}).map((Y,re)=>V.jsx("i",{className:"confetti c"+re%6,style:{left:`${re*37%100}%`,animationDelay:`${re%9*.12}s`}},re)),V.jsxs("div",{className:"modal win-modal",children:[u.newRecord&&V.jsx("div",{className:"record-badge",children:"新纪录！"}),V.jsx("div",{className:"rating rating-"+u.rating,children:u.rating}),V.jsx("div",{className:"win-title",children:u.level===kn.length-1?"全部通关！":"关卡完成"}),V.jsx("div",{className:"win-stars",children:[0,1,2].map(Y=>V.jsx("span",{className:Y<u.stars?"got":"",children:"★"},Y))}),V.jsxs("div",{className:"win-stats",children:[V.jsxs("div",{children:[V.jsx("i",{children:"转向"}),V.jsx("b",{children:u.rotations})]}),V.jsxs("div",{children:[V.jsx("i",{children:"用时"}),V.jsx("b",{children:vm(u.time)})]}),V.jsxs("div",{children:[V.jsx("i",{children:"坠落"}),V.jsx("b",{children:u.deaths})]})]}),V.jsx("div",{className:"win-tip",children:"零死亡 + 2 星 = S · 坠落 ≤ 4 = A"}),V.jsxs("div",{className:"modal-actions",children:[V.jsx("button",{className:"btn",onClick:()=>F(u.level),children:"重玩"}),u.level<kn.length-1?V.jsx("button",{className:"btn btn-primary",onClick:()=>F(u.level+1),children:"下一关"}):V.jsx("button",{className:"btn btn-primary",onClick:()=>{d(null),y(!0)},children:"选关"})]})]})]}),C&&V.jsx("div",{className:"toast",children:C}),z&&V.jsx("div",{className:"overlay modal-overlay",children:V.jsxs("div",{className:"modal",children:[V.jsx("div",{className:"modal-title",children:"无法启动"}),V.jsx("p",{className:"help-body",children:"当前浏览器不支持 WebGL，请更换较新的浏览器（Chrome / Edge / Safari / Firefox 均可）。"})]})})]})}N0(document.getElementById("root")).render(V.jsx(Iw,{}));
