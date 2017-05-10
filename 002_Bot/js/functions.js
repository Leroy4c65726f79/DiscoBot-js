$(document).ready(function () {

    //Remove outline from links
	$("a").click(function(){
		$(this).blur();
	});
	
	//open all external links in new windows
	$("a[href*='http://']:not([href*='"+location.hostname+"'])").attr("target","_blank");
	
});