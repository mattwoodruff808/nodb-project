const express = require('express');
const ctrl = require('./controller');
const app = express();

app.use(express.json());

//endpoints
app.get('/api/patrons', ctrl.getCurrentPatrons);
app.post('/api/patron', ctrl.addPatron);
app.put('/api/patron/:id', ctrl.switchDrink);
app.delete('/api/patron/:id', ctrl.removePatron);
app.get('/api/hoid-story', ctrl.getCurrentStory);
app.put('/api/hoid-story', ctrl.changeStory);


const port = 3434;
app.listen(port, () => console.log(`Server is coalescing on port ${port}`))