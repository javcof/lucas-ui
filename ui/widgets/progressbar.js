$.widget("ui.progressbar", {
	
	options: {
		value: 0
	},
	
	_create: function() {
		this.element.addClass("ui-progressbar ui-widget ui-widget-content");
		$("<div>").appendTo(this.element).addClass("ui-progressbar-value ui-widget-header").width(this.options.value + "%");
	}
	
});