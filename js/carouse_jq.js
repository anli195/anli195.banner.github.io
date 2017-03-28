$(function(){
	
	//定义变量
	var imgNum = 1;
	var leftNum = 5;
	var rightNum = 1;
	
	//自调函数
	var timer = setInterval(rightwards,2000);
	
	//让第一个元素显示
	$("a").eq(0).show();
	$("li").eq(0).addClass("current");
	
	//向右轮播的方法
	function rightwards (){
		//作出判断，改变变量的值
		if(imgNum > 5){
			imgNum = 0;
		}
		//改变图片及按钮背景颜色
		$("a").eq(imgNum).show().siblings("a").hide();
		$("li").eq(imgNum).addClass("current").siblings("li").removeClass("current");
		imgNum ++;
		//将变量值赋给向左的变量
		leftNum = imgNum - 2;
	};
	
	//向左轮播的方法
	function leftwards (){
		//作出判断，改变变量的值
		if(leftNum < 0){
			leftNum = 5;
		}
		//改变图片及按钮背景颜色
		$("a").eq(leftNum).show().siblings("a").hide();
		$("li").eq(leftNum).addClass("current").siblings().removeClass("current");
		leftNum --;
		//将变量值赋给向右的变量
		imgNum = leftNum + 2;
	};
	
	$("li").bind("click",function(){
		//清除自调函数
		clearInterval(timer);
		//改变图片的下标为当前点击的按钮的位置
		$(this).addClass("current").siblings("li").removeClass("current");
		$("a").eq($(this).index()).show().siblings("a").hide();
		//将变量值赋给向左、向右点击的变量
		imgNum = $(this).index() + 1;
		leftNum = $(this).index() - 1;
		//自调函数
		timer = setInterval(rightwards,2000);
	});
	
	$("#arrow-right").bind("click",function(){
		//清除自调函数
		clearInterval(timer);
		//调用想右的函数
		rightwards();
		//自调函数
		timer = setInterval(rightwards,2000);
	});
	
	$("#arrow-left").bind("click",function(){
		//清除自调函数
		clearInterval(timer);
		//调用想左的函数
		leftwards();
		//自调函数
		timer = setInterval(rightwards,2000);
	});
});
