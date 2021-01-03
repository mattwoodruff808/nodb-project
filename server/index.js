const express = require('express');
const app = express();

app.use(express.json());

//endpoints


const port = 3434;
app.listen(port, () => console.log(`Server is running on ${port}`))