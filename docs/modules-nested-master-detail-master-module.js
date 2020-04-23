(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-nested-master-detail-master-module"],{

/***/ "./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography\">\n  <h2 mat-dialog-title>{{data.title}}</h2>\n  <mat-dialog-content>\n    <p>The project along with all its properties will be deleted forever.</p>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-button (click)=\"confirm()\">Confirm</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmVzdGVkLW1hc3Rlci1kZXRhaWwvY29tcG9uZW50cy9jb25maXJtLWRlbGV0ZS1tb2RhbC9jb25maXJtLWRlbGV0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ConfirmDeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteModalComponent", function() { return ConfirmDeleteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmDeleteModalComponent = /** @class */ (function () {
    function ConfirmDeleteModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDeleteModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDeleteModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmDeleteModalComponent.prototype.confirm = function () {
        this.dialogRef.close('confirmed');
    };
    ConfirmDeleteModalComponent.prototype.close = function () {
        this.dialogRef.close('exit');
    };
    ConfirmDeleteModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'confirm-delete-modal',
            template: __webpack_require__(/*! ./confirm-delete-modal.component.html */ "./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-delete-modal.component.scss */ "./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmDeleteModalComponent);
    return ConfirmDeleteModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography\">\n\n  <h2 mat-dialog-title>New Project</h2>\n  <mat-dialog-content [formGroup]=\"form\">\n\n    <mat-form-field class=\"w-100\">\n      <mat-label>Project Name</mat-label>\n      <input matInput formControlName=\"name\">\n      <mat-error *ngIf=\"form.controls.name.invalid && form.controls.name.errors.minlength\">\n        Must be longer than 3 characters\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.name.invalid && form.controls.name.errors.required\">\n        Required\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"w-100\">\n      <mat-label>Project Description</mat-label>\n      <textarea  matInput formControlName=\"about\"></textarea>\n      <mat-error *ngIf=\"form.controls.about.invalid && form.controls.about.errors.minlength\">\n        Must be longer than 3 characters\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.about.invalid && form.controls.about.errors.required\">\n        Required\n      </mat-error>\n    </mat-form-field>\n\n    <hr>\n\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-button [disabled]=\"!form.valid\" (click)=\"save()\">Save</button>\n  </mat-dialog-actions>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coord-inputs {\n  background-color: #f3f3f3;\n  padding: 8px;\n  border-radius: 3px;\n  margin: 8px 0; }\n  .coord-inputs .mat-form-field {\n    width: 48%;\n    padding: 7px;\n    background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXN0ZWQtbWFzdGVyLWRldGFpbC9jb21wb25lbnRzL2NyZWF0ZS1tb2RhbC9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxtb2R1bGVzXFxuZXN0ZWQtbWFzdGVyLWRldGFpbFxcY29tcG9uZW50c1xcY3JlYXRlLW1vZGFsXFxjcmVhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7RUFKakI7SUFPUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uZXN0ZWQtbWFzdGVyLWRldGFpbC9jb21wb25lbnRzL2NyZWF0ZS1tb2RhbC9jcmVhdGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29vcmQtaW5wdXRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcblxuICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModalComponent", function() { return CreateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var CreateModalComponent = /** @class */ (function () {
    function CreateModalComponent(formBuilder, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        // this.dialogRef.
        // this.address = data.address;
        // this.name = data.name;
        // console.log('data', data);
    }
    CreateModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            about: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
        });
    };
    CreateModalComponent.prototype.save = function () {
        this.submitted = true;
        console.log(this.form.invalid);
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        // alert('SUCCESS!! :-)');
        this.dialogRef.close(this.form.value);
    };
    CreateModalComponent.prototype.close = function () {
        this.dialogRef.close('exit');
    };
    CreateModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'create-modal',
            template: __webpack_require__(/*! ./create-modal.component.html */ "./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.html"),
            styles: [__webpack_require__(/*! ./create-modal.component.scss */ "./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CreateModalComponent);
    return CreateModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-typography\">\n\n  <h2 mat-dialog-title>Edit Project : {{data.name}}</h2>\n  <mat-dialog-content [formGroup]=\"form\">\n\n    <!-- {{data|json}} -->\n\n    <mat-form-field class=\"w-100\">\n      <mat-label>Project Name</mat-label>\n      <input matInput formControlName=\"name\">\n      <mat-error *ngIf=\"form.controls.name.invalid && form.controls.name.errors.minlength\">\n        Must be longer than 3 characters\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.name.invalid && form.controls.name.errors.required\">\n        Required\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"w-100\">\n      <mat-label>Description</mat-label>\n      <textarea matInput formControlName=\"about\"></textarea>\n      <mat-error *ngIf=\"form.controls.about.invalid && form.controls.about.errors.minlength\">\n        Must be longer than 3 characters\n      </mat-error>\n      <mat-error *ngIf=\"form.controls.about.invalid && form.controls.about.errors.required\">\n        Required\n      </mat-error>\n    </mat-form-field>\n\n    <hr>\n\n\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-button [disabled]=\"!form.valid\" (click)=\"save()\">Save</button>\n  </mat-dialog-actions>\n\n</div>"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coord-inputs {\n  background-color: #f3f3f3;\n  padding: 8px;\n  border-radius: 3px;\n  margin: 8px 0; }\n  .coord-inputs .mat-form-field {\n    width: 48%;\n    padding: 7px;\n    background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXN0ZWQtbWFzdGVyLWRldGFpbC9jb21wb25lbnRzL2VkaXQtbW9kYWwvQzpcXFVzZXJzXFxzb21hclxcT25lRHJpdmVcXERlc2t0b3BcXHRlbXAgY2xlYW51cFxcQXBweFxcQW5ndWxhclN0YXJ0ZXJcXG5nU3RhcnRlci9zcmNcXGFwcFxcbW9kdWxlc1xcbmVzdGVkLW1hc3Rlci1kZXRhaWxcXGNvbXBvbmVudHNcXGVkaXQtbW9kYWxcXGVkaXQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7RUFKakI7SUFPUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uZXN0ZWQtbWFzdGVyLWRldGFpbC9jb21wb25lbnRzL2VkaXQtbW9kYWwvZWRpdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb29yZC1pbnB1dHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW46IDhweCAwO1xuXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModalComponent", function() { return EditModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var coord_Regex = /^-?[0-9]\d*(\.\d+)?$/;
var EditModalComponent = /** @class */ (function () {
    function EditModalComponent(formBuilder, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.about = data.about;
        this.name = data.name;
        this.formData = data;
    }
    EditModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: [this.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            about: [this.about, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
        });
    };
    EditModalComponent.prototype.save = function () {
        this.submitted = true;
        console.log(this.form.invalid);
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.dialogRef.close(this.form.value);
    };
    EditModalComponent.prototype.close = function () {
        this.dialogRef.close('exit');
    };
    EditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-modal',
            template: __webpack_require__(/*! ./edit-modal.component.html */ "./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.html"),
            styles: [__webpack_require__(/*! ./edit-modal.component.scss */ "./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EditModalComponent);
    return EditModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/nested-master-detail/detail/about/about.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/detail/about/about.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n{{aboutProject}}\n</p>\n"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/detail/about/about.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/detail/about/about.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmVzdGVkLW1hc3Rlci1kZXRhaWwvZGV0YWlsL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/detail/about/about.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/detail/about/about.component.ts ***!
  \******************************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mock-data */ "./src/app/modules/nested-master-detail/mock-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutComponent = /** @class */ (function () {
    function AboutComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.parent.url.subscribe(function (urlPath) {
            // get project ID from url
            var url = urlPath[urlPath.length - 1].path;
            console.log(url, 'url');
            _this.aboutProject = _mock_data__WEBPACK_IMPORTED_MODULE_2__["projects"].data.filter(function (project) { return project.id === url; })[0].about;
        });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/modules/nested-master-detail/detail/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/modules/nested-master-detail/detail/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/modules/nested-master-detail/detail/detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/detail/detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mb-3 mat-typography\" >\n  <mat-toolbar-row>\n    <div style=\"flex:1;\" class=\"d-flex flex-wrap justify-content-between align-items-middle mat-typography\">\n      <div>\n        <h2 class=\"title\">{{item?.name}}</h2>\n      </div>\n\n      <p class=\"mat-subheading-1 pt-3 pb-3\">{{item?.contact_info}}</p>\n    </div>\n\n\n\n    <div class=\"pl-5\">\n      <button mat-icon-button (click)=\"openEditDialog(item)\" [matTooltipPosition]=\"'below'\" matTooltip=\"Edit\">\n        <mat-icon class=\"material-icons\">edit</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"openConfirmDeleteDialog(item)\" [matTooltipPosition]=\"'below'\" matTooltip=\"Delete\">\n        <mat-icon class=\"material-icons\">delete</mat-icon>\n      </button>\n    </div>\n\n\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <button mat-button color=\"primary\" [routerLink]=\"['./about/']\">About</button>\n    <button mat-button color=\"primary\" [routerLink]=\"['./users/']\">Users ({{item?.users.length}})</button>\n\n\n  </mat-toolbar-row>\n\n</mat-toolbar>\n\n\n<div class=\"container-fluid mat-typography\">\n\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/detail/detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/detail/detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-actions button {\n  color: grey; }\n  .item-actions button:hover {\n    color: #344D91; }\n  .week-title {\n  font-weight: bold;\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXN0ZWQtbWFzdGVyLWRldGFpbC9kZXRhaWwvQzpcXFVzZXJzXFxzb21hclxcT25lRHJpdmVcXERlc2t0b3BcXHRlbXAgY2xlYW51cFxcQXBweFxcQW5ndWxhclN0YXJ0ZXJcXG5nU3RhcnRlci9zcmNcXGFwcFxcbW9kdWxlc1xcbmVzdGVkLW1hc3Rlci1kZXRhaWxcXGRldGFpbFxcZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVyxFQUFBO0VBRm5CO0lBS1ksY0FBYyxFQUFBO0VBTTFCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmVzdGVkLW1hc3Rlci1kZXRhaWwvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWFjdGlvbnMge1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMzNDREOTE7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLndlZWstdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/detail/detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/detail/detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/edit-modal/edit-modal.component */ "./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.ts");
/* harmony import */ var _components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/confirm-delete-modal/confirm-delete-modal.component */ "./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.ts");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mock-data */ "./src/app/modules/nested-master-detail/mock-data.ts");







var DetailComponent = /** @class */ (function () {
    function DetailComponent(activatedRoute, dialog) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            // console.log(params['id']);
            _this.itemId = params['id'];
            _this.getCurrentItem(_this.itemId);
        });
    };
    DetailComponent.prototype.deleteItem = function () {
        // remove item from list and route to items list page
    };
    DetailComponent.prototype.openConfirmDeleteDialog = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteModalComponent"], {
            disableClose: true,
            data: { title: 'Delete This Project?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result !== 'exit') {
                _this.deleteItem();
            }
        });
    };
    DetailComponent.prototype.openEditDialog = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_4__["EditModalComponent"], {
            disableClose: true,
            data: {
                name: item.name,
                about: item.about,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== 'exit') {
                var updatedItem = {
                    name: result.name,
                    about: result.about,
                };
                _this.editItem(updatedItem);
            }
        });
    };
    DetailComponent.prototype.editItem = function (item) {
        // edit item in list and DB
    };
    DetailComponent.prototype.getCurrentItem = function (itemId) {
        this.item = _mock_data__WEBPACK_IMPORTED_MODULE_6__["projects"].data.filter(function (item) { return item.id === itemId; })[0];
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/modules/nested-master-detail/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/modules/nested-master-detail/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/nested-master-detail/detail/users/users.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/detail/users/users.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row h-100\">\n\n  <ng-container *ngIf=\"itemUsers.length > 0\">\n    <div class=\"col-6\">\n\n      <mat-nav-list>\n        <a (click)=\"selectUser(user)\" [class.active]=\"user.id === selectedUser?.id\" mat-list-item *ngFor=\"let user of itemUsers\">\n          {{ user.name }}\n        </a>\n      </mat-nav-list>\n    </div>\n    <!-- <ul class=\"col-6\">\n      <li (click)=\"selectUser(user)\" *ngFor=\"let user of itemUsers\">{{user.name}}</li>\n    </ul> -->\n\n\n\n    <div class=\"col-6\">\n      <pre>{{selectedUser |json}}</pre>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"itemUsers.length == 0\">\n    <p>This project has no users</p>\n  </ng-container>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/detail/users/users.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/detail/users/users.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  background-color: #d6d6d6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXN0ZWQtbWFzdGVyLWRldGFpbC9kZXRhaWwvdXNlcnMvQzpcXFVzZXJzXFxzb21hclxcT25lRHJpdmVcXERlc2t0b3BcXHRlbXAgY2xlYW51cFxcQXBweFxcQW5ndWxhclN0YXJ0ZXJcXG5nU3RhcnRlci9zcmNcXGFwcFxcbW9kdWxlc1xcbmVzdGVkLW1hc3Rlci1kZXRhaWxcXGRldGFpbFxcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25lc3RlZC1tYXN0ZXItZGV0YWlsL2RldGFpbC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/detail/users/users.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/detail/users/users.component.ts ***!
  \******************************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mock-data */ "./src/app/modules/nested-master-detail/mock-data.ts");





var UsersComponent = /** @class */ (function () {
    function UsersComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.itemUsers = [];
        this.userSelected = false;
        this.route.parent.url.subscribe(function (urlPath) {
            var url = urlPath[urlPath.length - 1].path;
            console.log(url, 'url');
            _this.itemUsers = _mock_data__WEBPACK_IMPORTED_MODULE_3__["projects"].data.filter(function (item) { return item.id === url; })[0].users;
            // console.log(this.itemUsers);
        });
        // this.getitemUsers();
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.getitemUsers = function () {
        var _this = this;
        this.router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                var activeUrlSegments = event.url.split('/');
                _this.activeItem = activeUrlSegments[2];
            }
        });
        setTimeout(function () {
            _this.itemUsers = _mock_data__WEBPACK_IMPORTED_MODULE_3__["projects"].data.filter(function (item) { return item.id === _this.activeItem; })[0].users;
        }, 3000);
    };
    UsersComponent.prototype.selectUser = function (user) {
        console.log(user);
        this.userSelected = true;
        this.selectedUser = user;
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/modules/nested-master-detail/detail/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/modules/nested-master-detail/detail/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/modules/nested-master-detail/master.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/master.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container class=\"h-100\">\n\n  <mat-sidenav class=\"h-100\" #drawer \n  [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\" class=\"sidenav\" [attr.role]=\"'navigation'\" [mode]=\"'side'\" [opened]=\"true\">\n\n    <mat-toolbar color=\"primary\">\n        <button mat-button routerLink=\"\" class=\"\">\n          Nested Master Detail\n        </button>\n        <span class=\"spacer\"></span>\n      </mat-toolbar>\n\n    <button mat-raised-button class=\"m-4\" (click)=\"openCreateDialog()\">Create Project</button>\n\n    <div class=\"search-bar\">\n      <mat-form-field appearance=\"fill\" [floatLabel]=\"'never'\">\n        <input matInput type=\"text\" placeholder=\"Search Projects\" [(ngModel)]=\"searchTerm\" (input)=\"search($event.target.value)\">\n        <mat-icon matPrefix>search</mat-icon>\n        <button class=\"input-clear-button\" mat-button *ngIf=\"searchTerm\" matSuffix mat-icon-button aria-label=\"Clear\"\n          (click)=\"clearSearch()\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n    </div>\n    <mat-nav-list dense>\n      <h3 mat-subheader>Projects</h3>\n      <a [class.active]=\"activeNav == item.id\" mat-list-item *ngFor=\"let item of filteredItems\" (click)=\"selectItem(item) \">\n        {{ item.name }}\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n\n  <mat-sidenav-content class=\"d-flex flex-column\">\n    \n      <div id=\"page-content\">\n          <mat-toolbar color=\"primary\">\n              <!-- <button mat-button routerLink=\"\" class=\"\">\n                Nested Master Detail\n              </button> -->\n              <span class=\"spacer\"></span>\n            </mat-toolbar>\n        <div *ngIf=\"isHandset$ | async\" class=\"toggleRight\">\n          <button class=\"float-right\" type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n            <mat-icon fontSet=\"fa\" fontIcon=\"fa-bars\"></mat-icon>\n          </button>\n        </div>\n    <router-outlet></router-outlet>\n\n      </div>\n\n      <footer id=\"sticky-footer\" class=\"py-4 bg-dark text-white-50\">\n          <div class=\"container text-center\">\n            <small>Copyright &copy; ngStarter</small>\n          </div>\n        </footer>\n        \n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/master.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/master.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-content {\n  flex: 1 0 auto; }\n\n#sticky-footer {\n  flex-shrink: none; }\n\n.toggleRight {\n  background-color: #f5f5f5;\n  height: 20px; }\n\n.toggleRight button {\n    margin-bottom: -21px; }\n\n.active {\n  background: #e6e6e6; }\n\n.input-clear-button {\n  margin: 0 0 0 -25px; }\n\n.search-bar mat-form-field {\n  width: 250px; }\n\n.mat-form-field-infix {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXN0ZWQtbWFzdGVyLWRldGFpbC9DOlxcVXNlcnNcXHNvbWFyXFxPbmVEcml2ZVxcRGVza3RvcFxcdGVtcCBjbGVhbnVwXFxBcHB4XFxBbmd1bGFyU3RhcnRlclxcbmdTdGFydGVyL3NyY1xcYXBwXFxtb2R1bGVzXFxuZXN0ZWQtbWFzdGVyLWRldGFpbFxcbWFzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRmQ7SUFLSSxvQkFBb0IsRUFBQTs7QUFJeEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFLSSxZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25lc3RlZC1tYXN0ZXItZGV0YWlsL21hc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJvZHkge1xuLy8gICBoZWlnaHQ6IDEwMCVcbi8vIH1cblxuXG4jcGFnZS1jb250ZW50IHtcbiAgZmxleDogMSAwIGF1dG87XG59XG5cbiNzdGlja3ktZm9vdGVyIHtcbiAgZmxleC1zaHJpbms6IG5vbmU7XG59XG5cbi50b2dnbGVSaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGhlaWdodDogMjBweDtcblxuICBidXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IC0yMXB4O1xuICB9XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xufVxuXG4uaW5wdXQtY2xlYXItYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDAgMCAtMjVweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuXG4gIC8vIHBhZGRpbmc6IDZweDtcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG5cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/nested-master-detail/master.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/master.component.ts ***!
  \******************************************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-modal/create-modal.component */ "./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.ts");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock-data */ "./src/app/modules/nested-master-detail/mock-data.ts");
/* harmony import */ var _mock_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock-service.service */ "./src/app/modules/nested-master-detail/mock-service.service.ts");










var MasterComponent = /** @class */ (function () {
    function MasterComponent(breakpointObserver, router, activatedRoute, dialog, 
    // private route: ActivatedRoute,
    mockService) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.mockService = mockService;
        this.isHandset$ = this.breakpointObserver.observe('(max-width: 599px)')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.activatedUrl = this.router.url;
        var urlSegments = this.router.url.split('/');
        this.activeNav = urlSegments[2];
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                _this.activatedUrl = event.url;
                var activeUrlSegments = event.url.split('/');
                _this.activeNav = activeUrlSegments[2];
            }
        });
        this.filteredItems = this.mockService.query();
    }
    MasterComponent.prototype.openCreateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__["CreateModalComponent"], {
            disableClose: true,
            data: {},
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // do this in the modal and return an object!
            if (result !== 'exit') {
                var newItem = {
                    id: '21bb9516-861c-4356-553d-959598695baf',
                    name: result.name,
                    about: result.about,
                };
                _this.createItem(newItem);
            }
        });
    };
    MasterComponent.prototype.createItem = function (item) {
        this.mockService.items.push(item);
        this.filteredItems = this.mockService.query();
    };
    MasterComponent.prototype.getItems = function () {
        this.items = _mock_data__WEBPACK_IMPORTED_MODULE_7__["projects"];
    };
    MasterComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    MasterComponent.prototype.selectItem = function (item) {
        // set currently selected item variable
        this.selectedItem = item;
        this.router.navigate(['nested-master-detail/', item.id, 'about']);
    };
    MasterComponent.prototype.clearSearch = function () {
        this.searchTerm = '';
        this.search(this.searchTerm);
    };
    MasterComponent.prototype.search = function (val) {
        if (!val || !val.trim()) {
            this.filteredItems = this.mockService.query();
            return;
        }
        this.filteredItems = this.mockService.query({
            name: val
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"])
    ], MasterComponent.prototype, "sidenav", void 0);
    MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/modules/nested-master-detail/master.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./master.component.scss */ "./src/app/modules/nested-master-detail/master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _mock_service_service__WEBPACK_IMPORTED_MODULE_8__["MockServiceService"]])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/modules/nested-master-detail/master.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/master.module.ts ***!
  \***************************************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _master_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master.router */ "./src/app/modules/nested-master-detail/master.router.ts");
/* harmony import */ var _components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-modal/create-modal.component */ "./src/app/modules/nested-master-detail/components/create-modal/create-modal.component.ts");
/* harmony import */ var _components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/confirm-delete-modal/confirm-delete-modal.component */ "./src/app/modules/nested-master-detail/components/confirm-delete-modal/confirm-delete-modal.component.ts");
/* harmony import */ var _components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-modal/edit-modal.component */ "./src/app/modules/nested-master-detail/components/edit-modal/edit-modal.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _detail_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/about/about.component */ "./src/app/modules/nested-master-detail/detail/about/about.component.ts");



// import { SharedModule } from '../../shared/shared.module';
// import { SharedAdminModule } from '../shared-admin/shared-admin.module';

// import { DetailComponent } from './detail/detail.component';

// import { DayScheduleComponent } from './components/day-schedule/day-schedule.component';
// import { CreateShiftModalComponent } from './components/day-schedule/create-shift-modal/create-shift-modal.component';
// import { EditShiftModalComponent } from './components/day-schedule/edit-shift-modal/edit-shift-modal.component';




var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _master_router__WEBPACK_IMPORTED_MODULE_3__["router"],
                // SharedModule,
                // SharedAdminModule,
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"]
            ],
            declarations: [
                _master_router__WEBPACK_IMPORTED_MODULE_3__["RoutingComponents"],
                // DetailComponent,
                // DayScheduleComponent,
                _components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_4__["CreateModalComponent"],
                // CreateShiftModalComponent,
                // EditShiftModalComponent,
                _components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteModalComponent"],
                _components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditModalComponent"],
                _detail_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
            ],
            entryComponents: [
                _components_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_4__["CreateModalComponent"],
                // CreateShiftModalComponent,
                // EditShiftModalComponent,
                _components_confirm_delete_modal_confirm_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteModalComponent"],
                _components_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditModalComponent"]
            ],
            exports: [
                // SharedModule,
                // SharedAdminModule
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"]
            ]
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ }),

/***/ "./src/app/modules/nested-master-detail/master.router.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/master.router.ts ***!
  \***************************************************************/
/*! exports provided: RoutingComponents, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master.component */ "./src/app/modules/nested-master-detail/master.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/modules/nested-master-detail/detail/detail.component.ts");
/* harmony import */ var _detail_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/users/users.component */ "./src/app/modules/nested-master-detail/detail/users/users.component.ts");
/* harmony import */ var _detail_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/about/about.component */ "./src/app/modules/nested-master-detail/detail/about/about.component.ts");





// routing components
var RoutingComponents = [
    _master_component__WEBPACK_IMPORTED_MODULE_1__["MasterComponent"],
    _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__["DetailComponent"],
    _detail_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
    _detail_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
];
var routes = [
    {
        path: '', component: _master_component__WEBPACK_IMPORTED_MODULE_1__["MasterComponent"],
        children: [
            {
                path: ':id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__["DetailComponent"],
                children: [
                    { path: 'users', component: _detail_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
                    { path: 'about', component: _detail_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
                ]
            }
        ],
    },
];
var router = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/modules/nested-master-detail/mock-data.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/nested-master-detail/mock-data.ts ***!
  \***********************************************************/
/*! exports provided: projects, users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
var projects = {
    data: [
        {
            id: '21bb9516-861c-4356-a63d-959598695baf',
            name: 'BioReader',
            about: 'Bioreader is an application',
            users: [
                { id: '1', name: 'Mike Smith' },
                { id: '2', name: 'Omar Doe' },
                { id: '3', name: 'Jane M.' }
            ],
            created_at: '2018-10-09 13:59:30',
            updated_at: '2018-10-09 13:59:30'
        },
        {
            id: '30d7637e-ddf5-4b8c-b431-63ed84412d76',
            name: 'Anappro',
            about: 'Anappro is an application',
            users: [
                {
                    id: '1', name: 'Smith',
                }
            ],
            created_at: '2018-10-05 05:49:05',
            updated_at: '2018-10-05 05:49:05'
        }
    ]
};
var users = [];


/***/ }),

/***/ "./src/app/modules/nested-master-detail/mock-service.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/nested-master-detail/mock-service.service.ts ***!
  \**********************************************************************/
/*! exports provided: MockServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockServiceService", function() { return MockServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-data */ "./src/app/modules/nested-master-detail/mock-data.ts");



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



/***/ })

}]);
//# sourceMappingURL=modules-nested-master-detail-master-module.js.map