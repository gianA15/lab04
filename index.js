const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación');
});

// Ruta para mostrar los clientes
app.get('/clientes', (req, res) => {
  const clientes = ['cliente 1', 'cliente 2', 'cliente 3'];
  res.send(clientes);
});

// Ruta para mostrar los productos
app.get('/productos', (req, res) => {
  const productos = ['producto 1', 'producto 2', 'producto 3'];
  res.send(productos);
});

// Configurar el puerto y la función para escuchar solicitudes
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
