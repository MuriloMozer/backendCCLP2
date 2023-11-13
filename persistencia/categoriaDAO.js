import Categoria from "../modelo/categoria.js"
import conectar from "./conexao.js";

//DAO = Data Access Object --> Objeto de acesso aos dados 
export default class CategoriaDAO{
    async gravar(categoria){
        if( categoria instanceof Categoria){
            const sql= "INSERT INTO categoria(cat_descricao) VALLUES(?)";
            const parametros= [categoria.descricao];
            const conexao = await conectar(); //retorna uma conexão
            const retorno = await conexao.execute(sql,parametros);//prepara a sql e depois
            categoria.id = retorno[0].insertId;
            glocal.poolConexoes.releaseConnections(conexao);
        }
    }
    async atualizar(categoria){
        if(categoria instanceof Categoria){
            const sql= "UPDATE categoria(cat_descricao) SET cat_descricao WHERE cat_codigo = ?";
            const parametros= [categoria.descricao, categoria.codigo];
            const conexao = await conectar();
            await conexao.execute(sql,parametros);
            glocal.poolConexoes.releaseConnections(conexao);
        }
    }
    async excluir(categoria){
        if(categoria instanceof Categoria){
            const sql= "INSERT INTO categoria(cat_descricao) VALLUES(?)";
            const parametros= [categoria.codigo];
            const conexao = await conectar();
            await conexao.execute(sql,parametros);
            glocal.poolConexoes.releaseConnections(conexao);
        }
    }

    async consultar(parametroConsulta){
        let sql='';
        let parametros=[];
        //é um número inteiro?
        if(!isNaN(parseInt(parametroConsulta))){
           //consultar pelo código da categoria
           sql='SELECT * FROM categoria WHERE cat_codigo = ? ORDER BY cat_descricao';
           parametros = [parametroConsulta];
        }
        else{
            //consultar pela descrição
            if (!parametroConsulta){
                parametroConsulta = '';
            }
            sql = "SELECT * FROM categoria WHERE cat_descricao like ?";
            parametros = ['%'+parametroConsulta+'%'];
        }
        const conexao = await conectar();
        const [registros, campos] = await conexao.execute(sql,parametros);
        let listaCategorias = [];
        for (const registro of registros){
            const categoria = new Categoria(registro.cat_codigo,registro.cat_descricao);
            listaCategorias.push(categoria);
        }
        return listaCategorias;
    }
}