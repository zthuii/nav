import{d as X,f as Y,h as Z,i as tt,j as et,k as nt,l as it}from"./chunk-IDDWDWZM.js";import"./chunk-MCFJCLFU.js";import{l as K,m as Q}from"./chunk-ZWWC3TT5.js";import{a as z}from"./chunk-CFRR7YMC.js";import"./chunk-W4VOLKEA.js";import"./chunk-OPFID5PR.js";import{f as H,i as J}from"./chunk-EEVFGI25.js";import"./chunk-X24FBGVZ.js";import"./chunk-TQJGS5S7.js";import{Db as R,Fb as G,Kb as S,hb as $,ib as F,kb as W,lb as B,pb as A,sb as j,vb as U}from"./chunk-P3ITUY5P.js";import{Ac as T,Bc as V,Be as q,Cd as P,Db as h,Jb as p,Xb as a,Yb as r,Yd as O,a as b,b as M,bc as x,ec as u,fe as I,gc as c,lb as i,ld as D,le as f,md as E,qb as w,sc as l,tc as _,uc as y,ud as k,xa as d,xb as L,ya as g,yc as v,zc as C}from"./chunk-6EQ6TJQY.js";function rt(m,n){if(m&1&&(a(0,"div",6),l(1),r()),m&2){let e=c();i(),y(" ",e.$t("_buildTip"),`
`)}}function at(m,n){if(m&1&&(a(0,"div"),l(1),r()),m&2){let e=c().$implicit;i(),_(e.desc)}}function st(m,n){if(m&1){let e=x();a(0,"input",17),T("ngModelChange",function(o){d(e);let s=c().$implicit;return C(s.desc,o)||(s.desc=o),g(o)}),r()}if(m&2){let e=c().$implicit;v("ngModel",e.desc)}}function mt(m,n){if(m&1){let e=x();a(0,"a",18),u("nzOnConfirm",function(){d(e);let o=c().index,s=c();return g(s.handleDelete(o))}),l(1),r()}if(m&2){let e=c(2);p("nzPopconfirmTitle",e.$t("_confirmDel")),i(),y(" ",e.$t("_del")," ")}}function lt(m,n){if(m&1){let e=x();a(0,"tr")(1,"td",7)(2,"input",8),T("ngModelChange",function(o){let s=d(e).$implicit;return C(s.name,o)||(s.name=o),g(o)}),r()(),a(3,"td",9)(4,"input",10),u("change",function(o){let s=d(e).index,ot=c();return g(ot.onColorChange(o,s))}),r(),l(5),r(),a(6,"td",7)(7,"input",8),T("ngModelChange",function(o){let s=d(e).$implicit;return C(s.sort,o)||(s.sort=o),g(o)}),r()(),a(8,"td",11),h(9,at,2,1,"div",12)(10,st,1,1,"input",13),r(),a(11,"td")(12,"a",14),u("click",function(){let o=d(e).index,s=c();return g(s.moveUp(o))}),l(13),r(),a(14,"a",15),u("click",function(){let o=d(e).index,s=c();return g(s.moveDown(o))}),l(15),r(),h(16,mt,2,2,"a",16),r()()}if(m&2){let e=n.$implicit,t=c();i(2),v("ngModel",e.name),i(2),p("value",e.color),i(),y(" - ",e.color," "),i(2),v("ngModel",e.sort),i(2),p("ngIf",e.isInner),i(),p("ngIf",!e.isInner),i(3),_(t.$t("_moveUp")),i(2),_(t.$t("_moveDown")),i(),p("ngIf",!e.isInner)}}var N=class m{constructor(n,e){this.message=n;this.modal=e}$t=f;isSelfDevelop=O;tagList=I;submitting=!1;incrementId=Math.max(...I.map(n=>Number(n.id)))+1;ngOnInit(){}moveUp(n){if(n===0)return;let e=this.tagList[n],t=this.tagList[n-1];this.tagList[n-1]=e,this.tagList[n]=t}moveDown(n){if(n===this.tagList.length-1)return;let e=this.tagList[n],t=this.tagList[n+1];this.tagList[n+1]=e,this.tagList[n]=t}onColorChange(n,e){let t=n.target.value;this.tagList[e].color=t}handleAdd(){this.tagList.some(e=>!e.name.trim())||(this.incrementId+=1,this.tagList.unshift({id:this.incrementId,name:"",color:"#f50000",desc:"",isInner:!1}))}handleDelete(n){this.tagList.splice(n,1)}handleSubmit(){if(this.submitting)return;let n={};if(this.tagList.forEach(t=>{t.name?.trim?.()&&(n[t.name]=M(b({},t),{name:void 0}))}),Object.keys(n).length!==this.tagList.length){this.message.error(f("_repeatAdd"));return}let e=[...this.tagList].map(t=>(t.sort||="",typeof t.sort=="string"&&(t.sort=t.sort.trim()),t.sort===""&&delete t.sort,Number.isNaN(Number(t.sort))&&delete t.sort,t.sort!=null&&(t.sort=Number(t.sort)),b({},t)));this.modal.info({nzTitle:f("_syncDataOut"),nzOkText:f("_confirmSync"),nzContent:f("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,q({message:"update tag",content:JSON.stringify(e),path:P}).then(()=>{this.message.success(f("_saveSuccess"))}).finally(()=>{this.submitting=!1})}})}trackByItem(n,e){return e.id}static \u0275fac=function(e){return new(e||m)(w(S),w(z))};static \u0275cmp=L({type:m,selectors:[["system-tag"]],features:[V([z,S])],decls:21,vars:13,consts:[["basicTable",""],["nz-button","",1,"add-btn",3,"click","nzLoading"],["nz-button","","nzType","primary",3,"click","nzLoading"],["class","mb-4 !text-red-500 font-bold",4,"ngIf"],[3,"nzData"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-4","!text-red-500","font-bold"],["width","150px"],["nz-input","","maxlength","10",3,"ngModelChange","ngModel"],["width","160px"],["type","color",3,"change","value"],["width","200px"],[4,"ngIf"],["nz-input","","maxlength","20",3,"ngModel","ngModelChange",4,"ngIf"],[3,"click"],[1,"mx-2.5",3,"click"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom","class","!text-red-500",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-input","","maxlength","20",3,"ngModelChange","ngModel"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"!text-red-500",3,"nzOnConfirm","nzPopconfirmTitle"]],template:function(e,t){if(e&1){let o=x();a(0,"button",1),u("click",function(){return d(o),g(t.handleAdd())}),l(1),r(),a(2,"button",2),u("click",function(){return d(o),g(t.handleSubmit())}),l(3),r(),h(4,rt,2,1,"div",3),a(5,"nz-table",4,0)(7,"thead")(8,"tr")(9,"th"),l(10),r(),a(11,"th"),l(12),r(),a(13,"th"),l(14),r(),a(15,"th"),l(16),r(),a(17,"th"),l(18),r()()(),a(19,"tbody"),h(20,lt,17,9,"tr",5),r()()}e&2&&(p("nzLoading",t.submitting),i(),y(" ",t.$t("_addRow"),`
`),i(),p("nzLoading",t.submitting),i(),y(" ",t.$t("_save"),`
`),i(),p("ngIf",!t.isSelfDevelop),i(),p("nzData",t.tagList),i(5),_(t.$t("_tagName")),i(2),_(t.$t("_color")),i(2),_(t.$t("_sort")),i(2),_(t.$t("_remark")),i(2),_(t.$t("_action")),i(2),p("ngForOf",t.tagList)("ngForTrackBy",t.trackByItem))},dependencies:[G,A,j,R,U,k,D,E,B,W,$,F,J,H,it,tt,X,Y,nt,Z,et,Q,K],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}"]})};export{N as default};
