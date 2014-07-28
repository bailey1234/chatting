$(document).ready(function(){
	var p = new Pusher('e4ee09c5f1eb9ee67714');
	var channel = p.subscribe('syg');
	channel.bind('notification', function(data){
		alert(data.username + ' is Online.');
		
	});
	$('#button1').click(function(){
		var message = $("input[name='texting']").val();
		$.ajax({
			url:'/chat',
			type:'POST',
			data:{"message":message}, /*이렇게 하면 데이터를 보내는 중!//보낼 소포*/	
			complete:function(){
				console.log('complete');
			} 
		});

	});
	channel.bind('chatting', function(data){
		console.log("woeirjwoeijr");
		console.log(data.message);
		$('div').append(data.message );
		
	});		


});