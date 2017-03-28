// JavaScript Document
window.onload = function(){
	var banners = ["1.jpg","2.jpg","3.jpg","4.jpg"];
	var content = ["第一张图片","第二张图片","第三张图片","第四张图片"];
	var width   = 320;
	var height  = 200;
	$("seamlessCarousel").style.width = width * 4 - 20 + "px";
	$("seamlessCarouselList").style.width = width*banners.length*2 + "px";
	$("seamlessCarouselList").style.marginLeft = -width*banners.length + "px";
	$("seamlessCarousel").style.height = height + "px";
	$("seamlessCarouselList").style.height = height + "px";
	var banners1 = [];
	
	for(var i=0;i<banners.length;i++){
		var html = '<a href="javascript:void(0)" style="width:' + (width-20) + 'px;height:' + height + 'px;" title="' + (i+1) + '"><img src="../images/' + banners[i] + '" /><em class="seamless_carousel_bottom"> ' + content[i] + ' <em></a>';
		banners1.push(html);
		$("seamlessCarouselList").innerHTML += html;
	}
	for(var i=0;i<banners.length;i++){
		var html = '<a href="javascript:void(0)" style="width:' + (width-20) + 'px;height:' + height + 'px;" title="' + (i+5) + '"><img src="../images/' + banners[i] + '" /><em class="seamless_carousel_bottom"> ' + content[i] + ' <em></a>';
		banners1.push(html);
		$("seamlessCarouselList").innerHTML += html;
	}
	$("seamlessCarousePrev").onclick = function(){
		var last = banners1.pop();
		banners1.unshift(last);
		$("seamlessCarouselList").innerHTML = "";
		for(var i = 0 ; i < banners1.length ; i ++){
			$("seamlessCarouselList").innerHTML += banners1[i];
		} 
		$("seamlessCarouselList").style.marginLeft = -width*banners.length + "px";
	}
	$("seamlessCarouseNext").onclick = function(){
		$("seamlessCarouselList").style.marginLeft = -width*banners.length + "px";
		var first = banners1.shift();
		banners1.push(first);
		$("seamlessCarouselList").innerHTML = "";
		for(var i = 0 ; i < banners1.length ; i ++){
			$("seamlessCarouselList").innerHTML += banners1[i];
		}
	}
	var time = setInterval(function(){
		$("seamlessCarouseNext").onclick();
	},2000);	
	$("seamlessCarousel").onmouseover = function(){
		clearTimeout(time);
	}
	$("seamlessCarousel").onmouseout = function(){
		time = setInterval(function(){
			$("seamlessCarouseNext").onclick();
		},2000);
	}
}






























