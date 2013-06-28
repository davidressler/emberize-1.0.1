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
		this.transitionTo('list.params', 'beds=3&zoomLevel=23')
	},

	renderTemplate: function(controller) {
		this.render('list/index', {controller: controller});
	},

	model: function() {
		return Ruby.Listing.find();
	}
});

Ruby.ListParamsRoute = Ember.Route.extend({
	renderTemplate: function(controller) {
		this.render('list/list_view', {controller:controller});
	},

    setupController: function(controller, params) {
        this.controllerFor('search').set('deserializeParams', params);
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