/*
Através das operações de redução, é possível criar uma função de composição, que se trata de várias
funções reduzidas em uma só, seguindo o modelo genérico ou template:

const composicao = 
    (...fns) => 
        (valor) => fns.reduce((acc,fn) => fn(acc), valor)

onde:
- ... é um operador de JavaScript que permite expandir o número de elementos ou argumentos.
Usando ele, não precisamos definir a quantidade exata de argumentos, ou seja, podemos usar
quantos argumentos forem necessários.
- fns.reduce é a redução de TODAS as funções em uma só. No caso, as funções irão retornar listas, logo, 
podemos reduzir as listas produzidas por essas funções em uma função só.
- (acc,fn) => fn(acc), valor é a aplicação das funções em função do acumulador, e o valor é o valor inicial,
ou i. 

*/

/*
[EXEMPLO] Crie um programa para contar o número de caracteres de cada palavra de uma lista, multiplicar esse valor por 3 
e depois gerar uma lista crescente dessa lista resultante. Você deve compor as funções de contagem, de triplicação e de 
ordenação em uma única função.
*/

const contagem = (lista) => lista.map((valor) => valor.length) //retorna uma nova lista, onde cada elemento é o tamanho dos elementos da lista anterior
const triplo = (lista) => lista.map((valor) => 3*valor) //retorna uma nova lista onde cada elemento é o triplo dos elementos da lista anterior
const ordenacao = (lista) => lista.sort((a,b) => a-b) //retorna uma nova lista organizada em ordem crescente

// fórmula ou template geral de composição de funções
const composicao = 
    (...fns) => 
        (valor) => fns.reduce((acc,fn) => fn(acc), valor)

const fResultante = composicao(contagem,triplo,ordenacao) //função resultante, que é a composição de outras três funções exatamente nesta ordem

const nomes = ['Ana Beatriz', 'Bia', 'Guilherme', 'João', 'Rafael'] //a lista original

console.log(fResultante(nomes))//finalmente, é impresso o resultado