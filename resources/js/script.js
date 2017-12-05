$(function(){
	$('#txtcomment').mousemove(function(){
		$('.add-comment').addClass('full');

	});

	$('#create-comment').click(function(){
		if($('#txtcomment').val()==""){
			$('#create-comment').attr("data-target","#myModal");
		}
		else{
			$('#create-comment').attr("data-target","#myModal1");
		}
	});

});