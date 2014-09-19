(function() {

doko.logging.write(null, 'App running...');

TestManager = function(a,b) {this.a = a;this.b=b;};
TestManager.prototype = {
	run: function() {
		console.log('This is a test', this.a,this.b);
	}
};
doko.managers.register('Test', TestManager);
var testManager = doko.managers.instantiate('Test', 'a','b');
testManager.run();

})();