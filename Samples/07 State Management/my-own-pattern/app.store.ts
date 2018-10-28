import {AppState, CalendarState, NotificationState, Protocol, ProtocolType, UserState, WidgetType} from './app.state';
import {createLogger} from "../common/logger";

const logger = createLogger("AppStore");

const appStore: AppState = {
    user: null,
};

logger.log(appStore);

type Changes<T> = {
    [P in keyof T]?: Changes<T[P]> | T[P];
};

export function updateStore(changes: Changes<AppState>) {
    updateObject(appStore, changes);
}

export function updateObject(obj, changes: Changes<AppState>) {
    const ops = [];

    for (const key in changes) {
        const value = changes[key];

        if (typeof value == "function") {
            ops.push(() => {
                obj[key] = value(obj[key]);
            });
        }
        else {
            obj[key] = value;
        }
    }

    for (const op of ops) {
        op();
    }
}

export abstract class AppStore implements AppState {
    readonly user: UserState;
}

//
//  Cannot use useValue since Angular duplicates the value
//
export const APP_STORE_PROVIDER = {
    provide: AppStore,
    useFactory: function () {
        return appStore;
    }
};
