
/*
*Created	:	Sep-05-2013
*Author		:	Sarath
*/
//Phone number validation 
// +91 0000 -8888-22
jQuery.validator.addMethod('phone',function(phone){
  var vp=/^[+\(\)\[\]]*([0-9-][ \(\)\[\]]*){6,15}$/;
	return vp.test(phone);
});
 
 
//Human name {Charecters and spacees only}
jQuery.validator.addMethod('human_name',function(name){
	var v_hn=/^[A-Za-z \]{}[A-Za-z]{1,}$/;
	return v_hn.test(name);
});
