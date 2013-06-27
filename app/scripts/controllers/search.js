Ruby.SearchController = Ember.ObjectController.extend({
    beds: function(key, value) {
        var model = this.get('model');

		if (value != 0 && value === undefined) {
			return model.get(key);
		}else {
			model.set(key, value);
			model.save();
			return value;
		}
	}.property('model.beds')
});