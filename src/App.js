// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [precios, setPrecios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/precios")
      .then((response) => {
        setPrecios(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Datos de Precios</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {precios.map((precio, index) => (
            <li key={index}>{precio}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
