Ruby.SearchMapView = Ember.View.extend({
    tagName: 'div',
    classNames: ['map'],
    attributeBindings: ['style'],
    map: null,

    didInsertElement: function() {
        var mapStyle = [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            },
            {
                featureType: "landscape",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];

        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng("37.7750", "-122.4183"),
            minZoom : 12,
            maxZoom : 19,
            panControl:false,
	        mapTypeControlOptions: {
                mapTypeIds: ['mystyle']
            },
            mapTypeId: 'mystyle',
            mapTypeControl:false,
            streetViewControl: false,
            keyboardShortcuts: false
        };
        var map = new google.maps.Map(this.$().get(0),mapOptions);
        map.mapTypes.set('mystyle', new google.maps.StyledMapType(mapStyle, { name: 'Map' }));
        this.set('map',map); //save for future updations
    }
});