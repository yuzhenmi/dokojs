(function() {

'use strict';

// Managers module
var managers = doko.managers = {
	registered: {},
	register: register,
	fetch: fetch,
	instantiate: instantiate
};

// Registers a manager
function register(name, ctor) {
	if (managers.registered[name]) {
		if (doko.logging.level >= 1) {
			doko.logging.write(doko.logging.type.WARNING, 'Manager "' + name + '" is redefined.');
		}
	}
	managers.registered[name] = ctor;
}

// Fetches a manager constructor
function fetch(name) {
	return managers.registered[name]
}

// Instantiates a manager
function instantiate(name) {
	var ctor = managers.registered[name];
	if (!ctor) {
		if (doko.logging.level >= 1) {
			doko.logging.write(doko.logging.type.ERROR, 'Manager "' + name + '" is undefined.');
		}
	}
	var args = [];
	for (var n = 1, length = arguments.length; n < length; n++) {
		args.push('arguments[' + n + ']');
	}
	return eval('new ctor(' + args.join(',') + ')');
}

})();