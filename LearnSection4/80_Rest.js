const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(numb, basis = 2) {
    // basis = basis || 2;
    console.log(numb * basis);
}
calcOrDouble(3);