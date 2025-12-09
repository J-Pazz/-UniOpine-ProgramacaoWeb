<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$arquivo = __DIR__ . '/dados.json';

if (file_exists($arquivo)) {
    $conteudo = file_get_contents($arquivo);
    
    echo $conteudo;
} else {
    echo json_encode([]);
}
?>