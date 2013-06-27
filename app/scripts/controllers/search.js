Ruby.SearchController = Ember.ObjectController.extend({
	init: function(){
		this._super();
		console.log(this.get('beds'))
	}
});