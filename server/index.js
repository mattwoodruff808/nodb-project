const express = require('express');
const ctrl = require('./controller');
const app = express();

app.use(express.json());

//endpoints


const port = 3434;
app.listen(port, () => console.log(`Server is running on ${port}`))