"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchService = (function () {
    function SearchService() {
        this.filtered = [];
        this.filter = "";
    }
    SearchService.prototype.onChanges = function (all) {
        this.all = all;
        this.apply();
    };
    SearchService.prototype.search = function (filter) {
        this.filter = filter;
        this.apply();
    };
    SearchService.prototype.apply = function () {
        var filter = this.filter.toLowerCase();
        this.filtered = this.all.filter(function (c) { return c.name.toLowerCase().indexOf(filter) != -1; });
    };
    return SearchService;
}());
exports.SearchService = SearchService;
