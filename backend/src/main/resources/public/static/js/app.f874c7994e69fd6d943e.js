webpackJsonp([1],{"+dZy":function(t,e){},GY21:function(t,e,s){t.exports=s.p+"static/img/computer.8712d82.png"},H7ik:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("mtWM"),i=s.n(n),r={state:{login:[],isFailed:!1},mutations:{setLogin:function(t,e){t.login=e},setFailed:function(t,e){t.isFailed=e}},getters:{num:function(t){return t.num},isFailed:function(t){return t.isFailed}},actions:{signIn:function(t,e){i()("/login",{params:{username:e.username,password:e.password},method:"POST"}).then(function(e){200!=e.status?t.commit("setFailed",!0):t.router.push("/game")}).catch(function(e){t.commit("setFailed",!0)})}}},o={state:{regData:[]},mutations:{setLogin:function(t,e){t.login=e}},actions:{signup:function(t,e){i.a.post("/signup",{login:e.login,password:e.password,retypePassword:e.retypePassword,email:e.email}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},l=s("NYxO");a.a.use(l.a);var c=new l.a.Store({modules:{login:r,registry:o}}),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},v=s("VU/8")({name:"App"},u,!1,null,null,null).exports,p=s("/ocq"),m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("p",[t._v("or")]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.enter(e)}}},[s("label",{staticClass:"first_label"},[t._v("\n      Login:\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"second_label"},[t._v("\n      Password:\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"forgot_link"},[s("router-link",{attrs:{to:"/recovery"}},[t._v("Forgot password?")])],1),t._v(" "),this.$store.getters.isFailed?s("p",{staticStyle:{color:"red"}},[t._v("Incorrect credentials")]):t._e(),t._v(" "),s("input",{staticClass:"sub",attrs:{type:"submit",value:"Log in"}})]),t._v(" "),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:"/registry"}},[t._v("Sign up")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social"},[e("div",{staticClass:"google"},[e("img",{attrs:{src:s("likQ"),alt:"google"}}),this._v(" "),e("a",{attrs:{href:"http://localhost:1234/login/google"}},[this._v("LOG IN WITH GOOGLE")])]),this._v(" "),e("div",{staticClass:"vk"},[e("img",{attrs:{src:s("kubR"),alt:"vk"}}),this._v(" "),e("a",{attrs:{href:"http://localhost:1234/login/vk"}},[this._v("LOG IN WITH VKONTAKTE")])])])}]};var d={name:"Main",components:{Login:s("VU/8")({name:"Login",data:function(){return{username:"",password:""}},methods:{enter:function(){this.$store.dispatch("signIn",{username:this.username,password:this.password}).then()}}},m,!1,function(t){s("ZWcX")},"data-v-1cc131ba",null).exports}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("section",{staticClass:"login_form"},[e("div",{staticClass:"container"},[e("Login")],1)]),this._v(" "),this._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"container"},[e("img",{staticClass:"kira",attrs:{src:s("bTEt"),alt:"Kira"}}),this._v(" "),e("h1",[this._v("Death Note"),e("br"),this._v(" game")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"info_1"},[a("img",{attrs:{src:s("WJwM"),alt:"Note"}}),t._v(" "),a("p",[t._v("\n          В один прекрасный день ученик старшей школы случайно находит артефакт неизвестного происхождения: Тетрадь Смерти.\n          Тот, чьё имя будет записано в этой тетради, умрёт. С помощью неё подросток решил очистить общество от преступников.\n          Вскоре таинственные убийства потрясли мир. Никто не знал, почему люди умирают, но все понимали, что\n          за этим кто-то стоит. Люди назвали этого человека "),a("b",[t._v("Кирой")]),t._v("("),a("i",[t._v("от слова killer")]),t._v(").\n        ")])]),t._v(" "),a("div",{staticClass:"info_2"},[a("p",[t._v("\n          Убийства продолжались, но никто не мог понять, кто за этим стоит. Детектив Л, человек раскрывший самые\n          сложные преступления, вызвался поймать загадочного убийцу. Используя свой ум и чутьё "),a("b",[t._v("Агент")]),t._v(" Л пытается распутать\n          тайны, окутывающие преступника.\n        ")]),t._v(" "),a("img",{attrs:{src:s("u9ek"),alt:"hand"}})]),t._v(" "),a("div",{staticClass:"info_3"},[a("img",{attrs:{src:s("GY21"),alt:"computer"}}),t._v(" "),a("p",[t._v("\n          Многие люди встали на сторону "),a("b",[t._v("Киры")]),t._v(", считая, что преступники действительно заслуживают кары. Другие как "),a("b",[t._v("Агент")]),t._v(" посчитали его\n          обычным убийцей, которого надо поймать и остановить.\n          Выбери сторону и верши своё правосудие.\n        ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",{staticClass:"container"},[e("a",{attrs:{href:"#"}},[this._v("Our contacts")])])])}]};var g=s("VU/8")(d,_,!1,function(t){s("aFtA")},null,null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"registry"}},[t._m(0),t._v(" "),s("div",{staticClass:"registry"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[s("label",{staticClass:"first_label"},[t._v("\n        Login:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{type:"text"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"second_label"},[t._v("\n        Password:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"third_label"},[t._v("\n        Retype password:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.retypePassword,expression:"retypePassword"}],attrs:{type:"password"},domProps:{value:t.retypePassword},on:{input:function(e){e.target.composing||(t.retypePassword=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"fourth_label"},[t._v("\n        Email:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("input",{staticClass:"sub",attrs:{type:"submit",value:"Sign up"}})]),t._v(" "),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:"/"}},[t._v("Return to welcome page")])],1),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h1",[this._v("Registration")]),this._v(" "),e("img",{attrs:{src:s("qxWt"),alt:"dn_logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",{staticClass:"container"},[e("a",{attrs:{href:"#"}},[this._v("Our contacts")])])])}]};var h=s("VU/8")({name:"Registry",data:function(){return{login:"",password:"",retypePassword:"",email:""}},methods:{signup:function(){var t=this;this.$store.dispatch("signup",{login:this.login,password:this.password,retypePassword:this.retypePassword,email:this.email}).then(function(){return t.$router.push("/")})}}},f,!1,function(t){s("H7ik")},"data-v-11920130",null).exports,w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"recovery"}},[t._m(0),t._v(" "),s("div",{staticClass:"recovery"},[s("label",{staticClass:"first_label"},[t._v("\n      Email:\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("input",{staticClass:"sub",attrs:{type:"submit",value:"Send password"}}),t._v(" "),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:"/"}},[t._v("Return to welcome page")])],1),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("h1",[this._v("Recovery")]),this._v(" "),e("img",{attrs:{src:s("qxWt"),alt:"dn_logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",{staticClass:"container"},[e("a",{attrs:{href:"#"}},[this._v("Our contacts")])])])}]};var b=s("VU/8")({name:"Forgot"},w,!1,function(t){s("ctyg")},"data-v-2769e2ab",null).exports,y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  Вы вошли!\n")])},staticRenderFns:[]};var C=s("VU/8")({name:"Game"},y,!1,function(t){s("+dZy")},"data-v-00b49c8a",null).exports;a.a.use(p.a);var x=new p.a({mode:"history",hash:!1,routes:[{path:"/",name:"Main",component:g},{path:"/registry",name:"Registry",component:h},{path:"/recovery",name:"Forgot",component:b},{path:"/game",name:"Game",component:C}]});a.a.config.productionTip=!1,new a.a({el:"#app",store:c,router:x,components:{App:v},template:"<App/>"})},WJwM:function(t,e,s){t.exports=s.p+"static/img/note.6e353ac.png"},ZWcX:function(t,e){},aFtA:function(t,e){},bTEt:function(t,e,s){t.exports=s.p+"static/img/kira.f3f5038.png"},ctyg:function(t,e){},kubR:function(t,e,s){t.exports=s.p+"static/img/vk_logo.d7a26bb.png"},likQ:function(t,e,s){t.exports=s.p+"static/img/google_logo.5499a33.png"},qxWt:function(t,e,s){t.exports=s.p+"static/img/dn_logo.2d7fe6d.jpg"},u9ek:function(t,e,s){t.exports=s.p+"static/img/hand.4b92932.png"}},["NHnr"]);
//# sourceMappingURL=app.f874c7994e69fd6d943e.js.map