export class CommonService {
    static nextId: number = 1;

    id: number;

    constructor() {
        this.id = CommonService.nextId++;

        console.log("CommonService (" + this.id + ")");
    }
}
