(function() {

'use strict';

// Logging module
var logging = doko.logging = {
	level: 0,
	write: write,
	type: {
		CRITICAL: 'Critical',
		ERROR: 'Error',
		WARNING: 'Warning'
	}
};

// Writes to the log
function write() {
	var type = arguments[0];
	var content = Array.prototype.slice.call(arguments, 1, arguments.length);
	if (type) {
		content.unshift(logging.type[type] || type + ':');
	}
	content.unshift('(' + new Date().toISOString() + ')');
	console.log.apply(console, content);
}

})();