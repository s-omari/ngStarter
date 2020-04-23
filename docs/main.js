(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./application-dashboard/application-dashboard.module": [
		"./src/app/modules/anappro/application-dashboard/application-dashboard.module.ts",
		"common",
		"application-dashboard-application-dashboard-module"
	],
	"./modules/anappro/master.module": [
		"./src/app/modules/anappro/master.module.ts",
		"common",
		"modules-anappro-master-module"
	],
	"./modules/app-layout/app-layout.module": [
		"./src/app/modules/app-layout/app-layout.module.ts",
		"modules-app-layout-app-layout-module"
	],
	"./modules/application/application.module": [
		"./src/app/modules/application/application.module.ts",
		"default~modules-application-application-module~public-public-module~restricted-restricted-module",
		"common",
		"modules-application-application-module"
	],
	"./modules/demo-landing-page/demo-landing-page.module": [
		"./src/app/modules/demo-landing-page/demo-landing-page.module.ts",
		"modules-demo-landing-page-demo-landing-page-module"
	],
	"./modules/nested-master-detail/master.module": [
		"./src/app/modules/nested-master-detail/master.module.ts",
		"modules-nested-master-detail-master-module"
	],
	"./modules/search-filter/search-filter.module": [
		"./src/app/modules/search-filter/search-filter.module.ts",
		"modules-search-filter-search-filter-module"
	],
	"./public/public.module": [
		"./src/app/modules/application/public/public.module.ts",
		"default~modules-application-application-module~public-public-module~restricted-restricted-module",
		"common",
		"public-public-module"
	],
	"./restricted/restricted.module": [
		"./src/app/modules/application/restricted/restricted.module.ts",
		"default~modules-application-application-module~public-public-module~restricted-restricted-module",
		"common",
		"restricted-restricted-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/@core/authentication/auth-guard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/@core/authentication/auth-guard.service.ts ***!
  \************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/@core/authentication/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            // If user is logged in according to auth service, return true
            return true;
        }
        else {
            // navigate to login page , return false.
            this.router.navigate(['./application/public/login']);
            return false;
        }
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/@core/authentication/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/@core/authentication/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.loggedIn = function () {
        // return true if auth token is stored
        var token = localStorage.getItem('token');
        var isTokenStored = (token) ? true : false;
        return isTokenStored;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/@core/core.module.ts":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



// import { AuthService } from './authentication/auth.service';
// import { AuthGuardService } from './authentication/auth-guard.service';
// import { AuthInterceptor } from './authentication/auth-interceptor';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/@core/services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/@core/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var UserService = /** @class */ (function () {
    /**
     * Assign user and token if exists.
     */
    function UserService() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        var user = localStorage.getItem('userData');
        if (user) {
            this.user = JSON.parse(user);
        }
        this.token = localStorage.getItem('token');
    }
    /**
     * Get token value.
     */
    UserService.prototype.getToken = function () {
        return this.token;
    };
    /**
     * Set token and store it in local strorage.
     * @param token
     */
    UserService.prototype.setToken = function (token) {
        this.token = token;
        localStorage.setItem('token', token);
        // localStorage.setItem('token', JSON.stringify(token));
    };
    /**
     * Get current user.
     */
    UserService.prototype.getUser = function () {
        return this.user;
    };
    /**
     * Set user and store it in local strorage.
     * @param user
     */
    UserService.prototype.setUser = function (user) {
        this.user = user;
        localStorage.setItem('userData', JSON.stringify(user));
    };
    /**
     * logout user.
     */
    UserService.prototype.logOut = function () {
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        location.reload();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




// import { MdePopoverModule } from '@material-extended/mde';

var ThemeModule = /** @class */ (function () {
    function ThemeModule(matIconRegistry) {
        this.matIconRegistry = matIconRegistry;
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
        matIconRegistry.registerFontClassAlias('fontawesome', 'fab');
    }
    ThemeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                //   MdePopoverModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"]
            ],
            exports: [
                //  MdePopoverModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"],
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_CHIPS_DEFAULT_OPTIONS"],
                    useValue: {
                        separatorKeyCodes: [13, 188]
                    }
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"]])
    ], ThemeModule);
    return ThemeModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    // { path: '', loadChildren: './pages/pages.module#PagesModule' },
    // { path: 'reports-export', loadChildren: './demo-modules/reports-export/reports.module#ReportsModule' },
    // { path: 'master-detail', loadChildren: './demo-modules/master-detail/master-detail.module#MasterDetailModule' },
    // { path: 'map-listing', loadChildren: './demo-modules/map-listing/resources.module#ResourcesModule' },
    // { path: 'chat', loadChildren: './demo-modules/chat/chat.module#ChatModule' },
    // { path: 'appointments', loadChildren: './demo-modules/appointments/appointments.module#AppointmentsModule' },
    // { path: 'home', loadChildren: './landing-page/landing-page.module#LandingPageModule' },
    { path: 'home', loadChildren: './modules/demo-landing-page/demo-landing-page.module#DemoLandingPageModule' },
    { path: 'app-layout', loadChildren: './modules/app-layout/app-layout.module#AppLayoutModule' },
    { path: 'search-filter', loadChildren: './modules/search-filter/search-filter.module#SearchFilterModule' },
    { path: 'application', loadChildren: './modules/application/application.module#ApplicationModule' },
    { path: 'nested-master-detail', loadChildren: './modules/nested-master-detail/master.module#MasterModule' },
    { path: 'anappro', loadChildren: './modules/anappro/master.module#MasterModule' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-starter - The Scallable Angular App Starter';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@core/core.module */ "./src/app/@core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@core/authentication/auth.service */ "./src/app/@core/authentication/auth.service.ts");
/* harmony import */ var _core_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@core/authentication/auth-guard.service */ "./src/app/@core/authentication/auth-guard.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./@core/services/user.service */ "./src/app/@core/services/user.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





// import { ThemeModule} from './@theme/theme.module';


// move to shared









// import { AppLayoutComponent } from './modules/app-layout/app-layout.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                // ThemeModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_13__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_13__["metaReducers"] }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production })
            ],
            providers: [
                _core_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _core_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"],
                _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/anappro/mock-data.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/anappro/mock-data.ts ***!
  \**********************************************/
/*! exports provided: projects, applicationMenu, TreeData, users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationMenu", function() { return applicationMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeData", function() { return TreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
var projects = {
    data: [
        {
            id: '30d7637e',
            nodeType: 'project',
            name: 'Anappro',
            about: 'Anappro is an application',
            users: [
                {
                    id: '1', name: 'Smith',
                }
            ],
            children: [
                {
                    name: 'Web App',
                    nodeType: 'application',
                    iconname: 'important_devices',
                    projectId: '30d7637e',
                    applicationId: 1,
                },
                {
                    name: 'Mobile App',
                    nodeType: 'application',
                    iconname: 'important_devices',
                    projectId: '30d7637e',
                    applicationId: 2,
                },
            ]
        }, {
            id: '21bb9516',
            name: 'BioReader',
            nodeType: 'project',
            about: 'Bioreader is an application',
            users: [
                { id: '1', name: 'Mike Smith' },
                { id: '2', name: 'Omar Doe' },
                { id: '3', name: 'Jane M.' }
            ],
            children: [
                { name: 'Pumpkins' },
                { name: 'Carrots' },
            ]
        },
    ]
};
var applicationMenu = [
    {
        "title": "Dynamic Form",
        "route": "demo/dynamic-form",
        "icon": "chrome_reader_mode"
    },
    {
        "title": "UI Components",
        "route": "demo/ui-components",
        "icon": "important_devices",
        "children": [
            {
                "title": "material components",
                "route": "demo/ui-components/material-components",
                "icon": "table"
            },
            {
                "title": "custom components",
                "route": "demo/ui-components/custom-components",
                "icon": "table"
            }
        ]
    }
];
var TreeData = [
    {
        name: 'Projects',
        iconname: 'folder_special',
        nodeType: 'projectsParent',
        children: [
            {
                projectId: '30d7637e',
                nodeType: 'project',
                name: 'Anappro',
                about: 'Anappro is an application',
                users: [
                    {
                        id: '1', name: 'Smith',
                    }
                ],
                children: [
                    {
                        name: 'Web App',
                        nodeType: 'application',
                        iconname: 'important_devices',
                        projectId: '30d7637e',
                        applicationId: 1,
                    },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                projectId: '21bb9516',
                name: 'BioReader',
                nodeType: 'project',
                about: 'Bioreader is an application',
                users: [
                    { id: '1', name: 'Mike Smith' },
                    { id: '2', name: 'Omar Doe' },
                    { id: '3', name: 'Jane M.' }
                ],
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
    {
        name: 'Users',
        nodeType: 'usersParent',
        iconname: 'people_outline',
        children: [
            {
                id: '21bb9522',
                name: 'Mike Ike',
                nodeType: 'user',
            },
            {
                id: '21bb9533',
                name: 'Omar Badaoui',
                nodeType: 'user',
            },
            {
                id: '21bb9544',
                name: 'john doe',
                nodeType: 'user',
            },
        ]
    },
];
var users = [];


/***/ }),

/***/ "./src/app/modules/anappro/mock-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/anappro/mock-service.service.ts ***!
  \*********************************************************/
/*! exports provided: MockServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockServiceService", function() { return MockServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-data */ "./src/app/modules/anappro/mock-data.ts");



var MockServiceService = /** @class */ (function () {
    function MockServiceService() {
        this.items = [];
        for (var _i = 0, _a = _mock_data__WEBPACK_IMPORTED_MODULE_2__["projects"].data; _i < _a.length; _i++) {
            var item = _a[_i];
            this.items.push(item);
        }
    }
    MockServiceService.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field === params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    MockServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MockServiceService);
    return MockServiceService;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/actions/app.actions.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/actions/app.actions.ts ***!
  \*****************************************************************************/
/*! exports provided: EXPAND_SIDENAV, SHRINK_SIDENAV, SET_SECONDARY_MENU, SET_PRIMARY_MENU, SET_SIDENAV_STATE, ExpandSideNav, ShrinkSideNav, SetSideNavState, SetSecondaryMenu, SetPrimaryMenu, SET_APP_PAGE_STATE, SET_CURRENT_PROJECT, SET_CURRENT_APPLICATION, SetAppPageState, SetCurrentProject, SetCurrentApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPAND_SIDENAV", function() { return EXPAND_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHRINK_SIDENAV", function() { return SHRINK_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SECONDARY_MENU", function() { return SET_SECONDARY_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PRIMARY_MENU", function() { return SET_PRIMARY_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SIDENAV_STATE", function() { return SET_SIDENAV_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandSideNav", function() { return ExpandSideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShrinkSideNav", function() { return ShrinkSideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSideNavState", function() { return SetSideNavState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSecondaryMenu", function() { return SetSecondaryMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPrimaryMenu", function() { return SetPrimaryMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_APP_PAGE_STATE", function() { return SET_APP_PAGE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_PROJECT", function() { return SET_CURRENT_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_APPLICATION", function() { return SET_CURRENT_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAppPageState", function() { return SetAppPageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentProject", function() { return SetCurrentProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCurrentApplication", function() { return SetCurrentApplication; });
// SIDENAV ACTIONS
var EXPAND_SIDENAV = '[app sidenav] Expand SideNav';
var SHRINK_SIDENAV = '[app sidenav] Shrink SideNav';
var SET_SECONDARY_MENU = '[app sidenav] set secondary menu';
var SET_PRIMARY_MENU = '[app sidenav] Set Primary menu';
var SET_SIDENAV_STATE = '[app sidenav] Set SideNav State';
//app sidenav
var ExpandSideNav = /** @class */ (function () {
    function ExpandSideNav() {
        this.type = EXPAND_SIDENAV;
    }
    return ExpandSideNav;
}());

var ShrinkSideNav = /** @class */ (function () {
    function ShrinkSideNav() {
        this.type = SHRINK_SIDENAV;
    }
    return ShrinkSideNav;
}());

var SetSideNavState = /** @class */ (function () {
    function SetSideNavState(payload) {
        this.payload = payload;
        this.type = SET_SIDENAV_STATE;
    }
    return SetSideNavState;
}());

var SetSecondaryMenu = /** @class */ (function () {
    function SetSecondaryMenu(payload) {
        this.payload = payload;
        this.type = SET_SECONDARY_MENU;
    }
    return SetSecondaryMenu;
}());

var SetPrimaryMenu = /** @class */ (function () {
    function SetPrimaryMenu(payload) {
        this.payload = payload;
        this.type = SET_PRIMARY_MENU;
    }
    return SetPrimaryMenu;
}());

// app state
var SET_APP_PAGE_STATE = '[app] Update App Page State';
var SET_CURRENT_PROJECT = '[app] Set Current Project';
var SET_CURRENT_APPLICATION = '[app] Set Current Application';
// export const SET_PROJECTS_LIST = '[app] Set projects List';
// export class SetProjectsList implements Action {
//     readonly type = SET_PROJECTS_LIST;
//     constructor(public payload: any) { }
// }
var SetAppPageState = /** @class */ (function () {
    function SetAppPageState(payload) {
        this.payload = payload;
        this.type = SET_APP_PAGE_STATE;
    }
    return SetAppPageState;
}());

var SetCurrentProject = /** @class */ (function () {
    function SetCurrentProject(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_PROJECT;
    }
    return SetCurrentProject;
}());

var SetCurrentApplication = /** @class */ (function () {
    function SetCurrentApplication(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_APPLICATION;
    }
    return SetCurrentApplication;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/actions/layout.action.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/actions/layout.action.ts ***!
  \*******************************************************************************/
/*! exports provided: EXPAND_RIGHT, SHRINK_RIGHT, CLOSE_RIGHT, ExpandRight, ShrinkRight, CloseRight, EXPAND_LEFT, SHRINK_LEFT, CLOSE_LEFT, ExpandLeft, ShrinkLeft, CloseLeft, RIGHT_CONTENT, RightContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPAND_RIGHT", function() { return EXPAND_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHRINK_RIGHT", function() { return SHRINK_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_RIGHT", function() { return CLOSE_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandRight", function() { return ExpandRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShrinkRight", function() { return ShrinkRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseRight", function() { return CloseRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPAND_LEFT", function() { return EXPAND_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHRINK_LEFT", function() { return SHRINK_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_LEFT", function() { return CLOSE_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandLeft", function() { return ExpandLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShrinkLeft", function() { return ShrinkLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseLeft", function() { return CloseLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_CONTENT", function() { return RIGHT_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightContent", function() { return RightContent; });
var EXPAND_RIGHT = '[Layout] Expand Right';
var SHRINK_RIGHT = '[Layout] Shrink Right';
var CLOSE_RIGHT = '[Layout] Close Right';
//define action creators
var ExpandRight = /** @class */ (function () {
    function ExpandRight() {
        this.type = EXPAND_RIGHT;
    }
    return ExpandRight;
}());

var ShrinkRight = /** @class */ (function () {
    function ShrinkRight() {
        this.type = SHRINK_RIGHT;
    }
    return ShrinkRight;
}());

var CloseRight = /** @class */ (function () {
    function CloseRight() {
        this.type = CLOSE_RIGHT;
    }
    return CloseRight;
}());

var EXPAND_LEFT = '[Layout] Expand Left';
var SHRINK_LEFT = '[Layout] Shrink Left';
var CLOSE_LEFT = '[Layout] Close Left';
//define action creators
var ExpandLeft = /** @class */ (function () {
    function ExpandLeft() {
        this.type = EXPAND_LEFT;
    }
    return ExpandLeft;
}());

var ShrinkLeft = /** @class */ (function () {
    function ShrinkLeft() {
        this.type = SHRINK_LEFT;
    }
    return ShrinkLeft;
}());

var CloseLeft = /** @class */ (function () {
    function CloseLeft() {
        this.type = CLOSE_LEFT;
    }
    return CloseLeft;
}());

var RIGHT_CONTENT = '[Layout] Update Right Content';
var RightContent = /** @class */ (function () {
    function RightContent(payload) {
        this.payload = payload;
        this.type = RIGHT_CONTENT;
    }
    return RightContent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/reducers/app.reducer.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/reducers/app.reducer.ts ***!
  \******************************************************************************/
/*! exports provided: initialState, reducer, getAppPageState, getCurrentProject, getCurrentApplication, getSidenavExpanded, getSidenavState, getPrimarySidenavMenu, getSecondarySidenavMenu, getAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppPageState", function() { return getAppPageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentProject", function() { return getCurrentProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentApplication", function() { return getCurrentApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSidenavExpanded", function() { return getSidenavExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSidenavState", function() { return getSidenavState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimarySidenavMenu", function() { return getPrimarySidenavMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecondarySidenavMenu", function() { return getSecondarySidenavMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return getAppState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/app.actions */ "./src/app/modules/anappro/shared-anappro/store/actions/app.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var initialState = {
    appPageState: '',
    sidenavExpanded: true,
    sidenavState: '',
    primarySidenavMenu: [],
    secondarySidenavMenu: [],
    currentProject: [],
    currentApplication: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["EXPAND_SIDENAV"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { sidenavExpanded: true });
        }
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["SHRINK_SIDENAV"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { sidenavExpanded: false });
        }
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_APP_PAGE_STATE"]: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { appPageState: payload });
        }
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_SIDENAV_STATE"]: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { sidenavState: payload });
        }
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_PRIMARY_MENU"]: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { primarySidenavMenu: payload });
        }
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_SECONDARY_MENU"]: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { secondarySidenavMenu: payload });
        }
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_PROJECT"]: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentProject: payload });
        }
        case _actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_APPLICATION"]: {
            var payload = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { currentApplication: payload });
        }
    }
    return state;
}
// Export some levels of state using selectors
var getAppPageState = function (state) { return state.appPageState; };
var getCurrentProject = function (state) { return state.currentProject; };
var getCurrentApplication = function (state) { return state.currentApplication; };
var getSidenavExpanded = function (state) { return state.sidenavExpanded; };
var getSidenavState = function (state) { return state.sidenavState; };
var getPrimarySidenavMenu = function (state) { return state.primarySidenavMenu; };
var getSecondarySidenavMenu = function (state) { return state.secondarySidenavMenu; };
var getAppState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('app');


/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/store/reducers/layout.reducer.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/store/reducers/layout.reducer.ts ***!
  \*********************************************************************************/
/*! exports provided: initialState, reducer, getShowCenter, getShowRight, getRightExpanded, getCenterExpanded, getRightContent, getShowLeft, getLeftExpanded, getLayoutState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowCenter", function() { return getShowCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowRight", function() { return getShowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRightExpanded", function() { return getRightExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenterExpanded", function() { return getCenterExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRightContent", function() { return getRightContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowLeft", function() { return getShowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeftExpanded", function() { return getLeftExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayoutState", function() { return getLayoutState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/layout.action */ "./src/app/modules/anappro/shared-anappro/store/actions/layout.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var initialState = {
    rightExpanded: false,
    showRight: false,
    centerExpanded: true,
    showCenter: true,
    rightContent: '',
    showLeft: true,
    leftExpanded: true,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["EXPAND_RIGHT"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { rightExpanded: true, showRight: true, centerExpanded: false, showCenter: false });
        }
        case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["SHRINK_RIGHT"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { rightExpanded: false, showRight: true, centerExpanded: false, showCenter: true });
        }
        case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["CLOSE_RIGHT"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { rightExpanded: false, showRight: false, centerExpanded: true, showCenter: true });
        }
        case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["RIGHT_CONTENT"]: {
            var rightContent = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { rightContent: rightContent });
        }
        case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["EXPAND_LEFT"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { leftExpanded: true, showLeft: true });
        }
        case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["SHRINK_LEFT"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { leftExpanded: false, showLeft: true });
        }
        case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["CLOSE_LEFT"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { leftExpanded: false, showLeft: false });
        }
    }
    return state;
}
// Export some levels of state using selectors
var getShowCenter = function (state) { return state.showCenter; };
var getShowRight = function (state) { return state.showRight; };
var getRightExpanded = function (state) { return state.rightExpanded; };
var getCenterExpanded = function (state) { return state.centerExpanded; };
var getRightContent = function (state) { return state.rightContent; };
var getShowLeft = function (state) { return state.showLeft; };
var getLeftExpanded = function (state) { return state.leftExpanded; };
var getLayoutState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('layout');


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_anappro_shared_anappro_store_reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/anappro/shared-anappro/store/reducers/layout.reducer */ "./src/app/modules/anappro/shared-anappro/store/reducers/layout.reducer.ts");
/* harmony import */ var _modules_anappro_shared_anappro_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/anappro/shared-anappro/store/reducers/app.reducer */ "./src/app/modules/anappro/shared-anappro/store/reducers/app.reducer.ts");

// import reducers


var reducers = {
    layout: _modules_anappro_shared_anappro_store_reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    app: _modules_anappro_shared_anappro_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/shared/components/accordion-item/accordion-item.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/accordion-item/accordion-item.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item (click)=\"toggle()\" [class.active]=\"activeItem == '/'+item.route\">\n  <a class=\"w-100 h-100 d-flex align-items-center\" (click)=\"onSelectItem(item)\">\n    <span class=\"icon-holder mr-3\">\n      <mat-icon>{{item.icon}}</mat-icon>\n    </span>\n    <span>{{item.title}}</span>\n  </a>\n  <span *ngIf=\"item.children\">\n    <mat-icon *ngIf=\"expanded\">keyboard_arrow_up</mat-icon>\n    <mat-icon *ngIf=\"!expanded\">keyboard_arrow_down</mat-icon>\n  </span>\n</mat-list-item>\n\n\n<mat-nav-list *ngIf=\"item.children\" class=\"sub-menu w-100 p-0\" [class.expanded]=\"expandedChange | async\" [@bodyExpansion]=\"getExpandedState()\">\n\n  <!-- check if children have children -->\n  <ng-container *ngFor=\"let child of item.children\">\n\n    <a *ngIf=\"!child.children\" mat-list-item (click)=\"onSelectItem(child)\">\n      <span class=\"icon-holder mr-3\">\n        <mat-icon>{{child.icon}}</mat-icon>\n      </span>\n      <span>{{child.title}}</span>\n    </a>\n\n    <accordion-item *ngIf=\"child.children\" mat-list-item [item]=\"child\" (onSelect)=\"onSelectItem($event)\">{{child.title}}</accordion-item>\n\n  </ng-container>\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/shared/components/accordion-item/accordion-item.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/accordion-item/accordion-item.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: #c4c4c4; }\n  .active .icon-holder {\n    background-color: #ffffff; }\n  .icon-holder {\n  background-color: #F5F5F5;\n  border-radius: 50%;\n  padding: 7px 0 0 0;\n  text-align: center;\n  width: 40px;\n  height: 40px; }\n  .sub-menu {\n  background-color: #F5F5F5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWNjb3JkaW9uLWl0ZW0vQzpcXFVzZXJzXFxzb21hclxcT25lRHJpdmVcXERlc2t0b3BcXHRlbXAgY2xlYW51cFxcQXBweFxcQW5ndWxhclN0YXJ0ZXJcXG5nU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxhY2NvcmRpb24taXRlbVxcYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBb0MsRUFBQTtFQUR4QztJQUdRLHlCQUF5QixFQUFBO0VBSWpDO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFJaEI7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FjY29yZGlvbi1pdGVtL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xuICAgIC5pY29uLWhvbGRlciAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbn1cblxuLmljb24taG9sZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiA3cHggMCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcblxufVxuXG4uc3ViLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/accordion-item/accordion-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/accordion-item/accordion-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccordionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemComponent", function() { return AccordionItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AccordionItemComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccordionItemComponent, _super);
    function AccordionItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    AccordionItemComponent.prototype.getExpandedState = function () {
        return this.expanded ? 'expanded' : 'collapsed';
    };
    AccordionItemComponent.prototype.toggleAccordion = function () {
        this.toggle();
    };
    AccordionItemComponent.prototype.onSelectItem = function (item) {
        console.log(item);
        this.onSelect.emit(item);
    };
    AccordionItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionItemComponent.prototype, "activeItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccordionItemComponent.prototype, "onSelect", void 0);
    AccordionItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'accordion-item',
            template: __webpack_require__(/*! ./accordion-item.component.html */ "./src/app/shared/components/accordion-item/accordion-item.component.html"),
            animations: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["matExpansionAnimations"].bodyExpansion],
            styles: [__webpack_require__(/*! ./accordion-item.component.scss */ "./src/app/shared/components/accordion-item/accordion-item.component.scss")]
        })
    ], AccordionItemComponent);
    return AccordionItemComponent;
}(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordionItem"]));



/***/ }),

/***/ "./src/app/shared/components/breadcrumbs/breadcrumbs.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumbs/breadcrumbs.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumbs d-flex align-items-center justify-content-start\">\n\n  <ng-container *ngFor=\"let item of breadcrumbs ; let i=index; let last = last; \">\n\n    <li *ngIf=\"item.children\">\n      <button mat-button class=\"small-button\" [matMenuTriggerFor]=\"menu\" >\n        {{item.title}}\n        <mat-icon>keyboard_arrow_down</mat-icon>\n      </button>\n\n      <mat-menu [overlapTrigger]=\"false\" #menu=\"matMenu\">\n        <button *ngFor=\"let menuItem of item.children\" mat-menu-item  (click)=\"onSelectItem(menuItem)\">{{menuItem.title}}</button>\n      </mat-menu>\n    </li>\n\n    <li *ngIf=\"!item.children\">\n      <button mat-button class=\"small-button\" (click)=\"onSelectItem(item)\" >\n        {{item.title}}\n      </button>\n    </li>\n\n    <li *ngIf=\"!last\" class=\"divider mr-2 ml-2 \">\n      /\n    </li>\n  </ng-container>\n\n</ul>\n"

/***/ }),

/***/ "./src/app/shared/components/breadcrumbs/breadcrumbs.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumbs/breadcrumbs.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider {\n  color: #cacaca !important;\n  font-size: 15px; }\n\nul.breadcrumbs li {\n  line-height: 0; }\n\nbutton.mat-menu-item {\n  line-height: 26px !important;\n  height: 32px !important;\n  font-size: 14px; }\n\nul.breadcrumbs {\n  list-style: none;\n  margin: 0px;\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvQzpcXFVzZXJzXFxzb21hclxcT25lRHJpdmVcXERlc2t0b3BcXHRlbXAgY2xlYW51cFxcQXBweFxcQW5ndWxhclN0YXJ0ZXJcXG5nU3RhcnRlci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxicmVhZGNydW1ic1xcYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXIge1xuICBjb2xvcjogI2NhY2FjYSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbnVsLmJyZWFkY3J1bWJzIGxpIHtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbmJ1dHRvbi5tYXQtbWVudS1pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDI2cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxudWwuYnJlYWRjcnVtYnMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/breadcrumbs/breadcrumbs.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/breadcrumbs/breadcrumbs.component.ts ***!
  \************************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        console.log(this.breadcrumbs);
    };
    BreadcrumbsComponent.prototype.onSelectItem = function (item) {
        console.log(item);
        this.onSelect.emit(item);
    };
    BreadcrumbsComponent.prototype.breadcrumbClicked = function (crumb) {
        console.log(crumb);
        // if (crumb.route) {
        //   if (item.params) {
        //     this.router.navigate([item.route, item.params]);
        //   } else {
        //     this.router.navigate([item.route]);
        //   }
        // }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadcrumbsComponent.prototype, "breadcrumbs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BreadcrumbsComponent.prototype, "onSelect", void 0);
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/shared/components/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumbs.component.scss */ "./src/app/shared/components/breadcrumbs/breadcrumbs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/collapse-menu/collapse-menu.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/collapse-menu/collapse-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <div *ngFor=\"let item of menuItems\">\n\n    <mat-list-item *ngIf=\"!item.children\" [class.active]=\"activeItem == '/'+item.route\">\n      <a class=\"w-100 h-100 d-flex align-items-center\" (click)=\"onSelectItem(item)\">\n        <span class=\"icon-holder mr-3\">\n          <mat-icon>{{item.icon}}</mat-icon>\n        </span>\n        <span>{{item.title}}</span>\n      </a>\n      <span *ngIf=\"item.children\">\n        <mat-icon>keyboard_arrow_down</mat-icon>\n      </span>\n    </mat-list-item>\n\n\n    <accordion-item *ngIf=\"item.children\" [item]=\"item\" [activeItem]=\"activatedUrl\" (onSelect)=\"onSelectItem($event)\"></accordion-item>\n  </div>\n\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/shared/components/collapse-menu/collapse-menu.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/collapse-menu/collapse-menu.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: #c4c4c4; }\n  .active .icon-holder {\n    background-color: #ffffff; }\n  .icon-holder {\n  background-color: #F5F5F5;\n  border-radius: 50%;\n  padding: 7px 0 0 0;\n  text-align: center;\n  width: 40px;\n  height: 40px; }\n  .sub-menu {\n  background-color: #F5F5F5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29sbGFwc2UtbWVudS9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvbGxhcHNlLW1lbnVcXGNvbGxhcHNlLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBb0MsRUFBQTtFQUR4QztJQUdRLHlCQUF5QixFQUFBO0VBSWpDO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFJaEI7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbGxhcHNlLW1lbnUvY29sbGFwc2UtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcbiAgICAuaWNvbi1ob2xkZXIgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB9XG59XG5cbi5pY29uLWhvbGRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogN3B4IDAgMCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG5cbn1cblxuLnN1Yi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/collapse-menu/collapse-menu.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/collapse-menu/collapse-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: CollapseMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseMenuComponent", function() { return CollapseMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollapseMenuComponent = /** @class */ (function () {
    function CollapseMenuComponent() {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CollapseMenuComponent.prototype.ngOnInit = function () {
    };
    CollapseMenuComponent.prototype.onSelectItem = function (item) {
        this.onSelect.emit(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CollapseMenuComponent.prototype, "menuItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CollapseMenuComponent.prototype, "activeItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CollapseMenuComponent.prototype, "onSelect", void 0);
    CollapseMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'collapse-menu',
            template: __webpack_require__(/*! ./collapse-menu.component.html */ "./src/app/shared/components/collapse-menu/collapse-menu.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./collapse-menu.component.scss */ "./src/app/shared/components/collapse-menu/collapse-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollapseMenuComponent);
    return CollapseMenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search-filter-list/search-filter-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/search-filter-list/search-filter-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar\">\n  <mat-form-field appearance=\"fill\" [floatLabel]=\"'never'\">\n    <input matInput type=\"text\" placeholder=\"Search Projects\" [(ngModel)]=\"searchTerm\" (input)=\"search($event.target.value)\">\n    <mat-icon matPrefix>search</mat-icon>\n    <button class=\"input-clear-button\" mat-button *ngIf=\"searchTerm\" matSuffix mat-icon-button aria-label=\"Clear\"\n      (click)=\"clearSearch()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n<mat-nav-list dense>\n  <a [class.active]=\"activeNav == item.id\" mat-list-item *ngFor=\"let item of filteredItems\" (click)=\"selectItem(item) \">\n    {{ item.name }}\n  </a>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/shared/components/search-filter-list/search-filter-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/search-filter-list/search-filter-list.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC1maWx0ZXItbGlzdC9zZWFyY2gtZmlsdGVyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/search-filter-list/search-filter-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/search-filter-list/search-filter-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SearchFilterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterListComponent", function() { return SearchFilterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_anappro_mock_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/anappro/mock-service.service */ "./src/app/modules/anappro/mock-service.service.ts");
// import { Component, OnInit } from '@angular/core';



var SearchFilterListComponent = /** @class */ (function () {
    function SearchFilterListComponent(mockService) {
        this.mockService = mockService;
    }
    SearchFilterListComponent.prototype.ngOnInit = function () {
    };
    SearchFilterListComponent.prototype.clearSearch = function () {
        this.searchTerm = '';
        this.search(this.searchTerm);
    };
    SearchFilterListComponent.prototype.search = function (val) {
        if (!val || !val.trim()) {
            this.filteredItems = this.mockService.query();
            return;
        }
        this.filteredItems = this.mockService.query({
            name: val
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFilterListComponent.prototype, "filteredItems", void 0);
    SearchFilterListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'search-filter-list',
            template: __webpack_require__(/*! ./search-filter-list.component.html */ "./src/app/shared/components/search-filter-list/search-filter-list.component.html"),
            styles: [__webpack_require__(/*! ./search-filter-list.component.scss */ "./src/app/shared/components/search-filter-list/search-filter-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_anappro_mock_service_service__WEBPACK_IMPORTED_MODULE_2__["MockServiceService"]])
    ], SearchFilterListComponent);
    return SearchFilterListComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/translation/translation.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/translation/translation.module.ts ***!
  \******************************************************************/
/*! exports provided: HttpLoaderFactory, TranslationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationModule", function() { return TranslationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
}
var TranslationModule = /** @class */ (function () {
    function TranslationModule() {
    }
    TranslationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
            ],
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]
            ],
            declarations: []
        })
    ], TranslationModule);
    return TranslationModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_translation_translation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/translation/translation.module */ "./src/app/shared/modules/translation/translation.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/breadcrumbs/breadcrumbs.component */ "./src/app/shared/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _components_collapse_menu_collapse_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/collapse-menu/collapse-menu.component */ "./src/app/shared/components/collapse-menu/collapse-menu.component.ts");
/* harmony import */ var _components_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accordion-item/accordion-item.component */ "./src/app/shared/components/accordion-item/accordion-item.component.ts");
/* harmony import */ var _components_search_filter_list_search_filter_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-filter-list/search-filter-list.component */ "./src/app/shared/components/search-filter-list/search-filter-list.component.ts");











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"],
                _components_collapse_menu_collapse_menu_component__WEBPACK_IMPORTED_MODULE_8__["CollapseMenuComponent"],
                _components_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_9__["AccordionItemComponent"],
                _components_search_filter_list_search_filter_list_component__WEBPACK_IMPORTED_MODULE_10__["SearchFilterListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_translation_translation_module__WEBPACK_IMPORTED_MODULE_5__["TranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            exports: [
                _modules_translation_translation_module__WEBPACK_IMPORTED_MODULE_5__["TranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"],
                _components_collapse_menu_collapse_menu_component__WEBPACK_IMPORTED_MODULE_8__["CollapseMenuComponent"],
                _components_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_9__["AccordionItemComponent"],
                _components_search_filter_list_search_filter_list_component__WEBPACK_IMPORTED_MODULE_10__["SearchFilterListComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // baseUrl: 'http://165.227.37.148/api',
    baseUrl: 'https://postman-echo.com/basic-auth',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\somar\OneDrive\Desktop\temp cleanup\Appx\AngularStarter\ngStarter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map