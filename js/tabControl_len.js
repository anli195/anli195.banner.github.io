window.onload = function () {
	var nav = document.getElementById("nav");
	var navDl = nav.getElementsByTagName("dl");
	var navDd = nav.getElementsByTagName("dd");
	
	for(var i = 0 ; i < navDl.length ; i ++) {
		navDl[i].onmousemove = function () {
			this.className = "current";
			var index = this.getAttribute("data-index");
				navDd[index].style.display = "block";
		}
		
		navDl[i].onmouseout = function () {
			this.className = "";
			var index = this.getAttribute("data-index");
				navDd[index].style.display = "none";
		}
	}
	
	var nav1 = document.getElementById("nav1");
	var nav2 = document.getElementById("nav2");
	var nav1li = nav1.getElementsByTagName("li");
	var nav2li = nav2.getElementsByTagName("li");
	
	for(var i = 0 ; i < nav1li.length ; i ++) {
		nav1li[i].onmousemove = function () {
			this.className = "current";
			var index = this.getAttribute("data-index");
				nav2li[index].style.display = "block";
				
			nav2li[index].onmousemove = function () {
				this.style.display = "block";
				var a = this.getAttribute("data-a");
					nav1li[a].className = "current";
			}
				
			nav2li[index].onmouseout = function () {
				this.style.display = "none";
				var a = this.getAttribute("data-a");
					nav1li[a].className = "";
			}
		}
		
		nav1li[i].onmouseout = function () {
			this.className = "";
			var index = this.getAttribute("data-index");
				nav2li[index].style.display = "none";
		}
	}
}