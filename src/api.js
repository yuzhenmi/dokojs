doko.define('doko.page', function page(page) {
	(function(page) {
		jQuery(document).ready(function() {
			page();
		});
	})(page);
});

doko.define('doko.defineDataManager', function defineDataManager(path, DataManager) {
	return doko.define(path, DataManager);
});

doko.define('doko.defineParser', function defineParser(path, Parser) {
	return doko.define(path, Parser);
});

doko.define('doko.defineRenderer', function defineRenderer(path, Renderer) {
	return doko.define(path, Renderer);
});

doko.define('doko.defineController', function defineController(path, Controller) {
	return doko.define(path, Controller);
});

doko.define('doko.defineHelper', function defineHelper(path, helper) {
	return doko.define(path, helper());
});

doko.define('doko.defineMixin', function defineMixin(path, Mixin) {
	return doko.define(path, Mixin);
});

doko.define('doko.defineTemplate', function defineTemplate(path, template) {
	return doko.define(path, template);
});

doko.define('doko.useController', function useController(Controller, rootElement) {
	if (typeof Controller === 'string') {
		Controller = doko.require(Controller);
	}
	var BaseController = doko.require('doko.controllers.Base');
	var controller = Object.create(Controller.prototype);
	BaseController.call(controller);
	Controller.call(controller);
	controller.rootElement = doko.$(rootElement);
	return controller;
});

doko.define('doko.useParser', function userParser(Parser, controller) {
	if (typeof Parser === 'string') {
		Parser = doko.require(Parser);
	}
	var BaseParser = doko.require('doko.parsers.Base');
	var parser = Object.create(Parser.prototype);
	BaseParser.call(parser);
	Parser.call(parser);
	parser.controller = controller;
	return parser;
});

doko.define('doko.useDataManager', function useDataManager(DataManager) {
	if (typeof DataManager === 'string') {
		DataManager = doko.require(DataManager);
	}
	var BaseDataManager = doko.require('doko.dataManagers.Base');
	var dataManager = Object.create(DataManager.prototype);
	BaseDataManager.call(dataManager);
	DataManager.call(dataManager);
	return dataManager;
});

doko.define('doko.useRenderer', function useRenderer(Renderer, controller) {
	if (typeof Renderer === 'string') {
		Renderer = doko.require(Renderer);
	}
	var BaseRenderer = doko.require('doko.renderers.Base');
	var renderer = Object.create(Renderer.prototype);
	BaseRenderer.call(renderer);
	Renderer.call(renderer);
	renderer.controller = controller;
	return renderer;
});

doko.define('doko.useHelper', function useHelper(helper) {
	if (typeof helper === 'string') {
		return doko.require(helper);
	}
	return helper;
});

doko.define('doko.mix', function mix() {
	var dest = arguments[0];
	var util = doko.require('doko.helpers.util');
	if (!dest) {
		throw new Error('doko.mix: Invalid mixin destination.');
	}
	for (var n = 1, nn = arguments.length; n < nn; n++) {
		var mixin = arguments[n];
		if (typeof mixin === 'string') {
			mixin = doko.require(mixin);
		}
		mixin.call(dest);
	}
});

doko.define('doko.$', jQuery);