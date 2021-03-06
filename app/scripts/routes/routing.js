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

Ruby.SearchRoute = Ember.Route.extend({
	redirect: function () {
		this.transitionTo('map')
	},

	model: function() {
		return Ruby.Search.find();
	}
});

Ruby.MapRoute = Ember.Route.extend({
    model: function() {
	    console.log(this);
        return Ruby.Listing.find();
    },

    renderTemplate: function() {
        this.render("map/index");
    }
});