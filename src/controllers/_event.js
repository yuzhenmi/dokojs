doko.defineMixin('doko.controllers._Event', function EventMixin() {
	this.on = function on() {
		
	};
	this.off = function off() {

	};
	this.trigger = function trigger(event, data) {
		this.rootElement.trigger(event, data);
	};
});