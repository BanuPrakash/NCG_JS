
function add(x, y) {
    return x + y;
    // return 0;
}

// using arrays forEach HOF function 
function filter(elems, predicate) {
    var result = [];
    elems.forEach(function (elem) {
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}

function map(elems, transform) {
     var result = [];
    elems.forEach(function (elem) {
        result.push(transform(elem));
    });
    return result;
}

module.exports = {
    add,
    filter,
    map
}