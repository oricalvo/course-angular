import {Injectable} from "@angular/core";
import {CommonService} from "../common/common.service";

@Injectable()
export class LazyService {
    constructor(commonService: CommonService) {
        console.log("LazyService");
    }
}
