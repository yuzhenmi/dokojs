(function() {

	if (window.doko) {
		return;
	}
	var doko = window.doko = {};

	doko.require = function require(path) {
		path = path || '';
		var parts = path.split('.');
		var n, nn;
		for (n = 0, nn = parts.length; n < nn; n++) {
			if (parts[n].length === 0) {
				throw Error('doko.require: Path is invalid.');
			}
		}
		var namespace = window;
		for (n = 0, nn = parts.length; n < nn; n++) {
			var part = parts[n];
			namespace = namespace[part] = namespace[part] || {};
		}
		return namespace;
	};

	doko.define = function define(path, value) {
		path = path || '';
		var matches = path.match(/^(.*\.)?([^\.]+)$/);
		if (!matches) {
			throw Error('doko.define: Path is invalid.');
		}
		var namespace = matches[1] ? doko.require(matches[1].slice(0, -1)) : window;
		var name = matches[2];
		namespace[name] = value;
		return value;
	};

	doko.page = function page(page) {
		// TODO
	};

	doko.dataModel = function dataModel(path, DataModel) {
		DataModel.prototype = Object.create(doko.DataModel.prototype);
		DataModel.prototype.constructor = DataModel;
		return doko.define(path, DataModel);
	};

	doko.parser = function parser(path, Parser) {
		Parser.prototype = Object.create(doko.Parser.prototype);
		Parser.prototype.constructor = Parser;
		return doko.define(path, Parser);
	};

	doko.renderer = function renderer(path, Renderer) {
		Renderer.prototype = Object.create(doko.Renderer.prototype);
		Renderer.prototype.constructor = Renderer;
		return doko.define(path, Renderer);
	};

	doko.controller = function controller(path, Controller) {
		Controller.prototype = Object.create(doko.Controller.prototype);
		Controller.prototype.constructor = Controller;
		return doko.define(path, Controller);
	};

	doko.helper = function helper(path, helper) {
		return doko.define(path, helper);
	};

	doko.mixin = function mixin(path, Mixin) {
		Mixin.prototype = Object.create(doko.Mixin.prototype);
		Mixin.prototype.constructor = Mixin;
		return doko.define(path, Mixin);
	};

	doko.mix = function mix() {
		var dest = arguments[0];
		if (!dest) {
			throw new Error('doko.mix: Invalid mixin destination.');
		}
		var mixins = [];
		for (var n = 1, nn = arguments.length; n < nn; n++) {
			mixins.push(arguments[n]);
		}
		// TODO
	};

})();