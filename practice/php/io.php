<?php
echo microtime();
$con = file_get_contents('io-test.json');
echo $con;
echo "\n";
echo microtime();
