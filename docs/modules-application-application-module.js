(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-application-application-module"],{

/***/ "./src/app/modules/application/application.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/application/application.component.ts ***!
  \**************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent() {
    }
    ApplicationComponent.prototype.ngOnInit = function () { };
    ApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'application',
            template: "<router-outlet></router-outlet>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/application.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/application/application.module.ts ***!
  \***********************************************************/
/*! exports provided: ApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationModule", function() { return ApplicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _shared_application_shared_application_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-application/shared-application.module */ "./src/app/modules/application/shared-application/shared-application.module.ts");
/* harmony import */ var _application_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application.router */ "./src/app/modules/application/application.router.ts");








var ApplicationModule = /** @class */ (function () {
    function ApplicationModule() {
    }
    ApplicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
                _application_router__WEBPACK_IMPORTED_MODULE_7__["router"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _shared_application_shared_application_module__WEBPACK_IMPORTED_MODULE_6__["SharedApplicationModule"]
            ],
            declarations: [
                _application_router__WEBPACK_IMPORTED_MODULE_7__["RoutingComponents"]
            ],
            exports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _shared_application_shared_application_module__WEBPACK_IMPORTED_MODULE_6__["SharedApplicationModule"]
            ],
            providers: []
        })
    ], ApplicationModule);
    return ApplicationModule;
}());



/***/ }),

/***/ "./src/app/modules/application/application.router.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/application/application.router.ts ***!
  \***********************************************************/
/*! exports provided: RoutingComponents, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@core/authentication/auth-guard.service */ "./src/app/@core/authentication/auth-guard.service.ts");
/* harmony import */ var _application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application.component */ "./src/app/modules/application/application.component.ts");



var RoutingComponents = [
    _application_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationComponent"]
];
var routes = [
    {
        path: '', component: _application_component__WEBPACK_IMPORTED_MODULE_2__["ApplicationComponent"],
        children: [
            {
                path: 'restricted',
                canActivate: [_core_authentication_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
                loadChildren: './restricted/restricted.module#RestrictedModule'
            },
            {
                path: 'public',
                loadChildren: './public/public.module#PublicModule'
            },
            {
                path: '',
                redirectTo: 'restricted',
                pathMatch: 'full',
            },
            { path: '**', pathMatch: 'full', redirectTo: 'restricted' }
        ]
    }
];
var router = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=modules-application-application-module.js.map