(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-extra/about-extra.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-extra/about-extra.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure rem rerum saepe sed sit? Ad adipisci, alias animi architecto beatae blanditiis cum delectus, deserunt dicta eaque est et neque nihil, obcaecati perferendis porro quaerat ratione reiciendis rem repellat similique sunt tempora? Consectetur cupiditate debitis earum hic perspiciatis repudiandae tempora?</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure rem rerum saepe sed sit? Ad adipisci, alias animi architecto beatae blanditiis cum delectus, deserunt dicta eaque est et neque nihil, obcaecati perferendis porro quaerat ratione reiciendis rem repellat similique sunt tempora? Consectetur cupiditate debitis earum hic perspiciatis repudiandae tempora?</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About page</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magnam!</p>\n\n<p>\n  <a [routerLink]=\"['/about', 'extra']\"\n    ><strong>\n      Show more info\n    </strong>\n  </a>\n</p>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <h1>\n    <a routerLink=\"/\">Angular</a>\n  </h1>\n  <ul>\n    <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n      <a routerLink=\"/\">Home</a>\n    </li>\n    <li routerLinkActive=\"active\"><a routerLink=\"/posts\">Posts</a></li>\n    <li routerLinkActive=\"active\"><a routerLink=\"/about\">About</a></li>\n    <li><button class=\"btn\" (click)=\"auth.login()\">Login</button></li>\n    <li><button class=\"btn\" (click)=\"auth.logout()\">Logout</button></li>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <div class=\"card\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error-page/error-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error-page/error-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"color: blueviolet;\">\n  Sorry, not found!!!\n</h2>\n<a routerLink=\"/\">Go to home page <strong>click</strong></a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Home page</h1>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post/post.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post/post.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h1>{{ p.title }}</h1>\n  <p>ID {{ p.id }}</p>\n\n  <div class=\"div\" *ngIf=\"isInput\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"inputValue\" />\n  </div>\n\n  <button class=\"btn\" *ngIf=\"isInput\" (click)=\"submitUpdate()\">\n    Submit update\n  </button>\n\n  <button class=\"btn\" (click)=\"updatePost()\" *ngIf=\"!isInput\">update</button>\n  <button class=\"btn\" (click)=\"removePost()\">delete</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/posts.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Posts page</h1>\n\n<form class=\"form\">\n  <input\n    type=\"text\"\n    placeholder=\"Title...\"\n    class=\"form-control\"\n    name=\"postTitle\"\n    [(ngModel)]=\"postTitle\"\n  />\n  <button class=\"btn\" (click)=\"addPost()\">add post</button>\n</form>\n\n<app-post\n  *ngFor=\"let post of allPosts\"\n  [p]=\"post\"\n  (postId)=\"removePost($event)\"\n  (updateObj)=\"updatePost($event)\"\n></app-post>\n"

/***/ }),

/***/ "./src/app/about-extra/about-extra.component.scss":
/*!********************************************************!*\
  !*** ./src/app/about-extra/about-extra.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWV4dHJhL2Fib3V0LWV4dHJhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-extra/about-extra.component.ts":
/*!******************************************************!*\
  !*** ./src/app/about-extra/about-extra.component.ts ***!
  \******************************************************/
/*! exports provided: AboutExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutExtraComponent", function() { return AboutExtraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutExtraComponent = class AboutExtraComponent {
};
AboutExtraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-extra',
        template: __webpack_require__(/*! raw-loader!./about-extra.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-extra/about-extra.component.html"),
        styles: [__webpack_require__(/*! ./about-extra.component.scss */ "./src/app/about-extra/about-extra.component.scss")]
    })
], AboutExtraComponent);



/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterComponent", function() { return AppRouterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-extra/about-extra.component */ "./src/app/about-extra/about-extra.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        children: [{ path: 'extra', component: _about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_7__["AboutExtraComponent"] }],
    },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'posts/:id', component: _post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"] },
    { path: 'error', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__["ErrorPageComponent"] },
    { path: '**', redirectTo: '/error' },
];
let AppRouterComponent = class AppRouterComponent {
};
AppRouterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRouterComponent);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxJdmFuXFxEZXNrdG9wXFxhbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cblxuIiwicCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-extra/about-extra.component */ "./src/app/about-extra/about-extra.component.ts");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"],
            _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
            _about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_10__["AboutExtraComponent"],
            _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__["ErrorPageComponent"],
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_router_module__WEBPACK_IMPORTED_MODULE_11__["AppRouterComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.isAuthenticated().then(isAuth => {
            if (isAuth) {
                return true;
            }
            else {
                this.router.navigate(['/'], {
                    queryParams: {
                        auth: false,
                    },
                });
            }
        });
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        this.isAuth = false;
    }
    login() {
        this.isAuth = true;
        alert('isAuth  true');
    }
    logout() {
        this.isAuth = false;
        this.router.navigate(['/']);
        alert('isAuth  false');
    }
    isAuthenticated() {
        return new Promise(res => setTimeout(() => {
            res(this.isAuth);
        }, 1000));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/error-page/error-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorPageComponent = class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-page',
        template: __webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/error-page/error-page.component.html"),
        styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/error-page/error-page.component.scss")]
    })
], ErrorPageComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/post/post.component.scss":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/posts/posts.service.ts");




let PostComponent = class PostComponent {
    constructor(route, postsService) {
        this.route = route;
        this.postsService = postsService;
        this.postId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateObj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isInput = false;
        this.inputValue = '';
    }
    ngOnInit() { }
    updatePost() {
        this.isInput = true;
    }
    submitUpdate() {
        this.updateObj.emit(Object.assign({}, this.p, { title: this.inputValue }));
    }
    removePost() {
        this.postId.emit(this.p.id);
    }
};
PostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _posts_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "p", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PostComponent.prototype, "postId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PostComponent.prototype, "updateObj", void 0);
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: __webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/index.js!./src/app/post/post.component.html"),
        styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/post/post.component.scss")]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.service */ "./src/app/posts/posts.service.ts");



let PostsComponent = class PostsComponent {
    constructor(postsService) {
        this.postsService = postsService;
        this.allPosts = [];
        this.postTitle = '';
    }
    ngOnInit() {
        this.getPosts();
    }
    getPosts() {
        this.postsService.getPost().subscribe(posts => (this.allPosts = posts));
    }
    addPost() {
        if (!this.postTitle.trim())
            return;
        this.postsService
            .addPost({
            title: this.postTitle,
            completed: false,
        })
            .subscribe(res => {
            this.allPosts.unshift(res);
            this.postTitle = '';
        });
    }
    removePost(id) {
        this.postsService
            .removePost(id)
            .subscribe(() => (this.allPosts = this.allPosts.filter(p => p.id !== id)));
    }
    updatePost(obj) {
        this.postsService
            .updatePost(obj)
            .subscribe(() => (this.allPosts = this.allPosts.map(p => (p.id === obj.id ? obj : p))));
    }
};
PostsComponent.ctorParameters = () => [
    { type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/posts.component.html"),
        styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PostsService = class PostsService {
    constructor(http) {
        this.http = http;
    }
    getPost() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    }
    addPost(newPost) {
        return this.http.post('https://jsonplaceholder.typicode.com/todos', newPost);
    }
    updatePost(editPost) {
        return this.http.patch(`https://jsonplaceholder.typicode.com/todos/${editPost.id}`, editPost);
    }
    removePost(id) {
        return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PostsService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ivan\Desktop\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map