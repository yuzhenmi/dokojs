(function() {

'use strict';

// Models module
var models = doko.models = {
	registered: {},
	register: register
};

// Registers a model
function register(name, ctor) {
	if (models.registered[name]) {
		if (doko.logging.level >= 1) {
			doko.logging.write(doko.logging.type.WARNING, 'Model "' + name + '" is redefined.');
		}
	}
	models.registered[name] = ctor;
}

})();