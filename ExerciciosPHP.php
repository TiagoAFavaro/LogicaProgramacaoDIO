<?php

// Escreva um script que pede o raio de um círculo, e em seguida exiba o perímetro e área do círculo.
// Para saber o valor do pi, use: M_PI (ele armazena o valor de pi)

echo "Digite o raio de um circulo qualquer em milimetros";

$circulo = 100;
$raio = $circulo/2;

$perimetro = 2 * M_PI * $raio;

echo "\n Perimetro do circulo: $perimetro";

$area = M_PI * ($raio * $raio);

echo "\n Area do circulo: $area";