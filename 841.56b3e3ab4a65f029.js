"use strict";(self.webpackChunkexporter_sitevendedorhonda=self.webpackChunkexporter_sitevendedorhonda||[]).push([[841],{7841:(y,d,r)=>{r.r(d),r.d(d,{VehicleModule:()=>U});var h=r(6895),l=r(2655),e=r(1571),m=r(9951),u=r(1229),a=r(433);function v(n,t){if(1&n){const c=e.EpF();e.TgZ(0,"div",6)(1,"div",7),e._UZ(2,"img",8),e.TgZ(3,"div",9)(4,"h5",10),e._uU(5),e.qZA(),e.TgZ(6,"p",11),e._uU(7),e.qZA(),e.TgZ(8,"p",11),e._uU(9),e.qZA(),e.TgZ(10,"button",12),e.NdJ("click",function(){const o=e.CHM(c).$implicit,p=e.oxw();return e.KtG(p.viewDetails(o))}),e._uU(11,"Ver Detalhes"),e.qZA()()()()}if(2&n){const c=t.$implicit;e.xp6(2),e.s9C("alt",c.name),e.Q6J("src",c.imgUrl,e.LSH),e.xp6(3),e.Oqu(c.name),e.xp6(2),e.hij("Pre\xe7o: ",c.price,""),e.xp6(2),e.Oqu(c.description)}}let g=(()=>{const t=class{constructor(s){this.router=s,this.vehicles=[{id:1,name:"CG 160 Start",price:"R$ 99,99",description:"Descri\xe7\xe3o do CG 160 Start",imgUrl:"assets/images/vehicles/001.jpg"},{id:2,name:"Fazer 250",price:"R$ 89,99",description:"Descri\xe7\xe3o da Fazer 250",imgUrl:"assets/images/vehicles/001.jpg"},{id:3,name:"XRE 300",price:"R$ 119,99",description:"Descri\xe7\xe3o da XRE 300",imgUrl:"assets/images/vehicles/001.jpg"}],this.filteredVehicles=[...this.vehicles],this.filterText=""}filterVehicles(){this.filteredVehicles=this.vehicles.filter(s=>s.name.toLowerCase().includes(this.filterText.toLowerCase()))}viewDetails(s){const i=encodeURIComponent(JSON.stringify(s));this.router.navigate(["/vehicle/detail"],{queryParams:{data:i}})}};let n=t;return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-vehicle-list"]],decls:6,vars:2,consts:[[1,"container","mt-5"],[1,"row","mb-4"],[1,"col-md-6","mx-auto"],["type","text","placeholder","Filtrar por nome do ve\xedculo",1,"form-control",3,"ngModel","ngModelChange"],[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"card","mb-4"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"input",3),e.NdJ("ngModelChange",function(A){return o.filterText=A})("ngModelChange",function(){return o.filterVehicles()}),e.qZA()()(),e.TgZ(4,"div",4),e.YNc(5,v,12,5,"div",5),e.qZA()()),2&i&&(e.xp6(3),e.Q6J("ngModel",o.filterText),e.xp6(2),e.Q6J("ngForOf",o.filteredVehicles))},dependencies:[h.sg,a.Fj,a.JJ,a.On]}),n})();const f=[{path:"",component:(()=>{const t=class{};let n=t;return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-vehicle"]],decls:7,vars:0,consts:[[1,"mb-4"]],template:function(i,o){1&i&&(e.TgZ(0,"header"),e._UZ(1,"app-navbar"),e.qZA(),e.TgZ(2,"main")(3,"section",0),e._UZ(4,"app-vehicle-list"),e.qZA()(),e.TgZ(5,"footer"),e._UZ(6,"app-footer"),e.qZA())},dependencies:[m.S,u.c,g]}),n})()},{path:"detail",component:(()=>{const t=class{constructor(s,i){this.route=s,this.router=i}ngOnInit(){this.route.queryParams.subscribe(s=>{const i=s.data;i&&(this.vehicle=JSON.parse(decodeURIComponent(i)))})}goBack(){this.router.navigate(["/home"])}};let n=t;return t.\u0275fac=function(i){return new(i||t)(e.Y36(l.gz),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-vehicle-detail"]],decls:25,vars:5,consts:[[1,"container","mt-5"],[1,"row","text-center"],[1,"col-lg-6","mx-auto"],[1,"fw-bolder","fs-1"],[1,"card","border-0","shadow-lg"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"header"),e._UZ(1,"app-navbar"),e.qZA(),e.TgZ(2,"main")(3,"div",0)(4,"div",1)(5,"div",2)(6,"h1",3),e._uU(7),e.qZA(),e.TgZ(8,"div",4),e._UZ(9,"img",5),e.TgZ(10,"div",6)(11,"h5",7),e._uU(12,"Detalhes do Ve\xedculo"),e.qZA(),e.TgZ(13,"p",8)(14,"strong"),e._uU(15,"Pre\xe7o:"),e.qZA(),e._uU(16),e.qZA(),e.TgZ(17,"p",8)(18,"strong"),e._uU(19,"Descri\xe7\xe3o:"),e.qZA(),e._uU(20),e.qZA(),e.TgZ(21,"button",9),e.NdJ("click",function(){return o.goBack()}),e._uU(22,"Voltar"),e.qZA()()()()()()(),e.TgZ(23,"footer"),e._UZ(24,"app-footer"),e.qZA()),2&i&&(e.xp6(7),e.Oqu(null==o.vehicle?null:o.vehicle.name),e.xp6(2),e.s9C("alt",null==o.vehicle?null:o.vehicle.name),e.Q6J("src",null==o.vehicle?null:o.vehicle.imgUrl,e.LSH),e.xp6(7),e.hij(" ",null==o.vehicle?null:o.vehicle.price,""),e.xp6(4),e.hij(" ",null==o.vehicle?null:o.vehicle.description,""))},dependencies:[m.S,u.c]}),n})()}];let Z=(()=>{const t=class{};let n=t;return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(f),l.Bz]}),n})();var T=r(5642),C=r(294);let U=(()=>{const t=class{};let n=t;return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[h.ez,Z,C.I,T.K,a.u5,a.UX]}),n})()}}]);