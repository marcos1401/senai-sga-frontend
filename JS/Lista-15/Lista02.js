/*--Exercicio 01--*/

let n1 = parseFloat(prompt("Digite o primeiro numero: "));
let n2 = parseFloat(prompt("Digite o segundo numero: "));
let n3 = parseFloat(prompt("Digite o terceiro numero: "));

let r1 = n1 * 2 * (n2 / 2)          
let r2 = n1 *  3 + n3;
let r3 = n3 ** 3;

alert("O produto do dobro do primeiro com metade do segundo = " + r1  + 
        "\nA soma do triplo do primeiro com o terceiro = " + r2 +
            "\nTerceiro elevado ao cubo = " +r3);

/*--Exercicio 02--*/

let altura = (prompt("Digite a sua altura: "));

let pesi =  (72.7*altura) - 58;

alert("Seu peso ideal é: "+ pesi +"kg.");

/*--Exercicio 03--*/

let h = (prompt("Digite a sua altura: "));

let pes =  (72.7 * h) - 58;
let pesa =  (62.1 * h) - 44.7;

alert("Caso você seja do sexo masculino, seu peso ideal é: "+ pes +"kg. \n" +
    "Caso você seja do sexo feminino, seu peso ideal é: "+ pesa +"kg.");

/*--Exercicio 04--*/

peso = parseFloat(prompt("Entre com o peso: "))

if  (peso > 50)  { 
	excesso = peso - 50;
	multa   = excesso * 4;
}else{
	excesso = "zero"
    multa = "ZERO"
}
    alert("O excesso de peso foi de " + excesso + " kg, portanto, a multa é de R$" + multa);

/*--Exercicio 05--*/
