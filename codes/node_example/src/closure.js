function memoize(fn) {
    var cache = {};
    return function (args) {
        if (!cache[args]) {
            cache[args] = fn(args);
        }
        return cache[args];
    }
}



module.exports = {
    memoize
}