let listaComidas = [];
let listaItens = [];
let listaRoupas = [];
let listaLivros = [];

let pergunta = 's';

while(pergunta === 's') {
    pergunta = prompt('Vc deseja adicionar algo em sua lista de compras? s ou n');

    if (pergunta === 's') {
        let produto = prompt('Qual produto deseja inserir?');
        let categoria = prompt('Em qual categoria esse produto se encaixa?(comida, item, roupa, livro)');
        if (categoria === 'comida'){
            listaComidas.push(produto);
        }else if (categoria === 'item'){
            listaItens.push(produto);
        }else if (categoria === 'roupa'){
            listaRoupas.push(produto);
        }else if (categoria === 'livro'){
            listaLivros.push(produto);
        }
    }
}
alert(`Lista de compras: 
    comidas: ${listaComidas};
    Itens: ${listaItens};
    Roupas: ${listaRoupas};
    Livros: ${listaLivros}`);
