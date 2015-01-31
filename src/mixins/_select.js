doko.defineMixin('doko.mixins._Select', function SelectMixin() {
	var util = doko.require('doko.helpers.util');

	this.selectors = function selectors(defaultSelectors) {
		this.attributes = this.attributes || {};
		this.attributes.selectors = util.shallowClone(defaultSelectors);
	};

	this.select = function select(selectorKey) {
		var selectorValue = this.attributes.selectors[selectorKey] || null;
		if (!selectorValue) {
			throw new Error('Undefined selector ' + selectorKey + '.');
		}
		if (this.rootElement) {
			return this.rootElement.find(selectorValue);
		}
		var $ = doko.require('doko.$');
		return $(selectorValue);
	};
});