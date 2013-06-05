//saves layout
$(document).ready(function() {
	$('#save-gridster').click(function(){
      	$.cookie('layout', $('#gridster-code').val(), { expires: 7000, path: '/'  });
    });
    
    $('#fullscreen').click(function(){
    	$(document).fullScreen(true);
    });
    
    //http://gridster.net/
    var gridster = $(".gridster ul").gridster().data('gridster');
	
});
