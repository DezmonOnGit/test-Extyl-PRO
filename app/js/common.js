
$(document).ready(function(){
	//Burger-menu event - click begin

	$('.menu-burger').on('click', function() {
		$(this).children('.menu-burger__lines').toggleClass('menu-burger__lines_active');
		$(this).siblings('.menu').toggleClass('menu_active');
		$('body').toggleClass('hide-scroll');
	});

	//Burger-menu event - click begin
});
