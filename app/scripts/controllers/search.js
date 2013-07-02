Ruby.SearchController = Ember.ObjectController.extend({

    searchParams: null,

    deserializeParams: function(key ,value) {
	    console.log('DESERIALIZE');
        var values = Ruby.deserializeParams(value);
        this.searchParams = values;

        var model = this.get('model');

	    setTimeout(function(){
		    for (key in values) {
	            model.set(key, values[key]);
	        }
	    }, 100);


        setTimeout(function(){
            model.save();
        },100)

    }.property('model.beds'),

    serializeParams: function(key, value) {
        var url = Ruby.serializeParams(key, value, this.searchParams);

//        this.transitionToRoute('list.params', url);
    }.property(),

    beds: function(key, value) {
        var model = this.get('model');

		if (value != 0 && value === undefined) {
            return model.get(key);
		}else {
			model.set(key, value);
			model.save();
			return value;
		}

	}.property('model.beds')
});