define( function ( require ) {
        'use strict';

        var Backbone = require( 'backbone' );
        var Communicator = require( 'communicator' );
       // var Controller = require( 'controllers/AppController');
       // var Router = require( );

        var layouts = {
            TodoCategory : require( 'views/layout/todoCategory' ),
            TodoList     : require( 'views/layout/todoList' )
        };

        var App = new Backbone.Marionette.Application( );

        /* Add application regions here */
        App.addRegions( {
            todoCategory : '#side-bar',
            todoList     : '#main-container',
        } );

        /* Add initializers here */
        App.addInitializer( function ( ) {
            /*
            App.Controller = new Controller( {
                'App': App,
                'regions': {
                    'todoCategories': App.todoCategory,
                    'todoList': App.todoList
                }
            } );

            App.Router = new Router( {
                'controller': App.Controller
            } );
*/
            App.todoCategory.show( new layouts.TodoCategory( ) );
            App.todoList.show( new layouts.TodoList( ) );

            Communicator.mediator.trigger( 'APP:START' );
        } );

        return App;
    } );