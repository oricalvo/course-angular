"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log = console.log.bind(console);
// const log = function(...args: any[]) {
// }
var CustomReuseStrategy = (function () {
    function CustomReuseStrategy() {
        this.handlers = {};
    }
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        log('shouldDetach', route);
        return true;
    };
    CustomReuseStrategy.prototype.store = function (route, handle) {
        log('store', route, handle);
        this.handlers[route.routeConfig.path] = handle;
    };
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        log('shouldAttach', route);
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.retrieve = function (route) {
        log('retrieve', route);
        if (!route.routeConfig)
            return null;
        return this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        log('shouldReuseRoute', future, curr);
        return future.routeConfig === curr.routeConfig;
    };
    return CustomReuseStrategy;
}());
exports.CustomReuseStrategy = CustomReuseStrategy;
var CustomReuseStrategy = (function () {
    function CustomReuseStrategy() {
        this.handlers = {};
    }
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        return true;
    };
    CustomReuseStrategy.prototype.store = function (route, handle) {
        this.handlers[route.routeConfig.path] = handle;
    };
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.retrieve = function (route) {
        return this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    return CustomReuseStrategy;
}());
exports.CustomReuseStrategy = CustomReuseStrategy;
