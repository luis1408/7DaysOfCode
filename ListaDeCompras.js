let listaComidas = [];
let listaItens = [];
let listaRoupas = [];
let listaLivros = [];
let adicionar = 'sim';
let produto;
let categoria;
let remover;

while(adicionar === 'sim') {

    if(listaComidas.length === 0 && listaItens.length === 0 && listaRoupas.length === 0 && listaLivros.length === 0){
        adicionar = prompt("Você deseja adicionar algo na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        adicionar = prompt("Você deseja adicionar algo na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }

    while (adicionar != "sim" && adicionar != "não" && adicionar != "remover") { 
        alert(`Operação não reconhecida!`);
        adicionar = prompt("Você deseja adicionar algo na lista de compras? Responda 'sim' ou 'não'.");
        }
        
        if (adicionar === "não"){
            break;
        }

    if (adicionar === 'sim') {
        produto = prompt('Qual produto deseja inserir?');
        categoria = prompt(`Em qual categoria se encaixa?\n 1 para comidas;\n 2 para itens;\n 3 para roupas;\n 4 para livros.`)

        if (categoria == 1){
            listaComidas.push(produto);
        }else if (categoria == 2){
            listaItens.push(produto);
        }else if (categoria == 3){
            listaRoupas.push(produto);
        }else if (categoria == 4){
            listaLivros.push(produto);
        }else {
            alert("Essa categoria não foi pré-definida.")
        }

    }else if (adicionar === 'remover') {
        if(listaComidas.length === 0 && listaItens.length === 0 && listaRoupas.length === 0 && listaLivros.length === 0){ 
            alert(`A lista está vazia!`);
        } else { 
            remover = prompt(`Lista de compras:\n  Comidas: ${listaComidas}\n  Itens: ${listaItens}\n  Roupas: ${listaRoupas}\n  Livros: ${listaLivros}\n\nQual produto você deseja remover?`);
            if(listaComidas.indexOf(remover) != -1){
                listaComidas.splice(listaComidas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(listaItens.indexOf(remover) != -1){
                listaItens.splice(listaItens.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (listaRoupas.indexOf(remover) != -1){
                listaRoupas.splice(listaRoupas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (listaLivros.indexOf(remover) != -1){
                listaLivros.splice(listaLivros.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
        }
    }
}
alert(`Lista de compras: 
    Comidas: ${listaComidas};
    Itens: ${listaItens};
    Roupas: ${listaRoupas};
    Livros: ${listaLivros}`);
