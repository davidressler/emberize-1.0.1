Ruby.ListController = Ember.ArrayController.extend({
	needs: ['search'],
//    controllers.search

	visibleListings: function() {
        var bc = this.get('controllers.search.beds');
		return this.filterProperty('beds', bc);
	}.property('@each.beds')
});