import React from "react";
import "./style.css";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="home">
        <h1>Bem vindo ao site da tribo</h1>
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

export default Home;
