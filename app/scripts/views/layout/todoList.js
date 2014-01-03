define( [
        'backbone',
        'hbs!tmpl/layout/todoList_tmpl'
    ],
    function ( Backbone, TodoListTmpl ) {
        'use strict';

        /* Return a Layout class definition */
        return Backbone.Marionette.Layout.extend( {

            initialize: function ( ) {
                console.log( 'initialize a Todolist Layout' );
            },

            template: TodoListTmpl,
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