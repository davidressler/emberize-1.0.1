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

	renderTemplate: function(controller) {
		this.render('list/index', {controller:controller});
	},

	model: function() {
		return Ruby.Listing.find();
	}
});

Ruby.ListParamsRoute = Ember.Route.extend({
	renderTemplate: function(controller) {
		this.render('list/list_view', {controller:controller});
	}
});

Ruby.SearchRoute = Ember.Route.extend({
	model: function() {
		return Ruby.Search.find('1');
	},
	redirect: function () {
		this.transitionTo('list')
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