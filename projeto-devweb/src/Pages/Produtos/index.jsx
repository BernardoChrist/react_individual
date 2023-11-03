import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import bola from "../../Image/bola.png";
import luva from "../../Image/luva.png";
import mochila from "../../Image/mochila.png";
import "./style.css";
import DeleteProduct from "../../Component/ExcluirProduto";

const Produtos = () => {
  //contantes do nome do produto
  const descLuva = "Luvas de Goleiro Nike Match";
  const descMochila = "Mochila Nike Brasilia";
  const descBola = "Bola de Futebol Nike";

  //constantes de useStates para cadastrar e excluir produto do carrinho
  const [novoProduto, setNovoProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");

  //constante da url da api externa, para utilizarmos o array de produtos
  const url = "https://6543ac0501b5e279de20c60f.mockapi.io/produtos";

  //função para o aray de produtos exibir na tela
  const getProdutos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setProdutos(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  //função de adicionar um produto ao carrinho
  const adicionar = async () => {
    //passando os atributos do objeto para criar na api
    const product = {
      title: novoProduto,
    };

    //utilizando o axios.post para adicionar ao array um novo produto
    try {
      const { data } = await axios.post(url, product);
      console.log(data);
      setProdutos([...produtos, data]);
      setNovoProduto("");
    } catch (err) {
      console.log(err);
    }
  };

  //função de excluir um produto do carrinho, passando o id como parametro
  async function excluirProduto(id) {
    console.log("Produto Excluir: " + id);
    try {
      //utilizamos o axios.delete para deletar o objeto na api
      const { data } = await axios.delete(`${url}/${id}`);
      console.log(data);
      //aqui estamos filtrando a constante produtos e filtrando tudo de id diferente do que foi passado,
      //para inserirmos em um novo array e poder setar a const de produtos sem o produto que foi excluído
      const arrayNovo = produtos.filter((item) => item.id != id);
      setProdutos(arrayNovo);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProdutos();
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="body">
        <h1>Lista de Produtos:</h1>
        <div className="produtos">
          <div>
            <img src={bola} alt="bola de futebol" />
            <p>{descBola}</p>
          </div>
          <div>
            <img src={luva} alt="bola de futebol" />
            <p>{descLuva}</p>
          </div>
          <div>
            <img src={mochila} alt="bola de futebol" />
            <p>{descMochila}</p>
          </div>
        </div>
        <hr className="hr" />
      </section>
      <section className="adicionarProduto">
        <h1>Carrinho de Compras:</h1>
        <div>
          <input
            type="text"
            placeholder="Digite o nome do produto"
            value={novoProduto}
            onChange={(e) => setNovoProduto(e.target.value)}
          />
          <button onClick={adicionar}>Adicionar ao carrinho</button>
        </div>
      </section>
      <section className="excluirProduto">
        <h2>Produtos do Carrinho:</h2>
        {produtos.map((item) => (
          <DeleteProduct
            key={item.id}
            item={item}
            excluirProduto={excluirProduto}
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Produtos;
