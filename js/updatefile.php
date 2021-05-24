<?php
$myfile = fopen("reference.txt", "w+") or die("Unable to open file!");
$txt = "2";
fwrite($myfile, $txt);
fclose($myfile);
?>