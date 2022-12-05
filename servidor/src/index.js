const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {json} = require('express');
const app = express();


app.use(morgan('dev'));

app.use(json());
app.use(cors());

app.use(require('./routes'));
app.use('/api', require('./routes/api'));

app.listen(3001, () => {
    console.log('SErvidor ejecutandose');
})
