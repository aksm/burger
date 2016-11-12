(function($){
  $(function(){

  	  // Materialize chip listeners
	  $('.chips-placeholder').material_chip({
	    placeholder: '+Burger',
	    secondaryPlaceholder: 'Prepare a Burger'
	  });
	  $('.chips-placeholder').on('chip.add', function(e, chip){
	  	// console.log(chip);
	  	$.post("/addburger", chip).
	  	done(function(data) {
	  		console.log(data);
	  	});
	  	Materialize.toast('Click mouth to eat!', 4000);
	  });

	  $('.chips-placeholder').on('chip.delete', function(e, chip){
	    // you have the deleted chip here
	  });
	  $('.chips-placeholder').on('chip.select', function(e, chip){
	  	// Materialize.toast('Click mouth to eat!', 4000);
	  	console.log(chip);
	  });

  }); // end of document ready
})(jQuery); // end of jQuery name space