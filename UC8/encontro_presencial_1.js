/*
Situação-problema: Codificação de um Sistema de
Cadastro de Peças
A empresa Savinis, focada no desenvolvimento de software de alta
performance, contratou você para realizar a programação de um sistema de
cadastro de peças, que deverá atender os seguintes requisitos:
- Se a peça possuir um peso superior a 100gramas, pode cadastrar.
- Dada a capacidade de cada caixa, caso a lista de peças seja superior a
10, imprima uma mensagem informando não ter capacidade suficiente.
-  Caso a peça tenha um nome com quantidade inferior a 3 caracteres,
informe uma mensagem de erro.
Para criação desse sistema de cadastro, você, enquanto programador(a)
responsável, deverá solucionar os seguintes desafios:
- Aplicar técnicas de programação e ferramentas para desenvolvimento do
código.
- Aplicar linguagem de programação JavaScript para implementação do
sistema.
*/

const listaDePecas = ['Peca de teste' , 'AB' , 'Peca B']

console.log('quantidade de caracteres')

if (listaDePecas.length <= 10){
    console.log('as peças podem ser cadastradas');
}

console.log('quantidade de caracteres')

for(let index =  0; index < listaDePecas.length; index++){
    const pecaAtual = listaDePecas[index];
    if (pecaAtual.length <3){
        console.log(pecaAtual + ': a peca possui nome inferior a 3 caracteres e não pode ser cadastrada.');
    } else {
        console.log(pecaAtual + ': a peça pode ser cadastrada');
    }
}

console.log('peso da peça')

const pesoDaPecaEmGramas = 50;

if (pesoDaPecaEmGramas >= 100){
    console.log('peso suficiente.');
} else {
    console.log('valor insuficiente');
}