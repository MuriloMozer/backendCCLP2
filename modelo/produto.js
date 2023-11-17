import ProdutoDAO from "../persistencia/produtoDAO.js"

export default class Produto{
    #codigo;
    #descricao;
    #precoCusto;
    #precoVenda;
    #dataValidade;
    #qtdEstoque;
    #categoria;

    constructor(codigo=0, descricao='', precoCusto=0, precoVenda=0, dataValidade='', qtdEstoque=0, categoria={}){
        this.#codigo=codigo;
        this.#descricao=descricao;
        this.#precoCusto=precoCusto;
        this.#precoVenda=precoVenda;
        this.#dataValidade=dataValidade;
        this.#qtdEstoque=qtdEstoque;
        this.#categoria=categoria;
    }

    get codigo(){
        return this.#codigo;
    }
    set codigo(novoCodigo){
        this.#codigo= novoCodigo;
    }

    get descricao(){
        return this.#descricao;
    }
    set descricao(novaDesc){
        this.#descricao= novaDesc;
    }

    get precoCusto(){
        return this.#precoCusto;
    }
    set precoCusto(novoPrecoCusto){
        this.#precoCusto=novoPrecoCusto;
    }

    get precoVenda(){
        return this.#precoVenda;
    }
    set precoVenda(novoPrecoVenda){
        this.#precoVenda=novoPrecoVenda;
    }

    get dataValidade(){
        return this.#dataValidade;
    }
    set dataValidade(novaDataValidade){
        this.#dataValidade=novaDataValidade;
    }
    get qtdEstoque(){
        return this.#qtdEstoque;
    }
    set qtdEstoque(novaQtdEstoque){
        this.#qtdEstoque=novaQtdEstoque;
    }

    get categoria(){
        return this.#categoria;
    }
    set categoria(novaCategoria){
        this.#categoria= novaCategoria;
    }

    toJSON(){
        return{
            codigo:this.#codigo,
            descricao:this.#descricao,
            precoCusto:this.#precoCusto,
            precoVenda:this.#precoVenda,
            dataValidade:this.#dataValidade,
            qtdestoque:this.#qtdEstoque,
            categoria:this.#categoria.toJSON()
        }
    }

    async gravar(){
        const prodDAO = new ProdutoDAO();
        await prodDAO.gravar(this);
    }
    async excluir(){
        const prodDAO = new ProdutoDAO();
        await prodDAO.excluir(this);
    }
    async atualizar(){
        const prodDAO = new ProdutoDAO();
        await prodDAO.atualizar(this);
    }
    async consultar(param){
        const prodDAO = new ProdutoDAO();
        return await prodDAO.consultar(param);
    }
}