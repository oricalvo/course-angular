import {Injectable} from "@angular/core";
import {CommonService} from "../common/common.service";

@Injectable()
export class MainService {
    constructor(commonService: CommonService) {
        console.log("Module1: MainService");
    }
}
