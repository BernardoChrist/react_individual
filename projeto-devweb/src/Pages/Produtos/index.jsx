import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

const Produtos = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="home">
        <h1>Lista de Produtos:</h1>
        <hr />
        <p>
          Pela barra de navegação você consegue visitar outras areas do nosso
          site, recomendamos que visite a página de produtos
        </p>
        <hr />
      </section>
      <Footer />
    </div>
  );
};

export default Produtos;
