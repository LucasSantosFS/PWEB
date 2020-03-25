var num1 = prompt("Numéro 1");
var num2 = prompt("Numero 2");

var numf1 = parseFloat(num1);
var numf2 = parseFloat(num2); 

var soma = numf1 + numf2;
var subtracao = numf1 - numf2;
var produto = numf1 * numf2;
var divisao = numf1 / numf2;
var divRest = numf1 % numf2;

alert("Soma: " + soma + "\n" + "Subtração: " +subtracao + "\n" + "Produto: " + produto + "\n" + "Divisao: " + divisao + "\n" + "Resto Divisão: " + divRest);