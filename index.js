const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

const allChef = require('./data/allChefData.json');
const allRecipe = require('./data/allRecipeData.json');

app.get('/', (req, res) => {
    res.send('Server is running');
})

app.get('/allChef', (req, res) => {
    res.send(allChef);
})

app.get('/allChef/:id', (req, res) => {
    const id = req.params.id;
    const selectChef = allChef.find(chef => chef._id == id);
    res.send(selectChef);
})

app.get('/allRecipe', (req, res) => {
    res.send(allRecipe);
})

app.listen(port, () => {
    console.log(`${port}`);
})
