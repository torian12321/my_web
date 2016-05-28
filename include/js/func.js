// Pretty simple huh?
var scene = document.getElementById('header');
var parallax = new Parallax(scene);


$('.menu-activate').click(function(){
	$('#main-navigation').toggleClass('active');
});
/*
$('#main-navigation a').click(function(){
	$('#main-navigation').removeClass('active');
});
*/

$('input, textarea').focusout(function(){
  var
  field = $(this),
  value = field.val().replace(/\s/g, '');   //remove space


  if( value != ''){
    field.addClass('filled');
  }else{
    field.removeClass('filled');
    field.val('');
  }

  field_validate(field);
});

function field_validate(field){
	var isValid = true;

	if(field.val() == ''){
		isValid = false;
	}else if(field.hasClass('to-validate-email')){
		//email validation
		var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if (!emailFilter.test(field.val())) {
			isValid = false;
		}
	}	
	
	if(!isValid){
		field.addClass('error');	
	}else{
		field.removeClass('error');		
	}
	return(isValid);
}

function form_validate(formSelector){
	var isValid = true;

	$(formSelector + ' .to-validate').each(function( index ){
		if(!field_validate($(this))){
			isValid = false;
		}
	});
	return(isValid);
}


/*Scroll events*/
//show / hide nav when are close to profile-1
$('#bio-list').waypoint(function(direction) {
  $('#main-navigation').toggleClass('hidden');
  }, {
   offset: 200
});


//Smooth Scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top
        }, 1250);
        return false;
      }
    }
  });
});

$('#contact_mail').click(function(){
    $('#contact_name').focus();  
});

$('#contact_form button').click(function(){
	console.log(AjaxURL);
	
	if(form_validate('#contact_form')){
		
		var data = {
			name   : $('#contact_name').val(),
			email  : $('#contact_email').val(),
			message: $('#contact_content').val()
		};
		$.ajax({
			method  : 'post',
			dataType: 'json',
			url     : 'http://localhost/skrollr/include/php/post-send_contact_mail.php ',
			data    : data
		});
/*
		url     : AjaxURL + 'post-send_contact_mail.php',
		http://localhost/skrollr/skrollr/include/php/post-send_contact_mail.php 
*/
		$('#contact_form').fadeOut(1000);
		$('.form-valid_message').delay(1000).fadeIn(1000);
		
	}
	return(false);
});