(function() {

'use strict';

// Services module
var services = doko.services = {
	registered: {},
	register: register,
	fetch: fetch
};

// Registers a service
function register(name, ns) {
	if (services.registered[name]) {
		if (doko.logging.level >= 1) {
			doko.logging.write(doko.logging.type.WARNING, 'Service "' + name + '" is redefined.');
		}
	}
	services.registered[name] = ns;
}

function fetch(name) {
	return services.registered[name];
}

})();