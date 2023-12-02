function lg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _d={exports:{}},fo={},kd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=Symbol.for("react.element"),ug=Symbol.for("react.portal"),cg=Symbol.for("react.fragment"),fg=Symbol.for("react.strict_mode"),dg=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),pg=Symbol.for("react.context"),mg=Symbol.for("react.forward_ref"),gg=Symbol.for("react.suspense"),vg=Symbol.for("react.memo"),yg=Symbol.for("react.lazy"),ac=Symbol.iterator;function wg(e){return e===null||typeof e!="object"?null:(e=ac&&e[ac]||e["@@iterator"],typeof e=="function"?e:null)}var Sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ed=Object.assign,Id={};function dr(e,t,n){this.props=e,this.context=t,this.refs=Id,this.updater=n||Sd}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cd(){}Cd.prototype=dr.prototype;function jl(e,t,n){this.props=e,this.context=t,this.refs=Id,this.updater=n||Sd}var $l=jl.prototype=new Cd;$l.constructor=jl;Ed($l,dr.prototype);$l.isPureReactComponent=!0;var oc=Array.isArray,xd=Object.prototype.hasOwnProperty,Bl={current:null},Td={key:!0,ref:!0,__self:!0,__source:!0};function Pd(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)xd.call(t,r)&&!Td.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:wi,type:e,key:a,ref:o,props:i,_owner:Bl.current}}function _g(e,t){return{$$typeof:wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===wi}function kg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sc=/\/+/g;function Fo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kg(""+e.key):t.toString(36)}function ua(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case wi:case ug:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Fo(o,0):r,oc(i)?(n="",e!=null&&(n=e.replace(sc,"$&/")+"/"),ua(i,t,n,"",function(u){return u})):i!=null&&(Hl(i)&&(i=_g(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",oc(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Fo(a,s);o+=ua(a,t,n,l,i)}else if(l=wg(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Fo(a,s++),o+=ua(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Mi(e,t,n){if(e==null)return e;var r=[],i=0;return ua(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Sg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},ca={transition:null},Eg={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:ca,ReactCurrentOwner:Bl};M.Children={map:Mi,forEach:function(e,t,n){Mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Mi(e,function(){t++}),t},toArray:function(e){return Mi(e,function(t){return t})||[]},only:function(e){if(!Hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=dr;M.Fragment=cg;M.Profiler=dg;M.PureComponent=jl;M.StrictMode=fg;M.Suspense=gg;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ed({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Bl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)xd.call(t,l)&&!Td.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:wi,type:e.type,key:i,ref:a,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:pg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hg,_context:e},e.Consumer=e};M.createElement=Pd;M.createFactory=function(e){var t=Pd.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:mg,render:e}};M.isValidElement=Hl;M.lazy=function(e){return{$$typeof:yg,_payload:{_status:-1,_result:e},_init:Sg}};M.memo=function(e,t){return{$$typeof:vg,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ca.transition;ca.transition={};try{e()}finally{ca.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return ye.current.useCallback(e,t)};M.useContext=function(e){return ye.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};M.useEffect=function(e,t){return ye.current.useEffect(e,t)};M.useId=function(){return ye.current.useId()};M.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ye.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};M.useRef=function(e){return ye.current.useRef(e)};M.useState=function(e){return ye.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ye.current.useTransition()};M.version="18.2.0";kd.exports=M;var F=kd.exports;const ho=wd(F),Ig=lg({__proto__:null,default:ho},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg=F,xg=Symbol.for("react.element"),Tg=Symbol.for("react.fragment"),Pg=Object.prototype.hasOwnProperty,bg=Cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ag={key:!0,ref:!0,__self:!0,__source:!0};function bd(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Pg.call(t,r)&&!Ag.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xg,type:e,key:a,ref:o,props:i,_owner:bg.current}}fo.Fragment=Tg;fo.jsx=bd;fo.jsxs=bd;_d.exports=fo;var O=_d.exports,Cs={},Ad={exports:{}},be={},Od={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,N){var L=T.length;T.push(N);e:for(;0<L;){var Z=L-1>>>1,ae=T[Z];if(0<i(ae,N))T[Z]=N,T[L]=ae,L=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var N=T[0],L=T.pop();if(L!==N){T[0]=L;e:for(var Z=0,ae=T.length,Li=ae>>>1;Z<Li;){var Zt=2*(Z+1)-1,zo=T[Zt],en=Zt+1,Di=T[en];if(0>i(zo,L))en<ae&&0>i(Di,zo)?(T[Z]=Di,T[en]=L,Z=en):(T[Z]=zo,T[Zt]=L,Z=Zt);else if(en<ae&&0>i(Di,L))T[Z]=Di,T[en]=L,Z=en;else break e}}return N}function i(T,N){var L=T.sortIndex-N.sortIndex;return L!==0?L:T.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,h=3,g=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=T)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function v(T){if(w=!1,m(T),!y)if(n(l)!==null)y=!0,Mo(k);else{var N=n(u);N!==null&&Uo(v,N.startTime-T)}}function k(T,N){y=!1,w&&(w=!1,p(b),b=-1),g=!0;var L=h;try{for(m(N),d=n(l);d!==null&&(!(d.expirationTime>N)||T&&!ze());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,h=d.priorityLevel;var ae=Z(d.expirationTime<=N);N=e.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&r(l),m(N)}else r(l);d=n(l)}if(d!==null)var Li=!0;else{var Zt=n(u);Zt!==null&&Uo(v,Zt.startTime-N),Li=!1}return Li}finally{d=null,h=L,g=!1}}var E=!1,I=null,b=-1,U=5,R=-1;function ze(){return!(e.unstable_now()-R<U)}function vr(){if(I!==null){var T=e.unstable_now();R=T;var N=!0;try{N=I(!0,T)}finally{N?yr():(E=!1,I=null)}}else E=!1}var yr;if(typeof f=="function")yr=function(){f(vr)};else if(typeof MessageChannel<"u"){var ic=new MessageChannel,sg=ic.port2;ic.port1.onmessage=vr,yr=function(){sg.postMessage(null)}}else yr=function(){S(vr,0)};function Mo(T){I=T,E||(E=!0,yr())}function Uo(T,N){b=S(function(){T(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Mo(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var L=h;h=N;try{return T()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,N){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=h;h=T;try{return N()}finally{h=L}},e.unstable_scheduleCallback=function(T,N,L){var Z=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Z+L:Z):L=Z,T){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=L+ae,T={id:c++,callback:N,priorityLevel:T,startTime:L,expirationTime:ae,sortIndex:-1},L>Z?(T.sortIndex=L,t(u,T),n(l)===null&&T===n(u)&&(w?(p(b),b=-1):w=!0,Uo(v,L-Z))):(T.sortIndex=ae,t(l,T),y||g||(y=!0,Mo(k))),T},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(T){var N=h;return function(){var L=h;h=N;try{return T.apply(this,arguments)}finally{h=L}}}})(Nd);Od.exports=Nd;var Og=Od.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=F,Pe=Og;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ld=new Set,Yr={};function Cn(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Yr[e]=t,e=0;e<t.length;e++)Ld.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xs=Object.prototype.hasOwnProperty,Ng=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},uc={};function Rg(e){return xs.call(uc,e)?!0:xs.call(lc,e)?!1:Ng.test(e)?uc[e]=!0:(lc[e]=!0,!1)}function Lg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dg(e,t,n,r){if(t===null||typeof t>"u"||Lg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wl=/[\-:]([a-z])/g;function Vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wl,Vl);ce[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wl,Vl);ce[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wl,Vl);ce[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yl(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dg(t,n,i,r)&&(n=null),r||i===null?Rg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),On=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Kl=Symbol.for("react.strict_mode"),Ts=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),Md=Symbol.for("react.context"),Gl=Symbol.for("react.forward_ref"),Ps=Symbol.for("react.suspense"),bs=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Ud=Symbol.for("react.offscreen"),cc=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,jo;function Tr(e){if(jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jo=t&&t[1]||""}return`
`+jo+e}var $o=!1;function Bo(e,t){if(!e||$o)return"";$o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{$o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function Mg(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=Bo(e.type,!1),e;case 11:return e=Bo(e.type.render,!1),e;case 1:return e=Bo(e.type,!0),e;default:return""}}function As(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case On:return"Portal";case Ts:return"Profiler";case Kl:return"StrictMode";case Ps:return"Suspense";case bs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Md:return(e.displayName||"Context")+".Consumer";case Dd:return(e._context.displayName||"Context")+".Provider";case Gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return t=e.displayName||null,t!==null?t:As(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return As(e(t))}catch{}}return null}function Ug(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return As(t);case 8:return t===Kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zg(e){var t=zd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){e._valueTracker||(e._valueTracker=zg(e))}function Fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Os(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jd(e,t){t=t.checked,t!=null&&Yl(e,"checked",t,!1)}function Ns(e,t){jd(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rs(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rs(e,t,n){(t!=="number"||Ta(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pr=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Pr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function $d(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ds(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fi,Hd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fi=Fi||document.createElement("div"),Fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fg=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){Fg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Wd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function Vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var jg=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ms(e,t){if(t){if(jg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zs=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,Gn=null,Qn=null;function mc(e){if(e=Si(e)){if(typeof Fs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=yo(t),Fs(e.stateNode,e.type,t))}}function Yd(e){Gn?Qn?Qn.push(e):Qn=[e]:Gn=e}function Kd(){if(Gn){var e=Gn,t=Qn;if(Qn=Gn=null,mc(e),t)for(e=0;e<t.length;e++)mc(t[e])}}function Gd(e,t){return e(t)}function Qd(){}var Ho=!1;function Xd(e,t,n){if(Ho)return e(t,n);Ho=!0;try{return Gd(e,t,n)}finally{Ho=!1,(Gn!==null||Qn!==null)&&(Qd(),Kd())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var js=!1;if(ut)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){js=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{js=!1}function $g(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Dr=!1,Pa=null,ba=!1,$s=null,Bg={onError:function(e){Dr=!0,Pa=e}};function Hg(e,t,n,r,i,a,o,s,l){Dr=!1,Pa=null,$g.apply(Bg,arguments)}function Wg(e,t,n,r,i,a,o,s,l){if(Hg.apply(this,arguments),Dr){if(Dr){var u=Pa;Dr=!1,Pa=null}else throw Error(_(198));ba||(ba=!0,$s=u)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gc(e){if(xn(e)!==e)throw Error(_(188))}function Vg(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return gc(i),e;if(a===r)return gc(i),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Jd(e){return e=Vg(e),e!==null?Zd(e):null}function Zd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zd(e);if(t!==null)return t;e=e.sibling}return null}var eh=Pe.unstable_scheduleCallback,vc=Pe.unstable_cancelCallback,Yg=Pe.unstable_shouldYield,Kg=Pe.unstable_requestPaint,ee=Pe.unstable_now,Gg=Pe.unstable_getCurrentPriorityLevel,ql=Pe.unstable_ImmediatePriority,th=Pe.unstable_UserBlockingPriority,Aa=Pe.unstable_NormalPriority,Qg=Pe.unstable_LowPriority,nh=Pe.unstable_IdlePriority,po=null,Je=null;function Xg(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(po,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Zg,qg=Math.log,Jg=Math.LN2;function Zg(e){return e>>>=0,e===0?32:31-(qg(e)/Jg|0)|0}var ji=64,$i=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=br(s):(a&=o,a!==0&&(r=br(a)))}else o=n&~i,o!==0?r=br(o):a!==0&&(r=br(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),i=1<<n,r|=e[n],t&=~i;return r}function ev(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-We(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=ev(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Bs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rh(){var e=ji;return ji<<=1,!(ji&4194240)&&(ji=64),e}function Wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function nv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-We(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Jl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function ih(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ah,Zl,oh,sh,lh,Hs=!1,Bi=[],Lt=null,Dt=null,Mt=null,Qr=new Map,Xr=new Map,Ct=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yc(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xr.delete(t.pointerId)}}function kr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Si(t),t!==null&&Zl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function iv(e,t,n,r,i){switch(t){case"focusin":return Lt=kr(Lt,e,t,n,r,i),!0;case"dragenter":return Dt=kr(Dt,e,t,n,r,i),!0;case"mouseover":return Mt=kr(Mt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Qr.set(a,kr(Qr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Xr.set(a,kr(Xr.get(a)||null,e,t,n,r,i)),!0}return!1}function uh(e){var t=an(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=qd(n),t!==null){e.blockedOn=t,lh(e.priority,function(){oh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ws(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zs=r,n.target.dispatchEvent(r),zs=null}else return t=Si(n),t!==null&&Zl(t),e.blockedOn=n,!1;t.shift()}return!0}function wc(e,t,n){fa(e)&&n.delete(t)}function av(){Hs=!1,Lt!==null&&fa(Lt)&&(Lt=null),Dt!==null&&fa(Dt)&&(Dt=null),Mt!==null&&fa(Mt)&&(Mt=null),Qr.forEach(wc),Xr.forEach(wc)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Hs||(Hs=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,av)))}function qr(e){function t(i){return Sr(i,e)}if(0<Bi.length){Sr(Bi[0],e);for(var n=1;n<Bi.length;n++){var r=Bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&Sr(Lt,e),Dt!==null&&Sr(Dt,e),Mt!==null&&Sr(Mt,e),Qr.forEach(t),Xr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)uh(n),n.blockedOn===null&&Ct.shift()}var Xn=vt.ReactCurrentBatchConfig,Na=!0;function ov(e,t,n,r){var i=j,a=Xn.transition;Xn.transition=null;try{j=1,eu(e,t,n,r)}finally{j=i,Xn.transition=a}}function sv(e,t,n,r){var i=j,a=Xn.transition;Xn.transition=null;try{j=4,eu(e,t,n,r)}finally{j=i,Xn.transition=a}}function eu(e,t,n,r){if(Na){var i=Ws(e,t,n,r);if(i===null)es(e,t,r,Ra,n),yc(e,r);else if(iv(i,e,t,n,r))r.stopPropagation();else if(yc(e,r),t&4&&-1<rv.indexOf(e)){for(;i!==null;){var a=Si(i);if(a!==null&&ah(a),a=Ws(e,t,n,r),a===null&&es(e,t,r,Ra,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else es(e,t,r,null,n)}}var Ra=null;function Ws(e,t,n,r){if(Ra=null,e=Xl(r),e=an(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ra=e,null}function ch(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gg()){case ql:return 1;case th:return 4;case Aa:case Qg:return 16;case nh:return 536870912;default:return 16}default:return 16}}var Ot=null,tu=null,da=null;function fh(){if(da)return da;var e,t=tu,n=t.length,r,i="value"in Ot?Ot.value:Ot.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return da=i.slice(e,1<r?1-r:void 0)}function ha(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function _c(){return!1}function Ae(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Hi:_c,this.isPropagationStopped=_c,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=Ae(hr),ki=X({},hr,{view:0,detail:0}),lv=Ae(ki),Vo,Yo,Er,mo=X({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(Vo=e.screenX-Er.screenX,Yo=e.screenY-Er.screenY):Yo=Vo=0,Er=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),kc=Ae(mo),uv=X({},mo,{dataTransfer:0}),cv=Ae(uv),fv=X({},ki,{relatedTarget:0}),Ko=Ae(fv),dv=X({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=Ae(dv),pv=X({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mv=Ae(pv),gv=X({},hr,{data:0}),Sc=Ae(gv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wv[e])?!!t[e]:!1}function ru(){return _v}var kv=X({},ki,{key:function(e){if(e.key){var t=vv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ha(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?ha(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ha(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sv=Ae(kv),Ev=X({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=Ae(Ev),Iv=X({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Cv=Ae(Iv),xv=X({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=Ae(xv),Pv=X({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=Ae(Pv),Av=[9,13,27,32],iu=ut&&"CompositionEvent"in window,Mr=null;ut&&"documentMode"in document&&(Mr=document.documentMode);var Ov=ut&&"TextEvent"in window&&!Mr,dh=ut&&(!iu||Mr&&8<Mr&&11>=Mr),Ic=String.fromCharCode(32),Cc=!1;function hh(e,t){switch(e){case"keyup":return Av.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ph(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function Nv(e,t){switch(e){case"compositionend":return ph(t);case"keypress":return t.which!==32?null:(Cc=!0,Ic);case"textInput":return e=t.data,e===Ic&&Cc?null:e;default:return null}}function Rv(e,t){if(Rn)return e==="compositionend"||!iu&&hh(e,t)?(e=fh(),da=tu=Ot=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dh&&t.locale!=="ko"?null:t.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lv[e.type]:t==="textarea"}function mh(e,t,n,r){Yd(r),t=La(t,"onChange"),0<t.length&&(n=new nu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,Jr=null;function Dv(e){xh(e,0)}function go(e){var t=Mn(e);if(Fd(t))return e}function Mv(e,t){if(e==="change")return t}var gh=!1;if(ut){var Go;if(ut){var Qo="oninput"in document;if(!Qo){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),Qo=typeof Tc.oninput=="function"}Go=Qo}else Go=!1;gh=Go&&(!document.documentMode||9<document.documentMode)}function Pc(){Ur&&(Ur.detachEvent("onpropertychange",vh),Jr=Ur=null)}function vh(e){if(e.propertyName==="value"&&go(Jr)){var t=[];mh(t,Jr,e,Xl(e)),Xd(Dv,t)}}function Uv(e,t,n){e==="focusin"?(Pc(),Ur=t,Jr=n,Ur.attachEvent("onpropertychange",vh)):e==="focusout"&&Pc()}function zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(Jr)}function Fv(e,t){if(e==="click")return go(t)}function jv(e,t){if(e==="input"||e==="change")return go(t)}function $v(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:$v;function Zr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xs.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ac(e,t){var n=bc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bc(n)}}function yh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wh(){for(var e=window,t=Ta();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ta(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bv(e){var t=wh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yh(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Ac(n,a);var o=Ac(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hv=ut&&"documentMode"in document&&11>=document.documentMode,Ln=null,Vs=null,zr=null,Ys=!1;function Oc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ys||Ln==null||Ln!==Ta(r)||(r=Ln,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Zr(zr,r)||(zr=r,r=La(Vs,"onSelect"),0<r.length&&(t=new nu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function Wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionend:Wi("Transition","TransitionEnd")},Xo={},_h={};ut&&(_h=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function vo(e){if(Xo[e])return Xo[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _h)return Xo[e]=t[n];return e}var kh=vo("animationend"),Sh=vo("animationiteration"),Eh=vo("animationstart"),Ih=vo("transitionend"),Ch=new Map,Nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Ch.set(e,t),Cn(t,[e])}for(var qo=0;qo<Nc.length;qo++){var Jo=Nc[qo],Wv=Jo.toLowerCase(),Vv=Jo[0].toUpperCase()+Jo.slice(1);Qt(Wv,"on"+Vv)}Qt(kh,"onAnimationEnd");Qt(Sh,"onAnimationIteration");Qt(Eh,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Ih,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Rc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wg(r,t,void 0,e),e.currentTarget=null}function xh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Rc(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Rc(i,s,u),a=l}}}if(ba)throw e=$s,ba=!1,$s=null,e}function H(e,t){var n=t[qs];n===void 0&&(n=t[qs]=new Set);var r=e+"__bubble";n.has(r)||(Th(t,e,2,!1),n.add(r))}function Zo(e,t,n){var r=0;t&&(r|=4),Th(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[Vi]){e[Vi]=!0,Ld.forEach(function(n){n!=="selectionchange"&&(Yv.has(n)||Zo(n,!1,e),Zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,Zo("selectionchange",!1,t))}}function Th(e,t,n,r){switch(ch(t)){case 1:var i=ov;break;case 4:i=sv;break;default:i=eu}n=i.bind(null,t,n,e),i=void 0,!js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function es(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=an(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Xd(function(){var u=a,c=Xl(n),d=[];e:{var h=Ch.get(e);if(h!==void 0){var g=nu,y=e;switch(e){case"keypress":if(ha(n)===0)break e;case"keydown":case"keyup":g=Sv;break;case"focusin":y="focus",g=Ko;break;case"focusout":y="blur",g=Ko;break;case"beforeblur":case"afterblur":g=Ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Cv;break;case kh:case Sh:case Eh:g=hv;break;case Ih:g=Tv;break;case"scroll":g=lv;break;case"wheel":g=bv;break;case"copy":case"cut":case"paste":g=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ec}var w=(t&4)!==0,S=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,m;f!==null;){m=f;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Gr(f,p),v!=null&&w.push(ti(f,v,m)))),S)break;f=f.return}0<w.length&&(h=new g(h,y,null,n,c),d.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==zs&&(y=n.relatedTarget||n.fromElement)&&(an(y)||y[ct]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?an(y):null,y!==null&&(S=xn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=kc,v="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ec,v="onPointerLeave",p="onPointerEnter",f="pointer"),S=g==null?h:Mn(g),m=y==null?h:Mn(y),h=new w(v,f+"leave",g,n,c),h.target=S,h.relatedTarget=m,v=null,an(c)===u&&(w=new w(p,f+"enter",y,n,c),w.target=m,w.relatedTarget=S,v=w),S=v,g&&y)t:{for(w=g,p=y,f=0,m=w;m;m=An(m))f++;for(m=0,v=p;v;v=An(v))m++;for(;0<f-m;)w=An(w),f--;for(;0<m-f;)p=An(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=An(w),p=An(p)}w=null}else w=null;g!==null&&Lc(d,h,g,w,!1),y!==null&&S!==null&&Lc(d,S,y,w,!0)}}e:{if(h=u?Mn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=Mv;else if(xc(h))if(gh)k=jv;else{k=zv;var E=Uv}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Fv);if(k&&(k=k(e,u))){mh(d,k,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Rs(h,"number",h.value)}switch(E=u?Mn(u):window,e){case"focusin":(xc(E)||E.contentEditable==="true")&&(Ln=E,Vs=u,zr=null);break;case"focusout":zr=Vs=Ln=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,Oc(d,n,c);break;case"selectionchange":if(Hv)break;case"keydown":case"keyup":Oc(d,n,c)}var I;if(iu)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Rn?hh(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(dh&&n.locale!=="ko"&&(Rn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Rn&&(I=fh()):(Ot=c,tu="value"in Ot?Ot.value:Ot.textContent,Rn=!0)),E=La(u,b),0<E.length&&(b=new Sc(b,e,null,n,c),d.push({event:b,listeners:E}),I?b.data=I:(I=ph(n),I!==null&&(b.data=I)))),(I=Ov?Nv(e,n):Rv(e,n))&&(u=La(u,"onBeforeInput"),0<u.length&&(c=new Sc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}xh(d,t)})}function ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function La(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Gr(e,n),a!=null&&r.unshift(ti(e,a,i)),a=Gr(e,t),a!=null&&r.push(ti(e,a,i))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lc(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Gr(n,a),l!=null&&o.unshift(ti(n,l,s))):i||(l=Gr(n,a),l!=null&&o.push(ti(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Kv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function Dc(e){return(typeof e=="string"?e:""+e).replace(Kv,`
`).replace(Gv,"")}function Yi(e,t,n){if(t=Dc(t),Dc(e)!==t&&n)throw Error(_(425))}function Da(){}var Ks=null,Gs=null;function Qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Mc=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Mc<"u"?function(e){return Mc.resolve(null).then(e).catch(qv)}:Xs;function qv(e){setTimeout(function(){throw e})}function ts(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),Xe="__reactFiber$"+pr,ni="__reactProps$"+pr,ct="__reactContainer$"+pr,qs="__reactEvents$"+pr,Jv="__reactListeners$"+pr,Zv="__reactHandles$"+pr;function an(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uc(e);e!==null;){if(n=e[Xe])return n;e=Uc(e)}return t}e=n,n=e.parentNode}return null}function Si(e){return e=e[Xe]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function yo(e){return e[ni]||null}var Js=[],Un=-1;function Xt(e){return{current:e}}function V(e){0>Un||(e.current=Js[Un],Js[Un]=null,Un--)}function B(e,t){Un++,Js[Un]=e.current,e.current=t}var Vt={},pe=Xt(Vt),Se=Xt(!1),mn=Vt;function ir(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Ma(){V(Se),V(pe)}function zc(e,t,n){if(pe.current!==Vt)throw Error(_(168));B(pe,t),B(Se,n)}function Ph(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Ug(e)||"Unknown",i));return X({},n,r)}function Ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,mn=pe.current,B(pe,e),B(Se,Se.current),!0}function Fc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Ph(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,V(Se),V(pe),B(pe,e)):V(Se),B(Se,n)}var rt=null,wo=!1,ns=!1;function bh(e){rt===null?rt=[e]:rt.push(e)}function ey(e){wo=!0,bh(e)}function qt(){if(!ns&&rt!==null){ns=!0;var e=0,t=j;try{var n=rt;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,wo=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),eh(ql,qt),i}finally{j=t,ns=!1}}return null}var zn=[],Fn=0,za=null,Fa=0,Ne=[],Re=0,gn=null,it=1,at="";function tn(e,t){zn[Fn++]=Fa,zn[Fn++]=za,za=e,Fa=t}function Ah(e,t,n){Ne[Re++]=it,Ne[Re++]=at,Ne[Re++]=gn,gn=e;var r=it;e=at;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,it=1<<32-We(t)+i|n<<i|r,at=a+e}else it=1<<a|n<<i|r,at=e}function ou(e){e.return!==null&&(tn(e,1),Ah(e,1,0))}function su(e){for(;e===za;)za=zn[--Fn],zn[Fn]=null,Fa=zn[--Fn],zn[Fn]=null;for(;e===gn;)gn=Ne[--Re],Ne[Re]=null,at=Ne[--Re],Ne[Re]=null,it=Ne[--Re],Ne[Re]=null}var Te=null,xe=null,K=!1,Be=null;function Oh(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,xe=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:it,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,xe=null,!0):!1;default:return!1}}function Zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function el(e){if(K){var t=xe;if(t){var n=t;if(!jc(e,t)){if(Zs(e))throw Error(_(418));t=Ut(n.nextSibling);var r=Te;t&&jc(e,t)?Oh(r,n):(e.flags=e.flags&-4097|2,K=!1,Te=e)}}else{if(Zs(e))throw Error(_(418));e.flags=e.flags&-4097|2,K=!1,Te=e}}}function $c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Ki(e){if(e!==Te)return!1;if(!K)return $c(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qs(e.type,e.memoizedProps)),t&&(t=xe)){if(Zs(e))throw Nh(),Error(_(418));for(;t;)Oh(e,t),t=Ut(t.nextSibling)}if($c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=Te?Ut(e.stateNode.nextSibling):null;return!0}function Nh(){for(var e=xe;e;)e=Ut(e.nextSibling)}function ar(){xe=Te=null,K=!1}function lu(e){Be===null?Be=[e]:Be.push(e)}var ty=vt.ReactCurrentBatchConfig;function je(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ja=Xt(null),$a=null,jn=null,uu=null;function cu(){uu=jn=$a=null}function fu(e){var t=ja.current;V(ja),e._currentValue=t}function tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qn(e,t){$a=e,uu=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(uu!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if($a===null)throw Error(_(308));jn=e,$a.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var on=null;function du(e){on===null?on=[e]:on.push(e)}function Rh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,du(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,du(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function pa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jl(e,n)}}function Bc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ba(e,t,n,r){var i=e.updateQueue;It=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,g=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(h=t,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=X({},d,h);break e;case 2:It=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);yn|=o,e.lanes=o,e.memoizedState=d}}function Hc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Dh=new Rd.Component().refs;function nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=jt(e),a=lt(r,i);a.payload=t,n!=null&&(a.callback=n),t=zt(e,a,i),t!==null&&(Ve(t,e,i,r),pa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=jt(e),a=lt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=zt(e,a,i),t!==null&&(Ve(t,e,i,r),pa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=jt(e),i=lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=zt(e,i,r),t!==null&&(Ve(t,e,r,n),pa(t,e,r))}};function Wc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(i,a):!0}function Mh(e,t,n){var r=!1,i=Vt,a=t.contextType;return typeof a=="object"&&a!==null?a=Me(a):(i=Ee(t)?mn:pe.current,r=t.contextTypes,a=(r=r!=null)?ir(e,i):Vt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function rl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Dh,hu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Me(a):(a=Ee(t)?mn:pe.current,i.context=ir(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(nl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_o.enqueueReplaceState(i,i.state,null),Ba(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===Dh&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yc(e){var t=e._init;return t(e._payload)}function Uh(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=$t(p,f),p.index=0,p.sibling=null,p}function a(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,f,m,v){return f===null||f.tag!==6?(f=us(m,p.mode,v),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,v){var k=m.type;return k===Nn?c(p,f,m.props.children,v,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&Yc(k)===f.type)?(v=i(f,m.props),v.ref=Ir(p,f,m),v.return=p,v):(v=_a(m.type,m.key,m.props,null,p.mode,v),v.ref=Ir(p,f,m),v.return=p,v)}function u(p,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=cs(m,p.mode,v),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,v,k){return f===null||f.tag!==7?(f=dn(m,p.mode,v,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=us(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ui:return m=_a(f.type,f.key,f.props,null,p.mode,m),m.ref=Ir(p,null,f),m.return=p,m;case On:return f=cs(f,p.mode,m),f.return=p,f;case Et:var v=f._init;return d(p,v(f._payload),m)}if(Pr(f)||wr(f))return f=dn(f,p.mode,m,null),f.return=p,f;Gi(p,f)}return null}function h(p,f,m,v){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ui:return m.key===k?l(p,f,m,v):null;case On:return m.key===k?u(p,f,m,v):null;case Et:return k=m._init,h(p,f,k(m._payload),v)}if(Pr(m)||wr(m))return k!==null?null:c(p,f,m,v,null);Gi(p,m)}return null}function g(p,f,m,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,s(f,p,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ui:return p=p.get(v.key===null?m:v.key)||null,l(f,p,v,k);case On:return p=p.get(v.key===null?m:v.key)||null,u(f,p,v,k);case Et:var E=v._init;return g(p,f,m,E(v._payload),k)}if(Pr(v)||wr(v))return p=p.get(m)||null,c(f,p,v,k,null);Gi(f,v)}return null}function y(p,f,m,v){for(var k=null,E=null,I=f,b=f=0,U=null;I!==null&&b<m.length;b++){I.index>b?(U=I,I=null):U=I.sibling;var R=h(p,I,m[b],v);if(R===null){I===null&&(I=U);break}e&&I&&R.alternate===null&&t(p,I),f=a(R,f,b),E===null?k=R:E.sibling=R,E=R,I=U}if(b===m.length)return n(p,I),K&&tn(p,b),k;if(I===null){for(;b<m.length;b++)I=d(p,m[b],v),I!==null&&(f=a(I,f,b),E===null?k=I:E.sibling=I,E=I);return K&&tn(p,b),k}for(I=r(p,I);b<m.length;b++)U=g(I,p,b,m[b],v),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?b:U.key),f=a(U,f,b),E===null?k=U:E.sibling=U,E=U);return e&&I.forEach(function(ze){return t(p,ze)}),K&&tn(p,b),k}function w(p,f,m,v){var k=wr(m);if(typeof k!="function")throw Error(_(150));if(m=k.call(m),m==null)throw Error(_(151));for(var E=k=null,I=f,b=f=0,U=null,R=m.next();I!==null&&!R.done;b++,R=m.next()){I.index>b?(U=I,I=null):U=I.sibling;var ze=h(p,I,R.value,v);if(ze===null){I===null&&(I=U);break}e&&I&&ze.alternate===null&&t(p,I),f=a(ze,f,b),E===null?k=ze:E.sibling=ze,E=ze,I=U}if(R.done)return n(p,I),K&&tn(p,b),k;if(I===null){for(;!R.done;b++,R=m.next())R=d(p,R.value,v),R!==null&&(f=a(R,f,b),E===null?k=R:E.sibling=R,E=R);return K&&tn(p,b),k}for(I=r(p,I);!R.done;b++,R=m.next())R=g(I,p,b,R.value,v),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?b:R.key),f=a(R,f,b),E===null?k=R:E.sibling=R,E=R);return e&&I.forEach(function(vr){return t(p,vr)}),K&&tn(p,b),k}function S(p,f,m,v){if(typeof m=="object"&&m!==null&&m.type===Nn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ui:e:{for(var k=m.key,E=f;E!==null;){if(E.key===k){if(k=m.type,k===Nn){if(E.tag===7){n(p,E.sibling),f=i(E,m.props.children),f.return=p,p=f;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Et&&Yc(k)===E.type){n(p,E.sibling),f=i(E,m.props),f.ref=Ir(p,E,m),f.return=p,p=f;break e}n(p,E);break}else t(p,E);E=E.sibling}m.type===Nn?(f=dn(m.props.children,p.mode,v,m.key),f.return=p,p=f):(v=_a(m.type,m.key,m.props,null,p.mode,v),v.ref=Ir(p,f,m),v.return=p,p=v)}return o(p);case On:e:{for(E=m.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=cs(m,p.mode,v),f.return=p,p=f}return o(p);case Et:return E=m._init,S(p,f,E(m._payload),v)}if(Pr(m))return y(p,f,m,v);if(wr(m))return w(p,f,m,v);Gi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=us(m,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return S}var or=Uh(!0),zh=Uh(!1),Ei={},Ze=Xt(Ei),ri=Xt(Ei),ii=Xt(Ei);function sn(e){if(e===Ei)throw Error(_(174));return e}function pu(e,t){switch(B(ii,t),B(ri,e),B(Ze,Ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ds(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ds(t,e)}V(Ze),B(Ze,t)}function sr(){V(Ze),V(ri),V(ii)}function Fh(e){sn(ii.current);var t=sn(Ze.current),n=Ds(t,e.type);t!==n&&(B(ri,e),B(Ze,n))}function mu(e){ri.current===e&&(V(Ze),V(ri))}var G=Xt(0);function Ha(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=[];function gu(){for(var e=0;e<rs.length;e++)rs[e]._workInProgressVersionPrimary=null;rs.length=0}var ma=vt.ReactCurrentDispatcher,is=vt.ReactCurrentBatchConfig,vn=0,Q=null,ne=null,oe=null,Wa=!1,Fr=!1,ai=0,ny=0;function fe(){throw Error(_(321))}function vu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function yu(e,t,n,r,i,a){if(vn=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ma.current=e===null||e.memoizedState===null?oy:sy,e=n(r,i),Fr){a=0;do{if(Fr=!1,ai=0,25<=a)throw Error(_(301));a+=1,oe=ne=null,t.updateQueue=null,ma.current=ly,e=n(r,i)}while(Fr)}if(ma.current=Va,t=ne!==null&&ne.next!==null,vn=0,oe=ne=Q=null,Wa=!1,t)throw Error(_(300));return e}function wu(){var e=ai!==0;return ai=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Q.memoizedState=oe=e:oe=oe.next=e,oe}function Ue(){if(ne===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?Q.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(_(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?Q.memoizedState=oe=e:oe=oe.next=e}return oe}function oi(e,t){return typeof t=="function"?t(e):t}function as(e){var t=Ue(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((vn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,Q.lanes|=c,yn|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Ye(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Q.lanes|=a,yn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function os(e){var t=Ue(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ye(a,t.memoizedState)||(ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function jh(){}function $h(e,t){var n=Q,r=Ue(),i=t(),a=!Ye(r.memoizedState,i);if(a&&(r.memoizedState=i,ke=!0),r=r.queue,_u(Wh.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,si(9,Hh.bind(null,n,r,i,t),void 0,null),se===null)throw Error(_(349));vn&30||Bh(n,t,i)}return i}function Bh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hh(e,t,n,r){t.value=n,t.getSnapshot=r,Vh(t)&&Yh(e)}function Wh(e,t,n){return n(function(){Vh(t)&&Yh(e)})}function Vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function Yh(e){var t=ft(e,1);t!==null&&Ve(t,e,1,-1)}function Kc(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oi,lastRenderedState:e},t.queue=e,e=e.dispatch=ay.bind(null,Q,e),[t.memoizedState,e]}function si(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kh(){return Ue().memoizedState}function ga(e,t,n,r){var i=Qe();Q.flags|=e,i.memoizedState=si(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var i=Ue();r=r===void 0?null:r;var a=void 0;if(ne!==null){var o=ne.memoizedState;if(a=o.destroy,r!==null&&vu(r,o.deps)){i.memoizedState=si(t,n,a,r);return}}Q.flags|=e,i.memoizedState=si(1|t,n,a,r)}function Gc(e,t){return ga(8390656,8,e,t)}function _u(e,t){return ko(2048,8,e,t)}function Gh(e,t){return ko(4,2,e,t)}function Qh(e,t){return ko(4,4,e,t)}function Xh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qh(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,Xh.bind(null,t,e),n)}function ku(){}function Jh(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zh(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ep(e,t,n){return vn&21?(Ye(n,t)||(n=rh(),Q.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function ry(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=is.transition;is.transition={};try{e(!1),t()}finally{j=n,is.transition=r}}function tp(){return Ue().memoizedState}function iy(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},np(e))rp(t,n);else if(n=Rh(e,t,n,r),n!==null){var i=ve();Ve(n,e,r,i),ip(n,t,r)}}function ay(e,t,n){var r=jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(np(e))rp(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ye(s,o)){var l=t.interleaved;l===null?(i.next=i,du(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Rh(e,t,i,r),n!==null&&(i=ve(),Ve(n,e,r,i),ip(n,t,r))}}function np(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function rp(e,t){Fr=Wa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ip(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jl(e,n)}}var Va={readContext:Me,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},oy={readContext:Me,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Gc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ga(4194308,4,Xh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ga(4194308,4,e,t)},useInsertionEffect:function(e,t){return ga(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=iy.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:Kc,useDebugValue:ku,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Kc(!1),t=e[0];return e=ry.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Qe();if(K){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),se===null)throw Error(_(349));vn&30||Bh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Gc(Wh.bind(null,r,a,e),[e]),r.flags|=2048,si(9,Hh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Qe(),t=se.identifierPrefix;if(K){var n=at,r=it;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ny++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sy={readContext:Me,useCallback:Jh,useContext:Me,useEffect:_u,useImperativeHandle:qh,useInsertionEffect:Gh,useLayoutEffect:Qh,useMemo:Zh,useReducer:as,useRef:Kh,useState:function(){return as(oi)},useDebugValue:ku,useDeferredValue:function(e){var t=Ue();return ep(t,ne.memoizedState,e)},useTransition:function(){var e=as(oi)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:jh,useSyncExternalStore:$h,useId:tp,unstable_isNewReconciler:!1},ly={readContext:Me,useCallback:Jh,useContext:Me,useEffect:_u,useImperativeHandle:qh,useInsertionEffect:Gh,useLayoutEffect:Qh,useMemo:Zh,useReducer:os,useRef:Kh,useState:function(){return os(oi)},useDebugValue:ku,useDeferredValue:function(e){var t=Ue();return ne===null?t.memoizedState=e:ep(t,ne.memoizedState,e)},useTransition:function(){var e=os(oi)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:jh,useSyncExternalStore:$h,useId:tp,unstable_isNewReconciler:!1};function lr(e,t){try{var n="",r=t;do n+=Mg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uy=typeof WeakMap=="function"?WeakMap:Map;function ap(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ka||(Ka=!0,pl=r),il(e,t)},n}function op(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){il(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){il(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ey.bind(null,e,t,n),t.then(e,e))}function Xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var cy=vt.ReactCurrentOwner,ke=!1;function ge(e,t,n,r){t.child=e===null?zh(t,null,n,r):or(t,e.child,n,r)}function Jc(e,t,n,r,i){n=n.render;var a=t.ref;return qn(t,i),r=yu(e,t,n,r,a,i),n=wu(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(K&&n&&ou(t),t.flags|=1,ge(e,t,r,i),t.child)}function Zc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!bu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,sp(e,t,a,r,i)):(e=_a(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(o,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=$t(a,r),e.ref=t.ref,e.return=t,t.child=e}function sp(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Zr(a,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,dt(e,t,i)}return al(e,t,n,r,i)}function lp(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Bn,Ce),Ce|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Bn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,B(Bn,Ce),Ce|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(Bn,Ce),Ce|=r;return ge(e,t,i,n),t.child}function up(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function al(e,t,n,r,i){var a=Ee(n)?mn:pe.current;return a=ir(t,a),qn(t,i),n=yu(e,t,n,r,a,i),r=wu(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(K&&r&&ou(t),t.flags|=1,ge(e,t,n,i),t.child)}function ef(e,t,n,r,i){if(Ee(n)){var a=!0;Ua(t)}else a=!1;if(qn(t,i),t.stateNode===null)va(e,t),Mh(t,n,r),rl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=Ee(n)?mn:pe.current,u=ir(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Vc(t,o,r,u),It=!1;var h=t.memoizedState;o.state=h,Ba(t,r,o,i),l=t.memoizedState,s!==r||h!==l||Se.current||It?(typeof c=="function"&&(nl(t,n,c,r),l=t.memoizedState),(s=It||Wc(t,n,s,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Lh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:je(t.type,s),o.props=u,d=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Me(l):(l=Ee(n)?mn:pe.current,l=ir(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||h!==l)&&Vc(t,o,r,l),It=!1,h=t.memoizedState,o.state=h,Ba(t,r,o,i);var y=t.memoizedState;s!==d||h!==y||Se.current||It?(typeof g=="function"&&(nl(t,n,g,r),y=t.memoizedState),(u=It||Wc(t,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ol(e,t,n,r,a,i)}function ol(e,t,n,r,i,a){up(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Fc(t,n,!1),dt(e,t,a);r=t.stateNode,cy.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=or(t,e.child,null,a),t.child=or(t,null,s,a)):ge(e,t,s,a),t.memoizedState=r.state,i&&Fc(t,n,!0),t.child}function cp(e){var t=e.stateNode;t.pendingContext?zc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zc(e,t.context,!1),pu(e,t.containerInfo)}function tf(e,t,n,r,i){return ar(),lu(i),t.flags|=256,ge(e,t,n,r),t.child}var sl={dehydrated:null,treeContext:null,retryLane:0};function ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function fp(e,t,n){var r=t.pendingProps,i=G.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(G,i&1),e===null)return el(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Io(o,r,0,null),e=dn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ll(n),t.memoizedState=sl,e):Su(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return fy(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=$t(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=$t(s,a):(a=dn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ll(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=sl,r}return a=e.child,e=a.sibling,r=$t(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Su(e,t){return t=Io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qi(e,t,n,r){return r!==null&&lu(r),or(t,e.child,null,n),e=Su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fy(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ss(Error(_(422))),Qi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Io({mode:"visible",children:r.children},i,0,null),a=dn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&or(t,e.child,null,o),t.child.memoizedState=ll(o),t.memoizedState=sl,a);if(!(t.mode&1))return Qi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(_(419)),r=ss(a,r,void 0),Qi(e,t,o,r)}if(s=(o&e.childLanes)!==0,ke||s){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,ft(e,i),Ve(r,e,i,-1))}return Pu(),r=ss(Error(_(421))),Qi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Iy.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,xe=Ut(i.nextSibling),Te=t,K=!0,Be=null,e!==null&&(Ne[Re++]=it,Ne[Re++]=at,Ne[Re++]=gn,it=e.id,at=e.overflow,gn=t),t=Su(t,r.children),t.flags|=4096,t)}function nf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),tl(e.return,t,n)}function ls(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function dp(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ge(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,n,t);else if(e.tag===19)nf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ha(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ls(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ha(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ls(t,!0,n,null,a);break;case"together":ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function va(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dy(e,t,n){switch(t.tag){case 3:cp(t),ar();break;case 5:Fh(t);break;case 1:Ee(t.type)&&Ua(t);break;case 4:pu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(ja,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?fp(e,t,n):(B(G,G.current&1),e=dt(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,lp(e,t,n)}return dt(e,t,n)}var hp,ul,pp,mp;hp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ul=function(){};pp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,sn(Ze.current);var a=null;switch(n){case"input":i=Os(e,i),r=Os(e,r),a=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),a=[];break;case"textarea":i=Ls(e,i),r=Ls(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Da)}Ms(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hy(e,t,n){var r=t.pendingProps;switch(su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ee(t.type)&&Ma(),de(t),null;case 3:return r=t.stateNode,sr(),V(Se),V(pe),gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(vl(Be),Be=null))),ul(e,t),de(t),null;case 5:mu(t);var i=sn(ii.current);if(n=t.type,e!==null&&t.stateNode!=null)pp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return de(t),null}if(e=sn(Ze.current),Ki(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Xe]=t,r[ni]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Ar.length;i++)H(Ar[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":fc(r,a),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},H("invalid",r);break;case"textarea":hc(r,a),H("invalid",r)}Ms(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Yi(r.textContent,s,e),i=["children",""+s]):Yr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":zi(r),dc(r,a,!0);break;case"textarea":zi(r),pc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Da)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Xe]=t,e[ni]=r,hp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Us(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ar.length;i++)H(Ar[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":fc(e,r),i=Os(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":hc(e,r),i=Ls(e,r),H("invalid",e);break;default:i=r}Ms(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Vd(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hd(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Kr(e,l):typeof l=="number"&&Kr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Yr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&H("scroll",e):l!=null&&Yl(e,a,l,o))}switch(n){case"input":zi(e),dc(e,r,!1);break;case"textarea":zi(e),pc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Kn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Da)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=sn(ii.current),sn(Ze.current),Ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(a=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return de(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&xe!==null&&t.mode&1&&!(t.flags&128))Nh(),ar(),t.flags|=98560,a=!1;else if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[Xe]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),a=!1}else Be!==null&&(vl(Be),Be=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?re===0&&(re=3):Pu())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return sr(),ul(e,t),e===null&&ei(t.stateNode.containerInfo),de(t),null;case 10:return fu(t.type._context),de(t),null;case 17:return Ee(t.type)&&Ma(),de(t),null;case 19:if(V(G),a=t.memoizedState,a===null)return de(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Cr(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ha(e),o!==null){for(t.flags|=128,Cr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}a.tail!==null&&ee()>ur&&(t.flags|=128,r=!0,Cr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ha(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!K)return de(t),null}else 2*ee()-a.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,Cr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ee(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Tu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function py(e,t){switch(su(t),t.tag){case 1:return Ee(t.type)&&Ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),V(Se),V(pe),gu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mu(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return sr(),null;case 10:return fu(t.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Xi=!1,he=!1,my=typeof WeakSet=="function"?WeakSet:Set,x=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function cl(e,t,n){try{n()}catch(r){q(e,t,r)}}var rf=!1;function gy(e,t){if(Ks=Na,e=wh(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===n&&++u===i&&(s=o),h===a&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gs={focusedElem:e,selectionRange:n},Na=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:je(t.type,w),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return y=rf,rf=!1,y}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&cl(t,n,a)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gp(e){var t=e.alternate;t!==null&&(e.alternate=null,gp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[ni],delete t[qs],delete t[Jv],delete t[Zv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vp(e){return e.tag===5||e.tag===3||e.tag===4}function af(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Da));else if(r!==4&&(e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}var le=null,$e=!1;function _t(e,t,n){for(n=n.child;n!==null;)yp(e,t,n),n=n.sibling}function yp(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(po,n)}catch{}switch(n.tag){case 5:he||$n(n,t);case 6:var r=le,i=$e;le=null,_t(e,t,n),le=r,$e=i,le!==null&&($e?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&($e?(e=le,n=n.stateNode,e.nodeType===8?ts(e.parentNode,n):e.nodeType===1&&ts(e,n),qr(e)):ts(le,n.stateNode));break;case 4:r=le,i=$e,le=n.stateNode.containerInfo,$e=!0,_t(e,t,n),le=r,$e=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&cl(n,t,o),i=i.next}while(i!==r)}_t(e,t,n);break;case 1:if(!he&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,_t(e,t,n),he=r):_t(e,t,n);break;default:_t(e,t,n)}}function of(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new my),t.forEach(function(r){var i=Cy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,$e=!1;break e;case 3:le=s.stateNode.containerInfo,$e=!0;break e;case 4:le=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(le===null)throw Error(_(160));yp(a,o,i),le=null,$e=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wp(t,e),t=t.sibling}function wp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Ge(e),r&4){try{jr(3,e,e.return),So(3,e)}catch(w){q(e,e.return,w)}try{jr(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Fe(t,e),Ge(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(Fe(t,e),Ge(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var i=e.stateNode;try{Kr(i,"")}catch(w){q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&jd(i,a),Us(s,o);var u=Us(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Vd(i,d):c==="dangerouslySetInnerHTML"?Hd(i,d):c==="children"?Kr(i,d):Yl(i,c,d,u)}switch(s){case"input":Ns(i,a);break;case"textarea":$d(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Kn(i,!!a.multiple,g,!1):h!==!!a.multiple&&(a.defaultValue!=null?Kn(i,!!a.multiple,a.defaultValue,!0):Kn(i,!!a.multiple,a.multiple?[]:"",!1))}i[ni]=a}catch(w){q(e,e.return,w)}}break;case 6:if(Fe(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){q(e,e.return,w)}}break;case 3:if(Fe(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qr(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Fe(t,e),Ge(e);break;case 13:Fe(t,e),Ge(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Cu=ee())),r&4&&of(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||c,Fe(t,e),he=u):Fe(t,e),Ge(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(x=e,c=e.child;c!==null;){for(d=x=c;x!==null;){switch(h=x,g=h.child,h.tag){case 0:case 11:case 14:case 15:jr(4,h,h.return);break;case 1:$n(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:$n(h,h.return);break;case 22:if(h.memoizedState!==null){lf(d);continue}}g!==null?(g.return=h,x=g):lf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Wd("display",o))}catch(w){q(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){q(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fe(t,e),Ge(e),r&4&&of(e);break;case 21:break;default:Fe(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Kr(i,""),r.flags&=-33);var a=af(e);hl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=af(e);dl(e,s,o);break;default:throw Error(_(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vy(e,t,n){x=e,_p(e)}function _p(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var i=x,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xi;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||he;s=Xi;var u=he;if(Xi=o,(he=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?uf(i):l!==null?(l.return=o,x=l):uf(i);for(;a!==null;)x=a,_p(a),a=a.sibling;x=i,Xi=s,he=u}sf(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,x=a):sf(e)}}function sf(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Hc(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hc(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&qr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}he||t.flags&512&&fl(t)}catch(h){q(t,t.return,h)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function lf(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function uf(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(l){q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){q(t,i,l)}}var a=t.return;try{fl(t)}catch(l){q(t,a,l)}break;case 5:var o=t.return;try{fl(t)}catch(l){q(t,o,l)}}}catch(l){q(t,t.return,l)}if(t===e){x=null;break}var s=t.sibling;if(s!==null){s.return=t.return,x=s;break}x=t.return}}var yy=Math.ceil,Ya=vt.ReactCurrentDispatcher,Eu=vt.ReactCurrentOwner,De=vt.ReactCurrentBatchConfig,z=0,se=null,te=null,ue=0,Ce=0,Bn=Xt(0),re=0,li=null,yn=0,Eo=0,Iu=0,$r=null,_e=null,Cu=0,ur=1/0,nt=null,Ka=!1,pl=null,Ft=null,qi=!1,Nt=null,Ga=0,Br=0,ml=null,ya=-1,wa=0;function ve(){return z&6?ee():ya!==-1?ya:ya=ee()}function jt(e){return e.mode&1?z&2&&ue!==0?ue&-ue:ty.transition!==null?(wa===0&&(wa=rh()),wa):(e=j,e!==0||(e=window.event,e=e===void 0?16:ch(e.type)),e):1}function Ve(e,t,n,r){if(50<Br)throw Br=0,ml=null,Error(_(185));_i(e,n,r),(!(z&2)||e!==se)&&(e===se&&(!(z&2)&&(Eo|=n),re===4&&xt(e,ue)),Ie(e,r),n===1&&z===0&&!(t.mode&1)&&(ur=ee()+500,wo&&qt()))}function Ie(e,t){var n=e.callbackNode;tv(e,t);var r=Oa(e,e===se?ue:0);if(r===0)n!==null&&vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vc(n),t===1)e.tag===0?ey(cf.bind(null,e)):bh(cf.bind(null,e)),Xv(function(){!(z&6)&&qt()}),n=null;else{switch(ih(r)){case 1:n=ql;break;case 4:n=th;break;case 16:n=Aa;break;case 536870912:n=nh;break;default:n=Aa}n=Pp(n,kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kp(e,t){if(ya=-1,wa=0,z&6)throw Error(_(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=Oa(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qa(e,r);else{t=r;var i=z;z|=2;var a=Ep();(se!==e||ue!==t)&&(nt=null,ur=ee()+500,fn(e,t));do try{ky();break}catch(s){Sp(e,s)}while(1);cu(),Ya.current=a,z=i,te!==null?t=0:(se=null,ue=0,t=re)}if(t!==0){if(t===2&&(i=Bs(e),i!==0&&(r=i,t=gl(e,i))),t===1)throw n=li,fn(e,0),xt(e,r),Ie(e,ee()),n;if(t===6)xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!wy(i)&&(t=Qa(e,r),t===2&&(a=Bs(e),a!==0&&(r=a,t=gl(e,a))),t===1))throw n=li,fn(e,0),xt(e,r),Ie(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:nn(e,_e,nt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=Cu+500-ee(),10<t)){if(Oa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xs(nn.bind(null,e,_e,nt),t);break}nn(e,_e,nt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-We(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yy(r/1960))-r,10<r){e.timeoutHandle=Xs(nn.bind(null,e,_e,nt),r);break}nn(e,_e,nt);break;case 5:nn(e,_e,nt);break;default:throw Error(_(329))}}}return Ie(e,ee()),e.callbackNode===n?kp.bind(null,e):null}function gl(e,t){var n=$r;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Qa(e,t),e!==2&&(t=_e,_e=n,t!==null&&vl(t)),e}function vl(e){_e===null?_e=e:_e.push.apply(_e,e)}function wy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ye(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~Iu,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function cf(e){if(z&6)throw Error(_(327));Jn();var t=Oa(e,0);if(!(t&1))return Ie(e,ee()),null;var n=Qa(e,t);if(e.tag!==0&&n===2){var r=Bs(e);r!==0&&(t=r,n=gl(e,r))}if(n===1)throw n=li,fn(e,0),xt(e,t),Ie(e,ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,_e,nt),Ie(e,ee()),null}function xu(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(ur=ee()+500,wo&&qt())}}function wn(e){Nt!==null&&Nt.tag===0&&!(z&6)&&Jn();var t=z;z|=1;var n=De.transition,r=j;try{if(De.transition=null,j=1,e)return e()}finally{j=r,De.transition=n,z=t,!(z&6)&&qt()}}function Tu(){Ce=Bn.current,V(Bn)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qv(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ma();break;case 3:sr(),V(Se),V(pe),gu();break;case 5:mu(r);break;case 4:sr();break;case 13:V(G);break;case 19:V(G);break;case 10:fu(r.type._context);break;case 22:case 23:Tu()}n=n.return}if(se=e,te=e=$t(e.current,null),ue=Ce=t,re=0,li=null,Iu=Eo=yn=0,_e=$r=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}on=null}return e}function Sp(e,t){do{var n=te;try{if(cu(),ma.current=Va,Wa){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wa=!1}if(vn=0,oe=ne=Q=null,Fr=!1,ai=0,Eu.current=null,n===null||n.return===null){re=1,li=t,te=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=ue,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Xc(o);if(g!==null){g.flags&=-257,qc(g,o,s,a,t),g.mode&1&&Qc(a,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Qc(a,u,t),Pu();break e}l=Error(_(426))}}else if(K&&s.mode&1){var S=Xc(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),qc(S,o,s,a,t),lu(lr(l,s));break e}}a=l=lr(l,s),re!==4&&(re=2),$r===null?$r=[a]:$r.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=ap(a,l,t);Bc(a,p);break e;case 1:s=l;var f=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ft===null||!Ft.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var v=op(a,s,t);Bc(a,v);break e}}a=a.return}while(a!==null)}Cp(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Ep(){var e=Ya.current;return Ya.current=Va,e===null?Va:e}function Pu(){(re===0||re===3||re===2)&&(re=4),se===null||!(yn&268435455)&&!(Eo&268435455)||xt(se,ue)}function Qa(e,t){var n=z;z|=2;var r=Ep();(se!==e||ue!==t)&&(nt=null,fn(e,t));do try{_y();break}catch(i){Sp(e,i)}while(1);if(cu(),z=n,Ya.current=r,te!==null)throw Error(_(261));return se=null,ue=0,re}function _y(){for(;te!==null;)Ip(te)}function ky(){for(;te!==null&&!Yg();)Ip(te)}function Ip(e){var t=Tp(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Cp(e):te=t,Eu.current=null}function Cp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=py(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=hy(n,t,Ce),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function nn(e,t,n){var r=j,i=De.transition;try{De.transition=null,j=1,Sy(e,t,n,r)}finally{De.transition=i,j=r}return null}function Sy(e,t,n,r){do Jn();while(Nt!==null);if(z&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(nv(e,a),e===se&&(te=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qi||(qi=!0,Pp(Aa,function(){return Jn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=De.transition,De.transition=null;var o=j;j=1;var s=z;z|=4,Eu.current=null,gy(e,n),wp(n,e),Bv(Gs),Na=!!Ks,Gs=Ks=null,e.current=n,vy(n),Kg(),z=s,j=o,De.transition=a}else e.current=n;if(qi&&(qi=!1,Nt=e,Ga=i),a=e.pendingLanes,a===0&&(Ft=null),Xg(n.stateNode),Ie(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ka)throw Ka=!1,e=pl,pl=null,e;return Ga&1&&e.tag!==0&&Jn(),a=e.pendingLanes,a&1?e===ml?Br++:(Br=0,ml=e):Br=0,qt(),null}function Jn(){if(Nt!==null){var e=ih(Ga),t=De.transition,n=j;try{if(De.transition=null,j=16>e?16:e,Nt===null)var r=!1;else{if(e=Nt,Nt=null,Ga=0,z&6)throw Error(_(331));var i=z;for(z|=4,x=e.current;x!==null;){var a=x,o=a.child;if(x.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:jr(8,c,a)}var d=c.child;if(d!==null)d.return=c,x=d;else for(;x!==null;){c=x;var h=c.sibling,g=c.return;if(gp(c),c===u){x=null;break}if(h!==null){h.return=g,x=h;break}x=g}}}var y=a.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}x=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,x=o;else e:for(;x!==null;){if(a=x,a.flags&2048)switch(a.tag){case 0:case 11:case 15:jr(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,x=p;break e}x=a.return}}var f=e.current;for(x=f;x!==null;){o=x;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,x=m;else e:for(o=f;x!==null;){if(s=x,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:So(9,s)}}catch(k){q(s,s.return,k)}if(s===o){x=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,x=v;break e}x=s.return}}if(z=i,qt(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(po,e)}catch{}r=!0}return r}finally{j=n,De.transition=t}}return!1}function ff(e,t,n){t=lr(n,t),t=ap(e,t,1),e=zt(e,t,1),t=ve(),e!==null&&(_i(e,1,t),Ie(e,t))}function q(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=lr(n,e),e=op(t,e,1),t=zt(t,e,1),e=ve(),t!==null&&(_i(t,1,e),Ie(t,e));break}}t=t.return}}function Ey(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>ee()-Cu?fn(e,0):Iu|=n),Ie(e,t)}function xp(e,t){t===0&&(e.mode&1?(t=$i,$i<<=1,!($i&130023424)&&($i=4194304)):t=1);var n=ve();e=ft(e,t),e!==null&&(_i(e,t,n),Ie(e,n))}function Iy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xp(e,n)}function Cy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),xp(e,n)}var Tp;Tp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,dy(e,t,n);ke=!!(e.flags&131072)}else ke=!1,K&&t.flags&1048576&&Ah(t,Fa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;va(e,t),e=t.pendingProps;var i=ir(t,pe.current);qn(t,n),i=yu(null,t,r,e,i,n);var a=wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(a=!0,Ua(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hu(t),i.updater=_o,t.stateNode=i,i._reactInternals=t,rl(t,r,e,n),t=ol(null,t,r,!0,a,n)):(t.tag=0,K&&a&&ou(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(va(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ty(r),e=je(r,e),i){case 0:t=al(null,t,r,e,n);break e;case 1:t=ef(null,t,r,e,n);break e;case 11:t=Jc(null,t,r,e,n);break e;case 14:t=Zc(null,t,r,je(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),al(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),ef(e,t,r,i,n);case 3:e:{if(cp(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Lh(e,t),Ba(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=lr(Error(_(423)),t),t=tf(e,t,r,n,i);break e}else if(r!==i){i=lr(Error(_(424)),t),t=tf(e,t,r,n,i);break e}else for(xe=Ut(t.stateNode.containerInfo.firstChild),Te=t,K=!0,Be=null,n=zh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=dt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Fh(t),e===null&&el(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Qs(r,i)?o=null:a!==null&&Qs(r,a)&&(t.flags|=32),up(e,t),ge(e,t,o,n),t.child;case 6:return e===null&&el(t),null;case 13:return fp(e,t,n);case 4:return pu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Jc(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,B(ja,r._currentValue),r._currentValue=o,a!==null)if(Ye(a.value,o)){if(a.children===i.children&&!Se.current){t=dt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=lt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),tl(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),tl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qn(t,n),i=Me(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=je(r,t.pendingProps),i=je(r.type,i),Zc(e,t,r,i,n);case 15:return sp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),va(e,t),t.tag=1,Ee(r)?(e=!0,Ua(t)):e=!1,qn(t,n),Mh(t,r,i),rl(t,r,i,n),ol(null,t,r,!0,e,n);case 19:return dp(e,t,n);case 22:return lp(e,t,n)}throw Error(_(156,t.tag))};function Pp(e,t){return eh(e,t)}function xy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new xy(e,t,n,r)}function bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ty(e){if(typeof e=="function")return bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gl)return 11;if(e===Ql)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _a(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")bu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Nn:return dn(n.children,i,a,t);case Kl:o=8,i|=8;break;case Ts:return e=Le(12,n,t,i|2),e.elementType=Ts,e.lanes=a,e;case Ps:return e=Le(13,n,t,i),e.elementType=Ps,e.lanes=a,e;case bs:return e=Le(19,n,t,i),e.elementType=bs,e.lanes=a,e;case Ud:return Io(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dd:o=10;break e;case Md:o=9;break e;case Gl:o=11;break e;case Ql:o=14;break e;case Et:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Le(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function dn(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Io(e,t,n,r){return e=Le(22,e,r,t),e.elementType=Ud,e.lanes=n,e.stateNode={isHidden:!1},e}function us(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function cs(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Py(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,i,a,o,s,l){return e=new Py(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Le(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(a),e}function by(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bp(e){if(!e)return Vt;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Ph(e,n,t)}return t}function Ap(e,t,n,r,i,a,o,s,l){return e=Au(n,r,!0,e,i,a,o,s,l),e.context=bp(null),n=e.current,r=ve(),i=jt(n),a=lt(r,i),a.callback=t??null,zt(n,a,i),e.current.lanes=i,_i(e,i,r),Ie(e,r),e}function Co(e,t,n,r){var i=t.current,a=ve(),o=jt(i);return n=bp(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(i,t,o),e!==null&&(Ve(e,i,o,a),pa(e,i,o)),o}function Xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function df(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ou(e,t){df(e,t),(e=e.alternate)&&df(e,t)}function Ay(){return null}var Op=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nu(e){this._internalRoot=e}xo.prototype.render=Nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Co(e,t,null,null)};xo.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Co(null,e,null,null)}),t[ct]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=sh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&uh(e)}};function Ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hf(){}function Oy(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Xa(o);a.call(u)}}var o=Ap(t,r,e,0,null,!1,!1,"",hf);return e._reactRootContainer=o,e[ct]=o.current,ei(e.nodeType===8?e.parentNode:e),wn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Xa(l);s.call(u)}}var l=Au(e,0,!1,null,null,!1,!1,"",hf);return e._reactRootContainer=l,e[ct]=l.current,ei(e.nodeType===8?e.parentNode:e),wn(function(){Co(t,l,n,r)}),l}function Po(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Xa(o);s.call(l)}}Co(t,o,e,i)}else o=Oy(n,t,e,i,r);return Xa(o)}ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=br(t.pendingLanes);n!==0&&(Jl(t,n|1),Ie(t,ee()),!(z&6)&&(ur=ee()+500,qt()))}break;case 13:wn(function(){var r=ft(e,1);if(r!==null){var i=ve();Ve(r,e,1,i)}}),Ou(e,1)}};Zl=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ve();Ve(t,e,134217728,n)}Ou(e,134217728)}};oh=function(e){if(e.tag===13){var t=jt(e),n=ft(e,t);if(n!==null){var r=ve();Ve(n,e,t,r)}Ou(e,t)}};sh=function(){return j};lh=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};Fs=function(e,t,n){switch(t){case"input":if(Ns(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yo(r);if(!i)throw Error(_(90));Fd(r),Ns(r,i)}}}break;case"textarea":$d(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};Gd=xu;Qd=wn;var Ny={usingClientEntryPoint:!1,Events:[Si,Mn,yo,Yd,Kd,xu]},xr={findFiberByHostInstance:an,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ry={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jd(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ji.isDisabled&&Ji.supportsFiber)try{po=Ji.inject(Ry),Je=Ji}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(t))throw Error(_(200));return by(e,t,null,n)};be.createRoot=function(e,t){if(!Ru(e))throw Error(_(299));var n=!1,r="",i=Op;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Au(e,1,!1,null,null,n,!1,r,i),e[ct]=t.current,ei(e.nodeType===8?e.parentNode:e),new Nu(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Jd(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return wn(e)};be.hydrate=function(e,t,n){if(!To(t))throw Error(_(200));return Po(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Ru(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Op;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ap(t,null,e,1,n??null,i,!1,a,o),e[ct]=t.current,ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xo(t)};be.render=function(e,t,n){if(!To(t))throw Error(_(200));return Po(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!To(e))throw Error(_(40));return e._reactRootContainer?(wn(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};be.unstable_batchedUpdates=xu;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!To(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Po(e,t,n,!1,r)};be.version="18.2.0-next-9e3b772b8-20220608";function Np(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Np)}catch(e){console.error(e)}}Np(),Ad.exports=be;var Ly=Ad.exports,pf=Ly;Cs.createRoot=pf.createRoot,Cs.hydrateRoot=pf.hydrateRoot;/**
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
 */const Rp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Dy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,d=(a&3)<<4|s>>4;let h=(s&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Rp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Dy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||d==null)throw new My;const h=a<<2|s>>4;if(r.push(h),u!==64){const g=s<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class My extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uy=function(e){const t=Rp(e);return Lp.encodeByteArray(t,!0)},Dp=function(e){return Uy(e).replace(/\./g,"")},Mp=function(e){try{return Lp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function zy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fy=()=>zy().__FIREBASE_DEFAULTS__,jy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},$y=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Mp(e[1]);return t&&JSON.parse(t)},Lu=()=>{try{return Fy()||jy()||$y()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},By=e=>{var t,n;return(n=(t=Lu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Up=()=>{var e;return(e=Lu())===null||e===void 0?void 0:e.config},zp=e=>{var t;return(t=Lu())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Hy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Vy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ky(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Gy(){try{return typeof indexedDB=="object"}catch{return!1}}function Qy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const Xy="FirebaseError";class Jt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Xy,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?qy(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,s,r)}}function qy(e,t){return e.replace(Jy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Jy=/\{\$([^}]+)}/g;function Zy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(mf(a)&&mf(o)){if(!qa(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mf(e){return e!==null&&typeof e=="object"}/**
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
 */function Ci(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Or(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Nr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function e0(e,t){const n=new t0(e,t);return n.subscribe.bind(n)}class t0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");n0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=fs),i.error===void 0&&(i.error=fs),i.complete===void 0&&(i.complete=fs);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function fs(){}/**
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
 */function yt(e){return e&&e._delegate?e._delegate:e}class cr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const rn="[DEFAULT]";/**
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
 */class r0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Hy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(a0(t))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=rn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=rn){return this.instances.has(t)}getOptions(t=rn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:i0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=rn){return this.component?this.component.multipleInstances?t:rn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function i0(e){return e===rn?void 0:e}function a0(e){return e.instantiationMode==="EAGER"}/**
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
 */class o0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new r0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const s0={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},l0=$.INFO,u0={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},c0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=u0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fp{constructor(t){this.name=t,this._logLevel=l0,this._logHandler=c0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?s0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const f0=(e,t)=>t.some(n=>e instanceof n);let gf,vf;function d0(){return gf||(gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h0(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jp=new WeakMap,yl=new WeakMap,$p=new WeakMap,ds=new WeakMap,Du=new WeakMap;function p0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Bt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&jp.set(n,e)}).catch(()=>{}),Du.set(t,e),t}function m0(e){if(yl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});yl.set(e,t)}let wl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return yl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$p.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function g0(e){wl=e(wl)}function v0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(hs(this),t,...n);return $p.set(r,t.sort?t.sort():[t]),Bt(r)}:h0().includes(e)?function(...t){return e.apply(hs(this),t),Bt(jp.get(this))}:function(...t){return Bt(e.apply(hs(this),t))}}function y0(e){return typeof e=="function"?v0(e):(e instanceof IDBTransaction&&m0(e),f0(e,d0())?new Proxy(e,wl):e)}function Bt(e){if(e instanceof IDBRequest)return p0(e);if(ds.has(e))return ds.get(e);const t=y0(e);return t!==e&&(ds.set(e,t),Du.set(t,e)),t}const hs=e=>Du.get(e);function w0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Bt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Bt(o.result),l.oldVersion,l.newVersion,Bt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const _0=["get","getKey","getAll","getAllKeys","count"],k0=["put","add","delete","clear"],ps=new Map;function yf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ps.get(t))return ps.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_0.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return ps.set(t,a),a}g0(e=>({...e,get:(t,n,r)=>yf(t,n)||e.get(t,n,r),has:(t,n)=>!!yf(t,n)||e.has(t,n)}));/**
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
 */class S0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _l="@firebase/app",wf="0.9.19";/**
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
 */const _n=new Fp("@firebase/app"),I0="@firebase/app-compat",C0="@firebase/analytics-compat",x0="@firebase/analytics",T0="@firebase/app-check-compat",P0="@firebase/app-check",b0="@firebase/auth",A0="@firebase/auth-compat",O0="@firebase/database",N0="@firebase/database-compat",R0="@firebase/functions",L0="@firebase/functions-compat",D0="@firebase/installations",M0="@firebase/installations-compat",U0="@firebase/messaging",z0="@firebase/messaging-compat",F0="@firebase/performance",j0="@firebase/performance-compat",$0="@firebase/remote-config",B0="@firebase/remote-config-compat",H0="@firebase/storage",W0="@firebase/storage-compat",V0="@firebase/firestore",Y0="@firebase/firestore-compat",K0="firebase",G0="10.4.0";/**
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
 */const kl="[DEFAULT]",Q0={[_l]:"fire-core",[I0]:"fire-core-compat",[x0]:"fire-analytics",[C0]:"fire-analytics-compat",[P0]:"fire-app-check",[T0]:"fire-app-check-compat",[b0]:"fire-auth",[A0]:"fire-auth-compat",[O0]:"fire-rtdb",[N0]:"fire-rtdb-compat",[R0]:"fire-fn",[L0]:"fire-fn-compat",[D0]:"fire-iid",[M0]:"fire-iid-compat",[U0]:"fire-fcm",[z0]:"fire-fcm-compat",[F0]:"fire-perf",[j0]:"fire-perf-compat",[$0]:"fire-rc",[B0]:"fire-rc-compat",[H0]:"fire-gcs",[W0]:"fire-gcs-compat",[V0]:"fire-fst",[Y0]:"fire-fst-compat","fire-js":"fire-js",[K0]:"fire-js-all"};/**
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
 */const Ja=new Map,Sl=new Map;function X0(e,t){try{e.container.addComponent(t)}catch(n){_n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ui(e){const t=e.name;if(Sl.has(t))return _n.debug(`There were multiple attempts to register component ${t}.`),!1;Sl.set(t,e);for(const n of Ja.values())X0(n,e);return!0}function Bp(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const q0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new Ii("app","Firebase",q0);/**
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
 */class J0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const xi=G0;function Hp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:kl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(n||(n=Up()),!n)throw Ht.create("no-options");const a=Ja.get(i);if(a){if(qa(n,a.options)&&qa(r,a.config))return a;throw Ht.create("duplicate-app",{appName:i})}const o=new o0(i);for(const l of Sl.values())o.addComponent(l);const s=new J0(n,r,o);return Ja.set(i,s),s}function Z0(e=kl){const t=Ja.get(e);if(!t&&e===kl&&Up())return Hp();if(!t)throw Ht.create("no-app",{appName:e});return t}function Zn(e,t,n){var r;let i=(r=Q0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_n.warn(s.join(" "));return}ui(new cr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const e1="firebase-heartbeat-database",t1=1,ci="firebase-heartbeat-store";let ms=null;function Wp(){return ms||(ms=w0(e1,t1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ci)}}}).catch(e=>{throw Ht.create("idb-open",{originalErrorMessage:e.message})})),ms}async function n1(e){try{return await(await Wp()).transaction(ci).objectStore(ci).get(Vp(e))}catch(t){if(t instanceof Jt)_n.warn(t.message);else{const n=Ht.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_n.warn(n.message)}}}async function _f(e,t){try{const r=(await Wp()).transaction(ci,"readwrite");await r.objectStore(ci).put(t,Vp(e)),await r.done}catch(n){if(n instanceof Jt)_n.warn(n.message);else{const r=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function Vp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const r1=1024,i1=30*24*60*60*1e3;class a1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new s1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=i1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kf(),{heartbeatsToSend:n,unsentEntries:r}=o1(this._heartbeatsCache.heartbeats),i=Dp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kf(){return new Date().toISOString().substring(0,10)}function o1(e,t=r1){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),Sf(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class s1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gy()?Qy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _f(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _f(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Sf(e){return Dp(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function l1(e){ui(new cr("platform-logger",t=>new S0(t),"PRIVATE")),ui(new cr("heartbeat",t=>new a1(t),"PRIVATE")),Zn(_l,wf,e),Zn(_l,wf,"esm2017"),Zn("fire-js","")}l1("");function Mu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ef(e){return e!==void 0&&e.enterprise!==void 0}class u1{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Yp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c1=Yp,Kp=new Ii("auth","Firebase",Yp());/**
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
 */const Za=new Fp("@firebase/auth");function f1(e,...t){Za.logLevel<=$.WARN&&Za.warn(`Auth (${xi}): ${e}`,...t)}function ka(e,...t){Za.logLevel<=$.ERROR&&Za.error(`Auth (${xi}): ${e}`,...t)}/**
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
 */function Ke(e,...t){throw Uu(e,...t)}function et(e,...t){return Uu(e,...t)}function d1(e,t,n){const r=Object.assign(Object.assign({},c1()),{[t]:n});return new Ii("auth","Firebase",r).create(t,{appName:e.name})}function Uu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Kp.create(e,...t)}function A(e,t,...n){if(!e)throw Uu(t,...n)}function ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ka(t),new Error(t)}function ht(e,t){e||ot(t)}/**
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
 */function El(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function h1(){return If()==="http:"||If()==="https:"}function If(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function p1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h1()||Vy()||"connection"in navigator)?navigator.onLine:!0}function m1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ti{constructor(t,n){this.shortDelay=t,this.longDelay=n,ht(n>t,"Short delay should be less than long delay!"),this.isMobile=Wy()||Yy()}get(){return p1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zu(e,t){ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Gp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const g1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const v1=new Ti(3e4,6e4);function Tn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Pn(e,t,n,r,i={}){return Qp(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Ci(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Gp.fetch()(Xp(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Qp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},g1),t);try{const i=new y1(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Zi(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zi(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zi(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw d1(e,c,u);Ke(e,c)}}catch(i){if(i instanceof Jt)throw i;Ke(e,"network-request-failed",{message:String(i)})}}async function Pi(e,t,n,r,i={}){const a=await Pn(e,t,n,r,i);return"mfaPendingCredential"in a&&Ke(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Xp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?zu(e.config,i):`${e.config.apiScheme}://${i}`}class y1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),v1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=et(e,t,r);return i.customData._tokenResponse=n,i}async function w1(e,t){return Pn(e,"GET","/v2/recaptchaConfig",Tn(e,t))}/**
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
 */async function _1(e,t){return Pn(e,"POST","/v1/accounts:delete",t)}async function k1(e,t){return Pn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Hr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function S1(e,t=!1){const n=yt(e),r=await n.getIdToken(t),i=Fu(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Hr(gs(i.auth_time)),issuedAtTime:Hr(gs(i.iat)),expirationTime:Hr(gs(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function gs(e){return Number(e)*1e3}function Fu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ka("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mp(n);return i?JSON.parse(i):(ka("Failed to decode base64 JWT payload"),null)}catch(i){return ka("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function E1(e){const t=Fu(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function fi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Jt&&I1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function I1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class C1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qp{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function eo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await fi(e,k1(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?P1(a.providerUserInfo):[],s=T1(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new qp(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function x1(e){const t=yt(e);await eo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function T1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function P1(e){return e.map(t=>{var{providerId:n}=t,r=Mu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function b1(e,t){const n=await Qp(e,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Xp(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Gp.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):E1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return A(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await b1(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new di;return r&&(A(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(A(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function kt(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=Mu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new qp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await fi(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return S1(this,t)}reload(){return x1(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await fi(this,_1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(s=n.tenantId)!==null&&s!==void 0?s:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:k,providerData:E,stsTokenManager:I}=n;A(m&&I,t,"internal-error");const b=di.fromJSON(this.name,I);A(typeof m=="string",t,"internal-error"),kt(d,t.name),kt(h,t.name),A(typeof v=="boolean",t,"internal-error"),A(typeof k=="boolean",t,"internal-error"),kt(g,t.name),kt(y,t.name),kt(w,t.name),kt(S,t.name),kt(p,t.name),kt(f,t.name);const U=new hn({uid:m,auth:t,email:h,emailVerified:v,displayName:d,isAnonymous:k,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:b,createdAt:p,lastLoginAt:f});return E&&Array.isArray(E)&&(U.providerData=E.map(R=>Object.assign({},R))),S&&(U._redirectEventId=S),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new di;i.updateFromServerResponse(n);const a=new hn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await eo(a),a}}/**
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
 */const Cf=new Map;function st(e){ht(e instanceof Function,"Expected a class definition");let t=Cf.get(e);return t?(ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Cf.set(e,t),t)}/**
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
 */class Jp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Jp.type="NONE";const xf=Jp;/**
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
 */function Sa(e,t,n){return`firebase:${e}:${t}:${n}`}class er{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Sa(this.userKey,i.apiKey,a),this.fullPersistenceKey=Sa("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?hn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new er(st(xf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||st(xf);const o=Sa(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const d=hn._fromJSON(t,c);u!==a&&(s=d),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new er(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new er(a,t,r))}}/**
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
 */function Tf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rm(t))return"Blackberry";if(im(t))return"Webos";if(ju(t))return"Safari";if((t.includes("chrome/")||em(t))&&!t.includes("edge/"))return"Chrome";if(nm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zp(e=me()){return/firefox\//i.test(e)}function ju(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function em(e=me()){return/crios\//i.test(e)}function tm(e=me()){return/iemobile/i.test(e)}function nm(e=me()){return/android/i.test(e)}function rm(e=me()){return/blackberry/i.test(e)}function im(e=me()){return/webos/i.test(e)}function bo(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function A1(e=me()){var t;return bo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function O1(){return Ky()&&document.documentMode===10}function am(e=me()){return bo(e)||nm(e)||im(e)||rm(e)||/windows phone/i.test(e)||tm(e)}function N1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function om(e,t=[]){let n;switch(e){case"Browser":n=Tf(me());break;case"Worker":n=`${Tf(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${r}`}/**
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
 */class R1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function L1(e,t={}){return Pn(e,"GET","/v2/passwordPolicy",Tn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const D1=6;class M1{constructor(t){var n,r,i,a;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,o,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class U1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new R1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await er.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await eo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=m1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?yt(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await L1(this),n=new M1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ii("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&st(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=om(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&f1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bn(e){return yt(e)}class Pf{constructor(t){this.auth=t,this.observer=null,this.addObserver=e0(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function z1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function sm(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=et("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",z1().appendChild(r)})}function F1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const j1="https://www.google.com/recaptcha/enterprise.js?render=",$1="recaptcha-enterprise",B1="NO_RECAPTCHA";class H1{constructor(t){this.type=$1,this.auth=bn(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{w1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new u1(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;Ef(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(()=>{o(B1)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&Ef(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}sm(j1+s).then(()=>{i(s,a,o)}).catch(l=>{o(l)})}}).catch(s=>{o(s)})})}}async function to(e,t,n,r=!1){const i=new H1(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function W1(e,t){const n=Bp(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(qa(a,t??{}))return i;Ke(i,"already-initialized")}return n.initialize({options:t})}function V1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Y1(e,t,n){const r=bn(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=lm(t),{host:o,port:s}=K1(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||G1()}function lm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function K1(e){const t=lm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:bf(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:bf(o)}}}function bf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function G1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class $u{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(t){return ot("not implemented")}_linkToIdToken(t,n){return ot("not implemented")}_getReauthenticationResolver(t){return ot("not implemented")}}async function Q1(e,t){return Pn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function vs(e,t){return Pi(e,"POST","/v1/accounts:signInWithPassword",Tn(e,t))}/**
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
 */async function X1(e,t){return Pi(e,"POST","/v1/accounts:signInWithEmailLink",Tn(e,t))}async function q1(e,t){return Pi(e,"POST","/v1/accounts:signInWithEmailLink",Tn(e,t))}/**
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
 */class hi extends $u{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new hi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new hi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await to(t,r,"signInWithPassword");return vs(t,i)}else return vs(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const a=await to(t,r,"signInWithPassword");return vs(t,a)}else return Promise.reject(i)});case"emailLink":return X1(t,{email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Q1(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return q1(t,{idToken:n,email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function tr(e,t){return Pi(e,"POST","/v1/accounts:signInWithIdp",Tn(e,t))}/**
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
 */const J1="http://localhost";class kn extends $u{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new kn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=Mu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new kn(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return tr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,tr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,tr(t,n)}buildRequest(){const t={requestUri:J1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ci(n)}return t}}/**
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
 */function Z1(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ew(e){const t=Or(Nr(e)).link,n=t?Or(Nr(t)).deep_link_id:null,r=Or(Nr(e)).deep_link_id;return(r?Or(Nr(r)).link:null)||r||n||t||e}class Bu{constructor(t){var n,r,i,a,o,s;const l=Or(Nr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Z1((i=l.mode)!==null&&i!==void 0?i:null);A(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=ew(t);try{return new Bu(n)}catch{return null}}}/**
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
 */class mr{constructor(){this.providerId=mr.PROVIDER_ID}static credential(t,n){return hi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Bu.parseLink(n);return A(r,"argument-error"),hi._fromEmailAndCode(t,r.code,r.tenantId)}}mr.PROVIDER_ID="password";mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class um{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bi extends um{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tt extends bi{constructor(){super("facebook.com")}static credential(t){return kn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tt.credential(t.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return kn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class bt extends bi{constructor(){super("github.com")}static credential(t){return kn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bt.credential(t.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
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
 */class At extends bi{constructor(){super("twitter.com")}static credential(t,n){return kn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return At.credential(n,r)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
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
 */async function ys(e,t){return Pi(e,"POST","/v1/accounts:signUp",Tn(e,t))}/**
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
 */class Sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await hn._fromIdTokenResponse(t,r,i),o=Af(r);return new Sn({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Af(r);return new Sn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Af(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class no extends Jt{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,no.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new no(t,n,r,i)}}function cm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(e,a,t,r):a})}async function tw(e,t,n=!1){const r=await fi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Sn._forOperation(e,"link",r)}/**
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
 */async function nw(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await fi(e,cm(r,i,t,e),n);A(a.idToken,r,"internal-error");const o=Fu(a.idToken);A(o,r,"internal-error");const{sub:s}=o;return A(e.uid===s,r,"user-mismatch"),Sn._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),a}}/**
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
 */async function fm(e,t,n=!1){const r="signIn",i=await cm(e,r,t),a=await Sn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function rw(e,t){return fm(bn(e),t)}/**
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
 */async function dm(e){const t=bn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function iw(e,t,n){var r;const i=bn(e),a={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await to(i,a,"signUpPassword");o=ys(i,u)}else o=ys(i,a).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await to(i,a,"signUpPassword");return ys(i,c)}throw u});const s=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dm(e),u}),l=await Sn._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(l.user),l}function aw(e,t,n){return rw(yt(e),mr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dm(e),r})}function ow(e,t,n,r){return yt(e).onIdTokenChanged(t,n,r)}function sw(e,t,n){return yt(e).beforeAuthStateChanged(t,n)}function lw(e,t,n,r){return yt(e).onAuthStateChanged(t,n,r)}function uw(e){return yt(e).signOut()}const ro="__sak";/**
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
 */class hm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cw(){const e=me();return ju(e)||bo(e)}const fw=1e3,dw=10;class pm extends hm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cw()&&N1(),this.fallbackToPolling=am(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);O1()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,dw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}pm.type="LOCAL";const hw=pm;/**
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
 */class mm extends hm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}mm.type="SESSION";const gm=mm;/**
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
 */function pw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ao{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ao(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await pw(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
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
 */function Hu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class mw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=Hu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(h.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function gw(e){tt().location.href=e}/**
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
 */function vm(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function vw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ww(){return vm()?self:null}/**
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
 */const ym="firebaseLocalStorageDb",_w=1,io="firebaseLocalStorage",wm="fbase_key";class Ai{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oo(e,t){return e.transaction([io],t?"readwrite":"readonly").objectStore(io)}function kw(){const e=indexedDB.deleteDatabase(ym);return new Ai(e).toPromise()}function Il(){const e=indexedDB.open(ym,_w);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(io,{keyPath:wm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(io)?t(r):(r.close(),await kw(),t(await Il()))})})}async function Of(e,t,n){const r=Oo(e,!0).put({[wm]:t,value:n});return new Ai(r).toPromise()}async function Sw(e,t){const n=Oo(e,!1).get(t),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function Nf(e,t){const n=Oo(e,!0).delete(t);return new Ai(n).toPromise()}const Ew=800,Iw=3;class _m{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Iw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(ww()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await vw(),!this.activeServiceWorker)return;this.sender=new mw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||yw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Il();return await Of(t,ro,"1"),await Nf(t,ro),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Of(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Sw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=Oo(i,!1).getAll();return new Ai(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_m.type="LOCAL";const Cw=_m;new Ti(3e4,6e4);/**
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
 */function xw(e,t){return t?st(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Wu extends $u{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return tr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return tr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return tr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Tw(e){return fm(e.auth,new Wu(e),e.bypassAuthState)}function Pw(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),nw(n,new Wu(e),e.bypassAuthState)}async function bw(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),tw(n,new Wu(e),e.bypassAuthState)}/**
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
 */class km{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Tw;case"linkViaPopup":case"linkViaRedirect":return bw;case"reauthViaPopup":case"reauthViaRedirect":return Pw;default:Ke(this.auth,"internal-error")}}resolve(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Aw=new Ti(2e3,1e4);class Hn extends km{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const t=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Aw.get())};t()}}Hn.currentPopupAction=null;/**
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
 */const Ow="pendingRedirect",Ea=new Map;class Nw extends km{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ea.get(this.auth._key());if(!t){try{const r=await Rw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ea.set(this.auth._key(),t)}return this.bypassAuthState||Ea.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rw(e,t){const n=Mw(t),r=Dw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Lw(e,t){Ea.set(e._key(),t)}function Dw(e){return st(e._redirectPersistence)}function Mw(e){return Sa(Ow,e.config.apiKey,e.name)}async function Uw(e,t,n=!1){const r=bn(e),i=xw(r,t),o=await new Nw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const zw=10*60*1e3;class Fw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!jw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Sm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=zw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rf(t))}saveEventToCache(t){this.cachedEventUids.add(Rf(t)),this.lastProcessedEventTime=Date.now()}}function Rf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Sm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function jw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sm(e);default:return!1}}/**
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
 */async function $w(e,t={}){return Pn(e,"GET","/v1/projects",t)}/**
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
 */const Bw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hw=/^https?/;async function Ww(e){if(e.config.emulator)return;const{authorizedDomains:t}=await $w(e);for(const n of t)try{if(Vw(n))return}catch{}Ke(e,"unauthorized-domain")}function Vw(e){const t=El(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Hw.test(n))return!1;if(Bw.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Yw=new Ti(3e4,6e4);function Lf(){const e=tt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Kw(e){return new Promise((t,n)=>{var r,i,a;function o(){Lf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Lf(),n(et(e,"network-request-failed"))},timeout:Yw.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=tt().gapi)===null||a===void 0)&&a.load)o();else{const s=F1("iframefcb");return tt()[s]=()=>{gapi.load?o():n(et(e,"network-request-failed"))},sm(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Ia=null,t})}let Ia=null;function Gw(e){return Ia=Ia||Kw(e),Ia}/**
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
 */const Qw=new Ti(5e3,15e3),Xw="__/auth/iframe",qw="emulator/auth/iframe",Jw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e_(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zu(t,qw):`https://${e.config.authDomain}/${Xw}`,r={apiKey:t.apiKey,appName:e.name,v:xi},i=Zw.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Ci(r).slice(1)}`}async function t_(e){const t=await Gw(e),n=tt().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:e_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jw,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=et(e,"network-request-failed"),s=tt().setTimeout(()=>{a(o)},Qw.get());function l(){tt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
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
 */const n_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r_=500,i_=600,a_="_blank",o_="http://localhost";class Df{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s_(e,t,n,r=r_,i=i_){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},n_),{width:r.toString(),height:i.toString(),top:a,left:o}),u=me().toLowerCase();n&&(s=em(u)?a_:n),Zp(u)&&(t=t||o_,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(A1(u)&&s!=="_self")return l_(t||"",s),new Df(null);const d=window.open(t||"",s,c);A(d,e,"popup-blocked");try{d.focus()}catch{}return new Df(d)}function l_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const u_="__/auth/handler",c_="emulator/auth/handler",f_=encodeURIComponent("fac");async function Mf(e,t,n,r,i,a){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:xi,eventId:i};if(t instanceof um){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Zy(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(a||{}))o[c]=d}if(t instanceof bi){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${f_}=${encodeURIComponent(l)}`:"";return`${d_(e)}?${Ci(s).slice(1)}${u}`}function d_({config:e}){return e.emulator?zu(e,c_):`https://${e.authDomain}/${u_}`}/**
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
 */const ws="webStorageSupport";class h_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gm,this._completeRedirectFn=Uw,this._overrideRedirectResult=Lw}async _openPopup(t,n,r,i){var a;ht((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Mf(t,n,r,El(),i);return s_(t,o,Hu())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await Mf(t,n,r,El(),i);return gw(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(ht(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await t_(t),r=new Fw(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ws,{type:ws},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[ws];o!==void 0&&n(!!o),Ke(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ww(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return am()||ju()||bo()}}const p_=h_;var Uf="@firebase/auth",zf="1.3.0";/**
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
 */class m_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function g_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function v_(e){ui(new cr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:om(e)},u=new U1(r,i,a,l);return V1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ui(new cr("auth-internal",t=>{const n=bn(t.getProvider("auth").getImmediate());return(r=>new m_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Uf,zf,g_(e)),Zn(Uf,zf,"esm2017")}/**
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
 */const y_=5*60,w_=zp("authIdTokenMaxAge")||y_;let Ff=null;const __=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>w_)return;const i=n==null?void 0:n.token;Ff!==i&&(Ff=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function k_(e=Z0()){const t=Bp(e,"auth");if(t.isInitialized())return t.getImmediate();const n=W1(e,{popupRedirectResolver:p_,persistence:[Cw,hw,gm]}),r=zp("authTokenSyncURL");if(r){const a=__(r);sw(n,a,()=>a(n.currentUser)),ow(n,o=>a(o))}const i=By("auth");return i&&Y1(n,`http://${i}`),n}v_("Browser");var S_="firebase",E_="10.4.0";/**
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
 */Zn(S_,E_,"app");const I_={apiKey:"AIzaSyDwzNtWpdyMYFR6h6ASHwfIl9qaWTrY-ss",authDomain:"todo-app-e6b8d.firebaseapp.com",projectId:"todo-app-e6b8d",storageBucket:"todo-app-e6b8d.appspot.com",messagingSenderId:"1011000980175",appId:"1:1011000980175:web:986b49ec43e6920a3d3dba"},C_=Hp(I_),ao=k_(C_);/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(this,arguments)}var ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ln||(ln={}));const jf="popstate";function x_(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return Cl("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Im(i)}return P_(t,n,null,e)}function Em(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function T_(){return Math.random().toString(36).substr(2,8)}function $f(e,t){return{usr:e.state,key:e.key,idx:t}}function Cl(e,t,n,r){return n===void 0&&(n=null),oo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cm(t):t,{state:n,key:t&&t.key||r||T_()})}function Im(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cm(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function P_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=ln.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(oo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=ln.Pop;let S=c(),p=S==null?null:S-u;u=S,l&&l({action:s,location:w.location,delta:p})}function h(S,p){s=ln.Push;let f=Cl(w.location,S,p);n&&n(f,S),u=c()+1;let m=$f(f,u),v=w.createHref(f);try{o.pushState(m,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(v)}a&&l&&l({action:s,location:w.location,delta:1})}function g(S,p){s=ln.Replace;let f=Cl(w.location,S,p);n&&n(f,S),u=c();let m=$f(f,u),v=w.createHref(f);o.replaceState(m,"",v),a&&l&&l({action:s,location:w.location,delta:0})}function y(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:Im(S);return Em(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return s},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jf,d),l=S,()=>{i.removeEventListener(jf,d),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let p=y(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(S){return o.go(S)}};return w}var Bf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bf||(Bf={}));function b_(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const xm=["post","put","patch","delete"];new Set(xm);const A_=["get",...xm];new Set(A_);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const O_=F.createContext(null),Tm=F.createContext(null);function N_(){return F.useContext(Tm)!=null}function R_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ln.Pop,navigator:a,static:o=!1}=e;N_()&&Em(!1);let s=t.replace(/^\/*/,"/"),l=F.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=Cm(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:g="default"}=r,y=F.useMemo(()=>{let w=b_(u,s);return w==null?null:{location:{pathname:w,search:c,hash:d,state:h,key:g},navigationType:i}},[s,u,c,d,h,g,i]);return y==null?null:F.createElement(O_.Provider,{value:l},F.createElement(Tm.Provider,{children:n,value:y}))}new Promise(()=>{});/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const L_="startTransition",Hf=Ig[L_];function D_(e){let{basename:t,children:n,future:r,window:i}=e,a=F.useRef();a.current==null&&(a.current=x_({window:i,v5Compat:!0}));let o=a.current,[s,l]=F.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=F.useCallback(d=>{u&&Hf?Hf(()=>l(d)):l(d)},[l,u]);return F.useLayoutEffect(()=>o.listen(c),[o,c]),F.createElement(R_,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var Wf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Wf||(Wf={}));var Vf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vf||(Vf={}));const M_=({setUser:e,setShowSignUp:t,showSignUp:n,setSignedIn:r,signedIn:i})=>{const[a,o]=F.useState(""),[s,l]=F.useState(""),[u,c]=F.useState(null),d=async g=>{g.preventDefault();try{const y=await aw(ao,a,s);e(y.user),r(!0),console.log("sign in"+i),console.log("Successfully Signed In"),c(null)}catch(y){console.log("Error signing in: ",y),console.log(y.message),c(h(y.code))}},h=g=>({"auth/invalid-email":"Invalid Email!","auth/invalid-login-credentials":"Incorrect Password!","auth/user-not-found":"User not found, Please check your Email!"})[g]||"There is an problem";return O.jsx("div",{children:O.jsxs("form",{name:"signin",className:"flex flex-col gap-4",onSubmit:d,children:[O.jsx("input",{type:"email",placeholder:"Email",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]",value:a,onChange:g=>{o(g.target.value)}}),O.jsx("input",{type:"password",placeholder:"Password",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]",value:s,onChange:g=>{l(g.target.value)}}),O.jsxs("div",{className:"flex gap-5 items-center",children:[O.jsx("button",{type:"submit",className:"bg-white font-semibold text-sm w-[50%] h-10  rounded-full shadow-md",children:"Sign In"}),u&&O.jsx("p",{children:u}),O.jsx("p",{className:"cursor-pointer text-white max-sm:text-sm",onClick:()=>t(!n),children:"Don't have an account?"})]})]})})},U_=({setUser:e,setShowSignUp:t,showSignUp:n,setSignedIn:r})=>{const[i,a]=F.useState(""),[o,s]=F.useState(""),[l,u]=F.useState(null),c=async h=>{h.preventDefault();try{const g=await iw(ao,i,o);console.log(g.user),e(g.user),r(!0),u(null),console.log()}catch(g){u(d(g.code)),console.log("Error signing up",g)}},d=h=>({"auth/invalid-email":"Enter a Valid Email!","auth/weak-password":"Password should be atleast 6 characters!"})[h]||"There is a problem!";return O.jsx("div",{children:O.jsxs("form",{name:"signup",className:"flex flex-col gap-4",onSubmit:c,children:[O.jsx("input",{type:"email",value:i,placeholder:"Email",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]",onChange:h=>{a(h.target.value)}}),O.jsx("input",{type:"password",value:o,placeholder:"Password",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]",onChange:h=>{s(h.target.value)}}),O.jsxs("div",{className:"flex gap-5 items-center",children:[O.jsx("button",{type:"submit",className:"bg-white font-semibold text-sm w-[50%]  h-10  rounded-full shadow-md",children:"Sign Up"}),l&&O.jsx("p",{children:l}),O.jsx("p",{className:"cursor-pointer text-white max-sm:text-sm",onClick:()=>t(!n),children:"Already have an account?"})]})]})})},z_=({todo:e,setTodo:t,todos:n,setTodos:r})=>{const[i,a]=F.useState(!1),[o,s]=F.useState(!1),[l,u]=F.useState(null),c=h=>{h.preventDefault();const g={text:e,checked:!1};e!==""&&(r([...n,g]),t(""))};F.useEffect(()=>{const h=lw(ao,g=>{g?(u(g),a(!!l),console.log("header"+i),console.log(l)):u(null)});return()=>{h()}},[]);const d=async()=>{try{await uw(ao),console.log("signed out")}catch(h){console.log("error signing out",h)}};return O.jsx("header",{id:"header",className:"font-poppins bg-dark-green pt-[100px] pb-[40px] flex justify-center",children:O.jsxs("div",{className:"w-[450px] max-sm:padding-x",children:[O.jsxs("h1",{className:"text-white font-semibold text-3xl left-0 mb-2",children:["Todo",O.jsx("span",{className:"font-extralight",children:"App"})]}),i?O.jsxs("form",{onSubmit:c,className:"flex gap-4 max-sm:flex-col",children:[O.jsx("input",{type:"text",value:e,onChange:h=>t(h.target.value),placeholder:"Eg: Read Books",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10 w-[80%] max-sm:w-[100%]"}),O.jsx("button",{type:"submit",className:"bg-white font-semibold text-sm w-28 max-sm:w-full h-10  rounded-full shadow-md",children:"Add Task"})]}):o?O.jsx(U_,{setUser:u,setShowSignUp:s,showSignUp:o,setSignedIn:a}):O.jsx(M_,{setUser:u,setShowSignUp:s,showSignUp:o,setSignedIn:a,signedIn:i}),l&&O.jsx("button",{onClick:d,className:"bg-white font-semibold text-sm w-28 max-sm:w-full h-10  rounded-full shadow-md",children:"Sign Out"})]})})};var F_={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},j_={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},$_={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]};function Yf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yf(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function so(e){"@babel/helpers - typeof";return so=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},so(e)}function B_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H_(e,t,n){return t&&Kf(e.prototype,t),n&&Kf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vu(e,t){return V_(e)||K_(e,t)||Pm(e,t)||Q_()}function Oi(e){return W_(e)||Y_(e)||Pm(e)||G_()}function W_(e){if(Array.isArray(e))return xl(e)}function V_(e){if(Array.isArray(e))return e}function Y_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function K_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Pm(e,t){if(e){if(typeof e=="string")return xl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xl(e,t)}}function xl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Gf=function(){},Yu={},bm={},Am=null,Om={mark:Gf,measure:Gf};try{typeof window<"u"&&(Yu=window),typeof document<"u"&&(bm=document),typeof MutationObserver<"u"&&(Am=MutationObserver),typeof performance<"u"&&(Om=performance)}catch{}var X_=Yu.navigator||{},Qf=X_.userAgent,Xf=Qf===void 0?"":Qf,Yt=Yu,Y=bm,qf=Am,ea=Om;Yt.document;var wt=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",Nm=~Xf.indexOf("MSIE")||~Xf.indexOf("Trident/"),ta,na,ra,ia,aa,pt="___FONT_AWESOME___",Tl=16,Rm="fa",Lm="svg-inline--fa",En="data-fa-i2svg",Pl="data-fa-pseudo-element",q_="data-fa-pseudo-element-pending",Ku="data-prefix",Gu="data-icon",Jf="fontawesome-i2svg",J_="async",Z_=["HTML","HEAD","STYLE","SCRIPT"],Dm=function(){try{return!0}catch{return!1}}(),W="classic",J="sharp",Qu=[W,J];function Ni(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[W]}})}var pi=Ni((ta={},ie(ta,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(ta,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ta)),mi=Ni((na={},ie(na,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(na,J,{solid:"fass",regular:"fasr",light:"fasl"}),na)),gi=Ni((ra={},ie(ra,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(ra,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ra)),ek=Ni((ia={},ie(ia,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(ia,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ia)),tk=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Mm="fa-layers-text",nk=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,rk=Ni((aa={},ie(aa,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(aa,J,{900:"fass",400:"fasr",300:"fasl"}),aa)),Um=[1,2,3,4,5,6,7,8,9,10],ik=Um.concat([11,12,13,14,15,16,17,18,19,20]),ak=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],un={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vi=new Set;Object.keys(mi[W]).map(vi.add.bind(vi));Object.keys(mi[J]).map(vi.add.bind(vi));var ok=[].concat(Qu,Oi(vi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",un.GROUP,un.SWAP_OPACITY,un.PRIMARY,un.SECONDARY]).concat(Um.map(function(e){return"".concat(e,"x")})).concat(ik.map(function(e){return"w-".concat(e)})),Wr=Yt.FontAwesomeConfig||{};function sk(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function lk(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Y&&typeof Y.querySelector=="function"){var uk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uk.forEach(function(e){var t=Vu(e,2),n=t[0],r=t[1],i=lk(sk(n));i!=null&&(Wr[r]=i)})}var zm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rm,replacementClass:Lm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wr.familyPrefix&&(Wr.cssPrefix=Wr.familyPrefix);var fr=C(C({},zm),Wr);fr.autoReplaceSvg||(fr.observeMutations=!1);var P={};Object.keys(zm).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){fr[e]=n,Vr.forEach(function(r){return r(P)})},get:function(){return fr[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){fr.cssPrefix=t,Vr.forEach(function(n){return n(P)})},get:function(){return fr.cssPrefix}});Yt.FontAwesomeConfig=P;var Vr=[];function ck(e){return Vr.push(e),function(){Vr.splice(Vr.indexOf(e),1)}}var St=Tl,qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function fk(e){if(!(!e||!wt)){var t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Y.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Y.head.insertBefore(t,r),e}}var dk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yi(){for(var e=12,t="";e-- >0;)t+=dk[Math.random()*62|0];return t}function gr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xu(e){return e.classList?gr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Fm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hk(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Fm(e[n]),'" ')},"").trim()}function No(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qu(e){return e.size!==qe.size||e.x!==qe.x||e.y!==qe.y||e.rotate!==qe.rotate||e.flipX||e.flipY}function pk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function mk(e){var t=e.transform,n=e.width,r=n===void 0?Tl:n,i=e.height,a=i===void 0?Tl:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Nm?l+="translate(".concat(t.x/St-r/2,"em, ").concat(t.y/St-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/St,"em), calc(-50% + ").concat(t.y/St,"em)) "):l+="translate(".concat(t.x/St,"em, ").concat(t.y/St,"em) "),l+="scale(".concat(t.size/St*(t.flipX?-1:1),", ").concat(t.size/St*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var gk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function jm(){var e=Rm,t=Lm,n=P.cssPrefix,r=P.replacementClass,i=gk;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Zf=!1;function _s(){P.autoAddCss&&!Zf&&(fk(jm()),Zf=!0)}var vk={mixout:function(){return{dom:{css:jm,insertCss:_s}}},hooks:function(){return{beforeDOMElementCreation:function(){_s()},beforeI2svg:function(){_s()}}}},mt=Yt||{};mt[pt]||(mt[pt]={});mt[pt].styles||(mt[pt].styles={});mt[pt].hooks||(mt[pt].hooks={});mt[pt].shims||(mt[pt].shims=[]);var He=mt[pt],$m=[],yk=function e(){Y.removeEventListener("DOMContentLoaded",e),lo=1,$m.map(function(t){return t()})},lo=!1;wt&&(lo=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),lo||Y.addEventListener("DOMContentLoaded",yk));function wk(e){wt&&(lo?setTimeout(e,0):$m.push(e))}function Ri(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Fm(e):"<".concat(t," ").concat(hk(r),">").concat(a.map(Ri).join(""),"</").concat(t,">")}function ed(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var _k=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},ks=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?_k(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function kk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function bl(e){var t=kk(e);return t.length===1?t[0].toString(16):null}function Sk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function td(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Al(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=td(t);typeof He.hooks.addPack=="function"&&!i?He.hooks.addPack(e,td(t)):He.styles[e]=C(C({},He.styles[e]||{}),a),e==="fas"&&Al("fa",t)}var oa,sa,la,Wn=He.styles,Ek=He.shims,Ik=(oa={},ie(oa,W,Object.values(gi[W])),ie(oa,J,Object.values(gi[J])),oa),Ju=null,Bm={},Hm={},Wm={},Vm={},Ym={},Ck=(sa={},ie(sa,W,Object.keys(pi[W])),ie(sa,J,Object.keys(pi[J])),sa);function xk(e){return~ok.indexOf(e)}function Tk(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!xk(i)?i:null}var Km=function(){var t=function(a){return ks(Wn,function(o,s,l){return o[l]=ks(s,a,{}),o},{})};Bm=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Hm=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Ym=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Wn||P.autoFetchSvg,r=ks(Ek,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Wm=r.names,Vm=r.unicodes,Ju=Ro(P.styleDefault,{family:P.familyDefault})};ck(function(e){Ju=Ro(e.styleDefault,{family:P.familyDefault})});Km();function Zu(e,t){return(Bm[e]||{})[t]}function Pk(e,t){return(Hm[e]||{})[t]}function cn(e,t){return(Ym[e]||{})[t]}function Gm(e){return Wm[e]||{prefix:null,iconName:null}}function bk(e){var t=Vm[e],n=Zu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Kt(){return Ju}var ec=function(){return{prefix:null,iconName:null,rest:[]}};function Ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?W:n,i=pi[r][e],a=mi[r][e]||mi[r][i],o=e in He.styles?e:null;return a||o||null}var nd=(la={},ie(la,W,Object.keys(gi[W])),ie(la,J,Object.keys(gi[J])),la);function Lo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ie(t,W,"".concat(P.cssPrefix,"-").concat(W)),ie(t,J,"".concat(P.cssPrefix,"-").concat(J)),t),o=null,s=W;(e.includes(a[W])||e.some(function(u){return nd[W].includes(u)}))&&(s=W),(e.includes(a[J])||e.some(function(u){return nd[J].includes(u)}))&&(s=J);var l=e.reduce(function(u,c){var d=Tk(P.cssPrefix,c);if(Wn[c]?(c=Ik[s].includes(c)?ek[s][c]:c,o=c,u.prefix=c):Ck[s].indexOf(c)>-1?(o=c,u.prefix=Ro(c,{family:s})):d?u.iconName=d:c!==P.replacementClass&&c!==a[W]&&c!==a[J]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Gm(u.iconName):{},g=cn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Wn.far&&Wn.fas&&!P.autoFetchSvg&&(u.prefix="fas")}return u},ec());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(Wn.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=cn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Kt()||"fas"),l}var Ak=function(){function e(){B_(this,e),this.definitions={}}return H_(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Al(s,o[s]);var l=gi[W][s];l&&Al(l,o[s]),Km()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),e}(),rd=[],Vn={},nr={},Ok=Object.keys(nr);function Nk(e,t){var n=t.mixoutsTo;return rd=e,Vn={},Object.keys(nr).forEach(function(r){Ok.indexOf(r)===-1&&delete nr[r]}),rd.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),so(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Vn[o]||(Vn[o]=[]),Vn[o].push(a[o])})}r.provides&&r.provides(nr)}),n}function Ol(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Vn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function In(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Vn[e]||[];i.forEach(function(a){a.apply(null,n)})}function gt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return nr[e]?nr[e].apply(null,t):void 0}function Nl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Kt();if(t)return t=cn(n,t)||t,ed(Qm.definitions,n,t)||ed(He.styles,n,t)}var Qm=new Ak,Rk=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,In("noAuto")},Lk={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wt?(In("beforeI2svg",t),gt("pseudoElements2svg",t),gt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,wk(function(){Mk({autoReplaceSvgRoot:n}),In("watch",t)})}},Dk={icon:function(t){if(t===null)return null;if(so(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:cn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ro(t[0]);return{prefix:r,iconName:cn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(tk))){var i=Lo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Kt(),iconName:cn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Kt();return{prefix:a,iconName:cn(a,t)||t}}}},Oe={noAuto:Rk,config:P,dom:Lk,parse:Dk,library:Qm,findIconDefinition:Nl,toHtml:Ri},Mk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Y:n;(Object.keys(He.styles).length>0||P.autoFetchSvg)&&wt&&P.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Do(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ri(r)})}}),Object.defineProperty(e,"node",{get:function(){if(wt){var r=Y.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Uk(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(qu(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=No(C(C({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function zk(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:o}),children:r}]}]}function tc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,y=r.found?r:n,w=y.width,S=y.height,p=i==="fak",f=[P.replacementClass,a?"".concat(P.cssPrefix,"-").concat(a):""].filter(function(U){return d.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(d.classes).join(" "),m={children:[],attributes:C(C({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:f,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(S)})},v=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/S*16*.0625,"em")}:{};g&&(m.attributes[En]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||yi())},children:[l]}),delete m.attributes.title);var k=C(C({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:C(C({},v),d.styles)}),E=r.found&&n.found?gt("generateAbstractMask",k)||{children:[],attributes:{}}:gt("generateAbstractIcon",k)||{children:[],attributes:{}},I=E.children,b=E.attributes;return k.children=I,k.attributes=b,s?zk(k):Uk(k)}function id(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=C(C(C({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[En]="");var c=C({},o.styles);qu(i)&&(c.transform=mk({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=No(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Fk(e){var t=e.content,n=e.title,r=e.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=No(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ss=He.styles;function Rl(e){var t=e[0],n=e[1],r=e.slice(4),i=Vu(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(un.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(un.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(un.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var jk={found:!1,width:512,height:512};function $k(e,t){!Dm&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ll(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Kt()),new Promise(function(r,i){if(gt("missingIconAbstract"),n==="fa"){var a=Gm(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ss[t]&&Ss[t][e]){var o=Ss[t][e];return r(Rl(o))}$k(e,t),r(C(C({},jk),{},{icon:P.showMissingIcons&&e?gt("missingIconAbstract")||{}:{}}))})}var ad=function(){},Dl=P.measurePerformance&&ea&&ea.mark&&ea.measure?ea:{mark:ad,measure:ad},Rr='FA "6.4.2"',Bk=function(t){return Dl.mark("".concat(Rr," ").concat(t," begins")),function(){return Xm(t)}},Xm=function(t){Dl.mark("".concat(Rr," ").concat(t," ends")),Dl.measure("".concat(Rr," ").concat(t),"".concat(Rr," ").concat(t," begins"),"".concat(Rr," ").concat(t," ends"))},nc={begin:Bk,end:Xm},Ca=function(){};function od(e){var t=e.getAttribute?e.getAttribute(En):null;return typeof t=="string"}function Hk(e){var t=e.getAttribute?e.getAttribute(Ku):null,n=e.getAttribute?e.getAttribute(Gu):null;return t&&n}function Wk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Vk(){if(P.autoReplaceSvg===!0)return xa.replace;var e=xa[P.autoReplaceSvg];return e||xa.replace}function Yk(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function Kk(e){return Y.createElement(e)}function qm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Yk:Kk:n;if(typeof e=="string")return Y.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(qm(o,{ceFn:r}))}),i}function Gk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xa={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(qm(i),n)}),n.getAttribute(En)===null&&P.keepOriginalSource){var r=Y.createComment(Gk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Xu(n).indexOf(P.replacementClass))return xa.replace(t);var i=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Ri(s)}).join(`
`);n.setAttribute(En,""),n.innerHTML=o}};function sd(e){e()}function Jm(e,t){var n=typeof t=="function"?t:Ca;if(e.length===0)n();else{var r=sd;P.mutateApproach===J_&&(r=Yt.requestAnimationFrame||sd),r(function(){var i=Vk(),a=nc.begin("mutate");e.map(i),a(),n()})}}var rc=!1;function Zm(){rc=!0}function Ml(){rc=!1}var uo=null;function ld(e){if(qf&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Ca:t,r=e.nodeCallback,i=r===void 0?Ca:r,a=e.pseudoElementsCallback,o=a===void 0?Ca:a,s=e.observeMutationsRoot,l=s===void 0?Y:s;uo=new qf(function(u){if(!rc){var c=Kt();gr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!od(d.addedNodes[0])&&(P.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&P.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&od(d.target)&&~ak.indexOf(d.attributeName))if(d.attributeName==="class"&&Hk(d.target)){var h=Lo(Xu(d.target)),g=h.prefix,y=h.iconName;d.target.setAttribute(Ku,g||c),y&&d.target.setAttribute(Gu,y)}else Wk(d.target)&&i(d.target)})}}),wt&&uo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qk(){uo&&uo.disconnect()}function Xk(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function qk(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Lo(Xu(e));return i.prefix||(i.prefix=Kt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Pk(i.prefix,e.innerText)||Zu(i.prefix,bl(e.innerText))),!i.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Jk(e){var t=gr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||yi()):(t["aria-hidden"]="true",t.focusable="false")),t}function Zk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ud(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qk(e),r=n.iconName,i=n.prefix,a=n.rest,o=Jk(e),s=Ol("parseNodeAttributes",{},e),l=t.styleParser?Xk(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var eS=He.styles;function eg(e){var t=P.autoReplaceSvg==="nest"?ud(e,{styleParser:!1}):ud(e);return~t.extra.classes.indexOf(Mm)?gt("generateLayersText",e,t):gt("generateSvgReplacementMutation",e,t)}var Gt=new Set;Qu.map(function(e){Gt.add("fa-".concat(e))});Object.keys(pi[W]).map(Gt.add.bind(Gt));Object.keys(pi[J]).map(Gt.add.bind(Gt));Gt=Oi(Gt);function cd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wt)return Promise.resolve();var n=Y.documentElement.classList,r=function(d){return n.add("".concat(Jf,"-").concat(d))},i=function(d){return n.remove("".concat(Jf,"-").concat(d))},a=P.autoFetchSvg?Gt:Qu.map(function(c){return"fa-".concat(c)}).concat(Object.keys(eS));a.includes("fa")||a.push("fa");var o=[".".concat(Mm,":not([").concat(En,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(En,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=gr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=nc.begin("onTree"),u=s.reduce(function(c,d){try{var h=eg(d);h&&c.push(h)}catch(g){Dm||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){Jm(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function tS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;eg(e).then(function(n){n&&Jm([n],t)})}function nS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Nl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Nl(i||{})),e(r,C(C({},n),{},{mask:i}))}}var rS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?qe:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,w=n.classes,S=w===void 0?[]:w,p=n.attributes,f=p===void 0?{}:p,m=n.styles,v=m===void 0?{}:m;if(t){var k=t.prefix,E=t.iconName,I=t.icon;return Do(C({type:"icon"},t),function(){return In("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(h?f["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(y||yi()):(f["aria-hidden"]="true",f.focusable="false")),tc({icons:{main:Rl(I),mask:l?Rl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:E,transform:C(C({},qe),i),symbol:o,title:h,maskId:c,titleId:y,extra:{attributes:f,styles:v,classes:S}})})}},iS={mixout:function(){return{icon:nS(rS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=cd,n.nodeCallback=tS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Y:r,a=n.callback,o=a===void 0?function(){}:a;return cd(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,y){Promise.all([Ll(i,s),c.iconName?Ll(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var S=Vu(w,2),p=S[0],f=S[1];g([n,tc({icons:{main:p,mask:f},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:h,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=No(s);l.length>0&&(i.style=l);var u;return qu(o)&&(u=gt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},aS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Do({type:"layer"},function(){In("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(Oi(a)).join(" ")},children:o}]})}}}},oS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Do({type:"counter",content:n},function(){return In("beforeDOMElementCreation",{content:n,params:r}),Fk({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(Oi(s))}})})}}}},sS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?qe:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Do({type:"text",content:n},function(){return In("beforeDOMElementCreation",{content:n,params:r}),id({content:n,transform:C(C({},qe),a),title:s,extra:{attributes:d,styles:g,classes:["".concat(P.cssPrefix,"-layers-text")].concat(Oi(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Nm){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return P.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,id({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},lS=new RegExp('"',"ug"),fd=[1105920,1112319];function uS(e){var t=e.replace(lS,""),n=Sk(t,0),r=n>=fd[0]&&n<=fd[1],i=t.length===2?t[0]===t[1]:!1;return{value:bl(i?t[0]:t),isSecondary:r||i}}function dd(e,t){var n="".concat(q_).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=gr(e.children),o=a.filter(function(I){return I.getAttribute(Pl)===t})[0],s=Yt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(nk),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?J:W,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mi[h][l[2].toLowerCase()]:rk[h][u],y=uS(d),w=y.value,S=y.isSecondary,p=l[0].startsWith("FontAwesome"),f=Zu(g,w),m=f;if(p){var v=bk(w);v.iconName&&v.prefix&&(f=v.iconName,g=v.prefix)}if(f&&!S&&(!o||o.getAttribute(Ku)!==g||o.getAttribute(Gu)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var k=Zk(),E=k.extra;E.attributes[Pl]=t,Ll(f,g).then(function(I){var b=tc(C(C({},k),{},{icons:{main:I,mask:ec()},prefix:g,iconName:m,extra:E,watchable:!0})),U=Y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=b.map(function(R){return Ri(R)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function cS(e){return Promise.all([dd(e,"::before"),dd(e,"::after")])}function fS(e){return e.parentNode!==document.head&&!~Z_.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function hd(e){if(wt)return new Promise(function(t,n){var r=gr(e.querySelectorAll("*")).filter(fS).map(cS),i=nc.begin("searchPseudoElements");Zm(),Promise.all(r).then(function(){i(),Ml(),t()}).catch(function(){i(),Ml(),n()})})}var dS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=hd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Y:r;P.searchPseudoElements&&hd(i)}}},pd=!1,hS={mixout:function(){return{dom:{unwatch:function(){Zm(),pd=!0}}}},hooks:function(){return{bootstrap:function(){ld(Ol("mutationObserverCallbacks",{}))},noAuto:function(){Qk()},watch:function(n){var r=n.observeMutationsRoot;pd?Ml():ld(Ol("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},md=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},pS={mixout:function(){return{parse:{transform:function(n){return md(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=md(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:C({},g.outer),children:[{tag:"g",attributes:C({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),g.path)}]}]}}}},Es={x:0,y:0,width:"100%",height:"100%"};function gd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function mS(e){return e.tag==="g"?e.children:[e]}var gS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Lo(i.split(" ").map(function(o){return o.trim()})):ec();return a.prefix||(a.prefix=Kt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,d=o.width,h=o.icon,g=pk({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:C(C({},Es),{},{fill:"white"})},w=c.children?{children:c.children.map(gd)}:{},S={tag:"g",attributes:C({},g.inner),children:[gd(C({tag:c.tag,attributes:C(C({},c.attributes),g.path)},w))]},p={tag:"g",attributes:C({},g.outer),children:[S]},f="mask-".concat(s||yi()),m="clip-".concat(s||yi()),v={tag:"mask",attributes:C(C({},Es),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:mS(h)},v]};return r.push(k,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(f,")")},Es)}),{children:r,attributes:i}}}},vS={provides:function(t){var n=!1;Yt.matchMedia&&(n=Yt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},wS=[vk,iS,aS,oS,sS,dS,hS,pS,gS,vS,yS];Nk(wS,{mixoutsTo:Oe});Oe.noAuto;Oe.config;Oe.library;Oe.dom;var Ul=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var _S=Oe.icon;Oe.layer;Oe.text;Oe.counter;var tg={exports:{}},kS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",SS=kS,ES=SS;function ng(){}function rg(){}rg.resetWarningCache=ng;var IS=function(){function e(r,i,a,o,s,l){if(l!==ES){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:rg,resetWarningCache:ng};return n.PropTypes=n,n};tg.exports=IS();var CS=tg.exports;const D=wd(CS);function vd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vd(Object(n),!0).forEach(function(r){Yn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function co(e){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},co(e)}function Yn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function TS(e,t){if(e==null)return{};var n=xS(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zl(e){return PS(e)||bS(e)||AS(e)||OS()}function PS(e){if(Array.isArray(e))return Fl(e)}function bS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function AS(e,t){if(e){if(typeof e=="string")return Fl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fl(e,t)}}function Fl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function OS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function NS(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,h=e.fixedWidth,g=e.inverse,y=e.border,w=e.listItem,S=e.flip,p=e.size,f=e.rotation,m=e.pull,v=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":g,"fa-border":y,"fa-li":w,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Yn(t,"fa-".concat(p),typeof p<"u"&&p!==null),Yn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Yn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Yn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map(function(k){return v[k]?k:null}).filter(function(k){return k})}function RS(e){return e=e-0,e===e}function ig(e){return RS(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var LS=["style"];function DS(e){return e.charAt(0).toUpperCase()+e.slice(1)}function MS(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=ig(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[DS(i)]=a:t[i]=a,t},{})}function ag(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ag(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=MS(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[ig(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=TS(n,LS);return i.attrs.style=Rt(Rt({},i.attrs.style),o),e.apply(void 0,[t.tag,Rt(Rt({},i.attrs),s)].concat(zl(r)))}var og=!1;try{og=!0}catch{}function US(){if(!og&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function yd(e){if(e&&co(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ul.icon)return Ul.icon(e);if(e===null)return null;if(e&&co(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Is(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Yn({},e,t):{}}var pn=ho.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=yd(n),c=Is("classes",[].concat(zl(NS(e)),zl(a.split(" ")))),d=Is("transform",typeof e.transform=="string"?Ul.transform(e.transform):e.transform),h=Is("mask",yd(r)),g=_S(u,Rt(Rt(Rt(Rt({},c),d),h),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!g)return US("Could not find icon",u),null;var y=g.abstract,w={ref:t};return Object.keys(e).forEach(function(S){pn.defaultProps.hasOwnProperty(S)||(w[S]=e[S])}),zS(y[0],w)});pn.displayName="FontAwesomeIcon";pn.propTypes={beat:D.bool,border:D.bool,beatFade:D.bool,bounce:D.bool,className:D.string,fade:D.bool,flash:D.bool,mask:D.oneOfType([D.object,D.array,D.string]),maskId:D.string,fixedWidth:D.bool,inverse:D.bool,flip:D.oneOf([!0,!1,"horizontal","vertical","both"]),icon:D.oneOfType([D.object,D.array,D.string]),listItem:D.bool,pull:D.oneOf(["right","left"]),pulse:D.bool,rotation:D.oneOf([0,90,180,270]),shake:D.bool,size:D.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:D.bool,spinPulse:D.bool,spinReverse:D.bool,symbol:D.oneOfType([D.bool,D.string]),title:D.string,titleId:D.string,transform:D.oneOfType([D.string,D.object]),swapOpacity:D.bool};pn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var zS=ag.bind(null,ho.createElement);const FS=({todos:e,setTodos:t})=>{const[n,r]=F.useState([]),[i,a]=F.useState([]),o=(c,d)=>{const h=[...e];h[c].checked=d,t(h)},s=(c,d)=>{const h=[...e];console.log(h[c]),h[c].text=d,t(h)},l=c=>{const d=e.filter((h,g)=>g!==c);t(d)};F.useEffect(()=>{const c=e.filter(h=>h.checked);r(c);const d=e.filter(h=>!h.checked);a(d)},[e]);const u=[{title:"Remaining",count:i.length},{title:"Completed",count:n.length},{title:"Total",count:e.length}];return O.jsxs("section",{className:"font-poppins max-container max-sm:padding-x flex flex-col gap-5 items-center mt-[40px]",children:[O.jsx("div",{className:"flex justify-evenly max-sm:w-full max-sm:text-[10px] text-xs w-[450px]",children:u.map(c=>O.jsx("div",{children:O.jsxs("div",{className:" text-white font-semibold rounded-l-full flex items-center",children:[O.jsx("p",{className:"bg-dark-green px-4 max-sm:px-2 py-0.5 leading-normal rounded-l-full",children:c.title}),O.jsx("p",{className:"bg-light-yellow px-2 py-0.5 md:w-11 max-sm:px-2 leading-normal rounded-r-full text-black",children:c.count})]})},c.title))}),e.map((c,d)=>O.jsxs("div",{className:`${c.checked?"bg-yellow-green":"bg-light-yellow"} h-10 flex justify-between px-5 items-center w-[450px] max-sm:w-full shadow-sm rounded-full`,children:[O.jsx("div",{className:"cursor-pointer",onClick:()=>o(d,!c.checked),children:c.checked?O.jsx(pn,{icon:$_}):O.jsx(pn,{icon:F_})}),O.jsx("input",{type:"text",value:c.text||"",onChange:h=>s(d,h.target.value),className:"bg-transparent w-[80%] h-7 outline-none"}),O.jsx(pn,{className:"cursor-pointer",onClick:()=>l(d),icon:j_})]},d))]})};function jS(){const[e,t]=F.useState(""),[n,r]=F.useState([]);return O.jsx(D_,{children:O.jsxs("div",{children:[O.jsx(z_,{todo:e,setTodo:t,todos:n,setTodos:r}),O.jsx(FS,{todos:n,setTodos:r})]})})}Cs.createRoot(document.getElementById("root")).render(O.jsx(ho.StrictMode,{children:O.jsx(jS,{})}));
