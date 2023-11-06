var oB=Object.defineProperty;var GB=(Q,A,I)=>A in Q?oB(Q,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):Q[A]=I;var wA=(Q,A,I)=>(GB(Q,typeof A!="symbol"?A+"":A,I),I);import{f as aA,s as EA,c as KA,u as hA,g as JA,d as UA,e as _A,h as NA,i as AA,j as Bg,o as oI,k as ng,l as dg,m as Tg,p as oC,t as Qg,q as wB,b as eI,r as kB,n as rI,v as Eg}from"../chunks/scheduler.2a8ea999.js";import{S as iA,i as DA,d as Y,t as H,r as j,u as m,v as x,w as X,s as ZA,e as FI,c as bA,a as FA,b as $A,f as GA,p as AI,g as GC,h as wC,j as kC,k as SC,z as ig}from"../chunks/index.c674da3d.js";import{w as yA,d as Dg,r as aC}from"../chunks/index.5622c019.js";import{R as SB,a as aB,C as yB,S as MB,W as KB,f as Og,P as yC,s as hB,L as Zg,g as JB,T as UB,V as gA,h as MC,c as KC,i as aI,j as NB,U as FB,B as sB,k as hC,e as bg,l as qB,H as RB,m as cB,n as YB,O as JC,Q as fA,E as UC,G as lB}from"../chunks/three.module.1f5a1d46.js";import{t as og,a as LB,m as tB,b as HB}from"../chunks/colors.ca018d01.js";const eB=()=>aA("threlte-internal-context");function rB(Q){let A;const I=Q[9].default,g=KA(I,Q,Q[8],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,[B]){g&&g.p&&(!A||B&256)&&hA(g,I,C,C[8],A?UA(I,C[8],B,null):JA(C[8]),null)},i(C){A||(Y(g,C),A=!0)},o(C){H(g,C),A=!1},d(C){g&&g.d(C)}}}const fg="threlte-disposable-object-context";function pB(Q,A,I){let g,C,{$$slots:B={},$$scope:E}=A;const{collectDisposableObjects:D,addDisposableObjects:o,removeDisposableObjects:G}=eB();let{object:w=void 0}=A,a=w,{dispose:S=void 0}=A;const K=aA(fg);_A(Q,K,F=>I(7,C=F));const h=yA(S??C??!0);_A(Q,h,F=>I(6,g=F)),NA(fg,h);let J=g?D(w):[];return o(J),AA(()=>{G(J)}),Q.$$set=F=>{"object"in F&&I(2,w=F.object),"dispose"in F&&I(3,S=F.dispose),"$$scope"in F&&I(8,E=F.$$scope)},Q.$$.update=()=>{Q.$$.dirty&136&&h.set(S??C??!0),Q.$$.dirty&116&&w!==a&&(G(J),I(5,J=g?D(w):[]),o(J),I(4,a=w))},[K,h,w,S,a,J,g,C,E,B]}class nB extends iA{constructor(A){super(),DA(this,A,pB,rB,EA,{object:2,dispose:3})}}function dB(Q,A){const I=yA(Q);let g=Q;const C=I.subscribe(D=>g=D);return AA(C),{...I,set:D=>{if((D==null?void 0:D.uuid)===(g==null?void 0:g.uuid))return;const o=g;I.set(D),A==null||A(D,o)},update:D=>{const o=D(g);if((o==null?void 0:o.uuid)===(g==null?void 0:g.uuid))return;const G=g;I.set(o),A==null||A(o,G)}}}const GI=()=>{const Q=aA("threlte");if(Q===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return Q},TB=()=>aA("threlte-hierarchical-parent-context");function OB(Q){let A;const I=Q[8].default,g=KA(I,Q,Q[7],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,[B]){g&&g.p&&(!A||B&128)&&hA(g,I,C,C[7],A?UA(I,C[7],B,null):JA(C[7]),null)},i(C){A||(Y(g,C),A=!0)},o(C){H(g,C),A=!1},d(C){g&&g.d(C)}}}const ZB=()=>({onChildMount:aA("threlte-hierarchical-object-on-mount"),onChildDestroy:aA("threlte-hierarchical-object-on-destroy")});function bB(Q,A,I){var c;let g,{$$slots:C={},$$scope:B}=A,{object:E=void 0}=A,{children:D=[]}=A,{onChildMount:o=void 0}=A;const G=N=>{D.push(N),I(1,D),o==null||o(N)};let{onChildDestroy:w=void 0}=A;const a=N=>{const r=D.findIndex(L=>L.uuid===N.uuid);r!==-1&&D.splice(r,1),I(1,D),w==null||w(N)},{invalidate:S}=GI(),K=TB();_A(Q,K,N=>I(6,g=N));let{parent:h=g}=A;const J=ZB();E&&((c=J.onChildMount)==null||c.call(J,E),S("HierarchicalObject: object added"));const F=dB(E,(N,r)=>{var L,U;r&&((L=J.onChildDestroy)==null||L.call(J,r),S("HierarchicalObject: object added")),N&&((U=J.onChildMount)==null||U.call(J,N),S("HierarchicalObject: object removed"))});return AA(()=>{var N;E&&((N=J.onChildDestroy)==null||N.call(J,E),S("HierarchicalObject: object removed"))}),NA("threlte-hierarchical-object-on-mount",G),NA("threlte-hierarchical-object-on-destroy",a),NA("threlte-hierarchical-parent-context",F),Q.$$set=N=>{"object"in N&&I(3,E=N.object),"children"in N&&I(1,D=N.children),"onChildMount"in N&&I(4,o=N.onChildMount),"onChildDestroy"in N&&I(5,w=N.onChildDestroy),"parent"in N&&I(2,h=N.parent),"$$scope"in N&&I(7,B=N.$$scope)},Q.$$.update=()=>{Q.$$.dirty&64&&I(2,h=g),Q.$$.dirty&8&&F.set(E)},[K,D,h,E,o,w,g,B,C]}class fB extends iA{constructor(A){super(),DA(this,A,bB,OB,EA,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function WB(Q){let A;const I=Q[1].default,g=KA(I,Q,Q[4],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&16)&&hA(g,I,C,C[4],A?UA(I,C[4],B,null):JA(C[4]),null)},i(C){A||(Y(g,C),A=!0)},o(C){H(g,C),A=!1},d(C){g&&g.d(C)}}}function jB(Q){let A,I;return A=new fB({props:{object:Q[0],onChildMount:Q[2],onChildDestroy:Q[3],$$slots:{default:[WB]},$$scope:{ctx:Q}}}),{c(){j(A.$$.fragment)},l(g){m(A.$$.fragment,g)},m(g,C){x(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B.object=g[0]),C&1&&(B.onChildMount=g[2]),C&1&&(B.onChildDestroy=g[3]),C&16&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(Y(A.$$.fragment,g),I=!0)},o(g){H(A.$$.fragment,g),I=!1},d(g){X(A,g)}}}function mB(Q,A,I){let{$$slots:g={},$$scope:C}=A,{object:B}=A;const E=o=>B.add(o),D=o=>B.remove(o);return Q.$$set=o=>{"object"in o&&I(0,B=o.object),"$$scope"in o&&I(4,C=o.$$scope)},[B,g,E,D,C]}class Gg extends iA{constructor(A){super(),DA(this,A,mB,jB,EA,{object:0})}}const NC=(Q,A)=>{if(A.includes(".")){const I=A.split("."),g=I.pop();for(let C=0;C<I.length;C+=1)Q=Q[I[C]];return{target:Q,key:g}}else return{target:Q,key:A}},xI=Symbol("initialValueBeforeAttach"),xB=()=>{const{invalidate:Q}=GI();let A=!1,I=xI,g,C,B;const E=(o,G,w)=>{if(D(),!w){const a=o;((a==null?void 0:a.isMaterial)||!1)&&(w="material"),((a==null?void 0:a.isBufferGeometry)||(a==null?void 0:a.isGeometry)||!1)&&(w="geometry")}if(w){if(typeof w=="function")g=w(G,o);else{const{target:a,key:S}=NC(G,w);I=a[S],a[S]=o,C=a,B=S}A=!0,Q()}},D=()=>{A&&(g?(g(),g=void 0):C&&B&&I!==xI&&(C[B]=I,I=xI,C=void 0,B=void 0),A=!1,Q())};return AA(()=>{D()}),{update:E}},XB=Q=>Q&&Q.isCamera,FC=Q=>Q&&Q.isOrthographicCamera,sC=Q=>Q&&Q.isPerspectiveCamera,uB=Q=>sC(Q)||FC(Q),PB=()=>{const{invalidate:Q,size:A,camera:I}=GI();let g,C;AA(()=>{C==null||C()});const B=o=>{g&&(FC(g)?(g.left=o.width/-2,g.right=o.width/2,g.top=o.height/2,g.bottom=o.height/-2,g.updateProjectionMatrix(),g.updateMatrixWorld(),Q()):sC(g)&&(g.aspect=o.width/o.height,g.updateProjectionMatrix(),g.updateMatrixWorld(),Q()))};return{update:(o,G)=>{if(C==null||C(),G||!uB(o)){g=void 0;return}g=o,C=A.subscribe(B)},makeDefaultCamera:(o,G)=>{!XB(o)||!G||(I.set(o),Q())}}},pI=()=>{const Q=Bg(),A=(g,C)=>{const B=Q.$$.callbacks[g];B&&B.forEach(E=>{E(C)})};return Object.defineProperty(A,"hasEventListener",{value:g=>!!Q.$$.callbacks[g],enumerable:!0}),A},VB=()=>{const Q=pI(),A=[];let I,g=!1;const C=()=>{A.forEach(D=>D()),A.length=0,Q("create",{ref:I,cleanup:D=>{A.push(D)}})},B=E=>{I=E,g&&C()};return oI(()=>{C(),g=!0}),AA(()=>{A.forEach(E=>E())}),{updateRef:B}},Wg=Q=>!!(Q!=null&&Q.addEventListener),zB=()=>{const Q=pI(),A=Bg(),I=S=>{S!=null&&S.type&&Q(S.type,S)},g=(S,K)=>{Wg(S)&&K.forEach(h=>{S.removeEventListener(h,I)})},C=(S,K)=>{Wg(S)&&K.forEach(h=>{S.addEventListener(h,I)})};let B=[],E;const D=yA([]),o=D.subscribe(S=>{g(E,B),C(E,S),B=S});AA(o);const G=yA(),w=G.subscribe(S=>{g(E,B),C(S,B),E=S});return AA(w),AA(()=>{g(E,B)}),oI(()=>{D.set(Object.keys(A.$$.callbacks))}),{updateRef:S=>{G.set(S)}}},vB=Q=>{const I=aA("threlte-plugin-context");if(!I)return;const g=Object.values(I).map(G=>G(Q)).filter(Boolean),C=g.flatMap(G=>G.pluginProps??[]);let B=[];return AA(()=>{B.forEach(G=>G())}),{updateRef:G=>{B.forEach(w=>w()),B=[],g.forEach(w=>{var S;const a=(S=w.onRefChange)==null?void 0:S.call(w,G);a&&B.push(a)})},updateProps:G=>{g.forEach(w=>{var a;(a=w.onPropsChange)==null||a.call(w,G)})},updateRestProps:G=>{g.forEach(w=>{var a;(a=w.onRestPropsChange)==null||a.call(w,G)})},pluginsProps:C}},_B=new Set(["$$scope","$$slots","type","args","attach","instance"]),$B=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),AQ=Q=>typeof Q=="string"||typeof Q=="number"||typeof Q=="boolean"||typeof Q>"u"||Q===null,IQ=()=>{const{invalidate:Q}=GI(),A=new Map,I=(C,B,E,D)=>{var w,a;if(AQ(E)){const S=A.get(B);if(S&&S.instance===C&&S.value===E)return;A.set(B,{instance:C,value:E})}const{key:o,target:G}=NC(C,B);if(!Array.isArray(E)&&typeof E=="number"&&typeof((w=G[o])==null?void 0:w.setScalar)=="function")G[o].setScalar(E);else if(typeof((a=G[o])==null?void 0:a.set)=="function")Array.isArray(E)?G[o].set(...E):G[o].set(E);else{if(G[o]=E,D.manualCamera)return;$B.has(o)&&(G.isPerspectiveCamera||G.isOrthographicCamera)&&G.updateProjectionMatrix()}};return{updateProps:(C,B,E)=>{var D;for(const o in B)!_B.has(o)&&!((D=E.pluginsProps)!=null&&D.includes(o))&&I(C,o,B[o],E),Q()}}},gQ=Q=>({ref:Q&2}),jg=Q=>({ref:Q[1]}),CQ=Q=>({ref:Q&2}),mg=Q=>({ref:Q[1]});function xg(Q){let A,I;return A=new nB({props:{object:Q[1],dispose:Q[0]}}),{c(){j(A.$$.fragment)},l(g){m(A.$$.fragment,g)},m(g,C){x(A,g,C),I=!0},p(g,C){const B={};C&2&&(B.object=g[1]),C&1&&(B.dispose=g[0]),A.$set(B)},i(g){I||(Y(A.$$.fragment,g),I=!0)},o(g){H(A.$$.fragment,g),I=!1},d(g){X(A,g)}}}function BQ(Q){let A;const I=Q[12].default,g=KA(I,Q,Q[13],jg);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&8194)&&hA(g,I,C,C[13],A?UA(I,C[13],B,gQ):JA(C[13]),jg)},i(C){A||(Y(g,C),A=!0)},o(C){H(g,C),A=!1},d(C){g&&g.d(C)}}}function QQ(Q){let A,I;return A=new Gg({props:{object:Q[1],$$slots:{default:[EQ]},$$scope:{ctx:Q}}}),{c(){j(A.$$.fragment)},l(g){m(A.$$.fragment,g)},m(g,C){x(A,g,C),I=!0},p(g,C){const B={};C&2&&(B.object=g[1]),C&8194&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(Y(A.$$.fragment,g),I=!0)},o(g){H(A.$$.fragment,g),I=!1},d(g){X(A,g)}}}function EQ(Q){let A;const I=Q[12].default,g=KA(I,Q,Q[13],mg);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&8194)&&hA(g,I,C,C[13],A?UA(I,C[13],B,CQ):JA(C[13]),mg)},i(C){A||(Y(g,C),A=!0)},o(C){H(g,C),A=!1},d(C){g&&g.d(C)}}}function iQ(Q){let A=Q[4](Q[1]),I,g,C,B,E,D,o=A&&xg(Q);const G=[QQ,BQ],w=[];function a(S,K){return K&2&&(g=null),g==null&&(g=!!S[3](S[1])),g?0:1}return C=a(Q,-1),B=w[C]=G[C](Q),{c(){o&&o.c(),I=ZA(),B.c(),E=FI()},l(S){o&&o.l(S),I=bA(S),B.l(S),E=FI()},m(S,K){o&&o.m(S,K),FA(S,I,K),w[C].m(S,K),FA(S,E,K),D=!0},p(S,[K]){K&2&&(A=S[4](S[1])),A?o?(o.p(S,K),K&2&&Y(o,1)):(o=xg(S),o.c(),Y(o,1),o.m(I.parentNode,I)):o&&(AI(),H(o,1,1,()=>{o=null}),$A());let h=C;C=a(S,K),C===h?w[C].p(S,K):(AI(),H(w[h],1,1,()=>{w[h]=null}),$A(),B=w[C],B?B.p(S,K):(B=w[C]=G[C](S),B.c()),Y(B,1),B.m(E.parentNode,E))},i(S){D||(Y(o),Y(B),D=!0)},o(S){H(o),H(B),D=!1},d(S){S&&(GA(I),GA(E)),o&&o.d(S),w[C].d(S)}}}function DQ(Q,A,I){const g=["is","args","attach","manual","makeDefault","dispose","ref"];let C=ng(A,g),B,{$$slots:E={},$$scope:D}=A,{is:o}=A,{args:G=void 0}=A,{attach:w=void 0}=A,{manual:a=void 0}=A,{makeDefault:S=void 0}=A,{dispose:K=void 0}=A;const h=aA("threlte-hierarchical-parent-context");_A(Q,h,q=>I(11,B=q));const J=q=>typeof q=="function"&&/^\s*class\s+/.test(q.toString()),F=q=>Array.isArray(q),c=VB();let N=J(o)&&F(G)?new o(...G):J(o)?new o:o;c.updateRef(N);let r=!1;const L=()=>{if(!r){r=!0;return}I(1,N=J(o)&&F(G)?new o(...G):J(o)?new o:o),c.updateRef(N)};let{ref:U=N}=A;const O=yA(N);NA("threlte-hierarchical-parent-context",O);const s=vB({ref:N,props:A}),l=(s==null?void 0:s.pluginsProps)??[],W=IQ(),d=PB(),BA=xB(),b=zB(),e=q=>!!q.isObject3D,jA=q=>q.dispose!==void 0;return Q.$$set=q=>{I(27,A=dg(dg({},A),Tg(q))),I(26,C=ng(A,g)),"is"in q&&I(6,o=q.is),"args"in q&&I(7,G=q.args),"attach"in q&&I(8,w=q.attach),"manual"in q&&I(9,a=q.manual),"makeDefault"in q&&I(10,S=q.makeDefault),"dispose"in q&&I(0,K=q.dispose),"ref"in q&&I(5,U=q.ref),"$$scope"in q&&I(13,D=q.$$scope)},Q.$$.update=()=>{Q.$$.dirty&192&&L(),Q.$$.dirty&2&&I(5,U=N),Q.$$.dirty&2&&O.set(N),W.updateProps(N,C,{manualCamera:a,pluginsProps:l}),Q.$$.dirty&514&&d.update(N,a),Q.$$.dirty&1026&&d.makeDefaultCamera(N,S),Q.$$.dirty&2306&&BA.update(N,B,w),Q.$$.dirty&2&&b.updateRef(N),Q.$$.dirty&2&&(s==null||s.updateRef(N)),s==null||s.updateProps(A),s==null||s.updateRestProps(C)},A=Tg(A),[K,N,h,e,jA,U,o,G,w,a,S,B,E,D]}let wg=class extends iA{constructor(A){super(),DA(this,A,DQ,iQ,EA,{is:6,args:7,attach:8,manual:9,makeDefault:10,dispose:0,ref:5})}};const kg=typeof window<"u",oQ=()=>{const Q=yA({width:0,height:0});if(!kg)return{parentSize:Q,parentSizeAction:()=>{}};const A={childList:!0,subtree:!1,attributes:!1};let I;const g=D=>{C.disconnect(),B.disconnect(),C.observe(D),B.observe(D,A)},C=new ResizeObserver(([D])=>{const{contentRect:o}=D;Q.set({width:o.width,height:o.height})}),B=new MutationObserver(D=>{for(const o of D)for(const G of o.removedNodes)if(I===G&&I.parentElement){g(I.parentElement);return}}),E=D=>{I=D,I.parentElement&&g(I.parentElement)};return AA(()=>{C.disconnect(),B.disconnect()}),{parentSize:Q,parentSizeAction:E}},MI=Number.parseInt(SB.replace("dev","")),GQ=()=>{NA("threlte-cache",[])},qC=Q=>Q.userData,HA=(Q,A)=>{const I=Dg(Q,B=>B);let g;const C=I.subscribe(async B=>{g&&g();const E=await A(B);E&&(g=E)});AA(()=>{C(),g&&g()})},lA=Q=>{const A=yA(Q),I={set:g=>{I.current=g,A.set(g)},subscribe:A.subscribe,update:g=>{const C=g(I.current);I.current=C,A.set(C)},current:Q};return I},wQ=()=>{const Q=new aB(75,0,.1,1e3);return qC(Q).threlteDefaultCamera=!0,Q.position.z=5,Q.lookAt(0,0,0),Q},kQ=Q=>{HA(Q.size,A=>{qC(oC(Q.camera)).threlteDefaultCamera&&Q.camera.update(I=>{const g=I;return g.aspect=A.width/A.height,g.updateProjectionMatrix(),Q.invalidate("Default camera: aspect ratio changed"),g})})},SQ=Q=>{const A={debugFrameloop:Q.debugFrameloop,frame:0,frameInvalidated:!0,invalidations:{},manualFrameHandlers:new Set,autoFrameHandlers:new Set,allFrameHandlers:new Set,allFrameHandlersNeedSortCheck:!1,renderHandlers:new Set,renderHandlersNeedSortCheck:!1,advance:!1,dispose:async(E=!1)=>{await Qg(),!(!A.shouldDispose&&!E)&&(A.disposableObjects.forEach((D,o)=>{var G;(D===0||E)&&((G=o==null?void 0:o.dispose)==null||G.call(o),A.disposableObjects.delete(o))}),A.shouldDispose=!1)},collectDisposableObjects:(E,D)=>{const o=D??[];return E&&(E!=null&&E.dispose&&typeof E.dispose=="function"&&E.type!=="Scene"&&o.push(E),Object.entries(E).forEach(([G,w])=>{if(G==="parent"||G==="children"||typeof w!="object")return;const a=w;a!=null&&a.dispose&&A.collectDisposableObjects(a,o)})),o},addDisposableObjects:E=>{E.forEach(D=>{const o=A.disposableObjects.get(D);o?A.disposableObjects.set(D,o+1):A.disposableObjects.set(D,1)})},removeDisposableObjects:E=>{E.length!==0&&(E.forEach(D=>{const o=A.disposableObjects.get(D);o&&o>0&&A.disposableObjects.set(D,o-1)}),A.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},I={size:Dg([Q.userSize,Q.parentSize],([E,D])=>E||D),clock:new yB,camera:lA(wQ()),scene:new MB,renderer:void 0,invalidate:E=>{A.frameInvalidated=!0,A.debugFrameloop&&E&&(A.invalidations[E]=A.invalidations[E]?A.invalidations[E]+1:1)},advance:()=>{A.advance=!0},colorSpace:lA(Q.colorSpace),toneMapping:lA(Q.toneMapping),dpr:lA(Q.dpr),useLegacyLights:lA(Q.useLegacyLights),shadows:lA(Q.shadows),colorManagementEnabled:lA(Q.colorManagementEnabled),frameloop:lA(Q.frameloop)},g=lA({});return NA("threlte",I),NA("threlte-internal-context",A),NA("threlte-user-context",g),{ctx:I,internalCtx:A,getCtx:()=>I,getInternalCtx:()=>A}},aQ=(Q,A,I)=>{if(A.allFrameHandlers.size!==0){if(A.allFrameHandlersNeedSortCheck){const g=Array.from(A.allFrameHandlers);if(g.some(B=>B.order)){const B=g.sort((E,D)=>(E.order??0)>(D.order??0)?1:-1);A.allFrameHandlers.clear(),B.forEach(E=>A.allFrameHandlers.add(E))}A.allFrameHandlersNeedSortCheck=!1}if(A.debugFrameloop){let g=0;A.autoFrameHandlers.forEach(C=>{C.debugFrameloopMessage?A.invalidations[C.debugFrameloopMessage]=C.debugFrameloopMessage in A.invalidations?A.invalidations[C.debugFrameloopMessage]+1:1:++g}),g>0&&(A.invalidations.useFrame=A.autoFrameHandlers.size)}A.allFrameHandlers.forEach(g=>g.fn(Q,I))}},yQ=(Q,A,I)=>{if(A.renderHandlers.size!==0){if(A.renderHandlersNeedSortCheck){const g=Array.from(A.renderHandlers);if(g.some(B=>B.order)){const B=g.sort((E,D)=>(E.order??0)>(D.order??0)?1:-1);A.renderHandlers.clear(),B.forEach(E=>A.renderHandlers.add(E))}A.renderHandlersNeedSortCheck=!1}A.renderHandlers.forEach(g=>g.fn(Q,I))}},MQ=Q=>{Q.debugFrameloop&&(Q.frame+=1,console.log(`frame: ${Q.frame}${Object.keys(Q.invalidations).length>0?", requested by ↴":""}`),Object.keys(Q.invalidations).length>0&&console.table(Q.invalidations),Q.invalidations={})},KQ=(Q,A)=>Q.frameloop.current==="always"||Q.frameloop.current==="demand"&&(A.frameInvalidated||A.autoFrameHandlers.size>0)||Q.frameloop.current==="never"&&A.advance,hQ=(Q,A)=>{Q.renderer.setAnimationLoop(()=>{A.dispose();const I=Q.clock.getDelta();aQ(Q,A,I),KQ(Q,A)&&(A.renderHandlers.size>0?yQ(Q,A,I):Q.camera.current&&Q.renderer.render(Q.scene,Q.camera.current),MQ(A),A.frameInvalidated=!1,A.advance=!1)})},JQ={srgb:hB,"srgb-linear":Zg,"":Zg},UQ=Q=>Q.outputColorSpace!==void 0,NQ=Q=>{const A=yA(void 0),I=(g,C)=>{Q.renderer=new KB({powerPreference:"high-performance",canvas:g,antialias:!0,alpha:!0,...C}),A.set(Q.renderer)};return HA([Q.colorManagementEnabled],([g])=>{MI>=150?Og.enabled=g:Og.legacyMode=!g}),HA([A,Q.colorSpace],([g,C])=>{if(g)if(UQ(g))g.outputColorSpace=C;else{const B=JQ[C];B?g.outputEncoding=B:console.warn("No encoding found for colorSpace",C)}}),HA([A,Q.dpr],([g,C])=>{g==null||g.setPixelRatio(C)}),HA([A,Q.size],([g,C])=>{var B;(B=g==null?void 0:g.xr)!=null&&B.isPresenting||g==null||g.setSize(C.width,C.height)}),HA([A,Q.shadows],([g,C])=>{g&&(g.shadowMap.enabled=!!C,C&&C!==!0?g.shadowMap.type=C:C===!0&&(g.shadowMap.type=yC))}),HA([A,Q.toneMapping],([g,C])=>{g&&(g.toneMapping=C)}),HA([A,Q.useLegacyLights],([g,C])=>{g&&(MI>=150&&C?g.useLegacyLights=C:MI<150&&(g.physicallyCorrectLights=!C))}),{createRenderer:I}};function Xg(Q){let A,I;return A=new wg({props:{is:Q[0].ctx.scene,$$slots:{default:[FQ]},$$scope:{ctx:Q}}}),{c(){j(A.$$.fragment)},l(g){m(A.$$.fragment,g)},m(g,C){x(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.is=g[0].ctx.scene),C&131072&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(Y(A.$$.fragment,g),I=!0)},o(g){H(A.$$.fragment,g),I=!1},d(g){X(A,g)}}}function FQ(Q){let A;const I=Q[15].default,g=KA(I,Q,Q[17],null);return{c(){g&&g.c()},l(C){g&&g.l(C)},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&131072)&&hA(g,I,C,C[17],A?UA(I,C[17],B,null):JA(C[17]),null)},i(C){A||(Y(g,C),A=!0)},o(C){H(g,C),A=!1},d(C){g&&g.d(C)}}}function sQ(Q){let A,I,g,C,B=Q[2]&&Xg(Q);return{c(){A=GC("canvas"),B&&B.c(),this.h()},l(E){A=wC(E,"CANVAS",{class:!0});var D=kC(A);B&&B.l(D),D.forEach(GA),this.h()},h(){SC(A,"class","svelte-o3oskp")},m(E,D){FA(E,A,D),B&&B.m(A,null),Q[16](A),I=!0,g||(C=wB(Q[3].call(null,A)),g=!0)},p(E,[D]){E[2]?B?(B.p(E,D),D&4&&Y(B,1)):(B=Xg(E),B.c(),Y(B,1),B.m(A,null)):B&&(AI(),H(B,1,1,()=>{B=null}),$A())},i(E){I||(Y(B),I=!0)},o(E){H(B),I=!1},d(E){E&&GA(A),B&&B.d(),Q[16](null),g=!1,C()}}}const ug=new Set;function qQ(Q,A,I){let{$$slots:g={},$$scope:C}=A,{colorManagementEnabled:B=!0}=A,{colorSpace:E="srgb"}=A,{debugFrameloop:D=!1}=A,{dpr:o=kg?window.devicePixelRatio:1}=A,{frameloop:G="demand"}=A,{rendererParameters:w=void 0}=A,{shadows:a=yC}=A,{size:S=void 0}=A,{toneMapping:K=JB}=A,{useLegacyLights:h=!(MI>=155)}=A,J,F=!1;const c=yA(S),{parentSize:N,parentSizeAction:r}=oQ(),L=SQ({colorManagementEnabled:B,colorSpace:E,debugFrameloop:D,dpr:o,frameloop:G,parentSize:N,shadows:a,toneMapping:K,useLegacyLights:h,userSize:c});GQ();const U=L.ctx;kQ(U),ug.add(U.invalidate),AA(()=>{ug.delete(U.invalidate)});const{createRenderer:O}=NQ(U);oI(()=>{O(J,w),hQ(L.ctx,L.internalCtx),I(2,F=!0)}),AA(()=>{var l;L.internalCtx.dispose(!0),(l=L.ctx.renderer)==null||l.dispose()});function s(l){eI[l?"unshift":"push"](()=>{J=l,I(1,J)})}return Q.$$set=l=>{"colorManagementEnabled"in l&&I(4,B=l.colorManagementEnabled),"colorSpace"in l&&I(5,E=l.colorSpace),"debugFrameloop"in l&&I(6,D=l.debugFrameloop),"dpr"in l&&I(7,o=l.dpr),"frameloop"in l&&I(8,G=l.frameloop),"rendererParameters"in l&&I(9,w=l.rendererParameters),"shadows"in l&&I(10,a=l.shadows),"size"in l&&I(11,S=l.size),"toneMapping"in l&&I(12,K=l.toneMapping),"useLegacyLights"in l&&I(13,h=l.useLegacyLights),"$$scope"in l&&I(17,C=l.$$scope)},Q.$$.update=()=>{Q.$$.dirty&2048&&c.set(S),Q.$$.dirty&64&&I(0,L.internalCtx.debugFrameloop=D,L),Q.$$.dirty&33&&L.ctx.colorSpace.set(E),Q.$$.dirty&129&&L.ctx.dpr.set(o),Q.$$.dirty&257&&L.ctx.frameloop.set(G),Q.$$.dirty&1025&&L.ctx.shadows.set(a),Q.$$.dirty&4097&&L.ctx.toneMapping.set(K)},[L,J,F,r,B,E,D,o,G,w,a,S,K,h,U,g,s,C]}class RQ extends iA{constructor(A){super(),DA(this,A,qQ,sQ,EA,{colorManagementEnabled:4,colorSpace:5,debugFrameloop:6,dpr:7,frameloop:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,ctx:14})}get ctx(){return this.$$.ctx[14]}}const cQ={},YQ=(Q,A)=>{const I=cQ[A]||UB[A];if(!I)throw new Error(`No Three.js module found for ${A}. Did you forget to extend the catalogue?`);return{...Q,props:{...Q.props,is:I}}},lQ=Q=>new Proxy(class{},{construct(A,[I]){const g=I;return new wg(YQ(g,Q))}}),MA=new Proxy(class{},{construct(Q,[A]){const I=A;return new wg(I)},get(Q,A){return lQ(A)}}),Sg=(Q,A)=>{if(!kg)return{start:()=>{},stop:()=>{},started:aC(!1)};const I=aA("threlte-internal-context");if(I===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");const g=(A==null?void 0:A.invalidate)??!0,C={fn:Q,order:A==null?void 0:A.order,debugFrameloopMessage:A==null?void 0:A.debugFrameloopMessage,invalidate:g},B=yA(!1),E=()=>{g?I.autoFrameHandlers.delete(C):I.manualFrameHandlers.delete(C),I.allFrameHandlers.delete(C),B.set(!1)},D=()=>{g?I.autoFrameHandlers.add(C):I.manualFrameHandlers.add(C),I.allFrameHandlers.add(C),I.allFrameHandlersNeedSortCheck=!0,B.set(!0)};return((A==null?void 0:A.autostart)??!0)&&D(),AA(()=>{E()}),{start:D,stop:E,started:{subscribe:B.subscribe}}};new gA;new gA;new gA;new MC;new MC;new KC;`${aI.logdepthbuf_pars_vertex}${aI.fog_pars_vertex}${aI.logdepthbuf_vertex}${aI.fog_vertex}`;class nI extends KC{constructor(){const A=nI.SkyShader,I=new NB({name:"SkyShader",fragmentShader:A.fragmentShader,vertexShader:A.vertexShader,uniforms:FB.clone(A.uniforms),side:sB,depthWrite:!1});super(new hC(1,1,1),I),this.isSky=!0}}nI.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new gA},up:{value:new gA(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
