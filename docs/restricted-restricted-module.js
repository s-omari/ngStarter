(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restricted-restricted-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/do.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/do.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/do */ "./node_modules/rxjs-compat/_esm5/operator/do.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.do = _operator_do__WEBPACK_IMPORTED_MODULE_1__["_do"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._do = _operator_do__WEBPACK_IMPORTED_MODULE_1__["_do"];
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/do.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/do.js ***!
  \*******************************************************/
/*! exports provided: _do */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_do", function() { return _do; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function _do(nextOrObserver, error, complete) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(nextOrObserver, error, complete)(this);
}
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "./src/app/@core/authentication/auth-interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/authentication/auth-interceptor.ts ***!
  \**********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/@core/services/user.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService) {
        this.userService = userService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        console.log('auth interceptor');
        console.log('stored token: ' + this.userService.getToken());
    }
    /**
     * Intercept  http calls and add  Auth Token as request header
     *
     * If request is unsuccessful with  401 - Unauthorized status ,
     * log  user out with UserService
     */
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var authReq = req.clone({
            headers: req.headers
                // add stored auth token as auth header
                .set('Authorization', "Basic " + this.userService.getToken())
        });
        return next.handle(authReq)
            .do(function (success) { }, function (error) {
            if (error.status === 401) {
                _this.userService.logOut();
            }
        });
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/application/restricted/change-password/change-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/application/restricted/change-password/change-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid w-100 mt-4 p-0\">\n\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"col-10 col-md-6 col-lg-4\">\n      <mat-card class=\"text-center p-5\">\n        <mat-icon  [hidden]=\"isSubmitting\"> lock </mat-icon>\n        <mat-card-content>\n\n          <form (ngSubmit)=\"changePassword($event)\" [hidden]=\"isSubmitting\" [formGroup]=\"form\">\n            <div class=\"container\">\n              <div class=\"row justify-content-center align-items-center\">\n                <div class=\"col-12\">\n                  <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\">\n          <mat-label>Old Password</mat-label>\n\n                    <input matInput placeholder=\"Old Password\" type=\"password\" formControlName=\"old\" required />\n                  </mat-form-field>\n                  <br>\n                  <span class=\"text-danger\" *ngIf=\"errors.old\">\n                    {{ errors.old }}\n                  </span>\n                </div>\n              </div>\n              <div class=\"row justify-content-center align-items-center\">\n                <div class=\"col-12\">\n                  <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\">\n          <mat-label>New Password</mat-label>\n\n                    <input matInput placeholder=\"New Password\" type=\"password\" formControlName=\"password\" required />\n                  </mat-form-field>\n                  <br>\n                  <span class=\"text-danger\" *ngIf=\"errors.password\">\n                    {{ errors.password }}\n                  </span>\n                </div>\n              </div>\n              <div class=\"row justify-content-center align-items-center\">\n                <div class=\"col-12\">\n                  <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\">\n          <mat-label>Confirm New Password</mat-label>\n\n                    <input matInput placeholder=\"Confirm New Password\" type=\"password\" formControlName=\"confirmPassword\"\n                      required />\n                  </mat-form-field>\n                  <br>\n                  <span class=\"text-danger\" *ngIf=\"errors.confirmPassword\">\n                    {{ errors.confirmPassword }}\n                  </span>\n                </div>\n              </div>\n\n              <div class=\"row justify-content-center align-items-center mt-2\">\n                <div class=\"col-xs text-xs-center\">\n                  <button type=\"submit\" [disabled]=\"form.invalid\" mat-raised-button color=\"accent\">\n                    Change Password\n                  </button>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"row text-xs-center justify-content-center align-items-center my-2 mx-2\" *ngIf=\"isSubmitting\">\n            <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/modules/application/restricted/change-password/change-password.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/application/restricted/change-password/change-password.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vcmVzdHJpY3RlZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/application/restricted/change-password/change-password.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/application/restricted/change-password/change-password.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-errors */ "./src/app/modules/application/restricted/change-password/form-errors.ts");
/* harmony import */ var _core_form_validation_password_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@core/form-validation/password.validator */ "./src/app/@core/form-validation/password.validator.ts");
/* harmony import */ var _change_password_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.service */ "./src/app/modules/application/restricted/change-password/change-password.service.ts");
/* harmony import */ var _public_public_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/public.service */ "./src/app/modules/application/public/public.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, changePasswordService, publicService, matSnackBar, location) {
        this.formBuilder = formBuilder;
        this.changePasswordService = changePasswordService;
        this.publicService = publicService;
        this.matSnackBar = matSnackBar;
        this.location = location;
        this.isSubmitting = false;
        this.errors = _form_errors__WEBPACK_IMPORTED_MODULE_4__["errors"];
        this.errorMessages = _form_errors__WEBPACK_IMPORTED_MODULE_4__["errorMessages"];
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.form.valueChanges.subscribe(function (data) { return _this.validateForm(); });
    };
    ChangePasswordComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            old: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])],
            confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        }, {
            validator: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _core_form_validation_password_validator__WEBPACK_IMPORTED_MODULE_5__["PasswordValidation"].confirmPassword,
                _core_form_validation_password_validator__WEBPACK_IMPORTED_MODULE_5__["PasswordValidation"].passwordPattern
            ])
        });
    };
    ChangePasswordComponent.prototype.validateForm = function () {
        for (var field in this.errors) {
            this.errors[field] = '';
            var input = this.form.get(field);
            if (input.invalid && input.dirty) {
                for (var error in input.errors) {
                    this.errors[field] = this.errorMessages[field][error];
                }
            }
        }
    };
    ChangePasswordComponent.prototype.changePassword = function (event) {
        var _this = this;
        var data = {
            old_password: this.form.get('old').value,
            password: this.form.get('password').value,
            password_confirmation: this.form.get('confirmPassword').value
        };
        this.isSubmitting = true;
        this.changePasswordService.changePassword(data)
            .subscribe(function (response) {
            _this.isSubmitting = false;
            if (response.data) {
                _this.matSnackBar.open('Password has Changed Successfully', null, {
                    duration: 3000
                });
                _this.goBack();
            }
        }, function (error) {
            _this.isSubmitting = false;
            _this.matSnackBar.open('Something went wrong, please ensure your old password is correct', null, {
                duration: 3000
            });
        });
    };
    ChangePasswordComponent.prototype.goBack = function () {
        this.location.back();
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/modules/application/restricted/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/modules/application/restricted/change-password/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _change_password_service__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordService"],
            _public_public_service__WEBPACK_IMPORTED_MODULE_7__["PublicService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/restricted/change-password/change-password.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/application/restricted/change-password/change-password.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChangePasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordService", function() { return ChangePasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/services/user.service */ "./src/app/@core/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ChangePasswordService = /** @class */ (function () {
    function ChangePasswordService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    /**
     * Change password.
     * @param data old and new password
     */
    ChangePasswordService.prototype.changePassword = function (data) {
        return this.http.post(this.userService.baseUrl + '/user/update-password', data);
    };
    ChangePasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ChangePasswordService);
    return ChangePasswordService;
}());



/***/ }),

/***/ "./src/app/modules/application/restricted/change-password/form-errors.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/application/restricted/change-password/form-errors.ts ***!
  \*******************************************************************************/
/*! exports provided: errors, errorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessages", function() { return errorMessages; });
var errors = {
    old: '',
    password: '',
    confirmPassword: ''
};
var errorMessages = {
    old: {
        required: 'Old Password Field is Required',
        minlength: 'Old Password field mst be 6 or more characters'
    },
    password: {
        required: 'New Password Field is Required',
        minlength: 'New Password field mst be 6 or more characters',
        passwordPattern: 'Password must contain one uppercase character, one lowercase character and one number'
    },
    confirmPassword: {
        required: 'New Password Field is Required',
        confirmPassword: 'Please ensure passwords match',
    }
};


/***/ }),

/***/ "./src/app/modules/application/restricted/restricted-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/application/restricted/restricted-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RestrictedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestrictedRoutingModule", function() { return RestrictedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/modules/application/restricted/change-password/change-password.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/modules/application/restricted/settings/settings.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _restricted_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restricted.component */ "./src/app/modules/application/restricted/restricted.component.ts");






var routes = [{
        path: '',
        component: _restricted_component__WEBPACK_IMPORTED_MODULE_5__["RestrictedComponent"],
        children: [
            // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
            { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] },
            { path: 'change-password', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"] },
            { path: '', redirectTo: 'settings', pathMatch: 'prefix' },
        ]
    }
];
var RestrictedRoutingModule = /** @class */ (function () {
    function RestrictedRoutingModule() {
    }
    RestrictedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], RestrictedRoutingModule);
    return RestrictedRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/application/restricted/restricted.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/application/restricted/restricted.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header #header (toggleNavigation)=\"sidenav.toggle()\">\n</app-header>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/application/restricted/restricted.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/application/restricted/restricted.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vcmVzdHJpY3RlZC9yZXN0cmljdGVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/application/restricted/restricted.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/application/restricted/restricted.component.ts ***!
  \************************************************************************/
/*! exports provided: RestrictedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestrictedComponent", function() { return RestrictedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestrictedComponent = /** @class */ (function () {
    function RestrictedComponent() {
    }
    RestrictedComponent.prototype.ngOnInit = function () {
    };
    RestrictedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restricted',
            template: __webpack_require__(/*! ./restricted.component.html */ "./src/app/modules/application/restricted/restricted.component.html"),
            styles: [__webpack_require__(/*! ./restricted.component.scss */ "./src/app/modules/application/restricted/restricted.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestrictedComponent);
    return RestrictedComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/restricted/restricted.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/application/restricted/restricted.module.ts ***!
  \*********************************************************************/
/*! exports provided: RestrictedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestrictedModule", function() { return RestrictedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/modules/application/restricted/change-password/change-password.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/modules/application/restricted/settings/settings.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _restricted_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restricted.component */ "./src/app/modules/application/restricted/restricted.component.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/modules/application/restricted/side-menu/side-menu.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_application_shared_application_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared-application/shared-application.module */ "./src/app/modules/application/shared-application/shared-application.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _shared_restricted_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared-restricted/components/header/header.component */ "./src/app/modules/application/restricted/shared-restricted/components/header/header.component.ts");
/* harmony import */ var _restricted_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./restricted-routing.module */ "./src/app/modules/application/restricted/restricted-routing.module.ts");
/* harmony import */ var _core_authentication_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@core/authentication/auth-interceptor */ "./src/app/@core/authentication/auth-interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












// import { FooterComponent } from './shared-restricted/components/footer/footer.component';



var RestrictedModule = /** @class */ (function () {
    function RestrictedModule() {
    }
    RestrictedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _shared_application_shared_application_module__WEBPACK_IMPORTED_MODULE_9__["SharedApplicationModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                // HttpClient,
                _restricted_routing_module__WEBPACK_IMPORTED_MODULE_12__["RestrictedRoutingModule"],
            ],
            declarations: [
                _restricted_component__WEBPACK_IMPORTED_MODULE_6__["RestrictedComponent"],
                _shared_restricted_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                // FooterComponent,
                _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_7__["SideMenuComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
                    useClass: _core_authentication_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                    multi: true
                }
            ],
            entryComponents: [_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"]],
            exports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_10__["ThemeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _shared_application_shared_application_module__WEBPACK_IMPORTED_MODULE_9__["SharedApplicationModule"]
            ]
        })
    ], RestrictedModule);
    return RestrictedModule;
}());



/***/ }),

/***/ "./src/app/modules/application/restricted/settings/settings.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/application/restricted/settings/settings.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid w-100 mt-4 p-0\">\n  <div class=\"row align-items-center justify-content-center\">\n    <div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2\">\n\n    </div>\n  </div>\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"col-10 col-md-6 col-lg-4\">\n      <mat-card class=\"text-center p-5\" color=\"primary\">\n        <i style=\"font-size:55px;\" class=\"px-5 mb-2 material-icons\" [hidden]=\"isSubmitting || requestStatus\"> account_circle </i>\n        <mat-card-content>\n          <form #updateForm=\"ngForm\" (ngSubmit)=\"updateUser($event)\" [hidden]=\"isSubmitting\">\n            <div class=\"container\">\n              <div class=\"row justify-content-center align-items-center\">\n                <div class=\"col-12\">\n                  <mat-form-field>\n                    <input matInput [(ngModel)]=\"user.email\" (ngModelChange)=\"invalidCredentials=false\" placeholder=\"Email\" type=\"text\"\n                      name=\"email\" #email=\"ngModel\" [pattern]=\"validationSer.patterns.email\" required>\n                  </mat-form-field>\n                  <form-validation [name]=\"email\" [errorMessages]=\"{'pattern':'Please enter a valid email address'}\">\n                  </form-validation>\n                </div>\n              </div>\n              <div class=\"row justify-content-center align-items-center\">\n                <div class=\"col-12\">\n                  <mat-form-field>\n                    <input matInput [(ngModel)]=\"user.first_name\" (ngModelChange)=\"invalidCredentials=false\" placeholder=\"First Name\" type=\"text\"\n                      name=\"first_name\" #first_name=\"ngModel\" required>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row justify-content-center align-items-center\">\n                <div class=\"col-12\">\n                  <mat-form-field>\n                    <input matInput [(ngModel)]=\"user.last_name\" (ngModelChange)=\"invalidCredentials=false\" placeholder=\"Last Name\" type=\"text\"\n                      name=\"last_name\" #last_name  =\"ngModel\" required>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row justify-content-center align-items-center\">\n                <div class=\"col-12\">\n                  <mat-form-field>\n                    <input matInput [(ngModel)]=\"user.phone_number\" (ngModelChange)=\"invalidCredentials=false\" placeholder=\"Phone Number\" type=\"text\"\n                      name=\"phone_number\" #phone_number=\"ngModel\" [pattern]=\"validationSer.patterns.phone_number\" required>\n                  </mat-form-field>\n                  <form-validation [name]=\"phone_number\" [errorMessages]=\"{'pattern':'Please enter a valid phone number'}\">\n                  </form-validation>\n                </div>\n              </div>\n              <div class=\"row justify-content-center align-items-center mt-2\">\n                <div class=\"col-xs text-xs-center\">\n                  <button type=\"submit\" [disabled]=\"updateForm.form.invalid\" mat-raised-button color=\"accent\">\n                    Update Profile\n                  </button>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"row text-xs-center justify-content-center align-items-center my-2 mx-2\" *ngIf=\"isSubmitting\">\n            <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/modules/application/restricted/settings/settings.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/application/restricted/settings/settings.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vcmVzdHJpY3RlZC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/application/restricted/settings/settings.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/application/restricted/settings/settings.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/services/validation.service */ "./src/app/@core/services/validation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@core/models/user.model */ "./src/app/@core/models/user.model.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.service */ "./src/app/modules/application/restricted/settings/settings.service.ts");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(validationSer, settingsSer) {
        this.validationSer = validationSer;
        this.settingsSer = settingsSer;
        this.invalidCredentials = false;
        this.requestStatus = null;
        this.isSubmitting = false;
        this.user = new _core_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.updateUser = function (e) {
        var _this = this;
        this.isSubmitting = true;
        this.settingsSer.updateUser(this.user)
            .subscribe(function (response) {
            _this.isSubmitting = false;
            _this.requestStatus = 'success';
            console.log(response);
        }, function (error) {
            _this.requestStatus = 'invalid email';
            var errors = error.json().errors;
            var errorsArray = [];
            for (var errorText in errors) {
                if (errors.hasOwnProperty(errorText)) {
                    errorsArray.push(errors[errorText]);
                }
            }
            errorsArray.map(function (individualError) {
                console.log(individualError);
            });
        }, function () {
            _this.isSubmitting = false;
        });
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/modules/application/restricted/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/modules/application/restricted/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"], _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/restricted/settings/settings.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/application/restricted/settings/settings.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@core/services/user.service */ "./src/app/@core/services/user.service.ts");




var SettingsService = /** @class */ (function () {
    function SettingsService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    SettingsService.prototype.updateUser = function (userDetails) {
        return this.http.post(this.userService.baseUrl + "user", userDetails);
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/modules/application/restricted/shared-restricted/components/header/header.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/application/restricted/shared-restricted/components/header/header.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n\n<button mat-button >\n  <div routerLink=''  routerLink='' class=\"logo\">ngStarter</div>\n</button>\n\n<span class=\"flex-spacer\"></span>\n\n<language-switcher></language-switcher>\n<theme-switcher [selectedTheme]=\"appService.appTheme\" (onSelectTheme)=\"appService.setTheme($event)\"></theme-switcher>\n\n  <a [mat-menu-trigger-for]=\"userMenu\">\n    <mat-icon>account_box</mat-icon>\n  </a>\n\n</mat-toolbar>\n\n<mat-menu #userMenu=\"matMenu\">\n  <mat-card class=\"px-1 py-0 pt-1\" style=\"box-shadow:none;\">\n    <mat-card-header>\n      <mat-card-title class=\"mb-3\"> {{userSer.user?.name}}</mat-card-title>\n      <mat-card-subtitle> {{userSer.user?.email}} </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content class=\"mt-1\">\n      <button mat-menu-item [routerLink]=\"['/application/restricted/settings']\">\n        <mat-icon> account_circle </mat-icon>\n        My profile\n      </button>\n      <button [routerLink]=\"['/application/restricted/change-password']\" mat-menu-item>\n        <mat-icon> lock </mat-icon>\n        Change Password\n      </button>\n      <button mat-menu-item (click)=\"userSer.logOut()\">\n        <mat-icon> exit_to_app </mat-icon>\n        Sign Out\n      </button>\n    </mat-card-content>\n  </mat-card>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/modules/application/restricted/shared-restricted/components/header/header.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/application/restricted/shared-restricted/components/header/header.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);\n  position: relative;\n  width: 100%;\n  z-index: 800; }\n  mat-toolbar .fill-remaining-space {\n    flex: 1 1 auto; }\n  mat-toolbar .color-box {\n    display: inline-flex;\n    vertical-align: middle;\n    width: 30px;\n    height: 30px;\n    float: left; }\n  mat-toolbar .logo {\n    padding: 0 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9yZXN0cmljdGVkL3NoYXJlZC1yZXN0cmljdGVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcc29tYXJcXE9uZURyaXZlXFxEZXNrdG9wXFx0ZW1wIGNsZWFudXBcXEFwcHhcXEFuZ3VsYXJTdGFydGVyXFxuZ1N0YXJ0ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFwcGxpY2F0aW9uXFxyZXN0cmljdGVkXFxzaGFyZWQtcmVzdHJpY3RlZFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFMZDtJQVFJLGNBQWMsRUFBQTtFQVJsQjtJQWFJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXLEVBQUE7RUFqQmY7SUFxQkUsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9yZXN0cmljdGVkL3NoYXJlZC1yZXN0cmljdGVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcydcbi8vICRpY29uLWZvbnQtcGF0aDogJy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvZm9udHMvYm9vdHN0cmFwLydcbm1hdC10b29sYmFyIHtcbiAgLy8gaGVpZ2h0OiAkYXBwSGVhZGVySGVpZ2h0XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA4MDA7XG5cbiAgLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG5cbiAgLmNvbG9yLWJveCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuLmxvZ28ge1xuICBwYWRkaW5nOiAwIDYwcHg7XG59XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/application/restricted/shared-restricted/components/header/header.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/application/restricted/shared-restricted/components/header/header.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../@core/services/user.service */ "./src/app/@core/services/user.service.ts");
/* harmony import */ var _core_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@core/services/app.service */ "./src/app/@core/services/app.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userSer, appService) {
        this.userSer = userSer;
        this.appService = appService;
        // tslint:disable-next-line:no-output-rename
        this.toggleNavigation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // console.log(userSer.user.email);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('toggleNavigation'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "toggleNavigation", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/application/restricted/shared-restricted/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/application/restricted/shared-restricted/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/restricted/side-menu/side-menu.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/application/restricted/side-menu/side-menu.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- main navigation menu-->\n  <div class=\"row align-items-center justify-content-start\">\n    <div class=\"col px-0\">\n      <mat-nav-list>\n        <mat-list-item *ngFor=\"let link of links\" class=\"my-2 no-padding\" (click)=\"linkClicked.emit(link.route)\"\n          [routerLink]=\"link.route\" routerLinkActive=\"router-link-active\">\n          <button class=\"w-100 h-100 px-0 text-left\" mat-button>\n            <mat-icon class=\"align-middle mx-2\"> {{link.iconName}} </mat-icon>\n            <span style=\"font-size:14px;\" translate>{{link.label}}</span>\n          </button>\n        </mat-list-item>\n      </mat-nav-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/application/restricted/side-menu/side-menu.component.sass":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/application/restricted/side-menu/side-menu.component.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "md-nav-list mat-list-item.no-padding .mat-list-item-content {\n  padding: 0px !important; }\n\nmd-nav-list mat-list-item button {\n  font-size: 1em; }\n\n.router-link-active {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9yZXN0cmljdGVkL3NpZGUtbWVudS9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhcHBsaWNhdGlvblxccmVzdHJpY3RlZFxcc2lkZS1tZW51XFxzaWRlLW1lbnUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJUSx1QkFBdUIsRUFBQTs7QUFKL0I7RUFPTSxjQUFjLEVBQUE7O0FBRXBCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9yZXN0cmljdGVkL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZC1uYXYtbGlzdCB7XG4gIG1hdC1saXN0LWl0ZW0ge1xuICAgICYubm8tcGFkZGluZyB7XG4gICAgICAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH0gfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtOyB9IH0gfVxuXG4ucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/application/restricted/side-menu/side-menu.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/application/restricted/side-menu/side-menu.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
        this['linkClicked'] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.links = [
            { label: 'Resources', route: '/demo/resources', iconName: 'list' },
            { label: 'Appointments', route: '/demo/appointments', iconName: 'calendar_today' },
            { label: 'Chat', route: '/demo/chat', iconName: 'message' },
            { label: 'Components', route: '/demo/components', iconName: 'important_devices' }
        ];
    }
    SideMenuComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SideMenuComponent.prototype, "linkClicked", void 0);
    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/modules/application/restricted/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.sass */ "./src/app/modules/application/restricted/side-menu/side-menu.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=restricted-restricted-module.js.map