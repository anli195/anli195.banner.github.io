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
}
