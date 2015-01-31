if (!window.doko) {
	window.doko = {};

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

	doko.debugMode = false;
}