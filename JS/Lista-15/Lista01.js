
/*--Exercicio 01--*/

alert("Alo Mundo!!")

/*--Exercicio 02--*/

let num = parseFloat(prompt("Digite um numero"));

alert("O número informado foi: "+num);

/*--Exercicio 03--*/

var n1= parseFloat(prompt("Digite o numero de A "));    
var n2= parseFloat(prompt("Digite o numero de B "));
var total = n1+n2;

alert("Cálculo:"+ n1 +"+"+ n2 +"=" +total);

/*--Exercicio 04--*/

var n6= parseFloat(prompt("Digite a nota do 1 Bimestre."));    
var n7= parseFloat(prompt("Digite a nota do 2 Bimestre."));
var n8= parseFloat(prompt("Digite a nota do 3 Bimestre."));
var n9= parseFloat(prompt("Digite a nota do 4 Bimestre."));
var media = (n6+n7+n8+n9)/4;

alert("Media:"+ media);

/*--Exercicio 05--*/

var n10= parseFloat(prompt("Digite a quantidade metros que deseja converter em centímetros. "));
var converter = n10*100;

alert(converter +" cm");

/*--Exercicio 06--*/

var n11= parseFloat(prompt("Digite a quantidade do raio do circulo."));
var area = 3.14 * (n11*n11);

alert("Área do Circulo é:"+ area);

/*--Exercicio 07-- */

var n12= parseFloat(prompt("Digite quanto vale o L do quadrado."));
var areaq = n12 * n12;
var dl = 2 * n12 * n12;

alert("Área do quadrado é: "+ areaq +"\nO dobro da Área do quadrado é: "+ dl ); 

/*--Exercicio 08-- */

var n13= parseFloat(prompt("Quanto você ganha por hora"));    
var n14= parseFloat(prompt("Digite o número de horas trabalhadas no mês "));
var salario = n13 * n14;

alert("Ganha R$" + salario+ " por mês.");

/*--Exercicio 09-- */

let n15= parseFloat(prompt("Digite a temperatura(F) que deseja pare que seja convertido em Celsius. "));

let vt =  n15 - 32;
let c = 5 * vt / 9;

alert(c + " C°");

/*--Exercicio 10-- */

let n16= parseFloat(prompt("Digite a temperatura(F) que deseja pare que seja convertido em Celsius. "));

let vf =  n16 * 1.8;
let f = vf + 32;

alert(f + " F°");

