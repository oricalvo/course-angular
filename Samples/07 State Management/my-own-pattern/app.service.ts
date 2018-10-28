@Injectable()
export class AppService {
    constructor(private appStore: AppStore) {
    }

    @Activity()
    async init() {
        logger.log("init BEGIN");

        logger.log("init END");
    }
}
