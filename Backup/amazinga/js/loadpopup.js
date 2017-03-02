var link_video = "";
var link_video_flag = false;

/******* Script validi per i popup linkati nel menù ****************/

function loadPopup(idmenu){  
    $("#areaPopUp" + idmenu).fadeIn(800);
    adatta(idmenu);
}

function chiudiPopup(idmenu){
    $("#areaPopUp" + idmenu).fadeOut(800);
}

$(window).resize(function(){
    if(typeof idmenu != "undefined")
	adatta(idmenu);
    else
	adatta();
});

function adatta(idmenu){
 
}

/***************************************************************************/

$(document).ready(function(){
    //Attiva le azioni dei popup
    $("#chiudiBoxPopUp").click(function(){ $("#areaPopUp").fadeOut(800);});
});