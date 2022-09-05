const express = require('express')

const app = express();
const productsRouter= require('./routes/products')

app.listen(8080, ()=> console.log('server up'))
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Error');
  });
  
app.use(express.json())
app.use('/api',express.static('public'))

app.use('/api/productos', productsRouter)