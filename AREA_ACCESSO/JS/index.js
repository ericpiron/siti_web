$(document).ready(
    $("#pwd").keypress(function(evento){
        if(evento.which == 13){
            provaAentrare();
        }
    })
);




function provaAentrare(){
    /*alert("hai premuto!"); */
    console.log("PISTOLA!");
    
    console.log( $("#user").val() );
    console.log( $("#pwd").val() );

    /* GET ---> quando vogliamo che il server ci mandi dei valori e noi no
        POST ---> quando vogliamo spedire qualcosa al server */

    $.post("./SERVER/tiRispondoIo.php",
    {
        nomeUtente: $("#user").val(),
        password: $("#pwd").val()
    },
    function(datiDalServer){
        if(datiDalServer == "PUOI ENTRARE"){
            window.location.href = "./prima_pagina.html";
        }
        else{
            alert("ACCESSO NEGATO");
            $("#user").val("");
            $("#pwd").val("");
        }
    });

    
}

/* DA FARE:
    1) Aggiungere alla pagina "prima_pagina.html" un pulsante per tornare alla pagina precedente
    2) Spostare:
        - il file php in una sotto-cartella che si chiama "server"
        - il file css in una sotto-cartella che si chiama "css"
        - il file javascript in una sotto-cartella che si chiama "js"
        Cambiare tutti i riferimenti

        FATTO 17/11/2022
*/
