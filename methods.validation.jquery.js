/*
*Created	:	Sep-05-2013
*Author		:	Sarath
*Updated	:	Nav-22-2013
*/
//Phone number validation 
// +91 0000 -8888-22
jQuery.validator.addMethod('phone',function(phone){
  	if(phone.length>1){
		var vp=/^[+\(\)\[\]]*([0-9-][ \(\)\[\]]*){1,}$/;
		return vp.test(phone);
	}
	return true;
},$.format("Please enter valid phone number"));

 
//Human name {Charecters and spacees only}//
jQuery.validator.addMethod('human_name',function(name){
	var v_hn=/^[A-Za-z \]{}[A-Za-z]{1,}$/;
	return v_hn.test(name);
},$.format("Please enter valid name"));

//Max Words
//Code from : https://code.google.com/p/jqueryjs/source/browse/trunk/plugins/validate/additional-methods.js?r=6307
jQuery.validator.addMethod("maxWords", function(value, element, params) { 
    return this.optional(element) || value.match(/\b\w+\b/g).length < params; 
}, $.format("Please enter {0} words or less."));

//minWords
jQuery.validator.addMethod("minWords", function(value, element, params) { 
    return this.optional(element) || value.match(/\b\w+\b/g).length >= params; 
}, $.format("Please enter at least {0} words.")); 

jQuery.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, spaces or underscores only please");

jQuery.validator.addMethod("rangeWords", function(value, element, params) { 
    return this.optional(element) || value.match(/\b\w+\b/g).length >= params[0] && value.match(/bw+b/g).length < params[1]; 
}, $.format("Please enter between {0} and {1} words."));

/*
validate date (MM/DD/YYYY)
^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$
*/
jQuery.validator.addMethod('date_mmddyyyy',function(date){
	var v_hn=/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
	return v_hn.test(date);
}, "Invalid date format");
