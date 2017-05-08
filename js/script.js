$(document).ready(function(){
	
	var id;
	
	$(window).resize(function(){
		var newWidth = $(window).width();
		clearTimeout(id);
		id = setTimeout(resizeComplete(newWidth), 500);
	});
	
	function resizeComplete(newWidth)
	{		
		$('#mobile-nav').find('ul').hide();
		if( newWidth < 540 )
		{		
			$('#mobile-nav').show();
			$('.hdr-top').on('click','#top_nav', function(event){
				event.stopImmediatePropagation();
				$('#mobile-nav').find('ul').slideToggle();
			});
		} else { $('#mobile-nav').hide(); }
	}
	
	function viewport_resize(newWidth)
	{
		if( newWidth < 540 )
		{		
			$('.hdr-top').on('click','#top_nav', function(event){
				event.stopImmediatePropagation();
				$('#mobile-nav').find('ul').slideToggle();
			});
		}
	}
	
	function viewport_init()
	{
		var sWidth = $(window).width();
		if( sWidth < 540 )
		{		
			$('.hdr-top').on('click','#top_nav', function(event){
				event.stopImmediatePropagation();
				$('#mobile-nav').find('ul').slideToggle();
			});
		}
	}
	
	viewport_init();
});
