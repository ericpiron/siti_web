

function azionaBottone(idBottone, numZona){
    if( $(idBottone).hasClass("pulsante-off") ){
        $(idBottone).removeClass("pulsante-off");
        $(idBottone).addClass("pulsante-on");

        $("#messaggio").text("Hai abilitato l'irrigazione nella zona " + numZona);

        $.post(
            "irriga.php", 
            {
                zona: numZona,
                comando: "attiva"
            },
            function(risposta){
                console.log(risposta);
            }
        )
    } 
    else {
        $(idBottone).removeClass("pulsante-on");
        $(idBottone).addClass("pulsante-off");

        $("#messaggio").text("Hai disabilitato l'irrigazione nella zona " + numZona);

        $.post(
            "irriga.php", 
            {
                zona: numZona,
                comando: "disattiva"
            },
            function(risposta){
                console.log(risposta);
            }
        );

    }
} 

$(document).ready(function(){
    $("#zona1").click(function(){
        azionaBottone("#zona1", 1);
    });

    $("#zona2").click(function(){
        azionaBottone("#zona2", 2);
    });
     

    $("#zona3").click(function(){
        azionaBottone("#zona3", 3);
    });

    $("#zona4").click(function(){
        azionaBottone("#zona4", 4);
    });

    $("#zona5").click(function(){
        azionaBottone("#zona5", 5);
    });

    $("#zona6").click(function(){
        azionaBottone("#zona6", 6);
    });
});

function aggiungiZona(){
    numZone = $(".pulsante-zona").length;

    nuovoPulsante = $("<div></div>");
    $(nuovoPulsante).text("Zona " + (numZone + 1));
    $(nuovoPulsante).addClass("pulsante-zona pulsante-off");

    $(nuovoPulsante).attr("id", "zona" + (numZone + 1));

    $(nuovoPulsante).attr("num", numZone+1);

    $("#pulsanti").append($(nuovoPulsante));
    
    $(nuovoPulsante).click(function(event){
        azionaBottone(
            "#" + $(event.target).attr("id"),
            $(event.target).attr("num")
        );
    });
}

function rimuoviZona(){
    numZone = $(".pulsante-zona").length;

    if(numZone>0){
        idUltimaZona = "#zona" + numZone;
        $(idUltimaZona).remove();
    }
    
}