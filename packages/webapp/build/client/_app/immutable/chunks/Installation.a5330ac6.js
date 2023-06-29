import{S as Tn,i as kn,s as In,a as o,m as h,d as l,n as v,p as b,k as p,q as u,f as at,I as Wt,o as Fn,x as nn,u as e,L as Pn,U as qi,O as Zi,N as ji,H as xn,Q as Mn,c as It,R as _n,b as St,z as ma,A as ga,B as ha,v as An,j as va,g as ba,M as Qi,C as ya,V as Si}from"./index.640f31cf.js";import{j as Xi,k as $i,w as Ri}from"./singletons.d8d1e010.js";import{_ as Ma}from"./preload-helper.41c905a7.js";/* empty css                */import{c as tr,s as Ai}from"./MyModal.72fb1127.js";import{p as Vi}from"./stores.81791067.js";import{p as er}from"./parse.bee59afc.js";const nr=!0,hi=nr;function ar(n){let r,t;return{c(){r=o(`

`),t=h("div"),this.h()},l(c){r=l(c,`

`),t=v(c,"DIV",{class:!0}),b(t).forEach(p),this.h()},h(){u(t,"class","relative transform overflow-hidden bg-white px-4 pb-1 pt-1 text-center shadow-xl transition-all")},m(c,d){at(c,r,d),at(c,t,d),n[2](t)},p:Wt,i:Wt,o:Wt,d(c){c&&p(r),c&&p(t),n[2](null)}}}function ir(n,r,t){let{props:c}=r,d,f;Fn(async()=>{L=(await Ma(()=>import("./leaflet-src.20dcb89b.js").then(F=>F.l),["./leaflet-src.20dcb89b.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default,C(),g()});function g(){if(c.coordinates.lat&&c.coordinates.lon){var F={center:[c.coordinates.lat,c.coordinates.lon],zoom:17,scrollWheelZoom:!0};d=L.map(f,F),d.addLayer(L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")),L.marker([c.coordinates.lat,c.coordinates.lon]).addTo(d),d.invalidateSize()}else f.append("Location not available")}function C(){c.size=="full"?(f.classList.add("h-[80vh]"),f.classList.add("w-[80vw]")):c.size=="lg"?(f.classList.add("h-[70vh]"),f.classList.add("w-full")):c.size=="md"?(f.classList.add("h-[40vh]"),f.classList.add("w-full")):c.size=="sm"?(f.classList.add("h-[10vh]"),f.classList.add("w-full")):(f.classList.add("h-full"),f.classList.add("w-full"))}function y(F){nn[F?"unshift":"push"](()=>{f=F,t(0,f)})}return n.$$set=F=>{"props"in F&&t(1,c=F.props)},[f,c,y]}class Ui extends Tn{constructor(r){super(),kn(this,r,ir,ar,In,{props:1})}}const rr=Xi("invalidate_all");function or(n){return $i.apply_action(n)}function lr(n){const r=JSON.parse(n);return r.data&&(r.data=er(r.data)),r}function sr(n){return HTMLElement.prototype.cloneNode.call(n)}function cr(n,r=()=>{}){const t=async({action:d,result:f,reset:g})=>{f.type==="success"&&(g!==!1&&HTMLFormElement.prototype.reset.call(n),await rr()),(location.origin+location.pathname===d.origin+d.pathname||f.type==="redirect"||f.type==="error")&&or(f)};async function c(d){var W,M,S;d.preventDefault();const f=new URL((W=d.submitter)!=null&&W.hasAttribute("formaction")?d.submitter.formAction:sr(n).action),g=new FormData(n),C=(M=d.submitter)==null?void 0:M.getAttribute("name");C&&g.append(C,((S=d.submitter)==null?void 0:S.getAttribute("value"))??"");const y=new AbortController;let F=!1;const I=await r({action:f,cancel:()=>F=!0,controller:y,get data(){return g},formData:g,get form(){return n},formElement:n,submitter:d.submitter})??t;if(F)return;let T;try{const O=await fetch(f,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:g,signal:y.signal});T=lr(await O.text()),T.type==="error"&&(T.status=O.status)}catch(O){if((O==null?void 0:O.name)==="AbortError")return;T={type:"error",error:O}}I({action:f,get data(){return g},formData:g,get form(){return n},formElement:n,update:O=>t({action:f,result:T,reset:O==null?void 0:O.reset}),result:T})}return HTMLFormElement.prototype.addEventListener.call(n,"submit",c),{destroy(){HTMLFormElement.prototype.removeEventListener.call(n,"submit",c)}}}function Ni(n){let r,t;return{c(){r=h("span"),t=o("A criar dispositivo...")},l(c){r=v(c,"SPAN",{});var d=b(r);t=l(d,"A criar dispositivo..."),d.forEach(p)},m(c,d){at(c,r,d),e(r,t)},d(c){c&&p(r)}}}function Pi(n){let r,t;return{c(){r=h("span"),t=o("Dispositivo criado com sucesso!")},l(c){r=v(c,"SPAN",{});var d=b(r);t=l(d,"Dispositivo criado com sucesso!"),d.forEach(p)},m(c,d){at(c,r,d),e(r,t)},d(c){c&&p(r)}}}function ur(n){let r,t,c,d,f,g,C,y,F,x,I,T,W,M,S,O,q,_,B,et,w,N,R,j,V,z,Z,G,J,$,it,st,mt,rt,vt,tt,ut,nt,ft,bt,pt,yt,gt,dt,_t,Ae,zt,de,Ft,Ne,Kt,Gt,ye,Ct,fe,wt,Jt,qt,Yt,ie,Tt,De,we,Pe,Ee,Rt,Zt,Qt,Xt,Oe,Q,ge,Et,Le,Vt,re,kt,xe,Ht,a,i,s,m,D,k,U,P,H,A,Y,K=n[0]&&Ni(),ot=n[1]&&Pi();return{c(){r=o(`


`),t=h("div"),c=o(`
	`),d=h("h2"),f=o("New device"),g=o(`
`),C=o(`

`),y=h("form"),F=o(`
	`),x=h("div"),I=o(`
		`),T=h("label"),W=o("Description (optional)"),M=o(`
		`),S=h("div"),O=o(`
			`),q=h("input"),_=o(`
		`),B=o(`
	`),et=o(`

	`),w=h("div"),N=o(`
		`),R=h("label"),j=o("MAC address"),V=o(`
		`),z=h("div"),Z=o(`
			`),G=h("input"),J=o(`
		`),$=o(`
	`),it=o(`

	`),st=h("div"),mt=o(`
		`),rt=h("label"),vt=o("Battery mode"),tt=o(`
		`),ut=h("div"),nt=o(`
			`),ft=h("select"),bt=h("option"),pt=o(" Normal "),yt=h("option"),gt=o(" Eco "),dt=h("option"),_t=o(" Stand-by "),Ae=o(`
		`),zt=o(`
	`),de=o(`

	`),Ft=h("div"),Ne=o(`
		`),Kt=h("label"),Gt=o("Device type"),ye=o(`
		`),Ct=h("div"),fe=o(`
			`),wt=h("select"),Jt=h("option"),qt=o(" Sensors only "),Yt=h("option"),ie=o(" Switch only "),Tt=h("option"),De=o(" Mixed "),we=o(`
		`),Pe=o(`
	`),Ee=o(`

	`),Rt=h("div"),Zt=o(`
		`),Qt=h("label"),Xt=o(`
			Activation key
		`),Oe=o(`
		`),Q=h("div"),ge=o(`
			`),Et=h("input"),Le=o(`
		`),Vt=o(`
	`),re=o(`

	`),K&&K.c(),kt=o(`
	`),ot&&ot.c(),xe=o(`

	`),Ht=h("div"),a=o(`
		`),i=h("button"),s=o(`
			Close
		`),m=o(`

		`),D=h("button"),k=o(`Save
			`),U=o(`
	`),P=o(`
`),this.h()},l(X){r=l(X,`


`),t=v(X,"DIV",{class:!0});var ht=b(t);c=l(ht,`
	`),d=v(ht,"H2",{class:!0});var oe=b(d);f=l(oe,"New device"),oe.forEach(p),g=l(ht,`
`),ht.forEach(p),C=l(X,`

`),y=v(X,"FORM",{class:!0,method:!0,action:!0});var Dt=b(y);F=l(Dt,`
	`),x=v(Dt,"DIV",{});var $t=b(x);I=l($t,`
		`),T=v($t,"LABEL",{for:!0,class:!0});var le=b(T);W=l(le,"Description (optional)"),le.forEach(p),M=l($t,`
		`),S=v($t,"DIV",{class:!0});var Me=b(S);O=l(Me,`
			`),q=v(Me,"INPUT",{id:!0,name:!0,type:!0,class:!0}),_=l(Me,`
		`),Me.forEach(p),B=l($t,`
	`),$t.forEach(p),et=l(Dt,`

	`),w=v(Dt,"DIV",{});var At=b(w);N=l(At,`
		`),R=v(At,"LABEL",{for:!0,class:!0});var te=b(R);j=l(te,"MAC address"),te.forEach(p),V=l(At,`
		`),z=v(At,"DIV",{class:!0});var ee=b(z);Z=l(ee,`
			`),G=v(ee,"INPUT",{id:!0,name:!0,type:!0,class:!0}),J=l(ee,`
		`),ee.forEach(p),$=l(At,`
	`),At.forEach(p),it=l(Dt,`

	`),st=v(Dt,"DIV",{class:!0});var pe=b(st);mt=l(pe,`
		`),rt=v(pe,"LABEL",{for:!0,class:!0});var je=b(rt);vt=l(je,"Battery mode"),je.forEach(p),tt=l(pe,`
		`),ut=v(pe,"DIV",{class:!0});var _e=b(ut);nt=l(_e,`
			`),ft=v(_e,"SELECT",{name:!0,class:!0});var Re=b(ft);bt=v(Re,"OPTION",{});var an=b(bt);pt=l(an," Normal "),an.forEach(p),yt=v(Re,"OPTION",{});var rn=b(yt);gt=l(rn," Eco "),rn.forEach(p),dt=v(Re,"OPTION",{});var on=b(dt);_t=l(on," Stand-by "),on.forEach(p),Re.forEach(p),Ae=l(_e,`
		`),_e.forEach(p),zt=l(pe,`
	`),pe.forEach(p),de=l(Dt,`

	`),Ft=v(Dt,"DIV",{class:!0});var xt=b(Ft);Ne=l(xt,`
		`),Kt=v(xt,"LABEL",{for:!0,class:!0});var ln=b(Kt);Gt=l(ln,"Device type"),ln.forEach(p),ye=l(xt,`
		`),Ct=v(xt,"DIV",{class:!0});var Pt=b(Ct);fe=l(Pt,`
			`),wt=v(Pt,"SELECT",{name:!0,class:!0});var Ve=b(wt);Jt=v(Ve,"OPTION",{});var he=b(Jt);qt=l(he," Sensors only "),he.forEach(p),Yt=v(Ve,"OPTION",{});var sn=b(Yt);ie=l(sn," Switch only "),sn.forEach(p),Tt=v(Ve,"OPTION",{});var Fe=b(Tt);De=l(Fe," Mixed "),Fe.forEach(p),Ve.forEach(p),we=l(Pt,`
		`),Pt.forEach(p),Pe=l(xt,`
	`),xt.forEach(p),Ee=l(Dt,`

	`),Rt=v(Dt,"DIV",{});var Ce=b(Rt);Zt=l(Ce,`
		`),Qt=v(Ce,"LABEL",{for:!0,class:!0});var cn=b(Qt);Xt=l(cn,`
			Activation key
		`),cn.forEach(p),Oe=l(Ce,`
		`),Q=v(Ce,"DIV",{class:!0});var Ue=b(Q);ge=l(Ue,`
			`),Et=v(Ue,"INPUT",{id:!0,name:!0,type:!0,class:!0}),Le=l(Ue,`
		`),Ue.forEach(p),Vt=l(Ce,`
	`),Ce.forEach(p),re=l(Dt,`

	`),K&&K.l(Dt),kt=l(Dt,`
	`),ot&&ot.l(Dt),xe=l(Dt,`

	`),Ht=v(Dt,"DIV",{class:!0});var Ut=b(Ht);a=l(Ut,`
		`),i=v(Ut,"BUTTON",{type:!0,class:!0});var un=b(i);s=l(un,`
			Close
		`),un.forEach(p),m=l(Ut,`

		`),D=v(Ut,"BUTTON",{type:!0,class:!0});var Ye=b(D);k=l(Ye,`Save
			`),Ye.forEach(p),U=l(Ut,`
	`),Ut.forEach(p),P=l(Dt,`
`),Dt.forEach(p),this.h()},h(){u(d,"class","mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"),u(t,"class","sm:mx-auto sm:w-full sm:max-w-sm"),u(T,"for","Description"),u(T,"class","block text-sm font-medium leading-6 text-gray-900"),u(q,"id","Description"),u(q,"name","description"),u(q,"type","text"),q.required=!0,q.disabled=n[0],u(q,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"),u(S,"class","mt-2"),u(R,"for","MACaddress"),u(R,"class","block text-sm font-medium leading-6 text-gray-900"),u(G,"id","MACaddress"),u(G,"name","MACaddress"),u(G,"type","text"),G.required=!0,G.disabled=n[0],u(G,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"),u(z,"class","mt-2"),u(rt,"for","BatteryMode"),u(rt,"class","block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"),bt.__value="normal",bt.value=bt.__value,yt.__value="eco",yt.value=yt.__value,dt.__value="stand-by",dt.value=dt.__value,u(ft,"name","batteryMode"),ft.disabled=n[0],u(ft,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6"),u(ut,"class","ml-2"),u(st,"class","flex flex-nowrap"),u(Kt,"for","DeviceType"),u(Kt,"class","block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"),Jt.__value="sensors",Jt.value=Jt.__value,Yt.__value="switch",Yt.value=Yt.__value,Tt.__value="mixed",Tt.value=Tt.__value,u(wt,"name","deviceType"),wt.disabled=n[0],u(wt,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6"),u(Ct,"class","ml-2"),u(Ft,"class","flex flex-nowrap"),u(Qt,"for","ActivationKey"),u(Qt,"class","block text-sm font-medium leading-6 text-gray-900"),u(Et,"id","ActivationKey"),u(Et,"name","activationkey"),u(Et,"type","text"),Et.required=!0,Et.disabled=n[0],u(Et,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"),u(Q,"class","mt-2"),u(i,"type","button"),u(i,"class","mr-1 flex w-full justify-center rounded-md bg-neutral-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-500 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"),u(D,"type","submit"),u(D,"class","ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),u(Ht,"class","flex flex-nowrap"),u(y,"class","w-[20vw] space-y-6"),u(y,"method","POST"),u(y,"action",n[2])},m(X,ht){at(X,r,ht),at(X,t,ht),e(t,c),e(t,d),e(d,f),e(t,g),at(X,C,ht),at(X,y,ht),e(y,F),e(y,x),e(x,I),e(x,T),e(T,W),e(x,M),e(x,S),e(S,O),e(S,q),e(S,_),e(x,B),e(y,et),e(y,w),e(w,N),e(w,R),e(R,j),e(w,V),e(w,z),e(z,Z),e(z,G),e(z,J),e(w,$),e(y,it),e(y,st),e(st,mt),e(st,rt),e(rt,vt),e(st,tt),e(st,ut),e(ut,nt),e(ut,ft),e(ft,bt),e(bt,pt),e(ft,yt),e(yt,gt),e(ft,dt),e(dt,_t),e(ut,Ae),e(st,zt),e(y,de),e(y,Ft),e(Ft,Ne),e(Ft,Kt),e(Kt,Gt),e(Ft,ye),e(Ft,Ct),e(Ct,fe),e(Ct,wt),e(wt,Jt),e(Jt,qt),e(wt,Yt),e(Yt,ie),e(wt,Tt),e(Tt,De),e(Ct,we),e(Ft,Pe),e(y,Ee),e(y,Rt),e(Rt,Zt),e(Rt,Qt),e(Qt,Xt),e(Rt,Oe),e(Rt,Q),e(Q,ge),e(Q,Et),e(Q,Le),e(Rt,Vt),e(y,re),K&&K.m(y,null),e(y,kt),ot&&ot.m(y,null),e(y,xe),e(y,Ht),e(Ht,a),e(Ht,i),e(i,s),e(Ht,m),e(Ht,D),e(D,k),e(Ht,U),e(y,P),A||(Y=[Pn(i,"click",n[3]),qi(H=cr.call(null,y,n[4]))],A=!0)},p(X,[ht]){ht&1&&(q.disabled=X[0]),ht&1&&(G.disabled=X[0]),ht&1&&(ft.disabled=X[0]),ht&1&&(wt.disabled=X[0]),ht&1&&(Et.disabled=X[0]),X[0]?K||(K=Ni(),K.c(),K.m(y,kt)):K&&(K.d(1),K=null),X[1]?ot||(ot=Pi(),ot.c(),ot.m(y,xe)):ot&&(ot.d(1),ot=null),H&&Zi(H.update)&&ht&3&&H.update.call(null,X[4])},i:Wt,o:Wt,d(X){X&&p(r),X&&p(t),X&&p(C),X&&p(y),K&&K.d(),ot&&ot.d(),A=!1,ji(Y)}}}function dr(n,r,t){let c;xn(n,Vi,F=>t(5,c=F));let d=!1,f=!1,g=c.url.pathname;return[d,f,g,()=>tr(),()=>(t(0,d=!0),async({update:F})=>{await F(),t(0,d=!1),t(1,f=!0),setTimeout(()=>{t(1,f=!1)},5e3)})]}class fr extends Tn{constructor(r){super(),kn(this,r,dr,ur,In,{})}}let Bi=new Date,Wi=new Date;Wi.setDate(Bi.getDate()-7);let pr=[Wi.toISOString().split("T")[0],Bi.toISOString().split("T")[0]];const Cn=Ri(pr);var ui=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],wn={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(n){return typeof console<"u"&&console.warn(n)},getWeek:function(n){var r=new Date(n.getTime());r.setHours(0,0,0,0),r.setDate(r.getDate()+3-(r.getDay()+6)%7);var t=new Date(r.getFullYear(),0,4);return 1+Math.round(((r.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},On={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(n){var r=n%100;if(r>3&&r<21)return"th";switch(r%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},ae=function(n,r){return r===void 0&&(r=2),("000"+n).slice(r*-1)},me=function(n){return n===!0?1:0};function Oi(n,r){var t;return function(){var c=this,d=arguments;clearTimeout(t),t=setTimeout(function(){return n.apply(c,d)},r)}}var di=function(n){return n instanceof Array?n:[n]};function Bt(n,r,t){if(t===!0)return n.classList.add(r);n.classList.remove(r)}function ct(n,r,t){var c=window.document.createElement(n);return r=r||"",t=t||"",c.className=r,t!==void 0&&(c.textContent=t),c}function Da(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function zi(n,r){if(r(n))return n;if(n.parentNode)return zi(n.parentNode,r)}function wa(n,r){var t=ct("div","numInputWrapper"),c=ct("input","numInput "+n),d=ct("span","arrowUp"),f=ct("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?c.type="number":(c.type="text",c.pattern="\\d*"),r!==void 0)for(var g in r)c.setAttribute(g,r[g]);return t.appendChild(c),t.appendChild(d),t.appendChild(f),t}function se(n){try{if(typeof n.composedPath=="function"){var r=n.composedPath();return r[0]}return n.target}catch{return n.target}}var fi=function(){},Ea=function(n,r,t){return t.months[r?"shorthand":"longhand"][n]},mr={D:fi,F:function(n,r,t){n.setMonth(t.months.longhand.indexOf(r))},G:function(n,r){n.setHours((n.getHours()>=12?12:0)+parseFloat(r))},H:function(n,r){n.setHours(parseFloat(r))},J:function(n,r){n.setDate(parseFloat(r))},K:function(n,r,t){n.setHours(n.getHours()%12+12*me(new RegExp(t.amPM[1],"i").test(r)))},M:function(n,r,t){n.setMonth(t.months.shorthand.indexOf(r))},S:function(n,r){n.setSeconds(parseFloat(r))},U:function(n,r){return new Date(parseFloat(r)*1e3)},W:function(n,r,t){var c=parseInt(r),d=new Date(n.getFullYear(),0,2+(c-1)*7,0,0,0,0);return d.setDate(d.getDate()-d.getDay()+t.firstDayOfWeek),d},Y:function(n,r){n.setFullYear(parseFloat(r))},Z:function(n,r){return new Date(r)},d:function(n,r){n.setDate(parseFloat(r))},h:function(n,r){n.setHours((n.getHours()>=12?12:0)+parseFloat(r))},i:function(n,r){n.setMinutes(parseFloat(r))},j:function(n,r){n.setDate(parseFloat(r))},l:fi,m:function(n,r){n.setMonth(parseFloat(r)-1)},n:function(n,r){n.setMonth(parseFloat(r)-1)},s:function(n,r){n.setSeconds(parseFloat(r))},u:function(n,r){return new Date(parseFloat(r))},w:fi,y:function(n,r){n.setFullYear(2e3+parseFloat(r))}},tn={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},Nn={Z:function(n){return n.toISOString()},D:function(n,r,t){return r.weekdays.shorthand[Nn.w(n,r,t)]},F:function(n,r,t){return Ea(Nn.n(n,r,t)-1,!1,r)},G:function(n,r,t){return ae(Nn.h(n,r,t))},H:function(n){return ae(n.getHours())},J:function(n,r){return r.ordinal!==void 0?n.getDate()+r.ordinal(n.getDate()):n.getDate()},K:function(n,r){return r.amPM[me(n.getHours()>11)]},M:function(n,r){return Ea(n.getMonth(),!0,r)},S:function(n){return ae(n.getSeconds())},U:function(n){return n.getTime()/1e3},W:function(n,r,t){return t.getWeek(n)},Y:function(n){return ae(n.getFullYear(),4)},d:function(n){return ae(n.getDate())},h:function(n){return n.getHours()%12?n.getHours()%12:12},i:function(n){return ae(n.getMinutes())},j:function(n){return n.getDate()},l:function(n,r){return r.weekdays.longhand[n.getDay()]},m:function(n){return ae(n.getMonth()+1)},n:function(n){return n.getMonth()+1},s:function(n){return n.getSeconds()},u:function(n){return n.getTime()},w:function(n){return n.getDay()},y:function(n){return String(n.getFullYear()).substring(2)}},Ki=function(n){var r=n.config,t=r===void 0?wn:r,c=n.l10n,d=c===void 0?On:c,f=n.isMobile,g=f===void 0?!1:f;return function(C,y,F){var x=F||d;return t.formatDate!==void 0&&!g?t.formatDate(C,y,x):y.split("").map(function(I,T,W){return Nn[I]&&W[T-1]!=="\\"?Nn[I](C,x,t):I!=="\\"?I:""}).join("")}},gi=function(n){var r=n.config,t=r===void 0?wn:r,c=n.l10n,d=c===void 0?On:c;return function(f,g,C,y){if(!(f!==0&&!f)){var F=y||d,x,I=f;if(f instanceof Date)x=new Date(f.getTime());else if(typeof f!="string"&&f.toFixed!==void 0)x=new Date(f);else if(typeof f=="string"){var T=g||(t||wn).dateFormat,W=String(f).trim();if(W==="today")x=new Date,C=!0;else if(t&&t.parseDate)x=t.parseDate(f,T);else if(/Z$/.test(W)||/GMT$/.test(W))x=new Date(f);else{for(var M=void 0,S=[],O=0,q=0,_="";O<T.length;O++){var B=T[O],et=B==="\\",w=T[O-1]==="\\"||et;if(tn[B]&&!w){_+=tn[B];var N=new RegExp(_).exec(f);N&&(M=!0)&&S[B!=="Y"?"push":"unshift"]({fn:mr[B],val:N[++q]})}else et||(_+=".")}x=!t||!t.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),S.forEach(function(R){var j=R.fn,V=R.val;return x=j(x,V,F)||x}),x=M?x:void 0}}if(!(x instanceof Date&&!isNaN(x.getTime()))){t.errorHandler(new Error("Invalid date provided: "+I));return}return C===!0&&x.setHours(0,0,0,0),x}}};function ce(n,r,t){return t===void 0&&(t=!0),t!==!1?new Date(n.getTime()).setHours(0,0,0,0)-new Date(r.getTime()).setHours(0,0,0,0):n.getTime()-r.getTime()}var gr=function(n,r,t){return n>Math.min(r,t)&&n<Math.max(r,t)},pi=function(n,r,t){return n*3600+r*60+t},hr=function(n){var r=Math.floor(n/3600),t=(n-r*3600)/60;return[r,t,n-r*3600-t*60]},vr={DAY:864e5};function mi(n){var r=n.defaultHour,t=n.defaultMinute,c=n.defaultSeconds;if(n.minDate!==void 0){var d=n.minDate.getHours(),f=n.minDate.getMinutes(),g=n.minDate.getSeconds();r<d&&(r=d),r===d&&t<f&&(t=f),r===d&&t===f&&c<g&&(c=n.minDate.getSeconds())}if(n.maxDate!==void 0){var C=n.maxDate.getHours(),y=n.maxDate.getMinutes();r=Math.min(r,C),r===C&&(t=Math.min(y,t)),r===C&&t===y&&(c=n.maxDate.getSeconds())}return{hours:r,minutes:t,seconds:c}}typeof Object.assign!="function"&&(Object.assign=function(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];if(!n)throw TypeError("Cannot convert undefined or null to object");for(var c=function(C){C&&Object.keys(C).forEach(function(y){return n[y]=C[y]})},d=0,f=r;d<f.length;d++){var g=f[d];c(g)}return n});var jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(n){for(var r,t=1,c=arguments.length;t<c;t++){r=arguments[t];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(n[d]=r[d])}return n},jt.apply(this,arguments)},Li=globalThis&&globalThis.__spreadArrays||function(){for(var n=0,r=0,t=arguments.length;r<t;r++)n+=arguments[r].length;for(var c=Array(n),d=0,r=0;r<t;r++)for(var f=arguments[r],g=0,C=f.length;g<C;g++,d++)c[d]=f[g];return c},br=300;function yr(n,r){var t={config:jt(jt({},wn),Mt.defaultConfig),l10n:On};t.parseDate=gi({config:t.config,l10n:t.l10n}),t._handlers=[],t.pluginElements=[],t.loadedPlugins=[],t._bind=S,t._setHoursFromDate=T,t._positionCalendar=fe,t.changeMonth=ut,t.changeYear=gt,t.clear=nt,t.close=ft,t.onMouseOver=de,t._createElement=ct,t.createDay=N,t.destroy=bt,t.isEnabled=dt,t.jumpToDate=_,t.updateValue=kt,t.open=Ne,t.redraw=qt,t.set=De,t.setDate=Pe,t.toggle=Oe;function c(){t.utils={getDaysInMonth:function(a,i){return a===void 0&&(a=t.currentMonth),i===void 0&&(i=t.currentYear),a===1&&(i%4===0&&i%100!==0||i%400===0)?29:t.l10n.daysInMonth[a]}}}function d(){t.element=t.input=n,t.isOpen=!1,Gt(),Ct(),Zt(),Rt(),c(),t.isMobile||w(),q(),(t.selectedDates.length||t.config.noCalendar)&&(t.config.enableTime&&T(t.config.noCalendar?t.latestSelectedDateObj:void 0),kt(!1)),C();var a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!t.isMobile&&a&&fe(),Q("onReady")}function f(){var a;return((a=t.calendarContainer)===null||a===void 0?void 0:a.getRootNode()).activeElement||document.activeElement}function g(a){return a.bind(t)}function C(){var a=t.config;a.weekNumbers===!1&&a.showMonths===1||a.noCalendar!==!0&&window.requestAnimationFrame(function(){if(t.calendarContainer!==void 0&&(t.calendarContainer.style.visibility="hidden",t.calendarContainer.style.display="block"),t.daysContainer!==void 0){var i=(t.days.offsetWidth+1)*a.showMonths;t.daysContainer.style.width=i+"px",t.calendarContainer.style.width=i+(t.weekWrapper!==void 0?t.weekWrapper.offsetWidth:0)+"px",t.calendarContainer.style.removeProperty("visibility"),t.calendarContainer.style.removeProperty("display")}})}function y(a){if(t.selectedDates.length===0){var i=t.config.minDate===void 0||ce(new Date,t.config.minDate)>=0?new Date:new Date(t.config.minDate.getTime()),s=mi(t.config);i.setHours(s.hours,s.minutes,s.seconds,i.getMilliseconds()),t.selectedDates=[i],t.latestSelectedDateObj=i}a!==void 0&&a.type!=="blur"&&Ht(a);var m=t._input.value;I(),kt(),t._input.value!==m&&t._debouncedChange()}function F(a,i){return a%12+12*me(i===t.l10n.amPM[1])}function x(a){switch(a%24){case 0:case 12:return 12;default:return a%12}}function I(){if(!(t.hourElement===void 0||t.minuteElement===void 0)){var a=(parseInt(t.hourElement.value.slice(-2),10)||0)%24,i=(parseInt(t.minuteElement.value,10)||0)%60,s=t.secondElement!==void 0?(parseInt(t.secondElement.value,10)||0)%60:0;t.amPM!==void 0&&(a=F(a,t.amPM.textContent));var m=t.config.minTime!==void 0||t.config.minDate&&t.minDateHasTime&&t.latestSelectedDateObj&&ce(t.latestSelectedDateObj,t.config.minDate,!0)===0,D=t.config.maxTime!==void 0||t.config.maxDate&&t.maxDateHasTime&&t.latestSelectedDateObj&&ce(t.latestSelectedDateObj,t.config.maxDate,!0)===0;if(t.config.maxTime!==void 0&&t.config.minTime!==void 0&&t.config.minTime>t.config.maxTime){var k=pi(t.config.minTime.getHours(),t.config.minTime.getMinutes(),t.config.minTime.getSeconds()),U=pi(t.config.maxTime.getHours(),t.config.maxTime.getMinutes(),t.config.maxTime.getSeconds()),P=pi(a,i,s);if(P>U&&P<k){var H=hr(k);a=H[0],i=H[1],s=H[2]}}else{if(D){var A=t.config.maxTime!==void 0?t.config.maxTime:t.config.maxDate;a=Math.min(a,A.getHours()),a===A.getHours()&&(i=Math.min(i,A.getMinutes())),i===A.getMinutes()&&(s=Math.min(s,A.getSeconds()))}if(m){var Y=t.config.minTime!==void 0?t.config.minTime:t.config.minDate;a=Math.max(a,Y.getHours()),a===Y.getHours()&&i<Y.getMinutes()&&(i=Y.getMinutes()),i===Y.getMinutes()&&(s=Math.max(s,Y.getSeconds()))}}W(a,i,s)}}function T(a){var i=a||t.latestSelectedDateObj;i&&i instanceof Date&&W(i.getHours(),i.getMinutes(),i.getSeconds())}function W(a,i,s){t.latestSelectedDateObj!==void 0&&t.latestSelectedDateObj.setHours(a%24,i,s||0,0),!(!t.hourElement||!t.minuteElement||t.isMobile)&&(t.hourElement.value=ae(t.config.time_24hr?a:(12+a)%12+12*me(a%12===0)),t.minuteElement.value=ae(i),t.amPM!==void 0&&(t.amPM.textContent=t.l10n.amPM[me(a>=12)]),t.secondElement!==void 0&&(t.secondElement.value=ae(s)))}function M(a){var i=se(a),s=parseInt(i.value)+(a.delta||0);(s/1e3>1||a.key==="Enter"&&!/[^\d]/.test(s.toString()))&&gt(s)}function S(a,i,s,m){if(i instanceof Array)return i.forEach(function(D){return S(a,D,s,m)});if(a instanceof Array)return a.forEach(function(D){return S(D,i,s,m)});a.addEventListener(i,s,m),t._handlers.push({remove:function(){return a.removeEventListener(i,s,m)}})}function O(){Q("onChange")}function q(){if(t.config.wrap&&["open","close","toggle","clear"].forEach(function(s){Array.prototype.forEach.call(t.element.querySelectorAll("[data-"+s+"]"),function(m){return S(m,"click",t[s])})}),t.isMobile){Xt();return}var a=Oi(Ft,50);if(t._debouncedChange=Oi(O,br),t.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&S(t.daysContainer,"mouseover",function(s){t.config.mode==="range"&&de(se(s))}),S(t._input,"keydown",zt),t.calendarContainer!==void 0&&S(t.calendarContainer,"keydown",zt),!t.config.inline&&!t.config.static&&S(window,"resize",a),window.ontouchstart!==void 0?S(window.document,"touchstart",yt):S(window.document,"mousedown",yt),S(window.document,"focus",yt,{capture:!0}),t.config.clickOpens===!0&&(S(t._input,"focus",t.open),S(t._input,"click",t.open)),t.daysContainer!==void 0&&(S(t.monthNav,"click",xe),S(t.monthNav,["keyup","increment"],M),S(t.daysContainer,"click",ie)),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0){var i=function(s){return se(s).select()};S(t.timeContainer,["increment"],y),S(t.timeContainer,"blur",y,{capture:!0}),S(t.timeContainer,"click",B),S([t.hourElement,t.minuteElement],["focus","click"],i),t.secondElement!==void 0&&S(t.secondElement,"focus",function(){return t.secondElement&&t.secondElement.select()}),t.amPM!==void 0&&S(t.amPM,"click",function(s){y(s)})}t.config.allowInput&&S(t._input,"blur",Ae)}function _(a,i){var s=a!==void 0?t.parseDate(a):t.latestSelectedDateObj||(t.config.minDate&&t.config.minDate>t.now?t.config.minDate:t.config.maxDate&&t.config.maxDate<t.now?t.config.maxDate:t.now),m=t.currentYear,D=t.currentMonth;try{s!==void 0&&(t.currentYear=s.getFullYear(),t.currentMonth=s.getMonth())}catch(k){k.message="Invalid date supplied: "+s,t.config.errorHandler(k)}i&&t.currentYear!==m&&(Q("onYearChange"),J()),i&&(t.currentYear!==m||t.currentMonth!==D)&&Q("onMonthChange"),t.redraw()}function B(a){var i=se(a);~i.className.indexOf("arrow")&&et(a,i.classList.contains("arrowUp")?1:-1)}function et(a,i,s){var m=a&&se(a),D=s||m&&m.parentNode&&m.parentNode.firstChild,k=ge("increment");k.delta=i,D&&D.dispatchEvent(k)}function w(){var a=window.document.createDocumentFragment();if(t.calendarContainer=ct("div","flatpickr-calendar"),t.calendarContainer.tabIndex=-1,!t.config.noCalendar){if(a.appendChild(st()),t.innerContainer=ct("div","flatpickr-innerContainer"),t.config.weekNumbers){var i=tt(),s=i.weekWrapper,m=i.weekNumbers;t.innerContainer.appendChild(s),t.weekNumbers=m,t.weekWrapper=s}t.rContainer=ct("div","flatpickr-rContainer"),t.rContainer.appendChild(rt()),t.daysContainer||(t.daysContainer=ct("div","flatpickr-days"),t.daysContainer.tabIndex=-1),G(),t.rContainer.appendChild(t.daysContainer),t.innerContainer.appendChild(t.rContainer),a.appendChild(t.innerContainer)}t.config.enableTime&&a.appendChild(mt()),Bt(t.calendarContainer,"rangeMode",t.config.mode==="range"),Bt(t.calendarContainer,"animate",t.config.animate===!0),Bt(t.calendarContainer,"multiMonth",t.config.showMonths>1),t.calendarContainer.appendChild(a);var D=t.config.appendTo!==void 0&&t.config.appendTo.nodeType!==void 0;if((t.config.inline||t.config.static)&&(t.calendarContainer.classList.add(t.config.inline?"inline":"static"),t.config.inline&&(!D&&t.element.parentNode?t.element.parentNode.insertBefore(t.calendarContainer,t._input.nextSibling):t.config.appendTo!==void 0&&t.config.appendTo.appendChild(t.calendarContainer)),t.config.static)){var k=ct("div","flatpickr-wrapper");t.element.parentNode&&t.element.parentNode.insertBefore(k,t.element),k.appendChild(t.element),t.altInput&&k.appendChild(t.altInput),k.appendChild(t.calendarContainer)}!t.config.static&&!t.config.inline&&(t.config.appendTo!==void 0?t.config.appendTo:window.document.body).appendChild(t.calendarContainer)}function N(a,i,s,m){var D=dt(i,!0),k=ct("span",a,i.getDate().toString());return k.dateObj=i,k.$i=m,k.setAttribute("aria-label",t.formatDate(i,t.config.ariaDateFormat)),a.indexOf("hidden")===-1&&ce(i,t.now)===0&&(t.todayDateElem=k,k.classList.add("today"),k.setAttribute("aria-current","date")),D?(k.tabIndex=-1,Et(i)&&(k.classList.add("selected"),t.selectedDateElem=k,t.config.mode==="range"&&(Bt(k,"startRange",t.selectedDates[0]&&ce(i,t.selectedDates[0],!0)===0),Bt(k,"endRange",t.selectedDates[1]&&ce(i,t.selectedDates[1],!0)===0),a==="nextMonthDay"&&k.classList.add("inRange")))):k.classList.add("flatpickr-disabled"),t.config.mode==="range"&&Le(i)&&!Et(i)&&k.classList.add("inRange"),t.weekNumbers&&t.config.showMonths===1&&a!=="prevMonthDay"&&m%7===6&&t.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+t.config.getWeek(i)+"</span>"),Q("onDayCreate",k),k}function R(a){a.focus(),t.config.mode==="range"&&de(a)}function j(a){for(var i=a>0?0:t.config.showMonths-1,s=a>0?t.config.showMonths:-1,m=i;m!=s;m+=a)for(var D=t.daysContainer.children[m],k=a>0?0:D.children.length-1,U=a>0?D.children.length:-1,P=k;P!=U;P+=a){var H=D.children[P];if(H.className.indexOf("hidden")===-1&&dt(H.dateObj))return H}}function V(a,i){for(var s=a.className.indexOf("Month")===-1?a.dateObj.getMonth():t.currentMonth,m=i>0?t.config.showMonths:-1,D=i>0?1:-1,k=s-t.currentMonth;k!=m;k+=D)for(var U=t.daysContainer.children[k],P=s-t.currentMonth===k?a.$i+i:i<0?U.children.length-1:0,H=U.children.length,A=P;A>=0&&A<H&&A!=(i>0?H:-1);A+=D){var Y=U.children[A];if(Y.className.indexOf("hidden")===-1&&dt(Y.dateObj)&&Math.abs(a.$i-A)>=Math.abs(i))return R(Y)}t.changeMonth(D),z(j(D),0)}function z(a,i){var s=f(),m=_t(s||document.body),D=a!==void 0?a:m?s:t.selectedDateElem!==void 0&&_t(t.selectedDateElem)?t.selectedDateElem:t.todayDateElem!==void 0&&_t(t.todayDateElem)?t.todayDateElem:j(i>0?1:-1);D===void 0?t._input.focus():m?V(D,i):R(D)}function Z(a,i){for(var s=(new Date(a,i,1).getDay()-t.l10n.firstDayOfWeek+7)%7,m=t.utils.getDaysInMonth((i-1+12)%12,a),D=t.utils.getDaysInMonth(i,a),k=window.document.createDocumentFragment(),U=t.config.showMonths>1,P=U?"prevMonthDay hidden":"prevMonthDay",H=U?"nextMonthDay hidden":"nextMonthDay",A=m+1-s,Y=0;A<=m;A++,Y++)k.appendChild(N("flatpickr-day "+P,new Date(a,i-1,A),A,Y));for(A=1;A<=D;A++,Y++)k.appendChild(N("flatpickr-day",new Date(a,i,A),A,Y));for(var K=D+1;K<=42-s&&(t.config.showMonths===1||Y%7!==0);K++,Y++)k.appendChild(N("flatpickr-day "+H,new Date(a,i+1,K%D),K,Y));var ot=ct("div","dayContainer");return ot.appendChild(k),ot}function G(){if(t.daysContainer!==void 0){Da(t.daysContainer),t.weekNumbers&&Da(t.weekNumbers);for(var a=document.createDocumentFragment(),i=0;i<t.config.showMonths;i++){var s=new Date(t.currentYear,t.currentMonth,1);s.setMonth(t.currentMonth+i),a.appendChild(Z(s.getFullYear(),s.getMonth()))}t.daysContainer.appendChild(a),t.days=t.daysContainer.firstChild,t.config.mode==="range"&&t.selectedDates.length===1&&de()}}function J(){if(!(t.config.showMonths>1||t.config.monthSelectorType!=="dropdown")){var a=function(m){return t.config.minDate!==void 0&&t.currentYear===t.config.minDate.getFullYear()&&m<t.config.minDate.getMonth()?!1:!(t.config.maxDate!==void 0&&t.currentYear===t.config.maxDate.getFullYear()&&m>t.config.maxDate.getMonth())};t.monthsDropdownContainer.tabIndex=-1,t.monthsDropdownContainer.innerHTML="";for(var i=0;i<12;i++)if(a(i)){var s=ct("option","flatpickr-monthDropdown-month");s.value=new Date(t.currentYear,i).getMonth().toString(),s.textContent=Ea(i,t.config.shorthandCurrentMonth,t.l10n),s.tabIndex=-1,t.currentMonth===i&&(s.selected=!0),t.monthsDropdownContainer.appendChild(s)}}}function $(){var a=ct("div","flatpickr-month"),i=window.document.createDocumentFragment(),s;t.config.showMonths>1||t.config.monthSelectorType==="static"?s=ct("span","cur-month"):(t.monthsDropdownContainer=ct("select","flatpickr-monthDropdown-months"),t.monthsDropdownContainer.setAttribute("aria-label",t.l10n.monthAriaLabel),S(t.monthsDropdownContainer,"change",function(U){var P=se(U),H=parseInt(P.value,10);t.changeMonth(H-t.currentMonth),Q("onMonthChange")}),J(),s=t.monthsDropdownContainer);var m=wa("cur-year",{tabindex:"-1"}),D=m.getElementsByTagName("input")[0];D.setAttribute("aria-label",t.l10n.yearAriaLabel),t.config.minDate&&D.setAttribute("min",t.config.minDate.getFullYear().toString()),t.config.maxDate&&(D.setAttribute("max",t.config.maxDate.getFullYear().toString()),D.disabled=!!t.config.minDate&&t.config.minDate.getFullYear()===t.config.maxDate.getFullYear());var k=ct("div","flatpickr-current-month");return k.appendChild(s),k.appendChild(m),i.appendChild(k),a.appendChild(i),{container:a,yearElement:D,monthElement:s}}function it(){Da(t.monthNav),t.monthNav.appendChild(t.prevMonthNav),t.config.showMonths&&(t.yearElements=[],t.monthElements=[]);for(var a=t.config.showMonths;a--;){var i=$();t.yearElements.push(i.yearElement),t.monthElements.push(i.monthElement),t.monthNav.appendChild(i.container)}t.monthNav.appendChild(t.nextMonthNav)}function st(){return t.monthNav=ct("div","flatpickr-months"),t.yearElements=[],t.monthElements=[],t.prevMonthNav=ct("span","flatpickr-prev-month"),t.prevMonthNav.innerHTML=t.config.prevArrow,t.nextMonthNav=ct("span","flatpickr-next-month"),t.nextMonthNav.innerHTML=t.config.nextArrow,it(),Object.defineProperty(t,"_hidePrevMonthArrow",{get:function(){return t.__hidePrevMonthArrow},set:function(a){t.__hidePrevMonthArrow!==a&&(Bt(t.prevMonthNav,"flatpickr-disabled",a),t.__hidePrevMonthArrow=a)}}),Object.defineProperty(t,"_hideNextMonthArrow",{get:function(){return t.__hideNextMonthArrow},set:function(a){t.__hideNextMonthArrow!==a&&(Bt(t.nextMonthNav,"flatpickr-disabled",a),t.__hideNextMonthArrow=a)}}),t.currentYearElement=t.yearElements[0],Vt(),t.monthNav}function mt(){t.calendarContainer.classList.add("hasTime"),t.config.noCalendar&&t.calendarContainer.classList.add("noCalendar");var a=mi(t.config);t.timeContainer=ct("div","flatpickr-time"),t.timeContainer.tabIndex=-1;var i=ct("span","flatpickr-time-separator",":"),s=wa("flatpickr-hour",{"aria-label":t.l10n.hourAriaLabel});t.hourElement=s.getElementsByTagName("input")[0];var m=wa("flatpickr-minute",{"aria-label":t.l10n.minuteAriaLabel});if(t.minuteElement=m.getElementsByTagName("input")[0],t.hourElement.tabIndex=t.minuteElement.tabIndex=-1,t.hourElement.value=ae(t.latestSelectedDateObj?t.latestSelectedDateObj.getHours():t.config.time_24hr?a.hours:x(a.hours)),t.minuteElement.value=ae(t.latestSelectedDateObj?t.latestSelectedDateObj.getMinutes():a.minutes),t.hourElement.setAttribute("step",t.config.hourIncrement.toString()),t.minuteElement.setAttribute("step",t.config.minuteIncrement.toString()),t.hourElement.setAttribute("min",t.config.time_24hr?"0":"1"),t.hourElement.setAttribute("max",t.config.time_24hr?"23":"12"),t.hourElement.setAttribute("maxlength","2"),t.minuteElement.setAttribute("min","0"),t.minuteElement.setAttribute("max","59"),t.minuteElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(s),t.timeContainer.appendChild(i),t.timeContainer.appendChild(m),t.config.time_24hr&&t.timeContainer.classList.add("time24hr"),t.config.enableSeconds){t.timeContainer.classList.add("hasSeconds");var D=wa("flatpickr-second");t.secondElement=D.getElementsByTagName("input")[0],t.secondElement.value=ae(t.latestSelectedDateObj?t.latestSelectedDateObj.getSeconds():a.seconds),t.secondElement.setAttribute("step",t.minuteElement.getAttribute("step")),t.secondElement.setAttribute("min","0"),t.secondElement.setAttribute("max","59"),t.secondElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(ct("span","flatpickr-time-separator",":")),t.timeContainer.appendChild(D)}return t.config.time_24hr||(t.amPM=ct("span","flatpickr-am-pm",t.l10n.amPM[me((t.latestSelectedDateObj?t.hourElement.value:t.config.defaultHour)>11)]),t.amPM.title=t.l10n.toggleTitle,t.amPM.tabIndex=-1,t.timeContainer.appendChild(t.amPM)),t.timeContainer}function rt(){t.weekdayContainer?Da(t.weekdayContainer):t.weekdayContainer=ct("div","flatpickr-weekdays");for(var a=t.config.showMonths;a--;){var i=ct("div","flatpickr-weekdaycontainer");t.weekdayContainer.appendChild(i)}return vt(),t.weekdayContainer}function vt(){if(t.weekdayContainer){var a=t.l10n.firstDayOfWeek,i=Li(t.l10n.weekdays.shorthand);a>0&&a<i.length&&(i=Li(i.splice(a,i.length),i.splice(0,a)));for(var s=t.config.showMonths;s--;)t.weekdayContainer.children[s].innerHTML=`
      <span class='flatpickr-weekday'>
        `+i.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function tt(){t.calendarContainer.classList.add("hasWeeks");var a=ct("div","flatpickr-weekwrapper");a.appendChild(ct("span","flatpickr-weekday",t.l10n.weekAbbreviation));var i=ct("div","flatpickr-weeks");return a.appendChild(i),{weekWrapper:a,weekNumbers:i}}function ut(a,i){i===void 0&&(i=!0);var s=i?a:a-t.currentMonth;s<0&&t._hidePrevMonthArrow===!0||s>0&&t._hideNextMonthArrow===!0||(t.currentMonth+=s,(t.currentMonth<0||t.currentMonth>11)&&(t.currentYear+=t.currentMonth>11?1:-1,t.currentMonth=(t.currentMonth+12)%12,Q("onYearChange"),J()),G(),Q("onMonthChange"),Vt())}function nt(a,i){if(a===void 0&&(a=!0),i===void 0&&(i=!0),t.input.value="",t.altInput!==void 0&&(t.altInput.value=""),t.mobileInput!==void 0&&(t.mobileInput.value=""),t.selectedDates=[],t.latestSelectedDateObj=void 0,i===!0&&(t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth()),t.config.enableTime===!0){var s=mi(t.config),m=s.hours,D=s.minutes,k=s.seconds;W(m,D,k)}t.redraw(),a&&Q("onChange")}function ft(){t.isOpen=!1,t.isMobile||(t.calendarContainer!==void 0&&t.calendarContainer.classList.remove("open"),t._input!==void 0&&t._input.classList.remove("active")),Q("onClose")}function bt(){t.config!==void 0&&Q("onDestroy");for(var a=t._handlers.length;a--;)t._handlers[a].remove();if(t._handlers=[],t.mobileInput)t.mobileInput.parentNode&&t.mobileInput.parentNode.removeChild(t.mobileInput),t.mobileInput=void 0;else if(t.calendarContainer&&t.calendarContainer.parentNode)if(t.config.static&&t.calendarContainer.parentNode){var i=t.calendarContainer.parentNode;if(i.lastChild&&i.removeChild(i.lastChild),i.parentNode){for(;i.firstChild;)i.parentNode.insertBefore(i.firstChild,i);i.parentNode.removeChild(i)}}else t.calendarContainer.parentNode.removeChild(t.calendarContainer);t.altInput&&(t.input.type="text",t.altInput.parentNode&&t.altInput.parentNode.removeChild(t.altInput),delete t.altInput),t.input&&(t.input.type=t.input._type,t.input.classList.remove("flatpickr-input"),t.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(s){try{delete t[s]}catch{}})}function pt(a){return t.calendarContainer.contains(a)}function yt(a){if(t.isOpen&&!t.config.inline){var i=se(a),s=pt(i),m=i===t.input||i===t.altInput||t.element.contains(i)||a.path&&a.path.indexOf&&(~a.path.indexOf(t.input)||~a.path.indexOf(t.altInput)),D=!m&&!s&&!pt(a.relatedTarget),k=!t.config.ignoredFocusElements.some(function(U){return U.contains(i)});D&&k&&(t.config.allowInput&&t.setDate(t._input.value,!1,t.config.altInput?t.config.altFormat:t.config.dateFormat),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0&&t.input.value!==""&&t.input.value!==void 0&&y(),t.close(),t.config&&t.config.mode==="range"&&t.selectedDates.length===1&&t.clear(!1))}}function gt(a){if(!(!a||t.config.minDate&&a<t.config.minDate.getFullYear()||t.config.maxDate&&a>t.config.maxDate.getFullYear())){var i=a,s=t.currentYear!==i;t.currentYear=i||t.currentYear,t.config.maxDate&&t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth=Math.min(t.config.maxDate.getMonth(),t.currentMonth):t.config.minDate&&t.currentYear===t.config.minDate.getFullYear()&&(t.currentMonth=Math.max(t.config.minDate.getMonth(),t.currentMonth)),s&&(t.redraw(),Q("onYearChange"),J())}}function dt(a,i){var s;i===void 0&&(i=!0);var m=t.parseDate(a,void 0,i);if(t.config.minDate&&m&&ce(m,t.config.minDate,i!==void 0?i:!t.minDateHasTime)<0||t.config.maxDate&&m&&ce(m,t.config.maxDate,i!==void 0?i:!t.maxDateHasTime)>0)return!1;if(!t.config.enable&&t.config.disable.length===0)return!0;if(m===void 0)return!1;for(var D=!!t.config.enable,k=(s=t.config.enable)!==null&&s!==void 0?s:t.config.disable,U=0,P=void 0;U<k.length;U++){if(P=k[U],typeof P=="function"&&P(m))return D;if(P instanceof Date&&m!==void 0&&P.getTime()===m.getTime())return D;if(typeof P=="string"){var H=t.parseDate(P,void 0,!0);return H&&H.getTime()===m.getTime()?D:!D}else if(typeof P=="object"&&m!==void 0&&P.from&&P.to&&m.getTime()>=P.from.getTime()&&m.getTime()<=P.to.getTime())return D}return!D}function _t(a){return t.daysContainer!==void 0?a.className.indexOf("hidden")===-1&&a.className.indexOf("flatpickr-disabled")===-1&&t.daysContainer.contains(a):!1}function Ae(a){var i=a.target===t._input,s=t._input.value.trimEnd()!==re();i&&s&&!(a.relatedTarget&&pt(a.relatedTarget))&&t.setDate(t._input.value,!0,a.target===t.altInput?t.config.altFormat:t.config.dateFormat)}function zt(a){var i=se(a),s=t.config.wrap?n.contains(i):i===t._input,m=t.config.allowInput,D=t.isOpen&&(!m||!s),k=t.config.inline&&s&&!m;if(a.keyCode===13&&s){if(m)return t.setDate(t._input.value,!0,i===t.altInput?t.config.altFormat:t.config.dateFormat),t.close(),i.blur();t.open()}else if(pt(i)||D||k){var U=!!t.timeContainer&&t.timeContainer.contains(i);switch(a.keyCode){case 13:U?(a.preventDefault(),y(),Yt()):ie(a);break;case 27:a.preventDefault(),Yt();break;case 8:case 46:s&&!t.config.allowInput&&(a.preventDefault(),t.clear());break;case 37:case 39:if(!U&&!s){a.preventDefault();var P=f();if(t.daysContainer!==void 0&&(m===!1||P&&_t(P))){var H=a.keyCode===39?1:-1;a.ctrlKey?(a.stopPropagation(),ut(H),z(j(1),0)):z(void 0,H)}}else t.hourElement&&t.hourElement.focus();break;case 38:case 40:a.preventDefault();var A=a.keyCode===40?1:-1;t.daysContainer&&i.$i!==void 0||i===t.input||i===t.altInput?a.ctrlKey?(a.stopPropagation(),gt(t.currentYear-A),z(j(1),0)):U||z(void 0,A*7):i===t.currentYearElement?gt(t.currentYear-A):t.config.enableTime&&(!U&&t.hourElement&&t.hourElement.focus(),y(a),t._debouncedChange());break;case 9:if(U){var Y=[t.hourElement,t.minuteElement,t.secondElement,t.amPM].concat(t.pluginElements).filter(function(X){return X}),K=Y.indexOf(i);if(K!==-1){var ot=Y[K+(a.shiftKey?-1:1)];a.preventDefault(),(ot||t._input).focus()}}else!t.config.noCalendar&&t.daysContainer&&t.daysContainer.contains(i)&&a.shiftKey&&(a.preventDefault(),t._input.focus());break}}if(t.amPM!==void 0&&i===t.amPM)switch(a.key){case t.l10n.amPM[0].charAt(0):case t.l10n.amPM[0].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[0],I(),kt();break;case t.l10n.amPM[1].charAt(0):case t.l10n.amPM[1].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[1],I(),kt();break}(s||pt(i))&&Q("onKeyDown",a)}function de(a,i){if(i===void 0&&(i="flatpickr-day"),!(t.selectedDates.length!==1||a&&(!a.classList.contains(i)||a.classList.contains("flatpickr-disabled")))){for(var s=a?a.dateObj.getTime():t.days.firstElementChild.dateObj.getTime(),m=t.parseDate(t.selectedDates[0],void 0,!0).getTime(),D=Math.min(s,t.selectedDates[0].getTime()),k=Math.max(s,t.selectedDates[0].getTime()),U=!1,P=0,H=0,A=D;A<k;A+=vr.DAY)dt(new Date(A),!0)||(U=U||A>D&&A<k,A<m&&(!P||A>P)?P=A:A>m&&(!H||A<H)&&(H=A));var Y=Array.from(t.rContainer.querySelectorAll("*:nth-child(-n+"+t.config.showMonths+") > ."+i));Y.forEach(function(K){var ot=K.dateObj,X=ot.getTime(),ht=P>0&&X<P||H>0&&X>H;if(ht){K.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(oe){K.classList.remove(oe)});return}else if(U&&!ht)return;["startRange","inRange","endRange","notAllowed"].forEach(function(oe){K.classList.remove(oe)}),a!==void 0&&(a.classList.add(s<=t.selectedDates[0].getTime()?"startRange":"endRange"),m<s&&X===m?K.classList.add("startRange"):m>s&&X===m&&K.classList.add("endRange"),X>=P&&(H===0||X<=H)&&gr(X,m,s)&&K.classList.add("inRange"))})}}function Ft(){t.isOpen&&!t.config.static&&!t.config.inline&&fe()}function Ne(a,i){if(i===void 0&&(i=t._positionElement),t.isMobile===!0){if(a){a.preventDefault();var s=se(a);s&&s.blur()}t.mobileInput!==void 0&&(t.mobileInput.focus(),t.mobileInput.click()),Q("onOpen");return}else if(t._input.disabled||t.config.inline)return;var m=t.isOpen;t.isOpen=!0,m||(t.calendarContainer.classList.add("open"),t._input.classList.add("active"),Q("onOpen"),fe(i)),t.config.enableTime===!0&&t.config.noCalendar===!0&&t.config.allowInput===!1&&(a===void 0||!t.timeContainer.contains(a.relatedTarget))&&setTimeout(function(){return t.hourElement.select()},50)}function Kt(a){return function(i){var s=t.config["_"+a+"Date"]=t.parseDate(i,t.config.dateFormat),m=t.config["_"+(a==="min"?"max":"min")+"Date"];s!==void 0&&(t[a==="min"?"minDateHasTime":"maxDateHasTime"]=s.getHours()>0||s.getMinutes()>0||s.getSeconds()>0),t.selectedDates&&(t.selectedDates=t.selectedDates.filter(function(D){return dt(D)}),!t.selectedDates.length&&a==="min"&&T(s),kt()),t.daysContainer&&(qt(),s!==void 0?t.currentYearElement[a]=s.getFullYear().toString():t.currentYearElement.removeAttribute(a),t.currentYearElement.disabled=!!m&&s!==void 0&&m.getFullYear()===s.getFullYear())}}function Gt(){var a=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=jt(jt({},JSON.parse(JSON.stringify(n.dataset||{}))),r),s={};t.config.parseDate=i.parseDate,t.config.formatDate=i.formatDate,Object.defineProperty(t.config,"enable",{get:function(){return t.config._enable},set:function(Y){t.config._enable=Ee(Y)}}),Object.defineProperty(t.config,"disable",{get:function(){return t.config._disable},set:function(Y){t.config._disable=Ee(Y)}});var m=i.mode==="time";if(!i.dateFormat&&(i.enableTime||m)){var D=Mt.defaultConfig.dateFormat||wn.dateFormat;s.dateFormat=i.noCalendar||m?"H:i"+(i.enableSeconds?":S":""):D+" H:i"+(i.enableSeconds?":S":"")}if(i.altInput&&(i.enableTime||m)&&!i.altFormat){var k=Mt.defaultConfig.altFormat||wn.altFormat;s.altFormat=i.noCalendar||m?"h:i"+(i.enableSeconds?":S K":" K"):k+(" h:i"+(i.enableSeconds?":S":"")+" K")}Object.defineProperty(t.config,"minDate",{get:function(){return t.config._minDate},set:Kt("min")}),Object.defineProperty(t.config,"maxDate",{get:function(){return t.config._maxDate},set:Kt("max")});var U=function(Y){return function(K){t.config[Y==="min"?"_minTime":"_maxTime"]=t.parseDate(K,"H:i:S")}};Object.defineProperty(t.config,"minTime",{get:function(){return t.config._minTime},set:U("min")}),Object.defineProperty(t.config,"maxTime",{get:function(){return t.config._maxTime},set:U("max")}),i.mode==="time"&&(t.config.noCalendar=!0,t.config.enableTime=!0),Object.assign(t.config,s,i);for(var P=0;P<a.length;P++)t.config[a[P]]=t.config[a[P]]===!0||t.config[a[P]]==="true";ui.filter(function(Y){return t.config[Y]!==void 0}).forEach(function(Y){t.config[Y]=di(t.config[Y]||[]).map(g)}),t.isMobile=!t.config.disableMobile&&!t.config.inline&&t.config.mode==="single"&&!t.config.disable.length&&!t.config.enable&&!t.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var P=0;P<t.config.plugins.length;P++){var H=t.config.plugins[P](t)||{};for(var A in H)ui.indexOf(A)>-1?t.config[A]=di(H[A]).map(g).concat(t.config[A]):typeof i[A]>"u"&&(t.config[A]=H[A])}i.altInputClass||(t.config.altInputClass=ye().className+" "+t.config.altInputClass),Q("onParseConfig")}function ye(){return t.config.wrap?n.querySelector("[data-input]"):n}function Ct(){typeof t.config.locale!="object"&&typeof Mt.l10ns[t.config.locale]>"u"&&t.config.errorHandler(new Error("flatpickr: invalid locale "+t.config.locale)),t.l10n=jt(jt({},Mt.l10ns.default),typeof t.config.locale=="object"?t.config.locale:t.config.locale!=="default"?Mt.l10ns[t.config.locale]:void 0),tn.D="("+t.l10n.weekdays.shorthand.join("|")+")",tn.l="("+t.l10n.weekdays.longhand.join("|")+")",tn.M="("+t.l10n.months.shorthand.join("|")+")",tn.F="("+t.l10n.months.longhand.join("|")+")",tn.K="("+t.l10n.amPM[0]+"|"+t.l10n.amPM[1]+"|"+t.l10n.amPM[0].toLowerCase()+"|"+t.l10n.amPM[1].toLowerCase()+")";var a=jt(jt({},r),JSON.parse(JSON.stringify(n.dataset||{})));a.time_24hr===void 0&&Mt.defaultConfig.time_24hr===void 0&&(t.config.time_24hr=t.l10n.time_24hr),t.formatDate=Ki(t),t.parseDate=gi({config:t.config,l10n:t.l10n})}function fe(a){if(typeof t.config.position=="function")return void t.config.position(t,a);if(t.calendarContainer!==void 0){Q("onPreCalendarPosition");var i=a||t._positionElement,s=Array.prototype.reduce.call(t.calendarContainer.children,function(je,_e){return je+_e.offsetHeight},0),m=t.calendarContainer.offsetWidth,D=t.config.position.split(" "),k=D[0],U=D.length>1?D[1]:null,P=i.getBoundingClientRect(),H=window.innerHeight-P.bottom,A=k==="above"||k!=="below"&&H<s&&P.top>s,Y=window.pageYOffset+P.top+(A?-s-2:i.offsetHeight+2);if(Bt(t.calendarContainer,"arrowTop",!A),Bt(t.calendarContainer,"arrowBottom",A),!t.config.inline){var K=window.pageXOffset+P.left,ot=!1,X=!1;U==="center"?(K-=(m-P.width)/2,ot=!0):U==="right"&&(K-=m-P.width,X=!0),Bt(t.calendarContainer,"arrowLeft",!ot&&!X),Bt(t.calendarContainer,"arrowCenter",ot),Bt(t.calendarContainer,"arrowRight",X);var ht=window.document.body.offsetWidth-(window.pageXOffset+P.right),oe=K+m>window.document.body.offsetWidth,Dt=ht+m>window.document.body.offsetWidth;if(Bt(t.calendarContainer,"rightMost",oe),!t.config.static)if(t.calendarContainer.style.top=Y+"px",!oe)t.calendarContainer.style.left=K+"px",t.calendarContainer.style.right="auto";else if(!Dt)t.calendarContainer.style.left="auto",t.calendarContainer.style.right=ht+"px";else{var $t=wt();if($t===void 0)return;var le=window.document.body.offsetWidth,Me=Math.max(0,le/2-m/2),At=".flatpickr-calendar.centerMost:before",te=".flatpickr-calendar.centerMost:after",ee=$t.cssRules.length,pe="{left:"+P.left+"px;right:auto;}";Bt(t.calendarContainer,"rightMost",!1),Bt(t.calendarContainer,"centerMost",!0),$t.insertRule(At+","+te+pe,ee),t.calendarContainer.style.left=Me+"px",t.calendarContainer.style.right="auto"}}}}function wt(){for(var a=null,i=0;i<document.styleSheets.length;i++){var s=document.styleSheets[i];if(s.cssRules){try{s.cssRules}catch{continue}a=s;break}}return a??Jt()}function Jt(){var a=document.createElement("style");return document.head.appendChild(a),a.sheet}function qt(){t.config.noCalendar||t.isMobile||(J(),Vt(),G())}function Yt(){t._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(t.close,0):t.close()}function ie(a){a.preventDefault(),a.stopPropagation();var i=function(Y){return Y.classList&&Y.classList.contains("flatpickr-day")&&!Y.classList.contains("flatpickr-disabled")&&!Y.classList.contains("notAllowed")},s=zi(se(a),i);if(s!==void 0){var m=s,D=t.latestSelectedDateObj=new Date(m.dateObj.getTime()),k=(D.getMonth()<t.currentMonth||D.getMonth()>t.currentMonth+t.config.showMonths-1)&&t.config.mode!=="range";if(t.selectedDateElem=m,t.config.mode==="single")t.selectedDates=[D];else if(t.config.mode==="multiple"){var U=Et(D);U?t.selectedDates.splice(parseInt(U),1):t.selectedDates.push(D)}else t.config.mode==="range"&&(t.selectedDates.length===2&&t.clear(!1,!1),t.latestSelectedDateObj=D,t.selectedDates.push(D),ce(D,t.selectedDates[0],!0)!==0&&t.selectedDates.sort(function(Y,K){return Y.getTime()-K.getTime()}));if(I(),k){var P=t.currentYear!==D.getFullYear();t.currentYear=D.getFullYear(),t.currentMonth=D.getMonth(),P&&(Q("onYearChange"),J()),Q("onMonthChange")}if(Vt(),G(),kt(),!k&&t.config.mode!=="range"&&t.config.showMonths===1?R(m):t.selectedDateElem!==void 0&&t.hourElement===void 0&&t.selectedDateElem&&t.selectedDateElem.focus(),t.hourElement!==void 0&&t.hourElement!==void 0&&t.hourElement.focus(),t.config.closeOnSelect){var H=t.config.mode==="single"&&!t.config.enableTime,A=t.config.mode==="range"&&t.selectedDates.length===2&&!t.config.enableTime;(H||A)&&Yt()}O()}}var Tt={locale:[Ct,vt],showMonths:[it,C,rt],minDate:[_],maxDate:[_],positionElement:[Qt],clickOpens:[function(){t.config.clickOpens===!0?(S(t._input,"focus",t.open),S(t._input,"click",t.open)):(t._input.removeEventListener("focus",t.open),t._input.removeEventListener("click",t.open))}]};function De(a,i){if(a!==null&&typeof a=="object"){Object.assign(t.config,a);for(var s in a)Tt[s]!==void 0&&Tt[s].forEach(function(m){return m()})}else t.config[a]=i,Tt[a]!==void 0?Tt[a].forEach(function(m){return m()}):ui.indexOf(a)>-1&&(t.config[a]=di(i));t.redraw(),kt(!0)}function we(a,i){var s=[];if(a instanceof Array)s=a.map(function(m){return t.parseDate(m,i)});else if(a instanceof Date||typeof a=="number")s=[t.parseDate(a,i)];else if(typeof a=="string")switch(t.config.mode){case"single":case"time":s=[t.parseDate(a,i)];break;case"multiple":s=a.split(t.config.conjunction).map(function(m){return t.parseDate(m,i)});break;case"range":s=a.split(t.l10n.rangeSeparator).map(function(m){return t.parseDate(m,i)});break}else t.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(a)));t.selectedDates=t.config.allowInvalidPreload?s:s.filter(function(m){return m instanceof Date&&dt(m,!1)}),t.config.mode==="range"&&t.selectedDates.sort(function(m,D){return m.getTime()-D.getTime()})}function Pe(a,i,s){if(i===void 0&&(i=!1),s===void 0&&(s=t.config.dateFormat),a!==0&&!a||a instanceof Array&&a.length===0)return t.clear(i);we(a,s),t.latestSelectedDateObj=t.selectedDates[t.selectedDates.length-1],t.redraw(),_(void 0,i),T(),t.selectedDates.length===0&&t.clear(!1),kt(i),i&&Q("onChange")}function Ee(a){return a.slice().map(function(i){return typeof i=="string"||typeof i=="number"||i instanceof Date?t.parseDate(i,void 0,!0):i&&typeof i=="object"&&i.from&&i.to?{from:t.parseDate(i.from,void 0),to:t.parseDate(i.to,void 0)}:i}).filter(function(i){return i})}function Rt(){t.selectedDates=[],t.now=t.parseDate(t.config.now)||new Date;var a=t.config.defaultDate||((t.input.nodeName==="INPUT"||t.input.nodeName==="TEXTAREA")&&t.input.placeholder&&t.input.value===t.input.placeholder?null:t.input.value);a&&we(a,t.config.dateFormat),t._initialDate=t.selectedDates.length>0?t.selectedDates[0]:t.config.minDate&&t.config.minDate.getTime()>t.now.getTime()?t.config.minDate:t.config.maxDate&&t.config.maxDate.getTime()<t.now.getTime()?t.config.maxDate:t.now,t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth(),t.selectedDates.length>0&&(t.latestSelectedDateObj=t.selectedDates[0]),t.config.minTime!==void 0&&(t.config.minTime=t.parseDate(t.config.minTime,"H:i")),t.config.maxTime!==void 0&&(t.config.maxTime=t.parseDate(t.config.maxTime,"H:i")),t.minDateHasTime=!!t.config.minDate&&(t.config.minDate.getHours()>0||t.config.minDate.getMinutes()>0||t.config.minDate.getSeconds()>0),t.maxDateHasTime=!!t.config.maxDate&&(t.config.maxDate.getHours()>0||t.config.maxDate.getMinutes()>0||t.config.maxDate.getSeconds()>0)}function Zt(){if(t.input=ye(),!t.input){t.config.errorHandler(new Error("Invalid input element specified"));return}t.input._type=t.input.type,t.input.type="text",t.input.classList.add("flatpickr-input"),t._input=t.input,t.config.altInput&&(t.altInput=ct(t.input.nodeName,t.config.altInputClass),t._input=t.altInput,t.altInput.placeholder=t.input.placeholder,t.altInput.disabled=t.input.disabled,t.altInput.required=t.input.required,t.altInput.tabIndex=t.input.tabIndex,t.altInput.type="text",t.input.setAttribute("type","hidden"),!t.config.static&&t.input.parentNode&&t.input.parentNode.insertBefore(t.altInput,t.input.nextSibling)),t.config.allowInput||t._input.setAttribute("readonly","readonly"),Qt()}function Qt(){t._positionElement=t.config.positionElement||t._input}function Xt(){var a=t.config.enableTime?t.config.noCalendar?"time":"datetime-local":"date";t.mobileInput=ct("input",t.input.className+" flatpickr-mobile"),t.mobileInput.tabIndex=1,t.mobileInput.type=a,t.mobileInput.disabled=t.input.disabled,t.mobileInput.required=t.input.required,t.mobileInput.placeholder=t.input.placeholder,t.mobileFormatStr=a==="datetime-local"?"Y-m-d\\TH:i:S":a==="date"?"Y-m-d":"H:i:S",t.selectedDates.length>0&&(t.mobileInput.defaultValue=t.mobileInput.value=t.formatDate(t.selectedDates[0],t.mobileFormatStr)),t.config.minDate&&(t.mobileInput.min=t.formatDate(t.config.minDate,"Y-m-d")),t.config.maxDate&&(t.mobileInput.max=t.formatDate(t.config.maxDate,"Y-m-d")),t.input.getAttribute("step")&&(t.mobileInput.step=String(t.input.getAttribute("step"))),t.input.type="hidden",t.altInput!==void 0&&(t.altInput.type="hidden");try{t.input.parentNode&&t.input.parentNode.insertBefore(t.mobileInput,t.input.nextSibling)}catch{}S(t.mobileInput,"change",function(i){t.setDate(se(i).value,!1,t.mobileFormatStr),Q("onChange"),Q("onClose")})}function Oe(a){if(t.isOpen===!0)return t.close();t.open(a)}function Q(a,i){if(t.config!==void 0){var s=t.config[a];if(s!==void 0&&s.length>0)for(var m=0;s[m]&&m<s.length;m++)s[m](t.selectedDates,t.input.value,t,i);a==="onChange"&&(t.input.dispatchEvent(ge("change")),t.input.dispatchEvent(ge("input")))}}function ge(a){var i=document.createEvent("Event");return i.initEvent(a,!0,!0),i}function Et(a){for(var i=0;i<t.selectedDates.length;i++){var s=t.selectedDates[i];if(s instanceof Date&&ce(s,a)===0)return""+i}return!1}function Le(a){return t.config.mode!=="range"||t.selectedDates.length<2?!1:ce(a,t.selectedDates[0])>=0&&ce(a,t.selectedDates[1])<=0}function Vt(){t.config.noCalendar||t.isMobile||!t.monthNav||(t.yearElements.forEach(function(a,i){var s=new Date(t.currentYear,t.currentMonth,1);s.setMonth(t.currentMonth+i),t.config.showMonths>1||t.config.monthSelectorType==="static"?t.monthElements[i].textContent=Ea(s.getMonth(),t.config.shorthandCurrentMonth,t.l10n)+" ":t.monthsDropdownContainer.value=s.getMonth().toString(),a.value=s.getFullYear().toString()}),t._hidePrevMonthArrow=t.config.minDate!==void 0&&(t.currentYear===t.config.minDate.getFullYear()?t.currentMonth<=t.config.minDate.getMonth():t.currentYear<t.config.minDate.getFullYear()),t._hideNextMonthArrow=t.config.maxDate!==void 0&&(t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth+1>t.config.maxDate.getMonth():t.currentYear>t.config.maxDate.getFullYear()))}function re(a){var i=a||(t.config.altInput?t.config.altFormat:t.config.dateFormat);return t.selectedDates.map(function(s){return t.formatDate(s,i)}).filter(function(s,m,D){return t.config.mode!=="range"||t.config.enableTime||D.indexOf(s)===m}).join(t.config.mode!=="range"?t.config.conjunction:t.l10n.rangeSeparator)}function kt(a){a===void 0&&(a=!0),t.mobileInput!==void 0&&t.mobileFormatStr&&(t.mobileInput.value=t.latestSelectedDateObj!==void 0?t.formatDate(t.latestSelectedDateObj,t.mobileFormatStr):""),t.input.value=re(t.config.dateFormat),t.altInput!==void 0&&(t.altInput.value=re(t.config.altFormat)),a!==!1&&Q("onValueUpdate")}function xe(a){var i=se(a),s=t.prevMonthNav.contains(i),m=t.nextMonthNav.contains(i);s||m?ut(s?-1:1):t.yearElements.indexOf(i)>=0?i.select():i.classList.contains("arrowUp")?t.changeYear(t.currentYear+1):i.classList.contains("arrowDown")&&t.changeYear(t.currentYear-1)}function Ht(a){a.preventDefault();var i=a.type==="keydown",s=se(a),m=s;t.amPM!==void 0&&s===t.amPM&&(t.amPM.textContent=t.l10n.amPM[me(t.amPM.textContent===t.l10n.amPM[0])]);var D=parseFloat(m.getAttribute("min")),k=parseFloat(m.getAttribute("max")),U=parseFloat(m.getAttribute("step")),P=parseInt(m.value,10),H=a.delta||(i?a.which===38?1:-1:0),A=P+U*H;if(typeof m.value<"u"&&m.value.length===2){var Y=m===t.hourElement,K=m===t.minuteElement;A<D?(A=k+A+me(!Y)+(me(Y)&&me(!t.amPM)),K&&et(void 0,-1,t.hourElement)):A>k&&(A=m===t.hourElement?A-k-me(!t.amPM):D,K&&et(void 0,1,t.hourElement)),t.amPM&&Y&&(U===1?A+P===23:Math.abs(A-P)>U)&&(t.amPM.textContent=t.l10n.amPM[me(t.amPM.textContent===t.l10n.amPM[0])]),m.value=ae(A)}}return d(),t}function En(n,r){for(var t=Array.prototype.slice.call(n).filter(function(g){return g instanceof HTMLElement}),c=[],d=0;d<t.length;d++){var f=t[d];try{if(f.getAttribute("data-fp-omit")!==null)continue;f._flatpickr!==void 0&&(f._flatpickr.destroy(),f._flatpickr=void 0),f._flatpickr=yr(f,r||{}),c.push(f._flatpickr)}catch(g){console.error(g)}}return c.length===1?c[0]:c}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(n){return En(this,n)},HTMLElement.prototype.flatpickr=function(n){return En([this],n)});var Mt=function(n,r){return typeof n=="string"?En(window.document.querySelectorAll(n),r):n instanceof Node?En([n],r):En(n,r)};Mt.defaultConfig={};Mt.l10ns={en:jt({},On),default:jt({},On)};Mt.localize=function(n){Mt.l10ns.default=jt(jt({},Mt.l10ns.default),n)};Mt.setDefaults=function(n){Mt.defaultConfig=jt(jt({},Mt.defaultConfig),n)};Mt.parseDate=gi({});Mt.formatDate=Ki({});Mt.compareDates=ce;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(n){return En(this,n)});Date.prototype.fp_incr=function(n){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof n=="string"?parseInt(n,10):n))};typeof window<"u"&&(window.flatpickr=Mt);function xa(n,r,t){var c=[];for(const d in n)if(n[d]==!0){let f=r.find(g=>g.id==d);c.push(f)}t(c)}function ue(n,r){return r.map(c=>c[n]==-127?NaN:c[n])}function Dr(n){let r=n.split("T")[0],t=r.split("-")[0];return Number(t)+1+"-"+r.split("-")[1]+"-"+r.split("-")[2]+"T"+n.split("T")[1]}function Gi(n,r){return r.filter(c=>{if(c.sid==n)return c})}async function vi(n,r,t,c,d){var f=[],g=[];for(let F of r){var C=new URLSearchParams({fromDate:n[0],toDate:n[1],deviceMac:F.mac});let I=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${C.toString()}`)).json();d.forEach(T=>{var W=Ln(T);if(T!="h"){var M=I.filter(N=>N.type===T);if(M){var S={x:ue("ts",M),y:ue("val",M),name:F.description+W,type:"scatter"};f.push(S)}}else for(var O=I.filter(N=>N.type===T),q=I.filter(N=>N.type==="t"),_=ue("val",q),B=[],et=[],w=0;w<3;w++){B.push(Gi(w+2,O)),et.push(Ji(_,B[w]));var S={x:ue("ts",B[w]),y:et[w],name:F.description+" "+(w+1)+W,type:"scatter"};f.push(S)}})}for(var y=0;y<f.length;y++)g.push(y);t&&g&&f&&t.animate(c,{data:f,traces:g,layout:{xaxis:{range:[n[0],n[1]]}}},{transition:{duration:1e3,easing:"cubic-in-out"},frame:{duration:1e3}})}function Ln(n){return n=="t"?" - Temp. solo":n=="tar"?" - Temp. ar":n=="h"?"":n=="b"?" - Bateria":" - Desconhecido"}function Ji(n,r){for(var t=ue("val",r),c=[],d=0;d<t.length;d++){var f=t[d],g=n[d];f>=0&&f<1e3?c.push(Math.abs(-20*(f/1e3*(1+.018*(25-g))-.55))):f>=1e3&&f<8e3?c.push(Math.abs((-3.213*(f/1e3)-4.093)/(1-.009733*(f/1e3)-.01205*g))):f>=8e3?c.push(Math.abs(-2.246-5.239*(f/1e3)*(1+.018*(g-24))-.06756*Math.pow(f/1e3,2)*Math.pow(1+.018*(g-24),2))):(console.log("Error"),c.push(null))}return c}function wr(n){let r,t,c,d,f,g,C,y,F,x,I,T,W,M,S,O,q,_,B,et,w,N,R,j,V,z,Z,G,J,$,it,st,mt,rt;return{c(){r=o(`



`),t=h("li"),c=o(`
	`),d=h("div"),f=o(`
		`),g=h("div"),C=o(`
			`),y=h("div"),F=o(`
				`),x=h("h3"),I=o("MEASUREMENTS TEMPERATURE"),T=o(`
			`),W=o(`
			`),M=h("div"),S=o(`				
				`),O=h("button"),q=o("Compare"),_=o(`
				`),B=h("input"),et=o(`
				`),w=h("button"),N=o(`
					`),R=Mn("svg"),j=Mn("path"),V=o(`
				`),z=o(`
			`),Z=o(`
		`),G=o(`
	`),J=o(`
	`),$=h("div"),it=It(" Plotly "),st=o(`
`),this.h()},l(vt){r=l(vt,`



`),t=v(vt,"LI",{class:!0});var tt=b(t);c=l(tt,`
	`),d=v(tt,"DIV",{class:!0});var ut=b(d);f=l(ut,`
		`),g=v(ut,"DIV",{class:!0});var nt=b(g);C=l(nt,`
			`),y=v(nt,"DIV",{class:!0});var ft=b(y);F=l(ft,`
				`),x=v(ft,"H3",{class:!0});var bt=b(x);I=l(bt,"MEASUREMENTS TEMPERATURE"),bt.forEach(p),T=l(ft,`
			`),ft.forEach(p),W=l(nt,`
			`),M=v(nt,"DIV",{class:!0});var pt=b(M);S=l(pt,`				
				`),O=v(pt,"BUTTON",{title:!0,class:!0});var yt=b(O);q=l(yt,"Compare"),yt.forEach(p),_=l(pt,`
				`),B=v(pt,"INPUT",{type:!0,id:!0,class:!0}),et=l(pt,`
				`),w=v(pt,"BUTTON",{class:!0});var gt=b(w);N=l(gt,`
					`),R=_n(gt,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var dt=b(R);j=_n(dt,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),b(j).forEach(p),dt.forEach(p),V=l(gt,`
				`),gt.forEach(p),z=l(pt,`
			`),pt.forEach(p),Z=l(nt,`
		`),nt.forEach(p),G=l(ut,`
	`),ut.forEach(p),J=l(tt,`
	`),$=v(tt,"DIV",{class:!0});var _t=b($);it=St(_t," Plotly "),_t.forEach(p),st=l(tt,`
`),tt.forEach(p),this.h()},h(){u(x,"class","text-base font-semibold leading-6"),u(y,"class","ml-4 mt-2"),u(O,"title","Compare with same period last year"),u(O,"class","rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),u(B,"type","text"),u(B,"id","flatPickrTemp"),u(B,"class","h-10 w-60 text-sm text-gray-500"),u(j,"stroke-linecap","round"),u(j,"stroke-linejoin","round"),u(j,"d","M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"),u(R,"xmlns","http://www.w3.org/2000/svg"),u(R,"fill","none"),u(R,"viewBox","0 0 24 24"),u(R,"stroke-width","1.5"),u(R,"stroke","currentColor"),u(R,"class","h-6 w-6"),u(w,"class","text-sm leading-6"),u(M,"class","ml-4 mt-2 flex-shrink-0"),u(g,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),u(d,"class","h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6"),u($,"class","h-[40vh] w-full"),u(t,"class","col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow")},m(vt,tt){at(vt,r,tt),at(vt,t,tt),e(t,c),e(t,d),e(d,f),e(d,g),e(g,C),e(g,y),e(y,F),e(y,x),e(x,I),e(y,T),e(g,W),e(g,M),e(M,S),e(M,O),e(O,q),e(M,_),e(M,B),n[8](B),e(M,et),e(M,w),e(w,N),e(w,R),e(R,j),e(w,V),e(M,z),e(g,Z),e(d,G),e(t,J),e(t,$),e($,it),n[9]($),e(t,st),mt||(rt=Pn(O,"click",n[2]),mt=!0)},p:Wt,i:Wt,o:Wt,d(vt){vt&&p(r),vt&&p(t),n[8](null),n[9](null),mt=!1,rt()}}}function Er(n,r,t){let c;xn(n,en,w=>t(7,c=w));let{devices:d}=r,f,g,C,y,F=["t","tar"],x=[],I;Cn.subscribe(w=>{t(5,I=w)});let T,W=!1,M=[20,30];Fn(async()=>{t(4,f=(await Ma(()=>import("./plotly.fc08f43a.js").then(w=>w.p),["./plotly.fc08f43a.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default),t(6,T=Mt(C,{mode:"range",defaultDate:[I[0],I[1]],onClose(w){Cn.set(w.map(N=>this.formatDate(N,"Y-m-d")))}}))});async function S(w){x=w;var N=[];for(let V of w){y=new URLSearchParams({fromDate:I[0],toDate:I[1],deviceMac:V.mac});let Z=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${y.toString()}`)).json();F.forEach(G=>{var J=Ln(G),$=Z.filter(st=>st.type===G),it={x:ue("ts",$),y:ue("val",$),name:V.description+J,type:"scatter"};N.push(it)})}var R={dragmode:"pan",legend:{orientation:"h",xaxis:{range:[I[0],I[1]],type:"date"}},shapes:[{type:"rect",xref:"paper",y0:M[0],y1:M[1],x0:0,x1:1,fillcolor:"#d3d3d3",opacity:.3,line:{width:0}}],yaxis:{title:{text:"Temperature (ºC)",font:{family:"",size:12,color:"#7f7f7f"}}}};let j={responsive:!0,displaylogo:!1,scrollZoom:!0};N&&f.newPlot(g,N,R,j)}function O(w){T.setDate(w,!1),x&&hi&&f&&W==!0?vi(w,x,f,g,F):(W=!0,S(d))}async function q(w){let R=g.data.map((z,Z)=>{if(z.compare==!0)return Z}).filter(z=>z>=0);if(R.length>0)f.deleteTraces(g,R);else{x=w;var j=new Date(I[0]),V=new Date(I[1]);j.setFullYear(j.getFullYear()-1),V.setFullYear(V.getFullYear()-1);for(let z of w){y=new URLSearchParams({fromDate:j.toISOString().split("T")[0],toDate:V.toISOString().split("T")[0],deviceMac:z.mac});let G=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${y.toString()}`)).json();F.forEach(J=>{var $=Ln(J),it=G.filter(vt=>vt.type===J),st=ue("ts",it),rt={x:st.map(vt=>Dr(vt)),y:ue("val",it),name:"(C) "+z.description+$,type:"scatter",opacity:.2,compare:!0};f.addTraces(g,rt)})}}}async function _(){xa(c,d,q)}function B(w){nn[w?"unshift":"push"](()=>{C=w,t(1,C)})}function et(w){nn[w?"unshift":"push"](()=>{g=w,t(0,g)})}return n.$$set=w=>{"devices"in w&&t(3,d=w.devices)},n.$$.update=()=>{n.$$.dirty&152&&f&&xa(c,d,S),n.$$.dirty&112&&f&&T&&O(I)},[g,C,_,d,f,I,T,c,B,et]}class xr extends Tn{constructor(r){super(),kn(this,r,Er,wr,In,{devices:3})}}function Mr(n){let r,t,c,d,f,g,C,y,F,x,I,T,W,M,S,O,q,_,B,et,w,N,R;return{c(){r=o(`



`),t=h("li"),c=o(`
	`),d=h("div"),f=o(`
		`),g=h("div"),C=o(`
			`),y=h("div"),F=o(`
				`),x=h("h3"),I=o("MEASUREMENTS HUMIDITY"),T=o(`
			`),W=o(`
			`),M=h("div"),S=o(`
				`),O=h("input"),q=o(`
			`),_=o(`
		`),B=o(`
	`),et=o(`
	`),w=h("div"),N=It(" Plotly "),R=o(`
`),this.h()},l(j){r=l(j,`



`),t=v(j,"LI",{class:!0});var V=b(t);c=l(V,`
	`),d=v(V,"DIV",{class:!0});var z=b(d);f=l(z,`
		`),g=v(z,"DIV",{class:!0});var Z=b(g);C=l(Z,`
			`),y=v(Z,"DIV",{class:!0});var G=b(y);F=l(G,`
				`),x=v(G,"H3",{class:!0});var J=b(x);I=l(J,"MEASUREMENTS HUMIDITY"),J.forEach(p),T=l(G,`
			`),G.forEach(p),W=l(Z,`
			`),M=v(Z,"DIV",{class:!0});var $=b(M);S=l($,`
				`),O=v($,"INPUT",{type:!0,id:!0,class:!0}),q=l($,`
			`),$.forEach(p),_=l(Z,`
		`),Z.forEach(p),B=l(z,`
	`),z.forEach(p),et=l(V,`
	`),w=v(V,"DIV",{class:!0});var it=b(w);N=St(it," Plotly "),it.forEach(p),R=l(V,`
`),V.forEach(p),this.h()},h(){u(x,"class","text-base font-semibold leading-6"),u(y,"class","ml-4 mt-2"),u(O,"type","text"),u(O,"id","flatPickrTemp"),u(O,"class","h-10 w-60 text-sm text-gray-500"),u(M,"class","ml-4 mt-2 flex-shrink-0"),u(g,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),u(d,"class","h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6"),u(w,"class","h-[40vh] w-full"),u(t,"class","col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow")},m(j,V){at(j,r,V),at(j,t,V),e(t,c),e(t,d),e(d,f),e(d,g),e(g,C),e(g,y),e(y,F),e(y,x),e(x,I),e(y,T),e(g,W),e(g,M),e(M,S),e(M,O),n[7](O),e(M,q),e(g,_),e(d,B),e(t,et),e(t,w),e(w,N),n[8](w),e(t,R)},p:Wt,i:Wt,o:Wt,d(j){j&&p(r),j&&p(t),n[7](null),n[8](null)}}}function _r(n,r,t){let c;xn(n,en,_=>t(6,c=_));let{devices:d}=r,f,g,C,y,F=["h"],x=[],I;Cn.subscribe(_=>{t(4,I=_)});let T,W=!1;Fn(async()=>{t(3,f=(await Ma(()=>import("./plotly.fc08f43a.js").then(_=>_.p),["./plotly.fc08f43a.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default),t(5,T=Mt(C,{mode:"range",defaultDate:[I[0],I[1]],onClose(_){Cn.set(_.map(B=>this.formatDate(B,"Y-m-d")))}}))});async function M(_){x=_;var B=[];for(let N of _){y=new URLSearchParams({fromDate:I[0],toDate:I[1],deviceMac:N.mac});let j=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${y.toString()}`)).json();F.forEach(V=>{for(var z=Ln(V),Z=j.filter(rt=>rt.type===V),G=j.filter(rt=>rt.type==="t"),J=ue("val",G),$=[],it=[],st=[],mt=0;mt<3;mt++){$.push(Gi(mt+2,Z)),it.push(Ji(J,$[mt]));var st={x:ue("ts",$[mt]),y:it[mt],name:N.description+" "+(mt+1)+z,type:"scatter"};B.push(st)}})}var et={dragmode:"pan",legend:{orientation:"h",xaxis:{range:[I[0],I[1]],type:"date"}},yaxis:{title:{text:"Water Potencial (cbar)",font:{family:"",size:12,color:"#7f7f7f"}}}};let w={responsive:!0,displaylogo:!1,scrollZoom:!0};B&&f.newPlot(g,B,et,w)}function S(_){T.setDate(_,!1),x&&hi&&f&&W==!0?vi(_,x,f,g,F):(W=!0,M(d))}function O(_){nn[_?"unshift":"push"](()=>{C=_,t(1,C)})}function q(_){nn[_?"unshift":"push"](()=>{g=_,t(0,g)})}return n.$$set=_=>{"devices"in _&&t(2,d=_.devices)},n.$$.update=()=>{n.$$.dirty&76&&f&&xa(c,d,M),n.$$.dirty&56&&f&&T&&S(I)},[g,C,d,f,I,T,c,O,q]}class Cr extends Tn{constructor(r){super(),kn(this,r,_r,Mr,In,{devices:2})}}function Tr(n){let r,t,c,d,f,g,C,y,F,x,I,T,W,M,S,O,q,_,B,et,w,N,R;return{c(){r=o(`



`),t=h("li"),c=o(`
	`),d=h("div"),f=o(`
		`),g=h("div"),C=o(`
			`),y=h("div"),F=o(`
				`),x=h("h3"),I=o("MEASUREMENTS BATTERY"),T=o(`
			`),W=o(`
			`),M=h("div"),S=o(`
				`),O=h("input"),q=o(`
			`),_=o(`
		`),B=o(`
	`),et=o(`
	`),w=h("div"),N=It(" Plotly "),R=o(`
`),this.h()},l(j){r=l(j,`



`),t=v(j,"LI",{class:!0});var V=b(t);c=l(V,`
	`),d=v(V,"DIV",{class:!0});var z=b(d);f=l(z,`
		`),g=v(z,"DIV",{class:!0});var Z=b(g);C=l(Z,`
			`),y=v(Z,"DIV",{class:!0});var G=b(y);F=l(G,`
				`),x=v(G,"H3",{class:!0});var J=b(x);I=l(J,"MEASUREMENTS BATTERY"),J.forEach(p),T=l(G,`
			`),G.forEach(p),W=l(Z,`
			`),M=v(Z,"DIV",{class:!0});var $=b(M);S=l($,`
				`),O=v($,"INPUT",{type:!0,id:!0,class:!0}),q=l($,`
			`),$.forEach(p),_=l(Z,`
		`),Z.forEach(p),B=l(z,`
	`),z.forEach(p),et=l(V,`
	`),w=v(V,"DIV",{class:!0});var it=b(w);N=St(it," Plotly "),it.forEach(p),R=l(V,`
`),V.forEach(p),this.h()},h(){u(x,"class","text-base font-semibold leading-6"),u(y,"class","ml-4 mt-2"),u(O,"type","text"),u(O,"id","flatPickrTemp"),u(O,"class","h-10 w-60 text-sm text-gray-500"),u(M,"class","ml-4 mt-2 flex-shrink-0"),u(g,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),u(d,"class","h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6"),u(w,"class","h-[40vh] w-full"),u(t,"class","col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow")},m(j,V){at(j,r,V),at(j,t,V),e(t,c),e(t,d),e(d,f),e(d,g),e(g,C),e(g,y),e(y,F),e(y,x),e(x,I),e(y,T),e(g,W),e(g,M),e(M,S),e(M,O),n[7](O),e(M,q),e(g,_),e(d,B),e(t,et),e(t,w),e(w,N),n[8](w),e(t,R)},p:Wt,i:Wt,o:Wt,d(j){j&&p(r),j&&p(t),n[7](null),n[8](null)}}}function kr(n,r,t){let c;xn(n,en,_=>t(6,c=_));let{devices:d}=r,f,g,C,y,F=["b"],x=[],I;Cn.subscribe(_=>{t(4,I=_)});let T,W=!1;Fn(async()=>{t(3,f=(await Ma(()=>import("./plotly.fc08f43a.js").then(_=>_.p),["./plotly.fc08f43a.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default),t(5,T=Mt(C,{mode:"range",defaultDate:[I[0],I[1]],onClose(_){Cn.set(_.map(B=>this.formatDate(B,"Y-m-d")))}}))});async function M(_){x=_;var B=[];for(let N of _){y=new URLSearchParams({fromDate:I[0],toDate:I[1],deviceMac:N.mac});let j=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${y.toString()}`)).json();F.forEach(V=>{var z=Ln(V),Z=j.filter(J=>J.type===V),G={x:ue("ts",Z),y:ue("val",Z),name:N.description+z,type:"scatter"};B.push(G)})}var et={dragmode:"pan",legend:{orientation:"h",xaxis:{range:[I[0],I[1]],type:"date"}},yaxis:{title:{text:"Battery (unit)",font:{family:"",size:12,color:"#7f7f7f"}}}};let w={responsive:!0,displaylogo:!1,scrollZoom:!0};B&&f.newPlot(g,B,et,w)}function S(_){T.setDate(_,!1),x&&hi&&f&&W==!0?vi(_,x,f,g,F):(W=!0,M(d))}function O(_){nn[_?"unshift":"push"](()=>{C=_,t(1,C)})}function q(_){nn[_?"unshift":"push"](()=>{g=_,t(0,g)})}return n.$$set=_=>{"devices"in _&&t(2,d=_.devices)},n.$$.update=()=>{n.$$.dirty&76&&f&&xa(c,d,M),n.$$.dirty&56&&f&&T&&S(I)},[g,C,d,f,I,T,c,O,q]}class Ir extends Tn{constructor(r){super(),kn(this,r,kr,Tr,In,{devices:2})}}function Fi(n,r,t){const c=n.slice();return c[10]=r[t],c[11]=r,c[12]=t,c}function Yi(n){let r,t,c,d,f;return{c(){r=h("button"),t=o(`
								`),c=Mn("svg"),d=Mn("path"),f=o(`
							`),this.h()},l(g){r=v(g,"BUTTON",{class:!0});var C=b(r);t=l(C,`
								`),c=_n(C,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var y=b(c);d=_n(y,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),b(d).forEach(p),y.forEach(p),f=l(C,`
							`),C.forEach(p),this.h()},h(){u(d,"stroke-linecap","round"),u(d,"stroke-linejoin","round"),u(d,"d","M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"),u(c,"xmlns","http://www.w3.org/2000/svg"),u(c,"fill","none"),u(c,"viewBox","0 0 24 24"),u(c,"stroke-width","1.5"),u(c,"stroke","currentColor"),u(c,"class","h-6 w-6"),u(r,"class","text-sm leading-6")},m(g,C){at(g,r,C),e(r,t),e(r,c),e(c,d),e(r,f)},d(g){g&&p(r)}}}function Hi(n){let r,t,c,d,f,g,C=n[10].description+"",y,F,x,I,T,W,M,S,O=n[10].battery_mode_code+"",q,_,B,et,w,N,R,j,V=n[10].last_reading_formatted+"",z,Z,G,J,$,it,st,mt,rt;function vt(){n[6].call(J,n[10])}let tt=n[1]&&Yi();return{c(){r=h("li"),t=o(`
					`),c=h("div"),d=o(`
						`),f=h("p"),g=o(`
							`),y=o(C),F=o(`
						`),x=o(`
					`),I=o(`
					`),T=h("div"),W=o(`
						`),M=h("p"),S=o(`
							`),q=o(O),_=o(`
						`),B=o(`
					`),et=o(`
					`),w=h("div"),N=o(`
						`),R=h("p"),j=o(`
							`),z=o(V),Z=o(`
						`),G=o(`
						`),J=h("input"),$=o(`
						`),tt&&tt.c(),it=o(`
					`),st=o(`
				`),this.h()},l(ut){r=v(ut,"LI",{class:!0});var nt=b(r);t=l(nt,`
					`),c=v(nt,"DIV",{class:!0});var ft=b(c);d=l(ft,`
						`),f=v(ft,"P",{class:!0});var bt=b(f);g=l(bt,`
							`),y=l(bt,C),F=l(bt,`
						`),bt.forEach(p),x=l(ft,`
					`),ft.forEach(p),I=l(nt,`
					`),T=v(nt,"DIV",{class:!0});var pt=b(T);W=l(pt,`
						`),M=v(pt,"P",{class:!0});var yt=b(M);S=l(yt,`
							`),q=l(yt,O),_=l(yt,`
						`),yt.forEach(p),B=l(pt,`
					`),pt.forEach(p),et=l(nt,`
					`),w=v(nt,"DIV",{class:!0});var gt=b(w);N=l(gt,`
						`),R=v(gt,"P",{class:!0});var dt=b(R);j=l(dt,`
							`),z=l(dt,V),Z=l(dt,`
						`),dt.forEach(p),G=l(gt,`
						`),J=v(gt,"INPUT",{id:!0,type:!0,class:!0}),$=l(gt,`
						`),tt&&tt.l(gt),it=l(gt,`
					`),gt.forEach(p),st=l(nt,`
				`),nt.forEach(p),this.h()},h(){u(f,"class","text-sm leading-6"),u(c,"class","min-w-0 flex-auto"),u(M,"class","text-sm leading-6"),u(T,"class","min-w-0 flex-auto"),u(R,"class","text-sm leading-6"),u(J,"id","visible-checkbox"),u(J,"type","checkbox"),u(J,"class","h-4 w-4 rounded text-sky-600 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600"),u(w,"class","flex min-w-0 justify-between"),u(r,"class","grid grid-cols-3 gap-4 p-4 text-start")},m(ut,nt){at(ut,r,nt),e(r,t),e(r,c),e(c,d),e(c,f),e(f,g),e(f,y),e(f,F),e(c,x),e(r,I),e(r,T),e(T,W),e(T,M),e(M,S),e(M,q),e(M,_),e(T,B),e(r,et),e(r,w),e(w,N),e(w,R),e(R,j),e(R,z),e(R,Z),e(w,G),e(w,J),J.checked=n[2][n[10].id],e(w,$),tt&&tt.m(w,null),e(w,it),e(r,st),mt||(rt=Pn(J,"change",vt),mt=!0)},p(ut,nt){n=ut,nt&1&&C!==(C=n[10].description+"")&&An(y,C),nt&1&&O!==(O=n[10].battery_mode_code+"")&&An(q,O),nt&1&&V!==(V=n[10].last_reading_formatted+"")&&An(z,V),nt&5&&(J.checked=n[2][n[10].id]),n[1]?tt||(tt=Yi(),tt.c(),tt.m(w,it)):tt&&(tt.d(1),tt=null)},d(ut){ut&&p(r),tt&&tt.d(),mt=!1,rt()}}}function Sr(n){let r,t,c,d,f,g,C,y,F,x,I,T,W,M,S,O,q,_,B,et,w,N,R,j,V,z,Z,G,J,$,it,st,mt,rt,vt,tt,ut,nt,ft,bt,pt,yt,gt,dt,_t,Ae,zt,de,Ft,Ne,Kt,Gt,ye,Ct,fe,wt,Jt,qt,Yt,ie,Tt=n[0].installation.soilTypeCode+"",De,we,Pe,Ee,Rt,Zt,Qt,Xt,Oe,Q,ge,Et,Le,Vt,re=n[0].installation.cropTypeCode+"",kt,xe,Ht,a,i,s,m,D,k,U,P,H,A,Y,K,ot,X,ht,oe,Dt,$t,le,Me,At,te,ee,pe,je,_e,Re,an,rn,on,xt,ln,Pt,Ve,he,sn,Fe,Ce,cn,Ue,Ut,un,Ye,_a,Ca,Ta,Be,ka,dn,Ia,Sa,Aa,Na,Pa,Oa,Yn,La,Fa,Ya,Ha,Hn,jn,Rn,Vn,Un,ve,ja,We,Ra,ze,Va,Bn,Wn,zn,Kn,Gn,be,Ua,Ke,Ba,Te,Wa,Ge,za,ke,Ka,Je,Ga,fn,Ja,qa,Za,qe,Qa,Ze,Xa,$a,ti,ei,ni,Xe,ai,ii,Jn,qn,pn,ri,bi,mn=n[0].installation.devices,Ot=[];for(let E=0;E<mn.length;E+=1)Ot[E]=Hi(Fi(n,mn,E));return We=new xr({props:{devices:n[0].installation.devices}}),ze=new Cr({props:{devices:n[0].installation.devices}}),Ke=new Ir({props:{devices:n[0].installation.devices}}),Xe=new Ui({props:{props:n[4]}}),{c(){r=o(`



`),t=It("* SUMMARY + DEVICES "),c=o(`
`),d=h("ul"),f=o(`
	`),g=h("li"),C=o(`
		`),y=h("div"),F=o(`
			`),x=h("div"),I=o(`
				`),T=h("div"),W=o(`
					`),M=h("h3"),S=o("SUMMARY"),O=o(`
				`),q=o(`
				`),_=It(`<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create new job</button>
				</div>`),B=o(`
			`),et=o(`
		`),w=o(`
		`),N=h("ul"),R=o(`
			`),j=It(` <li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6 font-semibold">Status: Off</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">`),V=o(`
			`),z=It(' Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" '),Z=o(`
			`),G=It(`<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
						<span class="sr-only">Use setting</span>`),J=o(`
			`),$=It(' Enabled: "translate-x-5", Not Enabled: "translate-x-0" '),it=o(`
			`),st=It(`<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
					</button>
				</div>
			 </li> `),mt=o(`
			`),rt=h("li"),vt=o(`
				`),tt=h("div"),ut=o(`
					`),nt=h("div"),ft=o(`
						`),bt=h("p"),pt=o("Diagnostics:"),yt=o(`
					`),gt=o(`
				`),dt=o(`
				`),_t=h("div"),Ae=o(`
					`),zt=h("button"),de=o("DETAILS"),Ft=o(`
				`),Ne=o(`
			`),Kt=o(`
			`),Gt=h("li"),ye=o(`
				`),Ct=h("div"),fe=o(`
					`),wt=h("div"),Jt=o(`
						`),qt=h("p"),Yt=o("Soil type: "),ie=h("span"),De=o(Tt),we=o(`
					`),Pe=o(`
				`),Ee=o(`
			`),Rt=o(`
			`),Zt=h("li"),Qt=o(`
				`),Xt=h("div"),Oe=o(`
					`),Q=h("div"),ge=o(`
						`),Et=h("p"),Le=o("Crop type: "),Vt=h("span"),kt=o(re),xe=o(`
					`),Ht=o(`
				`),a=o(`
			`),i=o(`
		`),s=o(`
	`),m=o(`

	`),D=h("li"),k=o(`
		`),U=h("div"),P=o(`
			`),H=h("div"),A=o(`
				`),Y=h("div"),K=o(`
					`),ot=h("h3"),X=o("DEVICES"),ht=o(`
				`),oe=o(`
				`),Dt=It("{#if isInstallationOwner}"),$t=o(`
					`),le=h("div"),Me=o(`
						`),At=h("button"),te=Mn("svg"),ee=Mn("path"),pe=o(`
							NEW`),je=o(`
					`),_e=o(`
				`),Re=It("{/if}"),an=o(`
			`),rn=o(`
		`),on=o(`
		`),xt=h("ul"),ln=o(`
			`),Pt=h("li"),Ve=o(`
				`),he=h("div"),sn=o(`
					`),Fe=h("p"),Ce=o(" Description "),cn=o(`
				`),Ue=o(`
				`),Ut=h("div"),un=o(`
					`),Ye=h("p"),_a=o(" Battery mode "),Ca=o(`
				`),Ta=o(`
				`),Be=h("div"),ka=o(`
					`),dn=h("p"),Ia=o(" Last reading "),Sa=o(`
				`),Aa=o(`
			`),Na=o(`

			`),Pa=It(" START FOR HERE"),Oa=o(`
			`);for(let E=0;E<Ot.length;E+=1)Ot[E].c();Yn=o(`
			`),La=It("END FOR HERE"),Fa=o(`
		`),Ya=o(`
	`),Ha=o(`
`),Hn=o(`
`),jn=It("* END SUMMARY + DEVICES "),Rn=o(`

`),Vn=It("* MEASUREMENTS"),Un=o(`
`),ve=h("ul"),ja=o(`
	`),ma(We.$$.fragment),Ra=o(`
	`),ma(ze.$$.fragment),Va=o(`
`),Bn=o(`
`),Wn=It("* END MEASUREMENTS "),zn=o(`

`),Kn=It("* BATTERY + MAP "),Gn=o(`
`),be=h("ul"),Ua=o(`
	`),ma(Ke.$$.fragment),Ba=o(`
	`),Te=h("li"),Wa=o(`
		`),Ge=h("div"),za=o(`
			`),ke=h("div"),Ka=o(`
				`),Je=h("div"),Ga=o(`
					`),fn=h("h3"),Ja=o("MAP"),qa=o(`
				`),Za=o(`
				`),qe=h("div"),Qa=o(`
					`),Ze=h("button"),Xa=o(`
						Open map`),$a=o(`
				`),ti=o(`
			`),ei=o(`
		`),ni=o(`
		`),ma(Xe.$$.fragment),ai=o(`
	`),ii=o(`
`),Jn=o(`
`),qn=It("* END BATTERY + MAP "),this.h()},l(E){r=l(E,`



`),t=St(E,"* SUMMARY + DEVICES "),c=l(E,`
`),d=v(E,"UL",{class:!0});var lt=b(d);f=l(lt,`
	`),g=v(lt,"LI",{class:!0});var ne=b(g);C=l(ne,`
		`),y=v(ne,"DIV",{class:!0});var $e=b(y);F=l($e,`
			`),x=v($e,"DIV",{class:!0});var He=b(x);I=l(He,`
				`),T=v(He,"DIV",{class:!0});var Lt=b(T);W=l(Lt,`
					`),M=v(Lt,"H3",{class:!0});var Sn=b(M);S=l(Sn,"SUMMARY"),Sn.forEach(p),O=l(Lt,`
				`),Lt.forEach(p),q=l(He,`
				`),_=St(He,`<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create new job</button>
				</div>`),B=l(He,`
			`),He.forEach(p),et=l($e,`
		`),$e.forEach(p),w=l(ne,`
		`),N=v(ne,"UL",{});var Nt=b(N);R=l(Nt,`
			`),j=St(Nt,` <li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6 font-semibold">Status: Off</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">`),V=l(Nt,`
			`),z=St(Nt,' Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" '),Z=l(Nt,`
			`),G=St(Nt,`<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
						<span class="sr-only">Use setting</span>`),J=l(Nt,`
			`),$=St(Nt,' Enabled: "translate-x-5", Not Enabled: "translate-x-0" '),it=l(Nt,`
			`),st=St(Nt,`<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
					</button>
				</div>
			 </li> `),mt=l(Nt,`
			`),rt=v(Nt,"LI",{class:!0});var gn=b(rt);vt=l(gn,`
				`),tt=v(gn,"DIV",{class:!0});var Zn=b(tt);ut=l(Zn,`
					`),nt=v(Zn,"DIV",{class:!0});var Qn=b(nt);ft=l(Qn,`
						`),bt=v(Qn,"P",{class:!0});var yi=b(bt);pt=l(yi,"Diagnostics:"),yi.forEach(p),yt=l(Qn,`
					`),Qn.forEach(p),gt=l(Zn,`
				`),Zn.forEach(p),dt=l(gn,`
				`),_t=v(gn,"DIV",{class:!0});var Xn=b(_t);Ae=l(Xn,`
					`),zt=v(Xn,"BUTTON",{type:!0,class:!0});var Di=b(zt);de=l(Di,"DETAILS"),Di.forEach(p),Ft=l(Xn,`
				`),Xn.forEach(p),Ne=l(gn,`
			`),gn.forEach(p),Kt=l(Nt,`
			`),Gt=v(Nt,"LI",{class:!0});var $n=b(Gt);ye=l($n,`
				`),Ct=v($n,"DIV",{class:!0});var ta=b(Ct);fe=l(ta,`
					`),wt=v(ta,"DIV",{class:!0});var ea=b(wt);Jt=l(ea,`
						`),qt=v(ea,"P",{class:!0});var oi=b(qt);Yt=l(oi,"Soil type: "),ie=v(oi,"SPAN",{class:!0});var wi=b(ie);De=l(wi,Tt),wi.forEach(p),oi.forEach(p),we=l(ea,`
					`),ea.forEach(p),Pe=l(ta,`
				`),ta.forEach(p),Ee=l($n,`
			`),$n.forEach(p),Rt=l(Nt,`
			`),Zt=v(Nt,"LI",{class:!0});var na=b(Zt);Qt=l(na,`
				`),Xt=v(na,"DIV",{class:!0});var aa=b(Xt);Oe=l(aa,`
					`),Q=v(aa,"DIV",{class:!0});var ia=b(Q);ge=l(ia,`
						`),Et=v(ia,"P",{class:!0});var li=b(Et);Le=l(li,"Crop type: "),Vt=v(li,"SPAN",{class:!0});var Ei=b(Vt);kt=l(Ei,re),Ei.forEach(p),li.forEach(p),xe=l(ia,`
					`),ia.forEach(p),Ht=l(aa,`
				`),aa.forEach(p),a=l(na,`
			`),na.forEach(p),i=l(Nt,`
		`),Nt.forEach(p),s=l(ne,`
	`),ne.forEach(p),m=l(lt,`

	`),D=v(lt,"LI",{class:!0});var hn=b(D);k=l(hn,`
		`),U=v(hn,"DIV",{class:!0});var ra=b(U);P=l(ra,`
			`),H=v(ra,"DIV",{class:!0});var Ie=b(H);A=l(Ie,`
				`),Y=v(Ie,"DIV",{class:!0});var oa=b(Y);K=l(oa,`
					`),ot=v(oa,"H3",{class:!0});var xi=b(ot);X=l(xi,"DEVICES"),xi.forEach(p),ht=l(oa,`
				`),oa.forEach(p),oe=l(Ie,`
				`),Dt=St(Ie,"{#if isInstallationOwner}"),$t=l(Ie,`
					`),le=v(Ie,"DIV",{class:!0});var la=b(le);Me=l(la,`
						`),At=v(la,"BUTTON",{type:!0,class:!0});var si=b(At);te=_n(si,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var Mi=b(te);ee=_n(Mi,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),b(ee).forEach(p),Mi.forEach(p),pe=l(si,`
							NEW`),si.forEach(p),je=l(la,`
					`),la.forEach(p),_e=l(Ie,`
				`),Re=St(Ie,"{/if}"),an=l(Ie,`
			`),Ie.forEach(p),rn=l(ra,`
		`),ra.forEach(p),on=l(hn,`
		`),xt=v(hn,"UL",{class:!0});var Se=b(xt);ln=l(Se,`
			`),Pt=v(Se,"LI",{class:!0});var Qe=b(Pt);Ve=l(Qe,`
				`),he=v(Qe,"DIV",{class:!0});var sa=b(he);sn=l(sa,`
					`),Fe=v(sa,"P",{class:!0});var _i=b(Fe);Ce=l(_i," Description "),_i.forEach(p),cn=l(sa,`
				`),sa.forEach(p),Ue=l(Qe,`
				`),Ut=v(Qe,"DIV",{class:!0});var ca=b(Ut);un=l(ca,`
					`),Ye=v(ca,"P",{class:!0});var Ci=b(Ye);_a=l(Ci," Battery mode "),Ci.forEach(p),Ca=l(ca,`
				`),ca.forEach(p),Ta=l(Qe,`
				`),Be=v(Qe,"DIV",{class:!0});var ua=b(Be);ka=l(ua,`
					`),dn=v(ua,"P",{class:!0});var Ti=b(dn);Ia=l(Ti," Last reading "),Ti.forEach(p),Sa=l(ua,`
				`),ua.forEach(p),Aa=l(Qe,`
			`),Qe.forEach(p),Na=l(Se,`

			`),Pa=St(Se," START FOR HERE"),Oa=l(Se,`
			`);for(let ci=0;ci<Ot.length;ci+=1)Ot[ci].l(Se);Yn=l(Se,`
			`),La=St(Se,"END FOR HERE"),Fa=l(Se,`
		`),Se.forEach(p),Ya=l(hn,`
	`),hn.forEach(p),Ha=l(lt,`
`),lt.forEach(p),Hn=l(E,`
`),jn=St(E,"* END SUMMARY + DEVICES "),Rn=l(E,`

`),Vn=St(E,"* MEASUREMENTS"),Un=l(E,`
`),ve=v(E,"UL",{class:!0});var vn=b(ve);ja=l(vn,`
	`),ga(We.$$.fragment,vn),Ra=l(vn,`
	`),ga(ze.$$.fragment,vn),Va=l(vn,`
`),vn.forEach(p),Bn=l(E,`
`),Wn=St(E,"* END MEASUREMENTS "),zn=l(E,`

`),Kn=St(E,"* BATTERY + MAP "),Gn=l(E,`
`),be=v(E,"UL",{class:!0});var bn=b(be);Ua=l(bn,`
	`),ga(Ke.$$.fragment,bn),Ba=l(bn,`
	`),Te=v(bn,"LI",{class:!0});var yn=b(Te);Wa=l(yn,`
		`),Ge=v(yn,"DIV",{class:!0});var da=b(Ge);za=l(da,`
			`),ke=v(da,"DIV",{class:!0});var Dn=b(ke);Ka=l(Dn,`
				`),Je=v(Dn,"DIV",{class:!0});var fa=b(Je);Ga=l(fa,`
					`),fn=v(fa,"H3",{class:!0});var ki=b(fn);Ja=l(ki,"MAP"),ki.forEach(p),qa=l(fa,`
				`),fa.forEach(p),Za=l(Dn,`
				`),qe=v(Dn,"DIV",{class:!0});var pa=b(qe);Qa=l(pa,`
					`),Ze=v(pa,"BUTTON",{type:!0,class:!0});var Ii=b(Ze);Xa=l(Ii,`
						Open map`),Ii.forEach(p),$a=l(pa,`
				`),pa.forEach(p),ti=l(Dn,`
			`),Dn.forEach(p),ei=l(da,`
		`),da.forEach(p),ni=l(yn,`
		`),ga(Xe.$$.fragment,yn),ai=l(yn,`
	`),yn.forEach(p),ii=l(bn,`
`),bn.forEach(p),Jn=l(E,`
`),qn=St(E,"* END BATTERY + MAP "),this.h()},h(){u(M,"class","text-base font-semibold leading-6"),u(T,"class","ml-4 mt-2"),u(x,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),u(y,"class","h-24 border-b border-gray-200 bg-white px-4 py-5 sm:px-6"),u(bt,"class","text-sm font-semibold leading-6"),u(nt,"class","min-w-0 flex-auto"),u(tt,"class","flex gap-x-4"),u(zt,"type","button"),u(zt,"class","rounded-md bg-sky-500 px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),u(_t,"class","hidden sm:flex sm:flex-col sm:items-end"),u(rt,"class","flex justify-between gap-x-6 p-5"),u(ie,"class","font-normal"),u(qt,"class","text-sm font-semibold leading-6"),u(wt,"class","min-w-0 flex-auto"),u(Ct,"class","flex gap-x-4"),u(Gt,"class","flex justify-between gap-x-6 p-5"),u(Vt,"class","font-normal"),u(Et,"class","text-sm font-semibold leading-6"),u(Q,"class","min-w-0 flex-auto"),u(Xt,"class","flex gap-x-4"),u(Zt,"class","flex justify-between gap-x-6 p-5"),u(g,"class","col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center text-stone-500 shadow"),u(ot,"class","text-base font-semibold leading-6"),u(Y,"class","ml-4 mt-2"),u(ee,"fill-rule","evenodd"),u(ee,"d","M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"),u(ee,"clip-rule","evenodd"),u(te,"xmlns","http://www.w3.org/2000/svg"),u(te,"viewBox","0 0 24 24"),u(te,"fill","currentColor"),u(te,"class","h-5 w-5 pr-1"),u(At,"type","button"),u(At,"class","relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"),u(le,"class","ml-4 mt-2 flex-shrink-0"),u(H,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),u(U,"class","h-24 border-b border-gray-200 px-4 py-5 sm:px-6"),u(Fe,"class","text-sm font-semibold leading-6"),u(he,"class","min-w-0 flex-auto"),u(Ye,"class","text-sm font-semibold leading-6"),u(Ut,"class","min-w-0 flex-auto"),u(dn,"class","text-sm font-semibold leading-6"),u(Be,"class","min-w-0 flex-auto"),u(Pt,"class","grid grid-cols-3 gap-4 p-4 text-start"),u(xt,"class","divide-y divide-dotted divide-gray-100"),u(D,"class","col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"),u(d,"class","grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2"),u(ve,"class","grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2"),u(fn,"class","text-base font-semibold leading-6"),u(Je,"class","ml-4 mt-2"),u(Ze,"type","button"),u(Ze,"class","relative inline-flex items-center rounded-md bg-neutral-50 px-2 py-1 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"),u(qe,"class","ml-4 mt-2 flex-shrink-0"),u(ke,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),u(Ge,"class","h-24 border-b border-gray-200 px-4 py-5 sm:px-6"),u(Te,"class","col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"),u(be,"class","grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2")},m(E,lt){at(E,r,lt),at(E,t,lt),at(E,c,lt),at(E,d,lt),e(d,f),e(d,g),e(g,C),e(g,y),e(y,F),e(y,x),e(x,I),e(x,T),e(T,W),e(T,M),e(M,S),e(T,O),e(x,q),e(x,_),e(x,B),e(y,et),e(g,w),e(g,N),e(N,R),e(N,j),e(N,V),e(N,z),e(N,Z),e(N,G),e(N,J),e(N,$),e(N,it),e(N,st),e(N,mt),e(N,rt),e(rt,vt),e(rt,tt),e(tt,ut),e(tt,nt),e(nt,ft),e(nt,bt),e(bt,pt),e(nt,yt),e(tt,gt),e(rt,dt),e(rt,_t),e(_t,Ae),e(_t,zt),e(zt,de),e(_t,Ft),e(rt,Ne),e(N,Kt),e(N,Gt),e(Gt,ye),e(Gt,Ct),e(Ct,fe),e(Ct,wt),e(wt,Jt),e(wt,qt),e(qt,Yt),e(qt,ie),e(ie,De),e(wt,we),e(Ct,Pe),e(Gt,Ee),e(N,Rt),e(N,Zt),e(Zt,Qt),e(Zt,Xt),e(Xt,Oe),e(Xt,Q),e(Q,ge),e(Q,Et),e(Et,Le),e(Et,Vt),e(Vt,kt),e(Q,xe),e(Xt,Ht),e(Zt,a),e(N,i),e(g,s),e(d,m),e(d,D),e(D,k),e(D,U),e(U,P),e(U,H),e(H,A),e(H,Y),e(Y,K),e(Y,ot),e(ot,X),e(Y,ht),e(H,oe),e(H,Dt),e(H,$t),e(H,le),e(le,Me),e(le,At),e(At,te),e(te,ee),e(At,pe),e(le,je),e(H,_e),e(H,Re),e(H,an),e(U,rn),e(D,on),e(D,xt),e(xt,ln),e(xt,Pt),e(Pt,Ve),e(Pt,he),e(he,sn),e(he,Fe),e(Fe,Ce),e(he,cn),e(Pt,Ue),e(Pt,Ut),e(Ut,un),e(Ut,Ye),e(Ye,_a),e(Ut,Ca),e(Pt,Ta),e(Pt,Be),e(Be,ka),e(Be,dn),e(dn,Ia),e(Be,Sa),e(Pt,Aa),e(xt,Na),e(xt,Pa),e(xt,Oa);for(let ne=0;ne<Ot.length;ne+=1)Ot[ne]&&Ot[ne].m(xt,null);e(xt,Yn),e(xt,La),e(xt,Fa),e(D,Ya),e(d,Ha),at(E,Hn,lt),at(E,jn,lt),at(E,Rn,lt),at(E,Vn,lt),at(E,Un,lt),at(E,ve,lt),e(ve,ja),ha(We,ve,null),e(ve,Ra),ha(ze,ve,null),e(ve,Va),at(E,Bn,lt),at(E,Wn,lt),at(E,zn,lt),at(E,Kn,lt),at(E,Gn,lt),at(E,be,lt),e(be,Ua),ha(Ke,be,null),e(be,Ba),e(be,Te),e(Te,Wa),e(Te,Ge),e(Ge,za),e(Ge,ke),e(ke,Ka),e(ke,Je),e(Je,Ga),e(Je,fn),e(fn,Ja),e(Je,qa),e(ke,Za),e(ke,qe),e(qe,Qa),e(qe,Ze),e(Ze,Xa),e(qe,$a),e(ke,ti),e(Ge,ei),e(Te,ni),ha(Xe,Te,null),e(Te,ai),e(be,ii),at(E,Jn,lt),at(E,qn,lt),pn=!0,ri||(bi=[Pn(At,"click",n[5]),Pn(Ze,"click",n[7])],ri=!0)},p(E,[lt]){if((!pn||lt&1)&&Tt!==(Tt=E[0].installation.soilTypeCode+"")&&An(De,Tt),(!pn||lt&1)&&re!==(re=E[0].installation.cropTypeCode+"")&&An(kt,re),lt&7){mn=E[0].installation.devices;let Lt;for(Lt=0;Lt<mn.length;Lt+=1){const Sn=Fi(E,mn,Lt);Ot[Lt]?Ot[Lt].p(Sn,lt):(Ot[Lt]=Hi(Sn),Ot[Lt].c(),Ot[Lt].m(xt,Yn))}for(;Lt<Ot.length;Lt+=1)Ot[Lt].d(1);Ot.length=mn.length}const ne={};lt&1&&(ne.devices=E[0].installation.devices),We.$set(ne);const $e={};lt&1&&($e.devices=E[0].installation.devices),ze.$set($e);const He={};lt&1&&(He.devices=E[0].installation.devices),Ke.$set(He)},i(E){pn||(va(We.$$.fragment,E),va(ze.$$.fragment,E),va(Ke.$$.fragment,E),va(Xe.$$.fragment,E),pn=!0)},o(E){ba(We.$$.fragment,E),ba(ze.$$.fragment,E),ba(Ke.$$.fragment,E),ba(Xe.$$.fragment,E),pn=!1},d(E){E&&p(r),E&&p(t),E&&p(c),E&&p(d),Qi(Ot,E),E&&p(Hn),E&&p(jn),E&&p(Rn),E&&p(Vn),E&&p(Un),E&&p(ve),ya(We),ya(ze),E&&p(Bn),E&&p(Wn),E&&p(zn),E&&p(Kn),E&&p(Gn),E&&p(be),ya(Ke),ya(Xe),E&&p(Jn),E&&p(qn),ri=!1,ji(bi)}}}let en=Ri({});function Ar(n,r,t){let c,d=Wt,f;xn(n,en,M=>t(2,c=M)),xn(n,Vi,M=>t(8,f=M)),n.$$.on_destroy.push(()=>d());let{data:g}=r,C=!1;f.url.pathname.split("/").includes("public")||(C=!0);let F={coordinates:{lat:g.installation.location.lat,lon:g.installation.location.lon},size:"full"},x={coordinates:{lat:g.installation.location.lat,lon:g.installation.location.lon},size:"md"};Si(en,c={},c),g.installation.devices.forEach(M=>{Si(en,c[M.id]=!0,c)}),Fn(async()=>{});const I=()=>Ai(fr);function T(M){c[M.id]=this.checked,en.set(c)}const W=()=>{Ai(Ui,F)};return n.$$set=M=>{"data"in M&&t(0,g=M.data)},[g,C,c,F,x,I,T,W]}class jr extends Tn{constructor(r){super(),kn(this,r,Ar,Sr,In,{data:0})}}export{jr as I};
