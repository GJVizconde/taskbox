import{h as A,j as M,m as q,k as X,w as Y,r as Z,l as R,n as B,t as G,p as T,q as tt,s as et,u as st,v as nt,c as ot}from"./vue.esm-bundler-D5_F-1X6.js";var ct=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let D;const x=t=>D=t,J=Symbol();function N(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var w;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(w||(w={}));function bt(){const t=A(!0),c=t.run(()=>M({}));let s=[],e=[];const r=q({install(a){x(r),r._a=a,a.provide(J,r),a.config.globalProperties.$pinia=r,e.forEach(u=>s.push(u)),e=[]},use(a){return!this._a&&!ct?e.push(a):s.push(a),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const rt=()=>{};function F(t,c,s,e=rt){t.push(c);const r=()=>{const a=t.indexOf(c);a>-1&&(t.splice(a,1),e())};return!s&&tt()&&et(r),r}function j(t,...c){t.slice().forEach(s=>{s(...c)})}const ut=t=>t(),V=Symbol(),O=Symbol();function K(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];N(r)&&N(e)&&t.hasOwnProperty(s)&&!R(e)&&!B(e)?t[s]=K(r,e):t[s]=e}return t}const{assign:h}=Object;function at(t){return!!(R(t)&&t.effect)}function ft(t,c,s,e){const{state:r,actions:a,getters:u}=c,p=s.state.value[t];let S;function b(){p||(s.state.value[t]=r?r():{});const v=nt(s.state.value[t]);return h(v,a,Object.keys(u||{}).reduce((y,_)=>(y[_]=q(ot(()=>{x(s);const m=s._s.get(t);return u[_].call(m,m)})),y),{}))}return S=it(t,b,c,s,e,!0),S}function it(t,c,s={},e,r,a){let u;const p=h({actions:{}},s),S={deep:!0};let b,v,y=[],_=[],m;const I=e.state.value[t];M({});let k;function L(n){let o;b=v=!1,typeof n=="function"?(n(e.state.value[t]),o={type:w.patchFunction,storeId:t,events:m}):(K(e.state.value[t],n),o={type:w.patchObject,payload:n,storeId:t,events:m});const f=k=Symbol();st().then(()=>{k===f&&(b=!0)}),v=!0,j(y,o,e.state.value[t])}const $=function(){const{state:o}=s,f=o?o():{};this.$patch(d=>{h(d,f)})};function z(){u.stop(),y=[],_=[],e._s.delete(t)}const W=(n,o="")=>{if(V in n)return n[O]=o,n;const f=function(){x(e);const d=Array.from(arguments),P=[],E=[];function Q(i){P.push(i)}function U(i){E.push(i)}j(_,{args:d,name:f[O],store:l,after:Q,onError:U});let g;try{g=n.apply(this&&this.$id===t?this:l,d)}catch(i){throw j(E,i),i}return g instanceof Promise?g.then(i=>(j(P,i),i)).catch(i=>(j(E,i),Promise.reject(i))):(j(P,g),g)};return f[V]=!0,f[O]=o,f},H={_p:e,$id:t,$onAction:F.bind(null,_),$patch:L,$reset:$,$subscribe(n,o={}){const f=F(y,n,o.detached,()=>d()),d=u.run(()=>Y(()=>e.state.value[t],P=>{(o.flush==="sync"?v:b)&&n({storeId:t,type:w.direct,events:m},P)},h({},S,o)));return f},$dispose:z},l=Z(H);e._s.set(t,l);const C=(e._a&&e._a.runWithContext||ut)(()=>e._e.run(()=>(u=A()).run(()=>c({action:W}))));for(const n in C){const o=C[n];if(!(R(o)&&!at(o)||B(o))){if(typeof o=="function"){const f=W(o,n);C[n]=f,p.actions[n]=o}}}return h(l,C),h(G(l),C),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:n=>{L(o=>{h(o,n)})}}),e._p.forEach(n=>{h(l,u.run(()=>n({store:l,app:e._a,pinia:e,options:p})))}),I&&a&&s.hydrate&&s.hydrate(l.$state,I),b=!0,v=!0,l}function St(t,c,s){let e,r;typeof t=="string"?(e=t,r=c):(r=t,e=t.id);function a(u,p){const S=T();return u=u||(S?X(J,null):null),u&&x(u),u=D,u._s.has(e)||ft(e,r,u),u._s.get(e)}return a.$id=e,a}export{bt as c,St as d};
