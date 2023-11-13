import {Router} from "express";
import ProdutoCtrl from "../controle/produtoCtrl";

const prodCtrl = new ProdutoCtrl();
const rotaProduto = new Router();

rotaProduto.get('/', prodCtrl.consultar);
rotaProduto.get('/:termo', prodCtrl.consultar);
rotaProduto.post('/', prodCtrl.gravar);
rotaProduto.patch('/', prodCtrl.atualizar);
rotaProduto.put('/', prodCtrl.atualizar);
rotaProduto.delete('/', prodCtrl.excluir);

export default rotaProduto;