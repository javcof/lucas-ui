$.widget("ui.button", {
	
	options: {
		disabled: null
	},
	
	_create: function() {
		this._addClass("ui-button", "ui-widget");
		this._setOption("disabled", this.options.disabled);
		
		if (this.element.is("a")) {
			this._on({
				"keyup": function(e) {
					if (e.keyCode === 32) {
						e.preventDefault();
					}
				}
				
			});
		}
	}
});