export type ErrorHandler = (err) => void;

let errorHandler: ErrorHandler;

export function setErrorHandler(handler: ErrorHandler) {
    errorHandler = handler;
}

export function Activity() {
    return function (target, desc) {
        const original = target[desc];

        target[desc] = function () {
            const that = this;
            const args = arguments;

            return (async function () {
                try {
                    await original.apply(that, args);
                }
                catch (err) {
                    console.error(err);

                    if (errorHandler) {
                        errorHandler(err);
                    }
                }
            })();
        }

        return target;
    };
}
