export const match = (expression, matchers, defaultState) => {
    for (const key in matchers) {
        if (expression === key) {
            return matchers[key]();
        }
    }

    return defaultState;
};
