var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(G){return G.raw=G};$jscomp.createTemplateTagFirstArgWithRaw=function(G,P){G.raw=P;return G};$jscomp.arrayIteratorImpl=function(G){var P=0;return function(){return P<G.length?{done:!1,value:G[P++]}:{done:!0}}};$jscomp.arrayIterator=function(G){return{next:$jscomp.arrayIteratorImpl(G)}};$jscomp.makeIterator=function(G){var P="undefined"!=typeof Symbol&&Symbol.iterator&&G[Symbol.iterator];return P?P.call(G):$jscomp.arrayIterator(G)};
$jscomp.arrayFromIterator=function(G){for(var P,ka=[];!(P=G.next()).done;)ka.push(P.value);return ka};$jscomp.arrayFromIterable=function(G){return G instanceof Array?G:$jscomp.arrayFromIterator($jscomp.makeIterator(G))};
(function(){function G(){var b=document.getElementById("fileUpload");if(/^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/.test(b.value.toLowerCase()))if("undefined"!=typeof FileReader){var a=new FileReader;a.readAsBinaryString?(a.onload=function(c){c=XLSX.read(c.target.result,{type:"binary"});c=XLSX.utils.sheet_to_row_object_array(c.Sheets[c.SheetNames[0]],{defval:"NULL"});try{var A=c.length,S=new Set,ia=new Set;S={ELITECH:S,CTCHUAN:ia};var n=new Set;for(ia=1;ia<A;ia++){var k=Object.values(c[ia]),B="CTCHUAN";
"ELITECH"==k[23]&&(B="ELITECH");var L=aa[B],I=S[B],g=k[4];I.has(g)?"TN"!=K[g][3]&&"TN"==k[17]&&(K[g][3]="TN"):(I.add(g),L[g]=[{},{"LT+BT":[],TN:[],BT:{},OTHER:[]}],n.has(g)||(Ma.push(g),K[g]=[k[5],k[6],k[7][0],k[17]],n.add(g)));var w=L[g],r=w[0],u=w[1],x=k[2],U=k[21];ba[x]=g;r[x]?r[x][2]=[].concat($jscomp.arrayFromIterable(r[x][2]),[[k[9],k[10],k[11],k[12],k[13],k[14],k[15],k[16]]]):r[x]=[k[3],k[8],[[k[9],k[10],k[11],k[12],k[13],k[14],k[15],k[16]]],k[23],k[21]];switch(U){case "LT+BT":case "TN":u[U]||
(u[U]=[]);ya(u[U],x);break;case "BT":var y=k[3];u.BT[y]||(u.BT[y]=[]);ya(u.BT[y],x);break;case "LT":break;default:u.OTHER||(u.OTHER=[]),ya(u.OTHER,x)}}}catch(T){Na.innerHTML="File c\u00f3 l\u1ed7i, vui l\u00f2ng ch\u1ecdn file kh\u00e1c",Ga.classList.add("not-uploaded"),za=!1,Aa.innerHTML="Upload th\u1eddi kh\u00f3a bi\u1ec3u",V("C\u00f3 l\u1ed7i g\u00ec \u0111\u00f3")}},a.readAsBinaryString(b.files[0])):V("Tr\u00ecnh duy\u1ec7t n\u00e0y kh\u00f4ng h\u1ed7 tr\u1ee3 file excell r\u1ed3i :((")}else V("Tr\u00ecnh duy\u1ec7t n\u00e0y kh\u00f4ng h\u1ed7 tr\u1ee3 HTML5 r\u1ed3i :((");
else V("Kh\u00f4ng ph\u1ea3i file excel :))")}function P(b,a){var c=document.createElement("div");""!=b&&c.classList.add(b);c.innerHTML=a;return c}function ka(b){if(Array.isArray(b)){var a=[];b=$jscomp.makeIterator(b);for(var c=b.next();!c.done;c=b.next())a.push(ka(c.value));return a}if("object"==typeof b){a={};for(c in b)a[c]=ka(b[c]);return a}return b}function ab(b,a){for(var c=-1,A=a.length-1;0<=A;A--)if(a[A][1]<b[0]){c=A;break}a.splice(c+1,0,b)}function bb(b,a){for(var c=a.length,A=-1,S=c-1;0<=
S;S--)if(a[S][1]<b[0]){A=S;break}return A==c-1?!1:a[A+1][0]<=b[1]?!0:!1}function Oa(b){try{return aa[X][ba[b]][0][b][4]}catch(a){console.log(b)}}function cb(b){var a=b%60,c="";10>a&&(c+="0");return(b-a)/60+"h"+c+a+"p"}function db(b){for(var a=[],c=0;c<=b;c++)a.push(c);return a}function eb(){Pa.classList.remove("none-display");Ha=new Set;sa=0;M={};document.querySelectorAll(".detailed-selected-subject").forEach(function(b){return b.remove()})}function ya(b,a){b.includes(a)||b.push(a)}function V(b,a){var c=
"";a&&(c="</br></br><span>"+a+"</span>");var A=P("message-wrapper",'<div class="message">\n        <div class="message-header">\n            <span>Th\u00f4ng b\u00e1o</span>\n        </div>\n        <div class="main-message">\n            <span>'+b+"</span>\n            "+c+'\n        </div>\n        <button class="exit-button">OK</button>\n    </div>');document.body.appendChild(A);c=A.querySelector("button");c.onclick=function(){return A.remove()};return[A,c]}var za=!1,Ma=[],K={},aa={CTCHUAN:{},
ELITECH:{}},ba={};(function(){V("Ch\u00fa \u00fd v\u1ec1 ch\u01b0\u01a1ng tr\u00ecnh ELITECH: Hi\u1ec7n t\u1ea1i trang web kh\u00f4ng cho b\u1ea1n ch\u1ecdn c\u00e1c m\u00f4n c\u1ee7a ch\u01b0\u01a1ng tr\u00ecnh chu\u1ea9n, v\u00ed d\u1ee5 c\u00e1c m\u00f4n th\u1ec3 ch\u1ea5t, l\u00ed lu\u1eadn ch\u00ednh tr\u1ecb,... Vui l\u00f2ng th\u00f4ng c\u1ea3m cho s\u1ef1 b\u1ea5t ti\u1ec7n n\u00e0y.");document.querySelector(".page-title .page-title__content").onclick=function(){var b=$jscomp.makeIterator(V("C\u0169ng kh\u00f4ng c\u00f3 g\u00ec \u0111\u1eb7c bi\u1ec7t c\u1ea3. T\u00f4i ch\u1ec9 mu\u1ed1n n\u00f3i l\u00e0 t\u00f4i gh\u00e9t m\u1ea5y th\u1eb1ng wibu c\u1ef1c k\u1ef3 lu\u00f4n th\u00f4i.",
"C\u00f2n n\u1ebfu b\u1ea1n l\u00e0 wibu th\u00ec t\u00f4i \u0111\u1ec1 xu\u1ea5t xem v\u00e0i b\u1ed9 y\u00eau th\u00edch c\u1ee7a t\u00f4i: Attack on titan, Steins gate, Death note, Dr stone, Bakemonogatari, Oregairu, High school dxd, ...")),a=b.next().value;b.next();a.querySelector(".message").style.width="600px";a.querySelector(".message-header span").innerText="V\u00e0i th\u1ee9 b\u00ean l\u1ec1"}})();var X="CTCHUAN",Ha=new Set,sa=0,M={},ta=[[],[]];document.querySelector(".types-of-edu").querySelectorAll(".type input").forEach(function(b){return b.onchange=
function(){eb();X="CTCHUAN"==X?"ELITECH":"CTCHUAN"}});var Ia=document.querySelector(".search-input"),Qa=document.querySelector("#fileUpload"),Ga=document.querySelector(".file-up-load"),Na=document.querySelector(".file-up-load span"),Aa=Ia.querySelector("button.add-subject"),Ra=document.querySelector(".subjects-adding .all-ids");Qa.onchange=function(b){eb();Ma=[];K={};aa={CTCHUAN:{},ELITECH:{}};ba={};this.files.item(0)?(b=this.files.item(0).name,Na.innerHTML="File \u0111\u00e3 ch\u1ecdn: ["+b+"]. \u0110\u1ec3 \u0111\u1ed5i file \u1ea5n l\u1ea1i v\u00e0o \u0111\u00e2y.",
Ga.classList.remove("not-uploaded"),za=!0,Aa.innerHTML="Th\u00eam m\u00f4n h\u1ecdc",G()):(Na.innerHTML="Ch\u1ecdn file excel th\u1eddi kh\u00f3a bi\u1ec3u",Ga.classList.add("not-uploaded"),za=!1,Aa.innerHTML="Upload th\u1eddi kh\u00f3a bi\u1ec3u")};document.querySelector(".search-subject-options").querySelectorAll(".input").forEach(function(b){return b.onchange=function(){}});var Ja=Ia.querySelector("input"),ob=document.querySelector(".selected-subjects"),Pa=document.querySelector(".display-when-no-subject");
Aa.onclick=function(){if(za){var b=Ja.value.replace(" ","").toUpperCase().split("-");Ja.value="";var a={};b=$jscomp.makeIterator(b);for(var c=b.next();!c.done;a={$jscomp$loop$prop$displaySubjectDetails$49:a.$jscomp$loop$prop$displaySubjectDetails$49,$jscomp$loop$prop$sj$52:a.$jscomp$loop$prop$sj$52,$jscomp$loop$prop$subjectDetailsBlock$51:a.$jscomp$loop$prop$subjectDetailsBlock$51},c=b.next()){a.$jscomp$loop$prop$sj$52=c.value;a.$jscomp$loop$prop$displaySubjectDetails$49=function(n){var k="";"TN"!=
K[n][3]&&(k="kh\u00f4ng ");var B="";K[n][0]!=K[n][1]&&(B=" / "+K[n][1]);k='<div class="general-information">\n            <p class="subject-name">'+n+" / "+K[n][0]+B+'</p>\n            <p class="subject-kl">'+K[n][2]+" t\u00edn ch\u1ec9, "+k+"c\u00f3 l\u1edbp TN</p>\n        </div>";var L=aa[X][n][1],I=L["LT+BT"];B='<div class="LT-BT"><div class="class-type-introduce">\n            <p class="title">Lo\u1ea1i l\u1edbp: LT+BT</p>\n            <p class="notice">M\u1ed7i m\u00f4n h\u1ecdc c\u00f3 th\u1ec3 ch\u1ecdn l\u1edbp g\u1ed9p LT v\u00e0 BT ho\u1eb7c ch\u1ecdn c\u00e1c l\u1edbp LT v\u00e0 BT ri\u00eang v\u1edbi nhau</p>\n            <button class="choose-all choose-all-LT-BT">Ch\u1ecdn t\u1ea5t c\u1ea3</button>\n            <button class="delete-all delete-all-LT-BT">X\u00f3a t\u1ea5t c\u1ea3</button>\n        </div><div class="class-details">';
I=$jscomp.makeIterator(I);for(var g=I.next();!g.done;g=I.next()){g=g.value;var w=" checked";M[n][1]["LT+BT"].includes(g)||(w="");B+='<div class="class-wrapper checkbox-and-text" id="'+g+'">\n                <input type="checkbox" name="" id="'+g+'"'+w+'>\n                <p class="class-time">'+g+"</p>\n            </div>"}B+="</div></div>";I='<div class="BT">\n        <div class="class-type-introduce">\n            <p class="title">Lo\u1ea1i l\u1edbp: LT, BT</p>\n            <p class="notice">C\u00e1c l\u1edbp b\u00e0i t\u1eadp ph\u1ea3i \u0111i k\u00e8m v\u1edbi c\u00e1c l\u1edbp l\u00fd thuy\u1ebft t\u01b0\u01a1ng \u1ee9ng</p>\n            <button class="choose-all choose-all-LT">Ch\u1ecdn t\u1ea5t c\u1ea3</button>\n            <button class="delete-all delete-all-LT">X\u00f3a t\u1ea5t c\u1ea3</button>\n        </div>';
g=L.BT;for(var r in g){w=" checked";M[n][1].BT[r]||(w="");I+='<div class="LT-of-BT checkbox-and-text">\n            <div class="lt-wrapper" id="'+r+'">\n                <input type="checkbox" name="" id="'+r+'"'+w+'>\n                <p class="class-time">LT: '+r+"</p>\n            </div>\n            <div>";w=$jscomp.makeIterator(g[r]);for(var u=w.next();!u.done;u=w.next()){u=u.value;var x=" checked",U=M[n][1].BT;U[r]?U[r].includes(u)||(x=""):x="";I+='<div class="class-wrapper checkbox-and-text" id="'+
u+'">\n                    <input type="checkbox" name="" id="'+u+'"'+x+'>\n                    <p class="class-time">BT: '+u+"</p>\n                </div>"}I+="</div></div>"}I+="</div>";L=L.TN;r='<div class="TN"><div class="class-type-introduce">\n            <p class="title">Lo\u1ea1i l\u1edbp: TN</p>\n            <p class="notice">Ch\u1ec9 c\u00f3 c\u00e1c m\u00f4n h\u1ecdc c\u1ea7n th\u00ed nghi\u1ec7m m\u1edbi c\u00f3 l\u1edbp ph\u00eda b\u00ean d\u01b0\u1edbi</p>\n            <button class="choose-all choose-all-TN">Ch\u1ecdn t\u1ea5t c\u1ea3</button>\n            <button class="delete-all delete-all-TN">X\u00f3a t\u1ea5t c\u1ea3</button>\n        </div><div class="class-details">';
L=$jscomp.makeIterator(L);for(g=L.next();!g.done;g=L.next())g=g.value,w=" checked",M[n][1].TN.includes(g)||(w=""),r+='<div class="class-wrapper checkbox-and-text" id="'+g+'">\n                <input type="checkbox" name="" id="'+g+'"'+w+'>\n                <p class="class-time">'+g+"</p>\n            </div>";var y=P("",'<div class="subject-details-block--wrapper">\n            <div class="subject-details-block">\n                '+k+'\n                <div class="classes-of-subject">\n                    <div class="LT-and-BT-classes">'+
B+" "+I+'</div>\n                    <div class="TN-classes">'+(r+'</div></div></div>\n                </div>\n                <div class="suggestion">\n            - B\u1ea1n c\u00f3 th\u1ec3 \u1ea5n v\u00e0o c\u00e1c l\u1edbp h\u1ecdc \u0111\u1ec3 xem th\u00f4ng tin chi ti\u1ebft v\u1ec1 l\u1edbp \u0111\u00f3</br>\n            - B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 b\u1ecf ch\u1ecdn c\u00e1c l\u1edbp b\u1ea1n kh\u00f4ng th\u00edch b\u1eb1ng c\u00e1ch nh\u1ea5n v\u00e0o \u00f4 t\u00f9y ch\u1ecdn\n        </div>\n                <button class="close-sj-information-block">\u0110\u00f3ng</button>\n            </div>\n        </div>'));
document.body.appendChild(y);y.querySelector(".close-sj-information-block").onclick=function(){y.remove()};var T=y.querySelectorAll(".LT-BT .class-wrapper input"),Ba=y.querySelectorAll(".TN .class-wrapper input"),la=y.querySelectorAll(".LT-of-BT");k=y.querySelector(".choose-all-TN");B=y.querySelector(".delete-all-TN");r=y.querySelector(".choose-all-LT-BT");I=y.querySelector(".delete-all-LT-BT");L=y.querySelector(".choose-all-LT");g=y.querySelector(".delete-all-LT");var na=M[n][1];w=[].concat($jscomp.arrayFromIterable(y.querySelectorAll(".class-wrapper")),
$jscomp.arrayFromIterable(y.querySelectorAll(".lt-wrapper")));T.forEach(function(m){m.onclick=function(v){v.stopPropagation()};m.onchange=function(){var v=this.id,N=na["LT+BT"],C=N.indexOf(v);-1==C?N.push(v):N.splice(C,1)}});Ba.forEach(function(m){m.onclick=function(v){v.stopPropagation()};m.onchange=function(){var v=this.id,N=na.TN,C=N.indexOf(v);-1==C?N.push(v):N.splice(C,1)}});I.onclick=function(){T.forEach(function(m){m.checked=!1});M[n][1]["LT+BT"]=[]};r.onclick=function(){T.forEach(function(m){m.checked=
!0});M[n][1]["LT+BT"]=ka(aa[X][n][1]["LT+BT"])};B.onclick=function(){Ba.forEach(function(m){m.checked=!1});M[n][1].TN=[]};k.onclick=function(){Ba.forEach(function(m){m.checked=!0});M[n][1].TN=ka(aa[X][n][1].TN)};la.forEach(function(m){var v=m.querySelector(".LT-of-BT .lt-wrapper input"),N=m.querySelectorAll(".class-wrapper input"),C=na.BT,Q=v.id;v.onclick=function(f){f.stopPropagation()};v.onchange=function(){var f=this.id;C[f]?(delete C[f],N.forEach(function(ca){ca.checked=!1})):(C[f]=ka(aa[X][n][1].BT[f]),
N.forEach(function(ca){ca.checked=!0}))};N.forEach(function(f){f.onclick=function(ca){ca.stopPropagation()};f.onchange=function(){f.checked?v.checked?C[Q]=[].concat($jscomp.arrayFromIterable(C[Q]),[this.id]):(v.checked=!0,C[Q]=[this.id]):1==C[Q].length?(delete C[Q],v.checked=!1):C[Q].splice(C[Q].indexOf(this.id),1)}})});L.onclick=function(){la.forEach(function(m){m=m.querySelector(".LT-of-BT .lt-wrapper input");m.checked&&m.click();m.click()})};g.onclick=function(){la.forEach(function(m){m=m.querySelector(".LT-of-BT .lt-wrapper input");
m.checked||m.click();m.click()})};w.forEach(function(m){m.onclick=function(){for(var v=this.id,N=aa[X][ba[v]][0],C="",Q=$jscomp.makeIterator(N[v][2]),f=Q.next();!f.done;f=Q.next())f=f.value,C+='<div class="sub-class">\n                        Bu\u1ed5i: '+f[0]+", Th\u1ee9: "+f[1]+", Th\u1eddi gian: "+f[2]+", B\u0110: "+f[3]+",\n                        KT: "+f[4]+", K\u00edp: "+f[5]+", Tu\u1ea7n: "+f[6]+", Ph\u00f2ng: "+f[7]+"\n                    </div>";var ca=P("class-details-block-wrapper",'<div class="class-details-block">\n                    <div class="id-and-type">\n                        '+
v+" / "+N[v][4]+'\n                    </div>\n\n                    <div class="class-notice">Ghi ch\u00fa: '+N[v][1]+'</div>\n\n                    <div class="sub-classes-wrapper">\n                        '+C+'\n                    </div>\n\n                    <button class="close-cl-dt-block-btn">\u0110\u00f3ng</button>\n                </div>');ca.querySelector(".close-cl-dt-block-btn").onclick=function(){ca.remove()};document.body.appendChild(ca)}})};c=!1;for(var A=$jscomp.makeIterator(Ma),
S=A.next();!S.done;S=A.next())if(S.value==a.$jscomp$loop$prop$sj$52){c=!0;break}if(c)if(Ha.has(a.$jscomp$loop$prop$sj$52))V("\u0110\u00e3 th\u00eam m\u00f4n h\u1ecdc n\u00e0y r\u1ed3i: "+a.$jscomp$loop$prop$sj$52);else if(aa[X][a.$jscomp$loop$prop$sj$52]){Ha.add(a.$jscomp$loop$prop$sj$52);M[a.$jscomp$loop$prop$sj$52]=ka(aa[X][a.$jscomp$loop$prop$sj$52]);sa++;1==sa&&Pa.classList.add("none-display");c=[];for(var ia in M)c.push(ia);localStorage.setItem("ids",c.join("-"));c="";"TN"!=K[a.$jscomp$loop$prop$sj$52][3]&&
(c="kh\u00f4ng ");a.$jscomp$loop$prop$subjectDetailsBlock$51=P("detailed-selected-subject",'<div class="border-of-block"><h1><ntr class="hl">'+a.$jscomp$loop$prop$sj$52+'</ntr></h1>\n    <h6><ntr class="hl" style="font-size: 20px">'+K[a.$jscomp$loop$prop$sj$52][0]+" - "+("ELITECH"==X?"ELITECH":"CT CHU\u1ea8N")+"</ntr></h6>\n    <p>"+K[a.$jscomp$loop$prop$sj$52][2]+" t\u00edn ch\u1ec9, "+c+'c\u00f3 l\u1edbp TN</p>\n    <div class="control">\n        <button class="view-subject-details">Ch\u1ecdn c\u1ee5 th\u1ec3 c\u00e1c l\u1edbp</button>\n        <button class="delete-subject">X\u00f3a m\u00f4n h\u1ecdc</button>\n    </div>');
ob.appendChild(a.$jscomp$loop$prop$subjectDetailsBlock$51);c=a.$jscomp$loop$prop$subjectDetailsBlock$51.querySelector("button.view-subject-details");A=a.$jscomp$loop$prop$subjectDetailsBlock$51.querySelector("button.delete-subject");c.onclick=function(n){return function(){n.$jscomp$loop$prop$displaySubjectDetails$49(n.$jscomp$loop$prop$sj$52)}}(a);A.onclick=function(n){return function(){n.$jscomp$loop$prop$subjectDetailsBlock$51.remove();Ha["delete"](n.$jscomp$loop$prop$sj$52);delete M[n.$jscomp$loop$prop$sj$52];
sa--;var k=[],B;for(B in M)k.push(B);localStorage.setItem("ids",k.join("-"));0==sa&&Pa.classList.remove("none-display")}}(a)}else"ELITECH"==X?V("Kh\u00f4ng c\u00f3 l\u1edbp n\u00e0o m\u1edf cho m\u00e3 h\u1ecdc ph\u1ea7n "+a.$jscomp$loop$prop$sj$52+" cho ch\u01b0\u01a1ng tr\u00ecnh ELITECH."):V("Kh\u00f4ng c\u00f3 l\u1edbp n\u00e0o m\u1edf cho m\u00e3 h\u1ecdc ph\u1ea7n "+a.$jscomp$loop$prop$sj$52+" cho ch\u01b0\u01a1ng tr\u00ecnh CT CHU\u1ea8N.");else V("Kh\u00f4ng c\u00f3 m\u00e3 h\u1ecdc ph\u1ea7n n\u00e0y: "+
a.$jscomp$loop$prop$sj$52)}}else Ga.click()};Ia=document.querySelectorAll(".timetable-options .option-type-1 input");Qa=document.querySelectorAll(".timetable-options .option-type-2 input");Ia.forEach(function(b){b.onchange=function(){var a=this.id,c=ta[0].indexOf(a);-1==c?ta[0].push(a):ta[0].splice(c,1)}});Qa.forEach(function(b){b.onchange=function(){var a=this.id;"bn"==a&&(ta[1]=[]);ta[1]=[a]}});document.querySelector(".start-processing").onclick=function(){function b(d,h){for(var t=1;60>=t;t++)B[t]||
(B[t]={}),B[t][d]?ab(h,B[t][d]):B[t][d]=[h]}function a(d){if(la[d])return la[d];for(var h=[],t=$jscomp.makeIterator(aa[X][ba[d]][0][d][2]),p=t.next();!p.done;p=t.next()){var q=p.value;p=q[1];var D=$jscomp.makeIterator(q[2].split("-")),R=D.next().value,z=D.next().value;D=10*parseInt(R[0])+parseInt(R[1]);var O=10*parseInt(R[2])+parseInt(R[3]);R=10*parseInt(z[0])+parseInt(z[1]);z=10*parseInt(z[2])+parseInt(z[3]);var da=q[6].split(",");q=[];D=60*D+O;R=60*R+z;O=$jscomp.makeIterator(da);for(z=O.next();!z.done;z=
O.next())if(z=z.value,z.includes("-"))for(da=$jscomp.makeIterator(z.split("-")),z=da.next().value,da=da.next().value,z=parseInt(z),da=parseInt(da);z<=da;z++)q.push(z);else q.push(z);q=$jscomp.makeIterator(q);for(O=q.next();!O.done;O=q.next())h.push([O.value,p,D,R])}return la[d]=h}function c(d){na[d]=1;N.add(d)}function A(d){na[d]=0;N["delete"](d)}function S(d){if(C.has(d))return!1;d=$jscomp.makeIterator(v[d]);for(var h=d.next();!h.done;h=d.next())if(N.has(h.value))return!1;return!0}function ia(d){var h=
L[d],t=M[h][1].BT,p=Object.keys(t);h=M[h][1]["LT+BT"];p.forEach(function(q){S(q)&&(c(q),t[q].forEach(function(D){S(D)&&(c(D),n(d+1),A(D))}),A(q))});h.forEach(function(q){S(q)&&(c(q),n(d+1),A(q))})}function n(d){if(d==Ba){d=[];for(var h in na)1==na[h]&&d.push(h);m.push(d)}else if(h=L[d],"TN"==K[h][3]){h=$jscomp.makeIterator(M[h][1].TN);for(var t=h.next();!t.done;t=h.next())t=t.value,S(t)&&(c(t),ia(d),A(t))}else ia(d)}function k(){function d(H,W){0!=z&&(clearTimeout(z),z=0);for(var E="",l={},Y=H;Y<=
W;l={$jscomp$loop$prop$time$39$57:l.$jscomp$loop$prop$time$39$57},Y++){var F=m[t[Y]];l.$jscomp$loop$prop$time$39$57={2:[],3:[],4:[],5:[],6:[],7:[],8:[]};for(var Ca='<div class="id-result"> <ntr class="hl" style="font-size: 40px"> C\u00e1ch '+(Y+1)+": </ntr> </div>",Da='C\u00e1c l\u1edbp \u0111\u01b0\u1ee3c ch\u1ecdn: <span class="cl-chsed">'+F[0]+"</span> ("+ba[F[0]]+")",ua=1;ua<F.length;ua++)Da+=', <span class="cl-chsed">'+F[ua]+"</span> ("+ba[F[ua]]+")";Ca+='<div class="result-header">\n                    '+
Da+".\n                </div>";Da="";F.forEach(function(Z){return function(pa){la[pa].forEach(function(ja){var ea=ja[1],ma=ja[2],qa=ja[3];Z.$jscomp$loop$prop$time$39$57[ea]||(Z.$jscomp$loop$prop$time$39$57[ea]=[[ma,qa,[pa]]]);(ja=Z.$jscomp$loop$prop$time$39$57[ea].find(function(Ea){return Ea[0]==ma&&Ea[1]==qa}))?ya(ja[2],pa):Z.$jscomp$loop$prop$time$39$57[ea].push([ma,qa,[pa]])})}}(l));F={};for(var fb in l.$jscomp$loop$prop$time$39$57){ua=function(Z){return function(){temp=Z.$jscomp$loop$prop$first$59;
Z.$jscomp$loop$prop$first$59="l"==Z.$jscomp$loop$prop$first$59?"r":"l";return temp}}(F);var pb='<div class="day-details">\n                        Th\u1ee9 '+fb+"\n                    </div>",Sa="";F.$jscomp$loop$prop$first$59="l";for(var gb=$jscomp.makeIterator(l.$jscomp$loop$prop$time$39$57[fb]),ra=gb.next();!ra.done;ra=gb.next()){var oa=ra.value;ra=oa[0];var hb=oa[1],fa=oa[2];oa="";var ib=""+fa[0],jb='<span class="time">'+cb(ra)+" - "+cb(hb)+"</span><br>"+fa[0]+" ("+K[ba[fa[0]]][0]+")";"TN"==Oa(fa[0])&&
(oa=" tn");for(var va=1;va<fa.length;va++)jb+=", "+fa[va]+" ("+K[ba[fa[va]]][0]+")",ib+="-"+fa[va],"TN"==Oa(fa[va])&&(oa=" tn");fa="";oa&&(fa='<span class="tn-notice" style="color: var(--main-color)">  // C\u00e1c l\u1edbp m\u00e0u v\u00e0ng l\u00e0 c\u00e1c l\u1edbp th\u00ed nghi\u1ec7m nh\u00e9 </span>');Sa+='<div id="'+ib+'" class="block-of-day block-of-day-'+ua()+oa+'" style="top: '+(ra-405)/6.45+"%; height: "+(hb-ra)/6.45+'%;">\n                                '+jb+fa+"\n                            </div>"}Sa+=
'<div class="block-of-day block-of-day-m"><span> Ngh\u1ec9 tr\u01b0a </span></div>';Da+='<div class="day-i">\n                        '+pb+'\n\n                        <div class="day-cles">\n                            '+Sa+"\n                        </div>\n                    </div>";F={$jscomp$loop$prop$first$59:F.$jscomp$loop$prop$first$59}}E+='<div class="result-details">\n                    '+Ca+'\n\n                    <div class="vsl-result">\n                        '+Da+"\n                    </div>\n                </div>"}l=
R.querySelector(".results");l.innerHTML=E;l.querySelectorAll(".block-of-day:not(.block-of-day-m)").forEach(function(Z){Z.onclick=function(){if(Z.id){cls=Z.id.split("-");var pa="";cls.forEach(function(ea){pa+="<span>"+ea+", "+ba[ea]+", "+K[ba[ea]][0]+", lo\u1ea1i l\u1edbp: "+Oa(ea)+', <span id="'+ea+'" class="click-view-detail">xem chi ti\u1ebft</span>.</span></br>'});var ja=P("classes-of-block-details-wrapper",'<div class="classes-of-block-details">\n                        <button>\u0110\u00f3ng</button>\n\n                        <div class="class-details-wrapper">\n                            '+
pa+"\n                        </div>\n                    </div>");document.body.appendChild(ja);ja.querySelector("button").onclick=function(){ja.remove()};ja.querySelectorAll("span.click-view-detail").forEach(function(ea){ea.onclick=function(){for(var ma=this.id,qa=aa[X][ba[ma]][0],Ea="",kb=$jscomp.makeIterator(qa[ma][2]),ha=kb.next();!ha.done;ha=kb.next())ha=ha.value,Ea+='<div class="sub-class">\n                                    Bu\u1ed5i: '+ha[0]+", Th\u1ee9: "+ha[1]+", Th\u1eddi gian: "+ha[2]+
", B\u0110: "+ha[3]+",\n                                    KT: "+ha[4]+", K\u00edp: "+ha[5]+", Tu\u1ea7n: "+ha[6]+", Ph\u00f2ng: "+ha[7]+"\n                                </div>";var Ta=P("class-details-block-wrapper",'<div class="class-details-block">\n                                <div class="id-and-type">\n                                    '+ma+" / "+qa[ma][4]+'\n                                </div>\n\n                                <div class="class-notice">Ghi ch\u00fa: '+qa[ma][1]+
'</div>\n\n                                <div class="sub-classes-wrapper">\n                                    '+Ea+'\n                                </div>\n\n                                <button class="close-cl-dt-block-btn">\u0110\u00f3ng</button>\n                            </div>');Ta.querySelector(".close-cl-dt-block-btn").onclick=function(){Ta.remove()};document.body.appendChild(Ta)}})}}});z=setTimeout(function(){z=0;document.querySelectorAll("span.tn-notice").forEach(function(Z){Z.remove()})},
1E4)}var h=m.length,t=db(h-1),p=[],q=Math.floor(h/1)+1;0==h%1&&q--;var D=1;0==h&&(D=0);var R=P("display-results",'\n            <div class="control1">\n            <button class="exit-results-details">Quay l\u1ea1i</button>\n            <div class="overall-information">\n                <span class="nRes">T\u1ed5ng s\u1ed1 c\u00e1ch ch\u1ecdn m\u00f4n h\u1ecdc: <ntr class="hl">'+(h+'</ntr></span>\n            </div>\n            <div class="choose-sort-type">\n                <label for="sort-type">Ch\u1ecdn c\u00e1ch s\u1eafp x\u1ebfp k\u1ebft qu\u1ea3:</label>\n                <select name="sort-type" id="sort-type" class="sort-type">\n                    <option value="n">Ng\u1eabu nhi\u00ean</option>\n                    <option value="m">S\u1ed1 bu\u1ed5i s\u00e1ng \u0111\u01b0\u1ee3c ngh\u1ec9</option>\n                    <option value="a">S\u1ed1 bu\u1ed5i chi\u1ec1u \u0111\u01b0\u1ee3c ngh\u1ec9</option>\n                    <option value="h">S\u1ed1 bu\u1ed5i \u0111\u01b0\u1ee3c ngh\u1ec9</option>\n                    <option value="f">S\u1ed1 ng\u00e0y \u0111\u01b0\u1ee3c ngh\u1ec9</option>\n                    <option value="mt">S\u1ed1 gi\u1edd h\u1ecdc bu\u1ed5i s\u00e1ng</option>\n                    <option value="at">S\u1ed1 gi\u1edd h\u1ecdc bu\u1ed5i chi\u1ec1u</option>\n                </select>\n\n                <label for="sort-type-order">Theo th\u1ee9 t\u1ef1:</label>\n                <select name="sort-type-order" id="sort-type-order" class="sort-type-order">\n                    <option value="d">Gi\u1ea3m d\u1ea7n</option>\n                    <option value="i">T\u0103ng d\u1ea7n</option>\n                </select>\n\n                <button class="apply">\u00c1p d\u1ee5ng</button>\n            </div>\n        </div>\n            <div class="control2" style="display: none">\n            <button class="prev100">1 k\u1ebft qu\u1ea3 tr\u01b0\u1edbc</button>\n            <span class="ith-res">Trang <ntr class="hl">')+
(D+"/"+q+'</ntr></span>\n            <button class="next100">1 k\u1ebft qu\u1ea3 sau</button>\n            <button class="first-page">Quay v\u1ec1 trang 1</button>\n        </div>\n            <div class="results"></div>\n            <div class="control2">\n            <button class="prev100">1 k\u1ebft qu\u1ea3 tr\u01b0\u1edbc</button>\n            <span class="ith-res">Trang <ntr class="hl">')+(D+"/"+q+'</ntr></span>\n            <button class="next100">1 k\u1ebft qu\u1ea3 sau</button>\n            <button class="first-page">Quay v\u1ec1 trang 1</button>\n        </div>\n            <div style="height: 140px"/>'));
R.querySelector(".exit-results-details").onclick=function(){var H=document.querySelector("#page-body");R.remove();H.style.display="flex"};var z=0,O=0;D=R.querySelectorAll(".control2");var da=q-1,wa=R.querySelectorAll(".ith-res"),Ua=wa[0],Va=wa[1];D.forEach(function(H){if(0!=h){var W=H.querySelector(".prev100"),E=H.querySelector(".next100");H=H.querySelector(".first-page");W.onclick=function(){if(0!=O){var l=O-1;var Y=l+1-1;var F=Math.floor(l/1)+1}else Y=h-1,l=da,F=q;O=l;d(l,Y);Ua.innerHTML='Trang <ntr class="hl">'+
F+"/"+q+"</ntr>";Va.innerHTML='Trang <ntr class="hl">'+F+"/"+q+"</ntr>"};E.onclick=function(){if(O<da-1){var l=O+1;var Y=l+1-1;var F=Math.floor(l/1)+1}else O==da-1?(l=O+1,Y=h-1,F=q):(Y=1>h?h-1:0,l=0,F=1);O=l;d(l,Y);Ua.innerHTML='Trang <ntr class="hl">'+F+"/"+q+"</ntr>";Va.innerHTML='Trang <ntr class="hl">'+F+"/"+q+"</ntr>"};H.onclick=function(){var l=1>h?h-1:0;O=0;d(0,l);Ua.innerHTML='Trang <ntr class="hl">1/'+q+"</ntr>";Va.innerHTML='Trang <ntr class="hl">1/'+q+"</ntr>"}}});var Wa=0;1>h&&(Wa=h-1);
d(0,Wa);document.querySelector("#page-body").style.display="none";document.querySelector("#big-wrapper2 .wrapper").appendChild(R);D={};for(wa=0;wa<h;D={$jscomp$loop$prop$time$45$61:D.$jscomp$loop$prop$time$45$61},wa++){var Ka=m[wa],J=[0,0,0,0,0,0];D.$jscomp$loop$prop$time$45$61={2:[],3:[],4:[],5:[],6:[],7:[],8:[]};Ka.forEach(function(H){return function(W){la[W].forEach(function(E){var l=E[1],Y=E[2],F=E[3];H.$jscomp$loop$prop$time$45$61[l]||(H.$jscomp$loop$prop$time$45$61[l]={});(E=H.$jscomp$loop$prop$time$45$61[l].find(function(Ca){return Ca[0]==
Y&&Ca[1]==F}))?ya(E[2],W):H.$jscomp$loop$prop$time$45$61[l].push([Y,F,[W]])})}}(D));for(var Xa in D.$jscomp$loop$prop$time$45$61){var Fa=D.$jscomp$loop$prop$time$45$61[Xa];if(0==Fa.length)J[0]+=1,J[1]+=1,J[2]+=2,J[3]+=1;else{var Ya=Ka=!1,Za=0,$a=0;Fa=$jscomp.makeIterator(Fa);for(var xa=Fa.next();!xa.done;xa=Fa.next())xa=xa.value,s=xa[0],e=xa[1],750<=s?(Ya=!0,$a+=e-s):(Ka=!0,750<e?(Ya=!0,Za+=750-s,$a+=e-720-30):Za+=e-s);Ka||(J[0]+=1,J[2]+=1);Ya||(J[1]+=1,J[2]+=1);J[4]+=Za;J[5]+=$a}}p.push(J)}Xa=R.querySelector(".apply");
var lb="n",mb="d",qb=R.querySelector(".sort-type"),rb=R.querySelector(".sort-type-order");Xa.onclick=function(){lb=qb.value;mb=rb.value;var H=1;"d"==mb&&(H=-1);switch(lb){case "n":var W=function(E,l){return Math.random()-.5};break;case "m":W=function(E,l){return(p[E][0]-p[l][0])*H};break;case "a":W=function(E,l){return(p[E][1]-p[l][1])*H};break;case "h":W=function(E,l){return(p[E][2]-p[l][2])*H};break;case "f":W=function(E,l){return(p[E][3]-p[l][3])*H};break;case "mt":W=function(E,l){return(p[E][4]-
p[l][4])*H};break;case "at":W=function(E,l){return(p[E][5]-p[l][5])*H}}t=db(h-1).sort(W);d(0,Wa);O=0}}if(0==sa)V("Ch\u01b0a c\u00f3 m\u00f4n h\u1ecdc n\u00e0o c\u1ea3");else{var B={};ta[0].forEach(function(d){switch(d){case "b2m":b("2",[0,749]);break;case "b3m":b("3",[0,749]);break;case "b4m":b("4",[0,749]);break;case "b5m":b("5",[0,749]);break;case "b6m":b("6",[0,749]);break;case "b2a":b("2",[750,1065]);break;case "b3a":b("3",[750,1065]);break;case "b4a":b("4",[750,1065]);break;case "b5a":b("5",
[750,1065]);break;case "b6a":b("6",[750,1065])}});for(var L=Object.keys(M),I={},g=[],w=1,r={},u=$jscomp.makeIterator(L),x=u.next();!x.done;r={$jscomp$loop$prop$ltClasses$54:r.$jscomp$loop$prop$ltClasses$54,$jscomp$loop$prop$nBT_case$55:r.$jscomp$loop$prop$nBT_case$55},x=u.next()){x=x.value;var U=M[x][1];r.$jscomp$loop$prop$nBT_case$55=0;r.$jscomp$loop$prop$ltClasses$54=U.BT;Object.keys(r.$jscomp$loop$prop$ltClasses$54).forEach(function(d){return function(h){g.push(h);d.$jscomp$loop$prop$ltClasses$54[h].forEach(function(t){return g.push(t)});
d.$jscomp$loop$prop$nBT_case$55+=d.$jscomp$loop$prop$ltClasses$54[h].length}}(r));var y=U["LT+BT"].length;U["LT+BT"].forEach(function(d){return g.push(d)});var T=U.TN.length;U.TN.forEach(function(d){return g.push(d)});I[x]=(0==T?1:T)*(r.$jscomp$loop$prop$nBT_case$55+y);w*=I[x];if("TN"==K[x][3]&&0==T){V("M\u00f4n "+K[x][0]+" y\u00eau c\u1ea7u l\u1edbp th\u00ed nghi\u1ec7m nh\u01b0ng hi\u1ec7n t\u1ea1i kh\u00f4ng c\u00f3 l\u1edbp n\u00ean ch\u01b0a th\u1ec3 s\u1eafp x\u1ebfp th\u1eddi kh\u00f3a bi\u1ec3u.");
return}if(0==I[x]){V("V\u00ec m\u00f4n "+K[x][0]+" kh\u00f4ng c\u00f3 l\u1edbp LT v\u00e0 BT n\u00ean kh\u00f4ng th\u1ec3 so\u1ea1n th\u1eddi kh\u00f3a bi\u1ec3u!");return}}L.sort(function(d,h){return I[d]-I[h]});var Ba=L.length,la={},na={},m=[],v={},N=new Set,C=new Set;g.forEach(function(d){for(var h=!1,t=$jscomp.makeIterator(a(d)),p=t.next();!p.done;p=t.next())if(p=p.value,B[p[0]]&&B[p[0]][p[1]]&&bb([p[2],p[3]],B[p[0]][p[1]])){h=!0;break}h?C.add(d):v[d]=new Set});C.forEach(function(d){g.splice(g.indexOf(d),
1)});r=g.length;for(u=0;u<r-1;u++)for(x=a(g[u]),U=v[g[u]],y=u+1;y<r;y++){T={};var Q=a(g[y]);Q=$jscomp.makeIterator(Q);for(var f=Q.next();!f.done;f=Q.next()){f=f.value;var ca=f[2],nb=f[3];T[f[0]]||(T[f[0]]={});T[f[0]][f[1]]?ab([ca,nb],T[f[0]][f[1]]):T[f[0]][f[1]]=[[ca,nb]]}Q=$jscomp.makeIterator(x);for(f=Q.next();!f.done;f=Q.next())if(f=f.value,T[f[0]]&&T[f[0]][f[1]]&&bb([f[2],f[3]],T[f[0]][f[1]])){U.add(g[y]);v[g[y]].add(g[u]);break}}w=Math.ceil((3.26528E-4*w+1153.75)/1E3)+4;20<w&&(w="> 20");w=$jscomp.makeIterator(V("\u0110ang th\u1ef1c hi\u1ec7n t\u00ednh to\u00e1n... Th\u1eddi gian \u01b0\u1edbc t\u00ednh: "+
w+"s.","Ho\u1eb7c c\u0169ng c\u00f3 th\u1ec3 l\u00e0 page s\u1eadp tr\u01b0\u1edbc khi t\u00ednh to\u00e1n xong :))"));var sb=w.next().value;w.next().value.remove();setTimeout(function(){n(0);k();sb.remove()},200)}};var La=localStorage.getItem("ids");La&&0!=La.length&&(Ra.classList.remove("none-display"),Ra.innerHTML='<span>C\u00e1c h\u1ecdc ph\u1ea7n \u0111\u00e3 th\u00eam v\u00e0o l\u1ea7n truy c\u1eadp g\u1ea7n nh\u1ea5t: <ntr class="hl" style="font-size: 20px">'+La.replaceAll("-",", ")+'</ntr>. \u1ea4n v\u00e0o <tagg style="text-decoration: underline; cursor: pointer; color: var(--main-color);">\u0111\u00e2y</tagg> \u0111\u1ec3 th\u00eam l\u1ea1i ngay l\u1eadp t\u1ee9c.</span>',
Ra.querySelector("tagg").onclick=function(){za?(Ja.value=La,Aa.click(),Ja.value=""):V("H\u00e3y t\u1ea3i l\u00ean th\u1eddi kh\u00f3a bi\u1ec3u tr\u01b0\u1edbc!")});console.log("Trang web x\u00e2y d\u1ef1ng th\u1eddi kh\u00f3a bi\u1ec3u HUST phi\u00ean b\u1ea3n 1.1.3. C\u1eadp nh\u1eadt l\u1ea7n cu\u1ed1i v\u00e0o 15h06p 12/2/2023.")})();
