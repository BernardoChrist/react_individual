import React from "react";

const DeleteProduct = ({ item, excluirProduto }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <button onClick={() => excluirProduto(item.id)}>
        Remover produto do carrinho
      </button>
      {/*temos que utilizar o ArrowFunction quando passamos o parametro
            Passamos o item.id para pegar e excluir pelo id*/}
    </div>
  );
};

export default DeleteProduct;
