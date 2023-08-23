import{S as ae,i as oe,s as de,t as e,k as ce,e as i,c as n,m as me,a as r,b as a,d as l,p as s,E as ue,f as W,g as t,n as ie,w as fe}from"../chunks/index.e6278cb6.js";function re(Q){let d,p;return{c(){d=i("p"),p=e("The email field is required"),this.h()},l(f){d=r(f,"P",{class:!0});var o=a(d);p=n(o,"The email field is required"),o.forEach(l),this.h()},h(){s(d,"class","error")},m(f,o){W(f,d,o),t(d,p)},d(f){f&&l(d)}}}function ge(Q){var Zt;let d,p,f,o,k,I,it,b,rt,j,at,G,ot,dt,ct,D,mt,q,ut,m,ft,g,gt,A,vt,pt,V,bt,w,ht,xt,X,yt,_,wt,O,_t,Et,P,kt,E,It,Dt,Vt,h,Pt,x,Tt,B,Lt,N,St,jt,qt,T,At,U,Ot,Bt,Nt,Ut,F,Ft,M,Mt,Rt,Ct,Gt,Ht,zt,Jt,Kt,L,Qt,R,Yt,Wt,Xt,u=((Zt=Q[0])==null?void 0:Zt.missing)&&re();return{c(){d=e(`

`),p=ce(`<div class="text-center">
	<h2>Login</h2>
	<form class="mt-5 inline-block w-[20vw] space-y-6" method="POST">
		<div>
			<label for="Email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
			<div class="mt-2">
				<input
					id="email"
					name="email"
					type="email"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		{#if form?.missing}<p class="error">The email field is required</p>{/if}

		<div>
			<label for="Password" class="block text-sm font-medium leading-6 text-gray-900"
				>Password</label
			>
			<div class="mt-2">
				<input
					id="password"
					name="password"
					type="password"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}

		<div class="flex flex-nowrap">
			<button
				type="submit"
				class="ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
				>Login</button
			>
		</div>
	</form>
</div>`),f=e(`


`),o=i("div"),k=e(`
	`),I=i("div"),it=e(`
	  `),b=i("div"),rt=e(`
		`),j=i("div"),at=e(`
		  `),G=i("h2"),ot=e("Sign in to your account"),dt=e(`
		`),ct=e(`
  
		`),D=i("div"),mt=e(`
		  `),q=i("div"),ut=e(`
			`),m=i("form"),ft=e(`
			  `),g=i("div"),gt=e(`
				`),A=i("label"),vt=e("Email address"),pt=e(`
				`),V=i("div"),bt=e(`
				  `),w=i("input"),ht=e(`
				`),xt=e(`
				`),u&&u.c(),X=e(`
			  `),yt=e(`
  
			  `),_=i("div"),wt=e(`
				`),O=i("label"),_t=e("Password"),Et=e(`
				`),P=i("div"),kt=e(`
				  `),E=i("input"),It=e(`
				`),Dt=e(`
			  `),Vt=e(`
  
			  `),h=i("div"),Pt=e(`
				`),x=i("div"),Tt=e(`
				  `),B=i("input"),Lt=e(`
				  `),N=i("label"),St=e("Remember me"),jt=e(`
				`),qt=e(`
  
				`),T=i("div"),At=e(`
				  `),U=i("a"),Ot=e("Forgot password?"),Bt=e(`
				`),Nt=e(`
			  `),Ut=e(`
  
			  `),F=i("div"),Ft=e(`
				`),M=i("button"),Mt=e("Sign in"),Rt=e(`
			  `),Ct=e(`
			`),Gt=e(`
		  `),Ht=e(`

		`),zt=e(`
	  `),Jt=e(`
	`),Kt=e(`
	`),L=i("div"),Qt=e(`
	  `),R=i("img"),Wt=e(`
	`),Xt=e(`
  `),this.h()},l(c){d=n(c,`

`),p=me(c,`<div class="text-center">
	<h2>Login</h2>
	<form class="mt-5 inline-block w-[20vw] space-y-6" method="POST">
		<div>
			<label for="Email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
			<div class="mt-2">
				<input
					id="email"
					name="email"
					type="email"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		{#if form?.missing}<p class="error">The email field is required</p>{/if}

		<div>
			<label for="Password" class="block text-sm font-medium leading-6 text-gray-900"
				>Password</label
			>
			<div class="mt-2">
				<input
					id="password"
					name="password"
					type="password"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}

		<div class="flex flex-nowrap">
			<button
				type="submit"
				class="ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
				>Login</button
			>
		</div>
	</form>
</div>`),f=n(c,`


`),o=r(c,"DIV",{class:!0});var v=a(o);k=n(v,`
	`),I=r(v,"DIV",{class:!0});var C=a(I);it=n(C,`
	  `),b=r(C,"DIV",{class:!0});var H=a(b);rt=n(H,`
		`),j=r(H,"DIV",{});var Y=a(j);at=n(Y,`
		  `),G=r(Y,"H2",{class:!0});var $t=a(G);ot=n($t,"Sign in to your account"),$t.forEach(l),dt=n(Y,`
		`),Y.forEach(l),ct=n(H,`
  
		`),D=r(H,"DIV",{class:!0});var Z=a(D);mt=n(Z,`
		  `),q=r(Z,"DIV",{});var $=a(q);ut=n($,`
			`),m=r($,"FORM",{method:!0,class:!0});var y=a(m);ft=n(y,`
			  `),g=r(y,"DIV",{});var S=a(g);gt=n(S,`
				`),A=r(S,"LABEL",{for:!0,class:!0});var te=a(A);vt=n(te,"Email address"),te.forEach(l),pt=n(S,`
				`),V=r(S,"DIV",{class:!0});var tt=a(V);bt=n(tt,`
				  `),w=r(tt,"INPUT",{id:!0,name:!0,type:!0,autocomplete:!0,class:!0}),ht=n(tt,`
				`),tt.forEach(l),xt=n(S,`
				`),u&&u.l(S),X=n(S,`
			  `),S.forEach(l),yt=n(y,`
  
			  `),_=r(y,"DIV",{});var z=a(_);wt=n(z,`
				`),O=r(z,"LABEL",{for:!0,class:!0});var ee=a(O);_t=n(ee,"Password"),ee.forEach(l),Et=n(z,`
				`),P=r(z,"DIV",{class:!0});var et=a(P);kt=n(et,`
				  `),E=r(et,"INPUT",{id:!0,name:!0,type:!0,autocomplete:!0,class:!0}),It=n(et,`
				`),et.forEach(l),Dt=n(z,`
			  `),z.forEach(l),Vt=n(y,`
  
			  `),h=r(y,"DIV",{class:!0});var J=a(h);Pt=n(J,`
				`),x=r(J,"DIV",{class:!0});var K=a(x);Tt=n(K,`
				  `),B=r(K,"INPUT",{id:!0,name:!0,type:!0,class:!0}),Lt=n(K,`
				  `),N=r(K,"LABEL",{for:!0,class:!0});var ne=a(N);St=n(ne,"Remember me"),ne.forEach(l),jt=n(K,`
				`),K.forEach(l),qt=n(J,`
  
				`),T=r(J,"DIV",{class:!0});var nt=a(T);At=n(nt,`
				  `),U=r(nt,"A",{href:!0,class:!0});var se=a(U);Ot=n(se,"Forgot password?"),se.forEach(l),Bt=n(nt,`
				`),nt.forEach(l),Nt=n(J,`
			  `),J.forEach(l),Ut=n(y,`
  
			  `),F=r(y,"DIV",{});var st=a(F);Ft=n(st,`
				`),M=r(st,"BUTTON",{type:!0,class:!0});var le=a(M);Mt=n(le,"Sign in"),le.forEach(l),Rt=n(st,`
			  `),st.forEach(l),Ct=n(y,`
			`),y.forEach(l),Gt=n($,`
		  `),$.forEach(l),Ht=n(Z,`

		`),Z.forEach(l),zt=n(H,`
	  `),H.forEach(l),Jt=n(C,`
	`),C.forEach(l),Kt=n(v,`
	`),L=r(v,"DIV",{class:!0});var lt=a(L);Qt=n(lt,`
	  `),R=r(lt,"IMG",{class:!0,src:!0,alt:!0}),Wt=n(lt,`
	`),lt.forEach(l),Xt=n(v,`
  `),v.forEach(l),this.h()},h(){s(G,"class","mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"),s(A,"for","email"),s(A,"class","block text-sm font-medium leading-6 text-gray-900"),s(w,"id","email"),s(w,"name","email"),s(w,"type","email"),s(w,"autocomplete","email"),w.required=!0,s(w,"class","block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),s(V,"class","mt-2"),s(O,"for","password"),s(O,"class","block text-sm font-medium leading-6 text-gray-900"),s(E,"id","password"),s(E,"name","password"),s(E,"type","password"),s(E,"autocomplete","current-password"),E.required=!0,s(E,"class","block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),s(P,"class","mt-2"),s(B,"id","remember-me"),s(B,"name","remember-me"),s(B,"type","checkbox"),s(B,"class","h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"),s(N,"for","remember-me"),s(N,"class","ml-3 block text-sm leading-6 text-gray-700"),s(x,"class","flex items-center"),s(U,"href","#"),s(U,"class","font-semibold text-indigo-600 hover:text-indigo-500"),s(T,"class","text-sm leading-6"),s(h,"class","flex items-center justify-between"),s(M,"type","submit"),s(M,"class","flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),s(m,"method","POST"),s(m,"class","space-y-6"),s(D,"class","mt-10"),s(b,"class","mx-auto w-full max-w-sm lg:w-96"),s(I,"class","flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"),s(R,"class","absolute inset-0 h-full w-full object-cover"),ue(R.src,Yt="https://app.2adapt.pt/login/static/bg-alentejo.jpg")||s(R,"src",Yt),s(R,"alt",""),s(L,"class","relative hidden w-0 flex-1 lg:block"),s(o,"class","flex min-h-full")},m(c,v){W(c,d,v),W(c,p,v),W(c,f,v),W(c,o,v),t(o,k),t(o,I),t(I,it),t(I,b),t(b,rt),t(b,j),t(j,at),t(j,G),t(G,ot),t(j,dt),t(b,ct),t(b,D),t(D,mt),t(D,q),t(q,ut),t(q,m),t(m,ft),t(m,g),t(g,gt),t(g,A),t(A,vt),t(g,pt),t(g,V),t(V,bt),t(V,w),t(V,ht),t(g,xt),u&&u.m(g,null),t(g,X),t(m,yt),t(m,_),t(_,wt),t(_,O),t(O,_t),t(_,Et),t(_,P),t(P,kt),t(P,E),t(P,It),t(_,Dt),t(m,Vt),t(m,h),t(h,Pt),t(h,x),t(x,Tt),t(x,B),t(x,Lt),t(x,N),t(N,St),t(x,jt),t(h,qt),t(h,T),t(T,At),t(T,U),t(U,Ot),t(T,Bt),t(h,Nt),t(m,Ut),t(m,F),t(F,Ft),t(F,M),t(M,Mt),t(F,Rt),t(m,Ct),t(q,Gt),t(D,Ht),t(b,zt),t(I,Jt),t(o,Kt),t(o,L),t(L,Qt),t(L,R),t(L,Wt),t(o,Xt)},p(c,[v]){var C;(C=c[0])!=null&&C.missing?u||(u=re(),u.c(),u.m(g,X)):u&&(u.d(1),u=null)},i:ie,o:ie,d(c){c&&l(d),c&&l(p),c&&l(f),c&&l(o),u&&u.d()}}}function ve(Q,d,p){let{form:f}=d,{data:o}=d;return fe(()=>{o.locals.auth.isAuthenticated==!0}),Q.$$set=k=>{"form"in k&&p(0,f=k.form),"data"in k&&p(1,o=k.data)},[f,o]}class be extends ae{constructor(d){super(),oe(this,d,ve,ge,de,{form:0,data:1})}}export{be as component};
