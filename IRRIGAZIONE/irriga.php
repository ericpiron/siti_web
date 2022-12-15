<?php

$numero_zona = $_POST['zona'];
$nomeFile ="ZONA " . $numero_zona . ".log";

$nuovoFile = fopen($nomeFile, "a");

/*Quando apro un file:
    - "r": READ - apro in lettura e non posso scriverci dentro;
    - "w": WRITE - apro in scrittura e posso scrivere resettando il file;
    - "a": APPEND - apro in concatenazione e posso scrivere mantenendo le cose vecchie;
*/

$azione = $_POST['comando'];

fwrite($nuovoFile, date(DATE_RFC2822)." : ".$azione."\n");
fclose($nuovoFile);

echo "zona ".$numero_zona." ".$azione;

?>