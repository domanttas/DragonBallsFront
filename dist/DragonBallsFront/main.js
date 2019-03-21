(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/registration/registration.component */ "./src/app/pages/registration/registration.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _pages_deeds_deeds_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/deeds/deeds.component */ "./src/app/pages/deeds/deeds.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");









var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'deeds', component: _pages_deeds_deeds_component__WEBPACK_IMPORTED_MODULE_7__["DeedsComponent"] },
    { path: 'blog', component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"] },
    { path: 'registration', component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"], pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/registration/registration.component */ "./src/app/pages/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialogs/error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");
/* harmony import */ var _dialogs_good_deed_registration_good_deed_registration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialogs/good-deed-registration/good-deed-registration.component */ "./src/app/dialogs/good-deed-registration/good-deed-registration.component.ts");
/* harmony import */ var _pages_deeds_deeds_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/deeds/deeds.component */ "./src/app/pages/deeds/deeds.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _dialogs_deeds_team_registration_team_registration_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dialogs/deeds-team-registration/team-registration.component */ "./src/app/dialogs/deeds-team-registration/team-registration.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialogs/confirmation-dialog/confirmation-dialog.component */ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _pages_deed_model_display_deed_model_display_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/deed-model-display/deed-model-display.component */ "./src/app/pages/deed-model-display/deed-model-display.component.ts");
/* harmony import */ var _dialogs_blog_registration_blog_registration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialogs/blog-registration/blog-registration.component */ "./src/app/dialogs/blog-registration/blog-registration.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ErrorDialogComponent"],
                _pages_deeds_deeds_component__WEBPACK_IMPORTED_MODULE_17__["DeedsComponent"],
                _dialogs_deeds_team_registration_team_registration_component__WEBPACK_IMPORTED_MODULE_19__["TeamRegistrationComponent"],
                _dialogs_good_deed_registration_good_deed_registration_component__WEBPACK_IMPORTED_MODULE_16__["GoodDeedRegistrationComponent"],
                _dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmationDialogComponent"],
                _pages_deed_model_display_deed_model_display_component__WEBPACK_IMPORTED_MODULE_22__["DeedModelDisplayComponent"],
                _dialogs_blog_registration_blog_registration_component__WEBPACK_IMPORTED_MODULE_23__["BlogRegistrationComponent"],
                _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_24__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ErrorDialogComponent"], _dialogs_deeds_team_registration_team_registration_component__WEBPACK_IMPORTED_MODULE_19__["TeamRegistrationComponent"], _dialogs_good_deed_registration_good_deed_registration_component__WEBPACK_IMPORTED_MODULE_16__["GoodDeedRegistrationComponent"], _dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmationDialogComponent"], _dialogs_blog_registration_blog_registration_component__WEBPACK_IMPORTED_MODULE_23__["BlogRegistrationComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.userService.refreshUserToken().toPromise().then(function (res) {
            _this.router.navigate(['home']);
            return false;
        }, function (error) {
            return true;
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/dialogs/blog-registration/blog-registration.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/dialogs/blog-registration/blog-registration.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep :root {\n  --register-btn-color: #3899ec;\n}\n\nmat-form-field {\n  margin-right: 12px;\n}\n\n.blog-page-registration {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 400px;\n  flex-direction: column;\n}\n\n.blog-registration-btn {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 4rem;\n}\n\n.create-blog-post-btn {\n  min-width: 5.625rem;\n  margin-right: 1rem;\n  color: var(--register-btn-color);\n  box-shadow: inset 0 0 0 0.0625rem var(--register-btn-color);\n}\n\n.cancel-blog-post-btn {\n  min-width: 5.625rem;\n  margin-right: 1rem;\n}\n\n.blog-page--blog-post-registration {\n  display: flex;\n  flex-direction: column;\n  min-height: 20rem;\n  min-width: 40rem;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  width: 6rem;\n  justify-content: flex-end;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.blog-page--blog-photo {\n  max-width: 20rem;\n  max-height: 20rem;\n}\n\n.blog-page--blog-photo-wrapper {\n  /*margin-top: 3rem;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9ibG9nLXJlZ2lzdHJhdGlvbi9ibG9nLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQywyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2Jsb2ctcmVnaXN0cmF0aW9uL2Jsb2ctcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgOnJvb3Qge1xuICAtLXJlZ2lzdGVyLWJ0bi1jb2xvcjogIzM4OTllYztcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5ibG9nLXBhZ2UtcmVnaXN0cmF0aW9uIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmxvZy1yZWdpc3RyYXRpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cbi5jcmVhdGUtYmxvZy1wb3N0LWJ0biB7XG4gIG1pbi13aWR0aDogNS42MjVyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgY29sb3I6IHZhcigtLXJlZ2lzdGVyLWJ0bi1jb2xvcik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAuMDYyNXJlbSB2YXIoLS1yZWdpc3Rlci1idG4tY29sb3IpO1xufVxuXG4uY2FuY2VsLWJsb2ctcG9zdC1idG4ge1xuICBtaW4td2lkdGg6IDUuNjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5ibG9nLXBhZ2UtLWJsb2ctcG9zdC1yZWdpc3RyYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAyMHJlbTtcbiAgbWluLXdpZHRoOiA0MHJlbTtcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJsb2ctcGFnZS0tYmxvZy1waG90byB7XG4gIG1heC13aWR0aDogMjByZW07XG4gIG1heC1oZWlnaHQ6IDIwcmVtO1xufVxuXG4uYmxvZy1wYWdlLS1ibG9nLXBob3RvLXdyYXBwZXIge1xuICAvKm1hcmdpbi10b3A6IDNyZW07Ki9cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialogs/blog-registration/blog-registration.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dialogs/blog-registration/blog-registration.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n  <h2 mat-dialog-title>Create blog post</h2>\n  <mat-dialog-content class=\"blog-page--blog-post-registration\">\n    <mat-form-field>\n      <input matInput placeholder=\"Duration\" [formControl]=\"duration\">\n      <mat-error *ngIf=\"duration.invalid\">{{getDurationErrorMessage()}}</mat-error>\n      <mat-hint>In hours</mat-hint>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Description</mat-label>\n      <textarea matInput\n                cdkTextareaAutosize\n                #autosize=\"cdkTextareaAutosize\"\n                cdkAutosizeMinRows=\"2\"\n                cdkAutosizeMaxRows=\"5\" #message maxlength=\"256\" placeholder=\"Message\" [formControl]=\"description\"></textarea>\n      <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n    </mat-form-field>\n    <div class=\"upload-btn-wrapper\">\n      <mat-label>Upload photo</mat-label>\n      <input type=\"file\" name=\"myFile\" #postPhoto (change)=\"photoPicker($event)\"/>\n    </div>\n    <mat-label *ngIf=\"this.postPhoto\">Photo was uploaded</mat-label>\n    <mat-label *ngIf=\"this.isErrorPresent\">{{this.errorMessage}}</mat-label>\n    <mat-dialog-actions class=\"blog-registration-btn\">\n      <button mat-raised-button class=\"create-blog-post-btn\"(click)=\"createBlog()\">Post</button>\n      <button mat-raised-button class=\"cancel-blog-post-btn\" (click)=\"cancelBlogPost()\">Close</button>\n    </mat-dialog-actions>\n  </mat-dialog-content>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dialogs/blog-registration/blog-registration.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dialogs/blog-registration/blog-registration.component.ts ***!
  \**************************************************************************/
/*! exports provided: BlogRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRegistrationComponent", function() { return BlogRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");









var BlogRegistrationComponent = /** @class */ (function () {
    function BlogRegistrationComponent(dialogRef, data, ngZone, sanitizer, blogService, userService) {
        this.dialogRef = dialogRef;
        this.ngZone = ngZone;
        this.sanitizer = sanitizer;
        this.blogService = blogService;
        this.userService = userService;
        this.errorPresent = false;
        this.duration = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(24), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]{1,2}')]);
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    BlogRegistrationComponent.prototype.ngOnInit = function () {
        this.user = this.userService.user;
    };
    BlogRegistrationComponent.prototype.getDurationErrorMessage = function () {
        return this.duration.hasError('required') ? 'You must enter a value' :
            this.duration.hasError('max') ? 'Max 24 hours' :
                this.duration.hasError('pattern') ? 'All characters must be digits' :
                    '';
    };
    BlogRegistrationComponent.prototype.triggerResize = function () {
        var _this = this;
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
    };
    BlogRegistrationComponent.prototype.createBlog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.duration.valid && !this.description.valid && this.postPhoto === undefined) {
                            return [2 /*return*/];
                        }
                        this.blogPost = {
                            duration: this.duration.value,
                            blogText: this.description.value,
                            user: this.user,
                            date: Date.now().toString(),
                            imageBytes: this.blogService.stringToImageBytes(this.postPhoto)
                            // imageBytes: this.blogService.stringToImageBytes(this.postPhoto.replace('data:image/png;base64,', ''))
                        };
                        console.log(this.blogPost);
                        return [4 /*yield*/, this.blogService.createBlogPost(this.blogPost).then(function (result) {
                                _this.cancelBlogPost();
                            }, function (error) {
                                _this.errorPresent = true;
                                _this.errorMessage = error.error.message;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlogRegistrationComponent.prototype.cancelBlogPost = function () {
        this.dialogRef.close();
    };
    BlogRegistrationComponent.prototype.photoPicker = function (postPhoto) {
        var _this = this;
        var file = postPhoto.target.files[0];
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
            _this.postPhoto = fileReader.result;
            console.log(_this.postPhoto);
            _this.replaceBasePrefix();
            // this.displayPhotoUri = this.sanitizer.bypassSecurityTrustResourceUrl(this.postPhoto);
            // console.log(this.displayPhotoUri);
        };
        fileReader.readAsDataURL(file);
    };
    BlogRegistrationComponent.prototype.replaceBasePrefix = function () {
        this.postPhoto = this.postPhoto.replace('data:image/jpeg;base64,', '');
        this.postPhoto = this.postPhoto.replace('data:image/png;base64,', '');
        this.postPhoto = this.postPhoto.replace('data:image/jpg;base64,', '');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autosize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__["CdkTextareaAutosize"])
    ], BlogRegistrationComponent.prototype, "autosize", void 0);
    BlogRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-registration',
            template: __webpack_require__(/*! ./blog-registration.component.html */ "./src/app/dialogs/blog-registration/blog-registration.component.html"),
            styles: [__webpack_require__(/*! ./blog-registration.component.css */ "./src/app/dialogs/blog-registration/blog-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_7__["BlogService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]])
    ], BlogRegistrationComponent);
    return BlogRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-raised-button {\n  float: none;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Are you sure about that?</h2>\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\"(click)=\"confirm()\">Confirm</button>\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_participation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/participation */ "./src/app/models/participation.ts");
/* harmony import */ var _services_deed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/deed.service */ "./src/app/services/deed.service.ts");





var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(deedService, dialogRef, data) {
        this.deedService = deedService;
        this.dialogRef = dialogRef;
        this.deed = data.goodDeed;
        this.user = data.registeredUser;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.confirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateDeedParticipationType(this.deed)];
                    case 1:
                        _a.sent();
                        this.deedService.addUserToDeed(this.user, this.deed.id).toPromise().then(function (response) {
                        }, function (error) {
                        });
                        this.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmationDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ConfirmationDialogComponent.prototype.updateDeedParticipationType = function (deed) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deedUpdate;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deedUpdate = deed;
                        deedUpdate.participation = _models_participation__WEBPACK_IMPORTED_MODULE_3__["Participation"].PARTICIPATE_AS_SOLO.toString();
                        return [4 /*yield*/, this.deedService.updateDeed(deedUpdate).toPromise().then(function (response) {
                            }, function (deedUpdateError) {
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.css */ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deed_service__WEBPACK_IMPORTED_MODULE_4__["DeedService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/deeds-team-registration/team-registration.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/dialogs/deeds-team-registration/team-registration.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".--deeds-page--team-registration-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.deeds-registration-dialog-error-message {\n  color: red;\n  display: flex;\n  float: bottom;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9kZWVkcy10ZWFtLXJlZ2lzdHJhdGlvbi90ZWFtLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9ncy9kZWVkcy10ZWFtLXJlZ2lzdHJhdGlvbi90ZWFtLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLi0tZGVlZHMtcGFnZS0tdGVhbS1yZWdpc3RyYXRpb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kZWVkcy1yZWdpc3RyYXRpb24tZGlhbG9nLWVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogYm90dG9tO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dialogs/deeds-team-registration/team-registration.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/dialogs/deeds-team-registration/team-registration.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n  <h2 mat-dialog-title>Register Team</h2>\n\n  <mat-dialog-content class=\"--deeds-page--team-registration-content\">\n    <span *ngFor=\"let form of formControlList\">\n      <mat-form-field appearance=\"outline\">\n      <input matInput placeholder=\"Username\" [formControl]=\"form\">\n      <mat-hint>Team member username</mat-hint>\n    </mat-form-field>\n    <mat-icon matSuffix (click)=\"deleteUsername(form)\">clear</mat-icon>\n    </span>\n    <label *ngIf=\"userNameErrorMessage\">User already registered</label>\n    <section #error>\n      <label class=\"col deeds-registration-dialog-error-message\" *ngIf=\"isUserRegistrationErrorPresent\">{{userRegistrationErrorMessage}}</label>\n    </section>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <button mat-raised-button (click)=\"addNewUsername()\">\n      Add\n    </button>\n    <button mat-raised-button (click)=\"registerTeam()\">\n      Done\n    </button>\n    <button mat-raised-button (click)=\"cancel()\">\n      Cancel\n    </button>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/deeds-team-registration/team-registration.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dialogs/deeds-team-registration/team-registration.component.ts ***!
  \********************************************************************************/
/*! exports provided: TeamRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRegistrationComponent", function() { return TeamRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_deed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/deed.service */ "./src/app/services/deed.service.ts");






var TeamRegistrationComponent = /** @class */ (function () {
    function TeamRegistrationComponent(dialogRef, data, userService, deedService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.deedService = deedService;
        this.deed = data.goodDeed;
    }
    TeamRegistrationComponent.prototype.ngOnInit = function () {
        this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.userNames = [];
        this.formControlList = [];
        this.users = [];
        this.teamUsers = [];
        this.formControlList.push(this.userName);
        this.getUserByToken();
    };
    TeamRegistrationComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    TeamRegistrationComponent.prototype.addNewUsername = function () {
        this.userNameErrorMessage = false;
        for (var _i = 0, _a = this.deed.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username === this.userName.value.toString()) {
                this.userNameErrorMessage = true;
                return;
            }
        }
        this.userNames.push(this.userName.value.toString());
        this.formControlList.forEach(function (form) { return form.disable(); });
        this.userName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.formControlList.push(this.userName);
    };
    TeamRegistrationComponent.prototype.deleteUsername = function (form) {
        this.formControlList = this.formControlList.filter(function (existingForm) { return existingForm.value !== form.value; });
        this.userNames = this.userNames.filter(function (existingUsername) { return existingUsername !== form.value; });
    };
    TeamRegistrationComponent.prototype.registerTeam = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, _a, username;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.isUserRegistrationErrorPresent = false;
                        this.userNames.push(this.currentUserUsername);
                        this.userNames = Array.from(new Set(this.userNames));
                        _i = 0, _a = this.userNames;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        username = _a[_i];
                        return [4 /*yield*/, this.getUserByUsername(username)];
                    case 2:
                        _b.sent();
                        if (this.isUserRegistrationErrorPresent) {
                            return [3 /*break*/, 6];
                        }
                        return [4 /*yield*/, this.addUserToDeed(this.user, this.deed.id)];
                    case 3:
                        _b.sent();
                        if (this.isUserRegistrationErrorPresent) {
                            return [3 /*break*/, 6];
                        }
                        return [4 /*yield*/, this.deactivateDeed(this.deed.id)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (!!this.isUserRegistrationErrorPresent) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.updateDeed()];
                    case 7:
                        _b.sent();
                        this.close();
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    TeamRegistrationComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    TeamRegistrationComponent.prototype.getUserByToken = function () {
        var _this = this;
        this.userService.getUserByToken().toPromise()
            .then(function (result) {
            if (result) {
                _this.currentUserUsername = result.username;
                _this.currentUserId = result.id;
            }
        });
    };
    TeamRegistrationComponent.prototype.getUserByUsername = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserByUsername(username).toPromise().then(function (response) {
                            _this.user = response;
                            _this.teamUsers.push(_this.user);
                        }, function (userError) {
                            _this.userRegistrationErrorMessage = username + ' - ' + userError.error.message;
                            _this.isUserRegistrationErrorPresent = true;
                            _this.prop.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', alignToTop: true });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamRegistrationComponent.prototype.addUserToDeed = function (user, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deedService.addUserToDeed(user, id).toPromise().then(function (response) {
                        }, function (deedError) {
                            _this.userRegistrationErrorMessage = deedError.error.message;
                            _this.isUserRegistrationErrorPresent = true;
                            _this.prop.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', alignToTop: true });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamRegistrationComponent.prototype.deactivateDeed = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deedService.deactivateDeed(id).toPromise().then(function (response) {
                        }, function (deactivateError) {
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamRegistrationComponent.prototype.updateDeed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deed, _i, _a, user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        deed = this.deed;
                        deed.teamLeadId = this.currentUserId;
                        deed.isClosed = true;
                        for (_i = 0, _a = this.teamUsers; _i < _a.length; _i++) {
                            user = _a[_i];
                            deed.users.push(user);
                        }
                        deed.closed = true;
                        return [4 /*yield*/, this.deedService.updateDeed(deed).toPromise().then(function (response) {
                            }, function (deedUpdateError) {
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('error'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TeamRegistrationComponent.prototype, "prop", void 0);
    TeamRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-registration',
            template: __webpack_require__(/*! ./team-registration.component.html */ "./src/app/dialogs/deeds-team-registration/team-registration.component.html"),
            styles: [__webpack_require__(/*! ./team-registration.component.css */ "./src/app/dialogs/deeds-team-registration/team-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_deed_service__WEBPACK_IMPORTED_MODULE_5__["DeedService"]])
    ], TeamRegistrationComponent);
    return TeamRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-raised-button {\n  float: none;\n  margin: 0 auto;\n}\n\n.mat-dialog-title {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9lcnJvci1kaWFsb2cvZXJyb3ItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{description}}</h2>\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialogs/error-dialog/error-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/error-dialog/error-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.description = data.description;
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
    };
    ErrorDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ErrorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-dialog',
            template: __webpack_require__(/*! ./error-dialog.component.html */ "./src/app/dialogs/error-dialog/error-dialog.component.html"),
            styles: [__webpack_require__(/*! ./error-dialog.component.css */ "./src/app/dialogs/error-dialog/error-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/good-deed-registration/good-deed-registration.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/dialogs/good-deed-registration/good-deed-registration.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep :root {\n  --register-btn-color: #3899ec;\n}\n\n.mat-dialog-content {\n  width: 50rem;\n  margin: 0 auto;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.col-center {\n  display: flex;\n  justify-content: center;\n}\n\n.deed-registration-dialog--register--btn {\n  width: 3.125rem;\n  color: var(--register-btn-color);\n  box-shadow: inset 0 0 0 0.0625rem var(--register-btn-color);\n}\n\n.mat-raised-button {\n  min-width: 5.625rem;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n\nmat-dialog-actions {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.deed-registration-dialog--header--title {\n  font-size: 2.2rem;\n}\n\n.deeds-registration-dialog-error-message {\n  color: red;\n  display: flex;\n  float: bottom;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9ncy9nb29kLWRlZWQtcmVnaXN0cmF0aW9uL2dvb2QtZGVlZC1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2dzL2dvb2QtZGVlZC1yZWdpc3RyYXRpb24vZ29vZC1kZWVkLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIDpyb290IHtcbiAgLS1yZWdpc3Rlci1idG4tY29sb3I6ICMzODk5ZWM7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICB3aWR0aDogNTByZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb2wtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kZWVkLXJlZ2lzdHJhdGlvbi1kaWFsb2ctLXJlZ2lzdGVyLS1idG4ge1xuICB3aWR0aDogMy4xMjVyZW07XG4gIGNvbG9yOiB2YXIoLS1yZWdpc3Rlci1idG4tY29sb3IpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwLjA2MjVyZW0gdmFyKC0tcmVnaXN0ZXItYnRuLWNvbG9yKTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA1LjYyNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5kZWVkLXJlZ2lzdHJhdGlvbi1kaWFsb2ctLWhlYWRlci0tdGl0bGUge1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmRlZWRzLXJlZ2lzdHJhdGlvbi1kaWFsb2ctZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsb2F0OiBib3R0b207XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dialogs/good-deed-registration/good-deed-registration.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/dialogs/good-deed-registration/good-deed-registration.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n    <h2 mat-dialog-title class=\"deed-registration-dialog--header--title col-center\">Register a good deed!</h2>\n    <mat-dialog-content>\n      <mat-form-field class=\"col\">\n        <input matInput placeholder=\"Name *\" [formControl]=\"name\">\n        <mat-error *ngIf=\"name.invalid\">{{getNameErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"col\">\n        <mat-label>Description *</mat-label>\n        <textarea matInput\n                  cdkTextareaAutosize\n                  cdkAutosizeMinRows=\"2\"\n                  cdkAutosizeMaxRows=\"5\" [formControl]=\"description\"></textarea>\n        <mat-error *ngIf=\"description.invalid\">{{getDescriptionErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"col-md-6\">\n        <mat-select placeholder=\"Category\" required [formControl]=\"selectedCategory\">\n          <mat-option matInput *ngFor=\"let cat of categories\" [value]=\"cat.value\">\n            {{cat.viewValue}}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"selectedCategory.hasError('required')\">{{getDropdownErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"col-md-6\">\n        <input matInput placeholder=\"Location *\" [formControl]=\"location\">\n        <mat-error *ngIf=\"location.invalid\">{{getLocationErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <br>\n      <h2 mat-dialog-title class=\"col\">Contact information:</h2>\n      <mat-form-field class=\"col-md-4\">\n        <input matInput placeholder=\"Name *\" [formControl]=\"contactName\">\n        <mat-error *ngIf=\"contactName.invalid\">{{getContactNameErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"col-md-4\">\n        <input matInput placeholder=\"Email *\" [formControl]=\"contactEmail\">\n        <mat-error *ngIf=\"contactEmail.invalid\">{{getContactEmailErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"col-md-4\">\n        <span matPrefix>+370 &nbsp;</span>\n        <input matInput placeholder=\"Mobile phone *\" [formControl]=\"contactTelephoneNo\">\n        <mat-error *ngIf=\"contactTelephoneNo.invalid\">{{getContactTelephoneNoErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"col-md-6\">\n        <mat-select placeholder=\"Participation\" required [formControl]=\"selectedParticipationType\">\n          <mat-option matInput *ngFor=\"let part of participationChoices\" [value]=\"part.value\">\n            {{part.viewValue}}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"selectedParticipationType.hasError('required')\">{{getDropdownErrorMessage()}}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-checkbox class=\"col\" *ngIf=\"selectedParticipationType.value === '1'\" (click)=\"assignCaptainToggle($event)\">Assign me as a captain</mat-checkbox>\n      <div *ngIf=\"selectedParticipationType.value === '2'\">\n        <span *ngFor=\"let form of usernameFormControlList\">\n          <mat-form-field class=\"col-md-6\" appearance=\"outline\">\n          <input matInput placeholder=\"Username\" [formControl]=\"form\">\n          <mat-hint>Team member username</mat-hint>\n        </mat-form-field>\n        <mat-icon matSuffix (click)=\"deleteNewUsername(form)\">clear</mat-icon>\n        </span>\n      </div>\n      <button mat-stroked-button *ngIf=\"selectedParticipationType.value === '2'\" (click)=\"addNewUsername()\">Add</button>\n      <br *ngIf=\"selectedParticipationType.value === 'Participate as team'\">\n      <label class=\"col\" *ngIf=\"selectedParticipationType.value === '2'\">You will be automatically assigned as a team captain</label>\n      <section #error>\n        <label class=\"col deeds-registration-dialog-error-message\" *ngIf=\"isErrorPresent\">{{errorMessage}}</label>\n      </section>\n      <!--<label class=\"col deeds-registration-dialog-error-message\" *ngIf=\"isErrorPresent\">{{errorMessage}}</label>-->\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\n      <button mat-raised-button class=\"deed-registration-dialog--register--btn col-center\"(click)=\"save()\">Register</button>\n    </mat-dialog-actions>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dialogs/good-deed-registration/good-deed-registration.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dialogs/good-deed-registration/good-deed-registration.component.ts ***!
  \************************************************************************************/
/*! exports provided: GoodDeedRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodDeedRegistrationComponent", function() { return GoodDeedRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_deed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/deed.service */ "./src/app/services/deed.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_participation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/participation */ "./src/app/models/participation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var GoodDeedRegistrationComponent = /** @class */ (function () {
    function GoodDeedRegistrationComponent(deedService, userService, formBuilder, router, spinner, dialogRef, data) {
        this.deedService = deedService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]);
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1000)]);
        this.location = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]);
        this.contactName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]);
        this.contactEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]);
        this.contactTelephoneNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]{8}')]);
        this.selectedCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.selectedParticipationType = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.categories = [
            { value: 'Help for animals', viewValue: 'Help for animals' },
            { value: 'Help for elderly', viewValue: 'Help for elderly' },
            { value: 'Help for kids', viewValue: 'Help for kids' },
            { value: 'Help for environment', viewValue: 'Help for environment' },
            { value: 'Other', viewValue: 'Other' }
        ];
        this.participationChoices = [
            { value: '0', viewValue: 'Not interested' },
            { value: '1', viewValue: 'Participate as solo' },
            { value: '2', viewValue: 'Participate as team' }
        ];
    }
    GoodDeedRegistrationComponent.prototype.ngOnInit = function () {
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.usernamesFormControl = [];
        this.usernameFormControlList = [];
        this.usernameFormControlList.push(this.usernameFormControl);
        this.getUserByToken();
    };
    GoodDeedRegistrationComponent.prototype.addNewUsername = function () {
        this.usernamesFormControl.push(this.usernameFormControl.value.toString());
        this.usernameFormControlList.forEach(function (form) { return form.disable(); });
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.usernameFormControlList.push(this.usernameFormControl);
    };
    GoodDeedRegistrationComponent.prototype.deleteNewUsername = function (form) {
        this.usernameFormControlList = this.usernameFormControlList.filter(function (existingForm) { return existingForm.value !== form.value; });
        this.usernamesFormControl = this.usernamesFormControl.filter(function (existingUsername) { return existingUsername !== form.value; });
    };
    GoodDeedRegistrationComponent.prototype.getNameErrorMessage = function () {
        return this.name.hasError('required') ? 'You must enter a value' :
            this.name.hasError('maxlength') ? 'Maximum of 75 characters are allowed' :
                '';
    };
    GoodDeedRegistrationComponent.prototype.getDescriptionErrorMessage = function () {
        return this.description.hasError('required') ? 'You must enter a value' :
            this.description.hasError('maxlength') ? 'Maximum of 1000 characters are allowed' :
                '';
    };
    GoodDeedRegistrationComponent.prototype.getLocationErrorMessage = function () {
        return this.location.hasError('required') ? 'You must enter a value' :
            this.location.hasError('maxlength') ? 'Maximum of 50 characters are allowed' :
                '';
    };
    GoodDeedRegistrationComponent.prototype.getDropdownErrorMessage = function () {
        return this.selectedCategory.hasError('required') ? 'You must pick one of the given choices' : '';
    };
    GoodDeedRegistrationComponent.prototype.getContactEmailErrorMessage = function () {
        return this.contactEmail.hasError('required') ? 'You must enter a value' :
            this.contactEmail.hasError('email') ? 'Not a valid email' :
                '';
    };
    GoodDeedRegistrationComponent.prototype.getContactNameErrorMessage = function () {
        return this.contactName.hasError('required') ? 'You must enter a value' :
            this.contactName.hasError('maxlength') ? 'Maximum of 40 characters are allowed' :
                '';
    };
    GoodDeedRegistrationComponent.prototype.getContactTelephoneNoErrorMessage = function () {
        return this.contactTelephoneNo.hasError('required') ? 'You must enter a value' :
            this.contactTelephoneNo.hasError('minlength') ? 'You must enter exactly 8 digits' :
                this.contactTelephoneNo.hasError('maxlength') ? 'You must enter exactly 8 digits' :
                    this.contactTelephoneNo.hasError('pattern') ? 'All characters must be digits' :
                        '';
    };
    GoodDeedRegistrationComponent.prototype.save = function () {
        var _this = this;
        if (this.selectedCategory.valid && this.selectedParticipationType.valid && this.name.valid && this.description.valid
            && this.location.valid && this.contactName.valid && this.contactEmail.valid && this.contactTelephoneNo.valid) {
            this.deed = {
                name: this.name.value,
                description: this.description.value,
                location: this.location.value,
                isClosed: null,
                teamLeadId: this.teamLeadId,
                category: {
                    id: null,
                    name: this.selectedCategory.value
                },
                contact: {
                    name: this.contactName.value,
                    email: this.contactEmail.value,
                    phone: '+370' + this.contactTelephoneNo.value
                },
                participation: this.parseSelectedParticipation(this.selectedParticipationType.value),
                teamUsernames: this.getUsernamesFromDeed()
            };
            if (this.isCaptain) {
                this.deed.teamLeadId = this.teamLeadId;
            }
            else {
                this.deed.teamLeadId = null;
            }
            this.spinner.show();
            this.deedService.createDeed(this.deed).subscribe(function (response) {
                _this.isCaptain = false;
                _this.teamLeadId = null;
                _this.spinner.hide();
                _this.close();
            }, function (error) {
                if (_models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].PARTICIPATE_AS_TEAM.toString() === _this.parseSelectedParticipation(_this.deed.participation)) {
                    _this.setErrorMessage('Incorrect usernames: ' + _this.parseErrorUsernames(error.error));
                    _this.MyProp.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', alignToTop: true });
                    _this.spinner.hide();
                }
                else {
                    _this.setErrorMessage(error.error.message);
                    _this.spinner.hide();
                }
            });
        }
        else {
            return;
        }
    };
    GoodDeedRegistrationComponent.prototype.getUserByToken = function () {
        var _this = this;
        this.userService.getUserByToken().toPromise()
            .then(function (result) {
            if (result) {
                _this.username = result.username;
                _this.teamLeadId = result.id;
            }
        });
    };
    GoodDeedRegistrationComponent.prototype.assignCaptainToggle = function (event) {
        if (!this.isCaptain) {
            this.isCaptain = true;
        }
        else {
            this.isCaptain = false;
        }
    };
    GoodDeedRegistrationComponent.prototype.getUsernamesFromDeed = function () {
        if (this.parseSelectedParticipation(this.selectedParticipationType.value) === _models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].NOT_INTERESTED.toString()) {
            return [];
        }
        else if (this.parseSelectedParticipation(this.selectedParticipationType.value) === _models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].PARTICIPATE_AS_SOLO.toString()) {
            var tempUsername = [];
            this.getUserByToken();
            tempUsername.push(this.username);
            return tempUsername;
        }
        else if (this.parseSelectedParticipation(this.selectedParticipationType.value) === _models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].PARTICIPATE_AS_TEAM.toString()) {
            var tempUsernames = [];
            this.isCaptain = true;
            this.getUserByToken();
            tempUsernames = this.usernamesFormControl;
            tempUsernames.push(this.username);
            return Array.from(new Set(tempUsernames));
        }
    };
    GoodDeedRegistrationComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    GoodDeedRegistrationComponent.prototype.parseSelectedParticipation = function (participation) {
        if (participation === _models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].NOT_INTERESTED.toString()) {
            return _models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].NOT_INTERESTED.toString();
        }
        else if (participation === _models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].PARTICIPATE_AS_SOLO.toString()) {
            return _models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].PARTICIPATE_AS_SOLO.toString();
        }
        else if (participation === _models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].PARTICIPATE_AS_TEAM.toString()) {
            return _models_participation__WEBPACK_IMPORTED_MODULE_6__["Participation"].PARTICIPATE_AS_TEAM.toString();
        }
    };
    GoodDeedRegistrationComponent.prototype.setErrorMessage = function (errorMessage) {
        this.isErrorPresent = true;
        this.errorMessage = errorMessage;
    };
    GoodDeedRegistrationComponent.prototype.parseErrorUsernames = function (usernames) {
        return usernames.join(', ');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('error'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GoodDeedRegistrationComponent.prototype, "MyProp", void 0);
    GoodDeedRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-good-deed-registration',
            template: __webpack_require__(/*! ./good-deed-registration.component.html */ "./src/app/dialogs/good-deed-registration/good-deed-registration.component.html"),
            styles: [__webpack_require__(/*! ./good-deed-registration.component.css */ "./src/app/dialogs/good-deed-registration/good-deed-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deed_service__WEBPACK_IMPORTED_MODULE_4__["DeedService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], GoodDeedRegistrationComponent);
    return GoodDeedRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
            ],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], useValue: {} }, { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"], useValue: '' }]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/constants.ts":
/*!*************************************!*\
  !*** ./src/app/models/constants.ts ***!
  \*************************************/
/*! exports provided: deedTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deedTypes", function() { return deedTypes; });
var deedTypes = {
    HELP_FOR_ELDERLY: 'Help for elderly',
    HELP_FOR_KIDS: 'Help for kids',
    HELP_FOR_ANIMALS: 'Help for animals',
    HELP_FOR_ENVIRONMENT: 'Help for environment',
    OTHER: 'Other'
};


/***/ }),

/***/ "./src/app/models/participation.ts":
/*!*****************************************!*\
  !*** ./src/app/models/participation.ts ***!
  \*****************************************/
/*! exports provided: Participation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Participation", function() { return Participation; });
var Participation;
(function (Participation) {
    Participation[Participation["NOT_INTERESTED"] = 0] = "NOT_INTERESTED";
    Participation[Participation["PARTICIPATE_AS_SOLO"] = 1] = "PARTICIPATE_AS_SOLO";
    Participation[Participation["PARTICIPATE_AS_TEAM"] = 2] = "PARTICIPATE_AS_TEAM";
})(Participation || (Participation = {}));


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep :root {\n  --link-on-navbar-text-hover-color: #00bcd4;\n  --link-on-navbar-to-sign-up-color: #CFD8DC;\n  --link-on-navbar-to-sign-up-hover-color: #B0BEC5;\n}\n\n.layout-wrapper {\n  height: 100%;\n  z-index: 1;\n  position: relative;\n}\n\n.flex-wrapper {\n  height: 100%;\n}\n\nmat-toolbar {\n  position: fixed;\n  top: 0;\n}\n\n.img {\n  width: auto;\n  height: auto;\n  float: left;\n}\n\n.fill-remaining-space {\n  flex: 1 1 auto;\n}\n\na {\n  display: inline-block;\n  padding: 0.3125rem 1.25rem;\n  margin: 0 0.625rem;\n  color: white;\n  font-size: 1.125rem;\n  text-decoration: none;\n}\n\nmat-toolbar a:hover {\n  color: var(--link-on-navbar-text-hover-color);\n}\n\n#link--to-sign-up {\n  background: var(--link-on-navbar-to-sign-up-color);\n  color: black;\n  border: none;\n  border-radius: 0.375rem;\n}\n\n.mat-toolbar.mat-primary {\n   background: black;\n}\n\n#link--to-sign-up:hover {\n  background: var(--link-on-navbar-to-sign-up-hover-color);\n}\n\n.--layout--user-icon {\n  margin-top: 1.2rem;\n  margin-right: 0.5rem;\n  font-size: 2rem;\n}\n\n.--layout--username {\n  margin-right: 1rem;\n  color: white;\n}\n\n.layout-user {\n  display: flex;\n  flex-direction: row;\n}\n\n.get-started {\n  margin-right: 1rem;\n}\n\n.--layout--log-out {\n  margin-top: 0.9rem;\n  border: 0.1rem white solid;\n  margin-bottom: 0.9rem;\n  border-radius: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQTBDO0VBQzFDLDBDQUEwQztFQUMxQyxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtHQUNHLGlCQUFpQjtBQUNwQjs7QUFFQTtFQUNFLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIDpyb290IHtcbiAgLS1saW5rLW9uLW5hdmJhci10ZXh0LWhvdmVyLWNvbG9yOiAjMDBiY2Q0O1xuICAtLWxpbmstb24tbmF2YmFyLXRvLXNpZ24tdXAtY29sb3I6ICNDRkQ4REM7XG4gIC0tbGluay1vbi1uYXZiYXItdG8tc2lnbi11cC1ob3Zlci1jb2xvcjogI0IwQkVDNTtcbn1cblxuLmxheW91dC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mbGV4LXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59XG5cbi5pbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMzEyNXJlbSAxLjI1cmVtO1xuICBtYXJnaW46IDAgMC42MjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5tYXQtdG9vbGJhciBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWxpbmstb24tbmF2YmFyLXRleHQtaG92ZXItY29sb3IpO1xufVxuXG4jbGluay0tdG8tc2lnbi11cCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpbmstb24tbmF2YmFyLXRvLXNpZ24tdXAtY29sb3IpO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuI2xpbmstLXRvLXNpZ24tdXA6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saW5rLW9uLW5hdmJhci10by1zaWduLXVwLWhvdmVyLWNvbG9yKTtcbn1cblxuLi0tbGF5b3V0LS11c2VyLWljb24ge1xuICBtYXJnaW4tdG9wOiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi4tLWxheW91dC0tdXNlcm5hbWUge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxheW91dC11c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmdldC1zdGFydGVkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uLS1sYXlvdXQtLWxvZy1vdXQge1xuICBtYXJnaW4tdG9wOiAwLjlyZW07XG4gIGJvcmRlcjogMC4xcmVtIHdoaXRlIHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAwLjlyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n  <div fxFlex=\"100%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n    <ng-content></ng-content>\n  </div>\n  <mat-toolbar color=\"primary\">\n    <div class=\"logo\">\n      <a class=\"navbar-item\" href=\"\">\n        <img src=\"assets/img/logo3.png\">\n      </a>\n    </div>\n    <div>\n      <a href=\"\" routerLink=\"/home\">Home</a>\n      <a href=\"\" routerLink=\"/deeds\">Deeds</a>\n      <a href=\"\" routerLink=\"/blog\">Blog</a>\n    </div>\n    <span class=\"fill-remaining-space\"></span>\n    <div>\n      <div *ngIf=\"!userService.user\">\n        <a routerLink=\"/login\">Log In</a>\n        <a class = \"get-started\" routerLink=\"/registration\">Get Started</a>\n      </div>\n      <div *ngIf=\"userService.user\" class=\"layout-user\">\n        <mat-icon class=\"--layout--user-icon\">person_outline</mat-icon>\n        <p class=\"--layout--username\">{{userService.user.username}}</p>\n        <a class=\"--layout--log-out\" routerLink=\"/home\" (click)=\"logOut()\">Log out</a>\n      </div>\n    </div>\n  </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService) {
        this.userService = userService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isUserLoggedIn().then(function (result) {
            _this.userService.getUserDetails().then(function (userResult) {
            });
        });
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        window.location.reload();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/blog/blog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-page-card {\n  max-width: 700px;\n  margin-top:  3rem;\n  justify-content: center;\n  justify-self: center;\n}\n\n.blog-page-avatar {\n  background-size: cover;\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n}\n\n.blog-page-wrapper {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.blog-page-title {\n  margin-top: 0.5rem;\n}\n\n.blog-page-text {\n  word-wrap: normal;\n  white-space: pre-wrap;\n}\n\n.blog-page-add-btn {\n  color: black;\n  border: none;\n  font-size: var(--reg-font-size-const);\n  background-color: var(--landing-page-btn-bg-color);\n  border-radius: 0.375rem;\n  display: flex;\n  margin-top: 5rem;\n  margin-left: 12rem;\n}\n\n.blog-page-image {\n  background-size: cover;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsa0RBQWtEO0VBQ2xELHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctcGFnZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luLXRvcDogIDNyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmJsb2ctcGFnZS1hdmF0YXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmJsb2ctcGFnZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJsb2ctcGFnZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLmJsb2ctcGFnZS10ZXh0IHtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmJsb2ctcGFnZS1hZGQtYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tcmVnLWZvbnQtc2l6ZS1jb25zdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhbmRpbmctcGFnZS1idG4tYmctY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEycmVtO1xufVxuXG4uYmxvZy1wYWdlLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/blog/blog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button class=\"blog-page-add-btn\" (click)=\"addPost()\">New Post</button>\n<div class=\"blog-page-wrapper\">\n  <mat-card class=\"blog-page-card\" *ngFor=\"let post of blogPosts\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"blog-page-avatar\">\n        <mat-icon>face</mat-icon>\n      </div>\n      <mat-card-title class=\"blog-page-title\">{{post.user.username}}</mat-card-title>\n    </mat-card-header>\n    <!--<img class=\"blog-page-image\" [src]=\"photoUrls[0]\">-->\n    <img mat-card-image class=\"blog-page-image\" [src]=\"post.imageString\">\n    <mat-card-content>\n      <p class=\"blog-page-text\">{{post.blogText}}</p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button (click)=\"editPost(post)\">EDIT</button>\n      <button mat-button (click)=\"deletePost(post)\">DELETE</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _dialogs_blog_registration_blog_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/blog-registration/blog-registration.component */ "./src/app/dialogs/blog-registration/blog-registration.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");








var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogService, dialogService, sanitizer, userService) {
        this.blogService = blogService;
        this.dialogService = dialogService;
        this.sanitizer = sanitizer;
        this.userService = userService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.photoUrls = [];
        this.getAllBlogPosts();
    };
    BlogComponent.prototype.editPost = function (post) {
    };
    BlogComponent.prototype.deletePost = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('labas');
                console.log(this.userService.user);
                if (this.userService.user === undefined) {
                    console.log('kassss');
                    this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], { description: 'Please log in' });
                    return [2 /*return*/];
                }
                if (post.user.id !== this.userService.user.id) {
                    console.log('kassss');
                    this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], { description: 'You can only delete your own posts' });
                    return [2 /*return*/];
                }
                this.blogService.deleteBlogPost(post.id).then(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.getAllBlogPosts()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (error) {
                });
                return [2 /*return*/];
            });
        });
    };
    BlogComponent.prototype.getAllBlogPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.blogService.getAllBlogPosts().then(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _i, _a, blogPost;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                        this.blogPosts = result;
                        for (_i = 0, _a = this.blogPosts; _i < _a.length; _i++) {
                            blogPost = _a[_i];
                            // await this.photoUrls.push(this.sanitizer.bypassSecurityTrustUrl(this.imageBytesToString(blogPost)));
                            blogPost.imageString = this.sanitizer.bypassSecurityTrustUrl(this.imageBytesToString(blogPost));
                        }
                        return [2 /*return*/];
                    });
                }); }, function (error) {
                });
                return [2 /*return*/];
            });
        });
    };
    BlogComponent.prototype.postBlogPost = function () {
    };
    BlogComponent.prototype.updateBlogPost = function () {
    };
    BlogComponent.prototype.imageBytesToString = function (post) {
        return this.blogService.imageBytesToString(post.imageBytes);
    };
    BlogComponent.prototype.addPost = function () {
        var _this = this;
        if (this.userService.user === undefined) {
            console.log('kassss');
            this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], { description: 'Please log in' });
            return;
        }
        var dialogRef = this.dialogService.openDialog(_dialogs_blog_registration_blog_registration_component__WEBPACK_IMPORTED_MODULE_4__["BlogRegistrationComponent"], {});
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getAllBlogPosts();
        });
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/pages/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/pages/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/pages/deed-model-display/deed-model-display.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/deed-model-display/deed-model-display.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep :root {\n  --landing-page-btn-bg-color: #CFD8DC;\n  --landing-page-btn-bg-hover-color: #B0BEC5;\n  --reg-font-size: 1.125rem;\n  --deeds-page--mat-divider-color: #3f51b5;\n}\n\n.col-center {\n  float: none;\n  margin: 0 auto;\n}\n\n.mat-expansion-panel-header-title {\n  margin-left: 6rem;\n}\n\n.mat-divider {\n  margin-left: 0rem;\n  margin-right: 12rem;\n  border-color: var(--deeds-page--mat-divider-color);\n  border-top-width: 0.09rem;\n  margin-top: 1rem;\n}\n\n.deeds-page--contact--header {\n  font-size: large;\n}\n\n.deeds-page--title--header {\n  font-size: large;\n}\n\n.mat-expansion-panel-header-title {\n  flex-basis: 0;\n}\n\n.deeds-page--title--header--item {\n  flex-basis: 0;\n}\n\n.deeds-page--title--header--location {\n  flex-basis: 0;\n  max-width: 10%;\n}\n\n.mat-expansion-panel-header-description, .mat-expansion-panel-header-title {\n  flex-basis: 0;\n}\n\n.deeds-page--title--header--icon {\n  flex-basis: 0;\n  position: static;\n  justify-content: flex-end;\n  max-width: 4rem;\n}\n\n.deeds--page--deed--field {\n  margin-left: 2rem;\n  word-break: break-all;\n  width: 80%;\n}\n\n.deeds--page--deed--btn {\n  margin: 0.5rem;\n  min-width: 10rem;\n  display: flex;\n  flex-direction: column;\n  color: black;\n  border: none;\n  font-size: var(--reg-font-size-const);\n  background-color: var(--landing-page-btn-bg-color);\n  border-radius: 0.375rem;\n}\n\n.deeds--page--participate--btn-wrapper {\n  display: flex;\n  float: right;\n}\n\n.mat-tab-label-content {\n  font-size: large;\n}\n\n.mat-expansion-panel-header {\n  background-color: var(--landing-page-btn-bg-color);\n}\n\n.deeds-page-title--status {\n  width: 4rem;\n}\n\n.deeds-page--header {\n  flex-basis: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVlZC1tb2RlbC1kaXNwbGF5L2RlZWQtbW9kZWwtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtEQUFrRDtFQUNsRCx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsa0RBQWtEO0VBQ2xELHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZWVkLW1vZGVsLWRpc3BsYXkvZGVlZC1tb2RlbC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgOnJvb3Qge1xuICAtLWxhbmRpbmctcGFnZS1idG4tYmctY29sb3I6ICNDRkQ4REM7XG4gIC0tbGFuZGluZy1wYWdlLWJ0bi1iZy1ob3Zlci1jb2xvcjogI0IwQkVDNTtcbiAgLS1yZWctZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgLS1kZWVkcy1wYWdlLS1tYXQtZGl2aWRlci1jb2xvcjogIzNmNTFiNTtcbn1cblxuLmNvbC1jZW50ZXIge1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiA2cmVtO1xufVxuXG4ubWF0LWRpdmlkZXIge1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMnJlbTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kZWVkcy1wYWdlLS1tYXQtZGl2aWRlci1jb2xvcik7XG4gIGJvcmRlci10b3Atd2lkdGg6IDAuMDlyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5kZWVkcy1wYWdlLS1jb250YWN0LS1oZWFkZXIge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uZGVlZHMtcGFnZS0tdGl0bGUtLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5kZWVkcy1wYWdlLS10aXRsZS0taGVhZGVyLS1pdGVtIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmRlZWRzLXBhZ2UtLXRpdGxlLS1oZWFkZXItLWxvY2F0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbiAgbWF4LXdpZHRoOiAxMCU7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmRlZWRzLXBhZ2UtLXRpdGxlLS1oZWFkZXItLWljb24ge1xuICBmbGV4LWJhc2lzOiAwO1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXgtd2lkdGg6IDRyZW07XG59XG5cbi5kZWVkcy0tcGFnZS0tZGVlZC0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3aWR0aDogODAlO1xufVxuXG4uZGVlZHMtLXBhZ2UtLWRlZWQtLWJ0biB7XG4gIG1hcmdpbjogMC41cmVtO1xuICBtaW4td2lkdGg6IDEwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiB2YXIoLS1yZWctZm9udC1zaXplLWNvbnN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGFuZGluZy1wYWdlLWJ0bi1iZy1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuXG4uZGVlZHMtLXBhZ2UtLXBhcnRpY2lwYXRlLS1idG4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm1hdC10YWItbGFiZWwtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhbmRpbmctcGFnZS1idG4tYmctY29sb3IpO1xufVxuXG4uZGVlZHMtcGFnZS10aXRsZS0tc3RhdHVzIHtcbiAgd2lkdGg6IDRyZW07XG59XG5cbi5kZWVkcy1wYWdlLS1oZWFkZXIge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/deed-model-display/deed-model-display.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/deed-model-display/deed-model-display.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion class=\"container\">\n  <mat-expansion-panel>\n  <mat-expansion-panel-header class=\"deeds-page--title--header\">\n    <mat-panel-title class=\"deeds-page--title--header--item\">\n      {{deed.name}}\n    </mat-panel-title>\n    <mat-panel-description class=\"deeds-page--title--header--location\">\n      <mat-icon>place</mat-icon>\n      {{deed.location}}\n    </mat-panel-description>\n    <mat-panel-description class=\"deeds-page--title--header--icon\">\n      <mat-icon *ngIf=\"deed.category.name === this.deedTypes.HELP_FOR_ELDERLY\">supervised_user_circle</mat-icon>\n      <mat-icon *ngIf=\"deed.category.name === this.deedTypes.HELP_FOR_KIDS\">child_care</mat-icon>\n      <mat-icon *ngIf=\"deed.category.name === this.deedTypes.HELP_FOR_ANIMALS\">pets</mat-icon>\n      <mat-icon *ngIf=\"deed.category.name === this.deedTypes.HELP_FOR_ENVIRONMENT\">nature_people</mat-icon>\n      <mat-icon *ngIf=\"deed.category.name === this.deedTypes.OTHER\">more-horiz</mat-icon>\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n  <mat-list>\n    <mat-list-item class=\"deeds-page--contact--header\">\n      <mat-icon>description</mat-icon>\n      Description:\n    </mat-list-item>\n    <mat-list-item class=\"deeds--page--deed--field\">\n      {{deed.description}}\n    </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item class=\"deeds-page--contact--header\">\n      <mat-icon>place</mat-icon>\n      Location:\n    </mat-list-item>\n    <mat-list-item class=\"deeds--page--deed--field\">\n      {{deed.location}}\n    </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item class=\"deeds-page--contact--header\">\n      <mat-icon>call</mat-icon>\n      Contact information:\n    </mat-list-item>\n    <mat-list-item class=\"deeds--page--deed--field\">Name: {{deed.contact.name}}</mat-list-item>\n    <mat-list-item class=\"deeds--page--deed--field\">Email: {{deed.contact.email}}</mat-list-item>\n    <mat-list-item class=\"deeds--page--deed--field\">Phone number: {{deed.contact.phone}}</mat-list-item>\n\n    <mat-divider></mat-divider>\n\n    <mat-list-item class=\"deeds-page--contact--header\">\n      <mat-icon>people</mat-icon>\n      Participants:\n    </mat-list-item>\n    <mat-list-item *ngFor=\"let user of deed.users\"\n                   class=\"deeds--page--deed--field\">\n      {{user.username}}\n    </mat-list-item>\n    <mat-list-item class=\"deeds-page--contact--header\" *ngIf=\"deed.teamLeadId !== null\">\n      <mat-icon>stars</mat-icon>\n      Team lead: &nbsp;\n      <div *ngFor=\"let user of deed.users\">\n        <div *ngIf=\"user.id === deed.teamLeadId\"\n             [ngStyle]=\"{'color' : deed.teamLeadId === user.id ? '#3f51b5' : 'black'}\">\n          {{user.username}}\n        </div>\n      </div>\n    </mat-list-item>\n    <div class=\"deeds--page--participate--btn-wrapper\">\n      <button mat-raised-button class=\"deeds--page--deed--btn\" (click)=\"registerSolo(deed)\"\n              *ngIf=\"!deed.closed\">Participate as solo\n      </button>\n      <button mat-raised-button class=\"deeds--page--deed--btn\" (click)=\"openTeamRegistration(deed)\"\n              *ngIf=\"!deed.closed && deed.participation !== 'PARTICIPATE_AS_SOLO'\">Participate as\n        team\n      </button>\n      <label *ngIf=\"deed.closed\">Deed is closed for registration</label>\n    </div>\n  </mat-list>\n  </mat-expansion-panel>\n</mat-accordion>\n\n"

/***/ }),

/***/ "./src/app/pages/deed-model-display/deed-model-display.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/deed-model-display/deed-model-display.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeedModelDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeedModelDisplayComponent", function() { return DeedModelDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/constants */ "./src/app/models/constants.ts");



var DeedModelDisplayComponent = /** @class */ (function () {
    function DeedModelDisplayComponent() {
        this.registerSoloEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.registerTeamEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DeedModelDisplayComponent.prototype.ngOnInit = function () {
        this.deedTypes = _models_constants__WEBPACK_IMPORTED_MODULE_2__["deedTypes"];
    };
    DeedModelDisplayComponent.prototype.registerSolo = function (deed) {
        this.registerSoloEvent.emit(deed);
    };
    DeedModelDisplayComponent.prototype.openTeamRegistration = function (deed) {
        this.registerTeamEvent.emit(deed);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeedModelDisplayComponent.prototype, "deed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeedModelDisplayComponent.prototype, "registerSoloEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeedModelDisplayComponent.prototype, "registerTeamEvent", void 0);
    DeedModelDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deed-model-display, [app-deed-model-display]',
            template: __webpack_require__(/*! ./deed-model-display.component.html */ "./src/app/pages/deed-model-display/deed-model-display.component.html"),
            styles: [__webpack_require__(/*! ./deed-model-display.component.css */ "./src/app/pages/deed-model-display/deed-model-display.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeedModelDisplayComponent);
    return DeedModelDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/deeds/deeds.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/deeds/deeds.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep :root {\n  --landing-page-btn-bg-color: #CFD8DC;\n  --landing-page-btn-bg-hover-color: #B0BEC5;\n  --reg-font-size: 1.125rem;\n  --deeds-page--mat-divider-color: #3f51b5;\n}\n\n.blog-page-add-btn {\n  color: black;\n  border: none;\n  font-size: var(--reg-font-size-const);\n  background-color: var(--landing-page-btn-bg-color);\n  border-radius: 0.375rem;\n  display: flex;\n  margin-top: 5rem;\n  margin-left: 12rem;\n}\n\n.tab-good-deeds {\n  display: flex;\n  margin-top: 2rem;\n  justify-content: center;\n}\n\n.mat-tab-group {\n  margin-bottom: 48px;\n  width: 75%;\n  visibility: inherit;\n  position: relative;\n  z-index: 0;\n}\n\n.add-deed-btn:hover {\n  background: var(--landing-page-btn-bg-hover-color);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVlZHMvZGVlZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQywwQ0FBMEM7RUFDMUMseUJBQXlCO0VBQ3pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLGtEQUFrRDtFQUNsRCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZWVkcy9kZWVkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIDpyb290IHtcbiAgLS1sYW5kaW5nLXBhZ2UtYnRuLWJnLWNvbG9yOiAjQ0ZEOERDO1xuICAtLWxhbmRpbmctcGFnZS1idG4tYmctaG92ZXItY29sb3I6ICNCMEJFQzU7XG4gIC0tcmVnLWZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIC0tZGVlZHMtcGFnZS0tbWF0LWRpdmlkZXItY29sb3I6ICMzZjUxYjU7XG59XG5cbi5ibG9nLXBhZ2UtYWRkLWJ0biB7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLXJlZy1mb250LXNpemUtY29uc3QpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYW5kaW5nLXBhZ2UtYnRuLWJnLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIG1hcmdpbi1sZWZ0OiAxMnJlbTtcbn1cblxuLnRhYi1nb29kLWRlZWRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtdGFiLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgd2lkdGg6IDc1JTtcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuXG4uYWRkLWRlZWQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGFuZGluZy1wYWdlLWJ0bi1iZy1ob3Zlci1jb2xvcik7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/deeds/deeds.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/deeds/deeds.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button class=\"blog-page-add-btn\" (click)=\"addNewDeed()\">Register New Deed</button>\n<ngx-spinner type=\"square-jelly-box\"></ngx-spinner>\n<div class=\"tab-good-deeds\">\n  <mat-tab-group mat-align-tabs=\"center\">\n    <mat-tab label=\"All good deeds\">\n      <span *ngFor=\"let deed of deeds\">\n        <span app-deed-model-display [deed]=\"deed\" (registerSoloEvent)=\"registerSolo($event)\" (registerTeamEvent)=\"openTeamRegistration($event)\"></span>\n      </span>\n    </mat-tab>\n    <mat-tab label=\"Active good deeds\">\n      <span *ngFor=\"let deed of deeds\">\n        <span app-deed-model-display [deed]=\"deed\" *ngIf=\"!deed.closed\" (registerSoloEvent)=\"registerSolo($event)\" (registerTeamEvent)=\"openTeamRegistration($event)\"></span>\n      </span>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/deeds/deeds.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/deeds/deeds.component.ts ***!
  \************************************************/
/*! exports provided: DeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeedsComponent", function() { return DeedsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_deed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/deed.service */ "./src/app/services/deed.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialogs/error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");
/* harmony import */ var _dialogs_good_deed_registration_good_deed_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dialogs/good-deed-registration/good-deed-registration.component */ "./src/app/dialogs/good-deed-registration/good-deed-registration.component.ts");
/* harmony import */ var _dialogs_deeds_team_registration_team_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dialogs/deeds-team-registration/team-registration.component */ "./src/app/dialogs/deeds-team-registration/team-registration.component.ts");
/* harmony import */ var _dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dialogs/confirmation-dialog/confirmation-dialog.component */ "./src/app/dialogs/confirmation-dialog/confirmation-dialog.component.ts");











var DeedsComponent = /** @class */ (function () {
    function DeedsComponent(deedService, dialogService, userService, spinner, data) {
        this.deedService = deedService;
        this.dialogService = dialogService;
        this.userService = userService;
        this.spinner = spinner;
    }
    DeedsComponent.prototype.ngOnInit = function () {
        this.getAllDeeds();
    };
    DeedsComponent.prototype.getAllDeeds = function () {
        var _this = this;
        this.spinner.show();
        this.deedService.getAllDeeds().subscribe(function (response) {
            _this.deeds = response;
            _this.deeds = _this.deeds.reverse();
            _this.hideSpinner();
        }, function (error) {
            _this.spinner.hide();
        });
    };
    DeedsComponent.prototype.openTeamRegistration = function (deed) {
        var _this = this;
        if (this.userService.isLoggedIn) {
            var dialogRef = this.dialogService.openDialog(_dialogs_deeds_team_registration_team_registration_component__WEBPACK_IMPORTED_MODULE_9__["TeamRegistrationComponent"], { goodDeed: deed });
            dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.spinner.show();
                            return [4 /*yield*/, this.deedService.getAllDeeds().toPromise().then(function (response) {
                                    _this.deeds = response;
                                    _this.deeds = _this.deeds.reverse();
                                    _this.hideSpinner();
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], { description: 'Please log in!' });
        }
    };
    DeedsComponent.prototype.addNewDeed = function () {
        var _this = this;
        if (this.userService.isLoggedIn) {
            var dialogRef = this.dialogService.openDialog(_dialogs_good_deed_registration_good_deed_registration_component__WEBPACK_IMPORTED_MODULE_8__["GoodDeedRegistrationComponent"], { deedList: this.deeds });
            dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _this = this;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.spinner.show();
                            return [4 /*yield*/, this.deedService.getAllDeeds().toPromise().then(function (response) {
                                    _this.deeds = response;
                                    _this.deeds = _this.deeds.reverse();
                                    _this.hideSpinner();
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], { description: 'Please log in!' });
        }
    };
    DeedsComponent.prototype.registerSolo = function (deed) {
        var _this = this;
        if (!this.userService.isLoggedIn) {
            this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], { description: 'Please log in!' });
            return;
        }
        this.spinner.show();
        this.userService.getUserByToken().toPromise().then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _i, _a, user, dialogRef;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                if (res) {
                    this.user = res;
                    for (_i = 0, _a = deed.users; _i < _a.length; _i++) {
                        user = _a[_i];
                        if (user.username === this.user.username) {
                            this.hideSpinner();
                            this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], { description: 'You are already registered to this deed!' });
                            return [2 /*return*/];
                        }
                    }
                    dialogRef = this.dialogService.openDialog(_dialogs_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogComponent"], { goodDeed: deed, registeredUser: this.user });
                    dialogRef.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var _this = this;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.spinner.show();
                                    return [4 /*yield*/, this.deedService.getAllDeeds().toPromise().then(function (response) {
                                            _this.deeds = response;
                                            _this.deeds = _this.deeds.reverse();
                                            _this.hideSpinner();
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ErrorDialogComponent"], { description: error.error.message });
        });
        this.hideSpinner();
    };
    DeedsComponent.prototype.hideSpinner = function () {
        var _this = this;
        setTimeout(function () {
            _this.spinner.hide();
        }, 500);
    };
    DeedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deeds',
            template: __webpack_require__(/*! ./deeds.component.html */ "./src/app/pages/deeds/deeds.component.html"),
            styles: [__webpack_require__(/*! ./deeds.component.css */ "./src/app/pages/deeds/deeds.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deed_service__WEBPACK_IMPORTED_MODULE_2__["DeedService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], Object])
    ], DeedsComponent);
    return DeedsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep :root {\n  --landing-page-btn-bg-color: #CFD8DC;\n  --landing-page-btn-bg-hover-color: #B0BEC5;\n  --reg-font-size-const: 1.125rem;\n}\n\n#section--description {\n  background-image: url(\"/assets/img/bgtest.jpg\");\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  padding-top: 4.4rem;\n  justify-content: space-between;\n  flex-direction: column;\n  display: flex;\n}\n\n.description--cta-text {\n  margin-top: 3.125rem;\n  color: white;\n  text-align: center;\n  font-size: var(--reg-font-size-const);\n  padding-top: 2.5rem;\n}\n\n.landing-page-btn {\n  color: black;\n  border: none;\n  padding: 0.9rem;\n  font-size: var(--reg-font-size-const);\n  background-color: var(--landing-page-btn-bg-color);\n  border-radius: 0.375rem;\n  display: flex;\n  margin: 1.5rem auto 3.125rem;\n}\n\n.landing-page-btn:hover {\n  background: var(--landing-page-btn-bg-hover-color);\n}\n\n#section--statistics {\n  background: white;\n  height: 100vh;\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsMENBQTBDO0VBQzFDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLGtEQUFrRDtFQUNsRCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgOnJvb3Qge1xuICAtLWxhbmRpbmctcGFnZS1idG4tYmctY29sb3I6ICNDRkQ4REM7XG4gIC0tbGFuZGluZy1wYWdlLWJ0bi1iZy1ob3Zlci1jb2xvcjogI0IwQkVDNTtcbiAgLS1yZWctZm9udC1zaXplLWNvbnN0OiAxLjEyNXJlbTtcbn1cblxuI3NlY3Rpb24tLWRlc2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYmd0ZXN0LmpwZ1wiKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNC40cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kZXNjcmlwdGlvbi0tY3RhLXRleHQge1xuICBtYXJnaW4tdG9wOiAzLjEyNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tcmVnLWZvbnQtc2l6ZS1jb25zdCk7XG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG59XG5cbi5sYW5kaW5nLXBhZ2UtYnRuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbiAgZm9udC1zaXplOiB2YXIoLS1yZWctZm9udC1zaXplLWNvbnN0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGFuZGluZy1wYWdlLWJ0bi1iZy1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEuNXJlbSBhdXRvIDMuMTI1cmVtO1xufVxuXG4ubGFuZGluZy1wYWdlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxhbmRpbmctcGFnZS1idG4tYmctaG92ZXItY29sb3IpO1xufVxuXG4jc2VjdGlvbi0tc3RhdGlzdGljcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <section id=\"section--description\">\n    <div>\n      <p class=\"description--cta-text\">Description about good summer deeds.</p>\n    </div>\n    <div>\n      <button class=\"landing-page-btn\" (click)=\"scrollToStatistics()\">Learn more</button>\n    </div>\n  </section>\n  <section #statistics id=\"section--statistics\">\n    <div>\n      <p>There must be statistics</p>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.scrollToStatistics = function () {
        this.MyProp.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', alignToTop: true });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('statistics'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "MyProp", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep :root {\n  --link--sign-up-page--text-color: #459fed;\n  --log-in-btn-color: #3899ec;\n  --reg-font-size-const: 1.125rem;\n}\n\na {\n   color: var(--link--sign-up-page--text-color);\n   text-decoration: none;\n }\n\n.log-in-page--container {\n  display: block;\n  text-align: center;\n  font-size: 2.2rem;\n}\n\n.log-in-page--header--title {\n  padding-top: 6.25rem;\n}\n\n.log-in-page--header--registration-paragraph {\n  font-size: var(--reg-font-size-const);\n}\n\n.col-center {\n  float: none;\n  margin: 0 auto;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.log-in-page--log-in--btn {\n  width: 3.125rem;\n  color: var(--log-in-btn-color);\n  box-shadow: inset 0 0 0 0.0625rem var(--log-in-btn-color);\n}\n\n.mat-raised-button {\n  min-width: 5.625rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztFQUN6QywyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0dBQ0csNENBQTRDO0dBQzVDLHFCQUFxQjtDQUN2Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgOnJvb3Qge1xuICAtLWxpbmstLXNpZ24tdXAtcGFnZS0tdGV4dC1jb2xvcjogIzQ1OWZlZDtcbiAgLS1sb2ctaW4tYnRuLWNvbG9yOiAjMzg5OWVjO1xuICAtLXJlZy1mb250LXNpemUtY29uc3Q6IDEuMTI1cmVtO1xufVxuXG5hIHtcbiAgIGNvbG9yOiB2YXIoLS1saW5rLS1zaWduLXVwLXBhZ2UtLXRleHQtY29sb3IpO1xuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuIH1cblxuLmxvZy1pbi1wYWdlLS1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLmxvZy1pbi1wYWdlLS1oZWFkZXItLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDYuMjVyZW07XG59XG5cbi5sb2ctaW4tcGFnZS0taGVhZGVyLS1yZWdpc3RyYXRpb24tcGFyYWdyYXBoIHtcbiAgZm9udC1zaXplOiB2YXIoLS1yZWctZm9udC1zaXplLWNvbnN0KTtcbn1cblxuLmNvbC1jZW50ZXIge1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nLWluLXBhZ2UtLWxvZy1pbi0tYnRuIHtcbiAgd2lkdGg6IDMuMTI1cmVtO1xuICBjb2xvcjogdmFyKC0tbG9nLWluLWJ0bi1jb2xvcik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAuMDYyNXJlbSB2YXIoLS1sb2ctaW4tYnRuLWNvbG9yKTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA1LjYyNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"log-in-page--container\">\n  <h2 class=\"log-in-page--header--title\">Log in</h2>\n  <p class=\"log-in-page--header--registration-paragraph\">New to Good summer deeds? <a routerLink=\"/registration\">Sign up</a></p>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4 offset-md-4\">\n    <mat-form-field>\n    <input matInput placeholder=\"Enter your username\" [formControl]=\"username\">\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n      <input matInput placeholder=\"Enter your password\" [type]=\"!hide2 ? 'password' : 'text'\" [formControl]=\"password\">\n      <mat-icon matSuffix (click)=\"hide2 = !hide2\">{{!hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </mat-form-field>\n    <br>\n    <div class=\"row\">\n      <button mat-raised-button class=\"log-in-page--log-in--btn col-md-2 col-center\" (click)=\"loginUser()\">Log in</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, dialogService, router) {
        this.userService = userService;
        this.dialogService = dialogService;
        this.router = router;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.hide2 = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fetchedUsername, fetchedPassword;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                fetchedUsername = this.username.value;
                fetchedPassword = this.password.value;
                if (fetchedUsername === '' && fetchedPassword === '') {
                    this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ErrorDialogComponent"], { description: 'Input fields are empty, use your username and password to log in' });
                    return [2 /*return*/];
                }
                this.user = {
                    username: fetchedUsername,
                    passwordHash: fetchedPassword,
                    teamLead: false
                };
                this.userService.authenticateUser(this.user).then(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.authToken = response.token;
                                localStorage.setItem('token', this.authToken);
                                return [4 /*yield*/, this.getUserDetails()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.isUserLoggedIn()];
                            case 2:
                                _a.sent();
                                this.router.navigate(['home']);
                                return [2 /*return*/];
                        }
                    });
                }); }, function (error) {
                    _this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ErrorDialogComponent"], { description: _this.dialogService.checkForError(error.error.message) });
                });
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.getUserDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserDetails()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.isUserLoggedIn = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.isUserLoggedIn()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/registration/registration.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep :root {\n  --link--log-in-page--text-color: #459fed;\n  --sign-up-btn-color: #3899ec;\n  --reg-font-size-const: 1.125rem;\n}\n\na {\n  color: var(--link--log-in-page--text-color);\n  text-decoration: none;\n}\n\n.registration-page--container {\n  display: block;\n  text-align: center;\n  font-size: 2.2rem;\n}\n\n.registration-page--header--title {\n  padding-top: 6.25rem;\n}\n\n.registration-page--header--log-in-paragraph {\n  font-size: var(--reg-font-size-const);\n}\n\n.col-center {\n  float: none;\n  margin: 0 auto;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.registration-page--sign-up--btn {\n  width: 3.125rem;\n  color: var(--sign-up-btn-color);\n  box-shadow: inset 0 0 0 0.0625rem var(--sign-up-btn-color);\n}\n\n.mat-raised-button {\n  min-width: 5.625rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0VBQ3hDLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIDpyb290IHtcbiAgLS1saW5rLS1sb2ctaW4tcGFnZS0tdGV4dC1jb2xvcjogIzQ1OWZlZDtcbiAgLS1zaWduLXVwLWJ0bi1jb2xvcjogIzM4OTllYztcbiAgLS1yZWctZm9udC1zaXplLWNvbnN0OiAxLjEyNXJlbTtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS1saW5rLS1sb2ctaW4tcGFnZS0tdGV4dC1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJlZ2lzdHJhdGlvbi1wYWdlLS1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuLnJlZ2lzdHJhdGlvbi1wYWdlLS1oZWFkZXItLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDYuMjVyZW07XG59XG5cbi5yZWdpc3RyYXRpb24tcGFnZS0taGVhZGVyLS1sb2ctaW4tcGFyYWdyYXBoIHtcbiAgZm9udC1zaXplOiB2YXIoLS1yZWctZm9udC1zaXplLWNvbnN0KTtcbn1cblxuLmNvbC1jZW50ZXIge1xuICBmbG9hdDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVnaXN0cmF0aW9uLXBhZ2UtLXNpZ24tdXAtLWJ0biB7XG4gIHdpZHRoOiAzLjEyNXJlbTtcbiAgY29sb3I6IHZhcigtLXNpZ24tdXAtYnRuLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMC4wNjI1cmVtIHZhcigtLXNpZ24tdXAtYnRuLWNvbG9yKTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA1LjYyNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/registration/registration.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration-page--container\">\n  <h2 class=\"registration-page--header--title\">Sign Up</h2>\n  <p class=\"registration-page--header--log-in-paragraph\">Already have an account? <a routerLink=\"/login\">Log in</a></p>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4 offset-md-4\">\n    <mat-form-field>\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n      <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n      <input matInput placeholder=\"Enter your username\" [formControl]=\"username\" required>\n      <mat-error *ngIf=\"username.invalid\">{{getUsernameErrorMessage()}}</mat-error>\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n      <input matInput placeholder=\"Enter your password\" [type]=\"!hide ? 'password' : 'text'\"\n             [formControl]=\"password\" required>\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{!hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n      <mat-error *ngIf=\"password.invalid\">{{getPasswordErrorMessage()}} </mat-error>\n    </mat-form-field>\n    <br>\n    <mat-form-field>\n      <input matInput placeholder=\"Re-enter your password\" [type]=\"!hide1 ? 'password' : 'text'\" [formControl]=\"passwordConfirm\"\n             required>\n      <mat-error *ngIf=\"passwordConfirm.invalid\">{{getPasswordMatchErrorMessage()}}</mat-error>\n      <mat-icon matSuffix (click)=\"hide1 = !hide1\">{{!hide1 ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </mat-form-field>\n    <br>\n    <div class=\"row\">\n      <button mat-raised-button class=\"registration-page--sign-up--btn col-md-2 col-center\" (click)=\"signUp()\">Sign up</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/registration/registration.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/error-dialog/error-dialog.component */ "./src/app/dialogs/error-dialog/error-dialog.component.ts");







var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(service, router, dialogService) {
        this.service = service;
        this.router = router;
        this.dialogService = dialogService;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]);
        this.passwordConfirm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.hide = false;
        this.hide1 = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    RegistrationComponent.prototype.getUsernameErrorMessage = function () {
        return this.username.hasError('required') ? 'You must enter a value' :
            this.username.hasError('minlength') ? 'Min 5 characters' :
                this.username.hasError('maxlength') ? 'Max 20 characters' :
                    '';
    };
    RegistrationComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('minlength') ? 'Min 7 characters' :
                this.password.hasError('maxlength') ? 'Max 12 characters' :
                    '';
    };
    RegistrationComponent.prototype.getPasswordMatchErrorMessage = function () {
        if (this.passwordConfirm.value !== this.password.value) {
            return 'Passwords must match';
        }
        else {
            return '';
        }
    };
    RegistrationComponent.prototype.signUp = function () {
        var _this = this;
        if (!this.username.valid || !this.password.valid || !this.email.valid || this.password.value !== this.passwordConfirm.value) {
            return;
        }
        this.person = {
            username: this.username.value,
            email: this.email.value,
            passwordHash: this.password.value,
            teamLead: false
        };
        this.service.createUser(this.person).subscribe(function (response) {
            _this.router.navigate(['home']);
            _this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ErrorDialogComponent"], { description: 'Registration successful' });
        }, function (error) {
            _this.dialogService.openDialog(_dialogs_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ErrorDialogComponent"], { description: _this.dialogService.checkForError(error.error.message) });
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/pages/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/pages/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BlogService = /** @class */ (function () {
    function BlogService(http) {
        this.http = http;
        this.baseUri = "https://limitless-eyrie-83209.herokuapp.com/";
    }
    BlogService.prototype.createBlogPost = function (post) {
        return this.http.post(this.baseUri + "api/blog", post).toPromise().then(function (result) {
            return Promise.resolve();
        }, function (error) {
            return Promise.reject(error);
        });
    };
    BlogService.prototype.getAllBlogPosts = function () {
        return this.http.get(this.baseUri + "api/blog").toPromise().then(function (result) {
            return Promise.resolve(result);
        }, function (error) {
            return Promise.reject();
        });
    };
    BlogService.prototype.updateBlogPost = function (post) {
        return this.http.post(this.baseUri + "api/blog", post).toPromise().then(function (result) {
            return Promise.resolve(result);
        }, function (error) {
            return Promise.reject();
        });
    };
    BlogService.prototype.deleteBlogPost = function (id) {
        return this.http.get(this.baseUri + "api/blog/" + id).toPromise().then(function (result) {
            return Promise.resolve(result);
        }, function (error) {
            return Promise.reject();
        });
    };
    BlogService.prototype.imageBytesToString = function (imageBytes) {
        var uints = new Uint8Array(imageBytes);
        var imageString = '';
        // let baseString = btoa(String.fromCharCode.apply(null, uints));
        for (var i = 0; i < uints.length; i++) {
            imageString += String.fromCharCode(uints[i]);
        }
        // return 'data:image/png;base64,' + baseString;
        return 'data:image/png;base64,' + window.btoa(imageString);
    };
    BlogService.prototype.stringToImageBytes = function (imageString) {
        var binaryString = atob(imageString);
        // let bytes = new Uint8Array(binaryString.length);
        // let bytes = new Int8Array(binaryString.length);
        var bytes = [];
        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/services/deed.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/deed.service.ts ***!
  \******************************************/
/*! exports provided: DeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeedService", function() { return DeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DeedService = /** @class */ (function () {
    function DeedService(http) {
        this.http = http;
        this.baseUri = "https://limitless-eyrie-83209.herokuapp.com/";
    }
    DeedService.prototype.createDeed = function (deed) {
        return this.http.post(this.baseUri + "api/deed", deed);
    };
    DeedService.prototype.getTeamLeadId = function (deedId) {
        return this.http.get(this.baseUri + "api/deed/" + deedId);
    };
    DeedService.prototype.updateDeed = function (deed) {
        return this.http.post(this.baseUri + "api/deed/update", deed);
    };
    DeedService.prototype.addUserToDeed = function (user, id) {
        return this.http.post(this.baseUri + "api/deed/add/" + id, user);
    };
    DeedService.prototype.getAllDeeds = function () {
        return this.http.get(this.baseUri + "api/deed");
    };
    DeedService.prototype.deactivateDeed = function (deedId) {
        return this.http.get(this.baseUri + "api/deed/delete/" + deedId);
    };
    DeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DeedService);
    return DeedService;
}());



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
        this.matDialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
    }
    DialogService.prototype.openDialog = function (component, data) {
        this.matDialogConfig.disableClose = true;
        this.matDialogConfig.autoFocus = true;
        this.matDialogConfig.data = data;
        return this.dialog.open(component, this.matDialogConfig);
    };
    DialogService.prototype.checkForError = function (error) {
        var ErrorMessages = ['User does not exist',
            'Password is incorrect',
            'User with this username already exists',
            'User with this email already exists',
            'No team members provided',
            'DeedRequest does not exist'];
        for (var i = 0; i < ErrorMessages.length; i++) {
            if (error === ErrorMessages[i]) {
                return error;
            }
        }
        return 'Something went wrong';
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUri = "https://limitless-eyrie-83209.herokuapp.com/";
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUri + "api/user/create", user);
    };
    UserService.prototype.getUserByToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.get(this.baseUri + "api/user", {
            headers: headers
        });
    };
    UserService.prototype.getUserDetails = function () {
        var _this = this;
        return this.getUserByToken().toPromise().then(function (result) {
            _this.user = result;
        });
    };
    UserService.prototype.getUserByUsername = function (username) {
        return this.http.get(this.baseUri + "api/user/" + username);
    };
    UserService.prototype.authenticateUser = function (user) {
        return this.http.post(this.baseUri + "api/user/auth", user).toPromise().then(function (result) {
            return Promise.resolve(result);
        }, function (error) {
            return Promise.reject(error);
        });
    };
    UserService.prototype.refreshUserToken = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: 'Bearer ' + localStorage.getItem('token')
        });
        return this.http.get(this.baseUri + "api/user/refresh", {
            headers: headers
        });
    };
    UserService.prototype.isUserLoggedIn = function () {
        var _this = this;
        return this.refreshUserToken().toPromise().then(function (res) {
            _this.authToken = res.token;
            localStorage.removeItem('token');
            localStorage.setItem('token', _this.authToken);
            _this.isLoggedIn = true;
            return Promise.resolve();
        }, function (error) {
            _this.isLoggedIn = false;
            _this.user = undefined;
            return Promise.reject();
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/domantas/DragonBallsFront/DragonBallsFront/DragonBallsFront/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map