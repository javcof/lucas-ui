$.widget("ui.spinner", {
	
	options: {
		
		step: 1,
		page: 10,
		
		icons: {
			up: "ui-icon-triangle-1-n",
			down: "ui-icon-triangle-1-s"
		}
	},
	
	value: function(val) {
		if (val === undefined) {
			return this._constraint(this.element.val());
		}
		this.element.val(val);
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
				that._repeat(null, 1, e);
			}).on("mouseup", function(e) {
				clearTimeout(that.timer);
			});
			
		this.buttons.last()
			.addClass("ui-spinner-button ui-spinner-down")
			.button({
				"icon": this.options.icons.down,
				"showLabel": false
			}).on("mousedown", function(e) {
				e.preventDefault();
				
				that.element.focus();
				that._repeat(null, -1, e);
			}).on("mouseup", function(e) {
				clearTimeout(that.timer);
			});
	},
	
	_repeat: function(i, steps, event) {
		i = i || 500;
		
		clearTimeout(this.timer);
		this.timer = this._delay(function() {
			this._repeat(40, steps, event);
		}, i);
		
		this._spin(steps * this.options.step, event);
	},
	
	_spin: function(step, event) {
		var value = this._constraint(parseInt(this.element.val()));
		this.element.val(value + step);
	},
	
	_constraint: function(val) {
		return (typeof val === "number" && !isNaN(val)) ? val : 0;
	},
	
	_setOptionDisabled: function(val) {
		this._super(val);
		
		this.uiSpinner.toggleClass("ui-state-disabled");
		this.element.prop("disabled", !!val);
	},
	
	_destroy: function() {
		this.element.prop("disable, false");
		this.uiSpinner.replaceWith(this.element.removeClass("ui-spinner-input"));
	}
});