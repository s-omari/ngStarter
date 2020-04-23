(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-dashboard-application-dashboard-module"],{

/***/ "./src/app/modules/anappro/application-dashboard/application-dashboard.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/anappro/application-dashboard/application-dashboard.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mb-3 mat-typography\" >\n  <mat-toolbar-row>\n    <!-- <div style=\"flex:1;\" class=\"d-flex flex-wrap justify-content-between align-items-middle mat-typography\">\n      <div>\n        <h2 class=\"title\">{{item?.name}}</h2>\n      </div>\n\n      <p class=\"mat-subheading-1 pt-3 pb-3\">{{item?.contact_info}}</p>\n    </div> -->\n    <breadcrumbs *ngIf=\"breadcrumbs\" style=\"flex:1;\" [breadcrumbs]=\"breadcrumbs\"></breadcrumbs>\n    \n\n\n\n    <!-- <div class=\"pl-5\">\n      <button mat-icon-button (click)=\"openEditDialog(item)\" [matTooltipPosition]=\"'below'\" matTooltip=\"Edit\">\n        <mat-icon class=\"material-icons\">edit</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"openConfirmDeleteDialog(item)\" [matTooltipPosition]=\"'below'\" matTooltip=\"Delete\">\n        <mat-icon class=\"material-icons\">delete</mat-icon>\n      </button>\n    </div> -->\n\n\n  </mat-toolbar-row>\n\n  <!-- <mat-toolbar-row>\n    <button mat-button color=\"primary\" [routerLink]=\"['./about/']\">About</button>\n    <button mat-button color=\"primary\" [routerLink]=\"['./users/']\">Users ({{item?.users.length}})</button>\n\n\n  </mat-toolbar-row> -->\n\n</mat-toolbar>\n\n\n<div class=\"container-fluid mat-typography\">\n<pre>{{this.application |json}}</pre>\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/anappro/application-dashboard/application-dashboard.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/anappro/application-dashboard/application-dashboard.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5hcHByby9hcHBsaWNhdGlvbi1kYXNoYm9hcmQvYXBwbGljYXRpb24tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/anappro/application-dashboard/application-dashboard.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/anappro/application-dashboard/application-dashboard.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ApplicationDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDashboardComponent", function() { return ApplicationDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_anappro_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-anappro/services/projects.service */ "./src/app/modules/anappro/shared-anappro/services/projects.service.ts");




var ApplicationDashboardComponent = /** @class */ (function () {
    function ApplicationDashboardComponent(activatedRoute, projectService) {
        this.activatedRoute = activatedRoute;
        this.projectService = projectService;
    }
    ApplicationDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            // console.log(params['applicationId']);
            _this.projectApplications = _this.projectService.getProjectApplications(params['projectId']);
            _this.project = _this.projectService.getProjectById(params['projectId']);
            _this.application = _this.projectService.getProjectApplication(params['projectId'], params['applicationId']);
            console.log(_this.project);
            console.log(_this.application);
            // this.getCurrentItem(this.itemId);
            _this.breadcrumbs = [
                {
                    title: 'Projects',
                    type: 'button',
                },
                {
                    title: _this.project.name,
                    type: 'button'
                },
                {
                    title: _this.application.name,
                    type: 'button',
                    children: [
                        {
                            title: 'anappro-ionic-mobile'
                        },
                        {
                            title: 'anappro-blog'
                        }
                    ]
                }
            ];
        });
    };
    ApplicationDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-dashboard',
            template: __webpack_require__(/*! ./application-dashboard.component.html */ "./src/app/modules/anappro/application-dashboard/application-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./application-dashboard.component.scss */ "./src/app/modules/anappro/application-dashboard/application-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_anappro_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
    ], ApplicationDashboardComponent);
    return ApplicationDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/anappro/application-dashboard/application-dashboard.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/anappro/application-dashboard/application-dashboard.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ApplicationDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDashboardModule", function() { return ApplicationDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _application_dashboard_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-dashboard.router */ "./src/app/modules/anappro/application-dashboard/application-dashboard.router.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");



// import { ApplicationDashboardComponent } from './application-dashboard.component';


var ApplicationDashboardModule = /** @class */ (function () {
    function ApplicationDashboardModule() {
    }
    ApplicationDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_application_dashboard_router__WEBPACK_IMPORTED_MODULE_3__["RoutingComponents"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _application_dashboard_router__WEBPACK_IMPORTED_MODULE_3__["router"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        })
    ], ApplicationDashboardModule);
    return ApplicationDashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/anappro/application-dashboard/application-dashboard.router.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/anappro/application-dashboard/application-dashboard.router.ts ***!
  \***************************************************************************************/
/*! exports provided: RoutingComponents, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _application_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-dashboard.component */ "./src/app/modules/anappro/application-dashboard/application-dashboard.component.ts");


// routing components
var RoutingComponents = [
    _application_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["ApplicationDashboardComponent"]
];
var routes = [
    {
        path: '',
        component: _application_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["ApplicationDashboardComponent"]
    },
];
var router = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=application-dashboard-application-dashboard-module.js.map