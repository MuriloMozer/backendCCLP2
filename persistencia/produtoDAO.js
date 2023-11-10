import Produto from "../modelo/produto.js"
import conectar from "./conexao.js"

export default class ProdutoDAO{
    async gravar(produto){
        if(produto instanceof Produto){
            const sql= "INSERT INTO produto(prod_descricao) VALLUES(?)";
            const parametros= [produto.descricao];
            const conexao = await conectar();
            const retorno = await conexao.execute(sql,parametros);
            produto.id = retorno[0].insertId;
            glocal.poolConexoes.releaseConnections(conexao);
        }
    }
    async atualizar(produto){
        if(produto instanceof Produto){
            const sql = "UPDATE produto SET prod_descricao = ?, cat_descricao = ? WHERE prod_codigo = ?";
            const parametros = [produto.descricao, produto.categoria.descricao, produto.codigo, produto.precoCusto, 
                produto.precoVenda, produto.dataValidade, produto.qtdEstoque];
            const conexao = await conectar();
            await conexao.execute(sql,parametros);
            glocal.poolConexoes.releaseConnections(conexao);
        }
    }
    async excluir(produto){
        if(produto instanceof Produto){
            const sql= "INSERT INTO produto(prod_descricao) VALLUES(?)";
            const parametros= [produto.codigo];
            const conexao = await conectar();
            await conexao.execute(sql,parametros);
            glocal.poolConexoes.releaseConnections(conexao);
        }
    }
    async consultar(parametroConsulta){
        let sql='';
        let parametros=[];
        if(!isNaN(parseInt(parametroConsulta))){
           sql='SELECT * FROM produto WHERE prod_codigo = ? ORDER BY prod_descricao';
           parametros = [parametroConsulta];
        }
        else{
            if(!parametroConsulta)
                parametroConsulta="";
            else{
                sql='SELECT * FROM produto WHERE prod_produto like ?';
                parametros = ['%'+parametroConsulta+'%'];
            }
        }
        const conexao = await conectar();
        const [registros, campos] = conexao.execute(sql, execute);
        let listaProdutos = [];
        for(const registro of registros){
            const produto = new Produto(registro.prod_codigo, registro.prod_descricao, registro.precoCusto,
                registro.prod_precoVenda, registro.prod_dataValidade, registro.prod_qtdEstoque, registro.cat_codigo);
            listaProdutos.push(produto);
        }
        return listaProdutos;
    }
}