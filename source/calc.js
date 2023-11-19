// Coded by DosX
// https://github.com/DosX-dev

function calculate(ex) {
    var allowedChars = '0123456789+-*/(). ';
    for (var i = 0; i < ex.length; i++) {
        if (allowedChars.indexOf(ex[i]) === -1) {
            throw new Error('Invalid char.');
        }
    }

    try {
        var result = eval(ex);
        if (result == undefined || result == NaN) {
            throw new Error();
        }
        return result;
    } catch (error) { throw new Error('Invalid expression.'); }
}
