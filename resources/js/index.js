//add slider on doc load
$(function() 
{
	//add slider
    $(".rslides").responsiveSlides({
		auto: true,             // Boolean: Animate automatically, true or false
		speed: 400,            // Integer: Speed of the transition, in milliseconds
		timeout: 3000,          // Integer: Time between slide transitions, in milliseconds
	});
	
	//add search box
	var availableTags = ["Apple", "Beer", "Club Soda", "Dairy", "Eggplant", "Fudge",
	"Grape", "Honey", "Ice Cream", "Jam", "Kiwi", "Lettuce", "Milk", "Noodles",
	"Orange", "Pineapple", "Rice", "Soup", "Tomatoes", "Vinilla", "Watermelon", "Yogurt"
    ];
    $( "#search_bar" ).autocomplete({
      source: availableTags
    });
});