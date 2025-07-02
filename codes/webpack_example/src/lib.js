
export function add(x, y) {
    return x + y;
    // return 0;
}

// using arrays forEach HOF function 
export default function filter(elems, predicate) {
    var result = [];
    elems.forEach(function (elem) {
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}

export function map(elems, transform) {
     var result = [];
    elems.forEach(function (elem) {
        result.push(transform(elem));
    });
    return result;
}

