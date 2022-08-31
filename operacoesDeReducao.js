/* As operações de redução servem para aplicar uma função a TODOS os elementos de uma lista
os reduzindo assim a apenas um valor.

Exemplos de aplicação: somar todos os elementos de uma lista, subtrair todos os elementos de uma lista,
multiplicar todos os elementos de uma lista, retornar o tamanho de todos os elementos de uma lista, etc.
*/

/*
Diferem-se de opeações de mapeamento pois o mapeamento aplica uma função para TODOS os valores
de uma lista, para depois poder retornar a própria lista com os valores alterados.

Já as operações de redução aplicam uma função a TODOS os valores de uma lista, e retorna apenas
o valor resultante da operação que foi feita com todos os valores (soma, subtração, etc).
*/

/*
Sintaxe: nomeDaLista.reduce(f, i), onde:
- f é uma lista que recebe dois parâmetros, acc e x. acc é um acumulador, é ele que irá armazenar o valor inicial e 
o valor anterior para que as operações sejam efetuadas.
- i é o valor inicial, que depende do tipo de problema a ser resolvido. Se for uma soma, usualmente é 0. Se for uma 
multiplicação, usualmente é 1. Se for um problema relacionado a strings, usualmente é ''.
*/

/*
[EXEMPLO] Programa para somar todos os valores de uma lista
*/

const listaDeValores = [1.65, 32.56, 4.3, 5.89, 16.67]
const fSoma = (acc, x) => acc + x

console.log(listaDeValores.reduce(fSoma, 0)) // para cada valor da lista, aplique a função fSoma com o valor inicial 0.

/*
[EXEMPLO] Programa para gerar uma sigla a partir do nome de uma empresa/instituição.
*/

const listaDeNomes = ['Universidade', 'Federal', 'Sergipe']
// podemos realizar reduções com funções anônimas

console.log(listaDeNomes.reduce((acc, x) => acc + x[0], ''))
// para cada valor da lista, some a primeira letra da string (strings são listas em Js) com o acumulador,
// sendo que tal acumulador tem valor inicial '', ou espaço vazio.

//[EXEMPLO] Programa para contar o número de letras de uma lista de palavras.

const listaDePalavras = ['gatos', 'cachorros', 'carros', 'motos', 'pessoas', 'animais']

console.log(listaDePalavras.reduce((acc, x) => acc + x.length, 0))
// para cada valor da lista, some a quantidade de elementos do valor (numero inteiro), com o acumulador, 
// que vale 0.