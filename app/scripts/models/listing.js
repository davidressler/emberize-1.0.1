Ruby.Listing = DS.Model.extend({
   price: DS.attr('number')
});


Ruby.Listing.FIXTURES = [
	{
		id: 1,
		price: 125
	},
	{
		id:2,
		price: 455
	}
];