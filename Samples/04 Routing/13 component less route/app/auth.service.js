"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthService = (function () {
    function AuthService() {
        this.role = "admin";
    }
    AuthService.prototype.isInRole = function (roles) {
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var role = roles_1[_i];
            if (role == this.role) {
                return true;
            }
        }
        if (this.role == "admin") {
            return true;
        }
        return false;
    };
    return AuthService;
}());
exports.AuthService = AuthService;
