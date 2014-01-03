define( function ( require ) {
    'use strict';

    var Backbone = require( 'require' );

    return Backbone.Marionette.Controller.extend( {

        initialize: function ( options ) {
            console.log( 'initialize a AppController Controller >> ' + options );
        }
    } );

} );