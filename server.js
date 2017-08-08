'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/script', express.static(`${__dirname}/node_modules/`));
app.use(express.static('./public'));

app.listen(PORT, () => console.log(`You are on port: ${PORT}. Enjoy the Storm.`));
