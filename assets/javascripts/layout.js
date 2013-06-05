//saves layout
$(document).ready(function() {
	$('#save-gridster').click(function(){
      	$.cookie('layout', $('#gridster-code').val(), { expires: 7000, path: '/'  });
    });
	
});
