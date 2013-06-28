Ruby.beds = [
		Ember.Object.create({name: 'No beds selected', value: null}),
        Ember.Object.create({name: 'Studio', value: 0}),
	    Ember.Object.create({name: '1 bedroom', value: 1}),
	    Ember.Object.create({name: '2 bedrooms', value: 2}),
	    Ember.Object.create({name: '3 bedrooms', value: 3}),
	    Ember.Object.create({name: '4 bedrooms', value: 4})
];

Ruby.BedsSelectView = Ember.Select.extend({
	classNames: ['pull-right'],
	contentBinding: Ruby.beds,
	change: function(){
		this.get('controller').set('beds', this.selection.get('value'));
	}
});