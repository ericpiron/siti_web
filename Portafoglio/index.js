
function salvaSulServer(giorno, motivo, importo){
    $.post(
        "./salvaMovimenti.php",
        {
            nuovaData: giorno,
            nuovoMotivo: motivo,
            nuovoImporto: importo
        }
    );
}

function calcolaTotale(){
    
    //ciclo for su tutti gli elementi di classe "valore"
    //per sommare tutti gli importi
    //per ora il risultato lo stampo nella console

    totale = 0;
    for(i = 0; i < $(".valore").length; i++){
        totale += parseFloat( $(".valore")[i].textContent);
    }

    $("#totale").text(totale);
}

function aggiungiMovimento(giorno, motivo, importo){
    nuovoDiv = $("<div class = 'movimento'></div>");
    nuovoDivGiorno = $("<div class = 'giorno'></div>");
    nuovoDivMotivo = $("<div class = 'motivo'></div>");
    nuovoDivImporto = $("<div class = 'importo'></div>");
    nuovoSpanValore = $("<span class = 'valore'></span>");

    $(nuovoDivGiorno).text(giorno);
    $(nuovoDivMotivo).text(motivo);
    $(nuovoSpanValore).text(importo);


    nuovoDivImporto.append(nuovoSpanValore).append("€");
    nuovoDiv.append(nuovoDivGiorno);
    nuovoDiv.append(nuovoDivMotivo);
    nuovoDiv.append(nuovoDivImporto);

    if(importo >= 0){
        nuovoDiv.addClass("entrata");
    } else {
        nuovoDiv.addClass("uscita");
    }

    $("#area-movimenti").append(nuovoDiv);

    calcolaTotale();

}

$(document).ready(function(){
    //quando clicco su + compare l'area di inserimento
    $("#aggiungi").click(function(){
        $("#area-inserimento").css("display", "block")
    });

    //quando sono nel calendario e premo esc scompare la barra
    $("#nuovo-giorno").keyup(function(event){
        if(event.key === "Escape"){
            $("#area-inserimento").css("display", "none")
        } else if(event.key === "Enter"){
            aggiungiMovimento(
                $("#nuovo-giorno").val(),
                $("#nuovo-motivo").val(),
                $("#nuovo-importo").val()
            );

            salvaSulServer(
                $("#nuovo-giorno").val(),
                $("#nuovo-motivo").val(),
                $("#nuovo-importo").val()
            );
        }
    });

    //quando sono nel motivo e premo esc scompare la barra
    $("#nuovo-motivo").keyup(function(event){
        if(event.key === "Escape"){
            $("#area-inserimento").css("display", "none")
        } else if(event.key === "Enter"){
            aggiungiMovimento();
        }
    });

    //quando sono nel importo e premo esc scompare la barra
    $("#nuovo-importo").keyup(function(event){
        if(event.key === "Escape"){
            $("#area-inserimento").css("display", "none")
        } else if(event.key === "Enter"){
            aggiungiMovimento();
        }
    });

    $.get(
        "caricaMovimenti.php",
        function(datiDalServer){
            nuoviMovimenti = datiDalServer.split('\n');
            for(y=0; y<nuoviMovimenti.length-1; y++){
                movimento = nuoviMovimenti[y];
                datiMovimento = movimento.split(';');

                giorno = datiMovimento[0];
                motivo = datiMovimento[1];
                importo = datiMovimento[2];
                aggiungiMovimento(giorno, motivo, importo);
            }
        }
    );

});

