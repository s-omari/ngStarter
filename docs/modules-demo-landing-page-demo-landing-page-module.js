(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-demo-landing-page-demo-landing-page-module"],{

/***/ "./src/app/modules/demo-landing-page/demo-landing-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/demo-landing-page/demo-landing-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column\">\n  <div id=\"page-content\">\n    <!-- <div class=\"container text-center\">\n   \n    </div> -->\n\n    <div class=\"row justify-content-center text-center landing-page-heading\">\n      <div class=\"col-md-7\">\n        <h1 class=\"font-weight-light mt-4 text-white\">ngStarter</h1>\n        <p class=\"lead text-white-50\">The Modular and Scallable Angular Starter Application</p>\n      </div>\n    </div>\n\n    <div class=\"row justify-content-around  flex-wrap mat-typography m-4\">\n      <mat-card *ngFor=\"let module of demoModules\" class=\"d-flex flex-column justify-content-around demo-card mat-card-flat hide-on-init\"\n        animateOnScroll animationName=\"animated fadeInUp\">\n        <mat-card-title>{{module.title}}</mat-card-title>\n        <mat-card-content class=\"text-black-50 m-0\" *ngIf=\"module.description\">{{module.description}}</mat-card-content>\n\n        <div class=\"spacer\"></div>\n        <mat-card-actions class=\"d-flex justify-content-center\">\n          <ng-container *ngIf=\"module.hasDemo\">\n              <button mat-flat-button class=\"w-100\" [routerLink]=[module.route] mat-button>Demo</button>\n              <!-- <button mat-button>Documentation</button> -->\n          </ng-container>\n\n          <ng-container *ngIf=\"!module.hasDemo\">\n              \n              <p>Comming Soon!</p>\n          </ng-container>\n          \n        </mat-card-actions>\n      </mat-card>\n    </div>\n\n    <div class=\"row justify-content-around  flex-wrap mat-typography m-4\">\n        <mat-card *ngFor=\"let module of appModules\" \n        class=\"d-flex flex-column justify-content-around demo-card app-card mat-card-flat hide-on-init\"\n          animateOnScroll animationName=\"animated fadeInUp\">\n          <mat-card-title>{{module.title}}</mat-card-title>\n          <mat-card-content class=\"text-black-50 m-0\" *ngIf=\"module.description\">{{module.description}}</mat-card-content>\n  \n          <div class=\"spacer\"></div>\n          <mat-card-actions class=\"d-flex justify-content-center\">\n            <ng-container *ngIf=\"module.hasDemo\">\n                <button mat-flat-button color=\"primary\" [routerLink]=[module.route] mat-button>Demo</button>\n                <!-- <button mat-button>Documentation</button> -->\n            </ng-container>\n  \n            <ng-container *ngIf=\"!module.hasDemo\">\n                \n                <p>Comming Soon!</p>\n            </ng-container>\n            \n          </mat-card-actions>\n        </mat-card>\n      </div>\n\n\n\n\n\n  </div>\n  <footer id=\"sticky-footer\" class=\"py-4 bg-dark text-white-50\">\n    <div class=\"container text-center\">\n      <small>Copyright &copy; ngStarter</small>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/demo-landing-page/demo-landing-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/demo-landing-page/demo-landing-page.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sticky Footer Classes */\nhtml,\nbody {\n  height: 100%; }\n#page-content {\n  flex: 1 0 auto; }\n#sticky-footer {\n  flex-shrink: none; }\n/* Other Classes for Page Styling */\n.landing-page-heading {\n  background: #007bff;\n  background: linear-gradient(to right, #0062E6, #33AEFF); }\n.demo-card {\n  background-color: #e9f4ff;\n  width: 250px;\n  height: 160px;\n  margin-top: 40px;\n  text-align: center; }\n.demo-card .mat-card-title {\n    line-height: 30px;\n    font-size: 17px; }\n.demo-card .mat-card-actions {\n    display: flex; }\n.demo-card.app-card {\n    background-color: #ffe9e9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kZW1vLWxhbmRpbmctcGFnZS9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxtb2R1bGVzXFxkZW1vLWxhbmRpbmctcGFnZVxcZGVtby1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQUE7QUFFQTs7RUFFRSxZQUFZLEVBQUE7QUFHZDtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGlCQUFpQixFQUFBO0FBR25CLG1DQUFBO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdURBQXVELEVBQUE7QUFPdkQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFFYixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7QUFOcEI7SUFTSSxpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0FBVm5CO0lBZUksYUFBYSxFQUFBO0FBZmpCO0lBbUJFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kZW1vLWxhbmRpbmctcGFnZS9kZW1vLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0aWNreSBGb290ZXIgQ2xhc3NlcyAqL1xyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jcGFnZS1jb250ZW50IHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG5cclxuI3N0aWNreS1mb290ZXIge1xyXG4gIGZsZXgtc2hyaW5rOiBub25lO1xyXG59XHJcblxyXG4vKiBPdGhlciBDbGFzc2VzIGZvciBQYWdlIFN0eWxpbmcgKi9cclxuXHJcbi5sYW5kaW5nLXBhZ2UtaGVhZGluZyB7XHJcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDYyRTYsICMzM0FFRkYpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAuZGVtby1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY0ZmY7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gIFxyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAmLmFwcC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU5ZTk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/demo-landing-page/demo-landing-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/demo-landing-page/demo-landing-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: DemoLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoLandingPageComponent", function() { return DemoLandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DemoLandingPageComponent = /** @class */ (function () {
    function DemoLandingPageComponent() {
        this.demoModules = [
            {
                title: 'Application',
                hasDemo: true,
                description: 'Application starter with public and restricted modules',
                route: '../application'
            },
            {
                title: 'App Layout',
                hasDemo: true,
                description: 'Generic App Layout with sidebar',
                route: '../app-layout'
            },
            {
                title: 'Nested Master Detail CRUD',
                hasDemo: true,
                description: 'Nested master detail module with routing and CRUD opperations',
                route: '../nested-master-detail'
            },
            {
                title: 'Search/Filter Module',
                hasDemo: true,
                description: 'Search and Filter Module',
                route: '../search-filter'
            },
        ];
        this.appModules = [
        // {
        //   title: 'Anappro',
        //   hasDemo: true,
        //   description: '', route: '../anappro/projects'
        // },
        // {
        //   title: 'Bioreader',
        //   hasDemo: false,
        //   description: 'Browse tabulated reports and export to PDF', route: '../reports-export'
        // },
        ];
    }
    DemoLandingPageComponent.prototype.ngOnInit = function () {
    };
    DemoLandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo-landing-page',
            template: __webpack_require__(/*! ./demo-landing-page.component.html */ "./src/app/modules/demo-landing-page/demo-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./demo-landing-page.component.scss */ "./src/app/modules/demo-landing-page/demo-landing-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DemoLandingPageComponent);
    return DemoLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/demo-landing-page/demo-landing-page.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/demo-landing-page/demo-landing-page.module.ts ***!
  \***********************************************************************/
/*! exports provided: DemoLandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoLandingPageModule", function() { return DemoLandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _demo_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-landing-page.component */ "./src/app/modules/demo-landing-page/demo-landing-page.component.ts");
/* harmony import */ var _demo_landing_page_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-landing-page.router */ "./src/app/modules/demo-landing-page/demo-landing-page.router.ts");







var DemoLandingPageModule = /** @class */ (function () {
    function DemoLandingPageModule() {
    }
    DemoLandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_demo_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["DemoLandingPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _demo_landing_page_router__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ]
        })
    ], DemoLandingPageModule);
    return DemoLandingPageModule;
}());



/***/ }),

/***/ "./src/app/modules/demo-landing-page/demo-landing-page.router.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/demo-landing-page/demo-landing-page.router.ts ***!
  \***********************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-landing-page.component */ "./src/app/modules/demo-landing-page/demo-landing-page.component.ts");


var routes = [
    { path: '', component: _demo_landing_page_component__WEBPACK_IMPORTED_MODULE_1__["DemoLandingPageComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=modules-demo-landing-page-demo-landing-page-module.js.map