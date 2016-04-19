window.onload=function(){
	var menu=document.getElementById('upper-menu');
	var menuPosition=menu.offsetTop;
	window.onscroll=function(){
	
	var offset=window.pageYOffset;
	
	if (offset>menuPosition){
			menu.style.position='fixed';
		}
	else{
			menu.style.position='static';
		}
	}
}