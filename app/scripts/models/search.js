Ruby.Search = DS.Model.extend({
   zoomLevel: DS.attr('number'),
   beds: DS.attr('number'),
   itemId: DS.attr('number'),
   typeId: DS.attr('number'),
   latitude: DS.attr('number'),
   longitude: DS.attr('number')
});


//////////////////////////
// FIXTURES
//////////////////////////

Ruby.Search.FIXTURES = [
    {
        id: 1,
        beds: 2,
        zoomLevel: 12,
        latitude: 37,
        longitude: -122
    }
];