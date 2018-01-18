// cookie for timer
var myDate = new Date();
function returnEndDate(d,h,m){
	myDate.setDate(myDate.getDate()+d);
	myDate.setHours(myDate.getHours()+h);
	myDate.setMinutes(myDate.getMinutes()+m);
	return myDate;
}
if($.cookie("bm3")){
	var dateEnd = $.cookie("bm3");
}else{
	var dateEnd = returnEndDate(0,0,0);
	$.cookie("bm3", dateEnd, {expires: 3});
};
