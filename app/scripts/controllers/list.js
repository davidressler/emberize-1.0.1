Ruby.ListController = Ember.ArrayController.extend({
	needs: ['search'],

	visibleListings: function() {
		var bedCount = this.get('controllers.search.beds');
		console.log('hey');
		if(bedCount){
			return this.filterProperty('beds', bedCount);
		}else{
			return this.filterProperty('id');
		}

	}.property('@each.beds', 'controllers.search.beds')
});