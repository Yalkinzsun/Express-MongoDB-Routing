const { get } = require('axios');
const express = require('express');
const bodyParser = require('body-parser') //извлекает всю часть тела входящего потока запросов и предоставляет его на req.body

const PORT = 4321;
const app = express();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:true}))
  .set('view engine', 'pug') //указание механизма визуализации (view engine) 
  .use('/my', require('./routes/my')(express))
  .use('/users', require('./routes/aprilusers')(express))
  .get('/', r => r.res.send('Добро пожаловать!'))
  .listen(PORT, () => console.log('Started!'));