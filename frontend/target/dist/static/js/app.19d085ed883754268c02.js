webpackJsonp([1],{BJvG:function(t,e){},GY21:function(t,e,s){t.exports=s.p+"static/img/computer.8712d82.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),o=s("mtWM"),a=s.n(o),i=s("/ocq"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"social"},[n("div",{staticClass:"google"},[n("img",{attrs:{src:s("likQ"),alt:"google"}}),t._v(" "),n("a",{attrs:{href:"http://localhost:1234/login/google"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("LOG IN WITH GOOGLE")])]),t._v(" "),n("div",{staticClass:"vk"},[n("img",{attrs:{src:s("kubR"),alt:"vk"}}),t._v(" "),n("a",{attrs:{href:"http://localhost:1234/login/vk"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("LOG IN WITH VKONTAKTE "+t._s(t.checkIfLoggedIn()))])])]),t._v(" "),n("p",[t._v("or")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.enter(e)}}},[n("label",{staticClass:"first_label"},[t._v("\n      Login:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("br"),t._v(" "),n("label",{staticClass:"second_label"},[t._v("\n      Password:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"forgot_link"},[n("router-link",{attrs:{to:"/recovery"}},[t._v("Forgot password?")])],1),t._v(" "),this.$store.getters.isFailed?n("p",{staticStyle:{color:"red"}},[t._v("Incorrect credentials")]):t._e(),t._v(" "),n("input",{staticClass:"sub",attrs:{type:"submit",value:"Log in"}})]),t._v(" "),n("div",{staticClass:"link"},[n("router-link",{attrs:{to:"/registry"}},[t._v("Sign up")])],1)])},staticRenderFns:[]};var l={name:"Main",components:{Login:s("VU/8")({name:"Login",data:function(){return{username:"",password:""}},methods:{enter:function(){this.$store.dispatch("signIn",{username:this.username,password:this.password}).then(),this.$store.commit("setLogin",{username:this.username,password:this.password})},checkIfLoggedIn:function(){this.$store.dispatch("checkIfLoggedIn").then()}}},r,!1,function(t){s("lDft")},"data-v-65841b6a",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("section",{staticClass:"login_form"},[e("div",{staticClass:"container"},[e("Login")],1)]),this._v(" "),e("footer",[e("div",{staticClass:"container"},[e("router-link",{attrs:{to:"/contacts"}},[this._v("Contacts")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"container"},[e("img",{staticClass:"kira",attrs:{src:s("bTEt"),alt:"Kira"}}),this._v(" "),e("h1",[this._v("Death Note"),e("br"),this._v(" game")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"info_1"},[n("img",{attrs:{src:s("WJwM"),alt:"Note"}}),t._v(" "),n("p",[t._v("\n          В один прекрасный день ученик старшей школы случайно находит артефакт неизвестного происхождения: Тетрадь Смерти.\n          Тот, чьё имя будет записано в этой тетради, умрёт. С помощью неё подросток решил очистить общество от преступников.\n          Вскоре таинственные убийства потрясли мир. Никто не знал, почему люди умирают, но все понимали, что\n          за этим кто-то стоит. Люди назвали этого человека "),n("b",[t._v("Кирой")]),t._v("("),n("i",[t._v("от слова killer")]),t._v(").\n        ")])]),t._v(" "),n("div",{staticClass:"info_2"},[n("p",[t._v("\n          Убийства продолжались, но никто не мог понять, кто за этим стоит. Детектив Л, человек раскрывший самые\n          сложные преступления, вызвался поймать загадочного убийцу. Используя свой ум и чутьё "),n("b",[t._v("Агент")]),t._v(" Л пытается распутать\n          тайны, окутывающие преступника.\n        ")]),t._v(" "),n("img",{attrs:{src:s("u9ek"),alt:"hand"}})]),t._v(" "),n("div",{staticClass:"info_3"},[n("img",{attrs:{src:s("GY21"),alt:"computer"}}),t._v(" "),n("p",[t._v("\n          Многие люди встали на сторону "),n("b",[t._v("Киры")]),t._v(", считая, что преступники действительно заслуживают кары. Другие как "),n("b",[t._v("Агент")]),t._v(" посчитали его\n          обычным убийцей, которого надо поймать и остановить.\n          Выбери сторону и верши своё правосудие.\n        ")])])])])}]};var u=s("VU/8")(l,c,!1,function(t){s("Og9+")},null,null).exports,m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"registry"}},[t._m(0),t._v(" "),s("div",{staticClass:"registry"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[s("label",{staticClass:"first_label"},[t._v("\n        Login:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{type:"text"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"second_label"},[t._v("\n        Password:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"third_label"},[t._v("\n        Retype password:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.retypePassword,expression:"retypePassword"}],attrs:{type:"password"},domProps:{value:t.retypePassword},on:{input:function(e){e.target.composing||(t.retypePassword=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"fourth_label"},[t._v("\n        Email:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),1==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        User with the login exists\n      ")]):2==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        The password does not match with retype password\n      ")]):3==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        Password's length is less than 6\n      ")]):4==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        Password contains non-Latin letters\n      ")]):5==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        There's already user with the email\n      ")]):6==this.$store.getters.errorStatus?s("p",{staticStyle:{color:"red"}},[t._v("\n        Email is incorrect\n      ")]):t._e(),t._v(" "),s("input",{staticClass:"sub",attrs:{type:"submit",value:"Sign up"}})]),t._v(" "),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:"/"}},[t._v("Return to welcome page")])],1),t._v(" "),s("footer",[s("div",{staticClass:"container"},[s("router-link",{attrs:{to:"/contacts"}},[t._v("Contacts")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h1",[this._v("Registration")]),this._v(" "),e("img",{attrs:{src:s("qxWt"),alt:"dn_logo"}})])}]};var v=s("VU/8")({name:"Registry",data:function(){return{login:"",password:"",retypePassword:"",email:""}},methods:{signup:function(){this.$store.dispatch("signup",{login:this.login,password:this.password,retypePassword:this.retypePassword,email:this.email}).then()}}},m,!1,function(t){s("PqVR")},"data-v-f26d4654",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"recovery"}},[t._m(0),t._v(" "),s("div",{staticClass:"recovery"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.enter(e)}}},[s("label",{staticClass:"first_label"},[t._v("\n        Email:\n        "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),1==this.$store.getters.forgotStatus?s("p",{staticStyle:{color:"red"}},[t._v("There's no user with the email")]):t._e(),t._v(" "),2==this.$store.getters.forgotStatus?s("p",{staticStyle:{color:"red"}},[t._v("Email is incorrect")]):t._e(),t._v(" "),3==this.$store.getters.forgotStatus?s("p",{staticStyle:{color:"red"}},[t._v("User does not have role 'user'")]):t._e(),t._v(" "),s("input",{staticClass:"sub",attrs:{type:"submit",value:"Send password"}})]),t._v(" "),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:"/"}},[t._v("Return to welcome page")])],1),t._v(" "),s("footer",[s("div",{staticClass:"container"},[s("router-link",{attrs:{to:"/contacts"}},[t._v("Contacts")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("h1",[this._v("Recovery")]),this._v(" "),e("img",{attrs:{src:s("qxWt"),alt:"dn_logo"}})])}]};var g=s("VU/8")({name:"Forgot",data:function(){return{email:""}},methods:{enter:function(){this.$store.dispatch("forgot",{email:this.email}).then()}}},f,!1,function(t){s("BJvG")},"data-v-4669391b",null).exports,d={name:"Game",data:function(){return{profile:{name:"",surname:"",patr:"",sex:void 0,bornDate:""},class:{isKira:void 0,regionId:void 0}}},methods:{send:function(){this.$store.dispatch("sendToken").then()},checkIfConfirmed:function(){this.$store.dispatch("checkIfConfirmed").then()},getUserInfo:function(){this.$store.dispatch("getUser").then()},createProfile:function(){this.$store.dispatch("createProfile",{name:this.profile.name,surname:this.profile.surname,patr:this.profile.patr,sex:this.profile.sex,bornDate:this.profile.bornDate}).then()},getProfile:function(){this.$store.dispatch("getProfile").then()},deleteProfile:function(){this.$store.dispatch("deleteProfile").then()},classChoose:function(){this.$store.dispatch("classChoose",{isKira:this.class.isKira,regionId:this.class.regionId}).then()},hasProfile:function(){this.$store.dispatch("hasProfile").then()},updateLoginName:function(){this.$store.dispatch("getLoginName").then()}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n  "+t._s(t.checkIfConfirmed())+"\n  "+t._s(t.updateLoginName())+"\n  "+t._s(t.getUserInfo())+"\n  "+t._s(t.hasProfile())+"\n  "),this.$store.getters.loginStatus?t._e():s("div",[s("p",[t._v("\n      Ваша почта ещё не подтверждена.\n    ")]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[s("input",{staticClass:"sub",attrs:{type:"submit",value:"Отправить снова"}})])]),t._v(" "),this.$store.getters.loginStatus&&this.$store.getters.hasProfile?s("div",[s("div",{staticClass:"header"},[t._l(this.$store.getters.user,function(e){return s("div",[s("p",[t._v(t._s(e.login)+" "+t._s(e.regDate))])])}),t._v(" "),s("router-link",{staticClass:"settings_link",attrs:{to:"/settings"}},[t._v("Contacts")]),t._v(" "),s("a",{staticClass:"settings_logout",attrs:{href:"/logout"}},[t._v("Logout")])],2),t._v(" "),t._m(0)]):t._e(),t._v(" "),this.$store.getters.hasProfile?t._e():s("div",[s("div",{staticClass:"header"},[t._l(this.$store.getters.user,function(e){return s("div",[s("p",[t._v("Your login: "+t._s(e.login)+" Registration date: "+t._s(e.regDate))])])}),t._v(" "),s("router-link",{staticClass:"settings_link",attrs:{to:"/settings"}},[t._v("Contacts")]),t._v(" "),s("a",{staticClass:"settings_logout",attrs:{href:"/logout"}},[t._v("Logout")])],2),t._v(" "),s("div",{staticClass:"main"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.createProfile(e)}}},[s("label",{staticClass:"first_label"},[t._v("\n          Имя:\n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"second_label"},[t._v("\n          Фамилия:\n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.surname,expression:"surname"}],attrs:{type:"text"},domProps:{value:t.surname},on:{input:function(e){e.target.composing||(t.surname=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"third_label"},[t._v("\n          Отчество:\n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.patr,expression:"patr"}],attrs:{type:"text"},domProps:{value:t.patr},on:{input:function(e){e.target.composing||(t.patr=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"fourth_label"},[t._v("\n          Пол:\n          "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.profile.sex,expression:"profile.sex"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.profile,"sex",e.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:"",value:""}},[t._v("Пожалуйста, выберите пол")]),t._v(" "),s("option",{domProps:{value:!0}},[t._v("true")]),t._v(" "),s("option",{domProps:{value:!1}},[t._v("false")])])]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"fifth_label"},[s("datetime",{model:{value:t.profile.bornDate,callback:function(e){t.$set(t.profile,"bornDate",e)},expression:"profile.bornDate"}})],1),t._v(" "),s("br"),t._v(" "),s("input",{staticClass:"sub",attrs:{type:"submit",value:"Создать"}})])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("button",[t._v("Начать")]),t._v(" "),s("br"),t._v(" "),s("button",[t._v("Правила")]),t._v(" "),s("br"),t._v(" "),s("button",[t._v("Достижения")]),t._v(" "),s("br"),t._v(" "),s("button",[t._v("Удалить профиль")])])}]};var h=s("VU/8")(d,p,!1,function(t){s("hEZ/")},"data-v-6030fe6a",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("\n    Вам на почту должно было прийти сообщение. Перейдите по присланной ссылке, чтобы завершить аутентификацию.\n  ")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Вернуться на главную страницу")])],1)},staticRenderFns:[]};var b=s("VU/8")({name:"Confirm"},_,!1,function(t){s("T6K/")},"data-v-5fcf6cbe",null).exports,C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("Новый пароль был выслан на вашу почту")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Вернуться на главную страницу")])],1)},staticRenderFns:[]};var S=s("VU/8")({name:"ForgotMessage"},C,!1,function(t){s("qUA0")},"data-v-2e8102aa",null).exports,w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._m(0),this._v(" "),e("div",{staticClass:"link"},[e("router-link",{attrs:{to:"/"}},[this._v("Return to welcome page")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("\n      Pizza-eater\n    ")]),this._v(" "),e("br"),this._v("\n    и\n    "),e("br"),this._v(" "),e("p",[this._v("\n      CO8ECTb\n    ")])])}]};var P=s("VU/8")({name:"Contacts"},w,!1,function(t){s("c7Zp")},"data-v-24f0b4aa",null).exports;n.a.use(i.a);var y=new i.a({mode:"history",hash:!1,routes:[{path:"/",name:"Main",component:u},{path:"/registry",name:"Registry",component:v},{path:"/recovery",name:"Forgot",component:g},{path:"/game",name:"Game",component:h},{path:"/confirm",name:"ConfirmMessage",component:b},{path:"/forgotMessage",name:"ForgotMessage",component:S},{path:"/contacts",name:"Contacts",component:P}]}),k={state:{login:[],isFailed:!1,loginStatus:!0,role:null,logged:!1},mutations:{setLogin:function(t,e){t.login=e},setFailed:function(t,e){t.isFailed=e},setLoginStatus:function(t,e){t.loginStatus=e},setLogged:function(t,e){t.logged=e},setRole:function(t,e){t.role=e}},getters:{isFailed:function(t){return t.isFailed},login:function(t){return t.login},loginStatus:function(t){return t.loginStatus},logged:function(t){return t.logged},role:function(t){return t.role}},actions:{signIn:function(t,e){a()("/login",{params:{username:e.username,password:e.password},method:"POST"}).then(function(e){(e.status=200)?y.push("/game"):t.commit("setFailed",!0)}).catch(function(e){t.commit("setFailed",!0)})},sendToken:function(t){a()("/resendEmail",{params:{userLogin:t.state.login.username},method:"POST"}).then(function(e){(e.status=200)?t.commit("setLoginStatus",!0):t.commit("setLoginStatus",!1)}).catch(function(e){t.commit("setLoginStatus",!1)})},checkIfConfirmed:function(t){a()("/confirm/check",{params:{userLogin:t.getters.loginName},method:"GET"}).then(function(e){t.commit("setLoginStatus",e.data)}).catch(function(t){console.log(t)})},checkIfLoggedIn:function(t){a()("/get",{method:"GET"}).then(function(e){t.commit("setRole",e.data),"vk"==t.getters.role[0].authority||"google"==t.getters.role[0].authority?(t.commit("setLogged",!0),y.push("/game")):t.commit("setLogged",!1)}).catch(function(t){console.log(t)})}}},x={state:{regDate:[],failed:!1,errorStatus:0},mutations:{setLogin:function(t,e){t.login=e},setFailed:function(t,e){t.failed=e},setStatus:function(t,e){t.errorStatus=e}},getters:{failed:function(t){return t.failed},errorStatus:function(t){return t.errorStatus}},actions:{signup:function(t,e){a.a.post("/signup",{login:e.login,password:e.password,retypePassword:e.retypePassword,email:e.email}).then(function(e){t.commit("setStatus",e.data),0!==e.data&&(t.commit("setStatus",e.data),y.push("/registry")),0==e.data&&y.push("/confirm")}).catch(function(e){t.commit("setFailed",!0)})}}},$={state:{email:[],forgotStatus:0},mutations:{setEmail:function(t,e){t.email=e},setForgotStatus:function(t,e){t.forgotStatus=e}},getters:{email:function(t){return t.email},forgotStatus:function(t){return t.forgotStatus}},actions:{forgot:function(t,e){a()("/forgot/password",{params:{email:e.email},method:"POST"}).then(function(e){t.commit("setForgotStatus",e.data),0===e.data&&(t.commit("setForgotStatus",e.data),y.push("/forgotMessage"))}).catch(function(t){console.log(t)})}}},L={state:{user:[],profile:[],hasProfile:void 0,loginName:null,profileCreateStatus:0,profileDeleteStatus:0,gameClassChooseStatus:0},mutations:{setUser:function(t,e){t.user=e},setProfile:function(t,e){t.profile=e},setHasProfile:function(t,e){t.hasProfile=e},setProfileCreateStatus:function(t,e){t.profileCreateStatus=e},setProfileDeleteStatus:function(t,e){t.profileDeleteStatus=e},setGameClassChooseStatus:function(t,e){t.gameClassChooseStatus=e},setLoginName:function(t,e){t.loginName=e}},getters:{user:function(t){return t.user},profile:function(t){return t.profile},hasProfile:function(t){return t.hasProfile},profileCreateStatus:function(t){return t.profileCreateStatus},profileDeleteStatus:function(t){return t.profileDeleteStatus},gameClassChooseStatus:function(t){return t.gameClassChooseStatus},loginName:function(t){return t.loginName}},actions:{getUser:function(t,e){a()("/game/user/get",{params:{login:t.getters.loginName},method:"GET"}).then(function(e){t.commit("setUser",e.data)}).catch(function(t){console.log(t)})},createProfile:function(t,e){a()("/game/profile/create",{params:{name:e.name,surname:e.surname,patr:e.patr,sex:e.sex,bornDate:e.bornDate,userLogin:t.getters.loginName},method:"POST"}).then(function(e){t.commit("setProfileCreateStatus",e.data)}).catch(function(t){console.log(t)})},getProfile:function(t,e){a()("/game/user/profile/get",{params:{login:t.getters.loginName},method:"GET"}).then(function(e){t.commit("setProfile",e.data)}).catch(function(t){console.log(t)})},deleteProfile:function(t,e){a()("/game/profile/delete",{params:{login:t.getters.loginName},method:"POST"}).then(function(e){t.commit("setProfileDeleteStatus",e.data)}).catch(function(t){console.log(t)})},classChoose:function(t,e){a()("/game/class/choose",{params:{isKira:e.isKira,userLogin:t.getters.loginName,regionId:e.regionId},method:"POST"}).then(function(e){t.commit("setGameClassChooseStatus",e.data)}).catch(function(t){console.log(t)})},hasProfile:function(t,e){a()("/game/profile",{params:{login:t.getters.loginName},method:"GET"}).then(function(e){t.commit("setHasProfile",e.data)}).catch(function(t){console.log(t)})},getLoginName:function(t,e){a()("/login",{method:"GET"}).then(function(e){t.commit("setLoginName",e.data)}).catch(function(t){console.log(t)})}}},N=s("NYxO");n.a.use(N.a);var E=new N.a.Store({modules:{login:k,registry:x,forgot:$,game:L}}),I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},F=s("VU/8")({name:"App"},I,!1,null,null,null).exports,T=s("QEVx");n.a.config.productionTip=!1,n.a.component("datetime",T.Datetime),new n.a({el:"#app",store:E,router:y,components:{App:F},template:"<App/>"})},"Og9+":function(t,e){},PqVR:function(t,e){},"T6K/":function(t,e){},WJwM:function(t,e,s){t.exports=s.p+"static/img/note.6e353ac.png"},bTEt:function(t,e,s){t.exports=s.p+"static/img/kira.f3f5038.png"},c7Zp:function(t,e){},"hEZ/":function(t,e){},kubR:function(t,e,s){t.exports=s.p+"static/img/vk_logo.d7a26bb.png"},lDft:function(t,e){},likQ:function(t,e,s){t.exports=s.p+"static/img/google_logo.5499a33.png"},qUA0:function(t,e){},qxWt:function(t,e,s){t.exports=s.p+"static/img/dn_logo.2d7fe6d.jpg"},u9ek:function(t,e,s){t.exports=s.p+"static/img/hand.4b92932.png"}},["NHnr"]);
//# sourceMappingURL=app.19d085ed883754268c02.js.map