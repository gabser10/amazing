$(document).ready(function () {
    $(".close").click(function() {
	$(".ilgruppo").animate({
            backgroundColor: "#FFF"
        }, 400);
        $(".box1").hide(600);
        $(".box2").hide(600);
        $(".box3").hide(400);
        $(".box4").hide(600);
        $(".box5").hide(600);
        $(".box6").hide(600);
        $(".logo1").delay(500).fadeIn(200);
        $(".logo2").delay(500).fadeIn(200);
        $(".logo3").delay(500).fadeIn(200);
        $(".logo4").delay(500).fadeIn(200);
        $(".logo5").delay(500).fadeIn(200);
        $(".logo6").delay(500).fadeIn(200);
    });
    $(".logo1").click(function() {
	
        $(".ilgruppo").delay(400).animate({
            backgroundColor: "#8a6540"
        }, 400);
        
        $(".logo1").fadeOut(400);
        $(".logo2").fadeOut(400);
        $(".logo3").fadeOut(400);
        $(".logo4").fadeOut(400);
        $(".logo5").fadeOut(400);
        $(".logo6").fadeOut(400);
        
        $(".box1").delay(400).show('drop', 600);
        
    });
    $(".logo2").click(function() {
	
        $(".ilgruppo").delay(400).animate({
            backgroundColor: "#8a6540"
        }, 400);
        
        $(".logo1").fadeOut(400);
        $(".logo2").fadeOut(400);
        $(".logo3").fadeOut(400);
        $(".logo4").fadeOut(400);
        $(".logo5").fadeOut(400);
        $(".logo6").fadeOut(400);
        
        $(".box2").delay(400).show(600);
        
    });
     $(".logo3").click(function() {
	
        $(".ilgruppo").delay(400).animate({
            backgroundColor: "#8a6540"
        }, 400);
        
        $(".logo1").fadeOut(400);
        $(".logo2").fadeOut(400);
        $(".logo3").fadeOut(400);
        $(".logo4").fadeOut(400);
        $(".logo5").fadeOut(400);
        $(".logo6").fadeOut(400);
        
        $(".box3").delay(400).show(600);
        
    });
     $(".logo4").click(function() {
	
        $(".ilgruppo").delay(400).animate({
            backgroundColor: "#8a6540"
        }, 400);
        
        $(".logo1").fadeOut(400);
        $(".logo2").fadeOut(400);
        $(".logo3").fadeOut(400);
        $(".logo4").fadeOut(400);
        $(".logo5").fadeOut(400);
        $(".logo6").fadeOut(400);
        
        $(".box4").delay(400).show(600);
        
    });
     $(".logo5").click(function() {
	
        $(".ilgruppo").delay(400).animate({
            backgroundColor: "#8a6540"
        }, 400);
        
        $(".logo1").fadeOut(400);
        $(".logo2").fadeOut(400);
        $(".logo3").fadeOut(400);
        $(".logo4").fadeOut(400);
        $(".logo5").fadeOut(400);
        $(".logo6").fadeOut(400);
        
        $(".box5").delay(400).show(600);
        
    });
     $(".logo6").click(function() {
	
        $(".ilgruppo").delay(400).animate({
            backgroundColor: "#8a6540"
        }, 400);
        
        $(".logo1").fadeOut(400);
        $(".logo2").fadeOut(400);
        $(".logo3").fadeOut(400);
        $(".logo4").fadeOut(400);
        $(".logo5").fadeOut(400);
        $(".logo6").fadeOut(400);
        
        $(".box6").delay(400).show(600);
        
    });
}); 