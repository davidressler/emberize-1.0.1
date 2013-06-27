Ruby.ListController = Ember.ArrayController.extend({
	needs: ['search'],

    singleBeds: function() {
        return this.filterProperty('beds', 1);
//        return this.filterProperty('isCompleted', true).get('length');
    }.property('@each.beds')
});