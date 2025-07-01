// HOF, action will be a function
// OCP, Close for Change and Open for Extension
function forEach(elems, action) {
    for(var i = 0; i < elems.length; i ++) {
        action(elems[i]);
    }
}

function filter(elems, predicate) {
    var result = [];
    forEach(elems, function (elem) {
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}

function map(elems, transform) {
     var result = [];
    forEach(elems, function (elem) {
        result.push(transform(elem));
    });
    return result;
}
