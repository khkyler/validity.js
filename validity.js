function validity () {
	var valid = {};

	valid.isNumber = function (input) {
		if (typeof input !== 'number'){
			return false;
		}

		if (isNaN(parseInt((1 + input),10))) {
			return false;
		}

		return true;
	};

	valid.isInt = function (input) {
		if (typeof input === 'number') {
			if (input !== parseInt(input, 10)) {
				return false;
			}
			 if (input % 1 !== 0) {
				return false;
			}
		}
		return true;
	};

	valid.isFloat = function (input) {
		if (typeof input === 'number') {
			if (input % 1 === 0) {
				return false;
			}

			if (input === parseInt(input, 10)) {
				return false;
			}
			return true;
		}
	};

	valid.isString = function (input, blackList) {
		if (typeof input === 'string') {
			if (!blackList || typeof blackList !== 'string') {
				return true;
			} else {
				return input
						.split('')
						.filter(function (char) {
							if (blackList.indexOf(char) > -1) {
								return true;
							} else {
								return false;
							}
						})
						.length < 1;
			}
		} else {
			return false;
		}
	};

	valid.isBoolean = function (input) {
		if (typeof input === 'boolean') {
			return true;
		} else {
			return false;
		}
	};

	return valid;
}

var exports = module.exports = validity();
