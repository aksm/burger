(function($){
  $(function(){

  	  // Materialize chip listeners
	  $('.chips-placeholder').material_chip({
	    placeholder: '+Burger',
	    secondaryPlaceholder: 'Prepare Burger'
	  });
	  // Add user-input burgers
	  $('.chips-placeholder').on('chip.add', function(e, chip){
	  	$.post("/addBurger", chip).
	  	done(function(data) {
	  		chip.id = data;
	  	});
	  	Materialize.toast('Click mouth to eat!', 4000);
	  });
	  // Move burger to stomach
	  $('.chips-placeholder').on('chip.delete', function(e, chip){
	  	$.post("/eatBurger", chip).
	  	done(function(data) {
	  	});
	  	$("#burgers-devoured").append("<div class='row burger'><div class='chip col offset-s6 offset-m6'><img src='"+chip.image+"' alt='burger'/>"+chip.tag);
	  });

	  // select chip event doesn't seem to work?
	  // $('.chips-placeholder').on('chip.select', function(e, chip){
	  	// Materialize.toast('Click mouth to eat!', 4000);
	  	// console.log(chip);
	  // });

  }); // end of document ready
})(jQuery); // end of jQuery name space