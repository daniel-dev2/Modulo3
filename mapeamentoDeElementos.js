/*
Toda vez que precisarmos que algo aconteça para TODOS os valores de uma lista, podemos usar 
o conceito de mapeamento, através da função pré-definida .map
*/

/*
A função .map(f) executa um método, comportamento, função, para cada valor de uma lista, sua sintaxe é:
nomeDaLista.map(f), onde f é a função, que pode ser uma função anônima (definida no momento de sua aplicação),
ou uma função comum.

EXEMPLO: Programa que calcula o tripo de todos os valores de uma lista QUALQUER
*/

// a lista em questão
const listaDeValores = [1,2,3,4,5]

const triplo = (lista) => lista.map((numeroDaLista) => numeroDaLista * 3) //lista.map(f)
console.log(triplo(listaDeValores))

//EXEMPLO: Programa para aplicar um desconto de 10% em uma lista de produtos.

const listaDeProdutos = [15.76, 98.13, 15, 76, 100]

const desconto = (lista) => lista.map((valorDaLista) => valorDaLista -valorDaLista*0.1)

console.log(desconto(listaDeProdutos))

//EXEMPLO: Programa para extrair a inicial de cada nome de uma lista.

const listaDeNomes = ['bri', 'suz', 'luc', 'dan', 'ana']

//extrai a primeira posição de uma lista (strings são listas em JavaScript)
const extrai = (n) => n[0]
// retorna a aplicação da função extrai em uma lista para cada elemento da lista
const inicial = (lista) => lista.map(extrai)

console.log(inicial(listaDeNomes))

//EXEMPLO: Programa para adicionar um sobrenome a cada nome de uma lista.

const listaDeApelidos = ['suz', 'biz', 'gui', 'bia', 'ana']

// para cada nomeDaLista, retorne o nomeDaLista junto com o nome "Ferreira"
const adicionarSobrenome = (lista) => lista.map((nomeDaLista) => nomeDaLista + " Ferreira")

console.log(adicionarSobrenome(listaDeApelidos))