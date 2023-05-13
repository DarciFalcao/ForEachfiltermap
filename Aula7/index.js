let baseDeLivros = []

function cadastrarLivro(){
    
    let codigo = prompt("Digite o código do livro")
    let titulo = prompt("Digite o título do livro")
    let categoria = prompt("Digite a categoria do livro")

    let livro = {
        codigo,
        titulo,
        categoria,
    }

    let msgErro = validarCodigo(livro)
    if(msgErro == ''){
        baseDeLivros.push(livro)
    } else {
        alert(msgErro)
    }
    executarMenu()
}

function validarCodigo(livro){
    let msg = ''

    for (let i = 0; i < baseDeLivros.length; i++) {
        let validacao = baseDeLivros[i]
        if(validacao.codigo === livro.codigo){
            msg += "Esse código de livro ja existe"
        } 
    }
        return msg
        
}

function pesquisarLivro(){

    let codigoLivro = prompt("Digite o código do livro ")
    
    for (let i = 0; i < baseDeLivros.length; i++) {
         let baseDeLivro = baseDeLivros[i]
         if(codigoLivro == baseDeLivro.codigo){
            alert(`
            Código: ${baseDeLivro.codigo}
            Título: ${baseDeLivro.titulo}
            Categoria: ${baseDeLivro.categoria}
            `)
        } else {
            alert("Código do livro não encontrado")  
        }
    }
    executarMenu()
}

function executarMenu(){
    
    let acao = prompt(`
    (1) - Cadastrar;
    (2) - Pesquisar;
    (3) - Excluir;
    (4) - Alterar; 
    (5) - Filtrar livros por categoria
    (0) - Sair;
    `)
    if(acao == "1"){
        cadastrarLivro()
    } else if(acao == "2"){
        pesquisarLivro()
    } else if(acao == "3"){
        excluirLivro()
    } else if(acao == "4"){
        alterarLivros()
    } else if(acao == "5"){
        filtrarLivros()
    }

}

function excluirLivro(){
    let excluir = prompt("Digite o codigo do livro para exlcuir")
    let livroExcluido = null
    for (let i = 0; i < baseDeLivros.length; i++) {
        if(baseDeLivros[i].codigo == excluir){
            baseDeLivros.splice(i,1)
            alert("Esse livro foi removido")
        } 
    }

    if(livroExcluido == null){
        alert(alert("Esse código de livro ainda não existe"))
    }
    executarMenu()
}

function filtrarLivros(){

    let filtrarcategoria = prompt("Digite a categoria do livro que você deseja procurar")

    for (let i = 0; i < baseDeLivros.length; i++) {
        let filtro = baseDeLivros[i]
        if(filtrarcategoria == filtro.categoria){
            alert(`
            Código: ${filtro.codigo}
            Título: ${filtro.titulo}
            Categoria: ${filtro.categoria}
            `)
        } else {
            alert("Categoria do livro não encontrada")
        }
    }
    executarMenu()
}

function alterarLivros(){
    let alterarlivro = prompt("Digite o código do livro que deseja alterar")

    for (let i = 0; i < baseDeLivros.length; i++) {
        let alterar = baseDeLivros[i]
        if(alterar.codigo === alterarlivro){
            let novoCodigo = prompt("Digite o novo código")
            let novoTitulo = prompt("Digite o novo Título")
            let novaCategoria = prompt("Digite a nova categoria")
            alterar.codigo = novoCodigo
            alterar.titulo = novoTitulo
            alterar.categoria = novaCategoria
            baseDeLivros.splice(i, 1, alterar) 
            executarMenu()
        } else {
            alert("Código não encontrado para alteração")
        }
         }
    
    executarMenu()
}


executarMenu()