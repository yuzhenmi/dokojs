(function() {

'use strict';

// Core module
var doko = window.doko = {
	defineComponent: defineComponent,
	defineModel: defineModel,
	defineService: defineService
};

// Logging module
var logging = doko.logging;

// Prepare registration namespaces
var registered = doko.registered = {
	models: {},
	services: {},
	components: {}
};

// Registers a component
function registerComponent(name, def) {
	if (registered.components[name]) {
		if (logging.level >= 1) {
			logging.write(logging.type.WARNING, 'Component "' + name + '" is redefined.');
		}
	}
	registered.components[name] = def;
}

// Registers a model
function registerModel(name, ctor) {
	if (registered.models[name]) {
		if (logging.level >= 1) {
			logging.write(logging.type.WARNING, 'Model "' + name + '" is redefined.');
		}
	}
	registered.models[name] = ctor;
}

// Registers a service
function registerService(name, fn) {
	if (registered.services[name]) {
		if (logging.level >= 1) {
			logging.write(logging.type.WARNING, 'Service "' + name + '" is redefined.');
		}
	}
	registered.services[name] = fn;
}

})();