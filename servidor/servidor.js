const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port',6000);
app.listen(app.get('port'));
console.log('Escuchando puerto: '+app.get('port'));

app.use(morgan('dev'));