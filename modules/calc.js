// Coded by DosX

function Calculate(Ex) {
	var allowedChars = '0123456789+-*/(). ';
	for (var i = 0; i < Ex.length; i++) {
		if (allowedChars.indexOf(Ex[i]) === -1) {
			throw new Error('Invalid char.');
		}
	}

	try {
		var result = eval(Ex);
		if (result == undefined || result == NaN) {
			throw new Error();
		}
		return result;
	}
	catch (error) {throw new Error('Invalid expression.');}
}
