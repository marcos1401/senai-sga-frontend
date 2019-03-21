
/*--Exercicio 09--*/


var n1 = parseFloat(prompt("Digite o primeiro numero"));
var n2 = parseFloat(prompt("Digite o segundo numero"));
var n3 = parseFloat(prompt("Digite o terceiro numero"));
      
if (n1 <= n2 && n2 <= n3){ 
    alert( n1+ ","+ n2+","+ n3); 
    }else if (n1 <= n3 && n3 <= n2){ 
        alert( n1+","+ n3+","+ n2); 
    }else if (n2 <= n1 && n1 <= n3){ 
        alert( n2+ ","+ n1+","+ n3); 
    }else if (n2 <= n3 && n3 <= n1) { 
        alert( n2+ ","+ n3+","+ n1); 
    }else if (n3 <= n1 && n1 <= n2){ 
        alert( n3+ ","+ n1+","+ n2); 
    }else{ 
        alert( n3+ ","+ n2+","+ n1); 
    } 

/*--Exercicio 10--*/


let ola = prompt("Digite qual é seu turno: M - matutino / T - vespertino / N - Noturno ");

switch (ola) {
        case "M":
        alert("Bom dia");
        break;
        case "T":
        alert("Boa Tarde!");
        break;
        case "N":
        alert("Boa Noite");
        break;
        
}