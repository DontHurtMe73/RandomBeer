(function(){"use strict";var r={963:function(r,e,t){var n=t(225),o=t(252);const a={class:"app"};function s(r,e,t,n,s,c){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(i)])}var c={},i=t(744);const u=(0,i.Z)(c,[["render",s]]);var l=u;const d={class:"btn"};function p(r,e,t,n,a,s){return(0,o.wg)(),(0,o.iD)("button",d,[(0,o.WI)(r.$slots,"default")])}var _={name:"my-button"};const f=(0,i.Z)(_,[["render",p]]);var m=f,v=[m];const b=(0,o.Uk)("Get Started...");function h(r,e,t,n,a,s){const c=(0,o.up)("my-button");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c,{class:"start__btn",onClick:e[0]||(e[0]=e=>r.$router.push("/random"))},{default:(0,o.w5)((()=>[b])),_:1})])}var g={};const w=(0,i.Z)(g,[["render",h],["__scopeId","data-v-55ea62c5"]]);var y=w,k=t(577),D=t(395);const O={class:"profile-card"},B=(0,o._)("div",{class:"profile-card__header"},[(0,o._)("img",{src:D})],-1),U={class:"profile-card__body"},z={class:"photo__wrapper"},j=["src"],C={class:"name"},x={class:"age"},W=(0,o._)("strong",null,"Возраст:",-1),Z={class:"employment"},E=(0,o.Uk)("Еще вариантик");function A(r,e,t,n,a,s){const c=(0,o.up)("random-beer"),i=(0,o.up)("my-button");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",O,[B,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.profile,(r=>((0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("div",z,[(0,o._)("img",{class:"user__photo",src:r.avatar},null,8,j)]),(0,o._)("div",C,(0,k.zw)(r.first_name+" "+r.last_name),1),(0,o._)("div",x,[W,(0,o.Uk)(" "+(0,k.zw)(s.curentAge(r.date_of_birth)),1)]),(0,o._)("div",Z,(0,k.zw)(r.employment.title),1)])))),256)),(0,o.Wm)(c,{randomBeer:a.beer},null,8,["randomBeer"]),(0,o.Wm)(i,{onClick:s.fetchBeer},{default:(0,o.w5)((()=>[E])),_:1},8,["onClick"])])])}const I=r=>((0,o.dD)("data-v-7d90d508"),r=r(),(0,o.Cn)(),r),P={class:"beer"},R=I((()=>(0,o._)("h2",{class:"beer__title"},"Сегодня я попробую:",-1))),Y={class:"beer__wrapper"},F={class:"beer__param"},H=I((()=>(0,o._)("strong",{class:"beer__strong"},"Название:",-1))),K={class:"beer__param"},M=I((()=>(0,o._)("strong",{class:"beer__strong"},"Брэнд:",-1))),T={class:"beer__param"},$=I((()=>(0,o._)("strong",{class:"beer__strong"},"Стиль:",-1))),q={class:"beer__param"},G=I((()=>(0,o._)("strong",{class:"beer__strong"},"Горечь:",-1))),S={class:"beer__param"},J=I((()=>(0,o._)("strong",{class:"beer__strong"},"Алкоголь:",-1)));function L(r,e,t,n,a,s){return(0,o.wg)(),(0,o.iD)("div",P,[R,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.randomBeer,(r=>((0,o.wg)(),(0,o.iD)("div",Y,[(0,o._)("div",F,[H,(0,o.Uk)((0,k.zw)(r.name),1)]),(0,o._)("div",K,[M,(0,o.Uk)((0,k.zw)(r.brand),1)]),(0,o._)("div",T,[$,(0,o.Uk)((0,k.zw)(r.style),1)]),(0,o._)("div",q,[G,(0,o.Uk)((0,k.zw)(r.ibu),1)]),(0,o._)("div",S,[J,(0,o.Uk)((0,k.zw)(r.alcohol),1)])])))),256))])}var N={props:{randomBeer:{type:Array,required:!0}}};const Q=(0,i.Z)(N,[["render",L],["__scopeId","data-v-7d90d508"]]);var V=Q,X=t(669),rr=t.n(X),er={components:{RandomBeer:V},data(){return{beer:[],profile:[]}},methods:{async fetchUser(){try{const r=await rr().get("https://random-data-api.com/api/users/random_user");this.profile.push(r.data)}catch(r){alert("Error")}},async fetchBeer(){try{const r=await rr().get("https://random-data-api.com/api/beer/random_beer");this.beer.pop(),this.beer.push(r.data)}catch(r){alert("Error")}},curentAge(r){let e=r.split("-"),t=e[0],n=e[1],o=e[2],a=new Date;return a.getFullYear()-t-((a.getMonth()- --n||a.getDate()-o)<0)}},mounted(){this.fetchUser(),this.fetchBeer()}};const tr=(0,i.Z)(er,[["render",A]]);var nr=tr,or=t(119);const ar=[{path:"/",component:y},{path:"/random",component:nr}],sr=(0,or.p7)({routes:ar,history:(0,or.PO)("/my-RandomBeer/")});var cr=sr;const ir=(0,n.ri)(l);v.forEach((r=>{ir.component(r.name,r)})),ir.use(cr).mount("#app")},395:function(r,e,t){r.exports=t.p+"img/beer2.01749fb0.jpg"}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return r[n](a,a.exports,t),a.exports}t.m=r,function(){var r=[];t.O=function(e,n,o,a){if(!n){var s=1/0;for(l=0;l<r.length;l++){n=r[l][0],o=r[l][1],a=r[l][2];for(var c=!0,i=0;i<n.length;i++)(!1&a||s>=a)&&Object.keys(t.O).every((function(r){return t.O[r](n[i])}))?n.splice(i--,1):(c=!1,a<s&&(s=a));if(c){r.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=r.length;l>0&&r[l-1][2]>a;l--)r[l]=r[l-1];r[l]=[n,o,a]}}(),function(){t.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return t.d(e,{a:e}),e}}(),function(){t.d=function(r,e){for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}}(),function(){t.p="/my-RandomBeer/"}(),function(){var r={143:0};t.O.j=function(e){return 0===r[e]};var e=function(e,n){var o,a,s=n[0],c=n[1],i=n[2],u=0;if(s.some((function(e){return 0!==r[e]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(i)var l=i(t)}for(e&&e(n);u<s.length;u++)a=s[u],t.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return t.O(l)},n=self["webpackChunkbanda_testovoe"]=self["webpackChunkbanda_testovoe"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(963)}));n=t.O(n)})();
//# sourceMappingURL=app.45b7b04c.js.map