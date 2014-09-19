(function() {

'use strict';

// Components module
var components = doko.components = {
	registered: {},
	register: register
};

// Registers a component
function register(name, def) {
	if (components.registered[name]) {
		if (doko.logging.level >= 1) {
			doko.logging.write(doko.logging.type.WARNING, 'Component "' + name + '" is redefined.');
		}
	}
	components.registered[name] = def;
}

})();