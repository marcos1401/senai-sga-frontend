/*let cars = {
 gm: ["Corsa", "Classic", "Prisma"],
 fiat: ["Palio", "Uno", "Toro"]
};

document.write(cars["gm"][1]); 

-------------------------------------------------------------------------

let paragrafos =  document.getElementsByTagName("p");

alert(paragrafos[0].innerHTML);

-------------------------------------------------------------------------*/

let nome = document.getElementById("nome").value;

document.getElementById("resultado").innerHTML = nome;

function testar(){
    let nome = document.getElementById("nome");
    let  = document.getElementById("resultado").innerHTML
    resultado.innerHTML = nome.value;
}
function limpar(){
    let nome = document.getElementById("nome");
    nome.value = "";
    nome.focus();
}