import React from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="container mt-5 shadow-lg rounded">
      {/* Encabezado */}
      <Header />

      <div className="row">
        {/* Barra lateral izquierda */}
        <Sidebar />

        {/* Contenido principal */}
        <MainContent />
      </div>
    </div>
  );
};

export default App;
