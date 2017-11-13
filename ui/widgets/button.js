$.widget("ui.button", {
	
	options: {
		disabled: null,
		
		icon: null,
		iconPosition: null
	},
	
	_create: function() {
		var preOrAppend, 
			dir = {
				top: "prepend",
				right: "append",
				bottom: "append",
				left: "prepend"
			};

		this.element.addClass("ui-button ui-widget");
		this._setOption("disabled", this.options.disabled);
		
		if (this.options.icon) {
			if (!this.icon) {
				this.icon = $("<span />");
				this.icon.addClass("ui-icon").addClass(this.options.icon);
				
				if (this.options.iconPosition && (preOrAppend = dir[this.options.iconPosition])) {
					this.element[preOrAppend](this.icon);
				}
			}
		}
		
		if (this.element.is("a")) {
			this._on({
				"keyup": function(e) {
					if (e.keyCode === 32) {
						e.preventDefault();
					}
				}
				
			});
		}
	},
	
	_destroy:  function() {
		if (this.icon) {
			this.icon.remove();
		}
	}
});