Ruby.ListController = Ember.ArrayController.extend({
	needs: ['search'],

	visibleListings: function() {
		var bedCount = this.get('controllers.search.beds');
		console.log(bedCount);
		return this.filterProperty('beds', bedCount);
	}.property('@each.beds')
});