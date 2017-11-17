$.widget("ui.spinner", {
	
	options: {
		
		step: 1,
		page: 10,
		
		icons: {
			up: "ui-icon-triangle-1-n",
			down: "ui-icon-triangle-1-s"
		}
	},
	
	_create: function() {
		
		var that = this;
		
		this.uiSpinner = this.element
			.wrap("<span />")
			.parent()
			.append("<a></a><a></a>");
		
		this.element.addClass("ui-spinner-input");
		this.uiSpinner.addClass("ui-spinner ui-widget ui-widget-content");
		
		this.buttons = this.uiSpinner.children("a")
		this.buttons.first()
			.addClass("ui-spinner-button ui-spinner-up")
			.button({
				"icon": this.options.icons.up,
				"showLabel": false
			}).on("mousedown", function(e) {
				e.preventDefault();
				
				that.element.focus();
				var value = that.element.val() || 0;
				that.element.val(parseInt(value) + that.options.step);
			});
			
		this.buttons.last()
			.addClass("ui-spinner-button ui-spinner-down")
			.button({
				"icon": this.options.icons.down,
				"showLabel": false
			}).on("mousedown", function(e) {
				e.preventDefault();
				
				that.element.focus();
				var value = that.element.val() || 0;
				that.element.val(parseInt(value) - that.options.step);
			});
	},
	
	_spin: function(step, event) {
		
	}
});