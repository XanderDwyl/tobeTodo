(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/todoList'
		],
		function( Todolist ) {

			describe('Todolist Layout', function () {

				it('should be an instance of Todolist Layout', function () {
					var todoList = new Todolist();
					expect( todoList ).to.be.an.instanceof( Todolist );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );