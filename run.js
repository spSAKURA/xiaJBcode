var red_ball = document.getElementById("red-ball");
var red_ball_cover = document.getElementById("red-ball-cover");
var blue_ball = document.getElementById("blue-ball");
var svg_box = document.getElementById("svg-box");
//init_config
var red_ball_attr={
 	"cx":"600",
 	"cy":"400",
 	"r":"90",
 	"stroke":"none",
 	"fill":"red",
};
var blue_ball_attr={
	"cx":"200",
	"cy":"400",
	"r":"90",
	"stroke":"none",
	"fill":"blue",
};

var setAttribute = function(dom,attr_obj){
	for(var k in attr_obj){
		dom.setAttribute(k,attr_obj[k]);
	}
}
setAttribute(blue_ball,blue_ball_attr);
setAttribute(red_ball,red_ball_attr);
setAttribute(red_ball_cover,red_ball_attr);

var step = 0.05;
var move_value = {
	range:Math.PI,
	distant_to_center:200,
	r_change:20,
	r:90,
	last_chage:0,
	center_x:400,
};
setInterval(function(){
	move_value.range += step;
	var f = Math.floor((move_value.range+Math.PI/2) / Math.PI);
	if(move_value.last_chage < f){
		if(f%2 == 1) red_ball_cover.style.display = 'none'; else red_ball_cover.style.display = 'block';
		move_value.last_chage = f;
	}
	//位置
	red_ball.setAttribute('cx',move_value.distant_to_center * Math.sin(move_value.range) + move_value.center_x);
	red_ball_cover.setAttribute('cx',move_value.distant_to_center * Math.sin(move_value.range) + move_value.center_x);
	blue_ball.setAttribute('cx',move_value.distant_to_center * Math.sin(move_value.range-Math.PI) + move_value.center_x);
	//大小
	red_ball.setAttribute('r',move_value.r_change * Math.sin(move_value.range+Math.PI/2) + move_value.r);
	red_ball_cover.setAttribute('r',move_value.r_change * Math.sin(move_value.range+Math.PI/2) + move_value.r);
	blue_ball.setAttribute('r',move_value.r_change * Math.sin(move_value.range-Math.PI/2) + move_value.r);
},20);