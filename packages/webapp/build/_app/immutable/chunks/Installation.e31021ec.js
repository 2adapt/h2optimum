import{S as Tn,i as Sn,s as Vn,t as e,e as r,c as n,a as i,b as o,d as s,p as l,f as P,n as It,w as ol,J as Dn,q as hi,g as t,U as Nt,r as ti,u as it,v as ps,j as In,x as gi,k as gt,m as bt,Q as Ir,Z as oe,l as de,y as ss,o as ue,z as as,Y as ii,A as rs,h as ul,R as oi,B as is,C as os,W as bi,D as ds,_ as ei}from"./index.e6278cb6.js";import{d as Tr,c as di,i as _i}from"./stores.5634c9c6.js";import{w as yi}from"./paths.cf73cfda.js";import{_ as ms}from"./preload-helper.41c905a7.js";import"./index.31748c13.js";import{c as Dr,s as En}from"./MyModal.c51739d9.js";import{p as Sr}from"./stores.77259d89.js";import{b as Vr}from"./environment.07c54b58.js";import{r as cs,u as Lr,a as mn,b as xi,g as fs,c as vn,f as wi,d as Ei,e as ki}from"./utils.7c8f4844.js";import{C as Di}from"./clipboard.e9e9a94a.js";import{c as ui}from"./index.d5bac33e.js";import{p as Ii}from"./parse.bee59afc.js";import{c as Ti,a as Si}from"./singletons.033e4f6a.js";const Vi=Ti("invalidate_all");function Li(a){return Si.apply_action(a)}function Ai(a){const c=JSON.parse(a);return c.data&&(c.data=Ii(c.data)),c}function Ni(a){return HTMLElement.prototype.cloneNode.call(a)}function Mi(a,c=()=>{}){const u=async({action:d,result:p,reset:m})=>{p.type==="success"&&(m!==!1&&HTMLFormElement.prototype.reset.call(a),await Vi()),(location.origin+location.pathname===d.origin+d.pathname||p.type==="redirect"||p.type==="error")&&Li(p)};async function f(d){var k,D,y;d.preventDefault();const p=new URL((k=d.submitter)!=null&&k.hasAttribute("formaction")?d.submitter.formAction:Ni(a).action),m=new FormData(a),b=(D=d.submitter)==null?void 0:D.getAttribute("name");b&&m.append(b,((y=d.submitter)==null?void 0:y.getAttribute("value"))??"");const v=new AbortController;let w=!1;const S=await c({action:p,cancel:()=>w=!0,controller:v,get data(){return m},formData:m,get form(){return a},formElement:a,submitter:d.submitter})??u;if(w)return;let _;try{const E=await fetch(p,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:m,signal:v.signal});_=Ai(await E.text()),_.type==="error"&&(_.status=E.status)}catch(E){if((E==null?void 0:E.name)==="AbortError")return;_={type:"error",error:E}}S({action:p,get data(){return m},formData:m,get form(){return a},formElement:a,update:E=>u({action:p,result:_,reset:E==null?void 0:E.reset}),result:_})}return HTMLFormElement.prototype.addEventListener.call(a,"submit",f),{destroy(){HTMLFormElement.prototype.removeEventListener.call(a,"submit",f)}}}function Pi(a){let c,u;return{c(){c=e(`

`),u=r("div"),this.h()},l(f){c=n(f,`

`),u=i(f,"DIV",{class:!0}),o(u).forEach(s),this.h()},h(){l(u,"class","relative transform overflow-hidden bg-white px-4 pb-1 pt-1 text-center shadow-xl transition-all")},m(f,d){P(f,c,d),P(f,u,d),a[2](u)},p:It,i:It,o:It,d(f){f&&s(c),f&&s(u),a[2](null)}}}function Ci(a,c,u){let{props:f}=c,d,p;ol(async()=>{L=(await ms(()=>import("./leaflet-src.20dcb89b.js").then(w=>w.l),["./leaflet-src.20dcb89b.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default,b(),m()});function m(){if(f.coordinates.lat&&f.coordinates.lon){var w={center:[f.coordinates.lat,f.coordinates.lon],zoom:17,scrollWheelZoom:!0,attributionControl:!1};d=L.map(p,w),d.addLayer(L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")),L.marker([f.coordinates.lat,f.coordinates.lon]).addTo(d),d.invalidateSize()}else p.append("Location not available")}function b(){f.size=="full"?(p.classList.add("h-[80vh]"),p.classList.add("w-[80vw]")):f.size=="lg"?(p.classList.add("h-[70vh]"),p.classList.add("w-full")):f.size=="md"?(p.classList.add("lg:h-[50vh]"),p.classList.add("md:h-[100vh]"),p.classList.add("h-[50vh]"),p.classList.add("w-full")):f.size=="sm"?(p.classList.add("h-[10vh]"),p.classList.add("w-full")):(p.classList.add("h-full"),p.classList.add("w-full"))}function v(w){Dn[w?"unshift":"push"](()=>{p=w,u(0,p)})}return a.$$set=w=>{"props"in w&&u(1,f=w.props)},[p,f,v]}class ci extends Tn{constructor(c){super(),Sn(this,c,Ci,Pi,Vn,{props:1})}}function Oi(a){let c,u;return{c(){c=r("h2"),u=e("Novo dispositivo"),this.h()},l(f){c=i(f,"H2",{class:!0});var d=o(c);u=n(d,"Novo dispositivo"),d.forEach(s),this.h()},h(){l(c,"class","mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900")},m(f,d){P(f,c,d),t(c,u)},d(f){f&&s(c)}}}function Bi(a){let c,u;return{c(){c=r("h2"),u=e("Editar dispositivo"),this.h()},l(f){c=i(f,"H2",{class:!0});var d=o(c);u=n(d,"Editar dispositivo"),d.forEach(s),this.h()},h(){l(c,"class","mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900")},m(f,d){P(f,c,d),t(c,u)},d(f){f&&s(c)}}}function Ui(a){let c,u,f,d,p,m,b,v,w,g,S,_,k,D,y,E,A,x,G,U,V,j,I,F,Q,B,q,N,H,Y,tt,z,et,T,W,M,Z,C,st,J,dt,X,at,yt,Ft,ce,Mt,rt,Gt,vt,le,xt,fe,nt,wt,Rt,pe,Et,Pt,Yt,qt,ut,me,ct,se,_t,Jt,ve,Tt,St,jt,Kt;function Xt(K,$){return K[0]?Bi:Oi}let ae=Xt(a),ft=ae(a);return{c(){c=e(`


`),u=r("div"),f=e(`
	`),ft.c(),d=e(`
`),p=e(`

`),m=r("form"),b=e(`
	`),v=r("div"),w=e(`
		`),g=r("label"),S=e("Descrição"),_=e(`
		`),k=r("div"),D=e(`
			`),y=r("input"),E=e(`
		`),A=e(`
	`),x=e(`

	`),G=r("div"),U=e(`
		`),V=r("label"),j=e("MAC address"),I=e(`
		`),F=r("div"),Q=e(`
			`),B=r("input"),q=e(`
		`),N=e(`
	`),H=e(`

	`),Y=r("div"),tt=e(`
		`),z=r("label"),et=e("Tipo de dispositivo"),T=e(`
		`),W=r("div"),M=e(`
			`),Z=r("select"),C=r("option"),st=e(" Sensors only "),J=r("option"),dt=e(" Switch only "),X=r("option"),at=e(" Mixed "),yt=e(`
		`),Ft=e(`
	`),ce=e(`

	`),Mt=r("div"),rt=e(`
		`),Gt=r("label"),vt=e(`
			Chave de ativação
		`),le=e(`
		`),xt=r("div"),fe=e(`
			`),nt=r("input"),wt=e(`
		`),Rt=e(`
	`),pe=e(`

	`),Et=r("input"),Pt=e(` 
	
	`),Yt=r("input"),qt=e(` 


	`),ut=r("div"),me=e(`
		`),ct=r("button"),se=e(`
			Fechar
		`),_t=e(`

		`),Jt=r("button"),ve=e(`Gravar
			`),Tt=e(`
	`),St=e(`
`),this.h()},l(K){c=n(K,`


`),u=i(K,"DIV",{class:!0});var $=o(u);f=n($,`
	`),ft.l($),d=n($,`
`),$.forEach(s),p=n(K,`

`),m=i(K,"FORM",{class:!0,method:!0,action:!0});var ot=o(m);b=n(ot,`
	`),v=i(ot,"DIV",{});var Vt=o(v);w=n(Vt,`
		`),g=i(Vt,"LABEL",{for:!0,class:!0});var Be=o(g);S=n(Be,"Descrição"),Be.forEach(s),_=n(Vt,`
		`),k=i(Vt,"DIV",{class:!0});var O=o(k);D=n(O,`
			`),y=i(O,"INPUT",{id:!0,name:!0,type:!0,class:!0}),E=n(O,`
		`),O.forEach(s),A=n(Vt,`
	`),Vt.forEach(s),x=n(ot,`

	`),G=i(ot,"DIV",{});var lt=o(G);U=n(lt,`
		`),V=i(lt,"LABEL",{for:!0,class:!0});var Zt=o(V);j=n(Zt,"MAC address"),Zt.forEach(s),I=n(lt,`
		`),F=i(lt,"DIV",{class:!0});var ht=o(F);Q=n(ht,`
			`),B=i(ht,"INPUT",{id:!0,name:!0,type:!0,class:!0}),q=n(ht,`
		`),ht.forEach(s),N=n(lt,`
	`),lt.forEach(s),H=n(ot,`

	`),Y=i(ot,"DIV",{class:!0});var pt=o(Y);tt=n(pt,`
		`),z=i(pt,"LABEL",{for:!0,class:!0});var Ue=o(z);et=n(Ue,"Tipo de dispositivo"),Ue.forEach(s),T=n(pt,`
		`),W=i(pt,"DIV",{class:!0});var Ct=o(W);M=n(Ct,`
			`),Z=i(Ct,"SELECT",{name:!0,class:!0});var Lt=o(Z);C=i(Lt,"OPTION",{});var $t=o(C);st=n($t," Sensors only "),$t.forEach(s),J=i(Lt,"OPTION",{});var Ot=o(J);dt=n(Ot," Switch only "),Ot.forEach(s),X=i(Lt,"OPTION",{});var kt=o(X);at=n(kt," Mixed "),kt.forEach(s),Lt.forEach(s),yt=n(Ct,`
		`),Ct.forEach(s),Ft=n(pt,`
	`),pt.forEach(s),ce=n(ot,`

	`),Mt=i(ot,"DIV",{});var te=o(Mt);rt=n(te,`
		`),Gt=i(te,"LABEL",{for:!0,class:!0});var ee=o(Gt);vt=n(ee,`
			Chave de ativação
		`),ee.forEach(s),le=n(te,`
		`),xt=i(te,"DIV",{class:!0});var he=o(xt);fe=n(he,`
			`),nt=i(he,"INPUT",{id:!0,name:!0,type:!0,class:!0}),wt=n(he,`
		`),he.forEach(s),Rt=n(te,`
	`),te.forEach(s),pe=n(ot,`

	`),Et=i(ot,"INPUT",{type:!0,id:!0,name:!0}),Pt=n(ot,` 
	
	`),Yt=i(ot,"INPUT",{type:!0,id:!0,name:!0}),qt=n(ot,` 


	`),ut=i(ot,"DIV",{class:!0});var Dt=o(ut);me=n(Dt,`
		`),ct=i(Dt,"BUTTON",{type:!0,class:!0});var ze=o(ct);se=n(ze,`
			Fechar
		`),ze.forEach(s),_t=n(Dt,`

		`),Jt=i(Dt,"BUTTON",{type:!0,class:!0});var ne=o(Jt);ve=n(ne,`Gravar
			`),ne.forEach(s),Tt=n(Dt,`
	`),Dt.forEach(s),St=n(ot,`
`),ot.forEach(s),this.h()},h(){l(u,"class","sm:mx-auto sm:w-full sm:max-w-sm"),l(g,"for","Description"),l(g,"class","block text-sm font-medium leading-1 text-gray-900"),l(y,"id","Description"),l(y,"name","description"),l(y,"type","text"),y.required=!0,y.disabled=us,l(y,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),l(k,"class","mt-2"),l(V,"for","MACaddress"),l(V,"class","block text-sm font-medium leading-1 text-gray-900"),l(B,"id","MACaddress"),l(B,"name","MACaddress"),l(B,"type","text"),B.required=!0,B.disabled=us,l(B,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),l(F,"class","mt-2"),l(z,"for","DeviceType"),l(z,"class","block text-sm font-medium leading-1 text-gray-900 sm:pt-1.5"),C.__value="device_sensor",C.value=C.__value,J.__value="device_switch",J.value=J.__value,X.__value="device_mixed",X.value=X.__value,l(Z,"name","deviceType"),Z.disabled=us,l(Z,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-1"),a[3]===void 0&&hi(()=>a[9].call(Z)),l(W,"class","ml-2"),l(Y,"class","flex flex-nowrap"),l(Gt,"for","ActivationKey"),l(Gt,"class","block text-sm font-medium leading-1 text-gray-900"),l(nt,"id","ActivationKey"),l(nt,"name","activationkey"),l(nt,"type","text"),nt.required=!0,nt.disabled=us,l(nt,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"),l(xt,"class","mt-2"),l(Et,"type","hidden"),l(Et,"id","ID"),l(Et,"name","ID"),Et.value=a[5],l(Yt,"type","hidden"),l(Yt,"id","installationID"),l(Yt,"name","installationID"),Yt.value=a[6],l(ct,"type","button"),l(ct,"class","mr-1 flex w-full justify-center rounded-md bg-neutral-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-500 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"),l(Jt,"type","submit"),l(Jt,"class","ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),l(ut,"class","flex flex-nowrap"),l(m,"class","w-full space-y-6"),l(m,"method","POST"),l(m,"action","?/manageDevice")},m(K,$){P(K,c,$),P(K,u,$),t(u,f),ft.m(u,null),t(u,d),P(K,p,$),P(K,m,$),t(m,b),t(m,v),t(v,w),t(v,g),t(g,S),t(v,_),t(v,k),t(k,D),t(k,y),Nt(y,a[1]),t(k,E),t(v,A),t(m,x),t(m,G),t(G,U),t(G,V),t(V,j),t(G,I),t(G,F),t(F,Q),t(F,B),Nt(B,a[2]),t(F,q),t(G,N),t(m,H),t(m,Y),t(Y,tt),t(Y,z),t(z,et),t(Y,T),t(Y,W),t(W,M),t(W,Z),t(Z,C),t(C,st),t(Z,J),t(J,dt),t(Z,X),t(X,at),ti(Z,a[3],!0),t(W,yt),t(Y,Ft),t(m,ce),t(m,Mt),t(Mt,rt),t(Mt,Gt),t(Gt,vt),t(Mt,le),t(Mt,xt),t(xt,fe),t(xt,nt),Nt(nt,a[4]),t(xt,wt),t(Mt,Rt),t(m,pe),t(m,Et),t(m,Pt),t(m,Yt),t(m,qt),t(m,ut),t(ut,me),t(ut,ct),t(ct,se),t(ut,_t),t(ut,Jt),t(Jt,ve),t(ut,Tt),t(m,St),jt||(Kt=[it(y,"input",a[7]),it(B,"input",a[8]),it(Z,"change",a[9]),it(nt,"input",a[10]),it(ct,"click",a[11])],jt=!0)},p(K,[$]){ae!==(ae=Xt(K))&&(ft.d(1),ft=ae(K),ft&&(ft.c(),ft.m(u,d))),$&2&&y.value!==K[1]&&Nt(y,K[1]),$&4&&B.value!==K[2]&&Nt(B,K[2]),$&8&&ti(Z,K[3]),$&16&&nt.value!==K[4]&&Nt(nt,K[4]),$&32&&(Et.value=K[5])},i:It,o:It,d(K){K&&s(c),K&&s(u),ft.d(),K&&s(p),K&&s(m),jt=!1,ps(Kt)}}}let us=!1;function zi(a,c,u){let f;In(a,Sr,x=>u(12,f=x));let{props:d}=c,p=f.url.pathname,m,b,v,w,g=null,_=p.split("-").pop();ol(async()=>{d&&(d.description&&u(1,m=d.description),d.mac&&u(2,b=d.mac),d.device_type_code&&u(3,v=d.device_type_code),d.activation_key&&u(4,w=d.activation_key),d.id&&u(5,g=d.id))});function k(){m=this.value,u(1,m)}function D(){b=this.value,u(2,b)}function y(){v=gi(this),u(3,v)}function E(){w=this.value,u(4,w)}const A=()=>Dr();return a.$$set=x=>{"props"in x&&u(0,d=x.props)},[d,m,b,v,w,g,_,k,D,y,E,A]}class ni extends Tn{constructor(c){super(),Sn(this,c,zi,Ui,Vn,{props:0})}}function Ri(a){let c,u,f;return{c(){c=e(`



`),u=r("div"),f=gt(" Plotly "),this.h()},l(d){c=n(d,`



`),u=i(d,"DIV",{class:!0});var p=o(u);f=bt(p," Plotly "),p.forEach(s),this.h()},h(){l(u,"class","h-[50vh] md:h-[100vh] lg:h-[50vh] w-full")},m(d,p){P(d,c,p),P(d,u,p),t(u,f),a[7](u)},p:It,i:It,o:It,d(d){d&&s(c),d&&s(u),a[7](null)}}}function ji(a,c,u){let f;In(a,kn,x=>u(6,f=x));let{props:d}=c,p,m,b,v=["t","tar"],w=[],g;Tr.subscribe(x=>{u(4,g=x)});let S=!1,_=[20,30];ol(async()=>{u(3,p=(await ms(()=>import("./plotly.fc08f43a.js").then(x=>x.p),["./plotly.fc08f43a.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default)});async function k(x){w=x;var G=[];for(let j of x){let I=new Date(g[1]);I.setDate(I.getDate()+1),I=I.toISOString().split("T")[0],b=new URLSearchParams({from_date:g[0],to_date:I,device_mac:j.mac,installation_id:j.installation_id});let Q=await(await fetch(`https://api.h2optimum.2adapt.pt/api/v2/measurement?${b.toString()}`)).json();v.forEach(B=>{var q=fs(B),N=Q.filter(Y=>Y.type===B),H={x:mn("ts",N),y:mn("val",N),name:j.description+q,type:"scatter"};G.push(H)})}var U={dragmode:"pan",legend:{x:0,y:1.5,orientation:"h",xaxis:{range:[g[0],g[1]],type:"date"}},xaxis:{fixedrange:!0},yaxis:{fixedrange:!0,title:{text:"Temperatura (ºC)",font:{family:"",size:12,color:"#7f7f7f"}}}};let V={responsive:!0,displaylogo:!1,displayModeBar:!0,modeBarButtonsToRemove:["zoom2d","zoomIn2d","zoomOut2d","resetScale2d","pan"]};G&&p.newPlot(m,G,U,V)}function D(x){w&&Vr&&p&&S==!0?Lr(x,w,p,m,v):(S=!0,k(d))}async function y(x){let U=m.data.map((I,F)=>{if(I.compare==!0)return F}).filter(I=>I>=0);if(U.length>0)p.deleteTraces(m,U);else{w=x;var V=new Date(g[0]),j=new Date(g[1]);V.setFullYear(V.getFullYear()-1),j.setFullYear(j.getFullYear()-1),V.setDate(V.getDate()+1),j.setDate(j.getDate()+1);for(let I of x){b=new URLSearchParams({from_date:V.toISOString().split("T")[0],to_date:j.toISOString().split("T")[0],device_mac:I.mac,installation_id:I.installation_id});let Q=await(await fetch(`https://api.h2optimum.2adapt.pt/api/v2/measurement?${b.toString()}`)).json();v.forEach(B=>{var q=fs(B),N=Q.filter(z=>z.type===B),H=mn("ts",N),tt={x:H.map(z=>xi(z)),y:mn("val",N),name:"(C) "+I.description+q,type:"scatter",opacity:.2,compare:!0};p.addTraces(m,tt)})}}}async function E(){console.log("Generated"),cs(f,d,_,y)}function A(x){Dn[x?"unshift":"push"](()=>{m=x,u(0,m)})}return a.$$set=x=>{"props"in x&&u(1,d=x.props)},a.$$.update=()=>{a.$$.dirty&106&&p&&cs(f,d,_,k),a.$$.dirty&24&&p&&D(g)},[m,d,E,p,g,_,f,A]}class fi extends Tn{constructor(c){super(),Sn(this,c,ji,Ri,Vn,{props:1,compareGraph:2})}get compareGraph(){return this.$$.ctx[2]}}function Hi(a){let c,u,f;return{c(){c=e(`




`),u=r("div"),f=gt(" Plotly "),this.h()},l(d){c=n(d,`




`),u=i(d,"DIV",{class:!0});var p=o(u);f=bt(p," Plotly "),p.forEach(s),this.h()},h(){l(u,"class","h-[50vh] md:h-[100vh] lg:h-[50vh] w-full")},m(d,p){P(d,c,p),P(d,u,p),t(u,f),a[6](u)},p:It,i:It,o:It,d(d){d&&s(c),d&&s(u),a[6](null)}}}function Fi(a,c,u){let f;In(a,kn,E=>u(5,f=E));let{props:d}=c,p,m,b,v=["h"],w=[],g;Tr.subscribe(E=>{u(3,g=E)});let S=!1,_;di.subscribe(E=>{u(4,_=E)}),_||(_=[vn(d.soilTypeCode,"saturated",1),vn(d.soilTypeCode,"wet",1),vn(d.soilTypeCode,"irrigate",1)]),ol(async()=>{u(2,p=(await ms(()=>import("./plotly.fc08f43a.js").then(E=>E.p),["./plotly.fc08f43a.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default)});async function k(E,A){w=E;var x=[];for(let V of E){let j=new Date(g[1]);j.setDate(j.getDate()+1),j=j.toISOString().split("T")[0],b=new URLSearchParams({from_date:g[0],to_date:j,device_mac:V.mac,installation_id:V.installation_id});let F=await(await fetch(`https://api.h2optimum.2adapt.pt/api/v2/measurement?${b.toString()}`)).json();v.forEach(Q=>{for(var B=fs(Q),q=F.filter(T=>T.type===Q),N=F.filter(T=>T.type==="t"),H=mn("val",N),Y=[],tt=[],z=[],et=0;et<3;et++){Y.push(wi(et+2,q)),tt.push(Ei(H,Y[et]));let T=tt[et].some(M=>M>2e3);var z={x:mn("ts",Y[et]),y:tt[et],name:V.description+" "+(et+1)+B,type:"scatter"};T&&(z.visible="legendonly"),x.push(z)}})}var G={dragmode:"pan",legend:{x:0,y:1.5,orientation:"h",xaxis:{range:[g[0],g[1]],type:"date"}},shapes:[{type:"rect",xref:"paper",y0:0,y1:A[0],x0:0,x1:1,fillcolor:"#56A3A6",opacity:.3,line:{width:0}},{type:"rect",xref:"paper",y0:A[0],y1:A[1],x0:0,x1:1,fillcolor:"#11B3E4",opacity:.3,line:{width:0}},{type:"rect",xref:"paper",y0:A[1],y1:A[2],x0:0,x1:1,fillcolor:"#053949",opacity:.3,line:{width:0}}],xaxis:{fixedrange:!0},yaxis:{fixedrange:!0,title:{text:"Potencial hídrico (cbar)",font:{family:"",size:12,color:"#7f7f7f"}}}};let U={dragMode:!1,responsive:!0,displaylogo:!1,displayModeBar:!0,modeBarButtonsToRemove:["zoom2d","zoomIn2d","zoomOut2d","resetScale2d","pan"]};x&&p.newPlot(m,x,G,U)}function D(E){w&&Vr&&p&&S==!0?Lr(E,w,p,m,v):(S=!0,k(d,_))}function y(E){Dn[E?"unshift":"push"](()=>{m=E,u(0,m)})}return a.$$set=E=>{"props"in E&&u(1,d=E.props)},a.$$.update=()=>{a.$$.dirty&54&&p&&cs(f,d,_,k),a.$$.dirty&12&&p&&D(g)},[m,d,p,g,_,f,y]}class pi extends Tn{constructor(c){super(),Sn(this,c,Fi,Hi,Vn,{props:1})}}function Gi(a){let c,u,f;return{c(){c=e(`



	`),u=r("div"),f=gt(" Plotly "),this.h()},l(d){c=n(d,`



	`),u=i(d,"DIV",{class:!0});var p=o(u);f=bt(p," Plotly "),p.forEach(s),this.h()},h(){l(u,"class","h-[50vh] md:h-[100vh] lg:h-[50vh] w-full")},m(d,p){P(d,c,p),P(d,u,p),t(u,f),a[5](u)},p:It,i:It,o:It,d(d){d&&s(c),d&&s(u),a[5](null)}}}function Yi(a,c,u){let f;In(a,kn,y=>u(4,f=y));let{props:d}=c,p,m,b,v=["b"],w=[],g;Tr.subscribe(y=>{u(3,g=y)});let S=!1;ol(async()=>{u(2,p=(await ms(()=>import("./plotly.fc08f43a.js").then(y=>y.p),["./plotly.fc08f43a.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default)});async function _(y,E){w=y;var A=[];for(let U of y){let V=new Date(g[1]);V.setDate(V.getDate()+1),V=V.toISOString().split("T")[0],b=new URLSearchParams({from_date:g[0],to_date:V,device_mac:U.mac,installation_id:U.installation_id});let I=await(await fetch(`https://api.h2optimum.2adapt.pt/api/v2/measurement?${b.toString()}`)).json();v.forEach(F=>{var Q=fs(F),B=I.filter(N=>N.type===F),q={x:mn("ts",B),y:mn("val",B),name:U.description+Q,type:"scatter"};A.push(q)})}var x={dragmode:"pan",legend:{x:0,y:1.5,orientation:"h",xaxis:{range:[g[0],g[1]],type:"date"}},xaxis:{fixedrange:!0},yaxis:{fixedrange:!0,title:{text:"Bateria (v)",font:{family:"",size:12,color:"#7f7f7f"}}}};let G={responsive:!0,displaylogo:!1,displayModeBar:!0,modeBarButtonsToRemove:["zoom2d","zoomIn2d","zoomOut2d","resetScale2d","pan"]};A&&p.newPlot(m,A,x,G)}function k(y){w&&Vr&&p&&S==!0?Lr(y,w,p,m,v):(S=!0,_(d))}function D(y){Dn[y?"unshift":"push"](()=>{m=y,u(0,m)})}return a.$$set=y=>{"props"in y&&u(1,d=y.props)},a.$$.update=()=>{a.$$.dirty&22&&p&&cs(f,d,null,_),a.$$.dirty&12&&p&&k(g)},[m,d,p,g,f,D]}class mi extends Tn{constructor(c){super(),Sn(this,c,Yi,Gi,Vn,{props:1})}}function qi(a){let c,u,f,d,p,m,b,v,w,g,S,_,k,D,y,E,A,x,G,U,V,j,I,F,Q,B,q,N,H,Y,tt,z,et,T,W,M,Z,C,st,J,dt,X,at,yt,Ft,ce,Mt,rt,Gt,vt,le,xt,fe,nt,wt,Rt,pe,Et,Pt,Yt,qt,ut,me,ct,se,_t,Jt,ve,Tt,St,jt,Kt,Xt,ae,ft,K,$,ot,Vt,Be;return{c(){c=e(`\r
\r
\r
\r
`),u=r("div"),f=e(`\r
	`),d=r("h2"),p=e("Editar thresholds"),m=e(`\r
`),b=e(`\r
`),v=r("form"),w=e(`\r
    `),g=r("div"),S=e(`\r
		`),_=r("label"),k=e("Solo saturado entre"),D=e(`\r
		`),y=r("div"),E=e(`\r
			`),A=r("input"),G=e(`\r
            `),U=r("span"),V=e("-"),j=e(`\r
			`),I=r("input"),F=e(`\r
		`),Q=e(`\r
	`),B=e(`\r
\r
    `),q=r("div"),N=e(`\r
		`),H=r("label"),Y=e("Solo adquadamente húmido entre"),tt=e(`\r
		`),z=r("div"),et=e(`\r
			`),T=r("input"),W=e(`\r
            `),M=r("span"),Z=e("-"),C=e(`\r
			`),st=r("input"),J=e(`\r
		`),dt=e(`\r
	`),X=e(`\r
\r
    `),at=r("div"),yt=e(`\r
		`),Ft=r("label"),ce=e("Solo necessita irrigação entre"),Mt=e(`\r
		`),rt=r("div"),Gt=e(`\r
			`),vt=r("input"),le=e(`\r
            `),xt=r("span"),fe=e("-"),nt=e(`\r
			`),wt=r("input"),Rt=e(`\r
		`),pe=e(`\r
	`),Et=e(`\r
\r
    `),Pt=r("div"),Yt=e(`\r
		`),qt=r("label"),ut=e("Solo seco acima de"),me=e(`\r
		`),ct=r("div"),se=e(`\r
            `),_t=r("input"),Jt=e(`\r
		`),ve=e(`\r
	`),Tt=e(`\r
\r
	`),St=r("div"),jt=e(`\r
		`),Kt=r("button"),Xt=e(`\r
			Fechar\r
		`),ae=e(`\r
\r
		`),ft=r("button"),K=e(`Gravar\r
			`),$=e(`\r
	`),ot=e(`\r
`),this.h()},l(O){c=n(O,`\r
\r
\r
\r
`),u=i(O,"DIV",{class:!0});var lt=o(u);f=n(lt,`\r
	`),d=i(lt,"H2",{class:!0});var Zt=o(d);p=n(Zt,"Editar thresholds"),Zt.forEach(s),m=n(lt,`\r
`),lt.forEach(s),b=n(O,`\r
`),v=i(O,"FORM",{class:!0,method:!0,action:!0});var ht=o(v);w=n(ht,`\r
    `),g=i(ht,"DIV",{});var pt=o(g);S=n(pt,`\r
		`),_=i(pt,"LABEL",{for:!0,class:!0});var Ue=o(_);k=n(Ue,"Solo saturado entre"),Ue.forEach(s),D=n(pt,`\r
		`),y=i(pt,"DIV",{class:!0});var Ct=o(y);E=n(Ct,`\r
			`),A=i(Ct,"INPUT",{id:!0,name:!0,type:!0,class:!0}),G=n(Ct,`\r
            `),U=i(Ct,"SPAN",{class:!0});var Lt=o(U);V=n(Lt,"-"),Lt.forEach(s),j=n(Ct,`\r
			`),I=i(Ct,"INPUT",{id:!0,name:!0,type:!0,class:!0}),F=n(Ct,`\r
		`),Ct.forEach(s),Q=n(pt,`\r
	`),pt.forEach(s),B=n(ht,`\r
\r
    `),q=i(ht,"DIV",{});var $t=o(q);N=n($t,`\r
		`),H=i($t,"LABEL",{for:!0,class:!0});var Ot=o(H);Y=n(Ot,"Solo adquadamente húmido entre"),Ot.forEach(s),tt=n($t,`\r
		`),z=i($t,"DIV",{class:!0});var kt=o(z);et=n(kt,`\r
			`),T=i(kt,"INPUT",{id:!0,name:!0,type:!0,class:!0}),W=n(kt,`\r
            `),M=i(kt,"SPAN",{class:!0});var te=o(M);Z=n(te,"-"),te.forEach(s),C=n(kt,`\r
			`),st=i(kt,"INPUT",{id:!0,name:!0,type:!0,class:!0}),J=n(kt,`\r
		`),kt.forEach(s),dt=n($t,`\r
	`),$t.forEach(s),X=n(ht,`\r
\r
    `),at=i(ht,"DIV",{});var ee=o(at);yt=n(ee,`\r
		`),Ft=i(ee,"LABEL",{for:!0,class:!0});var he=o(Ft);ce=n(he,"Solo necessita irrigação entre"),he.forEach(s),Mt=n(ee,`\r
		`),rt=i(ee,"DIV",{class:!0});var Dt=o(rt);Gt=n(Dt,`\r
			`),vt=i(Dt,"INPUT",{id:!0,name:!0,type:!0,class:!0}),le=n(Dt,`\r
            `),xt=i(Dt,"SPAN",{class:!0});var ze=o(xt);fe=n(ze,"-"),ze.forEach(s),nt=n(Dt,`\r
			`),wt=i(Dt,"INPUT",{id:!0,name:!0,type:!0,class:!0}),Rt=n(Dt,`\r
		`),Dt.forEach(s),pe=n(ee,`\r
	`),ee.forEach(s),Et=n(ht,`\r
\r
    `),Pt=i(ht,"DIV",{});var ne=o(Pt);Yt=n(ne,`\r
		`),qt=i(ne,"LABEL",{for:!0,class:!0});var Ln=o(qt);ut=n(Ln,"Solo seco acima de"),Ln.forEach(s),me=n(ne,`\r
		`),ct=i(ne,"DIV",{class:!0});var He=o(ct);se=n(He,`\r
            `),_t=i(He,"INPUT",{id:!0,name:!0,type:!0,class:!0}),Jt=n(He,`\r
		`),He.forEach(s),ve=n(ne,`\r
	`),ne.forEach(s),Tt=n(ht,`\r
\r
	`),St=i(ht,"DIV",{class:!0});var Bt=o(St);jt=n(Bt,`\r
		`),Kt=i(Bt,"BUTTON",{type:!0,class:!0});var An=o(Kt);Xt=n(An,`\r
			Fechar\r
		`),An.forEach(s),ae=n(Bt,`\r
\r
		`),ft=i(Bt,"BUTTON",{type:!0,class:!0});var ge=o(ft);K=n(ge,`Gravar\r
			`),ge.forEach(s),$=n(Bt,`\r
	`),Bt.forEach(s),ot=n(ht,`\r
`),ht.forEach(s),this.h()},h(){l(d,"class","mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"),l(u,"class","sm:mx-auto sm:w-full sm:max-w-sm"),l(_,"for","minSat"),l(_,"class","block text-sm font-medium leading-1 text-gray-900"),l(A,"id","minSat"),l(A,"name","minSat"),l(A,"type","number"),A.disabled=!0,A.value=x=vn(a[0],"saturated",0),l(A,"class","block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),l(U,"class","mr-5 ml-5 leading-8"),l(I,"id","maxSat"),l(I,"name","maxSat"),l(I,"type","number"),l(I,"class","block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),l(y,"class","mt-2 flex"),l(H,"for","minSat"),l(H,"class","block text-sm font-medium leading-1 text-gray-900"),l(T,"id","minSat"),l(T,"name","minSat"),l(T,"type","number"),T.disabled=!0,l(T,"class","block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),l(M,"class","mr-5 ml-5 leading-8"),l(st,"id","maxSat"),l(st,"name","maxSat"),l(st,"type","number"),l(st,"class","block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),l(z,"class","mt-2 flex"),l(Ft,"for","minSat"),l(Ft,"class","block text-sm font-medium leading-1 text-gray-900"),l(vt,"id","minSat"),l(vt,"name","minSat"),l(vt,"type","number"),vt.disabled=!0,l(vt,"class","block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),l(xt,"class","mr-5 ml-5 leading-8"),l(wt,"id","maxSat"),l(wt,"name","maxSat"),l(wt,"type","number"),l(wt,"class","block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),l(rt,"class","mt-2 flex"),l(qt,"for","minSat"),l(qt,"class","block text-sm font-medium leading-1 text-gray-900"),l(_t,"id","minSat"),l(_t,"name","minSat"),l(_t,"type","number"),_t.disabled=!0,l(_t,"class","block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"),l(ct,"class","mt-2 flex"),l(Kt,"type","button"),l(Kt,"class","mr-1 flex w-full justify-center rounded-md bg-neutral-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-500 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"),l(ft,"type","submit"),l(ft,"class","ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),l(St,"class","flex flex-nowrap"),l(v,"class","w-full space-y-6"),l(v,"method","POST"),l(v,"action",a[4])},m(O,lt){P(O,c,lt),P(O,u,lt),t(u,f),t(u,d),t(d,p),t(u,m),P(O,b,lt),P(O,v,lt),t(v,w),t(v,g),t(g,S),t(g,_),t(_,k),t(g,D),t(g,y),t(y,E),t(y,A),t(y,G),t(y,U),t(U,V),t(y,j),t(y,I),Nt(I,a[1]),t(y,F),t(g,Q),t(v,B),t(v,q),t(q,N),t(q,H),t(H,Y),t(q,tt),t(q,z),t(z,et),t(z,T),Nt(T,a[1]),t(z,W),t(z,M),t(M,Z),t(z,C),t(z,st),Nt(st,a[2]),t(z,J),t(q,dt),t(v,X),t(v,at),t(at,yt),t(at,Ft),t(Ft,ce),t(at,Mt),t(at,rt),t(rt,Gt),t(rt,vt),Nt(vt,a[2]),t(rt,le),t(rt,xt),t(xt,fe),t(rt,nt),t(rt,wt),Nt(wt,a[3]),t(rt,Rt),t(at,pe),t(v,Et),t(v,Pt),t(Pt,Yt),t(Pt,qt),t(qt,ut),t(Pt,me),t(Pt,ct),t(ct,se),t(ct,_t),Nt(_t,a[3]),t(ct,Jt),t(Pt,ve),t(v,Tt),t(v,St),t(St,jt),t(St,Kt),t(Kt,Xt),t(St,ae),t(St,ft),t(ft,K),t(St,$),t(v,ot),Vt||(Be=[it(I,"input",a[6]),it(T,"input",a[7]),it(st,"input",a[8]),it(vt,"input",a[9]),it(wt,"input",a[10]),it(_t,"input",a[11]),it(Kt,"click",a[12]),it(ft,"click",a[5]),Ir(Mi.call(null,v))],Vt=!0)},p(O,[lt]){lt&1&&x!==(x=vn(O[0],"saturated",0))&&A.value!==x&&(A.value=x),lt&2&&oe(I.value)!==O[1]&&Nt(I,O[1]),lt&2&&oe(T.value)!==O[1]&&Nt(T,O[1]),lt&4&&oe(st.value)!==O[2]&&Nt(st,O[2]),lt&4&&oe(vt.value)!==O[2]&&Nt(vt,O[2]),lt&8&&oe(wt.value)!==O[3]&&Nt(wt,O[3]),lt&8&&oe(_t.value)!==O[3]&&Nt(_t,O[3])},i:It,o:It,d(O){O&&s(c),O&&s(u),O&&s(b),O&&s(v),Vt=!1,ps(Be)}}}function Ji(a,c,u){let f;In(a,Sr,A=>u(13,f=A));let{props:d}=c,p=f.url.pathname,m=vn(d,"saturated",1),b=vn(d,"wet",1),v=vn(d,"irrigate",1);function w(){di.set([m,b,v]),Dr()}function g(){m=oe(this.value),u(1,m)}function S(){m=oe(this.value),u(1,m)}function _(){b=oe(this.value),u(2,b)}function k(){b=oe(this.value),u(2,b)}function D(){v=oe(this.value),u(3,v)}function y(){v=oe(this.value),u(3,v)}const E=()=>Dr();return a.$$set=A=>{"props"in A&&u(0,d=A.props)},[d,m,b,v,p,w,g,S,_,k,D,y,E]}class Ki extends Tn{constructor(c){super(),Sn(this,c,Ji,qi,Vn,{props:0})}}function li(a,c,u){const f=a.slice();return f[30]=c[u],f[31]=c,f[32]=u,f}function Wi(a){let c,u;return{c(){c=de("svg"),u=de("path"),this.h()},l(f){c=ue(f,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var d=o(c);u=ue(d,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),o(u).forEach(s),d.forEach(s),this.h()},h(){l(u,"stroke-linecap","round"),l(u,"stroke-linejoin","round"),l(u,"d","M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),l(c,"xmlns","http://www.w3.org/2000/svg"),l(c,"class","h-6 w-6 text-green-400"),l(c,"fill","none"),l(c,"viewBox","0 0 24 24"),l(c,"stroke-width","1.5"),l(c,"stroke","currentColor")},m(f,d){P(f,c,d),t(c,u)},p:It,d(f){f&&s(c)}}}function Zi(a){let c,u,f,d,p,m,b,v,w,g,S;return{c(){c=r("span"),u=e(`
							`),f=de("svg"),d=de("path"),p=e(`
						`),b=e(`
						`),v=r("span"),w=e(" "),this.h()},l(_){c=i(_,"SPAN",{title:!0});var k=o(c);u=n(k,`
							`),f=ue(k,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var D=o(f);d=ue(D,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),o(d).forEach(s),D.forEach(s),p=n(k,`
						`),k.forEach(s),b=n(_,`
						`),v=i(_,"SPAN",{class:!0});var y=o(v);w=n(y," "),y.forEach(s),this.h()},h(){l(d,"stroke-linecap","round"),l(d,"stroke-linejoin","round"),l(d,"d","M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"),l(f,"xmlns","http://www.w3.org/2000/svg"),l(f,"class","h-6 w-6 text-yellow-400"),l(f,"fill","none"),l(f,"viewBox","0 0 24 24"),l(f,"stroke-width","1.5"),l(f,"stroke","currentColor"),l(c,"title",m=JSON.stringify(a[6])),l(v,"class","hidden absolute right-0 p-2 top-7 z-10 w-[70vw] sm:w-[30vw] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ")},m(_,k){P(_,c,k),t(c,u),t(c,f),t(f,d),t(c,p),a[14](c),P(_,b,k),P(_,v,k),t(v,w),a[15](v),g||(S=it(c,"click",a[13]),g=!0)},p(_,k){k[0]&64&&m!==(m=JSON.stringify(_[6]))&&l(c,"title",m)},d(_){_&&s(c),a[14](null),_&&s(b),_&&s(v),a[15](null),g=!1,S()}}}function si(a){let c,u,f,d,p,m,b,v,w;return{c(){c=r("div"),u=e(`
						`),f=r("button"),d=de("svg"),p=de("path"),m=e(`
							Adicionar`),b=e(`
					`),this.h()},l(g){c=i(g,"DIV",{class:!0});var S=o(c);u=n(S,`
						`),f=i(S,"BUTTON",{type:!0,class:!0});var _=o(f);d=ue(_,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var k=o(d);p=ue(k,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),o(p).forEach(s),k.forEach(s),m=n(_,`
							Adicionar`),_.forEach(s),b=n(S,`
					`),S.forEach(s),this.h()},h(){l(p,"fill-rule","evenodd"),l(p,"d","M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"),l(p,"clip-rule","evenodd"),l(d,"xmlns","http://www.w3.org/2000/svg"),l(d,"viewBox","0 0 24 24"),l(d,"fill","currentColor"),l(d,"class","h-5 w-5 pr-1"),l(f,"type","button"),l(f,"class","relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"),l(c,"class","ml-4 mt-2 flex-shrink-0")},m(g,S){P(g,c,S),t(c,u),t(c,f),t(f,d),t(d,p),t(f,m),t(c,b),v||(w=it(f,"click",a[16]),v=!0)},p:It,d(g){g&&s(c),v=!1,w()}}}function ai(a){let c,u,f,d,p,m,b,v,w,g,S,_,k,D,y,E,A,x,G,U,V,j,I,F,Q,B,q,N,H,Y,tt,z;function et(){return a[18](a[30],a[31],a[32])}function T(){return a[19](a[30])}return{c(){c=r("button"),u=e(`
								`),f=de("svg"),d=de("path"),p=e(`
							`),m=e(`
							`),b=r("div"),v=e(`
									`),w=gt(' Active: "bg-gray-100", Not Active: "" '),g=e(`
									`),S=r("a"),_=e("Editar"),k=e(`

									`),D=r("div"),y=e(`
									`),E=gt(`
									<form method="POST" action="/logout">
										<button type="submit" class="">Terminar sessão</button>
									</form>
									`),A=e(`
									`),x=r("form"),G=e(`
									`),U=r("button"),V=e(`Apagar
									`),j=e(`
									`),I=r("input"),Q=e(` 
									`),B=e(`
									
									`),q=e(`
									`),N=gt(` 
									<a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">Terminar sessão</a>
								</div>
									`),H=e(`              
							`),this.h()},l(W){c=i(W,"BUTTON",{class:!0});var M=o(c);u=n(M,`
								`),f=ue(M,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Z=o(f);d=ue(Z,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),o(d).forEach(s),Z.forEach(s),p=n(M,`
							`),M.forEach(s),m=n(W,`
							`),b=i(W,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0,tabindex:!0,style:!0,"data-transition-enter":!0,"data-transition-enter-start":!0,"data-transition-enter-end":!0,"data-transition-leave":!0,"data-transition-leave-start":!0,"data-transition-leave-end":!0});var C=o(b);v=n(C,`
									`),w=bt(C,' Active: "bg-gray-100", Not Active: "" '),g=n(C,`
									`),S=i(C,"A",{class:!0,role:!0,tabindex:!0,id:!0});var st=o(S);_=n(st,"Editar"),st.forEach(s),k=n(C,`

									`),D=i(C,"DIV",{class:!0,role:!0,tabindex:!0,id:!0});var J=o(D);y=n(J,`
									`),E=bt(J,`
									<form method="POST" action="/logout">
										<button type="submit" class="">Terminar sessão</button>
									</form>
									`),A=n(J,`
									`),x=i(J,"FORM",{class:!0,method:!0,action:!0});var dt=o(x);G=n(dt,`
									`),U=i(dt,"BUTTON",{type:!0,class:!0});var X=o(U);V=n(X,`Apagar
									`),X.forEach(s),j=n(dt,`
									`),I=i(dt,"INPUT",{type:!0,id:!0,name:!0}),Q=n(dt,` 
									`),dt.forEach(s),B=n(J,`
									
									`),J.forEach(s),q=n(C,`
									`),N=bt(C,` 
									<a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">Terminar sessão</a>
								</div>
									`),H=n(C,`              
							`),C.forEach(s),this.h()},h(){l(d,"stroke-linecap","round"),l(d,"stroke-linejoin","round"),l(d,"d","M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"),l(f,"xmlns","http://www.w3.org/2000/svg"),l(f,"fill","none"),l(f,"viewBox","0 0 24 24"),l(f,"stroke-width","1.5"),l(f,"stroke","currentColor"),l(f,"class","h-6 w-6"),l(c,"class","text-sm leading-6"),l(S,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),l(S,"role","menuitem"),l(S,"tabindex","-1"),l(S,"id","user-menu-item-0"),l(U,"type","submit"),l(U,"class",""),l(I,"type","hidden"),l(I,"id","ID"),l(I,"name","ID"),I.value=F=a[30].id,l(x,"class",""),l(x,"method","POST"),l(x,"action",a[8]+"?/deleteDevice"),l(D,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),l(D,"role","menuitem"),l(D,"tabindex","-1"),l(D,"id","user-menu-item-1"),l(b,"class","absolute right-0 top-7 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"),l(b,"role","menu"),l(b,"aria-orientation","vertical"),l(b,"aria-labelledby","user-menu-button"),l(b,"tabindex","-1"),ii(b,"display","none"),l(b,"data-transition-enter",""),l(b,"data-transition-enter-start",""),l(b,"data-transition-enter-end",""),l(b,"data-transition-leave",""),l(b,"data-transition-leave-start",""),l(b,"data-transition-leave-end","")},m(W,M){P(W,c,M),t(c,u),t(c,f),t(f,d),t(c,p),P(W,m,M),P(W,b,M),t(b,v),t(b,w),t(b,g),t(b,S),t(S,_),t(b,k),t(b,D),t(D,y),t(D,E),t(D,A),t(D,x),t(x,G),t(x,U),t(U,V),t(x,j),t(x,I),t(x,Q),t(D,B),t(b,q),t(b,N),t(b,H),tt||(z=[it(c,"click",et),it(S,"click",T),Ir(Y=ui.call(null,b,{show:a[30].dropdownNewDeviceIsOpen}))],tt=!0)},p(W,M){a=W,M[0]&1&&F!==(F=a[30].id)&&(I.value=F),Y&&oi(Y.update)&&M[0]&1&&Y.update.call(null,{show:a[30].dropdownNewDeviceIsOpen})},d(W){W&&s(c),W&&s(m),W&&s(b),tt=!1,ps(z)}}}function ri(a){let c,u,f,d,p,m,b=a[30].description+"",v,w,g,S,_,k,D,y,E=a[30].last_reading_formatted+"",A,x,G,U,V,j,I,F,Q=a[30].mac+"",B,q,N,H,Y,tt,z,et,T;function W(){a[17].call(H,a[30])}let M=a[5]&&ai(a);return{c(){c=r("li"),u=e(`
					`),f=r("div"),d=e(`
						`),p=r("p"),m=e(`
							`),v=e(b),w=e(`
						`),g=e(`
					`),S=e(`
					`),_=r("div"),k=e(`
						`),D=r("p"),y=e(`
							`),A=e(E),x=e(`
						`),G=e(`
					`),U=e(`
					`),V=r("div"),j=e(`
						`),I=r("p"),F=e(`
							`),B=e(Q),q=e(`
						`),N=e(`
						`),H=r("input"),Y=e(`
						`),M&&M.c(),tt=e(`
					`),z=e(`
				`),this.h()},l(Z){c=i(Z,"LI",{class:!0});var C=o(c);u=n(C,`
					`),f=i(C,"DIV",{class:!0});var st=o(f);d=n(st,`
						`),p=i(st,"P",{class:!0});var J=o(p);m=n(J,`
							`),v=n(J,b),w=n(J,`
						`),J.forEach(s),g=n(st,`
					`),st.forEach(s),S=n(C,`
					`),_=i(C,"DIV",{class:!0});var dt=o(_);k=n(dt,`
						`),D=i(dt,"P",{class:!0});var X=o(D);y=n(X,`
							`),A=n(X,E),x=n(X,`
						`),X.forEach(s),G=n(dt,`
					`),dt.forEach(s),U=n(C,`
					`),V=i(C,"DIV",{class:!0});var at=o(V);j=n(at,`
						`),I=i(at,"P",{class:!0});var yt=o(I);F=n(yt,`
							`),B=n(yt,Q),q=n(yt,`
						`),yt.forEach(s),N=n(at,`
						`),H=i(at,"INPUT",{id:!0,type:!0,class:!0}),Y=n(at,`
						`),M&&M.l(at),tt=n(at,`
					`),at.forEach(s),z=n(C,`
				`),C.forEach(s),this.h()},h(){l(p,"class","text-sm leading-6"),l(f,"class","min-w-0 flex-auto"),l(D,"class","text-sm leading-6"),l(_,"class","min-w-0 flex-auto"),l(I,"class","text-sm leading-6 md:block hidden"),l(H,"id","visible-checkbox"),l(H,"type","checkbox"),l(H,"class","h-4 w-4 rounded text-sky-600 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600"),l(V,"class","flex min-w-0 justify-between items-center relative"),l(c,"class","grid grid-cols-3 gap-4 p-4 text-start")},m(Z,C){P(Z,c,C),t(c,u),t(c,f),t(f,d),t(f,p),t(p,m),t(p,v),t(p,w),t(f,g),t(c,S),t(c,_),t(_,k),t(_,D),t(D,y),t(D,A),t(D,x),t(_,G),t(c,U),t(c,V),t(V,j),t(V,I),t(I,F),t(I,B),t(I,q),t(V,N),t(V,H),H.checked=a[7][a[30].id],t(V,Y),M&&M.m(V,null),t(V,tt),t(c,z),et||(T=it(H,"change",W),et=!0)},p(Z,C){a=Z,C[0]&1&&b!==(b=a[30].description+"")&&ul(v,b),C[0]&1&&E!==(E=a[30].last_reading_formatted+"")&&ul(A,E),C[0]&1&&Q!==(Q=a[30].mac+"")&&ul(B,Q),C[0]&129&&(H.checked=a[7][a[30].id]),a[5]?M?M.p(a,C):(M=ai(a),M.c(),M.m(V,tt)):M&&(M.d(1),M=null)},d(Z){Z&&s(c),M&&M.d(),et=!1,T()}}}function Qi(a){let c,u,f,d,p,m,b,v,w,g,S,_,k,D,y,E,A,x,G,U=a[0].installation.name+"",V,j,I,F,Q,B,q,N,H,Y,tt,z,et,T,W,M,Z,C,st,J,dt,X,at,yt,Ft,ce,Mt,rt,Gt,vt,le,xt,fe,nt,wt,Rt,pe,Et,Pt,Yt,qt,ut,me,ct=a[0].installation.soilTypeCode+"",se,_t,Jt,ve,Tt,St,jt,Kt,Xt,ae,ft,K,$,ot,Vt,Be,O,lt,Zt,ht,pt,Ue,Ct,Lt,$t,Ot,kt,te,ee,he,Dt,ze,ne,Ln,He,Bt,An,ge,vs,be,hs,Fe,gs,Nn,bs,_s,ys,cl,xs,ws,Wt,Es,re,ks,Ge,Ds,Mn,Is,Ts,Ss,Ye,Vs,Pn,Ls,As,Ns,qe,Ms,Cn,Ps,Cs,Os,Bs,Us,zs,fl,Rs,js,Hs,Fs,pl,ml,vl,hl,gl,_e,Gs,De,Ys,Je,qs,Ie,Js,Ke,Ks,On,Ws,Zs,Qs,Te,Xs,We,$s,Ze,ta,ea,na,Qe,la,hn,sa,aa,ra,ia,oa,da,Re,ua,ca,Se,fa,Xe,pa,Ve,ma,$e,va,Bn,ha,ga,ba,Le,_a,ya,xa,ie,wa,je,Ea,ye,gn,ka,Da,mt,Ia,Ae,Ta,Sa,xe,Va,Un,bn,La,Aa,Na,bl,Ma,tn,Pa,_n,Ca,Oa,Ba,Ua,za,Ra,ja,en,Ha,Fa,_l,yl,xl,wl,El,we,Ga,Ne,Ya,nn,qa,Me,Ja,ln,Ka,zn,Wa,Za,Qa,sn,Xa,an,$a,yn,tr,er,nr,lr,sr,ar,rn,rr,ir,Pe,or,on,dr,Ce,ur,dn,cr,Rn,fr,pr,mr,un,vr,cn,hr,gr,br,_r,yr,xn,xr,wr,kl,Dl,jn,Er,Ar;function Nr(h,R){return R[0]&64&&(vt=null),vt==null&&(vt=Object.keys(h[6]).length>0),vt?Zi:Wi}let Il=Nr(a,[-1,-1]),Ee=Il(a),Ht=a[5]&&si(a),Hn=a[0].listDevices,Ut=[];for(let h=0;h<Hn.length;h+=1)Ut[h]=ri(li(a,Hn,h));let vi={props:a[0].listDevices};return Re=new fi({props:vi}),a[21](Re),en=new pi({props:{props:a[0].listDevices}}),rn=new mi({props:{props:a[0].listDevices}}),xn=new ci({props:{props:a[11]}}),{c(){c=e(`





`),u=gt("* SUMMARY + DEVICES "),f=e(`
`),d=r("ul"),p=e(`
	`),m=r("li"),b=e(`
		`),v=r("div"),w=e(`
			`),g=r("div"),S=e(`
				`),_=r("div"),k=e(`
					`),D=r("h3"),y=e("Sumário"),E=e(`
				`),A=e(`
				`),x=r("div"),G=e(`
					`),V=e(U),j=e(`
				`),I=e(`
				`),F=gt(`<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create new job</button>
				</div>`),Q=e(`
			`),B=e(`
		`),q=e(`
		`),N=r("ul"),H=e(`
			`),Y=gt(` <li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6 font-semibold">Status: Off</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">`),tt=e(`
			`),z=gt(' Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" '),et=e(`
			`),T=gt(`<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
						<span class="sr-only">Use setting</span>`),W=e(`
			`),M=gt(' Enabled: "translate-x-5", Not Enabled: "translate-x-0" '),Z=e(`
			`),C=gt(`<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
					</button>
				</div>
			 </li> `),st=e(`
			`),J=r("li"),dt=e(`
				`),X=r("div"),at=e(`
					`),yt=r("div"),Ft=e(`
						Diagnóstico:
					`),ce=e(`
				`),Mt=e(`
				`),rt=r("div"),Gt=e(`
					`),Ee.c(),le=e(`
				`),xt=e(`
			`),fe=e(`
			`),nt=r("li"),wt=e(`
				`),Rt=r("div"),pe=e(`
					`),Et=r("div"),Pt=e(`
						Tipo de solo:
					`),Yt=e(`
				`),qt=e(`
				`),ut=r("div"),me=e(`
					`),se=e(ct),_t=e(`
				`),Jt=e(`
			`),ve=e(`
			`),Tt=r("li"),St=e(`
				`),jt=r("div"),Kt=e(`
					`),Xt=r("div"),ae=e(`
						Link público:
					`),ft=e(`
				`),K=e(`
				`),$=r("div"),ot=e(`
					`),Vt=r("div"),Be=e(`
						`),O=r("div"),lt=e(`
							`),Zt=r("div"),ht=e(`
								`),pt=r("input"),Ue=e(` 
							`),Ct=e(`
						  	`),Lt=r("button"),$t=e(`
								`),Ot=de("svg"),kt=de("path"),te=e(`								  
								Copiar
						  	`),ee=e(`
						`),he=e(`
					`),Dt=e(`
				`),ze=e(`
			`),ne=e(`
		`),Ln=e(`
	`),He=e(`

	`),Bt=r("li"),An=e(`
		`),ge=r("div"),vs=e(`
			`),be=r("div"),hs=e(`
				`),Fe=r("div"),gs=e(`
					`),Nn=r("h3"),bs=e("Dispositivos"),_s=e(`
				`),ys=e(`
				`),Ht&&Ht.c(),cl=e(`
			`),xs=e(`
		`),ws=e(`
		`),Wt=r("ul"),Es=e(`
			`),re=r("li"),ks=e(`
				`),Ge=r("div"),Ds=e(`
					`),Mn=r("p"),Is=e(" Descrição "),Ts=e(`
				`),Ss=e(`
				`),Ye=r("div"),Vs=e(`
					`),Pn=r("p"),Ls=e(" Última Leitura "),As=e(`
				`),Ns=e(`
				`),qe=r("div"),Ms=e(`
					`),Cn=r("p"),Ps=e(" Mac Address "),Cs=e(`
				`),Os=e(`
			`),Bs=e(`

			`),Us=gt(" START FOR HERE"),zs=e(`
			`);for(let h=0;h<Ut.length;h+=1)Ut[h].c();fl=e(`
			`),Rs=gt("END FOR HERE"),js=e(`
		`),Hs=e(`
	`),Fs=e(`
`),pl=e(`
`),ml=gt("* END SUMMARY + DEVICES "),vl=e(`

`),hl=gt("* MEASUREMENTS"),gl=e(`
`),_e=r("ul"),Gs=e(`
	`),De=r("li"),Ys=e(`
		`),Je=r("div"),qs=e(`
			`),Ie=r("div"),Js=e(`
				`),Ke=r("div"),Ks=e(`
					`),On=r("h3"),Ws=e("Temperatura"),Zs=e(`
				`),Qs=e(`
				`),Te=r("div"),Xs=e(`
					`),We=r("div"),$s=e(`				
						`),Ze=r("button"),ta=e("Comparar com ano anterior"),ea=e(`
					`),na=e(`
					`),Qe=r("div"),la=e(`				
						`),hn=r("button"),sa=e("Abrir"),aa=e(`
					`),ra=e(`
				`),ia=e(`

			`),oa=e(`
		`),da=e(`
		`),ss(Re.$$.fragment),ua=e(`
	`),ca=e(`
	`),Se=r("li"),fa=e(`
		`),Xe=r("div"),pa=e(`
			`),Ve=r("div"),ma=e(`
				`),$e=r("div"),va=e(`
					`),Bn=r("h3"),ha=e("Potencial hídrico"),ga=e(`
				`),ba=e(`
				`),Le=r("div"),_a=e(`
					`),ya=gt(`<input
						type="text"
						bind:this="{flatContainer}"
						id="flatPickrTemp"
						class="h-10 w-60 text-sm text-gray-500"
					/>`),xa=e(`
					`),ie=r("div"),wa=e(`
					`),je=r("button"),Ea=e(`
						`),ye=de("svg"),gn=de("path"),ka=e(`
					`),Da=e(`
					`),mt=r("div"),Ia=e(`
						`),Ae=r("a"),Ta=e("Editar thresholds"),Sa=e(`

						`),xe=r("div"),Va=e(`

						`),Un=r("a"),bn=r("button"),La=e("Descarregar CSV"),Aa=e(`
						
						`),Na=e(`           
					`),Ma=e(`
						`),tn=r("div"),Pa=e(`				
							`),_n=r("button"),Ca=e("Abrir"),Oa=e(`
						`),Ba=e(`
					`),Ua=e(`
				`),za=e(`
			`),Ra=e(`
		`),ja=e(`
		`),ss(en.$$.fragment),Ha=e(`
	`),Fa=e(`
`),_l=e(`
`),yl=gt("* END MEASUREMENTS "),xl=e(`

`),wl=gt("* BATTERY + MAP "),El=e(`
`),we=r("ul"),Ga=e(`
	`),Ne=r("li"),Ya=e(`
		`),nn=r("div"),qa=e(`
			`),Me=r("div"),Ja=e(`
				`),ln=r("div"),Ka=e(`
					`),zn=r("h3"),Wa=e("Bateria"),Za=e(`
				`),Qa=e(`
				`),sn=r("div"),Xa=e(`
					`),an=r("div"),$a=e(`				
						`),yn=r("button"),tr=e("Abrir"),er=e(`
					`),nr=e(`
				`),lr=e(`
			`),sr=e(`
		`),ar=e(`
		`),ss(rn.$$.fragment),rr=e(`
	`),ir=e(`

	`),Pe=r("li"),or=e(`
		`),on=r("div"),dr=e(`
			`),Ce=r("div"),ur=e(`
				`),dn=r("div"),cr=e(`
					`),Rn=r("h3"),fr=e("Mapa"),pr=e(`
				`),mr=e(`
				`),un=r("div"),vr=e(`
					`),cn=r("button"),hr=e(`
						Abrir mapa`),gr=e(`
				`),br=e(`
			`),_r=e(`
		`),yr=e(`
		`),ss(xn.$$.fragment),xr=e(`
	`),wr=e(`
`),kl=e(`
`),Dl=gt("* END BATTERY + MAP "),this.h()},l(h){c=n(h,`





`),u=bt(h,"* SUMMARY + DEVICES "),f=n(h,`
`),d=i(h,"UL",{class:!0});var R=o(d);p=n(R,`
	`),m=i(R,"LI",{class:!0});var Qt=o(m);b=n(Qt,`
		`),v=i(Qt,"DIV",{class:!0});var wn=o(v);w=n(wn,`
			`),g=i(wn,"DIV",{class:!0});var ke=o(g);S=n(ke,`
				`),_=i(ke,"DIV",{class:!0});var zt=o(_);k=n(zt,`
					`),D=i(zt,"H3",{class:!0});var dl=o(D);y=n(dl,"Sumário"),dl.forEach(s),E=n(zt,`
				`),zt.forEach(s),A=n(ke,`
				`),x=i(ke,"DIV",{class:!0});var Tl=o(x);G=n(Tl,`
					`),V=n(Tl,U),j=n(Tl,`
				`),Tl.forEach(s),I=n(ke,`
				`),F=bt(ke,`<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create new job</button>
				</div>`),Q=n(ke,`
			`),ke.forEach(s),B=n(wn,`
		`),wn.forEach(s),q=n(Qt,`
		`),N=i(Qt,"UL",{});var At=o(N);H=n(At,`
			`),Y=bt(At,` <li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6 font-semibold">Status: Off</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">`),tt=n(At,`
			`),z=bt(At,' Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" '),et=n(At,`
			`),T=bt(At,`<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
						<span class="sr-only">Use setting</span>`),W=n(At,`
			`),M=bt(At,' Enabled: "translate-x-5", Not Enabled: "translate-x-0" '),Z=n(At,`
			`),C=bt(At,`<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
					</button>
				</div>
			 </li> `),st=n(At,`
			`),J=i(At,"LI",{class:!0});var Fn=o(J);dt=n(Fn,`
				`),X=i(Fn,"DIV",{class:!0});var Sl=o(X);at=n(Sl,`
					`),yt=i(Sl,"DIV",{class:!0});var Mr=o(yt);Ft=n(Mr,`
						Diagnóstico:
					`),Mr.forEach(s),ce=n(Sl,`
				`),Sl.forEach(s),Mt=n(Fn,`
				`),rt=i(Fn,"DIV",{class:!0});var Vl=o(rt);Gt=n(Vl,`
					`),Ee.l(Vl),le=n(Vl,`
				`),Vl.forEach(s),xt=n(Fn,`
			`),Fn.forEach(s),fe=n(At,`
			`),nt=i(At,"LI",{class:!0});var Gn=o(nt);wt=n(Gn,`
				`),Rt=i(Gn,"DIV",{class:!0});var Ll=o(Rt);pe=n(Ll,`
					`),Et=i(Ll,"DIV",{class:!0});var Pr=o(Et);Pt=n(Pr,`
						Tipo de solo:
					`),Pr.forEach(s),Yt=n(Ll,`
				`),Ll.forEach(s),qt=n(Gn,`
				`),ut=i(Gn,"DIV",{class:!0});var Al=o(ut);me=n(Al,`
					`),se=n(Al,ct),_t=n(Al,`
				`),Al.forEach(s),Jt=n(Gn,`
			`),Gn.forEach(s),ve=n(At,`
			`),Tt=i(At,"LI",{class:!0});var Yn=o(Tt);St=n(Yn,`
				`),jt=i(Yn,"DIV",{class:!0});var Nl=o(jt);Kt=n(Nl,`
					`),Xt=i(Nl,"DIV",{class:!0});var Cr=o(Xt);ae=n(Cr,`
						Link público:
					`),Cr.forEach(s),ft=n(Nl,`
				`),Nl.forEach(s),K=n(Yn,`
				`),$=i(Yn,"DIV",{class:!0});var Ml=o($);ot=n(Ml,`
					`),Vt=i(Ml,"DIV",{});var Pl=o(Vt);Be=n(Pl,`
						`),O=i(Pl,"DIV",{class:!0});var qn=o(O);lt=n(qn,`
							`),Zt=i(qn,"DIV",{class:!0});var Cl=o(Zt);ht=n(Cl,`
								`),pt=i(Cl,"INPUT",{id:!0,type:!0,class:!0}),Ue=n(Cl,` 
							`),Cl.forEach(s),Ct=n(qn,`
						  	`),Lt=i(qn,"BUTTON",{type:!0,"data-clipboard-target":!0,class:!0});var Ol=o(Lt);$t=n(Ol,`
								`),Ot=ue(Ol,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Or=o(Ot);kt=ue(Or,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),o(kt).forEach(s),Or.forEach(s),te=n(Ol,`								  
								Copiar
						  	`),Ol.forEach(s),ee=n(qn,`
						`),qn.forEach(s),he=n(Pl,`
					`),Pl.forEach(s),Dt=n(Ml,`
				`),Ml.forEach(s),ze=n(Yn,`
			`),Yn.forEach(s),ne=n(At,`
		`),At.forEach(s),Ln=n(Qt,`
	`),Qt.forEach(s),He=n(R,`

	`),Bt=i(R,"LI",{class:!0});var Jn=o(Bt);An=n(Jn,`
		`),ge=i(Jn,"DIV",{class:!0});var Bl=o(ge);vs=n(Bl,`
			`),be=i(Bl,"DIV",{class:!0});var Kn=o(be);hs=n(Kn,`
				`),Fe=i(Kn,"DIV",{class:!0});var Ul=o(Fe);gs=n(Ul,`
					`),Nn=i(Ul,"H3",{class:!0});var Br=o(Nn);bs=n(Br,"Dispositivos"),Br.forEach(s),_s=n(Ul,`
				`),Ul.forEach(s),ys=n(Kn,`
				`),Ht&&Ht.l(Kn),cl=n(Kn,`
			`),Kn.forEach(s),xs=n(Bl,`
		`),Bl.forEach(s),ws=n(Jn,`
		`),Wt=i(Jn,"UL",{class:!0});var Oe=o(Wt);Es=n(Oe,`
			`),re=i(Oe,"LI",{class:!0});var fn=o(re);ks=n(fn,`
				`),Ge=i(fn,"DIV",{class:!0});var zl=o(Ge);Ds=n(zl,`
					`),Mn=i(zl,"P",{class:!0});var Ur=o(Mn);Is=n(Ur," Descrição "),Ur.forEach(s),Ts=n(zl,`
				`),zl.forEach(s),Ss=n(fn,`
				`),Ye=i(fn,"DIV",{class:!0});var Rl=o(Ye);Vs=n(Rl,`
					`),Pn=i(Rl,"P",{class:!0});var zr=o(Pn);Ls=n(zr," Última Leitura "),zr.forEach(s),As=n(Rl,`
				`),Rl.forEach(s),Ns=n(fn,`
				`),qe=i(fn,"DIV",{class:!0});var jl=o(qe);Ms=n(jl,`
					`),Cn=i(jl,"P",{class:!0});var Rr=o(Cn);Ps=n(Rr," Mac Address "),Rr.forEach(s),Cs=n(jl,`
				`),jl.forEach(s),Os=n(fn,`
			`),fn.forEach(s),Bs=n(Oe,`

			`),Us=bt(Oe," START FOR HERE"),zs=n(Oe,`
			`);for(let kr=0;kr<Ut.length;kr+=1)Ut[kr].l(Oe);fl=n(Oe,`
			`),Rs=bt(Oe,"END FOR HERE"),js=n(Oe,`
		`),Oe.forEach(s),Hs=n(Jn,`
	`),Jn.forEach(s),Fs=n(R,`
`),R.forEach(s),pl=n(h,`
`),ml=bt(h,"* END SUMMARY + DEVICES "),vl=n(h,`

`),hl=bt(h,"* MEASUREMENTS"),gl=n(h,`
`),_e=i(h,"UL",{class:!0});var Wn=o(_e);Gs=n(Wn,`
	`),De=i(Wn,"LI",{class:!0});var Zn=o(De);Ys=n(Zn,`
		`),Je=i(Zn,"DIV",{class:!0});var Hl=o(Je);qs=n(Hl,`
			`),Ie=i(Hl,"DIV",{class:!0});var Qn=o(Ie);Js=n(Qn,`
				`),Ke=i(Qn,"DIV",{class:!0});var Fl=o(Ke);Ks=n(Fl,`
					`),On=i(Fl,"H3",{class:!0});var jr=o(On);Ws=n(jr,"Temperatura"),jr.forEach(s),Zs=n(Fl,`
				`),Fl.forEach(s),Qs=n(Qn,`
				`),Te=i(Qn,"DIV",{class:!0});var Xn=o(Te);Xs=n(Xn,`
					`),We=i(Xn,"DIV",{class:!0});var Gl=o(We);$s=n(Gl,`				
						`),Ze=i(Gl,"BUTTON",{title:!0,class:!0});var Hr=o(Ze);ta=n(Hr,"Comparar com ano anterior"),Hr.forEach(s),ea=n(Gl,`
					`),Gl.forEach(s),na=n(Xn,`
					`),Qe=i(Xn,"DIV",{class:!0});var Yl=o(Qe);la=n(Yl,`				
						`),hn=i(Yl,"BUTTON",{class:!0});var Fr=o(hn);sa=n(Fr,"Abrir"),Fr.forEach(s),aa=n(Yl,`
					`),Yl.forEach(s),ra=n(Xn,`
				`),Xn.forEach(s),ia=n(Qn,`

			`),Qn.forEach(s),oa=n(Hl,`
		`),Hl.forEach(s),da=n(Zn,`
		`),as(Re.$$.fragment,Zn),ua=n(Zn,`
	`),Zn.forEach(s),ca=n(Wn,`
	`),Se=i(Wn,"LI",{class:!0});var $n=o(Se);fa=n($n,`
		`),Xe=i($n,"DIV",{class:!0});var ql=o(Xe);pa=n(ql,`
			`),Ve=i(ql,"DIV",{class:!0});var tl=o(Ve);ma=n(tl,`
				`),$e=i(tl,"DIV",{class:!0});var Jl=o($e);va=n(Jl,`
					`),Bn=i(Jl,"H3",{class:!0});var Gr=o(Bn);ha=n(Gr,"Potencial hídrico"),Gr.forEach(s),ga=n(Jl,`
				`),Jl.forEach(s),ba=n(tl,`
				`),Le=i(tl,"DIV",{class:!0});var el=o(Le);_a=n(el,`
					`),ya=bt(el,`<input
						type="text"
						bind:this="{flatContainer}"
						id="flatPickrTemp"
						class="h-10 w-60 text-sm text-gray-500"
					/>`),xa=n(el,`
					`),ie=i(el,"DIV",{class:!0});var pn=o(ie);wa=n(pn,`
					`),je=i(pn,"BUTTON",{class:!0});var Kl=o(je);Ea=n(Kl,`
						`),ye=ue(Kl,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Yr=o(ye);gn=ue(Yr,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),o(gn).forEach(s),Yr.forEach(s),ka=n(Kl,`
					`),Kl.forEach(s),Da=n(pn,`
					`),mt=i(pn,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0,tabindex:!0,style:!0,"data-transition-enter":!0,"data-transition-enter-start":!0,"data-transition-enter-end":!0,"data-transition-leave":!0,"data-transition-leave-start":!0,"data-transition-leave-end":!0});var nl=o(mt);Ia=n(nl,`
						`),Ae=i(nl,"A",{class:!0,role:!0,tabindex:!0,id:!0});var qr=o(Ae);Ta=n(qr,"Editar thresholds"),qr.forEach(s),Sa=n(nl,`

						`),xe=i(nl,"DIV",{class:!0,role:!0,tabindex:!0,id:!0});var Wl=o(xe);Va=n(Wl,`

						`),Un=i(Wl,"A",{href:!0});var Jr=o(Un);bn=i(Jr,"BUTTON",{type:!0,class:!0});var Kr=o(bn);La=n(Kr,"Descarregar CSV"),Kr.forEach(s),Jr.forEach(s),Aa=n(Wl,`
						
						`),Wl.forEach(s),Na=n(nl,`           
					`),nl.forEach(s),Ma=n(pn,`
						`),tn=i(pn,"DIV",{class:!0});var Zl=o(tn);Pa=n(Zl,`				
							`),_n=i(Zl,"BUTTON",{class:!0});var Wr=o(_n);Ca=n(Wr,"Abrir"),Wr.forEach(s),Oa=n(Zl,`
						`),Zl.forEach(s),Ba=n(pn,`
					`),pn.forEach(s),Ua=n(el,`
				`),el.forEach(s),za=n(tl,`
			`),tl.forEach(s),Ra=n(ql,`
		`),ql.forEach(s),ja=n($n,`
		`),as(en.$$.fragment,$n),Ha=n($n,`
	`),$n.forEach(s),Fa=n(Wn,`
`),Wn.forEach(s),_l=n(h,`
`),yl=bt(h,"* END MEASUREMENTS "),xl=n(h,`

`),wl=bt(h,"* BATTERY + MAP "),El=n(h,`
`),we=i(h,"UL",{class:!0});var ll=o(we);Ga=n(ll,`
	`),Ne=i(ll,"LI",{class:!0});var sl=o(Ne);Ya=n(sl,`
		`),nn=i(sl,"DIV",{class:!0});var Ql=o(nn);qa=n(Ql,`
			`),Me=i(Ql,"DIV",{class:!0});var al=o(Me);Ja=n(al,`
				`),ln=i(al,"DIV",{class:!0});var Xl=o(ln);Ka=n(Xl,`
					`),zn=i(Xl,"H3",{class:!0});var Zr=o(zn);Wa=n(Zr,"Bateria"),Zr.forEach(s),Za=n(Xl,`
				`),Xl.forEach(s),Qa=n(al,`
				`),sn=i(al,"DIV",{class:!0});var $l=o(sn);Xa=n($l,`
					`),an=i($l,"DIV",{class:!0});var ts=o(an);$a=n(ts,`				
						`),yn=i(ts,"BUTTON",{class:!0});var Qr=o(yn);tr=n(Qr,"Abrir"),Qr.forEach(s),er=n(ts,`
					`),ts.forEach(s),nr=n($l,`
				`),$l.forEach(s),lr=n(al,`
			`),al.forEach(s),sr=n(Ql,`
		`),Ql.forEach(s),ar=n(sl,`
		`),as(rn.$$.fragment,sl),rr=n(sl,`
	`),sl.forEach(s),ir=n(ll,`

	`),Pe=i(ll,"LI",{class:!0});var rl=o(Pe);or=n(rl,`
		`),on=i(rl,"DIV",{class:!0});var es=o(on);dr=n(es,`
			`),Ce=i(es,"DIV",{class:!0});var il=o(Ce);ur=n(il,`
				`),dn=i(il,"DIV",{class:!0});var ns=o(dn);cr=n(ns,`
					`),Rn=i(ns,"H3",{class:!0});var Xr=o(Rn);fr=n(Xr,"Mapa"),Xr.forEach(s),pr=n(ns,`
				`),ns.forEach(s),mr=n(il,`
				`),un=i(il,"DIV",{class:!0});var ls=o(un);vr=n(ls,`
					`),cn=i(ls,"BUTTON",{type:!0,class:!0});var $r=o(cn);hr=n($r,`
						Abrir mapa`),$r.forEach(s),gr=n(ls,`
				`),ls.forEach(s),br=n(il,`
			`),il.forEach(s),_r=n(es,`
		`),es.forEach(s),yr=n(rl,`
		`),as(xn.$$.fragment,rl),xr=n(rl,`
	`),rl.forEach(s),wr=n(ll,`
`),ll.forEach(s),kl=n(h,`
`),Dl=bt(h,"* END BATTERY + MAP "),this.h()},h(){l(D,"class","text-base font-semibold leading-6"),l(_,"class","ml-4 mt-2"),l(x,"class","ml-4 mt-2 flex-shrink-0"),l(g,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),l(v,"class","border-b border-gray-200 bg-white px-4 py-5 sm:px-6"),l(yt,"class","min-w-0 flex-auto"),l(X,"class","flex gap-x-4"),l(rt,"class","sm:flex sm:flex-col sm:items-end relative"),l(J,"class","flex justify-between gap-x-6 p-5"),l(Et,"class","min-w-0 flex-auto"),l(Rt,"class","flex gap-x-4"),l(ut,"class","sm:flex sm:flex-col sm:items-end"),l(nt,"class","flex justify-between gap-x-6 p-5"),l(Xt,"class","min-w-0 flex-auto"),l(jt,"class","flex gap-x-4"),l(pt,"id","publicUrl"),pt.value=a[9],l(pt,"type","text"),pt.readOnly=!0,l(pt,"class","w-full"),l(Zt,"class","relative flex flex-grow items-stretch focus-within:z-10"),l(kt,"stroke-linecap","round"),l(kt,"stroke-linejoin","round"),l(kt,"d","M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"),l(Ot,"xmlns","http://www.w3.org/2000/svg"),l(Ot,"fill","none"),l(Ot,"viewBox","0 0 24 24"),l(Ot,"stroke-width","1.5"),l(Ot,"stroke","currentColor"),l(Ot,"class","w-6 h-6"),l(Lt,"type","button"),l(Lt,"data-clipboard-target","#publicUrl"),l(Lt,"class","btn relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"),l(O,"class","mt-2 flex rounded-md shadow-sm"),l($,"class","sm:flex sm:flex-col sm:items-end"),l(Tt,"class","flex justify-between gap-x-6 p-5"),l(m,"class","col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center text-stone-500 shadow"),l(Nn,"class","text-base font-semibold leading-6"),l(Fe,"class","ml-4 mt-2"),l(be,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),l(ge,"class","border-b border-gray-200 px-4 py-5 sm:px-6"),l(Mn,"class","text-sm font-semibold leading-6"),l(Ge,"class","min-w-0 flex-auto"),l(Pn,"class","text-sm font-semibold leading-6"),l(Ye,"class","min-w-0 flex-auto"),l(Cn,"class","text-sm font-semibold leading-6"),l(qe,"class","min-w-0 flex-auto md:block hidden"),l(re,"class","grid grid-cols-3 gap-4 p-4 text-start"),l(Wt,"class","divide-y divide-dotted divide-gray-100"),l(Bt,"class","col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"),l(d,"class","grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 lg:grid-cols-2"),l(On,"class","text-base font-semibold leading-6"),l(Ke,"class","ml-4 mt-2"),l(Ze,"title","Compara com o mesmo período do ano passado"),l(Ze,"class","rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),l(We,"class","ml-4 mt-2 flex-shrink-0"),l(hn,"class","rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),l(Qe,"class","ml-2 mt-2 flex-shrink-0"),l(Te,"class","flex"),l(Ie,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),l(Je,"class","rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6"),l(De,"class","col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow"),l(Bn,"class","text-base font-semibold leading-6"),l($e,"class","ml-4 mt-2"),l(gn,"stroke-linecap","round"),l(gn,"stroke-linejoin","round"),l(gn,"d","M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"),l(ye,"xmlns","http://www.w3.org/2000/svg"),l(ye,"fill","none"),l(ye,"viewBox","0 0 24 24"),l(ye,"stroke-width","1.5"),l(ye,"stroke","currentColor"),l(ye,"class","h-6 w-6"),l(je,"class","text-sm leading-6"),l(Ae,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),l(Ae,"role","menuitem"),l(Ae,"tabindex","-1"),l(Ae,"id","user-menu-item-0"),l(bn,"type","submit"),l(bn,"class",""),l(Un,"href",""),l(xe,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),l(xe,"role","menuitem"),l(xe,"tabindex","-1"),l(xe,"id","user-menu-item-1"),l(mt,"class","absolute right-0 top-7 z-10 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"),l(mt,"role","menu"),l(mt,"aria-orientation","vertical"),l(mt,"aria-labelledby","user-menu-button"),l(mt,"tabindex","-1"),ii(mt,"display","none"),l(mt,"data-transition-enter",""),l(mt,"data-transition-enter-start",""),l(mt,"data-transition-enter-end",""),l(mt,"data-transition-leave",""),l(mt,"data-transition-leave-start",""),l(mt,"data-transition-leave-end",""),l(_n,"class","rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),l(tn,"class","ml-2 flex-shrink-0"),l(ie,"class","flex"),l(Le,"class","relative ml-4 mt-2 flex-shrink-0"),l(Ve,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),l(Xe,"class","rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6"),l(Se,"class","col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow"),l(_e,"class","grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 lg:grid-cols-2"),l(zn,"class","text-base font-semibold leading-6"),l(ln,"class","ml-4 mt-2"),l(yn,"class","rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),l(an,"class","ml-2 mt-2 flex-shrink-0"),l(sn,"class","flex"),l(Me,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),l(nn,"class","rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6"),l(Ne,"class","col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow"),l(Rn,"class","text-base font-semibold leading-6"),l(dn,"class","ml-4 mt-2"),l(cn,"type","button"),l(cn,"class","rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),l(un,"class","ml-4 mt-2 flex-shrink-0"),l(Ce,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),l(on,"class","border-b border-gray-200 px-4 py-5 sm:px-6"),l(Pe,"class","col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"),l(we,"class","grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 lg:grid-cols-2")},m(h,R){P(h,c,R),P(h,u,R),P(h,f,R),P(h,d,R),t(d,p),t(d,m),t(m,b),t(m,v),t(v,w),t(v,g),t(g,S),t(g,_),t(_,k),t(_,D),t(D,y),t(_,E),t(g,A),t(g,x),t(x,G),t(x,V),t(x,j),t(g,I),t(g,F),t(g,Q),t(v,B),t(m,q),t(m,N),t(N,H),t(N,Y),t(N,tt),t(N,z),t(N,et),t(N,T),t(N,W),t(N,M),t(N,Z),t(N,C),t(N,st),t(N,J),t(J,dt),t(J,X),t(X,at),t(X,yt),t(yt,Ft),t(X,ce),t(J,Mt),t(J,rt),t(rt,Gt),Ee.m(rt,null),t(rt,le),t(J,xt),t(N,fe),t(N,nt),t(nt,wt),t(nt,Rt),t(Rt,pe),t(Rt,Et),t(Et,Pt),t(Rt,Yt),t(nt,qt),t(nt,ut),t(ut,me),t(ut,se),t(ut,_t),t(nt,Jt),t(N,ve),t(N,Tt),t(Tt,St),t(Tt,jt),t(jt,Kt),t(jt,Xt),t(Xt,ae),t(jt,ft),t(Tt,K),t(Tt,$),t($,ot),t($,Vt),t(Vt,Be),t(Vt,O),t(O,lt),t(O,Zt),t(Zt,ht),t(Zt,pt),t(Zt,Ue),t(O,Ct),t(O,Lt),t(Lt,$t),t(Lt,Ot),t(Ot,kt),t(Lt,te),t(O,ee),t(Vt,he),t($,Dt),t(Tt,ze),t(N,ne),t(m,Ln),t(d,He),t(d,Bt),t(Bt,An),t(Bt,ge),t(ge,vs),t(ge,be),t(be,hs),t(be,Fe),t(Fe,gs),t(Fe,Nn),t(Nn,bs),t(Fe,_s),t(be,ys),Ht&&Ht.m(be,null),t(be,cl),t(ge,xs),t(Bt,ws),t(Bt,Wt),t(Wt,Es),t(Wt,re),t(re,ks),t(re,Ge),t(Ge,Ds),t(Ge,Mn),t(Mn,Is),t(Ge,Ts),t(re,Ss),t(re,Ye),t(Ye,Vs),t(Ye,Pn),t(Pn,Ls),t(Ye,As),t(re,Ns),t(re,qe),t(qe,Ms),t(qe,Cn),t(Cn,Ps),t(qe,Cs),t(re,Os),t(Wt,Bs),t(Wt,Us),t(Wt,zs);for(let Qt=0;Qt<Ut.length;Qt+=1)Ut[Qt]&&Ut[Qt].m(Wt,null);t(Wt,fl),t(Wt,Rs),t(Wt,js),t(Bt,Hs),t(d,Fs),P(h,pl,R),P(h,ml,R),P(h,vl,R),P(h,hl,R),P(h,gl,R),P(h,_e,R),t(_e,Gs),t(_e,De),t(De,Ys),t(De,Je),t(Je,qs),t(Je,Ie),t(Ie,Js),t(Ie,Ke),t(Ke,Ks),t(Ke,On),t(On,Ws),t(Ke,Zs),t(Ie,Qs),t(Ie,Te),t(Te,Xs),t(Te,We),t(We,$s),t(We,Ze),t(Ze,ta),t(We,ea),t(Te,na),t(Te,Qe),t(Qe,la),t(Qe,hn),t(hn,sa),t(Qe,aa),t(Te,ra),t(Ie,ia),t(Je,oa),t(De,da),rs(Re,De,null),t(De,ua),t(_e,ca),t(_e,Se),t(Se,fa),t(Se,Xe),t(Xe,pa),t(Xe,Ve),t(Ve,ma),t(Ve,$e),t($e,va),t($e,Bn),t(Bn,ha),t($e,ga),t(Ve,ba),t(Ve,Le),t(Le,_a),t(Le,ya),t(Le,xa),t(Le,ie),t(ie,wa),t(ie,je),t(je,Ea),t(je,ye),t(ye,gn),t(je,ka),t(ie,Da),t(ie,mt),t(mt,Ia),t(mt,Ae),t(Ae,Ta),t(mt,Sa),t(mt,xe),t(xe,Va),t(xe,Un),t(Un,bn),t(bn,La),t(xe,Aa),t(mt,Na),t(ie,Ma),t(ie,tn),t(tn,Pa),t(tn,_n),t(_n,Ca),t(tn,Oa),t(ie,Ba),t(Le,Ua),t(Ve,za),t(Xe,Ra),t(Se,ja),rs(en,Se,null),t(Se,Ha),t(_e,Fa),P(h,_l,R),P(h,yl,R),P(h,xl,R),P(h,wl,R),P(h,El,R),P(h,we,R),t(we,Ga),t(we,Ne),t(Ne,Ya),t(Ne,nn),t(nn,qa),t(nn,Me),t(Me,Ja),t(Me,ln),t(ln,Ka),t(ln,zn),t(zn,Wa),t(ln,Za),t(Me,Qa),t(Me,sn),t(sn,Xa),t(sn,an),t(an,$a),t(an,yn),t(yn,tr),t(an,er),t(sn,nr),t(Me,lr),t(nn,sr),t(Ne,ar),rs(rn,Ne,null),t(Ne,rr),t(we,ir),t(we,Pe),t(Pe,or),t(Pe,on),t(on,dr),t(on,Ce),t(Ce,ur),t(Ce,dn),t(dn,cr),t(dn,Rn),t(Rn,fr),t(dn,pr),t(Ce,mr),t(Ce,un),t(un,vr),t(un,cn),t(cn,hr),t(un,gr),t(Ce,br),t(on,_r),t(Pe,yr),rs(xn,Pe,null),t(Pe,xr),t(we,wr),P(h,kl,R),P(h,Dl,R),jn=!0,Er||(Ar=[it(Ze,"click",a[12]),it(hn,"click",a[20]),it(je,"click",a[22]),it(Ae,"click",a[23]),Ir(bl=ui.call(null,mt,{show:a[4]})),it(_n,"click",a[24]),it(yn,"click",a[25]),it(cn,"click",a[26])],Er=!0)},p(h,R){if((!jn||R[0]&1)&&U!==(U=h[0].installation.name+"")&&ul(V,U),Il===(Il=Nr(h,R))&&Ee?Ee.p(h,R):(Ee.d(1),Ee=Il(h),Ee&&(Ee.c(),Ee.m(rt,le))),(!jn||R[0]&1)&&ct!==(ct=h[0].installation.soilTypeCode+"")&&ul(se,ct),h[5]?Ht?Ht.p(h,R):(Ht=si(h),Ht.c(),Ht.m(be,cl)):Ht&&(Ht.d(1),Ht=null),R[0]&417){Hn=h[0].listDevices;let zt;for(zt=0;zt<Hn.length;zt+=1){const dl=li(h,Hn,zt);Ut[zt]?Ut[zt].p(dl,R):(Ut[zt]=ri(dl),Ut[zt].c(),Ut[zt].m(Wt,fl))}for(;zt<Ut.length;zt+=1)Ut[zt].d(1);Ut.length=Hn.length}const Qt={};R[0]&1&&(Qt.props=h[0].listDevices),Re.$set(Qt),bl&&oi(bl.update)&&R[0]&16&&bl.update.call(null,{show:h[4]});const wn={};R[0]&1&&(wn.props=h[0].listDevices),en.$set(wn);const ke={};R[0]&1&&(ke.props=h[0].listDevices),rn.$set(ke)},i(h){jn||(is(Re.$$.fragment,h),is(en.$$.fragment,h),is(rn.$$.fragment,h),is(xn.$$.fragment,h),jn=!0)},o(h){os(Re.$$.fragment,h),os(en.$$.fragment,h),os(rn.$$.fragment,h),os(xn.$$.fragment,h),jn=!1},d(h){h&&s(c),h&&s(u),h&&s(f),h&&s(d),Ee.d(),Ht&&Ht.d(),bi(Ut,h),h&&s(pl),h&&s(ml),h&&s(vl),h&&s(hl),h&&s(gl),h&&s(_e),a[21](null),ds(Re),ds(en),h&&s(_l),h&&s(yl),h&&s(xl),h&&s(wl),h&&s(El),h&&s(we),ds(rn),ds(xn),h&&s(kl),h&&s(Dl),Er=!1,ps(Ar)}}}let kn=yi({});function Xi(a,c,u){let f,d=It,p;In(a,kn,T=>u(7,f=T)),In(a,Sr,T=>u(28,p=T)),a.$$.on_destroy.push(()=>d());let{data:m}=c,b=p.url.pathname,v,w,g,S=!1,_=!1,k=!1,D=p.url.pathname.split("/");D.includes("public")||(k=!0);let y=p.url.origin+"/public/"+D[3],E={coordinates:{lat:m.installation.location.lat,lon:m.installation.location.lon},size:"full"},A={coordinates:{lat:m.installation.location.lat,lon:m.installation.location.lon},size:"md"},x={};ei(kn,f={},f),m.listDevices.forEach(T=>{ei(kn,f[T.id]=!0,f)}),ol(async()=>{new Di(".btn"),u(6,x=await ki(m.installation)),_i.set(m.installation.name)});function G(){v.compareGraph()}m.installation.graph=!0;function U(){S==!1?w.title&&(u(3,g.innerHTML=w.title,g),g.classList.remove("hidden"),S=!0):(g.classList.add("hidden"),S=!1)}function V(T){Dn[T?"unshift":"push"](()=>{w=T,u(2,w)})}function j(T){Dn[T?"unshift":"push"](()=>{g=T,u(3,g)})}const I=()=>En(ni);function F(T){f[T.id]=this.checked,kn.set(f)}const Q=(T,W,M)=>{u(0,W[M].dropdownNewDeviceIsOpen=!T.dropdownNewDeviceIsOpen,m)},B=T=>En(ni,T),q=()=>{En(fi,m.installation)};function N(T){Dn[T?"unshift":"push"](()=>{v=T,u(1,v)})}const H=()=>{u(4,_=!_)},Y=()=>{En(Ki,m.installation.soilTypeCode)},tt=()=>{En(pi,m.installation)},z=()=>{En(mi,m.installation)},et=()=>{En(ci,E)};return a.$$set=T=>{"data"in T&&u(0,m=T.data)},[m,v,w,g,_,k,x,f,b,y,E,A,G,U,V,j,I,F,Q,B,q,N,H,Y,tt,z,et]}class po extends Tn{constructor(c){super(),Sn(this,c,Xi,Qi,Vn,{data:0},null,[-1,-1])}}export{po as I};
