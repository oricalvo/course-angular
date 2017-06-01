import {Component} from "@angular/core";

@Component({
    selector: "my-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    moduleId: module.id,
})
export class HomeComponent {
}

@Component({
    selector: "my-home-more",
    template: "<h1>More</h1>",
    moduleId: module.id,
})
export class HomeMoreComponent {
}
