/*
A empresa Savinis, focada no desenvolvimento de software de alta
performance, contratou você para realizar a programação de um sistema de
controle de alunos de uma escola. O sistema deverá funcionar da seguinte
forma:
Considere a quantidade de alunos presentes na sala, percorra do zero até o
número total de alunos e retornar os seguintes resultados:
- se o número for par, escreva 'par' e o número correspondente.
- se o número for ímpar, escreva 'ímpar' e o número correspondente.
- se o número for zero, escreva 'zero' e o número correspondente.
Para criação desse sistema de cadastro, você, enquanto programador(a)
responsável, deverá solucionar os seguintes desafios:
- Aplicar técnicas de programação e ferramentas para desenvolvimento do
código.
- Aplicar linguagem de programação JavaScript para implementação do
sistema.
*/

const quantidadeDeAlunos = 14;

for(let index = 0; index <= quantidadeDeAlunos; index++){
    if(index === 0){
        console.log('o número é zero');
    } else if(index % 2 === 0){
        console.log('o número é par' + index);
    } else {
        console.log('o número é ímpar' + index);
    }
}
