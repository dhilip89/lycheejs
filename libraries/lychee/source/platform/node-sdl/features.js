
(function(lychee, global) {

	const _FEATURES = {
	};


	Object.defineProperty(lychee.Environment._FEATURES, 'node-sdl', {

		get: function() {
			return _FEATURES;
		},

		set: function(value) {
			return false;
		}

	});

})(lychee, typeof global !== 'undefined' ? global : this);

