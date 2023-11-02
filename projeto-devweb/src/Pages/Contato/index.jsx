import React from "react";
import "./style.css";
import Header from "../../Component/Header";
import "../../Component/Header/style.css";
import Footer from "../../Component/Footer";

const Contato = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="contato">
        <h1>Contato</h1>
        <hr />
        <p>Telefone: 4002-8922</p>
        <p>Whatsapp: 2498889-9889</p>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contato;
