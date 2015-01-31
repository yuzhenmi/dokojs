doko.define('doko.controllers.Base', function BaseController() {
	doko.mix(this, 'doko.mixins._Select', 'doko.controllers._Event');
	this.rootElement = null;
});