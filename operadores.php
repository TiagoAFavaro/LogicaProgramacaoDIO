<?php

$boneco = "Angela";
$chuva = true;
$guardaChuva = true;

$resultado = ($chuva == false) || ($guardaChuva == true);

if($resultado == true){
    return "$boneco Pode sair";
}
else {
    return "$boneco Não pode sair";
}
