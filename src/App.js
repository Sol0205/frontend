// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/precios")
      .then((response) => {
        setProductos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Datos de Productos y Precios</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {productos.map((producto, index) => (
            <li key={index}>
              {producto.nombre} - {producto.precio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
