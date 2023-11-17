import express from 'express';
import rotaCategoria from './rotas/rotaCategoria.js';
import rotaProduto from './rotas/rotaProduto.js';
import cors from 'cors';

//aplicação HTTP pronta, bastando parametrizá-la
const host = "0.0.0.0";
const porta = 4000;

const app = express();
app.use(cors({origin:"*"}));
//preparar a app para encontrar o formato JSON
app.use(express.json());

app.use('/categoria',rotaCategoria);
app.use('/produto',rotaProduto);

app.listen(porta, host, ()=>{
    console.log(`API do sistema em execução:${host}:${porta}`);
})