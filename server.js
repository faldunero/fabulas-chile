const express = require('express');
const app = express();
const path = require('path');
const leyendas = require('./data/leyendas.json');

app.use(express.static('public'));

app.get('/api/leyendas', (req, res) => {
    res.json(leyendas);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));