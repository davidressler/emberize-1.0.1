Ruby.ListController = Ember.ArrayController.extend({
	needs: ['search'],

	visibleListings: function() {
		return this.filterProperty('beds', 1);
	}.property('@each.beds')
});