$.widget("ui.button", {
	
	options: {
		disabled: null,
		
		icon: null,
		iconPosition: "left",
		
		label: null,
		showLabel: true
	},
	
	_create: function() {
		var preOrAppend, 
			dir = {
				top: "prepend",
				right: "append",
				bottom: "append",
				left: "prepend"
			};
		
		this.options.label = this.element.is("input") ? this.element.val() : this.element.html();

		this.element.addClass("ui-button ui-widget");
		this._setOption("disabled", this.options.disabled);
		
		if (this.options.icon) {
			if (!this.icon) {
				this.icon = $("<span />");
				this.icon.addClass("ui-icon").addClass(this.options.icon);
				
				if (this.options.iconPosition && (preOrAppend = dir[this.options.iconPosition])) {
					this.element[preOrAppend](this.icon);
				}
				
				if (!this.options.showLabel) {
					this.element.addClass("ui-button-icon-only");
					this.element.attr("title", this.options.label);
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