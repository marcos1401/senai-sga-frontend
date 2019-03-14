/*

--Exercicio 01--

let re = 15 * 8;

alert("15*8 = "+re);

let usuario = prompt("Quem és tu??");

alert("Bem vindo, "+ usuario)

var n1= parseFloat(prompt("Digite a quantidade de pessaos que votaram no Candidato A "));    
var n2= parseFloat(prompt("Digite a quantidade de pessaos que votaram no Candidato B "));
var total = n1+n2;

var calculo1 = (n1/total)*100;
var calculo2 = (n2/total)*100;

alert("O cálculo do candidato A:"+calculo1); 
alert("O cálculo do candidato B:"+calculo2); 

--Exercicio 02--
var n1= parseFloat(prompt("Digite a quantidade de grãos que o animal come por dia.")); 
var n2= parseFloat(prompt("Digite a quantidade de grãos que tem no estoque. ")); 
var resultado = n2/n1;

alert("O animal tem "+resultado+" dias de suprimento");


--Exercicio 03--

*/

var n1= parseFloat(prompt("Digite a quantidade de cigarros que você por dia.")); 
var n2= parseFloat(prompt("Digite o valor do cigarros.")); 
var n3= parseFloat(prompt("Digite a quantos anos fuma cigarros.")); 

var resultado = (n1*n2)*(n3*365) ;

alert("Você tem um prejuízo monetário de "+resultado+".");