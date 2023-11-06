import Produto from './modelo/produto.js';
import Categoria from './modelo/categoria.js';

//const categoria = new Categoria(0,'Calçados infantis');

// categoria.gravar.then(()=>{
//     console.log(categoria.id);
// });
const categoria = new Categoria();
categoria.consultar('calçado').then((listaCategorias)=>{
    console.log(listaCategorias);
})

const produto = new Produto(0, 'Tênis Infantl AllStar', 55.36, 159.99, 'indaterminada', 10, categoria);

console.log(produto.toJSON());