import{S as bn,i as yn,s as Dn,a as o,m as h,d as l,n as v,p as b,k as u,q as d,f as it,I as Pt,o as Tn,x as $e,u as e,L as In,c as At,b as Nt,H as Mn,z as ra,A as oa,B as la,v as En,j as sa,g as ca,M as Pi,C as da,V as vi,Q as pa,R as ma}from"./index.640f31cf.js";import{w as _i}from"./singletons.50cae92a.js";import{_ as va}from"./preload-helper.41c905a7.js";/* empty css                */import{c as Oi,s as bi}from"./MyModal.21921a7f.js";import{p as Li}from"./stores.3dee118a.js";const Fi=!0,ii=Fi;function Yi(a){let r,t;return{c(){r=o(`

`),t=h("div"),this.h()},l(c){r=l(c,`

`),t=v(c,"DIV",{class:!0}),b(t).forEach(u),this.h()},h(){d(t,"class","relative transform overflow-hidden bg-white px-4 pb-1 pt-1 text-center shadow-xl transition-all")},m(c,p){it(c,r,p),it(c,t,p),a[2](t)},p:Pt,i:Pt,o:Pt,d(c){c&&u(r),c&&u(t),a[2](null)}}}function Hi(a,r,t){let{props:c}=r,p,f;Tn(async()=>{L=(await va(()=>import("./leaflet-src.20dcb89b.js").then(Y=>Y.l),["./leaflet-src.20dcb89b.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default,_(),g()});function g(){if(c.coordinates.lat&&c.coordinates.lon){var Y={center:[c.coordinates.lat,c.coordinates.lon],zoom:17,scrollWheelZoom:!0};p=L.map(f,Y),p.addLayer(L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")),L.marker([c.coordinates.lat,c.coordinates.lon]).addTo(p),p.invalidateSize()}else f.append("Location not available")}function _(){c.size=="full"?(f.classList.add("h-[80vh]"),f.classList.add("w-[80vw]")):c.size=="lg"?(f.classList.add("h-[70vh]"),f.classList.add("w-full")):c.size=="md"?(f.classList.add("h-[40vh]"),f.classList.add("w-full")):c.size=="sm"?(f.classList.add("h-[10vh]"),f.classList.add("w-full")):(f.classList.add("h-full"),f.classList.add("w-full"))}function y(Y){$e[Y?"unshift":"push"](()=>{f=Y,t(0,f)})}return a.$$set=Y=>{"props"in Y&&t(1,c=Y.props)},[f,c,y]}class Ci extends bn{constructor(r){super(),yn(this,r,Hi,Yi,Dn,{props:1})}}function ji(a){let r,t,c,p,f,g,_,y,Y,w,M,k,z,T,A,R,Z,x,U,F,S,P,W,B,j,q,X,G,K,tt,et,lt,st,$,Ht,at,ft,ot,vt,pt,_t,gt,ht,ct,Tt,Ce,Wt,se,Ot,Te,zt,Kt,ve,bt,ce,yt,Gt,qt,Lt,ne,xt,be,ye,Ie,De,jt,Jt,Zt,Qt,ke,Q,pe,Dt,Se,Rt,ae,dt,Ae,Xt,n,i,s,m,D,C,V,N;return{c(){r=o(`

`),t=h("div"),c=o(`
	`),p=h("h2"),f=o("New device"),g=o(`
`),_=o(`

`),y=h("form"),Y=o(`
	`),w=h("div"),M=o(`
		`),k=h("label"),z=o("Description (optional)"),T=o(`
		`),A=h("div"),R=o(`
			`),Z=h("input"),x=o(`
		`),U=o(`
	`),F=o(`

	`),S=h("div"),P=o(`
		`),W=h("label"),B=o("MAC address"),j=o(`
		`),q=h("div"),X=o(`
			`),G=h("input"),K=o(`
		`),tt=o(`
	`),et=o(`

	`),lt=h("div"),st=o(`
		`),$=h("label"),Ht=o("Battery mode"),at=o(`
		`),ft=h("div"),ot=o(`
			`),vt=h("select"),pt=h("option"),_t=o(" Normal "),gt=h("option"),ht=o(" Eco "),ct=h("option"),Tt=o(" Stand-by "),Ce=o(`
		`),Wt=o(`
	`),se=o(`

	`),Ot=h("div"),Te=o(`
		`),zt=h("label"),Kt=o("Device type"),ve=o(`
		`),bt=h("div"),ce=o(`
			`),yt=h("select"),Gt=h("option"),qt=o(" Sensors only "),Lt=h("option"),ne=o(" Switch only "),xt=h("option"),be=o(" Mixed "),ye=o(`
		`),Ie=o(`
	`),De=o(`

	`),jt=h("div"),Jt=o(`
		`),Zt=h("label"),Qt=o("Activation key"),ke=o(`
		`),Q=h("div"),pe=o(`
			`),Dt=h("input"),Se=o(`
		`),Rt=o(`
	`),ae=o(`

	`),dt=h("div"),Ae=o(`
		`),Xt=h("button"),n=o("Cancel"),i=o(`

		`),s=h("button"),m=o("Save"),D=o(`
	`),C=o(`
`),this.h()},l(O){r=l(O,`

`),t=v(O,"DIV",{class:!0});var I=b(t);c=l(I,`
	`),p=v(I,"H2",{class:!0});var H=b(p);f=l(H,"New device"),H.forEach(u),g=l(I,`
`),I.forEach(u),_=l(O,`

`),y=v(O,"FORM",{class:!0,method:!0,action:!0});var J=b(y);Y=l(J,`
	`),w=v(J,"DIV",{});var ut=b(w);M=l(ut,`
		`),k=v(ut,"LABEL",{for:!0,class:!0});var wt=b(k);z=l(wt,"Description (optional)"),wt.forEach(u),T=l(ut,`
		`),A=v(ut,"DIV",{class:!0});var $t=b(A);R=l($t,`
			`),Z=v($t,"INPUT",{id:!0,name:!0,type:!0,class:!0}),x=l($t,`
		`),$t.forEach(u),U=l(ut,`
	`),ut.forEach(u),F=l(J,`

	`),S=v(J,"DIV",{});var It=b(S);P=l(It,`
		`),W=v(It,"LABEL",{for:!0,class:!0});var Ne=b(W);B=l(Ne,"MAC address"),Ne.forEach(u),j=l(It,`
		`),q=v(It,"DIV",{class:!0});var de=b(q);X=l(de,`
			`),G=v(de,"INPUT",{id:!0,name:!0,type:!0,class:!0}),K=l(de,`
		`),de.forEach(u),tt=l(It,`
	`),It.forEach(u),et=l(J,`

	`),lt=v(J,"DIV",{class:!0});var fe=b(lt);st=l(fe,`
		`),$=v(fe,"LABEL",{for:!0,class:!0});var Et=b($);Ht=l(Et,"Battery mode"),Et.forEach(u),at=l(fe,`
		`),ft=v(fe,"DIV",{class:!0});var we=b(ft);ot=l(we,`
			`),vt=v(we,"SELECT",{name:!0,class:!0});var Mt=b(vt);pt=v(Mt,"OPTION",{});var Fe=b(pt);_t=l(Fe," Normal "),Fe.forEach(u),gt=v(Mt,"OPTION",{});var ie=b(gt);ht=l(ie," Eco "),ie.forEach(u),ct=v(Mt,"OPTION",{});var Ye=b(ct);Tt=l(Ye," Stand-by "),Ye.forEach(u),Mt.forEach(u),Ce=l(we,`
		`),we.forEach(u),Wt=l(fe,`
	`),fe.forEach(u),se=l(J,`

	`),Ot=v(J,"DIV",{class:!0});var Vt=b(Ot);Te=l(Vt,`
		`),zt=v(Vt,"LABEL",{for:!0,class:!0});var tn=b(zt);Kt=l(tn,"Device type"),tn.forEach(u),ve=l(Vt,`
		`),bt=v(Vt,"DIV",{class:!0});var He=b(bt);ce=l(He,`
			`),yt=v(He,"SELECT",{name:!0,class:!0});var je=b(yt);Gt=v(je,"OPTION",{});var me=b(Gt);qt=l(me," Sensors only "),me.forEach(u),Lt=v(je,"OPTION",{});var en=b(Lt);ne=l(en," Switch only "),en.forEach(u),xt=v(je,"OPTION",{});var Pe=b(xt);be=l(Pe," Mixed "),Pe.forEach(u),je.forEach(u),ye=l(He,`
		`),He.forEach(u),Ie=l(Vt,`
	`),Vt.forEach(u),De=l(J,`

	`),jt=v(J,"DIV",{});var Ee=b(jt);Jt=l(Ee,`
		`),Zt=v(Ee,"LABEL",{for:!0,class:!0});var nn=b(Zt);Qt=l(nn,"Activation key"),nn.forEach(u),ke=l(Ee,`
		`),Q=v(Ee,"DIV",{class:!0});var Re=b(Q);pe=l(Re,`
			`),Dt=v(Re,"INPUT",{id:!0,name:!0,type:!0,class:!0}),Se=l(Re,`
		`),Re.forEach(u),Rt=l(Ee,`
	`),Ee.forEach(u),ae=l(J,`

	`),dt=v(J,"DIV",{class:!0});var Ut=b(dt);Ae=l(Ut,`
		`),Xt=v(Ut,"BUTTON",{type:!0,class:!0});var an=b(Xt);n=l(an,"Cancel"),an.forEach(u),i=l(Ut,`

		`),s=v(Ut,"BUTTON",{type:!0,class:!0});var Oe=b(s);m=l(Oe,"Save"),Oe.forEach(u),D=l(Ut,`
	`),Ut.forEach(u),C=l(J,`
`),J.forEach(u),this.h()},h(){d(p,"class","mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"),d(t,"class","sm:mx-auto sm:w-full sm:max-w-sm"),d(k,"for","Description"),d(k,"class","block text-sm font-medium leading-6 text-gray-900"),d(Z,"id","Description"),d(Z,"name","description"),d(Z,"type","text"),Z.required=!0,d(Z,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"),d(A,"class","mt-2"),d(W,"for","MACaddress"),d(W,"class","block text-sm font-medium leading-6 text-gray-900"),d(G,"id","MACaddress"),d(G,"name","MACaddress"),d(G,"type","text"),G.required=!0,d(G,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"),d(q,"class","mt-2"),d($,"for","BatteryMode"),d($,"class","block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"),pt.__value="normal",pt.value=pt.__value,gt.__value="eco",gt.value=gt.__value,ct.__value="stand-by",ct.value=ct.__value,d(vt,"name","batteryMode"),d(vt,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6"),d(ft,"class","ml-2"),d(lt,"class","flex flex-nowrap"),d(zt,"for","DeviceType"),d(zt,"class","block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"),Gt.__value="sensors",Gt.value=Gt.__value,Lt.__value="switch",Lt.value=Lt.__value,xt.__value="mixed",xt.value=xt.__value,d(yt,"name","deviceType"),d(yt,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-6"),d(bt,"class","ml-2"),d(Ot,"class","flex flex-nowrap"),d(Zt,"for","ActivationKey"),d(Zt,"class","block text-sm font-medium leading-6 text-gray-900"),d(Dt,"id","ActivationKey"),d(Dt,"name","activationkey"),d(Dt,"type","text"),Dt.required=!0,d(Dt,"class","block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"),d(Q,"class","mt-2"),d(Xt,"type","button"),d(Xt,"class","mr-1 flex w-full justify-center rounded-md bg-neutral-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-500 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"),d(s,"type","submit"),d(s,"class","ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),d(dt,"class","flex flex-nowrap"),d(y,"class","w-[20vw] space-y-6"),d(y,"method","POST"),d(y,"action","/testecards/TESTE-LECAS-3")},m(O,I){it(O,r,I),it(O,t,I),e(t,c),e(t,p),e(p,f),e(t,g),it(O,_,I),it(O,y,I),e(y,Y),e(y,w),e(w,M),e(w,k),e(k,z),e(w,T),e(w,A),e(A,R),e(A,Z),e(A,x),e(w,U),e(y,F),e(y,S),e(S,P),e(S,W),e(W,B),e(S,j),e(S,q),e(q,X),e(q,G),e(q,K),e(S,tt),e(y,et),e(y,lt),e(lt,st),e(lt,$),e($,Ht),e(lt,at),e(lt,ft),e(ft,ot),e(ft,vt),e(vt,pt),e(pt,_t),e(vt,gt),e(gt,ht),e(vt,ct),e(ct,Tt),e(ft,Ce),e(lt,Wt),e(y,se),e(y,Ot),e(Ot,Te),e(Ot,zt),e(zt,Kt),e(Ot,ve),e(Ot,bt),e(bt,ce),e(bt,yt),e(yt,Gt),e(Gt,qt),e(yt,Lt),e(Lt,ne),e(yt,xt),e(xt,be),e(bt,ye),e(Ot,Ie),e(y,De),e(y,jt),e(jt,Jt),e(jt,Zt),e(Zt,Qt),e(jt,ke),e(jt,Q),e(Q,pe),e(Q,Dt),e(Q,Se),e(jt,Rt),e(y,ae),e(y,dt),e(dt,Ae),e(dt,Xt),e(Xt,n),e(dt,i),e(dt,s),e(s,m),e(dt,D),e(y,C),V||(N=In(Xt,"click",a[0]),V=!0)},p:Pt,i:Pt,o:Pt,d(O){O&&u(r),O&&u(t),O&&u(_),O&&u(y),V=!1,N()}}}function Ri(a){return[()=>Oi()]}class Vi extends bn{constructor(r){super(),yn(this,r,Ri,ji,Dn,{})}}let Ti=new Date,Ii=new Date;Ii.setDate(Ti.getDate()-7);let Ui=[Ii.toISOString().split("T")[0],Ti.toISOString().split("T")[0]];const vn=_i(Ui);var Xa=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],gn={_disable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:typeof window=="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enableSeconds:!1,enableTime:!1,errorHandler:function(a){return typeof console<"u"&&console.warn(a)},getWeek:function(a){var r=new Date(a.getTime());r.setHours(0,0,0,0),r.setDate(r.getDate()+3-(r.getDay()+6)%7);var t=new Date(r.getFullYear(),0,4);return 1+Math.round(((r.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},_n={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(a){var r=a%100;if(r>3&&r<21)return"th";switch(r%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},ee=function(a,r){return r===void 0&&(r=2),("000"+a).slice(r*-1)},ue=function(a){return a===!0?1:0};function yi(a,r){var t;return function(){var c=this,p=arguments;clearTimeout(t),t=setTimeout(function(){return a.apply(c,p)},r)}}var $a=function(a){return a instanceof Array?a:[a]};function Bt(a,r,t){if(t===!0)return a.classList.add(r);a.classList.remove(r)}function rt(a,r,t){var c=window.document.createElement(a);return r=r||"",t=t||"",c.className=r,t!==void 0&&(c.textContent=t),c}function fa(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function ki(a,r){if(r(a))return a;if(a.parentNode)return ki(a.parentNode,r)}function ua(a,r){var t=rt("div","numInputWrapper"),c=rt("input","numInput "+a),p=rt("span","arrowUp"),f=rt("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1?c.type="number":(c.type="text",c.pattern="\\d*"),r!==void 0)for(var g in r)c.setAttribute(g,r[g]);return t.appendChild(c),t.appendChild(p),t.appendChild(f),t}function re(a){try{if(typeof a.composedPath=="function"){var r=a.composedPath();return r[0]}return a.target}catch{return a.target}}var ti=function(){},ga=function(a,r,t){return t.months[r?"shorthand":"longhand"][a]},Bi={D:ti,F:function(a,r,t){a.setMonth(t.months.longhand.indexOf(r))},G:function(a,r){a.setHours((a.getHours()>=12?12:0)+parseFloat(r))},H:function(a,r){a.setHours(parseFloat(r))},J:function(a,r){a.setDate(parseFloat(r))},K:function(a,r,t){a.setHours(a.getHours()%12+12*ue(new RegExp(t.amPM[1],"i").test(r)))},M:function(a,r,t){a.setMonth(t.months.shorthand.indexOf(r))},S:function(a,r){a.setSeconds(parseFloat(r))},U:function(a,r){return new Date(parseFloat(r)*1e3)},W:function(a,r,t){var c=parseInt(r),p=new Date(a.getFullYear(),0,2+(c-1)*7,0,0,0,0);return p.setDate(p.getDate()-p.getDay()+t.firstDayOfWeek),p},Y:function(a,r){a.setFullYear(parseFloat(r))},Z:function(a,r){return new Date(r)},d:function(a,r){a.setDate(parseFloat(r))},h:function(a,r){a.setHours((a.getHours()>=12?12:0)+parseFloat(r))},i:function(a,r){a.setMinutes(parseFloat(r))},j:function(a,r){a.setDate(parseFloat(r))},l:ti,m:function(a,r){a.setMonth(parseFloat(r)-1)},n:function(a,r){a.setMonth(parseFloat(r)-1)},s:function(a,r){a.setSeconds(parseFloat(r))},u:function(a,r){return new Date(parseFloat(r))},w:ti,y:function(a,r){a.setFullYear(2e3+parseFloat(r))}},Qe={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},xn={Z:function(a){return a.toISOString()},D:function(a,r,t){return r.weekdays.shorthand[xn.w(a,r,t)]},F:function(a,r,t){return ga(xn.n(a,r,t)-1,!1,r)},G:function(a,r,t){return ee(xn.h(a,r,t))},H:function(a){return ee(a.getHours())},J:function(a,r){return r.ordinal!==void 0?a.getDate()+r.ordinal(a.getDate()):a.getDate()},K:function(a,r){return r.amPM[ue(a.getHours()>11)]},M:function(a,r){return ga(a.getMonth(),!0,r)},S:function(a){return ee(a.getSeconds())},U:function(a){return a.getTime()/1e3},W:function(a,r,t){return t.getWeek(a)},Y:function(a){return ee(a.getFullYear(),4)},d:function(a){return ee(a.getDate())},h:function(a){return a.getHours()%12?a.getHours()%12:12},i:function(a){return ee(a.getMinutes())},j:function(a){return a.getDate()},l:function(a,r){return r.weekdays.longhand[a.getDay()]},m:function(a){return ee(a.getMonth()+1)},n:function(a){return a.getMonth()+1},s:function(a){return a.getSeconds()},u:function(a){return a.getTime()},w:function(a){return a.getDay()},y:function(a){return String(a.getFullYear()).substring(2)}},Si=function(a){var r=a.config,t=r===void 0?gn:r,c=a.l10n,p=c===void 0?_n:c,f=a.isMobile,g=f===void 0?!1:f;return function(_,y,Y){var w=Y||p;return t.formatDate!==void 0&&!g?t.formatDate(_,y,w):y.split("").map(function(M,k,z){return xn[M]&&z[k-1]!=="\\"?xn[M](_,w,t):M!=="\\"?M:""}).join("")}},ai=function(a){var r=a.config,t=r===void 0?gn:r,c=a.l10n,p=c===void 0?_n:c;return function(f,g,_,y){if(!(f!==0&&!f)){var Y=y||p,w,M=f;if(f instanceof Date)w=new Date(f.getTime());else if(typeof f!="string"&&f.toFixed!==void 0)w=new Date(f);else if(typeof f=="string"){var k=g||(t||gn).dateFormat,z=String(f).trim();if(z==="today")w=new Date,_=!0;else if(t&&t.parseDate)w=t.parseDate(f,k);else if(/Z$/.test(z)||/GMT$/.test(z))w=new Date(f);else{for(var T=void 0,A=[],R=0,Z=0,x="";R<k.length;R++){var U=k[R],F=U==="\\",S=k[R-1]==="\\"||F;if(Qe[U]&&!S){x+=Qe[U];var P=new RegExp(x).exec(f);P&&(T=!0)&&A[U!=="Y"?"push":"unshift"]({fn:Bi[U],val:P[++Z]})}else F||(x+=".")}w=!t||!t.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0)),A.forEach(function(W){var B=W.fn,j=W.val;return w=B(w,j,Y)||w}),w=T?w:void 0}}if(!(w instanceof Date&&!isNaN(w.getTime()))){t.errorHandler(new Error("Invalid date provided: "+M));return}return _===!0&&w.setHours(0,0,0,0),w}}};function oe(a,r,t){return t===void 0&&(t=!0),t!==!1?new Date(a.getTime()).setHours(0,0,0,0)-new Date(r.getTime()).setHours(0,0,0,0):a.getTime()-r.getTime()}var Wi=function(a,r,t){return a>Math.min(r,t)&&a<Math.max(r,t)},ei=function(a,r,t){return a*3600+r*60+t},zi=function(a){var r=Math.floor(a/3600),t=(a-r*3600)/60;return[r,t,a-r*3600-t*60]},Ki={DAY:864e5};function ni(a){var r=a.defaultHour,t=a.defaultMinute,c=a.defaultSeconds;if(a.minDate!==void 0){var p=a.minDate.getHours(),f=a.minDate.getMinutes(),g=a.minDate.getSeconds();r<p&&(r=p),r===p&&t<f&&(t=f),r===p&&t===f&&c<g&&(c=a.minDate.getSeconds())}if(a.maxDate!==void 0){var _=a.maxDate.getHours(),y=a.maxDate.getMinutes();r=Math.min(r,_),r===_&&(t=Math.min(y,t)),r===_&&t===y&&(c=a.maxDate.getSeconds())}return{hours:r,minutes:t,seconds:c}}typeof Object.assign!="function"&&(Object.assign=function(a){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];if(!a)throw TypeError("Cannot convert undefined or null to object");for(var c=function(_){_&&Object.keys(_).forEach(function(y){return a[y]=_[y]})},p=0,f=r;p<f.length;p++){var g=f[p];c(g)}return a});var Yt=globalThis&&globalThis.__assign||function(){return Yt=Object.assign||function(a){for(var r,t=1,c=arguments.length;t<c;t++){r=arguments[t];for(var p in r)Object.prototype.hasOwnProperty.call(r,p)&&(a[p]=r[p])}return a},Yt.apply(this,arguments)},Di=globalThis&&globalThis.__spreadArrays||function(){for(var a=0,r=0,t=arguments.length;r<t;r++)a+=arguments[r].length;for(var c=Array(a),p=0,r=0;r<t;r++)for(var f=arguments[r],g=0,_=f.length;g<_;g++,p++)c[p]=f[g];return c},Gi=300;function qi(a,r){var t={config:Yt(Yt({},gn),mt.defaultConfig),l10n:_n};t.parseDate=ai({config:t.config,l10n:t.l10n}),t._handlers=[],t.pluginElements=[],t.loadedPlugins=[],t._bind=A,t._setHoursFromDate=k,t._positionCalendar=ce,t.changeMonth=ft,t.changeYear=ht,t.clear=ot,t.close=vt,t.onMouseOver=se,t._createElement=rt,t.createDay=P,t.destroy=pt,t.isEnabled=ct,t.jumpToDate=x,t.updateValue=dt,t.open=Te,t.redraw=qt,t.set=be,t.setDate=Ie,t.toggle=ke;function c(){t.utils={getDaysInMonth:function(n,i){return n===void 0&&(n=t.currentMonth),i===void 0&&(i=t.currentYear),n===1&&(i%4===0&&i%100!==0||i%400===0)?29:t.l10n.daysInMonth[n]}}}function p(){t.element=t.input=a,t.isOpen=!1,Kt(),bt(),Jt(),jt(),c(),t.isMobile||S(),Z(),(t.selectedDates.length||t.config.noCalendar)&&(t.config.enableTime&&k(t.config.noCalendar?t.latestSelectedDateObj:void 0),dt(!1)),_();var n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!t.isMobile&&n&&ce(),Q("onReady")}function f(){var n;return((n=t.calendarContainer)===null||n===void 0?void 0:n.getRootNode()).activeElement||document.activeElement}function g(n){return n.bind(t)}function _(){var n=t.config;n.weekNumbers===!1&&n.showMonths===1||n.noCalendar!==!0&&window.requestAnimationFrame(function(){if(t.calendarContainer!==void 0&&(t.calendarContainer.style.visibility="hidden",t.calendarContainer.style.display="block"),t.daysContainer!==void 0){var i=(t.days.offsetWidth+1)*n.showMonths;t.daysContainer.style.width=i+"px",t.calendarContainer.style.width=i+(t.weekWrapper!==void 0?t.weekWrapper.offsetWidth:0)+"px",t.calendarContainer.style.removeProperty("visibility"),t.calendarContainer.style.removeProperty("display")}})}function y(n){if(t.selectedDates.length===0){var i=t.config.minDate===void 0||oe(new Date,t.config.minDate)>=0?new Date:new Date(t.config.minDate.getTime()),s=ni(t.config);i.setHours(s.hours,s.minutes,s.seconds,i.getMilliseconds()),t.selectedDates=[i],t.latestSelectedDateObj=i}n!==void 0&&n.type!=="blur"&&Xt(n);var m=t._input.value;M(),dt(),t._input.value!==m&&t._debouncedChange()}function Y(n,i){return n%12+12*ue(i===t.l10n.amPM[1])}function w(n){switch(n%24){case 0:case 12:return 12;default:return n%12}}function M(){if(!(t.hourElement===void 0||t.minuteElement===void 0)){var n=(parseInt(t.hourElement.value.slice(-2),10)||0)%24,i=(parseInt(t.minuteElement.value,10)||0)%60,s=t.secondElement!==void 0?(parseInt(t.secondElement.value,10)||0)%60:0;t.amPM!==void 0&&(n=Y(n,t.amPM.textContent));var m=t.config.minTime!==void 0||t.config.minDate&&t.minDateHasTime&&t.latestSelectedDateObj&&oe(t.latestSelectedDateObj,t.config.minDate,!0)===0,D=t.config.maxTime!==void 0||t.config.maxDate&&t.maxDateHasTime&&t.latestSelectedDateObj&&oe(t.latestSelectedDateObj,t.config.maxDate,!0)===0;if(t.config.maxTime!==void 0&&t.config.minTime!==void 0&&t.config.minTime>t.config.maxTime){var C=ei(t.config.minTime.getHours(),t.config.minTime.getMinutes(),t.config.minTime.getSeconds()),V=ei(t.config.maxTime.getHours(),t.config.maxTime.getMinutes(),t.config.maxTime.getSeconds()),N=ei(n,i,s);if(N>V&&N<C){var O=zi(C);n=O[0],i=O[1],s=O[2]}}else{if(D){var I=t.config.maxTime!==void 0?t.config.maxTime:t.config.maxDate;n=Math.min(n,I.getHours()),n===I.getHours()&&(i=Math.min(i,I.getMinutes())),i===I.getMinutes()&&(s=Math.min(s,I.getSeconds()))}if(m){var H=t.config.minTime!==void 0?t.config.minTime:t.config.minDate;n=Math.max(n,H.getHours()),n===H.getHours()&&i<H.getMinutes()&&(i=H.getMinutes()),i===H.getMinutes()&&(s=Math.max(s,H.getSeconds()))}}z(n,i,s)}}function k(n){var i=n||t.latestSelectedDateObj;i&&i instanceof Date&&z(i.getHours(),i.getMinutes(),i.getSeconds())}function z(n,i,s){t.latestSelectedDateObj!==void 0&&t.latestSelectedDateObj.setHours(n%24,i,s||0,0),!(!t.hourElement||!t.minuteElement||t.isMobile)&&(t.hourElement.value=ee(t.config.time_24hr?n:(12+n)%12+12*ue(n%12===0)),t.minuteElement.value=ee(i),t.amPM!==void 0&&(t.amPM.textContent=t.l10n.amPM[ue(n>=12)]),t.secondElement!==void 0&&(t.secondElement.value=ee(s)))}function T(n){var i=re(n),s=parseInt(i.value)+(n.delta||0);(s/1e3>1||n.key==="Enter"&&!/[^\d]/.test(s.toString()))&&ht(s)}function A(n,i,s,m){if(i instanceof Array)return i.forEach(function(D){return A(n,D,s,m)});if(n instanceof Array)return n.forEach(function(D){return A(D,i,s,m)});n.addEventListener(i,s,m),t._handlers.push({remove:function(){return n.removeEventListener(i,s,m)}})}function R(){Q("onChange")}function Z(){if(t.config.wrap&&["open","close","toggle","clear"].forEach(function(s){Array.prototype.forEach.call(t.element.querySelectorAll("[data-"+s+"]"),function(m){return A(m,"click",t[s])})}),t.isMobile){Qt();return}var n=yi(Ot,50);if(t._debouncedChange=yi(R,Gi),t.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&A(t.daysContainer,"mouseover",function(s){t.config.mode==="range"&&se(re(s))}),A(t._input,"keydown",Wt),t.calendarContainer!==void 0&&A(t.calendarContainer,"keydown",Wt),!t.config.inline&&!t.config.static&&A(window,"resize",n),window.ontouchstart!==void 0?A(window.document,"touchstart",gt):A(window.document,"mousedown",gt),A(window.document,"focus",gt,{capture:!0}),t.config.clickOpens===!0&&(A(t._input,"focus",t.open),A(t._input,"click",t.open)),t.daysContainer!==void 0&&(A(t.monthNav,"click",Ae),A(t.monthNav,["keyup","increment"],T),A(t.daysContainer,"click",ne)),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0){var i=function(s){return re(s).select()};A(t.timeContainer,["increment"],y),A(t.timeContainer,"blur",y,{capture:!0}),A(t.timeContainer,"click",U),A([t.hourElement,t.minuteElement],["focus","click"],i),t.secondElement!==void 0&&A(t.secondElement,"focus",function(){return t.secondElement&&t.secondElement.select()}),t.amPM!==void 0&&A(t.amPM,"click",function(s){y(s)})}t.config.allowInput&&A(t._input,"blur",Ce)}function x(n,i){var s=n!==void 0?t.parseDate(n):t.latestSelectedDateObj||(t.config.minDate&&t.config.minDate>t.now?t.config.minDate:t.config.maxDate&&t.config.maxDate<t.now?t.config.maxDate:t.now),m=t.currentYear,D=t.currentMonth;try{s!==void 0&&(t.currentYear=s.getFullYear(),t.currentMonth=s.getMonth())}catch(C){C.message="Invalid date supplied: "+s,t.config.errorHandler(C)}i&&t.currentYear!==m&&(Q("onYearChange"),K()),i&&(t.currentYear!==m||t.currentMonth!==D)&&Q("onMonthChange"),t.redraw()}function U(n){var i=re(n);~i.className.indexOf("arrow")&&F(n,i.classList.contains("arrowUp")?1:-1)}function F(n,i,s){var m=n&&re(n),D=s||m&&m.parentNode&&m.parentNode.firstChild,C=pe("increment");C.delta=i,D&&D.dispatchEvent(C)}function S(){var n=window.document.createDocumentFragment();if(t.calendarContainer=rt("div","flatpickr-calendar"),t.calendarContainer.tabIndex=-1,!t.config.noCalendar){if(n.appendChild(lt()),t.innerContainer=rt("div","flatpickr-innerContainer"),t.config.weekNumbers){var i=at(),s=i.weekWrapper,m=i.weekNumbers;t.innerContainer.appendChild(s),t.weekNumbers=m,t.weekWrapper=s}t.rContainer=rt("div","flatpickr-rContainer"),t.rContainer.appendChild($()),t.daysContainer||(t.daysContainer=rt("div","flatpickr-days"),t.daysContainer.tabIndex=-1),G(),t.rContainer.appendChild(t.daysContainer),t.innerContainer.appendChild(t.rContainer),n.appendChild(t.innerContainer)}t.config.enableTime&&n.appendChild(st()),Bt(t.calendarContainer,"rangeMode",t.config.mode==="range"),Bt(t.calendarContainer,"animate",t.config.animate===!0),Bt(t.calendarContainer,"multiMonth",t.config.showMonths>1),t.calendarContainer.appendChild(n);var D=t.config.appendTo!==void 0&&t.config.appendTo.nodeType!==void 0;if((t.config.inline||t.config.static)&&(t.calendarContainer.classList.add(t.config.inline?"inline":"static"),t.config.inline&&(!D&&t.element.parentNode?t.element.parentNode.insertBefore(t.calendarContainer,t._input.nextSibling):t.config.appendTo!==void 0&&t.config.appendTo.appendChild(t.calendarContainer)),t.config.static)){var C=rt("div","flatpickr-wrapper");t.element.parentNode&&t.element.parentNode.insertBefore(C,t.element),C.appendChild(t.element),t.altInput&&C.appendChild(t.altInput),C.appendChild(t.calendarContainer)}!t.config.static&&!t.config.inline&&(t.config.appendTo!==void 0?t.config.appendTo:window.document.body).appendChild(t.calendarContainer)}function P(n,i,s,m){var D=ct(i,!0),C=rt("span",n,i.getDate().toString());return C.dateObj=i,C.$i=m,C.setAttribute("aria-label",t.formatDate(i,t.config.ariaDateFormat)),n.indexOf("hidden")===-1&&oe(i,t.now)===0&&(t.todayDateElem=C,C.classList.add("today"),C.setAttribute("aria-current","date")),D?(C.tabIndex=-1,Dt(i)&&(C.classList.add("selected"),t.selectedDateElem=C,t.config.mode==="range"&&(Bt(C,"startRange",t.selectedDates[0]&&oe(i,t.selectedDates[0],!0)===0),Bt(C,"endRange",t.selectedDates[1]&&oe(i,t.selectedDates[1],!0)===0),n==="nextMonthDay"&&C.classList.add("inRange")))):C.classList.add("flatpickr-disabled"),t.config.mode==="range"&&Se(i)&&!Dt(i)&&C.classList.add("inRange"),t.weekNumbers&&t.config.showMonths===1&&n!=="prevMonthDay"&&m%7===6&&t.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+t.config.getWeek(i)+"</span>"),Q("onDayCreate",C),C}function W(n){n.focus(),t.config.mode==="range"&&se(n)}function B(n){for(var i=n>0?0:t.config.showMonths-1,s=n>0?t.config.showMonths:-1,m=i;m!=s;m+=n)for(var D=t.daysContainer.children[m],C=n>0?0:D.children.length-1,V=n>0?D.children.length:-1,N=C;N!=V;N+=n){var O=D.children[N];if(O.className.indexOf("hidden")===-1&&ct(O.dateObj))return O}}function j(n,i){for(var s=n.className.indexOf("Month")===-1?n.dateObj.getMonth():t.currentMonth,m=i>0?t.config.showMonths:-1,D=i>0?1:-1,C=s-t.currentMonth;C!=m;C+=D)for(var V=t.daysContainer.children[C],N=s-t.currentMonth===C?n.$i+i:i<0?V.children.length-1:0,O=V.children.length,I=N;I>=0&&I<O&&I!=(i>0?O:-1);I+=D){var H=V.children[I];if(H.className.indexOf("hidden")===-1&&ct(H.dateObj)&&Math.abs(n.$i-I)>=Math.abs(i))return W(H)}t.changeMonth(D),q(B(D),0)}function q(n,i){var s=f(),m=Tt(s||document.body),D=n!==void 0?n:m?s:t.selectedDateElem!==void 0&&Tt(t.selectedDateElem)?t.selectedDateElem:t.todayDateElem!==void 0&&Tt(t.todayDateElem)?t.todayDateElem:B(i>0?1:-1);D===void 0?t._input.focus():m?j(D,i):W(D)}function X(n,i){for(var s=(new Date(n,i,1).getDay()-t.l10n.firstDayOfWeek+7)%7,m=t.utils.getDaysInMonth((i-1+12)%12,n),D=t.utils.getDaysInMonth(i,n),C=window.document.createDocumentFragment(),V=t.config.showMonths>1,N=V?"prevMonthDay hidden":"prevMonthDay",O=V?"nextMonthDay hidden":"nextMonthDay",I=m+1-s,H=0;I<=m;I++,H++)C.appendChild(P("flatpickr-day "+N,new Date(n,i-1,I),I,H));for(I=1;I<=D;I++,H++)C.appendChild(P("flatpickr-day",new Date(n,i,I),I,H));for(var J=D+1;J<=42-s&&(t.config.showMonths===1||H%7!==0);J++,H++)C.appendChild(P("flatpickr-day "+O,new Date(n,i+1,J%D),J,H));var ut=rt("div","dayContainer");return ut.appendChild(C),ut}function G(){if(t.daysContainer!==void 0){fa(t.daysContainer),t.weekNumbers&&fa(t.weekNumbers);for(var n=document.createDocumentFragment(),i=0;i<t.config.showMonths;i++){var s=new Date(t.currentYear,t.currentMonth,1);s.setMonth(t.currentMonth+i),n.appendChild(X(s.getFullYear(),s.getMonth()))}t.daysContainer.appendChild(n),t.days=t.daysContainer.firstChild,t.config.mode==="range"&&t.selectedDates.length===1&&se()}}function K(){if(!(t.config.showMonths>1||t.config.monthSelectorType!=="dropdown")){var n=function(m){return t.config.minDate!==void 0&&t.currentYear===t.config.minDate.getFullYear()&&m<t.config.minDate.getMonth()?!1:!(t.config.maxDate!==void 0&&t.currentYear===t.config.maxDate.getFullYear()&&m>t.config.maxDate.getMonth())};t.monthsDropdownContainer.tabIndex=-1,t.monthsDropdownContainer.innerHTML="";for(var i=0;i<12;i++)if(n(i)){var s=rt("option","flatpickr-monthDropdown-month");s.value=new Date(t.currentYear,i).getMonth().toString(),s.textContent=ga(i,t.config.shorthandCurrentMonth,t.l10n),s.tabIndex=-1,t.currentMonth===i&&(s.selected=!0),t.monthsDropdownContainer.appendChild(s)}}}function tt(){var n=rt("div","flatpickr-month"),i=window.document.createDocumentFragment(),s;t.config.showMonths>1||t.config.monthSelectorType==="static"?s=rt("span","cur-month"):(t.monthsDropdownContainer=rt("select","flatpickr-monthDropdown-months"),t.monthsDropdownContainer.setAttribute("aria-label",t.l10n.monthAriaLabel),A(t.monthsDropdownContainer,"change",function(V){var N=re(V),O=parseInt(N.value,10);t.changeMonth(O-t.currentMonth),Q("onMonthChange")}),K(),s=t.monthsDropdownContainer);var m=ua("cur-year",{tabindex:"-1"}),D=m.getElementsByTagName("input")[0];D.setAttribute("aria-label",t.l10n.yearAriaLabel),t.config.minDate&&D.setAttribute("min",t.config.minDate.getFullYear().toString()),t.config.maxDate&&(D.setAttribute("max",t.config.maxDate.getFullYear().toString()),D.disabled=!!t.config.minDate&&t.config.minDate.getFullYear()===t.config.maxDate.getFullYear());var C=rt("div","flatpickr-current-month");return C.appendChild(s),C.appendChild(m),i.appendChild(C),n.appendChild(i),{container:n,yearElement:D,monthElement:s}}function et(){fa(t.monthNav),t.monthNav.appendChild(t.prevMonthNav),t.config.showMonths&&(t.yearElements=[],t.monthElements=[]);for(var n=t.config.showMonths;n--;){var i=tt();t.yearElements.push(i.yearElement),t.monthElements.push(i.monthElement),t.monthNav.appendChild(i.container)}t.monthNav.appendChild(t.nextMonthNav)}function lt(){return t.monthNav=rt("div","flatpickr-months"),t.yearElements=[],t.monthElements=[],t.prevMonthNav=rt("span","flatpickr-prev-month"),t.prevMonthNav.innerHTML=t.config.prevArrow,t.nextMonthNav=rt("span","flatpickr-next-month"),t.nextMonthNav.innerHTML=t.config.nextArrow,et(),Object.defineProperty(t,"_hidePrevMonthArrow",{get:function(){return t.__hidePrevMonthArrow},set:function(n){t.__hidePrevMonthArrow!==n&&(Bt(t.prevMonthNav,"flatpickr-disabled",n),t.__hidePrevMonthArrow=n)}}),Object.defineProperty(t,"_hideNextMonthArrow",{get:function(){return t.__hideNextMonthArrow},set:function(n){t.__hideNextMonthArrow!==n&&(Bt(t.nextMonthNav,"flatpickr-disabled",n),t.__hideNextMonthArrow=n)}}),t.currentYearElement=t.yearElements[0],Rt(),t.monthNav}function st(){t.calendarContainer.classList.add("hasTime"),t.config.noCalendar&&t.calendarContainer.classList.add("noCalendar");var n=ni(t.config);t.timeContainer=rt("div","flatpickr-time"),t.timeContainer.tabIndex=-1;var i=rt("span","flatpickr-time-separator",":"),s=ua("flatpickr-hour",{"aria-label":t.l10n.hourAriaLabel});t.hourElement=s.getElementsByTagName("input")[0];var m=ua("flatpickr-minute",{"aria-label":t.l10n.minuteAriaLabel});if(t.minuteElement=m.getElementsByTagName("input")[0],t.hourElement.tabIndex=t.minuteElement.tabIndex=-1,t.hourElement.value=ee(t.latestSelectedDateObj?t.latestSelectedDateObj.getHours():t.config.time_24hr?n.hours:w(n.hours)),t.minuteElement.value=ee(t.latestSelectedDateObj?t.latestSelectedDateObj.getMinutes():n.minutes),t.hourElement.setAttribute("step",t.config.hourIncrement.toString()),t.minuteElement.setAttribute("step",t.config.minuteIncrement.toString()),t.hourElement.setAttribute("min",t.config.time_24hr?"0":"1"),t.hourElement.setAttribute("max",t.config.time_24hr?"23":"12"),t.hourElement.setAttribute("maxlength","2"),t.minuteElement.setAttribute("min","0"),t.minuteElement.setAttribute("max","59"),t.minuteElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(s),t.timeContainer.appendChild(i),t.timeContainer.appendChild(m),t.config.time_24hr&&t.timeContainer.classList.add("time24hr"),t.config.enableSeconds){t.timeContainer.classList.add("hasSeconds");var D=ua("flatpickr-second");t.secondElement=D.getElementsByTagName("input")[0],t.secondElement.value=ee(t.latestSelectedDateObj?t.latestSelectedDateObj.getSeconds():n.seconds),t.secondElement.setAttribute("step",t.minuteElement.getAttribute("step")),t.secondElement.setAttribute("min","0"),t.secondElement.setAttribute("max","59"),t.secondElement.setAttribute("maxlength","2"),t.timeContainer.appendChild(rt("span","flatpickr-time-separator",":")),t.timeContainer.appendChild(D)}return t.config.time_24hr||(t.amPM=rt("span","flatpickr-am-pm",t.l10n.amPM[ue((t.latestSelectedDateObj?t.hourElement.value:t.config.defaultHour)>11)]),t.amPM.title=t.l10n.toggleTitle,t.amPM.tabIndex=-1,t.timeContainer.appendChild(t.amPM)),t.timeContainer}function $(){t.weekdayContainer?fa(t.weekdayContainer):t.weekdayContainer=rt("div","flatpickr-weekdays");for(var n=t.config.showMonths;n--;){var i=rt("div","flatpickr-weekdaycontainer");t.weekdayContainer.appendChild(i)}return Ht(),t.weekdayContainer}function Ht(){if(t.weekdayContainer){var n=t.l10n.firstDayOfWeek,i=Di(t.l10n.weekdays.shorthand);n>0&&n<i.length&&(i=Di(i.splice(n,i.length),i.splice(0,n)));for(var s=t.config.showMonths;s--;)t.weekdayContainer.children[s].innerHTML=`
      <span class='flatpickr-weekday'>
        `+i.join("</span><span class='flatpickr-weekday'>")+`
      </span>
      `}}function at(){t.calendarContainer.classList.add("hasWeeks");var n=rt("div","flatpickr-weekwrapper");n.appendChild(rt("span","flatpickr-weekday",t.l10n.weekAbbreviation));var i=rt("div","flatpickr-weeks");return n.appendChild(i),{weekWrapper:n,weekNumbers:i}}function ft(n,i){i===void 0&&(i=!0);var s=i?n:n-t.currentMonth;s<0&&t._hidePrevMonthArrow===!0||s>0&&t._hideNextMonthArrow===!0||(t.currentMonth+=s,(t.currentMonth<0||t.currentMonth>11)&&(t.currentYear+=t.currentMonth>11?1:-1,t.currentMonth=(t.currentMonth+12)%12,Q("onYearChange"),K()),G(),Q("onMonthChange"),Rt())}function ot(n,i){if(n===void 0&&(n=!0),i===void 0&&(i=!0),t.input.value="",t.altInput!==void 0&&(t.altInput.value=""),t.mobileInput!==void 0&&(t.mobileInput.value=""),t.selectedDates=[],t.latestSelectedDateObj=void 0,i===!0&&(t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth()),t.config.enableTime===!0){var s=ni(t.config),m=s.hours,D=s.minutes,C=s.seconds;z(m,D,C)}t.redraw(),n&&Q("onChange")}function vt(){t.isOpen=!1,t.isMobile||(t.calendarContainer!==void 0&&t.calendarContainer.classList.remove("open"),t._input!==void 0&&t._input.classList.remove("active")),Q("onClose")}function pt(){t.config!==void 0&&Q("onDestroy");for(var n=t._handlers.length;n--;)t._handlers[n].remove();if(t._handlers=[],t.mobileInput)t.mobileInput.parentNode&&t.mobileInput.parentNode.removeChild(t.mobileInput),t.mobileInput=void 0;else if(t.calendarContainer&&t.calendarContainer.parentNode)if(t.config.static&&t.calendarContainer.parentNode){var i=t.calendarContainer.parentNode;if(i.lastChild&&i.removeChild(i.lastChild),i.parentNode){for(;i.firstChild;)i.parentNode.insertBefore(i.firstChild,i);i.parentNode.removeChild(i)}}else t.calendarContainer.parentNode.removeChild(t.calendarContainer);t.altInput&&(t.input.type="text",t.altInput.parentNode&&t.altInput.parentNode.removeChild(t.altInput),delete t.altInput),t.input&&(t.input.type=t.input._type,t.input.classList.remove("flatpickr-input"),t.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(s){try{delete t[s]}catch{}})}function _t(n){return t.calendarContainer.contains(n)}function gt(n){if(t.isOpen&&!t.config.inline){var i=re(n),s=_t(i),m=i===t.input||i===t.altInput||t.element.contains(i)||n.path&&n.path.indexOf&&(~n.path.indexOf(t.input)||~n.path.indexOf(t.altInput)),D=!m&&!s&&!_t(n.relatedTarget),C=!t.config.ignoredFocusElements.some(function(V){return V.contains(i)});D&&C&&(t.config.allowInput&&t.setDate(t._input.value,!1,t.config.altInput?t.config.altFormat:t.config.dateFormat),t.timeContainer!==void 0&&t.minuteElement!==void 0&&t.hourElement!==void 0&&t.input.value!==""&&t.input.value!==void 0&&y(),t.close(),t.config&&t.config.mode==="range"&&t.selectedDates.length===1&&t.clear(!1))}}function ht(n){if(!(!n||t.config.minDate&&n<t.config.minDate.getFullYear()||t.config.maxDate&&n>t.config.maxDate.getFullYear())){var i=n,s=t.currentYear!==i;t.currentYear=i||t.currentYear,t.config.maxDate&&t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth=Math.min(t.config.maxDate.getMonth(),t.currentMonth):t.config.minDate&&t.currentYear===t.config.minDate.getFullYear()&&(t.currentMonth=Math.max(t.config.minDate.getMonth(),t.currentMonth)),s&&(t.redraw(),Q("onYearChange"),K())}}function ct(n,i){var s;i===void 0&&(i=!0);var m=t.parseDate(n,void 0,i);if(t.config.minDate&&m&&oe(m,t.config.minDate,i!==void 0?i:!t.minDateHasTime)<0||t.config.maxDate&&m&&oe(m,t.config.maxDate,i!==void 0?i:!t.maxDateHasTime)>0)return!1;if(!t.config.enable&&t.config.disable.length===0)return!0;if(m===void 0)return!1;for(var D=!!t.config.enable,C=(s=t.config.enable)!==null&&s!==void 0?s:t.config.disable,V=0,N=void 0;V<C.length;V++){if(N=C[V],typeof N=="function"&&N(m))return D;if(N instanceof Date&&m!==void 0&&N.getTime()===m.getTime())return D;if(typeof N=="string"){var O=t.parseDate(N,void 0,!0);return O&&O.getTime()===m.getTime()?D:!D}else if(typeof N=="object"&&m!==void 0&&N.from&&N.to&&m.getTime()>=N.from.getTime()&&m.getTime()<=N.to.getTime())return D}return!D}function Tt(n){return t.daysContainer!==void 0?n.className.indexOf("hidden")===-1&&n.className.indexOf("flatpickr-disabled")===-1&&t.daysContainer.contains(n):!1}function Ce(n){var i=n.target===t._input,s=t._input.value.trimEnd()!==ae();i&&s&&!(n.relatedTarget&&_t(n.relatedTarget))&&t.setDate(t._input.value,!0,n.target===t.altInput?t.config.altFormat:t.config.dateFormat)}function Wt(n){var i=re(n),s=t.config.wrap?a.contains(i):i===t._input,m=t.config.allowInput,D=t.isOpen&&(!m||!s),C=t.config.inline&&s&&!m;if(n.keyCode===13&&s){if(m)return t.setDate(t._input.value,!0,i===t.altInput?t.config.altFormat:t.config.dateFormat),t.close(),i.blur();t.open()}else if(_t(i)||D||C){var V=!!t.timeContainer&&t.timeContainer.contains(i);switch(n.keyCode){case 13:V?(n.preventDefault(),y(),Lt()):ne(n);break;case 27:n.preventDefault(),Lt();break;case 8:case 46:s&&!t.config.allowInput&&(n.preventDefault(),t.clear());break;case 37:case 39:if(!V&&!s){n.preventDefault();var N=f();if(t.daysContainer!==void 0&&(m===!1||N&&Tt(N))){var O=n.keyCode===39?1:-1;n.ctrlKey?(n.stopPropagation(),ft(O),q(B(1),0)):q(void 0,O)}}else t.hourElement&&t.hourElement.focus();break;case 38:case 40:n.preventDefault();var I=n.keyCode===40?1:-1;t.daysContainer&&i.$i!==void 0||i===t.input||i===t.altInput?n.ctrlKey?(n.stopPropagation(),ht(t.currentYear-I),q(B(1),0)):V||q(void 0,I*7):i===t.currentYearElement?ht(t.currentYear-I):t.config.enableTime&&(!V&&t.hourElement&&t.hourElement.focus(),y(n),t._debouncedChange());break;case 9:if(V){var H=[t.hourElement,t.minuteElement,t.secondElement,t.amPM].concat(t.pluginElements).filter(function(wt){return wt}),J=H.indexOf(i);if(J!==-1){var ut=H[J+(n.shiftKey?-1:1)];n.preventDefault(),(ut||t._input).focus()}}else!t.config.noCalendar&&t.daysContainer&&t.daysContainer.contains(i)&&n.shiftKey&&(n.preventDefault(),t._input.focus());break}}if(t.amPM!==void 0&&i===t.amPM)switch(n.key){case t.l10n.amPM[0].charAt(0):case t.l10n.amPM[0].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[0],M(),dt();break;case t.l10n.amPM[1].charAt(0):case t.l10n.amPM[1].charAt(0).toLowerCase():t.amPM.textContent=t.l10n.amPM[1],M(),dt();break}(s||_t(i))&&Q("onKeyDown",n)}function se(n,i){if(i===void 0&&(i="flatpickr-day"),!(t.selectedDates.length!==1||n&&(!n.classList.contains(i)||n.classList.contains("flatpickr-disabled")))){for(var s=n?n.dateObj.getTime():t.days.firstElementChild.dateObj.getTime(),m=t.parseDate(t.selectedDates[0],void 0,!0).getTime(),D=Math.min(s,t.selectedDates[0].getTime()),C=Math.max(s,t.selectedDates[0].getTime()),V=!1,N=0,O=0,I=D;I<C;I+=Ki.DAY)ct(new Date(I),!0)||(V=V||I>D&&I<C,I<m&&(!N||I>N)?N=I:I>m&&(!O||I<O)&&(O=I));var H=Array.from(t.rContainer.querySelectorAll("*:nth-child(-n+"+t.config.showMonths+") > ."+i));H.forEach(function(J){var ut=J.dateObj,wt=ut.getTime(),$t=N>0&&wt<N||O>0&&wt>O;if($t){J.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(It){J.classList.remove(It)});return}else if(V&&!$t)return;["startRange","inRange","endRange","notAllowed"].forEach(function(It){J.classList.remove(It)}),n!==void 0&&(n.classList.add(s<=t.selectedDates[0].getTime()?"startRange":"endRange"),m<s&&wt===m?J.classList.add("startRange"):m>s&&wt===m&&J.classList.add("endRange"),wt>=N&&(O===0||wt<=O)&&Wi(wt,m,s)&&J.classList.add("inRange"))})}}function Ot(){t.isOpen&&!t.config.static&&!t.config.inline&&ce()}function Te(n,i){if(i===void 0&&(i=t._positionElement),t.isMobile===!0){if(n){n.preventDefault();var s=re(n);s&&s.blur()}t.mobileInput!==void 0&&(t.mobileInput.focus(),t.mobileInput.click()),Q("onOpen");return}else if(t._input.disabled||t.config.inline)return;var m=t.isOpen;t.isOpen=!0,m||(t.calendarContainer.classList.add("open"),t._input.classList.add("active"),Q("onOpen"),ce(i)),t.config.enableTime===!0&&t.config.noCalendar===!0&&t.config.allowInput===!1&&(n===void 0||!t.timeContainer.contains(n.relatedTarget))&&setTimeout(function(){return t.hourElement.select()},50)}function zt(n){return function(i){var s=t.config["_"+n+"Date"]=t.parseDate(i,t.config.dateFormat),m=t.config["_"+(n==="min"?"max":"min")+"Date"];s!==void 0&&(t[n==="min"?"minDateHasTime":"maxDateHasTime"]=s.getHours()>0||s.getMinutes()>0||s.getSeconds()>0),t.selectedDates&&(t.selectedDates=t.selectedDates.filter(function(D){return ct(D)}),!t.selectedDates.length&&n==="min"&&k(s),dt()),t.daysContainer&&(qt(),s!==void 0?t.currentYearElement[n]=s.getFullYear().toString():t.currentYearElement.removeAttribute(n),t.currentYearElement.disabled=!!m&&s!==void 0&&m.getFullYear()===s.getFullYear())}}function Kt(){var n=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=Yt(Yt({},JSON.parse(JSON.stringify(a.dataset||{}))),r),s={};t.config.parseDate=i.parseDate,t.config.formatDate=i.formatDate,Object.defineProperty(t.config,"enable",{get:function(){return t.config._enable},set:function(H){t.config._enable=De(H)}}),Object.defineProperty(t.config,"disable",{get:function(){return t.config._disable},set:function(H){t.config._disable=De(H)}});var m=i.mode==="time";if(!i.dateFormat&&(i.enableTime||m)){var D=mt.defaultConfig.dateFormat||gn.dateFormat;s.dateFormat=i.noCalendar||m?"H:i"+(i.enableSeconds?":S":""):D+" H:i"+(i.enableSeconds?":S":"")}if(i.altInput&&(i.enableTime||m)&&!i.altFormat){var C=mt.defaultConfig.altFormat||gn.altFormat;s.altFormat=i.noCalendar||m?"h:i"+(i.enableSeconds?":S K":" K"):C+(" h:i"+(i.enableSeconds?":S":"")+" K")}Object.defineProperty(t.config,"minDate",{get:function(){return t.config._minDate},set:zt("min")}),Object.defineProperty(t.config,"maxDate",{get:function(){return t.config._maxDate},set:zt("max")});var V=function(H){return function(J){t.config[H==="min"?"_minTime":"_maxTime"]=t.parseDate(J,"H:i:S")}};Object.defineProperty(t.config,"minTime",{get:function(){return t.config._minTime},set:V("min")}),Object.defineProperty(t.config,"maxTime",{get:function(){return t.config._maxTime},set:V("max")}),i.mode==="time"&&(t.config.noCalendar=!0,t.config.enableTime=!0),Object.assign(t.config,s,i);for(var N=0;N<n.length;N++)t.config[n[N]]=t.config[n[N]]===!0||t.config[n[N]]==="true";Xa.filter(function(H){return t.config[H]!==void 0}).forEach(function(H){t.config[H]=$a(t.config[H]||[]).map(g)}),t.isMobile=!t.config.disableMobile&&!t.config.inline&&t.config.mode==="single"&&!t.config.disable.length&&!t.config.enable&&!t.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var N=0;N<t.config.plugins.length;N++){var O=t.config.plugins[N](t)||{};for(var I in O)Xa.indexOf(I)>-1?t.config[I]=$a(O[I]).map(g).concat(t.config[I]):typeof i[I]>"u"&&(t.config[I]=O[I])}i.altInputClass||(t.config.altInputClass=ve().className+" "+t.config.altInputClass),Q("onParseConfig")}function ve(){return t.config.wrap?a.querySelector("[data-input]"):a}function bt(){typeof t.config.locale!="object"&&typeof mt.l10ns[t.config.locale]>"u"&&t.config.errorHandler(new Error("flatpickr: invalid locale "+t.config.locale)),t.l10n=Yt(Yt({},mt.l10ns.default),typeof t.config.locale=="object"?t.config.locale:t.config.locale!=="default"?mt.l10ns[t.config.locale]:void 0),Qe.D="("+t.l10n.weekdays.shorthand.join("|")+")",Qe.l="("+t.l10n.weekdays.longhand.join("|")+")",Qe.M="("+t.l10n.months.shorthand.join("|")+")",Qe.F="("+t.l10n.months.longhand.join("|")+")",Qe.K="("+t.l10n.amPM[0]+"|"+t.l10n.amPM[1]+"|"+t.l10n.amPM[0].toLowerCase()+"|"+t.l10n.amPM[1].toLowerCase()+")";var n=Yt(Yt({},r),JSON.parse(JSON.stringify(a.dataset||{})));n.time_24hr===void 0&&mt.defaultConfig.time_24hr===void 0&&(t.config.time_24hr=t.l10n.time_24hr),t.formatDate=Si(t),t.parseDate=ai({config:t.config,l10n:t.l10n})}function ce(n){if(typeof t.config.position=="function")return void t.config.position(t,n);if(t.calendarContainer!==void 0){Q("onPreCalendarPosition");var i=n||t._positionElement,s=Array.prototype.reduce.call(t.calendarContainer.children,function(Ye,Vt){return Ye+Vt.offsetHeight},0),m=t.calendarContainer.offsetWidth,D=t.config.position.split(" "),C=D[0],V=D.length>1?D[1]:null,N=i.getBoundingClientRect(),O=window.innerHeight-N.bottom,I=C==="above"||C!=="below"&&O<s&&N.top>s,H=window.pageYOffset+N.top+(I?-s-2:i.offsetHeight+2);if(Bt(t.calendarContainer,"arrowTop",!I),Bt(t.calendarContainer,"arrowBottom",I),!t.config.inline){var J=window.pageXOffset+N.left,ut=!1,wt=!1;V==="center"?(J-=(m-N.width)/2,ut=!0):V==="right"&&(J-=m-N.width,wt=!0),Bt(t.calendarContainer,"arrowLeft",!ut&&!wt),Bt(t.calendarContainer,"arrowCenter",ut),Bt(t.calendarContainer,"arrowRight",wt);var $t=window.document.body.offsetWidth-(window.pageXOffset+N.right),It=J+m>window.document.body.offsetWidth,Ne=$t+m>window.document.body.offsetWidth;if(Bt(t.calendarContainer,"rightMost",It),!t.config.static)if(t.calendarContainer.style.top=H+"px",!It)t.calendarContainer.style.left=J+"px",t.calendarContainer.style.right="auto";else if(!Ne)t.calendarContainer.style.left="auto",t.calendarContainer.style.right=$t+"px";else{var de=yt();if(de===void 0)return;var fe=window.document.body.offsetWidth,Et=Math.max(0,fe/2-m/2),we=".flatpickr-calendar.centerMost:before",Mt=".flatpickr-calendar.centerMost:after",Fe=de.cssRules.length,ie="{left:"+N.left+"px;right:auto;}";Bt(t.calendarContainer,"rightMost",!1),Bt(t.calendarContainer,"centerMost",!0),de.insertRule(we+","+Mt+ie,Fe),t.calendarContainer.style.left=Et+"px",t.calendarContainer.style.right="auto"}}}}function yt(){for(var n=null,i=0;i<document.styleSheets.length;i++){var s=document.styleSheets[i];if(s.cssRules){try{s.cssRules}catch{continue}n=s;break}}return n??Gt()}function Gt(){var n=document.createElement("style");return document.head.appendChild(n),n.sheet}function qt(){t.config.noCalendar||t.isMobile||(K(),Rt(),G())}function Lt(){t._input.focus(),window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==void 0?setTimeout(t.close,0):t.close()}function ne(n){n.preventDefault(),n.stopPropagation();var i=function(H){return H.classList&&H.classList.contains("flatpickr-day")&&!H.classList.contains("flatpickr-disabled")&&!H.classList.contains("notAllowed")},s=ki(re(n),i);if(s!==void 0){var m=s,D=t.latestSelectedDateObj=new Date(m.dateObj.getTime()),C=(D.getMonth()<t.currentMonth||D.getMonth()>t.currentMonth+t.config.showMonths-1)&&t.config.mode!=="range";if(t.selectedDateElem=m,t.config.mode==="single")t.selectedDates=[D];else if(t.config.mode==="multiple"){var V=Dt(D);V?t.selectedDates.splice(parseInt(V),1):t.selectedDates.push(D)}else t.config.mode==="range"&&(t.selectedDates.length===2&&t.clear(!1,!1),t.latestSelectedDateObj=D,t.selectedDates.push(D),oe(D,t.selectedDates[0],!0)!==0&&t.selectedDates.sort(function(H,J){return H.getTime()-J.getTime()}));if(M(),C){var N=t.currentYear!==D.getFullYear();t.currentYear=D.getFullYear(),t.currentMonth=D.getMonth(),N&&(Q("onYearChange"),K()),Q("onMonthChange")}if(Rt(),G(),dt(),!C&&t.config.mode!=="range"&&t.config.showMonths===1?W(m):t.selectedDateElem!==void 0&&t.hourElement===void 0&&t.selectedDateElem&&t.selectedDateElem.focus(),t.hourElement!==void 0&&t.hourElement!==void 0&&t.hourElement.focus(),t.config.closeOnSelect){var O=t.config.mode==="single"&&!t.config.enableTime,I=t.config.mode==="range"&&t.selectedDates.length===2&&!t.config.enableTime;(O||I)&&Lt()}R()}}var xt={locale:[bt,Ht],showMonths:[et,_,$],minDate:[x],maxDate:[x],positionElement:[Zt],clickOpens:[function(){t.config.clickOpens===!0?(A(t._input,"focus",t.open),A(t._input,"click",t.open)):(t._input.removeEventListener("focus",t.open),t._input.removeEventListener("click",t.open))}]};function be(n,i){if(n!==null&&typeof n=="object"){Object.assign(t.config,n);for(var s in n)xt[s]!==void 0&&xt[s].forEach(function(m){return m()})}else t.config[n]=i,xt[n]!==void 0?xt[n].forEach(function(m){return m()}):Xa.indexOf(n)>-1&&(t.config[n]=$a(i));t.redraw(),dt(!0)}function ye(n,i){var s=[];if(n instanceof Array)s=n.map(function(m){return t.parseDate(m,i)});else if(n instanceof Date||typeof n=="number")s=[t.parseDate(n,i)];else if(typeof n=="string")switch(t.config.mode){case"single":case"time":s=[t.parseDate(n,i)];break;case"multiple":s=n.split(t.config.conjunction).map(function(m){return t.parseDate(m,i)});break;case"range":s=n.split(t.l10n.rangeSeparator).map(function(m){return t.parseDate(m,i)});break}else t.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(n)));t.selectedDates=t.config.allowInvalidPreload?s:s.filter(function(m){return m instanceof Date&&ct(m,!1)}),t.config.mode==="range"&&t.selectedDates.sort(function(m,D){return m.getTime()-D.getTime()})}function Ie(n,i,s){if(i===void 0&&(i=!1),s===void 0&&(s=t.config.dateFormat),n!==0&&!n||n instanceof Array&&n.length===0)return t.clear(i);ye(n,s),t.latestSelectedDateObj=t.selectedDates[t.selectedDates.length-1],t.redraw(),x(void 0,i),k(),t.selectedDates.length===0&&t.clear(!1),dt(i),i&&Q("onChange")}function De(n){return n.slice().map(function(i){return typeof i=="string"||typeof i=="number"||i instanceof Date?t.parseDate(i,void 0,!0):i&&typeof i=="object"&&i.from&&i.to?{from:t.parseDate(i.from,void 0),to:t.parseDate(i.to,void 0)}:i}).filter(function(i){return i})}function jt(){t.selectedDates=[],t.now=t.parseDate(t.config.now)||new Date;var n=t.config.defaultDate||((t.input.nodeName==="INPUT"||t.input.nodeName==="TEXTAREA")&&t.input.placeholder&&t.input.value===t.input.placeholder?null:t.input.value);n&&ye(n,t.config.dateFormat),t._initialDate=t.selectedDates.length>0?t.selectedDates[0]:t.config.minDate&&t.config.minDate.getTime()>t.now.getTime()?t.config.minDate:t.config.maxDate&&t.config.maxDate.getTime()<t.now.getTime()?t.config.maxDate:t.now,t.currentYear=t._initialDate.getFullYear(),t.currentMonth=t._initialDate.getMonth(),t.selectedDates.length>0&&(t.latestSelectedDateObj=t.selectedDates[0]),t.config.minTime!==void 0&&(t.config.minTime=t.parseDate(t.config.minTime,"H:i")),t.config.maxTime!==void 0&&(t.config.maxTime=t.parseDate(t.config.maxTime,"H:i")),t.minDateHasTime=!!t.config.minDate&&(t.config.minDate.getHours()>0||t.config.minDate.getMinutes()>0||t.config.minDate.getSeconds()>0),t.maxDateHasTime=!!t.config.maxDate&&(t.config.maxDate.getHours()>0||t.config.maxDate.getMinutes()>0||t.config.maxDate.getSeconds()>0)}function Jt(){if(t.input=ve(),!t.input){t.config.errorHandler(new Error("Invalid input element specified"));return}t.input._type=t.input.type,t.input.type="text",t.input.classList.add("flatpickr-input"),t._input=t.input,t.config.altInput&&(t.altInput=rt(t.input.nodeName,t.config.altInputClass),t._input=t.altInput,t.altInput.placeholder=t.input.placeholder,t.altInput.disabled=t.input.disabled,t.altInput.required=t.input.required,t.altInput.tabIndex=t.input.tabIndex,t.altInput.type="text",t.input.setAttribute("type","hidden"),!t.config.static&&t.input.parentNode&&t.input.parentNode.insertBefore(t.altInput,t.input.nextSibling)),t.config.allowInput||t._input.setAttribute("readonly","readonly"),Zt()}function Zt(){t._positionElement=t.config.positionElement||t._input}function Qt(){var n=t.config.enableTime?t.config.noCalendar?"time":"datetime-local":"date";t.mobileInput=rt("input",t.input.className+" flatpickr-mobile"),t.mobileInput.tabIndex=1,t.mobileInput.type=n,t.mobileInput.disabled=t.input.disabled,t.mobileInput.required=t.input.required,t.mobileInput.placeholder=t.input.placeholder,t.mobileFormatStr=n==="datetime-local"?"Y-m-d\\TH:i:S":n==="date"?"Y-m-d":"H:i:S",t.selectedDates.length>0&&(t.mobileInput.defaultValue=t.mobileInput.value=t.formatDate(t.selectedDates[0],t.mobileFormatStr)),t.config.minDate&&(t.mobileInput.min=t.formatDate(t.config.minDate,"Y-m-d")),t.config.maxDate&&(t.mobileInput.max=t.formatDate(t.config.maxDate,"Y-m-d")),t.input.getAttribute("step")&&(t.mobileInput.step=String(t.input.getAttribute("step"))),t.input.type="hidden",t.altInput!==void 0&&(t.altInput.type="hidden");try{t.input.parentNode&&t.input.parentNode.insertBefore(t.mobileInput,t.input.nextSibling)}catch{}A(t.mobileInput,"change",function(i){t.setDate(re(i).value,!1,t.mobileFormatStr),Q("onChange"),Q("onClose")})}function ke(n){if(t.isOpen===!0)return t.close();t.open(n)}function Q(n,i){if(t.config!==void 0){var s=t.config[n];if(s!==void 0&&s.length>0)for(var m=0;s[m]&&m<s.length;m++)s[m](t.selectedDates,t.input.value,t,i);n==="onChange"&&(t.input.dispatchEvent(pe("change")),t.input.dispatchEvent(pe("input")))}}function pe(n){var i=document.createEvent("Event");return i.initEvent(n,!0,!0),i}function Dt(n){for(var i=0;i<t.selectedDates.length;i++){var s=t.selectedDates[i];if(s instanceof Date&&oe(s,n)===0)return""+i}return!1}function Se(n){return t.config.mode!=="range"||t.selectedDates.length<2?!1:oe(n,t.selectedDates[0])>=0&&oe(n,t.selectedDates[1])<=0}function Rt(){t.config.noCalendar||t.isMobile||!t.monthNav||(t.yearElements.forEach(function(n,i){var s=new Date(t.currentYear,t.currentMonth,1);s.setMonth(t.currentMonth+i),t.config.showMonths>1||t.config.monthSelectorType==="static"?t.monthElements[i].textContent=ga(s.getMonth(),t.config.shorthandCurrentMonth,t.l10n)+" ":t.monthsDropdownContainer.value=s.getMonth().toString(),n.value=s.getFullYear().toString()}),t._hidePrevMonthArrow=t.config.minDate!==void 0&&(t.currentYear===t.config.minDate.getFullYear()?t.currentMonth<=t.config.minDate.getMonth():t.currentYear<t.config.minDate.getFullYear()),t._hideNextMonthArrow=t.config.maxDate!==void 0&&(t.currentYear===t.config.maxDate.getFullYear()?t.currentMonth+1>t.config.maxDate.getMonth():t.currentYear>t.config.maxDate.getFullYear()))}function ae(n){var i=n||(t.config.altInput?t.config.altFormat:t.config.dateFormat);return t.selectedDates.map(function(s){return t.formatDate(s,i)}).filter(function(s,m,D){return t.config.mode!=="range"||t.config.enableTime||D.indexOf(s)===m}).join(t.config.mode!=="range"?t.config.conjunction:t.l10n.rangeSeparator)}function dt(n){n===void 0&&(n=!0),t.mobileInput!==void 0&&t.mobileFormatStr&&(t.mobileInput.value=t.latestSelectedDateObj!==void 0?t.formatDate(t.latestSelectedDateObj,t.mobileFormatStr):""),t.input.value=ae(t.config.dateFormat),t.altInput!==void 0&&(t.altInput.value=ae(t.config.altFormat)),n!==!1&&Q("onValueUpdate")}function Ae(n){var i=re(n),s=t.prevMonthNav.contains(i),m=t.nextMonthNav.contains(i);s||m?ft(s?-1:1):t.yearElements.indexOf(i)>=0?i.select():i.classList.contains("arrowUp")?t.changeYear(t.currentYear+1):i.classList.contains("arrowDown")&&t.changeYear(t.currentYear-1)}function Xt(n){n.preventDefault();var i=n.type==="keydown",s=re(n),m=s;t.amPM!==void 0&&s===t.amPM&&(t.amPM.textContent=t.l10n.amPM[ue(t.amPM.textContent===t.l10n.amPM[0])]);var D=parseFloat(m.getAttribute("min")),C=parseFloat(m.getAttribute("max")),V=parseFloat(m.getAttribute("step")),N=parseInt(m.value,10),O=n.delta||(i?n.which===38?1:-1:0),I=N+V*O;if(typeof m.value<"u"&&m.value.length===2){var H=m===t.hourElement,J=m===t.minuteElement;I<D?(I=C+I+ue(!H)+(ue(H)&&ue(!t.amPM)),J&&F(void 0,-1,t.hourElement)):I>C&&(I=m===t.hourElement?I-C-ue(!t.amPM):D,J&&F(void 0,1,t.hourElement)),t.amPM&&H&&(V===1?I+N===23:Math.abs(I-N)>V)&&(t.amPM.textContent=t.l10n.amPM[ue(t.amPM.textContent===t.l10n.amPM[0])]),m.value=ee(I)}}return p(),t}function hn(a,r){for(var t=Array.prototype.slice.call(a).filter(function(g){return g instanceof HTMLElement}),c=[],p=0;p<t.length;p++){var f=t[p];try{if(f.getAttribute("data-fp-omit")!==null)continue;f._flatpickr!==void 0&&(f._flatpickr.destroy(),f._flatpickr=void 0),f._flatpickr=qi(f,r||{}),c.push(f._flatpickr)}catch(g){console.error(g)}}return c.length===1?c[0]:c}typeof HTMLElement<"u"&&typeof HTMLCollection<"u"&&typeof NodeList<"u"&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(a){return hn(this,a)},HTMLElement.prototype.flatpickr=function(a){return hn([this],a)});var mt=function(a,r){return typeof a=="string"?hn(window.document.querySelectorAll(a),r):a instanceof Node?hn([a],r):hn(a,r)};mt.defaultConfig={};mt.l10ns={en:Yt({},_n),default:Yt({},_n)};mt.localize=function(a){mt.l10ns.default=Yt(Yt({},mt.l10ns.default),a)};mt.setDefaults=function(a){mt.defaultConfig=Yt(Yt({},mt.defaultConfig),a)};mt.parseDate=ai({});mt.formatDate=Si({});mt.compareDates=oe;typeof jQuery<"u"&&typeof jQuery.fn<"u"&&(jQuery.fn.flatpickr=function(a){return hn(this,a)});Date.prototype.fp_incr=function(a){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof a=="string"?parseInt(a,10):a))};typeof window<"u"&&(window.flatpickr=mt);function ha(a,r,t){var c=[];for(const p in a)if(a[p]==!0){let f=r.find(g=>g.id==p);c.push(f)}t(c)}function le(a,r){return r.map(c=>c[a]==-127?NaN:c[a])}function Ji(a){let r=a.split("T")[0],t=r.split("-")[0];return Number(t)+1+"-"+r.split("-")[1]+"-"+r.split("-")[2]+"T"+a.split("T")[1]}function Ai(a,r){return r.filter(c=>{if(c.sid==a)return c})}async function ri(a,r,t,c,p){var f=[],g=[];for(let Y of r){var _=new URLSearchParams({fromDate:a[0],toDate:a[1],deviceMac:Y.mac});let M=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${_.toString()}`)).json();p.forEach(k=>{var z=Cn(k);if(k!="h"){var T=M.filter(P=>P.type===k);if(T){var A={x:le("ts",T),y:le("val",T),name:Y.description+z,type:"scatter"};f.push(A)}}else for(var R=M.filter(P=>P.type===k),Z=M.filter(P=>P.type==="t"),x=le("val",Z),U=[],F=[],S=0;S<3;S++){U.push(Ai(S+2,R)),F.push(Ni(x,U[S]));var A={x:le("ts",U[S]),y:F[S],name:Y.description+" "+(S+1)+z,type:"scatter"};f.push(A)}})}for(var y=0;y<f.length;y++)g.push(y);t&&g&&f&&t.animate(c,{data:f,traces:g,layout:{xaxis:{range:[a[0],a[1]]}}},{transition:{duration:1e3,easing:"cubic-in-out"},frame:{duration:1e3}})}function Cn(a){return a=="t"?" - Temp. solo":a=="tar"?" - Temp. ar":a=="h"?"":a=="b"?" - Bateria":" - Desconhecido"}function Ni(a,r){for(var t=le("val",r),c=[],p=0;p<t.length;p++){var f=t[p],g=a[p];f>=0&&f<1e3?c.push(Math.abs(-20*(f/1e3*(1+.018*(25-g))-.55))):f>=1e3&&f<8e3?c.push(Math.abs((-3.213*(f/1e3)-4.093)/(1-.009733*(f/1e3)-.01205*g))):f>=8e3?c.push(Math.abs(-2.246-5.239*(f/1e3)*(1+.018*(g-24))-.06756*Math.pow(f/1e3,2)*Math.pow(1+.018*(g-24),2))):(console.log("Error"),c.push(null))}return c}function Zi(a){let r,t,c,p,f,g,_,y,Y,w,M,k,z,T,A,R,Z,x,U,F,S,P,W,B,j,q,X;return{c(){r=o(`



`),t=h("li"),c=o(`
	`),p=h("div"),f=o(`
		`),g=h("div"),_=o(`
			`),y=h("div"),Y=o(`
				`),w=h("h3"),M=o("MEASUREMENTS TEMPERATURE"),k=o(`
			`),z=o(`
			`),T=h("div"),A=o(`				
				`),R=h("button"),Z=o("Compare"),x=o(`
				`),U=h("input"),F=o(`
		`),S=o(`
	`),P=o(`
	`),W=h("div"),B=At(" Plotly "),j=o(`
`),this.h()},l(G){r=l(G,`



`),t=v(G,"LI",{class:!0});var K=b(t);c=l(K,`
	`),p=v(K,"DIV",{class:!0});var tt=b(p);f=l(tt,`
		`),g=v(tt,"DIV",{class:!0});var et=b(g);_=l(et,`
			`),y=v(et,"DIV",{class:!0});var lt=b(y);Y=l(lt,`
				`),w=v(lt,"H3",{class:!0});var st=b(w);M=l(st,"MEASUREMENTS TEMPERATURE"),st.forEach(u),k=l(lt,`
			`),lt.forEach(u),z=l(et,`
			`),T=v(et,"DIV",{class:!0});var $=b(T);A=l($,`				
				`),R=v($,"BUTTON",{title:!0,class:!0});var Ht=b(R);Z=l(Ht,"Compare"),Ht.forEach(u),x=l($,`
				`),U=v($,"INPUT",{type:!0,id:!0,class:!0}),$.forEach(u),F=l(et,`
		`),et.forEach(u),S=l(tt,`
	`),tt.forEach(u),P=l(K,`
	`),W=v(K,"DIV",{class:!0});var at=b(W);B=Nt(at," Plotly "),at.forEach(u),j=l(K,`
`),K.forEach(u),this.h()},h(){d(w,"class","text-base font-semibold leading-6"),d(y,"class","ml-4 mt-2"),d(R,"title","Compare with same period last year"),d(R,"class","rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),d(U,"type","text"),d(U,"id","flatPickrTemp"),d(U,"class","h-10 w-60 text-sm text-gray-500"),d(T,"class","ml-4 mt-2 flex-shrink-0"),d(g,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),d(p,"class","h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6"),d(W,"class","h-[40vh] w-full"),d(t,"class","col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow")},m(G,K){it(G,r,K),it(G,t,K),e(t,c),e(t,p),e(p,f),e(p,g),e(g,_),e(g,y),e(y,Y),e(y,w),e(w,M),e(y,k),e(g,z),e(g,T),e(T,A),e(T,R),e(R,Z),e(T,x),e(T,U),a[8](U),e(g,F),e(p,S),e(t,P),e(t,W),e(W,B),a[9](W),e(t,j),q||(X=In(R,"click",a[2]),q=!0)},p:Pt,i:Pt,o:Pt,d(G){G&&u(r),G&&u(t),a[8](null),a[9](null),q=!1,X()}}}function Qi(a,r,t){let c;Mn(a,Xe,F=>t(7,c=F));let{devices:p}=r,f,g,_,y,Y=["t","tar"],w=[],M;vn.subscribe(F=>{t(5,M=F)});let k,z=!1;Tn(async()=>{t(4,f=(await va(()=>import("./plotly.fc08f43a.js").then(F=>F.p),["./plotly.fc08f43a.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default),t(6,k=mt(_,{mode:"range",defaultDate:[M[0],M[1]],onClose(F){vn.set(F.map(S=>this.formatDate(S,"Y-m-d")))}}))});async function T(F){w=F;var S=[];for(let B of F){y=new URLSearchParams({fromDate:M[0],toDate:M[1],deviceMac:B.mac});let q=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${y.toString()}`)).json();Y.forEach(X=>{var G=Cn(X),K=q.filter(et=>et.type===X),tt={x:le("ts",K),y:le("val",K),name:B.description+G,type:"scatter"};S.push(tt)})}var P={dragmode:"pan",legend:{orientation:"h",xaxis:{range:[M[0],M[1]],type:"date"}},shapes:[{type:"rect",xref:"paper",y0:20,y1:30,x0:0,x1:1,fillcolor:"#d3d3d3",opacity:.3,line:{width:0}}],yaxis:{title:{text:"Temperature (ºC)",font:{family:"",size:12,color:"#7f7f7f"}}}};let W={responsive:!0,displaylogo:!1,scrollZoom:!0};S&&f.newPlot(g,S,P,W)}function A(F){k.setDate(F,!1),w&&ii&&f&&z==!0?ri(F,w,f,g,Y):(z=!0,T(p))}async function R(F){let P=g.data.map((j,q)=>{if(j.compare==!0)return q}).filter(j=>j>=0);if(P.length>0)f.deleteTraces(g,P);else{w=F;var W=new Date(M[0]),B=new Date(M[1]);W.setFullYear(W.getFullYear()-1),B.setFullYear(B.getFullYear()-1);for(let j of F){y=new URLSearchParams({fromDate:W.toISOString().split("T")[0],toDate:B.toISOString().split("T")[0],deviceMac:j.mac});let X=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${y.toString()}`)).json();Y.forEach(G=>{var K=Cn(G),tt=X.filter($=>$.type===G),et=le("ts",tt),st={x:et.map($=>Ji($)),y:le("val",tt),name:"(C) "+j.description+K,type:"scatter",opacity:.2,compare:!0};f.addTraces(g,st)})}}}async function Z(){ha(c,p,R)}function x(F){$e[F?"unshift":"push"](()=>{_=F,t(1,_)})}function U(F){$e[F?"unshift":"push"](()=>{g=F,t(0,g)})}return a.$$set=F=>{"devices"in F&&t(3,p=F.devices)},a.$$.update=()=>{a.$$.dirty&152&&f&&ha(c,p,T),a.$$.dirty&112&&f&&k&&A(M)},[g,_,Z,p,f,M,k,c,x,U]}class Xi extends bn{constructor(r){super(),yn(this,r,Qi,Zi,Dn,{devices:3})}}function $i(a){let r,t,c,p,f,g,_,y,Y,w,M,k,z,T,A,R,Z,x,U,F,S,P,W;return{c(){r=o(`



`),t=h("li"),c=o(`
	`),p=h("div"),f=o(`
		`),g=h("div"),_=o(`
			`),y=h("div"),Y=o(`
				`),w=h("h3"),M=o("MEASUREMENTS HUMIDITY"),k=o(`
			`),z=o(`
			`),T=h("div"),A=o(`
				`),R=h("input"),Z=o(`
			`),x=o(`
		`),U=o(`
	`),F=o(`
	`),S=h("div"),P=At(" Plotly "),W=o(`
`),this.h()},l(B){r=l(B,`



`),t=v(B,"LI",{class:!0});var j=b(t);c=l(j,`
	`),p=v(j,"DIV",{class:!0});var q=b(p);f=l(q,`
		`),g=v(q,"DIV",{class:!0});var X=b(g);_=l(X,`
			`),y=v(X,"DIV",{class:!0});var G=b(y);Y=l(G,`
				`),w=v(G,"H3",{class:!0});var K=b(w);M=l(K,"MEASUREMENTS HUMIDITY"),K.forEach(u),k=l(G,`
			`),G.forEach(u),z=l(X,`
			`),T=v(X,"DIV",{class:!0});var tt=b(T);A=l(tt,`
				`),R=v(tt,"INPUT",{type:!0,id:!0,class:!0}),Z=l(tt,`
			`),tt.forEach(u),x=l(X,`
		`),X.forEach(u),U=l(q,`
	`),q.forEach(u),F=l(j,`
	`),S=v(j,"DIV",{class:!0});var et=b(S);P=Nt(et," Plotly "),et.forEach(u),W=l(j,`
`),j.forEach(u),this.h()},h(){d(w,"class","text-base font-semibold leading-6"),d(y,"class","ml-4 mt-2"),d(R,"type","text"),d(R,"id","flatPickrTemp"),d(R,"class","h-10 w-60 text-sm text-gray-500"),d(T,"class","ml-4 mt-2 flex-shrink-0"),d(g,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),d(p,"class","h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6"),d(S,"class","h-[40vh] w-full"),d(t,"class","col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow")},m(B,j){it(B,r,j),it(B,t,j),e(t,c),e(t,p),e(p,f),e(p,g),e(g,_),e(g,y),e(y,Y),e(y,w),e(w,M),e(y,k),e(g,z),e(g,T),e(T,A),e(T,R),a[7](R),e(T,Z),e(g,x),e(p,U),e(t,F),e(t,S),e(S,P),a[8](S),e(t,W)},p:Pt,i:Pt,o:Pt,d(B){B&&u(r),B&&u(t),a[7](null),a[8](null)}}}function tr(a,r,t){let c;Mn(a,Xe,x=>t(6,c=x));let{devices:p}=r,f,g,_,y,Y=["h"],w=[],M;vn.subscribe(x=>{t(4,M=x)});let k,z=!1;Tn(async()=>{t(3,f=(await va(()=>import("./plotly.fc08f43a.js").then(x=>x.p),["./plotly.fc08f43a.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default),t(5,k=mt(_,{mode:"range",defaultDate:[M[0],M[1]],onClose(x){vn.set(x.map(U=>this.formatDate(U,"Y-m-d")))}}))});async function T(x){w=x;var U=[];for(let P of x){y=new URLSearchParams({fromDate:M[0],toDate:M[1],deviceMac:P.mac});let B=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${y.toString()}`)).json();Y.forEach(j=>{for(var q=Cn(j),X=B.filter($=>$.type===j),G=B.filter($=>$.type==="t"),K=le("val",G),tt=[],et=[],lt=[],st=0;st<3;st++){tt.push(Ai(st+2,X)),et.push(Ni(K,tt[st]));var lt={x:le("ts",tt[st]),y:et[st],name:P.description+" "+(st+1)+q,type:"scatter"};U.push(lt)}})}var F={dragmode:"pan",legend:{orientation:"h",xaxis:{range:[M[0],M[1]],type:"date"}},yaxis:{title:{text:"Water Potencial (cbar)",font:{family:"",size:12,color:"#7f7f7f"}}}};let S={responsive:!0,displaylogo:!1,scrollZoom:!0};U&&f.newPlot(g,U,F,S)}function A(x){k.setDate(x,!1),w&&ii&&f&&z==!0?ri(x,w,f,g,Y):(z=!0,T(p))}function R(x){$e[x?"unshift":"push"](()=>{_=x,t(1,_)})}function Z(x){$e[x?"unshift":"push"](()=>{g=x,t(0,g)})}return a.$$set=x=>{"devices"in x&&t(2,p=x.devices)},a.$$.update=()=>{a.$$.dirty&76&&f&&ha(c,p,T),a.$$.dirty&56&&f&&k&&A(M)},[g,_,p,f,M,k,c,R,Z]}class er extends bn{constructor(r){super(),yn(this,r,tr,$i,Dn,{devices:2})}}function nr(a){let r,t,c,p,f,g,_,y,Y,w,M,k,z,T,A,R,Z,x,U,F,S,P,W;return{c(){r=o(`



`),t=h("li"),c=o(`
	`),p=h("div"),f=o(`
		`),g=h("div"),_=o(`
			`),y=h("div"),Y=o(`
				`),w=h("h3"),M=o("MEASUREMENTS BATTERY"),k=o(`
			`),z=o(`
			`),T=h("div"),A=o(`
				`),R=h("input"),Z=o(`
			`),x=o(`
		`),U=o(`
	`),F=o(`
	`),S=h("div"),P=At(" Plotly "),W=o(`
`),this.h()},l(B){r=l(B,`



`),t=v(B,"LI",{class:!0});var j=b(t);c=l(j,`
	`),p=v(j,"DIV",{class:!0});var q=b(p);f=l(q,`
		`),g=v(q,"DIV",{class:!0});var X=b(g);_=l(X,`
			`),y=v(X,"DIV",{class:!0});var G=b(y);Y=l(G,`
				`),w=v(G,"H3",{class:!0});var K=b(w);M=l(K,"MEASUREMENTS BATTERY"),K.forEach(u),k=l(G,`
			`),G.forEach(u),z=l(X,`
			`),T=v(X,"DIV",{class:!0});var tt=b(T);A=l(tt,`
				`),R=v(tt,"INPUT",{type:!0,id:!0,class:!0}),Z=l(tt,`
			`),tt.forEach(u),x=l(X,`
		`),X.forEach(u),U=l(q,`
	`),q.forEach(u),F=l(j,`
	`),S=v(j,"DIV",{class:!0});var et=b(S);P=Nt(et," Plotly "),et.forEach(u),W=l(j,`
`),j.forEach(u),this.h()},h(){d(w,"class","text-base font-semibold leading-6"),d(y,"class","ml-4 mt-2"),d(R,"type","text"),d(R,"id","flatPickrTemp"),d(R,"class","h-10 w-60 text-sm text-gray-500"),d(T,"class","ml-4 mt-2 flex-shrink-0"),d(g,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),d(p,"class","h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6"),d(S,"class","h-[40vh] w-full"),d(t,"class","col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow")},m(B,j){it(B,r,j),it(B,t,j),e(t,c),e(t,p),e(p,f),e(p,g),e(g,_),e(g,y),e(y,Y),e(y,w),e(w,M),e(y,k),e(g,z),e(g,T),e(T,A),e(T,R),a[7](R),e(T,Z),e(g,x),e(p,U),e(t,F),e(t,S),e(S,P),a[8](S),e(t,W)},p:Pt,i:Pt,o:Pt,d(B){B&&u(r),B&&u(t),a[7](null),a[8](null)}}}function ar(a,r,t){let c;Mn(a,Xe,x=>t(6,c=x));let{devices:p}=r,f,g,_,y,Y=["b"],w=[],M;vn.subscribe(x=>{t(4,M=x)});let k,z=!1;Tn(async()=>{t(3,f=(await va(()=>import("./plotly.fc08f43a.js").then(x=>x.p),["./plotly.fc08f43a.js","./_commonjsHelpers.725317a4.js"],import.meta.url)).default),t(5,k=mt(_,{mode:"range",defaultDate:[M[0],M[1]],onClose(x){vn.set(x.map(U=>this.formatDate(U,"Y-m-d")))}}))});async function T(x){w=x;var U=[];for(let P of x){y=new URLSearchParams({fromDate:M[0],toDate:M[1],deviceMac:P.mac});let B=await(await fetch(`https://api.2adapt.pt/v1/get-measurements?${y.toString()}`)).json();Y.forEach(j=>{var q=Cn(j),X=B.filter(K=>K.type===j),G={x:le("ts",X),y:le("val",X),name:P.description+q,type:"scatter"};U.push(G)})}var F={dragmode:"pan",legend:{orientation:"h",xaxis:{range:[M[0],M[1]],type:"date"}},yaxis:{title:{text:"Battery (unit)",font:{family:"",size:12,color:"#7f7f7f"}}}};let S={responsive:!0,displaylogo:!1,scrollZoom:!0};U&&f.newPlot(g,U,F,S)}function A(x){k.setDate(x,!1),w&&ii&&f&&z==!0?ri(x,w,f,g,Y):(z=!0,T(p))}function R(x){$e[x?"unshift":"push"](()=>{_=x,t(1,_)})}function Z(x){$e[x?"unshift":"push"](()=>{g=x,t(0,g)})}return a.$$set=x=>{"devices"in x&&t(2,p=x.devices)},a.$$.update=()=>{a.$$.dirty&76&&f&&ha(c,p,T),a.$$.dirty&56&&f&&k&&A(M)},[g,_,p,f,M,k,c,R,Z]}class ir extends bn{constructor(r){super(),yn(this,r,ar,nr,Dn,{devices:2})}}function wi(a,r,t){const c=a.slice();return c[10]=r[t],c[11]=r,c[12]=t,c}function Ei(a){let r,t,c,p,f,g,_,y,Y;return{c(){r=h("div"),t=o(`
						`),c=h("button"),p=pa("svg"),f=pa("path"),g=o(`
							NEW`),_=o(`
					`),this.h()},l(w){r=v(w,"DIV",{class:!0});var M=b(r);t=l(M,`
						`),c=v(M,"BUTTON",{type:!0,class:!0});var k=b(c);p=ma(k,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var z=b(p);f=ma(z,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),b(f).forEach(u),z.forEach(u),g=l(k,`
							NEW`),k.forEach(u),_=l(M,`
					`),M.forEach(u),this.h()},h(){d(f,"fill-rule","evenodd"),d(f,"d","M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"),d(f,"clip-rule","evenodd"),d(p,"xmlns","http://www.w3.org/2000/svg"),d(p,"viewBox","0 0 24 24"),d(p,"fill","currentColor"),d(p,"class","h-5 w-5 pr-1"),d(c,"type","button"),d(c,"class","relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"),d(r,"class","ml-4 mt-2 flex-shrink-0")},m(w,M){it(w,r,M),e(r,t),e(r,c),e(c,p),e(p,f),e(c,g),e(r,_),y||(Y=In(c,"click",a[5]),y=!0)},p:Pt,d(w){w&&u(r),y=!1,Y()}}}function xi(a){let r,t,c,p,f;return{c(){r=h("button"),t=o(`
								`),c=pa("svg"),p=pa("path"),f=o(`
							`),this.h()},l(g){r=v(g,"BUTTON",{class:!0});var _=b(r);t=l(_,`
								`),c=ma(_,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var y=b(c);p=ma(y,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),b(p).forEach(u),y.forEach(u),f=l(_,`
							`),_.forEach(u),this.h()},h(){d(p,"stroke-linecap","round"),d(p,"stroke-linejoin","round"),d(p,"d","M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"),d(c,"xmlns","http://www.w3.org/2000/svg"),d(c,"fill","none"),d(c,"viewBox","0 0 24 24"),d(c,"stroke-width","1.5"),d(c,"stroke","currentColor"),d(c,"class","h-6 w-6"),d(r,"class","text-sm leading-6")},m(g,_){it(g,r,_),e(r,t),e(r,c),e(c,p),e(r,f)},d(g){g&&u(r)}}}function Mi(a){let r,t,c,p,f,g,_=a[10].description+"",y,Y,w,M,k,z,T,A,R=a[10].battery_mode_code+"",Z,x,U,F,S,P,W,B,j=a[10].last_reading_formatted+"",q,X,G,K,tt,et,lt,st,$;function Ht(){a[6].call(K,a[10])}let at=a[1]&&xi();return{c(){r=h("li"),t=o(`
					`),c=h("div"),p=o(`
						`),f=h("p"),g=o(`
							`),y=o(_),Y=o(`
						`),w=o(`
					`),M=o(`
					`),k=h("div"),z=o(`
						`),T=h("p"),A=o(`
							`),Z=o(R),x=o(`
						`),U=o(`
					`),F=o(`
					`),S=h("div"),P=o(`
						`),W=h("p"),B=o(`
							`),q=o(j),X=o(`
						`),G=o(`
						`),K=h("input"),tt=o(`
						`),at&&at.c(),et=o(`
					`),lt=o(`
				`),this.h()},l(ft){r=v(ft,"LI",{class:!0});var ot=b(r);t=l(ot,`
					`),c=v(ot,"DIV",{class:!0});var vt=b(c);p=l(vt,`
						`),f=v(vt,"P",{class:!0});var pt=b(f);g=l(pt,`
							`),y=l(pt,_),Y=l(pt,`
						`),pt.forEach(u),w=l(vt,`
					`),vt.forEach(u),M=l(ot,`
					`),k=v(ot,"DIV",{class:!0});var _t=b(k);z=l(_t,`
						`),T=v(_t,"P",{class:!0});var gt=b(T);A=l(gt,`
							`),Z=l(gt,R),x=l(gt,`
						`),gt.forEach(u),U=l(_t,`
					`),_t.forEach(u),F=l(ot,`
					`),S=v(ot,"DIV",{class:!0});var ht=b(S);P=l(ht,`
						`),W=v(ht,"P",{class:!0});var ct=b(W);B=l(ct,`
							`),q=l(ct,j),X=l(ct,`
						`),ct.forEach(u),G=l(ht,`
						`),K=v(ht,"INPUT",{id:!0,type:!0,class:!0}),tt=l(ht,`
						`),at&&at.l(ht),et=l(ht,`
					`),ht.forEach(u),lt=l(ot,`
				`),ot.forEach(u),this.h()},h(){d(f,"class","text-sm leading-6"),d(c,"class","min-w-0 flex-auto"),d(T,"class","text-sm leading-6"),d(k,"class","min-w-0 flex-auto"),d(W,"class","text-sm leading-6"),d(K,"id","visible-checkbox"),d(K,"type","checkbox"),d(K,"class","h-4 w-4 rounded text-sky-600 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600"),d(S,"class","flex min-w-0 justify-between"),d(r,"class","grid grid-cols-3 gap-4 p-4 text-start")},m(ft,ot){it(ft,r,ot),e(r,t),e(r,c),e(c,p),e(c,f),e(f,g),e(f,y),e(f,Y),e(c,w),e(r,M),e(r,k),e(k,z),e(k,T),e(T,A),e(T,Z),e(T,x),e(k,U),e(r,F),e(r,S),e(S,P),e(S,W),e(W,B),e(W,q),e(W,X),e(S,G),e(S,K),K.checked=a[2][a[10].id],e(S,tt),at&&at.m(S,null),e(S,et),e(r,lt),st||($=In(K,"change",Ht),st=!0)},p(ft,ot){a=ft,ot&1&&_!==(_=a[10].description+"")&&En(y,_),ot&1&&R!==(R=a[10].battery_mode_code+"")&&En(Z,R),ot&1&&j!==(j=a[10].last_reading_formatted+"")&&En(q,j),ot&5&&(K.checked=a[2][a[10].id]),a[1]?at||(at=xi(),at.c(),at.m(S,et)):at&&(at.d(1),at=null)},d(ft){ft&&u(r),at&&at.d(),st=!1,$()}}}function rr(a){let r,t,c,p,f,g,_,y,Y,w,M,k,z,T,A,R,Z,x,U,F,S,P,W,B,j,q,X,G,K,tt,et,lt,st,$,Ht,at,ft,ot,vt,pt,_t,gt,ht,ct,Tt,Ce,Wt,se,Ot,Te,zt,Kt,ve,bt,ce,yt,Gt,qt,Lt,ne,xt=a[0].installation.soilTypeCode+"",be,ye,Ie,De,jt,Jt,Zt,Qt,ke,Q,pe,Dt,Se,Rt,ae=a[0].installation.cropTypeCode+"",dt,Ae,Xt,n,i,s,m,D,C,V,N,O,I,H,J,ut,wt,$t,It,Ne,de,fe,Et,we,Mt,Fe,ie,Ye,Vt,tn,He,je,me,en,Pe,Ee,nn,Re,Ut,an,Oe,ba,ya,Da,wa,Ea,xa,kn,Ma,_a,Ca,Ta,Sn,An,Nn,Pn,On,ge,Ia,Ve,ka,Ue,Sa,Ln,Fn,Yn,Hn,jn,he,Aa,Be,Na,xe,Pa,We,Oa,Me,La,ze,Fa,rn,Ya,Ha,ja,Ke,Ra,Ge,Va,Ua,Ba,Wa,za,Je,Ka,Ga,Rn,Vn,on,qa,oi,Ft=a[1]&&Ei(a),ln=a[0].installation.devices,kt=[];for(let E=0;E<ln.length;E+=1)kt[E]=Mi(wi(a,ln,E));return Ve=new Xi({props:{devices:a[0].installation.devices}}),Ue=new er({props:{devices:a[0].installation.devices}}),Be=new ir({props:{devices:a[0].installation.devices}}),Je=new Ci({props:{props:a[4]}}),{c(){r=o(`



`),t=At("* SUMMARY + DEVICES "),c=o(`
`),p=h("ul"),f=o(`
	`),g=h("li"),_=o(`
		`),y=h("div"),Y=o(`
			`),w=h("div"),M=o(`
				`),k=h("div"),z=o(`
					`),T=h("h3"),A=o("SUMMARY"),R=o(`
				`),Z=o(`
				`),x=At(`<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create new job</button>
				</div>`),U=o(`
			`),F=o(`
		`),S=o(`
		`),P=h("ul"),W=o(`
			`),B=At(` <li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6 font-semibold">Status: Off</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">`),j=o(`
			`),q=At(' Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" '),X=o(`
			`),G=At(`<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
						<span class="sr-only">Use setting</span>`),K=o(`
			`),tt=At(' Enabled: "translate-x-5", Not Enabled: "translate-x-0" '),et=o(`
			`),lt=At(`<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
					</button>
				</div>
			 </li> `),st=o(`
			`),$=h("li"),Ht=o(`
				`),at=h("div"),ft=o(`
					`),ot=h("div"),vt=o(`
						`),pt=h("p"),_t=o("Diagnostics:"),gt=o(`
					`),ht=o(`
				`),ct=o(`
				`),Tt=h("div"),Ce=o(`
					`),Wt=h("button"),se=o("DETAILS"),Ot=o(`
				`),Te=o(`
			`),zt=o(`
			`),Kt=h("li"),ve=o(`
				`),bt=h("div"),ce=o(`
					`),yt=h("div"),Gt=o(`
						`),qt=h("p"),Lt=o("Soil type: "),ne=h("span"),be=o(xt),ye=o(`
					`),Ie=o(`
				`),De=o(`
			`),jt=o(`
			`),Jt=h("li"),Zt=o(`
				`),Qt=h("div"),ke=o(`
					`),Q=h("div"),pe=o(`
						`),Dt=h("p"),Se=o("Crop type: "),Rt=h("span"),dt=o(ae),Ae=o(`
					`),Xt=o(`
				`),n=o(`
			`),i=o(`
		`),s=o(`
	`),m=o(`

	`),D=h("li"),C=o(`
		`),V=h("div"),N=o(`
			`),O=h("div"),I=o(`
				`),H=h("div"),J=o(`
					`),ut=h("h3"),wt=o("DEVICES"),$t=o(`
				`),It=o(`
				`),Ft&&Ft.c(),Ne=o(`
			`),de=o(`
		`),fe=o(`
		`),Et=h("ul"),we=o(`
			`),Mt=h("li"),Fe=o(`
				`),ie=h("div"),Ye=o(`
					`),Vt=h("p"),tn=o(" Description "),He=o(`
				`),je=o(`
				`),me=h("div"),en=o(`
					`),Pe=h("p"),Ee=o(" Battery mode "),nn=o(`
				`),Re=o(`
				`),Ut=h("div"),an=o(`
					`),Oe=h("p"),ba=o(" Last reading "),ya=o(`
				`),Da=o(`
			`),wa=o(`

			`),Ea=At(" START FOR HERE"),xa=o(`
			`);for(let E=0;E<kt.length;E+=1)kt[E].c();kn=o(`
			`),Ma=At("END FOR HERE"),_a=o(`
		`),Ca=o(`
	`),Ta=o(`
`),Sn=o(`
`),An=At("* END SUMMARY + DEVICES "),Nn=o(`

`),Pn=At("* MEASUREMENTS"),On=o(`
`),ge=h("ul"),Ia=o(`
	`),ra(Ve.$$.fragment),ka=o(`
	`),ra(Ue.$$.fragment),Sa=o(`
`),Ln=o(`
`),Fn=At("* END MEASUREMENTS "),Yn=o(`

`),Hn=At("* BATTERY + MAP "),jn=o(`
`),he=h("ul"),Aa=o(`
	`),ra(Be.$$.fragment),Na=o(`
	`),xe=h("li"),Pa=o(`
		`),We=h("div"),Oa=o(`
			`),Me=h("div"),La=o(`
				`),ze=h("div"),Fa=o(`
					`),rn=h("h3"),Ya=o("MAP"),Ha=o(`
				`),ja=o(`
				`),Ke=h("div"),Ra=o(`
					`),Ge=h("button"),Va=o(`
						Open map`),Ua=o(`
				`),Ba=o(`
			`),Wa=o(`
		`),za=o(`
		`),ra(Je.$$.fragment),Ka=o(`
	`),Ga=o(`
`),Rn=o(`
`),Vn=At("* END BATTERY + MAP "),this.h()},l(E){r=l(E,`



`),t=Nt(E,"* SUMMARY + DEVICES "),c=l(E,`
`),p=v(E,"UL",{class:!0});var nt=b(p);f=l(nt,`
	`),g=v(nt,"LI",{class:!0});var te=b(g);_=l(te,`
		`),y=v(te,"DIV",{class:!0});var Ze=b(y);Y=l(Ze,`
			`),w=v(Ze,"DIV",{class:!0});var Le=b(w);M=l(Le,`
				`),k=v(Le,"DIV",{class:!0});var St=b(k);z=l(St,`
					`),T=v(St,"H3",{class:!0});var wn=b(T);A=l(wn,"SUMMARY"),wn.forEach(u),R=l(St,`
				`),St.forEach(u),Z=l(Le,`
				`),x=Nt(Le,`<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create new job</button>
				</div>`),U=l(Le,`
			`),Le.forEach(u),F=l(Ze,`
		`),Ze.forEach(u),S=l(te,`
		`),P=v(te,"UL",{});var Ct=b(P);W=l(Ct,`
			`),B=Nt(Ct,` <li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6 font-semibold">Status: Off</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">`),j=l(Ct,`
			`),q=Nt(Ct,' Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" '),X=l(Ct,`
			`),G=Nt(Ct,`<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
						<span class="sr-only">Use setting</span>`),K=l(Ct,`
			`),tt=Nt(Ct,' Enabled: "translate-x-5", Not Enabled: "translate-x-0" '),et=l(Ct,`
			`),lt=Nt(Ct,`<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
					</button>
				</div>
			 </li> `),st=l(Ct,`
			`),$=v(Ct,"LI",{class:!0});var sn=b($);Ht=l(sn,`
				`),at=v(sn,"DIV",{class:!0});var Un=b(at);ft=l(Un,`
					`),ot=v(Un,"DIV",{class:!0});var Bn=b(ot);vt=l(Bn,`
						`),pt=v(Bn,"P",{class:!0});var li=b(pt);_t=l(li,"Diagnostics:"),li.forEach(u),gt=l(Bn,`
					`),Bn.forEach(u),ht=l(Un,`
				`),Un.forEach(u),ct=l(sn,`
				`),Tt=v(sn,"DIV",{class:!0});var Wn=b(Tt);Ce=l(Wn,`
					`),Wt=v(Wn,"BUTTON",{type:!0,class:!0});var si=b(Wt);se=l(si,"DETAILS"),si.forEach(u),Ot=l(Wn,`
				`),Wn.forEach(u),Te=l(sn,`
			`),sn.forEach(u),zt=l(Ct,`
			`),Kt=v(Ct,"LI",{class:!0});var zn=b(Kt);ve=l(zn,`
				`),bt=v(zn,"DIV",{class:!0});var Kn=b(bt);ce=l(Kn,`
					`),yt=v(Kn,"DIV",{class:!0});var Gn=b(yt);Gt=l(Gn,`
						`),qt=v(Gn,"P",{class:!0});var Ja=b(qt);Lt=l(Ja,"Soil type: "),ne=v(Ja,"SPAN",{class:!0});var ci=b(ne);be=l(ci,xt),ci.forEach(u),Ja.forEach(u),ye=l(Gn,`
					`),Gn.forEach(u),Ie=l(Kn,`
				`),Kn.forEach(u),De=l(zn,`
			`),zn.forEach(u),jt=l(Ct,`
			`),Jt=v(Ct,"LI",{class:!0});var qn=b(Jt);Zt=l(qn,`
				`),Qt=v(qn,"DIV",{class:!0});var Jn=b(Qt);ke=l(Jn,`
					`),Q=v(Jn,"DIV",{class:!0});var Zn=b(Q);pe=l(Zn,`
						`),Dt=v(Zn,"P",{class:!0});var Za=b(Dt);Se=l(Za,"Crop type: "),Rt=v(Za,"SPAN",{class:!0});var di=b(Rt);dt=l(di,ae),di.forEach(u),Za.forEach(u),Ae=l(Zn,`
					`),Zn.forEach(u),Xt=l(Jn,`
				`),Jn.forEach(u),n=l(qn,`
			`),qn.forEach(u),i=l(Ct,`
		`),Ct.forEach(u),s=l(te,`
	`),te.forEach(u),m=l(nt,`

	`),D=v(nt,"LI",{class:!0});var cn=b(D);C=l(cn,`
		`),V=v(cn,"DIV",{class:!0});var Qn=b(V);N=l(Qn,`
			`),O=v(Qn,"DIV",{class:!0});var dn=b(O);I=l(dn,`
				`),H=v(dn,"DIV",{class:!0});var Xn=b(H);J=l(Xn,`
					`),ut=v(Xn,"H3",{class:!0});var fi=b(ut);wt=l(fi,"DEVICES"),fi.forEach(u),$t=l(Xn,`
				`),Xn.forEach(u),It=l(dn,`
				`),Ft&&Ft.l(dn),Ne=l(dn,`
			`),dn.forEach(u),de=l(Qn,`
		`),Qn.forEach(u),fe=l(cn,`
		`),Et=v(cn,"UL",{class:!0});var _e=b(Et);we=l(_e,`
			`),Mt=v(_e,"LI",{class:!0});var qe=b(Mt);Fe=l(qe,`
				`),ie=v(qe,"DIV",{class:!0});var $n=b(ie);Ye=l($n,`
					`),Vt=v($n,"P",{class:!0});var ui=b(Vt);tn=l(ui," Description "),ui.forEach(u),He=l($n,`
				`),$n.forEach(u),je=l(qe,`
				`),me=v(qe,"DIV",{class:!0});var ta=b(me);en=l(ta,`
					`),Pe=v(ta,"P",{class:!0});var pi=b(Pe);Ee=l(pi," Battery mode "),pi.forEach(u),nn=l(ta,`
				`),ta.forEach(u),Re=l(qe,`
				`),Ut=v(qe,"DIV",{class:!0});var ea=b(Ut);an=l(ea,`
					`),Oe=v(ea,"P",{class:!0});var mi=b(Oe);ba=l(mi," Last reading "),mi.forEach(u),ya=l(ea,`
				`),ea.forEach(u),Da=l(qe,`
			`),qe.forEach(u),wa=l(_e,`

			`),Ea=Nt(_e," START FOR HERE"),xa=l(_e,`
			`);for(let Qa=0;Qa<kt.length;Qa+=1)kt[Qa].l(_e);kn=l(_e,`
			`),Ma=Nt(_e,"END FOR HERE"),_a=l(_e,`
		`),_e.forEach(u),Ca=l(cn,`
	`),cn.forEach(u),Ta=l(nt,`
`),nt.forEach(u),Sn=l(E,`
`),An=Nt(E,"* END SUMMARY + DEVICES "),Nn=l(E,`

`),Pn=Nt(E,"* MEASUREMENTS"),On=l(E,`
`),ge=v(E,"UL",{class:!0});var fn=b(ge);Ia=l(fn,`
	`),oa(Ve.$$.fragment,fn),ka=l(fn,`
	`),oa(Ue.$$.fragment,fn),Sa=l(fn,`
`),fn.forEach(u),Ln=l(E,`
`),Fn=Nt(E,"* END MEASUREMENTS "),Yn=l(E,`

`),Hn=Nt(E,"* BATTERY + MAP "),jn=l(E,`
`),he=v(E,"UL",{class:!0});var un=b(he);Aa=l(un,`
	`),oa(Be.$$.fragment,un),Na=l(un,`
	`),xe=v(un,"LI",{class:!0});var pn=b(xe);Pa=l(pn,`
		`),We=v(pn,"DIV",{class:!0});var na=b(We);Oa=l(na,`
			`),Me=v(na,"DIV",{class:!0});var mn=b(Me);La=l(mn,`
				`),ze=v(mn,"DIV",{class:!0});var aa=b(ze);Fa=l(aa,`
					`),rn=v(aa,"H3",{class:!0});var gi=b(rn);Ya=l(gi,"MAP"),gi.forEach(u),Ha=l(aa,`
				`),aa.forEach(u),ja=l(mn,`
				`),Ke=v(mn,"DIV",{class:!0});var ia=b(Ke);Ra=l(ia,`
					`),Ge=v(ia,"BUTTON",{type:!0,class:!0});var hi=b(Ge);Va=l(hi,`
						Open map`),hi.forEach(u),Ua=l(ia,`
				`),ia.forEach(u),Ba=l(mn,`
			`),mn.forEach(u),Wa=l(na,`
		`),na.forEach(u),za=l(pn,`
		`),oa(Je.$$.fragment,pn),Ka=l(pn,`
	`),pn.forEach(u),Ga=l(un,`
`),un.forEach(u),Rn=l(E,`
`),Vn=Nt(E,"* END BATTERY + MAP "),this.h()},h(){d(T,"class","text-base font-semibold leading-6"),d(k,"class","ml-4 mt-2"),d(w,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),d(y,"class","h-24 border-b border-gray-200 bg-white px-4 py-5 sm:px-6"),d(pt,"class","text-sm font-semibold leading-6"),d(ot,"class","min-w-0 flex-auto"),d(at,"class","flex gap-x-4"),d(Wt,"type","button"),d(Wt,"class","rounded-md bg-sky-500 px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"),d(Tt,"class","hidden sm:flex sm:flex-col sm:items-end"),d($,"class","flex justify-between gap-x-6 p-5"),d(ne,"class","font-normal"),d(qt,"class","text-sm font-semibold leading-6"),d(yt,"class","min-w-0 flex-auto"),d(bt,"class","flex gap-x-4"),d(Kt,"class","flex justify-between gap-x-6 p-5"),d(Rt,"class","font-normal"),d(Dt,"class","text-sm font-semibold leading-6"),d(Q,"class","min-w-0 flex-auto"),d(Qt,"class","flex gap-x-4"),d(Jt,"class","flex justify-between gap-x-6 p-5"),d(g,"class","col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center text-stone-500 shadow"),d(ut,"class","text-base font-semibold leading-6"),d(H,"class","ml-4 mt-2"),d(O,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),d(V,"class","h-24 border-b border-gray-200 px-4 py-5 sm:px-6"),d(Vt,"class","text-sm font-semibold leading-6"),d(ie,"class","min-w-0 flex-auto"),d(Pe,"class","text-sm font-semibold leading-6"),d(me,"class","min-w-0 flex-auto"),d(Oe,"class","text-sm font-semibold leading-6"),d(Ut,"class","min-w-0 flex-auto"),d(Mt,"class","grid grid-cols-3 gap-4 p-4 text-start"),d(Et,"class","divide-y divide-dotted divide-gray-100"),d(D,"class","col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"),d(p,"class","grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2"),d(ge,"class","grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2"),d(rn,"class","text-base font-semibold leading-6"),d(ze,"class","ml-4 mt-2"),d(Ge,"type","button"),d(Ge,"class","relative inline-flex items-center rounded-md bg-neutral-50 px-2 py-1 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"),d(Ke,"class","ml-4 mt-2 flex-shrink-0"),d(Me,"class","-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"),d(We,"class","h-24 border-b border-gray-200 px-4 py-5 sm:px-6"),d(xe,"class","col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"),d(he,"class","grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2")},m(E,nt){it(E,r,nt),it(E,t,nt),it(E,c,nt),it(E,p,nt),e(p,f),e(p,g),e(g,_),e(g,y),e(y,Y),e(y,w),e(w,M),e(w,k),e(k,z),e(k,T),e(T,A),e(k,R),e(w,Z),e(w,x),e(w,U),e(y,F),e(g,S),e(g,P),e(P,W),e(P,B),e(P,j),e(P,q),e(P,X),e(P,G),e(P,K),e(P,tt),e(P,et),e(P,lt),e(P,st),e(P,$),e($,Ht),e($,at),e(at,ft),e(at,ot),e(ot,vt),e(ot,pt),e(pt,_t),e(ot,gt),e(at,ht),e($,ct),e($,Tt),e(Tt,Ce),e(Tt,Wt),e(Wt,se),e(Tt,Ot),e($,Te),e(P,zt),e(P,Kt),e(Kt,ve),e(Kt,bt),e(bt,ce),e(bt,yt),e(yt,Gt),e(yt,qt),e(qt,Lt),e(qt,ne),e(ne,be),e(yt,ye),e(bt,Ie),e(Kt,De),e(P,jt),e(P,Jt),e(Jt,Zt),e(Jt,Qt),e(Qt,ke),e(Qt,Q),e(Q,pe),e(Q,Dt),e(Dt,Se),e(Dt,Rt),e(Rt,dt),e(Q,Ae),e(Qt,Xt),e(Jt,n),e(P,i),e(g,s),e(p,m),e(p,D),e(D,C),e(D,V),e(V,N),e(V,O),e(O,I),e(O,H),e(H,J),e(H,ut),e(ut,wt),e(H,$t),e(O,It),Ft&&Ft.m(O,null),e(O,Ne),e(V,de),e(D,fe),e(D,Et),e(Et,we),e(Et,Mt),e(Mt,Fe),e(Mt,ie),e(ie,Ye),e(ie,Vt),e(Vt,tn),e(ie,He),e(Mt,je),e(Mt,me),e(me,en),e(me,Pe),e(Pe,Ee),e(me,nn),e(Mt,Re),e(Mt,Ut),e(Ut,an),e(Ut,Oe),e(Oe,ba),e(Ut,ya),e(Mt,Da),e(Et,wa),e(Et,Ea),e(Et,xa);for(let te=0;te<kt.length;te+=1)kt[te]&&kt[te].m(Et,null);e(Et,kn),e(Et,Ma),e(Et,_a),e(D,Ca),e(p,Ta),it(E,Sn,nt),it(E,An,nt),it(E,Nn,nt),it(E,Pn,nt),it(E,On,nt),it(E,ge,nt),e(ge,Ia),la(Ve,ge,null),e(ge,ka),la(Ue,ge,null),e(ge,Sa),it(E,Ln,nt),it(E,Fn,nt),it(E,Yn,nt),it(E,Hn,nt),it(E,jn,nt),it(E,he,nt),e(he,Aa),la(Be,he,null),e(he,Na),e(he,xe),e(xe,Pa),e(xe,We),e(We,Oa),e(We,Me),e(Me,La),e(Me,ze),e(ze,Fa),e(ze,rn),e(rn,Ya),e(ze,Ha),e(Me,ja),e(Me,Ke),e(Ke,Ra),e(Ke,Ge),e(Ge,Va),e(Ke,Ua),e(Me,Ba),e(We,Wa),e(xe,za),la(Je,xe,null),e(xe,Ka),e(he,Ga),it(E,Rn,nt),it(E,Vn,nt),on=!0,qa||(oi=In(Ge,"click",a[7]),qa=!0)},p(E,[nt]){if((!on||nt&1)&&xt!==(xt=E[0].installation.soilTypeCode+"")&&En(be,xt),(!on||nt&1)&&ae!==(ae=E[0].installation.cropTypeCode+"")&&En(dt,ae),E[1]?Ft?Ft.p(E,nt):(Ft=Ei(E),Ft.c(),Ft.m(O,Ne)):Ft&&(Ft.d(1),Ft=null),nt&7){ln=E[0].installation.devices;let St;for(St=0;St<ln.length;St+=1){const wn=wi(E,ln,St);kt[St]?kt[St].p(wn,nt):(kt[St]=Mi(wn),kt[St].c(),kt[St].m(Et,kn))}for(;St<kt.length;St+=1)kt[St].d(1);kt.length=ln.length}const te={};nt&1&&(te.devices=E[0].installation.devices),Ve.$set(te);const Ze={};nt&1&&(Ze.devices=E[0].installation.devices),Ue.$set(Ze);const Le={};nt&1&&(Le.devices=E[0].installation.devices),Be.$set(Le)},i(E){on||(sa(Ve.$$.fragment,E),sa(Ue.$$.fragment,E),sa(Be.$$.fragment,E),sa(Je.$$.fragment,E),on=!0)},o(E){ca(Ve.$$.fragment,E),ca(Ue.$$.fragment,E),ca(Be.$$.fragment,E),ca(Je.$$.fragment,E),on=!1},d(E){E&&u(r),E&&u(t),E&&u(c),E&&u(p),Ft&&Ft.d(),Pi(kt,E),E&&u(Sn),E&&u(An),E&&u(Nn),E&&u(Pn),E&&u(On),E&&u(ge),da(Ve),da(Ue),E&&u(Ln),E&&u(Fn),E&&u(Yn),E&&u(Hn),E&&u(jn),E&&u(he),da(Be),da(Je),E&&u(Rn),E&&u(Vn),qa=!1,oi()}}}let Xe=_i({});function or(a,r,t){let c,p=Pt,f;Mn(a,Xe,T=>t(2,c=T)),Mn(a,Li,T=>t(8,f=T)),a.$$.on_destroy.push(()=>p());let{data:g}=r,_=!1;f.url.pathname.split("/").includes("public")||(_=!0);let Y={coordinates:{lat:g.installation.location.lat,lon:g.installation.location.lon},size:"full"},w={coordinates:{lat:g.installation.location.lat,lon:g.installation.location.lon},size:"md"};vi(Xe,c={},c),g.installation.devices.forEach(T=>{vi(Xe,c[T.id]=!0,c)}),Tn(async()=>{});const M=()=>bi(Vi);function k(T){c[T.id]=this.checked,Xe.set(c)}const z=()=>{bi(Ci,Y)};return a.$$set=T=>{"data"in T&&t(0,g=T.data)},[g,_,c,Y,w,M,k,z]}class pr extends bn{constructor(r){super(),yn(this,r,or,rr,Dn,{data:0})}}export{pr as I};
