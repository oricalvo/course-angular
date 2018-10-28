import {updateObject, updateStore} from "./app.store";

export function remove(item): any {
    return function (items) {
        const index = items.indexOf(item);
        if (index != -1) {
            items.splice(index, 1);
        }

        return items;
    };
}

export function update<T>(item: T): any {
    return function (value: T) {
        updateObject(value || {}, item);

        return value;
    };
}

export function add_or_remove<T>(item: T, addOrRemove: boolean): any {
    return function (items: T[]) {
        const index = items.indexOf(item);

        if (addOrRemove) {
            if (index == -1) {
                items.push(item);
            }
        }
        else {
            if (index != -1) {
                items.splice(index, 1);
            }
        }

        return items;
    };
}

export function set_value(key, value): any {
    return function (map) {
        map[key] = value;

        return map;
    };
}

export function set(item): any {
    return function () {
        return item;
    };
}

export function add(item): any {
    return function (items) {
        items.push(item);

        return items;
    };
}

export function add_if(item, predicate): any {
    return function (items) {
        if (!predicate(item)) {
            return items;
        }

        items.push(item);

        return items;
    };
}

export function noop(): any {
    return function (x) {
        return x;
    };
}

export function add_months(months: number) {
    return function (date: Date) {
        date.setMonth(date.getMonth() + months);

        return date;
    };
}
