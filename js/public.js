// JavaScript Document
function $(id){
	return  document.getElementById(id);
}
// 符合w3c 的浏览 中 有 event
// IE里面       window.event
function stopPropagation(event){
	event = event || window.event;
	if(window.event){
		//这是ＩＥ
		event.cancelBubble = true;
	}else {
		//这是 w3c
		event.stopPropagation();
	}
}
function nextSiblings(obj){
	var next = obj.nextSibling;
	while(next = next.nextSibling){
		if(next.nodeType == 1){
			return next;
		}
	}
}
function prevSiblings(obj){
	var prev = obj.previousSibling;
	while(prev = prev.previousSibling){
		if(prev.nodeType == 1){
			return prev;
		}
	}
}





