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

    }
    async excluir(){

    }
    async alterar(){

    }
    async consultar(){

    }
}