window.onload = function () {
	var myDiv = document.getElementById("box");
	var myImg = document.getElementsByTagName("a");
	var myLi = document.getElementsByTagName("li");
	var arrowLeft = document.getElementById("arrow-left");
	var arrowRight = document.getElementById("arrow-right");
	var leftNum = 6;
	var rightNum = 1;
	
	//自动轮播
	var imgNum = 1;
	var timer = setInterval(showTime,1000);
	myImg[0].style.display = "block";
	myLi[0].className = "current";
	function showTime(){
		for(var i = 0 ; i < myImg.length ; i ++){
			myImg[i].style.display = "none";
			myLi[i].className = "";
		}
		
		if(imgNum >= myImg.length){
			imgNum = 0;
		}
		
		myImg[imgNum].style.display = "block";
		myLi[imgNum].className = "current";
		imgNum ++;
		leftNum = imgNum - 2;
		rightNum = imgNum;
		
	}
	
	//下面的点击事件
	for(var i = 0 ; i < myLi.length ; i ++){
		myLi[i].index = i;
		myLi[i].onclick = function (){
			clearInterval(timer);
			for(var a = 0 ; a < myLi.length ; a ++){
				myImg[a].style.display = "none";
				myLi[a].className = "";
			}
			this.className = "current";
			myImg[this.index].style.display = "block";
			timer = setInterval(showTime,1000);
			
			leftNum = this.index - 1;
			imgNum = this.index + 1;
			rightNum = this.index + 1;
		}
	}
	
	//右边箭头点击事件
	arrowRight.onclick = function () {
		clearInterval(timer);
		for(var a = 0 ; a < myLi.length ; a ++){
			myImg[a].style.display = "none";
			myLi[a].className = "";
		}
		
		if(rightNum > 5){
			rightNum = 0;
		}
		
		myImg[rightNum].style.display = "block";
		myLi[rightNum].className = "current";
		
		rightNum ++ ;
		leftNum = rightNum - 2;
		
		
		
		imgNum = rightNum;
		
		timer = setInterval(showTime,1000);
	}
	
	//左边箭头点击事件
	arrowLeft.onclick = function () {
		clearInterval(timer);
		for(var a = 0 ; a < myLi.length ; a ++){
			myImg[a].style.display = "none";
			myLi[a].className = "";
		}
		
		if(leftNum < 0){
			leftNum = 5;
		}
		
		
		myImg[leftNum].style.display = "block";
		myLi[leftNum].className = "current";
		leftNum -- ;
		
		rightNum = leftNum + 2;
		imgNum = leftNum + 2;
		
		timer = setInterval(showTime,1000);
	}
}
