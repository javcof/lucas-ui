$.widget("ui.progressbar", {

	options: {
		value: 0,
		min: 0,
		max: 100,
		complete: null
	},

	value: function(val) {
		if (val === undefined) {
			return this.options.value;
		}
		this.options.value = this._constraint(val);
		this._refresh();
	},

	_create: function() {
		this.element.addClass("ui-progressbar ui-widget ui-widget-content");
		this.label = $("<div>").appendTo(this.element).addClass("ui-progressbar-value ui-widget-header");
		this._refresh();
	},

	_refresh: function() {
		this.label.width(this.options.value + "%");
		if (this.options.value === this.options.max) {
			this._trigger("complete");
		}
	},

	_constraint: function(val) {
		if (val < this.options.min) {
			return this.options.min;
		}
		if (val > this.options.max) {
			return this.options.max;
		}
		return val;
	}

});
