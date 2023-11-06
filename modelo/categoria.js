import CategoriaDAO from "../persistencia/categoriaDAO.js";

export default class Categoria{
    //definição do atributos privados
    #codigo;
    #descricao;

    constructor(codigo=0, descricao=''){
        this.#codigo=codigo;
        this.descricao=descricao;
    }

    //métodos de acesso público
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

    //override do método toJSON
    toJSON(){
        return{
            codigo:this.#codigo,
            descricao:this.#descricao
        }
    }

    //camada de modelo acessa a camada de persistencia
    async gravar(){
        const catDAO = new CategoriaDAO();
        await catDAO.gravar(this);
    }
    async excluir(){
        const catDAO = new CategoriaDAO();
        await catDAO.excluir(this);
    }
    async atualizar(){
        const catDAO = new CategoriaDAO();
        await catDAO.atualizar(this);
    }
    async consultar(){
        const catDAO = new CategoriaDAO();
        await catDAO.consultar(this);
    }
}