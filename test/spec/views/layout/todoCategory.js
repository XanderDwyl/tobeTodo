(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/todoCategory'
		],
		function( Todocategory ) {

			describe('Todocategory Layout', function () {

				it('should be an instance of Todocategory Layout', function () {
					var todoCategory = new Todocategory();
					expect( todoCategory ).to.be.an.instanceof( Todocategory );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );