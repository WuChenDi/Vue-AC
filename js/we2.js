$(function(){
	$('.box').click(function(){
		$('#welcome_add_choose').show()
	})
	
	$('#welcome_add_city').click(function(){
		$('#welcome_add').html( $(this).html());
		$('#welcome_add_choose').hide()
	})
	
	$('.welcome_add_name span').click(function(){
		$('#welcome_add').html( $(this).html());
		$('#welcome_add_choose').hide()
	})
});