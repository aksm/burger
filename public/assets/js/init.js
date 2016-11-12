(function($){
  $(function(){
  	  $.get("/getBurgers").
  	  done(function(data) {
  	  	console.log(data);
  	  	$.each(data, function(index, value) {
  	  		// console.log(typeof value.devoured);
  	  		if(value.devoured === 1) {
			  	$("#burgers-devoured").append("<div class='row'><div class='chip col offset-s6 offset-m6'><img src='/images/burger.png' alt='burger'/>"+value.burger_name);
  	  		}
  	  	});
  	  });

  	  // Materialize chip listeners
	  $('.chips-placeholder').material_chip({
	    placeholder: '+Burger',
	    secondaryPlaceholder: 'Prepare a Burger'
	  });
	  $('.chips-placeholder').on('chip.add', function(e, chip){
	  	// console.log(chip);
	  	$.post("/addBurger", chip).
	  	done(function(data) {
	  		chip.id = data;
	  	});
	  	Materialize.toast('Click mouth to eat!', 4000);
	  });

	  $('.chips-placeholder').on('chip.delete', function(e, chip){
	  	$.post("/eatBurger", chip).
	  	done(function(data) {
	  	});
	  	$("#burgers-devoured").append("<div class='row'><div class='chip col offset-s6 offset-m6'><img src='"+chip.image+"' alt='burger'/>"+chip.tag);
	  });

	  // select chip event doesn't seem to work?
	  // $('.chips-placeholder').on('chip.select', function(e, chip){
	  	// Materialize.toast('Click mouth to eat!', 4000);
	  	// console.log(chip);
	  // });

  }); // end of document ready
})(jQuery); // end of jQuery name space