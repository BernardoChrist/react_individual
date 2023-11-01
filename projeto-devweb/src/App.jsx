import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Contato from "./Pages/Contato";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<h1>Pagina não encontrada</h1>} />
    </Routes>
  );
}

export default App;
