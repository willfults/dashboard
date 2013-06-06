//saves layout
$(document).ready(function() {
	$('#save-gridster').click(function(){
      	$.cookie('layout', $('#gridster-code').val(), { expires: 7000, path: '/'  });
    });
    
    $('#fullscreen').click(function(){
    	$(document).fullScreen(true);
    });
    
	
});

 function deleteWidget(id){
	 var gridsters = $(".gridster ul").gridster().data('gridster');
	 gridsters.remove_widget( $('#' + id) );
 }
 
 function addWidget(){
 	 var gridstered = $(".gridster ul").gridster().data('gridster');
 	gridstered.add_widget('<li class="new" style="background-color: black">A new example widget, draggable...</li>', 1, 1, 1, 1);
 }


