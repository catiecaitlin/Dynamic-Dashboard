$(document).ready(function() {

	//OPEN REQUIREMENTS MENU
		$('#primary-nav .requirements').on('click', function(e) {
	    //PREVENT DEFAULT FROM PAGE SHIFTING DOWN TO THE ANCHOR #ID
	    e.preventDefault();
		//TARGET ALL THE SIBLINGS OF INTERNATIONAL AND REMOVE THE ACTIVE CLASS -- CLEAN UP
	    $('#primary-nav .requirements').siblings().removeClass('active');
	    //ADD ACTIVE CLASS TO INTERNATIONAL IF IT DOESN'T HAVE IT. IF IT HAS IT THEN IT REMOVES IT. THIS IS WHY YOU CAN CLICK A SECOND TIME TO MAKE THE MENU GO BACK UP
	    $('#primary-nav .requirements').toggleClass('active');
	    //if you've clicked requirements and it has active class
	    if ($('#primary-nav .requirements').hasClass('active')){
	    	//then remove hide from the drop-menu
	    	$('#requirements-drop').slideDown(150).removeClass('hide');
	    } else {
	    	$('#requirements-drop').slideUp(150).addClass('hide');
    	}

	});

});

