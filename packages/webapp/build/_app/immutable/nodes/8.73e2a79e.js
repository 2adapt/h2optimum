import{S as re,i as se,s as ae,t as e,e as h,c as l,a as v,b as g,d as u,p as r,q as oe,f as K,g as t,U as yt,V as Xt,u as ct,n as Ut,W as ie,v as ue,w as ce,h as xt,X as de,l as Kt,o as Yt,k as fe,m as me}from"../chunks/index.e6278cb6.js";import"../chunks/stores.5634c9c6.js";import"../chunks/index.31748c13.js";import{c as he,s as Zt}from"../chunks/MyModal.c51739d9.js";import"../chunks/paths.cf73cfda.js";import"../chunks/clipboard.e9e9a94a.js";function $t(i,n,a){const s=i.slice();return s[11]=n[a],s}function ve(i){let n,a;return{c(){n=h("h2"),a=e("Novo utilizador"),this.h()},l(s){n=v(s,"H2",{class:!0});var c=g(n);a=l(c,"Novo utilizador"),c.forEach(u),this.h()},h(){r(n,"class","mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900")},m(s,c){K(s,n,c),t(n,a)},d(s){s&&u(n)}}}function ge(i){let n,a;return{c(){n=h("h2"),a=e("Editar utilizador"),this.h()},l(s){n=v(s,"H2",{class:!0});var c=g(n);a=l(c,"Editar utilizador"),c.forEach(u),this.h()},h(){r(n,"class","mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900")},m(s,c){K(s,n,c),t(n,a)},d(s){s&&u(n)}}}function te(i){let n,a,s=i[11].id+"",c,w,o=i[11].name+"",d,y,k;return{c(){n=h("option"),a=e(" "),c=e(s),w=e(" - "),d=e(o),y=e(" "),this.h()},l(b){n=v(b,"OPTION",{});var E=g(n);a=l(E," "),c=l(E,s),w=l(E," - "),d=l(E,o),y=l(E," "),E.forEach(u),this.h()},h(){n.__value=k=i[11].id,n.value=n.__value},m(b,E){K(b,n,E),t(n,a),t(n,c),t(n,w),t(n,d),t(n,y)},p(b,E){E&1&&s!==(s=b[11].id+"")&&xt(c,s),E&1&&o!==(o=b[11].name+"")&&xt(d,o),E&1&&k!==(k=b[11].id)&&(n.__value=k,n.value=n.__value)},d(b){b&&u(n)}}}function pe(i){let n,a,s,c,w,o,d,y,k,b,E,C,T,O,I,x,_,V,m,F,H,L,nt,P,rt,M,z,st,J,W,at,A,$,it,G,ot,q,dt,Et,Q,D,R,S,tt,ft,j,mt,U,ht,Vt,Lt,et,Nt,X,Bt,lt,Ot,Pt,ut,Mt,zt,At,qt,Ht;function St(f,N){return f[0]?ge:ve}let wt=St(i),Y=wt(i),vt=i[0].allInstallations,B=[];for(let f=0;f<vt.length;f+=1)B[f]=te($t(i,vt,f));return{c(){n=e(`\r
\r
\r
`),a=h("div"),s=e(`\r
	`),Y.c(),c=e(`\r
`),w=e(`\r
\r
`),o=h("form"),d=e(`\r
	`),y=h("div"),k=e(`\r
		`),b=h("label"),E=e("Primeiro nome"),C=e(`\r
		`),T=h("div"),O=e(`\r
			`),I=h("input"),x=e(`\r
		`),_=e(`\r
	`),V=e(`\r
\r
	`),m=h("div"),F=e(`\r
		`),H=h("label"),L=e("Último nome"),nt=e(`\r
		`),P=h("div"),rt=e(`\r
			`),M=h("input"),z=e(`\r
		`),st=e(`\r
	`),J=e(`\r
\r
	`),W=h("div"),at=e(`\r
		`),A=h("label"),$=e(`\r
			Email\r
		`),it=e(`\r
		`),G=h("div"),ot=e(`\r
			`),q=h("input"),dt=e(`\r
		`),Et=e(`\r
	`),Q=e(`\r
\r
	`),D=h("div"),R=e(`\r
		`),S=h("label"),tt=e("Instalaçoes"),ft=e(`\r
		`),j=h("div"),mt=e(`\r
			`),U=h("select");for(let f=0;f<B.length;f+=1)B[f].c();ht=e(`\r
		`),Vt=e(`\r
	`),Lt=e(`\r
\r
	`),et=h("input"),Nt=e(` \r
\r
	`),X=h("div"),Bt=e(`\r
		`),lt=h("button"),Ot=e(`\r
			Fechar\r
		`),Pt=e(`\r
\r
		`),ut=h("button"),Mt=e(`Gravar\r
			`),zt=e(`\r
	`),At=e(`\r
`),this.h()},l(f){n=l(f,`\r
\r
\r
`),a=v(f,"DIV",{class:!0});var N=g(a);s=l(N,`\r
	`),Y.l(N),c=l(N,`\r
`),N.forEach(u),w=l(f,`\r
\r
`),o=v(f,"FORM",{class:!0,method:!0,action:!0});var p=g(o);d=l(p,`\r
	`),y=v(p,"DIV",{});var Z=g(y);k=l(Z,`\r
		`),b=v(Z,"LABEL",{for:!0,class:!0});var jt=g(b);E=l(jt,"Primeiro nome"),jt.forEach(u),C=l(Z,`\r
		`),T=v(Z,"DIV",{class:!0});var kt=g(T);O=l(kt,`\r
			`),I=v(kt,"INPUT",{id:!0,name:!0,type:!0,class:!0}),x=l(kt,`\r
		`),kt.forEach(u),_=l(Z,`\r
	`),Z.forEach(u),V=l(p,`\r
\r
	`),m=v(p,"DIV",{});var gt=g(m);F=l(gt,`\r
		`),H=v(gt,"LABEL",{for:!0,class:!0});var Ct=g(H);L=l(Ct,"Último nome"),Ct.forEach(u),nt=l(gt,`\r
		`),P=v(gt,"DIV",{class:!0});var It=g(P);rt=l(It,`\r
			`),M=v(It,"INPUT",{id:!0,name:!0,type:!0,class:!0}),z=l(It,`\r
		`),It.forEach(u),st=l(gt,`\r
	`),gt.forEach(u),J=l(p,`\r
\r
	`),W=v(p,"DIV",{});var pt=g(W);at=l(pt,`\r
		`),A=v(pt,"LABEL",{for:!0,class:!0});var Wt=g(A);$=l(Wt,`\r
			Email\r
		`),Wt.forEach(u),it=l(pt,`\r
		`),G=v(pt,"DIV",{class:!0});var Dt=g(G);ot=l(Dt,`\r
			`),q=v(Dt,"INPUT",{id:!0,name:!0,type:!0,class:!0}),dt=l(Dt,`\r
		`),Dt.forEach(u),Et=l(pt,`\r
	`),pt.forEach(u),Q=l(p,`\r
\r
	`),D=v(p,"DIV",{});var _t=g(D);R=l(_t,`\r
		`),S=v(_t,"LABEL",{for:!0,class:!0});var Gt=g(S);tt=l(Gt,"Instalaçoes"),Gt.forEach(u),ft=l(_t,`\r
		`),j=v(_t,"DIV",{});var Tt=g(j);mt=l(Tt,`\r
			`),U=v(Tt,"SELECT",{name:!0,class:!0});var Jt=g(U);for(let Ft=0;Ft<B.length;Ft+=1)B[Ft].l(Jt);Jt.forEach(u),ht=l(Tt,`\r
		`),Tt.forEach(u),Vt=l(_t,`\r
	`),_t.forEach(u),Lt=l(p,`\r
\r
	`),et=v(p,"INPUT",{type:!0,id:!0,name:!0}),Nt=l(p,` \r
\r
	`),X=v(p,"DIV",{class:!0});var bt=g(X);Bt=l(bt,`\r
		`),lt=v(bt,"BUTTON",{type:!0,class:!0});var Qt=g(lt);Ot=l(Qt,`\r
			Fechar\r
		`),Qt.forEach(u),Pt=l(bt,`\r
\r
		`),ut=v(bt,"BUTTON",{type:!0,class:!0});var Rt=g(ut);Mt=l(Rt,`Gravar\r
			`),Rt.forEach(u),zt=l(bt,`\r
	`),bt.forEach(u),At=l(p,`\r
`),p.forEach(u),this.h()},h(){r(a,"class","sm:mx-auto sm:w-full sm:max-w-sm"),r(b,"for","Firstname"),r(b,"class","block text-sm font-medium leading-1 text-gray-900"),r(I,"id","Firstname"),r(I,"name","firstname"),r(I,"type","text"),I.required=!0,r(I,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),r(T,"class","mt-2"),r(H,"for","Lastname"),r(H,"class","block text-sm font-medium leading-1 text-gray-900"),r(M,"id","Lastname"),r(M,"name","lastname"),r(M,"type","text"),M.required=!0,r(M,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),r(P,"class","mt-2"),r(A,"for","email"),r(A,"class","block text-sm font-medium leading-1 text-gray-900"),r(q,"id","email"),r(q,"name","email"),r(q,"type","text"),q.required=!0,r(q,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"),r(G,"class","mt-2"),r(S,"for","installation"),r(S,"class","block text-sm font-medium leading-1 text-gray-900"),U.multiple=!0,r(U,"name","installations"),r(U,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-1"),i[4]===void 0&&oe(()=>i[9].call(U)),r(et,"type","hidden"),r(et,"id","ID"),r(et,"name","ID"),et.value=i[5],r(lt,"type","button"),r(lt,"class","mr-1 flex w-full justify-center rounded-md bg-neutral-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-500 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"),r(ut,"type","submit"),r(ut,"class","ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),r(X,"class","flex flex-nowrap"),r(o,"class","w-full space-y-6"),r(o,"method","POST"),r(o,"action","?/manageUser")},m(f,N){K(f,n,N),K(f,a,N),t(a,s),Y.m(a,null),t(a,c),K(f,w,N),K(f,o,N),t(o,d),t(o,y),t(y,k),t(y,b),t(b,E),t(y,C),t(y,T),t(T,O),t(T,I),yt(I,i[1]),t(T,x),t(y,_),t(o,V),t(o,m),t(m,F),t(m,H),t(H,L),t(m,nt),t(m,P),t(P,rt),t(P,M),yt(M,i[2]),t(P,z),t(m,st),t(o,J),t(o,W),t(W,at),t(W,A),t(A,$),t(W,it),t(W,G),t(G,ot),t(G,q),yt(q,i[3]),t(G,dt),t(W,Et),t(o,Q),t(o,D),t(D,R),t(D,S),t(S,tt),t(D,ft),t(D,j),t(j,mt),t(j,U);for(let p=0;p<B.length;p+=1)B[p]&&B[p].m(U,null);Xt(U,i[4]),t(j,ht),t(D,Vt),t(o,Lt),t(o,et),t(o,Nt),t(o,X),t(X,Bt),t(X,lt),t(lt,Ot),t(X,Pt),t(X,ut),t(ut,Mt),t(X,zt),t(o,At),qt||(Ht=[ct(I,"input",i[6]),ct(M,"input",i[7]),ct(q,"input",i[8]),ct(U,"change",i[9]),ct(lt,"click",i[10])],qt=!0)},p(f,[N]){if(wt!==(wt=St(f))&&(Y.d(1),Y=wt(f),Y&&(Y.c(),Y.m(a,c))),N&2&&I.value!==f[1]&&yt(I,f[1]),N&4&&M.value!==f[2]&&yt(M,f[2]),N&8&&q.value!==f[3]&&yt(q,f[3]),N&1){vt=f[0].allInstallations;let p;for(p=0;p<vt.length;p+=1){const Z=$t(f,vt,p);B[p]?B[p].p(Z,N):(B[p]=te(Z),B[p].c(),B[p].m(U,null))}for(;p<B.length;p+=1)B[p].d(1);B.length=vt.length}N&17&&Xt(U,f[4]),N&32&&(et.value=f[5])},i:Ut,o:Ut,d(f){f&&u(n),f&&u(a),Y.d(),f&&u(w),f&&u(o),ie(B,f),qt=!1,ue(Ht)}}}function _e(i,n,a){let{props:s}=n,c,w,o,d=[],y=null;ce(async()=>{console.log(s),s&&(s.first_name&&a(1,c=s.first_name),s.last_name&&a(2,w=s.last_name),s.email&&a(3,o=s.email),s.id&&a(5,y=s.id),s.installationList&&a(4,d=s.installationList.map(O=>O.id)))});function k(){c=this.value,a(1,c)}function b(){w=this.value,a(2,w)}function E(){o=this.value,a(3,o)}function C(){d=de(this),a(4,d),a(0,s)}const T=()=>he();return i.$$set=O=>{"props"in O&&a(0,s=O.props)},[s,c,w,o,d,y,k,b,E,C,T]}class ee extends re{constructor(n){super(),se(this,n,_e,pe,ae,{props:0})}}function le(i,n,a){const s=i.slice();return s[4]=n[a],s}function ne(i){let n,a,s,c,w,o,d,y,k,b=i[4].first_name+"",E,C,T=i[4].last_name+"",O,I,x,_=i[4].email+"",V,m,F,H,L,nt,P,rt,M,z,st,J,W,at,A,$,it,G,ot,q,dt;function Et(){return i[2](i[4])}return{c(){n=h("li"),a=e(`
            `),s=h("div"),c=e(`
            `),w=fe('<img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">'),o=e(`
            `),d=h("div"),y=e(`
                `),k=h("p"),E=e(b),C=e(" "),O=e(T),I=e(`
                `),x=h("p"),V=e(_),m=e(`
            `),F=e(`
            `),H=e(`
            `),L=h("div"),nt=e(`
                `),P=h("button"),rt=e("Editar"),M=e(`
                `),z=h("form"),st=e(`
                    `),J=h("button"),W=e(`Apagar
                    `),at=e(`
                    `),A=h("input"),it=e(` 
                `),G=e(`
            `),ot=e(`
        `),this.h()},l(Q){n=v(Q,"LI",{class:!0});var D=g(n);a=l(D,`
            `),s=v(D,"DIV",{class:!0});var R=g(s);c=l(R,`
            `),w=me(R,'<img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">'),o=l(R,`
            `),d=v(R,"DIV",{class:!0});var S=g(d);y=l(S,`
                `),k=v(S,"P",{class:!0});var tt=g(k);E=l(tt,b),C=l(tt," "),O=l(tt,T),tt.forEach(u),I=l(S,`
                `),x=v(S,"P",{class:!0});var ft=g(x);V=l(ft,_),ft.forEach(u),m=l(S,`
            `),S.forEach(u),F=l(R,`
            `),R.forEach(u),H=l(D,`
            `),L=v(D,"DIV",{class:!0});var j=g(L);nt=l(j,`
                `),P=v(j,"BUTTON",{class:!0});var mt=g(P);rt=l(mt,"Editar"),mt.forEach(u),M=l(j,`
                `),z=v(j,"FORM",{class:!0,method:!0,action:!0});var U=g(z);st=l(U,`
                    `),J=v(U,"BUTTON",{type:!0,class:!0});var ht=g(J);W=l(ht,`Apagar
                    `),ht.forEach(u),at=l(U,`
                    `),A=v(U,"INPUT",{type:!0,id:!0,name:!0}),it=l(U,` 
                `),U.forEach(u),G=l(j,`
            `),j.forEach(u),ot=l(D,`
        `),D.forEach(u),this.h()},h(){r(k,"class","text-sm font-semibold leading-6 text-gray-900"),r(x,"class","mt-1 truncate text-xs leading-5 text-gray-500"),r(d,"class","min-w-0 flex-auto"),r(s,"class","flex gap-x-4"),r(P,"class","rounded-full bg-white px-2.5 py-1 mr-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"),r(J,"type","submit"),r(J,"class","rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"),r(A,"type","hidden"),r(A,"id","ID"),r(A,"name","ID"),A.value=$=i[4].id,r(z,"class",""),r(z,"method","POST"),r(z,"action","?/deleteUser"),r(L,"class","flex"),r(n,"class","flex items-center justify-between gap-x-60 py-5")},m(Q,D){K(Q,n,D),t(n,a),t(n,s),t(s,c),t(s,w),t(s,o),t(s,d),t(d,y),t(d,k),t(k,E),t(k,C),t(k,O),t(d,I),t(d,x),t(x,V),t(d,m),t(s,F),t(n,H),t(n,L),t(L,nt),t(L,P),t(P,rt),t(L,M),t(L,z),t(z,st),t(z,J),t(J,W),t(z,at),t(z,A),t(z,it),t(L,G),t(n,ot),q||(dt=ct(P,"click",Et),q=!0)},p(Q,D){i=Q,D&1&&b!==(b=i[4].first_name+"")&&xt(E,b),D&1&&T!==(T=i[4].last_name+"")&&xt(O,T),D&1&&_!==(_=i[4].email+"")&&xt(V,_),D&1&&$!==($=i[4].id)&&(A.value=$)},d(Q){Q&&u(n),q=!1,dt()}}}function be(i){let n,a,s,c,w,o,d,y,k,b,E,C,T,O,I=i[0].users,x=[];for(let _=0;_<I.length;_+=1)x[_]=ne(le(i,I,_));return{c(){n=e(`

`),a=h("div"),s=e(`

    `),c=h("ul"),w=e(`
        `),o=h("button"),d=Kt("svg"),y=Kt("path"),k=e(`
            Adicionar Utilizador`),b=e(`
        `);for(let _=0;_<x.length;_+=1)x[_].c();E=e(`
    `),C=e(`
`),this.h()},l(_){n=l(_,`

`),a=v(_,"DIV",{class:!0});var V=g(a);s=l(V,`

    `),c=v(V,"UL",{role:!0,class:!0});var m=g(c);w=l(m,`
        `),o=v(m,"BUTTON",{type:!0,class:!0});var F=g(o);d=Yt(F,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var H=g(d);y=Yt(H,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(y).forEach(u),H.forEach(u),k=l(F,`
            Adicionar Utilizador`),F.forEach(u),b=l(m,`
        `);for(let L=0;L<x.length;L+=1)x[L].l(m);E=l(m,`
    `),m.forEach(u),C=l(V,`
`),V.forEach(u),this.h()},h(){r(y,"fill-rule","evenodd"),r(y,"d","M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"),r(y,"clip-rule","evenodd"),r(d,"xmlns","http://www.w3.org/2000/svg"),r(d,"viewBox","0 0 24 24"),r(d,"fill","currentColor"),r(d,"class","h-5 w-5 pr-1"),r(o,"type","button"),r(o,"class","relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"),r(c,"role","list"),r(c,"class","divide-y divide-gray-100 m-auto"),r(a,"class","flex h-screen w-screen")},m(_,V){K(_,n,V),K(_,a,V),t(a,s),t(a,c),t(c,w),t(c,o),t(o,d),t(d,y),t(o,k),t(c,b);for(let m=0;m<x.length;m+=1)x[m]&&x[m].m(c,null);t(c,E),t(a,C),T||(O=ct(o,"click",i[1]),T=!0)},p(_,[V]){if(V&1){I=_[0].users;let m;for(m=0;m<I.length;m+=1){const F=le(_,I,m);x[m]?x[m].p(F,V):(x[m]=ne(F),x[m].c(),x[m].m(c,E))}for(;m<x.length;m+=1)x[m].d(1);x.length=I.length}},i:Ut,o:Ut,d(_){_&&u(n),_&&u(a),ie(x,_),T=!1,O()}}}function ye(i,n,a){let{data:s}=n;s.users.forEach(d=>{d.allInstallations=s.installations});const w=()=>Zt(ee),o=d=>Zt(ee,d);return i.$$set=d=>{"data"in d&&a(0,s=d.data)},[s,w,o]}class Te extends re{constructor(n){super(),se(this,n,ye,be,ae,{data:0})}}export{Te as component};
