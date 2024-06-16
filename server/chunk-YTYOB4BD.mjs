import './polyfills.server.mjs';
import{a as T}from"./chunk-PZQYRQHZ.mjs";import{C as h,D as j,F as u,G as l,H as d,I as f,J as n,K as i,L as m,M as F,N as _,O as B,P as I,Q as p,R as C,S as L,T as y,d as E,ha as D,i as g,ia as $,j as O,k as M,l as b,v as w,va as U,w as a,x as v,ya as P,za as k}from"./chunk-JRTUK7BF.mjs";import"./chunk-VVCT4QZE.mjs";function H(t,e){if(t&1&&(n(0,"p",3),p(1),i()),t&2){let s=e.$implicit;a(),C(s)}}function A(t,e){if(t&1&&(n(0,"div",1),d(1,H,2,1,"p",3,l),i()),t&2){let s=_();a(),f(s.project.keyWords)}}var R=(()=>{let e=class e{constructor(c){this.router=c}ngOnInit(){}substring(c){let r=c.split(" ");if(r.length>10){let o=0,x="";return r.forEach(W=>{o<10&&(x+=W+" ",o++)}),x+="..."}return c}};e.\u0275fac=function(r){return new(r||e)(v(P))},e.\u0275cmp=g({type:e,selectors:[["app-short-projet"]],inputs:{project:"project"},decls:7,vars:5,consts:[[1,"flex-row","project"],[1,"flex-row"],[1,"button",3,"href"],[1,"key-words"]],template:function(r,o){r&1&&(n(0,"div",0)(1,"section")(2,"h2"),p(3),i(),h(4,A,3,0,"div",1),i(),n(5,"a",2),p(6,"Voir plus"),i()()),r&2&&(a(3),y("Projet ",o.project.id," : ",o.substring(o.project.name),""),a(),u(4,o.project.keyWords?4:-1),a(),I("href","https://cambrihobbit.github.io/MonPortfoilio/projet/",o.project.id,"",w))},styles:[".project[_ngcontent-%COMP%]{padding:var(--pdg-xs) var(--pdg-m);gap:var(--sp-m);border:1px solid var(--black-hover);border-radius:var(--brd-rds-s);width:fit-content}section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.key-words[_ngcontent-%COMP%]{margin-right:var(--mrg-s)}"]});let t=e;return t})();function Q(t,e){if(t&1&&m(0,"app-short-projet",2),t&2){let s=e.$implicit;j("project",s)}}function X(t,e){t&1&&(n(0,"p"),p(1,"Pas de projets professionnels"),i())}function Y(t,e){if(t&1&&m(0,"app-short-projet",2),t&2){let s=e.$implicit;j("project",s)}}function Z(t,e){t&1&&(n(0,"p"),p(1,"Pas de projets professionnels"),i())}function ee(t,e){if(t&1&&m(0,"app-short-projet",2),t&2){let s=e.$implicit;j("project",s)}}function te(t,e){t&1&&(n(0,"p"),p(1,"Pas de projets professionnels"),i())}var V=(()=>{let e=class e{constructor(c,r){this.infoService=c,this.router=r}ngOnInit(){this.projectsUniv=this.infoService.getProjectFromType("univ"),this.projectsPerso=this.infoService.getProjectFromType("perso"),this.projectsPro=this.infoService.getProjectFromType("pro")}};e.\u0275fac=function(r){return new(r||e)(v(T),v(P))},e.\u0275cmp=g({type:e,selectors:[["app-list-projets"]],decls:19,vars:3,consts:[[1,"list-project"],[1,"flex-column","projects"],[3,"project"]],template:function(r,o){r&1&&(n(0,"div",0)(1,"h1"),p(2,"Exp\xE9riences professionnelles"),i(),n(3,"div",1),d(4,Q,1,1,"app-short-projet",2,l),h(6,X,2,0,"p"),i(),n(7,"h1"),p(8,"Projets universitaires"),i(),n(9,"div",1),d(10,Y,1,1,"app-short-projet",2,l),h(12,Z,2,0,"p"),i(),n(13,"h1"),p(14,"Projets personnels"),i(),n(15,"div",1),d(16,ee,1,1,"app-short-projet",2,l),h(18,te,2,0,"p"),i()()),r&2&&(a(4),f(o.projectsPro),a(2),u(6,o.projectsPro.length==0?6:-1),a(4),f(o.projectsUniv),a(2),u(12,o.projectsUniv.length==0?12:-1),a(4),f(o.projectsPerso),a(2),u(18,o.projectsPerso.length==0?18:-1))},dependencies:[R],styles:[".list-project[_ngcontent-%COMP%]{height:100%;padding:var(--pdg-m);overflow:scroll}.list-project[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]{gap:var(--sp-s);margin:var(--mrg-s)}"]});let t=e;return t})();var G=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-etape"]],inputs:{etape:"etape"},decls:6,vars:6,consts:[[1,"flex-column"],[3,"src","alt"]],template:function(r,o){r&1&&(n(0,"div",0)(1,"h3"),p(2),i(),m(3,"img",1),n(4,"p"),p(5),i()()),r&2&&(a(2),y("Etape ",o.etape.numEtape," : ",o.etape.nomEtape,""),a(),I("src","./assets/images/",o.etape.imgEtape,"",w),B("alt",o.etape.nomEtape),a(2),C(o.etape.commentaireEtape))},styles:["img[_ngcontent-%COMP%]{max-width:300px;max-height:300px;border-radius:var(--brd-rds-m)}div[_ngcontent-%COMP%]{max-width:350px;padding:var(--pdg-s);justify-content:center;align-items:center;border:1px solid var(--silver);border-radius:var(--brd-rds-m);gap:var(--sp-s)}p[_ngcontent-%COMP%]{text-align:center}h3[_ngcontent-%COMP%]{font-size:var(--fts-s);margin-bottom:var(--mrg-s)}"]});let t=e;return t})();function ie(t,e){if(t&1&&(n(0,"li"),p(1),i()),t&2){let s=e.$implicit;a(),C(s)}}function oe(t,e){if(t&1&&(n(0,"details")(1,"summary")(2,"span",7),p(3,"Comp\xE9tences techniques utilis\xE9es et d\xE9velopp\xE9es"),i(),n(4,"div",8),M(),n(5,"svg",9),m(6,"polyline",10),i()()(),b(),n(7,"div",11),d(8,ie,2,1,"li",null,l),i(),n(10,"div",12),M(),n(11,"svg",13),m(12,"polyline",14),i()()()),t&2){let s=_();a(8),f(s.project.competenceTechnique)}}function re(t,e){if(t&1&&(n(0,"li"),p(1),i()),t&2){let s=e.$implicit;a(),C(s)}}function ae(t,e){if(t&1&&(n(0,"details")(1,"summary")(2,"span",7),p(3,"Comp\xE9tences transversales utilis\xE9es et d\xE9velopp\xE9es"),i(),n(4,"div",8),M(),n(5,"svg",9),m(6,"polyline",10),i()()(),b(),n(7,"div",11),d(8,re,2,1,"li",null,l),i(),n(10,"div",12),M(),n(11,"svg",13),m(12,"polyline",14),i()()()),t&2){let s=_();a(8),f(s.project.competenceTransversal)}}function pe(t,e){if(t&1&&m(0,"app-etape",15),t&2){let s=e.$implicit;j("etape",s)}}function se(t,e){if(t&1&&(n(0,"div",4),d(1,pe,1,1,"app-etape",15,l),i()),t&2){let s=_();a(),f(s.project.option)}}function ce(t,e){if(t&1&&(n(0,"p",6),p(1),i()),t&2){let s=e.$implicit;a(),L("- ",s,"")}}var N=(()=>{let e=class e{constructor(c,r,o,x){this.infoService=c,this.route=r,this.router=o,this.location=x}ngOnInit(){let c=this.route.snapshot.params.id;try{this.project=this.infoService.getProjectFromID(c)}catch{this.router.navigateByUrl("error-404")}}goBack(){this.location.back()}};e.\u0275fac=function(r){return new(r||e)(v(T),v(U),v(P),v(D))},e.\u0275cmp=g({type:e,selectors:[["app-projet"]],decls:18,vars:6,consts:[[1,"flex-column"],[1,"button",3,"click"],[1,"flex-row","justify-center"],[1,"paragraph"],[1,"flex-column","etapes"],[1,"flex-row"],[1,"key-words"],[1,"summary-title"],[1,"summary-chevron-up"],["width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-chevron-down"],["points","6 9 12 15 18 9"],[1,"summary-content"],[1,"summary-chevron-down"],["width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-chevron-up"],["points","18 15 12 9 6 15"],[3,"etape"]],template:function(r,o){r&1&&(n(0,"article",0)(1,"button",1),F("click",function(){return o.goBack()}),p(2,"Retour"),i(),n(3,"div",2)(4,"section")(5,"h1"),p(6),i(),n(7,"p",3),p(8),i(),h(9,oe,13,0,"details")(10,ae,13,0,"details")(11,se,3,0,"div",4),n(12,"div",5)(13,"h3"),p(14,"Mots cl\xE9s :"),i(),n(15,"div",5),d(16,ce,2,1,"p",6,l),i()()()()()),r&2&&(a(6),y("Projet ",o.project.id," : ",o.project.name,""),a(2),C(o.project.subject),a(),u(9,o.project.competenceTechnique!=null?9:-1),a(),u(10,o.project.competenceTransversal!=null?10:-1),a(),u(11,o.project.option!=null?11:-1),a(5),f(o.project.keyWords))},dependencies:[G],styles:["section[_ngcontent-%COMP%]{margin:var(--mrg-s);padding:var(--pdg-m);border:1px solid var(--black-hover);border-radius:var(--brd-rds-m);width:fit-content}.key-words[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:var(--mrg-s)}.button[_ngcontent-%COMP%]{width:fit-content}article[_ngcontent-%COMP%]{height:100%;padding:var(--pdg-m);overflow:scroll}h1[_ngcontent-%COMP%]{font-size:var(--fts-m);margin-bottom:var(--mrg-m);width:fit-content;max-width:var(--sp-vh-l)}h3[_ngcontent-%COMP%]{margin-right:var(--mrg-s)}p.paragraph[_ngcontent-%COMP%]{width:var(--sp-vh-l)}.etapes[_ngcontent-%COMP%]{margin:var(--mrg-m) 0;align-items:center;gap:var(--sp-m)}details[_ngcontent-%COMP%]{font-size:1rem;margin:var(--mrg-s) 0;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;width:100%;background:var(--white);border-radius:8px;position:relative;width:500px}details[_ngcontent-%COMP%]   .summary-title[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}details[_ngcontent-%COMP%]:hover{cursor:pointer}details[_ngcontent-%COMP%]   .summary-content[_ngcontent-%COMP%]{border-top:1px solid #e2e8f0;cursor:default;padding:var(--pdg-s);font-weight:300;line-height:1.5}details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{list-style:none;padding:var(--pdg-s)}details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:focus{outline:none}details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:hover   .summary-chevron-up[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{opacity:1}details[_ngcontent-%COMP%]   .summary-chevron-up[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{opacity:.5}details[_ngcontent-%COMP%]   .summary-chevron-up[_ngcontent-%COMP%], details[_ngcontent-%COMP%]   .summary-chevron-down[_ngcontent-%COMP%]{pointer-events:none;position:absolute;top:.75em;right:var(--pdg-s);background:#fff}details[_ngcontent-%COMP%]   .summary-chevron-up[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], details[_ngcontent-%COMP%]   .summary-chevron-down[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block}"]});let t=e;return t})();var me=[{path:":id",component:N},{path:"",component:V}],q=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=E({imports:[k.forChild(me),k]});let t=e;return t})();var we=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=E({imports:[$,q]});let t=e;return t})();export{we as ProjetModule};