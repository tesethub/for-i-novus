window.onload=function(){
	var menu=document.getElementById('upper-menu');
	var footerPosition=document.getElementById('footer').offsetTop;
	var menuPosition=menu.offsetTop;
	var menuHeight=menu.clientHeight;
	
	window.onscroll=function(){
	
		var offset=window.pageYOffset;
		if (offset<menuPosition){
			menu.style.position='static';
			
			}
		else if (offset<footerPosition-menuHeight){
			menu.style.position='fixed';
			menu.style.top='0';
			}
		else{
			menu.style.position='absolute';
			menu.style.top=(footerPosition-menuHeight)+'px';
			
			}
	}
}