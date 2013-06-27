/************/
/* Routing */
/***********/

/* Main Router */
Ruby.Router.map(function () {
    this.resource('search', { path: '/search'}, function(){
		this.resource('map', { path: '/map'}, function(){
			this.route('params', { path: '/*params'});
	    });
	    this.resource('list', { path: '/list'}, function(){
			this.route('params', { path: '/*params'});
	    });
    });
});

/* Specific Routes */
Ruby.IndexRoute = Ember.Route.extend({
	redirect: function () {
		this.transitionTo('search');
	}
});

Ruby.ListRoute = Ember.Route.extend({
	redirect: function () {
		this.transitionTo('list.params', 'zoomLevel=12&latitude=37&longtitude=-122')
	},

	model: function() {
		return Ruby.Listing.find();
	},

	renderTemplate: function(controller) {
		this.render('list/index', {controller:controller});
	}

});

Ruby.SearchRoute = Ember.Route.extend({
	redirect: function () {
		this.transitionTo('list')
	},

	model: function() {
		return Ruby.Search.find(1);
	}
});

Ruby.MapRoute = Ember.Route.extend({
    model: function() {
        return Ruby.Listing.find();

    },

	renderTemplate: function(controller){
		this.render('map/index', {controller:controller});
	}
});