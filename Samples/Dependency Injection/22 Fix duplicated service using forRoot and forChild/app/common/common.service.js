"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonService = (function () {
    function CommonService() {
        this.id = CommonService.nextId++;
        console.log("CommonService (" + this.id + ")");
    }
    return CommonService;
}());
CommonService.nextId = 1;
exports.CommonService = CommonService;
