function dg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sd={exports:{}},po={},Ed={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=Symbol.for("react.element"),hg=Symbol.for("react.portal"),pg=Symbol.for("react.fragment"),mg=Symbol.for("react.strict_mode"),gg=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),wg=Symbol.for("react.forward_ref"),_g=Symbol.for("react.suspense"),kg=Symbol.for("react.memo"),Sg=Symbol.for("react.lazy"),oc=Symbol.iterator;function Eg(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var Id={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cd=Object.assign,xd={};function pr(e,t,n){this.props=e,this.context=t,this.refs=xd,this.updater=n||Id}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Td(){}Td.prototype=pr.prototype;function $l(e,t,n){this.props=e,this.context=t,this.refs=xd,this.updater=n||Id}var Bl=$l.prototype=new Td;Bl.constructor=$l;Cd(Bl,pr.prototype);Bl.isPureReactComponent=!0;var sc=Array.isArray,bd=Object.prototype.hasOwnProperty,Hl={current:null},Pd={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)bd.call(t,r)&&!Pd.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ki,type:e,key:a,ref:o,props:i,_owner:Hl.current}}function Ig(e,t){return{$$typeof:ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ki}function Cg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lc=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cg(""+e.key):t.toString(36)}function fa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ki:case hg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+jo(o,0):r,sc(i)?(n="",e!=null&&(n=e.replace(lc,"$&/")+"/"),fa(i,t,n,"",function(u){return u})):i!=null&&(Wl(i)&&(i=Ig(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",sc(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+jo(a,s);o+=fa(a,t,n,l,i)}else if(l=Eg(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+jo(a,s++),o+=fa(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ui(e,t,n){if(e==null)return e;var r=[],i=0;return fa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function xg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},da={transition:null},Tg={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:da,ReactCurrentOwner:Hl};M.Children={map:Ui,forEach:function(e,t,n){Ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ui(e,function(){t++}),t},toArray:function(e){return Ui(e,function(t){return t})||[]},only:function(e){if(!Wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=pr;M.Fragment=pg;M.Profiler=gg;M.PureComponent=$l;M.StrictMode=mg;M.Suspense=_g;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cd({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Hl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)bd.call(t,l)&&!Pd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ki,type:e.type,key:i,ref:a,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:yg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vg,_context:e},e.Consumer=e};M.createElement=Od;M.createFactory=function(e){var t=Od.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:wg,render:e}};M.isValidElement=Wl;M.lazy=function(e){return{$$typeof:Sg,_payload:{_status:-1,_result:e},_init:xg}};M.memo=function(e,t){return{$$typeof:kg,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=da.transition;da.transition={};try{e()}finally{da.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return ye.current.useCallback(e,t)};M.useContext=function(e){return ye.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};M.useEffect=function(e,t){return ye.current.useEffect(e,t)};M.useId=function(){return ye.current.useId()};M.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ye.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};M.useRef=function(e){return ye.current.useRef(e)};M.useState=function(e){return ye.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ye.current.useTransition()};M.version="18.2.0";Ed.exports=M;var F=Ed.exports;const We=kd(F),bg=dg({__proto__:null,default:We},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg=F,Og=Symbol.for("react.element"),Ng=Symbol.for("react.fragment"),Ag=Object.prototype.hasOwnProperty,Rg=Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lg={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ag.call(t,r)&&!Lg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Og,type:e,key:a,ref:o,props:i,_owner:Rg.current}}po.Fragment=Ng;po.jsx=Nd;po.jsxs=Nd;Sd.exports=po;var O=Sd.exports,xs={},Ad={exports:{}},Pe={},Rd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var L=T.length;T.push(A);e:for(;0<L;){var Z=L-1>>>1,ae=T[Z];if(0<i(ae,A))T[Z]=A,T[L]=ae,L=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var A=T[0],L=T.pop();if(L!==A){T[0]=L;e:for(var Z=0,ae=T.length,Mi=ae>>>1;Z<Mi;){var tn=2*(Z+1)-1,Fo=T[tn],nn=tn+1,zi=T[nn];if(0>i(Fo,L))nn<ae&&0>i(zi,Fo)?(T[Z]=zi,T[nn]=L,Z=nn):(T[Z]=Fo,T[tn]=L,Z=tn);else if(nn<ae&&0>i(zi,L))T[Z]=zi,T[nn]=L,Z=nn;else break e}}return A}function i(T,A){var L=T.sortIndex-A.sortIndex;return L!==0?L:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,h=3,g=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=T)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function y(T){if(w=!1,m(T),!v)if(n(l)!==null)v=!0,zo(k);else{var A=n(u);A!==null&&Uo(y,A.startTime-T)}}function k(T,A){v=!1,w&&(w=!1,p(P),P=-1),g=!0;var L=h;try{for(m(A),d=n(l);d!==null&&(!(d.expirationTime>A)||T&&!Ue());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,h=d.priorityLevel;var ae=Z(d.expirationTime<=A);A=e.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&r(l),m(A)}else r(l);d=n(l)}if(d!==null)var Mi=!0;else{var tn=n(u);tn!==null&&Uo(y,tn.startTime-A),Mi=!1}return Mi}finally{d=null,h=L,g=!1}}var E=!1,I=null,P=-1,z=5,R=-1;function Ue(){return!(e.unstable_now()-R<z)}function wr(){if(I!==null){var T=e.unstable_now();R=T;var A=!0;try{A=I(!0,T)}finally{A?_r():(E=!1,I=null)}}else E=!1}var _r;if(typeof f=="function")_r=function(){f(wr)};else if(typeof MessageChannel<"u"){var ac=new MessageChannel,fg=ac.port2;ac.port1.onmessage=wr,_r=function(){fg.postMessage(null)}}else _r=function(){S(wr,0)};function zo(T){I=T,E||(E=!0,_r())}function Uo(T,A){P=S(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,zo(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var L=h;h=A;try{return T()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=h;h=T;try{return A()}finally{h=L}},e.unstable_scheduleCallback=function(T,A,L){var Z=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Z+L:Z):L=Z,T){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=L+ae,T={id:c++,callback:A,priorityLevel:T,startTime:L,expirationTime:ae,sortIndex:-1},L>Z?(T.sortIndex=L,t(u,T),n(l)===null&&T===n(u)&&(w?(p(P),P=-1):w=!0,Uo(y,L-Z))):(T.sortIndex=ae,t(l,T),v||g||(v=!0,zo(k))),T},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(T){var A=h;return function(){var L=h;h=A;try{return T.apply(this,arguments)}finally{h=L}}}})(Ld);Rd.exports=Ld;var Dg=Rd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=F,be=Dg;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Md=new Set,Gr={};function Tn(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Gr[e]=t,e=0;e<t.length;e++)Md.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ts=Object.prototype.hasOwnProperty,Mg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uc={},cc={};function zg(e){return Ts.call(cc,e)?!0:Ts.call(uc,e)?!1:Mg.test(e)?cc[e]=!0:(uc[e]=!0,!1)}function Ug(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fg(e,t,n,r){if(t===null||typeof t>"u"||Ug(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vl=/[\-:]([a-z])/g;function Yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vl,Yl);ce[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vl,Yl);ce[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vl,Yl);ce[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kl(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fg(t,n,i,r)&&(n=null),r||i===null?zg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fi=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),Gl=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),zd=Symbol.for("react.provider"),Ud=Symbol.for("react.context"),Ql=Symbol.for("react.forward_ref"),Ps=Symbol.for("react.suspense"),Os=Symbol.for("react.suspense_list"),Xl=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Fd=Symbol.for("react.offscreen"),fc=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=fc&&e[fc]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,$o;function Pr(e){if($o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$o=t&&t[1]||""}return`
`+$o+e}var Bo=!1;function Ho(e,t){if(!e||Bo)return"";Bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function jg(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=Ho(e.type,!1),e;case 11:return e=Ho(e.type.render,!1),e;case 1:return e=Ho(e.type,!0),e;default:return""}}function Ns(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Rn:return"Portal";case bs:return"Profiler";case Gl:return"StrictMode";case Ps:return"Suspense";case Os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ud:return(e.displayName||"Context")+".Consumer";case zd:return(e._context.displayName||"Context")+".Provider";case Ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xl:return t=e.displayName||null,t!==null?t:Ns(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return Ns(e(t))}catch{}}return null}function $g(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ns(t);case 8:return t===Gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bg(e){var t=jd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ji(e){e._valueTracker||(e._valueTracker=Bg(e))}function $d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function As(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bd(e,t){t=t.checked,t!=null&&Kl(e,"checked",t,!1)}function Rs(e,t){Bd(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ls(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ls(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ls(e,t,n){(t!=="number"||Pa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Or=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Or(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function Hd(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,Vd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hg=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Hg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Yd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function Kd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wg=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zs(e,t){if(t){if(Wg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Xn=null,qn=null;function gc(e){if(e=Ii(e)){if(typeof js!="function")throw Error(_(280));var t=e.stateNode;t&&(t=wo(t),js(e.stateNode,e.type,t))}}function Gd(e){Xn?qn?qn.push(e):qn=[e]:Xn=e}function Qd(){if(Xn){var e=Xn,t=qn;if(qn=Xn=null,gc(e),t)for(e=0;e<t.length;e++)gc(t[e])}}function Xd(e,t){return e(t)}function qd(){}var Wo=!1;function Jd(e,t,n){if(Wo)return e(t,n);Wo=!0;try{return Xd(e,t,n)}finally{Wo=!1,(Xn!==null||qn!==null)&&(qd(),Qd())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var $s=!1;if(ct)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){$s=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{$s=!1}function Vg(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var zr=!1,Oa=null,Na=!1,Bs=null,Yg={onError:function(e){zr=!0,Oa=e}};function Kg(e,t,n,r,i,a,o,s,l){zr=!1,Oa=null,Vg.apply(Yg,arguments)}function Gg(e,t,n,r,i,a,o,s,l){if(Kg.apply(this,arguments),zr){if(zr){var u=Oa;zr=!1,Oa=null}else throw Error(_(198));Na||(Na=!0,Bs=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vc(e){if(bn(e)!==e)throw Error(_(188))}function Qg(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return vc(i),e;if(a===r)return vc(i),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function eh(e){return e=Qg(e),e!==null?th(e):null}function th(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=th(e);if(t!==null)return t;e=e.sibling}return null}var nh=be.unstable_scheduleCallback,yc=be.unstable_cancelCallback,Xg=be.unstable_shouldYield,qg=be.unstable_requestPaint,ee=be.unstable_now,Jg=be.unstable_getCurrentPriorityLevel,Jl=be.unstable_ImmediatePriority,rh=be.unstable_UserBlockingPriority,Aa=be.unstable_NormalPriority,Zg=be.unstable_LowPriority,ih=be.unstable_IdlePriority,mo=null,Ze=null;function ev(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:rv,tv=Math.log,nv=Math.LN2;function rv(e){return e>>>=0,e===0?32:31-(tv(e)/nv|0)|0}var Bi=64,Hi=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ra(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Nr(s):(a&=o,a!==0&&(r=Nr(a)))}else o=n&~i,o!==0?r=Nr(o):a!==0&&(r=Nr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function iv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function av(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ve(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=iv(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ah(){var e=Bi;return Bi<<=1,!(Bi&4194240)&&(Bi=64),e}function Vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function ov(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function oh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sh,eu,lh,uh,ch,Ws=!1,Wi=[],Dt=null,Mt=null,zt=null,qr=new Map,Jr=new Map,xt=[],sv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wc(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function Er(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ii(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lv(e,t,n,r,i){switch(t){case"focusin":return Dt=Er(Dt,e,t,n,r,i),!0;case"dragenter":return Mt=Er(Mt,e,t,n,r,i),!0;case"mouseover":return zt=Er(zt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return qr.set(a,Er(qr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Jr.set(a,Er(Jr.get(a)||null,e,t,n,r,i)),!0}return!1}function fh(e){var t=sn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zd(n),t!==null){e.blockedOn=t,ch(e.priority,function(){lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ha(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fs=r,n.target.dispatchEvent(r),Fs=null}else return t=Ii(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function _c(e,t,n){ha(e)&&n.delete(t)}function uv(){Ws=!1,Dt!==null&&ha(Dt)&&(Dt=null),Mt!==null&&ha(Mt)&&(Mt=null),zt!==null&&ha(zt)&&(zt=null),qr.forEach(_c),Jr.forEach(_c)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ws||(Ws=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,uv)))}function Zr(e){function t(i){return Ir(i,e)}if(0<Wi.length){Ir(Wi[0],e);for(var n=1;n<Wi.length;n++){var r=Wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&Ir(Dt,e),Mt!==null&&Ir(Mt,e),zt!==null&&Ir(zt,e),qr.forEach(t),Jr.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)fh(n),n.blockedOn===null&&xt.shift()}var Jn=yt.ReactCurrentBatchConfig,La=!0;function cv(e,t,n,r){var i=j,a=Jn.transition;Jn.transition=null;try{j=1,tu(e,t,n,r)}finally{j=i,Jn.transition=a}}function fv(e,t,n,r){var i=j,a=Jn.transition;Jn.transition=null;try{j=4,tu(e,t,n,r)}finally{j=i,Jn.transition=a}}function tu(e,t,n,r){if(La){var i=Vs(e,t,n,r);if(i===null)ts(e,t,r,Da,n),wc(e,r);else if(lv(i,e,t,n,r))r.stopPropagation();else if(wc(e,r),t&4&&-1<sv.indexOf(e)){for(;i!==null;){var a=Ii(i);if(a!==null&&sh(a),a=Vs(e,t,n,r),a===null&&ts(e,t,r,Da,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ts(e,t,r,null,n)}}var Da=null;function Vs(e,t,n,r){if(Da=null,e=ql(r),e=sn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Da=e,null}function dh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jg()){case Jl:return 1;case rh:return 4;case Aa:case Zg:return 16;case ih:return 536870912;default:return 16}default:return 16}}var At=null,nu=null,pa=null;function hh(){if(pa)return pa;var e,t=nu,n=t.length,r,i="value"in At?At.value:At.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return pa=i.slice(e,1<r?1-r:void 0)}function ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function kc(){return!1}function Oe(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Vi:kc,this.isPropagationStopped=kc,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=Oe(mr),Ei=X({},mr,{view:0,detail:0}),dv=Oe(Ei),Yo,Ko,Cr,go=X({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(Yo=e.screenX-Cr.screenX,Ko=e.screenY-Cr.screenY):Ko=Yo=0,Cr=e),Yo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),Sc=Oe(go),hv=X({},go,{dataTransfer:0}),pv=Oe(hv),mv=X({},Ei,{relatedTarget:0}),Go=Oe(mv),gv=X({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Oe(gv),yv=X({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wv=Oe(yv),_v=X({},mr,{data:0}),Ec=Oe(_v),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ev[e])?!!t[e]:!1}function iu(){return Iv}var Cv=X({},Ei,{key:function(e){if(e.key){var t=kv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xv=Oe(Cv),Tv=X({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ic=Oe(Tv),bv=X({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Pv=Oe(bv),Ov=X({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=Oe(Ov),Av=X({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=Oe(Av),Lv=[9,13,27,32],au=ct&&"CompositionEvent"in window,Ur=null;ct&&"documentMode"in document&&(Ur=document.documentMode);var Dv=ct&&"TextEvent"in window&&!Ur,ph=ct&&(!au||Ur&&8<Ur&&11>=Ur),Cc=String.fromCharCode(32),xc=!1;function mh(e,t){switch(e){case"keyup":return Lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function Mv(e,t){switch(e){case"compositionend":return gh(t);case"keypress":return t.which!==32?null:(xc=!0,Cc);case"textInput":return e=t.data,e===Cc&&xc?null:e;default:return null}}function zv(e,t){if(Dn)return e==="compositionend"||!au&&mh(e,t)?(e=hh(),pa=nu=At=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ph&&t.locale!=="ko"?null:t.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uv[e.type]:t==="textarea"}function vh(e,t,n,r){Gd(r),t=Ma(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,ei=null;function Fv(e){bh(e,0)}function vo(e){var t=Un(e);if($d(t))return e}function jv(e,t){if(e==="change")return t}var yh=!1;if(ct){var Qo;if(ct){var Xo="oninput"in document;if(!Xo){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),Xo=typeof bc.oninput=="function"}Qo=Xo}else Qo=!1;yh=Qo&&(!document.documentMode||9<document.documentMode)}function Pc(){Fr&&(Fr.detachEvent("onpropertychange",wh),ei=Fr=null)}function wh(e){if(e.propertyName==="value"&&vo(ei)){var t=[];vh(t,ei,e,ql(e)),Jd(Fv,t)}}function $v(e,t,n){e==="focusin"?(Pc(),Fr=t,ei=n,Fr.attachEvent("onpropertychange",wh)):e==="focusout"&&Pc()}function Bv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vo(ei)}function Hv(e,t){if(e==="click")return vo(t)}function Wv(e,t){if(e==="input"||e==="change")return vo(t)}function Vv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Vv;function ti(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ts.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nc(e,t){var n=Oc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oc(n)}}function _h(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_h(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kh(){for(var e=window,t=Pa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pa(e.document)}return t}function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yv(e){var t=kh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_h(n.ownerDocument.documentElement,n)){if(r!==null&&ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Nc(n,a);var o=Nc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kv=ct&&"documentMode"in document&&11>=document.documentMode,Mn=null,Ys=null,jr=null,Ks=!1;function Ac(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ks||Mn==null||Mn!==Pa(r)||(r=Mn,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&ti(jr,r)||(jr=r,r=Ma(Ys,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zn={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},qo={},Sh={};ct&&(Sh=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function yo(e){if(qo[e])return qo[e];if(!zn[e])return e;var t=zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sh)return qo[e]=t[n];return e}var Eh=yo("animationend"),Ih=yo("animationiteration"),Ch=yo("animationstart"),xh=yo("transitionend"),Th=new Map,Rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){Th.set(e,t),Tn(t,[e])}for(var Jo=0;Jo<Rc.length;Jo++){var Zo=Rc[Jo],Gv=Zo.toLowerCase(),Qv=Zo[0].toUpperCase()+Zo.slice(1);qt(Gv,"on"+Qv)}qt(Eh,"onAnimationEnd");qt(Ih,"onAnimationIteration");qt(Ch,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(xh,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Lc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gg(r,t,void 0,e),e.currentTarget=null}function bh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Lc(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Lc(i,s,u),a=l}}}if(Na)throw e=Bs,Na=!1,Bs=null,e}function H(e,t){var n=t[Js];n===void 0&&(n=t[Js]=new Set);var r=e+"__bubble";n.has(r)||(Ph(t,e,2,!1),n.add(r))}function es(e,t,n){var r=0;t&&(r|=4),Ph(n,e,r,t)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[Ki]){e[Ki]=!0,Md.forEach(function(n){n!=="selectionchange"&&(Xv.has(n)||es(n,!1,e),es(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ki]||(t[Ki]=!0,es("selectionchange",!1,t))}}function Ph(e,t,n,r){switch(dh(t)){case 1:var i=cv;break;case 4:i=fv;break;default:i=tu}n=i.bind(null,t,n,e),i=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ts(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=sn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Jd(function(){var u=a,c=ql(n),d=[];e:{var h=Th.get(e);if(h!==void 0){var g=ru,v=e;switch(e){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":g=xv;break;case"focusin":v="focus",g=Go;break;case"focusout":v="blur",g=Go;break;case"beforeblur":case"afterblur":g=Go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Pv;break;case Eh:case Ih:case Ch:g=vv;break;case xh:g=Nv;break;case"scroll":g=dv;break;case"wheel":g=Rv;break;case"copy":case"cut":case"paste":g=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ic}var w=(t&4)!==0,S=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Xr(f,p),y!=null&&w.push(ri(f,y,m)))),S)break;f=f.return}0<w.length&&(h=new g(h,v,null,n,c),d.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Fs&&(v=n.relatedTarget||n.fromElement)&&(sn(v)||v[ft]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?sn(v):null,v!==null&&(S=bn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Sc,y="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ic,y="onPointerLeave",p="onPointerEnter",f="pointer"),S=g==null?h:Un(g),m=v==null?h:Un(v),h=new w(y,f+"leave",g,n,c),h.target=S,h.relatedTarget=m,y=null,sn(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=m,w.relatedTarget=S,y=w),S=y,g&&v)t:{for(w=g,p=v,f=0,m=w;m;m=An(m))f++;for(m=0,y=p;y;y=An(y))m++;for(;0<f-m;)w=An(w),f--;for(;0<m-f;)p=An(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=An(w),p=An(p)}w=null}else w=null;g!==null&&Dc(d,h,g,w,!1),v!==null&&S!==null&&Dc(d,S,v,w,!0)}}e:{if(h=u?Un(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=jv;else if(Tc(h))if(yh)k=Wv;else{k=Bv;var E=$v}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Hv);if(k&&(k=k(e,u))){vh(d,k,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Ls(h,"number",h.value)}switch(E=u?Un(u):window,e){case"focusin":(Tc(E)||E.contentEditable==="true")&&(Mn=E,Ys=u,jr=null);break;case"focusout":jr=Ys=Mn=null;break;case"mousedown":Ks=!0;break;case"contextmenu":case"mouseup":case"dragend":Ks=!1,Ac(d,n,c);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":Ac(d,n,c)}var I;if(au)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Dn?mh(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ph&&n.locale!=="ko"&&(Dn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Dn&&(I=hh()):(At=c,nu="value"in At?At.value:At.textContent,Dn=!0)),E=Ma(u,P),0<E.length&&(P=new Ec(P,e,null,n,c),d.push({event:P,listeners:E}),I?P.data=I:(I=gh(n),I!==null&&(P.data=I)))),(I=Dv?Mv(e,n):zv(e,n))&&(u=Ma(u,"onBeforeInput"),0<u.length&&(c=new Ec("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}bh(d,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ma(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Xr(e,n),a!=null&&r.unshift(ri(e,a,i)),a=Xr(e,t),a!=null&&r.push(ri(e,a,i))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dc(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Xr(n,a),l!=null&&o.unshift(ri(n,l,s))):i||(l=Xr(n,a),l!=null&&o.push(ri(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function Mc(e){return(typeof e=="string"?e:""+e).replace(qv,`
`).replace(Jv,"")}function Gi(e,t,n){if(t=Mc(t),Mc(e)!==t&&n)throw Error(_(425))}function za(){}var Gs=null,Qs=null;function Xs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qs=typeof setTimeout=="function"?setTimeout:void 0,Zv=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(ty)}:qs;function ty(e){setTimeout(function(){throw e})}function ns(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),qe="__reactFiber$"+gr,ii="__reactProps$"+gr,ft="__reactContainer$"+gr,Js="__reactEvents$"+gr,ny="__reactListeners$"+gr,ry="__reactHandles$"+gr;function sn(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uc(e);e!==null;){if(n=e[qe])return n;e=Uc(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[qe]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function wo(e){return e[ii]||null}var Zs=[],Fn=-1;function Jt(e){return{current:e}}function V(e){0>Fn||(e.current=Zs[Fn],Zs[Fn]=null,Fn--)}function B(e,t){Fn++,Zs[Fn]=e.current,e.current=t}var Kt={},pe=Jt(Kt),Se=Jt(!1),vn=Kt;function or(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Ua(){V(Se),V(pe)}function Fc(e,t,n){if(pe.current!==Kt)throw Error(_(168));B(pe,t),B(Se,n)}function Oh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,$g(e)||"Unknown",i));return X({},n,r)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,vn=pe.current,B(pe,e),B(Se,Se.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Oh(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,V(Se),V(pe),B(pe,e)):V(Se),B(Se,n)}var it=null,_o=!1,rs=!1;function Nh(e){it===null?it=[e]:it.push(e)}function iy(e){_o=!0,Nh(e)}function Zt(){if(!rs&&it!==null){rs=!0;var e=0,t=j;try{var n=it;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,_o=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),nh(Jl,Zt),i}finally{j=t,rs=!1}}return null}var jn=[],$n=0,ja=null,$a=0,Ae=[],Re=0,yn=null,at=1,ot="";function rn(e,t){jn[$n++]=$a,jn[$n++]=ja,ja=e,$a=t}function Ah(e,t,n){Ae[Re++]=at,Ae[Re++]=ot,Ae[Re++]=yn,yn=e;var r=at;e=ot;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,at=1<<32-Ve(t)+i|n<<i|r,ot=a+e}else at=1<<a|n<<i|r,ot=e}function su(e){e.return!==null&&(rn(e,1),Ah(e,1,0))}function lu(e){for(;e===ja;)ja=jn[--$n],jn[$n]=null,$a=jn[--$n],jn[$n]=null;for(;e===yn;)yn=Ae[--Re],Ae[Re]=null,ot=Ae[--Re],Ae[Re]=null,at=Ae[--Re],Ae[Re]=null}var Te=null,xe=null,K=!1,Be=null;function Rh(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,xe=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:at,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,xe=null,!0):!1;default:return!1}}function el(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tl(e){if(K){var t=xe;if(t){var n=t;if(!$c(e,t)){if(el(e))throw Error(_(418));t=Ut(n.nextSibling);var r=Te;t&&$c(e,t)?Rh(r,n):(e.flags=e.flags&-4097|2,K=!1,Te=e)}}else{if(el(e))throw Error(_(418));e.flags=e.flags&-4097|2,K=!1,Te=e}}}function Bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Qi(e){if(e!==Te)return!1;if(!K)return Bc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xs(e.type,e.memoizedProps)),t&&(t=xe)){if(el(e))throw Lh(),Error(_(418));for(;t;)Rh(e,t),t=Ut(t.nextSibling)}if(Bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=Te?Ut(e.stateNode.nextSibling):null;return!0}function Lh(){for(var e=xe;e;)e=Ut(e.nextSibling)}function sr(){xe=Te=null,K=!1}function uu(e){Be===null?Be=[e]:Be.push(e)}var ay=yt.ReactCurrentBatchConfig;function je(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ba=Jt(null),Ha=null,Bn=null,cu=null;function fu(){cu=Bn=Ha=null}function du(e){var t=Ba.current;V(Ba),e._currentValue=t}function nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){Ha=e,cu=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(Ha===null)throw Error(_(308));Bn=e,Ha.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var ln=null;function hu(e){ln===null?ln=[e]:ln.push(e)}function Dh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hu(t)):(n.next=i.next,i.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dt(e,n)}return i=r.interleaved,i===null?(t.next=t,hu(r)):(t.next=i.next,i.next=t),r.interleaved=t,dt(e,n)}function ga(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}function Hc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wa(e,t,n,r){var i=e.updateQueue;Ct=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,g=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(h=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=X({},d,h);break e;case 2:Ct=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);_n|=o,e.lanes=o,e.memoizedState=d}}function Wc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var zh=new Dd.Component().refs;function rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=$t(e),a=ut(r,i);a.payload=t,n!=null&&(a.callback=n),t=Ft(e,a,i),t!==null&&(Ye(t,e,i,r),ga(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=$t(e),a=ut(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ft(e,a,i),t!==null&&(Ye(t,e,i,r),ga(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=$t(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(Ye(t,e,r,n),ga(t,e,r))}};function Vc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ti(n,r)||!ti(i,a):!0}function Uh(e,t,n){var r=!1,i=Kt,a=t.contextType;return typeof a=="object"&&a!==null?a=Me(a):(i=Ee(t)?vn:pe.current,r=t.contextTypes,a=(r=r!=null)?or(e,i):Kt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Yc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function il(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=zh,pu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Me(a):(a=Ee(t)?vn:pe.current,i.context=or(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(rl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ko.enqueueReplaceState(i,i.state,null),Wa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===zh&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Xi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kc(e){var t=e._init;return t(e._payload)}function Fh(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Bt(p,f),p.index=0,p.sibling=null,p}function a(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,f,m,y){return f===null||f.tag!==6?(f=cs(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,y){var k=m.type;return k===Ln?c(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&Kc(k)===f.type)?(y=i(f,m.props),y.ref=xr(p,f,m),y.return=p,y):(y=Sa(m.type,m.key,m.props,null,p.mode,y),y.ref=xr(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=fs(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,y,k){return f===null||f.tag!==7?(f=pn(m,p.mode,y,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=cs(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fi:return m=Sa(f.type,f.key,f.props,null,p.mode,m),m.ref=xr(p,null,f),m.return=p,m;case Rn:return f=fs(f,p.mode,m),f.return=p,f;case It:var y=f._init;return d(p,y(f._payload),m)}if(Or(f)||kr(f))return f=pn(f,p.mode,m,null),f.return=p,f;Xi(p,f)}return null}function h(p,f,m,y){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Fi:return m.key===k?l(p,f,m,y):null;case Rn:return m.key===k?u(p,f,m,y):null;case It:return k=m._init,h(p,f,k(m._payload),y)}if(Or(m)||kr(m))return k!==null?null:c(p,f,m,y,null);Xi(p,m)}return null}function g(p,f,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,s(f,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fi:return p=p.get(y.key===null?m:y.key)||null,l(f,p,y,k);case Rn:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,k);case It:var E=y._init;return g(p,f,m,E(y._payload),k)}if(Or(y)||kr(y))return p=p.get(m)||null,c(f,p,y,k,null);Xi(f,y)}return null}function v(p,f,m,y){for(var k=null,E=null,I=f,P=f=0,z=null;I!==null&&P<m.length;P++){I.index>P?(z=I,I=null):z=I.sibling;var R=h(p,I,m[P],y);if(R===null){I===null&&(I=z);break}e&&I&&R.alternate===null&&t(p,I),f=a(R,f,P),E===null?k=R:E.sibling=R,E=R,I=z}if(P===m.length)return n(p,I),K&&rn(p,P),k;if(I===null){for(;P<m.length;P++)I=d(p,m[P],y),I!==null&&(f=a(I,f,P),E===null?k=I:E.sibling=I,E=I);return K&&rn(p,P),k}for(I=r(p,I);P<m.length;P++)z=g(I,p,P,m[P],y),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?P:z.key),f=a(z,f,P),E===null?k=z:E.sibling=z,E=z);return e&&I.forEach(function(Ue){return t(p,Ue)}),K&&rn(p,P),k}function w(p,f,m,y){var k=kr(m);if(typeof k!="function")throw Error(_(150));if(m=k.call(m),m==null)throw Error(_(151));for(var E=k=null,I=f,P=f=0,z=null,R=m.next();I!==null&&!R.done;P++,R=m.next()){I.index>P?(z=I,I=null):z=I.sibling;var Ue=h(p,I,R.value,y);if(Ue===null){I===null&&(I=z);break}e&&I&&Ue.alternate===null&&t(p,I),f=a(Ue,f,P),E===null?k=Ue:E.sibling=Ue,E=Ue,I=z}if(R.done)return n(p,I),K&&rn(p,P),k;if(I===null){for(;!R.done;P++,R=m.next())R=d(p,R.value,y),R!==null&&(f=a(R,f,P),E===null?k=R:E.sibling=R,E=R);return K&&rn(p,P),k}for(I=r(p,I);!R.done;P++,R=m.next())R=g(I,p,P,R.value,y),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?P:R.key),f=a(R,f,P),E===null?k=R:E.sibling=R,E=R);return e&&I.forEach(function(wr){return t(p,wr)}),K&&rn(p,P),k}function S(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Ln&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Fi:e:{for(var k=m.key,E=f;E!==null;){if(E.key===k){if(k=m.type,k===Ln){if(E.tag===7){n(p,E.sibling),f=i(E,m.props.children),f.return=p,p=f;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===It&&Kc(k)===E.type){n(p,E.sibling),f=i(E,m.props),f.ref=xr(p,E,m),f.return=p,p=f;break e}n(p,E);break}else t(p,E);E=E.sibling}m.type===Ln?(f=pn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=Sa(m.type,m.key,m.props,null,p.mode,y),y.ref=xr(p,f,m),y.return=p,p=y)}return o(p);case Rn:e:{for(E=m.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=fs(m,p.mode,y),f.return=p,p=f}return o(p);case It:return E=m._init,S(p,f,E(m._payload),y)}if(Or(m))return v(p,f,m,y);if(kr(m))return w(p,f,m,y);Xi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=cs(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return S}var lr=Fh(!0),jh=Fh(!1),Ci={},et=Jt(Ci),ai=Jt(Ci),oi=Jt(Ci);function un(e){if(e===Ci)throw Error(_(174));return e}function mu(e,t){switch(B(oi,t),B(ai,e),B(et,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ms(t,e)}V(et),B(et,t)}function ur(){V(et),V(ai),V(oi)}function $h(e){un(oi.current);var t=un(et.current),n=Ms(t,e.type);t!==n&&(B(ai,e),B(et,n))}function gu(e){ai.current===e&&(V(et),V(ai))}var G=Jt(0);function Va(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var is=[];function vu(){for(var e=0;e<is.length;e++)is[e]._workInProgressVersionPrimary=null;is.length=0}var va=yt.ReactCurrentDispatcher,as=yt.ReactCurrentBatchConfig,wn=0,Q=null,ne=null,oe=null,Ya=!1,$r=!1,si=0,oy=0;function fe(){throw Error(_(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function wu(e,t,n,r,i,a){if(wn=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,va.current=e===null||e.memoizedState===null?cy:fy,e=n(r,i),$r){a=0;do{if($r=!1,si=0,25<=a)throw Error(_(301));a+=1,oe=ne=null,t.updateQueue=null,va.current=dy,e=n(r,i)}while($r)}if(va.current=Ka,t=ne!==null&&ne.next!==null,wn=0,oe=ne=Q=null,Ya=!1,t)throw Error(_(300));return e}function _u(){var e=si!==0;return si=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Q.memoizedState=oe=e:oe=oe.next=e,oe}function ze(){if(ne===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?Q.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(_(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?Q.memoizedState=oe=e:oe=oe.next=e}return oe}function li(e,t){return typeof t=="function"?t(e):t}function os(e){var t=ze(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((wn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,Q.lanes|=c,_n|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Ke(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Q.lanes|=a,_n|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ss(e){var t=ze(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ke(a,t.memoizedState)||(ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Bh(){}function Hh(e,t){var n=Q,r=ze(),i=t(),a=!Ke(r.memoizedState,i);if(a&&(r.memoizedState=i,ke=!0),r=r.queue,ku(Yh.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,ui(9,Vh.bind(null,n,r,i,t),void 0,null),se===null)throw Error(_(349));wn&30||Wh(n,t,i)}return i}function Wh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vh(e,t,n,r){t.value=n,t.getSnapshot=r,Kh(t)&&Gh(e)}function Yh(e,t,n){return n(function(){Kh(t)&&Gh(e)})}function Kh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Gh(e){var t=dt(e,1);t!==null&&Ye(t,e,1,-1)}function Gc(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:e},t.queue=e,e=e.dispatch=uy.bind(null,Q,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qh(){return ze().memoizedState}function ya(e,t,n,r){var i=Xe();Q.flags|=e,i.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function So(e,t,n,r){var i=ze();r=r===void 0?null:r;var a=void 0;if(ne!==null){var o=ne.memoizedState;if(a=o.destroy,r!==null&&yu(r,o.deps)){i.memoizedState=ui(t,n,a,r);return}}Q.flags|=e,i.memoizedState=ui(1|t,n,a,r)}function Qc(e,t){return ya(8390656,8,e,t)}function ku(e,t){return So(2048,8,e,t)}function Xh(e,t){return So(4,2,e,t)}function qh(e,t){return So(4,4,e,t)}function Jh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zh(e,t,n){return n=n!=null?n.concat([e]):null,So(4,4,Jh.bind(null,t,e),n)}function Su(){}function ep(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tp(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function np(e,t,n){return wn&21?(Ke(n,t)||(n=ah(),Q.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function sy(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=as.transition;as.transition={};try{e(!1),t()}finally{j=n,as.transition=r}}function rp(){return ze().memoizedState}function ly(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ip(e))ap(t,n);else if(n=Dh(e,t,n,r),n!==null){var i=ve();Ye(n,e,r,i),op(n,t,r)}}function uy(e,t,n){var r=$t(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ip(e))ap(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ke(s,o)){var l=t.interleaved;l===null?(i.next=i,hu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Dh(e,t,i,r),n!==null&&(i=ve(),Ye(n,e,r,i),op(n,t,r))}}function ip(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function ap(e,t){$r=Ya=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function op(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}var Ka={readContext:Me,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},cy={readContext:Me,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Qc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ya(4194308,4,Jh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return ya(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ly.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Gc,useDebugValue:Su,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Gc(!1),t=e[0];return e=sy.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Xe();if(K){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),se===null)throw Error(_(349));wn&30||Wh(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Qc(Yh.bind(null,r,a,e),[e]),r.flags|=2048,ui(9,Vh.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Xe(),t=se.identifierPrefix;if(K){var n=ot,r=at;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=oy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fy={readContext:Me,useCallback:ep,useContext:Me,useEffect:ku,useImperativeHandle:Zh,useInsertionEffect:Xh,useLayoutEffect:qh,useMemo:tp,useReducer:os,useRef:Qh,useState:function(){return os(li)},useDebugValue:Su,useDeferredValue:function(e){var t=ze();return np(t,ne.memoizedState,e)},useTransition:function(){var e=os(li)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:Hh,useId:rp,unstable_isNewReconciler:!1},dy={readContext:Me,useCallback:ep,useContext:Me,useEffect:ku,useImperativeHandle:Zh,useInsertionEffect:Xh,useLayoutEffect:qh,useMemo:tp,useReducer:ss,useRef:Qh,useState:function(){return ss(li)},useDebugValue:Su,useDeferredValue:function(e){var t=ze();return ne===null?t.memoizedState=e:np(t,ne.memoizedState,e)},useTransition:function(){var e=ss(li)[0],t=ze().memoizedState;return[e,t]},useMutableSource:Bh,useSyncExternalStore:Hh,useId:rp,unstable_isNewReconciler:!1};function cr(e,t){try{var n="",r=t;do n+=jg(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ls(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function sp(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qa||(Qa=!0,ml=r),al(e,t)},n}function lp(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){al(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){al(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ty.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var py=yt.ReactCurrentOwner,ke=!1;function ge(e,t,n,r){t.child=e===null?jh(t,null,n,r):lr(t,e.child,n,r)}function Zc(e,t,n,r,i){n=n.render;var a=t.ref;return Zn(t,i),r=wu(e,t,n,r,a,i),n=_u(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(K&&n&&su(t),t.flags|=1,ge(e,t,r,i),t.child)}function ef(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Ou(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,up(e,t,a,r,i)):(e=Sa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ti,n(o,r)&&e.ref===t.ref)return ht(e,t,i)}return t.flags|=1,e=Bt(a,r),e.ref=t.ref,e.return=t,t.child=e}function up(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ti(a,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,ht(e,t,i)}return ol(e,t,n,r,i)}function cp(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Wn,Ce),Ce|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Wn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,B(Wn,Ce),Ce|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(Wn,Ce),Ce|=r;return ge(e,t,i,n),t.child}function fp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ol(e,t,n,r,i){var a=Ee(n)?vn:pe.current;return a=or(t,a),Zn(t,i),n=wu(e,t,n,r,a,i),r=_u(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ht(e,t,i)):(K&&r&&su(t),t.flags|=1,ge(e,t,n,i),t.child)}function tf(e,t,n,r,i){if(Ee(n)){var a=!0;Fa(t)}else a=!1;if(Zn(t,i),t.stateNode===null)wa(e,t),Uh(t,n,r),il(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=Ee(n)?vn:pe.current,u=or(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Yc(t,o,r,u),Ct=!1;var h=t.memoizedState;o.state=h,Wa(t,r,o,i),l=t.memoizedState,s!==r||h!==l||Se.current||Ct?(typeof c=="function"&&(rl(t,n,c,r),l=t.memoizedState),(s=Ct||Vc(t,n,s,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Mh(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:je(t.type,s),o.props=u,d=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Me(l):(l=Ee(n)?vn:pe.current,l=or(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||h!==l)&&Yc(t,o,r,l),Ct=!1,h=t.memoizedState,o.state=h,Wa(t,r,o,i);var v=t.memoizedState;s!==d||h!==v||Se.current||Ct?(typeof g=="function"&&(rl(t,n,g,r),v=t.memoizedState),(u=Ct||Vc(t,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return sl(e,t,n,r,a,i)}function sl(e,t,n,r,i,a){fp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&jc(t,n,!1),ht(e,t,a);r=t.stateNode,py.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=lr(t,e.child,null,a),t.child=lr(t,null,s,a)):ge(e,t,s,a),t.memoizedState=r.state,i&&jc(t,n,!0),t.child}function dp(e){var t=e.stateNode;t.pendingContext?Fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fc(e,t.context,!1),mu(e,t.containerInfo)}function nf(e,t,n,r,i){return sr(),uu(i),t.flags|=256,ge(e,t,n,r),t.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function hp(e,t,n){var r=t.pendingProps,i=G.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(G,i&1),e===null)return tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Co(o,r,0,null),e=pn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ul(n),t.memoizedState=ll,e):Eu(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return my(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Bt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Bt(s,a):(a=pn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ul(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=ll,r}return a=e.child,e=a.sibling,r=Bt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eu(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qi(e,t,n,r){return r!==null&&uu(r),lr(t,e.child,null,n),e=Eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function my(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=ls(Error(_(422))),qi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Co({mode:"visible",children:r.children},i,0,null),a=pn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&lr(t,e.child,null,o),t.child.memoizedState=ul(o),t.memoizedState=ll,a);if(!(t.mode&1))return qi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(_(419)),r=ls(a,r,void 0),qi(e,t,o,r)}if(s=(o&e.childLanes)!==0,ke||s){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,dt(e,i),Ye(r,e,i,-1))}return Pu(),r=ls(Error(_(421))),qi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=by.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,xe=Ut(i.nextSibling),Te=t,K=!0,Be=null,e!==null&&(Ae[Re++]=at,Ae[Re++]=ot,Ae[Re++]=yn,at=e.id,ot=e.overflow,yn=t),t=Eu(t,r.children),t.flags|=4096,t)}function rf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nl(e.return,t,n)}function us(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function pp(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ge(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rf(e,n,t);else if(e.tag===19)rf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Va(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),us(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Va(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}us(t,!0,n,null,a);break;case"together":us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gy(e,t,n){switch(t.tag){case 3:dp(t),sr();break;case 5:$h(t);break;case 1:Ee(t.type)&&Fa(t);break;case 4:mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Ba,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?hp(e,t,n):(B(G,G.current&1),e=ht(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,cp(e,t,n)}return ht(e,t,n)}var mp,cl,gp,vp;mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cl=function(){};gp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(et.current);var a=null;switch(n){case"input":i=As(e,i),r=As(e,r),a=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),a=[];break;case"textarea":i=Ds(e,i),r=Ds(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=za)}zs(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};vp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vy(e,t,n){var r=t.pendingProps;switch(lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ee(t.type)&&Ua(),de(t),null;case 3:return r=t.stateNode,ur(),V(Se),V(pe),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(yl(Be),Be=null))),cl(e,t),de(t),null;case 5:gu(t);var i=un(oi.current);if(n=t.type,e!==null&&t.stateNode!=null)gp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return de(t),null}if(e=un(et.current),Qi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[qe]=t,r[ii]=a,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Ar.length;i++)H(Ar[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":dc(r,a),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},H("invalid",r);break;case"textarea":pc(r,a),H("invalid",r)}zs(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Gi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Gi(r.textContent,s,e),i=["children",""+s]):Gr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":ji(r),hc(r,a,!0);break;case"textarea":ji(r),mc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=za)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qe]=t,e[ii]=r,mp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Us(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ar.length;i++)H(Ar[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":dc(e,r),i=As(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":pc(e,r),i=Ds(e,r),H("invalid",e);break;default:i=r}zs(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Kd(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vd(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qr(e,l):typeof l=="number"&&Qr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Gr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&H("scroll",e):l!=null&&Kl(e,a,l,o))}switch(n){case"input":ji(e),hc(e,r,!1);break;case"textarea":ji(e),mc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Qn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)vp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=un(oi.current),un(et.current),Qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(a=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Gi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gi(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return de(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&xe!==null&&t.mode&1&&!(t.flags&128))Lh(),sr(),t.flags|=98560,a=!1;else if(a=Qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[qe]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),a=!1}else Be!==null&&(yl(Be),Be=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?re===0&&(re=3):Pu())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return ur(),cl(e,t),e===null&&ni(t.stateNode.containerInfo),de(t),null;case 10:return du(t.type._context),de(t),null;case 17:return Ee(t.type)&&Ua(),de(t),null;case 19:if(V(G),a=t.memoizedState,a===null)return de(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Tr(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Va(e),o!==null){for(t.flags|=128,Tr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}a.tail!==null&&ee()>fr&&(t.flags|=128,r=!0,Tr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Va(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!K)return de(t),null}else 2*ee()-a.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,r=!0,Tr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ee(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function yy(e,t){switch(lu(t),t.tag){case 1:return Ee(t.type)&&Ua(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),V(Se),V(pe),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return ur(),null;case 10:return du(t.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var Ji=!1,he=!1,wy=typeof WeakSet=="function"?WeakSet:Set,x=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function fl(e,t,n){try{n()}catch(r){q(e,t,r)}}var af=!1;function _y(e,t){if(Gs=La,e=kh(),ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===e)break t;if(h===n&&++u===i&&(s=o),h===a&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qs={focusedElem:e,selectionRange:n},La=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:je(t.type,w),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){q(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return v=af,af=!1,v}function Br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&fl(t,n,a)}i=i.next}while(i!==r)}}function Eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yp(e){var t=e.alternate;t!==null&&(e.alternate=null,yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[ii],delete t[Js],delete t[ny],delete t[ry])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wp(e){return e.tag===5||e.tag===3||e.tag===4}function of(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=za));else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}function pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}var le=null,$e=!1;function kt(e,t,n){for(n=n.child;n!==null;)_p(e,t,n),n=n.sibling}function _p(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(mo,n)}catch{}switch(n.tag){case 5:he||Hn(n,t);case 6:var r=le,i=$e;le=null,kt(e,t,n),le=r,$e=i,le!==null&&($e?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&($e?(e=le,n=n.stateNode,e.nodeType===8?ns(e.parentNode,n):e.nodeType===1&&ns(e,n),Zr(e)):ns(le,n.stateNode));break;case 4:r=le,i=$e,le=n.stateNode.containerInfo,$e=!0,kt(e,t,n),le=r,$e=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&fl(n,t,o),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!he&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,kt(e,t,n),he=r):kt(e,t,n);break;default:kt(e,t,n)}}function sf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wy),t.forEach(function(r){var i=Py.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,$e=!1;break e;case 3:le=s.stateNode.containerInfo,$e=!0;break e;case 4:le=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(le===null)throw Error(_(160));_p(a,o,i),le=null,$e=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kp(t,e),t=t.sibling}function kp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Qe(e),r&4){try{Br(3,e,e.return),Eo(3,e)}catch(w){q(e,e.return,w)}try{Br(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Fe(t,e),Qe(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(Fe(t,e),Qe(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var i=e.stateNode;try{Qr(i,"")}catch(w){q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Bd(i,a),Us(s,o);var u=Us(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Kd(i,d):c==="dangerouslySetInnerHTML"?Vd(i,d):c==="children"?Qr(i,d):Kl(i,c,d,u)}switch(s){case"input":Rs(i,a);break;case"textarea":Hd(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Qn(i,!!a.multiple,g,!1):h!==!!a.multiple&&(a.defaultValue!=null?Qn(i,!!a.multiple,a.defaultValue,!0):Qn(i,!!a.multiple,a.multiple?[]:"",!1))}i[ii]=a}catch(w){q(e,e.return,w)}}break;case 6:if(Fe(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){q(e,e.return,w)}}break;case 3:if(Fe(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zr(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Fe(t,e),Qe(e);break;case 13:Fe(t,e),Qe(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(xu=ee())),r&4&&sf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||c,Fe(t,e),he=u):Fe(t,e),Qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(x=e,c=e.child;c!==null;){for(d=x=c;x!==null;){switch(h=x,g=h.child,h.tag){case 0:case 11:case 14:case 15:Br(4,h,h.return);break;case 1:Hn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:Hn(h,h.return);break;case 22:if(h.memoizedState!==null){uf(d);continue}}g!==null?(g.return=h,x=g):uf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Yd("display",o))}catch(w){q(e,e.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){q(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fe(t,e),Qe(e),r&4&&sf(e);break;case 21:break;default:Fe(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qr(i,""),r.flags&=-33);var a=of(e);pl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=of(e);hl(e,s,o);break;default:throw Error(_(161))}}catch(l){q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ky(e,t,n){x=e,Sp(e)}function Sp(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var i=x,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ji;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||he;s=Ji;var u=he;if(Ji=o,(he=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?cf(i):l!==null?(l.return=o,x=l):cf(i);for(;a!==null;)x=a,Sp(a),a=a.sibling;x=i,Ji=s,he=u}lf(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,x=a):lf(e)}}function lf(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Eo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Wc(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wc(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Zr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}he||t.flags&512&&dl(t)}catch(h){q(t,t.return,h)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function uf(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function cf(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Eo(4,t)}catch(l){q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){q(t,i,l)}}var a=t.return;try{dl(t)}catch(l){q(t,a,l)}break;case 5:var o=t.return;try{dl(t)}catch(l){q(t,o,l)}}}catch(l){q(t,t.return,l)}if(t===e){x=null;break}var s=t.sibling;if(s!==null){s.return=t.return,x=s;break}x=t.return}}var Sy=Math.ceil,Ga=yt.ReactCurrentDispatcher,Iu=yt.ReactCurrentOwner,De=yt.ReactCurrentBatchConfig,U=0,se=null,te=null,ue=0,Ce=0,Wn=Jt(0),re=0,ci=null,_n=0,Io=0,Cu=0,Hr=null,_e=null,xu=0,fr=1/0,rt=null,Qa=!1,ml=null,jt=null,Zi=!1,Rt=null,Xa=0,Wr=0,gl=null,_a=-1,ka=0;function ve(){return U&6?ee():_a!==-1?_a:_a=ee()}function $t(e){return e.mode&1?U&2&&ue!==0?ue&-ue:ay.transition!==null?(ka===0&&(ka=ah()),ka):(e=j,e!==0||(e=window.event,e=e===void 0?16:dh(e.type)),e):1}function Ye(e,t,n,r){if(50<Wr)throw Wr=0,gl=null,Error(_(185));Si(e,n,r),(!(U&2)||e!==se)&&(e===se&&(!(U&2)&&(Io|=n),re===4&&Tt(e,ue)),Ie(e,r),n===1&&U===0&&!(t.mode&1)&&(fr=ee()+500,_o&&Zt()))}function Ie(e,t){var n=e.callbackNode;av(e,t);var r=Ra(e,e===se?ue:0);if(r===0)n!==null&&yc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yc(n),t===1)e.tag===0?iy(ff.bind(null,e)):Nh(ff.bind(null,e)),ey(function(){!(U&6)&&Zt()}),n=null;else{switch(oh(r)){case 1:n=Jl;break;case 4:n=rh;break;case 16:n=Aa;break;case 536870912:n=ih;break;default:n=Aa}n=Op(n,Ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ep(e,t){if(_a=-1,ka=0,U&6)throw Error(_(327));var n=e.callbackNode;if(er()&&e.callbackNode!==n)return null;var r=Ra(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qa(e,r);else{t=r;var i=U;U|=2;var a=Cp();(se!==e||ue!==t)&&(rt=null,fr=ee()+500,hn(e,t));do try{Cy();break}catch(s){Ip(e,s)}while(1);fu(),Ga.current=a,U=i,te!==null?t=0:(se=null,ue=0,t=re)}if(t!==0){if(t===2&&(i=Hs(e),i!==0&&(r=i,t=vl(e,i))),t===1)throw n=ci,hn(e,0),Tt(e,r),Ie(e,ee()),n;if(t===6)Tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ey(i)&&(t=qa(e,r),t===2&&(a=Hs(e),a!==0&&(r=a,t=vl(e,a))),t===1))throw n=ci,hn(e,0),Tt(e,r),Ie(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:an(e,_e,rt);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=xu+500-ee(),10<t)){if(Ra(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qs(an.bind(null,e,_e,rt),t);break}an(e,_e,rt);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ve(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sy(r/1960))-r,10<r){e.timeoutHandle=qs(an.bind(null,e,_e,rt),r);break}an(e,_e,rt);break;case 5:an(e,_e,rt);break;default:throw Error(_(329))}}}return Ie(e,ee()),e.callbackNode===n?Ep.bind(null,e):null}function vl(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=qa(e,t),e!==2&&(t=_e,_e=n,t!==null&&yl(t)),e}function yl(e){_e===null?_e=e:_e.push.apply(_e,e)}function Ey(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ke(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Cu,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function ff(e){if(U&6)throw Error(_(327));er();var t=Ra(e,0);if(!(t&1))return Ie(e,ee()),null;var n=qa(e,t);if(e.tag!==0&&n===2){var r=Hs(e);r!==0&&(t=r,n=vl(e,r))}if(n===1)throw n=ci,hn(e,0),Tt(e,t),Ie(e,ee()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,_e,rt),Ie(e,ee()),null}function Tu(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(fr=ee()+500,_o&&Zt())}}function kn(e){Rt!==null&&Rt.tag===0&&!(U&6)&&er();var t=U;U|=1;var n=De.transition,r=j;try{if(De.transition=null,j=1,e)return e()}finally{j=r,De.transition=n,U=t,!(U&6)&&Zt()}}function bu(){Ce=Wn.current,V(Wn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zv(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ua();break;case 3:ur(),V(Se),V(pe),vu();break;case 5:gu(r);break;case 4:ur();break;case 13:V(G);break;case 19:V(G);break;case 10:du(r.type._context);break;case 22:case 23:bu()}n=n.return}if(se=e,te=e=Bt(e.current,null),ue=Ce=t,re=0,ci=null,Cu=Io=_n=0,_e=Hr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}ln=null}return e}function Ip(e,t){do{var n=te;try{if(fu(),va.current=Ka,Ya){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ya=!1}if(wn=0,oe=ne=Q=null,$r=!1,si=0,Iu.current=null,n===null||n.return===null){re=1,ci=t,te=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=ue,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=qc(o);if(g!==null){g.flags&=-257,Jc(g,o,s,a,t),g.mode&1&&Xc(a,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){Xc(a,u,t),Pu();break e}l=Error(_(426))}}else if(K&&s.mode&1){var S=qc(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Jc(S,o,s,a,t),uu(cr(l,s));break e}}a=l=cr(l,s),re!==4&&(re=2),Hr===null?Hr=[a]:Hr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=sp(a,l,t);Hc(a,p);break e;case 1:s=l;var f=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(jt===null||!jt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=lp(a,s,t);Hc(a,y);break e}}a=a.return}while(a!==null)}Tp(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Cp(){var e=Ga.current;return Ga.current=Ka,e===null?Ka:e}function Pu(){(re===0||re===3||re===2)&&(re=4),se===null||!(_n&268435455)&&!(Io&268435455)||Tt(se,ue)}function qa(e,t){var n=U;U|=2;var r=Cp();(se!==e||ue!==t)&&(rt=null,hn(e,t));do try{Iy();break}catch(i){Ip(e,i)}while(1);if(fu(),U=n,Ga.current=r,te!==null)throw Error(_(261));return se=null,ue=0,re}function Iy(){for(;te!==null;)xp(te)}function Cy(){for(;te!==null&&!Xg();)xp(te)}function xp(e){var t=Pp(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Tp(e):te=t,Iu.current=null}function Tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yy(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=vy(n,t,Ce),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function an(e,t,n){var r=j,i=De.transition;try{De.transition=null,j=1,xy(e,t,n,r)}finally{De.transition=i,j=r}return null}function xy(e,t,n,r){do er();while(Rt!==null);if(U&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(ov(e,a),e===se&&(te=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,Op(Aa,function(){return er(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=De.transition,De.transition=null;var o=j;j=1;var s=U;U|=4,Iu.current=null,_y(e,n),kp(n,e),Yv(Qs),La=!!Gs,Qs=Gs=null,e.current=n,ky(n),qg(),U=s,j=o,De.transition=a}else e.current=n;if(Zi&&(Zi=!1,Rt=e,Xa=i),a=e.pendingLanes,a===0&&(jt=null),ev(n.stateNode),Ie(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qa)throw Qa=!1,e=ml,ml=null,e;return Xa&1&&e.tag!==0&&er(),a=e.pendingLanes,a&1?e===gl?Wr++:(Wr=0,gl=e):Wr=0,Zt(),null}function er(){if(Rt!==null){var e=oh(Xa),t=De.transition,n=j;try{if(De.transition=null,j=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,Xa=0,U&6)throw Error(_(331));var i=U;for(U|=4,x=e.current;x!==null;){var a=x,o=a.child;if(x.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:Br(8,c,a)}var d=c.child;if(d!==null)d.return=c,x=d;else for(;x!==null;){c=x;var h=c.sibling,g=c.return;if(yp(c),c===u){x=null;break}if(h!==null){h.return=g,x=h;break}x=g}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}x=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,x=o;else e:for(;x!==null;){if(a=x,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Br(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,x=p;break e}x=a.return}}var f=e.current;for(x=f;x!==null;){o=x;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,x=m;else e:for(o=f;x!==null;){if(s=x,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Eo(9,s)}}catch(k){q(s,s.return,k)}if(s===o){x=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,x=y;break e}x=s.return}}if(U=i,Zt(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(mo,e)}catch{}r=!0}return r}finally{j=n,De.transition=t}}return!1}function df(e,t,n){t=cr(n,t),t=sp(e,t,1),e=Ft(e,t,1),t=ve(),e!==null&&(Si(e,1,t),Ie(e,t))}function q(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=cr(n,e),e=lp(t,e,1),t=Ft(t,e,1),e=ve(),t!==null&&(Si(t,1,e),Ie(t,e));break}}t=t.return}}function Ty(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>ee()-xu?hn(e,0):Cu|=n),Ie(e,t)}function bp(e,t){t===0&&(e.mode&1?(t=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):t=1);var n=ve();e=dt(e,t),e!==null&&(Si(e,t,n),Ie(e,n))}function by(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bp(e,n)}function Py(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),bp(e,n)}var Pp;Pp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,gy(e,t,n);ke=!!(e.flags&131072)}else ke=!1,K&&t.flags&1048576&&Ah(t,$a,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wa(e,t),e=t.pendingProps;var i=or(t,pe.current);Zn(t,n),i=wu(null,t,r,e,i,n);var a=_u();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(a=!0,Fa(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pu(t),i.updater=ko,t.stateNode=i,i._reactInternals=t,il(t,r,e,n),t=sl(null,t,r,!0,a,n)):(t.tag=0,K&&a&&su(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ny(r),e=je(r,e),i){case 0:t=ol(null,t,r,e,n);break e;case 1:t=tf(null,t,r,e,n);break e;case 11:t=Zc(null,t,r,e,n);break e;case 14:t=ef(null,t,r,je(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),tf(e,t,r,i,n);case 3:e:{if(dp(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Mh(e,t),Wa(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=cr(Error(_(423)),t),t=nf(e,t,r,n,i);break e}else if(r!==i){i=cr(Error(_(424)),t),t=nf(e,t,r,n,i);break e}else for(xe=Ut(t.stateNode.containerInfo.firstChild),Te=t,K=!0,Be=null,n=jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===i){t=ht(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return $h(t),e===null&&tl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Xs(r,i)?o=null:a!==null&&Xs(r,a)&&(t.flags|=32),fp(e,t),ge(e,t,o,n),t.child;case 6:return e===null&&tl(t),null;case 13:return hp(e,t,n);case 4:return mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),Zc(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,B(Ba,r._currentValue),r._currentValue=o,a!==null)if(Ke(a.value,o)){if(a.children===i.children&&!Se.current){t=ht(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=ut(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),nl(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),nl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zn(t,n),i=Me(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=je(r,t.pendingProps),i=je(r.type,i),ef(e,t,r,i,n);case 15:return up(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:je(r,i),wa(e,t),t.tag=1,Ee(r)?(e=!0,Fa(t)):e=!1,Zn(t,n),Uh(t,r,i),il(t,r,i,n),sl(null,t,r,!0,e,n);case 19:return pp(e,t,n);case 22:return cp(e,t,n)}throw Error(_(156,t.tag))};function Op(e,t){return nh(e,t)}function Oy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new Oy(e,t,n,r)}function Ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ny(e){if(typeof e=="function")return Ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ql)return 11;if(e===Xl)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sa(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Ou(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ln:return pn(n.children,i,a,t);case Gl:o=8,i|=8;break;case bs:return e=Le(12,n,t,i|2),e.elementType=bs,e.lanes=a,e;case Ps:return e=Le(13,n,t,i),e.elementType=Ps,e.lanes=a,e;case Os:return e=Le(19,n,t,i),e.elementType=Os,e.lanes=a,e;case Fd:return Co(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zd:o=10;break e;case Ud:o=9;break e;case Ql:o=11;break e;case Xl:o=14;break e;case It:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Le(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function pn(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=Le(22,e,r,t),e.elementType=Fd,e.lanes=n,e.stateNode={isHidden:!1},e}function cs(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function fs(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ay(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nu(e,t,n,r,i,a,o,s,l){return e=new Ay(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Le(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(a),e}function Ry(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Np(e){if(!e)return Kt;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Oh(e,n,t)}return t}function Ap(e,t,n,r,i,a,o,s,l){return e=Nu(n,r,!0,e,i,a,o,s,l),e.context=Np(null),n=e.current,r=ve(),i=$t(n),a=ut(r,i),a.callback=t??null,Ft(n,a,i),e.current.lanes=i,Si(e,i,r),Ie(e,r),e}function xo(e,t,n,r){var i=t.current,a=ve(),o=$t(i);return n=Np(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,o),e!==null&&(Ye(e,i,o,a),ga(e,i,o)),o}function Ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Au(e,t){hf(e,t),(e=e.alternate)&&hf(e,t)}function Ly(){return null}var Rp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}To.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));xo(e,t,null,null)};To.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){xo(null,e,null,null)}),t[ft]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=uh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&fh(e)}};function Lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pf(){}function Dy(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Ja(o);a.call(u)}}var o=Ap(t,r,e,0,null,!1,!1,"",pf);return e._reactRootContainer=o,e[ft]=o.current,ni(e.nodeType===8?e.parentNode:e),kn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Ja(l);s.call(u)}}var l=Nu(e,0,!1,null,null,!1,!1,"",pf);return e._reactRootContainer=l,e[ft]=l.current,ni(e.nodeType===8?e.parentNode:e),kn(function(){xo(t,l,n,r)}),l}function Po(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Ja(o);s.call(l)}}xo(t,o,e,i)}else o=Dy(n,t,e,i,r);return Ja(o)}sh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(Zl(t,n|1),Ie(t,ee()),!(U&6)&&(fr=ee()+500,Zt()))}break;case 13:kn(function(){var r=dt(e,1);if(r!==null){var i=ve();Ye(r,e,1,i)}}),Au(e,1)}};eu=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=ve();Ye(t,e,134217728,n)}Au(e,134217728)}};lh=function(e){if(e.tag===13){var t=$t(e),n=dt(e,t);if(n!==null){var r=ve();Ye(n,e,t,r)}Au(e,t)}};uh=function(){return j};ch=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};js=function(e,t,n){switch(t){case"input":if(Rs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(_(90));$d(r),Rs(r,i)}}}break;case"textarea":Hd(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};Xd=Tu;qd=kn;var My={usingClientEntryPoint:!1,Events:[Ii,Un,wo,Gd,Qd,Tu]},br={findFiberByHostInstance:sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zy={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eh(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{mo=ea.inject(zy),Ze=ea}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(t))throw Error(_(200));return Ry(e,t,null,n)};Pe.createRoot=function(e,t){if(!Lu(e))throw Error(_(299));var n=!1,r="",i=Rp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nu(e,1,!1,null,null,n,!1,r,i),e[ft]=t.current,ni(e.nodeType===8?e.parentNode:e),new Ru(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=eh(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return kn(e)};Pe.hydrate=function(e,t,n){if(!bo(t))throw Error(_(200));return Po(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Lu(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Rp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ap(t,null,e,1,n??null,i,!1,a,o),e[ft]=t.current,ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new To(t)};Pe.render=function(e,t,n){if(!bo(t))throw Error(_(200));return Po(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!bo(e))throw Error(_(40));return e._reactRootContainer?(kn(function(){Po(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Pe.unstable_batchedUpdates=Tu;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Po(e,t,n,!1,r)};Pe.version="18.2.0-next-9e3b772b8-20220608";function Lp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lp)}catch(e){console.error(e)}}Lp(),Ad.exports=Pe;var Uy=Ad.exports,mf=Uy;xs.createRoot=mf.createRoot,xs.hydrateRoot=mf.hydrateRoot;/**
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
 */const Dp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Fy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,d=(a&3)<<4|s>>4;let h=(s&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Dp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Fy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||d==null)throw new jy;const h=a<<2|s>>4;if(r.push(h),u!==64){const g=s<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class jy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $y=function(e){const t=Dp(e);return Mp.encodeByteArray(t,!0)},zp=function(e){return $y(e).replace(/\./g,"")},Up=function(e){try{return Mp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function By(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hy=()=>By().__FIREBASE_DEFAULTS__,Wy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Vy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Up(e[1]);return t&&JSON.parse(t)},Du=()=>{try{return Hy()||Wy()||Vy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Yy=e=>{var t,n;return(n=(t=Du())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Fp=()=>{var e;return(e=Du())===null||e===void 0?void 0:e.config},jp=e=>{var t;return(t=Du())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Ky{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Qy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Xy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qy(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Jy(){try{return typeof indexedDB=="object"}catch{return!1}}function Zy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const e0="FirebaseError";class en extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=e0,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?t0(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new en(i,s,r)}}function t0(e,t){return e.replace(n0,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const n0=/\{\$([^}]+)}/g;function r0(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Za(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(gf(a)&&gf(o)){if(!Za(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gf(e){return e!==null&&typeof e=="object"}/**
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
 */function Ti(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Rr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Lr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function i0(e,t){const n=new a0(e,t);return n.subscribe.bind(n)}class a0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");o0(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ds),i.error===void 0&&(i.error=ds),i.complete===void 0&&(i.complete=ds);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o0(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ds(){}/**
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
 */function wt(e){return e&&e._delegate?e._delegate:e}class dr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class s0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ky;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(u0(t))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=on){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=on){return this.instances.has(t)}getOptions(t=on){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:l0(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=on){return this.component?this.component.multipleInstances?t:on:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l0(e){return e===on?void 0:e}function u0(e){return e.instantiationMode==="EAGER"}/**
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
 */class c0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new s0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const f0={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},d0=$.INFO,h0={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},p0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=h0[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $p{constructor(t){this.name=t,this._logLevel=d0,this._logHandler=p0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?f0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const m0=(e,t)=>t.some(n=>e instanceof n);let vf,yf;function g0(){return vf||(vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v0(){return yf||(yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,wl=new WeakMap,Hp=new WeakMap,hs=new WeakMap,Mu=new WeakMap;function y0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Ht(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bp.set(n,e)}).catch(()=>{}),Mu.set(t,e),t}function w0(e){if(wl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});wl.set(e,t)}let _l={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return wl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Hp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _0(e){_l=e(_l)}function k0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ps(this),t,...n);return Hp.set(r,t.sort?t.sort():[t]),Ht(r)}:v0().includes(e)?function(...t){return e.apply(ps(this),t),Ht(Bp.get(this))}:function(...t){return Ht(e.apply(ps(this),t))}}function S0(e){return typeof e=="function"?k0(e):(e instanceof IDBTransaction&&w0(e),m0(e,g0())?new Proxy(e,_l):e)}function Ht(e){if(e instanceof IDBRequest)return y0(e);if(hs.has(e))return hs.get(e);const t=S0(e);return t!==e&&(hs.set(e,t),Mu.set(t,e)),t}const ps=e=>Mu.get(e);function E0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Ht(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ht(o.result),l.oldVersion,l.newVersion,Ht(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const I0=["get","getKey","getAll","getAllKeys","count"],C0=["put","add","delete","clear"],ms=new Map;function wf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ms.get(t))return ms.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=C0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I0.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return ms.set(t,a),a}_0(e=>({...e,get:(t,n,r)=>wf(t,n)||e.get(t,n,r),has:(t,n)=>!!wf(t,n)||e.has(t,n)}));/**
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
 */class x0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function T0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kl="@firebase/app",_f="0.9.19";/**
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
 */const Sn=new $p("@firebase/app"),b0="@firebase/app-compat",P0="@firebase/analytics-compat",O0="@firebase/analytics",N0="@firebase/app-check-compat",A0="@firebase/app-check",R0="@firebase/auth",L0="@firebase/auth-compat",D0="@firebase/database",M0="@firebase/database-compat",z0="@firebase/functions",U0="@firebase/functions-compat",F0="@firebase/installations",j0="@firebase/installations-compat",$0="@firebase/messaging",B0="@firebase/messaging-compat",H0="@firebase/performance",W0="@firebase/performance-compat",V0="@firebase/remote-config",Y0="@firebase/remote-config-compat",K0="@firebase/storage",G0="@firebase/storage-compat",Q0="@firebase/firestore",X0="@firebase/firestore-compat",q0="firebase",J0="10.4.0";/**
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
 */const Sl="[DEFAULT]",Z0={[kl]:"fire-core",[b0]:"fire-core-compat",[O0]:"fire-analytics",[P0]:"fire-analytics-compat",[A0]:"fire-app-check",[N0]:"fire-app-check-compat",[R0]:"fire-auth",[L0]:"fire-auth-compat",[D0]:"fire-rtdb",[M0]:"fire-rtdb-compat",[z0]:"fire-fn",[U0]:"fire-fn-compat",[F0]:"fire-iid",[j0]:"fire-iid-compat",[$0]:"fire-fcm",[B0]:"fire-fcm-compat",[H0]:"fire-perf",[W0]:"fire-perf-compat",[V0]:"fire-rc",[Y0]:"fire-rc-compat",[K0]:"fire-gcs",[G0]:"fire-gcs-compat",[Q0]:"fire-fst",[X0]:"fire-fst-compat","fire-js":"fire-js",[q0]:"fire-js-all"};/**
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
 */const eo=new Map,El=new Map;function e1(e,t){try{e.container.addComponent(t)}catch(n){Sn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fi(e){const t=e.name;if(El.has(t))return Sn.debug(`There were multiple attempts to register component ${t}.`),!1;El.set(t,e);for(const n of eo.values())e1(n,e);return!0}function Wp(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const t1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new xi("app","Firebase",t1);/**
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
 */class n1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const bi=J0;function Vp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Sl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(n||(n=Fp()),!n)throw Wt.create("no-options");const a=eo.get(i);if(a){if(Za(n,a.options)&&Za(r,a.config))return a;throw Wt.create("duplicate-app",{appName:i})}const o=new c0(i);for(const l of El.values())o.addComponent(l);const s=new n1(n,r,o);return eo.set(i,s),s}function r1(e=Sl){const t=eo.get(e);if(!t&&e===Sl&&Fp())return Vp();if(!t)throw Wt.create("no-app",{appName:e});return t}function tr(e,t,n){var r;let i=(r=Z0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Sn.warn(s.join(" "));return}fi(new dr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const i1="firebase-heartbeat-database",a1=1,di="firebase-heartbeat-store";let gs=null;function Yp(){return gs||(gs=E0(i1,a1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(di)}}}).catch(e=>{throw Wt.create("idb-open",{originalErrorMessage:e.message})})),gs}async function o1(e){try{return await(await Yp()).transaction(di).objectStore(di).get(Kp(e))}catch(t){if(t instanceof en)Sn.warn(t.message);else{const n=Wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Sn.warn(n.message)}}}async function kf(e,t){try{const r=(await Yp()).transaction(di,"readwrite");await r.objectStore(di).put(t,Kp(e)),await r.done}catch(n){if(n instanceof en)Sn.warn(n.message);else{const r=Wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function Kp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const s1=1024,l1=30*24*60*60*1e3;class u1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=l1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sf(),{heartbeatsToSend:n,unsentEntries:r}=c1(this._heartbeatsCache.heartbeats),i=zp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sf(){return new Date().toISOString().substring(0,10)}function c1(e,t=s1){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),Ef(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ef(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class f1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jy()?Zy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await o1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ef(e){return zp(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function d1(e){fi(new dr("platform-logger",t=>new x0(t),"PRIVATE")),fi(new dr("heartbeat",t=>new u1(t),"PRIVATE")),tr(kl,_f,e),tr(kl,_f,"esm2017"),tr("fire-js","")}d1("");function zu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function If(e){return e!==void 0&&e.enterprise!==void 0}class h1{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Gp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p1=Gp,Qp=new xi("auth","Firebase",Gp());/**
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
 */const to=new $p("@firebase/auth");function m1(e,...t){to.logLevel<=$.WARN&&to.warn(`Auth (${bi}): ${e}`,...t)}function Ea(e,...t){to.logLevel<=$.ERROR&&to.error(`Auth (${bi}): ${e}`,...t)}/**
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
 */function Ge(e,...t){throw Uu(e,...t)}function tt(e,...t){return Uu(e,...t)}function g1(e,t,n){const r=Object.assign(Object.assign({},p1()),{[t]:n});return new xi("auth","Firebase",r).create(t,{appName:e.name})}function Uu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Qp.create(e,...t)}function N(e,t,...n){if(!e)throw Uu(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ea(t),new Error(t)}function pt(e,t){e||st(t)}/**
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
 */function Il(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function v1(){return Cf()==="http:"||Cf()==="https:"}function Cf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function y1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v1()||Qy()||"connection"in navigator)?navigator.onLine:!0}function w1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Pi{constructor(t,n){this.shortDelay=t,this.longDelay=n,pt(n>t,"Short delay should be less than long delay!"),this.isMobile=Gy()||Xy()}get(){return y1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fu(e,t){pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Xp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const k1=new Pi(3e4,6e4);function Pn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function On(e,t,n,r,i={}){return qp(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Ti(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Xp.fetch()(Jp(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function qp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},_1),t);try{const i=new S1(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw ta(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ta(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ta(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw g1(e,c,u);Ge(e,c)}}catch(i){if(i instanceof en)throw i;Ge(e,"network-request-failed",{message:String(i)})}}async function Oi(e,t,n,r,i={}){const a=await On(e,t,n,r,i);return"mfaPendingCredential"in a&&Ge(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Jp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Fu(e.config,i):`${e.config.apiScheme}://${i}`}class S1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),k1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ta(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tt(e,t,r);return i.customData._tokenResponse=n,i}async function E1(e,t){return On(e,"GET","/v2/recaptchaConfig",Pn(e,t))}/**
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
 */async function I1(e,t){return On(e,"POST","/v1/accounts:delete",t)}async function C1(e,t){return On(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Vr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function x1(e,t=!1){const n=wt(e),r=await n.getIdToken(t),i=ju(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Vr(vs(i.auth_time)),issuedAtTime:Vr(vs(i.iat)),expirationTime:Vr(vs(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function vs(e){return Number(e)*1e3}function ju(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=Up(n);return i?JSON.parse(i):(Ea("Failed to decode base64 JWT payload"),null)}catch(i){return Ea("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function T1(e){const t=ju(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function hi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof en&&b1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function b1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class P1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zp{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vr(this.lastLoginAt),this.creationTime=Vr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function no(e){var t;const n=e.auth,r=await e.getIdToken(),i=await hi(e,C1(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?A1(a.providerUserInfo):[],s=N1(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Zp(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function O1(e){const t=wt(e);await no(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function N1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function A1(e){return e.map(t=>{var{providerId:n}=t,r=zu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function R1(e,t){const n=await qp(e,{},async()=>{const r=Ti({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Jp(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Xp.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):T1(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await R1(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new pi;return r&&(N(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(N(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function St(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class mn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=zu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Zp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await hi(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return x1(this,t)}reload(){return O1(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new mn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await no(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await hi(this,I1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(s=n.tenantId)!==null&&s!==void 0?s:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:E,stsTokenManager:I}=n;N(m&&I,t,"internal-error");const P=pi.fromJSON(this.name,I);N(typeof m=="string",t,"internal-error"),St(d,t.name),St(h,t.name),N(typeof y=="boolean",t,"internal-error"),N(typeof k=="boolean",t,"internal-error"),St(g,t.name),St(v,t.name),St(w,t.name),St(S,t.name),St(p,t.name),St(f,t.name);const z=new mn({uid:m,auth:t,email:h,emailVerified:y,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:P,createdAt:p,lastLoginAt:f});return E&&Array.isArray(E)&&(z.providerData=E.map(R=>Object.assign({},R))),S&&(z._redirectEventId=S),z}static async _fromIdTokenResponse(t,n,r=!1){const i=new pi;i.updateFromServerResponse(n);const a=new mn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await no(a),a}}/**
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
 */const xf=new Map;function lt(e){pt(e instanceof Function,"Expected a class definition");let t=xf.get(e);return t?(pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xf.set(e,t),t)}/**
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
 */class em{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}em.type="NONE";const Tf=em;/**
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
 */function Ia(e,t,n){return`firebase:${e}:${t}:${n}`}class nr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ia(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ia("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?mn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new nr(lt(Tf),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||lt(Tf);const o=Ia(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const d=mn._fromJSON(t,c);u!==a&&(s=d),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new nr(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new nr(a,t,r))}}/**
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
 */function bf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(tm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(am(t))return"Blackberry";if(om(t))return"Webos";if($u(t))return"Safari";if((t.includes("chrome/")||nm(t))&&!t.includes("edge/"))return"Chrome";if(im(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tm(e=me()){return/firefox\//i.test(e)}function $u(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nm(e=me()){return/crios\//i.test(e)}function rm(e=me()){return/iemobile/i.test(e)}function im(e=me()){return/android/i.test(e)}function am(e=me()){return/blackberry/i.test(e)}function om(e=me()){return/webos/i.test(e)}function Oo(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function L1(e=me()){var t;return Oo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function D1(){return qy()&&document.documentMode===10}function sm(e=me()){return Oo(e)||im(e)||om(e)||am(e)||/windows phone/i.test(e)||rm(e)}function M1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function lm(e,t=[]){let n;switch(e){case"Browser":n=bf(me());break;case"Worker":n=`${bf(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
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
 */class z1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function U1(e,t={}){return On(e,"GET","/v2/passwordPolicy",Pn(e,t))}/**
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
 */const F1=6;class j1{constructor(t){var n,r,i,a;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:F1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,o,s;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNonAlphanumericCharacter)!==null&&s!==void 0?s:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class $1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new z1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await no(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=w1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?wt(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await U1(this),n=new j1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&lt(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let o=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(s,this,"internal-error"),s.then(()=>{o||a(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=lm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&m1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nn(e){return wt(e)}class Pf{constructor(t){this.auth=t,this.observer=null,this.addObserver=i0(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function B1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function um(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=tt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",B1().appendChild(r)})}function H1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const W1="https://www.google.com/recaptcha/enterprise.js?render=",V1="recaptcha-enterprise",Y1="NO_RECAPTCHA";class K1{constructor(t){this.type=V1,this.auth=Nn(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{E1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new h1(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;If(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(()=>{o(Y1)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&If(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}um(W1+s).then(()=>{i(s,a,o)}).catch(l=>{o(l)})}}).catch(s=>{o(s)})})}}async function ro(e,t,n,r=!1){const i=new K1(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function G1(e,t){const n=Wp(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(Za(a,t??{}))return i;Ge(i,"already-initialized")}return n.initialize({options:t})}function Q1(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function X1(e,t,n){const r=Nn(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=cm(t),{host:o,port:s}=q1(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||J1()}function cm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function q1(e){const t=cm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Of(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:Of(o)}}}function Of(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function J1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Bu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(t){return st("not implemented")}_linkToIdToken(t,n){return st("not implemented")}_getReauthenticationResolver(t){return st("not implemented")}}async function Z1(e,t){return On(e,"POST","/v1/accounts:update",t)}/**
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
 */async function ys(e,t){return Oi(e,"POST","/v1/accounts:signInWithPassword",Pn(e,t))}/**
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
 */async function ew(e,t){return Oi(e,"POST","/v1/accounts:signInWithEmailLink",Pn(e,t))}async function tw(e,t){return Oi(e,"POST","/v1/accounts:signInWithEmailLink",Pn(e,t))}/**
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
 */class mi extends Bu{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new mi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new mi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ro(t,r,"signInWithPassword");return ys(t,i)}else return ys(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const a=await ro(t,r,"signInWithPassword");return ys(t,a)}else return Promise.reject(i)});case"emailLink":return ew(t,{email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Z1(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tw(t,{idToken:n,email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function rr(e,t){return Oi(e,"POST","/v1/accounts:signInWithIdp",Pn(e,t))}/**
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
 */const nw="http://localhost";class En extends Bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new En(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=zu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new En(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return rr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,rr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,rr(t,n)}buildRequest(){const t={requestUri:nw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ti(n)}return t}}/**
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
 */function rw(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iw(e){const t=Rr(Lr(e)).link,n=t?Rr(Lr(t)).deep_link_id:null,r=Rr(Lr(e)).deep_link_id;return(r?Rr(Lr(r)).link:null)||r||n||t||e}class Hu{constructor(t){var n,r,i,a,o,s;const l=Rr(Lr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=rw((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=iw(t);try{return new Hu(n)}catch{return null}}}/**
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
 */class vr{constructor(){this.providerId=vr.PROVIDER_ID}static credential(t,n){return mi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Hu.parseLink(n);return N(r,"argument-error"),mi._fromEmailAndCode(t,r.code,r.tenantId)}}vr.PROVIDER_ID="password";vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends fm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class bt extends Ni{constructor(){super("facebook.com")}static credential(t){return En._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bt.credential(t.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return En._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class Ot extends Ni{constructor(){super("github.com")}static credential(t){return En._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class Nt extends Ni{constructor(){super("twitter.com")}static credential(t,n){return En._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */async function ws(e,t){return Oi(e,"POST","/v1/accounts:signUp",Pn(e,t))}/**
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
 */class In{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await mn._fromIdTokenResponse(t,r,i),o=Nf(r);return new In({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Nf(r);return new In({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Nf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class io extends en{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,io.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new io(t,n,r,i)}}function dm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?io._fromErrorAndOperation(e,a,t,r):a})}async function aw(e,t,n=!1){const r=await hi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return In._forOperation(e,"link",r)}/**
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
 */async function ow(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await hi(e,dm(r,i,t,e),n);N(a.idToken,r,"internal-error");const o=ju(a.idToken);N(o,r,"internal-error");const{sub:s}=o;return N(e.uid===s,r,"user-mismatch"),In._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),a}}/**
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
 */async function hm(e,t,n=!1){const r="signIn",i=await dm(e,r,t),a=await In._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function sw(e,t){return hm(Nn(e),t)}/**
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
 */async function pm(e){const t=Nn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function lw(e,t,n){var r;const i=Nn(e),a={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ro(i,a,"signUpPassword");o=ws(i,u)}else o=ws(i,a).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ro(i,a,"signUpPassword");return ws(i,c)}throw u});const s=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pm(e),u}),l=await In._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(l.user),l}function uw(e,t,n){return sw(wt(e),vr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pm(e),r})}function cw(e,t,n,r){return wt(e).onIdTokenChanged(t,n,r)}function fw(e,t,n){return wt(e).beforeAuthStateChanged(t,n)}function dw(e,t,n,r){return wt(e).onAuthStateChanged(t,n,r)}function hw(e){return wt(e).signOut()}const ao="__sak";/**
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
 */class mm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ao,"1"),this.storage.removeItem(ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pw(){const e=me();return $u(e)||Oo(e)}const mw=1e3,gw=10;class gm extends mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pw()&&M1(),this.fallbackToPolling=sm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);D1()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,gw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}gm.type="LOCAL";const vw=gm;/**
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
 */class vm extends mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}vm.type="SESSION";const ym=vm;/**
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
 */function yw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class No{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new No(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await yw(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
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
 */function Wu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class ww{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=Wu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(h.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function _w(e){nt().location.href=e}/**
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
 */function wm(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function kw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ew(){return wm()?self:null}/**
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
 */const _m="firebaseLocalStorageDb",Iw=1,oo="firebaseLocalStorage",km="fbase_key";class Ai{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ao(e,t){return e.transaction([oo],t?"readwrite":"readonly").objectStore(oo)}function Cw(){const e=indexedDB.deleteDatabase(_m);return new Ai(e).toPromise()}function Cl(){const e=indexedDB.open(_m,Iw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(oo,{keyPath:km})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(oo)?t(r):(r.close(),await Cw(),t(await Cl()))})})}async function Af(e,t,n){const r=Ao(e,!0).put({[km]:t,value:n});return new Ai(r).toPromise()}async function xw(e,t){const n=Ao(e,!1).get(t),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function Rf(e,t){const n=Ao(e,!0).delete(t);return new Ai(n).toPromise()}const Tw=800,bw=3;class Sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>bw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(Ew()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await kw(),!this.activeServiceWorker)return;this.sender=new ww(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Sw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Cl();return await Af(t,ao,"1"),await Rf(t,ao),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Af(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>xw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=Ao(i,!1).getAll();return new Ai(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sm.type="LOCAL";const Pw=Sm;new Pi(3e4,6e4);/**
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
 */function Ow(e,t){return t?lt(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Vu extends Bu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return rr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return rr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return rr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Nw(e){return hm(e.auth,new Vu(e),e.bypassAuthState)}function Aw(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),ow(n,new Vu(e),e.bypassAuthState)}async function Rw(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),aw(n,new Vu(e),e.bypassAuthState)}/**
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
 */class Em{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Nw;case"linkViaPopup":case"linkViaRedirect":return Rw;case"reauthViaPopup":case"reauthViaRedirect":return Aw;default:Ge(this.auth,"internal-error")}}resolve(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Lw=new Pi(2e3,1e4);class Vn extends Em{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const t=Wu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Lw.get())};t()}}Vn.currentPopupAction=null;/**
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
 */const Dw="pendingRedirect",Ca=new Map;class Mw extends Em{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ca.get(this.auth._key());if(!t){try{const r=await zw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ca.set(this.auth._key(),t)}return this.bypassAuthState||Ca.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zw(e,t){const n=jw(t),r=Fw(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Uw(e,t){Ca.set(e._key(),t)}function Fw(e){return lt(e._redirectPersistence)}function jw(e){return Ia(Dw,e.config.apiKey,e.name)}async function $w(e,t,n=!1){const r=Nn(e),i=Ow(r,t),o=await new Mw(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Bw=10*60*1e3;class Hw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ww(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Im(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Bw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lf(t))}saveEventToCache(t){this.cachedEventUids.add(Lf(t)),this.lastProcessedEventTime=Date.now()}}function Lf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Im({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ww(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Im(e);default:return!1}}/**
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
 */async function Vw(e,t={}){return On(e,"GET","/v1/projects",t)}/**
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
 */const Yw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kw=/^https?/;async function Gw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Vw(e);for(const n of t)try{if(Qw(n))return}catch{}Ge(e,"unauthorized-domain")}function Qw(e){const t=Il(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kw.test(n))return!1;if(Yw.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Xw=new Pi(3e4,6e4);function Df(){const e=nt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function qw(e){return new Promise((t,n)=>{var r,i,a;function o(){Df(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Df(),n(tt(e,"network-request-failed"))},timeout:Xw.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=nt().gapi)===null||a===void 0)&&a.load)o();else{const s=H1("iframefcb");return nt()[s]=()=>{gapi.load?o():n(tt(e,"network-request-failed"))},um(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw xa=null,t})}let xa=null;function Jw(e){return xa=xa||qw(e),xa}/**
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
 */const Zw=new Pi(5e3,15e3),e_="__/auth/iframe",t_="emulator/auth/iframe",n_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function i_(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Fu(t,t_):`https://${e.config.authDomain}/${e_}`,r={apiKey:t.apiKey,appName:e.name,v:bi},i=r_.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Ti(r).slice(1)}`}async function a_(e){const t=await Jw(e),n=nt().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:i_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n_,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=tt(e,"network-request-failed"),s=nt().setTimeout(()=>{a(o)},Zw.get());function l(){nt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
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
 */const o_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},s_=500,l_=600,u_="_blank",c_="http://localhost";class Mf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f_(e,t,n,r=s_,i=l_){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},o_),{width:r.toString(),height:i.toString(),top:a,left:o}),u=me().toLowerCase();n&&(s=nm(u)?u_:n),tm(u)&&(t=t||c_,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(L1(u)&&s!=="_self")return d_(t||"",s),new Mf(null);const d=window.open(t||"",s,c);N(d,e,"popup-blocked");try{d.focus()}catch{}return new Mf(d)}function d_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const h_="__/auth/handler",p_="emulator/auth/handler",m_=encodeURIComponent("fac");async function zf(e,t,n,r,i,a){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:bi,eventId:i};if(t instanceof fm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",r0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(a||{}))o[c]=d}if(t instanceof Ni){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${m_}=${encodeURIComponent(l)}`:"";return`${g_(e)}?${Ti(s).slice(1)}${u}`}function g_({config:e}){return e.emulator?Fu(e,p_):`https://${e.authDomain}/${h_}`}/**
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
 */const _s="webStorageSupport";class v_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ym,this._completeRedirectFn=$w,this._overrideRedirectResult=Uw}async _openPopup(t,n,r,i){var a;pt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await zf(t,n,r,Il(),i);return f_(t,o,Wu())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await zf(t,n,r,Il(),i);return _w(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(pt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await a_(t),r=new Hw(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(_s,{type:_s},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[_s];o!==void 0&&n(!!o),Ge(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gw(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return sm()||$u()||Oo()}}const y_=v_;var Uf="@firebase/auth",Ff="1.3.0";/**
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
 */class w_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function __(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function k_(e){fi(new dr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lm(e)},u=new $1(r,i,a,l);return Q1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),fi(new dr("auth-internal",t=>{const n=Nn(t.getProvider("auth").getImmediate());return(r=>new w_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Uf,Ff,__(e)),tr(Uf,Ff,"esm2017")}/**
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
 */const S_=5*60,E_=jp("authIdTokenMaxAge")||S_;let jf=null;const I_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>E_)return;const i=n==null?void 0:n.token;jf!==i&&(jf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function C_(e=r1()){const t=Wp(e,"auth");if(t.isInitialized())return t.getImmediate();const n=G1(e,{popupRedirectResolver:y_,persistence:[Pw,vw,ym]}),r=jp("authTokenSyncURL");if(r){const a=I_(r);fw(n,a,()=>a(n.currentUser)),cw(n,o=>a(o))}const i=Yy("auth");return i&&X1(n,`http://${i}`),n}k_("Browser");var x_="firebase",T_="10.4.0";/**
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
 */tr(x_,T_,"app");const b_={apiKey:"AIzaSyDwzNtWpdyMYFR6h6ASHwfIl9qaWTrY-ss",authDomain:"todo-app-e6b8d.firebaseapp.com",projectId:"todo-app-e6b8d",storageBucket:"todo-app-e6b8d.appspot.com",messagingSenderId:"1011000980175",appId:"1:1011000980175:web:986b49ec43e6920a3d3dba"},P_=Vp(b_),so=C_(P_);/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const $f="popstate";function O_(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return xl("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xm(i)}return A_(t,n,null,e)}function Cm(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function N_(){return Math.random().toString(36).substr(2,8)}function Bf(e,t){return{usr:e.state,key:e.key,idx:t}}function xl(e,t,n,r){return n===void 0&&(n=null),lo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tm(t):t,{state:n,key:t&&t.key||r||N_()})}function xm(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tm(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function A_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=cn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(lo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=cn.Pop;let S=c(),p=S==null?null:S-u;u=S,l&&l({action:s,location:w.location,delta:p})}function h(S,p){s=cn.Push;let f=xl(w.location,S,p);n&&n(f,S),u=c()+1;let m=Bf(f,u),y=w.createHref(f);try{o.pushState(m,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}a&&l&&l({action:s,location:w.location,delta:1})}function g(S,p){s=cn.Replace;let f=xl(w.location,S,p);n&&n(f,S),u=c();let m=Bf(f,u),y=w.createHref(f);o.replaceState(m,"",y),a&&l&&l({action:s,location:w.location,delta:0})}function v(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:xm(S);return Cm(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return s},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener($f,d),l=S,()=>{i.removeEventListener($f,d),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(S){return o.go(S)}};return w}var Hf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hf||(Hf={}));function R_(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const bm=["post","put","patch","delete"];new Set(bm);const L_=["get",...bm];new Set(L_);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const D_=F.createContext(null),Pm=F.createContext(null);function M_(){return F.useContext(Pm)!=null}function z_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=cn.Pop,navigator:a,static:o=!1}=e;M_()&&Cm(!1);let s=t.replace(/^\/*/,"/"),l=F.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=Tm(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:g="default"}=r,v=F.useMemo(()=>{let w=R_(u,s);return w==null?null:{location:{pathname:w,search:c,hash:d,state:h,key:g},navigationType:i}},[s,u,c,d,h,g,i]);return v==null?null:F.createElement(D_.Provider,{value:l},F.createElement(Pm.Provider,{children:n,value:v}))}new Promise(()=>{});/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const U_="startTransition",Wf=bg[U_];function F_(e){let{basename:t,children:n,future:r,window:i}=e,a=F.useRef();a.current==null&&(a.current=O_({window:i,v5Compat:!0}));let o=a.current,[s,l]=F.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=F.useCallback(d=>{u&&Wf?Wf(()=>l(d)):l(d)},[l,u]);return F.useLayoutEffect(()=>o.listen(c),[o,c]),F.createElement(z_,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var Vf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Vf||(Vf={}));var Yf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yf||(Yf={}));const j_=({setUser:e,setShowSignUp:t,showSignUp:n,setSignedIn:r,signedIn:i})=>{const[a,o]=F.useState(""),[s,l]=F.useState(""),[u,c]=F.useState(null),d=async g=>{g.preventDefault();try{const v=await uw(so,a,s);e(v.user),r(!0),console.log("sign in"+i),console.log("Successfully Signed In"),c(null)}catch(v){console.log("Error signing in: ",v),console.log(v.message),c(h(v.code))}},h=g=>({"auth/invalid-email":"Invalid Email!","auth/invalid-login-credentials":"Incorrect Password!","auth/user-not-found":"User not found, Please check your Email!"})[g]||"There is an problem";return O.jsx("div",{children:O.jsxs("form",{name:"signin",className:"flex flex-col gap-4",onSubmit:d,children:[O.jsx("input",{type:"email",placeholder:"Email",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]",value:a,onChange:g=>{o(g.target.value)}}),O.jsx("input",{type:"password",placeholder:"Password",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]",value:s,onChange:g=>{l(g.target.value)}}),u&&O.jsx("p",{className:"text-center text-light-yellow",children:u}),O.jsxs("div",{className:"flex justify-between max-sm:flex-col-reverse gap-5 items-center",children:[O.jsx("p",{className:"cursor-pointer text-white text-sm",onClick:()=>t(!n),children:"Don't have an account?"}),O.jsx("button",{type:"submit",className:"bg-white font-semibold text-sm w-[50%] max-sm:w-full h-10  rounded-full shadow-md",children:"Sign In"})]})]})})},$_=({setUser:e,setShowSignUp:t,showSignUp:n,setSignedIn:r})=>{const[i,a]=F.useState(""),[o,s]=F.useState(""),[l,u]=F.useState(null),c=async h=>{h.preventDefault();try{const g=await lw(so,i,o);console.log(g.user),e(g.user),r(!0),u(null),console.log()}catch(g){u(d(g.code)),console.log("Error signing up",g)}},d=h=>({"auth/invalid-email":"Enter a Valid Email!","auth/weak-password":"Password should be atleast 6 characters!","auth/email-already-in-use":"Email Already in use!"})[h]||"There is a problem!";return O.jsx("div",{children:O.jsxs("form",{name:"signup",className:"flex flex-col gap-4",onSubmit:c,children:[O.jsx("input",{type:"email",value:i,placeholder:"Email",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]",onChange:h=>{a(h.target.value)}}),O.jsx("input",{type:"password",value:o,placeholder:"Password",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]",onChange:h=>{s(h.target.value)}}),l&&O.jsx("p",{className:"text-center text-light-yellow",children:l}),O.jsxs("div",{className:"flex justify-between max-sm:flex-col-reverse gap-5 items-center",children:[O.jsx("p",{className:"cursor-pointer text-white text-sm",onClick:()=>t(!n),children:"Already have an account?"}),O.jsx("button",{type:"submit",className:"bg-white font-semibold text-sm w-[50%] max-sm:w-full h-10  rounded-full shadow-md",children:"Sign Up"})]})]})})};var Om={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kf=We.createContext&&We.createContext(Om),Vt=globalThis&&globalThis.__assign||function(){return Vt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Vt.apply(this,arguments)},B_=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Nm(e){return e&&e.map(function(t,n){return We.createElement(t.tag,Vt({key:n},t.attr),Nm(t.child))})}function H_(e){return function(t){return We.createElement(W_,Vt({attr:Vt({},e.attr)},t),Nm(e.child))}}function W_(e){var t=function(n){var r=e.attr,i=e.size,a=e.title,o=B_(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),We.createElement("svg",Vt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Vt(Vt({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&We.createElement("title",null,a),e.children)};return Kf!==void 0?We.createElement(Kf.Consumer,null,function(n){return t(n)}):t(Om)}function V_(e){return H_({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"}}]})(e)}const Y_=({todo:e,setTodo:t,todos:n,setTodos:r})=>{const[i,a]=F.useState(!1),[o,s]=F.useState(!1),[l,u]=F.useState(null),c=h=>{h.preventDefault();const g={text:e,checked:!1};e!==""&&(r([...n,g]),t(""))};F.useEffect(()=>{const h=dw(so,v=>{v?(u(v),a(!0),localStorage.setItem("user",JSON.stringify(v)),console.log("header"+i),console.log(l)):(u(null),a(!1),localStorage.removeItem("user"))}),g=localStorage.getItem("user");return g&&(u(JSON.parse(g)),a(!0)),()=>{h()}},[]);const d=async()=>{try{await hw(so),console.log("signed out")}catch(h){console.log("error signing out",h)}};return O.jsx("header",{id:"header",className:"font-poppins bg-dark-green pt-[100px] pb-[40px] flex justify-center",children:O.jsxs("div",{className:"w-[450px] max-sm:padding-x",children:[O.jsxs("h1",{className:"text-white font-semibold text-3xl left-0 mb-2",children:["Todo",O.jsx("span",{className:"font-extralight",children:"App"})]}),i?O.jsx("div",{children:O.jsxs("form",{onSubmit:c,className:"flex gap-4 max-sm:flex-col",children:[O.jsx("input",{type:"text",value:e,onChange:h=>t(h.target.value),placeholder:"Eg: Read Books",className:"bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10 w-[80%] max-sm:w-[100%]"}),O.jsx("button",{type:"submit",className:"bg-white font-semibold text-sm w-28 max-sm:w-full h-10  rounded-full shadow-md",children:"Add Task"})]})}):o?O.jsx($_,{setUser:u,setShowSignUp:s,showSignUp:o,setSignedIn:a}):O.jsx(j_,{setUser:u,setShowSignUp:s,showSignUp:o,setSignedIn:a,signedIn:i}),l&&O.jsxs("div",{onClick:d,children:[O.jsx("button",{className:"absolute top-5 right-5 bg-yellow-green font-semibold text-sm w-28 max-sm:w-full h-10 max-sm:hidden rounded-full shadow-md",children:"Sign Out"}),O.jsx("div",{className:"absolute top-5 right-5 sm:hidden bg-yellow-green rounded-full h-10 w-10 flex justify-center items-center",children:O.jsx(V_,{className:""})})]})]})})};var K_={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},G_={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},Q_={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]};function Gf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gf(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uo(e){"@babel/helpers - typeof";return uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},uo(e)}function X_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q_(e,t,n){return t&&Qf(e.prototype,t),n&&Qf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yu(e,t){return Z_(e)||tk(e,t)||Am(e,t)||rk()}function Ri(e){return J_(e)||ek(e)||Am(e)||nk()}function J_(e){if(Array.isArray(e))return Tl(e)}function Z_(e){if(Array.isArray(e))return e}function ek(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Am(e,t){if(e){if(typeof e=="string")return Tl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tl(e,t)}}function Tl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xf=function(){},Ku={},Rm={},Lm=null,Dm={mark:Xf,measure:Xf};try{typeof window<"u"&&(Ku=window),typeof document<"u"&&(Rm=document),typeof MutationObserver<"u"&&(Lm=MutationObserver),typeof performance<"u"&&(Dm=performance)}catch{}var ik=Ku.navigator||{},qf=ik.userAgent,Jf=qf===void 0?"":qf,Gt=Ku,Y=Rm,Zf=Lm,na=Dm;Gt.document;var _t=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",Mm=~Jf.indexOf("MSIE")||~Jf.indexOf("Trident/"),ra,ia,aa,oa,sa,mt="___FONT_AWESOME___",bl=16,zm="fa",Um="svg-inline--fa",Cn="data-fa-i2svg",Pl="data-fa-pseudo-element",ak="data-fa-pseudo-element-pending",Gu="data-prefix",Qu="data-icon",ed="fontawesome-i2svg",ok="async",sk=["HTML","HEAD","STYLE","SCRIPT"],Fm=function(){try{return!0}catch{return!1}}(),W="classic",J="sharp",Xu=[W,J];function Li(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[W]}})}var gi=Li((ra={},ie(ra,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(ra,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ra)),vi=Li((ia={},ie(ia,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(ia,J,{solid:"fass",regular:"fasr",light:"fasl"}),ia)),yi=Li((aa={},ie(aa,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(aa,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),aa)),lk=Li((oa={},ie(oa,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(oa,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),oa)),uk=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,jm="fa-layers-text",ck=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fk=Li((sa={},ie(sa,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(sa,J,{900:"fass",400:"fasr",300:"fasl"}),sa)),$m=[1,2,3,4,5,6,7,8,9,10],dk=$m.concat([11,12,13,14,15,16,17,18,19,20]),hk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wi=new Set;Object.keys(vi[W]).map(wi.add.bind(wi));Object.keys(vi[J]).map(wi.add.bind(wi));var pk=[].concat(Xu,Ri(wi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fn.GROUP,fn.SWAP_OPACITY,fn.PRIMARY,fn.SECONDARY]).concat($m.map(function(e){return"".concat(e,"x")})).concat(dk.map(function(e){return"w-".concat(e)})),Yr=Gt.FontAwesomeConfig||{};function mk(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function gk(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Y&&typeof Y.querySelector=="function"){var vk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vk.forEach(function(e){var t=Yu(e,2),n=t[0],r=t[1],i=gk(mk(n));i!=null&&(Yr[r]=i)})}var Bm={styleDefault:"solid",familyDefault:"classic",cssPrefix:zm,replacementClass:Um,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yr.familyPrefix&&(Yr.cssPrefix=Yr.familyPrefix);var hr=C(C({},Bm),Yr);hr.autoReplaceSvg||(hr.observeMutations=!1);var b={};Object.keys(Bm).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(n){hr[e]=n,Kr.forEach(function(r){return r(b)})},get:function(){return hr[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){hr.cssPrefix=t,Kr.forEach(function(n){return n(b)})},get:function(){return hr.cssPrefix}});Gt.FontAwesomeConfig=b;var Kr=[];function yk(e){return Kr.push(e),function(){Kr.splice(Kr.indexOf(e),1)}}var Et=bl,Je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wk(e){if(!(!e||!_t)){var t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Y.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Y.head.insertBefore(t,r),e}}var _k="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _i(){for(var e=12,t="";e-- >0;)t+=_k[Math.random()*62|0];return t}function yr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qu(e){return e.classList?yr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Hm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kk(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Hm(e[n]),'" ')},"").trim()}function Ro(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ju(e){return e.size!==Je.size||e.x!==Je.x||e.y!==Je.y||e.rotate!==Je.rotate||e.flipX||e.flipY}function Sk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Ek(e){var t=e.transform,n=e.width,r=n===void 0?bl:n,i=e.height,a=i===void 0?bl:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Mm?l+="translate(".concat(t.x/Et-r/2,"em, ").concat(t.y/Et-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Et,"em), calc(-50% + ").concat(t.y/Et,"em)) "):l+="translate(".concat(t.x/Et,"em, ").concat(t.y/Et,"em) "),l+="scale(".concat(t.size/Et*(t.flipX?-1:1),", ").concat(t.size/Et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ik=`:root, :host {
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
}`;function Wm(){var e=zm,t=Um,n=b.cssPrefix,r=b.replacementClass,i=Ik;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var td=!1;function ks(){b.autoAddCss&&!td&&(wk(Wm()),td=!0)}var Ck={mixout:function(){return{dom:{css:Wm,insertCss:ks}}},hooks:function(){return{beforeDOMElementCreation:function(){ks()},beforeI2svg:function(){ks()}}}},gt=Gt||{};gt[mt]||(gt[mt]={});gt[mt].styles||(gt[mt].styles={});gt[mt].hooks||(gt[mt].hooks={});gt[mt].shims||(gt[mt].shims=[]);var He=gt[mt],Vm=[],xk=function e(){Y.removeEventListener("DOMContentLoaded",e),co=1,Vm.map(function(t){return t()})},co=!1;_t&&(co=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),co||Y.addEventListener("DOMContentLoaded",xk));function Tk(e){_t&&(co?setTimeout(e,0):Vm.push(e))}function Di(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Hm(e):"<".concat(t," ").concat(kk(r),">").concat(a.map(Di).join(""),"</").concat(t,">")}function nd(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var bk=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Ss=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?bk(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function Pk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ol(e){var t=Pk(e);return t.length===1?t[0].toString(16):null}function Ok(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function rd(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Nl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=rd(t);typeof He.hooks.addPack=="function"&&!i?He.hooks.addPack(e,rd(t)):He.styles[e]=C(C({},He.styles[e]||{}),a),e==="fas"&&Nl("fa",t)}var la,ua,ca,Yn=He.styles,Nk=He.shims,Ak=(la={},ie(la,W,Object.values(yi[W])),ie(la,J,Object.values(yi[J])),la),Zu=null,Ym={},Km={},Gm={},Qm={},Xm={},Rk=(ua={},ie(ua,W,Object.keys(gi[W])),ie(ua,J,Object.keys(gi[J])),ua);function Lk(e){return~pk.indexOf(e)}function Dk(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Lk(i)?i:null}var qm=function(){var t=function(a){return Ss(Yn,function(o,s,l){return o[l]=Ss(s,a,{}),o},{})};Ym=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Km=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Xm=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Yn||b.autoFetchSvg,r=Ss(Nk,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Gm=r.names,Qm=r.unicodes,Zu=Lo(b.styleDefault,{family:b.familyDefault})};yk(function(e){Zu=Lo(e.styleDefault,{family:b.familyDefault})});qm();function ec(e,t){return(Ym[e]||{})[t]}function Mk(e,t){return(Km[e]||{})[t]}function dn(e,t){return(Xm[e]||{})[t]}function Jm(e){return Gm[e]||{prefix:null,iconName:null}}function zk(e){var t=Qm[e],n=ec("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qt(){return Zu}var tc=function(){return{prefix:null,iconName:null,rest:[]}};function Lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?W:n,i=gi[r][e],a=vi[r][e]||vi[r][i],o=e in He.styles?e:null;return a||o||null}var id=(ca={},ie(ca,W,Object.keys(yi[W])),ie(ca,J,Object.keys(yi[J])),ca);function Do(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ie(t,W,"".concat(b.cssPrefix,"-").concat(W)),ie(t,J,"".concat(b.cssPrefix,"-").concat(J)),t),o=null,s=W;(e.includes(a[W])||e.some(function(u){return id[W].includes(u)}))&&(s=W),(e.includes(a[J])||e.some(function(u){return id[J].includes(u)}))&&(s=J);var l=e.reduce(function(u,c){var d=Dk(b.cssPrefix,c);if(Yn[c]?(c=Ak[s].includes(c)?lk[s][c]:c,o=c,u.prefix=c):Rk[s].indexOf(c)>-1?(o=c,u.prefix=Lo(c,{family:s})):d?u.iconName=d:c!==b.replacementClass&&c!==a[W]&&c!==a[J]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Jm(u.iconName):{},g=dn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Yn.far&&Yn.fas&&!b.autoFetchSvg&&(u.prefix="fas")}return u},tc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(Yn.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=dn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qt()||"fas"),l}var Uk=function(){function e(){X_(this,e),this.definitions={}}return q_(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Nl(s,o[s]);var l=yi[W][s];l&&Nl(l,o[s]),qm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),e}(),ad=[],Kn={},ir={},Fk=Object.keys(ir);function jk(e,t){var n=t.mixoutsTo;return ad=e,Kn={},Object.keys(ir).forEach(function(r){Fk.indexOf(r)===-1&&delete ir[r]}),ad.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),uo(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Kn[o]||(Kn[o]=[]),Kn[o].push(a[o])})}r.provides&&r.provides(ir)}),n}function Al(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Kn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function xn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Kn[e]||[];i.forEach(function(a){a.apply(null,n)})}function vt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ir[e]?ir[e].apply(null,t):void 0}function Rl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qt();if(t)return t=dn(n,t)||t,nd(Zm.definitions,n,t)||nd(He.styles,n,t)}var Zm=new Uk,$k=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,xn("noAuto")},Bk={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _t?(xn("beforeI2svg",t),vt("pseudoElements2svg",t),vt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Tk(function(){Wk({autoReplaceSvgRoot:n}),xn("watch",t)})}},Hk={icon:function(t){if(t===null)return null;if(uo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Lo(t[0]);return{prefix:r,iconName:dn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(uk))){var i=Do(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Qt(),iconName:dn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Qt();return{prefix:a,iconName:dn(a,t)||t}}}},Ne={noAuto:$k,config:b,dom:Bk,parse:Hk,library:Zm,findIconDefinition:Rl,toHtml:Di},Wk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Y:n;(Object.keys(He.styles).length>0||b.autoFetchSvg)&&_t&&b.autoReplaceSvg&&Ne.dom.i2svg({node:r})};function Mo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Di(r)})}}),Object.defineProperty(e,"node",{get:function(){if(_t){var r=Y.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Vk(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ju(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Ro(C(C({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Yk(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:o}),children:r}]}]}function nc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,w=v.width,S=v.height,p=i==="fak",f=[b.replacementClass,a?"".concat(b.cssPrefix,"-").concat(a):""].filter(function(z){return d.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(d.classes).join(" "),m={children:[],attributes:C(C({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:f,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(S)})},y=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/S*16*.0625,"em")}:{};g&&(m.attributes[Cn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||_i())},children:[l]}),delete m.attributes.title);var k=C(C({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:C(C({},y),d.styles)}),E=r.found&&n.found?vt("generateAbstractMask",k)||{children:[],attributes:{}}:vt("generateAbstractIcon",k)||{children:[],attributes:{}},I=E.children,P=E.attributes;return k.children=I,k.attributes=P,s?Yk(k):Vk(k)}function od(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=C(C(C({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Cn]="");var c=C({},o.styles);Ju(i)&&(c.transform=Ek({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Ro(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Kk(e){var t=e.content,n=e.title,r=e.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ro(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Es=He.styles;function Ll(e){var t=e[0],n=e[1],r=e.slice(4),i=Yu(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(fn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(fn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(fn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Gk={found:!1,width:512,height:512};function Qk(e,t){!Fm&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Dl(e,t){var n=t;return t==="fa"&&b.styleDefault!==null&&(t=Qt()),new Promise(function(r,i){if(vt("missingIconAbstract"),n==="fa"){var a=Jm(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Es[t]&&Es[t][e]){var o=Es[t][e];return r(Ll(o))}Qk(e,t),r(C(C({},Gk),{},{icon:b.showMissingIcons&&e?vt("missingIconAbstract")||{}:{}}))})}var sd=function(){},Ml=b.measurePerformance&&na&&na.mark&&na.measure?na:{mark:sd,measure:sd},Dr='FA "6.4.2"',Xk=function(t){return Ml.mark("".concat(Dr," ").concat(t," begins")),function(){return eg(t)}},eg=function(t){Ml.mark("".concat(Dr," ").concat(t," ends")),Ml.measure("".concat(Dr," ").concat(t),"".concat(Dr," ").concat(t," begins"),"".concat(Dr," ").concat(t," ends"))},rc={begin:Xk,end:eg},Ta=function(){};function ld(e){var t=e.getAttribute?e.getAttribute(Cn):null;return typeof t=="string"}function qk(e){var t=e.getAttribute?e.getAttribute(Gu):null,n=e.getAttribute?e.getAttribute(Qu):null;return t&&n}function Jk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function Zk(){if(b.autoReplaceSvg===!0)return ba.replace;var e=ba[b.autoReplaceSvg];return e||ba.replace}function eS(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function tS(e){return Y.createElement(e)}function tg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?eS:tS:n;if(typeof e=="string")return Y.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(tg(o,{ceFn:r}))}),i}function nS(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ba={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(tg(i),n)}),n.getAttribute(Cn)===null&&b.keepOriginalSource){var r=Y.createComment(nS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~qu(n).indexOf(b.replacementClass))return ba.replace(t);var i=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===b.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Di(s)}).join(`
`);n.setAttribute(Cn,""),n.innerHTML=o}};function ud(e){e()}function ng(e,t){var n=typeof t=="function"?t:Ta;if(e.length===0)n();else{var r=ud;b.mutateApproach===ok&&(r=Gt.requestAnimationFrame||ud),r(function(){var i=Zk(),a=rc.begin("mutate");e.map(i),a(),n()})}}var ic=!1;function rg(){ic=!0}function zl(){ic=!1}var fo=null;function cd(e){if(Zf&&b.observeMutations){var t=e.treeCallback,n=t===void 0?Ta:t,r=e.nodeCallback,i=r===void 0?Ta:r,a=e.pseudoElementsCallback,o=a===void 0?Ta:a,s=e.observeMutationsRoot,l=s===void 0?Y:s;fo=new Zf(function(u){if(!ic){var c=Qt();yr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ld(d.addedNodes[0])&&(b.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&b.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ld(d.target)&&~hk.indexOf(d.attributeName))if(d.attributeName==="class"&&qk(d.target)){var h=Do(qu(d.target)),g=h.prefix,v=h.iconName;d.target.setAttribute(Gu,g||c),v&&d.target.setAttribute(Qu,v)}else Jk(d.target)&&i(d.target)})}}),_t&&fo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rS(){fo&&fo.disconnect()}function iS(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function aS(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Do(qu(e));return i.prefix||(i.prefix=Qt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Mk(i.prefix,e.innerText)||ec(i.prefix,Ol(e.innerText))),!i.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function oS(e){var t=yr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||_i()):(t["aria-hidden"]="true",t.focusable="false")),t}function sS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=aS(e),r=n.iconName,i=n.prefix,a=n.rest,o=oS(e),s=Al("parseNodeAttributes",{},e),l=t.styleParser?iS(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var lS=He.styles;function ig(e){var t=b.autoReplaceSvg==="nest"?fd(e,{styleParser:!1}):fd(e);return~t.extra.classes.indexOf(jm)?vt("generateLayersText",e,t):vt("generateSvgReplacementMutation",e,t)}var Xt=new Set;Xu.map(function(e){Xt.add("fa-".concat(e))});Object.keys(gi[W]).map(Xt.add.bind(Xt));Object.keys(gi[J]).map(Xt.add.bind(Xt));Xt=Ri(Xt);function dd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_t)return Promise.resolve();var n=Y.documentElement.classList,r=function(d){return n.add("".concat(ed,"-").concat(d))},i=function(d){return n.remove("".concat(ed,"-").concat(d))},a=b.autoFetchSvg?Xt:Xu.map(function(c){return"fa-".concat(c)}).concat(Object.keys(lS));a.includes("fa")||a.push("fa");var o=[".".concat(jm,":not([").concat(Cn,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Cn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=yr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=rc.begin("onTree"),u=s.reduce(function(c,d){try{var h=ig(d);h&&c.push(h)}catch(g){Fm||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){ng(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function uS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ig(e).then(function(n){n&&ng([n],t)})}function cS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Rl(i||{})),e(r,C(C({},n),{},{mask:i}))}}var fS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Je:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,g=n.titleId,v=g===void 0?null:g,w=n.classes,S=w===void 0?[]:w,p=n.attributes,f=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(t){var k=t.prefix,E=t.iconName,I=t.icon;return Mo(C({type:"icon"},t),function(){return xn("beforeDOMElementCreation",{iconDefinition:t,params:n}),b.autoA11y&&(h?f["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(v||_i()):(f["aria-hidden"]="true",f.focusable="false")),nc({icons:{main:Ll(I),mask:l?Ll(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:E,transform:C(C({},Je),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:f,styles:y,classes:S}})})}},dS={mixout:function(){return{icon:cS(fS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=dd,n.nodeCallback=uS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Y:r,a=n.callback,o=a===void 0?function(){}:a;return dd(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([Dl(i,s),c.iconName?Dl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var S=Yu(w,2),p=S[0],f=S[1];g([n,nc({icons:{main:p,mask:f},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Ro(s);l.length>0&&(i.style=l);var u;return Ju(o)&&(u=vt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},hS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Mo({type:"layer"},function(){xn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(Ri(a)).join(" ")},children:o}]})}}}},pS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Mo({type:"counter",content:n},function(){return xn("beforeDOMElementCreation",{content:n,params:r}),Kk({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(Ri(s))}})})}}}},mS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Je:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Mo({type:"text",content:n},function(){return xn("beforeDOMElementCreation",{content:n,params:r}),od({content:n,transform:C(C({},Je),a),title:s,extra:{attributes:d,styles:g,classes:["".concat(b.cssPrefix,"-layers-text")].concat(Ri(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Mm){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return b.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,od({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},gS=new RegExp('"',"ug"),hd=[1105920,1112319];function vS(e){var t=e.replace(gS,""),n=Ok(t,0),r=n>=hd[0]&&n<=hd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ol(i?t[0]:t),isSecondary:r||i}}function pd(e,t){var n="".concat(ak).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=yr(e.children),o=a.filter(function(I){return I.getAttribute(Pl)===t})[0],s=Gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ck),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?J:W,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?vi[h][l[2].toLowerCase()]:fk[h][u],v=vS(d),w=v.value,S=v.isSecondary,p=l[0].startsWith("FontAwesome"),f=ec(g,w),m=f;if(p){var y=zk(w);y.iconName&&y.prefix&&(f=y.iconName,g=y.prefix)}if(f&&!S&&(!o||o.getAttribute(Gu)!==g||o.getAttribute(Qu)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var k=sS(),E=k.extra;E.attributes[Pl]=t,Dl(f,g).then(function(I){var P=nc(C(C({},k),{},{icons:{main:I,mask:tc()},prefix:g,iconName:m,extra:E,watchable:!0})),z=Y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=P.map(function(R){return Di(R)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function yS(e){return Promise.all([pd(e,"::before"),pd(e,"::after")])}function wS(e){return e.parentNode!==document.head&&!~sk.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function md(e){if(_t)return new Promise(function(t,n){var r=yr(e.querySelectorAll("*")).filter(wS).map(yS),i=rc.begin("searchPseudoElements");rg(),Promise.all(r).then(function(){i(),zl(),t()}).catch(function(){i(),zl(),n()})})}var _S={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=md,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Y:r;b.searchPseudoElements&&md(i)}}},gd=!1,kS={mixout:function(){return{dom:{unwatch:function(){rg(),gd=!0}}}},hooks:function(){return{bootstrap:function(){cd(Al("mutationObserverCallbacks",{}))},noAuto:function(){rS()},watch:function(n){var r=n.observeMutationsRoot;gd?zl():cd(Al("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},SS={mixout:function(){return{parse:{transform:function(n){return vd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=vd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:C({},g.outer),children:[{tag:"g",attributes:C({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),g.path)}]}]}}}},Is={x:0,y:0,width:"100%",height:"100%"};function yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ES(e){return e.tag==="g"?e.children:[e]}var IS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Do(i.split(" ").map(function(o){return o.trim()})):tc();return a.prefix||(a.prefix=Qt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,d=o.width,h=o.icon,g=Sk({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:C(C({},Is),{},{fill:"white"})},w=c.children?{children:c.children.map(yd)}:{},S={tag:"g",attributes:C({},g.inner),children:[yd(C({tag:c.tag,attributes:C(C({},c.attributes),g.path)},w))]},p={tag:"g",attributes:C({},g.outer),children:[S]},f="mask-".concat(s||_i()),m="clip-".concat(s||_i()),y={tag:"mask",attributes:C(C({},Is),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:ES(h)},y]};return r.push(k,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(f,")")},Is)}),{children:r,attributes:i}}}},CS={provides:function(t){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},xS={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},TS=[Ck,dS,hS,pS,mS,_S,kS,SS,IS,CS,xS];jk(TS,{mixoutsTo:Ne});Ne.noAuto;Ne.config;Ne.library;Ne.dom;var Ul=Ne.parse;Ne.findIconDefinition;Ne.toHtml;var bS=Ne.icon;Ne.layer;Ne.text;Ne.counter;var ag={exports:{}},PS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",OS=PS,NS=OS;function og(){}function sg(){}sg.resetWarningCache=og;var AS=function(){function e(r,i,a,o,s,l){if(l!==NS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:sg,resetWarningCache:og};return n.PropTypes=n,n};ag.exports=AS();var RS=ag.exports;const D=kd(RS);function wd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Lt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wd(Object(n),!0).forEach(function(r){Gn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ho(e){"@babel/helpers - typeof";return ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ho(e)}function Gn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function LS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function DS(e,t){if(e==null)return{};var n=LS(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Fl(e){return MS(e)||zS(e)||US(e)||FS()}function MS(e){if(Array.isArray(e))return jl(e)}function zS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function US(e,t){if(e){if(typeof e=="string")return jl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jl(e,t)}}function jl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function FS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jS(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,w=e.listItem,S=e.flip,p=e.size,f=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Gn(t,"fa-".concat(p),typeof p<"u"&&p!==null),Gn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Gn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Gn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(k){return y[k]?k:null}).filter(function(k){return k})}function $S(e){return e=e-0,e===e}function lg(e){return $S(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var BS=["style"];function HS(e){return e.charAt(0).toUpperCase()+e.slice(1)}function WS(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=lg(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[HS(i)]=a:t[i]=a,t},{})}function ug(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ug(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=WS(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[lg(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=DS(n,BS);return i.attrs.style=Lt(Lt({},i.attrs.style),o),e.apply(void 0,[t.tag,Lt(Lt({},i.attrs),s)].concat(Fl(r)))}var cg=!1;try{cg=!0}catch{}function VS(){if(!cg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _d(e){if(e&&ho(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ul.icon)return Ul.icon(e);if(e===null)return null;if(e&&ho(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Cs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Gn({},e,t):{}}var gn=We.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=_d(n),c=Cs("classes",[].concat(Fl(jS(e)),Fl(a.split(" ")))),d=Cs("transform",typeof e.transform=="string"?Ul.transform(e.transform):e.transform),h=Cs("mask",_d(r)),g=bS(u,Lt(Lt(Lt(Lt({},c),d),h),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!g)return VS("Could not find icon",u),null;var v=g.abstract,w={ref:t};return Object.keys(e).forEach(function(S){gn.defaultProps.hasOwnProperty(S)||(w[S]=e[S])}),YS(v[0],w)});gn.displayName="FontAwesomeIcon";gn.propTypes={beat:D.bool,border:D.bool,beatFade:D.bool,bounce:D.bool,className:D.string,fade:D.bool,flash:D.bool,mask:D.oneOfType([D.object,D.array,D.string]),maskId:D.string,fixedWidth:D.bool,inverse:D.bool,flip:D.oneOf([!0,!1,"horizontal","vertical","both"]),icon:D.oneOfType([D.object,D.array,D.string]),listItem:D.bool,pull:D.oneOf(["right","left"]),pulse:D.bool,rotation:D.oneOf([0,90,180,270]),shake:D.bool,size:D.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:D.bool,spinPulse:D.bool,spinReverse:D.bool,symbol:D.oneOfType([D.bool,D.string]),title:D.string,titleId:D.string,transform:D.oneOfType([D.string,D.object]),swapOpacity:D.bool};gn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var YS=ug.bind(null,We.createElement);const KS=({todos:e,setTodos:t})=>{const[n,r]=F.useState([]),[i,a]=F.useState([]),o=(c,d)=>{const h=[...e];h[c].checked=d,t(h)},s=(c,d)=>{const h=[...e];console.log(h[c]),h[c].text=d,t(h)},l=c=>{const d=e.filter((h,g)=>g!==c);t(d)};F.useEffect(()=>{const c=e.filter(h=>h.checked);r(c);const d=e.filter(h=>!h.checked);a(d)},[e]);const u=[{title:"Remaining",count:i.length},{title:"Completed",count:n.length},{title:"Total",count:e.length}];return O.jsxs("section",{className:"font-poppins max-container max-sm:padding-x flex flex-col gap-5 min-h-screen items-center mt-[40px]",children:[O.jsx("div",{className:"flex justify-evenly max-sm:w-full max-sm:text-[10px] text-xs w-[450px]",children:u.map(c=>O.jsx("div",{children:O.jsxs("div",{className:" text-white font-semibold rounded-l-full flex items-center",children:[O.jsx("p",{className:"bg-dark-green px-4 max-sm:px-2 py-0.5 leading-normal rounded-l-full",children:c.title}),O.jsx("p",{className:"bg-light-yellow px-2 py-0.5 md:w-11 max-sm:px-2 leading-normal rounded-r-full text-black",children:c.count})]})},c.title))}),e.map((c,d)=>O.jsxs("div",{className:`${c.checked?"bg-yellow-green":"bg-light-yellow"} h-10 flex justify-between px-5 items-center w-[450px] max-sm:w-full shadow-sm rounded-full`,children:[O.jsx("div",{className:"cursor-pointer",onClick:()=>o(d,!c.checked),children:c.checked?O.jsx(gn,{icon:Q_}):O.jsx(gn,{icon:K_})}),O.jsx("input",{type:"text",value:c.text||"",onChange:h=>s(d,h.target.value),className:"bg-transparent w-[80%] h-7 outline-none"}),O.jsx(gn,{className:"cursor-pointer",onClick:()=>l(d),icon:G_})]},d))]})},GS=()=>O.jsx("div",{className:"font-poppins font-regular text-sm pt-16 p-3 flex justify-center items-end",children:O.jsx("p",{children:"Design and Code by BILU"})});function QS(){const[e,t]=F.useState(""),[n,r]=F.useState([]);return O.jsx(F_,{children:O.jsxs("div",{children:[O.jsx(Y_,{todo:e,setTodo:t,todos:n,setTodos:r}),O.jsx(KS,{todos:n,setTodos:r}),O.jsx(GS,{})]})})}xs.createRoot(document.getElementById("root")).render(O.jsx(We.StrictMode,{children:O.jsx(QS,{})}));
