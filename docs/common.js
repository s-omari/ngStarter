(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/@core/form-validation/password.validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/@core/form-validation/password.validator.ts ***!
  \*************************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    /**
     * Compare password against password confirmation.
     */
    PasswordValidation.confirmPassword = function (AC) {
        if (AC.get('password').value !== AC.get('confirmPassword').value) {
            AC.get('confirmPassword').setErrors({ confirmPassword: true });
            return false;
        }
        return true;
    };
    /**
     * Make sure password matches a specific pattern.
     */
    PasswordValidation.passwordPattern = function (AC) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
        if (!pattern.test(AC.get('password').value)) {
            AC.get('password').setErrors({ passwordPattern: true });
            return false;
        }
        return true;
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/@core/models/user.model.ts":
/*!********************************************!*\
  !*** ./src/app/@core/models/user.model.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.first_name = null;
        this.last_name = null;
        this.email = null;
        this.phone_number = null;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/@core/services/app.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/services/app.service.ts ***!
  \***********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppService = /** @class */ (function () {
    function AppService() {
        if (localStorage.getItem('appTheme')) {
            this.appTheme = (localStorage.getItem('appTheme'));
        }
        else {
            this.appTheme = 'purple-theme';
        }
    }
    AppService.prototype.setTheme = function (theme) {
        this.appTheme = theme;
        localStorage.setItem('appTheme', theme);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/@core/services/validation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/@core/services/validation.service.ts ***!
  \******************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    // Regular expressions to match against user input for specific fields
    // Testable at https://regex101.com/
    function ValidationService() {
        this.patterns = {
            // Make sure email is broken into two strings by '@' symbol, and is ended by a valid top level domain
            // tslint:disable-next-line:max-line-length
            email: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|ca|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
            // Make sure password contains at least one lowercase character, one uppercase character and one numerical or special character
            password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
            // Check phone number is equal to this format: (***)***-****
            phone_number: /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/
        };
    }
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/modules/anappro/shared-anappro/services/projects.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/anappro/shared-anappro/services/projects.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mock-data */ "./src/app/modules/anappro/mock-data.ts");



var ProjectsService = /** @class */ (function () {
    function ProjectsService() {
    }
    ProjectsService.prototype.getAllProjects = function () {
        return _mock_data__WEBPACK_IMPORTED_MODULE_2__["projects"];
    };
    ProjectsService.prototype.getProjectById = function (id) {
        return _mock_data__WEBPACK_IMPORTED_MODULE_2__["projects"].data.filter(function (item) { return item.id === id; })[0];
    };
    ProjectsService.prototype.getProjectApplications = function (projectId) {
        var projectChildren = _mock_data__WEBPACK_IMPORTED_MODULE_2__["projects"].data.filter(function (item) { return item.id === projectId; })[0].children;
        var projectApplications = [];
        if (projectChildren) {
            projectApplications = projectChildren.filter(function (item) { return item.nodeType === 'application'; });
        }
        console.log(projectApplications, 'projectApplications');
        return projectApplications;
    };
    ProjectsService.prototype.getProjectApplication = function (projectId, applicationId) {
        var projectChildren = _mock_data__WEBPACK_IMPORTED_MODULE_2__["projects"].data.filter(function (item) { return item.id === projectId; })[0].children;
        var projectApplications = [];
        if (projectChildren) {
            projectApplications = projectChildren.filter(function (item) { return item.nodeType === 'application'; });
        }
        var selectedApplication = projectApplications.filter(function (item) { return item.applicationId === Number(applicationId); })[0];
        console.log(selectedApplication, 'selectedApplication');
        return selectedApplication;
    };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/modules/application/public/public.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/application/public/public.service.ts ***!
  \**************************************************************/
/*! exports provided: PublicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicService", function() { return PublicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/services/user.service */ "./src/app/@core/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PublicService = /** @class */ (function () {
    function PublicService(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    PublicService.prototype.login = function (credentials) {
        var loginUrl = 'https://postman-echo.com/basic-auth';
        console.log(loginUrl);
        // const headers = new Headers();
        console.log(this.userService.getToken());
        var encodedToken = btoa(credentials.email + ':' + credentials.password);
        // headers.append('Authorization', `Basic ${encodedToken}`);
        var headerDict = {
            Authorization: 'Basic ' + encodedToken,
        };
        var requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](headerDict),
        };
        // return this.http.post(
        //   `${this.userService.baseUrl}/login`,
        //   credentials
        // );
        return this.http.get(loginUrl, requestOptions);
    };
    PublicService.prototype.signUp = function (user) {
        return this.http.post(this.userService.baseUrl + "signup", user);
    };
    // Change password http request - requires a slightly different headers object
    PublicService.prototype.changePassword = function (body, accessToken) {
        var headers = new Headers();
        body.token = accessToken['token'];
        // console.log('body', body);
        return this.http.post(this.userService.baseUrl + "/reset-password", body);
    };
    PublicService.prototype.resetPassword = function (email) {
        return this.http.post(this.userService.baseUrl + "/forgot-password", email);
    };
    PublicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PublicService);
    return PublicService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map