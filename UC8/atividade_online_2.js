/*
Você desenvolveu o algoritmo para um sistema de cadastro de eventos. Agora, para resolver 
a situação-problema apresentada, você deve aplicar as técnicas de programação e as ferramentas aprendidas, para implementar esse sistema, 
por meio da linguagem JavaScript.
*/

const Data = 20;
const Hoje = 18;

if (Data > Hoje){
    console.log ('evento permitido');
} else {
    console.log('data inválida');
}

const idade = 22;

if (idade > 18){
    console.log('permitir cadastro');
} else {
    console.log('cadastro não é permitido pela idade');
}

const participantes = 99;

if(participantes < 100){
    console.log('permitir cadastro de todos participantes');
} else {
    console.log('limite de participantes excedido');
}
