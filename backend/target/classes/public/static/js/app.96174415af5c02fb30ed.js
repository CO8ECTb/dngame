webpackJsonp([1],{BJvG:function(t,e){},GY21:function(t,e,s){t.exports=s.p+"static/img/computer.8712d82.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("mtWM"),i=s.n(a),r=s("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"social"},[n("div",{staticClass:"google"},[n("img",{attrs:{src:s("likQ"),alt:"google"}}),t._v(" "),n("form",{staticClass:"a",on:{submit:function(e){return e.preventDefault(),t.enterInVk(e)}}},[n("input",{staticClass:"sub",attrs:{type:"submit",value:"LOG IN WITH VKONTAKTE"}})]),t._v(" "),n("a",{attrs:{href:"http://localhost:1234/login/google"}},[t._v("LOG IN WITH GOOGLE")])]),t._v(" "),t._m(0)]),t._v(" "),n("p",[t._v("or")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.enter(e)}}},[n("label",{staticClass:"first_label"},[t._v("\n      Login:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("br"),t._v(" "),n("label",{staticClass:"second_label"},[t._v("\n      Password:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"forgot_link"},[n("router-link",{attrs:{to:"/recovery"}},[t._v("Forgot password?")])],1),t._v(" "),this.$store.getters.isFailed?n("p",{staticStyle:{color:"red"}},[t._v("Incorrect credentials")]):t._e(),t._v(" "),n("input",{staticClass:"sub",attrs:{type:"submit",value:"Log in"}})]),t._v(" "),n("div",{staticClass:"link"},[n("router-link",{attrs:{to:"/registry"}},[t._v("Sign up")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vk"},[e("img",{attrs:{src:s("kubR"),alt:"vk"}}),this._v(" "),e("a",{attrs:{href:"http://localhost:1234/login/vk"}},[this._v("LOG IN WITH VKONTAKTE")])])}]};var c={name:"Main",components:{Login:s("VU/8")({name:"Login",data:function(){return{username:"",password:""}},methods:{enter:function(){this.$store.dispatch("signIn",{username:this.username,password:this.password}).then(),this.$store.commit("setLogin",{username:this.username,password:this.password})},enterInVk:function(){this.$store.dispatch("signInVk").then()}}},o,!1,function(t){s("TgTV")},"data-v-6a0027ab",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("section",{staticClass:"login_form"},[e("div",{staticClass:"container"},[e("Login")],1)]),this._v(" "),e("footer",[e("div",{staticClass:"container"},[e("router-link",{attrs:{to:"/contacts"}},[this._v("Contacts")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"container"},[e("img",{staticClass:"kira",attrs:{src:s("bTEt"),alt:"Kira"}}),this._v(" "),e("h1",[this._v("Death Note"),e("br"),this._v(" game")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"info_1"},[n("img",{attrs:{src:s("WJwM"),alt:"Note"}}),t._v(" "),n("p",[t._v("\n          В один прекрасный день ученик старшей школы случайно находит артефакт неизвестного происхождения: Тетрадь Смерти.\n          Тот, чьё имя будет записано в этой тетради, умрёт. С помощью неё подросток решил очистить общество от преступников.\n          Вскоре таинственные убийства потрясли мир. Никто не знал, почему люди умирают, но все понимали, что\n          за этим кто-то стоит. Люди назвали этого человека "),n("b",[t._v("Кирой")]),t._v("("),n("i",[t._v("от слова killer")]),t._v(").\n        ")])]),t._v(" "),n("div",{staticClass:"info_2"},[n("p",[t._v("\n          Убийства продолжались, но никто не мог понять, кто за этим стоит. Детектив Л, человек раскрывший самые\n          сложные преступления, вызвался поймать загадочного убийцу. Используя свой ум и чутьё "),n("b",[t._v("Агент")]),t._v(" Л пытается распутать\n          тайны, окутывающие преступника.\n        ")]),t._v(" "),n("img",{attrs:{src:s("u9ek"),alt:"hand"}})]),t._v(" "),n("div",{staticClass:"info_3"},[n("img",{attrs:{src:s("GY21"),alt:"computer"}}),t._v(" "),n("p",[t._v("\n          Многие люди встали на сторону "),n("b",[t._v("Киры")]),t._v(", считая, что преступники действительно заслуживают кары. Другие как "),n("b",[t._v("Агент")]),t._v(" посчитали его\n          обычным убийцей, которого надо поймать и остановить.\n          Выбери сторону и верши своё правосудие.\n        ")])])])])}]};var u=s("VU/8")(c,l,!1,function(t){s("Og9+")},null,null).exports,v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"registry"}},[t._m(0),t._v(" "),s("div",{staticClass:"registry"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[s("label",{staticClass:"first_label"},[t._v("\n        Login:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{type:"text"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"second_label"},[t._v("\n        Password:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"third_label"},[t._v("\n        Retype password:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.retypePassword,expression:"retypePassword"}],attrs:{type:"password"},domProps:{value:t.retypePassword},on:{input:function(e){e.target.composing||(t.retypePassword=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"fourth_label"},[t._v("\n        Email:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),1==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        User with the login exists\n      ")]):2==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        The password does not match with retype password\n      ")]):3==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        Password's length is less than 6\n      ")]):4==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        Password contains non-Latin letters\n      ")]):5==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        There's already user with the email\n      ")]):6==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        Email is incorrect\n      ")]):t._e(),t._v(" "),s("input",{staticClass:"sub",attrs:{type:"submit",value:"Sign up"}})]),t._v(" "),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:"/"}},[t._v("Return to welcome page")])],1),t._v(" "),s("footer",[s("div",{staticClass:"container"},[s("router-link",{attrs:{to:"/contacts"}},[t._v("Contacts")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h1",[this._v("Registration")]),this._v(" "),e("img",{attrs:{src:s("qxWt"),alt:"dn_logo"}})])}]};var m=s("VU/8")({name:"Registry",data:function(){return{login:"",password:"",retypePassword:"",email:""}},methods:{signup:function(){this.$store.dispatch("signup",{login:this.login,password:this.password,retypePassword:this.retypePassword,email:this.email}).then()}}},v,!1,function(t){s("PqVR")},"data-v-f26d4654",null).exports,d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"recovery"}},[t._m(0),t._v(" "),s("div",{staticClass:"recovery"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.enter(e)}}},[s("label",{staticClass:"first_label"},[t._v("\n        Email:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),1==this.$store.getters.forgotStatus?s("p",{staticStyle:{color:"red"}},[t._v("There's no user with the email")]):t._e(),t._v(" "),2==this.$store.getters.forgotStatus?s("p",{staticStyle:{color:"red"}},[t._v("Email is incorrect")]):t._e(),t._v(" "),3==this.$store.getters.forgotStatus?s("p",{staticStyle:{color:"red"}},[t._v("User does not have role 'user'")]):t._e(),t._v(" "),s("input",{staticClass:"sub",attrs:{type:"submit",value:"Send password"}})]),t._v(" "),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:"/"}},[t._v("Return to welcome page")])],1),t._v(" "),s("footer",[s("div",{staticClass:"container"},[s("router-link",{attrs:{to:"/contacts"}},[t._v("Contacts")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("h1",[this._v("Recovery")]),this._v(" "),e("img",{attrs:{src:s("qxWt"),alt:"dn_logo"}})])}]};var p=s("VU/8")({name:"Forgot",data:function(){return{email:""}},methods:{enter:function(){this.$store.dispatch("forgot",{email:this.email}).then()}}},d,!1,function(t){s("BJvG")},"data-v-4669391b",null).exports,g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n  "+t._s(t.checkIfConfirmed())+"\n  "),s("p",[t._v("Вы вошли!")]),t._v(" "),this.$store.getters.loginStatus?t._e():s("div",[s("p",[t._v("\n      Ваша почта ещё не подтверждена.\n    ")]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[s("input",{staticClass:"sub",attrs:{type:"submit",value:"Отправить снова"}})])]),t._v(" "),s("a",{attrs:{href:"/logout"}},[t._v("Logout")])])},staticRenderFns:[]};var f=s("VU/8")({name:"Game",methods:{send:function(){this.$store.dispatch("sendToken").then()},checkIfConfirmed:function(){this.$store.dispatch("checkIfConfirmed").then()}}},g,!1,function(t){s("TUkf")},"data-v-484f83c1",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("\n    Вам на почту должно было прийти сообщение. Перейдите по присланной ссылке, чтобы завершить аутентификацию.\n  ")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Вернуться на главную страницу")])],1)},staticRenderFns:[]};var h=s("VU/8")({name:"Confirm"},_,!1,function(t){s("T6K/")},"data-v-5fcf6cbe",null).exports,w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("Новый пароль был выслан на вашу почту")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Вернуться на главную страницу")])],1)},staticRenderFns:[]};var b=s("VU/8")({name:"ForgotMessage"},w,!1,function(t){s("qUA0")},"data-v-2e8102aa",null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"link"},[e("router-link",{attrs:{to:"/"}},[this._v("Return to welcome page")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("\n      Pizza-eater\n    ")]),this._v(" "),e("br"),this._v("\n    и\n    "),e("br"),this._v(" "),e("p",[this._v("\n      CO8ECTb\n    ")])])}]};var y=s("VU/8")({name:"Contacts"},S,!1,function(t){s("c7Zp")},"data-v-24f0b4aa",null).exports;n.a.use(r.a);var C=new r.a({mode:"history",hash:!1,routes:[{path:"/",name:"Main",component:u},{path:"/registry",name:"Registry",component:m},{path:"/recovery",name:"Forgot",component:p},{path:"/game",name:"Game",component:f},{path:"/confirm",name:"ConfirmMessage",component:h},{path:"/forgotMessage",name:"ForgotMessage",component:b},{path:"/contacts",name:"Contacts",component:y}]}),k={state:{login:[],isFailed:!1,loginStatus:!0},mutations:{setLogin:function(t,e){t.login=e},setFailed:function(t,e){t.isFailed=e},setLoginStatus:function(t,e){t.loginStatus=e}},getters:{isFailed:function(t){return t.isFailed},login:function(t){return t.login},loginStatus:function(t){return t.loginStatus}},actions:{signIn:function(t,e){i()("/login",{params:{username:e.username,password:e.password},method:"POST"}).then(function(e){(e.status=200)?C.push("/game"):t.commit("setFailed",!0)}).catch(function(e){t.commit("setFailed",!0)})},sendToken:function(t){i()("/resendEmail",{params:{userLogin:t.state.login.username},method:"POST"}).then(function(e){(e.status=200)?t.commit("setLoginStatus",!0):t.commit("setLoginStatus",!1)}).catch(function(e){t.commit("setLoginStatus",!1)})},checkIfConfirmed:function(t){i()("/confirm/check",{params:{userLogin:t.state.login.username},method:"GET"}).then(function(e){t.commit("setLoginStatus",e.data)}).catch(function(t){console.log(t)})},signInVk:function(t){i()("/login/vk",{method:"GET"}).then(function(t){console.log(t),C.push("/game")}).catch(function(t){console.log(t),C.push("/")})}}},$={state:{regData:[],failed:!1,errorStatus:0},mutations:{setLogin:function(t,e){t.login=e},setFailed:function(t,e){t.failed=e},setStatus:function(t,e){t.errorStatus=e}},getters:{failed:function(t){return t.failed},errorStatus:function(t){return t.errorStatus}},actions:{signup:function(t,e){i.a.post("/signup",{login:e.login,password:e.password,retypePassword:e.retypePassword,email:e.email}).then(function(e){t.commit("setStatus",e.data),0!==e.data&&(t.commit("setStatus",e.data),C.push("/registry")),0==e.data&&C.push("/confirm")}).catch(function(e){t.commit("setFailed",!0)})}}},x={state:{email:[],forgotStatus:0},mutations:{setEmail:function(t,e){t.email=e},setForgotStatus:function(t,e){t.forgotStatus=e}},getters:{email:function(t){return t.email},forgotStatus:function(t){return t.forgotStatus}},actions:{forgot:function(t,e){i()("/forgot/password",{params:{email:e.email},method:"POST"}).then(function(e){t.commit("setForgotStatus",e.data),0===e.data&&(t.commit("setForgotStatus",e.data),C.push("/forgotMessage"))}).catch(function(t){console.log(t)})}}},E=s("NYxO");n.a.use(E.a);var T=new E.a.Store({modules:{login:k,registry:$,forgot:x}}),F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},P=s("VU/8")({name:"App"},F,!1,null,null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",store:T,router:C,components:{App:P},template:"<App/>"})},"Og9+":function(t,e){},PqVR:function(t,e){},"T6K/":function(t,e){},TUkf:function(t,e){},TgTV:function(t,e){},WJwM:function(t,e,s){t.exports=s.p+"static/img/note.6e353ac.png"},bTEt:function(t,e,s){t.exports=s.p+"static/img/kira.f3f5038.png"},c7Zp:function(t,e){},kubR:function(t,e,s){t.exports=s.p+"static/img/vk_logo.d7a26bb.png"},likQ:function(t,e,s){t.exports=s.p+"static/img/google_logo.5499a33.png"},qUA0:function(t,e){},qxWt:function(t,e,s){t.exports=s.p+"static/img/dn_logo.2d7fe6d.jpg"},u9ek:function(t,e,s){t.exports=s.p+"static/img/hand.4b92932.png"}},["NHnr"]);
//# sourceMappingURL=app.96174415af5c02fb30ed.js.map