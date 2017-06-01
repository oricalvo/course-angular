import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-dialog",
    templateUrl: "./dialog.component.html",
    styleUrls: ["./dialog.component.css"],
    moduleId: module.id,
})
export class DialogComponent {
    showDialog: boolean = true;

    toggleDialog() {
        this.showDialog = !this.showDialog;
    }
}
