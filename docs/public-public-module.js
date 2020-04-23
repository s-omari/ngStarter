(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-public-module"],{

/***/ "./src/app/modules/application/public/forgot-password-form/forgot-password-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/application/public/forgot-password-form/forgot-password-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <form #loginForm=\"ngForm\"  class=\"h-100\"  (ngSubmit)=\"resetPassword($event)\" [hidden]=\"isSubmitting || requestStatus == 'success' \">\n      <div class=\"d-flex flex-column h-100\">\n        <div *ngIf=\"requestStatus == 'invalid email'\" class=\"row py-2 justify-content-center align-items-center\">\n            <h4 class=\"text-danger\"> This username is not linked to any account </h4>\n        </div>\n        <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\">\n            <mat-label>Username / Email</mat-label>\n              <input matInput [(ngModel)]=\"user.email\" (ngModelChange)=\"requestStatus=null\" placeholder=\"{{'universals.email' | translate}}\"\n                type=\"text\" name=\"email\" #email=\"ngModel\" [pattern]=\"validationSer.patterns.email\" required>\n            </mat-form-field>\n            <form-validation [name]=\"email\" [errorMessages]=\"{'pattern':'Please enter a valid email address'}\">\n            </form-validation>\n        <div class=\"d-flex justify-content-between\">\n            <button type=\"submit\" class=\"ml-auto\" [disabled]=\"loginForm.form.invalid\" mat-raised-button color=\"accent\">\n                Reset Password\n              </button>\n        </div>\n    <div class=\"flex-spacer\"></div>\n    <a mat-button [routerLink]=\"['application/public/login']\"> <mat-icon>arrow_back</mat-icon> {{'signup.back' | translate}}</a>\n      </div>\n    </form>\n    \n    <div class=\"row text-xs-center justify-content-center align-items-center my-2 mx-2\" *ngIf=\"isSubmitting\">\n      <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n\n\n    <div class=\"row text-xs-center justify-content-center align-items-center my-2 mx-2\" *ngIf=\"requestStatus == 'success'\">\n      <div class=\"col\">\n        <mat-icon class=\"success success-icon\" >check_circle_outline</mat-icon>\n        <h2 class=\"success\">Password Reset Submitted , please check your email to reset you password</h2>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/modules/application/public/forgot-password-form/forgot-password-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/application/public/forgot-password-form/forgot-password-form.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 150px;\n  width: auto; }\n\n.success-icon {\n  font-size: 45px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9wdWJsaWMvZm9yZ290LXBhc3N3b3JkLWZvcm0vQzpcXFVzZXJzXFxzb21hclxcT25lRHJpdmVcXERlc2t0b3BcXHRlbXAgY2xlYW51cFxcQXBweFxcQW5ndWxhclN0YXJ0ZXJcXG5nU3RhcnRlci9zcmNcXGFwcFxcbW9kdWxlc1xcYXBwbGljYXRpb25cXHB1YmxpY1xcZm9yZ290LXBhc3N3b3JkLWZvcm1cXGZvcmdvdC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vcHVibGljL2ZvcmdvdC1wYXNzd29yZC1mb3JtL2ZvcmdvdC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLnN1Y2Nlc3MtaWNvbiB7XG4gIGZvbnQtc2l6ZTo0NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/application/public/forgot-password-form/forgot-password-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/application/public/forgot-password-form/forgot-password-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ForgotPasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordFormComponent", function() { return ForgotPasswordFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _public_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public.service */ "./src/app/modules/application/public/public.service.ts");
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@core/services/validation.service */ "./src/app/@core/services/validation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var User = /** @class */ (function () {
    function User() {
        this.email = null;
    }
    return User;
}());
var ForgotPasswordFormComponent = /** @class */ (function () {
    function ForgotPasswordFormComponent(validationSer, publicService) {
        this.validationSer = validationSer;
        this.publicService = publicService;
        this.user = new User();
        this.invalidUsers = false;
        this.requestStatus = null;
        this.isSubmitting = false;
    }
    ForgotPasswordFormComponent.prototype.ngOnInit = function () {
    };
    // Send a request to backend to send out a password reset email.
    // Return UI message to user on success/fail
    ForgotPasswordFormComponent.prototype.resetPassword = function (e) {
        var _this = this;
        this.isSubmitting = true;
        this.publicService.resetPassword(this.user).subscribe(function (res) {
            _this.requestStatus = 'success';
        }, function (error) {
            _this.isSubmitting = false;
            _this.requestStatus = 'invalid email';
            console.log(error.json());
        }, function () {
            _this.isSubmitting = false;
        });
    };
    ForgotPasswordFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password-form.component.html */ "./src/app/modules/application/public/forgot-password-form/forgot-password-form.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-form.component.scss */ "./src/app/modules/application/public/forgot-password-form/forgot-password-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"],
            _public_service__WEBPACK_IMPORTED_MODULE_1__["PublicService"]])
    ], ForgotPasswordFormComponent);
    return ForgotPasswordFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/public/login/login-form/login-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/application/public/login/login-form/login-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <form #loginForm=\"ngForm\" class=\"h-100\" (ngSubmit)=\"login($event)\" [hidden]=\"isSubmitting\">\n      <div class=\"d-flex flex-column h-100\">\n        <div *ngIf=\"invalidCredentials\">\n          <p class=\"text-danger\"> Invalid credentials , please ensure username and password are correct. </p>\n        </div>\n\n        <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\" >\n            <mat-label>Username / Email</mat-label>\n            <input  matInput [(ngModel)]=\"credentials.email\" (ngModelChange)=\"invalidCredentials=false\" placeholder=\"{{'universals.email' | translate}}\"\n              type=\"text\" name=\"email\" #email=\"ngModel\"  required>\n          </mat-form-field>\n          <!-- <form-validation [name]=\"email\" [errorMessages]=\"{'pattern':'Please enter a valid email address'}\">\n          </form-validation> -->\n\n\n          <mat-form-field  appearance=\"outline\" [floatLabel]=\"'always'\">\n              <mat-label>Password</mat-label>\n              <input matInput [(ngModel)]=\"credentials.password\" (ngModelChange)=\"invalidCredentials=false\" placeholder=\"{{'universals.password' | translate}}\"\n                type=\"password\" name=\"password\" #password=\"ngModel\" required>\n            </mat-form-field>\n\n\n            <div class=\"d-flex justify-content-between\">\n                <a mat-button [routerLink]=\"['/application/public/forgot-password']\">{{ 'login.forgotPassword' | translate }}</a>\n            \n                <button color=\"primary\" type=\"submit\" class=\"\" [disabled]=\"loginForm.form.invalid\" mat-raised-button color=\"accent\">\n                    {{'login.title' | translate}}\n                  </button>\n            </div>\n\n\n<div class=\"flex-spacer\"></div>\n\n<div class=\"flex-column justify-content-center align-items-center mt-2\">\n    <p class=\"w-100\">Dont have an account?\n   <button mat-button [routerLink]=\"['/application/public/sign-up']\">{{ 'welcomeNav.signup' | translate }}</button>\n </p>\n </div>\n\n      </div>\n    </form>\n    <div class=\"row text-xs-center justify-content-center align-items-center my-2 mx-2\" *ngIf=\"isSubmitting\">\n      <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/modules/application/public/login/login-form/login-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/application/public/login/login-form/login-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 90px;\n  width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9wdWJsaWMvbG9naW4vbG9naW4tZm9ybS9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhcHBsaWNhdGlvblxccHVibGljXFxsb2dpblxcbG9naW4tZm9ybVxcbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwcGxpY2F0aW9uL3B1YmxpYy9sb2dpbi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sb2dvIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/application/public/login/login-form/login-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/application/public/login/login-form/login-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@core/services/user.service */ "./src/app/@core/services/user.service.ts");
/* harmony import */ var _public_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public.service */ "./src/app/modules/application/public/public.service.ts");





var Credentials = /** @class */ (function () {
    function Credentials(email, password) {
        this.email = null;
        this.password = null;
        this.email = email ? email : null;
        this.password = password ? password : null;
    }
    return Credentials;
}());
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, userService, publicService) {
        this.router = router;
        this.userService = userService;
        this.publicService = publicService;
        this.credentials = new Credentials();
        this.invalidCredentials = false;
        this.isSubmitting = false;
        console.log('login component constructor');
    }
    // Send login request to backend using login service
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        console.log(this.credentials);
        // Display spinner while isSubmitting = true
        this.isSubmitting = true;
        this.publicService.login(this.credentials)
            .subscribe(function (res) {
            // if (res) {
            // const response = res;
            // // store token if it is returned as a result of login
            // this.userService.setToken(JSON.stringify(response.data.token));
            // // store user data if returned as a result of login
            // this.userService.setUser(response.data.user);
            // }
            // Set token and user data in localStorage on success
            var encodedToken = btoa(_this.credentials.email + ':' + _this.credentials.password);
            _this.userService.setToken(encodedToken);
            // redirect to restricted
            _this.router.navigate(['application/restricted']);
        }, function (error) {
            console.log('error', error);
            // hide spinner when isSubmitting = false
            _this.isSubmitting = false;
            // display invalid credentials message
            _this.invalidCredentials = true;
        });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/modules/application/public/login/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/modules/application/public/login/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _public_service__WEBPACK_IMPORTED_MODULE_4__["PublicService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/public/login/login.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/application/public/login/login.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"text-center login-card d-flex flex-column\" color=\"primary\">\n    <mat-progress-bar mode=\"indeterminate\" color=\"accent\" *ngIf=\"loadingRoute\">\n      </mat-progress-bar>\n   \n<div class=\"brand m-3 p-3\">\n    <div class=\"logo\">ngStarter</div>\n</div>\n\n\n\n    <mat-card-content class=\"login-card-content\">\n  <router-outlet ></router-outlet>\n  \n    </mat-card-content>\n  </mat-card>\n  \n  <div class=\"d-flex justify-contents-center\" style=\"background-color:transparent;\">\n      <!-- <button mat-button (click)=\"goBack()\"><mat-icon>arrow_back</mat-icon> back</button> -->\n\n      <div class=\"d-flex align-items-center\">\n        <language-switcher></language-switcher>\n        <!-- <theme-switcher [selectedTheme]=\"appService.appTheme\" (onSelectTheme)=\"appService.setTheme($event)\"></theme-switcher> -->\n      </div>\n    </div>\n<!--   \n  <div style=\"color:grey;\" class=\"mt-4\">\n    <p class=\"p-0 m-0\">Username: postman</p>\n    <p class=\"p-0  m-0\">Password: password</p>\n  </div> -->"

/***/ }),

/***/ "./src/app/modules/application/public/login/login.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/application/public/login/login.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  margin: 67px 0 5px 0;\n  min-height: 77%;\n  width: 390px;\n  padding: 0px;\n  overflow: hidden; }\n\n.login-card-content {\n  padding: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9wdWJsaWMvbG9naW4vQzpcXFVzZXJzXFxzb21hclxcT25lRHJpdmVcXERlc2t0b3BcXHRlbXAgY2xlYW51cFxcQXBweFxcQW5ndWxhclN0YXJ0ZXJcXG5nU3RhcnRlci9zcmNcXGFwcFxcbW9kdWxlc1xcYXBwbGljYXRpb25cXHB1YmxpY1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vcHVibGljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNhcmQge1xyXG4gICAgbWFyZ2luOiA2N3B4IDAgNXB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiA3NyU7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIzcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDc3dmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/application/public/login/login.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/application/public/login/login.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public.service */ "./src/app/modules/application/public/public.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, publicService) {
        var _this = this;
        this.router = router;
        this.publicService = publicService;
        // show/hide  progress bar on route change
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.loadingRoute = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.loadingRoute = false;
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/application/public/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/application/public/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _public_service__WEBPACK_IMPORTED_MODULE_3__["PublicService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/public/public-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/application/public/public-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RoutingComponents, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_application_components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-application/components/contact-us/contact-us.component */ "./src/app/modules/application/shared-application/components/contact-us/contact-us.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/application/public/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/modules/application/public/signup/signup.component.ts");
/* harmony import */ var _forgot_password_form_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password-form/forgot-password-form.component */ "./src/app/modules/application/public/forgot-password-form/forgot-password-form.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/modules/application/public/reset-password/reset-password.component.ts");
/* harmony import */ var _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login-form/login-form.component */ "./src/app/modules/application/public/login/login-form/login-form.component.ts");
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public.component */ "./src/app/modules/application/public/public.component.ts");

// Routing components







var RoutingComponents = [
    _public_component__WEBPACK_IMPORTED_MODULE_7__["PublicComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
    _forgot_password_form_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordFormComponent"],
    _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"],
    _shared_application_components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__["ContactUsComponent"]
];
var routes = [
    {
        path: '', component: _public_component__WEBPACK_IMPORTED_MODULE_7__["PublicComponent"],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'prefix' },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], children: [
                    { path: '', component: _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"] },
                    // {path:'forgot-password'}
                    { path: 'forgot-password', component: _forgot_password_form_forgot_password_form_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordFormComponent"] },
                ] },
            { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
            { path: 'password/reset/:token', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"] },
            { path: 'contact-us', component: _shared_application_components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__["ContactUsComponent"] }
        ]
    }
];
var router = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/application/public/public.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/application/public/public.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid h-100 \">\n  <div class=\"row h-100 justify-content-center \">\n\n\n    <!-- <div color=\"primary\" class=\"col-10 col-md-6 col-lg-4\">\n    </div> -->\n    <router-outlet ></router-outlet>\n\n        <!-- <mat-toolbar style=\"background-color:transparent;\">\n      <button mat-button (click)=\"goBack()\"><mat-icon>arrow_back</mat-icon> back</button>\n\n      <div class=\"ml-auto d-flex align-items-center\">\n        <language-switcher></language-switcher>\n        <theme-switcher [selectedTheme]=\"appService.appTheme\" (onSelectTheme)=\"appService.setTheme($event)\"></theme-switcher>\n      </div>\n    </mat-toolbar> -->\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/modules/application/public/public.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/application/public/public.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vcHVibGljL3B1YmxpYy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/application/public/public.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/application/public/public.component.ts ***!
  \****************************************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/services/app.service */ "./src/app/@core/services/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var PublicComponent = /** @class */ (function () {
    function PublicComponent(translate, appService, location) {
        this.translate = translate;
        this.appService = appService;
        this.location = location;
        this.language = 'en';
        translate.use(this.language);
    }
    PublicComponent.prototype.goBack = function () {
        this.location.back();
    };
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'public',
            template: __webpack_require__(/*! ./public.component.html */ "./src/app/modules/application/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.scss */ "./src/app/modules/application/public/public.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _core_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/public/public.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/application/public/public.module.ts ***!
  \*************************************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_application_shared_application_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-application/shared-application.module */ "./src/app/modules/application/shared-application/shared-application.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public-routing.module */ "./src/app/modules/application/public/public-routing.module.ts");
/* harmony import */ var _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login-form/login-form.component */ "./src/app/modules/application/public/login/login-form/login-form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/application/public/login/login.component.ts");







// Services
// import { LoginService } from './login/login.service';
// import { SignupService } from './signup/signup.service';
// import { ForgotPasswordService } from './forgot-password-form/forgot-password.service';
// import { ResetPasswordService } from './reset-password/reset-password.service';


var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _public_routing_module__WEBPACK_IMPORTED_MODULE_6__["router"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_application_shared_application_module__WEBPACK_IMPORTED_MODULE_4__["SharedApplicationModule"],
                // HttpModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            declarations: [
                _public_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingComponents"],
                _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            ],
            providers: [
            // LoginService,
            // SignupService,
            // ResetPasswordService,
            // ForgotPasswordService,
            ],
            exports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "./src/app/modules/application/public/reset-password/reset-password.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/application/public/reset-password/reset-password.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo mb-5\">ngStarter</div>\n\n\n<mat-card class=\"text-center p-5\">\n  <mat-card-content>\n    <form #resetPassForm=\"ngForm\" (ngSubmit)=\"updatePassword()\" [hidden]=\"isSubmitting\" [formGroup]=\"form\">\n      <div class=\"container\">\n\n        <!-- <div class=\"row justify-content-center align-items-center\">\n          <div class=\"col-12\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"user.email\" placeholder=\"Email Address\" type=\"email\" name=\"email\" #email=\"ngModel\"\n                [pattern]=\"validationSer.patterns.email\" required>\n            </mat-form-field>\n            <form-validation [name]=\"email\" [errorMessages]=\"{'email':'Email should be a valid mail'}\">\n            </form-validation>\n          </div>\n        </div> -->\n\n        <!-- <div class=\"row justify-content-center align-items-center\">\n          <div class=\"col-12\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"user.password\" placeholder=\"New Password\" type=\"password\" name=\"password\"\n                #password=\"ngModel\" [pattern]=\"validationSer.patterns.password\" required>\n            </mat-form-field>\n            <form-validation [name]=\"password\" [errorMessages]=\"{'pattern':'Password must contain at least one uppercase character, one lowercase character and one number'}\">\n            </form-validation>\n          </div>\n        </div>\n\n        <div class=\"row justify-content-center align-items-center\">\n          <div class=\"col-12\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"user.password_confirmation\" placeholder=\"Repeat Password\" type=\"password\"\n                name=\"repeatPassword\" #repeatPassword=\"ngModel\" required>\n            </mat-form-field>\n            <form-validation [name]=\"repeatPassword\" [errorMessages]=\"{'pattern':'PASSWORD_MATCH'}\">\n            </form-validation>\n          </div>\n        </div> -->\n\n\n\n        <div class=\"row justify-content-center align-items-center\">\n          <div class=\"col-12\">\n            <mat-form-field>\n              <!-- <input matInput [(ngModel)]=\"user.email\" placeholder=\"Email Address\" type=\"email\" name=\"email\" #email=\"ngModel\"\n                [pattern]=\"validationSer.patterns.email\" required> -->\n              <input matInput placeholder=\"Email Address\" formControlName=\"email\" />\n\n            </mat-form-field>\n            <!-- <form-validation [name]=\"email\" [errorMessages]=\"{'email':'Email should be a valid mail'}\">\n            </form-validation> -->\n            <!-- <span class=\"text-danger\" *ngIf=\"errors.email\">\n              {{ errors.email }}\n            </span> -->\n\n            <!-- <mat-error *ngIf=\"form.controls.email.invalid && form.controls.email.errors.required\">\n              Email Field is required\n            </mat-error> -->\n            <mat-error *ngIf=\"form.controls.email.invalid && form.controls.email.errors.pattern\">\n              Enter a valid Email\n            </mat-error>\n\n          </div>\n        </div>\n\n\n        <div class=\"row justify-content-center align-items-center\">\n          <div class=\"col-12\">\n            <mat-form-field>\n              <input matInput placeholder=\"New Password\" type=\"password\" formControlName=\"password\" required />\n            </mat-form-field>\n            <br>\n            <span class=\"text-danger\" *ngIf=\"errors.password\">\n              {{ errors.password }}\n            </span>\n          </div>\n        </div>\n        <div class=\"row justify-content-center align-items-center\">\n          <div class=\"col-12\">\n            <mat-form-field>\n              <input matInput placeholder=\"Confirm New Password\" type=\"password\" formControlName=\"confirmPassword\"\n                required />\n            </mat-form-field>\n            <br>\n            <span class=\"text-danger\" *ngIf=\"errors.confirmPassword\">\n              {{ errors.confirmPassword }}\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row justify-content-center align-items-center mt-2\">\n          <div class=\"col-xs text-xs-center\">\n            <button type=\"submit\" [disabled]=\"resetPassForm.form.invalid\" mat-raised-button color=\"accent\">\n              Update Your Password\n            </button>\n          </div>\n        </div>\n\n        <div class=\"row justify-content-center align-items-center mt-3\">\n          <div class=\"col\">\n            <a mat-button [routerLink]=\"['application/public/login']\">Back to login</a>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class=\"row text-xs-center justify-content-center align-items-center my-2 mx-2\" *ngIf=\"isSubmitting\">\n      <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/application/public/reset-password/reset-password.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/application/public/reset-password/reset-password.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vcHVibGljL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/application/public/reset-password/reset-password.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/application/public/reset-password/reset-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/services/validation.service */ "./src/app/@core/services/validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public.service */ "./src/app/modules/application/public/public.service.ts");
/* harmony import */ var _core_form_validation_password_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@core/form-validation/password.validator */ "./src/app/@core/form-validation/password.validator.ts");







// import { errorMessages, errors } from './form-errors';

// import { ChangePasswordService } from './change-password.service';
var errors = {
    email: '',
    password: '',
    confirmPassword: ''
};
var errorMessages = {
    email: {
        required: 'Email Field is Required',
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
var User = /** @class */ (function () {
    function User() {
        this.email = null;
        this.password = null;
        this.password_confirmation = null;
    }
    return User;
}());
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(router, route, validationSer, snackbar, formBuilder, publicService
    // private changePasswordService: ChangePasswordService,
    ) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.validationSer = validationSer;
        this.snackbar = snackbar;
        this.formBuilder = formBuilder;
        this.publicService = publicService;
        this.user = new User();
        this.accessToken = null;
        this.isSubmitting = false;
        this.errors = errors;
        this.errorMessages = errorMessages;
        // Fetch the route params' token that is the unique one given through the password reset email link
        route.params
            .subscribe(function (params) {
            _this.accessToken = params;
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.form.valueChanges.subscribe(function (data) { return _this.validateForm(); });
    };
    // Change password function
    ResetPasswordComponent.prototype.updatePassword = function () {
        var _this = this;
        // const data = {
        //   email: this.form.get('old').value,
        //   password: this.form.get('password').value,
        //   password_confirmation: this.form.get('confirmPassword').value
        // };
        var user = {
            'email': this.form.get('email').value,
            'password': this.form.get('password').value,
            'password_confirmation': this.form.get('confirmPassword').value,
        };
        // console.log(user);
        // console.log('this.user', this.user);
        // console.log('this.accessToken', this.accessToken);
        this.isSubmitting = true;
        // Feed backend function call the user object from the form template (email, password and new password)
        // and the token from the email link for authentication
        this.publicService.changePassword(user, this.accessToken)
            .subscribe(function (res) {
            _this.isSubmitting = false;
            // Show snackbar dialog on success and redirect to login
            _this.snackbar.open('Password has been updated successfully', null, {
                duration: 5000
            });
            _this.router.navigate(['restricted/login']);
        }, function (error) {
            _this.isSubmitting = false;
        });
    };
    ResetPasswordComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            email: [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.validationSer.patterns.email)])],
            password: [this.user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)])],
            confirmPassword: [this.user.password_confirmation, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
        }, {
            validator: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _core_form_validation_password_validator__WEBPACK_IMPORTED_MODULE_7__["PasswordValidation"].confirmPassword,
                _core_form_validation_password_validator__WEBPACK_IMPORTED_MODULE_7__["PasswordValidation"].passwordPattern
            ])
        });
    };
    ResetPasswordComponent.prototype.validateForm = function () {
        for (var field in this.errors) {
            this.errors[field] = '';
            var input = this.form.get(field);
            if (input.invalid && input.dirty) {
                for (var error in input.errors) {
                    this.errors[field] = this.errorMessages[field][error];
                }
            }
            else {
                console.log(input);
            }
        }
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/modules/application/public/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/modules/application/public/reset-password/reset-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _public_service__WEBPACK_IMPORTED_MODULE_6__["PublicService"]
            // private changePasswordService: ChangePasswordService,
        ])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/public/signup/signup.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/application/public/signup/signup.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"text-center p-5 signup-card\">\n  <!-- <mat-icon class=\"px-5 mb-2\" [hidden]=\"isSubmitting || requestStatus\">\n    account_circle </mat-icon> -->\n\n       \n<div class=\"brand\">\n    <div class=\"logo\">ngStarter</div>\n</div>\n\n  <mat-card-content class=\"signup-card-content\">\n    <h2 mat-dialog-title [hidden]=\"user.id!=null\">{{'signup.add' | translate}}</h2>\n\n    <form #userForm=\"ngForm\" (ngSubmit)=\"signUp($event)\" [hidden]=\"isSubmitting || requestStatus\">\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\">\n          <mat-label>First Name</mat-label>\n          <input matInput name=\"firstName\" required>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\">\n          <mat-label>Last Name</mat-label>\n          <input matInput name=\"lastName\" required>\n        </mat-form-field>\n      </div>\n      <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\">\n        <mat-label>Email</mat-label>\n        <input matInput [(ngModel)]=\"user.email\" placeholder=\"{{'universals.email' | translate}}\" type=\"email\"\n          name=\"email\" #email=\"ngModel\" required [pattern]=\"validationService.patterns.email\">\n      </mat-form-field>\n      <form-validation [name]=\"email\" [errorMessages]=\"{'pattern':'Please enter a valid email address'}\">\n      </form-validation>\n \n      <h4 *ngIf=\"requestStatus == 'email already exists'\" class=\"text-danger\"> This email is already registered </h4>\n          \n\n      <div class=\"d-flex justify-content-center align-items-center\">\n\n        <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\">\n          <mat-label>Password</mat-label>\n\n          <input matInput [(ngModel)]=\"user.password\" placeholder=\"{{'universals.password' | translate}}\"\n            type=\"password\" name=\"password\" #password=\"ngModel\" [pattern]=\"validationService.patterns.password\" required>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"outline\" [floatLabel]=\"'always'\">\n          <mat-label>Confirm</mat-label>\n          <input matInput [(ngModel)]=\"user.password_confirmation\"\n            placeholder=\"{{'universals.passwordConfirm' | translate}}\" type=\"password\" name=\"password_confirmation\"\n            #password_confirmation=\"ngModel\" [pattern]=\"user.password\" required>\n        </mat-form-field>\n\n        <div class=\"d-flex flex-column\">\n          <form-validation [name]=\"password\"\n            [errorMessages]=\"{'pattern':'Password must contain at least one uppercase character, one lowercase character and one number'}\">\n          </form-validation>\n          <form-validation [name]=\"password_confirmation\"\n            [errorMessages]=\"{'pattern':'Please ensure passwords match '}\">\n          </form-validation>\n        </div>\n      </div>\n\n      <div class=\"d-flex justify-content-between align-items-center\">\n        <a mat-button [routerLink]=\"['application/public/login']\">{{'signup.back' | translate}}</a>\n        <button type=\"submit\" [disabled]=\"userForm.form.invalid\" mat-raised-button color=\"accent\">\n          {{'signup.create' | translate}}\n        </button>\n      </div>\n\n    </form>\n\n    <div class=\"row text-xs-center justify-content-center align-items-center my-5 mx-5\" *ngIf=\"isSubmitting\">\n      <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n\n\n    <div class=\"row text-xs-center justify-content-center align-items-center my-2 mx-2\"\n      *ngIf=\"requestStatus == 'success'\">\n      <div class=\"col-12\">\n        <mat-icon class=\"success\" style=\"font-size:48px\">thumb_up</mat-icon>\n        <h2 class=\"success\">Check your email for verification</h2>\n      </div>\n      <div class=\"col\">\n        <a mat-button [routerLink]=\"['application/public/login']\">Login</a>\n      </div>\n    </div>\n    <div *ngIf=\"requestStatus == 'invalid email'\" class=\"row py-2 justify-content-center align-items-center\">\n      <div class=\"col\">\n        <h4 class=\"text-danger\"> This email is already registered </h4>\n      </div>\n      <div class=\"row justify-content-center align-items-center mt-3\">\n        <div class=\"col\">\n          <a mat-button [routerLink]=\"['/public/forgot-password']\">Forgot your password?</a>\n        </div>\n      </div>\n    </div>\n\n\n  </mat-card-content>\n</mat-card>\n\n<div class=\"d-flex justify-contents-center\" style=\"background-color:transparent;\">\n    <!-- <button mat-button (click)=\"goBack()\"><mat-icon>arrow_back</mat-icon> back</button> -->\n\n    <div class=\"d-flex align-items-center\">\n      <language-switcher></language-switcher>\n      <!-- <theme-switcher [selectedTheme]=\"appService.appTheme\" (onSelectTheme)=\"appService.setTheme($event)\"></theme-switcher> -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/modules/application/public/signup/signup.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/application/public/signup/signup.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-card {\n  margin: 67px 0 5px 0;\n  min-height: 77%;\n  width: 500px;\n  padding: 0px;\n  overflow: hidden; }\n\n.signup-card-content {\n  padding: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9wdWJsaWMvc2lnbnVwL0M6XFxVc2Vyc1xcc29tYXJcXE9uZURyaXZlXFxEZXNrdG9wXFx0ZW1wIGNsZWFudXBcXEFwcHhcXEFuZ3VsYXJTdGFydGVyXFxuZ1N0YXJ0ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFwcGxpY2F0aW9uXFxwdWJsaWNcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vcHVibGljL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLWNhcmQge1xyXG4gICAgbWFyZ2luOiA2N3B4IDAgNXB4IDA7XHJcbiAgICBtaW4taGVpZ2h0OiA3NyU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2lnbnVwLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyM3B4O1xyXG4gICAgLy8gaGVpZ2h0OiA3N3ZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/application/public/signup/signup.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/application/public/signup/signup.component.ts ***!
  \***********************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@core/services/validation.service */ "./src/app/@core/services/validation.service.ts");
/* harmony import */ var _core_models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@core/models/user.model */ "./src/app/@core/models/user.model.ts");
/* harmony import */ var _public_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public.service */ "./src/app/modules/application/public/public.service.ts");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(
    // private signupService: SignupService,
    validationService, publicService) {
        this.validationService = validationService;
        this.publicService = publicService;
        this.requestStatus = null;
        this.isSubmitting = false;
        this.user = new _core_models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function (e) {
        var _this = this;
        this.isSubmitting = true;
        this.publicService.signUp(this.user)
            .subscribe(function (res) {
            _this.isSubmitting = false;
            _this.requestStatus = 'success';
        }, function (error) {
            _this.isSubmitting = false;
            _this.requestStatus = 'email already exists';
            var errors = error.json().errors;
            // log all returned error messages to console
            var errorsArray = [];
            for (var errorText in errors) {
                if (errors.hasOwnProperty(errorText)) {
                    errorsArray.push(errors[errorText]);
                }
            }
            errorsArray.map(function (err) {
                console.log(err);
            });
        }, function () {
            _this.isSubmitting = false;
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/modules/application/public/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/modules/application/public/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"],
            _public_service__WEBPACK_IMPORTED_MODULE_4__["PublicService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/shared-application/components/contact-us/contact-us.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/contact-us/contact-us.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin-top:100px\" class=\"text-center p-5\" color=\"primary\" [hidden]=\"isSubmitting || requestStatus\">\n  <i style=\"font-size:55px;\" class=\"px-5 mb-2 material-icons\" [hidden]=\"isSubmitting || requestStatus\"> email </i>\n  <h5>Contact Us</h5>\n  <mat-card-content>\n    <form #updateForm=\"ngForm\" (ngSubmit)=\"contactUs($event)\" [hidden]=\"isSubmitting\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center align-items-center\">\n          <div class=\"col-12\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"mail.userEmail\" (ngModelChange)=\"invalidCredentials=false\" placeholder=\"Email\"\n                type=\"text\" name=\"userEmail\" #userEmail=\"ngModel\" [pattern]=\"validationSer.patterns.email\" required>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row justify-content-center align-items-center\">\n          <div class=\"col-12\">\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"mail.subject\" (ngModelChange)=\"invalidCredentials=false\" placeholder=\"Subject\"\n                type=\"text\" name=\"subject\" #subject=\"ngModel\" required>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row justify-content-center align-items-center\">\n          <div class=\"col-12\">\n            <mat-form-field>\n              <textarea matInput [(ngModel)]=\"mail.body\" placeholder=\"Message\" type=\"text\" name=\"body\" #body=\"ngModel\"\n                required></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row justify-content-center align-items-center mt-2\">\n          <div class=\"col-xs text-xs-center\">\n            <button type=\"submit\" [disabled]=\"updateForm.form.invalid\" mat-raised-button color=\"accent\">\n              Send\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class=\"row text-xs-center justify-content-center align-items-center my-2 mx-2\" *ngIf=\"isSubmitting\">\n      <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </div>\n    <mat-card-actions>\n      <div class=\"row justify-content-center align-items-center mt-2\">\n        <div class=\"col-xs text-xs-center\">\n          <button type=\"submit\" mat-raised-button color=\"accent\" (click)=\"goBack()\">\n            Back\n          </button>\n        </div>\n      </div>\n    </mat-card-actions>\n  </mat-card-content>\n</mat-card>\n<!-- Logically display based on success of async call -->\n<mat-card>\n  <div class=\"row text-xs-center justify-content-center align-items-center my-2 mx-2\" *ngIf=\"requestStatus == 'success'\">\n    <div class=\"col-12 text-center\">\n      <mat-icon class=\"success\" style=\"font-size:48px\">thumb_up</mat-icon>\n      <h2 class=\"success\">Mail successfully sent! Someone will be in contact with you shortly.</h2>\n    </div>\n    <div class=\"col-12 text-center\">\n      <a mat-button [routerLink]=\"['/']\">Back</a>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/application/shared-application/components/contact-us/contact-us.component.sass":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/contact-us/contact-us.component.sass ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vc2hhcmVkLWFwcGxpY2F0aW9uL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/application/shared-application/components/contact-us/contact-us.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/contact-us/contact-us.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../@core/services/validation.service */ "./src/app/@core/services/validation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(validationSer, location) {
        this.validationSer = validationSer;
        this.location = location;
        this.mail = {
            userEmail: '',
            subject: '',
            body: ''
        };
        this.isSubmitting = false;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    /**
     * Simple navigator to return to whichever page the user was on last
     */
    ContactUsComponent.prototype.goBack = function () {
        this.location.back();
    };
    /**
     * Insert API call (POST) request here, set isSubmitting to true while waiting for async call to return
     * Set requestStatus to 'success' upon 200 request status returned
     */
    ContactUsComponent.prototype.contactUs = function () {
        var _this = this;
        console.log(this.mail);
        setTimeout(function () {
            _this.isSubmitting = true;
        }, 2000);
        this.requestStatus = 'success';
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/modules/application/shared-application/components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.sass */ "./src/app/modules/application/shared-application/components/contact-us/contact-us.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=public-public-module.js.map