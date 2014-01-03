define( [
        'backbone',
        'hbs!tmpl/layout/todoCategory_tmpl'
    ],
    function ( Backbone, TodoCategoryTmpl ) {
        'use strict';

        /* Return a Layout class definition */
        return Backbone.Marionette.Layout.extend( {

            initialize: function ( ) {
                console.log( 'initialize a Todo Category Layout' );
            },

            template  : TodoCategoryTmpl,
            tagName   : 'div',
            className : 'panel panel-primary todo-container',

            /* Layout sub regions */
            regions: {},

            /* ui selector cache */
            ui: {},

            /* Ui events hash */
            events: {},

            /* on render callback */
            onRender: function ( ) {}
        } );

    } );