(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-app-layout-app-layout-module"],{

/***/ "./src/app/modules/app-layout/app-layout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/app-layout/app-layout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container class=\"h-100\">\n\n  <mat-sidenav class=\"h-100\" #drawer \n  [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\" class=\"sidenav\" [attr.role]=\"'navigation'\" [mode]=\"'side'\" [opened]=\"true\">\n\n    <mat-toolbar color=\"primary\">\n        <button mat-button routerLink=\"\" class=\"\">\n          App Layout\n        </button>\n        <span class=\"spacer\"></span>\n      </mat-toolbar>\n\n\n\n  </mat-sidenav>\n\n\n  <mat-sidenav-content class=\"d-flex flex-column\">\n    \n      <div id=\"page-content\">\n          <mat-toolbar color=\"primary\">\n              <!-- <button mat-button routerLink=\"\" class=\"\">\n                Nested Master Detail\n              </button> -->\n              <span class=\"spacer\"></span>\n            </mat-toolbar>\n        <div *ngIf=\"isHandset$ | async\" class=\"toggleRight\">\n          <button class=\"float-right\" type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-bars\"></mat-icon>\n          </button>\n        </div>\n    <router-outlet></router-outlet>\n\n      </div>\n\n      <footer id=\"sticky-footer\" class=\"py-4 bg-dark text-white-50\">\n          <div class=\"container text-center\">\n            <small>Copyright &copy; ngStarter</small>\n          </div>\n        </footer>\n        \n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/modules/app-layout/app-layout.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/app-layout/app-layout.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-content {\n  flex: 1 0 auto; }\n\n#sticky-footer {\n  flex-shrink: none; }\n\n.toggleRight {\n  background-color: #f5f5f5;\n  height: 20px; }\n\n.toggleRight button {\n    margin-bottom: -21px; }\n\n.active {\n  background: #e6e6e6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hcHAtbGF5b3V0L0M6XFxVc2Vyc1xcc29tYXJcXE9uZURyaXZlXFxEZXNrdG9wXFx0ZW1wIGNsZWFudXBcXEFwcHhcXEFuZ3VsYXJTdGFydGVyXFxuZ1N0YXJ0ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFwcC1sYXlvdXRcXGFwcC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFGZDtJQUtJLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hcHAtbGF5b3V0L2FwcC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNwYWdlLWNvbnRlbnQge1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gICNzdGlja3ktZm9vdGVyIHtcclxuICAgIGZsZXgtc2hyaW5rOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudG9nZ2xlUmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0yMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuXHJcbiAgXHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/app-layout/app-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/app-layout/app-layout.component.ts ***!
  \************************************************************/
/*! exports provided: AppLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutComponent", function() { return AppLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppLayoutComponent = /** @class */ (function () {
    function AppLayoutComponent() {
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
    };
    AppLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-layout',
            template: __webpack_require__(/*! ./app-layout.component.html */ "./src/app/modules/app-layout/app-layout.component.html"),
            styles: [__webpack_require__(/*! ./app-layout.component.scss */ "./src/app/modules/app-layout/app-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppLayoutComponent);
    return AppLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/app-layout/app-layout.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/app-layout/app-layout.module.ts ***!
  \*********************************************************/
/*! exports provided: AppLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLayoutModule", function() { return AppLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_layout_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-layout.router */ "./src/app/modules/app-layout/app-layout.router.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");





var AppLayoutModule = /** @class */ (function () {
    function AppLayoutModule() {
    }
    AppLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_layout_router__WEBPACK_IMPORTED_MODULE_3__["RoutingComponents"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_layout_router__WEBPACK_IMPORTED_MODULE_3__["router"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"]
            ]
        })
    ], AppLayoutModule);
    return AppLayoutModule;
}());



/***/ }),

/***/ "./src/app/modules/app-layout/app-layout.router.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/app-layout/app-layout.router.ts ***!
  \*********************************************************/
/*! exports provided: RoutingComponents, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-layout.component */ "./src/app/modules/app-layout/app-layout.component.ts");


// routing components
var RoutingComponents = [
    _app_layout_component__WEBPACK_IMPORTED_MODULE_1__["AppLayoutComponent"],
];
var routes = [
    {
        path: '', component: _app_layout_component__WEBPACK_IMPORTED_MODULE_1__["AppLayoutComponent"],
    },
];
var router = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=modules-app-layout-app-layout-module.js.map