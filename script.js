//Vetor de produtos (Lista)
let produtos = []

//Menu
let menu = "***** LISTA DE PRODUTOS *****\n\n"
    menu += "Menu principal:\n"
    menu += "1º Cadastrar produto\n"
    menu += "2º Listar produtos\n"
    menu += "3º Remover produto\n"
    menu += "4º Finalizar\n"

//Opção do menu
let opcao = 0

//Laço de Repetição
do{

opcao = parseInt(prompt(menu))

switch(opcao) {
    case 1:
        //Adicionando um novo produto
        produtos.push(prompt("Digite o nome do produto para adicioná-lo à lista"))
        alert("Produto adicionado!")
        break;
    case 2:
        //Listando produtos
        let print = "---- PRODUTOS CADASTRADOS ----\n\n"
        for(let i = 0; i < produtos.length; i++) {
            print += `${i + 1}. ${produtos[i]}\n`
        }
        alert(print)
        break;
    case 3:
        //Removendo um produto
        let indiceRemocao = -1

        let nomeProduto = prompt("Digite o nome do produto que deseja remover:")
        
        for(let i = 0; i < produtos.length; i++) {
            if(nomeProduto == produtos[i]) {
                indiceRemocao = i
            }
        }
        if(indiceRemocao != -1){
            produtos.splice(indiceRemocao, 1)
            alert("Produto removido com sucesso!")
        }

        break;
    case 4:
        //Saindo do programa
        alert("Obrigado por utilizar o programa, até logo!")
        break;
    default: 
        alert("Número inválido! Por favor, selecione de 1 a 4 para prosseguir.")
    }
} while(opcao != 4)