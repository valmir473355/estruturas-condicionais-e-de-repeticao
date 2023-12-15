let idade = 19;



function verificarIdade(idade) {
    if (idade <= 17){
        return "Sou menor de idade";
    } else if (idade > 17 && idade < 60){
        return "Sou adulto";
    } else {
        return "Estou na melhor idade";
    }
}

console.log(verificarIdade(5));
console.log(verificarIdade(10));
console.log(verificarIdade(20));

//  switch //

// 1 - Cadastrar
// 2 - Listar
// 3 - Pesquisar
// 4 - Sair


let menu = 2;

switch (menu) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Listar");
        break;
    case 3:
        console.log("Pesquisar");
        break;
    default:
        console.log("Sair");
}




// for 

for (var i = 0; i < 10; i++) {
    console.log("Olá mundo");
}


// while


var j = 0;

while (j < 10) {
    console.log("Olá mundo");
    j++;
}



var k = 11;
// do 

do {
    console.log("Olá mundo");
    k++;
}   while(k < 10);

