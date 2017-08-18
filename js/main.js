function responsiveNavMenuIcon(){
	var x = document.getElementById("topnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function flipCard(){
	var x = document.getElementById("flip-card");
	if(x.className === ""){
		x.className += "flipped";
	}else{
		x.className = "";
	}
}

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 80
        }, 1000);
    }

});