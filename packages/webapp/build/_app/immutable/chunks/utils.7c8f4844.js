import"./index.31748c13.js";function k(t,e,r,a){var l=[];for(const s in t)if(t[s]==!0){let n=e.find(m=>m.id==s);l.push(n)}a(l,r)}function b(t,e){return e.map(a=>a[t]==-127?NaN:a[t])}function B(t){let e=t.split("T")[0],r=e.split("-")[0];return Number(r)+1+"-"+e.split("-")[1]+"-"+e.split("-")[2]+"T"+t.split("T")[1]}function R(t,e){return e.filter(a=>{if(a.sid==t)return a})}async function H(t,e,r,a,l){var s=[],n=[];for(let o of e){let i=new Date(t[1]);i.setDate(i.getDate()+1),i=i.toISOString().split("T")[0];var m=new URLSearchParams({from_date:t[0],to_date:i,device_mac:o.mac,installation_id:o.installation_id});let h=await(await fetch(`https://api.h2optimum.2adapt.pt/api/v2/measurement?${m.toString()}`)).json();l.forEach(v=>{var d=A(v);if(v!="h"){var u=h.filter(_=>_.type===v);if(u){var p={x:b("ts",u),y:b("val",u),name:o.description+d,type:"scatter"};s.push(p)}}else for(var w=h.filter(_=>_.type===v),f=h.filter(_=>_.type==="t"),D=b("val",f),E=[],y=[],g=0;g<3;g++){E.push(R(g+2,w)),y.push(N(D,E[g]));var p={x:b("ts",E[g]),y:y[g],name:o.description+" "+(g+1)+d,type:"scatter"};s.push(p)}})}for(var c=0;c<s.length;c++)n.push(c);r&&n&&s&&r.animate(a,{data:s,traces:n,layout:{xaxis:{range:[t[0],t[1]]}}},{transition:{duration:1e3,easing:"cubic-in-out"},frame:{duration:1e3}})}function A(t){return t=="t"?" - Temp. solo":t=="tar"?" - Temp. ar":t=="h"?"":t=="b"?" - Bateria":" - Desconhecido"}function N(t,e){for(var r=b("val",e),a=[],l=0;l<r.length;l++){var s=r[l],n=t[l];n||(n=25,console.log("A usar valor temperatura 25")),s>=0&&s<1e3?a.push(Math.abs(-20*(s/1e3*(1+.018*(25-n))-.55))):s>=1e3&&s<8e3?a.push(Math.abs((-3.213*(s/1e3)-4.093)/(1-.009733*(s/1e3)-.01205*n))):s>=8e3?a.push(Math.abs(-2.246-5.239*(s/1e3)*(1+.018*(n-24))-.06756*Math.pow(s/1e3,2)*Math.pow(1+.018*(n-24),2))):a.push(null)}return a}function P(t,e,r){return t=="loamy_sand"?e=="saturated"?r==0?0:11:e=="wet"?r==0?11:20:e=="irrigate"&&r==0?20:25:t=="fine_sandy_loam"?e=="saturated"?r==0?0:12:e=="wet"?r==0?12:22:e=="irrigate"&&r==0?22:30:t=="sandy_loam"?e=="saturated"?r==0?0:13:e=="wet"?r==0?13:28:e=="irrigate"&&r==0?28:40:t=="loam"?e=="saturated"?r==0?0:23:e=="wet"?r==0?23:64:e=="irrigate"&&r==0?64:84:t=="clay"?e=="saturated"?r==0?0:36:e=="wet"?r==0?36:160:e=="irrigate"&&r==0?160:215:e=="saturated"?r==0?0:10:e=="wet"?r==0?10:60:e=="irrigate"&&r==0?60:100}async function I(t){let e={},r=new Date,a=new Date;if(r=r.toISOString().split("T")[0],a.setDate(a.getDate()+1),a=a.toISOString().split("T")[0],t.deviceList.length==0)return e=["Sem dispositivos"];for(let o of t.deviceList){let i=[],S=new URLSearchParams({from_date:r,to_date:a,device_mac:o.mac,installation_id:o.installation_id}),h,d=await(await fetch(`https://api.h2optimum.2adapt.pt/api/v2/measurement?${S.toString()}`)).json();var l=d.filter(f=>f.type==="t"),s=d.filter(f=>f.type==="tar"),n=d.filter(f=>f.type==="b"),m=d.filter(f=>f.type==="h");let u=l[l.length-1],p=s[s.length-1],w=n[n.length-1];for(var c=0;c<3;c++){let f=R(c+2,m),D=f[f.length-1];u&&D&&(u.val==-127?i.push("Erro num cálculo da hum(Temp inválida, a calcular com temp = 25)."):(h=N([u.val],[D]),(h[0]>2e3||!h[0])&&i.push("Erro no sensor de hum "+(c+1)+" (>2k)."))),D||i.push("Erro no sensor de hum(inativo).")}if(!u&&!p&&!w){e[o.description]=["Dispositivo inativo"];continue}u.val==-127&&i.push("Erro no sensor de temperatura solo(-127)."),u||i.push("Erro no sensor de temperatura solo(inativo)."),(!p||p==null)&&i.push("Erro no sensor de temperatura ar(inativo)."),w.val<=3.5&&i.push("Bateria baixa."),w||i.push("Erro na bateria."),i.length>0&&(e[o.description]=i)}return e}async function Y(t){if(t){let e=await I(t);return Object.keys(e).length>0}}export{b as a,B as b,P as c,N as d,I as e,R as f,A as g,Y as h,k as r,H as u};
