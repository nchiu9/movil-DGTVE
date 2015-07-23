$( document ).ready(function() {
    
    $(".hide-canal").hide();
    $(".menos-canal").hide();
    
    $(".mas-canal").click(function(){
    	$(".hide-canal").show();
    	$(".menos-canal").show();
    	$(".opciones").hide();
    });
    
    $(".menos-canal").click(function(){
    	$(".hide-canal").hide();
    	$(".menos-canal").hide();
    	$(".opciones").show();
    });
    
});
