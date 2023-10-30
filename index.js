import Produto from './modelo/produto.js';
import Categoria from './modelo/categoria.js';

const categoria = new Categoria(1,'Calçados infantis');
const produto = new Produto(1, 'Tênis Infantl AllStar', 55.36, 159.99, 'indaterminada', 10, categoria);

console.log(produto.toJSON());