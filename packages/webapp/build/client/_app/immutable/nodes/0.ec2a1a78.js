import{S as T,i as j,s as x,D as B,a as b,e as A,d,f as h,E as M,F as N,G as q,j as w,g as L,k as p,H as C,z as O,A as S,B as U,C as z,m as k,n as v,p as g,q as E,u as y,I as D,v as F}from"../chunks/index.640f31cf.js";import{M as G}from"../chunks/MyModal.72fb1127.js";import{p as H}from"../chunks/stores.81791067.js";function I(r){let e,l,s,u,n;return{c(){e=k("a"),l=b(`
		`),s=k("button"),u=b("Login"),n=b(`
	`),this.h()},l(_){e=v(_,"A",{href:!0});var a=g(e);l=d(a,`
		`),s=v(a,"BUTTON",{class:!0});var o=g(s);u=d(o,"Login"),o.forEach(p),n=d(a,`
	`),a.forEach(p),this.h()},h(){E(s,"class","ml-1 flex justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),E(e,"href","/login")},m(_,a){h(_,e,a),y(e,l),y(e,s),y(s,u),y(e,n)},p:D,d(_){_&&p(e)}}}function P(r){let e,l=r[1].artifacts.user_email+"",s,u,n,_,a,o,m;return{c(){e=k("p"),s=b(l),u=b(`
	`),n=k("a"),_=b(`
		`),a=k("button"),o=b("Logout"),m=b(`
	`),this.h()},l(i){e=v(i,"P",{});var f=g(e);s=d(f,l),f.forEach(p),u=d(i,`
	`),n=v(i,"A",{href:!0});var t=g(n);_=d(t,`
		`),a=v(t,"BUTTON",{class:!0});var c=g(a);o=d(c,"Logout"),c.forEach(p),m=d(t,`
	`),t.forEach(p),this.h()},h(){E(a,"class","ml-1 flex justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),E(n,"href","/logout")},m(i,f){h(i,e,f),y(e,s),h(i,u,f),h(i,n,f),y(n,_),y(n,a),y(a,o),y(n,m)},p(i,f){f&2&&l!==(l=i[1].artifacts.user_email+"")&&F(s,l)},d(i){i&&p(e),i&&p(u),i&&p(n)}}}function $(r){let e,l;return e=new G({}),{c(){O(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,u){U(e,s,u),l=!0},i(s){l||(w(e.$$.fragment,s),l=!0)},o(s){L(e.$$.fragment,s),l=!1},d(s){z(e,s)}}}function J(r){let e,l,s,u,n;function _(t,c){if(t[1].isAuthenticated==!0)return P;if(t[0]!="/login")return I}let a=_(r),o=a&&a(r);const m=r[5].default,i=B(m,r,r[4],null);let f=$();return{c(){e=b(`

`),o&&o.c(),l=b(`

`),i&&i.c(),s=b(`

`),f&&f.c(),u=A()},l(t){e=d(t,`

`),o&&o.l(t),l=d(t,`

`),i&&i.l(t),s=d(t,`

`),f&&f.l(t),u=A()},m(t,c){h(t,e,c),o&&o.m(t,c),h(t,l,c),i&&i.m(t,c),h(t,s,c),f&&f.m(t,c),h(t,u,c),n=!0},p(t,[c]){a===(a=_(t))&&o?o.p(t,c):(o&&o.d(1),o=a&&a(t),o&&(o.c(),o.m(l.parentNode,l))),i&&i.p&&(!n||c&16)&&M(i,m,t,t[4],n?q(m,t[4],c,null):N(t[4]),null)},i(t){n||(w(i,t),w(f),n=!0)},o(t){L(i,t),L(f),n=!1},d(t){t&&p(e),o&&o.d(t),t&&p(l),i&&i.d(t),t&&p(s),f&&f.d(t),t&&p(u)}}}function K(r,e,l){let s,u,n;C(r,H,m=>l(3,n=m));let{$$slots:_={},$$scope:a}=e,{data:o}=e;return r.$$set=m=>{"data"in m&&l(2,o=m.data),"$$scope"in m&&l(4,a=m.$$scope)},r.$$.update=()=>{r.$$.dirty&4&&l(1,s=o.locals.auth),r.$$.dirty&8&&l(0,u=n.route.id)},[u,s,o,n,a,_]}class W extends T{constructor(e){super(),j(this,e,K,J,x,{data:2})}}export{W as component};
