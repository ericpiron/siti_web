<?php

$fileMovimenti = fopen("Movimenti.txt", "r");

if($fileMovimenti){
    $risposta = "";

    while(($linea = fgets($fileMovimenti)) !== false){
        $risposta = $risposta.$linea;
    }

    echo $risposta;

    fclose($fileMovimenti);
}

?>