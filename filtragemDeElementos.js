/*
Quando quisermos filtrar os elementos de uma lista a partir de um critério que nós mesmos
quisermos definir, podemos usar a função pré-definida filter de javascript
*/
/*
Sintaxe: nomeDaLista.filter(f), onde f é a função que representa os critérios para a
filtragem.
EXEMPLO: listaDeValores.filter((valor) => valor > 15)
"filtre a lista listaDeValores, e para CADA VALOR DA LISTA, se este valor
for maior do que 15, retorne ele"
"o valor é menor ou igual a 15 ? não quero : quero"
*/


// EXEMPLO: Programa para selecionar os nomes que começam com a letra "A".

const listaDeNomes = ['Anna', 'Ariel', 'Arlinda', 'Maria', 'Jéssica', 'Luisa']

// para cada nome da lista, a primeira letra do nome da lista é igual a letra que eu quero ?
const comecaComLetra = (letra) => (lista) => lista.filter((nomeDaLista) => nomeDaLista[0] == letra)
const comecaComLetraA = comecaComLetra('A') // a letra que eu quero é A

console.log(comecaComLetraA(listaDeNomes))

// EXEMPLO: Programa para selecionar produtos que custem menos que R$15.

const listaDeValores = [15.80, 20, 67, 10, 5, 8, 100]

// para cada valor da lista, o valor da lista é menor do que o limite que eu quero ? 
const menosQue = (limite) => (lista) => lista.filter((valorDaLista) => valorDaLista < limite)
const menosQue15 = menosQue(15) // o limite que eu quero é 15

console.log(menosQue15(listaDeValores))

// EXEMPLO: Programa para selecionar os nomes com mais de 4 letras.

const listaDeApelidos = ['Juscelino', 'Adalberto', 'Luis', 'Erica', 'Guto', 'Anna']

// para cada valor da lista, o tamanho do nome da lista (quantidade de letras) é maior do que o limite ?
const maisQue = (limite) => (lista) => lista.filter((nomeDaLista) => nomeDaLista.length > limite)
const maisQueQuatro = maisQue(4) // eu quero que o limite seja 4

console.log(maisQueQuatro(listaDeApelidos))