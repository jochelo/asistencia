const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));

app.use(require('./routes'));
app.use('/api', require('./routes/api'));

app.listen(3001, () => {
    console.log('SErvidor ejecutandose');
})
