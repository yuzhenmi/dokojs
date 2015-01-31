doko.define('doko.logger', function logger() {
	return {
		debug: debug
	};

	function debug() {
		if (doko.debugMode) {
			var logString = '"';
			for (var n = 0, nn = arguments.length; n < nn; n++) {
				logString += arguments[n] + '","';
			}
			logString = logString.substring(0, logString.length - 2);
			window.eval('console.log("DEBUG","' + new Date().toISOString() + '",' + logString + ')');
		}
	}
});