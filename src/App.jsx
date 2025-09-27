import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import { calcularSigno } from "./utils/signo";

export default function App() {
  const [resultado, setResultado] = useState(null);

  const handleCalcular = ({ nombre, fecha }) => {
    const r = calcularSigno(fecha);
    if (!r) {
      setResultado({ error: "Fecha inválida." });
      return;
    }
    setResultado({ nombre, ...r });
  };

  return (
    <div className="app">
      <h1>Horóscopo React</h1>
      <div className="layout">
        <div className="panel">
          <Formulario onCalcular={handleCalcular} />
        </div>
        <div className="panel">
          <Resultado data={resultado} />
        </div>
      </div>
    </div>
  );
}
