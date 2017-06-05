"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionService = (function () {
    function SelectionService() {
        this.selectedCount = 0;
    }
    SelectionService.prototype.change = function (contact, selected) {
        if (contact.selected == selected) {
            return;
        }
        if (contact.selected = selected) {
            ++this.selectedCount;
        }
        else {
            --this.selectedCount;
        }
    };
    return SelectionService;
}());
exports.SelectionService = SelectionService;
