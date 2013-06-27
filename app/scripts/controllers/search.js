Ruby.SearchController = Ember.ObjectController.extend({
	beds: function(key, value) {
		var model = this.get('model');

		if (value == undefined) {
			return model.get('beds');
		}else {
			model.set('beds', value);
			model.save();
			return value;
		}
	}.property('model.beds')
});