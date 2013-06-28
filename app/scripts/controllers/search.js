Ruby.SearchController = Ember.ObjectController.extend({

    deserializeParams: function(key ,value) {
        var values = Ruby.deserializeParams(value);

        var model = this.get('model');

        for (key in values) {
            model.set(key, values[key]);
        }
        setTimeout(function(){
            model.save();
        },130)

    }.property('model.beds'),

    serializeParams: function(key, value) {
        var url = "";
        url += value[0] + "=" + value[1];
        this.transitionToRoute('list.params', url);
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