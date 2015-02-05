//add slider on doc load
$(function() 
{
    $(".rslides").responsiveSlides({
		auto: true,             // Boolean: Animate automatically, true or false
		speed: 400,            // Integer: Speed of the transition, in milliseconds
		timeout: 3000,          // Integer: Time between slide transitions, in milliseconds
	});
});