function play_music(){
	if ($('#mc_play').hasClass('on')){
		$('#mc_play audio').get(0).pause();
		$('#mc_play').attr('class','stop');
	}else{
		$('#mc_play audio').get(0).play();
		$('#mc_play').attr('class','on');
	}
	$('#music_play_filter').hide();
	event.stopPropagation(); //阻止冒泡
}
function just_play(id){
	$('#mc_play audio').get(0).play();
	$('#mc_play').attr('class','on');
	event.stopPropagation(); //阻止冒泡
}