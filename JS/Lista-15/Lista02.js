/*--Exercicio 01--*/

let n1 = parseFloat(prompt("Digite o primeiro numero: "));
let n2 = parseFloat(prompt("Digite o segundo numero: "));
let n3 = parseFloat(prompt("Digite o terceiro numero: "));

let r1 = n1 * 2 * (n2 / 2);      
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

let peso = parseFloat(prompt("Entre com o peso: "))

if  (peso > 50)  { 
    excesso = peso - 50;
	multa   = excesso * 4;
}else{
    excesso = "zero"
    multa = "ZERO"
}
alert("O excesso de peso foi de " + excesso + " kg, portanto, a multa é de R$" + multa);

/*--Exercicio 05--*/


let qnt_ganha = parseFloat(prompt("Quanto ganha por hora? "));
let horas_trabalhadas = parseFloat(prompt("Horas trabalhadas por mês: "));

let salario_bruto = qnt_ganha * horas_trabalhadas;
let ir = salario_bruto * 0.11;
let inss = salario_bruto * 0.08;
let sindicato = salario_bruto * 0.05;

alert("+ Salário Bruto : R$ " + salario_bruto +
'\n- IR: R$ ' + ir +
'\n- INSS: R$ ' + inss +
'\n- Sindicato: ' + sindicato +
'\n- Salário Liquido : R$ ' + (salario_bruto - ir - inss - sindicato));


/*--Exercicio 06--*/

let tamanho = parseFloat(prompt("Tamanho em metros quadrados: "));
let litros = tamanho / 3;

if  ( tamanho = 54 == 0){
    latas = tamanho / 54;
}else{ 
    latas = (tamanho / 54) + 1;
}

let preco = latas * 80;
alert("Latas as serem compradas = " + latas +
'\nR$' + preco);



/*--Exercicio 07--*/

let areaRet = parseFloat(prompt("Digite o tamanho da área a ser pintada, em m²: "));
let rendLitro = areaRet/8;
let litroLata = 18;
let litroGalao = 3.6;
let precoLata = 80;
let precoGalao = 25;
let qtdLata = ((rendLitro / litroLata)*1.10);
let qtdGalao = ((rendLitro / litroGalao)*1.10);
let compraLata = precoLata*qtdLata;
let compraGalao = precoGalao*qtdGalao ;
let BuyLata = (rendLitro / litroLata);
let BuyGalao = ((rendLitro / litroLata) / litroGalao);
let Mix = (BuyLata*precoLata)+(BuyGalao*precoGalao);

alert("\nSegue abaixo a quantidade de tinta a ser comprada e os preços em três situações: "+
"\n1) Compra de latas de 18 litros:\nQuant: "+qtdLata+"\nPreço: "+ compraLata +
"\n2) Compra de galões de 3,6 litros:\nQuant: "+qtdGalao+"\nPreço: "+ compraGalao +
"\n3) Compra de latas e galões de forma a pagar o mínimo possível:\nQuant. de latas: "+ BuyLata +"\nQuant. de galões: " + BuyGalao + "\nPreço Total: "+ Mix);

/*--Exercicio 08--*/

let tamanhi = parseFloat(prompt('Tamanho do arquivo (MB): '));
let velocidade = parseFloat(prompt('Velocidade de Internet (MBps): '));

let a = (tamanhi / velocidade) * 60;

alert("Tempo aproximado de download: " + a + " Minutos ");


