function navFunction(){
	var x = document.getElementById('bar');
	if(x.className === "topnav"){
		x.className +=" responsive";
	}
	else
	{
		x.className = "topnav";
	}
}