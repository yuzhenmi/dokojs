doko.defineHelper('doko.helpers.util', function util() {
	return {
		shallowClone: shallowClone,
		extend: extend
	};

	function shallowClone(original) {
		if (Object.prototype.toString.call(original) === '[object Array]') {
			return original.slice(0);
		}
		var clone = {};
		for (var key in original) {
			clone[key] = original[key];
		}
		return clone;
	}

	function extend(original) {
		if (!original) {
			throw new Error('Cannot extend invalid value.');
		}
		for (var n = 1, nn = arguments.length; n < nn; n++) {
			var properties = arguments[n];
			for (var key in properties) {
				original[key] = properties[key];
			}
		}
		return original;
	}
});