/*global Ember */

var Ruby = window.Ruby = Ember.Application.create({
	LOG_TRANSITIONS: true
});

/* Order and include as you please. */
require('scripts/lib/*');
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/views/*');

Ruby.deserializeParams = function(params) {
    var typeDict = {
        beds: 'int',
        zoomLevel: 'int'
    };
    var value = params.toString().split('&');
    var values = {};

    for (var i= 0; i < value.length; i++) {
        value[i] = value[i].split('=');

        if (typeDict[value[i][0]] === "int") {
            value[i][1] = parseInt(value[i][1]);
        }

        values[value[i][0]] = value[i][1];
    }

    return values;
};