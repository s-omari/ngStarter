(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-application-application-module~public-public-module~restricted-restricted-module"],{

/***/ "./src/app/modules/application/shared-application/components/form-validation/form-validation.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/form-validation/form-validation.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- If errors are found, and form has been either touched or received input... -->\n<div *ngIf=\"name.errors && (name.dirty || name.touched)\">\n  <!-- Required input error -->\n  <mat-error [hidden]=\"!name.errors.required\">\n    <span class=\"validation-message\" translate>{{errorMessages.required ? errorMessages.required: 'Required field' }} </span>\n  </mat-error>\n  <!-- Input did not match pattern from validation service -->\n  <mat-error [hidden]=\"!name.errors.pattern\">\n    <span class=\"validation-message\" translate>{{errorMessages.pattern ? errorMessages.pattern: 'Invalid value' }} </span>\n  </mat-error>\n  <!-- Not long enough -->\n  <mat-error [hidden]=\"!name.errors.minlength\">\n    <span class=\"validation-message\" translate>{{errorMessages.minlength ? errorMessages.minlength: 'Value is too short' }} </span>\n  </mat-error>\n  <!-- Too long -->\n  <mat-error [hidden]=\"!name.errors.maxlength\">\n    <span class=\"validation-message\" translate>{{errorMessages.maxlength ? errorMessages.maxlength: 'Value is too long' }} </span>\n  </mat-error>\n</div>"

/***/ }),

/***/ "./src/app/modules/application/shared-application/components/form-validation/form-validation.component.sass":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/form-validation/form-validation.component.sass ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vc2hhcmVkLWFwcGxpY2F0aW9uL2NvbXBvbmVudHMvZm9ybS12YWxpZGF0aW9uL2Zvcm0tdmFsaWRhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/application/shared-application/components/form-validation/form-validation.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/form-validation/form-validation.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: FormValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationComponent", function() { return FormValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormValidationComponent = /** @class */ (function () {
    function FormValidationComponent() {
    }
    FormValidationComponent.prototype.ngOnInit = function () {
        if (!this.errorMessages) {
            this.errorMessages = {};
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormValidationComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormValidationComponent.prototype, "errorMessages", void 0);
    FormValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'form-validation',
            template: __webpack_require__(/*! ./form-validation.component.html */ "./src/app/modules/application/shared-application/components/form-validation/form-validation.component.html"),
            styles: [__webpack_require__(/*! ./form-validation.component.sass */ "./src/app/modules/application/shared-application/components/form-validation/form-validation.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormValidationComponent);
    return FormValidationComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/shared-application/components/language-switcher/language-switcher.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/language-switcher/language-switcher.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"\" mat-button [matMenuTriggerFor]=\"languageSwitcher\">\n  {{selectedLanguage?.name}}\n  <mat-icon class=\"md-light\">keyboard_arrow_down</mat-icon>\n\n</button>\n<mat-menu #languageSwitcher=\"matMenu\">\n\n  <button *ngFor=\"let lang of appLanguages\" mat-menu-item (click)=\"switchLanguage(lang?.code)\">\n    <img class=\"flag\" src=\"/assets/images/{{lang?.countryCode}}.svg\">\n    <span translate> {{lang?.name}}</span>\n  </button>\n\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/modules/application/shared-application/components/language-switcher/language-switcher.component.sass":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/language-switcher/language-switcher.component.sass ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flag {\n  height: 18px;\n  padding-bottom: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vY29tcG9uZW50cy9sYW5ndWFnZS1zd2l0Y2hlci9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhcHBsaWNhdGlvblxcc2hhcmVkLWFwcGxpY2F0aW9uXFxjb21wb25lbnRzXFxsYW5ndWFnZS1zd2l0Y2hlclxcbGFuZ3VhZ2Utc3dpdGNoZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FwcGxpY2F0aW9uL3NoYXJlZC1hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xhbmd1YWdlLXN3aXRjaGVyL2xhbmd1YWdlLXN3aXRjaGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsYWcge1xuICAgIGhlaWdodDogMThweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/application/shared-application/components/language-switcher/language-switcher.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/language-switcher/language-switcher.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: LanguageSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitcherComponent", function() { return LanguageSwitcherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var LanguageSwitcherComponent = /** @class */ (function () {
    function LanguageSwitcherComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.appLanguages = [
            { 'name': 'English', 'code': 'en', 'countryCode': 'ca' },
            { 'name': 'French', 'code': 'fr', 'countryCode': 'fr' },
            { 'name': 'German', 'code': 'de', 'countryCode': 'de' },
            { 'name': 'Spanish', 'code': 'es', 'countryCode': 'es' },
        ];
        this.selectedLangCode = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
        this.selectedLanguage = this.appLanguages.filter(function (lang) { return lang.code === _this.selectedLangCode; })[0];
        translate.addLangs(['en', 'fr', 'de , es']);
        translate.setDefaultLang(this.selectedLangCode);
        // const browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        // this.selectedLanguage = browserLang;
    }
    LanguageSwitcherComponent.prototype.ngOnInit = function () {
    };
    LanguageSwitcherComponent.prototype.switchLanguage = function (language) {
        this.selectedLangCode = language;
        this.selectedLanguage = this.appLanguages.filter(function (lang) { return lang.code === language; })[0];
        this.translate.use(language);
        localStorage.setItem('language', language);
    };
    LanguageSwitcherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'language-switcher',
            template: __webpack_require__(/*! ./language-switcher.component.html */ "./src/app/modules/application/shared-application/components/language-switcher/language-switcher.component.html"),
            styles: [__webpack_require__(/*! ./language-switcher.component.sass */ "./src/app/modules/application/shared-application/components/language-switcher/language-switcher.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LanguageSwitcherComponent);
    return LanguageSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/shared-application/components/theme-switcher/theme-switcher.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/theme-switcher/theme-switcher.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"px-0 mx-2\" mat-icon-button [matMenuTriggerFor]=\"colorSwitcher\">\n  <mat-icon class=\"md-light\">palette</mat-icon>\n</button>\n<mat-menu #colorSwitcher=\"matMenu\">\n  <button class=\"vc\" *ngIf=\"selectedTheme != 'red-dark-theme'\" mat-menu-item (click)=\"selectTheme('red-dark-theme')\">\n    <div class=\"color-box\" style=\"background-color:red;\"></div>\n    <div class=\"color-box mr-2\" style=\"background-color:black;\"></div>\n    Dark Red\n  </button>\n  <button class=\"vc\" *ngIf=\"selectedTheme!='red-theme'\" mat-menu-item (click)=\"selectTheme('red-theme')\">\n    <div class=\"color-box\" style=\"background-color:red;\"></div>\n    <div class=\"color-box mr-2\" style=\"background-color:#fafafa;\"></div>\n    Light Red\n  </button>\n  <button class=\"vc\" *ngIf=\"selectedTheme != 'purple-theme'\" mat-menu-item (click)=\"selectTheme('purple-theme')\">\n    <div class=\"color-box\" style=\"background-color:purple;\"></div>\n    <div class=\"color-box mr-2\" style=\"background-color:#fafafa;\"></div>\n    Light Purple\n  </button>\n\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/modules/application/shared-application/components/theme-switcher/theme-switcher.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/theme-switcher/theme-switcher.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-box {\n  display: inline-flex;\n  vertical-align: middle;\n  width: 30px;\n  height: 30px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vY29tcG9uZW50cy90aGVtZS1zd2l0Y2hlci9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhcHBsaWNhdGlvblxcc2hhcmVkLWFwcGxpY2F0aW9uXFxjb21wb25lbnRzXFx0aGVtZS1zd2l0Y2hlclxcdGhlbWUtc3dpdGNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9zaGFyZWQtYXBwbGljYXRpb24vY29tcG9uZW50cy90aGVtZS1zd2l0Y2hlci90aGVtZS1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1ib3gge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/modules/application/shared-application/components/theme-switcher/theme-switcher.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/components/theme-switcher/theme-switcher.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ThemeSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwitcherComponent", function() { return ThemeSwitcherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThemeSwitcherComponent = /** @class */ (function () {
    function ThemeSwitcherComponent() {
        this.onSelectTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ThemeSwitcherComponent.prototype.ngOnInit = function () {
    };
    ThemeSwitcherComponent.prototype.selectTheme = function (theme) {
        console.log(theme);
        this.onSelectTheme.emit(theme);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThemeSwitcherComponent.prototype, "selectedTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThemeSwitcherComponent.prototype, "onSelectTheme", void 0);
    ThemeSwitcherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'theme-switcher',
            template: __webpack_require__(/*! ./theme-switcher.component.html */ "./src/app/modules/application/shared-application/components/theme-switcher/theme-switcher.component.html"),
            styles: [__webpack_require__(/*! ./theme-switcher.component.scss */ "./src/app/modules/application/shared-application/components/theme-switcher/theme-switcher.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThemeSwitcherComponent);
    return ThemeSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/modules/application/shared-application/shared-application.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/application/shared-application/shared-application.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SharedApplicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedApplicationModule", function() { return SharedApplicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _components_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/language-switcher/language-switcher.component */ "./src/app/modules/application/shared-application/components/language-switcher/language-switcher.component.ts");
/* harmony import */ var _components_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form-validation/form-validation.component */ "./src/app/modules/application/shared-application/components/form-validation/form-validation.component.ts");
/* harmony import */ var _components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/theme-switcher/theme-switcher.component */ "./src/app/modules/application/shared-application/components/theme-switcher/theme-switcher.component.ts");




// shared components



var SharedApplicationModule = /** @class */ (function () {
    function SharedApplicationModule() {
    }
    SharedApplicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_5__["FormValidationComponent"],
                _components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_6__["ThemeSwitcherComponent"],
                _components_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitcherComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"]
            ],
            exports: [
                _components_form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_5__["FormValidationComponent"],
                _components_theme_switcher_theme_switcher_component__WEBPACK_IMPORTED_MODULE_6__["ThemeSwitcherComponent"],
                _components_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_4__["LanguageSwitcherComponent"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"]
            ]
        })
    ], SharedApplicationModule);
    return SharedApplicationModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~modules-application-application-module~public-public-module~restricted-restricted-module.js.map