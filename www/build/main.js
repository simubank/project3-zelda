webpackJsonp([21],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_pop_confirm_pop__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quest_quest__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_quests_quests_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(41);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(quest, db, navCtrl, navParams, popoverCtrl) {
        this.quest = quest;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.data = {
            confirmMessage: "Do You Want To Take Responsibility For This Shit!?"
        };
        this.taskList = [1, 2, 3, 4];
        this.dailyTaskList = [1, 2];
        this.questContent = navParams.get('content');
        console.log(this.questContent);
        this.pushPage = __WEBPACK_IMPORTED_MODULE_3__quest_quest__["a" /* QuestPage */];
        this.questList$ = this.quest
            .getQuest() //DB List
            .snapshotChanges() //key AND value pairs
            .map(function (changes) {
            console.log(changes);
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    DashboardPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__confirm_pop_confirm_pop__["a" /* ConfirmPopPage */], this.data);
        popover.present({
            ev: myEvent
        });
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Santaman   Level 1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <page-header></page-header>\n\n\n  <h3>\n    Daily\n  </h3>\n\n  <ion-grid>\n    <ion-row *ngFor="let task of dailyTaskList; ">\n      <ion-card style="padding-left: 5px; padding-top: 10px; padding-bottom: 10px; margin-top: 0px; margin-bottom: 0px">\n        <ion-row>\n          <ion-col col-2 style="font-size: 2em; text-align: center; vertical-align: middle;">\n            <ion-icon [navPush]="pushPage" ios="ios-add-circle" md="lg-add-circle"></ion-icon>\n          </ion-col>\n          <ion-col col-10>\n            Read this article to increase your knowledge AND your gold!\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <progress-bar class="dailyProgress" [progress]="100" [color]="\'#f9b507\'">\n          </progress-bar>\n        </ion-row>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n  <h3>\n    Quests\n  </h3>\n\n\n  <ion-grid>\n    <ion-row *ngFor="let quest of questList$ | async">\n      <ion-card (click)="presentPopover($event)" style="padding-left: 5px; padding-top: 10px; padding-bottom: 10px; margin-top: 0px; margin-bottom: 0px">\n      {{quest.content}}\n      <br>\n      Gold: {{quest.gold}}\n      <br>\n      Experience: {{quest.experience}}\n      <br>\n      Penalty: {{quest.penalty}}\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-footer style="background-color: darkred; height: 40px">\n    <ion-row style="height:40px">\n\n      <ion-col>\n        <ion-card class="footerItem">\n          1\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class="footerItem">\n          2\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class="footerItem">\n          3\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class="footerItem">\n          4\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-footer> -->\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_quests_quests_service__["a" /* questsService */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_profile_setup_profile_setup_service__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




//import { Observable } from 'rxjs/Observable'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    //profileData: Observable<any>
    function LoginPage(afAuth, profileSetup, afDatabase, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.profileSetup = profileSetup;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.signIn = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
                    console.log(result);
                    /*this.afAuth.authState.take(1).subscribe(data => {
                      console.log(data.uid);
                      this.profileData = this.afDatabase.object(`/profile/${data.uid}`).valueChanges(),map();
                      console.log(this.profileData);
                      console.log(this.profileData.firstname);
                      if (this.profileData.firstName != null){
                        this.navCtrl.setRoot('SetupPage');
                      }
                    });*/
                    if (result) {
                        this.navCtrl.setRoot('ProfilePage');
                    }
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n</ion-list>\n\n<div padding>\n  <button block ion-button colors ="primary"(click)="signIn(user)">Sign In</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__services_profile_setup_profile_setup_service__["a" /* profileSetupService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_env__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': __WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].authorization
    })
};
/*
  Generated class for the AccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AccountProvider = (function () {
    function AccountProvider(http) {
        this.http = http;
        this.creditCardAaccounts = [];
        this.depositAccounts = [];
    }
    AccountProvider.prototype.getCustomerAccountsForCustomerId = function (customerId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].botsApiUrl + "/customers/" + customerId + "/accounts", httpOptions);
    };
    AccountProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AccountProvider);
    return AccountProvider;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_env__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': __WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].authorization
    })
};
/*
  Generated class for the BranchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BranchProvider = (function () {
    function BranchProvider(http) {
        this.http = http;
        this.branches = [];
    }
    BranchProvider.prototype.getBranches = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].botsApiUrl + "/branches", httpOptions);
    };
    BranchProvider.prototype.getBranchForBranchId = function (branchId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].botsApiUrl + "/branches/" + branchId, httpOptions);
    };
    BranchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BranchProvider);
    return BranchProvider;
}());

//# sourceMappingURL=branch.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var questsService = (function () {
    function questsService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.quest = null;
        this.questRef = this.db.list('quest');
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
        });
    }
    questsService.prototype.getQuest = function () {
        return this.questRef;
    };
    /*
    getProfileNow(): FirebaseListObservable<Profile[]>{
      if (!this.userId) return;
      this.profile = this.db.list(`profile/${this.userId}`);
      return this.profile
    }*/
    questsService.prototype.addQuest = function (quest) {
        return this.questRef.push(quest);
    };
    questsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], questsService);
    return questsService;
}());

//# sourceMappingURL=quests.service.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profileSetupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var profileSetupService = (function () {
    function profileSetupService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.profile = null;
        this.profileRef = this.db.list('profile');
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
        });
    }
    profileSetupService.prototype.getProfile = function () {
        return this.profileRef;
    };
    /*
    getProfileNow(): FirebaseListObservable<Profile[]>{
      if (!this.userId) return;
      this.profile = this.db.list(`profile/${this.userId}`);
      return this.profile
    }*/
    profileSetupService.prototype.addProfile = function (profile) {
        return this.profileRef.push(profile);
    };
    profileSetupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], profileSetupService);
    return profileSetupService;
}());

//# sourceMappingURL=profile-setup.service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_account_account__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_transaction_transaction__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_env__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': __WEBPACK_IMPORTED_MODULE_5__app_env__["a" /* ENV */].authorization
    })
};
/**
 * Generated class for the AnalyticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnalyticsPage = (function () {
    function AnalyticsPage(accountProvider, navCtrl, navParams, http, transactionProvider) {
        this.accountProvider = accountProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.transactionProvider = transactionProvider;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Last Week' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'This Week' }
        ];
        this.creditCardAaccounts = [];
        this.bankAaccounts = [];
        this.accountId = 'ec9e76ca-7b38-4adf-b659-108d11ac2922_959e9c5d-0cfb-465d-bc32-b1ebf5530866';
        this.otherId = 'ec9e76ca-7b38-4adf-b659-108d11ac2922_8f5b52dc-ddff-4eee-87ee-47393d9d218e';
        this.visaTransactions = [];
        this.otherTransactions = [];
        this.utility = [];
        this.micro = [];
        this.insurance = [];
        this.doughnutChartLabels = ['Microsavings', 'Utility', 'Insurance'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
    }
    AnalyticsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionProvider.getTransactionsForAccountId(this.accountId).subscribe(function (data) {
            _this.visaTransactions = data.result;
        });
        this.transactionProvider.getTransactionsForAccountId(this.otherId).subscribe(function (data) {
            _this.otherTransactions = data.result;
            _this.otherTransactions.forEach(function (item) {
                console.log(JSON.stringify(item));
                if (item.categoryTags[0] === "Utility bill") {
                    _this.utility.push(item.currencyAmount);
                }
                else if (item.categoryTags[0] === 'Microsavings') {
                    _this.micro.push(item.currencyAmount);
                }
                else if (item.categoryTags[0] === 'Insurance') {
                    _this.insurance.push(item.currencyAmount);
                }
            });
        });
    };
    AnalyticsPage.prototype.populateDonught = function () {
        for (var x = 0; x < this.otherTransactions.length; x++)
            this.otherTransactions.forEach(function (transaction) {
                console.log(transaction);
            });
    };
    AnalyticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnalyticsPage');
    };
    AnalyticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-analytics',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/analytics/analytics.html"*/'<!--\n  Generated template for the AnalyticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>analytics</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="display: block">\n    <canvas baseChart [data]="doughnutChartData" [labels]="doughnutChartLabels" [chartType]="doughnutChartType" (chartHover)="chartHovered($event)"\n      (chartClick)="chartClicked($event)"></canvas>\n  </div>\n\n  <div style="display: block; padding: 1em;">\n      <canvas baseChart\n              [datasets]="barChartData"\n              [labels]="barChartLabels"\n              [options]="barChartOptions"\n              [legend]="barChartLegend"\n              [chartType]="barChartType"\n              (chartHover)="chartHovered($event)"\n              (chartClick)="chartClicked($event)"></canvas>\n    </div>\n\n  <h4 style="text-align: center; vertical-align: middle">Visa Transactions</h4>\n\n  <ion-grid>\n    <ion-row *ngFor="let transaction of visaToransactions; ">\n      <ion-card style="padding-left: 5px; padding-top: 10px; padding-bottom: 10px; margin-top: 0px; margin-bottom: 0px">\n        <ion-row>\n          <ion-col>\n            <ion-row align="left"> \n              {{transaction.description}}\n            </ion-row>\n            <ion-row align="left">\n              {{transaction.originationDate}}\n            </ion-row>\n          </ion-col>\n          <ion-col align="right" style="padding:10px">\n            {{transaction.currencyAmount}}\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/analytics/analytics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_transaction_transaction__["a" /* TransactionProvider */]])
    ], AnalyticsPage);
    return AnalyticsPage;
}());

//# sourceMappingURL=analytics.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_branch_branch__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BranchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BranchDetailPage = (function () {
    function BranchDetailPage(navCtrl, navParams, branchProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.branchProvider = branchProvider;
        this.branch = null;
    }
    BranchDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var branchId = this.navParams.get('branchId');
        this.branchProvider.getBranchForBranchId(branchId).subscribe(function (data) {
            _this.branch = data.result[0];
        });
    };
    BranchDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BranchDetailPage');
    };
    BranchDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-branch-detail',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/branch-detail/branch-detail.html"*/'<!--\n  Generated template for the BranchDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="branch !== null">Branch #{{ branch.id }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-card *ngIf="branch !== null">\n    <ion-card-header>\n      {{ branch.address }}\n    </ion-card-header>\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          ID:\n        </ion-label>\n        <ion-label item-right text-right>\n          {{ branch.id }}\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Phone #:\n        </ion-label>\n        <ion-label item-right text-right>\n          {{ branch.phoneNo }}\n        </ion-label>\n      </ion-item>\n      <ion-item *ngFor="let key of branch.hours | keys">\n        <ion-label>\n          {{ key }}\n        </ion-label>\n        <ion-label item-right text-right>\n          {{ branch.hours[key] }}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/branch-detail/branch-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_branch_branch__["a" /* BranchProvider */]])
    ], BranchDetailPage);
    return BranchDetailPage;
}());

//# sourceMappingURL=branch-detail.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CompanionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompanionsPage = (function () {
    function CompanionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.companionsList = [1, 2, 3];
        this.companionPics = ['CompanionOne.gif', 'CompanionTwo.gif', 'CompanionThree.gif'];
        this.companionNames = ['Dave Buster', 'Dave', 'Buster'];
    }
    CompanionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanionsPage');
    };
    CompanionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-companions',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/companions/companions.html"*/'<!--\n  Generated template for the CompanionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>companions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <page-header></page-header>\n\n  <ion-grid>\n    <ion-row *ngFor="let companion of companionsList; let i = index ">\n      <ion-card style="padding-left: 5px; padding-top: 10px; padding-bottom: 10px; margin-top: 0px; margin-bottom: 0px">\n        <ion-row>\n          <ion-col col-4 style="text-align: center; vertical-align: middle; height: 100%">\n              <img src="../../assets/imgs/{{companionPics[i]}}" style="overflow:hidden; height:8em; width:8em;">\n          </ion-col>\n          <ion-col col-6>\n            <ion-row>\n              {{ companionNames[i] }}\n            </ion-row>\n            <ion-row>\n              <progress-bar class="dailyProgress" [progress]="100" [color]="\'#f44242\'">\n              </progress-bar>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/companions/companions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CompanionsPage);
    return CompanionsPage;
}());

//# sourceMappingURL=companions.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_account_account__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_customer_customer__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_list_transaction_list__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CustomerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerDetailPage = (function () {
    // public accounts = []
    function CustomerDetailPage(navCtrl, navParams, accountProvider, customerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountProvider = accountProvider;
        this.customerProvider = customerProvider;
        this.customer = null;
        this.creditCardAaccounts = [];
        this.bankAaccounts = [];
    }
    CustomerDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var customerId = this.navParams.get('customerId');
        this.customerProvider.getCustomerForCustomerId(customerId).mergeMap(function (data) {
            _this.customer = data.result[0];
            return _this.accountProvider.getCustomerAccountsForCustomerId(customerId);
        }).subscribe(function (data) {
            _this.bankAaccounts = data.result.bankAccounts || [];
            _this.creditCardAaccounts = data.result.creditCardAccounts || [];
        });
    };
    CustomerDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountListPage');
    };
    CustomerDetailPage.prototype.handleAccountClicked = function (account) {
        console.log(account);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__transaction_list_transaction_list__["a" /* TransactionListPage */], { accountId: account.id });
    };
    CustomerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-customer-detail',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/customer-detail/customer-detail.html"*/'<!--\n  Generated template for the AccountListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title *ngIf="customer !== null">{{ customer.givenName }} {{ customer.surname }}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-list *ngIf="customer !== null">\n      <ion-item>\n          <ion-label>\n            <h2>D.O.B.</h2>\n          </ion-label>\n          \n          <ion-label item-right text-right>\n            {{ customer.birthDate }}\n          </ion-label>\n        </ion-item>\n      <ion-list-header *ngIf="bankAaccounts.length > 0">\n        Bank Accounts\n      </ion-list-header>\n  \n      <ion-item *ngFor="let account of bankAaccounts"  (click)="handleAccountClicked(account)">\n        <ion-label>\n          <h2>{{ account.maskedAccountNumber }}</h2>\n          <ion-note>{{ account.type }}</ion-note>\n        </ion-label>\n        \n        <ion-label item-right text-right>\n          {{ account.balance }} {{ account.currency }}\n        </ion-label>\n      </ion-item>\n  \n      <ion-list-header *ngIf="creditCardAaccounts.length > 0">\n        Credit Card Accounts\n      </ion-list-header>\n  \n      <ion-item *ngFor="let account of creditCardAaccounts"  (click)="handleAccountClicked(account)">\n        <ion-label>\n          <h2>{{ account.maskedNumber }}</h2>\n          <ion-note>{{ account.type }}</ion-note>\n        </ion-label>\n        \n        <ion-label item-right text-right>\n          {{ account.balance }} {{ account.currency }}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/customer-detail/customer-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_account_account__["a" /* AccountProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_customer_customer__["a" /* CustomerProvider */]])
    ], CustomerDetailPage);
    return CustomerDetailPage;
}());

//# sourceMappingURL=customer-detail.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transaction_transaction__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction_detail_transaction_detail__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TransactionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionListPage = (function () {
    function TransactionListPage(navCtrl, navParams, transactionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionProvider = transactionProvider;
        this.transactions = [];
    }
    TransactionListPage.prototype.ngOnInit = function () {
        var _this = this;
        var accountId = this.navParams.get('accountId');
        this.transactionProvider.getTransactionsForAccountId(accountId).subscribe(function (data) {
            _this.transactions = data.result;
        });
    };
    TransactionListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionListPage');
    };
    TransactionListPage.prototype.handleTransactionClicked = function (transaction) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transaction_detail_transaction_detail__["a" /* TransactionDetailPage */], { transactionId: transaction.id });
    };
    TransactionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction-list',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/transaction-list/transaction-list.html"*/'<!--\n  Generated template for the TransactionListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transaction List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-list-header hideBackButton="false">\n      Transactions\n    </ion-list-header>\n\n    <button ion-item *ngFor="let transaction of transactions" (click)="handleTransactionClicked(transaction)">\n      <ion-label>\n        <h2>{{ transaction.description }} {{ transaction.documentType }}</h2>\n        <h3>{{ transaction.categoryTags ? transaction.categoryTags.join(\', \') : \'Untagged\' }}</h3>\n        <ion-note>{{ transaction.merchantName }}</ion-note>\n      </ion-label>\n      \n      <ion-label item-right text-right>\n        {{ transaction.currencyAmount }}\n      </ion-label>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/transaction-list/transaction-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_transaction_transaction__["a" /* TransactionProvider */]])
    ], TransactionListPage);
    return TransactionListPage;
}());

//# sourceMappingURL=transaction-list.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transaction_transaction__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionDetailPage = (function () {
    function TransactionDetailPage(navCtrl, navParams, alertCtrl, transactionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.transactionProvider = transactionProvider;
        this.transaction = null;
    }
    TransactionDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var transactionId = this.navParams.get('transactionId');
        this.transactionProvider.getTransactionForTransactionId(transactionId).subscribe(function (data) {
            _this.transaction = data.result[0];
        });
    };
    TransactionDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionDetailPage');
    };
    TransactionDetailPage.prototype.updateTagsForTransaction = function (transaction) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Edit Tags',
            inputs: [
                {
                    name: 'Tags',
                    placeholder: this.transaction.categoryTags.join(', '),
                    value: this.transaction.categoryTags.join(', ')
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var tags = data.Tags.split(',').map(function (tag) { return tag.trim(); });
                        _this.transactionProvider.updateTagsForTransactionId(_this.transaction.id, tags).subscribe(function (data) {
                            console.log('Tags updated');
                            _this.transactionProvider.getTransactionForTransactionId(_this.transaction.id).subscribe(function (data) {
                                _this.transaction = data.result[0];
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    TransactionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction-detail',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/transaction-detail/transaction-detail.html"*/'<!--\n  Generated template for the TransactionDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transaction Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngIf="transaction !== null">\n    <ion-card-header>\n      Transaction Detail\n    </ion-card-header>\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          ID\n        </ion-label>\n        <ion-label item-right text-right>\n          {{ transaction.id }}\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Type\n        </ion-label>\n        <ion-label item-right text-right>\n          {{ transaction.documentType }}\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Amount\n        </ion-label>\n        <ion-label item-right text-right>\n          {{ transaction.currencyAmount }}\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          {{ transaction.categoryTags ? transaction.categoryTags.join(\', \') : \'Untagged\' }}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="light" (click)="updateTagsForTransaction()">\n      Update Tags\n    </button>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/transaction-detail/transaction-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_transaction_transaction__["a" /* TransactionProvider */]])
    ], TransactionDetailPage);
    return TransactionDetailPage;
}());

//# sourceMappingURL=transaction-detail.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_transaction_transaction__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* stuff that needs implementation
- firebase, and storage
- how the results of the quest will be used/passed (how gold will be added, exp, dmg ect)
- how the milestone quest will be updated/stored, (thinking that the firebase will help as a middle man for data)
- possibly more vendors to increase the amount of quests that can be generated
- have module installed for media quests but i havent implemented it
TESTING and intergration!!!
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the QuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestPage = (function () {
    function QuestPage(navCtrl, navParams, customerProvider, transactionProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerProvider = customerProvider;
        this.transactionProvider = transactionProvider;
        this.isSuccess = false; // auto set to false
        this.reward = 50; // gold and exp base is 50
        this.penalty = 25; // half of gold
        this.tier = 0; // 0: daily 1:milestone
        this.type = 0; // 0: budget money quest  1: transfer quest 2: save money quest 3: article
        this.ammountToMove = 0;
        this.toSave = 0;
        this.averageSpending = 0;
        this.ammountSaved = 0;
        this.transaction = null;
        // when page is called make sure these values are passed from the prev screen as paramiters
        this.tier = this.navParams.get('tier');
        /***** THIS IS FOR TESTING IF ONLY MILESTONES ARE BEING MADE THIS IS WHY */
        this.tier = 0; // FOR TESTING
        this.accountId = 'ec9e76ca-7b38-4adf-b659-108d11ac2922_959e9c5d-0cfb-465d-bc32-b1ebf5530866';
        this.type = 1;
        //      this.type= this.navParams.get('type');
        // this.startTime = this.date.getTime(); // sets start time variable
        //  this.prevTime = this.startTime;
        //  this.endTime = this.startTime + 604800000;
        this.isFinished = false;
        var sum = 0;
        var i = 0;
        var vendors;
        vendors = ['TIM HORTONS'];
        if (this.tier == 0) {
            // daily
            this.reward = 50;
            if (this.type == 0) {
                // budget
                // need more vendors can use list of placed the person shops
                this.vendor = vendors[0]; // replace with random if time permits or if more vendors are needed
                //this.vendor= vendors [Math.floor(Math.random()*5);]    // if more are added
                //  var arr: any;
                // arr = this.transactionProvider.getTransactionsForAccountId(this.accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now
                //   console.log(arr);
                //   console.log("this run?");
                // this loop takes the list of all transactions and filters it based on the transaction description and if the transaction was in the past week
                var transactionsWithVendor;
                // transactionsWithVendor = arr.filter.subscribe(this.transaction=>{
                //       this.tmpDate = new Date(this.transaction.date);
                //     if(this.transaction.description.includes(this.vendor) && (this.startTime - this.tmpDate.getTime()) <= 604800000) {
                //       //  return true;
                //   }
                //                     console.log(this.transaction);
                //                     console.log("this run?");
                // })
                /*
                              transactionsWithVendor = arr.filter.subscribe(this.val => {
                                  console.log('this is it: ' + val);
                              });
                */
                /*
                              for (this.transaction of transactionsWithVendor){
                                  // for each
                                  sum += transaction.currencyAmount;
                                  i++;
                              }
                              this.averageSpending = (sum / i); // this is per week,
                              this.toSave = (this.averageSpending * 0.75); // spend 25 % less can be made into an array of values for more random-ness
                              this.budgetLeft = this.toSave;
                              */
                this.budgetLeft = 100;
                this.questText = "Spend $" + this.budgetLeft + " or less at " + this.vendor + " this week"; // implement a budget for the user to follow
            }
            else if (this.type == 1) {
                //transfer quest
                this.toSave = Math.floor(Math.random() * 7) + 3; // save a random ammount between 2 and 10
                this.ammountToMove = (this.toSave * 7);
                // this.ammountToMove = 70;
                // this.toSave = 10;
                this.questText = " To save approxamatly $" + this.ammountToMove + " move $" + this.toSave + " or more into savings each day this week";
            }
            else if (this.type == 2) {
                // save quest
                //      let sum = 0;
                //      var vendors: string[];
                vendors = ["TIM HORTONS"]; // need more vendors can use list of placed the person shops
                this.vendor = vendors[0];
                this.accountId = 'ec9e76ca-7b38-4adf-b659-108d11ac2922_959e9c5d-0cfb-465d-bc32-b1ebf5530866';
                /* THIS API PULL KINDA WORKS*/
                /* not quite there but its a start */
                var arr = this.transactionProvider.getTransactionsForAccountId(this.accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now
                console.log(arr);
                // this loop takes the list of all transactions and filters it based on the transaction description and if the transaction was in the past week
                /*              let transactionsWithVendor = arr.filter(this.transaction => {
                                  if(this.transaction.description.includes(this.vendor)) {
                                      return true;
                                  }
                              });
                
                              for (this.transaction of transactionsWithVendor){
                                  // for each
                                  sum += this.transaction.currencyAmount;
                                  i++;
                              }
                              this.averageSpending = (sum / i); // this is average per visit,
                              */
                this.questText = "Dont spend money at " + this.vendor + " Today to save approxamatly $" + this.averageSpending;
            }
            else {
                // word quest
                // show hidden button
                this.questText = " Accept this quest to read an article about smart spending";
            }
        }
        else {
            // milestone
            this.reward = 100;
            this.toSave = 2000;
            this.questText = "Save $" + this.toSave + " to put towards travel";
        }
    }
    // runs when quest is accepted or started
    QuestPage.prototype.storeQuest = function () {
        this.updateProgress();
        // will call updateProgress function
        // this function will store the values in the data base, will be called when the add button is pressed
    };
    // finished quest
    QuestPage.prototype.questFinished = function () {
        console.log("finished");
        /* FOR DAILY QUESTS MILESTONES FINISHING HAVE NOT BEEN updated */
        if (this.isSuccess) {
            // add to exp, and gold in firebase
        }
        else {
            // minus gold and such in firebase
        }
        // store values to firebase
        // need to return the ammount saved to update the values in the milestone quest
        // also need to return reward / punishment or update stored values in the firebase
        // cant do it with pop's. cant pass paramiters back through views
        // pass to fire base and pop back to prev screen
        // use firebase vars from prev screen
    };
    // method to update the progress
    QuestPage.prototype.updateProgress = function () {
        // var d = new Date(); // assigns today to today's date
        // var today = d.getTime();
        // var sum :number;
        // sum = 0;
        if (this.tier == 0) {
            //daily quests
            /*  if (today >= this.endTime){
                this.isFinished = true;
                this.isSuccess = true; // assume to be true
                today = this.endTime; // so we only get the correct dates and no future dates
              }
             */
            if (this.type == 0) {
                // budget quest
                // grab all transactions from
                //      let arr = this.transactionProvider.getTransactionsForAccountId(accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now
                // this loop takes the list of all transactions and filters it based on the transaction description and if the transaction is after the prevTime and before today
                /*          let transactionsWithVendor = arr.filter(this.transaction => {
                            (this.tmpDate = new Date(this.transaction.date));
                              if(transaction.description.includes(this.vendor) && (this.prevTime < this.tmpDate.getTime() <= today )) {
                                  return true;
                              }
                          });
                          for (this.transaction of transactionsWithVendor){
                              // for each
                              sum += this.transaction.currencyAmount;
                          }
                          this.budgetLeft = this.budgetLeft - sum; // calculates how much is left in the budget
            */
                // runs if the quest failed
                this.budgetLeft = this.budgetLeft - 10;
                if (this.budgetLeft < 0) {
                    this.isFinished = true;
                    this.isSuccess = false;
                }
                else {
                    this.questText = "Spend $" + this.budgetLeft + " or less at " + this.vendor + " for the remainder of the week"; // implement a budget for the user to follow
                    // update the quest text field
                }
            }
            else if (this.type == 1) {
                // transfer quest
                // check if correct $ was deposited this week
                // yes update val's
                // no quest failed
                //          var sum :number =0;
                //                let arr = this.transactionProvider.getTransactionsForAccountId(accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now
                // this loop takes the list of all transactions and filters it based on the merchantName and if the transaction is after the prevTime and before today
                /*                let transactionsWithVendor = arr.filter(transaction => {
                                    (this.tmpDate = new Date(this.transaction.date));
                                    if(transaction.merchantName === "Microsavings" && (this.prevTime < this.tmpDate.getTime() <= today )) {
                                        return true;
                                    }
                                });
                                for (this.transaction of transactionsWithVendor){
                                    // for each
                                    this.ammountSaved += this.transaction.currencyAmount;
                                }
                */ //calculate ammount left to save
                // This if block will run if the date is past the end date in the condition before the update,
                // assumes false and will switch the success variable below if the quest is passed
                // quest will only be finished if the time limit is over. then the ammount is checked to see if
                this.ammountSaved = this.ammountSaved * 2 + 1;
                if (this.ammountSaved >= this.ammountToMove) {
                    this.isSuccess = true;
                    this.isFinished = true;
                }
                else {
                    this.isSuccess = false;
                }
                this.questText = " you are $" + this.ammountSaved + "/" + this.ammountSaved + " away from your savings goal of $" + this.ammountToMove;
                //   if (this.isFinished == true){
                //      if (this.ammountSaved >= this.ammountToMove){
                //          this.isSuccess = true;
                //     }else{
                //          this.isSuccess = false;
                //     }
                // }else{
                //         this.questText = " you are $"+ this.ammountSaved+"/"+this.ammountSaved+" away from your savings goal of $" +this.ammountToMove;
                //         // update text field with new val
                // }
            }
            else if (this.type == 2) {
                //save quest
                // get all transactions for --- vendor for Today
                // if none then good
                //          var sum :number =0;
                /*      let arr = this.transactionProvider.getTransactionsForAccountId(accountId); // really hope this works, account id is to be stored by clark somehow will hardcode for now
        
                      // this loop takes the list of all transactions and filters it based on the transaction description and if the transaction is after the prevTime and before today
                      let transactionsWithVendor:  any;
                      transactionsWithVendor = arr.filter(transaction => {
                          (this.tmpDate = new Date(this.transaction.date));
                          if(this.transaction.description.includes(this.vendor) && this.tmpDate.getTime() == today) {
                              return true;
                          }
                      });
                      if (transactionsWithVendor.length == 0){
                          this.isSuccess = true;
                          this.isFinished = true;
                      }
                      else{
                          this.isSuccess = false;
                          this.isFinished = true;
                      }
                      //  run finished function
        */
            }
            else {
                //              var article = {
                //                  title: string,
                //                  content: string,
                //              };
                var rand = Math.floor(Math.random());
                var chosen;
                var articles = [
                    { "title": "Mutual Funds:", "content": "A mutual fund is an investment vehicle that is made up of a pool \
                   of funds collected from many investors for the purpose of investing in securities such as stocks, \
                   bonds, money market instruments and similar assets. Mutual funds are operated by money managers who \
                   invest the fund's capital and attempt to produce capital gains and income for the fund's investors." },
                    { "title": "What are \'Savings\':", "content": "Savings, according to Keynesian economics, are what a person has left over when the cost of his or her consumer expenditure \
                   is subtracted from the amount of disposable income earned in a given period of time. For those who are financially prudent, \
                   the amount of money left over after personal expenses have been met can be positive; for those who tend to rely on credit \
                   and loans to make ends meet, there is no money left for savings. Savings can be used to increase income through investing \
                   in different investment vehicles." }
                ];
                // have 2 for know
                // dont know how to do the popup thing for viewing articles
                chosen = articles[rand];
            }
        }
        else {
            //milestone
            // need to know how the firebase is setup. to track completed quests
            // when a quest is completed return ammunt saved.
        }
        // sets the prev update time
        //      this.prevTime = today;
        // if the quest is finished run the is finished function
        if (this.isFinished) {
            this.questFinished();
        }
    };
    QuestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestPage');
    };
    QuestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quest',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/quest/quest.html"*/'<!--\n  Generated template for the QuestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>quest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n        <button ion-item icon-start>\n          <ion-icon name="add-circle"></ion-icon>\n        </button>\n\n      <ion-content color="primary">{{questText}}</ion-content>\n      <button myitem (click)="openMediaLink();" id="link" hidden=\'true\' ion-item> Open Media Link</button>\n      <progress-bar [progress]="100" [color]="\'#ffb60c\'">\n      </progress-bar>\n      <button myitem (click)="updateProgress()" ion-item> Update the quest </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/quest/quest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_customer_customer__["a" /* CustomerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_transaction_transaction__["a" /* TransactionProvider */]])
    ], QuestPage);
    return QuestPage;
}());

//# sourceMappingURL=quest.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestchoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quests_quests_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuestchoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestchoicePage = (function () {
    function QuestchoicePage(quest, db, navCtrl, navParams) {
        this.quest = quest;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionKey = navParams.get('key');
        console.log(this.questionKey);
        this.questChoice$ = this.quest
            .getQuest() //DB List
            .snapshotChanges() //key AND value pairs
            .map(function (changes) {
            console.log(changes);
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    QuestchoicePage.prototype.questClick = function (event, content) {
        /*this.navCtrl.push(QuestchoicePage,{
        key:key
      });*/
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], {
            content: content
        });
    };
    QuestchoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestchoicePage');
    };
    QuestchoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-questchoice',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/questchoice/questchoice.html"*/'<!--\n  Generated template for the QuestchoicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Quest Choices</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n  <ion-list>\n    <ion-card *ngFor="let quest of questChoice$ | async" (click)="questClick($event, quest.content)">\n    <ion-card-content>\n      What is this quest?\n      <br>\n      {{quest.content}}\n      <br>\n      Gold: {{quest.gold}}\n      <br>\n      Experience: {{quest.experience}}\n      <br>\n      Penalty: {{quest.penalty}}\n    </ion-card-content>\n  </ion-card>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/questchoice/questchoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_quests_quests_service__["a" /* questsService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuestchoicePage);
    return QuestchoicePage;
}());

//# sourceMappingURL=questchoice.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(afAuth, navCtrl, navParams, customerProvider, storage) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerProvider = customerProvider;
        this.storage = storage;
        this.customers = [];
        this.user = {};
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n</ion-list>\n\n<div padding>\n  <button block ion-button (click)="register(user)">Register</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartPage = (function () {
    function StartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartPage.prototype.signInPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    StartPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-start',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/start/start.html"*/'<!--\n  Generated template for the StartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Username</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div padding>\n    <button block ion-button (click)="signInPage()">Sign In</button>\n  </div>\n\n  <div padding>\n    <button block ion-button colors="primary" (click)="registerPage()">Register</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/start/start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_pop_confirm_pop__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StorePage = (function () {
    function StorePage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.data = {
            confirmMessage: "You Better Know You're Spending Some Good Cash on this Fucin Merch",
            index: ''
        };
    }
    StorePage.prototype.presentPopover = function (myEvent) {
        this.data.index = 'confirmMessage';
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__confirm_pop_confirm_pop__["a" /* ConfirmPopPage */], this.data);
        popover.present({
            ev: myEvent
        });
    };
    StorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StorePage');
    };
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-store',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/store/store.html"*/'<!--\n  Generated template for the StorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>store</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <ion-card (click)="presentPopover($event)">\n        <img src="../../assets/imgs/storeOne.gif">\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card (click)="presentPopover($event)">\n        <img src="../../assets/imgs/storeTwo.gif">\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-card (click)="presentPopover($event)">\n        <img src="../../assets/imgs/storeFour.gif">\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card (click)="presentPopover($event)">\n        <img src="../../assets/imgs/storeFive.gif">\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-card (click)="presentPopover($event)">\n        <img src="../../assets/imgs/storeSix.gif">\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card (click)="presentPopover($event)">\n        <img src="../../assets/imgs/storeThree.gif">\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-card (click)="presentPopover($event)">\n        <img src="../../assets/imgs/storeSeven.gif">\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card (click)="presentPopover($event)">\n        <img src="../../assets/imgs/storeEight.gif">\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/store/store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TdExperiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_pop_confirm_pop__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TdExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TdExperiencePage = (function () {
    function TdExperiencePage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.data = {
            jazz: "Delivering the sounds of the world’s greatest jazz musicians from the most intimate of venues to large concert halls, the TD Toronto Jazz Festival should be part of your summer calendar.",
            gorillaz: "Watch the Gorillaz as they embark on a quest to prove that they are infact Humanz and not Gorillaz",
            cb: "Earn 6% on all purchases for the first 3 months2 up to a total spend of $3,500. Plus, get a full Annual Fee Rebate1 for the Primary Cardholder for the first year.",
            pt: "Get up to 20,000 TD Rewards Points1. Plus, get a full Annual Fee Rebate1 for the Primary Cardholder for the first year.",
            ploc: "A Personal Line of Credit can help you pay off your other debts with flexible payments and competitive interest rates while providing ongoing access to available credit for future use.",
            sloc: "Enjoy low student interest rates, with interest ‑ only monthly payments required while in school and for 24 months after you leave school. And then what?",
            points: 'Exchange game currency for +50 TD Rewards Points',
            apoints: 'Exchange game currency for +50 TD Aeroplan Points',
            index: ''
        };
    }
    TdExperiencePage.prototype.presentPopover = function (myEvent, index) {
        this.data.index = index;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__confirm_pop_confirm_pop__["a" /* ConfirmPopPage */], this.data, { cssClass: 'contact-popover' });
        popover.present({
            ev: myEvent
        });
    };
    TdExperiencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TdExperiencePage');
    };
    TdExperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-td-experience',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/td-experience/td-experience.html"*/'<!--\n  Generated template for the TdExperiencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>TD Experience</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="padding-top: 1em">\n    <strong>EVENTS</strong>\n  </div>\n  <ion-row>\n    <ion-col>\n      <ion-row style="height:25px">\n        TD Toronto Jazz Festival 2018\n      </ion-row>\n      <ion-row>\n        <ion-card (click)="presentPopover($event, \'jazz\')">\n          <img src="../../assets/imgs/TdExp/jazzEvent.jpg">\n        </ion-card>\n      </ion-row>\n    </ion-col>\n    <ion-col>\n      <ion-row style="height:25px">\n        Gorillaz: Humanz Tour~!\n      </ion-row>\n      <ion-row>\n        <ion-card (click)="presentPopover($event, \'gorillaz\')">\n          <img src="../../assets/imgs/TdExp/gorillazEvent.jpg">\n        </ion-card>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <div>\n    <strong>CREDIT CARDS</strong>\n  </div>\n  <ion-row>\n    <ion-col>\n      <ion-row style="height:25px">\n        Cash Back Visa Infinite\n      </ion-row>\n      <ion-row>\n        <ion-card (click)="presentPopover($event, \'cb\')">\n          <img src="../../assets/imgs/TdExp/cbcc.jpg">\n        </ion-card>\n      </ion-row>\n    </ion-col>\n    <ion-col>\n      <ion-row style="height:25px;">\n        Platinum Travel Visa\n      </ion-row>\n      <ion-row>\n        <ion-card (click)="presentPopover($event, \'pt\')">\n          <img src="../../assets/imgs/TdExp/ptcc.jpg">\n        </ion-card>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <div>\n    <strong>L.O.C.</strong>\n  </div>\n  <ion-row>\n    <ion-col>\n        <ion-row style="height:25px;">\n            Personal Line of Credit\n          </ion-row>\n          <ion-row>\n            <ion-card (click)="presentPopover($event, \'ploc\')">\n              <img src="../../assets/imgs/TdExp/ploc.jpg">\n            </ion-card>\n          </ion-row>\n    </ion-col>\n    <ion-col>\n        <ion-row style="height:25px;">\n            Student Line of Credit\n          </ion-row>\n          <ion-row>\n            <ion-card (click)="presentPopover($event, \'sloc\')">\n              <img src="../../assets/imgs/TdExp/sloc.jpg">\n            </ion-card>\n          </ion-row>\n    </ion-col>\n  </ion-row>\n  <div>\n      <strong>Rewards</strong>\n    </div>\n    <ion-row>\n        <ion-col>\n            <ion-row style="height:25px;">\n                TD Rewards Points\n              </ion-row>\n              <ion-row style="height:150px">\n                <ion-card (click)="presentPopover($event, \'points\')">\n                  <img src="../../assets/imgs/TdExp/points.png">\n                </ion-card>\n              </ion-row>\n        </ion-col>\n        <ion-col>\n            <ion-row style="height:25px;">\n                TD Aeroplan Points\n              </ion-row>\n              <ion-row style="height:150px">\n                <ion-card (click)="presentPopover($event, \'apoints\')">\n                  <img src="../../assets/imgs/TdExp/apoints.jpg">\n                </ion-card>\n              </ion-row>\n        </ion-col>\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/td-experience/td-experience.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], TdExperiencePage);
    return TdExperiencePage;
}());

//# sourceMappingURL=td-experience.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/analytics/analytics.module": [
		713,
		20
	],
	"../pages/branch-detail/branch-detail.module": [
		714,
		19
	],
	"../pages/branch-list/branch-list.module": [
		716,
		18
	],
	"../pages/companions/companions.module": [
		715,
		17
	],
	"../pages/confirm-pop/confirm-pop.module": [
		717,
		16
	],
	"../pages/customer-detail/customer-detail.module": [
		718,
		15
	],
	"../pages/customer-list/customer-list.module": [
		719,
		14
	],
	"../pages/dashboard/dashboard.module": [
		720,
		13
	],
	"../pages/header/header.module": [
		721,
		12
	],
	"../pages/login/login.module": [
		722,
		11
	],
	"../pages/profile/profile.module": [
		723,
		1
	],
	"../pages/quest/quest.module": [
		725,
		10
	],
	"../pages/questchoice/questchoice.module": [
		724,
		9
	],
	"../pages/question/question.module": [
		726,
		8
	],
	"../pages/register/register.module": [
		727,
		7
	],
	"../pages/setup/setup.module": [
		728,
		0
	],
	"../pages/start/start.module": [
		729,
		6
	],
	"../pages/store/store.module": [
		730,
		5
	],
	"../pages/td-experience/td-experience.module": [
		731,
		4
	],
	"../pages/transaction-detail/transaction-detail.module": [
		732,
		3
	],
	"../pages/transaction-list/transaction-list.module": [
		733,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 404;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var questionsService = (function () {
    function questionsService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.question = null;
        this.questionRef = this.db.list('question');
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
        });
    }
    questionsService.prototype.getQuestion = function () {
        return this.questionRef;
    };
    /*
    getProfileNow(): FirebaseListObservable<Profile[]>{
      if (!this.userId) return;
      this.profile = this.db.list(`profile/${this.userId}`);
      return this.profile
    }*/
    questionsService.prototype.addQuest = function (question) {
        return this.questionRef.push(question);
    };
    questionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], questionsService);
    return questionsService;
}());

//# sourceMappingURL=questions.service.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeaderPage = (function () {
    function HeaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeaderPage');
    };
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-header',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/header/header.html"*/'<!--\n  Generated template for the HeaderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content style="height: 27%;">\n\n    <ion-card>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4>\n                <ion-card-title>\n                  <img src="../../assets/imgs/dash.gif" style="overflow:hidden; height:6em; width:8em;">\n                </ion-card-title>\n              </ion-col>\n              <ion-col col-8>\n                <ion-row>\n                  <progress-bar [progress]="100" [color]="\'#f44242\'">\n                  </progress-bar>\n                </ion-row>\n                <ion-row>\n                  <progress-bar [progress]="100" [color]="\'#03b229\'">\n                  </progress-bar>\n                </ion-row>\n                <ion-row>\n                  <progress-bar [progress]="100" [color]="\'#488aff\'">\n                  </progress-bar>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <!--Card Image here-->\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/header/header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questchoice_questchoice__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_questions_questions_service__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(41);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = (function () {
    function QuestionPage(question, db, navCtrl, navParams) {
        this.question = question;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionSetup$ = this.question
            .getQuestion() //DB List
            .snapshotChanges() //key AND value pairs
            .map(function (changes) {
            console.log(changes);
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    QuestionPage.prototype.questionClick = function (event, key) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__questchoice_questchoice__["a" /* QuestchoicePage */], {
            key: key
        });
    };
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-question',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/question/question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Questionnaire</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n  <ion-list>\n    <ion-card *ngFor="let question of questionSetup$ | async" (click)="questionClick($event, question.key)">\n    <ion-card-content>\n      {{question.content}}\n    </ion-card-content>\n  </ion-card>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/question/question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_questions_questions_service__["a" /* questionsService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_branch_branch__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__branch_detail_branch_detail__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BranchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BranchListPage = (function () {
    function BranchListPage(navCtrl, navParams, branchProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.branchProvider = branchProvider;
        this.branches = [];
        console.log(this.branches);
    }
    BranchListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.branches = this.branchProvider.branches;
        this.branchProvider.getBranches().subscribe(function (data) {
            _this.branches = data.result;
        });
    };
    BranchListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BranchListPage');
    };
    BranchListPage.prototype.handleBranchClicked = function (branch) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__branch_detail_branch_detail__["a" /* BranchDetailPage */], { branchId: branch.id });
    };
    BranchListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-branch-list',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/branch-list/branch-list.html"*/'<!--\n  Generated template for the BranchListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bank of the Simulation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Branches\n    </ion-list-header>\n\n    <ion-item *ngFor="let branch of branches" (click)="handleBranchClicked(branch)">\n      <ion-label>\n        <h2>{{ branch.address }}</h2>\n        <ion-note>{{ branch.distance }} km</ion-note>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/branch-list/branch-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_branch_branch__["a" /* BranchProvider */]])
    ], BranchListPage);
    return BranchListPage;
}());

//# sourceMappingURL=branch-list.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_detail_customer_detail__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CustomerListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerListPage = (function () {
    function CustomerListPage(navCtrl, navParams, customerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerProvider = customerProvider;
        this.customers = [];
    }
    CustomerListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.customerProvider.getCustomers().subscribe(function (data) {
            var customers = data.result.slice(0, 100);
            _this.customers = customers;
        });
    };
    CustomerListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerListPage');
    };
    CustomerListPage.prototype.handleCustomerClicked = function (customer) {
        console.log(customer);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_detail_customer_detail__["a" /* CustomerDetailPage */], { customerId: customer.id });
    };
    CustomerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-customer-list',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/customer-list/customer-list.html"*/'<!--\n  Generated template for the CustomerListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bank of the Simulation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n        <p text-wrap>\n          This customer list is only for demonstration purposes. In your submission app you should not require a list of all customers of the bank\n        </p>\n      </ion-item>\n    <ion-list-header>\n      Simulants\n    </ion-list-header>\n\n    <button ion-item *ngFor="let customer of customers" (click)="handleCustomerClicked(customer)" >\n      <ion-label>\n        <h2>{{ customer.givenName }} {{ customer.surname }}</h2>\n        <ion-note>{{ customer.primaryOccupation }}</ion-note>\n      </ion-label>\n      \n      <ion-label item-right text-right>\n        {{ customer.type }}\n      </ion-label>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/customer-list/customer-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_customer_customer__["a" /* CustomerProvider */]])
    ], CustomerListPage);
    return CustomerListPage;
}());

//# sourceMappingURL=customer-list.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_progress_bar__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_header_header__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_store_store__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_td_experience_td_experience__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_analytics_analytics__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_companions_companions__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_confirm_pop_confirm_pop__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_quest_quest__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_start_start__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_register_register__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_question_question__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_questchoice_questchoice__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_transaction_list_transaction_list__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_account_account__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_branch_branch__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_customer_customer__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_transaction_transaction__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_branch_detail_branch_detail__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_branch_list_branch_list__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_customer_detail_customer_detail__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_customer_list_customer_list__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_transaction_detail_transaction_detail__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_KeysPipe__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__app_firebase_config__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_profile_setup_profile_setup_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_quests_quests_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_questions_questions_service__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_36__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transaction_list_transaction_list__["a" /* TransactionListPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_branch_list_branch_list__["a" /* BranchListPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_customer_list_customer_list__["a" /* CustomerListPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_transaction_detail_transaction_detail__["a" /* TransactionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_branch_detail_branch_detail__["a" /* BranchDetailPage */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_KeysPipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_32__pages_customer_detail_customer_detail__["a" /* CustomerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_questchoice_questchoice__["a" /* QuestchoicePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_td_experience_td_experience__["a" /* TdExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_analytics_analytics__["a" /* AnalyticsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_companions_companions__["a" /* CompanionsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirm_pop_confirm_pop__["a" /* ConfirmPopPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_quest_quest__["a" /* QuestPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_36__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/analytics/analytics.module#AnalyticsPageModule', name: 'AnalyticsPage', segment: 'analytics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/branch-detail/branch-detail.module#BranchDetailPageModule', name: 'BranchDetailPage', segment: 'branch-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/companions/companions.module#CompanionsPageModule', name: 'CompanionsPage', segment: 'companions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/branch-list/branch-list.module#BranchListPageModule', name: 'BranchListPage', segment: 'branch-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm-pop/confirm-pop.module#ConfirmPopPageModule', name: 'ConfirmPopPage', segment: 'confirm-pop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-detail/customer-detail.module#CustomerDetailPageModule', name: 'CustomerDetailPage', segment: 'customer-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-list/customer-list.module#CustomerListPageModule', name: 'CustomerListPage', segment: 'customer-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/header/header.module#HeaderPageModule', name: 'HeaderPage', segment: 'header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questchoice/questchoice.module#QuestchoicePageModule', name: 'QuestchoicePage', segment: 'questchoice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quest/quest.module#QuestPageModule', name: 'QuestPage', segment: 'quest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/question/question.module#QuestionPageModule', name: 'QuestionPage', segment: 'question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setup/setup.module#SetupPageModule', name: 'SetupPage', segment: 'setup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store/store.module#StorePageModule', name: 'StorePage', segment: 'store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/td-experience/td-experience.module#TdExperiencePageModule', name: 'TdExperiencePage', segment: 'td-experience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-detail/transaction-detail.module#TransactionDetailPageModule', name: 'TransactionDetailPage', segment: 'transaction-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-list/transaction-list.module#TransactionListPageModule', name: 'TransactionListPage', segment: 'transaction-list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_37__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_progress_bar__["a" /* ProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_36__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_25__pages_transaction_list_transaction_list__["a" /* TransactionListPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_branch_list_branch_list__["a" /* BranchListPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_customer_list_customer_list__["a" /* CustomerListPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_transaction_detail_transaction_detail__["a" /* TransactionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_branch_detail_branch_detail__["a" /* BranchDetailPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_customer_detail_customer_detail__["a" /* CustomerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_question_question__["a" /* QuestionPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_questchoice_questchoice__["a" /* QuestchoicePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_td_experience_td_experience__["a" /* TdExperiencePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_companions_companions__["a" /* CompanionsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_analytics_analytics__["a" /* AnalyticsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_confirm_pop_confirm_pop__["a" /* ConfirmPopPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_quest_quest__["a" /* QuestPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_customer_customer__["a" /* CustomerProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_account_account__["a" /* AccountProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_transaction_transaction__["a" /* TransactionProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_branch_branch__["a" /* BranchProvider */],
                __WEBPACK_IMPORTED_MODULE_38__services_profile_setup_profile_setup_service__["a" /* profileSetupService */],
                __WEBPACK_IMPORTED_MODULE_39__services_quests_quests_service__["a" /* questsService */],
                __WEBPACK_IMPORTED_MODULE_40__services_questions_questions_service__["a" /* questionsService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 241,
	"./af.js": 241,
	"./ar": 242,
	"./ar-dz": 243,
	"./ar-dz.js": 243,
	"./ar-kw": 244,
	"./ar-kw.js": 244,
	"./ar-ly": 245,
	"./ar-ly.js": 245,
	"./ar-ma": 246,
	"./ar-ma.js": 246,
	"./ar-sa": 247,
	"./ar-sa.js": 247,
	"./ar-tn": 248,
	"./ar-tn.js": 248,
	"./ar.js": 242,
	"./az": 249,
	"./az.js": 249,
	"./be": 250,
	"./be.js": 250,
	"./bg": 251,
	"./bg.js": 251,
	"./bm": 252,
	"./bm.js": 252,
	"./bn": 253,
	"./bn.js": 253,
	"./bo": 254,
	"./bo.js": 254,
	"./br": 255,
	"./br.js": 255,
	"./bs": 256,
	"./bs.js": 256,
	"./ca": 257,
	"./ca.js": 257,
	"./cs": 258,
	"./cs.js": 258,
	"./cv": 259,
	"./cv.js": 259,
	"./cy": 260,
	"./cy.js": 260,
	"./da": 261,
	"./da.js": 261,
	"./de": 262,
	"./de-at": 263,
	"./de-at.js": 263,
	"./de-ch": 264,
	"./de-ch.js": 264,
	"./de.js": 262,
	"./dv": 265,
	"./dv.js": 265,
	"./el": 266,
	"./el.js": 266,
	"./en-au": 267,
	"./en-au.js": 267,
	"./en-ca": 268,
	"./en-ca.js": 268,
	"./en-gb": 269,
	"./en-gb.js": 269,
	"./en-ie": 270,
	"./en-ie.js": 270,
	"./en-il": 271,
	"./en-il.js": 271,
	"./en-nz": 272,
	"./en-nz.js": 272,
	"./eo": 273,
	"./eo.js": 273,
	"./es": 274,
	"./es-do": 275,
	"./es-do.js": 275,
	"./es-us": 276,
	"./es-us.js": 276,
	"./es.js": 274,
	"./et": 277,
	"./et.js": 277,
	"./eu": 278,
	"./eu.js": 278,
	"./fa": 279,
	"./fa.js": 279,
	"./fi": 280,
	"./fi.js": 280,
	"./fo": 281,
	"./fo.js": 281,
	"./fr": 282,
	"./fr-ca": 283,
	"./fr-ca.js": 283,
	"./fr-ch": 284,
	"./fr-ch.js": 284,
	"./fr.js": 282,
	"./fy": 285,
	"./fy.js": 285,
	"./gd": 286,
	"./gd.js": 286,
	"./gl": 287,
	"./gl.js": 287,
	"./gom-latn": 288,
	"./gom-latn.js": 288,
	"./gu": 289,
	"./gu.js": 289,
	"./he": 290,
	"./he.js": 290,
	"./hi": 291,
	"./hi.js": 291,
	"./hr": 292,
	"./hr.js": 292,
	"./hu": 293,
	"./hu.js": 293,
	"./hy-am": 294,
	"./hy-am.js": 294,
	"./id": 295,
	"./id.js": 295,
	"./is": 296,
	"./is.js": 296,
	"./it": 297,
	"./it.js": 297,
	"./ja": 298,
	"./ja.js": 298,
	"./jv": 299,
	"./jv.js": 299,
	"./ka": 300,
	"./ka.js": 300,
	"./kk": 301,
	"./kk.js": 301,
	"./km": 302,
	"./km.js": 302,
	"./kn": 303,
	"./kn.js": 303,
	"./ko": 304,
	"./ko.js": 304,
	"./ky": 305,
	"./ky.js": 305,
	"./lb": 306,
	"./lb.js": 306,
	"./lo": 307,
	"./lo.js": 307,
	"./lt": 308,
	"./lt.js": 308,
	"./lv": 309,
	"./lv.js": 309,
	"./me": 310,
	"./me.js": 310,
	"./mi": 311,
	"./mi.js": 311,
	"./mk": 312,
	"./mk.js": 312,
	"./ml": 313,
	"./ml.js": 313,
	"./mn": 314,
	"./mn.js": 314,
	"./mr": 315,
	"./mr.js": 315,
	"./ms": 316,
	"./ms-my": 317,
	"./ms-my.js": 317,
	"./ms.js": 316,
	"./mt": 318,
	"./mt.js": 318,
	"./my": 319,
	"./my.js": 319,
	"./nb": 320,
	"./nb.js": 320,
	"./ne": 321,
	"./ne.js": 321,
	"./nl": 322,
	"./nl-be": 323,
	"./nl-be.js": 323,
	"./nl.js": 322,
	"./nn": 324,
	"./nn.js": 324,
	"./pa-in": 325,
	"./pa-in.js": 325,
	"./pl": 326,
	"./pl.js": 326,
	"./pt": 327,
	"./pt-br": 328,
	"./pt-br.js": 328,
	"./pt.js": 327,
	"./ro": 329,
	"./ro.js": 329,
	"./ru": 330,
	"./ru.js": 330,
	"./sd": 331,
	"./sd.js": 331,
	"./se": 332,
	"./se.js": 332,
	"./si": 333,
	"./si.js": 333,
	"./sk": 334,
	"./sk.js": 334,
	"./sl": 335,
	"./sl.js": 335,
	"./sq": 336,
	"./sq.js": 336,
	"./sr": 337,
	"./sr-cyrl": 338,
	"./sr-cyrl.js": 338,
	"./sr.js": 337,
	"./ss": 339,
	"./ss.js": 339,
	"./sv": 340,
	"./sv.js": 340,
	"./sw": 341,
	"./sw.js": 341,
	"./ta": 342,
	"./ta.js": 342,
	"./te": 343,
	"./te.js": 343,
	"./tet": 344,
	"./tet.js": 344,
	"./tg": 345,
	"./tg.js": 345,
	"./th": 346,
	"./th.js": 346,
	"./tl-ph": 347,
	"./tl-ph.js": 347,
	"./tlh": 348,
	"./tlh.js": 348,
	"./tr": 349,
	"./tr.js": 349,
	"./tzl": 350,
	"./tzl.js": 350,
	"./tzm": 351,
	"./tzm-latn": 352,
	"./tzm-latn.js": 352,
	"./tzm.js": 351,
	"./ug-cn": 353,
	"./ug-cn.js": 353,
	"./uk": 354,
	"./uk.js": 354,
	"./ur": 355,
	"./ur.js": 355,
	"./uz": 356,
	"./uz-latn": 357,
	"./uz-latn.js": 357,
	"./uz.js": 356,
	"./vi": 358,
	"./vi.js": 358,
	"./x-pseudo": 359,
	"./x-pseudo.js": 359,
	"./yo": 360,
	"./yo.js": 360,
	"./zh-cn": 361,
	"./zh-cn.js": 361,
	"./zh-hk": 362,
	"./zh-hk.js": 362,
	"./zh-tw": 363,
	"./zh-tw.js": 363
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 642;

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=KeysPipe.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_start_start__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_dashboard_dashboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_store_store__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_td_experience_td_experience__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_analytics_analytics__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_companions_companions__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_start_start__["a" /* StartPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            //{ title: 'Customers', component: CustomerListPage },
            //{ title: 'Branches', component: BranchListPage },
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_1__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'Store', component: __WEBPACK_IMPORTED_MODULE_2__pages_store_store__["a" /* StorePage */] },
            { title: 'Companions', component: __WEBPACK_IMPORTED_MODULE_5__pages_companions_companions__["a" /* CompanionsPage */] },
            { title: 'Analytics', component: __WEBPACK_IMPORTED_MODULE_4__pages_analytics_analytics__["a" /* AnalyticsPage */] },
            { title: 'TD Experience', component: __WEBPACK_IMPORTED_MODULE_3__pages_td_experience_td_experience__["a" /* TdExperiencePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBlIOTzcEM1XEj9tYTDk7CTZtFMDH4U5vY",
    authDomain: "levelup-4cd06.firebaseapp.com",
    databaseURL: "https://levelup-4cd06.firebaseio.com",
    projectId: "levelup-4cd06",
    storageBucket: "levelup-4cd06.appspot.com",
    messagingSenderId: "261419032885"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    mode: 'Development',
    authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiMjgxMzc3MCIsImV4cCI6OTIyMzM3MjAzNjg1NDc3NSwiYXBwX2lkIjoiZWM5ZTc2Y2EtN2IzOC00YWRmLWI2NTktMTA4ZDExYWMyOTIyIn0.R2FMXkZpR8tSK6P5brig6OGOMZQYOrMMWAVV8gE5_UE',
    botsApiUrl: 'https://dev.botsfinancial.com/api'
};
//# sourceMappingURL=environment.dev.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_env__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': __WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].authorization
    })
};
/*
  Generated class for the TransactionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TransactionProvider = (function () {
    function TransactionProvider(http) {
        this.http = http;
        this.transactions = [];
    }
    TransactionProvider.prototype.getTransactionForTransactionId = function (transactionId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].botsApiUrl + "/transactions/" + transactionId, httpOptions);
    };
    TransactionProvider.prototype.getTransactionsForAccountId = function (accountId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].botsApiUrl + "/accounts/" + accountId + "/transactions", httpOptions);
    };
    TransactionProvider.prototype.updateTagsForTransactionId = function (transactionId, tags) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].botsApiUrl + "/transactions/" + transactionId + "/tags", tags, httpOptions);
    };
    TransactionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TransactionProvider);
    return TransactionProvider;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_env__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': __WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].authorization
    })
};
/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CustomerProvider = (function () {
    // public customers = []
    function CustomerProvider(http) {
        this.http = http;
    }
    /*
    This API call is only for demonstration purposes. In your submission app you should not require a list of all customers of the bank
    */
    CustomerProvider.prototype.getCustomers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].botsApiUrl + "/simulants", httpOptions);
    };
    CustomerProvider.prototype.getCustomerForCustomerId = function (customerId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_env__["a" /* ENV */].botsApiUrl + "/customers/" + customerId, httpOptions);
    };
    CustomerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CustomerProvider);
    return CustomerProvider;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfirmPopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPopPage = (function () {
    function ConfirmPopPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.index = this.navParams.get('index');
        this.message = this.navParams.get(this.index);
    }
    ConfirmPopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPopPage');
    };
    ConfirmPopPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmPopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirm-pop',template:/*ion-inline-start:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/confirm-pop/confirm-pop.html"*/'<!--\n  Generated template for the ConfirmPopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding>\n\n    <ion-title>CONFIRMATION</ion-title>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      {{ message }}\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button>\n            <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n          <button>\n              <ion-icon (click)="close()" name="close"></ion-icon>\n          </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ClarkYin/Desktop/TDLevelUp/levelup-ionic-starter/src/pages/confirm-pop/confirm-pop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ConfirmPopPage);
    return ConfirmPopPage;
}());

//# sourceMappingURL=confirm-pop.js.map

/***/ })

},[449]);
//# sourceMappingURL=main.js.map