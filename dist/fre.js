var fre=function(t){"use strict";function e(t,e){let n=e||{},r=n.key||null,o=[];for(let t=2;t<arguments.length;t++){let e=arguments[t];null===e||!0===e||!1===e||(e.pop||"object"==typeof e?o.push(e):"function"==typeof e?o=e:o.push({type:"text",props:{nodeValue:e}}))}return n.children=o,{type:t,props:n,key:r}}const n=t=>t?Array.isArray(t)?t:[t]:[],r=(t,e)=>t.type===e.type,o=(t,e)=>n=>"children"!==n&&"key"!==n&&t[n]!==e[n];function c(t,e){let n={};for(const e in t)n[e]=t[e];for(const t in e)n[t]=e[t];return n}const l=requestAnimationFrame||setTimeout,i=t=>"function"==typeof t;function s(t,e,n,r){if("style"===e)for(key in r){let n=r&&r[key]?r[key]:"";t[e][key]=n}else"o"===e[0]&&"n"===e[1]?(e=e.slice(2).toLowerCase(),n&&t.removeEventListener(e,n),t.addEventListener(e,r)):t.setAttribute(e,r)}function u(t,e,n){Object.keys(n).filter(o(e,n)).forEach(r=>{"value"===r||"nodeValue"===r?t[r]=n[r]:s(t,r,e[r],n[r])})}let a=0;function p(t,e,n){const r=this?this:q();n=e?e(r.state[t],n):n,r.state[t]=n,M(r)}function f(t){return h(null,t)}function h(t,e){let n=q();if(!n)return[e,o];let r="$"+a,o=p.bind(n,r,t);a++;let c=n.state||{};return r in c?[c[r],o]:(n.state[r]=e,[e,o])}function d(t,e){return y(()=>t,e)}function y(t,e){let n=q();if(n){let r=!e||(n.oldInputs||[]).some((t,n)=>e[n]!==t);if(!e||e.length||n.isMounted||(r=!0,n.isMounted=!0),n.oldInputs=e,r)return t()}}const b={},g=1e3/60,[m,k,E,T,x,C]=[0,1,2,3,4,5];let v=[],P=null,w=null,A=null,L=!0;function M(t){v.push(t),P||(P=v.shift(),l(W))}function W(t=0){if(t&&performance.now()-t>g)l(W);else{const t=performance.now();(P=function(t){if(t.tag==k?function(t){t.props=t.props||{},t.state=t.state||{},A=t,a=0;const e=t.type(t.props);I(t,e),A.patches=t.patches}(t):function(t){b.end||t.base||(t.base=function(t){const e="text"===t.type?document.createTextNode(""):document.createElement(t.type);return u(e,[],t.props),e}(t));let e=t.parent||{};t.insertPoint=e.oldPoint,e.oldPoint=t;const n=t.props.children;I(t,n)}(t),t.child)return t.child;for(;t;){if(V(t),t.sibling)return t.sibling;t=t.parent}}(P))?W(t):b.commitWork?b.commitWork(w):(w.patches.forEach(t=>(function(t){let e=t.parent;for(;e.tag==k;)e=e.parent;const n=e.base;let r=t.base||t.child.base;switch(t.patchTag){case x:u(r,t.alternate.props,t.props);break;case C:n.removeChild(r);break;default:const e=t.insertPoint;let o=e?e.base:null,c=o?o.nextSibling:n.firstChild;if(c==r)return;if(null===c&&r===n.lastChild)return;L&&(c=null),n.insertBefore(r,c)}e.patches=[],t.patches=[]})(t)),L=!1,P=null,w=null)}}function j(t,e){return e.children=function(t){let e={},r=0,o=0;return n(t).forEach(t=>{t.pop?(t.forEach(t=>{let n=((t||{}).props||{}).key;n?e["."+r+"."+n]=t:(e["."+r+"."+o]=t)&&o++}),r++):(e["."+r]=t)&&r++}),e}(t,e.children)}function I(t,e){const n=t.children,o=j(e,t);let l={};for(let e in n){let c=o[e],i=n[e];c&&r(c,i)?l[e]=i:(i.patchTag=C,t.patches.push(i))}let i=null,s=null;for(let e in o){let n=o[e],r=l[e];r?(s=S(r,{patchTag:x}),b.end||(n.patchTag=x),(n=c(s,n)).alternate=s,r.key&&(n.patchTag=T)):n=S(n,{patchTag:T}),o[e]=n,n.parent=t,i?i.sibling=n:(t.child=n,n.oldPoint=null),i=n}i&&(i.sibling=null)}function S(t,e){return e.tag=i(t.type)?k:m,t.props=t.props,c(t,e)}function V(t){!b.end&&t.parent?t.parent.patches=(t.parent.patches||[]).concat(t.patches||[],t.patchTag?[t]:[]):w=t}function q(){return A||null}return t.createContext=function(t={}){let e={};return{context:t,update:t=>{for(let n in e)e[n](t)},subscribe:(t,n)=>{n in e||(e[n]=t)},set:e}},t.createElement=e,t.h=e,t.options=b,t.render=function(t,e){M({tag:E,base:e,props:{children:t}})},t.scheduleWork=M,t.useCallback=d,t.useContext=function(t){const[e,n]=f(t.context),r=q().type.name;return t.subscribe(n,r),[e,t.update]},t.useEffect=function(t,e){let n=q();n&&(n.effect=d(t,e))},t.useMemo=y,t.useReducer=h,t.useState=f,t}({});
//# sourceMappingURL=fre.js.map