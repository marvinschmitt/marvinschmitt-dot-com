	
for (i = 0; i < 101; i++){
  const dot = document.createElement("div");
  dot.className = 'parallax dot';
  const x_location = Math.random() * 100 + '%';
  const y_location = Math.random() * 130 + '%';
  const distance = Math.random();
  const speed = 0.085 * distance;
  const size = 1.5 * distance + 3 + 'px';
  const opacity = distance * 40 + 20 + '%';
  $(dot).css({
    'bottom': y_location, 
    'left': x_location, 
    'position': 'absolute', 
    'background-color': '#fff2b5', 
    'height': size,
    'width': size,
    'opacity' : opacity
  });
  $(dot).attr('data-speed', speed); 
  $('#dot_container').append(dot);
}


$('html').mousemove(function(e){
		
		var wx = $(window).width();
		var wy = $(window).height();
		
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		
		var newx = x - wx/2;
		var newy = y - wy/2;
		

		$('.parallax').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -1;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
			//TweenMax.to($(this), 1, {x: (0.5), y: (0.5)});
		});
		
	});