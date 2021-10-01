$(document).ready(function() {

    $(document).bind("contextmenu",function(e){
        return false;
    });

	$('#cabecera').fadeOut(0);

	$(window).scroll(function(){
		/*Cabecera*/
		var windowHeight = $(window).scrollTop();

		var WhatIs = $("#FinalLogo").offset();
		WhatIs = WhatIs.top;

		/*Para cuando se llega al footer
		var fondo = $("#empiezaSemiFooter").offset();
		fondo = fondo.top;*/


		if(windowHeight > WhatIs){
			$('#cabecera').fadeIn(500);

		}else{
			$('#cabecera').fadeOut(500);
		}


	});

});







