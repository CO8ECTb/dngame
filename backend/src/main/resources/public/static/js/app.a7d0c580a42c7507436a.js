webpackJsonp([1],{"/HvJ":function(t,e,s){t.exports=s.p+"static/img/a2.d105e56.png"},"4hRP":function(t,e){},"5AuX":function(t,e,s){t.exports=s.p+"static/img/l.dcf0b6b.png"},"8brS":function(t,e,s){t.exports=s.p+"static/img/k.d3676a7.png"},"9PUp":function(t,e,s){t.exports=s.p+"static/img/404_v1.52fb591.png"},G4Ap:function(t,e){},IBQP:function(t,e){},J6Nf:function(t,e,s){t.exports=s.p+"static/img/a1.6584b5d.png"},JiRz:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i=s("nav3"),a=s.n(i),o=s("mtWM"),r=s.n(o),c=s("/ocq"),l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",[s("div",[t._v("Death Note")]),t._v(" "),s("div",[t._v("\n      "+t._s(t.checkIfLoggedIn())+"\n      "),s("router-link",{staticClass:"button16",attrs:{to:"/"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("Главная")]),t._v(" "),s("router-link",{staticClass:"button16",attrs:{to:"/about"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("О проекте")]),t._v(" "),this.$store.getters.logged?t._e():s("router-link",{staticClass:"button16",attrs:{to:"/login"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("Войти")]),t._v(" "),this.$store.getters.logged?t._e():s("router-link",{staticClass:"button16",attrs:{to:"/registry"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("Зарегистрироваться")]),t._v(" "),this.$store.getters.logged?s("router-link",{staticClass:"button16",attrs:{to:"/game"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("В игру")]):t._e(),t._v(" "),this.$store.getters.logged?s("router-link",{staticClass:"button16",attrs:{to:"/achievements"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("Мои достижения")]):t._e(),t._v(" "),this.$store.getters.logged?s("router-link",{staticClass:"button16",attrs:{to:"/settings"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("Настройки")]):t._e(),t._v(" "),this.$store.getters.logged?s("router-link",{staticClass:"button16",attrs:{to:"/logOut"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._v("Выйти")]):t._e()],1)])])},staticRenderFns:[]};var u=s("VU/8")({name:"Header",methods:{checkIfLoggedIn:function(){this.$store.dispatch("checkIfLoggedIn").then()}}},l,!1,function(t){s("IBQP")},"data-v-7e789ecd",null).exports,d={name:"MainPage",components:{Header:u}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("section",{staticClass:"main-section"},[n("div",{staticClass:"main"},[n("agile",{attrs:{infinite:!1,dots:!1,arrows:!1,autoplay:!0,speed:1700,timing:"linear",fade:!0,pauseOnHover:!1,autoplaySpeed:6500}},[n("div",{staticClass:"slide slide--1"},[n("div",[n("h3",[t._v("Добро пожаловать в онлайн головоломку по известной манге Death Note (Тетрадь смерти),\n              а также выпущенных на её основе анимационные сериал и фильмы. Выбери свою сторону.\n            ")])])]),t._v(" "),n("div",{staticClass:"slide slide--2"},[n("div",[n("h3",[t._v("В Death Note game представлено два типа персонажей на выбор. Играй за гениального агнета L\n              или за безумного убийцу Киру. Победи соперника и открывай ачивки.\n            ")])])]),t._v(" "),n("div",{staticClass:"slide slide--3"},[n("div",[n("h3",[t._v("Играя за агента L определи местоположение своего противника и застань его врасплох.\n              Учи страны вместе с нами и порази учительницу географии своими знаниями. Теперь ты\n              действительно учишься играя в компунктер.\n            ")])])]),t._v(" "),n("div",{staticClass:"slide slide--4"},[n("div",[n("h3",[t._v("Генерируй новости криминального мира, лови Киру на ошибках и веди себя к\n               победе в сражении. Делай невероятные серии побед и докажи всем, что ты лучший детектив.\n            ")])])]),t._v(" "),n("div",{staticClass:"slide slide--5"},[n("div",[n("h3",[t._v("Играя за Киру ты сможешь проявить всю свою фантазию, убивая преступников.\n              Опиши все обстоятельства смерти так, чтобы никто и никогда не смог тебя заподозрить.\n            ")])])]),t._v(" "),n("div",{staticClass:"slide slide--6"},[n("div",[n("h3",[t._v("Выбери удобный для тебя регион и обыграй соперника за наименьшее число ходов.\n              Победи всех агентов и докажи, что мир, который ты создаешь, становится все совершеннее\n              и совершеннее.\n            ")])])])]),t._v(" "),n("img",{staticStyle:{width:"5%","margin-top":"3px"},attrs:{src:s("inFH")}})],1)])],1)},staticRenderFns:[]};var f=s("VU/8")(d,m,!1,function(t){s("tcK6")},null,null).exports,v={name:"NewForgot",components:{Header:u},data:function(){return{email:""}},methods:{enter:function(){this.$store.dispatch("forgot",{email:this.email}).then()}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),t._v(" "),s("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),t._v(" "),s("section",{staticClass:"main-section"},[s("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),s("form",{attrs:{id:"recovery-form"},on:{submit:function(e){return e.preventDefault(),t.enter(e)}}},[s("fieldset",{staticClass:"email"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-input",attrs:{type:"email",placeholder:"Почта",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("router-link",{attrs:{to:"/contacts",id:"help"}},[t._v("Не получилось?")]),t._v(" "),t._m(1),t._v(" "),s("p",{attrs:{id:"fail-message"}},[1==this.$store.getters.forgotStatus?s("a",[t._v("Пользователя с таким адресом электронной почты у нас нет")]):t._e(),t._v(" "),2==this.$store.getters.forgotStatus?s("a",[t._v("Адрес электронной почты введен неверно")]):t._e(),t._v(" "),3==this.$store.getters.forgotStatus?s("a",[t._v("User does not have role 'user'")]):t._e()])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"35%"},attrs:{src:s("qxWt")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"submit",attrs:{type:"submit"}},[e("a",[this._v("Восстановить")])])])}]};var p=s("VU/8")(v,g,!1,function(t){s("JiRz")},"data-v-5d632b77",null).exports,h={name:"Game",data:function(){return{profile:{name:"",surname:"",patr:"",sex:void 0,bornDate:""},class:{isKira:void 0,regionId:void 0}}},methods:{send:function(){this.$store.dispatch("sendToken").then()},checkIfConfirmed:function(){this.$store.dispatch("checkIfConfirmed").then()},getUserInfo:function(){this.$store.dispatch("getUser").then()},createProfile:function(){this.$store.dispatch("createProfile",{name:this.profile.name,surname:this.profile.surname,patr:this.profile.patr,sex:this.profile.sex,bornDate:this.profile.bornDate}).then()},getProfile:function(){this.$store.dispatch("getProfile").then()},deleteProfile:function(){this.$store.dispatch("deleteProfile").then()},classChoose:function(){this.$store.dispatch("classChoose",{isKira:this.class.isKira,regionId:this.class.regionId}).then()},hasProfile:function(){this.$store.dispatch("hasProfile").then()},updateLoginName:function(){this.$store.dispatch("getLoginName").then()}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n  "+t._s(t.checkIfConfirmed())+"\n  "+t._s(t.updateLoginName())+"\n  "+t._s(t.getUserInfo())+"\n  "+t._s(t.hasProfile())+"\n  "),this.$store.getters.loginStatus?t._e():s("div",[s("p",[t._v("\n      Ваша почта ещё не подтверждена.\n    ")]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[s("input",{staticClass:"sub",attrs:{type:"submit",value:"Отправить снова"}})])]),t._v(" "),this.$store.getters.loginStatus&&this.$store.getters.hasProfile?s("div",[s("div",{staticClass:"header"},[t._l(this.$store.getters.user,function(e){return s("div",[s("p",[t._v(t._s(e.login)+" "+t._s(e.regDate))])])}),t._v(" "),s("router-link",{staticClass:"settings_link",attrs:{to:"/settings"}},[t._v("Contacts")]),t._v(" "),s("a",{staticClass:"settings_logout",attrs:{href:"/logout"}},[t._v("Logout")])],2),t._v(" "),t._m(0)]):t._e(),t._v(" "),this.$store.getters.hasProfile?t._e():s("div",[s("div",{staticClass:"header"},[t._l(this.$store.getters.user,function(e){return s("div",[s("p",[t._v("Your login: "+t._s(e.login)+" Registration date: "+t._s(e.regDate))])])}),t._v(" "),s("router-link",{staticClass:"settings_link",attrs:{to:"/settings"}},[t._v("Contacts")]),t._v(" "),s("a",{staticClass:"settings_logout",attrs:{href:"/logout"}},[t._v("Logout")])],2),t._v(" "),s("div",{staticClass:"main"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.createProfile(e)}}},[s("label",{staticClass:"first_label"},[t._v("\n          Имя:\n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"second_label"},[t._v("\n          Фамилия:\n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.surname,expression:"surname"}],attrs:{type:"text"},domProps:{value:t.surname},on:{input:function(e){e.target.composing||(t.surname=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"third_label"},[t._v("\n          Отчество:\n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.patr,expression:"patr"}],attrs:{type:"text"},domProps:{value:t.patr},on:{input:function(e){e.target.composing||(t.patr=e.target.value)}}})]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"fourth_label"},[t._v("\n          Пол:\n          "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.profile.sex,expression:"profile.sex"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.profile,"sex",e.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:"",value:""}},[t._v("Пожалуйста, выберите пол")]),t._v(" "),s("option",{domProps:{value:!0}},[t._v("true")]),t._v(" "),s("option",{domProps:{value:!1}},[t._v("false")])])]),t._v(" "),s("br"),t._v(" "),s("label",{staticClass:"fifth_label"},[s("datetime",{model:{value:t.profile.bornDate,callback:function(e){t.$set(t.profile,"bornDate",e)},expression:"profile.bornDate"}})],1),t._v(" "),s("br"),t._v(" "),s("input",{staticClass:"sub",attrs:{type:"submit",value:"Создать"}})])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("button",[t._v("Начать")]),t._v(" "),s("br"),t._v(" "),s("button",[t._v("Правила")]),t._v(" "),s("br"),t._v(" "),s("button",[t._v("Достижения")]),t._v(" "),s("br"),t._v(" "),s("button",[t._v("Удалить профиль")])])}]};var C=s("VU/8")(h,_,!1,function(t){s("hEZ/")},"data-v-6030fe6a",null).exports,b={name:"Confirm",data:function(){return{timeS:8}},methods:{setTimeStep:function(){var t=this;setTimeout(function(){t.timeS>0&&(t.timeS--,t.setTimeStep())},1e3)}},created:function(){this.setTimeStep(),setTimeout(function(){A.push({path:"/"})},9e3)}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",[s("p",[t._v("\n      На почту отправлено подтверждающее письмо. Подтверди почту, чтобы завершить регистрацию.\n    ")]),t._v(" "),s("router-link",{attrs:{to:"/",id:"to-main"}},[t._v("На главную страницу")]),t._v(" "),s("p",[t._v("\n      Автоматическое перенаправление через:  "),s("a",{attrs:{id:"time"}},[t._v(t._s(t.timeS))])])],1)])},staticRenderFns:[]};var w=s("VU/8")(b,S,!1,function(t){s("Xtia")},"data-v-7f009ec4",null).exports,k={name:"ForgotMessage",data:function(){return{timeS:8}},methods:{setTimeStep:function(){var t=this;setTimeout(function(){t.timeS>0&&(t.timeS--,t.setTimeStep())},1e3)}},created:function(){this.setTimeStep(),setTimeout(function(){A.push({path:"/login"})},9e3)}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",[s("p",[t._v("\n      Новый пароль был выслан на почту. Загляни, вдруг не пришло.\n    ")]),t._v(" "),s("router-link",{attrs:{to:"/login",id:"to-main"}},[t._v("На страницу авторизации")]),t._v(" "),s("p",[t._v("\n      Автоматическое перенаправление через:  "),s("a",{attrs:{id:"time"}},[t._v(t._s(t.timeS))])])],1)])},staticRenderFns:[]};var $=s("VU/8")(k,P,!1,function(t){s("G4Ap")},"data-v-52d1e47b",null).exports,x={name:"Contacts",components:{Header:u}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),e("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),this._v(" "),this._m(0),this._v(" "),this._m(1),this._v(" "),this._m(2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"left-section"},[e("a",[this._v("CO8ECTb")]),this._v(" "),e("img",{attrs:{src:s("w5Mo")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-section"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"questions-list"},[s("ul",[s("li",[s("a",[t._v("Есть предложения по улучшению?")])]),t._v(" "),s("li",[s("a",[t._v("Не можешь войти в свой аккаунт или восстановить его?")])]),t._v(" "),s("li",[s("a",[t._v("Возникли проблемы во время игрового процесса?")])]),t._v(" "),s("li",[s("a",[t._v("Или нашел очередной баг? (возможно это фича)")])]),t._v(" "),s("li",[s("a",[t._v("А может появились какие-то вопросы?")])])])]),t._v(" "),s("br"),t._v(" "),s("a",[t._v("Тогда пиши на нашу почту с соответствующей темой письма. Мы постараемся ответить в ближайшее время (наберитесь терпения)"),s("br"),t._v(" "),s("a",{attrs:{href:"mailto:deathNoteProject@yandex.ru"}},[t._v("deathNoteProject@yandex.ru")])]),t._v(" "),s("a",[t._v("Ну а если ты считаешь, что разработчики козлы, уроды и вообще у них руки растут не из того места, то можешь им об этом написать")]),t._v(" "),s("div",{staticClass:"contacts-table"},[s("table",[s("td",{attrs:{width:"50%",align:"center",id:"first-row"}},[s("tr",[t._v("CO8ECTb")]),t._v(" "),s("tr",[s("div",{staticClass:"button telegram"},[s("i",{staticClass:"fa fa-telegram",attrs:{"aria-hidden":"true"}}),t._v(" "),s("div",{staticClass:"slide"},[s("a",{attrs:{href:"http://t.me/c08ectb"}},[t._v("Telegram")])])])]),t._v(" "),s("tr",[s("div",{staticClass:"button github"},[s("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),t._v(" "),s("div",{staticClass:"slide"},[s("a",{attrs:{href:"https://github.com/CO8ECTb"}},[t._v("GitHub")])])])])]),t._v(" "),s("td",{attrs:{width:"50%",align:"center"}},[s("tr",[t._v("Pizza-Eater")]),t._v(" "),s("tr",[s("div",{staticClass:"button telegram"},[s("i",{staticClass:"fa fa-telegram",attrs:{"aria-hidden":"true"}}),t._v(" "),s("div",{staticClass:"slide"},[s("a",{attrs:{href:"http://t.me/kuroiavem"}},[t._v("Telegram")])])])]),t._v(" "),s("tr",[s("div",{staticClass:"button github"},[s("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),t._v(" "),s("div",{staticClass:"slide"},[s("a",{attrs:{href:"https://github.com/lerhyd"}},[t._v("GitHub")])])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"right-section"},[e("a",[this._v("Pizza-Eater")]),this._v(" "),e("img",{attrs:{src:s("f7r4")}})])}]};var I=s("VU/8")(x,y,!1,function(t){s("q3Yy")},"data-v-30d1fe90",null).exports,E={name:"NewForgot",components:{Header:u},data:function(){return{login:"",password:"",retypePassword:"",email:""}},methods:{signup:function(){this.$store.dispatch("signup",{login:this.login,password:this.password,retypePassword:this.retypePassword,email:this.email}).then()}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),t._v(" "),s("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),t._v(" "),t._m(0),t._v(" "),s("section",{staticClass:"main-section"},[s("div",{staticClass:"wrapper"},[t._m(1),t._v(" "),s("form",{attrs:{id:"registry-form"},on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[s("fieldset",{staticClass:"login"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"form-input",attrs:{type:"text",placeholder:"Придумайте логин",required:""},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),t._v(" "),s("fieldset",{staticClass:"password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-input",attrs:{type:"password",placeholder:"Придумайте пароль",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("fieldset",{staticClass:"re-password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.retypePassword,expression:"retypePassword"}],staticClass:"form-input",attrs:{type:"password",placeholder:"Повторите пароль",required:""},domProps:{value:t.retypePassword},on:{input:function(e){e.target.composing||(t.retypePassword=e.target.value)}}})]),t._v(" "),s("fieldset",{staticClass:"email"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-input",attrs:{type:"email",placeholder:"Введите почту",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),t._m(2),t._v(" "),s("p",{attrs:{id:"fail-message"}},[1==this.$store.getters.errorStatus?s("a",[t._v("Пользователь с таким логином уже существует")]):2==this.$store.getters.errorStatus?s("a",[t._v("Пароли не совпадают")]):3==this.$store.getters.errorStatus?s("a",[t._v("Длина пароля меньше 6 символов")]):4==this.$store.getters.errorStatus?s("a",[t._v("Пароль содержит недопустимые символы")]):5==this.$store.getters.errorStatus?s("a",[t._v("Пользователь с такий адресом почты уже существует")]):6==this.$store.getters.errorStatus?s("a",[t._v("Поле с почтой заполнено неверно")]):t._e()])])])]),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"left-section"},[e("img",{attrs:{src:s("5AuX")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"30%"},attrs:{src:s("SOZI")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"submit",attrs:{type:"submit"}},[e("a",[this._v("Зарегистрироваться")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"right-section"},[e("img",{attrs:{src:s("8brS")}})])}]};var N=s("VU/8")(E,L,!1,function(t){s("4hRP")},"data-v-5f09b8b0",null).exports,F={name:"Log-In",components:{Header:u},methods:{enter:function(){this.$store.dispatch("signIn",{username:this.username,password:this.password}).then(),this.$store.commit("setLogin",{username:this.username,password:this.password})},checkIfLoggedIn:function(){this.$store.dispatch("checkIfLoggedIn").then()}},data:function(){return{username:"",password:""}}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),t._v(" "),s("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),t._v(" "),t._m(0),t._v(" "),s("section",{staticClass:"main-section"},[s("div",{staticClass:"wrapper"},[t._m(1),t._v(" "),s("div",{attrs:{id:"login-form"}},[s("ul",[t._v("\n        "+t._s(t.checkIfLoggedIn())+"\n        "),s("a",{attrs:{href:"/login/vk"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._m(2)]),t._v(" "),s("a",{attrs:{href:"/login/google"},on:{click:function(e){return t.checkIfLoggedIn()}}},[t._m(3)])]),t._v(" "),s("fieldset",{staticClass:"login"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-input",attrs:{type:"text",placeholder:"Логин",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),s("fieldset",{staticClass:"password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-input",attrs:{type:"password",placeholder:"Пароль",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("router-link",{attrs:{id:"forgot",to:"/recovery"}},[t._v("Забыли пароль?")]),t._v(" "),s("ul",[s("li",{staticClass:"sign-in",on:{click:t.enter}},[s("i",{staticClass:"fa fa-sign-in",attrs:{"aria-hidden":"true"}})]),t._v(" "),s("router-link",{attrs:{to:"/registry"}},[s("li",{staticClass:"sign-in"},[s("i",{staticClass:"fa fa-user-plus",attrs:{"aria-hidden":"true"}})])])],1),t._v(" "),this.$store.getters.isFailed?s("p",{attrs:{id:"fail-message"}},[t._v("Неверный логин или пароль!")]):t._e()],1)])]),t._v(" "),t._m(4)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"left-section"},[e("img",{attrs:{src:s("J6Nf")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"30%"},attrs:{src:s("SOZI")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"fa fa-vk",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"fa fa-google-plus",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"right-section"},[e("img",{attrs:{src:s("/HvJ")}})])}]};var D=s("VU/8")(F,T,!1,function(t){s("rPQ4")},"data-v-3d48b966",null).exports,H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"main-section"},[s("div",{attrs:{id:"header"}},[s("router-link",{staticClass:"close",attrs:{to:"/"}})],1),t._v(" "),s("div",{staticClass:"wrapper"},[s("div",{attrs:{id:"error-number"}},[t._v("404")]),t._v(" "),s("div",{attrs:{id:"error-title"}},[t._v("Page Not Found")]),t._v(" "),s("div",{attrs:{id:"error-text"}},[t._v(" Упс. Что-то пошло не так."),s("br"),t._v("Впрочем, ничего нового. Го на\n        "),s("router-link",{staticStyle:{color:"#111111","font-size":"inherit"},attrs:{to:"/"}},[t._v("главную")]),t._v("?")],1),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"100%"},attrs:{src:s("9PUp")}}),this._v(" "),e("a",[this._v("Мы сделали окно внутри окна, чтобы ты мог смотреть на страницу, которой нет, пока смотришь на\n          страницу, которой нет.")])])}]};var R=s("VU/8")({name:"NotFound"},H,!1,function(t){s("UGgN")},"data-v-3de0f8f6",null).exports,U={name:"About",components:{Header:u},data:function(){return{isActive:!1}}},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),t._v(" "),s("button",{on:{click:function(e){t.isActive=!t.isActive}}},[t._v("text")])],1)},staticRenderFns:[]};var O=s("VU/8")(U,G,!1,function(t){s("mVMi")},"data-v-1b8ace2e",null).exports;n.a.use(c.a);var A=new c.a({mode:"history",hash:!1,routes:[{path:"/",name:"Main",component:f},{path:"/about",name:"About",component:O},{path:"/registry",name:"NewRegistry",component:N},{path:"*",component:R},{path:"/login",name:"Login",component:D},{path:"/recovery",name:"Forgot",component:p},{path:"/game",name:"Game",component:C},{path:"/confirm",name:"ConfirmMessage",component:w},{path:"/forgotMessage",name:"ForgotMessage",component:$},{path:"/contacts",name:"Contacts",component:I}]}),V={state:{login:[],isFailed:!1,loginStatus:!0,role:null,logged:void 0},mutations:{setLogin:function(t,e){t.login=e},setFailed:function(t,e){t.isFailed=e},setLoginStatus:function(t,e){t.loginStatus=e},setLogged:function(t,e){t.logged=e},setRole:function(t,e){t.role=e}},getters:{isFailed:function(t){return t.isFailed},login:function(t){return t.login},loginStatus:function(t){return t.loginStatus},role:function(t){return t.role},logged:function(t){return t.logged}},actions:{signIn:function(t,e){r()("/login",{params:{username:e.username,password:e.password},method:"POST"}).then(function(e){(e.status=200)?A.push("/game"):t.commit("setFailed",!0)}).catch(function(e){t.commit("setFailed",!0)})},sendToken:function(t){r()("/resendEmail",{params:{userLogin:t.state.login.username},method:"POST"}).then(function(e){(e.status=200)?t.commit("setLoginStatus",!0):t.commit("setLoginStatus",!1)}).catch(function(e){t.commit("setLoginStatus",!1)})},checkIfConfirmed:function(t){r()("/confirm/check",{params:{userLogin:t.getters.loginName},method:"GET"}).then(function(e){t.commit("setLoginStatus",e.data)}).catch(function(t){console.log(t)})},checkIfLoggedIn:function(t){r()("/get",{method:"GET"}).then(function(e){t.commit("setRole",e.data),"vk"==t.getters.role[0].authority||"google"==t.getters.role[0].authority?(t.commit("setLogged",!0),console.log(t.state.logged)):t.commit("setLogged",!1)}).catch(function(t){console.log(t)})},checkIfLogged:function(t){r()("/auth/check",{method:"GET"}).then(function(e){t.commit("setLogged",e.data)}).catch(function(t){console.log(t)})}}},q={state:{regDate:[],failed:!1,errorStatus:0},mutations:{setLogin:function(t,e){t.login=e},setFailed:function(t,e){t.failed=e},setStatus:function(t,e){t.errorStatus=e}},getters:{failed:function(t){return t.failed},errorStatus:function(t){return t.errorStatus}},actions:{signup:function(t,e){r.a.post("/signup",{login:e.login,password:e.password,retypePassword:e.retypePassword,email:e.email}).then(function(e){t.commit("setStatus",e.data),0!==e.data&&(t.commit("setStatus",e.data),console.log(e.data),A.push("/registry")),0==e.data&&console.log(e.data),A.push("/confirm")}).catch(function(e){t.commit("setFailed",!0)})}}},M={state:{email:[],forgotStatus:0},mutations:{setEmail:function(t,e){t.email=e},setForgotStatus:function(t,e){t.forgotStatus=e}},getters:{email:function(t){return t.email},forgotStatus:function(t){return t.forgotStatus}},actions:{forgot:function(t,e){r()("/forgot/password",{params:{email:e.email},method:"POST"}).then(function(e){t.commit("setForgotStatus",e.data),0===e.data&&(t.commit("setForgotStatus",e.data),A.push("/forgotMessage"))}).catch(function(t){console.log(t)})}}},z={state:{user:[],profile:[],rules:[],hasProfile:void 0,loginName:null,profileCreateStatus:0,profileDeleteStatus:0,gameClassChooseStatus:0},mutations:{setUser:function(t,e){t.user=e},setProfile:function(t,e){t.profile=e},setHasProfile:function(t,e){t.hasProfile=e},setProfileCreateStatus:function(t,e){t.profileCreateStatus=e},setProfileDeleteStatus:function(t,e){t.profileDeleteStatus=e},setGameClassChooseStatus:function(t,e){t.gameClassChooseStatus=e},setLoginName:function(t,e){t.loginName=e},setRules:function(t,e){t.rules=e}},getters:{user:function(t){return t.user},profile:function(t){return t.profile},hasProfile:function(t){return t.hasProfile},profileCreateStatus:function(t){return t.profileCreateStatus},profileDeleteStatus:function(t){return t.profileDeleteStatus},gameClassChooseStatus:function(t){return t.gameClassChooseStatus},loginName:function(t){return t.loginName},rules:function(t){return t.rules}},actions:{getUser:function(t,e){r()("/game/user/get",{params:{login:t.getters.loginName},method:"GET"}).then(function(e){t.commit("setUser",e.data)}).catch(function(t){console.log(t)})},createProfile:function(t,e){r()("/game/profile/create",{params:{name:e.name,surname:e.surname,patr:e.patr,sex:e.sex,bornDate:e.bornDate,userLogin:t.getters.loginName},method:"POST"}).then(function(e){t.commit("setProfileCreateStatus",e.data)}).catch(function(t){console.log(t)})},getProfile:function(t,e){r()("/game/user/profile/get",{params:{login:t.getters.loginName},method:"GET"}).then(function(e){t.commit("setProfile",e.data)}).catch(function(t){console.log(t)})},deleteProfile:function(t,e){r()("/game/profile/delete",{params:{login:t.getters.loginName},method:"POST"}).then(function(e){t.commit("setProfileDeleteStatus",e.data)}).catch(function(t){console.log(t)})},classChoose:function(t,e){r()("/game/class/choose",{params:{isKira:e.isKira,userLogin:t.getters.loginName,regionId:e.regionId},method:"POST"}).then(function(e){t.commit("setGameClassChooseStatus",e.data)}).catch(function(t){console.log(t)})},hasProfile:function(t,e){r()("/game/profile",{params:{login:t.getters.loginName},method:"GET"}).then(function(e){t.commit("setHasProfile",e.data)}).catch(function(t){console.log(t)})},getLoginName:function(t,e){r()("/login/userName",{method:"GET"}).then(function(e){t.commit("setLoginName",e.data)}).catch(function(t){console.log(t)})},getRules:function(t){r()("/game/rules",{method:"GET"}).then(function(e){t.commit("setRules",e.data)}).catch(function(t){console.log(t)})}}},J=s("NYxO");n.a.use(J.a);var K=new J.a.Store({modules:{login:V,registry:q,forgot:M,game:z}}),Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var Z=s("VU/8")({name:"App"},Q,!1,function(t){s("z+A/")},null,null).exports,j=s("QEVx");n.a.config.productionTip=!1,n.a.component("datetime",j.Datetime),n.a.use(a.a),new n.a({el:"#app",store:K,router:A,components:{App:Z},template:"<App/>"})},SOZI:function(t,e,s){t.exports=s.p+"static/img/ryuk.23cc9de.png"},UGgN:function(t,e){},Xtia:function(t,e){},f7r4:function(t,e,s){t.exports=s.p+"static/img/l13.cbbdb58.png"},"hEZ/":function(t,e){},inFH:function(t,e,s){t.exports=s.p+"static/img/swipe.a73d695.png"},mVMi:function(t,e){},q3Yy:function(t,e){},qxWt:function(t,e,s){t.exports=s.p+"static/img/dn_logo.2d7fe6d.jpg"},rPQ4:function(t,e){},tcK6:function(t,e){},w5Mo:function(t,e,s){t.exports=s.p+"static/img/k13.0711312.png"},"z+A/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a7d0c580a42c7507436a.js.map