Ruby.Store = DS.Store.extend({
	adapter: 'DS.FixtureAdapter'
});

Ruby.Search = DS.Model.extend({
   zoomLevel: DS.attr('number'),
   beds: DS.attr('number'),
   itemId: DS.attr('number'),
   typeId: DS.attr('number'),
   latitude: DS.attr('number'),
   longitude: DS.attr('number')
});

Ruby.Search.reopenClass({
   find: function() {
       $.get('http://pro.livelovely.com/frontendtest/yolo', function(){
           console.log('hit it');
       })
       .done(function() { console.log('full success')})
   },
   toDict: function() {
       return {
           zoomLevel: '5'
       }
   }
});

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
]