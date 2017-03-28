// JavaScript Document
window.onload = function(){
	var banners = ["1.jpg","2.jpg","3.jpg","4.jpg"];
	var width   = 800;
	$("banner").style.width = width + "px";
	$("bannerList").style.width = width*banners.length*2 + "px";
	$("bannerList").style.marginLeft = -width*banners.length + "px";
	
	for(var i=0;i<banners.length;i++){
		var html = '<a href="javascript:void(0)" style="width:' + width + 'px"><img src="../images/' + banners[i] + '" /></a>';
		
		$("bannerList").innerHTML += html;
	}
	for(var i=0;i<banners.length;i++){
		var html = '<a href="javascript:void(0)" style="width:' + width + 'px"><img src="../images/' + banners[i] + '" /></a>';
		
		$("bannerList").innerHTML += html;
	}
	for(var j=0;j<banners.length;j++){
		if(j == 0){
			var oI = '<i class="curr" index="' + j + '"></i>';
		}else {
			var oI = '<i index="' + j + '"></i>';
		}
		$("bannerBtn").innerHTML += oI;
	}
	var oIs = $("bannerBtn").getElementsByTagName("i");
	var index = 0;
	for(var k=0;k<oIs.length;k++){
		oIs[k].onclick = function(){
			for(var x=0;x<oIs.length;x++){
				oIs[x].className = "";
			}	
			index = this.getAttribute("index");
			this.className = "curr";
			$("bannerList").style.marginLeft = -width * index + "px";		
		}
	}
	$("prev").onclick = function(){
		index--;
		if(index < 0){
			index = banners.length-1;
		}
		oIs[index].onclick();
	}
	$("next").onclick = function(){
		index++;
		if(index > banners.length-1){
			index = 0;
		}
		oIs[index].onclick();
	}
	var time = setInterval(function(){
		$("next").onclick();
	},1000);	
	
	$("banner").onmouseover = function(){
		clearTimeout(time);
	}
	$("banner").onmouseout = function(){
		time = setInterval(function(){
			$("next").onclick();
		},3000);
	}
}






























