function curriedAdd(total) {
    if (total === undefined) return 0;
    return function (toBeAdded = undefined) {
        if (!toBeAdded) return total;
        total = total + toBeAdded;
        return curriedAdd(total);
    }

}

module.exports = { curriedAdd };
