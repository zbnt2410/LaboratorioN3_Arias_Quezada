const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Javierarias2410.',
  database: 'gestion_productos'
});

// Endpoints de Categorías
app.get('/api/categorias', (req, res) => {
    db.query('SELECT * FROM categorias', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener las categorías' });
        return;
      }
      res.json(result);
    });
  });
  
  app.post('/api/categorias', (req, res) => {
    const { nombre, descripcion } = req.body;
    db.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al crear la categoría' });
        return;
      }
      res.json(result);
    });
  });
  
  app.put('/api/categorias/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    db.query('UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al actualizar la categoría' });
        return;
      }
      res.json(result);
    });
  });
  
  app.delete('/api/categorias/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM categorias WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error(err);
        if (err.code === 'ER_ROW_IS_REFERENCED_2') {
          res.status(400).json({ error: 'No se puede eliminar la categoría porque hay productos asociados a ella.' });
        } else {
          res.status(500).json({ error: 'Error al eliminar la categoría' });
        }
        return;
      }
      res.json(result);
    });
  });
  
  // Endpoints de Productos
  app.get('/api/productos', (req, res) => {
    db.query('SELECT * FROM productos', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener los productos' });
        return;
      }
      res.json(result);
    });
  });
  
  app.post('/api/productos', (req, res) => {
    const { nombre, descripcion, precio, stock, categoriaId } = req.body;
    db.query('INSERT INTO productos (nombre, descripcion, precio, stock, categoriaId) VALUES (?, ?, ?, ?, ?)', [nombre, descripcion, precio, stock, categoriaId], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al crear el producto' });
        return;
      }
      res.json(result);
    });
  });
  
  app.put('/api/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, categoriaId } = req.body;
    db.query('UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, categoriaId = ? WHERE id = ?', [nombre, descripcion, precio, stock, categoriaId, id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al actualizar el producto' });
        return;
      }
      res.json(result);
    });
  });
  
  app.delete('/api/productos/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM productos WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al eliminar el producto' });
        return;
      }
      res.json(result);
    });
  });
  
  const PORT = 4000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));