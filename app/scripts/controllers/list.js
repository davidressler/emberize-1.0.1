Ruby.ListController = Ember.ArrayController.extend({
	needs: ['search'],

	visibleListings: function() {
		var bedCount = this.get('controllers.search.beds');

        if(bedCount >= 0){
			return this.filterProperty('beds', bedCount);
		}else{
			return this.filterProperty('id');
		}

	}.property('@each.beds', 'controllers.search.beds')
});

Ruby.ListParamsController = Ember.ObjectController.extend({
	needs: ['list']
});